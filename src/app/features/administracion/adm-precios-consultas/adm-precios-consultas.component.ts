import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PrecioConsulta {
    id: string;
    specialty: string;
    precio: number;
    status: string;
}

@Component({
    selector: 'app-adm-precios-consultas',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './adm-precios-consultas.component.html',
    styleUrls: ['./adm-precios-consultas.component.scss']
})
export class AdmPreciosConsultasComponent implements OnInit {
    Math = Math;
    items: PrecioConsulta[] = [];
    filteredItems: PrecioConsulta[] = [];
    searchTerm = ''; statusFilter = 'all';
    currentPage = 1; pageSize = 10;
    openMenuId: string | null = null;
    showModal = false; editingItem: PrecioConsulta | null = null; formData: Partial<PrecioConsulta> = {};
    stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
    statusOptions = ['ACTIVE', 'INACTIVE'];

    ngOnInit(): void { this.applyFilters(); }

    calculateStats(): void {
        this.stats.total = this.filteredItems.length;
        this.stats.active = this.filteredItems.filter(i => i.status === 'ACTIVE').length;
        this.stats.inactive = this.filteredItems.filter(i => i.status === 'INACTIVE').length;
        const sum = this.filteredItems.reduce((a, i) => a + i.precio, 0);
        this.stats.precioPromedio = this.filteredItems.length ? sum / this.filteredItems.length : 0;
    }

    applyFilters(): void {
        this.filteredItems = this.items.filter(i => {
            const s = !this.searchTerm || i.specialty.toLowerCase().includes(this.searchTerm.toLowerCase());
            return s && (this.statusFilter === 'all' || i.status === this.statusFilter);
        });
        this.calculateStats(); this.currentPage = 1;
    }

    clearFilters(): void { this.searchTerm = ''; this.statusFilter = 'all'; this.applyFilters(); }
    get paginatedItems(): PrecioConsulta[] { const s = (this.currentPage - 1) * this.pageSize; return this.filteredItems.slice(s, s + this.pageSize); }
    get totalPages(): number { return Math.ceil(this.filteredItems.length / this.pageSize) || 1; }
    get pages(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
    goToPage(p: number): void { if (p >= 1 && p <= this.totalPages) this.currentPage = p; }
    toggleMenu(id: string): void { this.openMenuId = this.openMenuId === id ? null : id; }
    openAddModal(): void { this.editingItem = null; this.formData = { status: 'ACTIVE', precio: 0 }; this.showModal = true; }
    openEditModal(item: PrecioConsulta): void { this.editingItem = item; this.formData = { ...item }; this.showModal = true; this.openMenuId = null; }
    closeModal(): void { this.showModal = false; this.editingItem = null; this.formData = {}; }

    saveItem(): void {
        if (this.editingItem) {
            const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
            if (idx !== -1) this.items[idx] = { ...this.items[idx], ...this.formData };
        } else {
            this.items.unshift({ id: `PCO${String(this.items.length + 1).padStart(3, '0')}`, specialty: this.formData.specialty || '', precio: this.formData.precio || 0, status: this.formData.status || 'ACTIVE' });
        }
        this.applyFilters(); this.closeModal();
    }

    deleteItem(id: string): void {
        if (confirm('¿Está seguro?')) { this.items = this.items.filter(i => i.id !== id); this.applyFilters(); this.openMenuId = null; }
    }
    getStatusLabel(s: string): string { return s === 'ACTIVE' ? 'Activo' : 'Inactivo'; }
}
