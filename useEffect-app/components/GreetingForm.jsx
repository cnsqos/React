import { useState } from "react";

export default function GreetingForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <h2>응용) 인사 폼</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />

      <br />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="나이"
      />

      <br />

      {/* 클릭 시 상태 변경 */}
      <button onClick={() => setSubmitted(true)}>
        인사 출력
      </button>

      {/* 조건부 렌더링 */}
      {submitted && (
        <p>
          안녕하세요, {name}님. {age}살이시군요.
        </p>
      )}
    </div>
  );
}