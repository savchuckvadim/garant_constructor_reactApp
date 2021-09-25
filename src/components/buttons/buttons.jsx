
import Ellipse from "./img/Ellipse.svg"
// import style from "./button.css"
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { ComplectClass } from "../complect/complect";
import "./button.css"
import { startApp } from "../../index";

const dinamicStyleForButtons = (borderColor) => {

    let styleOfButtons = {
        color : 'black',
        height: '54px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        transitionProperty: 'background-color, transform, color',
        transitionDuration: '0.5s',
        transitionDelay: '0.0s',
        border: '2px solid',
        borderColor: borderColor
    
    }

    return styleOfButtons
}

function createComplect(obj, index, state){

    let complect = new ComplectClass(obj, index, state);
    complect.returnName();
    complect.renderComplectsInfoblocks()
    startApp(state)
}


const ComplectButtons = (props) => {
    let buttons = []
   
    // allComplects.forEach((element, index) => {
    //     buttons[index] = <button type="button" className={`btn btns__complect  btn__${index}`}><label for="complect0"
    //         className="complect__name">{element.name}</label> <img src={Ellipse} alt=""></img> </button>
           
    // })
    props.state.allComplects.forEach((element, index) => {
        let style = dinamicStyleForButtons(element.color);
        buttons[index] = <Button  style={style} onClick={() => {return createComplect(element, index, props.state)}} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        
    })
    return (
        buttons
      
    )
}

export default ComplectButtons