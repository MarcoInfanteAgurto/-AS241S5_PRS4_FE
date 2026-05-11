import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Laboratorio {
  id: string;
  ticket: string;
  fecha: string;
  pacienteNombre: string;
  items: string;
  estado: string;
  usaTarjeta: boolean;
  total: number;
}

@Component({
  selector: 'app-laboratorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements OnInit {
  laboratorios: Laboratorio[] = [];
  filteredLaboratorios: Laboratorio[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingLaboratorio: Laboratorio | null = null;
  formData: Partial<Laboratorio> = {};
  Math = Math;

  stats = {
    total: 0,
    consignado: 0,
    donado: 0,
    montoTotal: 0
  };

  statusOptions = ['CONSIGNADO', 'DONADO', 'REVOCADO', 'PENDIENTE'];

  ngOnInit(): void {
    this.filteredLaboratorios = [...this.laboratorios];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredLaboratorios.length;
    this.stats.consignado = this.filteredLaboratorios.filter(l => l.estado === 'CONSIGNADO').length;
    this.stats.donado = this.filteredLaboratorios.filter(l => l.estado === 'DONADO').length;
    this.stats.montoTotal = this.filteredLaboratorios.reduce((sum, l) => sum + l.total, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredLaboratorios = this.laboratorios.filter(laboratorio => {
      const matchesSearch = !this.searchTerm || 
        laboratorio.pacienteNombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        laboratorio.ticket.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        laboratorio.items.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || laboratorio.estado === this.statusFilter;

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

  get paginatedLaboratorios(): Laboratorio[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredLaboratorios.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredLaboratorios.length / this.pageSize);
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
    this.editingLaboratorio = null;
    this.formData = {
      fecha: new Date().toISOString().split('T')[0],
      estado: 'PENDIENTE',
      usaTarjeta: false,
      total: 0
    };
    this.showModal = true;
  }

  openEditModal(laboratorio: Laboratorio): void {
    this.editingLaboratorio = laboratorio;
    this.formData = { ...laboratorio };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingLaboratorio = null;
    this.formData = {};
  }

  saveLaboratorio(): void {
    if (this.editingLaboratorio) {
      const index = this.laboratorios.findIndex(l => l.id === this.editingLaboratorio!.id);
      if (index !== -1) {
        this.laboratorios[index] = { ...this.laboratorios[index], ...this.formData };
      }
    } else {
      const newLaboratorio: Laboratorio = {
        id: `LAB${String(this.laboratorios.length + 1).padStart(3, '0')}`,
        ticket: `LAB-2026-${new Date().toISOString().split('T')[0]}-${String(this.laboratorios.length + 1).padStart(6, '0')}`,
        pacienteNombre: this.formData.pacienteNombre || '',
        items: this.formData.items || '',
        total: this.formData.total || 0,
        fecha: this.formData.fecha || new Date().toISOString().split('T')[0],
        estado: this.formData.estado || 'PENDIENTE',
        usaTarjeta: this.formData.usaTarjeta || false
      };
      this.laboratorios.unshift(newLaboratorio);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteLaboratorio(id: string): void {
    if (confirm('¿Estás seguro de eliminar este registro de laboratorio?')) {
      this.laboratorios = this.laboratorios.filter(l => l.id !== id);
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
