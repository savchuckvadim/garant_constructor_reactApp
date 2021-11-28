import { Input } from "@material-ui/core"
import React from "react"
import styleClass from './phoneNumber.module.css'




const PhoneNumber = (props) => {
    let phoneRef = React.createRef()
   

    return (
        <Input
        key={'phoneNumberInputText'}
        name={'phoneNumberInputText'}

            className={styleClass.phoneInput}
            style={props.style}
            placeholder="+7 800 700 03 94"
            ref={phoneRef}
            onChange={() => {props.changePhoneNumber(phoneRef.current.childNodes[0].value)}}
            type="text"
            variant="standard"
            value={props.state.phoneNumber.value}
            width={props.state.phoneNumber.value.length}
            >

        </Input>

    )
}

export default PhoneNumber