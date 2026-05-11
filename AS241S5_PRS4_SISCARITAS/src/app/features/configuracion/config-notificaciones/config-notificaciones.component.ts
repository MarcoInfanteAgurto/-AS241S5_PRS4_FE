import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-config-notificaciones',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './config-notificaciones.component.html',
  styleUrls: ['./config-notificaciones.component.scss']
})
export class ConfigNotificacionesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Notificaciones',
    subtitle: 'Configuración de notificaciones',
    icon: 'fa-bell',
    showFilters: false,
    showSearch: false,
    showAddButton: false
  };
}
