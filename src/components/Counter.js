import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(223);

  return (
    <>
      <div>
        <p>You are the {count}th visitor. Welcome! </p>
        <button onload={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}

export default Counter;
