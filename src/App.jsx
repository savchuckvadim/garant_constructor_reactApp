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
const STYLE = 'STYLE';

function App(props) {
  
  const [inProp, setInProp] = useState(false);
  props.dispatch({type:'CHANGE_STATE'});


  const actionCreaterGetStyle = () => {return {type: STYLE }}
  let action = actionCreaterGetStyle();
  const styleFromState = props.dispatch(action)

  let style = {
    background: styleFromState.background,
    color: styleFromState.color,
    textColor: styleFromState.textColor,
    transitionProperty: styleFromState.transitionProperty,
    transitionDuration: styleFromState.transitionDuration,
    transitionDelay: styleFromState.transitionDelay,
    backgroundPosition: `center`,
    transform: `rotateZ(720deg)`
  }
  
  let MainPage = () => { return <Main  style={style} state={props.state} dispatch={props.dispatch} /> }
  let descriptionPage = () => {
    return <DescriptionPage state={props.state} dispatch={props.dispatch} />
  }
  let offerPage = () => {
    return <Offer style={style} state={props.state} dispatch={props.dispatch}/>
  }

  const routes = [
    { path: "/", Component: MainPage },
    { path: "/main", Component: MainPage },
    { path: "/description", Component: descriptionPage },
    { path: "/offer", Component: offerPage }
  ]
  return (
    

      <div>
        <Header onClick={() => setInProp(true)} style={style} state={props.state} dispatch={props.dispatch} />
        <div className="app__wrapperContent">
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
      </div>
    

  );
}



export default App;


