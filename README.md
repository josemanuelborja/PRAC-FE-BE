# 🚀 Day 7 – Angular API Calls with HttpClient

## 🎯 Objective

To learn how Angular communicates with backend APIs using `HttpClient`, fetch remote data with GET requests, and display dynamic API data in the UI.

---

## 🧠 Key Concepts Learned

### 1. What is an API

An API allows the frontend and backend to communicate and exchange data.

Flow:

```text
Frontend Request
↓
API
↓
Backend Response
↓
Display Data in UI
```

Example response:

```json
[
 {
   "name":"John",
   "email":"john@email.com"
 }
]
```

**Purpose:**

* Send requests for data
* Receive data from a backend
* Display dynamic content in the UI

---

### 2. HttpClient

Used Angular `HttpClient` to make requests.

Import:

```ts
import { HttpClientModule } from '@angular/common/http';
```

Service uses:

```ts
import { HttpClient } from '@angular/common/http';
```

**Purpose:**

* Make HTTP requests to APIs
* Connect Angular apps to backend data

---

### 3. GET Request

Used a GET request to fetch user data.

```ts
getUsers(){
 return this.http.get(
  'https://jsonplaceholder.typicode.com/users'
 );
}
```

**Purpose:**

* Retrieve data from a server

---

### 4. API Service

Created a service to manage API logic.

```ts
@Injectable({
 providedIn:'root'
})
export class UserService {

}
```

Architecture:

```text
Component = UI / Presentation
Service = Data / API Logic
```

**Purpose:**

* Keep API logic out of components
* Separate UI from data logic

---

### 5. Dependency Injection (DI)

Injected the service into the component.

```ts
constructor(
 private userService: UserService
){}
```

**Purpose:**

* Give components access to services
* Let Angular provide dependencies automatically

---

### 6. `subscribe()` for Responses

Used `subscribe()` to handle asynchronous API responses.

```ts
this.userService.getUsers()
.subscribe({
 next:(data:any)=>{
  this.users = data;
 },
 error:()=>{
  this.error='Failed to load users';
 }
});
```

**Purpose:**

* Wait for API responses
* Process returned data
* Handle success and errors

---

### 7. Loading State

Added loading feedback while waiting for data.

```ts
loading = false;
```

```html
<p *ngIf="loading">
Loading...
</p>
```

**Purpose:**

* Show users data is loading

---

### 8. Error Handling

Handled failed requests.

```ts
error = '';
```

```ts
error:()=>{
 this.error='Failed to load users';
}
```

**Purpose:**

* Prevent silent failures
* Show useful feedback to users

---

### 9. Displaying API Data

Rendered data using `*ngFor`.

```html
<li *ngFor="let user of users">
{{ user.name }} - {{ user.email }}
</li>
```

**Purpose:**

* Display API data dynamically in a list

---

### 10. Reload Data

Added a reload button.

```html
<button (click)="getUsers()">
Reload Users
</button>
```

**Purpose:**

* Refetch data from the API manually

---

## 📌 Angular Concepts Reinforced

### 11. `ngOnInit()`

Used to load data when the component starts.

```ts
ngOnInit(){
 this.getUsers();
}
```

**Purpose:**

* Run code when the component loads

---

### 12. Event Binding (`(click)`)

```html
(click)="getUsers()"
```

**Purpose:**

* Trigger API calls from user actions

---

### 13. Conditional Rendering (`*ngIf`)

```html
*ngIf="loading"
*ngIf="error"
```

**Purpose:**

* Show or hide UI based on application state

---

## 📌 Quick Summary

* APIs connect frontend and backend
* `HttpClient` makes HTTP requests
* `http.get()` fetches data
* `subscribe()` handles async responses
* `*ngIf` shows loading and error states
* `*ngFor` displays API data
* Services manage API logic
* Components display the data

---

## 🚀 Key Takeaway

Angular can fetch data from APIs and display it dynamically in the UI. Using `HttpClient`, services, loading states, and error handling is a core real-world frontend development skill.
