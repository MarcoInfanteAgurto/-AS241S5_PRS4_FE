import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-a-l-e-r-t-a-s-s-t-o-c-k',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './a-l-e-r-t-a-s-s-t-o-c-k.component.html',
  styleUrls: ['./a-l-e-r-t-a-s-s-t-o-c-k.component.scss']
})
export class AlertasStockComponent {
  pageConfig: ModulePageConfig = {
    title: 'Alertas de Stock',
    subtitle: 'Alertas de stock mínimo',
    icon: 'fa-triangle-exclamation',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
