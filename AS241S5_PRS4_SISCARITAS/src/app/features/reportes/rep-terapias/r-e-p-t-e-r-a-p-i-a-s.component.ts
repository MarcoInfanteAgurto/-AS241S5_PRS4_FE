import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-e-p-t-e-r-a-p-i-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-e-p-t-e-r-a-p-i-a-s.component.html',
  styleUrls: ['./r-e-p-t-e-r-a-p-i-a-s.component.scss']
})
export class RepTerapiasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Terapias',
    subtitle: 'Reporte de terapias',
    icon: 'fa-heart-pulse',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
