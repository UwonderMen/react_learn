import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import A from "./components/router_test/a";
import B from "./components/router_test/b";
import C from "./components/router_test/c";
let root = document.body.querySelector("#root");


ReactDOM.render(<HashRouter>
  <Route path="/a" component={A}></Route>
  <Route path="/b" component={B}></Route>
  <Route path="/c" component={C}></Route>
  <Route path="/c" component={C}></Route>
</HashRouter>, root);



