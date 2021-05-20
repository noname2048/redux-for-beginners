import { Route, HashRouter as Router } from "react-router-dom";

import Detail from "../routes/Detail";
import Home from "../routes/Home";
import React from "react";
import TodoTemplate from "./vlpt/TodoTemplate";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoTemplate>
      <Router>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail}></Route>
      </Router>
    </TodoTemplate>
  );
}

export default App;
