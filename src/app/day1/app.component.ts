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

  coins: number = 0;

  addCoins() {
    this.coins = this.coins + 5; // or this.coins += 5;
  }

  resetCoins() {
    this.coins = 0;
  }

  decreaseCoins() {
    if (this.coins >= 5) {
      this.coins = this.coins - 5; // or this.coins -= 5;
    }
  }

}