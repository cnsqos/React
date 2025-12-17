import { useState } from "react";

export default function BadCounter(){
    // 상태(state) 정의
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>BadCounter</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
        </div>
    )
}