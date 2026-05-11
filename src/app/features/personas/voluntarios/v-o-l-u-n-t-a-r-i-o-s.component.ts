import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-v-o-l-u-n-t-a-r-i-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './v-o-l-u-n-t-a-r-i-o-s.component.html',
  styleUrls: ['./v-o-l-u-n-t-a-r-i-o-s.component.scss']
})
export class VoluntariosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Voluntarios',
    subtitle: 'Gestión de voluntarios y horas trabajadas',
    icon: 'fa-hand-holding-heart',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
