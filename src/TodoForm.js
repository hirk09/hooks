import React from "react";
import UseHook from "./hooks/UseHook";

function TodoForm({ addTodo }) {
  const custmhook = UseHook();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (custmhook.value === "") {
      alert("you must write something");
    }
    if (!custmhook.value) return;
    addTodo(custmhook.value);
    custmhook.setValue("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: 15 }}>
      <input
        type="text"
        className="input"
        value={custmhook.value}
        onChange={(e) => custmhook.setValue(e.target.value)}
      />{" "}
      <button>ADD</button>
    </form>
  );
}
export default TodoForm;
