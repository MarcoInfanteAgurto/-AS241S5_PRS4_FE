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

  menus: { [key: string]: PanelMenu } = {

    // PERSONAS
    users: {
      title: 'Personas',
      icon: 'group-line',
      desc: 'Gestión de personas y roles',
      items: [
        { id: 'usuarios', label: 'Usuarios Sistema', icon: 'key-2-line', route: '/admin/users' },
        { id: 'beneficiarios', label: 'Beneficiarios', icon: 'user-heart-line', route: '/admin/beneficiarios' },
        { id: 'voluntarios', label: 'Voluntarios', icon: 'hand-heart-line', route: '/admin/voluntarios' },
        { id: 'pacientes', label: 'Pacientes', icon: 'user-line', route: '/admin/patients' },
        { id: 'personal-medico', label: 'Personal Médico', icon: 'stethoscope-line', route: '/admin/doctors' },
        { id: 'proveedores', label: 'Proveedores', icon: 'building-2-line', route: '/admin/suppliers' }
      ]
    },

    // SOCIAL
    social: {
      title: 'Social',
      icon: 'seedling-line',
      desc: 'Proyectos y asistencia social',
      items: [
        { id: 'proyectos', label: 'Proyectos', icon: 'stack-line', route: '/admin/proyectos' },
        { id: 'campanas', label: 'Campañas', icon: 'heart-line', route: '/admin/campanas' },
        { id: 'distribuciones', label: 'Distribuciones', icon: 'truck-line', route: '/admin/distribuciones' },
        { id: 'beneficiarios-atendidos', label: 'Beneficiarios Atendidos', icon: 'user-received-line', route: '/admin/beneficiarios-atendidos' },
        { id: 'donaciones', label: 'Donaciones', icon: 'gift-line', route: '/admin/donaciones' }
      ]
    },

    // CLÍNICA
    doctors: {
      title: 'Clínica',
      icon: 'hospital-line',
      desc: 'Atención médica y pacientes',
      items: [
        { id: 'atencion-medica', label: 'Atención Médica', icon: 'stethoscope-line', route: '/admin/atencion-medica' },
        { id: 'consultas', label: 'Consultas', icon: 'file-list-3-line', route: '/admin/consultas' },
        { id: 'terapias', label: 'Terapias', icon: 'heart-pulse-line', route: '/admin/terapias' },
        { id: 'tratamientos', label: 'Tratamientos', icon: 'surgical-mask-line', route: '/admin/tratamientos' },
        { id: 'laboratorio', label: 'Laboratorio', icon: 'flask-line', route: '/admin/laboratorio' },
        { id: 'pruebas-lab', label: 'Pruebas Laboratorio', icon: 'test-tube-line', route: '/admin/pruebas-lab' },
        { id: 'kits-lab', label: 'Kits Laboratorio', icon: 'first-aid-kit-line', route: '/admin/kits-lab' },
        { id: 'especialidades', label: 'Especialidades', icon: 'award-line', route: '/admin/specialties' },
        { id: 'cli-personal', label: 'Personal Médico', icon: 'user-star-line', route: '/admin/doctors' }
      ]
    },

    // FARMACIA
    medications: {
      title: 'Farmacia',
      icon: 'medicine-bottle-line',
      desc: 'Medicamentos e inventario',
      items: [
        { id: 'medicamentos', label: 'Medicamentos', icon: 'capsule-line', route: '/admin/medications' },
        { id: 'ventas-farmacia', label: 'Ventas Farmacia', icon: 'shopping-cart-line', route: '/admin/ventas-farmacia' },
        { id: 'compras-farmacia', label: 'Compras Farmacia', icon: 'receipt-line', route: '/admin/compras-farmacia' },
        { id: 'inventario-farmacia', label: 'Inventario', icon: 'archive-drawer-line', route: '/admin/inventario-farmacia' },
        { id: 'movimientos-farm', label: 'Movimientos', icon: 'arrow-left-right-line', route: '/admin/movimientos' },
        { id: 'alertas-stock', label: 'Alertas de Stock', icon: 'alarm-warning-line', route: '/admin/alertas-stock' }
      ]
    },

    // PRODUCTOS
    products: {
      title: 'Productos',
      icon: 'price-tag-3-line',
      desc: 'Catálogo de servicios',
      items: [
        { id: 'prod-tratamientos', label: 'Tratamientos', icon: 'surgical-mask-line', route: '/admin/prod-tratamientos' },
        { id: 'prod-consultas', label: 'Consultas', icon: 'file-list-3-line', route: '/admin/prod-consultas' },
        { id: 'prod-terapias', label: 'Terapias', icon: 'heart-pulse-line', route: '/admin/prod-terapias' },
        { id: 'prod-medicamentos', label: 'Medicamentos', icon: 'capsule-line', route: '/admin/prod-medicamentos' },
        { id: 'prod-kits-lab', label: 'Kits Laboratorio', icon: 'first-aid-kit-line', route: '/admin/prod-kits-lab' }
      ]
    },

    // FINANZAS
    finances: {
      title: 'Finanzas',
      icon: 'money-dollar-circle-line',
      desc: 'Ingresos, egresos y balance',
      items: [
        { id: 'ingresos', label: 'Ingresos', icon: 'arrow-up-circle-line', route: '/admin/ingresos' },
        { id: 'egresos', label: 'Egresos', icon: 'arrow-down-circle-line', route: '/admin/egresos' },
        { id: 'gastos', label: 'Gastos', icon: 'wallet-3-line', route: '/admin/gastos' },
        { id: 'compras', label: 'Compras', icon: 'shopping-bag-line', route: '/admin/compras' },
        { id: 'balance', label: 'Balance General', icon: 'scales-line', route: '/admin/balance' },
        { id: 'flujo-caja', label: 'Flujo de Caja', icon: 'exchange-dollar-line', route: '/admin/flujo-caja' }
      ]
    },

    // REPORTES
    reports: {
      title: 'Reportes',
      icon: 'bar-chart-2-line',
      desc: 'Análisis y estadísticas',
      items: [
        { id: 'rep-ventas', label: 'Ventas Médicas', icon: 'line-chart-line', route: '/admin/rep-ventas' },
        { id: 'rep-compras', label: 'Compras Médicas', icon: 'receipt-line', route: '/admin/rep-compras' },
        { id: 'rep-laboratorio', label: 'Laboratorio', icon: 'flask-line', route: '/admin/rep-laboratorio' },
        { id: 'rep-productos', label: 'Productos', icon: 'price-tag-3-line', route: '/admin/rep-productos' },
        { id: 'rep-tratamientos', label: 'Tratamientos', icon: 'surgical-mask-line', route: '/admin/rep-tratamientos' },
        { id: 'rep-consultas', label: 'Consultas', icon: 'file-list-3-line', route: '/admin/rep-consultas' },
        { id: 'rep-terapias', label: 'Terapias', icon: 'heart-pulse-line', route: '/admin/rep-terapias' },
        { id: 'rep-pacientes', label: 'Pacientes', icon: 'user-line', route: '/admin/rep-pacientes' },
        { id: 'ranking', label: 'Ranking', icon: 'trophy-line', route: '/admin/ranking' }
      ]
    },

    // ADMINISTRACIÓN (antes "specialties")
    specialties: {
      title: 'Administración',
      icon: 'shield-keyhole-line',
      desc: 'Catálogos y parámetros del sistema',
      items: [
        { id: 'adm-especialidades', label: 'Especialidades', icon: 'award-line', route: '/admin/specialties' },
        { id: 'adm-tipo-cliente', label: 'Tipo de Cliente', icon: 'price-tag-2-line', route: '/admin/adm-tipo-cliente' },
        { id: 'adm-precios-terapias', label: 'Precios de Terapias', icon: 'heart-pulse-line', route: '/admin/adm-precios-terapias' },
        { id: 'adm-precios-consultas', label: 'Precios de Consultas', icon: 'file-list-3-line', route: '/admin/adm-precios-consultas' },
        { id: 'adm-pruebas-lab', label: 'Pruebas Laboratorio', icon: 'test-tube-line', route: '/admin/adm-pruebas-lab' },
        { id: 'adm-kits-lab', label: 'Kits Laboratorio', icon: 'first-aid-kit-line', route: '/admin/adm-kits-lab' },
        { id: 'adm-compras', label: 'Compras', icon: 'shopping-bag-line', route: '/admin/adm-compras' }
      ]
    },

    // CONFIGURACIÓN
    settings: {
      title: 'Configuración',
      icon: 'settings-3-line',
      desc: 'Apariencia, seguridad y sistema',
      items: [
        { id: 'config-apariencia', label: 'Apariencia', icon: 'palette-line', route: '/admin/config-apariencia' },
        { id: 'config-notificaciones', label: 'Notificaciones', icon: 'notification-3-line', route: '/admin/config-notificaciones' },
        { id: 'config-seguridad', label: 'Privacidad y Seguridad', icon: 'shield-check-line', route: '/admin/config-seguridad' },
        { id: 'config-perfil', label: 'Perfil', icon: 'user-settings-line', route: '/admin/config-perfil' },
        { id: 'config-sistema', label: 'Sistema', icon: 'global-line', route: '/admin/config-sistema' }
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
