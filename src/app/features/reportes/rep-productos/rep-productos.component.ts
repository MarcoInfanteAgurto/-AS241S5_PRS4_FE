import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RepProducto {
  id: string;
  productCode: string;
  productName: string;
  category: string;
  unit: string;
  estimatedValue: number;
  stock: number;
  minStock: number;
  status: string;
}

@Component({
  selector: 'app-rep-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rep-productos.component.html',
  styleUrls: ['./rep-productos.component.scss']
})
export class RepProductosComponent implements OnInit {
  items: RepProducto[] = [];
  filteredItems: RepProducto[] = [];
  paginatedItems: RepProducto[] = [];

  searchTerm = '';
  statusFilter = 'all';
  categoryFilter = 'all';

  statusOptions = ['ACTIVE', 'INACTIVE'];
  categoryOptions: string[] = [];

  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  get stats() {
    return {
      total: this.items.length,
      activos: this.items.filter(i => i.status === 'ACTIVE').length,
      stockBajo: this.items.filter(i => i.stock > 0 && i.stock <= i.minStock).length,
      sinStock: this.items.filter(i => i.stock === 0).length
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.productName.toLowerCase().includes(term) ||
        i.productCode.toLowerCase().includes(term) ||
        i.category.toLowerCase().includes(term)
      );
    }
    if (this.statusFilter !== 'all') result = result.filter(i => i.status === this.statusFilter);
    if (this.categoryFilter !== 'all') result = result.filter(i => i.category === this.categoryFilter);
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

  toggleMenu(id: string) { this.openMenuId = this.openMenuId === id ? null : id; }

  verDetalle(item: RepProducto) { this.openMenuId = null; }

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
