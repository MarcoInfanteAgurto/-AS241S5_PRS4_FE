import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KitLaboratorio {
  id: string;
  nombre: string;
  pruebas: string;
  precioKit: number;
  status: string;
}

@Component({
  selector: 'app-prod-kits-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-kits-lab.component.html',
  styleUrls: ['./prod-kits-lab.component.scss']
})
export class ProdKitsLabComponent implements OnInit {
  Math = Math;

  kits: KitLaboratorio[] = [];
  filteredKits: KitLaboratorio[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingKit: KitLaboratorio | null = null;
  formData: Partial<KitLaboratorio> = {};

  stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.applyFilters();
  }

  calculateStats(): void {
    this.stats.total = this.filteredKits.length;
    this.stats.active = this.filteredKits.filter(k => k.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredKits.filter(k => k.status === 'INACTIVE').length;
    const sum = this.filteredKits.reduce((acc, k) => acc + k.precioKit, 0);
    this.stats.precioPromedio = this.filteredKits.length ? sum / this.filteredKits.length : 0;
  }

  applyFilters(): void {
    this.filteredKits = this.kits.filter(k => {
      const matchesSearch = !this.searchTerm ||
        k.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        k.pruebas.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === 'all' || k.status === this.statusFilter;
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

  get paginatedKits(): KitLaboratorio[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredKits.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredKits.length / this.pageSize) || 1;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  toggleMenu(id: string): void {
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  openAddModal(): void {
    this.editingKit = null;
    this.formData = { status: 'ACTIVE', precioKit: 0 };
    this.showModal = true;
  }

  openEditModal(kit: KitLaboratorio): void {
    this.editingKit = kit;
    this.formData = { ...kit };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingKit = null;
    this.formData = {};
  }

  saveKit(): void {
    if (this.editingKit) {
      const idx = this.kits.findIndex(k => k.id === this.editingKit!.id);
      if (idx !== -1) this.kits[idx] = { ...this.kits[idx], ...this.formData };
    } else {
      this.kits.unshift({
        id: `KIT${String(this.kits.length + 1).padStart(3, '0')}`,
        nombre: this.formData.nombre || '',
        pruebas: this.formData.pruebas || '',
        precioKit: this.formData.precioKit || 0,
        status: this.formData.status || 'ACTIVE'
      });
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteKit(id: string): void {
    if (confirm('¿Está seguro de eliminar este kit?')) {
      this.kits = this.kits.filter(k => k.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
