import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-s-u-l-t-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-s-u-l-t-a-s.component.html',
  styleUrls: ['./c-o-n-s-u-l-t-a-s.component.scss']
})
export class ConsultasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Consultas',
    subtitle: 'Gestión de consultas médicas',
    icon: 'fa-notes-medical',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
