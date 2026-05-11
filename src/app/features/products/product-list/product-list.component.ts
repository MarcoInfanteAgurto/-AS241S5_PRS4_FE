import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pageConfig: ModulePageConfig = {
    title: 'Gestión de Productos',
    subtitle: 'Catálogo general de productos',
    icon: 'fa-box',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Producto'
  };
}
