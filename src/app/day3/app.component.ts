import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './app.component.html'
})


export class AppComponent {
  title: string = 'My First Angular App';

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  isFormValid(): boolean {
    return (
      this.name !== '' &&
      this.email !== '' &&
      this.password.length >= 6
    );
  }

  passwordsMatch(): boolean {
    if (this.password === '' || this.confirmPassword === '') {
       return true; // Don't show error if either field is empty
    }
    return this.password === this.confirmPassword;
  }

}