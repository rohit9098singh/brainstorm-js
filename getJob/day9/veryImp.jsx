// when this component gets rerenderd which will execute first and why is it so 

function Demo() {
  console.log("1. Normal log");

  const memoValue = useMemo(() => {
    console.log("2. useMemo");
    return 10;
  }, []);

  const memoFn = useCallback(() => {
    console.log("3. useCallback");
  }, []);

  useEffect(() => {
    console.log("4. useEffect");
  }, []);

  return <div>Hello</div>;
}


// ✅ Actual Execution Order
// 🥇 1. Normal console.log

// Runs immediately during render.

// 🥈 2. useMemo callback

// Runs during render (to compute memoized value).

// 🥉 3. useCallback

// Does NOT execute the function inside it.
// It only stores the function reference.
// So nothing logs from inside unless you call it.

// 🏁 4. useEffect

// Runs after render is committed to the DOM.

// 📌 Final Order
// 1. Normal log
// 2. useMemo
// 3. (useCallback does not execute)
// 4. useEffect (after DOM paint)