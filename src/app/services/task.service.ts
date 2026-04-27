import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class TaskService {

  coins = 0;

 tasks: string[] = [
   'Study Angular',
   'Exercise',
   'Learn Services',
   'Build Project'
 ];

 getTasks() {
   return this.tasks;
 }

 addTask(task:string){
   this.tasks.push(task);
 }

 removeTask(index:number){
  this.tasks.splice(index,1);
 }

 addCoins(amount:number){
    this.coins+=amount;
  }

  getCoins(){
    return this.coins;
  }

  resetCoins(){
    this.coins = 0;
    return this.coins;
  }

}