# 🚀 Day 10 – Angular Routing and Multi-Page Applications

## 🎯 Objective

To learn how to create a multi-page Angular application using Angular Routing, navigation links, and route configuration.

---

## 🧠 Key Concepts Learned

### 1. What is Routing?

Routing is the process of displaying different components based on the current URL.

| URL      | Component  |
| -------- | ---------- |
| `/`      | Home Page  |
| `/about` | About Page |
| `/tasks` | Tasks Page |

**Purpose:**

* Connect URLs to Angular components
* Create multi-page experiences within a single application

---

### 2. Single Page Application (SPA)

Angular is a Single Page Application (SPA).

Flow:

```text
Click Link
↓
Angular Changes Component
↓
URL Updates
↓
Page Content Changes
```

**Purpose:**

* Navigate without reloading the browser
* Create faster and smoother user experiences

**Benefits:**

* Faster navigation
* Better user experience
* Reduced server requests

---

### 3. Route Configuration

Created application routes.

```ts
export const routes = [
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'about',
  component: AboutComponent
 },
 {
  path: 'tasks',
  component: TasksComponent
 }
];
```

**Purpose:**

* Map URLs to Angular components

---

### 4. `provideRouter()`

Configured routing inside `main.ts`.

```ts
provideRouter(routes)
```

**Purpose:**

* Register application routes
* Enable Angular routing

---

### 5. Router Outlet

Used:

```html
<router-outlet></router-outlet>
```

**Purpose:**

* Display the currently active route component

Think of it as:

```text
Router Outlet = Page Container
```

---

### 6. `routerLink`

Used:

```html
<a routerLink="/about">
 About
</a>
```

**Purpose:**

* Navigate between Angular routes
* Prevent full page reloads

---

### 7. `routerLinkActive`

Used:

```html
routerLinkActive="active"
```

Example:

```html
<a
 routerLink="/about"
 routerLinkActive="active">
 About
</a>
```

**Purpose:**

* Automatically apply a CSS class to the active route

---

### 8. Active Navigation Styling

Created active route styling.

```scss
.active {
 font-weight: bold;
 color: red;
}
```

**Purpose:**

* Visually indicate the currently selected page

---

### 9. Exact Route Matching

Used:

```html
[routerLinkActiveOptions]="{ exact: true }"
```

Example:

```html
<a
 routerLink="/"
 routerLinkActive="active"
 [routerLinkActiveOptions]="{ exact: true }">
 Home
</a>
```

**Purpose:**

* Ensure the Home link is only active on the exact `/` route

---

## 📌 Angular Concepts Reinforced

### 10. Component Imports

Imported Angular routing directives.

```ts
import {
 RouterOutlet,
 RouterLink,
 RouterLinkActive
} from '@angular/router';
```

Registered inside the component:

```ts
imports: [
 RouterOutlet,
 RouterLink,
 RouterLinkActive
]
```

**Purpose:**

* Enable routing features inside components

---

### 11. Navigation Structure

Created a navigation menu.

```html
<nav>

<a routerLink="/">Home</a>

<a routerLink="/about">About</a>

<a routerLink="/tasks">Tasks</a>

</nav>
```

**Purpose:**

* Allow users to switch between pages

---

## 📌 Quick Summary

* Routing connects URLs to components
* Angular uses `routerLink` for navigation
* `router-outlet` displays routed pages
* `routerLinkActive` highlights active routes
* `provideRouter()` enables routing
* Angular is a Single Page Application (SPA)
* SPA navigation avoids full page reloads

---

## 🚀 Key Takeaway

Angular Routing allows users to navigate between pages while keeping the application fast, dynamic, and free from full browser reloads. It is a core Angular feature and an important step toward building real-world applications.
