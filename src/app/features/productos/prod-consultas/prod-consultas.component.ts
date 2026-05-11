import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PrecioConsulta {
  id: string;
  specialty: string;
  precio: number;
  status: string;
}

@Component({
  selector: 'app-prod-consultas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-consultas.component.html',
  styleUrls: ['./prod-consultas.component.scss']
})
export class ProdConsultasComponent implements OnInit {
  Math = Math;

  consultas: PrecioConsulta[] = [];
  filteredConsultas: PrecioConsulta[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingConsulta: PrecioConsulta | null = null;
  formData: Partial<PrecioConsulta> = {};

  stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.applyFilters();
  }

  calculateStats(): void {
    this.stats.total = this.filteredConsultas.length;
    this.stats.active = this.filteredConsultas.filter(c => c.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredConsultas.filter(c => c.status === 'INACTIVE').length;
    const sum = this.filteredConsultas.reduce((acc, c) => acc + c.precio, 0);
    this.stats.precioPromedio = this.filteredConsultas.length ? sum / this.filteredConsultas.length : 0;
  }

  applyFilters(): void {
    this.filteredConsultas = this.consultas.filter(c => {
      const matchesSearch = !this.searchTerm ||
        c.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || c.status === this.statusFilter;
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

  get paginatedConsultas(): PrecioConsulta[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredConsultas.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredConsultas.length / this.pageSize) || 1;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  toggleMenu(id: string): void {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  openAddModal(): void {
    this.editingConsulta = null;
    this.formData = { status: 'ACTIVE', precio: 0 };
    this.showModal = true;
  }

  openEditModal(consulta: PrecioConsulta): void {
    this.editingConsulta = consulta;
    this.formData = { ...consulta };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingConsulta = null;
    this.formData = {};
  }

  saveConsulta(): void {
    if (this.editingConsulta) {
      const idx = this.consultas.findIndex(c => c.id === this.editingConsulta!.id);
      if (idx !== -1) this.consultas[idx] = { ...this.consultas[idx], ...this.formData };
    } else {
      this.consultas.unshift({
        id: `PCO${String(this.consultas.length + 1).padStart(3, '0')}`,
        specialty: this.formData.specialty || '',
        precio: this.formData.precio || 0,
        status: this.formData.status || 'ACTIVE'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteConsulta(id: string): void {
    if (confirm('¿Está seguro de eliminar este precio de consulta?')) {
      this.consultas = this.consultas.filter(c => c.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
