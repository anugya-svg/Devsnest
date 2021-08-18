import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import "./style.css"

ReactDOM.render(
  <React.StrictMode>
    <div class="bg-img"></div>
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

