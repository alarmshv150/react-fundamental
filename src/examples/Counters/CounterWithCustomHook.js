import { useState } from "react";

/* splitting logic and UI */

export const CounterWithCustomHook = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={decrement}>Уменьшить на 1</button>
      <h1>{count}</h1>
      <button onClick={increment}>Увеличить на 1</button>
    </>
  );
};

/* custom hook */
function useCounter() {
  const [count, setCount] = useState(0);
  return {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1),
  };
}

