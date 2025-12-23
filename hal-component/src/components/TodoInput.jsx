function TodoInput({ input, setInput, onAdd }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onAdd}>추가</button>
    </div>
  );
}

export default TodoInput;

