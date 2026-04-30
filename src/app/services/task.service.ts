import { Injectable } from '@angular/core';

@Injectable({
 providedIn:'root'
})
export class TaskService{

tasks:string[]=[
 'Study Angular',
 'Build Project'
];

getTasks(){
 return this.tasks;
}

addTask(task:string){
 this.tasks.push(task);
}

removeTask(index:number){
 this.tasks.splice(index,1);
}

updateTask(index:number,newTask:string){
 this.tasks[index]=newTask;
}

}