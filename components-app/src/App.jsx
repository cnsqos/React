import React from 'react';
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import Student from './components/Student.jsx';
import CardList from './components/CardList.jsx';

function App() {
  const totalCount = 100;

  return (
    <div>
      <Button text="확인" />
      <Button text="취소" />
      <Counter count={10} />
      <Counter count={0} />
      <Counter count={totalCount} />
      <Student name="Lee" age={20} isStudent={true} />
      <CardList />
    </div>
  );
}

export default App;


// function App() {
//   const totalCount = 100;

//   return (
//     <div>
//       <Button text="확인" />
//       <Button text="취소" />
//       <Counter count={10} />
//       <Counter count={0} />
//       <Counter count={totalCount} />
//       <Student name="Lee" age={20} isStudent={true} />
//     </div>
//   );
// }

// export default App;
