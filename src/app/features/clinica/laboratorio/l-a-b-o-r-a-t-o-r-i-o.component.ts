import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-l-a-b-o-r-a-t-o-r-i-o',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './l-a-b-o-r-a-t-o-r-i-o.component.html',
  styleUrls: ['./l-a-b-o-r-a-t-o-r-i-o.component.scss']
})
export class LaboratorioComponent {
  pageConfig: ModulePageConfig = {
    title: 'Laboratorio',
    subtitle: 'Gestión de laboratorio clínico',
    icon: 'fa-flask',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
