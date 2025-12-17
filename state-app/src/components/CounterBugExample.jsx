import { useState } from "react";

export default function CounterBugExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // 이렇게 하면 batching 때문에 +1만 됨
    // setCount(count + 1);
    // setCount(count + 1);

    // prev : 이전 상태값을 의미한다.
    // 이전 상태를 기준으로 업데이트 → +2 됨
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>CounterBugExample</h1>
      <h2>count: {count}</h2>
      <button onClick={handleClick}>+2 증가 기대</button>
    </div>
  );
}