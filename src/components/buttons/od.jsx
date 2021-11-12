
import "./buttons.css"
import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem } from "@material-ui/core";




const ODButtons = (props) => {

  let ods = []

  props.allOds.forEach((name, index) => {

    ods[index] = <MenuItem key={`item-od-${index}`} ><Button key={`btn-od-${index}`} style={props.style} onClick={() => { props.odChange(name) }} className={props.odClassName} as="button">{name}</Button></MenuItem>

  })





  return (



    <FormControl style={props.style} className={props.odClassName} fullWidth>
      <InputLabel className={props.odClassName} id="demo-simple-select-autowidth-label">{props.currentComplect ? props.currentOd : 'Количество доступов'}</InputLabel>
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