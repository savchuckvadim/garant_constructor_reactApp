import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BX24 } from 'bx24';
// import { BX24 } from 'bx24';

// console.log(leads[0])
// const bx24 = new BX24(window, parent);

// BX24.getAuth().then(function (auth) {
//   console.log(auth);
// });
// BX24.init(function(){
// 	console.log('Инициализация завершена!', BX24.isAdmin());
// });
// BX24.init(function(){

//   BX24.callMethod('user.current', {}, function(res){
//       var name = document.getElementById('name');
//       name.innerHTML = res.data().NAME + ' ' + res.data().LAST_NAME;
//       console.log(res.data());
//   });

//   console.log(' Yeah! B24 npm is ready!', BX24.isAdmin());

// });
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
