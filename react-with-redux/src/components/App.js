import { Route, HashRouter as Router } from "react-router-dom";

import Detail from "../routes/Detail";
import Home from "../routes/Home";
import React from "react";
import { TodoWhiteBox } from "./TodoTemplate";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoWhiteBox>
      <Router>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail}></Route>
      </Router>
    </TodoWhiteBox>
  );
}

export default App;
