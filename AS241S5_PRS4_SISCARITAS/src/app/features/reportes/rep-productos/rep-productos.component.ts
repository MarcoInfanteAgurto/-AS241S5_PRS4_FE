import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-productos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-productos.component.html',
  styleUrls: ['./rep-productos.component.scss']
})
export class RepProductosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Productos',
    subtitle: 'Reporte de productos',
    icon: 'fa-box',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
