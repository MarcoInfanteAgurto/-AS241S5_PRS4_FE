import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Medication {
  id: string;
  ubicacion: string;
  denominacionComercial: string;
  denominacionGenerica: string;
  stock: number;
  stockMinimo: number;
  laboratorio: string;
  categoria: string;
  costoUnitario: number;
  precioVenta: number;
  vencimiento: string;
  status: string;
}

@Component({
  selector: 'app-medication-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss']
})
export class MedicationListComponent implements OnInit {
  medications: Medication[] = [];
  filteredMedications: Medication[] = [];
  searchTerm = '';
  statusFilter = 'all';
  categoryFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingMedication: Medication | null = null;
  formData: Partial<Medication> = {};

  stats = {
    total: 0,
    active: 0,
    lowStock: 0,
    expired: 0
  };

  categoryOptions = ['TABLETA', 'CAPSULA', 'JARABE', 'INYECTABLE', 'CREMA', 'SUSPENSION'];
  statusOptions = ['ACTIVE', 'INACTIVE', 'EXPIRED'];

  ngOnInit(): void {
    this.filteredMedications = [...this.medications];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredMedications.length;
    this.stats.active = this.filteredMedications.filter(m => m.status === 'ACTIVE').length;
    this.stats.lowStock = this.filteredMedications.filter(m => m.stock < m.stockMinimo).length;
    this.stats.expired = this.filteredMedications.filter(m => m.status === 'EXPIRED').length;
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
    this.filteredMedications = this.medications.filter(medication => {
      const matchesSearch = !this.searchTerm || 
        medication.denominacionComercial.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        medication.denominacionGenerica.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        medication.laboratorio.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || medication.status === this.statusFilter;
      const matchesCategory = this.categoryFilter === 'all' || medication.categoria === this.categoryFilter;

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

  get paginatedMedications(): Medication[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredMedications.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMedications.length / this.pageSize);
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
    this.editingMedication = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(medication: Medication): void {
    this.editingMedication = medication;
    this.formData = { ...medication };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingMedication = null;
    this.formData = {};
  }

  saveMedication(): void {
    if (this.editingMedication) {
      const index = this.medications.findIndex(m => m.id === this.editingMedication!.id);
      if (index !== -1) {
        this.medications[index] = { ...this.medications[index], ...this.formData };
      }
    } else {
      const newMedication: Medication = {
        id: `MED${String(this.medications.length + 1).padStart(3, '0')}`,
        ubicacion: this.formData.ubicacion || '',
        denominacionComercial: this.formData.denominacionComercial || '',
        denominacionGenerica: this.formData.denominacionGenerica || '',
        stock: this.formData.stock || 0,
        stockMinimo: this.formData.stockMinimo || 0,
        laboratorio: this.formData.laboratorio || '',
        categoria: this.formData.categoria || 'TABLETA',
        costoUnitario: this.formData.costoUnitario || 0,
        precioVenta: this.formData.precioVenta || 0,
        vencimiento: this.formData.vencimiento || '',
        status: this.formData.status || 'ACTIVE'
      };
      this.medications.unshift(newMedication);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteMedication(id: string): void {
    if (confirm('¿Estás seguro de eliminar este medicamento?')) {
      this.medications = this.medications.filter(m => m.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStockStatus(medication: Medication): string {
    if (medication.stock === 0) return 'OUT_OF_STOCK';
    if (medication.stock < medication.stockMinimo) return 'LOW_STOCK';
    return 'AVAILABLE';
  }

  getStockStatusLabel(medication: Medication): string {
    const status = this.getStockStatus(medication);
    const labels: { [key: string]: string } = {
      'AVAILABLE': `${medication.stock}`,
      'LOW_STOCK': `${medication.stock} (Bajo)`,
      'OUT_OF_STOCK': 'Sin stock'
    };
    return labels[status] || `${medication.stock}`;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'ACTIVE': 'Activo',
      'INACTIVE': 'Inactivo',
      'EXPIRED': 'Vencido'
    };
    return labels[status] || status;
  }

  formatCurrency(value: number): string {
    return `S/ ${value.toFixed(2)}`;
  }
}
