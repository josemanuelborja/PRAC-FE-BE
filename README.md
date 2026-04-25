# 🚀 Day 4 — Angular Events and User Interactions

## Objective
Learn how Angular handles user interactions through events, function parameters, toggles, and dynamic lists.

This session focused on building interactive UI behavior using event-driven programming.

---

# Key Concepts Learned

## 1. Function Parameters
Functions can receive values when triggered by events.

```ts
addCoins(amount: number) {
  this.coins += amount;
}
```

```html
<button (click)="addCoins(5)">Add 5</button>
<button (click)="addCoins(10)">Add 10</button>
<button (click)="addCoins(50)">Add 50</button>
```

### Purpose
- Make functions reusable  
- Avoid hardcoding values  
- Allow different behaviors from one method

---

## 2. Event Binding `(click)`
Used button clicks to trigger logic.

```html
(click)="toggleMessage()"
```

### Purpose
Connect user actions to TypeScript functions.

Examples used:
- Add coins
- Toggle messages
- Toggle password visibility
- Add and remove tasks

---

## 3. Toggle Logic
Used boolean state to switch features on and off.

```ts
showMessage = false;

toggleMessage() {
 this.showMessage = !this.showMessage;
}
```

### Purpose
Used for:
- Show/Hide content
- Toggle UI states
- Interactive app behavior

---

## 4. Conditional Rendering (`*ngIf`)
Displayed content only when conditions are true.

```html
<p *ngIf="showMessage">
Hello Angular!
</p>
```

### Purpose
Show or hide elements dynamically.

---

## 5. Dynamic Attribute Binding
Used property binding to switch password visibility.

```html
<input
[type]="showPassword ? 'text' : 'password'"
[(ngModel)]="password"
/>
```

### Purpose
Change HTML behavior dynamically from component state.

---

## 6. Arrays and List Management
Created and managed a simple todo list.

```ts
tasks: string[] = [];
```

Add task:

```ts
this.tasks.push(this.task);
```

Delete task:

```ts
this.tasks.splice(index,1);
```

### Purpose
- Store multiple values
- Add data dynamically
- Remove items from a list

---

## 7. Looping with `*ngFor`
Rendered items from an array.

```html
<li *ngFor="let item of tasks; let i = index">
{{ item }}
</li>
```

### Purpose
Display repeated data dynamically.

---

# Angular Concepts Reinforced

## Variables / State
```ts
coins = 0;
showMessage = false;
showPassword = false;
task = '';
```

State controls UI behavior.

---

## Methods / Functions
```ts
addCoins()
toggleMessage()
togglePassword()
addTask()
removeTask()
```

Functions handle logic and events.

---

## Interpolation
```html
{{ coins }}
```

Displays dynamic data.

---

## Automatic UI Updates
Angular updates the interface automatically whenever state changes.

Flow:

```text
User Action
↓
Event Triggers Function
↓
State Changes
↓
UI Updates Automatically
```

---

# Mini Projects Built

## Coin Counter
- Add 5
- Add 10
- Add 50

---

## Toggle Message Feature
Show and hide content dynamically.

---

## Show/Hide Password
Interactive password visibility feature.

---

## Simple Todo List
Features:
- Add task
- Delete task
- Render task list dynamically

---

# Key Takeaways

- Events drive frontend behavior
- Functions can receive values through parameters
- Boolean state can control toggles
- Arrays allow dynamic list management
- `push()` adds items
- `splice()` removes items
- `*ngFor` loops through data for UI rendering

---

## Summary
Today focused on event-driven programming in Angular.

Main lesson:

> Angular applications react to user events by changing state, and the UI updates automatically based on those changes.

This is the foundation for building interactive applications.
