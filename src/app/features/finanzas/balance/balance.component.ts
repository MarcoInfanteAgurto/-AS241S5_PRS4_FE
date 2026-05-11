import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BalanceItem {
  id: string;
  fiscalPeriod: string;
  totalIngresos: number;
  totalEgresos: number;
  totalGastos: number;
  balance: number;
  currency: string;
  status: string;
}

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  items: BalanceItem[] = [];
  filteredItems: BalanceItem[] = [];
  paginatedItems: BalanceItem[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['CERRADO', 'ABIERTO', 'PROYECTADO'];

  showModal = false;
  editingItem: BalanceItem | null = null;
  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  form: Partial<BalanceItem> = {};

  get stats() {
    return {
      periodos: this.items.length,
      cerrados: this.items.filter(i => i.status === 'CERRADO').length,
      abiertos: this.items.filter(i => i.status === 'ABIERTO').length,
      balanceTotal: this.items.reduce((acc, i) => acc + i.balance, 0)
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i => i.fiscalPeriod.toLowerCase().includes(term));
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

  openEditModal(item: BalanceItem) {
    this.editingItem = item;
    this.form = { ...item };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal() { this.showModal = false; this.editingItem = null; this.form = {}; }

  saveItem() {
    if (this.editingItem) {
      const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
      if (idx !== -1) {
        const updated = { ...this.editingItem, ...this.form } as BalanceItem;
        updated.balance = (updated.totalIngresos || 0) - (updated.totalEgresos || 0) - (updated.totalGastos || 0);
        this.items[idx] = updated;
      }
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
