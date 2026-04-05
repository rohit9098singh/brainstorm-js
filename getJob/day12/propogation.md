### 🔹 event.preventDefault() vs event.stopPropagation()

**event.preventDefault():**
👉 Default browser behavior ko stop karta hai

**Example use case:**

* Form submit hone pe page reload rokna

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

**event.stopPropagation():**
👉 Event ko parent elements tak bubble hone se rokta hai

**Example use case:**

* Parent click trigger nahi hona chahiye

```jsx
function App() {
  const parentClick = () => console.log("Parent clicked");
  const childClick = (e) => {
    e.stopPropagation(); // parent trigger nahi hoga
    console.log("Child clicked");
  };

  return (
    <div onClick={parentClick}>
      <button onClick={childClick}>Click Me</button>
    </div>
  );
}
```

---

### 🧠 Difference (simple)

* preventDefault → browser ka default action rokta hai
* stopPropagation → event bubbling rokta hai

---

### 🎯 One-line (interview)

> preventDefault stops default browser behavior, while stopPropagation prevents the event from bubbling to parent elements.
