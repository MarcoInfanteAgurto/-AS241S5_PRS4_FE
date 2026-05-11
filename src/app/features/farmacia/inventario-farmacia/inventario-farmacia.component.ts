import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface InventarioFarmacia {
  id: string;
  medicamento: string;
  categoria: string;
  stock: number;
  stockMinimo: number;
  ubicacion: string;
  vencimiento: string;
  estado: string;
}

@Component({
  selector: 'app-inventario-farmacia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario-farmacia.component.html',
  styleUrl: './inventario-farmacia.component.scss'
})
export class InventarioFarmaciaComponent {
  Math = Math;
  
  inventario: InventarioFarmacia[] = [];
  filteredInventario: InventarioFarmacia[] = [];
  
  searchTerm: string = '';
  selectedCategoria: string = '';
  selectedEstado: string = '';
  
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentItem: Partial<InventarioFarmacia> = {};
  
  currentPage: number = 1;
  itemsPerPage: number = 10;
  
  stats = {
    total: 0,
    disponible: 0,
    stockBajo: 0,
    sinStock: 0
  };

  ngOnInit() {
    this.applyFilters();
    this.calculateStats();
  }

  applyFilters() {
    this.filteredInventario = this.inventario.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.medicamento.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.ubicacion.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategoria = !this.selectedCategoria || item.categoria === this.selectedCategoria;
      const matchesEstado = !this.selectedEstado || item.estado === this.selectedEstado;
      
      return matchesSearch && matchesCategoria && matchesEstado;
    });
    
    this.currentPage = 1;
  }

  calculateStats() {
    this.stats.total = this.inventario.length;
    this.stats.disponible = this.inventario.filter(i => i.stock > i.stockMinimo).length;
    this.stats.stockBajo = this.inventario.filter(i => i.stock > 0 && i.stock <= i.stockMinimo).length;
    this.stats.sinStock = this.inventario.filter(i => i.stock === 0).length;
  }

  get paginatedInventario() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredInventario.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredInventario.length / this.itemsPerPage);
  }

  openModal(item?: InventarioFarmacia) {
    this.isEditMode = !!item;
    this.currentItem = item ? { ...item } : {};
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentItem = {};
  }

  saveItem() {
    if (this.isEditMode) {
      const index = this.inventario.findIndex(i => i.id === this.currentItem.id);
      if (index !== -1) {
        this.inventario[index] = this.currentItem as InventarioFarmacia;
      }
    } else {
      const newItem: InventarioFarmacia = {
        ...this.currentItem,
        id: Date.now().toString()
      } as InventarioFarmacia;
      this.inventario.push(newItem);
    }
    
    this.applyFilters();
    this.calculateStats();
    this.closeModal();
  }

  deleteItem(id: string) {
    if (confirm('¿Está seguro de eliminar este registro?')) {
      this.inventario = this.inventario.filter(i => i.id !== id);
      this.applyFilters();
      this.calculateStats();
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStockStatus(item: InventarioFarmacia): string {
    if (item.stock === 0) return 'Sin stock';
    if (item.stock <= item.stockMinimo) return 'Stock bajo';
    return 'Disponible';
  }

  getStockClass(item: InventarioFarmacia): string {
    if (item.stock === 0) return 'status-danger';
    if (item.stock <= item.stockMinimo) return 'status-warning';
    return 'status-success';
  }

  getEstadoClass(estado: string): string {
    const classes: { [key: string]: string } = {
      'ACTIVE': 'status-success',
      'INACTIVE': 'status-neutral',
      'EXPIRED': 'status-danger'
    };
    return classes[estado] || 'status-neutral';
  }
}
