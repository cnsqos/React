import styled from "styled-components";

// 기본 카드
const BaseCard = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
`;

// BaseCard 스타일을 확장한 카드
const ElevatedCard = styled(BaseCard)`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export { BaseCard, ElevatedCard };