import React from 'react';
import ReactDOM from 'react-dom';
import Model from "./components/model";

let root = document.body.querySelector("#root");
ReactDOM.render(<div className="rows">
  <Model className="red" title="welcome to model">
    <span>你好</span>
  </Model>
</div>, root);




