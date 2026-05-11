import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-prod-consultas',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './prod-consultas.component.html',
  styleUrls: ['./prod-consultas.component.scss']
})
export class ProdConsultasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Consultas',
    subtitle: 'Catálogo de consultas',
    icon: 'fa-notes-medical',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nueva Consulta'
  };
}
