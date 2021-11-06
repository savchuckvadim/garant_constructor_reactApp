import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store  from './redux/redux-store';






// store.changeState()
export const startApp = (state) => {
  
  // let version = getFromStorage('version')
  // if(version.length < 1 || version[0] === '1' ){
  //   localStorage.removeItem('currentComplect')
    
  //   addToStorage({1:'2'}, 'version')
  //   ReactDOM.render(
  //     <React.StrictMode>
  //          <BrowserRouter>
  //       <App state={store._state} dispatch={store.dispatch.bind(store)} />
  //       </BrowserRouter>
  //     </React.StrictMode>,
  //     document.getElementById('root')
  //   );
  // }
  // else{
    
    ReactDOM.render(
      
      <React.StrictMode>
         <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  // }
 

}
startApp(store.getState());

store.subscribe(() => {
  let state = store.getState()
  startApp(state);
})





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
