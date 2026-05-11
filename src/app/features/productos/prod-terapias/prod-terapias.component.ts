import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PrecioTerapia {
  id: string;
  tipoCliente: string;
  specialty: string;
  precio: number;
  status: string;
}

@Component({
  selector: 'app-prod-terapias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-terapias.component.html',
  styleUrls: ['./prod-terapias.component.scss']
})
export class ProdTerapiasComponent implements OnInit {
  Math = Math;

  terapias: PrecioTerapia[] = [];
  filteredTerapias: PrecioTerapia[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingTerapia: PrecioTerapia | null = null;
  formData: Partial<PrecioTerapia> = {};

  stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
  statusOptions = ['ACTIVE', 'INACTIVE'];
  tipoClienteOptions = ['Beneficiario Social', 'Paciente Externo', 'Convenio'];

  ngOnInit(): void {
    this.applyFilters();
  }

  calculateStats(): void {
    this.stats.total = this.filteredTerapias.length;
    this.stats.active = this.filteredTerapias.filter(t => t.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredTerapias.filter(t => t.status === 'INACTIVE').length;
    const sum = this.filteredTerapias.reduce((acc, t) => acc + t.precio, 0);
    this.stats.precioPromedio = this.filteredTerapias.length ? sum / this.filteredTerapias.length : 0;
  }

  applyFilters(): void {
    this.filteredTerapias = this.terapias.filter(t => {
      const matchesSearch = !this.searchTerm ||
        t.tipoCliente.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
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

  get paginatedTerapias(): PrecioTerapia[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTerapias.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTerapias.length / this.pageSize) || 1;
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
    this.editingTerapia = null;
    this.formData = { status: 'ACTIVE', precio: 0 };
    this.showModal = true;
  }

  openEditModal(terapia: PrecioTerapia): void {
    this.editingTerapia = terapia;
    this.formData = { ...terapia };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingTerapia = null;
    this.formData = {};
  }

  saveTerapia(): void {
    if (this.editingTerapia) {
      const idx = this.terapias.findIndex(t => t.id === this.editingTerapia!.id);
      if (idx !== -1) this.terapias[idx] = { ...this.terapias[idx], ...this.formData };
    } else {
      this.terapias.unshift({
        id: `TPR${String(this.terapias.length + 1).padStart(3, '0')}`,
        tipoCliente: this.formData.tipoCliente || '',
        specialty: this.formData.specialty || '',
        precio: this.formData.precio || 0,
        status: this.formData.status || 'ACTIVE'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteTerapia(id: string): void {
    if (confirm('¿Está seguro de eliminar este precio de terapia?')) {
      this.terapias = this.terapias.filter(t => t.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
