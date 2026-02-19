import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  private taskService = inject(TaskService);

  // Form state with signals
  title = signal('');
  description = signal('');

  onSubmit(): void {
    const titleValue = this.title().trim();

    // Validation: title required
    if (!titleValue) {
      return;
    }

    // Add task via service
    this.taskService.addTask(titleValue, this.description().trim());

    // Reset form
    this.title.set('');
    this.description.set('');
  }

  // Helper for button disabled state
  get isFormValid(): boolean {
    return this.title().trim() !== '';
  }
}
