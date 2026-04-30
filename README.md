# 🚀 Day 9 – CRUD Task App in Angular

## 🎯 Objective

To learn how to build a complete CRUD (Create, Read, Update, Delete) application using Angular components and services.

---

## 🧠 Key Concepts Learned

### 1. What is CRUD

CRUD stands for:

| Letter | Meaning |
| ------ | ------- |
| C      | Create  |
| R      | Read    |
| U      | Update  |
| D      | Delete  |

Examples:

* Todo apps
* User management systems
* Inventory systems
* Notes applications

**Purpose:**

* Perform basic data operations in applications

---

### 2. Angular Service

Created a service to manage task data.

```ts id="8zq7s5"
@Injectable({
 providedIn:'root'
})
export class TaskService {

}
```

Architecture:

```text id="4yr4m0"
Component = UI / Presentation
Service = Data / Logic
```

**Purpose:**

* Move task logic outside the component
* Centralize data management

---

### 3. Read Tasks

Returned tasks from the service.

```ts id="91a7qm"
getTasks(){
 return this.tasks;
}
```

**Purpose:**

* Provide task data to components

---

### 4. Create Task

Added a new task.

```ts id="n8jkw9"
addTask(task:string){
 this.tasks.push(task);
}
```

**Purpose:**

* Create and store new tasks

---

### 5. Delete Task

Removed a task from the array.

```ts id="0l65dg"
removeTask(index:number){
 this.tasks.splice(index,1);
}
```

**Purpose:**

* Delete tasks from the list

---

### 6. Update Task

Updated an existing task.

```ts id="q19e32"
updateTask(index:number,newTask:string){
 this.tasks[index]=newTask;
}
```

**Purpose:**

* Modify existing task data

---

### 7. Edit Mode State

Tracked which task is currently being edited.

```ts id="r77vt4"
editingIndex:number | null = null;
```

Example:

```text id="0h3p7m"
editingIndex = 2
```

**Purpose:**

* Control edit mode dynamically

---

### 8. Temporary Edit Value

Stored temporary edited text.

```ts id="ghwrjt"
editedTask = '';
```

**Purpose:**

* Hold updated input before saving

---

### 9. Start Editing

Enabled edit mode for a task.

```ts id="qj6ch5"
startEdit(index:number,currentTask:string){
 this.editingIndex=index;
 this.editedTask=currentTask;
}
```

**Purpose:**

* Enter edit mode
* Load current task into the input field

---

### 10. Save Edited Task

Saved updated task data.

```ts id="fr2g8j"
saveEdit(index:number){
 this.taskService.updateTask(
  index,
  this.editedTask
 );

 this.editingIndex=null;
 this.editedTask='';
}
```

**Purpose:**

* Save task updates
* Exit edit mode
* Clear temporary data

---

### 11. Cancel Edit

Exited edit mode without saving.

```ts id="gr1zhd"
cancelEdit(){
 this.editingIndex=null;
 this.editedTask='';
}
```

**Purpose:**

* Cancel editing safely

---

## 📌 Angular Concepts Reinforced

### 12. `*ngFor`

```html id="y4gf7g"
<li *ngFor="let item of tasks; let i = index">
```

**Purpose:**

* Loop through task lists dynamically

---

### 13. `*ngIf`

```html id="n9bl2r"
<div *ngIf="editingIndex !== i">
```

```html id="k1rye2"
<div *ngIf="editingIndex === i">
```

**Purpose:**

* Switch between normal mode and edit mode

---

### 14. Event Binding (`(click)`)

```html id="1njlwm"
(click)="addTask()"
(click)="removeTask(i)"
(click)="saveEdit(i)"
```

**Purpose:**

* Connect buttons to component logic

---

### 15. Two-Way Binding (`[(ngModel)]`)

```html id="fr1x7z"
[(ngModel)]="task"
[(ngModel)]="editedTask"
```

**Purpose:**

* Bind inputs to component state

---

### 16. Validation

Disabled saving empty tasks.

```html id="r79rt7"
[disabled]="!editedTask.trim()"
```

**Purpose:**

* Prevent empty updates
* Improve user experience

---

## 📌 Quick Summary

* CRUD means Create, Read, Update, Delete
* Services manage data and logic
* Components manage UI and interactions
* `editingIndex` tracks edit state
* `*ngIf` switches UI modes
* `*ngFor` displays task lists
* `[(ngModel)]` binds inputs
* Validation improves UX

---

## 🚀 Key Takeaway

CRUD applications combine state management, user interaction, and reusable architecture to create real-world application behavior. This is a major frontend development milestone in Angular.
