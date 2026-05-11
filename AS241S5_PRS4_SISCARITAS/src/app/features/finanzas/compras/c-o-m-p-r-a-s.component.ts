import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-m-p-r-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-m-p-r-a-s.component.html',
  styleUrls: ['./c-o-m-p-r-a-s.component.scss']
})
export class ComprasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Compras',
    subtitle: 'Registro de compras generales',
    icon: 'fa-shopping-cart',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
