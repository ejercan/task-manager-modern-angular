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

  getButtonClasses(filter: FilterType): string {
    const baseClasses = 'px-6 py-2 rounded-lg font-medium transition duration-200 cursor-pointer';
    const activeClasses = 'bg-blue-600 text-white hover:bg-blue-700';
    const inactiveClasses = 'bg-gray-100 text-gray-700 hover:bg-gray-200';

    return `${baseClasses} ${this.isActive(filter) ? activeClasses : inactiveClasses}`
  }
}
