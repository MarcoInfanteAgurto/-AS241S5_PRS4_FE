import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-p-a-c-i-e-n-t-e-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-p-a-c-i-e-n-t-e-s.component.html',
  styleUrls: ['./r-e-p-p-a-c-i-e-n-t-e-s.component.scss']
})
export class RepPacientesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Pacientes',
    subtitle: 'Reporte de pacientes',
    icon: 'fa-user-injured',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
