import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Beneficiario {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  district: string;
  vulnerabilityLevel: string;
  familyMembers: number;
  status: string;
  phone?: string;
  registrationDate?: string;
}

@Component({
  selector: 'app-beneficiarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.scss']
})
export class BeneficiariosComponent implements OnInit {
  beneficiarios: Beneficiario[] = [];
  filteredBeneficiarios: Beneficiario[] = [];
  searchTerm = '';
  statusFilter = 'all';
  vulnerabilityFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingBeneficiario: Beneficiario | null = null;
  formData: Partial<Beneficiario> = {};

  stats = {
    total: 0,
    active: 0,
    critical: 0,
    families: 0
  };

  vulnerabilityOptions = ['BAJA', 'MEDIA', 'ALTA', 'CRITICA'];
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredBeneficiarios = [...this.beneficiarios];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredBeneficiarios.length;
    this.stats.active = this.filteredBeneficiarios.filter(b => b.status === 'ACTIVE').length;
    this.stats.critical = this.filteredBeneficiarios.filter(b => b.vulnerabilityLevel === 'CRITICA').length;
    this.stats.families = this.filteredBeneficiarios.reduce((sum, b) => sum + b.familyMembers, 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onVulnerabilityFilterChange(vulnerability: string): void {
    this.vulnerabilityFilter = vulnerability;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredBeneficiarios = this.beneficiarios.filter(beneficiario => {
      const matchesSearch = !this.searchTerm || 
        beneficiario.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        beneficiario.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        beneficiario.dni.includes(this.searchTerm);
      
      const matchesStatus = this.statusFilter === 'all' || beneficiario.status === this.statusFilter;
      const matchesVulnerability = this.vulnerabilityFilter === 'all' || beneficiario.vulnerabilityLevel === this.vulnerabilityFilter;

      return matchesSearch && matchesStatus && matchesVulnerability;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.vulnerabilityFilter = 'all';
    this.applyFilters();
  }

  get paginatedBeneficiarios(): Beneficiario[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredBeneficiarios.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredBeneficiarios.length / this.pageSize);
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

  openEditModal(beneficiario: Beneficiario): void {
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
      const index = this.beneficiarios.findIndex(b => b.id === this.editingBeneficiario!.id);
      if (index !== -1) {
        this.beneficiarios[index] = { ...this.beneficiarios[index], ...this.formData };
      }
    } else {
      const newBeneficiario: Beneficiario = {
        id: `BEN${String(this.beneficiarios.length + 1).padStart(3, '0')}`,
        firstName: this.formData.firstName || '',
        lastName: this.formData.lastName || '',
        dni: this.formData.dni || '',
        district: this.formData.district || '',
        vulnerabilityLevel: this.formData.vulnerabilityLevel || 'MEDIA',
        familyMembers: this.formData.familyMembers || 1,
        status: this.formData.status || 'ACTIVE',
        registrationDate: new Date().toISOString()
      };
      this.beneficiarios.unshift(newBeneficiario);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteBeneficiario(id: string): void {
    if (confirm('¿Estás seguro de eliminar este beneficiario?')) {
      this.beneficiarios = this.beneficiarios.filter(b => b.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(beneficiario: Beneficiario): string {
    return `${beneficiario.firstName[0]}${beneficiario.lastName[0]}`.toUpperCase();
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
