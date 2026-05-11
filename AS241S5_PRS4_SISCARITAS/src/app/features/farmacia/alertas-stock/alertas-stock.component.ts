import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AlertaStock {
  id: string;
  medicamento: string;
  stockActual: number;
  stockMinimo: number;
  estado: string;
  ubicacion: string;
}

@Component({
  selector: 'app-alertas-stock',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alertas-stock.component.html',
  styleUrl: './alertas-stock.component.scss'
})
export class AlertasStockComponent {
  Math = Math;
  
  alertas: AlertaStock[] = [];
  filteredAlertas: AlertaStock[] = [];
  
  searchTerm: string = '';
  selectedEstado: string = '';
  selectedUbicacion: string = '';
  
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentAlerta: Partial<AlertaStock> = {};
  
  currentPage: number = 1;
  itemsPerPage: number = 10;
  openMenuId: string | null = null;

  stats = {
    total: 0,
    critico: 0,
    bajo: 0,
    sinStock: 0
  };

  ngOnInit() {
    this.applyFilters();
    this.calculateStats();
  }

  applyFilters() {
    this.filteredAlertas = this.alertas.filter(alerta => {
      const matchesSearch = !this.searchTerm || 
        alerta.medicamento.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        alerta.ubicacion.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesEstado = !this.selectedEstado || alerta.estado === this.selectedEstado;
      const matchesUbicacion = !this.selectedUbicacion || alerta.ubicacion === this.selectedUbicacion;
      
      return matchesSearch && matchesEstado && matchesUbicacion;
    });
    
    this.currentPage = 1;
  }

  calculateStats() {
    this.stats.total = this.alertas.length;
    this.stats.critico = this.alertas.filter(a => a.estado === 'CRITICO').length;
    this.stats.bajo = this.alertas.filter(a => a.estado === 'BAJO').length;
    this.stats.sinStock = this.alertas.filter(a => a.stockActual === 0).length;
  }

  get paginatedAlertas() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredAlertas.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredAlertas.length / this.itemsPerPage);
  }

  openModal(alerta?: AlertaStock) {
    this.isEditMode = !!alerta;
    this.currentAlerta = alerta ? { ...alerta } : {};
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentAlerta = {};
  }

  saveAlerta() {
    if (this.isEditMode) {
      const index = this.alertas.findIndex(a => a.id === this.currentAlerta.id);
      if (index !== -1) {
        this.alertas[index] = this.currentAlerta as AlertaStock;
      }
    } else {
      const newAlerta: AlertaStock = {
        ...this.currentAlerta,
        id: Date.now().toString()
      } as AlertaStock;
      this.alertas.push(newAlerta);
    }
    
    this.applyFilters();
    this.calculateStats();
    this.closeModal();
  }

  deleteAlerta(id: string) {
    if (confirm('¿Está seguro de eliminar esta alerta?')) {
      this.alertas = this.alertas.filter(a => a.id !== id);
      this.applyFilters();
      this.calculateStats();
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getEstadoClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'CRITICO': 'status-danger',
      'BAJO': 'status-warning',
      'NORMAL': 'status-success'
    };
    return classes[estado] || 'status-neutral';
  }

  getStockPercentage(alerta: AlertaStock): number {
    if (alerta.stockMinimo === 0) return 100;
    return Math.round((alerta.stockActual / alerta.stockMinimo) * 100);
  }
}
