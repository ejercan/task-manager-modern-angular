import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FilterType } from '../../models/task.model';

@Component({
  selector: 'app-task-filters',
  standalone: true,
  imports: [],
  templateUrl: './task-filters.html',
  styleUrl: './task-filters.scss',
})
export class TaskFilters {
  taskService = inject(TaskService);

  // Access current filter from service
  currentFilter = this.taskService.currentFilter;

  // Filter options
  filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ];

  onFilterChange(filter: FilterType): void {
    this.taskService.setFilter(filter);
  }

  isActive(filter: FilterType): boolean {
    return this.currentFilter() === filter;
  }
}
