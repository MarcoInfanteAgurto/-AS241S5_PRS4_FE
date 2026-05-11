import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  pageConfig: ModulePageConfig = {
    title: 'Balance General',
    subtitle: 'Balance general financiero',
    icon: 'fa-scale-balanced',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
