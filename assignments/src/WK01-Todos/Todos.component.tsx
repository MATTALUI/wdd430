import React, { useCallback, useEffect, useState } from "react";
import TodoForm from "./TodoForm.component";
import TodoItem from "./TodoItem.component";
import type { Todo } from "./types";
import "./styles.css"

const TODOS_STORAGE_KEY = "WDD430::TODOS";
const Todos: React.FC = (): React.ReactElement => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const loadedTodos =
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) || "[]");
      return loadedTodos;
    } catch (_e) {
      return [];
    }
  });

  const addTodo = useCallback((body: string) => {
    setTodos([
      {
        id: crypto.randomUUID(),
        body,
        complete: false,
      },
      ...todos,
    ]);
  }, [setTodos, todos]);

  const removeTodo = useCallback((id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  }, [setTodos, todos]);

  const toggleTodo = useCallback((id: string) => {
    const updatedTodos = structuredClone(todos);
    const todo = updatedTodos.find(t => t.id === id);
    if (!todo) return;
    todo.complete = !todo.complete;
    setTodos(updatedTodos);
  }, [todos, setTodos]);

  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <h2>Todos</h2>
      <TodoForm
        addTodo={addTodo}
      />
      <div id="todo-list">
        {!todos.length && (
          <p>You don't have anything to do.</p>
        )}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;