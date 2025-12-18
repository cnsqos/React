import { useState } from "react";

export default function TwoInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: 16 }}>
      <h2>확장 2) 입력값 2개</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <br />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />

      <p>email: {email}</p>
      <p>password: {password}</p>
    </div>
  );
}