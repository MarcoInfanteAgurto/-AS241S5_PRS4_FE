import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Egresos',
    subtitle: 'Registro de egresos',
    icon: 'fa-arrow-trend-down',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Egreso'
  };
}
