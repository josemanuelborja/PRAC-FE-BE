import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html'
})


export class AboutComponent {
  title: string = 'My First Angular App';

}