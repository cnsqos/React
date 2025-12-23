import { useState } from "react";

export default function KeyDifferenceDemo(){
    const [users, setUsers] = useState([
        {id:1,name:"kim"},
        {id:2,name:"Lee"},
        {id:3,name:"park"},
    ])

    function addFront(){
        const nextId = Math.max(...users.map((u) => u.id))+1
    }


    return(
        <div style={{padding : 12}}>
            <button onClick={() => {}}>맨앞에 추가</button>

            {/* users의 내용을 <li>에 출력하는 코드 작성하기 key는 id값으로 한다. */}
            
            {users.map((user) => (
                <li key={user.id}>{user.name}
                    <button onClick={() => removeUser(user.id)} style={{ marginLeft: 8 }}>삭제</button>
                </li>
            ))}
            
        </div>
    )
}