# 🚀 Day 2 – Angular User Input & Two-Way Binding

## 🎯 Objective
Learn how to handle user input in Angular using two-way binding, and apply conditions to display dynamic data based on user input.

---

## 🧠 Key Concepts

### 1. Two-Way Binding (`[(ngModel)]`)

#### Code
```html
<input [(ngModel)]="name">
````

#### Purpose

* Updates variable when user types
* Updates input if variable changes

---

### 2. Variables with `null`

#### Code

```ts
age: number | null = null;
```

#### Purpose

* `null` means “no value yet”
* Better than `0` because `0` is already a valid value

---

### 3. Conditional Checks (`*ngIf`)

#### Code

```html
<p *ngIf="age !== null">You are {{ age }} years old</p>
```

#### Purpose

* Show content only when value exists

---

### 4. Strict Comparison (`!== null`)

#### Code

```ts
age !== null
```

#### Purpose

* Ensures the value is NOT empty
* Prevents showing UI too early

---

### 5. Multiple Conditions (`&&`)

#### Code

```html
<p *ngIf="age !== null && age >= 18">You are an adult</p>
```

#### Purpose

* Combine conditions
* Both must be true

---

## 💻 Code Example

### TypeScript

```ts
name: string = '';
age: number | null = null;
```

### HTML

```html
<p *ngIf="name">Hello, {{ name }}!</p>

<p *ngIf="age !== null && age >= 0">
  You are {{ age }} years old
</p>

<p *ngIf="age !== null && age >= 18">
  You are an adult
</p>

<p *ngIf="age !== null && age < 18">
  You are a minor
</p>

<input [(ngModel)]="name" placeholder="Enter your name">
<input [(ngModel)]="age" type="number" placeholder="Enter your age">
```


## 📌 Quick Summary

* `[(ngModel)]` → connects input and variable (two-way binding)
* `null` → represents empty/no value
* `!== null` → checks if value exists
* `&&` → combines multiple conditions
* `||` → at least one condition must be true
* `!` → reverses the value (NOT)
* `*ngIf` → controls what shows on screen
* Angular updates UI automatically when data changes

