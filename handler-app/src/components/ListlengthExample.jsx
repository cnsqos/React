import { useState } from "react";

export default function ListLengthExample(){
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");



return(
    <div style={StyleSheet.page}>
        <h2 style = {Styles.h2}>배열 길이 기반 분기</h2>

      <div style={styles.row}>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="항목을 입력한다"
        />
        <button style={styles.btn} onClick={add}>추가</button>
        <button style={styles.btn} onClick={clear}>전체삭제</button>
      </div>

      {items.length === 0 ? (
        <div style={styles.card}>결과 없음</div>
      ) : (
        <List items={items} />
      )}
    </div>
  );
}

function List({ items }) {
  return (
    <div style={styles.card}>
      <p style={{ marginTop: 0 }}>총 {items.length}개</p>
      <ul style={styles.ul}>
        {items.map((it) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
