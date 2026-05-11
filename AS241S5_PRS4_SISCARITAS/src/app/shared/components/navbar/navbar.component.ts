import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private router = inject(Router);

  pageTitle = 'Dashboard';
  pageSubtitle = 'Panel de control y estadísticas';
  currentDate = '';

  private pageTitles: { [key: string]: { title: string; subtitle: string } } = {
    // Dashboard
    '/admin/dashboard': { title: 'Dashboard', subtitle: 'Panel de control y estadísticas' },
    
    // PERSONAS
    '/admin/users': { title: 'Gestión de Usuarios', subtitle: 'Administración de usuarios del sistema' },
    '/admin/beneficiarios': { title: 'Gestión de Beneficiarios', subtitle: 'Registro y seguimiento de beneficiarios' },
    '/admin/voluntarios': { title: 'Gestión de Voluntarios', subtitle: 'Control de voluntarios y horas trabajadas' },
    '/admin/patients': { title: 'Gestión de Pacientes', subtitle: 'Historias clínicas y atenciones' },
    '/admin/doctors': { title: 'Gestión de Personal Médico', subtitle: 'Médicos y especialistas' },
    '/admin/suppliers': { title: 'Gestión de Proveedores', subtitle: 'Proveedores y contratos' },
    
    // SOCIAL
    '/admin/proyectos': { title: 'Gestión de Proyectos', subtitle: 'Proyectos sociales y presupuestos' },
    '/admin/campanas': { title: 'Gestión de Campañas', subtitle: 'Campañas sociales y de salud' },
    '/admin/distribuciones': { title: 'Gestión de Distribuciones', subtitle: 'Distribución de productos y logística' },
    '/admin/beneficiarios-atendidos': { title: 'Beneficiarios Atendidos', subtitle: 'Registro de atenciones realizadas' },
    '/admin/donaciones': { title: 'Gestión de Donaciones', subtitle: 'Donaciones recibidas y donantes' },
    
    // CLÍNICA
    '/admin/atencion-medica': { title: 'Atención Médica', subtitle: 'Registro de atenciones médicas' },
    '/admin/consultas': { title: 'Gestión de Consultas', subtitle: 'Consultas médicas y diagnósticos' },
    '/admin/terapias': { title: 'Gestión de Terapias', subtitle: 'Terapias y sesiones' },
    '/admin/tratamientos': { title: 'Gestión de Tratamientos', subtitle: 'Tratamientos médicos y seguimiento' },
    '/admin/laboratorio': { title: 'Gestión de Laboratorio', subtitle: 'Laboratorio clínico y análisis' },
    '/admin/pruebas-lab': { title: 'Pruebas de Laboratorio', subtitle: 'Catálogo de pruebas disponibles' },
    '/admin/kits-lab': { title: 'Kits de Laboratorio', subtitle: 'Gestión de kits y materiales' },
    '/admin/specialties': { title: 'Gestión de Especialidades', subtitle: 'Especialidades médicas' },
    
    // FARMACIA
    '/admin/medications': { title: 'Gestión de Medicamentos', subtitle: 'Catálogo de medicamentos y stock' },
    '/admin/ventas-farmacia': { title: 'Ventas de Farmacia', subtitle: 'Registro de ventas y facturación' },
    '/admin/compras-farmacia': { title: 'Compras de Farmacia', subtitle: 'Órdenes de compra de medicamentos' },
    '/admin/inventario-farmacia': { title: 'Inventario de Farmacia', subtitle: 'Control de stock y movimientos' },
    '/admin/movimientos': { title: 'Movimientos de Inventario', subtitle: 'Historial de entradas y salidas' },
    '/admin/alertas-stock': { title: 'Alertas de Stock', subtitle: 'Notificaciones de stock mínimo' },
    
    // PRODUCTOS
    '/admin/products': { title: 'Gestión de Productos', subtitle: 'Catálogo general de productos' },
    '/admin/prod-tratamientos': { title: 'Productos - Tratamientos', subtitle: 'Catálogo de tratamientos' },
    '/admin/prod-consultas': { title: 'Productos - Consultas', subtitle: 'Catálogo de consultas' },
    '/admin/prod-terapias': { title: 'Productos - Terapias', subtitle: 'Catálogo de terapias' },
    '/admin/prod-medicamentos': { title: 'Productos - Medicamentos', subtitle: 'Catálogo de medicamentos' },
    '/admin/prod-kits-lab': { title: 'Productos - Kits Lab', subtitle: 'Catálogo de kits de laboratorio' },
    
    // FINANZAS
    '/admin/ingresos': { title: 'Gestión de Ingresos', subtitle: 'Registro de ingresos y cobros' },
    '/admin/egresos': { title: 'Gestión de Egresos', subtitle: 'Registro de egresos y pagos' },
    '/admin/gastos': { title: 'Gestión de Gastos', subtitle: 'Control de gastos operativos' },
    '/admin/compras': { title: 'Gestión de Compras', subtitle: 'Órdenes de compra generales' },
    '/admin/balance': { title: 'Balance General', subtitle: 'Estado financiero consolidado' },
    '/admin/flujo-caja': { title: 'Flujo de Caja', subtitle: 'Proyecciones y análisis de caja' },
    
    // REPORTES
    '/admin/rep-ventas': { title: 'Reporte de Ventas', subtitle: 'Análisis de ventas médicas' },
    '/admin/rep-compras': { title: 'Reporte de Compras', subtitle: 'Análisis de compras médicas' },
    '/admin/rep-laboratorio': { title: 'Reporte de Laboratorio', subtitle: 'Estadísticas de laboratorio' },
    '/admin/rep-productos': { title: 'Reporte de Productos', subtitle: 'Análisis de productos' },
    '/admin/rep-tratamientos': { title: 'Reporte de Tratamientos', subtitle: 'Estadísticas de tratamientos' },
    '/admin/rep-consultas': { title: 'Reporte de Consultas', subtitle: 'Análisis de consultas médicas' },
    '/admin/rep-terapias': { title: 'Reporte de Terapias', subtitle: 'Estadísticas de terapias' },
    '/admin/rep-pacientes': { title: 'Reporte de Pacientes', subtitle: 'Análisis demográfico de pacientes' },
    '/admin/ranking': { title: 'Ranking y Estadísticas', subtitle: 'Top performers y métricas clave' },
    
    // CONFIGURACIÓN
    '/admin/config-apariencia': { title: 'Configuración de Apariencia', subtitle: 'Personalización del tema' },
    '/admin/config-notificaciones': { title: 'Configuración de Notificaciones', subtitle: 'Preferencias de alertas' },
    '/admin/config-seguridad': { title: 'Configuración de Seguridad', subtitle: 'Seguridad y autenticación' },
    '/admin/config-perfil': { title: 'Configuración de Perfil', subtitle: 'Datos personales del usuario' },
    '/admin/config-sistema': { title: 'Configuración del Sistema', subtitle: 'Parámetros generales' }
  };

  ngOnInit(): void {
    this.updateDate();
    this.updatePageTitle(this.router.url);

    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updatePageTitle(event.url);
      });

    // Update date every minute
    setInterval(() => this.updateDate(), 60000);
  }

  private updateDate(): void {
    const now = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.currentDate = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
  }

  private updatePageTitle(url: string): void {
    const pageInfo = this.pageTitles[url] || { title: 'SisCaritas', subtitle: '' };
    this.pageTitle = pageInfo.title;
    this.pageSubtitle = pageInfo.subtitle;
  }
}
