import React, { useState } from 'react';
// import 'bootstrap'
// import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import DescriptionPage from './components/description/description';
import { BrowserRouter, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css'
import Result from './components/result/result';

function App(props) {
  const [inProp, setInProp] = useState(false);
  props.state.changeState();

  let MainPage = () => { return <Main state={props.state} /> }
  let descriptionPage = () => {
    return <DescriptionPage state={props.state} />
  }

  const routes = [
    { path: "/", Component: MainPage },
    { path: "/main", Component: MainPage },
    { path: "/description", Component: descriptionPage }
  ]
  return (
    <BrowserRouter>

      <div>
        <Header onClick={() => setInProp(true)} state={props.state} />
      
       {routes.map(({ path, Component }) =>
          <Route key={path} exact path={path}>
            {({ math }) =>
              <CSSTransition
                timeout={100000}
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
    </BrowserRouter>

  );
}



export default App;


