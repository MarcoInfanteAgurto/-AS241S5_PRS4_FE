import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-f-i-g-n-o-t-i-f-i-c-a-c-i-o-n-e-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-f-i-g-n-o-t-i-f-i-c-a-c-i-o-n-e-s.component.html',
  styleUrls: ['./c-o-n-f-i-g-n-o-t-i-f-i-c-a-c-i-o-n-e-s.component.scss']
})
export class ConfigNotificacionesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Notificaciones',
    subtitle: 'Configuración de notificaciones',
    icon: 'fa-bell',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
