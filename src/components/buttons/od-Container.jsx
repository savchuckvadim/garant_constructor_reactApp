
import "./buttons.css"
import * as React from 'react';
import { odChangeActionCreator } from "../../redux/redusers/od-reducer";
import ODButtons from "./od";

//



const ODButtonsContainer = (props) => {
  let state = props.store.getState()
  let currentTheme = state.theme.style[state.theme.indexOfTheme]
  let odClassName = currentTheme.classOfOd
  let currentComplect = state.currentComplect
  let allOds = state.od.names
  let currentOd = state.od.currentOd


  const odChange = (name) => {
    let state = props.store.getState()
    let currentComplect = state.currentComplect
    const action = odChangeActionCreator(state, name, currentComplect)
    props.dispatch(action)
  }


  const style = {
    height: 54,
    // textColor: props.state.theme[props.state.indexOfTheme].textolor ,
    // color: props.state.theme[props.state.indexOfTheme].color,
    // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: currentTheme.color,
    borderRadius: '3%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s'

  }



  return (
    <ODButtons allOds={allOds} style={style} currentComplect={currentComplect} currentOd={currentOd} odChange={odChange} odClassName={odClassName} />

  )
}

export default ODButtonsContainer