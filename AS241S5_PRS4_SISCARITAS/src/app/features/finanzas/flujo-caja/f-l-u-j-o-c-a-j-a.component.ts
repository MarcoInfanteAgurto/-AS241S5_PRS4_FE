import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-f-l-u-j-o-c-a-j-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './f-l-u-j-o-c-a-j-a.component.html',
  styleUrls: ['./f-l-u-j-o-c-a-j-a.component.scss']
})
export class FlujoCajaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Flujo de Caja',
    subtitle: 'Flujo de caja y proyecciones',
    icon: 'fa-money-bill-trend-up',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
