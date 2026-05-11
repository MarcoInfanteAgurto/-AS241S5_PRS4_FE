import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-prod-medicamentos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './prod-medicamentos.component.html',
  styleUrls: ['./prod-medicamentos.component.scss']
})
export class ProdMedicamentosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Medicamentos',
    subtitle: 'Catálogo de medicamentos',
    icon: 'fa-pills',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Medicamento'
  };
}
