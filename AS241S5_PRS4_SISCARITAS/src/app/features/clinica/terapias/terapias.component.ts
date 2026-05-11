import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Terapia {
  id: string;
  ticket: string;
  pacienteNombre: string;
  areaNombre: string;
  personalNombre: string;
  total: number;
  fecha: string;
  estado: string;
  usaTarjeta?: boolean;
}

@Component({
  selector: 'app-terapias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terapias.component.html',
  styleUrls: ['./terapias.component.scss']
})
export class TerapiasComponent implements OnInit {
  terapias: Terapia[] = [];
  filteredTerapias: Terapia[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingTerapia: Terapia | null = null;
  formData: Partial<Terapia> = {};
  Math = Math;

  stats = {
    total: 0,
    consignado: 0,
    donado: 0,
    montoTotal: 0
  };

  statusOptions = ['CONSIGNADO', 'DONADO', 'REVOCADO', 'PENDIENTE'];

  ngOnInit(): void {
    this.filteredTerapias = [...this.terapias];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredTerapias.length;
    this.stats.consignado = this.filteredTerapias.filter(t => t.estado === 'CONSIGNADO').length;
    this.stats.donado = this.filteredTerapias.filter(t => t.estado === 'DONADO').length;
    this.stats.montoTotal = this.filteredTerapias.reduce((sum, t) => sum + t.total, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredTerapias = this.terapias.filter(terapia => {
      const matchesSearch = !this.searchTerm || 
        terapia.pacienteNombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        terapia.ticket.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        terapia.areaNombre.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || terapia.estado === this.statusFilter;

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

  get paginatedTerapias(): Terapia[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredTerapias.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTerapias.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  toggleMenu(id: string): void {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  openAddModal(): void {
    this.editingTerapia = null;
    this.formData = {
      fecha: new Date().toISOString().split('T')[0],
      estado: 'PENDIENTE',
      areaNombre: 'TERAPIA FISICA',
      usaTarjeta: false,
      total: 0
    };
    this.showModal = true;
  }

  openEditModal(terapia: Terapia): void {
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
      const index = this.terapias.findIndex(t => t.id === this.editingTerapia!.id);
      if (index !== -1) {
        this.terapias[index] = { ...this.terapias[index], ...this.formData };
      }
    } else {
      const newTerapia: Terapia = {
        id: `TER${String(this.terapias.length + 1).padStart(3, '0')}`,
        ticket: `TER-2026-${new Date().toISOString().split('T')[0]}-${String(this.terapias.length + 1).padStart(6, '0')}`,
        pacienteNombre: this.formData.pacienteNombre || '',
        areaNombre: this.formData.areaNombre || 'TERAPIA FISICA',
        personalNombre: this.formData.personalNombre || '',
        total: this.formData.total || 0,
        fecha: this.formData.fecha || new Date().toISOString().split('T')[0],
        estado: this.formData.estado || 'PENDIENTE',
        usaTarjeta: this.formData.usaTarjeta || false
      };
      this.terapias.unshift(newTerapia);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteTerapia(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta terapia?')) {
      this.terapias = this.terapias.filter(t => t.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'CONSIGNADO': 'Consignado',
      'DONADO': 'Donado',
      'REVOCADO': 'Revocado',
      'PENDIENTE': 'Pendiente'
    };
    return labels[status] || status;
  }
}
