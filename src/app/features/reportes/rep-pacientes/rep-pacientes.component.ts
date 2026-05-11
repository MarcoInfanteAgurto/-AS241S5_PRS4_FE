import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RepPaciente {
  id: string;
  historia: string;
  apellidos: string;
  nombres: string;
  dni: string;
  sexo: string;
  phone: string;
  status: string;
  lastVisit: string;
}

@Component({
  selector: 'app-rep-pacientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rep-pacientes.component.html',
  styleUrls: ['./rep-pacientes.component.scss']
})
export class RepPacientesComponent implements OnInit {
  items: RepPaciente[] = [];
  filteredItems: RepPaciente[] = [];
  paginatedItems: RepPaciente[] = [];

  searchTerm = '';
  statusFilter = 'all';

  statusOptions = ['ACTIVE', 'INACTIVE'];

  openMenuId: string | null = null;

  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  get stats() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return {
      total: this.items.length,
      activos: this.items.filter(i => i.status === 'ACTIVE').length,
      inactivos: this.items.filter(i => i.status === 'INACTIVE').length,
      visitasRecientes: this.items.filter(i => i.lastVisit && new Date(i.lastVisit) >= thirtyDaysAgo).length
    };
  }

  ngOnInit() { this.applyFilters(); }

  applyFilters() {
    let result = [...this.items];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(i =>
        i.nombres.toLowerCase().includes(term) ||
        i.apellidos.toLowerCase().includes(term) ||
        i.dni.toLowerCase().includes(term) ||
        i.historia.toLowerCase().includes(term)
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

  verDetalle(item: RepPaciente) { this.openMenuId = null; }

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
