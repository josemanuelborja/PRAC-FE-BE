import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html'
})


export class AppComponent {
  title: string = 'My First Angular App';

  users:any[] = [];
  loading = false;
  error = '';

  constructor(private userService: UserService){}

  getUsers(){

  this.loading = true;
  this.error = '';

  this.userService.getUsers()
  .subscribe({

  next:(data:any)=>{
  this.users=data;
  this.loading=false;
  },

  error:()=>{
  this.error='Failed to load users';
  this.loading=false;
  }

  });

  }

  ngOnInit(){
  this.getUsers();
  }

}