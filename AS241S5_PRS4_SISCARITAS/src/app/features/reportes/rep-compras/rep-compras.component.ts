import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-compras',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-compras.component.html',
  styleUrls: ['./rep-compras.component.scss']
})
export class RepComprasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Compras',
    subtitle: 'Reporte de compras médicas',
    icon: 'fa-chart-bar',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
