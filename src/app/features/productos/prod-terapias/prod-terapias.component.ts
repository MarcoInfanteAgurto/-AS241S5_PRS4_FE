import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-prod-terapias',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './prod-terapias.component.html',
  styleUrls: ['./prod-terapias.component.scss']
})
export class ProdTerapiasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Terapias',
    subtitle: 'Catálogo de terapias',
    icon: 'fa-heart-pulse',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nueva Terapia'
  };
}
