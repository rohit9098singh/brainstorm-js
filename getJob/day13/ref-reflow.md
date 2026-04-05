we all know ref gives us a way to store a value that does not causes rerender on change but question hai react aise kar kaise pata hai ?
useRef
👉 Sirf ek mutable container (object) deta hai
👉 React ko koi signal nahi deta ki UI update karo

🔍 Internally kya hota hai
const countRef = useRef(0);

👉 React ek object deta hai:

{ current: 0 }

Ab agar tum update karo:

countRef.current = 5;

👉 React ko pata hi nahi chalta 😅
👉 Kyunki:

Reference same hai
Object replace nahi hua
React render trigger nahi karta


### ==============================================================================

what are compound components ?
Compound Component pattern is a design pattern in React where multiple components work together and share state implicitly, usually using Context. It provides a flexible and clean API, commonly used in components like Tabs, Accordions, or Modals.

### ==============================================================================

### 🔹 Critical Rendering Path (CRP)

CRP is the process the browser follows to convert HTML, CSS, and JS into pixels on the screen.

**Steps:**

1. HTML → DOM
2. CSS → CSSOM
3. Combine → Render Tree
4. Layout (calculate sizes/positions)
5. Paint (draw pixels)

---

### 🔹 Reflow vs Repaint

**Reflow (Layout):**

* Recalculates layout (size & position)
* More expensive ❌ (affects entire layout)

**Repaint:**

* Only updates visual styles (color, visibility)
* Less expensive ✅

**Examples:**

* Reflow: `width`, `height`, `margin`, `display`
* Repaint: `color`, `background-color`, `visibility`

---

### 🔹 Debugging frequent re-renders (React)

Steps:

1. Check React DevTools → highlight re-renders
2. Identify changing props/state
3. Check parent re-renders
4. Add `console.log` to track updates
5. Fix:

   * Use `React.memo`
   * Use `useMemo` / `useCallback`
   * Avoid unnecessary state updates

---

### 🔹 Tree Shaking

Tree shaking removes unused code from bundle.

**How it works:**

* Uses ES Modules (`import/export`)
* Bundler removes unused exports

**Requirements:**

* Use ES6 modules
* Avoid side effects
* Use proper bundler (Webpack, Vite)

---

## 🌐 API & Async

### 🔹 REST vs GraphQL

**REST:**

* Multiple endpoints
* Fixed data
* Over/under fetching possible

**GraphQL:**

* Single endpoint
* Ask only required data
* Better for complex UI

**When to use GraphQL:**

* When frontend needs flexible data
* Multiple related data in one request

---

### 🔹 JWT Authentication

JWT is a token used for user authentication.

---

### 🔹 Token Storage

**1. localStorage**

* Easy to use
* ❌ Vulnerable to XSS

**2. httpOnly cookies**

* Cannot be accessed by JS
* ✅ More secure (protects from XSS)
* ❌ Needs backend setup (CSRF handling)

---

### 🔹 Tradeoff

* localStorage → simple but less secure
* httpOnly cookies → secure but more complex

---

### 🔥 Final Tip (important)

* Use **httpOnly cookies for security**
* Avoid storing sensitive tokens in localStorage
