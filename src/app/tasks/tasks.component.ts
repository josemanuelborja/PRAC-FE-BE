import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html'
})


export class TasksComponent {
  title: string = 'My First Angular App';

}