import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { PanelSidebarComponent } from '../panel-sidebar/panel-sidebar.component';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private sidebarState = inject(SidebarStateService);

  profileOpen = false;
  userName = 'Usuario Demo';
  userRole = 'ADMIN';
  userInitials = 'UD';

  // Panel sidebar state
  activeModule: string | null = null;
  activePage: string | null = null;

  constructor() {
    // Subscribe to current user
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.userName = user.username || 'Usuario';
        this.userRole = user.role || 'USER';
        this.userInitials = this.getInitials(this.userName);
      }
    });
  }

  selectModule(moduleId: string): void {
    // Si es dashboard, navegar directamente
    if (moduleId === 'dashboard') {
      this.activeModule = null;
      this.sidebarState.setPanelOpen(false);
      this.router.navigate(['/admin/dashboard']);
      return;
    }

    // Toggle panel: si ya está abierto el mismo módulo, cerrarlo
    if (this.activeModule === moduleId) {
      this.activeModule = null;
      this.activePage = null;
      this.sidebarState.setPanelOpen(false);
    } else {
      this.activeModule = moduleId;
      this.sidebarState.setPanelOpen(true);

      // Navegar automáticamente a la primera subsección del módulo
      this.navigateToFirstSubsection(moduleId);
    }
  }

  private navigateToFirstSubsection(moduleId: string): void {
    // Mapeo de módulos a su primera ruta
    const firstRoutes: { [key: string]: string } = {
      'users': '/admin/users',
      'social': '/admin/proyectos',
      'doctors': '/admin/atencion-medica',
      'medications': '/admin/medications',
      'products': '/admin/prod-tratamientos',
      'finances': '/admin/ingresos',
      'reports': '/admin/rep-ventas',
      'specialties': '/admin/specialties',
      'settings': '/admin/config-apariencia',
      'suppliers': '/admin/suppliers',
      'patients': '/admin/patients'
    };

    const route = firstRoutes[moduleId];
    if (route) {
      this.router.navigate([route]);
    }
  }

  selectPage(pageId: string): void {
    this.activePage = pageId;
  }

  closePanel(): void {
    this.activeModule = null;
    this.activePage = null;
    this.sidebarState.setPanelOpen(false);
  }

  toggleProfile(): void {
    this.profileOpen = !this.profileOpen;
  }

  closeProfile(): void {
    this.profileOpen = false;
  }

  logout(): void {
    this.profileOpen = false;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private getInitials(name: string): string {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
}
