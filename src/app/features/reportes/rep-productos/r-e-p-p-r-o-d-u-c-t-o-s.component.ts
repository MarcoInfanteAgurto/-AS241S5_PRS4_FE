import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-p-r-o-d-u-c-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-p-r-o-d-u-c-t-o-s.component.html',
  styleUrls: ['./r-e-p-p-r-o-d-u-c-t-o-s.component.scss']
})
export class RepProductosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Productos',
    subtitle: 'Reporte de productos',
    icon: 'fa-box',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
