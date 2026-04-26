# 🚀 Day 5 — Angular Components and Reusable UI

## Objective
Learn how Angular applications are structured using components and how to build reusable UI using parent-child communication with `@Input()`.

This session focused on breaking large interfaces into smaller reusable pieces and passing data between components.

---

# Key Concepts Learned

## 1. Components
A component is a reusable piece of UI that contains:

- HTML (template)
- TypeScript (logic)
- CSS/SCSS (styling)

Examples:
- User Card
- Product Card
- Navbar
- Forms

### Purpose
- Organize code
- Reuse UI
- Improve maintainability
- Reduce repetition

---

## 2. Creating Custom Components
Created reusable Angular components:

```bash
ng generate component user-card
ng generate component product-card
```

Generated:
- `user-card.component.ts`
- `user-card.component.html`
- `product-card.component.ts`
- `product-card.component.html`

---

## 3. Custom Component Tags
Used components as custom HTML elements.

```html
<app-user-card></app-user-card>
```

```html
<app-product-card></app-product-card>
```

### Purpose
Use custom reusable building blocks inside applications.

---

## 4. Parent to Child Data Passing (`@Input`)
Used `@Input()` to receive data from parent components.

```ts
@Input() name = '';
@Input() role = '';
@Input() level = '';
```

Product card:

```ts
@Input() productName = '';
@Input() productPrice = 0;
```

---

## 5. Reusable Components with Dynamic Data

Example:

```html
<app-user-card
[name]="'JM'"
[role]="'Angular Developer'"
[level]="'Junior'">
</app-user-card>
```

Another reusable instance:

```html
<app-user-card
[name]="'Alex'"
[role]="'Backend Developer'"
[level]="'Junior'">
</app-user-card>
```

### Purpose
Use one component multiple times with different data.

---

## 6. Product Card Mini Project

Created reusable product cards:

```html
<app-product-card
[productName]="'Laptop'"
[productPrice]="200">
</app-product-card>

<app-product-card
[productName]="'Phone'"
[productPrice]="150">
</app-product-card>

<app-product-card
[productName]="'Keyboard'"
[productPrice]="50">
</app-product-card>
```

### Learned
One component can render many different products.

---

# Angular Concepts Reinforced

## Component Imports
Imported standalone components into the root component.

```ts
imports: [
UserCardComponent,
ProductCardComponent
]
```

---

## Interpolation
```html
{{ name }}
{{ role }}
{{ level }}
```

Displays component data.

---

## Inputs
```ts
@Input()
```

Allows parent components to pass values into child components.

Flow:

```text
Parent Component
↓
Passes Data
↓
Child Component Receives Data
```

---

# Architecture Thinking Learned

## Component Responsibilities
Simple separation learned:

```text
Component = UI / Presentation
Service = Logic / Data (next topic)
```

Important mindset for scalable applications.

---

# Mini Projects Built

## User Card Component
Displays:
- Name
- Role
- Level

---

## Product Card Component
Displays:
- Product name
- Product price

---

# Key Takeaways

- Components break apps into smaller pieces
- Reusable components reduce repeated code
- `@Input()` enables parent-child communication
- One component can display many different data sets
- Angular apps are built from reusable UI blocks

---

## Summary
Today focused on real Angular architecture using reusable components.

Main lesson:

> Large applications are built by combining small reusable components.

This is a core Angular development skill and foundation for scalable frontend applications.
