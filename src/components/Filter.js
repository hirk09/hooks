import React from "react";


function Filter(props) {
    
    return (
      <div>
        <button onClick={()=>{props.onClick("")}} >show all</button>{' '}
        <button onClick={()=>{props.onClick("completed")}}>completed</button>{' '}
        <button onClick={()=>{props.onClick("incompleted")}}>incompleted</button>
      </div>
    );
  }
  export default Filter;
  