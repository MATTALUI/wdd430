import React, { useCallback, useState } from "react";

interface ITodoFormProps {
  addTodo: (body: string) => void;
}
const TodoForm: React.FC<ITodoFormProps> = ({
  addTodo,
}: ITodoFormProps): React.ReactElement => {
  const [value, setValue] = useState<string>("");

  const updateForm = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }, [setValue]);

  const submitTodo = useCallback(() => {
    if (!value) return;
    setValue("");
    addTodo(value.trim());
  }, [value, setValue, addTodo]);

  return (
    <div id="form">
      <textarea value={value} onChange={updateForm} placeholder="Todo..."/>
      <button onClick={submitTodo}>Add</button>
    </div>
  );
}

export default TodoForm;