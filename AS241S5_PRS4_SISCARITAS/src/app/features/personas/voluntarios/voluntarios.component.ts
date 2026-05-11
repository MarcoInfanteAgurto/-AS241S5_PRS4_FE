import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Voluntario {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  skills: string;
  hoursWorked: number;
  rating: string;
  status: string;
  email?: string;
  phone?: string;
  area?: string;
  joinDate?: string;
}

@Component({
  selector: 'app-voluntarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {
  voluntarios: Voluntario[] = [];
  filteredVoluntarios: Voluntario[] = [];
  searchTerm = '';
  statusFilter = 'all';
  areaFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingVoluntario: Voluntario | null = null;
  formData: Partial<Voluntario> = {};

  stats = {
    total: 0,
    active: 0,
    totalHours: 0,
    thisMonth: 0
  };

  areaOptions = ['Salud', 'Educación', 'Alimentación', 'Logística', 'Administración'];
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredVoluntarios = [...this.voluntarios];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredVoluntarios.length;
    this.stats.active = this.filteredVoluntarios.filter(v => v.status === 'ACTIVE').length;
    this.stats.totalHours = this.filteredVoluntarios.reduce((sum, v) => sum + v.hoursWorked, 0);
    this.stats.thisMonth = this.filteredVoluntarios.filter(v => {
      if (!v.joinDate) return false;
      const date = new Date(v.joinDate);
      const now = new Date();
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onAreaFilterChange(area: string): void {
    this.areaFilter = area;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVoluntarios = this.voluntarios.filter(voluntario => {
      const matchesSearch = !this.searchTerm || 
        voluntario.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        voluntario.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (voluntario.email && voluntario.email.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesStatus = this.statusFilter === 'all' || voluntario.status === this.statusFilter;
      const matchesArea = this.areaFilter === 'all' || voluntario.area === this.areaFilter;

      return matchesSearch && matchesStatus && matchesArea;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.areaFilter = 'all';
    this.applyFilters();
  }

  get paginatedVoluntarios(): Voluntario[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredVoluntarios.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredVoluntarios.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  toggleMenu(id: string): void {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  openAddModal(): void {
    this.editingVoluntario = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(voluntario: Voluntario): void {
    this.editingVoluntario = voluntario;
    this.formData = { ...voluntario };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingVoluntario = null;
    this.formData = {};
  }

  saveVoluntario(): void {
    if (this.editingVoluntario) {
      const index = this.voluntarios.findIndex(v => v.id === this.editingVoluntario!.id);
      if (index !== -1) {
        this.voluntarios[index] = { ...this.voluntarios[index], ...this.formData };
      }
    } else {
      const newVoluntario: Voluntario = {
        id: `VOL${String(this.voluntarios.length + 1).padStart(3, '0')}`,
        firstName: this.formData.firstName || '',
        lastName: this.formData.lastName || '',
        dni: this.formData.dni || '',
        skills: this.formData.skills || '',
        hoursWorked: this.formData.hoursWorked || 0,
        rating: this.formData.rating || '',
        status: this.formData.status || 'ACTIVE',
        email: this.formData.email || '',
        phone: this.formData.phone || '',
        area: this.formData.area || 'Salud',
        joinDate: new Date().toISOString()
      };
      this.voluntarios.unshift(newVoluntario);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteVoluntario(id: string): void {
    if (confirm('¿Estás seguro de eliminar este voluntario?')) {
      this.voluntarios = this.voluntarios.filter(v => v.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(voluntario: Voluntario): string {
    return `${voluntario.firstName[0]}${voluntario.lastName[0]}`.toUpperCase();
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
