import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  
  function onSubmit(e) {
      e.preventDefault();
      console.log(text);
  }
  
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}  action="">
        <input type="text" value={text} onChange={onChange} name="" id="" />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
