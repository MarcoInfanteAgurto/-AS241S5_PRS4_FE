import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-d-k-i-t-s-l-a-b',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-d-k-i-t-s-l-a-b.component.html',
  styleUrls: ['./p-r-o-d-k-i-t-s-l-a-b.component.scss']
})
export class ProdKitsLabComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Kits Lab',
    subtitle: 'Catálogo de kits de laboratorio',
    icon: 'fa-box-open',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
