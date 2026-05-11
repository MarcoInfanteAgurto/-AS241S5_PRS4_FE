import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-k-i-t-s-l-a-b',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './k-i-t-s-l-a-b.component.html',
  styleUrls: ['./k-i-t-s-l-a-b.component.scss']
})
export class KitsLabComponent {
  pageConfig: ModulePageConfig = {
    title: 'Kits de Laboratorio',
    subtitle: 'Gestión de kits de laboratorio',
    icon: 'fa-box-open',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
