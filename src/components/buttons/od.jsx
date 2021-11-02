
import styleBtn from "./button.module.css"
import {odStyle} from  "./odStyle.css"
import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem } from "@material-ui/core";
import { odChangeActionCreator } from "../../state/redusers/od-reducer";




function ODButtons(props) {
 
  const getOdClassName = () => {

    if(props.state.indexOfTheme === 1){
      return "od__labelDark"
    }else{
      return "od__labelLight"
    }
  }
  let odClassName = getOdClassName()

  const odChange = (name) => {
    const action = odChangeActionCreator(name)
    props.dispatch(action)
  }


  let ods = []
  const style = {
    height: 54,
    // textColor: props.state.theme[props.state.indexOfTheme].textolor ,
    // color: props.state.theme[props.state.indexOfTheme].color,
    // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: props.state.theme[props.state.indexOfTheme].color,
    borderRadius: '3%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s'

  }


  props.state.od.forEach((element, index) => {

    ods[index] = <MenuItem><Button style={style} onClick={() => { odChange(element.name) }} className={styleBtn.btn__od} as="button">{element.name}</Button></MenuItem>

  })





  return (



    <FormControl style={style} className={odClassName}  fullWidth>
      <InputLabel className={odClassName} id="demo-simple-select-autowidth-label">{props.state.currentComplect ? props.state.currentOd : 'Количество доступов'}</InputLabel>
      <Select
        // variant="standard"
        className={styleBtn.select}
        variant="standard"
      // onChange={ handleChange}
      >

        {ods}

      </Select>
    </FormControl>

  );
}

export default ODButtons