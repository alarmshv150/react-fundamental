import { useState, useEffect } from "react";

export const CounterUnmounting = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Hide/Show</button>
    </>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    console.log("mount");
    return () => {
      clearInterval(Interval);
      console.log("component is hidden");
    };
  }, [count]);

  return <h1>{count}</h1>;
};

