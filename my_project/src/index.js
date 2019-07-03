import React from 'react';
import ReactDOM from 'react-dom';
import Model from "./components/model";

let root = document.body.querySelector("#root");
ReactDOM.render(<div className="rows">
  <Model red={{ backgroundColor: "red" }}>
    <span>你好</span>
  </Model>
</div>, root);




