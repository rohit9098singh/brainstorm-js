import React, { useEffect, useMemo } from "react";

/*
  PROBLEM:
  If we create an object directly, it gets recreated on every render,
  causing dependency issues (infinite loops if used in useEffect deps).

  SOLUTION:
  Use useMemo to memoize the object (stable reference).
*/

const DependencyExample = () => {

  // ✅ Memoized object (created only once)
  const obj = useMemo(() => {
    return { name: "the coding monk is here" };
  }, []);

  // Effect runs only once because obj reference is stable
  useEffect(() => {
    console.log("Object:", obj);
  }, [obj]);

  return (
    <div>
      <h1>Check console</h1>
    </div>
  );
};

export default DependencyExample;