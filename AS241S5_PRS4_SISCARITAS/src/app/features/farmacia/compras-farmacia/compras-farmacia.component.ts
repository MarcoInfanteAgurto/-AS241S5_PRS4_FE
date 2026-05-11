import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CompraFarmacia {
  id: string;
  numeroCompra: string;
  fecha: string;
  proveedor: string;
  registradoPor: string;
  total: number;
  tipo: string;
  estado: string;
}

@Component({
  selector: 'app-compras-farmacia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compras-farmacia.component.html',
  styleUrl: './compras-farmacia.component.scss'
})
export class ComprasFarmaciaComponent {
  Math = Math;
  
  compras: CompraFarmacia[] = [];
  filteredCompras: CompraFarmacia[] = [];
  
  searchTerm: string = '';
  selectedEstado: string = '';
  selectedTipo: string = '';
  
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentCompra: Partial<CompraFarmacia> = {};
  
  currentPage: number = 1;
  itemsPerPage: number = 10;
  
  stats = {
    total: 0,
    consignadas: 0,
    revocadas: 0,
    donadas: 0
  };

  ngOnInit() {
    this.applyFilters();
    this.calculateStats();
  }

  applyFilters() {
    this.filteredCompras = this.compras.filter(compra => {
      const matchesSearch = !this.searchTerm || 
        compra.numeroCompra.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        compra.proveedor.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        compra.registradoPor.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesEstado = !this.selectedEstado || compra.estado === this.selectedEstado;
      const matchesTipo = !this.selectedTipo || compra.tipo === this.selectedTipo;
      
      return matchesSearch && matchesEstado && matchesTipo;
    });
    
    this.currentPage = 1;
  }

  calculateStats() {
    this.stats.total = this.compras.length;
    this.stats.consignadas = this.compras.filter(c => c.estado === 'CONSIGNADO').length;
    this.stats.revocadas = this.compras.filter(c => c.estado === 'REVOCADO').length;
    this.stats.donadas = this.compras.filter(c => c.tipo === 'DONADO').length;
  }

  get paginatedCompras() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredCompras.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCompras.length / this.itemsPerPage);
  }

  openModal(compra?: CompraFarmacia) {
    this.isEditMode = !!compra;
    this.currentCompra = compra ? { ...compra } : {};
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentCompra = {};
  }

  saveCompra() {
    if (this.isEditMode) {
      const index = this.compras.findIndex(c => c.id === this.currentCompra.id);
      if (index !== -1) {
        this.compras[index] = this.currentCompra as CompraFarmacia;
      }
    } else {
      const newCompra: CompraFarmacia = {
        ...this.currentCompra,
        id: Date.now().toString()
      } as CompraFarmacia;
      this.compras.push(newCompra);
    }
    
    this.applyFilters();
    this.calculateStats();
    this.closeModal();
  }

  deleteCompra(id: string) {
    if (confirm('¿Está seguro de eliminar esta compra?')) {
      this.compras = this.compras.filter(c => c.id !== id);
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
      'CONSIGNADO': 'status-success',
      'REVOCADO': 'status-danger',
      'PENDIENTE': 'status-warning'
    };
    return classes[estado] || 'status-neutral';
  }
}
