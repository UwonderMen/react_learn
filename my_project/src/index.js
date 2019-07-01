import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Dialog from "./components/dialog.js";
let root = document.body.querySelector("#root");
ReactDOM.render(<div id="box">
  <Dialog title="警告" flag={1}></Dialog>
  <Dialog title="报错" flag={0}></Dialog>
</div>, root);





