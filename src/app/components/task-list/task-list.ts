import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  taskService = inject(TaskService);

  // Access computed tasks from service
  tasks = this.taskService.tasks;
  activeCount = this.taskService.activeTasksCount;

  onToggleTask(id: string): void {
    this.taskService.toggleTask(id);
  }

  onDeleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }

}
