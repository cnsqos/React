function TodoFilter({ filter, setFilter }) {
  return (
    <div>
      <button
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
      >
        전체
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        미완료
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        완료
      </button>
    </div>
  );
}

export default TodoFilter;

