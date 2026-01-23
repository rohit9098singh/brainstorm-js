
---

## 1. React Fundamentals (Must-Know)

* What is React and why is it used?
* Difference between **React** and **Vanilla JavaScript**
* What is JSX? Can we write React without JSX?
* How does React differ from other frameworks?
* What is a component?
* Difference between **functional components** and **class components**
* What are props?
* Are props mutable or immutable?
* What is state?
* Difference between **state** and **props**
* Why is React called declarative?  tum bas state bata dete ho react khud chize update karta hai <p style={{ color: count > 5 ? "red" : "black" }}>
* What is the Virtual DOM?
* How does React update the DOM efficiently?
* What is reconciliation?

---

## 2. Component & Rendering Behavior

* What causes a component to re-render?
* When does React re-render a child component?
* What is the difference between **initial render** and **re-render**?
* What is the role of the `key` prop?
* Why should keys be stable and unique?
* What happens if we use array index as key? React cannot correctly identify items when the list changes, which may cause wrong UI updates and state bugs.
* Controlled vs uncontrolled components
* How does conditional rendering work?
* Difference between `{condition && <Component />}` and ternary rendering

---

## 3. Hooks – Core Hooks (Very Important)

### useState

* How does `useState` work internally?
* Why is state update asynchronous?
* Why should we not mutate state directly?
* What happens if we update state multiple times in one render?
* Functional update vs direct update




### useEffect

* What is `useEffect`?
* When does `useEffect` run?
* Difference between:

  * `useEffect(() => {})`
  * `useEffect(() => {}, [])`
  * `useEffect(() => {}, [dep])`
* Cleanup function in `useEffect`
* useEffect vs lifecycle methods
* Common mistakes with useEffect
* Infinite loop scenarios in useEffect

---

## 4. Hooks – Performance & Optimization

* What is `useMemo`?
* What is `useCallback`?
* Difference between `useMemo` and `useCallback`
* What is `React.memo`?
* When should you use `React.memo`?
* Why `useCallback` is often used with `React.memo`
* When optimization is **not** required
* How unnecessary re-renders happen

---

## 5. Output-Based / “What Will Be the Output?” Questions (CRITICAL)

These are **very commonly asked** and test real understanding.

### State & Re-render Output

* What will be the output of multiple `setState` calls?
* Output when updating state inside a loop
* Output when logging state immediately after `setState`
* Output when using functional vs non-functional updates

### useEffect Output

* What will be logged when multiple `useEffect` hooks exist?
* Output when dependency array is empty vs missing
* Order of execution of `useEffect`
* Cleanup execution order

### Closure & Stale State

* What will be the output due to stale closures?
* Output when using state inside `setTimeout`
* Output when using old state reference

### Props & Memoization

* Will this component re-render? Why?
* Output when props change but component is memoized
* Output when passing inline functions as props

### JSX & Rendering

* Output when rendering `null`, `undefined`, `false`
* Output of conditional rendering edge cases
* Output when mapping with missing return

---

## 6. Event Handling & Synthetic Events

* What are synthetic events?
* How does event delegation work in React?
* Why events are pooled (older versions)?
* Difference between `onClick={fn}` vs `onClick={() => fn()}`
* Event bubbling in React
* Prevent default behavior in React

---

## 7. Forms & User Input

* Controlled vs uncontrolled inputs
* Why controlled components are preferred
* Handling multiple inputs with single handler
* Validation strategies in React forms
* Why `value` + `onChange` is required

---

## 8. Context & State Management

* What is Context API?
* When should Context be used?
* Context vs props drilling
* Context vs Redux
* Common mistakes while using Context
* Performance issues with Context

---

## 9. Advanced Concepts

* What is React Fiber?
* How reconciliation works internally
* What are portals?
* What are error boundaries?
* Lazy loading components
* Code splitting in React
* Suspense – when and why

---

## 10. Real-World / Scenario Questions

* How do you structure a large React app?
* How do you avoid prop drilling?
* How do you handle API calls properly?
* Where should data fetching logic live?
* How do you manage loading & error states?
* How do you optimize performance in large apps?
* Common React anti-patterns

---

## 11. Bonus (Interview Edge)

* Why React hooks must be called at the top level?
* Why hooks cannot be conditional?
* What happens if you break the Rules of Hooks?
* Difference between `useRef` and `useState`
* When to use `useRef` over `useState`

