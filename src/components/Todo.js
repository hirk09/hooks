import React from "react";
import { Button } from "react-bootstrap";

const Todo = ({ todo, index, changervalue, deleteTodo, completeTodo }) => (
  <div className="todo">
    <input
      type="checkbox"
      checked={todo.checked}
      onClick={() => completeTodo(index)}
    />{" "}
    <input
      type="text"
      value={todo.text}
      onChange={(e) => changervalue(e, index)}
      style={{ border: "none" }}
    />{" "}
    <Button variant="danger" onClick={() => deleteTodo(index)}>
      delete
    </Button>{" "}
    <span style={{color: "brown" }}>
      {todo.checked ? "Complete" : null}
    </span>
  </div>
);
export default Todo;
