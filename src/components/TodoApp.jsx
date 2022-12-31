import { useState } from "react";
import Todo from "./Todo";
import '../css/TodoApp.css'

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const data = e.target.value;
    setTitle(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID,
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((todo) => todo.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form className="todoForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Save"
          className="todoButton"
        />
      </form>
      <div className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
