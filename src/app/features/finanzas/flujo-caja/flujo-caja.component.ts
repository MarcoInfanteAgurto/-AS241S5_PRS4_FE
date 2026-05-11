import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FlujoCaja {
  id: string;
  fiscalPeriod: string;
  openingBalance: number;
  totalInflows: number;
  totalOutflows: number;
  closingBalance: number;
  currency: string;
  status: string;
}

@Component({
  selector: 'app-flujo-caja',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.scss']
})
export class FlujoCajaComponent implements OnInit {
  items: FlujoCaja[] = [];
  filteredItems: FlujoCaja[] = [];
  paginatedItems: FlujoCaja[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['CERRADO', 'ABIERTO', 'PROYECTADO'];

  showModal = false;
  editingItem: FlujoCaja | null = null;
  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  form: Partial<FlujoCaja> = {};

  get stats() {
    return {
      periodos: this.items.length,
      saldoApertura: this.items.reduce((acc, i) => acc + i.openingBalance, 0),
      entradasTotal: this.items.reduce((acc, i) => acc + i.totalInflows, 0),
      salidasTotal: this.items.reduce((acc, i) => acc + i.totalOutflows, 0)
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

  openEditModal(item: FlujoCaja) {
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
        const updated = { ...this.editingItem, ...this.form } as FlujoCaja;
        updated.closingBalance = (updated.openingBalance || 0) + (updated.totalInflows || 0) - (updated.totalOutflows || 0);
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
