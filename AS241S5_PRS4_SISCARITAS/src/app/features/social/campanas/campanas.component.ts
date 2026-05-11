import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Campana {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  attendees?: number;
  status: string;
  responsible: string;
  campaignNumber?: string;
  code?: string;
  campaignName?: string;
  domain?: string;
  progress?: string;
  budgetUse?: string;
}

@Component({
  selector: 'app-campanas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.scss']
})
export class CampanasComponent implements OnInit {
  campanas: Campana[] = [];
  filteredCampanas: Campana[] = [];
  searchTerm = '';
  statusFilter = 'all';
  typeFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingCampana: Campana | null = null;
  formData: Partial<Campana> = {};

  stats = {
    total: 0,
    active: 0,
    completed: 0,
    attendees: 0
  };

  typeOptions = ['Salud', 'Educación', 'Alimentación', 'Vacunación', 'Prevención'];
  statusOptions = ['SCHEDULED', 'ACTIVE', 'COMPLETED', 'CANCELLED'];

  ngOnInit(): void {
    this.filteredCampanas = [...this.campanas];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredCampanas.length;
    this.stats.active = this.filteredCampanas.filter(c => c.status === 'ACTIVE').length;
    this.stats.completed = this.filteredCampanas.filter(c => c.status === 'COMPLETED').length;
    this.stats.attendees = this.filteredCampanas.reduce((sum, c) => sum + (c.attendees || 0), 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onTypeFilterChange(type: string): void {
    this.typeFilter = type;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredCampanas = this.campanas.filter(campana => {
      const matchesSearch = !this.searchTerm || 
        campana.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        campana.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || campana.status === this.statusFilter;
      const matchesType = this.typeFilter === 'all' || campana.type === this.typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.typeFilter = 'all';
    this.applyFilters();
  }

  get paginatedCampanas(): Campana[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredCampanas.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCampanas.length / this.pageSize);
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
    this.editingCampana = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(campana: Campana): void {
    this.editingCampana = campana;
    this.formData = { ...campana };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingCampana = null;
    this.formData = {};
  }

  saveCampana(): void {
    if (this.editingCampana) {
      const index = this.campanas.findIndex(c => c.id === this.editingCampana!.id);
      if (index !== -1) {
        this.campanas[index] = { ...this.campanas[index], ...this.formData };
      }
    } else {
      const newCampana: Campana = {
        id: `CAM${String(this.campanas.length + 1).padStart(3, '0')}`,
        name: this.formData.name || '',
        type: this.formData.type || 'Salud',
        startDate: this.formData.startDate || new Date().toISOString().split('T')[0],
        endDate: this.formData.endDate || new Date().toISOString().split('T')[0],
        location: this.formData.location || '',
        responsible: this.formData.responsible || '',
        status: this.formData.status || 'SCHEDULED',
        attendees: 0
      };
      this.campanas.unshift(newCampana);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteCampana(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta campaña?')) {
      this.campanas = this.campanas.filter(c => c.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'SCHEDULED': 'Programada',
      'ACTIVE': 'Activa',
      'COMPLETED': 'Completada',
      'CANCELLED': 'Cancelada'
    };
    return labels[status] || status;
  }
}
