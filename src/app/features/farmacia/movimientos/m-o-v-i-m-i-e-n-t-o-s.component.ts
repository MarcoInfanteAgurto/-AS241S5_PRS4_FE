import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-m-o-v-i-m-i-e-n-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './m-o-v-i-m-i-e-n-t-o-s.component.html',
  styleUrls: ['./m-o-v-i-m-i-e-n-t-o-s.component.scss']
})
export class MovimientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Movimientos',
    subtitle: 'Movimientos de inventario',
    icon: 'fa-arrows-rotate',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
