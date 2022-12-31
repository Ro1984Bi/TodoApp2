import { useState } from "react";

function Todo({ todo, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(todo.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdate = () => {
      onUpdate(todo.id, newValue);
      setIsEdit(false);
    };
    return (
      <form className="updateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdate}>
          Update
        </button>
      </form>
    );
  }

  function TodoRead() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{todo.title}</span>
       <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="deleteButton" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoRead />}</div>;
}

export default Todo;
