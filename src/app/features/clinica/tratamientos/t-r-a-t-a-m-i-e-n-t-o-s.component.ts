import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-t-r-a-t-a-m-i-e-n-t-o-s',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './t-r-a-t-a-m-i-e-n-t-o-s.component.html',
  styleUrls: ['./t-r-a-t-a-m-i-e-n-t-o-s.component.scss']
})
export class TratamientosComponent {
  pageConfig: ModulePageConfig = {
    title: 'Tratamientos',
    subtitle: 'Registro de tratamientos médicos',
    icon: 'fa-syringe',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
