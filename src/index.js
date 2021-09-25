import React from "react";
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { state } from './state/state';
import { subscribe } from "./state/state";

export const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

startApp();
state.subscribe(startApp)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
