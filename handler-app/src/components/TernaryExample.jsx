import { useState } from "react";

export default function TernaryExample() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div style={styles.page}>
      <h2 style={styles.h2}>삼항 연산자 예제</h2>

      <div style={styles.card}>
        {isLogin ? (
          <LogoutView onLogout={() => setIsLogin(false)} />
        ) : (
          <LoginView onLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}


function LoginView({ onLogin }) {
  return (
    <div>
      <p style={{ marginTop: 0 }}>로그아웃 상태</p>
      <button style={styles.btn} onClick={onLogin}>로그인</button>
    </div>
  );
}

function LogoutView({ onLogout }) {
  return (
    <div>
      <p style={{ marginTop: 0 }}>로그인 상태</p>
      <button style={styles.btn} onClick={onLogout}>로그아웃</button>
    </div>
  );
}

const styles = {
  page: { fontFamily: "sans-serif", padding: 20 },
  row: { display: "flex", gap: 8, margin: "12px 0", flexWrap: "wrap" },
  card: { padding: 16, border: "1px solid #ddd", borderRadius: 12, maxWidth: 520, fontFamily: "system-ui, sans-serif" },
  btn: {   marginRight: 8, padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontWeight: 700, },
};