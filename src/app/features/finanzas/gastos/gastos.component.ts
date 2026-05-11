import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Gastos',
    subtitle: 'Gestión de gastos operativos',
    icon: 'fa-receipt',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Gasto'
  };
}
