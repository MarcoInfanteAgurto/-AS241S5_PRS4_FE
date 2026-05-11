import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movimiento {
  id: string;
  medicamento: string;
  tipoMovimiento: string;
  cantidad: number;
  stockAnterior: number;
  stockNuevo: number;
  fecha: string;
  responsable: string;
}

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.scss'
})
export class MovimientosComponent {
  Math = Math;
  
  movimientos: Movimiento[] = [];
  filteredMovimientos: Movimiento[] = [];
  
  searchTerm: string = '';
  selectedTipo: string = '';
  selectedFecha: string = '';
  
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentMovimiento: Partial<Movimiento> = {};
  
  currentPage: number = 1;
  itemsPerPage: number = 10;
  
  stats = {
    total: 0,
    entradas: 0,
    salidas: 0,
    ajustes: 0
  };

  ngOnInit() {
    this.applyFilters();
    this.calculateStats();
  }

  applyFilters() {
    this.filteredMovimientos = this.movimientos.filter(mov => {
      const matchesSearch = !this.searchTerm || 
        mov.medicamento.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        mov.responsable.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesTipo = !this.selectedTipo || mov.tipoMovimiento === this.selectedTipo;
      const matchesFecha = !this.selectedFecha || mov.fecha === this.selectedFecha;
      
      return matchesSearch && matchesTipo && matchesFecha;
    });
    
    this.currentPage = 1;
  }

  calculateStats() {
    this.stats.total = this.movimientos.length;
    this.stats.entradas = this.movimientos.filter(m => m.tipoMovimiento === 'ENTRADA').length;
    this.stats.salidas = this.movimientos.filter(m => m.tipoMovimiento === 'SALIDA').length;
    this.stats.ajustes = this.movimientos.filter(m => m.tipoMovimiento === 'AJUSTE').length;
  }

  get paginatedMovimientos() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredMovimientos.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredMovimientos.length / this.itemsPerPage);
  }

  openModal(movimiento?: Movimiento) {
    this.isEditMode = !!movimiento;
    this.currentMovimiento = movimiento ? { ...movimiento } : {};
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentMovimiento = {};
  }

  saveMovimiento() {
    if (this.isEditMode) {
      const index = this.movimientos.findIndex(m => m.id === this.currentMovimiento.id);
      if (index !== -1) {
        this.movimientos[index] = this.currentMovimiento as Movimiento;
      }
    } else {
      const newMovimiento: Movimiento = {
        ...this.currentMovimiento,
        id: Date.now().toString()
      } as Movimiento;
      this.movimientos.push(newMovimiento);
    }
    
    this.applyFilters();
    this.calculateStats();
    this.closeModal();
  }

  deleteMovimiento(id: string) {
    if (confirm('¿Está seguro de eliminar este movimiento?')) {
      this.movimientos = this.movimientos.filter(m => m.id !== id);
      this.applyFilters();
      this.calculateStats();
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getTipoClass(tipo: string): string {
    const classes: { [key: string]: string } = {
      'ENTRADA': 'status-success',
      'SALIDA': 'status-warning',
      'AJUSTE': 'status-info'
    };
    return classes[tipo] || 'status-neutral';
  }
}
