import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-p-r-o-y-e-c-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './p-r-o-y-e-c-t-o-s.component.html',
  styleUrls: ['./p-r-o-y-e-c-t-o-s.component.scss']
})
export class ProyectosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Proyectos',
    subtitle: 'Gestión de proyectos sociales',
    icon: 'fa-diagram-project',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
