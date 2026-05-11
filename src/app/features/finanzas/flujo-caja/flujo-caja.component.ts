import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-flujo-caja',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './flujo-caja.component.html',
  styleUrls: ['./flujo-caja.component.scss']
})
export class FlujoCajaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Flujo de Caja',
    subtitle: 'Flujo de caja y proyecciones',
    icon: 'fa-money-bill-trend-up',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
