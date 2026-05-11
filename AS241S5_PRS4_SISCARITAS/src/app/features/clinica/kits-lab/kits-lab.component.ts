import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KitLab {
  id: string;
  nombre: string;
  status: string;
}

@Component({
  selector: 'app-kits-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kits-lab.component.html',
  styleUrls: ['./kits-lab.component.scss']
})
export class KitsLabComponent implements OnInit {
  kits: KitLab[] = [];
  filteredKits: KitLab[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingKit: KitLab | null = null;
  formData: Partial<KitLab> = {};
  Math = Math;

  stats = {
    total: 0,
    active: 0,
    inactive: 0,
    disponibles: 0
  };

  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredKits = [...this.kits];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredKits.length;
    this.stats.active = this.filteredKits.filter(k => k.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredKits.filter(k => k.status === 'INACTIVE').length;
    this.stats.disponibles = this.stats.active;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredKits = this.kits.filter(kit => {
      const matchesSearch = !this.searchTerm || 
        kit.nombre.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || kit.status === this.statusFilter;

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

  get paginatedKits(): KitLab[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredKits.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredKits.length / this.pageSize);
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
    this.editingKit = null;
    this.formData = {
      status: 'ACTIVE'
    };
    this.showModal = true;
  }

  openEditModal(kit: KitLab): void {
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
      const index = this.kits.findIndex(k => k.id === this.editingKit!.id);
      if (index !== -1) {
        this.kits[index] = { ...this.kits[index], ...this.formData };
      }
    } else {
      const newKit: KitLab = {
        id: `KIT${String(this.kits.length + 1).padStart(3, '0')}`,
        nombre: this.formData.nombre || '',
        status: this.formData.status || 'ACTIVE'
      };
      this.kits.unshift(newKit);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteKit(id: string): void {
    if (confirm('¿Estás seguro de eliminar este kit de laboratorio?')) {
      this.kits = this.kits.filter(k => k.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
