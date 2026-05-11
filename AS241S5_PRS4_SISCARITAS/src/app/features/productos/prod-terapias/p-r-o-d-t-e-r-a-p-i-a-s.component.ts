import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-d-t-e-r-a-p-i-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-d-t-e-r-a-p-i-a-s.component.html',
  styleUrls: ['./p-r-o-d-t-e-r-a-p-i-a-s.component.scss']
})
export class ProdTerapiasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Terapias',
    subtitle: 'Catálogo de terapias',
    icon: 'fa-heart-pulse',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
