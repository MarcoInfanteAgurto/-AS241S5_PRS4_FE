import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Donacion {
  id: string;
  donorName: string;
  donorType: string;
  type: string;
  description: string;
  amount?: number;
  quantity?: number;
  date: string;
  status: string;
  donor?: string;
  donationType?: string;
  campaign?: string;
  estimatedValue?: number;
  receiptIssued?: boolean;
}

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.scss']
})
export class DonacionesComponent implements OnInit {
  donaciones: Donacion[] = [];
  filteredDonaciones: Donacion[] = [];
  searchTerm = '';
  statusFilter = 'all';
  typeFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingDonacion: Donacion | null = null;
  formData: Partial<Donacion> = {};

  stats = {
    total: 0,
    monetary: 0,
    inKind: 0,
    thisMonth: 0
  };

  typeOptions = ['Monetaria', 'En Especie', 'Alimentos', 'Medicamentos', 'Ropa'];
  donorTypeOptions = ['Persona Natural', 'Empresa', 'Organización'];
  statusOptions = ['RECEIVED', 'PENDING', 'PROCESSED'];

  ngOnInit(): void {
    this.filteredDonaciones = [...this.donaciones];
    this.calculateStats();
  }

  calculateStats(): void {
    const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    this.stats.total = this.filteredDonaciones.length;
    this.stats.monetary = this.filteredDonaciones.filter(d => d.type === 'Monetaria').reduce((sum, d) => sum + (d.amount || 0), 0);
    this.stats.inKind = this.filteredDonaciones.filter(d => d.type !== 'Monetaria').length;
    this.stats.thisMonth = this.filteredDonaciones.filter(d => d.date >= monthAgo).length;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onTypeFilterChange(type: string): void {
    this.typeFilter = type;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredDonaciones = this.donaciones.filter(donacion => {
      const matchesSearch = !this.searchTerm || 
        donacion.donorName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        donacion.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || donacion.status === this.statusFilter;
      const matchesType = this.typeFilter === 'all' || donacion.type === this.typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.typeFilter = 'all';
    this.applyFilters();
  }

  get paginatedDonaciones(): Donacion[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredDonaciones.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDonaciones.length / this.pageSize);
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
    this.editingDonacion = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(donacion: Donacion): void {
    this.editingDonacion = donacion;
    this.formData = { ...donacion };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingDonacion = null;
    this.formData = {};
  }

  saveDonacion(): void {
    if (this.editingDonacion) {
      const index = this.donaciones.findIndex(d => d.id === this.editingDonacion!.id);
      if (index !== -1) {
        this.donaciones[index] = { ...this.donaciones[index], ...this.formData };
      }
    } else {
      const newDonacion: Donacion = {
        id: `DON${String(this.donaciones.length + 1).padStart(3, '0')}`,
        donorName: this.formData.donorName || '',
        donorType: this.formData.donorType || 'Persona Natural',
        type: this.formData.type || 'Monetaria',
        description: this.formData.description || '',
        amount: this.formData.amount,
        quantity: this.formData.quantity,
        date: this.formData.date || new Date().toISOString().split('T')[0],
        status: this.formData.status || 'RECEIVED'
      };
      this.donaciones.unshift(newDonacion);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteDonacion(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta donación?')) {
      this.donaciones = this.donaciones.filter(d => d.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(name: string): string {
    const words = name.split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'RECEIVED': 'Recibida',
      'PENDING': 'Pendiente',
      'PROCESSED': 'Procesada'
    };
    return labels[status] || status;
  }

  formatCurrency(amount: number): string {
    return `S/ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
  }
}

