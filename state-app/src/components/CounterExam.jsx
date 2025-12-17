import { useState } from "react";

export default function CounterExam() {

    const [count, setCount] = useState(0);

return (
    <>
      <h2>현재 숫자: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}