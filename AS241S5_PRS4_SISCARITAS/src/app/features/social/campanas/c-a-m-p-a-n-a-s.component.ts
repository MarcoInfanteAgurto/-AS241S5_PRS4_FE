import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-a-m-p-a-n-a-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-a-m-p-a-n-a-s.component.html',
  styleUrls: ['./c-a-m-p-a-n-a-s.component.scss']
})
export class CampanasComponent {
  pageConfig: ModulePageConfig = {
    title: 'Campañas',
    subtitle: 'Campañas sociales y de salud',
    icon: 'fa-bullhorn',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
