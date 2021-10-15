import { Input } from "@material-ui/core"
import React from "react"
import styleClass from './offerPhoneNumber.module.css'


const PhoneNumber = (props) => {
    const TYPE = 'PHONE'
    const STYLE = 'STYLE';
    const actionCreaterGetStyle = () => {
        return {
          type: STYLE
        }
      }
      let action = actionCreaterGetStyle();
      const styleFromState = props.dispatch(action)
 
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
        backgroundColor: styleFromState.background,
        
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
        console.log(phoneRef.current.childNodes[0].value)
        props.dispatch({
            type: TYPE,
            fun: 'CHANGE_PHONE',
            value: phoneRef.current.childNodes[0].value
            
        })
    //    props.state.changeDataPhone(phoneRef.current.childNodes[0].value)
        
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
         value={props.state.phoneNumber.value}>
             
         </Input>

        // <input ref={phoneRef} style={style} onClick={() => {startActive()}} type="tel" value={props.state.phoneNumber.value}></input>
    )
}

export default PhoneNumber