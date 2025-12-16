import React from 'react';
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import Student from './components/Student.jsx';
import CardList from './components/CardList.jsx';
import Card from './components/Card.jsx';
import Title from './components/Title.jsx';
import UserCard from './components/UserCard.jsx';
import Product from './components/Product.jsx';

function App() {


  return (
    // <div>
    //   <Button text="확인" />
    //   <Button text="취소" />
    //   <Counter count={10} />
    //   <Counter count={0} />
    //   <Counter count={totalCount} />
    //   <Student name="Lee" age={20} isStudent={true} />
    //   <CardList />
    // </div>
<div>
        {/* <Card>
            <h1>공지사항</h1>
            <p>오늘은 휴강입니다</p>
        </Card> */}

  <Title props="쉽지않다" />
  <UserCard name="쉽지않" age={30}/>
  <Product name="쉽" price={123}/>
  <Product name="지" price={1234}/>
  <Product name="않" price={12345}/>
</div>
  );
}

export default App;

