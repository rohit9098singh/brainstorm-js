// A React functional component re-renders when its state or props change.
// When a state update happens, Reactre-executes the component function
// to generate a new Virtual DOM tree.It then compares this new Virtual DOM
// with the previous Virtual DOM using the reconciliation (diffing) algorithm. 
// Based on the differences, React updates only the necessary parts of the Real DOM instead of re-rendering everything.


// what is the output of below
function App() {
  const [count, setCount] = React.useState(0);

  console.log("render");

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
// ans => 1 Both use same stale value of count (0).