
import Ellipse from "./img/Ellipse.svg"

import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
// import React from 'react';

import "./button.css"
// import Box from '@mui/material/Box';
import InputLabel from '@material-ui/core/InputLabel';


import MenuItem from '@material-ui/core//MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


// const [age, setAge] = React.useState('');

// const handleChange = (event) => {
//     setAge(event.target.value);
//   };



let styleOD = {
    
    color: 'black',
    backgroundColor: 'white',
    minWidth: '322px',
    width: '100%',
    // border: '2px solid',
    // borderColor: 'rgba(151, 103, 200, 1)',

    variant: 'light',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textColor: 'black'
}
const formStyle = {
    height: '97%',
}
const ODButtons = (props) => {
    let ods = []
let placeholder = false
    props.state.od.forEach((element, index) => {
if(index === 0) {
    ods[index] = <MenuItem  style={styleOD} as="button" variant='none' onClick={() => { console.log('this') }} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </MenuItem>

}else{
    ods[index] = <MenuItem style={styleOD} as="button" variant='none' onClick={() => { console.log('this') }} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </MenuItem>

}

    })
    return (

        // <DropdownButton style={styleOD} as={ButtonGroup} variant='none'  className=""  id="dropdown-button" title="Количество доступов">
        //    {ods}
        // </DropdownButton>
        <div>
        <FormControl style={formStyle} sx={{ m: 0, minWidth: 372}}>
          <InputLabel id="demo-simple-select-autowidth-label">Количество пользователей</InputLabel>
          <Select
          style={formStyle}
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={'age'}
            onChange={console.log('cmock chmok chmok')}
            autoWidth
            label="Age"
           
            
          >
            
            {ods}
          </Select>
        </FormControl>
      </div>
    )
}

export default ODButtons