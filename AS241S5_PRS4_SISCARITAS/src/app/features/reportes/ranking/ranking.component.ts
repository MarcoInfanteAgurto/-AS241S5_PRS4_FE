import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePageComponent, ModulePageConfig } from '../../../shared/components/module-page/module-page.component';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, ModulePageComponent],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  pageConfig: ModulePageConfig = {
    title: 'Ranking',
    subtitle: 'Ranking y estadísticas',
    icon: 'fa-ranking-star',
    showFilters: true,
    showSearch: true,
    showAddButton: false
  };
}
