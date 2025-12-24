import styled from "styled-components";

const DynamicButton = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? "royalblue" : "white")};
  color: ${(props) => (props.primary ? "white" : "gray")};
  border: ${(props) => (props.primary ? "none" : "1px solid gray")};
`;

export default DynamicButton;