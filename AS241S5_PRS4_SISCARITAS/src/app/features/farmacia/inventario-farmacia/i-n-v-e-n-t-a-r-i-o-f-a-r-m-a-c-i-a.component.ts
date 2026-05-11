import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-i-n-v-e-n-t-a-r-i-o-f-a-r-m-a-c-i-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './i-n-v-e-n-t-a-r-i-o-f-a-r-m-a-c-i-a.component.html',
  styleUrls: ['./i-n-v-e-n-t-a-r-i-o-f-a-r-m-a-c-i-a.component.scss']
})
export class InventarioFarmaciaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Inventario Farmacia',
    subtitle: 'Control de inventario de farmacia',
    icon: 'fa-boxes-stacked',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
