import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-v-e-n-t-a-s-f-a-r-m-a-c-i-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './v-e-n-t-a-s-f-a-r-m-a-c-i-a.component.html',
  styleUrls: ['./v-e-n-t-a-s-f-a-r-m-a-c-i-a.component.scss']
})
export class VentasFarmaciaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Ventas Farmacia',
    subtitle: 'Registro de ventas de farmacia',
    icon: 'fa-cash-register',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
