import { IUseStates } from "./hook";

export const States = ({
  useStateManagement,
}: {
  useStateManagement: IUseStates;
}) => {
  const { todos, currentTodo, handleChange, removeTodo, addTodo } =
    useStateManagement();

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <p key={todo} onClick={() => removeTodo(todo)}>
            {todo}
          </p>
        ))}
      </div>
    </div>
  );
};
