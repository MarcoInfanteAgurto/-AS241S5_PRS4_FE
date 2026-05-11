import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-prod-tratamientos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './prod-tratamientos.component.html',
  styleUrls: ['./prod-tratamientos.component.scss']
})
export class ProdTratamientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Tratamientos',
    subtitle: 'Catálogo de tratamientos',
    icon: 'fa-syringe',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Tratamiento'
  };
}
