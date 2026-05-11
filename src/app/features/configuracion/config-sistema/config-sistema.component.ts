import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-config-sistema',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './config-sistema.component.html',
  styleUrls: ['./config-sistema.component.scss']
})
export class ConfigSistemaComponent {
  pageConfig: ModulePageConfig = {
    title: 'Sistema',
    subtitle: 'Configuración general del sistema',
    icon: 'fa-cog',
    showFilters: false,
    showSearch: false,
    showAddButton: false
  };
}
