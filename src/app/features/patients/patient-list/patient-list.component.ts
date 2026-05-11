import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  sexo: string;
  nacimiento: string;
  historia: string;
  status: string;
  age?: number;
  bloodType?: string;
  phone?: string;
  lastVisit?: string;
}

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  searchTerm = '';
  statusFilter = 'all';
  bloodTypeFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingPatient: Patient | null = null;
  formData: Partial<Patient> = {};

  stats = {
    total: 0,
    active: 0,
    thisMonth: 0,
    critical: 0
  };

  bloodTypeOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  statusOptions = ['ACTIVE', 'INACTIVE', 'CRITICAL'];

  ngOnInit(): void {
    this.filteredPatients = [...this.patients];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredPatients.length;
    this.stats.active = this.filteredPatients.filter(p => p.status === 'ACTIVE').length;
    this.stats.critical = this.filteredPatients.filter(p => p.status === 'CRITICAL').length;
    this.stats.thisMonth = this.filteredPatients.filter(p => {
      if (!p.lastVisit) return false;
      const date = new Date(p.lastVisit);
      const now = new Date();
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    }).length;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onBloodTypeFilterChange(bloodType: string): void {
    this.bloodTypeFilter = bloodType;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredPatients = this.patients.filter(patient => {
      const matchesSearch = !this.searchTerm || 
        patient.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        patient.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        patient.dni.includes(this.searchTerm);
      
      const matchesStatus = this.statusFilter === 'all' || patient.status === this.statusFilter;
      const matchesBloodType = this.bloodTypeFilter === 'all' || patient.bloodType === this.bloodTypeFilter;

      return matchesSearch && matchesStatus && matchesBloodType;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.bloodTypeFilter = 'all';
    this.applyFilters();
  }

  get paginatedPatients(): Patient[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredPatients.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPatients.length / this.pageSize);
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
    this.editingPatient = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(patient: Patient): void {
    this.editingPatient = patient;
    this.formData = { ...patient };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingPatient = null;
    this.formData = {};
  }

  savePatient(): void {
    if (this.editingPatient) {
      const index = this.patients.findIndex(p => p.id === this.editingPatient!.id);
      if (index !== -1) {
        this.patients[index] = { ...this.patients[index], ...this.formData };
      }
    } else {
      const newPatient: Patient = {
        id: `PAT${String(this.patients.length + 1).padStart(3, '0')}`,
        firstName: this.formData.firstName || '',
        lastName: this.formData.lastName || '',
        dni: this.formData.dni || '',
        sexo: this.formData.sexo || '',
        nacimiento: this.formData.nacimiento || '',
        historia: this.formData.historia || '',
        status: this.formData.status || 'ACTIVE',
        age: this.formData.age || 0,
        bloodType: this.formData.bloodType || 'O+',
        phone: this.formData.phone || ''
      };
      this.patients.unshift(newPatient);
    }
    this.applyFilters();
    this.closeModal();
  }

  deletePatient(id: string): void {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.patients = this.patients.filter(p => p.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(patient: Patient): string {
    return `${patient.firstName[0]}${patient.lastName[0]}`.toUpperCase();
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'ACTIVE': 'Activo',
      'INACTIVE': 'Inactivo',
      'CRITICAL': 'Crítico'
    };
    return labels[status] || status;
  }
}
