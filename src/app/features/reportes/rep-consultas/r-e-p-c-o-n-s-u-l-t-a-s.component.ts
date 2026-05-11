import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-c-o-n-s-u-l-t-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-c-o-n-s-u-l-t-a-s.component.html',
  styleUrls: ['./r-e-p-c-o-n-s-u-l-t-a-s.component.scss']
})
export class RepConsultasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Consultas',
    subtitle: 'Reporte de consultas',
    icon: 'fa-notes-medical',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
