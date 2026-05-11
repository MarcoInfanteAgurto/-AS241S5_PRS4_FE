import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  status: string;
  lastLogin?: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // Mock data - será reemplazado por datos reales del backend
  users: User[] = [];

  filteredUsers: User[] = [];
  searchTerm = '';
  statusFilter = 'all';
  roleFilter = 'all';
  currentPage = 1;
  pageSize = 10;
  openMenuId: string | null = null;
  showModal = false;
  editingUser: User | null = null;
  formData: Partial<User> = {};

  // Stats
  stats = {
    total: 0,
    active: 0,
    admins: 0,
    lastLogins: 0
  };

  // Role options
  roleOptions = ['ADMIN', 'COORDINADOR', 'CONTADOR', 'VOLUNTARIO'];
  statusOptions = ['ACTIVE', 'INACTIVE'];

  ngOnInit(): void {
    this.filteredUsers = [...this.users];
    this.calculateStats();
  }

  calculateStats(): void {
    this.stats.total = this.filteredUsers.length;
    this.stats.active = this.filteredUsers.filter(u => u.status === 'ACTIVE').length;
    this.stats.admins = this.filteredUsers.filter(u => u.role === 'ADMIN').length;
    this.stats.lastLogins = this.filteredUsers.filter(u => u.lastLogin).length;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.applyFilters();
  }

  onRoleFilterChange(role: string): void {
    this.roleFilter = role;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = !this.searchTerm || 
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = this.statusFilter === 'all' || user.status === this.statusFilter;
      const matchesRole = this.roleFilter === 'all' || user.role === this.roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
    this.calculateStats();
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.statusFilter = 'all';
    this.roleFilter = 'all';
    this.applyFilters();
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredUsers.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  toggleMenu(userId: string): void {
    this.openMenuId = this.openMenuId === userId ? null : userId;
  }

  openAddModal(): void {
    this.editingUser = null;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(user: User): void {
    this.editingUser = user;
    this.formData = { ...user };
    this.showModal = true;
    this.openMenuId = null;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingUser = null;
    this.formData = {};
  }

  saveUser(): void {
    if (this.editingUser) {
      // Update existing user
      const index = this.users.findIndex(u => u.id === this.editingUser!.id);
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...this.formData };
      }
    } else {
      // Add new user
      const newUser: User = {
        id: `USR${String(this.users.length + 1).padStart(3, '0')}`,
        firstName: this.formData.firstName || '',
        lastName: this.formData.lastName || '',
        phone: this.formData.phone || '',
        email: this.formData.email || '',
        role: this.formData.role || 'VOLUNTARIO',
        status: this.formData.status || 'ACTIVE'
      };
      this.users.unshift(newUser);
    }
    this.applyFilters();
    this.closeModal();
  }

  deleteUser(userId: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.users = this.users.filter(u => u.id !== userId);
      this.applyFilters();
      this.openMenuId = null;
    }
  }

  exportCsv(): void {
    console.log('Exportando CSV...');
    // Implementar exportación CSV
  }

  getInitials(user: User): string {
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  }

  getRoleLabel(role: string): string {
    const labels: { [key: string]: string } = {
      'ADMIN': 'Administrador',
      'COORDINADOR': 'Coordinador',
      'CONTADOR': 'Contador',
      'VOLUNTARIO': 'Voluntario'
    };
    return labels[role] || role;
  }

  getStatusLabel(status: string): string {
    return status === 'ACTIVE' ? 'Activo' : 'Inactivo';
  }
}
