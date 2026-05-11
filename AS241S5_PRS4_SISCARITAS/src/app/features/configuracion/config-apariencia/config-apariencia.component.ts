import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-config-apariencia',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './config-apariencia.component.html',
  styleUrls: ['./config-apariencia.component.scss']
})
export class ConfigAparienciaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Apariencia',
    subtitle: 'Configuración de apariencia del sistema',
    icon: 'fa-palette',
    showFilters: false,
    showSearch: false,
    showAddButton: false
  };
}
