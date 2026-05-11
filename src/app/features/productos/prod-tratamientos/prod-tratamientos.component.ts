import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProdTratamiento {
  id: string;
  nombre: string;
  specialty: string;
  precio: number;
  descripcion?: string;
  status: string;
}

@Component({
  selector: 'app-prod-tratamientos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-tratamientos.component.html',
  styleUrls: ['./prod-tratamientos.component.scss']
})
export class ProdTratamientosComponent implements OnInit {
  Math = Math;

  tratamientos: ProdTratamiento[] = [];
  filteredTratamientos: ProdTratamiento[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingTratamiento: ProdTratamiento | null = null;
  formData: Partial<ProdTratamiento> = {};

  stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.applyFilters();
  }

  calculateStats(): void {
    this.stats.total = this.filteredTratamientos.length;
    this.stats.active = this.filteredTratamientos.filter(t => t.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredTratamientos.filter(t => t.status === 'INACTIVE').length;
    const sum = this.filteredTratamientos.reduce((acc, t) => acc + t.precio, 0);
    this.stats.precioPromedio = this.filteredTratamientos.length ? sum / this.filteredTratamientos.length : 0;
  }

  applyFilters(): void {
    this.filteredTratamientos = this.tratamientos.filter(t => {
      const matchesSearch = !this.searchTerm ||
        t.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || t.status === this.statusFilter;
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

  get paginatedTratamientos(): ProdTratamiento[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTratamientos.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTratamientos.length / this.pageSize) || 1;
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
    this.editingTratamiento = null;
    this.formData = { status: 'ACTIVE', precio: 0 };
    this.showModal = true;
  }

  openEditModal(tratamiento: ProdTratamiento): void {
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
      const idx = this.tratamientos.findIndex(t => t.id === this.editingTratamiento!.id);
      if (idx !== -1) this.tratamientos[idx] = { ...this.tratamientos[idx], ...this.formData };
    } else {
      this.tratamientos.unshift({
        id: `TRA${String(this.tratamientos.length + 1).padStart(3, '0')}`,
        nombre: this.formData.nombre || '',
        specialty: this.formData.specialty || '',
        precio: this.formData.precio || 0,
        descripcion: this.formData.descripcion || '',
        status: this.formData.status || 'ACTIVE'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteTratamiento(id: string): void {
    if (confirm('¿Está seguro de eliminar este tratamiento?')) {
      this.tratamientos = this.tratamientos.filter(t => t.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
