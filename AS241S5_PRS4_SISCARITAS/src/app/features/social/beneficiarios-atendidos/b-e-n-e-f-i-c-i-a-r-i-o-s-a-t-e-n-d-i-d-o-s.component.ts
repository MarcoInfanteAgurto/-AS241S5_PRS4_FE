import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-b-e-n-e-f-i-c-i-a-r-i-o-s-a-t-e-n-d-i-d-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './b-e-n-e-f-i-c-i-a-r-i-o-s-a-t-e-n-d-i-d-o-s.component.html',
  styleUrls: ['./b-e-n-e-f-i-c-i-a-r-i-o-s-a-t-e-n-d-i-d-o-s.component.scss']
})
export class BeneficiariosAtendidosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Beneficiarios Atendidos',
    subtitle: 'Registro de beneficiarios atendidos',
    icon: 'fa-user-check',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
