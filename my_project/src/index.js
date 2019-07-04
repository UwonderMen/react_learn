import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import CompositeComponent from "./components/composite_component";


let root = document.body.querySelector("#root");
ReactDOM.render(<div className="col-md-12">
  <CompositeComponent></CompositeComponent>
</div>, root);




