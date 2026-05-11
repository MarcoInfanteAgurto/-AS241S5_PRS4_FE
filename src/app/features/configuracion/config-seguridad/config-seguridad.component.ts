import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-config-seguridad',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './config-seguridad.component.html',
  styleUrls: ['./config-seguridad.component.scss']
})
export class ConfigSeguridadComponent {
  pageConfig: ModulePageConfig = {
    title: 'Seguridad',
    subtitle: 'Configuración de seguridad',
    icon: 'fa-shield-halved',
    showFilters: false,
    showSearch: false,
    showAddButton: false
  };
}
