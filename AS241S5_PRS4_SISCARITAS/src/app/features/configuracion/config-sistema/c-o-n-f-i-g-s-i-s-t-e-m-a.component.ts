import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-f-i-g-s-i-s-t-e-m-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-f-i-g-s-i-s-t-e-m-a.component.html',
  styleUrls: ['./c-o-n-f-i-g-s-i-s-t-e-m-a.component.scss']
})
export class ConfigSistemaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Sistema',
    subtitle: 'Configuración general del sistema',
    icon: 'fa-cog',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
