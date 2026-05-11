import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Compra {
  id: string;
  numeroCompra: string;
  proveedor: string;
  description: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  transactionDate: string;
  fiscalPeriod: string;
  status: string;
}

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  items: Compra[] = [];
  filteredItems: Compra[] = [];
  paginatedItems: Compra[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['PAID', 'PENDING', 'APPROVED', 'REJECTED'];

  showModal = false;
  editingItem: Compra | null = null;
  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  form: Partial<Compra> = {};

  get stats() {
    return {
      total: this.items.length,
      pagadas: this.items.filter(i => i.status === 'PAID').length,
      pendientes: this.items.filter(i => i.status === 'PENDING').length,
      montoTotal: this.items.reduce((acc, i) => acc + i.amount, 0)
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.description.toLowerCase().includes(term) ||
        i.proveedor.toLowerCase().includes(term) ||
        i.numeroCompra.toLowerCase().includes(term)
      );
    }
    if (this.statusFilter !== 'all') result = result.filter(i => i.status === this.statusFilter);
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
    this.applyFilters();
  }

  toggleMenu(id: string) { this.openMenuId = this.openMenuId === id ? null : id; }

  openAddModal() {
    this.editingItem = null;
    this.form = { currency: 'PEN', status: 'PENDING' };
    this.showModal = true;
  }

  openEditModal(item: Compra) {
    this.editingItem = item;
    this.form = { ...item };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal() { this.showModal = false; this.editingItem = null; this.form = {}; }

  saveItem() {
    if (this.editingItem) {
      const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
      if (idx !== -1) this.items[idx] = { ...this.editingItem, ...this.form } as Compra;
    } else {
      this.items.push({
        id: Date.now().toString(),
        numeroCompra: this.form.numeroCompra || '',
        proveedor: this.form.proveedor || '',
        description: this.form.description || '',
        amount: this.form.amount || 0,
        currency: this.form.currency || 'PEN',
        paymentMethod: this.form.paymentMethod || '',
        transactionDate: this.form.transactionDate || '',
        fiscalPeriod: this.form.fiscalPeriod || '',
        status: this.form.status || 'PENDING'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteItem(id: string) { this.items = this.items.filter(i => i.id !== id); this.applyFilters(); }

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      APPROVED: 'Aprobado', PAID: 'Pagado', PENDING: 'Pendiente', REJECTED: 'Rechazado',
      CERRADO: 'Cerrado', ABIERTO: 'Abierto', PROYECTADO: 'Proyectado',
      ACTIVE: 'Activo', INACTIVE: 'Inactivo', CONSIGNADO: 'Consignado', DONADO: 'Donado', REVOCADO: 'Revocado'
    };
    return map[status] || status;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      APPROVED: 'success', PAID: 'success', ACTIVE: 'success', CONSIGNADO: 'success',
      PENDING: 'warning', ABIERTO: 'warning', PROYECTADO: 'info',
      REJECTED: 'danger', INACTIVE: 'danger', REVOCADO: 'danger', CERRADO: 'info', DONADO: 'info'
    };
    return map[status] || 'info';
  }
}
