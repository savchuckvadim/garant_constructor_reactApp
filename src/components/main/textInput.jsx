import { Input} from "@material-ui/core"
import React from "react"
import styleMod from "./textInput.module.css"


const InputText = (props) => {
    
    let getNameOfproduct = () => {
        if (props.type) {
            return props.type
        } else {
            return null
        }
    }
    let nameOfproduct = getNameOfproduct()
    let autofocus = props.autofocus
    let value = props.value
    let placeholder = props.placeholder
    // let background = props.type === 'price' ? 'white' : props.state.theme.style[props.state.theme.indexOfTheme].backgroundColor
    let color = props.type === 'price' ? 'black' : props.state.theme.style[props.state.theme.indexOfTheme].color
    let getWidth = () => {
        if (props.type === 'price') {
            if(props.type === 'legal Tech'){

            }else{
                return props.state.price.currentPrice.width
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

        borderStyle: 'none',
        textColor: color,
        color: color,
        width: width(),
        fontSize: 'small'
   

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
            type: props.typeOfAction,
            act: props.type,
            value: e.target.value,
            status: status,
            typeOfProduct: nameOfproduct,
            width: e.target.value.length*11
 
        }

        props.dispatch(actionName)

    }



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

}

export default InputText