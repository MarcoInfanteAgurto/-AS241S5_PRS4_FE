import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-f-i-g-a-p-a-r-i-e-n-c-i-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-f-i-g-a-p-a-r-i-e-n-c-i-a.component.html',
  styleUrls: ['./c-o-n-f-i-g-a-p-a-r-i-e-n-c-i-a.component.scss']
})
export class ConfigAparienciaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Apariencia',
    subtitle: 'Configuración de apariencia del sistema',
    icon: 'fa-palette',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
