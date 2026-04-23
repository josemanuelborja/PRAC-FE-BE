# 🚀 Day 2 – Angular User Input & Two-Way Binding

## 🎯 Objective
Learn how to handle user input in Angular using two-way binding, and apply conditions to display dynamic data based on user input.

---

## 🧠 Key Concepts

### 1. Two-Way Binding (`[(ngModel)]`)
Connects the input field and the variable.

```html
<input [(ngModel)]="name">

👉 Purpose:

Updates variable when user types
Updates input if variable changes
2. Variables with null
age: number | null = null;

👉 Purpose:

null means “no value yet”
Better than 0 because 0 is already a value
3. Conditional Checks (*ngIf)
<p *ngIf="age !== null">You are {{ age }} years old</p>
Give feedback

👉 Purpose:

Show content only when value exists
4. Strict Comparison (!== null)
age !== null

👉 Purpose:

Ensures the value is NOT empty
Prevents showing UI too early
5. Multiple Conditions (&&)
<p *ngIf="age !== null && age >= 18">You are an adult</p>
Give feedback

👉 Purpose:

Combine conditions
Both must be true
💻 Code Example
TypeScript
name: string = '';
age: number | null = null;
HTML
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
Give feedback
🔁 Summary / Key Takeaways
[(ngModel)] → connects input and variable (two-way)
null → represents empty/no value
!== null → checks if value exists
&& → combines multiple conditions
*ngIf → controls what shows on screen
Angular updates UI automatically when data changes
🧠 Key Insight

Angular makes apps interactive by connecting user input directly to data, then reflecting that data in the UI instantly.
