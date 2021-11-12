import React from "react"
import { phoneActionCreator } from "../../redux/redusers/phoneNumber-reducer"
import PhoneNumber from './phoneNumber';


const ACT_CHANGE = 'CHANGE_PHONE'


const PhoneNumberContainer = (props) => {

    const styleFromState = props.style


    const style = {
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


    const changePhoneNumber = (ref) => {
        let action = phoneActionCreator(ACT_CHANGE, ref)
        props.dispatch(action)

    }

    return (
        <PhoneNumber state={props.state} changePhoneNumber={changePhoneNumber} style={style} />
    )
}

export default PhoneNumberContainer