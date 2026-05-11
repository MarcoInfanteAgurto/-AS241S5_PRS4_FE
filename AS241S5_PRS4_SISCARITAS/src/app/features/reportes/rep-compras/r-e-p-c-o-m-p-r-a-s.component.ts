import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-c-o-m-p-r-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-c-o-m-p-r-a-s.component.html',
  styleUrls: ['./r-e-p-c-o-m-p-r-a-s.component.scss']
})
export class RepComprasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Compras',
    subtitle: 'Reporte de compras médicas',
    icon: 'fa-chart-bar',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
