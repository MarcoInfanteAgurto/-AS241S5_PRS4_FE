import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProdMedicamento {
  id: string;
  denominacionComercial: string;
  denominacionGenerica: string;
  categoria: string;
  laboratorio: string;
  costoUnitario: number;
  precioVenta: number;
  vencimiento: string;
  status: string;
}

@Component({
  selector: 'app-prod-medicamentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-medicamentos.component.html',
  styleUrls: ['./prod-medicamentos.component.scss']
})
export class ProdMedicamentosComponent implements OnInit {
  Math = Math;

  medicamentos: ProdMedicamento[] = [];
  filteredMedicamentos: ProdMedicamento[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingMedicamento: ProdMedicamento | null = null;
  formData: Partial<ProdMedicamento> = {};

  stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
  statusOptions = ['ACTIVE', 'INACTIVE'];
  categoriaOptions = ['TABLETA', 'CAPSULA', 'JARABE', 'INYECTABLE', 'CREMA', 'GOTAS'];

  ngOnInit(): void {
    this.applyFilters();
  }

  calculateStats(): void {
    this.stats.total = this.filteredMedicamentos.length;
    this.stats.active = this.filteredMedicamentos.filter(m => m.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredMedicamentos.filter(m => m.status === 'INACTIVE').length;
    const sum = this.filteredMedicamentos.reduce((acc, m) => acc + m.precioVenta, 0);
    this.stats.precioPromedio = this.filteredMedicamentos.length ? sum / this.filteredMedicamentos.length : 0;
  }

  applyFilters(): void {
    this.filteredMedicamentos = this.medicamentos.filter(m => {
      const matchesSearch = !this.searchTerm ||
        m.denominacionComercial.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        m.denominacionGenerica.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        m.laboratorio.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || m.status === this.statusFilter;
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

  get paginatedMedicamentos(): ProdMedicamento[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredMedicamentos.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMedicamentos.length / this.pageSize) || 1;
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
    this.editingMedicamento = null;
    this.formData = { status: 'ACTIVE', costoUnitario: 0, precioVenta: 0 };
    this.showModal = true;
  }

  openEditModal(med: ProdMedicamento): void {
    this.editingMedicamento = med;
    this.formData = { ...med };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingMedicamento = null;
    this.formData = {};
  }

  saveMedicamento(): void {
    if (this.editingMedicamento) {
      const idx = this.medicamentos.findIndex(m => m.id === this.editingMedicamento!.id);
      if (idx !== -1) this.medicamentos[idx] = { ...this.medicamentos[idx], ...this.formData };
    } else {
      this.medicamentos.unshift({
        id: `MED${String(this.medicamentos.length + 1).padStart(3, '0')}`,
        denominacionComercial: this.formData.denominacionComercial || '',
        denominacionGenerica: this.formData.denominacionGenerica || '',
        categoria: this.formData.categoria || 'TABLETA',
        laboratorio: this.formData.laboratorio || '',
        costoUnitario: this.formData.costoUnitario || 0,
        precioVenta: this.formData.precioVenta || 0,
        vencimiento: this.formData.vencimiento || '',
        status: this.formData.status || 'ACTIVE'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteMedicamento(id: string): void {
    if (confirm('¿Está seguro de eliminar este medicamento?')) {
      this.medicamentos = this.medicamentos.filter(m => m.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
