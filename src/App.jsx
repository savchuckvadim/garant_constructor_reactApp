import React , {useContext, useEffect, useState}from 'react';
// import 'bootstrap'
// import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import DescriptionPage from './components/description/description';
import { BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {

  props.state.changeState();

  let MainPage = () => {return <Main state={props.state}/> }
let descriptionPage = () => {
  return <DescriptionPage state={props.state}/>
}
  return (
    <BrowserRouter>
  
      <div>
        <Header state={props.state} />
        
        <div className="app__wrapperContent">
          <Route exact path="/" component={MainPage}/>
          <Route path="/main" component={MainPage} />
          <Route path="/description" component={descriptionPage} />

         
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;
