import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AtencionMedica {
  id: string;
  attentionNumber: string;
  beneficiaryName: string;
  attentionType: string;
  personalNombre: string;
  diagnosis: string;
  followUpRequired: boolean;
  status: string;
  attentionDate?: string;
}

@Component({
  selector: 'app-atencion-medica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atencion-medica.component.html',
  styleUrls: ['./atencion-medica.component.scss']
})
export class AtencionMedicaComponent implements OnInit {
  atenciones: AtencionMedica[] = [];
  filteredAtenciones: AtencionMedica[] = [];
  searchTerm = '';
  statusFilter = 'all';
  typeFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingAtencion: AtencionMedica | null = null;
  formData: Partial<AtencionMedica> = {};

  stats = {
    total: 0,
    completed: 0,
    pending: 0,
    followUp: 0
  };

  typeOptions = ['CONSULTA_GENERAL', 'CONSULTA_ESPECIALIDAD', 'EMERGENCIA', 'CONTROL'];
  statusOptions = ['COMPLETED', 'IN_PROGRESS', 'PENDING', 'CANCELLED'];

  ngOnInit(): void {
    this.filteredAtenciones = [...this.atenciones];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredAtenciones.length;
    this.stats.completed = this.filteredAtenciones.filter(a => a.status === 'COMPLETED').length;
    this.stats.pending = this.filteredAtenciones.filter(a => a.status === 'PENDING').length;
    this.stats.followUp = this.filteredAtenciones.filter(a => a.followUpRequired).length;
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
    this.filteredAtenciones = this.atenciones.filter(atencion => {
      const matchesSearch = !this.searchTerm || 
        atencion.beneficiaryName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        atencion.attentionNumber.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || atencion.status === this.statusFilter;
      const matchesType = this.typeFilter === 'all' || atencion.attentionType === this.typeFilter;

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

  get paginatedAtenciones(): AtencionMedica[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredAtenciones.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredAtenciones.length / this.pageSize);
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
    this.editingAtencion = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(atencion: AtencionMedica): void {
    this.editingAtencion = atencion;
    this.formData = { ...atencion };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingAtencion = null;
    this.formData = {};
  }

  saveAtencion(): void {
    if (this.editingAtencion) {
      const index = this.atenciones.findIndex(a => a.id === this.editingAtencion!.id);
      if (index !== -1) {
        this.atenciones[index] = { ...this.atenciones[index], ...this.formData };
      }
    } else {
      const newAtencion: AtencionMedica = {
        id: `ATE${String(this.atenciones.length + 1).padStart(3, '0')}`,
        attentionNumber: `ATN-2026-${String(this.atenciones.length + 1).padStart(5, '0')}`,
        beneficiaryName: this.formData.beneficiaryName || '',
        attentionType: this.formData.attentionType || 'CONSULTA_GENERAL',
        personalNombre: this.formData.personalNombre || '',
        diagnosis: this.formData.diagnosis || '',
        followUpRequired: this.formData.followUpRequired || false,
        status: this.formData.status || 'PENDING',
        attentionDate: new Date().toISOString().split('T')[0]
      };
      this.atenciones.unshift(newAtencion);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteAtencion(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta atención?')) {
      this.atenciones = this.atenciones.filter(a => a.id !== id);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'COMPLETED': 'Completado',
      'IN_PROGRESS': 'En Progreso',
      'PENDING': 'Pendiente',
      'CANCELLED': 'Cancelado'
    };
    return labels[status] || status;
  }

  getTypeLabel(type: string): string {
    const labels: { [key: string]: string } = {
      'CONSULTA_GENERAL': 'Consulta General',
      'CONSULTA_ESPECIALIDAD': 'Consulta Especialidad',
      'EMERGENCIA': 'Emergencia',
      'CONTROL': 'Control'
    };
    return labels[type] || type;
  }
}
