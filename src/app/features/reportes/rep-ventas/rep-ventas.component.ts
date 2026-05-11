import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-ventas',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-ventas.component.html',
  styleUrls: ['./rep-ventas.component.scss']
})
export class RepVentasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Ventas',
    subtitle: 'Reporte de ventas médicas',
    icon: 'fa-chart-line',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
