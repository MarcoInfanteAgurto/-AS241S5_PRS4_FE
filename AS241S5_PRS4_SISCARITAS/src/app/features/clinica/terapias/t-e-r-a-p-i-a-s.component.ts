import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-t-e-r-a-p-i-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './t-e-r-a-p-i-a-s.component.html',
  styleUrls: ['./t-e-r-a-p-i-a-s.component.scss']
})
export class TerapiasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Terapias',
    subtitle: 'Gestión de terapias y tratamientos',
    icon: 'fa-heart-pulse',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
