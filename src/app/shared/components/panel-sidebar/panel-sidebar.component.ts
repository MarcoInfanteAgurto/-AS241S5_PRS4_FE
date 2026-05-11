import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface PanelMenuItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
}

export interface PanelMenu {
  title: string;
  icon: string;
  desc: string;
  items: PanelMenuItem[];
}

@Component({
  selector: 'app-panel-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './panel-sidebar.component.html',
  styleUrls: ['./panel-sidebar.component.scss']
})
export class PanelSidebarComponent {
  @Input() activeModule: string | null = null;
  @Input() activePage: string | null = null;
  @Output() selectPage = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  // Definición de menús basada exactamente en SisCaritas
  menus: { [key: string]: PanelMenu } = {
    dashboard: {
      title: 'Dashboard',
      icon: 'fa-house',
      desc: '',
      items: []
    },
    
    // PERSONAS (Users) - MS 8081
    users: {
      title: 'Personas',
      icon: 'fa-users',
      desc: 'Gestión de personas y roles',
      items: [
        { id: 'usuarios', label: 'Usuarios Sistema', icon: 'fa-key', route: '/admin/users' },
        { id: 'beneficiarios', label: 'Beneficiarios', icon: 'fa-users', route: '/admin/beneficiarios' },
        { id: 'voluntarios', label: 'Voluntarios', icon: 'fa-heart', route: '/admin/voluntarios' },
        { id: 'pacientes', label: 'Pacientes', icon: 'fa-user', route: '/admin/patients' },
        { id: 'personal-medico', label: 'Personal Médico', icon: 'fa-user-doctor', route: '/admin/doctors' },
        { id: 'proveedores', label: 'Proveedores', icon: 'fa-box', route: '/admin/suppliers' }
      ]
    },

    // SOCIAL (Leaf)
    social: {
      title: 'Social',
      icon: 'fa-leaf',
      desc: 'Proyectos y asistencia social',
      items: [
        { id: 'proyectos', label: 'Proyectos', icon: 'fa-layer-group', route: '/admin/proyectos' },
        { id: 'campanas', label: 'Campañas', icon: 'fa-heart', route: '/admin/campanas' },
        { id: 'distribuciones', label: 'Distribuciones', icon: 'fa-box', route: '/admin/distribuciones' },
        { id: 'beneficiarios-atendidos', label: 'Beneficiarios Atendidos', icon: 'fa-users', route: '/admin/beneficiarios-atendidos' },
        { id: 'donaciones', label: 'Donaciones', icon: 'fa-gift', route: '/admin/donaciones' }
      ]
    },

    // CLÍNICA (Building2) - MS 8084
    doctors: {
      title: 'Clínica',
      icon: 'fa-building',
      desc: 'Atención médica y pacientes',
      items: [
        { id: 'atencion-medica', label: 'Atención Médica', icon: 'fa-stethoscope', route: '/admin/atencion-medica' },
        { id: 'consultas', label: 'Consultas', icon: 'fa-clipboard', route: '/admin/consultas' },
        { id: 'terapias', label: 'Terapias', icon: 'fa-heart-pulse', route: '/admin/terapias' },
        { id: 'tratamientos', label: 'Tratamientos', icon: 'fa-hospital', route: '/admin/tratamientos' },
        { id: 'laboratorio', label: 'Laboratorio', icon: 'fa-flask', route: '/admin/laboratorio' },
        { id: 'pruebas-lab', label: 'Pruebas Laboratorio', icon: 'fa-vial', route: '/admin/pruebas-lab' },
        { id: 'kits-lab', label: 'Kits Laboratorio', icon: 'fa-box', route: '/admin/kits-lab' },
        { id: 'especialidades', label: 'Especialidades', icon: 'fa-star', route: '/admin/specialties' },
        { id: 'cli-personal-medico', label: 'Personal Médico', icon: 'fa-user-doctor', route: '/admin/doctors' }
      ]
    },

    // FARMACIA (Pill) - MS 8085
    medications: {
      title: 'Farmacia',
      icon: 'fa-pills',
      desc: 'Medicamentos e inventario',
      items: [
        { id: 'medicamentos', label: 'Medicamentos', icon: 'fa-pills', route: '/admin/medications' },
        { id: 'ventas-farmacia', label: 'Ventas Farmacia', icon: 'fa-shopping-cart', route: '/admin/ventas-farmacia' },
        { id: 'compras-farmacia', label: 'Compras Farmacia', icon: 'fa-receipt', route: '/admin/compras-farmacia' },
        { id: 'inventario-farmacia', label: 'Inventario Farmacia', icon: 'fa-database', route: '/admin/inventario-farmacia' },
        { id: 'movimientos-farm', label: 'Movimientos', icon: 'fa-right-left', route: '/admin/movimientos' },
        { id: 'alertas-stock', label: 'Alertas de Stock', icon: 'fa-triangle-exclamation', route: '/admin/alertas-stock' }
      ]
    },

    // PRODUCTOS (Package) - MS 8086
    products: {
      title: 'Productos',
      icon: 'fa-box',
      desc: 'Catálogo de servicios',
      items: [
        { id: 'prod-tratamientos', label: 'Tratamientos', icon: 'fa-hospital', route: '/admin/prod-tratamientos' },
        { id: 'prod-consultas', label: 'Consultas', icon: 'fa-clipboard', route: '/admin/prod-consultas' },
        { id: 'prod-terapias', label: 'Terapias', icon: 'fa-heart-pulse', route: '/admin/prod-terapias' },
        { id: 'prod-medicamentos', label: 'Medicamentos', icon: 'fa-pills', route: '/admin/prod-medicamentos' },
        { id: 'prod-kits-lab', label: 'Kits Laboratorio', icon: 'fa-box', route: '/admin/prod-kits-lab' }
      ]
    },

    // FINANZAS (DollarSign)
    finances: {
      title: 'Finanzas',
      icon: 'fa-dollar-sign',
      desc: 'Ingresos, egresos y balance',
      items: [
        { id: 'ingresos', label: 'Ingresos', icon: 'fa-arrow-trend-up', route: '/admin/ingresos' },
        { id: 'egresos', label: 'Egresos', icon: 'fa-arrow-trend-down', route: '/admin/egresos' },
        { id: 'gastos', label: 'Gastos', icon: 'fa-wallet', route: '/admin/gastos' },
        { id: 'compras', label: 'Compras', icon: 'fa-shopping-cart', route: '/admin/compras' },
        { id: 'balance', label: 'Balance General', icon: 'fa-chart-pie', route: '/admin/balance' },
        { id: 'flujo-caja', label: 'Flujo de Caja', icon: 'fa-credit-card', route: '/admin/flujo-caja' }
      ]
    },

    // REPORTES (BarChart2)
    reports: {
      title: 'Reportes',
      icon: 'fa-chart-bar',
      desc: 'Análisis y estadísticas',
      items: [
        { id: 'rep-ventas', label: 'Ventas Médicas', icon: 'fa-chart-bar', route: '/admin/rep-ventas' },
        { id: 'rep-compras', label: 'Compras Médicas', icon: 'fa-receipt', route: '/admin/rep-compras' },
        { id: 'rep-laboratorio', label: 'Laboratorio', icon: 'fa-flask', route: '/admin/rep-laboratorio' },
        { id: 'rep-productos', label: 'Productos', icon: 'fa-box', route: '/admin/rep-productos' },
        { id: 'rep-tratamientos', label: 'Tratamientos', icon: 'fa-hospital', route: '/admin/rep-tratamientos' },
        { id: 'rep-consultas', label: 'Consultas', icon: 'fa-clipboard', route: '/admin/rep-consultas' },
        { id: 'rep-terapias', label: 'Terapias', icon: 'fa-heart-pulse', route: '/admin/rep-terapias' },
        { id: 'rep-pacientes', label: 'Pacientes', icon: 'fa-user', route: '/admin/rep-pacientes' },
        { id: 'ranking', label: 'Ranking', icon: 'fa-star', route: '/admin/ranking' }
      ]
    },

    // CONFIGURACIÓN (Settings) - MS 8087
    specialties: {
      title: 'Configuración',
      icon: 'fa-gear',
      desc: 'Parámetros y catálogos',
      items: [
        { id: 'adm-especialidades', label: 'Especialidades', icon: 'fa-star', route: '/admin/specialties' },
        { id: 'tipo-cliente', label: 'Tipo de Cliente', icon: 'fa-tag', route: '/admin/config-sistema' },
        { id: 'precios-terapias', label: 'Precios de Terapias', icon: 'fa-dollar-sign', route: '/admin/config-sistema' },
        { id: 'precios-consultas', label: 'Precios de Consultas', icon: 'fa-dollar-sign', route: '/admin/config-sistema' },
        { id: 'adm-pruebas-lab', label: 'Pruebas Laboratorio', icon: 'fa-vial', route: '/admin/pruebas-lab' },
        { id: 'adm-kits-lab', label: 'Kits Laboratorio', icon: 'fa-box', route: '/admin/kits-lab' },
        { id: 'precios-productos', label: 'Precios de Productos', icon: 'fa-dollar-sign', route: '/admin/config-sistema' },
        { id: 'adm-compras', label: 'Compras', icon: 'fa-shopping-cart', route: '/admin/compras' },
        { id: 'config-sistema', label: 'Configuración del Sistema', icon: 'fa-sliders', route: '/admin/config-sistema' }
      ]
    },

    // CONFIGURACIÓN AVANZADA (Sliders)
    settings: {
      title: 'Configuración',
      icon: 'fa-sliders',
      desc: 'Apariencia, seguridad y sistema',
      items: [
        { id: 'config-apariencia', label: 'Apariencia', icon: 'fa-palette', route: '/admin/config-apariencia' },
        { id: 'config-notificaciones', label: 'Notificaciones', icon: 'fa-bell', route: '/admin/config-notificaciones' },
        { id: 'config-seguridad', label: 'Privacidad y Seguridad', icon: 'fa-shield', route: '/admin/config-seguridad' },
        { id: 'config-perfil', label: 'Perfil', icon: 'fa-user', route: '/admin/config-perfil' },
        { id: 'config-sistema', label: 'Sistema', icon: 'fa-globe', route: '/admin/config-sistema' }
      ]
    },

    // PROVEEDORES (Building) - MS 8082
    suppliers: {
      title: 'Proveedores',
      icon: 'fa-building',
      desc: 'Gestión de proveedores',
      items: [
        { id: 'suppliers-list', label: 'Lista de Proveedores', icon: 'fa-list', route: '/admin/suppliers' },
        { id: 'suppliers-orders', label: 'Órdenes de Compra', icon: 'fa-file-invoice' },
        { id: 'suppliers-payments', label: 'Pagos', icon: 'fa-money-bill' },
        { id: 'suppliers-contracts', label: 'Contratos', icon: 'fa-file-contract' }
      ]
    },

    // PACIENTES (User) - MS 8083
    patients: {
      title: 'Pacientes',
      icon: 'fa-user',
      desc: 'Gestión de pacientes',
      items: [
        { id: 'patients-list', label: 'Lista de Pacientes', icon: 'fa-list', route: '/admin/patients' },
        { id: 'patients-history', label: 'Historial Médico', icon: 'fa-file-medical' },
        { id: 'patients-appointments', label: 'Citas', icon: 'fa-calendar-check' },
        { id: 'patients-records', label: 'Expedientes', icon: 'fa-folder-open' }
      ]
    }
  };

  get currentMenu(): PanelMenu | null {
    return this.activeModule ? this.menus[this.activeModule] : null;
  }

  onSelectPage(pageId: string): void {
    this.selectPage.emit(pageId);
  }

  onClose(): void {
    this.close.emit();
  }
}
