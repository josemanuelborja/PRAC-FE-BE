import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { ProductCardComponent } from '../product-card/product-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, UserCardComponent, ProductCardComponent],
  templateUrl: './app.component.html'
})


export class AppComponent {
  title: string = 'My First Angular App';

}