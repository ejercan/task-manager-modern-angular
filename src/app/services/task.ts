import { computed, Injectable, signal } from '@angular/core';
import { FilterType, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // STATE with Signals (private - only service can modify)
  private tasksSignal = signal<Task[]>([]);
  private filterSignal = signal<FilterType>('all');

  // COMPUTED (public - components can read)
  tasks = computed(() => {
    const tasks = this.tasksSignal();
    const filter = this.filterSignal();

    switch(filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  });

  activeTasksCount = computed(() => {
    return this.tasksSignal().filter((task) => task.completed).length;
  });

  currentFilter = this.filterSignal.asReadonly();

  constructor() {
    // Load tasks from LocalStorage on init
    this.loadTasksFromLocalStorage();
  }

  // ACTIONS (public methods)
  addTask(title: string, description: string):void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date()
    };

    this.tasksSignal.update((tasks) => [...tasks, newTask]);
    this.saveTasksToLocalStorage();
  }

  toggleTask(id: string): void {
    this.tasksSignal.update((tasks) => {
      return tasks.map((task) => {
        return task.id === id ? {...task, completed: !task.completed} : task
      });
    });

    this.saveToLocalStorage();
  }

  deleteTask(id: string): void {
    this.tasksSignal.update((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });

    this.saveTasksToLocalStorage();
  }


}
