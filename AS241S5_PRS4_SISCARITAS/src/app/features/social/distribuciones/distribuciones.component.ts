import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Distribucion {
  id: string;
  date: string;
  product: string;
  quantity: number;
  beneficiaries: number;
  location: string;
  responsible: string;
  status: string;
  distributionNumber?: string;
  beneficiaryName?: string;
  campaignName?: string;
  totalItems?: number;
  totalValue?: number;
  deliveryStatus?: string;
}

@Component({
  selector: 'app-distribuciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './distribuciones.component.html',
  styleUrls: ['./distribuciones.component.scss']
})
export class DistribucionesComponent implements OnInit {
  distribuciones: Distribucion[] = [];
  filteredDistribuciones: Distribucion[] = [];
  searchTerm = '';
  statusFilter = 'all';
  productFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingDistribucion: Distribucion | null = null;
  formData: Partial<Distribucion> = {};

  stats = {
    total: 0,
    completed: 0,
    totalQuantity: 0,
    totalBeneficiaries: 0
  };

  productOptions = ['Alimentos', 'Medicamentos', 'Ropa', 'Útiles Escolares', 'Productos de Limpieza'];
  statusOptions = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

  ngOnInit(): void {
    this.filteredDistribuciones = [...this.distribuciones];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredDistribuciones.length;
    this.stats.completed = this.filteredDistribuciones.filter(d => d.status === 'COMPLETED').length;
    this.stats.totalQuantity = this.filteredDistribuciones.reduce((sum, d) => sum + d.quantity, 0);
    this.stats.totalBeneficiaries = this.filteredDistribuciones.reduce((sum, d) => sum + d.beneficiaries, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onProductFilterChange(product: string): void {
    this.productFilter = product;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredDistribuciones = this.distribuciones.filter(distribucion => {
      const matchesSearch = !this.searchTerm || 
        distribucion.product.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        distribucion.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || distribucion.status === this.statusFilter;
      const matchesProduct = this.productFilter === 'all' || distribucion.product === this.productFilter;

      return matchesSearch && matchesStatus && matchesProduct;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.productFilter = 'all';
    this.applyFilters();
  }

  get paginatedDistribuciones(): Distribucion[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredDistribuciones.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDistribuciones.length / this.pageSize);
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
    this.editingDistribucion = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(distribucion: Distribucion): void {
    this.editingDistribucion = distribucion;
    this.formData = { ...distribucion };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingDistribucion = null;
    this.formData = {};
  }

  saveDistribucion(): void {
    if (this.editingDistribucion) {
      const index = this.distribuciones.findIndex(d => d.id === this.editingDistribucion!.id);
      if (index !== -1) {
        this.distribuciones[index] = { ...this.distribuciones[index], ...this.formData };
      }
    } else {
      const newDistribucion: Distribucion = {
        id: `DIS${String(this.distribuciones.length + 1).padStart(3, '0')}`,
        date: this.formData.date || new Date().toISOString().split('T')[0],
        product: this.formData.product || 'Alimentos',
        quantity: this.formData.quantity || 0,
        beneficiaries: this.formData.beneficiaries || 0,
        location: this.formData.location || '',
        responsible: this.formData.responsible || '',
        status: this.formData.status || 'PENDING'
      };
      this.distribuciones.unshift(newDistribucion);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteDistribucion(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta distribución?')) {
      this.distribuciones = this.distribuciones.filter(d => d.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'PENDING': 'Pendiente',
      'IN_PROGRESS': 'En Progreso',
      'COMPLETED': 'Completada',
      'CANCELLED': 'Cancelada',
      'IN_TRANSIT': 'En Tránsito',
      'APPROVED': 'Aprobado'
    };
    return labels[status] || status;
  }

  formatCurrency(amount: number): string {
    return `S/ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
  }

  getInitials(name: string): string {
    if (!name) return '??';
    const words = name.split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
}
