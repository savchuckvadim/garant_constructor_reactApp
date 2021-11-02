import { Input } from "@material-ui/core"
import React from "react"
import { phoneActionCreator } from "../../state/redusers/phoneNumber-reducer"
import styleClass from './offerPhoneNumber.module.css'


const ACT_CHANGE = 'CHANGE_PHONE'


const PhoneNumber = (props) => {

    const styleFromState = props.style
    let phoneRef = React.createRef()
 
    const style = {
        // backgroundColor: styleFromState.background,

        transitionProperty: styleFromState.transitionProperty,
        transitionDuration: styleFromState.transitionDuration,
        transitionDelay: styleFromState.transitionDelay,

        backgroundPosition: `center`,
        transform: `rotateZ(720deg)`,
        borderStyle: 'none',
        textColor: styleFromState.color,
        color: styleFromState.color,
        width: '130px',
        // marginRight: '50px'


    }

    const active = () => {
        let action = phoneActionCreator(ACT_CHANGE, phoneRef.current.childNodes[0].value)        
        props.dispatch(action)

    }

    return (
        <Input
            className={styleClass.phoneInput}
            style={style}
            placeholder="+7 800 700 03 94"
            ref={phoneRef}
            onChange={active}
            type="text"
            variant="standard"
            value={props.state.phoneNumber.value}
            width={props.state.phoneNumber.value.length}
            >

        </Input>

        // <input ref={phoneRef} style={style} onClick={() => {startActive()}} type="tel" value={props.state.phoneNumber.value}></input>
    )
}

export default PhoneNumber