import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from "./components/class_clock";
import "bootstrap/dist/css/bootstrap.css";
import Vote from "./components/vote";


let root = document.body.querySelector("#root");
ReactDOM.render(<div className="col-md-12">
  <Vote></Vote>
  <Vote title="您喜欢他么?"></Vote>
</div>, root);




