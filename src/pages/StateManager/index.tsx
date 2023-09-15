import { useRecoilSample, useUseState } from "./hook";

export const StateManager = () => {
  // const { currentTodo, handleAddTodo, handleChange, handleDeleteTodo, todos } =
  //   useUseState();
  const { currentTodo, handleAddTodo, handleChange, handleDeleteTodo, todos } =
    useRecoilSample();

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <p key={todo} onClick={() => handleDeleteTodo(todo)}>
            {todo}
          </p>
        ))}
      </div>
    </div>
  );
};
