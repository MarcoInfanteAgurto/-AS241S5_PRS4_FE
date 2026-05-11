import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-d-m-e-d-i-c-a-m-e-n-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-d-m-e-d-i-c-a-m-e-n-t-o-s.component.html',
  styleUrls: ['./p-r-o-d-m-e-d-i-c-a-m-e-n-t-o-s.component.scss']
})
export class ProdMedicamentosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Medicamentos',
    subtitle: 'Catálogo de medicamentos',
    icon: 'fa-pills',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
