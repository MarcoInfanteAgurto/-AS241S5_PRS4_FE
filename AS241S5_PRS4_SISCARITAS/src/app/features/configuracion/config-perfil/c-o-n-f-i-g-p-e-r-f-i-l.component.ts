import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-c-o-n-f-i-g-p-e-r-f-i-l',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './c-o-n-f-i-g-p-e-r-f-i-l.component.html',
  styleUrls: ['./c-o-n-f-i-g-p-e-r-f-i-l.component.scss']
})
export class ConfigPerfilComponent {
  pageConfig: ModulePageConfig = {
    title: 'Perfil',
    subtitle: 'Configuración de perfil de usuario',
    icon: 'fa-user-circle',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
