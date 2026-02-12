import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));


function App() {
  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
