import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RepCompra {
  id: string;
  numeroCompra: string;
  proveedor: string;
  items: string;
  total: number;
  estado: string;
  tipo: string;
  fecha: string;
}

@Component({
  selector: 'app-rep-compras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rep-compras.component.html',
  styleUrls: ['./rep-compras.component.scss']
})
export class RepComprasComponent implements OnInit {
  items: RepCompra[] = [];
  filteredItems: RepCompra[] = [];
  paginatedItems: RepCompra[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['CONSIGNADO', 'REVOCADO', 'PENDING'];

  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  get stats() {
    return {
      total: this.items.length,
      consignadas: this.items.filter(i => i.estado === 'CONSIGNADO').length,
      revocadas: this.items.filter(i => i.estado === 'REVOCADO').length,
      montoTotal: this.items.reduce((acc, i) => acc + i.total, 0)
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.numeroCompra.toLowerCase().includes(term) ||
        i.proveedor.toLowerCase().includes(term) ||
        i.items.toLowerCase().includes(term)
      );
    }
    if (this.statusFilter !== 'all') result = result.filter(i => i.estado === this.statusFilter);
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

  verDetalle(item: RepCompra) { this.openMenuId = null; }

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
