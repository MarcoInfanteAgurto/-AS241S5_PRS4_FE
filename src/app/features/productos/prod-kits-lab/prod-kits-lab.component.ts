import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-prod-kits-lab',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './prod-kits-lab.component.html',
  styleUrls: ['./prod-kits-lab.component.scss']
})
export class ProdKitsLabComponent {
  pageConfig: ModulePageConfig = {
    title: 'Productos - Kits Lab',
    subtitle: 'Catálogo de kits de laboratorio',
    icon: 'fa-box-open',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Kit'
  };
}
