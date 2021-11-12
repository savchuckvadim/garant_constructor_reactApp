import React from 'react';
// import 'bootstrap'
// import { Tooltip, Toast, Popover } from 'bootstrap';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import {  Route } from 'react-router-dom'
// import { CSSTransition, } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css'
// import Offer from './components/offer/offer';
// import DealPageContainer from './components/deal/dealPage-Container';

function App(props) {
  let currentTheme = props.state.theme.style[props.state.theme.indexOfTheme]
  const styleFromState =  props.state.theme.style[props.state.theme.indexOfTheme]

  let style = {
    // background: styleFromState.background,
    color: styleFromState.color,
    textColor: styleFromState.textColor,
    // transitionProperty: styleFromState.transitionProperty,
    // transitionDuration: styleFromState.transitionDuration,
    // transitionDelay: styleFromState.transitionDelay,
    backgroundPosition: `center`,
    transform: `rotateZ(720deg)`
  }
  
  let MainPage = () => { return <Main store={props.store}  style={style} dispatch={props.dispatch} /> }

  // let offerPage = () => {
  //   return <Offer style={style} state={props.state} dispatch={props.dispatch}/>
  // }
  // let dealPage = () => {

  //   return <DealPageContainer/>
  // }

  // const routes = [
  //   { path: "/", Component: MainPage },
  //   { path: "/main", Component: MainPage },
  //   // { path: "/description", Component: descriptionPage },
  //   // { path: "/offer", Component: offerPage },
  //   { path: "/deal", Component: dealPage }
  // ]
  const mainClassRef = React.createRef()
  return (
    

      <div>
         <div ref={mainClassRef} className={currentTheme.currentMainClass}>
        <Header store={props.store}style={style} state={props.state} dispatch={props.dispatch} mainClass={mainClassRef}/>
       {/* {routes.map(({ path, Component }) =>
          <Route key={path} exact path={path}>
            {({ math }) =>
              <CSSTransition
                timeout={1000}
                classNames="app"
              >
                <Component />
              </CSSTransition>
            }
            <Component />
           
          </Route>

        )} */}
        <div className="app__wrapperContent">
          <Route exact path="/" component={MainPage} />
          <Route path="/main" component={MainPage} />
          {/* <Route path="/description" component={descriptionPage} /> */}


        </div>
       
      </div>
      </div>
    

  );
}



export default App;


