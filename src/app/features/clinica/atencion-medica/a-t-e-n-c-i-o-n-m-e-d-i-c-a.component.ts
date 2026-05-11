import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-a-t-e-n-c-i-o-n-m-e-d-i-c-a',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './a-t-e-n-c-i-o-n-m-e-d-i-c-a.component.html',
  styleUrls: ['./a-t-e-n-c-i-o-n-m-e-d-i-c-a.component.scss']
})
export class AtencionMedicaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Atención Médica',
    subtitle: 'Registro de atenciones médicas',
    icon: 'fa-stethoscope',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
