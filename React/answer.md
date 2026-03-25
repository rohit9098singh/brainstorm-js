# 📚 React Interview Questions & Answers

---

## 1️⃣ React Fundamentals (Must-Know)

### ❓ What is React and why is it used?

**React** is a JavaScript library for building user interfaces, developed by Facebook.

**Why it's used:**
- 🔄 **Component-Based**: Build reusable UI components
- ⚡ **Virtual DOM**: Fast and efficient UI updates
- 📱 **Cross-Platform**: Works for web, mobile (React Native), and desktop
- 🎯 **Declarative**: You describe what UI should look like, React handles the how
- 🔧 **Rich Ecosystem**: Huge community and tons of libraries

---

### ❓ Difference between React and Vanilla JavaScript

| Feature | React | Vanilla JavaScript |
|---------|-------|-------------------|
| **Approach** | Declarative | Imperative |
| **DOM Updates** | Virtual DOM (efficient) | Direct DOM manipulation (slower) |
| **Code Style** | Component-based | Function/Object-based |
| **State Management** | Built-in state handling | Manual state tracking |
| **Reusability** | Easy with components | Harder to achieve |

**Example:**
```javascript
// Vanilla JS - Imperative
const button = document.createElement('button');
button.textContent = count;
button.onclick = () => {
  count++;
  button.textContent = count;
};

// React - Declarative
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>{count}</button>;
```

---

### ❓ What is JSX? Can we write React without JSX?

**JSX** (JavaScript XML) is a syntax extension that lets you write HTML-like code in JavaScript.

```javascript
// JSX
const element = <h1>Hello World!</h1>;

// Without JSX (using React.createElement)
const element2 = React.createElement('h1', null, 'Hello World!');
```

**Yes**, you can write React without JSX, but JSX makes code more readable and developer-friendly.

---

### ❓ How does React differ from other frameworks?

- **React is a library**, not a full framework (unlike Angular)
- **Virtual DOM** for efficient updates
- **One-way data flow** (easier to debug)
- **JSX** syntax
- **Component-based** architecture
- **Flexible** - can integrate with any backend or other libraries

---

### ❓ What is a component?

A **component** is a reusable, independent piece of UI that returns JSX.

```javascript
// Functional Component
function Welcome() {
  return <h1>Hello!</h1>;
}

// Usage
<Welcome />
```

---

### ❓ Difference between functional components and class components

| Feature | Functional | Class |
|---------|-----------|-------|
| **Syntax** | Simple function | ES6 class |
| **State** | `useState` hook | `this.state` |
| **Lifecycle** | `useEffect` hook | Lifecycle methods |
| **Performance** | Slightly faster | Slightly slower |
| **Code** | Less boilerplate | More boilerplate |
| **Modern React** | ✅ Recommended | ⚠️ Legacy |

```javascript
// Functional Component
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Class Component
class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
```

---

### ❓ What are props?

**Props** (properties) are arguments passed to components, like function parameters.

```javascript
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Rohit" />
```

---

### ❓ Are props mutable or immutable?

**Props are IMMUTABLE** ❌ You cannot modify props inside a component.

```javascript
// ❌ WRONG
function MyComponent({ name }) {
  name = "New Name"; // ERROR! Cannot modify props
  return <h1>{name}</h1>;
}
```

---

### ❓ What is state?

**State** is an object that holds data that may change over time in a component.

```javascript
const [count, setCount] = useState(0); // count is state
```

---

### ❓ Difference between state and props

| Feature | State | Props |
|---------|-------|-------|
| **Mutability** | Mutable (can be changed) | Immutable (read-only) |
| **Ownership** | Owned by component | Passed from parent |
| **Purpose** | Internal component data | Data passed to component |
| **Change** | `setState` or `setCount` | Comes from parent |

---

### ❓ Why is React called declarative?

You tell React WHAT the UI should look like for a given state.
React figures out HOW to update the DOM.

```javascript
// Declarative (React)
<p style={{ color: count > 5 ? "red" : "black" }}>{count}</p>

// Imperative (Vanilla JS)
if (count > 5) {
  element.style.color = "red";
} else {
  element.style.color = "black";
}
```

React automatically updates the DOM when state changes! 🎯

---

### ❓ What is the Virtual DOM?

The **Virtual DOM** is a lightweight JavaScript representation of the real DOM.

**How it works:**
1. State changes
2. React creates a new Virtual DOM tree
3. Compares it with the previous Virtual DOM (**diffing**)
4. Updates only the changed parts in the real DOM (**reconciliation**)

**Why it's fast:** Updates only what changed, not the entire page! ⚡

---

### ❓ How does React update the DOM efficiently?

1. **Virtual DOM** - Keeps a lightweight copy
2. **Diffing Algorithm** - Finds what changed
3. **Batch Updates** - Groups multiple updates together
4. **Reconciliation** - Updates only necessary parts in real DOM

---

### ❓ What is reconciliation?

**Reconciliation** is the process React uses to update the real DOM efficiently by comparing the new Virtual DOM with the old one.

**Key Points:**
- Uses **diffing algorithm**
- Updates only changed nodes
- Uses **keys** to identify elements in lists

---

## 2️⃣ Component & Rendering Behavior

### ❓ What causes a component to re-render?

1. **State changes** - `setState` or setter from `useState`
2. **Props change** - Parent passes new props
3. **Parent re-renders** - Child re-renders by default
4. **Context changes** - Component using context re-renders
5. **Force update** - `forceUpdate()` in class components

---

### ❓ When does React re-render a child component?

**By default, when the parent re-renders, ALL children re-render** - even if props didn't change!

```javascript
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child /> {/* Re-renders even though it has no props! */}
    </div>
  );
}
```

**Solution:** Use `React.memo()` to prevent unnecessary re-renders.

---

### ❓ What is the difference between initial render and re-render?

| Type | When | What Happens |
|------|------|-------------|
| **Initial Render** | Component mounts first time | Component appears on screen |
| **Re-render** | State/props change | Component updates on screen |

---

### ❓ What is the role of the `key` prop?

The `key` prop helps React identify which items in a list have changed, been added, or removed.

```javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

**Why it matters:** React uses keys to optimize re-renders in lists.

---

### ❓ Why should keys be stable and unique?

React list ko update karte time key ke basis par items ko identify karta hai.
Agar tum index ko key bana dete ho, aur list me beech ka item delete ya insert ho jaye, to baaki items ke index shift ho jate hain.
React ko lagega ki items change ho gaye, jabki actually sirf position change hui hoti hai.

**Example:**
```javascript
// ✅ GOOD
<li key={user.id}>{user.name}</li>

// ❌ BAD
<li key={Math.random()}>{user.name}</li> // Changes every render!
```

---

### ❓ What happens if we use array index as key?

**React cannot correctly identify items when the list changes**, which may cause:
- ❌ Wrong UI updates
- ❌ State bugs
- ❌ Performance issues

```javascript
// ❌ AVOID
{items.map((item, index) => <li key={index}>{item}</li>)}

// ✅ BETTER
{items.map(item => <li key={item.id}>{item}</li>)}
```

**When index as key is OK:** When the list is static and won't change.

---

### ❓ Controlled vs uncontrolled components

**Controlled Component:**
```javascript
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />
```
- React controls the input value via state
- ✅ Recommended approach

**Uncontrolled Component:**
```javascript
const inputRef = useRef();
<input ref={inputRef} />
// Access value: inputRef.current.value
```
- DOM controls the value
- Use for simple forms or third-party integration

---

### ❓ How does conditional rendering work?

**Method 1: `&&` Operator**
```javascript
{isLoggedIn && <Dashboard />}
```

**Method 2: Ternary Operator**
```javascript
{isLoggedIn ? <Dashboard /> : <Login />}
```

**Method 3: If-Else**
```javascript
if (isLoggedIn) return <Dashboard />;
return <Login />;
```

---

### ❓ Difference between `{condition && <Component />}` and ternary rendering

**`&&` Operator:**
```javascript
{count > 0 && <p>Count: {count}</p>}
```
- Shows component if condition is true
- Shows **nothing** if false
- ⚠️ Be careful: `{0 && <Component />}` renders `0`!

**Ternary Operator:**
```javascript
{count > 0 ? <p>Count: {count}</p> : <p>No items</p>}
```
- Must provide both true and false cases
- More explicit

---

## 3️⃣ Hooks – Core Hooks (Very Important)

### 🪝 useState

### ❓ How does `useState` work internally?

1. On **first render**, React stores initial value
2. Returns an array: `[currentValue, setterFunction]`
3. When setter is called, React:
   - Schedules a re-render
   - Updates the value
   - Re-runs the component with new value

```javascript
const [count, setCount] = useState(0);
// count = 0
// setCount = function to update count
```

---

### ❓ Why is state update asynchronous?

**Performance optimization!** React batches multiple state updates together to avoid unnecessary re-renders.

```javascript
setCount(count + 1);
console.log(count); // ❌ Still old value! (asynchronous)

// To use updated value, wait for re-render or use functional update
setCount(prevCount => {
  console.log(prevCount); // ✅ Updated value
  return prevCount + 1;
});
```

---

### ❓ Why should we not mutate state directly?

React won't detect the change and won't re-render!

```javascript
// ❌ WRONG
const [user, setUser] = useState({ name: "Rohit" });
user.name = "Sharma"; // NO re-render!

// ✅ CORRECT
setUser({ ...user, name: "Sharma" }); // Creates new object, triggers re-render
```

---

### ❓ What happens if we update state multiple times in one render?

**Without functional update:**
```javascript
setCount(count + 1); // count = 0 + 1 = 1
setCount(count + 1); // count = 0 + 1 = 1 (still uses old value!)
setCount(count + 1); // count = 0 + 1 = 1
// Final result: 1 ❌
```

**With functional update:**
```javascript
setCount(prev => prev + 1); // 0 + 1 = 1
setCount(prev => prev + 1); // 1 + 1 = 2
setCount(prev => prev + 1); // 2 + 1 = 3
// Final result: 3 ✅
```

---

### ❓ Functional update vs direct update

**Direct Update:**
```javascript
setCount(count + 1); // Uses current value from closure
```

**Functional Update:**
```javascript
setCount(prev => prev + 1); // Uses latest value
```

**Use functional update when:**
- Updating state multiple times
- New state depends on previous state
- Inside callbacks, timeouts, intervals

---

### 🪝 useEffect

### ❓ What is `useEffect`?

`useEffect` lets you perform **side effects** in functional components (data fetching, subscriptions, DOM manipulation, etc.).

```javascript
useEffect(() => {
  // Side effect code
}, [dependencies]);
```

---

### ❓ When does `useEffect` run?

**After** every render (by default), but can be controlled with dependencies.

**Execution order:**
1. Component renders
2. DOM updates
3. `useEffect` runs

---

### ❓ Difference between different useEffect patterns

**1. No dependency array - Runs after EVERY render**
```javascript
useEffect(() => {
  console.log("Runs on every render");
});
```

**2. Empty dependency array `[]` - Runs ONCE on mount**
```javascript
useEffect(() => {
  console.log("Runs only once on mount");
}, []);
```

**3. With dependencies - Runs when dependencies change**
```javascript
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

---

### ❓ Cleanup function in `useEffect`

Used to clean up side effects (remove event listeners, cancel requests, etc.)

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  
  // Cleanup function
  return () => {
    clearInterval(timer); // Runs before component unmounts or before next effect
  };
}, []);
```

**When cleanup runs:**
- Before component unmounts
- Before the next effect runs (if dependencies changed)

---

### ❓ useEffect vs lifecycle methods

| useEffect | Class Component |
|-----------|----------------|
| `useEffect(() => {}, [])` | `componentDidMount` |
| `useEffect(() => {}, [dep])` | `componentDidUpdate` |
| `return () => {}` in useEffect | `componentWillUnmount` |

---

### ❓ Common mistakes with useEffect

1. **Missing dependencies** - Causes stale closures
2. **Infinite loops** - Updating state that's in dependencies
3. **Not cleaning up** - Memory leaks
4. **Fetching data without cleanup** - Race conditions

---

### ❓ Infinite loop scenarios in useEffect

**Scenario 1: Missing dependency**
```javascript
useEffect(() => {
  setCount(count + 1); // ❌ Infinite loop!
}); // No dependency array
```

**Scenario 2: Object/Array in dependency**
```javascript
const user = { name: "Rohit" };
useEffect(() => {
  console.log(user);
}, [user]); // ❌ New object every render = infinite loop!
```

**Solution:** Use primitive values or useMemo

---

## 4️⃣ Hooks – Performance & Optimization

### ❓ What is `useMemo`?

`useMemo` **memoizes a computed value** to avoid expensive recalculations.

```javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]); // Only recalculates if a or b changes
```

---

### ❓ What is `useCallback`?

`useCallback` **memoizes a function** to avoid recreating it on every render.

```javascript
const handleClick = useCallback(() => {
  console.log(count);
}, [count]); // Function recreated only when count changes
```

---

### ❓ Difference between `useMemo` and `useCallback`

| Feature | useMemo | useCallback |
|---------|---------|------------|
| **Returns** | Memoized **value** | Memoized **function** |
| **Use Case** | Expensive calculations | Passing callbacks to child components |
| **Example** | `useMemo(() => a + b, [a, b])` | `useCallback(() => {}, [])` |

**Shortcut:**
```javascript
useCallback(fn, deps) === useMemo(() => fn, deps)
```

---

### ❓ What is `React.memo`?

`React.memo` is a **higher-order component** that prevents re-renders if props haven't changed.

```javascript
const Child = React.memo(({ name }) => {
  console.log("Rendered");
  return <h1>{name}</h1>;
});
```

Child only re-renders if `name` prop changes!

---

### ❓ When should you use `React.memo`?

✅ **Use when:**
- Component re-renders often with same props
- Component is expensive to render
- Component is pure (same props → same output)

❌ **Don't use when:**
- Component always gets different props
- Props are objects/arrays (need custom comparison)
- Performance gain is negligible

---

### ❓ Why `useCallback` is often used with `React.memo`

**Problem:**
```javascript
function Parent() {
  const handleClick = () => console.log("Clicked"); // ❌ New function every render!
  return <Child onClick={handleClick} />;
}

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});
// Child still re-renders because onClick is a new function!
```

**Solution:**
```javascript
function Parent() {
  const handleClick = useCallback(() => console.log("Clicked"), []); // ✅ Same function reference
  return <Child onClick={handleClick} />;
}
// Now Child doesn't re-render unnecessarily!
```

---

### ❓ When optimization is NOT required

- Component is lightweight
- Props change frequently anyway
- Premature optimization (optimize only when needed!)
- Component rarely re-renders

**Remember:** Optimization adds complexity. Profile first! 📊

---

### ❓ How unnecessary re-renders happen

1. **Parent re-renders** → All children re-render
2. **Context value changes** → All consumers re-render
3. **Passing new objects/arrays as props**
4. **Inline function definitions**

---

## 5️⃣ Output-Based Questions (CRITICAL) 🎯

### State & Re-render Output

### ❓ What will be the output of multiple `setState` calls?

**Question:**
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  
  return <button onClick={handleClick}>{count}</button>;
}
```

**Output:** Count becomes **1** (not 3!)

**Why?** All three updates use the same `count` value (0).

**Fix:**
```javascript
setCount(prev => prev + 1); // Now it becomes 3
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

---

### ❓ Output when logging state immediately after `setState`

```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(5);
  console.log(count); // Output: 0 (old value!)
};
```

**Why?** State updates are asynchronous and batched.

---

### ❓ Output when using functional vs non-functional updates

```javascript
const [count, setCount] = useState(0);

// Scenario 1: Non-functional
setTimeout(() => {
  setCount(count + 1); // Uses closure value (0)
}, 1000);

// Scenario 2: Functional
setTimeout(() => {
  setCount(prev => prev + 1); // Uses latest value
}, 1000);
```

If user clicks multiple times, functional update works correctly!

---

### useEffect Output

### ❓ What will be logged when multiple `useEffect` hooks exist?

```javascript
function Component() {
  console.log("1. Render");
  
  useEffect(() => {
    console.log("2. Effect 1");
  });
  
  useEffect(() => {
    console.log("3. Effect 2");
  });
  
  return <div>Hello</div>;
}
```

**Output:**
```
1. Render
2. Effect 1
3. Effect 2
```

Effects run **in order** after render!

---

### ❓ Output when dependency array is empty vs missing

```javascript
// Missing dependency array
useEffect(() => {
  console.log("Runs on EVERY render");
});

// Empty dependency array
useEffect(() => {
  console.log("Runs ONCE on mount");
}, []);
```

---

### ❓ Order of execution of `useEffect`

```javascript
function Component() {
  console.log("1. Render start");
  
  useEffect(() => {
    console.log("3. Effect runs");
    return () => console.log("5. Cleanup");
  });
  
  console.log("2. Render end");
  
  return <div>Hello</div>;
}
```

**On Mount:**
```
1. Render start
2. Render end
3. Effect runs
```

**On Unmount:**
```
5. Cleanup
```

---

### ❓ Cleanup execution order

```javascript
useEffect(() => {
  console.log("Effect");
  return () => console.log("Cleanup");
}, [count]);
```

**When count changes:**
```
Cleanup (from previous effect)
Effect (new effect)
```

---

### Closure & Stale State

### ❓ What will be the output due to stale closures?

```javascript
function Component() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setTimeout(() => {
      console.log(count); // ❌ Logs old value!
    }, 3000);
  };
  
  return <button onClick={handleClick}>{count}</button>;
}
```

If count is 0, click, then count becomes 5, timeout still logs **0**!

**Why?** Closure captures the old value.

**Fix:** Use `useRef` or functional update.

import { useState, useRef, useEffect } from "react";

function Component() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // keep ref updated with latest count
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleClick = () => {
    setTimeout(() => {
      console.log(countRef.current); // always latest value
    }, 3000);
  };

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

---

### ❓ Output when using state inside `setTimeout`

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  setTimeout(() => {
    setCount(count + 1); // ❌ Uses stale count!
  }, 1000);
}, []);
```

Always uses initial count (0)!

**Fix:**
```javascript
setCount(prev => prev + 1); // ✅ Uses latest value
```

---

### Props & Memoization

### ❓ Will this component re-render? Why?

```javascript
const Child = React.memo(({ user }) => {
  return <h1>{user.name}</h1>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const user = { name: "Rohit" }; // ❌ New object every render!
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child user={user} />
    </div>
  );
}
```

**Answer:** YES, Child re-renders even with `React.memo`!

**Why?** `user` is a new object every render (different reference).

**Fix:**
```javascript
const user = useMemo(() => ({ name: "Rohit" }), []);
```

---

### ❓ Output when passing inline functions as props

```javascript
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={() => console.log("Clicked")} />
    </div>
  );
}
```

**Output:** "Child rendered" logs on every Parent render!

**Why?** Inline function is recreated every time.

**Fix:** Use `useCallback`.

---

### JSX & Rendering

### ❓ Output when rendering `null`, `undefined`, `false`

```javascript
<div>{null}</div>        // Renders nothing
<div>{undefined}</div>   // Renders nothing
<div>{false}</div>       // Renders nothing
<div>{true}</div>        // Renders nothing
<div>{0}</div>           // Renders: 0
<div>{""}</div>          // Renders nothing (empty string)
<div>{"Hello"}</div>     // Renders: Hello
```

⚠️ **Common bug:**
```javascript
{count && <Component />} // If count is 0, renders "0"!
```

**Fix:**
```javascript
{count > 0 && <Component />}
```

---

### ❓ Output of conditional rendering edge cases

```javascript
{items.length && <List />}  // ❌ Renders 0 if items is empty!
{items.length > 0 && <List />}  // ✅ Correct
```

---

### ❓ Output when mapping with missing return

```javascript
{items.map(item => {
  <li>{item}</li>  // ❌ Missing return!
})}
// Output: Nothing renders!

// ✅ Fix:
{items.map(item => <li>{item}</li>)} // Implicit return
```

---

## 6️⃣ Event Handling & Synthetic Events

### ❓ What are synthetic events?

React wraps native browser events in **SyntheticEvent** for cross-browser compatibility.

```javascript
function handleClick(e) {
  console.log(e); // SyntheticEvent (not native Event)
  e.preventDefault();
}
```

**Benefits:**
- Consistent across browsers
- Pooled for performance (in older React)

---

### ❓ How does event delegation work in React?

React attaches event listeners to the **root** of the DOM tree, not individual elements.

**Why?** Performance! Fewer listeners = better performance.

---

### ❓ Why events are pooled (older versions)?

In React < 17, SyntheticEvent objects were **reused** for performance.

```javascript
function handleClick(e) {
  setTimeout(() => {
    console.log(e.target); // ❌ null in old React!
  }, 1000);
}
```

**Fix:** Use `e.persist()` or access properties immediately.

**Note:** React 17+ doesn't pool events anymore!

---

### ❓ Difference between `onClick={fn}` vs `onClick={() => fn()}`

**`onClick={fn}`:**
```javascript
<button onClick={handleClick}>Click</button>
// Calls handleClick when clicked
```

**`onClick={() => fn()}`:**
```javascript
<button onClick={() => handleClick()}>Click</button>
// Creates new function every render (can cause performance issues)
```

**When to use arrow function:**
- Need to pass arguments: `onClick={() => handleClick(id)}`

---

### ❓ Event bubbling in React

Events bubble up from child to parent (same as native DOM).

```javascript
<div onClick={() => console.log("Parent")}>
  <button onClick={() => console.log("Child")}>Click</button>
</div>
// Output: Child, Parent
```

**Stop bubbling:**
```javascript
e.stopPropagation();
```

---

### ❓ Prevent default behavior in React

```javascript
function handleSubmit(e) {
  e.preventDefault(); // Prevents form submission
  console.log("Form submitted!");
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

---

## 7️⃣ Forms & User Input

### ❓ Controlled vs uncontrolled inputs

**Controlled:**
```javascript
const [value, setValue] = useState('');

<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```
React controls the value (✅ Recommended)

**Uncontrolled:**
```javascript
const inputRef = useRef();

<input ref={inputRef} defaultValue="Hello" />

// Access: inputRef.current.value
```
DOM controls the value

---

### ❓ Why controlled components are preferred

- ✅ Single source of truth (state)
- ✅ Easy validation
- ✅ Easy to modify/format input
- ✅ Conditional rendering based on input
- ✅ Can reset easily

---

### ❓ Handling multiple inputs with single handler

```javascript
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
```

---

### ❓ Validation strategies in React forms

1. **On Submit:**
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.includes('@')) {
    setError('Invalid email');
  }
};
```

2. **On Change (real-time):**
```javascript
const handleChange = (e) => {
  const value = e.target.value;
  setValue(value);
  if (value.length < 3) setError('Too short');
};
```

3. **On Blur:**
```javascript
<input onBlur={validate} />
```

4. **Using Libraries:** React Hook Form, Formik, Yup

---

### ❓ Why `value` + `onChange` is required

```javascript
<input value={name} onChange={handleChange} />
```

**Without `onChange`:** Input becomes read-only!

**Why?** React controls the value, so you must update state to change it.

---

## 8️⃣ Context & State Management

### ❓ What is Context API?

Context provides a way to **pass data through the component tree without props drilling**.

```javascript
// Create Context
const ThemeContext = React.createContext();

// Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// Consumer
const theme = useContext(ThemeContext);
```

---

### ❓ When should Context be used?

✅ **Use for:**
- Theme (dark/light mode)
- User authentication
- Language/locale
- Global settings
- Data needed by many components

❌ **Don't use for:**
- Frequently changing data (performance issues)
- Props drilling 1-2 levels deep (just use props!)
- State that's local to a component

---

### ❓ Context vs props drilling

**Props Drilling:**
```javascript
<Parent>
  <Child user={user}>
    <GrandChild user={user}>
      <GreatGrandChild user={user} />
    </GrandChild>
  </Child>
</Parent>
```
❌ Annoying when many levels deep!

**Context:**
```javascript
<UserContext.Provider value={user}>
  <Parent>
    {/* ... */}
    <GreatGrandChild /> {/* Can access user directly! */}
  </Parent>
</UserContext.Provider>
```

---

### ❓ Context vs Redux

| Feature | Context API | Redux |
|---------|------------|-------|
| **Purpose** | Share data | State management |
| **Boilerplate** | Less | More |
| **Performance** | Can be slow | Optimized |
| **DevTools** | No | Yes |
| **Middleware** | No | Yes |
| **Best for** | Simple global state | Complex state logic |

---

### ❓ Common mistakes while using Context

1. **Putting too much in one Context** - Split into multiple contexts
2. **Frequent updates** - Causes all consumers to re-render
3. **Not memoizing value** - Creates new object every render

```javascript
// ❌ BAD
<UserContext.Provider value={{ user, setUser }}>

// ✅ GOOD
const value = useMemo(() => ({ user, setUser }), [user]);
<UserContext.Provider value={value}>
```

---

### ❓ Performance issues with Context

**Problem:** When context value changes, **ALL consumers re-render**!

```javascript
const [user, setUser] = useState({ name: 'Rohit', age: 25 });

// Even if only age changes, all consumers re-render
<UserContext.Provider value={user}>
```

**Solutions:**
1. Split context into smaller contexts
2. Use `React.memo` on consumers
3. Memoize context value
4. Use state management library for complex cases

---

## 9️⃣ Advanced Concepts

### ❓ What is React Fiber?

**React Fiber** is the new reconciliation engine in React 16+.

**Key Features:**
- **Incremental rendering** - Can pause and resume work
- **Prioritization** - High priority updates (user input) vs low priority (data fetching)
- **Better animations** and responsiveness
- **Error boundaries**

**Why it matters:** Makes React apps faster and more responsive!


**React direct browser events use nahi karta**.
**Instead React Synthetic Events use karta hai**.

### Synthetic Event ek wrapper object hota hai jo native browser event ko wrap karta hai taaki:
### cross-browser compatibility mile
### same API sab browsers me work kare

erformance improve ho

---

### ❓ How reconciliation works internally

1. **Trigger:** State or props change
2. **Render Phase:** React creates new Virtual DOM
3. **Diffing:** Compares new Virtual DOM with old one
4. **Commit Phase:** Updates real DOM with changes

**Optimization techniques:**
- Uses keys to identify elements
- Assumes elements of different types produce different trees
- Batches updates

---

### ❓ What are portals?

Portals let you render children into a **different DOM node** outside the parent hierarchy.

```javascript
ReactDOM.createPortal(
  <div>Modal</div>,
  document.getElementById('modal-root')
);
```

**Use cases:**
- Modals
- Tooltips
- Dropdowns
- Notifications

**Why?** Escape CSS `overflow: hidden` or `z-index` issues!

---

### ❓ What are error boundaries?

Error boundaries **catch JavaScript errors** in child components and display fallback UI.

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

**Note:** Error boundaries **only work in class components** (no hook yet).

**What they DON'T catch:**
- Event handlers (use try-catch)
- Async code
- Errors in error boundary itself

---

### ❓ Lazy loading components

**Code splitting** to load components only when needed.

```javascript
const LazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

**Benefits:**
- Smaller initial bundle size
- Faster page load
- Better performance

---

### ❓ Code splitting in React

**Splits code into smaller chunks** loaded on demand.

**Methods:**
1. **Dynamic import:**
```javascript
import('./module').then(module => { /* use module */ });
```

2. **React.lazy:**
```javascript
const Component = React.lazy(() => import('./Component'));
```

3. **Route-based splitting:**
```javascript
<Route path="/about" component={React.lazy(() => import('./About'))} />
```

---

### ❓ Suspense – when and why

`Suspense` shows **fallback UI** while lazy components load.

```javascript
<Suspense fallback={<Spinner />}>
  <LazyComponent />
</Suspense>
```

**Use cases:**
- Lazy loading components
- Data fetching (with React 18+)
- Code splitting

**Benefits:**
- Better UX (no blank screens)
- Declarative loading states

---

## 🔟 Real-World / Scenario Questions

### ❓ How do you structure a large React app?

**Recommended structure:**
```
src/
├── components/         # Reusable components
│   ├── Button/
│   ├── Input/
│   └── Modal/
├── pages/             # Page components
│   ├── Home/
│   ├── About/
│   └── Dashboard/
├── hooks/             # Custom hooks
├── context/           # Context providers
├── utils/             # Helper functions
├── services/          # API calls
├── styles/            # Global styles
└── App.jsx
```

**Key principles:**
- Feature-based or component-based structure
- Keep related files together
- Separate business logic from UI
- Use index files for cleaner imports

---

### ❓ How do you avoid prop drilling?

1. **Context API** - For global state
2. **Composition** - Pass components as children
3. **State Management** - Redux, Zustand, Jotai
4. **Custom Hooks** - Extract and share logic

**Example with composition:**
```javascript
// Instead of:
<Parent>
  <Child user={user}>
    <GrandChild user={user} />
  </Child>
</Parent>

// Use:
<Parent>
  <Child>
    <GrandChild user={user} /> {/* Pass directly */}
  </Child>
</Parent>
```

---

### ❓ How do you handle API calls properly?

**Best practices:**

1. **Use custom hooks:**
```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}
```

2. **Cancel requests on unmount:**
```javascript
useEffect(() => {
  const controller = new AbortController();
  
  fetch(url, { signal: controller.signal })
    .then(res => res.json())
    .then(setData);
  
  return () => controller.abort(); // Cleanup
}, [url]);
```

3. **Use libraries:** React Query, SWR, Axios

---

### ❓ Where should data fetching logic live?

**Options:**

1. **In component with useEffect** - For simple cases
2. **Custom hooks** - Reusable fetching logic
3. **Context** - Share data across components
4. **State management** - Redux, Zustand
5. **Server components** - Next.js, Remix

**Recommendation:** Custom hooks for most cases!

---

### ❓ How do you manage loading & error states?

```javascript
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  
  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

---

### ❓ How do you optimize performance in large apps?

1. **Code splitting** - Load only what's needed
2. **Lazy loading** - React.lazy + Suspense
3. **Memoization** - React.memo, useMemo, useCallback
4. **Virtualization** - react-window, react-virtualized (for long lists)
5. **Debouncing/Throttling** - For search, scroll events
6. **Avoid inline objects/functions** in JSX
7. **Use production build**
8. **Profile with React DevTools**

---

### ❓ Common React anti-patterns

1. ❌ **Mutating state directly**
```javascript
state.count++; // BAD!
setState({ count: state.count + 1 }); // GOOD
```

2. ❌ **Using index as key in dynamic lists**
```javascript
{items.map((item, i) => <div key={i}>{item}</div>)} // BAD
```

3. ❌ **Not cleaning up useEffect**
```javascript
useEffect(() => {
  const timer = setInterval(...);
  // Missing: return () => clearInterval(timer);
});
```

4. ❌ **Prop drilling too deep** - Use Context instead

5. ❌ **Premature optimization** - Profile first!

6. ❌ **Too many useState** - Consider useReducer or object

7. ❌ **Fetch in render** - Use useEffect

---

## 1️⃣1️⃣ Bonus (Interview Edge)

### ❓ Why React hooks must be called at the top level?

React relies on the **order of hook calls** to maintain state correctly.

```javascript
// ❌ BAD
if (condition) {
  useState(0); // Order changes based on condition!
}

// ✅ GOOD
const [count, setCount] = useState(0);
if (condition) {
  // Use count here
}
```

**Why?** React uses call order to associate state with hooks. Changing order breaks this!

---

### ❓ Why hooks cannot be conditional?

Same reason as above! Hooks must be called in the **same order** every render.

```javascript
// ❌ BAD
if (isLoggedIn) {
  useEffect(() => {}, []); // Conditional hook!
}

// ✅ GOOD
useEffect(() => {
  if (isLoggedIn) {
    // Condition inside hook
  }
}, [isLoggedIn]);
```

---

### ❓ What happens if you break the Rules of Hooks?

- **State gets mixed up** between different hooks
- **Unexpected behavior** and bugs
- **React throws errors** in development mode

**Rules of Hooks:**
1. Only call hooks at the **top level**
2. Only call hooks in **React functions** (components or custom hooks)
3. Don't call hooks in loops, conditions, or nested functions

---

### ❓ Difference between `useRef` and `useState`

| Feature | useRef | useState |
|---------|--------|----------|
| **Triggers re-render** | ❌ No | ✅ Yes |
| **Mutable** | ✅ Yes (.current) | ❌ No |
| **Use case** | DOM access, timers, previous values | Component data |
| **Persists** | ✅ Between renders | ✅ Between renders |

**useRef:**
```javascript
const inputRef = useRef();
inputRef.current.focus(); // Direct DOM access
```

**useState:**
```javascript
const [count, setCount] = useState(0);
setCount(5); // Triggers re-render
```

---

### ❓ When to use `useRef` over `useState`

**Use `useRef` when:**
- Accessing DOM elements
- Storing mutable values that don't need re-render
- Storing previous values
- Storing timers/intervals

**Use `useState` when:**
- Data needs to be displayed in UI
- Changes should trigger re-render

**Example:**
```javascript
// useRef - no re-render needed
const renderCount = useRef(0);
renderCount.current++; // Doesn't cause re-render

// useState - re-render needed
const [count, setCount] = useState(0);
setCount(count + 1); // Causes re-render
```

---

## 🎉 Summary

**Key Takeaways:**
- ✅ Understand Virtual DOM and reconciliation
- ✅ Master useState and useEffect
- ✅ Know when to optimize (React.memo, useMemo, useCallback)
- ✅ Practice output-based questions
- ✅ Learn hooks rules and best practices
- ✅ Avoid common anti-patterns
- ✅ Know real-world scenarios

**Pro Tip:** Don't just memorize - understand WHY things work the way they do! 💡

---

*Happy Learning! 🚀*