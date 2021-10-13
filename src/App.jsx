import React, { useState } from 'react';
// import 'bootstrap'
// import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import DescriptionPage from './components/description/description';
import { BrowserRouter, Route } from 'react-router-dom'
import { CSSTransition, } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css'
import Offer from './components/offer/offer';


function App(props) {
  
  const [inProp, setInProp] = useState(false);
  props.dispatch({type:'CHANGE_STATE'});
  
  let MainPage = () => { return <Main state={props.state} dispatch={props.dispatch} /> }
  let descriptionPage = () => {
    return <DescriptionPage state={props.state} dispatch={props.dispatch} />
  }
  let offerPage = () => {
    return <Offer state={props.state} dispatch={props.dispatch}/>
  }

  const routes = [
    { path: "/", Component: MainPage },
    { path: "/main", Component: MainPage },
    { path: "/description", Component: descriptionPage },
    { path: "/offer", Component: offerPage }
  ]
  return (
    

      <div>
        <Header onClick={() => setInProp(true)} state={props.state} dispatch={props.dispatch} />
      
       {routes.map(({ path, Component }) =>
          <Route key={path} exact path={path}>
            {({ math }) =>
              <CSSTransition
                timeout={1000}
                classNames="app"
                in={inProp}
              >
                <Component />
              </CSSTransition>
            }
            <Component />
           
          </Route>

        )}
        {/* <div className="app__wrapperContent">
          <Route exact path="/" component={MainPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/description" component={descriptionPage} />


        </div> */}
       
      
      </div>
    

  );
}



export default App;


