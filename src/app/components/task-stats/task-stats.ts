import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.scss',
})
export class TaskStats {
  taskService = inject(TaskService);

  // Access computed stats from service
  totalTasks = this.taskService.totalTaskCount;
  activeTasks = this.taskService.activeTasksCount;
  completedTasks = this.taskService.completedTaskCount;
  completionRate = this.taskService.completionRate;
}
