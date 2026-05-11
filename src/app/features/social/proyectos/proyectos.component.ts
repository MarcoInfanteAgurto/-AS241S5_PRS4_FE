import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Proyecto {
  id: string;
  name: string;
  description: string;
  category: string;
  budget: number;
  startDate: string;
  endDate?: string;
  status: string;
  beneficiaries?: number;
  specialty?: string;
  location?: string;
  progress?: string;
  projectName?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  filteredProyectos: Proyecto[] = [];
  searchTerm = '';
  statusFilter = 'all';
  categoryFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingProyecto: Proyecto | null = null;
  formData: Partial<Proyecto> = {};

  stats = {
    total: 0,
    active: 0,
    budget: 0,
    beneficiaries: 0
  };

  categoryOptions = ['Educación', 'Salud', 'Alimentación', 'Vivienda', 'Infraestructura'];
  statusOptions = ['PLANNING', 'ACTIVE', 'COMPLETED', 'SUSPENDED'];

  ngOnInit(): void {
    this.filteredProyectos = [...this.proyectos];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredProyectos.length;
    this.stats.active = this.filteredProyectos.filter(p => p.status === 'ACTIVE').length;
    this.stats.budget = this.filteredProyectos.reduce((sum, p) => sum + p.budget, 0);
    this.stats.beneficiaries = this.filteredProyectos.reduce((sum, p) => sum + (p.beneficiaries || 0), 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onCategoryFilterChange(category: string): void {
    this.categoryFilter = category;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProyectos = this.proyectos.filter(proyecto => {
      const matchesSearch = !this.searchTerm || 
        proyecto.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        proyecto.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || proyecto.status === this.statusFilter;
      const matchesCategory = this.categoryFilter === 'all' || proyecto.category === this.categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.categoryFilter = 'all';
    this.applyFilters();
  }

  get paginatedProyectos(): Proyecto[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredProyectos.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProyectos.length / this.pageSize);
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
    this.editingProyecto = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(proyecto: Proyecto): void {
    this.editingProyecto = proyecto;
    this.formData = { ...proyecto };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingProyecto = null;
    this.formData = {};
  }

  saveProyecto(): void {
    if (this.editingProyecto) {
      const index = this.proyectos.findIndex(p => p.id === this.editingProyecto!.id);
      if (index !== -1) {
        this.proyectos[index] = { ...this.proyectos[index], ...this.formData };
      }
    } else {
      const newProyecto: Proyecto = {
        id: `PRY${String(this.proyectos.length + 1).padStart(3, '0')}`,
        name: this.formData.name || '',
        description: this.formData.description || '',
        category: this.formData.category || 'Educación',
        budget: this.formData.budget || 0,
        startDate: this.formData.startDate || new Date().toISOString().split('T')[0],
        status: this.formData.status || 'PLANNING',
        beneficiaries: 0
      };
      this.proyectos.unshift(newProyecto);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteProyecto(id: string): void {
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      this.proyectos = this.proyectos.filter(p => p.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'PLANNING': 'Planificación',
      'ACTIVE': 'Activo',
      'COMPLETED': 'Completado',
      'SUSPENDED': 'Suspendido'
    };
    return labels[status] || status;
  }

  formatCurrency(amount: number): string {
    return `S/ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
  }
}
