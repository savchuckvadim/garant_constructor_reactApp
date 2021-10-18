

import styleBtn from "../button.module.css"


import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { Button } from "@material-ui/core";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { odChangeActionCreator } from "../../../state/redusers/od-reducer";


const TYPE = 'OD'
const CURRENT_COMPLECT = 'CURRENT_COMPLECT'

const actionCreaterCurrentComplect = {
  type: CURRENT_COMPLECT,
}
const actionCurrent = actionCreaterCurrentComplect

const actionOd = (name) => {
 return {
    type : TYPE,
    name : name
  }
}


function ODModalButtons(props) {
  const currentComplect = props.dispatch(actionCurrent)

  const odChange = (name) => {
    const action = odChangeActionCreator (name)
    props.dispatch(action)
  }
  let ods = []

  const style = {
    height: 54,
    textColor: props.state.theme[ props.state.indexOfTheme].color,
    color: props.state.theme[ props.state.indexOfTheme].color,
    backgroundColor: props.state.theme[ props.state.indexOfTheme].backgroundColor,
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s' ,

    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: props.state.theme[ props.state.indexOfTheme].color,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
 
    
    // textColor: 'black'
  }


  props.state.od.forEach((element, index) => {
    // const theme = props.state.theme[props.state.indexOfTheme]
    // console.log( theme.color)
    // styleOD = od (theme);

    ods[index] = <Dropdown.Item style={style} onClick={() => { odChange(element.name) }} className={styleBtn.btn__odModal} as="button">{element.name}</Dropdown.Item>
    //  <MenuItem onClick={() => { props.state.oD(element.name) }} key={element.name} select={true} as={Button} value={element.name} className={styleButtons.btn__od}  >{element.name} <img src={Ellipse} alt=""></img>  </MenuItem>



  })



  return (


  
    <DropdownButton size="lg" className={styleBtn.btn__odModal} style={style} variant={props.state.theme[props.state.indexOfTheme].name} as={Button}  id="dropdown-item-button" title={currentComplect ? props.state.currentOd : 'Количество доступов'}>
      <Dropdown.ItemText className={styleBtn.btn__odModal} variant="outline" style={style}>Количество доступов </Dropdown.ItemText>
      {ods}
    </DropdownButton>

  );
}



export default ODModalButtons