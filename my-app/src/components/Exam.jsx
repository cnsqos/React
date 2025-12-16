const Exam = () => {
    //name 변수에 이름을 하나 넣고
    //<h1>안녕하세요, xxx님<h1> 출력하기

    //age 변수에 나이를 하나 넣고
    //성인입니다 또는 미성년자 입니다 출력하기

    
    const name = "이름";
    const age = 11;
    

    return(
        <div>
            <h1>안녕하세요, {name}님</h1>
            <p>{age >= 20 ? "성인입니다" : "미성년자 입니다"}</p>

        </div>        
    );

    




}
export default Exam;

