import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RepConsulta {
  id: string;
  ticket: string;
  fecha: string;
  pacienteNombre: string;
  areaNombre: string;
  personalNombre: string;
  total: number;
  estado: string;
  usaTarjeta: boolean;
}

@Component({
  selector: 'app-rep-consultas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rep-consultas.component.html',
  styleUrls: ['./rep-consultas.component.scss']
})
export class RepConsultasComponent implements OnInit {
  items: RepConsulta[] = [];
  filteredItems: RepConsulta[] = [];
  paginatedItems: RepConsulta[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['CONSIGNADO', 'DONADO', 'REVOCADO', 'PENDING'];

  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  get stats() {
    return {
      total: this.items.length,
      consignadas: this.items.filter(i => i.estado === 'CONSIGNADO').length,
      donadas: this.items.filter(i => i.estado === 'DONADO').length,
      montoTotal: this.items.reduce((acc, i) => acc + i.total, 0)
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.ticket.toLowerCase().includes(term) ||
        i.pacienteNombre.toLowerCase().includes(term) ||
        i.areaNombre.toLowerCase().includes(term) ||
        i.personalNombre.toLowerCase().includes(term)
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

  verDetalle(item: RepConsulta) { this.openMenuId = null; }

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
