import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

// let bx24 = new BX24()
// console.log(bx24)
// import  "./services/b24.js";


window.store = store

export const startApp = (state, store) => {
  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
        <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// store.changeState()

// Make a call to REST when JS SDK is loaded


startApp(store.getState(), store);

store.subscribe(() => {
  let state = store.getState()
  startApp(state, store);
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
