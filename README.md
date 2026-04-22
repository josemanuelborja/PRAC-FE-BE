🚀 Day 1 – Angular Basics
🎯 Objective

Learn the basics of Angular components, data binding, events, and simple state management.

🧠 Key Concepts Learned
1. Variables (State)

Variables store data that can change and affect the UI.

coins: number = 0;

👉 Purpose:

Store application data
Used in HTML for display and logic
2. Functions (Behavior / Logic)

Functions define what happens when a user interacts with the app.

addCoins() {
  this.coins += 5;
}

👉 Purpose:

Handle actions (click, input, etc.)
Update variables (state)
3. Data Binding ({{ }})
<p>Coins: {{ coins }}</p>
Give feedback

👉 Purpose:

Display data from TypeScript in HTML
4. Event Binding ((click))
<button (click)="addCoins()">Earn Coins</button>
Give feedback

👉 Purpose:

Run a function when user interacts (clicks)
5. Conditional Rendering (*ngIf)
<p *ngIf="coins >= 20">You are rich!</p>
Give feedback

👉 Purpose:

Show or hide elements based on conditions
6. this Keyword
this.coins

👉 Purpose:

Access variables inside the class/component
7. Angular UI Updates Automatically

When data changes in TypeScript, Angular automatically updates the UI.

👉 Example:

coins changes → UI updates instantly


DON'T FORGET 

* {{ }} → display data
* (click) → run function
* *ngIf → show/hide
* this.variable → access state
* Angular auto updates UI
