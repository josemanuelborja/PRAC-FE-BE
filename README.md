Got it—hindi ko binago content mo, inayos ko lang para tumugma sa format ng Day 1 👇

---

# 🚀 Day 5 – Angular Components and Reusable UI

## 🎯 Objective

Learn how Angular applications are structured using components and how to build reusable UI using parent-child communication with `@Input()`.

---

## 🧠 Key Concepts Learned

### 1. Components

A component is a reusable piece of UI that contains:

* HTML (template)
* TypeScript (logic)
* CSS/SCSS (styling)

**Examples:**

* User Card
* Product Card
* Navbar
* Forms

**Purpose:**

* Organize code
* Reuse UI
* Improve maintainability
* Reduce repetition

---

### 2. Creating Custom Components

Created reusable Angular components:

```bash
ng generate component user-card
ng generate component product-card
```

**Generated:**

* `user-card.component.ts`
* `user-card.component.html`
* `product-card.component.ts`
* `product-card.component.html`

**Purpose:**

* Quickly scaffold components
* Standardize structure

---

### 3. Custom Component Tags

Used components as custom HTML elements.

```html
<app-user-card></app-user-card>
<app-product-card></app-product-card>
```

**Purpose:**

* Use reusable building blocks
* Simplify UI structure

---

### 4. Parent to Child Data Passing (`@Input()`)

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

**Purpose:**

* Pass data into components
* Make components dynamic

---

### 5. Reusable Components with Dynamic Data

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

**Purpose:**

* Reuse one component multiple times
* Display different data

---

### 6. Product Card Mini Project

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

**Learned:**

* One component can render many different products

---

### 7. Component Imports

Imported standalone components into the root component.

```ts
imports: [
UserCardComponent,
ProductCardComponent
]
```

**Purpose:**

* Enable usage of components

---

### 8. Interpolation (`{{ }}`)

Used to display component data.

```html
{{ name }}
{{ role }}
{{ level }}
```

**Purpose:**

* Show dynamic values in UI

---

### 9. Inputs (`@Input()`)

```ts
@Input()
```

Flow:

```text
Parent Component
↓
Passes Data
↓
Child Component Receives Data
```

**Purpose:**

* Enable parent → child communication

---

### 10. Component Responsibilities

Simple separation learned:

```text
Component = UI / Presentation
Service = Logic / Data (next topic)
```

**Purpose:**

* Keep code clean and scalable

---

## 📌 Quick Summary

* Components → Reusable UI blocks
* `@Input()` → Parent to child data passing
* Custom tags → Use components in HTML
* Interpolation → Display data
* One component → Multiple data sets

---

## 🚀 Key Takeaway

Angular applications are built from small reusable components. By combining them and passing data between components, you can build scalable and maintainable applications.
