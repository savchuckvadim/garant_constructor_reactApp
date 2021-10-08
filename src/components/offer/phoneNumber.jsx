import { Input } from "@material-ui/core"
import React from "react"


const PhoneNumber = (props) => {
    props.state.changePhoneFromLocal()
    
    let phoneRef = React.createRef()
    const style = {
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        borderStyle: 'none',
        textColor: props.state.theme[props.state.indexOfTheme].color,
        color: props.state.theme[props.state.indexOfTheme].color
    }

    const active = () => {
        console.log(phoneRef.current.childNodes[0].value)
       props.state.changeDataPhone(phoneRef.current.childNodes[0].value)
        
    }

    const save = () => {
      
        props.state.startApp()
    }
  
    return (
        <Input style={style} placeholder="+7 777 777 77 77"  ref={phoneRef} onChange={active}  type="text"  variant="standard" value={props.state.phoneNumber.value}></Input>

        // <input ref={phoneRef} style={style} onClick={() => {startActive()}} type="tel" value={props.state.phoneNumber.value}></input>
    )
}

export default PhoneNumber