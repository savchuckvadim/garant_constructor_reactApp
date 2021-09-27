
import Ellipse from "./img/Ellipse.svg"


import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from "@material-ui/core";
import { state } from "../../state/state";

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const style = {
  height: 54,
  textColor: 'black',
  backgroundColor: 'white',
  minWidth: '322px',
  width: '100%',
  // border: '2px solid',
  // borderColor: 'rgba(151, 103, 200, 1)',

  // variant: 'light',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  // textColor: 'black'
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function ODButtons(props) {
  let ods = []



  props.state.od.forEach((element, index) => {
    // const theme = props.state.theme[props.state.indexOfTheme]
    // console.log( theme.color)
    // styleOD = od (theme);

    ods[index] = <MenuItem onClick={() => { props.state.oD(element.name) }} key={element.name} select={true} as={Button} value={element.name} style={style} >{element.name} <img src={Ellipse} alt=""></img>  </MenuItem>



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
    if (props.state.currentComplect) {
      return props.state.currentComplect.od
    } else {
      return 'Количество пользователей'
    }
  }
  return (

    <FormControl sx={{ m: 0, width: 372, mt: 0, maxHeight: 54, p: 0 }}>
      <Select
        sx={{ p: 0 }}
        displayEmpty
        value={od}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0 || !props.state.currentComplect) {
            return <em>{title()}</em>;
          }

          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label' }}
      >

        {/* {props.state.od.map((od) => (
            <MenuItem
              key={od}
              value={od}
              style={style}
              select={true}
            >
              {od}
            </MenuItem>
          ))} */}
        {ods}
      </Select>
    </FormControl>

  );
}

// import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
// // import React from 'react';

// import "./button.css"
// // import Box from '@mui/material/Box';
// import InputLabel from '@material-ui/core/InputLabel';


// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Button from "@restart/ui/esm/Button";


// // const [age, setAge] = React.useState('');

// // const handleChange = (event) => {
// //     setAge(event.target.value);
// //   };



// const od = (theme) => {

//   return (
//     {
//       height: 54,
//       textColor: theme.color,
//       backgroundColor: theme.background,
//       minWidth: '322px',
//       width: '100%',
//       // border: '2px solid',
//       // borderColor: 'rgba(151, 103, 200, 1)',

//       // variant: 'light',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexDirection: 'row',
//       flexWrap: 'nowrap',
//       // textColor: 'black'
//     }
//   )
// }
// const formStyle = {
//   height: '97%',
// }
// const ODButtons = (props) => {

//   let styleOD = od (props.state.theme);

//   let ods = []
//   let placeholder = false


//   props.state.od.forEach((element, index) => {
//     const theme = props.state.theme[props.state.indexOfTheme]
//     console.log( theme.color)
//     styleOD = od (theme);
//     if (index === 0) {
//       ods[index] = <Button style={styleOD}  onClick={() => { console.log('this') }} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </Button>

//     } else {
//       ods[index] = <Button style={styleOD} onClick={() => { console.log('this') }} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </Button>

//     }

//   })
//   return (

//     // <DropdownButton style={styleOD} as={ButtonGroup} variant='outline'  className="" id="dropdown-button" title="Количество доступов">
//     //   {ods}
//     // </DropdownButton>
//       <div>
//       <FormControl style={styleOD} sx={{ m: 0, minWidth: 372}}>
//         <InputLabel id="demo-simple-select-autowidth-label">Количество пользователей</InputLabel>
//         <Select
//         style={styleOD}
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={'age'}
//           onChange={(e) => {console.log(e)}}
//           autoWidth
//           label="Age"


//         >

//           {ods}
//         </Select>
//       </FormControl>
//     </div>
//   )
// }

export default ODButtons