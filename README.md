# 🚀 Day 1 – Angular Basics

## 🎯 Objective
To learn the fundamentals of Angular, including components, data binding, event handling, conditional rendering, and basic state management.

---

## 🧠 Key Concepts Learned

### 1. State (Variables)
Variables are used to store data that can change over time and directly affect the UI.

```ts
coins: number = 0;
```

**Purpose:**
- Store application data  
- Bind data to the UI for display and logic  

---

### 2. Methods (Functions / Logic)
Functions define the behavior of the application and handle user interactions.

```ts
addCoins() {
  this.coins += 5;
}
```

**Purpose:**
- Handle user actions (clicks, inputs, etc.)
- Update application state (variables)

---

### 3. Interpolation (`{{ }}`)
Used to display data from the component (TypeScript) into the HTML template.

```html
<p>Coins: {{ coins }}</p>
```

**Purpose:**
- Display dynamic data in the UI

---

### 4. Event Binding (`(click)`)
Used to listen and respond to user events such as clicks.

```html
<button (click)="addCoins()">Earn Coins</button>
```

**Purpose:**
- Trigger functions when a user interacts with the UI

---

### 5. Conditional Rendering (`*ngIf`)
Used to show or hide elements based on conditions.

```html
<p *ngIf="coins >= 20">You are rich!</p>
```

**Purpose:**
- Control UI visibility dynamically

---

### 6. `this` Keyword
Used to access properties and methods inside the Angular component class.

```ts
this.coins
```

**Purpose:**
- Reference component state and behavior

---

### 7. Angular Automatic UI Updates
Angular automatically updates the UI whenever the underlying data changes.

**Example:**
- If `coins` changes in TypeScript → the UI updates instantly

---

## 📌 Quick Summary

- `{{ }}` → Interpolation (display data)
- `(click)` → Event binding (handle user actions)
- `*ngIf` → Conditional rendering (show/hide elements)
- `this.variable` → Access component state
- Angular automatically updates the UI when data changes

---

## 🚀 Key Takeaway
Angular is a reactive framework where the UI is directly connected to the state. When the state changes, the UI updates automatically without manual DOM manipulation.
