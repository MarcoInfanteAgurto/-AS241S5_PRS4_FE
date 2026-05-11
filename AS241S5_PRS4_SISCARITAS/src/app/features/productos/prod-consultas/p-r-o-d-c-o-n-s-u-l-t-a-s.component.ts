import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-d-c-o-n-s-u-l-t-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-d-c-o-n-s-u-l-t-a-s.component.html',
  styleUrls: ['./p-r-o-d-c-o-n-s-u-l-t-a-s.component.scss']
})
export class ProdConsultasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Consultas',
    subtitle: 'Catálogo de consultas',
    icon: 'fa-notes-medical',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
