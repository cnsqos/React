import styled from 'styled-components'


const MyButton = styled.button`
    // 백틱안에 Css코드를 작성한다.
    background : dodgerblue;
    color : white;
    padding : 10px 20px
    border : none;
    border-radius : 5px;
    cursor : pointer

    // & : 컴포넌트 자신을 의미한다.
    &:hover{
        background : deepskyblue;

    }
`



export default function Example(){
    return(
        <MyButton onClick={(() => alert('클릭'))}>
            클릭해 보세요
        </MyButton>
    )
}

