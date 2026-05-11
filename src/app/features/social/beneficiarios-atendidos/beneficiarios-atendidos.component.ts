import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BeneficiarioAtendido {
  id: string;
  beneficiaryName: string;
  dni: string;
  service: string;
  date: string;
  location: string;
  attendedBy: string;
  status: string;
  distributionNumber?: string;
  beneficiaryDNI?: string;
  campaignName?: string;
  totalQuantity?: number;
  deliveryStatus?: string;
  distributionDate?: string;
}

@Component({
  selector: 'app-beneficiarios-atendidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beneficiarios-atendidos.component.html',
  styleUrls: ['./beneficiarios-atendidos.component.scss']
})
export class BeneficiariosAtendidosComponent implements OnInit {
  beneficiariosAtendidos: BeneficiarioAtendido[] = [];
  filteredBeneficiariosAtendidos: BeneficiarioAtendido[] = [];
  searchTerm = '';
  statusFilter = 'all';
  serviceFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingBeneficiario: BeneficiarioAtendido | null = null;
  formData: Partial<BeneficiarioAtendido> = {};

  stats = {
    total: 0,
    today: 0,
    thisWeek: 0,
    thisMonth: 0
  };

  serviceOptions = ['Consulta Médica', 'Entrega de Alimentos', 'Apoyo Educativo', 'Asistencia Social', 'Vacunación'];
  statusOptions = ['ATTENDED', 'PENDING', 'CANCELLED'];

  ngOnInit(): void {
    this.filteredBeneficiariosAtendidos = [...this.beneficiariosAtendidos];
    this.calculateStats();
  }

  calculateStats(): void {
    const today = new Date().toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    this.stats.total = this.filteredBeneficiariosAtendidos.length;
    this.stats.today = this.filteredBeneficiariosAtendidos.filter(b => b.date === today).length;
    this.stats.thisWeek = this.filteredBeneficiariosAtendidos.filter(b => b.date >= weekAgo).length;
    this.stats.thisMonth = this.filteredBeneficiariosAtendidos.filter(b => b.date >= monthAgo).length;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onServiceFilterChange(service: string): void {
    this.serviceFilter = service;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredBeneficiariosAtendidos = this.beneficiariosAtendidos.filter(beneficiario => {
      const matchesSearch = !this.searchTerm || 
        beneficiario.beneficiaryName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        beneficiario.dni.includes(this.searchTerm);
      
      const matchesStatus = this.statusFilter === 'all' || beneficiario.status === this.statusFilter;
      const matchesService = this.serviceFilter === 'all' || beneficiario.service === this.serviceFilter;

      return matchesSearch && matchesStatus && matchesService;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.serviceFilter = 'all';
    this.applyFilters();
  }

  get paginatedBeneficiariosAtendidos(): BeneficiarioAtendido[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredBeneficiariosAtendidos.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredBeneficiariosAtendidos.length / this.pageSize);
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
    this.editingBeneficiario = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(beneficiario: BeneficiarioAtendido): void {
    this.editingBeneficiario = beneficiario;
    this.formData = { ...beneficiario };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingBeneficiario = null;
    this.formData = {};
  }

  saveBeneficiario(): void {
    if (this.editingBeneficiario) {
      const index = this.beneficiariosAtendidos.findIndex(b => b.id === this.editingBeneficiario!.id);
      if (index !== -1) {
        this.beneficiariosAtendidos[index] = { ...this.beneficiariosAtendidos[index], ...this.formData };
      }
    } else {
      const newBeneficiario: BeneficiarioAtendido = {
        id: `ATN${String(this.beneficiariosAtendidos.length + 1).padStart(3, '0')}`,
        beneficiaryName: this.formData.beneficiaryName || '',
        dni: this.formData.dni || '',
        service: this.formData.service || 'Consulta Médica',
        date: this.formData.date || new Date().toISOString().split('T')[0],
        location: this.formData.location || '',
        attendedBy: this.formData.attendedBy || '',
        status: this.formData.status || 'ATTENDED'
      };
      this.beneficiariosAtendidos.unshift(newBeneficiario);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteBeneficiario(id: string): void {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
      this.beneficiariosAtendidos = this.beneficiariosAtendidos.filter(b => b.id !== id);
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
      'ATTENDED': 'Atendido',
      'PENDING': 'Pendiente',
      'CANCELLED': 'Cancelado'
    };
    return labels[status] || status;
  }
}
