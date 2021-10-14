import { Input } from "@material-ui/core"
import React from "react"
import styleClass from './offerPhoneNumber.module.css'


const PhoneNumber = (props) => {
    const TYPE = 'PHONE'
    const onBlur = () => {
        props.dispatch({
            type: TYPE,
            fun: 'FROM_LOCAL',
    
        })
    }
    props.dispatch({
        type: TYPE,
        fun: 'FROM_LOCAL',

    })
    
    let phoneRef = React.createRef()
    const style = {
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        borderStyle: 'none',
        textColor: props.state.theme[props.state.indexOfTheme].color,
        color: props.state.theme[props.state.indexOfTheme].color,
        width: '130px',
        // marginRight: '50px'
    }

    const active = () => {
        console.log(phoneRef.current.childNodes[0].value)
        props.dispatch({
            type: TYPE,
            fun: 'CHANGE_PHONE',
            value: phoneRef.current.childNodes[0].value
            
        })
    //    props.state.changeDataPhone(phoneRef.current.childNodes[0].value)
        
    }

    return (
        <Input className={styleClass.phoneInput} style={style} placeholder="+7 800 700 03 94"  ref={phoneRef}  onChange={active}   type="text"  variant="standard" value={props.state.phoneNumber.value}></Input>

        // <input ref={phoneRef} style={style} onClick={() => {startActive()}} type="tel" value={props.state.phoneNumber.value}></input>
    )
}

export default PhoneNumber