import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-r-a-n-k-i-n-g',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './r-a-n-k-i-n-g.component.html',
  styleUrls: ['./r-a-n-k-i-n-g.component.scss']
})
export class RankingComponent {
  pageConfig: ModulePageConfig = {
    title: 'Ranking',
    subtitle: 'Ranking y estadísticas',
    icon: 'fa-ranking-star',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Nuevo Registro'
  };
}
