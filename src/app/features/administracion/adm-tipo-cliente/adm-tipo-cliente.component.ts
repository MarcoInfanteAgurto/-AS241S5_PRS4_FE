import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TipoCliente {
    id: string;
    nombre: string;
    descripcion: string;
    status: string;
}

@Component({
    selector: 'app-adm-tipo-cliente',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './adm-tipo-cliente.component.html',
    styleUrls: ['./adm-tipo-cliente.component.scss']
})
export class AdmTipoClienteComponent implements OnInit {
    Math = Math;
    items: TipoCliente[] = [];
    filteredItems: TipoCliente[] = [];
    searchTerm = '';
    statusFilter = 'all';
    currentPage = 1;
    pageSize = 10;
    openMenuId: string | null = null;
    showModal = false;
    editingItem: TipoCliente | null = null;
    formData: Partial<TipoCliente> = {};
    stats = { total: 0, active: 0, inactive: 0 };
    statusOptions = ['ACTIVE', 'INACTIVE'];

    ngOnInit(): void { this.applyFilters(); }

    calculateStats(): void {
        this.stats.total = this.filteredItems.length;
        this.stats.active = this.filteredItems.filter(i => i.status === 'ACTIVE').length;
        this.stats.inactive = this.filteredItems.filter(i => i.status === 'INACTIVE').length;
    }

    applyFilters(): void {
        this.filteredItems = this.items.filter(i => {
            const s = !this.searchTerm || i.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || i.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
            const st = this.statusFilter === 'all' || i.status === this.statusFilter;
            return s && st;
        });
        this.calculateStats(); this.currentPage = 1;
    }

    clearFilters(): void { this.searchTerm = ''; this.statusFilter = 'all'; this.applyFilters(); }

    get paginatedItems(): TipoCliente[] { const s = (this.currentPage - 1) * this.pageSize; return this.filteredItems.slice(s, s + this.pageSize); }
    get totalPages(): number { return Math.ceil(this.filteredItems.length / this.pageSize) || 1; }
    get pages(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
    goToPage(p: number): void { if (p >= 1 && p <= this.totalPages) this.currentPage = p; }
    toggleMenu(id: string): void { this.openMenuId = this.openMenuId === id ? null : id; }

    openAddModal(): void { this.editingItem = null; this.formData = { status: 'ACTIVE' }; this.showModal = true; }
    openEditModal(item: TipoCliente): void { this.editingItem = item; this.formData = { ...item }; this.showModal = true; this.openMenuId = null; }
    closeModal(): void { this.showModal = false; this.editingItem = null; this.formData = {}; }

    saveItem(): void {
        if (this.editingItem) {
            const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
            if (idx !== -1) this.items[idx] = { ...this.items[idx], ...this.formData };
        } else {
            this.items.unshift({ id: `TCL${String(this.items.length + 1).padStart(3, '0')}`, nombre: this.formData.nombre || '', descripcion: this.formData.descripcion || '', status: this.formData.status || 'ACTIVE' });
        }
        this.applyFilters(); this.closeModal();
    }

    deleteItem(id: string): void {
        if (confirm('¿Está seguro de eliminar este tipo de cliente?')) { this.items = this.items.filter(i => i.id !== id); this.applyFilters(); this.openMenuId = null; }
    }

    getStatusLabel(s: string): string { return s === 'ACTIVE' ? 'Activo' : 'Inactivo'; }
}
