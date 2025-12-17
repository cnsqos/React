import { useState } from "react";

export default function Immutability(){

    // 객체 state
    const [user, setUser] = useState({ name: "", age: 0 });
    
    // 배열 state
    const [todos, setTodos] = useState([]);

    return(
        <>
            <p>이름 : {user.name}</p>
            <button onClick={() => {
                // 객체를 직접 수정이 안됨
                // 새로운 객체를 만들어서 교체
                setUser({
                    ...user,
                    name: "Lee",
                })
            }}>
                이름 변경
            </button>

            <h2>배열 상태</h2>
            <button onClick={() => { setTodos((prev) => [...prev,{ id: Date.now(), title: '공부' }])}}>
                할 일 추가
            </button>

            <ul>
              {
                //todos배열에 들어있는 요소의 개수만큼 <li>제목</li>을 만들어 주세요

                todos.map((todo) => (
                  <li key={todo.id}>{todo.title}</li>
                ))
              }
            </ul>
        </>
    )
}
