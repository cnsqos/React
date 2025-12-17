import { useState } from "react";

export default function DarkModeToggle(){

    const [isDark, setIsDark] = useState(false);

 return (
    <div
      style={{
        padding: 16,
        backgroundColor: isDark ? "#111" : "#fff",
        color: isDark ? "#fff" : "#111",
        minHeight: 200,
      }}
    >
      <h2>다크모드</h2>
      <p>현재 모드: {isDark ? "Dark" : "Light"}</p>

      {/* true ↔ false를 바로 전환 */}
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "라이트모드" : "다크모드"}
      </button>
    </div>
  );
}