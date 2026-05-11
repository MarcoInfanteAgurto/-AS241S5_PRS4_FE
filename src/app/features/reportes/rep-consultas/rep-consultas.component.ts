import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-consultas',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-consultas.component.html',
  styleUrls: ['./rep-consultas.component.scss']
})
export class RepConsultasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Consultas',
    subtitle: 'Reporte de consultas',
    icon: 'fa-notes-medical',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
