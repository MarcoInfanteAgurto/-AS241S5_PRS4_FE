import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-config-perfil',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './config-perfil.component.html',
  styleUrls: ['./config-perfil.component.scss']
})
export class ConfigPerfilComponent {
  pageConfig: ModulePageConfig = {
    title: 'Perfil',
    subtitle: 'Configuración de perfil de usuario',
    icon: 'fa-user-circle',
    showFilters: false,
    showSearch: false,
    showAddButton: false
  };
}
