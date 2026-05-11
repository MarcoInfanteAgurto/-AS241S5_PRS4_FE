import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Supplier {
  id: string;
  providerName: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  email: string;
  address: string;
  status: string;
  name?: string;
  ruc?: string;
  category?: string;
  contact?: string;
  totalOrders?: number;
}

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  suppliers: Supplier[] = [];
  filteredSuppliers: Supplier[] = [];
  searchTerm = '';
  statusFilter = 'all';
  categoryFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingSupplier: Supplier | null = null;
  formData: Partial<Supplier> = {};

  stats = {
    total: 0,
    active: 0,
    categories: 0,
    orders: 0
  };

  categoryOptions = ['Medicamentos', 'Equipos Médicos', 'Alimentos', 'Limpieza', 'Papelería'];
  statusOptions = ['ACTIVE', 'INACTIVE', 'SUSPENDED'];

  ngOnInit(): void {
    this.filteredSuppliers = [...this.suppliers];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredSuppliers.length;
    this.stats.active = this.filteredSuppliers.filter(s => s.status === 'ACTIVE').length;
    this.stats.categories = new Set(this.filteredSuppliers.map(s => s.category)).size;
    this.stats.orders = this.filteredSuppliers.reduce((sum, s) => sum + (s.totalOrders || 0), 0);
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
    this.filteredSuppliers = this.suppliers.filter(supplier => {
      const matchesSearch = !this.searchTerm || 
        (supplier.name && supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (supplier.providerName && supplier.providerName.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (supplier.ruc && supplier.ruc.includes(this.searchTerm)) ||
        (supplier.documentNumber && supplier.documentNumber.includes(this.searchTerm)) ||
        (supplier.contact && supplier.contact.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesStatus = this.statusFilter === 'all' || supplier.status === this.statusFilter;
      const matchesCategory = this.categoryFilter === 'all' || supplier.category === this.categoryFilter;

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

  get paginatedSuppliers(): Supplier[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredSuppliers.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSuppliers.length / this.pageSize);
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
    this.editingSupplier = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(supplier: Supplier): void {
    this.editingSupplier = supplier;
    this.formData = { ...supplier };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingSupplier = null;
    this.formData = {};
  }

  saveSupplier(): void {
    if (this.editingSupplier) {
      const index = this.suppliers.findIndex(s => s.id === this.editingSupplier!.id);
      if (index !== -1) {
        this.suppliers[index] = { ...this.suppliers[index], ...this.formData };
      }
    } else {
      const newSupplier: Supplier = {
        id: `SUP${String(this.suppliers.length + 1).padStart(3, '0')}`,
        providerName: this.formData.providerName || this.formData.name || '',
        documentType: this.formData.documentType || 'RUC',
        documentNumber: this.formData.documentNumber || this.formData.ruc || '',
        phone: this.formData.phone || '',
        email: this.formData.email || '',
        address: this.formData.address || '',
        status: this.formData.status || 'ACTIVE',
        name: this.formData.name || '',
        ruc: this.formData.ruc || '',
        category: this.formData.category || 'Medicamentos',
        contact: this.formData.contact || '',
        totalOrders: 0
      };
      this.suppliers.unshift(newSupplier);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteSupplier(id: string): void {
    if (confirm('¿Estás seguro de eliminar este proveedor?')) {
      this.suppliers = this.suppliers.filter(s => s.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(supplier: Supplier): string {
    const name = supplier.name || supplier.providerName || '';
    const words = name.split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'ACTIVE': 'Activo',
      'INACTIVE': 'Inactivo',
      'SUSPENDED': 'Suspendido'
    };
    return labels[status] || status;
  }
}
