

import styleBtn from "../button.module.css"
import * as React from 'react';
import { Button } from "@material-ui/core";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { odChangeActionCreator } from "../../../state/redusers/od-reducer";








function ODModalButtons(props) {
  const currentComplect =  props.state.currentComplect


  const odChange = (name) => {
    const action = odChangeActionCreator (name)
    props.dispatch(action)
  }
  let ods = []

  const style = {
    height: 54,
    textColor: props.state.theme.style[props.state.theme.indexOfTheme].color,
    color: props.state.theme.style[props.state.theme.indexOfTheme].color,
    backgroundColor: props.state.theme.style[props.state.theme.indexOfTheme].backgroundColor,
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s' ,

    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: props.state.theme.style[props.state.theme.indexOfTheme].color,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
 
  }


  props.state.od.forEach((element, index) => {
  
    ods[index] = <Dropdown.Item style={style} onClick={() => { odChange(element.name) }} className={styleBtn.btn__odModal} as="button">{element.name}</Dropdown.Item>


  })



  return (


  
    <DropdownButton size="lg" className={styleBtn.btn__odModal} style={style} variant={props.state.theme.style[props.state.theme.indexOfTheme].name} as={Button}  id="dropdown-item-button" title={currentComplect ? props.state.currentOd : 'Количество доступов'}>
      <Dropdown.ItemText className={styleBtn.btn__odModal} variant="outline" style={style}>Количество доступов </Dropdown.ItemText>
      {ods}
    </DropdownButton>

  );
}



export default ODModalButtons