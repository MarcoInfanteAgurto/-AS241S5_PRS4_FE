import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() loading = false;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Input() totalItems = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{ key: string; direction: 'asc' | 'desc' }>();
  @Output() rowClick = new EventEmitter<any>();

  sortKey = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.data.slice(start, end);
  }

  onSort(column: TableColumn): void {
    if (!column.sortable) return;

    if (this.sortKey === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = column.key;
      this.sortDirection = 'asc';
    }

    this.sortChange.emit({ key: this.sortKey, direction: this.sortDirection });
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }

  getPages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
