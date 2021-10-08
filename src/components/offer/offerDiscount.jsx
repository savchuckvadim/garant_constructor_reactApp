import { FormControl, Input, TableCell, TextField } from "@material-ui/core"
import React from "react"
import style from "./offerDiscount.module.css"




const OfferDiscount = (props) => {
    let offer = 25
    const discountInput = (value) => {
        props.state.changeOffer('discount', value)
    }
    let myRef = React.createRef();

    return (
        <TableCell align="right">
            {/* <input ref={myRef} onInput={() => { discountInput(myRef.current.value) }} className={style.input} type="number" value={props.state.offer['discount']}></input> */}
            <Input id="my-input" ref={myRef} onInput={() => { discountInput(myRef.current.value) }} className={style.input} type="number" label="скидка" variant="standard">{props.state.offer['discount']}</Input>
        </TableCell>
    )
}

export default OfferDiscount