import { Component } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
