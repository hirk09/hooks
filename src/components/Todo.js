import React from "react";

const Todo = ({ todo, index, changervalue, deleteTodo }) => (
  <div className="todo">
    <input
      type="text"
      value={todo.text}
      onChange={(e) => changervalue(e, index)}
      style={{ border: "none" }}
    />
    <button onClick={() => deleteTodo(index)}>delete</button>
  </div>
);
export default Todo;
