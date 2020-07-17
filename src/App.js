import React from "react";
import UseHook from "./hooks/UseHook";
import TodoForm from "./TodoForm";
import Todo from "./components/Todo";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const custmhook = UseHook();
  return (
    <div class=" hello">
      <div>
        <h3>TODO APP</h3>
        <TodoForm addTodo={custmhook.addTodo} />
        <br />
        <Filter
          onClick={(text) => {
            custmhook.setState({ ...custmhook.state, filter: text });
          }}
        />
        <br />
        {custmhook.state.todos
          .filter((data) =>
            custmhook.state.filter === "completed"
              ? data.checked
              : custmhook.state.filter === "incompleted"
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
                completeTodo={custmhook.completeTodo}
                changervalue={custmhook.changervalue}
                deleteTodo={custmhook.deleteTodo}
              />
              <br />
            </>
          ))}
      </div>
    </div>
  );
}
export default App;
