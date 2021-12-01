import { useState } from "react";

/* _rafc */
export const Counter = () => {
  /* upper nesting level is required to use hooks */
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={/* inline function */ () => setCounter(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter(count - 1)}>Decrement</button>
    </div>
  );
};

/* components automatically re-render whenever there is a change in their state or props */

