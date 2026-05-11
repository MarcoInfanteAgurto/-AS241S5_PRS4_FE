import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-l-a-b-o-r-a-t-o-r-i-o',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-l-a-b-o-r-a-t-o-r-i-o.component.html',
  styleUrls: ['./r-e-p-l-a-b-o-r-a-t-o-r-i-o.component.scss']
})
export class RepLaboratorioComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Laboratorio',
    subtitle: 'Reporte de laboratorio',
    icon: 'fa-flask',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
