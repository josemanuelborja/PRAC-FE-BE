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

  coins = 0;
  showMessage = false;
  showPassword = false;
  password: string = '';
  task: string = '';

  tasks: string[] = [];

 addTask() {

  if(this.task !== ''){
    this.tasks.push(this.task);
    this.task = '';
  }

  }

  removeTask(index: number){
    this.tasks.splice(index,1);
  }

  addCoins(amount: number) {
    this.coins += amount;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  
}