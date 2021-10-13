import { FormControl, Input, TableCell, TextField } from "@material-ui/core"
import React from "react"
import style from "./offerDiscount.module.css"

const DISCOUNT = 'DISCOUNT'


const actionGetDiscount = {
    type: DISCOUNT,
    act: 'GET'
}



const OfferDiscount = (props) => {
    const myRef = React.createRef();

const discountValue = myRef.current



console.log(discountValue)
    const discountCreater = (action) => {
        return props.dispatch(action)
    }
    let discount = discountCreater(actionGetDiscount)



    const discountOnInputCreator = (e, autoFocus) => {
        e.preventDefault()

        console.log()
        const actionOnInputDiscount = {
            type: DISCOUNT,
            act: 'SET',
            value: e.target.value,
            autoFocus: autoFocus
        }
        discountCreater(actionOnInputDiscount)
    }
   

    

    return (
        <TableCell align="right">
            {/* <input ref={myRef} onInput={() => { discountInput(myRef.current.value) }} className={style.input} type="number" value={props.state.offer['discount']}></input> */}
            <Input id="my-input" ref={myRef} autoFocus={props.state.offer.autoFocus}  onChange={(e) => {discountOnInputCreator(e, true)}} onBlur={(e) => {discountOnInputCreator(e, false)}} className={style.input} type="number" label="скидка" variant="standard" value={discount}></Input>
        </TableCell>
    )
}

export default OfferDiscount