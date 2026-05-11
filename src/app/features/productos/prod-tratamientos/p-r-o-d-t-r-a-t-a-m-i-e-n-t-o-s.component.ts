import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-d-t-r-a-t-a-m-i-e-n-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-d-t-r-a-t-a-m-i-e-n-t-o-s.component.html',
  styleUrls: ['./p-r-o-d-t-r-a-t-a-m-i-e-n-t-o-s.component.scss']
})
export class ProdTratamientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Tratamientos',
    subtitle: 'Catálogo de tratamientos',
    icon: 'fa-syringe',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
