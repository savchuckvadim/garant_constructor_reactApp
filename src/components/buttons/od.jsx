
import styleBtn from "./button.module.css"

import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem} from "@material-ui/core";




const TYPE = 'OD'
const CURRENT_COMPLECT = 'CURRENT_COMPLECT'

const actionCreaterCurrentComplect = {
  type: CURRENT_COMPLECT,
}
const actionCurrent = actionCreaterCurrentComplect


function ODButtons(props) {
  const currentComplect = props.dispatch(actionCurrent)

  const odChange = (name) => {
    props.dispatch({
      type : TYPE,
      name : name
    })
  }
  let ods = []
  const style = {
    height: 54,
    textColor: props.state.theme[props.state.indexOfTheme].color,
    color: props.state.theme[props.state.indexOfTheme].color,
    backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: props.state.theme[props.state.indexOfTheme].color,
    borderRadius : '3%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s'

  }


  props.state.od.forEach((element, index) => {
    // const theme = props.state.theme[props.state.indexOfTheme]
    // console.log( theme.color)
    // styleOD = od (theme);

    // ods[index] = <Button style={style} onClick={() => { props.state.oD(element.name) }} className={styleBtn.btns__complect} as="button">{element.name}</Button>
    ods[index] = <MenuItem><Button style={style} onClick={() => {odChange(element.name) }} className={styleBtn.btns__complect} as="button">{element.name}</Button></MenuItem>
   

    //  <MenuItem onClick={() => { props.state.oD(element.name) }} key={element.name} select={true} as={Button} value={element.name} className={styleButtons.btn__od}  >{element.name} <img src={Ellipse} alt=""></img>  </MenuItem>




  })
  const theme = useTheme();
  const [od, setOd] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOd(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  let title = () => {
    if (currentComplect) {
      return currentComplect.od
    } else {
      return 'Количество пользователей'
    }
  }
  return (

    // <FormControl sx={{ m: 0, width: 322, mt: 0, height: 24, p: 0 }}>
    //   <Select
    //     sx={{ p: 0 }}
    //     displayEmpty
    //     value={od}
    //     onChange={handleChange}
    //     input={<OutlinedInput />}
    //     renderValue={(selected) => {
    //       if (selected.length === 0 || !props.state.currentComplect) {
    //         return <em>{title()}</em>;
    //       }

    //       return selected;
    //     }}
    //     MenuProps={MenuProps}
    //     inputProps={{ 'aria-label': 'Without label' }}
    //   >

    //     {/* {props.state.od.map((od) => (
    //         <MenuItem
    //           key={od}
    //           value={od}
    //           style={style}
    //           select={true}
    //         >
    //           {od}
    //         </MenuItem>
    //       ))} */}
    //     {ods}
    //   </Select>
    // </FormControl>
    // <DropdownButton className={styleBtn.btn__od} style={style} variant={props.state.theme[props.state.indexOfTheme].name} as={Button} align="end" id="dropdown-item-button" title={props.state.currentComplect ? props.state.currentComplect.od : 'Количество доступов'}>
    //   <Dropdown.ItemText className={styleBtn.btn__od} variant="outline" style={style}>Количество доступов </Dropdown.ItemText>
    //   {ods}
    // </DropdownButton>

<FormControl style={style}  className={styleBtn.btn__od} style={style} fullWidth>
<InputLabel id="demo-simple-select-autowidth-label">{currentComplect ? currentComplect.od : 'Количество доступов'}</InputLabel> 
<Select
// variant="standard"
className = {styleBtn.select}
    variant="standard"
    
  
// onChange={ handleChange}
>
   
{ods}

</Select>
</FormControl>

  );
}

export default ODButtons