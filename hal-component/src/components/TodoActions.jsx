function TodoActions({ onDeleteCompleted }) {
  return (
    <div>
      <button onClick={onDeleteCompleted}>완료 삭제</button>
    </div>
  );
}

export default TodoActions;