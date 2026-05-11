import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ingreso {
  id: string;
  transactionType: string;
  category: string;
  amount: number;
  currency: string;
  description: string;
  paymentMethod: string;
  transactionDate: string;
  fiscalPeriod: string;
  status: string;
}

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {
  items: Ingreso[] = [];
  filteredItems: Ingreso[] = [];
  paginatedItems: Ingreso[] = [];

  searchTerm = '';
  statusFilter = 'all';
  categoryFilter = 'all';

  statusOptions = ['APPROVED', 'PAID', 'PENDING', 'REJECTED'];
  categoryOptions = ['DONACION', 'SUBVENCION', 'OTRO'];

  showModal = false;
  editingItem: Ingreso | null = null;
  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  form: Partial<Ingreso> = {};

  get stats() {
    return {
      total: this.items.length,
      aprobados: this.items.filter(i => i.status === 'APPROVED').length,
      pendientes: this.items.filter(i => i.status === 'PENDING').length,
      montoTotal: this.items.reduce((acc, i) => acc + i.amount, 0)
    };
  }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.description.toLowerCase().includes(term) ||
        i.category.toLowerCase().includes(term) ||
        i.fiscalPeriod.toLowerCase().includes(term)
      );
    }
    if (this.statusFilter !== 'all') {
      result = result.filter(i => i.status === this.statusFilter);
    }
    if (this.categoryFilter !== 'all') {
      result = result.filter(i => i.category === this.categoryFilter);
    }
    this.filteredItems = result;
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.max(1, Math.ceil(this.filteredItems.length / this.pageSize));
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedItems = this.filteredItems.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagination();
  }

  clearFilters() {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.categoryFilter = 'all';
    this.applyFilters();
  }

  toggleMenu(id: string) {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  openAddModal() {
    this.editingItem = null;
    this.form = { transactionType: 'INGRESO', currency: 'PEN', status: 'PENDING' };
    this.showModal = true;
  }

  openEditModal(item: Ingreso) {
    this.editingItem = item;
    this.form = { ...item };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal() {
    this.showModal = false;
    this.editingItem = null;
    this.form = {};
  }

  saveItem() {
    if (this.editingItem) {
      const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
      if (idx !== -1) this.items[idx] = { ...this.editingItem, ...this.form } as Ingreso;
    } else {
      const newItem: Ingreso = {
        id: Date.now().toString(),
        transactionType: 'INGRESO',
        category: this.form.category || '',
        amount: this.form.amount || 0,
        currency: this.form.currency || 'PEN',
        description: this.form.description || '',
        paymentMethod: this.form.paymentMethod || '',
        transactionDate: this.form.transactionDate || '',
        fiscalPeriod: this.form.fiscalPeriod || '',
        status: this.form.status || 'PENDING'
      };
      this.items.push(newItem);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteItem(id: string) {
    this.items = this.items.filter(i => i.id !== id);
    this.applyFilters();
  }

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      APPROVED: 'Aprobado', PAID: 'Pagado', PENDING: 'Pendiente',
      REJECTED: 'Rechazado', CERRADO: 'Cerrado', ABIERTO: 'Abierto',
      PROYECTADO: 'Proyectado', ACTIVE: 'Activo', INACTIVE: 'Inactivo',
      CONSIGNADO: 'Consignado', DONADO: 'Donado', REVOCADO: 'Revocado'
    };
    return map[status] || status;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      APPROVED: 'success', PAID: 'success', ACTIVE: 'success', CONSIGNADO: 'success',
      PENDING: 'warning', ABIERTO: 'warning', PROYECTADO: 'info',
      REJECTED: 'danger', INACTIVE: 'danger', REVOCADO: 'danger',
      CERRADO: 'info', DONADO: 'info'
    };
    return map[status] || 'info';
  }

  ngOnInit() {
    this.applyFilters();
  }
}
