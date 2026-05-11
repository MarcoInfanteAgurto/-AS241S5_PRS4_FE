import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Ingresos',
    subtitle: 'Registro de ingresos',
    icon: 'fa-arrow-trend-up',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Ingreso'
  };
}
