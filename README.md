# 🚀 Day 4 – Angular Events and User Interactions

## 🎯 Objective

Learn how Angular handles user interactions through events, function parameters, toggles, and dynamic lists.

---

## 🧠 Key Concepts Learned

### 1. Function Parameters

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

**Explanation:**

* `amount` is a parameter (placeholder value)
* Each button sends a different value (`5`, `10`, `50`)
* One function is reused instead of creating multiple functions

**How it works:**

1. User clicks a button
2. Function is called with a value
3. State updates
4. UI updates automatically

**Purpose:**

* Reusable logic
* Cleaner code
* Scalable functions

---

### 2. Event Binding (`(click)`)

Used button clicks to trigger logic.

```html
(click)="toggleMessage()"
```

**Purpose:**

* Connect user actions to functions
* Trigger logic from UI interactions

---

### 3. Toggle Logic

Used boolean values to switch features on/off.

```ts
showMessage = false;

toggleMessage() {
  this.showMessage = !this.showMessage;
}
```

**Purpose:**

* Show/Hide content
* Control UI states dynamically

---

### 4. Conditional Rendering (`*ngIf`)

Displayed content based on conditions.

```html
<p *ngIf="showMessage">
  Hello Angular!
</p>
```

**Purpose:**

* Dynamically show or hide elements

---

### 5. Dynamic Attribute Binding

Used property binding to change input behavior.

```html
<input
  [type]="showPassword ? 'text' : 'password'"
  [(ngModel)]="password"
/>
```

**Purpose:**

* Dynamically control HTML attributes
* Improve user interaction (e.g., show/hide password)

---

### 6. Arrays and List Management

Created and managed a todo list.

```ts
tasks: string[] = [];
```

Add item:

```ts
this.tasks.push(this.task);
```

Remove item:

```ts
this.tasks.splice(index, 1);
```

**Purpose:**

* Store multiple values
* Dynamically update lists

---

### 7. Looping with `*ngFor` and `index`

Rendered list items dynamically.

```html
<li *ngFor="let item of tasks; let i = index">
  {{ item }}
  <button (click)="removeTask(i)">Delete</button>
</li>
```

**Explanation:**

* `index` is a built-in variable in `*ngFor`
* Represents position of item (starts at 0)

**Example:**

```ts
tasks = ['Task A', 'Task B', 'Task C'];
```

* Task A → index 0
* Task B → index 1
* Task C → index 2

**Purpose:**

* Identify specific items
* Enable delete/update operations

---

### 8. State (Variables)

Used to store and control data.

```ts
coins = 0;
showMessage = false;
showPassword = false;
task = '';
```

**Purpose:**

* Control UI behavior
* Store application data

---

### 9. Methods (Functions)

Handle logic and user interactions.

```ts
addCoins()
toggleMessage()
togglePassword()
addTask()
removeTask()
```

**Purpose:**

* Execute logic
* Respond to user events

---

### 10. Interpolation (`{{ }}`)

Displays data in the UI.

```html
{{ coins }}
```

**Purpose:**

* Show dynamic values

---

### 11. Angular Automatic UI Updates

Angular updates the UI whenever state changes.

**Flow:**

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

## 📌 Quick Summary

* `(click)` → Event binding (user actions)
* Parameters → Pass values into functions
* Boolean → Control toggles
* `*ngIf` → Conditional rendering
* `*ngFor` → Loop through lists
* `index` → Track item position
* `push()` → Add item
* `splice()` → Remove item
* `{{ }}` → Display data

---

## 🚀 Key Takeaway

Angular applications are event-driven. User actions trigger functions, which update the state, and the UI automatically reflects those changes.
