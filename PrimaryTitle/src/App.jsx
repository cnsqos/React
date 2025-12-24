import PrimaryTitle from "./components/PrimaryTitle";
import DynamicButton from "./components/DynamicButton";
import { BaseCard, ElevatedCard } from "./components/Card";


function App() {
  return (
    <div>
      <PrimaryTitle>강의 실습 시작</PrimaryTitle>
      
      <DynamicButton>기본 버튼</DynamicButton>
      <br />
      <br />
      <DynamicButton primary>메인</DynamicButton>

      <BaseCard>
        기본 카드입니다
      </BaseCard>

      <br />

      <ElevatedCard as="section">
        그림자가 있는 카드 (section 태그)
      </ElevatedCard>


    </div>
    
  );
}

export default App;
