### 🔹 React app slow in production — First 5 things to check

1. **Build size & bundle analysis**

   * Check bundle size using tools like Webpack Bundle Analyzer
   * Large JS bundles → slow load time
   * Fix: code splitting, lazy loading

2. **Network & API performance**

   * Check API response time in DevTools (Network tab)
   * Slow APIs can block UI
   * Fix: optimize APIs, caching, reduce unnecessary calls

3. **Unnecessary re-renders**

   * Use React DevTools Profiler
   * Identify components re-rendering too often
   * Fix: `React.memo`, `useMemo`, `useCallback`

4. **Production vs Development differences**

   * Ensure production build (`npm run build`) is optimized
   * Check if debug logs or dev-only code is affecting performance

5. **Assets optimization (images, fonts, CSS)**

   * Large images or unoptimized assets slow down app
   * Fix: compress images, use lazy loading, CDN

---

### 🎯 One-line (interview)

> I check bundle size, API performance, unnecessary re-renders, production build optimizations, and asset loading to identify performance bottlenecks.
