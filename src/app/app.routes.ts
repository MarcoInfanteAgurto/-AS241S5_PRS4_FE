import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },

      // ═══ PERSONAS ═══
      {
        path: 'users',
        loadComponent: () => import('./features/users/user-list/user-list.component').then(m => m.UserListComponent)
      },
      {
        path: 'beneficiarios',
        loadComponent: () => import('./features/personas/beneficiarios/beneficiarios.component').then(m => m.BeneficiariosComponent)
      },
      {
        path: 'voluntarios',
        loadComponent: () => import('./features/personas/voluntarios/voluntarios.component').then(m => m.VoluntariosComponent)
      },
      {
        path: 'patients',
        loadComponent: () => import('./features/patients/patient-list/patient-list.component').then(m => m.PatientListComponent)
      },
      {
        path: 'doctors',
        loadComponent: () => import('./features/doctors/doctor-list/doctor-list.component').then(m => m.DoctorListComponent)
      },
      {
        path: 'suppliers',
        loadComponent: () => import('./features/suppliers/supplier-list/supplier-list.component').then(m => m.SupplierListComponent)
      },

      // ═══ SOCIAL ═══
      {
        path: 'proyectos',
        loadComponent: () => import('./features/social/proyectos/proyectos.component').then(m => m.ProyectosComponent)
      },
      {
        path: 'campanas',
        loadComponent: () => import('./features/social/campanas/campanas.component').then(m => m.CampanasComponent)
      },
      {
        path: 'distribuciones',
        loadComponent: () => import('./features/social/distribuciones/distribuciones.component').then(m => m.DistribucionesComponent)
      },
      {
        path: 'beneficiarios-atendidos',
        loadComponent: () => import('./features/social/beneficiarios-atendidos/beneficiarios-atendidos.component').then(m => m.BeneficiariosAtendidosComponent)
      },
      {
        path: 'donaciones',
        loadComponent: () => import('./features/social/donaciones/donaciones.component').then(m => m.DonacionesComponent)
      },

      // ═══ CLÍNICA ═══
      {
        path: 'atencion-medica',
        loadComponent: () => import('./features/clinica/atencion-medica/atencion-medica.component').then(m => m.AtencionMedicaComponent)
      },
      {
        path: 'consultas',
        loadComponent: () => import('./features/clinica/consultas/consultas.component').then(m => m.ConsultasComponent)
      },
      {
        path: 'terapias',
        loadComponent: () => import('./features/clinica/terapias/terapias.component').then(m => m.TerapiasComponent)
      },
      {
        path: 'tratamientos',
        loadComponent: () => import('./features/clinica/tratamientos/tratamientos.component').then(m => m.TratamientosComponent)
      },
      {
        path: 'laboratorio',
        loadComponent: () => import('./features/clinica/laboratorio/laboratorio.component').then(m => m.LaboratorioComponent)
      },
      {
        path: 'pruebas-lab',
        loadComponent: () => import('./features/clinica/pruebas-lab/pruebas-lab.component').then(m => m.PruebasLabComponent)
      },
      {
        path: 'kits-lab',
        loadComponent: () => import('./features/clinica/kits-lab/kits-lab.component').then(m => m.KitsLabComponent)
      },
      {
        path: 'specialties',
        loadComponent: () => import('./features/specialties/specialty-list/specialty-list.component').then(m => m.SpecialtyListComponent)
      },

      // ═══ FARMACIA ═══
      {
        path: 'medications',
        loadComponent: () => import('./features/medications/medication-list/medication-list.component').then(m => m.MedicationListComponent)
      },
      {
        path: 'ventas-farmacia',
        loadComponent: () => import('./features/farmacia/ventas-farmacia/ventas-farmacia.component').then(m => m.VentasFarmaciaComponent)
      },
      {
        path: 'compras-farmacia',
        loadComponent: () => import('./features/farmacia/compras-farmacia/compras-farmacia.component').then(m => m.ComprasFarmaciaComponent)
      },
      {
        path: 'inventario-farmacia',
        loadComponent: () => import('./features/farmacia/inventario-farmacia/inventario-farmacia.component').then(m => m.InventarioFarmaciaComponent)
      },
      {
        path: 'movimientos',
        loadComponent: () => import('./features/farmacia/movimientos/movimientos.component').then(m => m.MovimientosComponent)
      },
      {
        path: 'alertas-stock',
        loadComponent: () => import('./features/farmacia/alertas-stock/alertas-stock.component').then(m => m.AlertasStockComponent)
      },

      // ═══ PRODUCTOS ═══
      {
        path: 'products',
        loadComponent: () => import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'prod-tratamientos',
        loadComponent: () => import('./features/productos/prod-tratamientos/prod-tratamientos.component').then(m => m.ProdTratamientosComponent)
      },
      {
        path: 'prod-consultas',
        loadComponent: () => import('./features/productos/prod-consultas/prod-consultas.component').then(m => m.ProdConsultasComponent)
      },
      {
        path: 'prod-terapias',
        loadComponent: () => import('./features/productos/prod-terapias/prod-terapias.component').then(m => m.ProdTerapiasComponent)
      },
      {
        path: 'prod-medicamentos',
        loadComponent: () => import('./features/productos/prod-medicamentos/prod-medicamentos.component').then(m => m.ProdMedicamentosComponent)
      },
      {
        path: 'prod-kits-lab',
        loadComponent: () => import('./features/productos/prod-kits-lab/prod-kits-lab.component').then(m => m.ProdKitsLabComponent)
      },

      // ═══ ADMINISTRACIÓN ═══
      {
        path: 'adm-tipo-cliente',
        loadComponent: () => import('./features/administracion/adm-tipo-cliente/adm-tipo-cliente.component').then(m => m.AdmTipoClienteComponent)
      },
      {
        path: 'adm-precios-terapias',
        loadComponent: () => import('./features/administracion/adm-precios-terapias/adm-precios-terapias.component').then(m => m.AdmPreciosTerapiasComponent)
      },
      {
        path: 'adm-precios-consultas',
        loadComponent: () => import('./features/administracion/adm-precios-consultas/adm-precios-consultas.component').then(m => m.AdmPreciosConsultasComponent)
      },
      {
        path: 'adm-pruebas-lab',
        loadComponent: () => import('./features/administracion/adm-pruebas-lab/adm-pruebas-lab.component').then(m => m.AdmPruebasLabComponent)
      },
      {
        path: 'adm-kits-lab',
        loadComponent: () => import('./features/administracion/adm-kits-lab/adm-kits-lab.component').then(m => m.AdmKitsLabComponent)
      },
      {
        path: 'adm-compras',
        loadComponent: () => import('./features/administracion/adm-compras/adm-compras.component').then(m => m.AdmComprasComponent)
      },
      {
        path: 'ingresos',
        loadComponent: () => import('./features/finanzas/ingresos/ingresos.component').then(m => m.IngresosComponent)
      },
      {
        path: 'egresos',
        loadComponent: () => import('./features/finanzas/egresos/egresos.component').then(m => m.EgresosComponent)
      },
      {
        path: 'gastos',
        loadComponent: () => import('./features/finanzas/gastos/gastos.component').then(m => m.GastosComponent)
      },
      {
        path: 'compras',
        loadComponent: () => import('./features/finanzas/compras/compras.component').then(m => m.ComprasComponent)
      },
      {
        path: 'balance',
        loadComponent: () => import('./features/finanzas/balance/balance.component').then(m => m.BalanceComponent)
      },
      {
        path: 'flujo-caja',
        loadComponent: () => import('./features/finanzas/flujo-caja/flujo-caja.component').then(m => m.FlujoCajaComponent)
      },

      // ═══ REPORTES ═══
      {
        path: 'rep-ventas',
        loadComponent: () => import('./features/reportes/rep-ventas/rep-ventas.component').then(m => m.RepVentasComponent)
      },
      {
        path: 'rep-compras',
        loadComponent: () => import('./features/reportes/rep-compras/rep-compras.component').then(m => m.RepComprasComponent)
      },
      {
        path: 'rep-laboratorio',
        loadComponent: () => import('./features/reportes/rep-laboratorio/rep-laboratorio.component').then(m => m.RepLaboratorioComponent)
      },
      {
        path: 'rep-productos',
        loadComponent: () => import('./features/reportes/rep-productos/rep-productos.component').then(m => m.RepProductosComponent)
      },
      {
        path: 'rep-tratamientos',
        loadComponent: () => import('./features/reportes/rep-tratamientos/rep-tratamientos.component').then(m => m.RepTratamientosComponent)
      },
      {
        path: 'rep-consultas',
        loadComponent: () => import('./features/reportes/rep-consultas/rep-consultas.component').then(m => m.RepConsultasComponent)
      },
      {
        path: 'rep-terapias',
        loadComponent: () => import('./features/reportes/rep-terapias/rep-terapias.component').then(m => m.RepTerapiasComponent)
      },
      {
        path: 'rep-pacientes',
        loadComponent: () => import('./features/reportes/rep-pacientes/rep-pacientes.component').then(m => m.RepPacientesComponent)
      },
      {
        path: 'ranking',
        loadComponent: () => import('./features/reportes/ranking/ranking.component').then(m => m.RankingComponent)
      },

      // ═══ CONFIGURACIÓN ═══
      {
        path: 'config-apariencia',
        loadComponent: () => import('./features/configuracion/config-apariencia/config-apariencia.component').then(m => m.ConfigAparienciaComponent)
      },
      {
        path: 'config-notificaciones',
        loadComponent: () => import('./features/configuracion/config-notificaciones/config-notificaciones.component').then(m => m.ConfigNotificacionesComponent)
      },
      {
        path: 'config-seguridad',
        loadComponent: () => import('./features/configuracion/config-seguridad/config-seguridad.component').then(m => m.ConfigSeguridadComponent)
      },
      {
        path: 'config-perfil',
        loadComponent: () => import('./features/configuracion/config-perfil/config-perfil.component').then(m => m.ConfigPerfilComponent)
      },
      {
        path: 'config-sistema',
        loadComponent: () => import('./features/configuracion/config-sistema/config-sistema.component').then(m => m.ConfigSistemaComponent)
      }
    ]
  },
  {
    path: 'login',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      }
    ]
  },
  {
    path: 'unauthorized',
    loadComponent: () => import('./features/auth/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
  },
  {
    path: '**',
    redirectTo: 'admin/dashboard'
  }
];
