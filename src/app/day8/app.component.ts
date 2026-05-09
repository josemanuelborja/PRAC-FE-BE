import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html'
})


export class AppComponent {
  title: string = 'My First Angular App';

  name = '';
  email = '';
  age:number | null = null;

  loading = false;
  success = '';
  error = '';

  constructor(private userService: UserService){}

  createUser(){

    if(
    this.name.trim()==='' ||
    this.email.trim()===''
    ){
    return;
    }

    this.loading = true;

    this.success='';
    this.error='';

    const newUser = {
      name: this.name,
      email: this.email,
      age: this.age
    };

    this.userService
    .createUser(newUser)
    .subscribe({

    next:()=>{

    this.success='User created successfully';

    this.name=''
    this.email=''

    this.loading=false;

    },

    error:()=>{

    this.error='Failed to create user';

    this.loading=false;

    }

    });

    }
    

}