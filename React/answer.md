

# React Interview Preparation Guide

## Table of Contents
1. [React Fundamentals](#1-react-fundamentals)
2. [Rendering Behavior](#2-rendering-behavior)
3. [Hooks - useState](#3-hooks--usestate)
4. [Hooks - useEffect](#4-hooks--useeffect)
5. [Performance Hooks](#5-performance-hooks)
6. [Output-Based Questions](#6-output-based-questions)
7. [Events](#7-events)
8. [Forms](#8-forms)
9. [Context & State Management](#9-context--state-management)
10. [Advanced Concepts](#10-advanced-concepts)
11. [Real-World Scenarios](#11-real-world-scenarios)
12. [Rules of Hooks](#12-rules-of-hooks)

---

## 1. React Fundamentals

### What is React?

React is a **JavaScript library** for building **fast, interactive user interfaces**, primarily for single-page applications (SPAs). It focuses on the **view layer** and uses a **component-based architecture**.

**Key Features:**
- Component reusability
- Fast UI updates using Virtual DOM
- Declarative UI approach
- Strong ecosystem and community support

---

### Difference between React and Vanilla JavaScript

| React              | Vanilla JS                |
| ------------------ | ------------------------- |
| Declarative        | Imperative                |
| Component-based    | DOM-based                 |
| Uses Virtual DOM   | Direct DOM manipulation   |
| Better scalability | Hard to manage large apps |

---

### What is JSX?

JSX is a **syntax extension** that allows writing HTML-like code inside JavaScript. It gets transpiled to `React.createElement()` by Babel.

**Note:** JSX is **not mandatory**, but it significantly improves code readability.

```jsx
// JSX
<div className="container">Hello</div>

// Transpiled to
React.createElement('div', { className: 'container' }, 'Hello')
```

---

### What is a Component?

A component is a **reusable, independent piece of UI** that encapsulates structure, behavior, and styling.

**Examples:** Button, Navbar, Card, Modal

---

### Functional vs Class Components

| Functional Component | Class Component        |
| ------------------- | ---------------------- |
| Uses hooks          | Uses lifecycle methods |
| Simpler syntax      | More boilerplate       |
| Preferred (modern)  | Legacy (older apps)    |
| Stateless or stateful | Always stateful      |

---

### What are Props?

Props (properties) are **read-only inputs** passed from parent to child components.

**Key Points:**
- ✅ Props are **immutable**
- ✅ Enable component reusability
- ✅ Flow data downward (parent → child)

---

### What is State?

State is **mutable, internal data** managed by a component that controls its behavior and rendering.

---

### State vs Props

| State                    | Props                 |
| ------------------------ | --------------------- |
| Mutable                  | Immutable             |
| Local to component       | Passed from parent    |
| Managed inside component | Controlled externally |
| Changes trigger re-render | Changes from parent trigger re-render |

---

### Why is React Declarative?

You describe **what the UI should look like**, and React handles **how to update it**.

**Declarative:**
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

**Imperative (Vanilla JS):**
```js
if (isLoggedIn) {
  document.getElementById('root').innerHTML = '<div>Dashboard</div>';
}
```

---

### What is Virtual DOM?

A **lightweight, in-memory representation** of the real DOM used to calculate minimal updates efficiently.

---

### How Does React Update the DOM?

1. **Render:** Create new Virtual DOM
2. **Diff:** Compare with previous Virtual DOM (reconciliation)
3. **Update:** Apply only the changes to the real DOM

---

### What is Reconciliation?

The process of comparing Virtual DOM trees using a **diffing algorithm** to determine the minimal set of changes needed to update the real DOM efficiently.

---

## 2. Rendering Behavior

### What Causes a Re-render?

A component re-renders when:
- **State changes** (via `setState`, `useState`)
- **Props change** (parent passes new props)
- **Parent re-renders** (even if props don't change)
- **Context value changes** (component uses context)

---

### When Does a Child Re-render?

By default, a child re-renders when:
- Parent component re-renders
- Props **reference** changes (even if values are same)
- Context value changes

**Optimization:** Use `React.memo` to prevent unnecessary re-renders.

---

### Initial Render vs Re-render

| Initial Render | Re-render |
| -------------- | --------- |
| First time component mounts | Component updates due to state/props/context changes |
| `componentDidMount` / `useEffect` with `[]` | `componentDidUpdate` / `useEffect` with dependencies |

---

### What is the `key` Prop?

A **unique identifier** used by React to track elements in lists and optimize reconciliation.

```jsx
{items.map(item => <Item key={item.id} {...item} />)}
```

**Purpose:** Helps React identify which items have changed, been added, or removed.

---

### Why NOT Use Index as Key?

❌ **Problems with index as key:**
- Causes incorrect re-renders when items are reordered
- Can lead to state bugs in list items
- Breaks component identity during add/remove operations

✅ **Use stable, unique IDs instead:** `item.id`, `item.uuid`

---

### Controlled vs Uncontrolled Components

| Controlled                | Uncontrolled            |
| ------------------------- | ----------------------- |
| Value controlled by React state | Value controlled by DOM |
| Single source of truth    | DOM is source of truth  |
| Predictable & easier to test | Less control         |
| Preferred approach        | Use with `ref` when needed |

**Controlled Example:**
```jsx
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

**Uncontrolled Example:**
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

### Conditional Rendering

Techniques to show/hide UI based on conditions:

**1. Logical AND (&&):**
```jsx
{isLoggedIn && <Dashboard />}
```

**2. Ternary Operator:**
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

**3. If-Else (outside JSX):**
```jsx
if (loading) return <Spinner />;
return <Content />;
```

---

## 3. Hooks - useState

### How Does `useState` Work?

`useState` is a hook that:
1. **Stores state** in a functional component
2. **Returns** current state and a setter function
3. **Triggers re-render** when state is updated

```jsx
const [count, setCount] = useState(0);
```

---

### Why Are State Updates Asynchronous?

React batches multiple state updates together to:
- **Improve performance** (fewer re-renders)
- **Optimize rendering** (process multiple updates at once)
- **Prevent unnecessary re-renders**

**Since React 18:** Automatic batching in all scenarios (events, promises, timeouts)

---

### Why NOT Mutate State Directly?

**Reason:** React compares state by **reference**, not value. Direct mutation doesn't change the reference, so React won't detect the change.

❌ **Wrong:**
```js
state.count++; // Mutates directly - no re-render
setState(state);
```

✅ **Correct:**
```js
setCount(prev => prev + 1); // Creates new value
setState({ ...state, count: state.count + 1 }); // Creates new object
```

---

### Multiple State Updates - Common Pitfall

**❌ Using current state value (batched):**
```js
setCount(count + 1); // count = 0, queues: count = 0 + 1
setCount(count + 1); // count = 0, queues: count = 0 + 1
// Result: count = 1 (not 2!)
```

**✅ Using functional update (correct):**
```js
setCount(prev => prev + 1); // queues: prev + 1
setCount(prev => prev + 1); // queues: prev + 1 again
// Result: count = 2 ✓
```

**Rule:** Always use **functional updates** when new state depends on previous state.

---

## 4. Hooks - useEffect

### What is `useEffect`?

`useEffect` handles **side effects** in functional components:
- API calls / data fetching
- Setting up subscriptions
- Manually changing the DOM
- Setting up timers
- Logging

```jsx
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
```

---

### Execution Behavior Based on Dependencies

| Dependency Array | When It Runs | Use Case |
| ---------------- | ------------ | -------- |
| No array | **Every render** | Rarely used (avoid) |
| `[]` | **Once on mount** | API calls, subscriptions |
| `[dep1, dep2]` | **When dependencies change** | Re-fetch when ID changes |

**Examples:**
```jsx
useEffect(() => { console.log('Every render'); });
useEffect(() => { console.log('Mount only'); }, []);
useEffect(() => { console.log('When count changes'); }, [count]);
```

---

### Cleanup Function

**When cleanup runs:**
1. **Before the next effect** (when dependencies change)
2. **On component unmount**

**Use cases:**
- Remove event listeners
- Clear timers
- Cancel API requests
- Unsubscribe from subscriptions

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('tick'), 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);
```

---

### Infinite Loop in useEffect - Common Mistake

**Occurs when:**
- Updating state inside `useEffect`
- That state is in the dependency array
- Creates new reference on every render

❌ **Causes infinite loop:**
```jsx
const [data, setData] = useState([]);

useEffect(() => {
  setData([...data, 'new']); // Updates data
}, [data]); // Depends on data → infinite loop!
```

✅ **Solutions:**
- Use functional update: `setData(prev => [...prev, 'new'])`
- Remove from dependencies if safe
- Use `useCallback` for functions in dependencies

---

## 5. Performance Hooks

### `useMemo` - Memoize Computed Values

Caches the **result** of an expensive calculation.

```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**When to use:**
- Expensive calculations
- Avoid re-computing on every render
- Dependencies change infrequently

---

### `useCallback` - Memoize Functions

Caches a **function instance** to prevent creating new functions on every render.

```jsx
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**When to use:**
- Passing callbacks to optimized child components
- Function is a dependency in `useEffect`
- Preventing unnecessary re-renders

---

### `useMemo` vs `useCallback`

| useMemo | useCallback |
| ------- | ----------- |
| Memoizes **return value** | Memoizes **function itself** |
| `useMemo(() => fn, deps)` | `useCallback(fn, deps)` |
| Returns computed result | Returns memoized function |

**Note:** `useCallback(fn, deps)` = `useMemo(() => fn, deps)`

---

### `React.memo` - Prevent Component Re-renders

Higher-order component that **memoizes a component** based on props.

```jsx
const MemoizedComponent = React.memo(MyComponent);
```

**Behavior:**
- Re-renders **only if props change** (shallow comparison)
- Does NOT prevent re-renders due to state or context changes

**Custom comparison:**
```jsx
React.memo(Component, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id; // true = skip render
});
```

---

### When NOT to Optimize?

❌ **Avoid premature optimization in:**
- Small applications
- Components that rarely re-render
- Cheap computations (simple math)
- Components with frequently changing props

**Golden Rule:** Measure first (React DevTools Profiler), optimize later.

**Common mistake:** Over-optimization makes code harder to read without real performance gain.

---

## 6. Output-Based Questions (Interview Favorites)

### Q1: Logging State After setState

```js
const [count, setCount] = useState(0);

function handleClick() {
  setCount(5);
  console.log(count); // What will this log?
}
```

**Answer:** Logs **0** (old value)

**Reason:** State updates are asynchronous and don't apply immediately. The console.log runs before the state actually updates.

---

### Q2: Multiple setState in Same Render

```js
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

**Answer:** Count increases by **1** (not 3!)

**Reason:** All three calls use the same `count` value (0), so all compute `0 + 1`.

**Fix:** Use functional updates:
```js
setCount(prev => prev + 1); // Now increases by 3
```

---

### Q3: useEffect Execution Order

**Order of execution:**
1. Component **renders**
2. React **commits** changes to DOM
3. **Browser paints**
4. `useEffect` **runs**

```jsx
function Component() {
  console.log('1. Render');
  
  useEffect(() => {
    console.log('3. Effect');
  });
  
  return console.log('2. JSX return');
}
```

**Output:** 1 → 2 → 3

---

### Q4: Cleanup Order

**Cleanup execution:**
- Runs **before the next effect** (when dependencies change)
- Runs **on unmount**

```jsx
useEffect(() => {
  console.log('Effect');
  return () => console.log('Cleanup');
}, [count]);
```

**When count changes:**
1. `'Cleanup'` (from previous effect)
2. `'Effect'` (new effect runs)

---

### Q5: Stale Closure Example

```js
const [count, setCount] = useState(0);

useEffect(() => {
  setTimeout(() => {
    console.log(count);
  }, 3000);
}, []);

// User clicks button to increase count immediately
```

**Answer:** Logs **0** (not the updated count)

**Reason:** The timeout captures `count` from when effect ran (mount), creating a **closure** over the old value.

**Fix:** Add `count` to dependencies or use `ref`.

---

### Q6: Rendering false / null / undefined

```jsx
{false}      // renders nothing
{null}       // renders nothing  
{undefined}  // renders nothing
{0}          // renders "0"
{''}         // renders nothing (empty string)
{[]}         // renders nothing
```

**Gotcha:** `{0}` actually renders the number 0!

---

### Q7: Missing Return in map

```jsx
arr.map(item => {
  <div>{item}</div> // ❌ Missing return!
})
```

**Output:** Nothing rendered

**Fix:**
```jsx
arr.map(item => <div>{item}</div>)  // Implicit return
// OR
arr.map(item => {
  return <div>{item}</div>;          // Explicit return
})
```

---

## 7. Events

### What are Synthetic Events?

React wraps native browser events into **SyntheticEvent** objects for:
- **Cross-browser consistency** (same API across all browsers)
- **Better performance** (event pooling in older React)
- **Additional features** (event normalization)

```jsx
function handleClick(e) {
  e.preventDefault(); // SyntheticEvent method
  console.log(e.nativeEvent); // Access original browser event
}
```

---

### onClick Differences

```jsx
// Method 1: Direct reference (preferred)
<button onClick={handleClick}>Click</button>

// Method 2: Inline arrow function (creates new function each render)
<button onClick={() => handleClick()}>Click</button>

// Method 3: With parameters
<button onClick={() => handleClick(id)}>Click</button>

// Method 4: Using bind (older approach)
<button onClick={handleClick.bind(this, id)}>Click</button>
```

**Best practice:** Use method 1 for simple cases, method 2/3 when passing arguments.

---

### Event Delegation in React

React uses **event delegation** for performance:
- Attaches **one event listener** at the root level
- Uses event bubbling to handle all events
- Reduces memory usage

**Note:** In React 17+, events delegate to the root container, not `document`.

---

## 8. Forms

### Why Use Controlled Components?

**Benefits:**
1. **Single source of truth** - State controls input value
2. **Easy validation** - Validate on every keystroke
3. **Predictable behavior** - Always know current value
4. **Easy to manipulate** - Transform input values easily

```jsx
const [email, setEmail] = useState('');

return (
  <input 
    value={email} 
    onChange={(e) => setEmail(e.target.value.toLowerCase())}
  />
);
```

---

### Handling Multiple Inputs

Use the `name` attribute and a single handler:

```jsx
const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

return (
  <>
    <input name="username" value={formData.username} onChange={handleChange} />
    <input name="email" value={formData.email} onChange={handleChange} />
    <input name="password" value={formData.password} onChange={handleChange} />
  </>
);
```

---

## 9. Context & State Management

### Context API

Enables sharing data across component tree without prop drilling.

**When to use:**
- Theme (dark/light mode)
- User authentication
- Language/locale
- Global UI state (modals, toasts)

```jsx
// Create Context
const ThemeContext = createContext();

// Provider
<ThemeContext.Provider value={{ theme, setTheme }}>
  <App />
</ThemeContext.Provider>

// Consumer (using hook)
const { theme } = useContext(ThemeContext);
```

---

### Context vs Redux

| Context API | Redux |
| ----------- | ----- |
| Built into React | External library |
| Simple setup | More boilerplate |
| Good for small/medium apps | Better for large apps |
| No middleware | Middleware support (thunk, saga) |
| No dev tools (basic) | Powerful dev tools |
| Can cause unnecessary re-renders | Optimized subscriptions |

**Modern alternative:** Zustand, Jotai, Recoil (simpler than Redux)

---

### When to Use Context vs Props?

**Use Props when:**
- Data is needed by 1-2 levels down
- Component reusability is important
- Explicit data flow is preferred

**Use Context when:**
- Data needed across many levels
- Global/shared state (theme, auth)
- Avoiding prop drilling

**Avoid:** Using Context for frequently changing data (performance issues)

---

## 10. Advanced Concepts

### What is React Fiber?

React Fiber is **React's internal reconciliation engine** (introduced in React 16) that enables:
- **Incremental rendering** (break work into chunks)
- **Pausable and resumable rendering**
- **Priority-based updates** (urgent vs non-urgent)
- **Concurrent features** (Suspense, transitions)

**Before Fiber:**
- Rendering was synchronous and blocking
- Long renders froze the UI

**With Fiber:**
- React can pause rendering to handle high-priority updates
- Supports features like `Suspense`, `startTransition`, concurrent mode

---

### How Reconciliation Works Internally

Reconciliation is the **diffing algorithm** that determines what changed:

**Process:**
1. Compare **previous Virtual DOM** with **new Virtual DOM**
2. Calculate the **minimum set of changes** needed
3. Update only the changed parts in the **real DOM**

**Key rules:**
- **Same type** → Update the node
- **Different type** → Destroy old, create new
- **Keys in lists** → Identify elements efficiently

**Why keys matter:**
- Helps React track elements across renders
- Prevents unnecessary DOM recreation
- Maintains component state correctly

---

### What are Portals?

Portals render components **outside the parent DOM hierarchy** while maintaining React component tree structure.

```jsx
import ReactDOM from 'react-dom';

ReactDOM.createPortal(
  <Modal />,
  document.getElementById('modal-root')
);
```

**Use cases:**
- Modals
- Tooltips
- Dropdowns
- Toast notifications

**Benefits:**
- Avoid `z-index` issues
- Escape `overflow: hidden` containers
- Maintain React event bubbling

---

### What are Error Boundaries?

Error Boundaries are React components that **catch JavaScript errors** in their child component tree.

**What they catch:**
- Rendering errors
- Lifecycle method errors
- Constructor errors

**What they DON'T catch:**
- Event handlers (use try-catch)
- Async code (setTimeout, promises)
- Server-side rendering errors
- Errors in the error boundary itself

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Usage:**
```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

### Lazy Loading Components

Lazy loading defers component loading until it's needed.

```jsx
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
```

**Benefits:**
- Faster initial page load
- Smaller initial bundle size
- Better performance
- Load code on-demand

---

### Code Splitting in React

Breaking JavaScript bundle into **smaller chunks** that load on demand.

**Methods:**
1. **React.lazy** (component-level)
2. **Dynamic import()** 
3. **Route-based splitting**

```jsx
// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/admin" element={<Admin />} />
</Routes>
```

---

### Suspense - When and Why

`Suspense` lets React **show fallback UI** while waiting for async operations.

```jsx
<Suspense fallback={<Loader />}>
  <LazyComponent />
</Suspense>
```

**Currently supports:**
- Lazy-loaded components
- Data fetching (with frameworks like Next.js, Remix)

**Benefits:**
- Declarative loading states
- Better user experience
- Cleaner async handling

---

## 11. Bonus (Rules of Hooks)

### Why hooks only at top level?

To maintain consistent hook order.

---

### useRef vs useState

| useRef               | useState           |
| -------------------- | ------------------ |
| No re-render         | Triggers re-render |
| Stores mutable value | Stores UI data     |

---

## ✅ FINAL NOTE


## 11. Real-World Scenarios

### How to Structure a Large React App?

**Recommended structure:**
```
src/
 ├── components/       # Reusable UI components
 │   ├── common/       # Shared components (Button, Input)
 │   └── layout/       # Layout components (Header, Footer)
 ├── pages/            # Page components (route-level)
 ├── hooks/            # Custom hooks
 ├── services/         # API calls & external services
 ├── store/            # Global state (Redux, Zustand)
 ├── utils/            # Helper functions
 ├── constants/        # Constants & config
 ├── types/            # TypeScript types
 └── assets/           # Images, fonts, etc.
```

**Principles:**
- **Feature-based** organization for large apps
- **Separation of concerns** (UI, logic, data)
- **Colocation** (keep related files together)

---

### How to Avoid Prop Drilling?

**Solutions:**

1. **Context API** (for global state like theme, auth)
```jsx
const AuthContext = createContext();
```

2. **State Management** (Redux, Zustand, Jotai)
```jsx
const user = useStore(state => state.user);
```

3. **Component Composition**
```jsx
<Layout sidebar={<Sidebar user={user} />}>
  <Content />
</Layout>
```

4. **Custom Hooks**
```jsx
const { user } = useAuth(); // Encapsulates context
```

**Rule:** Prop drilling is fine for 1-2 levels, not across entire app.

---

### How to Handle API Calls Properly?

**Best practices:**

1. **Separate API logic** from components
```js
// services/api.js
export const getUsers = () => axios.get('/api/users');
export const createUser = (data) => axios.post('/api/users', data);
```

2. **Use in components**
```jsx
import { getUsers } from './services/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <UserList users={users} />;
}
```

3. **Modern approach:** Use **React Query** / **SWR**
```jsx
const { data, isLoading, error } = useQuery('users', getUsers);
```

---

### Where Should Data Fetching Logic Live?

**Depends on scope:**

| Scope | Location | Example |
|-------|----------|----------|
| Page-specific | Page component | User profile data |
| Reusable | Custom hook | `useUsers()`, `useProducts()` |
| Global | State management | User auth, app config |

**Modern choice:** **React Query / TanStack Query** handles caching, refetching, and synchronization.

---

### How to Manage Loading & Error States?

**Always handle 3 states:**

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Rendering
if (loading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
if (!data) return <NoData />;
return <DataDisplay data={data} />;
```

**Never skip error handling in production!**

---

### How to Optimize Performance in Large Apps?

**Key techniques:**

1. **Memoization**
   - `React.memo` for components
   - `useMemo` for values
   - `useCallback` for functions

2. **Code Splitting**
   - Route-based splitting
   - `React.lazy` + `Suspense`

3. **Virtualization** (for large lists)
   - `react-window`
   - `react-virtualized`

4. **Avoid Unnecessary State**
   - Derive data when possible
   - Don't store computed values in state

5. **Debounce/Throttle** expensive operations

**Golden Rule:** ⚠️ Measure first (React DevTools Profiler), optimize later!

---

### Common React Anti-Patterns

❌ **Avoid these:**

1. Using array **index as key** in lists
2. Too much **global state** (keep state local when possible)
3. **Inline anonymous functions** everywhere (creates new refs)
4. **Mutating state** directly
5. **Business logic inside JSX** (keep JSX clean)
6. **Overusing useEffect** (often unnecessary)
7. **Not handling errors** properly
8. **Forgetting cleanup** in useEffect
9. **Prop drilling** instead of Context/composition
10. **Premature optimization**

---

# 11. Bonus (Interview Edge)

## Why hooks must be called at the top level?

Because React **relies on call order** to map hooks to state.

Hooks are stored internally as:

```
Hook 1 → useState
Hook 2 → useEffect
```

Changing order breaks mapping.

---

## Why hooks cannot be conditional?

This would change hook order between renders.

```js
if (condition) {
  useState(); ❌
}
```

React would not know which state belongs where.

---

## What happens if you break the Rules of Hooks?

* State mismatch
* Runtime bugs
* React throws errors
* Unpredictable behavior

---

## Difference between `useRef` and `useState`

| Aspect               | useState | useRef |
| -------------------- | -------- | ------ |
| Causes re-render     | Yes      | No     |
| Stores mutable value | Yes      | Yes    |
| Used for UI state    | Yes      | No     |
| DOM access           | No       | Yes    |

---

## When to use `useRef` over `useState`

Use `useRef` when:

* You need to store a value **without re-render**
* Accessing DOM elements
* Tracking previous values
* Timers / intervals / mutable counters

Example:




