import { Component } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { TaskFilters } from './components/task-filters/task-filters';
import { TaskStats } from './components/task-stats/task-stats';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, TaskList, TaskFilters, TaskStats],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
