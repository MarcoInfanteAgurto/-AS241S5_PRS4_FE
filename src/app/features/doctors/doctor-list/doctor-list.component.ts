import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  sexo: string;
  especialidad: string;
  status: string;
  specialty?: string;
  licenseNumber?: string;
  email?: string;
  phone?: string;
  consultations?: number;
}

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];
  searchTerm = '';
  statusFilter = 'all';
  specialtyFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingDoctor: Doctor | null = null;
  formData: Partial<Doctor> = {};

  stats = {
    total: 0,
    active: 0,
    specialties: 0,
    consultations: 0
  };

  specialtyOptions = ['Medicina General', 'Pediatría', 'Cardiología', 'Traumatología', 'Ginecología', 'Psicología'];
  statusOptions = ['ACTIVE', 'INACTIVE', 'ON_LEAVE'];

  ngOnInit(): void {
    this.filteredDoctors = [...this.doctors];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredDoctors.length;
    this.stats.active = this.filteredDoctors.filter(d => d.status === 'ACTIVE').length;
    this.stats.specialties = new Set(this.filteredDoctors.map(d => d.specialty)).size;
    this.stats.consultations = this.filteredDoctors.reduce((sum, d) => sum + (d.consultations || 0), 0);
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onSpecialtyFilterChange(specialty: string): void {
    this.specialtyFilter = specialty;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredDoctors = this.doctors.filter(doctor => {
      const matchesSearch = !this.searchTerm || 
        doctor.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (doctor.licenseNumber && doctor.licenseNumber.includes(this.searchTerm));
      
      const matchesStatus = this.statusFilter === 'all' || doctor.status === this.statusFilter;
      const matchesSpecialty = this.specialtyFilter === 'all' || doctor.specialty === this.specialtyFilter || doctor.especialidad === this.specialtyFilter;

      return matchesSearch && matchesStatus && matchesSpecialty;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.specialtyFilter = 'all';
    this.applyFilters();
  }

  get paginatedDoctors(): Doctor[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredDoctors.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDoctors.length / this.pageSize);
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
    this.editingDoctor = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(doctor: Doctor): void {
    this.editingDoctor = doctor;
    this.formData = { ...doctor };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingDoctor = null;
    this.formData = {};
  }

  saveDoctor(): void {
    if (this.editingDoctor) {
      const index = this.doctors.findIndex(d => d.id === this.editingDoctor!.id);
      if (index !== -1) {
        this.doctors[index] = { ...this.doctors[index], ...this.formData };
      }
    } else {
      const newDoctor: Doctor = {
        id: `DOC${String(this.doctors.length + 1).padStart(3, '0')}`,
        firstName: this.formData.firstName || '',
        lastName: this.formData.lastName || '',
        dni: this.formData.dni || '',
        sexo: this.formData.sexo || '',
        especialidad: this.formData.especialidad || this.formData.specialty || 'Medicina General',
        status: this.formData.status || 'ACTIVE',
        specialty: this.formData.specialty || 'Medicina General',
        licenseNumber: this.formData.licenseNumber || '',
        email: this.formData.email || '',
        phone: this.formData.phone || '',
        consultations: 0
      };
      this.doctors.unshift(newDoctor);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteDoctor(id: string): void {
    if (confirm('¿Estás seguro de eliminar este médico?')) {
      this.doctors = this.doctors.filter(d => d.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getInitials(doctor: Doctor): string {
    return `${doctor.firstName[0]}${doctor.lastName[0]}`.toUpperCase();
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'ACTIVE': 'Activo',
      'INACTIVE': 'Inactivo',
      'ON_LEAVE': 'De licencia'
    };
    return labels[status] || status;
  }
}
