import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-rep-terapias',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './rep-terapias.component.html',
  styleUrls: ['./rep-terapias.component.scss']
})
export class RepTerapiasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Reporte de Terapias',
    subtitle: 'Reporte de terapias',
    icon: 'fa-heart-pulse',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
