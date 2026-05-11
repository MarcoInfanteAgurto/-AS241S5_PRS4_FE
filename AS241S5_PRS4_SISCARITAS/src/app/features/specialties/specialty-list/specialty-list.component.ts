import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Specialty {
  id: string;
  specialtyCode: string;
  specialtyName: string;
  type: string;
  budget: number;
  spent: number;
  color: string;
  status: string;
}

@Component({
  selector: 'app-specialty-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.scss']
})
export class SpecialtyListComponent implements OnInit {
  specialties: Specialty[] = [];
  filteredSpecialties: Specialty[] = [];
  searchTerm = '';
  typeFilter = 'all';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingSpecialty: Specialty | null = null;
  formData: Partial<Specialty> = {};
  Math = Math;

  stats = {
    total: 0,
    social: 0,
    clinica: 0,
    presupuestoTotal: 0
  };

  typeOptions = ['SOCIAL', 'CLINICA'];
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredSpecialties = [...this.specialties];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredSpecialties.length;
    this.stats.social = this.filteredSpecialties.filter(s => s.type === 'SOCIAL').length;
    this.stats.clinica = this.filteredSpecialties.filter(s => s.type === 'CLINICA').length;
    this.stats.presupuestoTotal = this.filteredSpecialties.reduce((sum, s) => sum + s.budget, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onTypeFilterChange(type: string): void {
    this.typeFilter = type;
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredSpecialties = this.specialties.filter(specialty => {
      const matchesSearch = !this.searchTerm || 
        specialty.specialtyName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        specialty.specialtyCode.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesType = this.typeFilter === 'all' || specialty.type === this.typeFilter;
      const matchesStatus = this.statusFilter === 'all' || specialty.status === this.statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.typeFilter = 'all';
    this.statusFilter = 'all';
    this.applyFilters();
  }

  get paginatedSpecialties(): Specialty[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredSpecialties.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSpecialties.length / this.pageSize);
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
    this.editingSpecialty = null;
    this.formData = {
      status: 'ACTIVE',
      budget: 0,
      spent: 0,
      color: '#4CAF50',
      type: 'SOCIAL'
    };
    this.showModal = true;
  }

  openEditModal(specialty: Specialty): void {
    this.editingSpecialty = specialty;
    this.formData = { ...specialty };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingSpecialty = null;
    this.formData = {};
  }

  saveSpecialty(): void {
    if (this.editingSpecialty) {
      const index = this.specialties.findIndex(s => s.id === this.editingSpecialty!.id);
      if (index !== -1) {
        this.specialties[index] = { ...this.specialties[index], ...this.formData };
      }
    } else {
      const newSpecialty: Specialty = {
        id: `ESP${String(this.specialties.length + 1).padStart(3, '0')}`,
        specialtyCode: this.formData.specialtyCode || '',
        specialtyName: this.formData.specialtyName || '',
        type: this.formData.type || 'SOCIAL',
        budget: this.formData.budget || 0,
        spent: this.formData.spent || 0,
        color: this.formData.color || '#4CAF50',
        status: this.formData.status || 'ACTIVE'
      };
      this.specialties.unshift(newSpecialty);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteSpecialty(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta especialidad?')) {
      this.specialties = this.specialties.filter(s => s.id !== id);
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

  getTypeLabel(type: string): string {
    return type === 'SOCIAL' ? 'Social' : 'Clínica';
  }

  getPercentageSpent(specialty: Specialty): number {
    if (specialty.budget === 0) return 0;
    return (specialty.spent / specialty.budget) * 100;
  }
}
