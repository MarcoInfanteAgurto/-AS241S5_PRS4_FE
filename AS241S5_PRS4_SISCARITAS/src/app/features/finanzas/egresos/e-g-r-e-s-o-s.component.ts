import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-e-g-r-e-s-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './e-g-r-e-s-o-s.component.html',
  styleUrls: ['./e-g-r-e-s-o-s.component.scss']
})
export class EgresosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Egresos',
    subtitle: 'Registro de egresos',
    icon: 'fa-arrow-trend-down',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
