import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-v-e-n-t-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-v-e-n-t-a-s.component.html',
  styleUrls: ['./r-e-p-v-e-n-t-a-s.component.scss']
})
export class RepVentasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Ventas',
    subtitle: 'Reporte de ventas médicas',
    icon: 'fa-chart-line',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
