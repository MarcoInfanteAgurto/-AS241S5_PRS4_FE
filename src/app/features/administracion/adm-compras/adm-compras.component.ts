import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AdmCompra {
    id: string;
    numeroCompra: string;
    proveedor: string;
    items: string;
    total: number;
    estado: string;
    fecha: string;
}

@Component({
    selector: 'app-adm-compras',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './adm-compras.component.html',
    styleUrls: ['./adm-compras.component.scss']
})
export class AdmComprasComponent implements OnInit {
    Math = Math;
    compras: AdmCompra[] = [];
    filteredCompras: AdmCompra[] = [];
    searchTerm = ''; statusFilter = 'all';
    currentPage = 1; pageSize = 10;
    openMenuId: string | null = null;
    showModal = false; editingItem: AdmCompra | null = null; formData: Partial<AdmCompra> = {};
    stats = { total: 0, consignadas: 0, revocadas: 0, montoTotal: 0 };
    statusOptions = ['CONSIGNADO', 'REVOCADO', 'PENDIENTE'];

    ngOnInit(): void { this.applyFilters(); }

    calculateStats(): void {
        this.stats.total = this.filteredCompras.length;
        this.stats.consignadas = this.filteredCompras.filter(c => c.estado === 'CONSIGNADO').length;
        this.stats.revocadas = this.filteredCompras.filter(c => c.estado === 'REVOCADO').length;
        this.stats.montoTotal = this.filteredCompras.reduce((a, c) => a + c.total, 0);
    }

    applyFilters(): void {
        this.filteredCompras = this.compras.filter(c => {
            const s = !this.searchTerm || c.numeroCompra.toLowerCase().includes(this.searchTerm.toLowerCase()) || c.proveedor.toLowerCase().includes(this.searchTerm.toLowerCase());
            return s && (this.statusFilter === 'all' || c.estado === this.statusFilter);
        });
        this.calculateStats(); this.currentPage = 1;
    }

    clearFilters(): void { this.searchTerm = ''; this.statusFilter = 'all'; this.applyFilters(); }
    get paginatedCompras(): AdmCompra[] { const s = (this.currentPage - 1) * this.pageSize; return this.filteredCompras.slice(s, s + this.pageSize); }
    get totalPages(): number { return Math.ceil(this.filteredCompras.length / this.pageSize) || 1; }
    get pages(): number[] { return Array.from({ length: this.totalPages }, (_, i) => i + 1); }
    goToPage(p: number): void { if (p >= 1 && p <= this.totalPages) this.currentPage = p; }
    toggleMenu(id: string): void { this.openMenuId = this.openMenuId === id ? null : id; }
    openAddModal(): void { this.editingItem = null; this.formData = { estado: 'PENDIENTE', total: 0 }; this.showModal = true; }
    openEditModal(item: AdmCompra): void { this.editingItem = item; this.formData = { ...item }; this.showModal = true; this.openMenuId = null; }
    closeModal(): void { this.showModal = false; this.editingItem = null; this.formData = {}; }

    saveItem(): void {
        if (this.editingItem) {
            const idx = this.compras.findIndex(c => c.id === this.editingItem!.id);
            if (idx !== -1) this.compras[idx] = { ...this.compras[idx], ...this.formData };
        } else {
            this.compras.unshift({ id: `CMP${String(this.compras.length + 1).padStart(3, '0')}`, numeroCompra: this.formData.numeroCompra || '', proveedor: this.formData.proveedor || '', items: this.formData.items || '', total: this.formData.total || 0, estado: this.formData.estado || 'PENDIENTE', fecha: this.formData.fecha || new Date().toISOString().split('T')[0] });
        }
        this.applyFilters(); this.closeModal();
    }

    deleteItem(id: string): void {
        if (confirm('¿Está seguro?')) { this.compras = this.compras.filter(c => c.id !== id); this.applyFilters(); this.openMenuId = null; }
    }
    getStatusLabel(s: string): string { const m: Record<string, string> = { CONSIGNADO: 'Consignado', REVOCADO: 'Revocado', PENDIENTE: 'Pendiente' }; return m[s] || s; }
    getStatusClass(s: string): string { const m: Record<string, string> = { CONSIGNADO: 'success', REVOCADO: 'danger', PENDIENTE: 'warning' }; return m[s] || 'neutral'; }
}
