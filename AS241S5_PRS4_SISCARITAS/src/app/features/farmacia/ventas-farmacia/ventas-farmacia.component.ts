import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface VentaFarmacia {
  id: string;
  ticket: string;
  pacienteNombre: string;
  items: string;
  total: number;
  fecha: string;
  estado: string;
  tipo: string;
}

@Component({
  selector: 'app-ventas-farmacia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas-farmacia.component.html',
  styleUrls: ['./ventas-farmacia.component.scss']
})
export class VentasFarmaciaComponent implements OnInit {
  ventas: VentaFarmacia[] = [];
  filteredVentas: VentaFarmacia[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingVenta: VentaFarmacia | null = null;
  formData: Partial<VentaFarmacia> = {};
  Math = Math;

  stats = {
    total: 0,
    consignado: 0,
    donado: 0,
    montoTotal: 0
  };

  statusOptions = ['CONSIGNADO', 'DONADO', 'REVOCADO', 'PENDIENTE'];

  ngOnInit(): void {
    this.filteredVentas = [...this.ventas];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredVentas.length;
    this.stats.consignado = this.filteredVentas.filter(v => v.estado === 'CONSIGNADO').length;
    this.stats.donado = this.filteredVentas.filter(v => v.estado === 'DONADO').length;
    this.stats.montoTotal = this.filteredVentas.reduce((sum, v) => sum + v.total, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredVentas = this.ventas.filter(venta => {
      const matchesSearch = !this.searchTerm || 
        venta.pacienteNombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        venta.ticket.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        venta.items.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || venta.estado === this.statusFilter;

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

  get paginatedVentas(): VentaFarmacia[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredVentas.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredVentas.length / this.pageSize);
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
    this.editingVenta = null;
    this.formData = {
      fecha: new Date().toISOString().split('T')[0],
      estado: 'PENDIENTE',
      tipo: 'VENDIDO',
      total: 0
    };
    this.showModal = true;
  }

  openEditModal(venta: VentaFarmacia): void {
    this.editingVenta = venta;
    this.formData = { ...venta };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingVenta = null;
    this.formData = {};
  }

  saveVenta(): void {
    if (this.editingVenta) {
      const index = this.ventas.findIndex(v => v.id === this.editingVenta!.id);
      if (index !== -1) {
        this.ventas[index] = { ...this.ventas[index], ...this.formData };
      }
    } else {
      const newVenta: VentaFarmacia = {
        id: `VEN${String(this.ventas.length + 1).padStart(3, '0')}`,
        ticket: `FAR-2026-${new Date().toISOString().split('T')[0]}-${String(this.ventas.length + 1).padStart(6, '0')}`,
        pacienteNombre: this.formData.pacienteNombre || '',
        items: this.formData.items || '',
        total: this.formData.total || 0,
        fecha: this.formData.fecha || new Date().toISOString().split('T')[0],
        estado: this.formData.estado || 'PENDIENTE',
        tipo: this.formData.tipo || 'VENDIDO'
      };
      this.ventas.unshift(newVenta);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteVenta(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
      this.ventas = this.ventas.filter(v => v.id !== id);
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
