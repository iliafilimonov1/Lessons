import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Function to decrement the count state
  // const decrementCount = () => setCount(count - 1);

  // Function to increment the count state
  // const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>Current count: {count}</p>
      <button
        className="rounded inline-flex items-center justify-center min-w-[36px] min-h-[36px] text-md bg-indigo-500"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button
        className="rounded inline-flex items-center justify-center min-w-[36px] min-h-[36px] text-md bg-indigo-500"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
