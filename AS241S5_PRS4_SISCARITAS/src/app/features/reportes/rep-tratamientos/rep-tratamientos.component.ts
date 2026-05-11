import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-tratamientos',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-tratamientos.component.html',
  styleUrls: ['./rep-tratamientos.component.scss']
})
export class RepTratamientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Tratamientos',
    subtitle: 'Reporte de tratamientos',
    icon: 'fa-syringe',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
