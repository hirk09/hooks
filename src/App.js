import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./components/Todo";
import Checked from "./components/Checked";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState({
    filter:"",
    todos:[
    { text: "Rice",checked: true},
    { text: "Oil", checked: true},
    { text: "Beans",checked: true},
  ]});
  const addTodo = (text) => {
    const newtodos = {...todos,todos:[...todos.todos, { text }] };
    setTodos(newtodos);
  };
  const changervalue = (e, index) => {
    const newtodos = {...todos};
    newtodos[index].text = e.target.value;
    setTodos(newtodos);
  };
  const deleteTodo = (index) => {
    const newtodos = {...todos};

    newtodos.splice(index, 1);
    setTodos(newtodos);
  };
 console.log(todos)
  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <Filter onClick={(text)=>{setTodos({...todos,filter:text})}} />
        {todos.todos.map((todo, index) => (
          <>
            {" "}
            <Checked />
            <Todo
              key={index}
              index={index}
              todo={todo}
              changervalue={changervalue}
              deleteTodo={deleteTodo}
            />
          </>
        ))}
      </div>
    </div>
  );
}
export default App;
