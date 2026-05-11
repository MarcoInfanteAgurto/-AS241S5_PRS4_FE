import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-pacientes',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-pacientes.component.html',
  styleUrls: ['./rep-pacientes.component.scss']
})
export class RepPacientesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Pacientes',
    subtitle: 'Reporte de pacientes',
    icon: 'fa-user-injured',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
