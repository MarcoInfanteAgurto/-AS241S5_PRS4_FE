import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-d-i-s-t-r-i-b-u-c-i-o-n-e-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './d-i-s-t-r-i-b-u-c-i-o-n-e-s.component.html',
  styleUrls: ['./d-i-s-t-r-i-b-u-c-i-o-n-e-s.component.scss']
})
export class DistribucionesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Distribuciones',
    subtitle: 'Distribución de productos a beneficiarios',
    icon: 'fa-truck',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
