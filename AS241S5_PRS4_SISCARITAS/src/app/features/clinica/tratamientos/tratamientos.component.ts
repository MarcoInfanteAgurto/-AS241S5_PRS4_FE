import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tratamiento {
  id: string;
  nombre: string;
  specialty: string;
  precio: number;
  descripcion?: string;
  status: string;
}

@Component({
  selector: 'app-tratamientos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.scss']
})
export class TratamientosComponent implements OnInit {
  tratamientos: Tratamiento[] = [];
  filteredTratamientos: Tratamiento[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingTratamiento: Tratamiento | null = null;
  formData: Partial<Tratamiento> = {};
  Math = Math;

  stats = {
    total: 0,
    active: 0,
    inactive: 0,
    precioPromedio: 0
  };

  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredTratamientos = [...this.tratamientos];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredTratamientos.length;
    this.stats.active = this.filteredTratamientos.filter(t => t.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredTratamientos.filter(t => t.status === 'INACTIVE').length;
    if (this.filteredTratamientos.length > 0) {
      const sum = this.filteredTratamientos.reduce((acc, t) => acc + t.precio, 0);
      this.stats.precioPromedio = sum / this.filteredTratamientos.length;
    } else {
      this.stats.precioPromedio = 0;
    }
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredTratamientos = this.tratamientos.filter(tratamiento => {
      const matchesSearch = !this.searchTerm || 
        tratamiento.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        tratamiento.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || tratamiento.status === this.statusFilter;

      return matchesSearch && matchesStatus;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.applyFilters();
  }

  get paginatedTratamientos(): Tratamiento[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredTratamientos.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTratamientos.length / this.pageSize);
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
    this.editingTratamiento = null;
    this.formData = {
      status: 'ACTIVE',
      precio: 0
    };
    this.showModal = true;
  }

  openEditModal(tratamiento: Tratamiento): void {
    this.editingTratamiento = tratamiento;
    this.formData = { ...tratamiento };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingTratamiento = null;
    this.formData = {};
  }

  saveTratamiento(): void {
    if (this.editingTratamiento) {
      const index = this.tratamientos.findIndex(t => t.id === this.editingTratamiento!.id);
      if (index !== -1) {
        this.tratamientos[index] = { ...this.tratamientos[index], ...this.formData };
      }
    } else {
      const newTratamiento: Tratamiento = {
        id: `TRA${String(this.tratamientos.length + 1).padStart(3, '0')}`,
        nombre: this.formData.nombre || '',
        specialty: this.formData.specialty || '',
        precio: this.formData.precio || 0,
        descripcion: this.formData.descripcion || '',
        status: this.formData.status || 'ACTIVE'
      };
      this.tratamientos.unshift(newTratamiento);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteTratamiento(id: string): void {
    if (confirm('¿Estás seguro de eliminar este tratamiento?')) {
      this.tratamientos = this.tratamientos.filter(t => t.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
