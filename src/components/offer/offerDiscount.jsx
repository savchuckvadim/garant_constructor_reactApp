import { FormControl, Input, TableCell, TextField } from "@material-ui/core"
import React from "react"
import { changeDiscountActionCreator } from "../../state/redusers/changeDiscount-reducer"
import style from "./offerDiscount.module.css"

const OfferDiscount = (props) => {
    const myRef = React.createRef();

const discountValue = myRef.current



console.log(discountValue)

    let discount = props._state.offer.discount



    const discountOnInputCreator = (e, autoFocus) => {
        e.preventDefault()
        const action = changeDiscountActionCreator(e.target.value, autoFocus) 
        props.dispatch(action)
    }
   

    

    return (
        <TableCell align="right">
            {/* <input ref={myRef} onInput={() => { discountInput(myRef.current.value) }} className={style.input} type="number" value={props.state.offer['discount']}></input> */}
            <Input id="my-input" autoFocus={props.state.offer.autoFocus}  onChange={(e) => {discountOnInputCreator(e, true)}} onBlur={(e) => {discountOnInputCreator(e, false)}} className={style.input} type="number" label="скидка" variant="standard" value={discount}></Input>
        </TableCell>
    )
}

export default OfferDiscount