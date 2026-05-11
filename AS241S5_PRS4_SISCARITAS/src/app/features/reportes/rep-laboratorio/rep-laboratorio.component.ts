import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-laboratorio',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-laboratorio.component.html',
  styleUrls: ['./rep-laboratorio.component.scss']
})
export class RepLaboratorioComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Laboratorio',
    subtitle: 'Reporte de laboratorio',
    icon: 'fa-flask',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
