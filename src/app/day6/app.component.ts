import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = 'My First Angular App';

  task='';
  coins = 0;

  constructor(private taskService: TaskService) {}

  tasks:string[]=[];

  ngOnInit(){
    this.tasks = this.taskService.getTasks();
    this.coins = this.taskService.getCoins();
  }

  addTask(){
    if(this.task.trim()!==''){
      this.taskService.addTask(this.task);
      this.task='';
    }
  }

  removeTask(index:number){
    this.taskService.removeTask(index);
  }

  addCoins(amount:number){
    this.taskService.addCoins(amount);
    this.coins = this.taskService.getCoins();
  }

  resetCoins(){
    this.taskService.resetCoins();
    this.coins = this.taskService.getCoins();
  }

}