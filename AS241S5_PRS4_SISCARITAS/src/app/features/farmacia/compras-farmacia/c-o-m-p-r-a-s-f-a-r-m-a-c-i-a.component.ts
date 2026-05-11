import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-m-p-r-a-s-f-a-r-m-a-c-i-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-m-p-r-a-s-f-a-r-m-a-c-i-a.component.html',
  styleUrls: ['./c-o-m-p-r-a-s-f-a-r-m-a-c-i-a.component.scss']
})
export class ComprasFarmaciaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Compras Farmacia',
    subtitle: 'Gestión de compras de medicamentos',
    icon: 'fa-shopping-cart',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
