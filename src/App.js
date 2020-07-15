import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./components/Todo";
function App() {
  const [todos, setTodos] = useState([
    { text: "Rice" },
    { text: "Oil" },
    { text: "Beans" },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const changervalue = (e, index) => {
    const newtodos = [...todos];
    newtodos[index].text = e.target.value;
    setTodos(newtodos);
  };
  const deleteTodo = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            changervalue={changervalue}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
