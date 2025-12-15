// JSX 문법을 연습하기 위한 함수형 컴포넌트
const Jsx = () => {

    // JSX 요소는 변수에 담아서 사용할 수 있다.
    const element = <h1>Hello, world!</h1>

    // JavaScript 값은 중괄호로 넣을 수 있다.
    const name = "Kim";
    const age = 20;

    // JSX에서 자주 사용하는 패턴
    // 1. 조건부 렌더링(삼항연산자)
    // JSX 안에서는 if문을 직접 쓸 수 없고,
    // 보통 삼항연산자를 사용한다.
    const isLogin = true;

    // 인라인 스타일은 JavaScript 객체 형태로 작성한다.
    // 속성 이름은 카멜케이스(backgroundColor 등)를 사용한다.

    //2. 조건부 렌더링 (AND연산자 &&)
    //조건이 true면 렌더링을 한다.
    const hasMessage = false;

    //3. 리스트 렌더링(map()메서드)
    //배열을 ul 목록으로 바꿀 때 map()메서드를 사용한다.
    const fruits = ["사과","바나나","포도"];


    const boxStyle = {
        backgroundColor: "lightgray",
        padding: "12px",
        borderRadius: "8px",
    };

    return (
        // 반드시 하나의 부모 요소로 감싸야 한다.
        // 불필요한 div를 쓰고 싶지 않다면 Fragment를 사용한다.
        // <> </> = <div> </div>
        <div>

            {/* JSX 요소 출력 */}
            {element}

            <h2>이름 : {name}</h2>
            <h2>나이 : {age}</h2>
            <h2>내년 나이 : {age + 1}</h2>

            {/* class는 JavaScript 예약어이기 때문에 JSX에서는 className 사용 */}
            <div className="container">박스</div>

            {/* 
              style 속성은 CSS 문자열이 아니라 JavaScript 객체로 작성
              font-size → fontSize 처럼 카멜케이스 사용
            */}
            <div style={{ color: 'red', fontSize: '20px' }}>
                스타일박스
            </div>

            {/* 미리 정의한 스타일 객체 적용 */}
            <div style={boxStyle}>스타일박스2</div>

            {/* input 태그는 닫는 태그 없이 사용 가능 */}
            <input />

            {/* 
              Vite에서는 이미지 사용 시
              1) public 폴더에 있으면 src="logo.png"
              2) 또는 import 해서 사용
            */}
            <img src="logo.png" alt="logo" />

            {/* 조건부 렌더링 (삼항 연산자) */}
            {isLogin ? <h1>환영합니다</h1> : <h1>로그인해주세요</h1>}
            <div>{hasMessage && <p>새 메시지가 있습니다.</p>}</div>
            <ul>
                {fruits.map((item,index) => (
                    //이때 li의 속성으로 key를 쓰는것이 좋다.
                    //리액트가 각 list를 구분하는 용도로 쓴다.
                  <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}

// 다른 파일에서 사용할 수 있도록 내보내기
export default Jsx;