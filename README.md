# 🚀 Day 6 – Angular Services and Shared Data

## 🎯 Objective

To learn how to move logic and shared state out of components into Angular services using dependency injection, shared data management, and separation of concerns.

---

## 🧠 Key Concepts Learned

### 1. Angular Services

A service is a class used to store shared data and reusable logic.

```ts
@Injectable({
 providedIn: 'root'
})
export class TaskService {

 tasks: string[] = [
   'Study Angular',
   'Exercise'
 ];

}
```

**Purpose:**

* Store shared state
* Reuse logic across components
* Keep components clean
* Centralize data management

---

### 2. Separation of Concerns

Angular follows a simple architecture:

```text
Component = UI / Presentation
Service = Data / Logic
```

**Purpose:**

* Components focus on displaying data
* Services focus on handling logic and managing data

---

### 3. Dependency Injection (DI)

Used to inject a service into a component.

```ts
constructor(private taskService: TaskService) {}
```

**Purpose:**

* Give components access to shared services
* Allow Angular to provide dependencies automatically

---

### 4. Service Methods for Shared Data

Services can contain reusable methods.

**Get Tasks**

```ts
getTasks() {
 return this.tasks;
}
```

**Add Task**

```ts
addTask(task:string){
 this.tasks.push(task);
}
```

**Remove Task**

```ts
removeTask(index:number){
 this.tasks.splice(index,1);
}
```

**Purpose:**

* Manage shared data in one place
* Keep CRUD logic inside the service

---

### 5. Array Operations

Used basic JavaScript array methods for data manipulation.

**Add item using `push()`**

```ts
this.tasks.push(task);
```

**Purpose:**

* Adds a new item to the array

---

**Remove item using `splice()`**

```ts
this.tasks.splice(index,1);
```

**Purpose:**

* Removes an item from the array

---

### 6. Shared Counter State

State can also be managed inside services.

```ts
coins = 0;
```

Add coins:

```ts
addCoins(amount:number){
 this.coins += amount;
}
```

Get coins:

```ts
getCoins(){
 return this.coins;
}
```

Reset coins:

```ts
resetCoins(){
 this.coins = 0;
}
```

**Purpose:**

* Practice managing shared state beyond tasks

---

### 7. Component Delegates Logic to Service

Components call service methods instead of owning all logic.

```ts
addTask(){
 this.taskService.addTask(this.task);
}
```

```ts
addCoins(amount:number){
 this.taskService.addCoins(amount);
}
```

**Purpose:**

* Move business logic out of components
* Keep components focused on UI

---

## 📌 Angular Concepts Reinforced

### 8. `*ngFor`

Used to loop through task lists.

```html
<li *ngFor="let item of tasks; let i = index">
```

**Purpose:**

* Display lists dynamically

---

### 9. Event Binding (`(click)`)

Used to respond to button clicks.

```html
(click)="addTask()"
(click)="removeTask(i)"
```

**Purpose:**

* Connect user actions to functions

---

### 10. Two-Way Binding (`[(ngModel)]`)

Used to sync input with component state.

```html
<input [(ngModel)]="task">
```

**Purpose:**

* Keep input and state connected automatically

---

### 11. Shared State (One Source of Truth)

Using a service creates one shared data source.

```text
One Source of Truth
```

**Purpose:**

* Multiple components can share the same data
* Avoid inconsistent state

---

## 📌 Quick Summary

* Services store shared data and logic
* Components focus on UI
* Dependency Injection gives access to services
* `push()` adds data
* `splice()` removes data
* `*ngFor` loops through lists
* `(click)` handles events
* `[(ngModel)]` enables two-way binding
* Services create one source of truth

---

## 🚀 Key Takeaway

Angular services help separate UI from business logic. Instead of components managing everything, services handle shared state and reusable logic, making applications more scalable and maintainable.
