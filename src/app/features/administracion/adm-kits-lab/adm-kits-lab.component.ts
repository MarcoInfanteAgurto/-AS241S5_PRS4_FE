import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface KitLab {
    id: string;
    nombre: string;
    pruebas: string;
    precioKit: number;
    status: string;
}

@Component({
    selector: 'app-adm-kits-lab',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './adm-kits-lab.component.html',
    styleUrls: ['./adm-kits-lab.component.scss']
})
export class AdmKitsLabComponent implements OnInit {
    Math = Math;
    items: KitLab[] = [];
    filteredItems: KitLab[] = [];
    searchTerm = ''; statusFilter = 'all';
    currentPage = 1; pageSize = 10;
    openMenuId: string | null = null;
    showModal = false; editingItem: KitLab | null = null; formData: Partial<KitLab> = {};
    stats = { total: 0, active: 0, inactive: 0, precioPromedio: 0 };
    statusOptions = ['ACTIVE', 'INACTIVE'];

    ngOnInit(): void { this.applyFilters(); }

    calculateStats(): void {
        this.stats.total = this.filteredItems.length;
        this.stats.active = this.filteredItems.filter(i => i.status === 'ACTIVE').length;
        this.stats.inactive = this.filteredItems.filter(i => i.status === 'INACTIVE').length;
        const sum = this.filteredItems.reduce((a, i) => a + i.precioKit, 0);
        this.stats.precioPromedio = this.filteredItems.length ? sum / this.filteredItems.length : 0;
    }

    applyFilters(): void {
        this.filteredItems = this.items.filter(i => {
            const s = !this.searchTerm || i.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) || i.pruebas.toLowerCase().includes(this.searchTerm.toLowerCase());
            return s && (this.statusFilter === 'all' || i.status === this.statusFilter);
        });
        this.calculateStats(); this.currentPage = 1;
    }

    clearFilters(): void { this.searchTerm = ''; this.statusFilter = 'all'; this.applyFilters(); }
    get paginatedItems(): KitLab[] { const s = (this.currentPage - 1) * this.pageSize; return this.filteredItems.slice(s, s + this.pageSize); }
    get totalPages(): number { return Math.ceil(this.filteredItems.length / this.pageSize) || 1; }
    get pages(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
    goToPage(p: number): void { if (p >= 1 && p <= this.totalPages) this.currentPage = p; }
    toggleMenu(id: string): void { this.openMenuId = this.openMenuId === id ? null : id; }
    openAddModal(): void { this.editingItem = null; this.formData = { status: 'ACTIVE', precioKit: 0 }; this.showModal = true; }
    openEditModal(item: KitLab): void { this.editingItem = item; this.formData = { ...item }; this.showModal = true; this.openMenuId = null; }
    closeModal(): void { this.showModal = false; this.editingItem = null; this.formData = {}; }

    saveItem(): void {
        if (this.editingItem) {
            const idx = this.items.findIndex(i => i.id === this.editingItem!.id);
            if (idx !== -1) this.items[idx] = { ...this.items[idx], ...this.formData };
        } else {
            this.items.unshift({ id: `KIT${String(this.items.length + 1).padStart(3, '0')}`, nombre: this.formData.nombre || '', pruebas: this.formData.pruebas || '', precioKit: this.formData.precioKit || 0, status: this.formData.status || 'ACTIVE' });
        }
        this.applyFilters(); this.closeModal();
    }

    deleteItem(id: string): void {
        if (confirm('¿Está seguro?')) { this.items = this.items.filter(i => i.id !== id); this.applyFilters(); this.openMenuId = null; }
    }
    getStatusLabel(s: string): string { return s === 'ACTIVE' ? 'Activo' : 'Inactivo'; }
}
