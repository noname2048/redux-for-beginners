import React, { useState } from "react";

import ToDo from "../components/ToDo";
import TodoCreate from "../components/vlpt/TodoCreate";
import TodoHead from "../components/vlpt/TodoHead";
import TodoList from "../components/vlpt/TodoList";
import { actionCreators } from "../store";
import { connect } from "react-redux";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <TodoHead />
      <TodoList>
      </TodoList>
      <TodoCreate></TodoCreate>
      <div style={ {backgroundColor: "grey", display: "none"} }>
        <h1>To Do</h1>
        <form onSubmit={onSubmit} action="">
          <input type="text" value={text} onChange={onChange} name="" id="" />
          <button>Add</button>
        </form>
        <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
      </div>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo({text})),
  };
}

export default connect(mapStateToProps, mapDispatchProps)(Home);
