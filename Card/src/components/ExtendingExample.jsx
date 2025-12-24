import styled from "styled-components"

const BaseButton = styled.button`
    background : white;
    color : palevioletred;
    padding : 0.25em 1em;
    border : 2px solid palevioletred;
    border-radius : 3px;
`

const LargeButton = styled(BaseButton)`
    font-size : 2em;
    color : slateblue;

`


export default function ExtendingExample(){
    <>
        <BaseButton>기본 크기 버튼</BaseButton>
        <LargeButton>큰 크기 버튼</LargeButton>
    </>
}

