import React, { useCallback } from "react";
import type { Todo, IDCallback } from "./types";

interface ITodoItemProps {
  todo: Todo;
  toggleTodo: IDCallback;
  removeTodo: IDCallback;
}
const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}: ITodoItemProps): React.ReactElement => {
  const toggle = useCallback(() => toggleTodo(todo.id), [todo.id, toggleTodo]);
  const remove = useCallback(() => removeTodo(todo.id), [todo.id, removeTodo]);

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={toggle}
      />
      <span>{todo.body}</span>
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default TodoItem;