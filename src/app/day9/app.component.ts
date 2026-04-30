import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
 selector:'app-root',
 standalone:true,
 imports:[CommonModule,FormsModule],
 templateUrl:'./app.component.html'
})
export class AppComponent{

title: string = 'My First Angular App';

task='';

tasks:string[]=[];

editingIndex:number | null = null;

editedTask='';

constructor(
 private taskService:TaskService
){}

ngOnInit(){
 this.tasks=this.taskService.getTasks();
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

startEdit(index:number,currentTask:string){

this.editingIndex=index;

this.editedTask=currentTask;

}

saveEdit(index:number){

if(this.editedTask.trim()!==''){
 this.taskService.updateTask(
  index,
  this.editedTask
 );

 this.editingIndex=null;
 this.editedTask='';
}

}

cancelEdit(){
 this.editingIndex=null;
 this.editedTask='';
}

}