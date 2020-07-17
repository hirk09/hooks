import { useState } from "react";

function UseHook() {
  const [state, setState] = useState({
    filter: "",
    todos: [
      { text: "Rice", checked: false },
      { text: "Oil", checked: false },
      { text: "Beans", checked: false },
    ],
  });
  const [value, setValue] = useState("");
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
  return {
    state,
    setState,
    addTodo,
    changervalue,
    deleteTodo,
    completeTodo,
    value,
    setValue,
  };
}
export default UseHook;
