import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import A from "./components/router_test/a";
import B from "./components/router_test/b";
import C from "./components/router_test/c";
let root = document.body.querySelector("#root");


ReactDOM.render(<HashRouter>
  <Switch>
    <Route path="/" exact render={() => <div>HOME</div>}></Route>
    <Route path="/b" exact render={B}></Route>
    <Route render={() => {
      return localStorage.getItem("flag") ? (<C />) : (<Redirect to={{pathname:"/",search:"name=123"}} />)
    }} />
  </Switch>
</HashRouter>, root);



