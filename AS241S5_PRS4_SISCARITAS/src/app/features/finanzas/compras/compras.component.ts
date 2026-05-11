import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Compras',
    subtitle: 'Registro de compras generales',
    icon: 'fa-shopping-cart',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nueva Compra'
  };
}
