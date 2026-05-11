import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-t-r-a-t-a-m-i-e-n-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-t-r-a-t-a-m-i-e-n-t-o-s.component.html',
  styleUrls: ['./r-e-p-t-r-a-t-a-m-i-e-n-t-o-s.component.scss']
})
export class RepTratamientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Tratamientos',
    subtitle: 'Reporte de tratamientos',
    icon: 'fa-syringe',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
