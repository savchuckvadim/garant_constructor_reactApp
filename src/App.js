import React, { useState } from 'react';
import 'bootstrap'
import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import DescriptionPage from './components/description/description';
import {BrowserRouter, Route} from 'react-router-dom'

import changeState from './state/state';



function App(props) {
  changeState();
let MainPage = () => {
  return (Main(props))
}


    return (
      <BrowserRouter>
            <div>
      <Header  />
      <div className="app__wrapperContent">
        <Route exact path="/" component={MainPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/description"  component={DescriptionPage}/>

      {/* <Main />
      <DescriptionPage /> */}
      </div>
     
      </div>
      </BrowserRouter>

    );  
  }
 


export default App;
