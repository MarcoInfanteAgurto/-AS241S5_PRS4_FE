import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-b-a-l-a-n-c-e',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './b-a-l-a-n-c-e.component.html',
  styleUrls: ['./b-a-l-a-n-c-e.component.scss']
})
export class BalanceComponent {
  pageConfig: ModulePageConfig = {
    title: 'Balance General',
    subtitle: 'Balance general financiero',
    icon: 'fa-scale-balanced',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
