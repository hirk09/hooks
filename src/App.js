import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./components/Todo";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [state, setState] = useState({
    filter: "",
    todos: [
      { text: "Rice", checked: false },
      { text: "Oil", checked: false },
      { text: "Beans", checked: false },
    ],
  });
  const addTodo = (text) => {
    const newstate = { ...state, todos: [...state.todos, { text }] };
    setState(newstate);
  };
  const changervalue = (e, index) => {
    const newstate = [...state.todos];
    newstate[index].text = e.target.value;
    setState({ ...state, state: newstate });
  };
  const deleteTodo = (index) => {
    const newstate = [...state.todos];
    newstate.splice(index, 1);
    setState({ ...state, todos: newstate });
  };
  const completeTodo = (index) => {
    const newstate = [...state.todos];
    newstate[index].checked = !newstate[index].checked;
    setState({ ...state, state: newstate });
  };
  return (
    <div class=" hello">
      <div>
        <h3>TODO APP</h3>
        <TodoForm addTodo={addTodo} />
        <br />
        <Filter
          onClick={(text) => {
            setState({ ...state, filter: text });
          }}
        />
        <br />
        {state.todos
          .filter((data) =>
            state.filter === "completed"
              ? data.checked
              : state.filter === "incompleted"
              ? !data.checked
              : data
          )
          .map((todo, index) => (
            <>
              {" "}
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                changervalue={changervalue}
                deleteTodo={deleteTodo}
              />
              <br />
            </>
          ))}
      </div>
    </div>
  );
}
export default App;
