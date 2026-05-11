import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Consulta {
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
  selector: 'app-consultas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  consultas: Consulta[] = [];
  filteredConsultas: Consulta[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingConsulta: Consulta | null = null;
  formData: Partial<Consulta> = {};
  Math = Math; // Para usar en el template

  stats = {
    total: 0,
    consignado: 0,
    donado: 0,
    montoTotal: 0
  };

  statusOptions = ['CONSIGNADO', 'DONADO', 'REVOCADO', 'PENDIENTE'];

  ngOnInit(): void {
    this.filteredConsultas = [...this.consultas];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredConsultas.length;
    this.stats.consignado = this.filteredConsultas.filter(c => c.estado === 'CONSIGNADO').length;
    this.stats.donado = this.filteredConsultas.filter(c => c.estado === 'DONADO').length;
    this.stats.montoTotal = this.filteredConsultas.reduce((sum, c) => sum + c.total, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredConsultas = this.consultas.filter(consulta => {
      const matchesSearch = !this.searchTerm || 
        consulta.pacienteNombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        consulta.ticket.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        consulta.areaNombre.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || consulta.estado === this.statusFilter;

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

  get paginatedConsultas(): Consulta[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredConsultas.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredConsultas.length / this.pageSize);
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
    this.editingConsulta = null;
    this.formData = {
      fecha: new Date().toISOString().split('T')[0],
      estado: 'PENDIENTE',
      usaTarjeta: false,
      total: 0
    };
    this.showModal = true;
  }

  openEditModal(consulta: Consulta): void {
    this.editingConsulta = consulta;
    this.formData = { ...consulta };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingConsulta = null;
    this.formData = {};
  }

  saveConsulta(): void {
    if (this.editingConsulta) {
      const index = this.consultas.findIndex(c => c.id === this.editingConsulta!.id);
      if (index !== -1) {
        this.consultas[index] = { ...this.consultas[index], ...this.formData };
      }
    } else {
      const newConsulta: Consulta = {
        id: `CON${String(this.consultas.length + 1).padStart(3, '0')}`,
        ticket: `CON-2026-${new Date().toISOString().split('T')[0]}-${String(this.consultas.length + 1).padStart(6, '0')}`,
        pacienteNombre: this.formData.pacienteNombre || '',
        areaNombre: this.formData.areaNombre || '',
        personalNombre: this.formData.personalNombre || '',
        total: this.formData.total || 0,
        fecha: this.formData.fecha || new Date().toISOString().split('T')[0],
        estado: this.formData.estado || 'PENDIENTE',
        usaTarjeta: this.formData.usaTarjeta || false
      };
      this.consultas.unshift(newConsulta);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteConsulta(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta consulta?')) {
      this.consultas = this.consultas.filter(c => c.id !== id);
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
