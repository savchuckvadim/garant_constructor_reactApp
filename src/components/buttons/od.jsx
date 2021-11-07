
import "./buttons.css"
import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem } from "@material-ui/core";
import { odChangeActionCreator } from "../../redux/redusers/od-reducer";




function ODButtons(props) {

  const getOdClassName = () => {

    if(props.state.theme.indexOfTheme === 1){
      return "od__labelDark"
    }else{
      return "od__labelLight"
    }
  }
  let odClassName = getOdClassName()

  const odChange = (name, currentComplect) => {
    const action = odChangeActionCreator(name, currentComplect)
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
    borderColor: props.state.theme.style[props.state.theme.indexOfTheme].color,
    borderRadius: '3%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s'

  }


  props.state.od.names.forEach((name, index) => {

    ods[index] = <MenuItem><Button style={style} onClick={() => { odChange(name, props.state.currentComplect) }} className="btn__od" as="button">{name}</Button></MenuItem>

  })





  return (



    <FormControl style={style} className={odClassName}  fullWidth>
      <InputLabel className={odClassName} id="demo-simple-select-autowidth-label">{props.state.currentComplect ? props.state.od.currentOd : 'Количество доступов'}</InputLabel>
      <Select
        // variant="standard"
        className="select"
        variant="standard"
      // onChange={ handleChange}
      >

        {ods}

      </Select>
    </FormControl>

  );
}

export default ODButtons