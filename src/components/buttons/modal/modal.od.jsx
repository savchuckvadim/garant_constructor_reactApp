

import styleBtn from "../button.module.css"


import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { Button } from "@material-ui/core";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};






function ODModalButtons(props) {
  let ods = []
  const style = {
    height: 54,
    textColor: props.state.theme[ props.state.indexOfTheme].color,
    color: props.state.theme[ props.state.indexOfTheme].color,
    backgroundColor: props.state.theme[ props.state.indexOfTheme].backgroundColor,
  
    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: props.state.theme[ props.state.indexOfTheme].color,
  
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s' 
    
    // textColor: 'black'
  }


  props.state.od.forEach((element, index) => {
    // const theme = props.state.theme[props.state.indexOfTheme]
    // console.log( theme.color)
    // styleOD = od (theme);

    ods[index] = <Dropdown.Item style={style} onClick={() => { props.state.oD(element.name) }} className={styleBtn.btn__odModal} as="button">{element.name}</Dropdown.Item>
    //  <MenuItem onClick={() => { props.state.oD(element.name) }} key={element.name} select={true} as={Button} value={element.name} className={styleButtons.btn__od}  >{element.name} <img src={Ellipse} alt=""></img>  </MenuItem>



  })



  return (


  
    <DropdownButton size="lg" className={styleBtn.btn__odModal} style={style} variant={props.state.theme[props.state.indexOfTheme].name} as={Button}  id="dropdown-item-button" title={props.state.currentComplect ? props.state.currentComplect.od : 'Количество доступов'}>
      <Dropdown.ItemText className={styleBtn.btn__odModal} variant="outline" style={style}>Количество доступов </Dropdown.ItemText>
      {ods}
    </DropdownButton>

  );
}



export default ODModalButtons