import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-d-o-n-a-c-i-o-n-e-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './d-o-n-a-c-i-o-n-e-s.component.html',
  styleUrls: ['./d-o-n-a-c-i-o-n-e-s.component.scss']
})
export class DonacionesComponent {
  pageConfig: ModulePageConfig = {
    title: 'Donaciones',
    subtitle: 'Gestión de donaciones recibidas',
    icon: 'fa-hand-holding-heart',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
