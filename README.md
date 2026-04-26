# 🚀 Day 5 – Angular Components & Reusable UI

## 🎯 Objective

To understand how Angular applications are structured using components, and how to build reusable UI by passing data between parent and child components using `@Input()`.

---

## 🧠 Key Concepts Learned

### 1. Components

A component is a reusable block of UI that contains template (HTML), logic (TypeScript), and styling (CSS/SCSS).

```ts
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html'
})
```

**Purpose:**

* Organize application into smaller parts
* Promote code reusability
* Improve maintainability

---

### 2. Creating Components

Angular provides a CLI command to quickly generate components.

```bash
ng generate component user-card
ng generate component product-card
```

**Purpose:**

* Automatically create component structure
* Speed up development workflow

---

### 3. Custom Component Tags

Components can be used as custom HTML elements.

```html
<app-user-card></app-user-card>
<app-product-card></app-product-card>
```

**Purpose:**

* Build UI using reusable components
* Replace repetitive HTML blocks

---

### 4. `@Input()` – Parent to Child Data Binding

Used to pass data from a parent component to a child component.

```ts
@Input() name = '';
@Input() role = '';
@Input() level = '';
```

**Purpose:**

* Allow components to receive dynamic data
* Enable component reusability

---

### 5. Dynamic Reusable Components

A single component can be reused with different data inputs.

```html
<app-user-card
  [name]="'JM'"
  [role]="'Angular Developer'"
  [level]="'Junior'">
</app-user-card>
```

```html
<app-user-card
  [name]="'Alex'"
  [role]="'Backend Developer'"
  [level]="'Junior'">
</app-user-card>
```

**Purpose:**

* Reuse one component multiple times
* Display different data using the same structure

---

### 6. Product Card Example

Reusable component displaying different products.

```html
<app-product-card
  [productName]="'Laptop'"
  [productPrice]="200">
</app-product-card>
```

**Purpose:**

* Render multiple items using one component
* Keep UI consistent and scalable

---

### 7. Component Imports

Standalone components must be imported before use.

```ts
imports: [
  UserCardComponent,
  ProductCardComponent
]
```

**Purpose:**

* Make components available inside other components

---

### 8. Data Display (Interpolation)

Used to display values inside templates.

```html
<p>{{ name }}</p>
<p>{{ role }}</p>
```

**Purpose:**

* Show dynamic data in UI

---

### 9. Data Flow (Parent → Child)

Angular follows one-way data flow using `@Input()`.

```text
Parent Component
↓
Passes Data via @Input()
↓
Child Component Displays Data
```

**Purpose:**

* Maintain predictable data flow
* Improve application structure

---

## 📌 Quick Summary

* `@Input()` → Pass data from parent to child
* Components → Reusable UI blocks
* Custom tags → Use components in HTML
* Interpolation → Display component data
* One component → Can handle multiple data sets

---

## 🚀 Key Takeaway

Angular applications are built using small, reusable components. By combining these components and passing data between them, you can create scalable and maintainable user interfaces.
