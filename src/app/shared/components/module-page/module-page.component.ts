import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface ModulePageConfig {
  title: string;
  subtitle: string;
  icon: string;
  showFilters?: boolean;
  showSearch?: boolean;
  showAddButton?: boolean;
  addButtonLabel?: string;
}

@Component({
  selector: 'app-module-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './module-page.component.html',
  styleUrls: ['./module-page.component.scss']
})
export class ModulePageComponent {
  @Input() config: ModulePageConfig = {
    title: 'Módulo',
    subtitle: 'Descripción del módulo',
    icon: 'fa-box',
    showFilters: true,
    showSearch: true,
    showAddButton: true,
    addButtonLabel: 'Agregar'
  };

  searchTerm = '';
  selectedFilter = 'all';

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    console.log('Searching:', this.searchTerm);
  }

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
    console.log('Filter changed:', filter);
  }

  onAdd(): void {
    console.log('Add button clicked');
  }

  onExport(): void {
    console.log('Export button clicked');
  }
}
