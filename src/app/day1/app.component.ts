import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html'
})


export class AppComponent {
  title: string = 'My First Angular App';

  coins: number = 0;

  addCoins() {
    this.coins = this.coins + 5; // or this,coins += 5;
  }

}