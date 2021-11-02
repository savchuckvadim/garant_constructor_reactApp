import { Input, TextField } from "@material-ui/core"
import React from "react"
import styleMod from "./textInput.module.css"


const InputText = (props) => {
   
    // props.dispatch({
    //     type: 'CHANGE_STATE'
    // })
 
    let getNameOfproduct = () => {
        if (props.typeOfProduct) {
            return props.typeOfProduct
        } else {
            return null
        }
    }
    let nameOfproduct = getNameOfproduct()
    let autofocus = props.autofocus
    let value = props.value
    let placeholder = props.placeholder
    let background = props.type === 'price' ? 'white' : props.state.theme[props.state.indexOfTheme].backgroundColor
    let color = props.type === 'price' ? 'black' : props.state.theme[props.state.indexOfTheme].color
    let getWidth = () => {
        if (props.type === 'price') {
            if(props.typeOfProduct === 'legal Tech'){

            }else{
                return props.state.currentPrice.width
            }
           
        } else if (props.type === 'prepaid') {
            return null
        } else if (props.type === 'nameOfComplect') {
            return props.state.currentComplect.width
        }
    }
    let width = () => {
        if (getWidth()) {
            return getWidth()
        } else {
            return props.width
        }
    }
   
    const style = {
        // backgroundColor: background,
        borderStyle: 'none',
        textColor: color,
        color: color,

        width: width(),
        fontSize: 'small'
        // width: '130px',

    }

    if (props.type === 'prepaid') {
        style.fontSize = 'medium'
    } else if (props.type === 'price') {
        style.fontSize = 'large'
    } else if (props.type === 'nameOfComplect') {
        style.fontSize = 'small'
    }


    let changeNameOfComplect = (e, status) => {

        let actionName = {
            // type: TYPE,
            type: props.typeOfAction,
            act: props.type,
            value: e.target.value,
            // complectRef.current.value, 
            status: status,
            typeOfProduct: nameOfproduct,
            width: e.target.value.length*11

            // 
        }

        props.dispatch(actionName)

    }


    let actionPrice = ''

    let priceRef = React.createRef()

    let changePrice = () => {
        props.dispatch(actionPrice)
    }







    // }else if(type === 'price'){
    //     return (
    //         <Input style={style} placeholder="" ref={priceRef} onChange={changePrice} type="text" variant="standard" value={props.state.currentComplect}></Input>

    //     )


    return (
        <Input


            align="right"
            style={style}

            placeholder={placeholder}
            autoFocus={autofocus}
            className={styleMod.input}
            onChange={(e) => { changeNameOfComplect(e, true) }}
            onBlur={(e) => { changeNameOfComplect(e, false) }}
            type="text"
            variant="standard"
            value={value}
            typeOfProduct={nameOfproduct}
            typeOfAction={props.typeOfAction}
        >

        </Input>

    )




    // const active = () => {
    //     console.log(phoneRef.current.childNodes[0].value)
    //     props.dispatch({
    //         type: TYPE,
    //         fun: 'CHANGE_PHONE',
    //         value: phoneRef.current.childNodes[0].value

    //     })
    //    props.state.changeDataPhone(phoneRef.current.childNodes[0].value)

    // }


}

export default InputText