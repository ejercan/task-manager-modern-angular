import { Component } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
