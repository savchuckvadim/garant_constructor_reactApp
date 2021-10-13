import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, NativeSelect, Select, TableCell } from "@material-ui/core"
import style from "./offerPrepaid.module.css"



const SelectOfPrepaid = () => {

    // const [setMonth] = React.useState('');

    // const handleChange = (event) => {
    //   setMonth(event.target.value);
    // };

    const month = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ];



    return (
        <FormControl className = {style.formControl} fullWidth>
            
            <NativeSelect 
            // variant="standard"
            className = {style.select}
                
                label="Месяцы"
                placeholder="Месяцы"
            // onChange={ handleChange}
            >
               
                {month.map((month) => {
                    return <option value={month}>{month}</option>
                })}

            </NativeSelect>
        </FormControl>
    )
}

const OfferPrepaid = () => {
    return (
        <TableCell align="right"> <SelectOfPrepaid /> </TableCell>

    )
}

export default SelectOfPrepaid