import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PruebaLab {
  id: string;
  nombre: string;
  precio: number;
  status: string;
}

@Component({
  selector: 'app-pruebas-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pruebas-lab.component.html',
  styleUrls: ['./pruebas-lab.component.scss']
})
export class PruebasLabComponent implements OnInit {
  pruebas: PruebaLab[] = [];
  filteredPruebas: PruebaLab[] = [];
  searchTerm = '';
  statusFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingPrueba: PruebaLab | null = null;
  formData: Partial<PruebaLab> = {};
  Math = Math;

  stats = {
    total: 0,
    active: 0,
    inactive: 0,
    precioPromedio: 0
  };

  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredPruebas = [...this.pruebas];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredPruebas.length;
    this.stats.active = this.filteredPruebas.filter(p => p.status === 'ACTIVE').length;
    this.stats.inactive = this.filteredPruebas.filter(p => p.status === 'INACTIVE').length;
    if (this.filteredPruebas.length > 0) {
      const sum = this.filteredPruebas.reduce((acc, p) => acc + p.precio, 0);
      this.stats.precioPromedio = sum / this.filteredPruebas.length;
    } else {
      this.stats.precioPromedio = 0;
    }
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredPruebas = this.pruebas.filter(prueba => {
      const matchesSearch = !this.searchTerm || 
        prueba.nombre.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || prueba.status === this.statusFilter;

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

  get paginatedPruebas(): PruebaLab[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredPruebas.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPruebas.length / this.pageSize);
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
    this.editingPrueba = null;
    this.formData = {
      status: 'ACTIVE',
      precio: 0
    };
    this.showModal = true;
  }

  openEditModal(prueba: PruebaLab): void {
    this.editingPrueba = prueba;
    this.formData = { ...prueba };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingPrueba = null;
    this.formData = {};
  }

  savePrueba(): void {
    if (this.editingPrueba) {
      const index = this.pruebas.findIndex(p => p.id === this.editingPrueba!.id);
      if (index !== -1) {
        this.pruebas[index] = { ...this.pruebas[index], ...this.formData };
      }
    } else {
      const newPrueba: PruebaLab = {
        id: `LAB${String(this.pruebas.length + 1).padStart(3, '0')}`,
        nombre: this.formData.nombre || '',
        precio: this.formData.precio || 0,
        status: this.formData.status || 'ACTIVE'
      };
      this.pruebas.unshift(newPrueba);
    }
    this.applyFilters();
    this.closeModal();
  }

  deletePrueba(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta prueba de laboratorio?')) {
      this.pruebas = this.pruebas.filter(p => p.id !== id);
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
