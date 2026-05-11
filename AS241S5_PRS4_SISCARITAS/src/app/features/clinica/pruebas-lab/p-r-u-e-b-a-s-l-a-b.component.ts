import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-u-e-b-a-s-l-a-b',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-u-e-b-a-s-l-a-b.component.html',
  styleUrls: ['./p-r-u-e-b-a-s-l-a-b.component.scss']
})
export class PruebasLabComponent {
  pageConfig: ModulePageConfig = {
    title: 'Pruebas de Laboratorio',
    subtitle: 'Catálogo de pruebas de laboratorio',
    icon: 'fa-vial',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
