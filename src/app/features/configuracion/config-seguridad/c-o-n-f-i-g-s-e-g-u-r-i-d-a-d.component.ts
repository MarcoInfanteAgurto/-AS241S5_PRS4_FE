import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-f-i-g-s-e-g-u-r-i-d-a-d',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-f-i-g-s-e-g-u-r-i-d-a-d.component.html',
  styleUrls: ['./c-o-n-f-i-g-s-e-g-u-r-i-d-a-d.component.scss']
})
export class ConfigSeguridadComponent {
  pageConfig: ModulePageConfig = {
    title: 'Seguridad',
    subtitle: 'Configuración de seguridad',
    icon: 'fa-shield-halved',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
