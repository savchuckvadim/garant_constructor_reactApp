
import Ellipse from "./img/Ellipse.svg"
// import style from "./button.css"
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { ComplectClass } from "../complect/complect";
import "./button.css"
import { startApp } from "../..";

function createComplect(obj, index, state){

    let complect = new ComplectClass(obj, index, state);
    complect.returnName();
    complect.renderComplectsInfoblocks()
    startApp()
}
const ComplectButtons = (props) => {
    let buttons = []
    
    // allComplects.forEach((element, index) => {
    //     buttons[index] = <button type="button" className={`btn btns__complect  btn__${index}`}><label for="complect0"
    //         className="complect__name">{element.name}</label> <img src={Ellipse} alt=""></img> </button>
           
    // })
    props.state.allComplects.forEach((element, index) => {
        buttons[index] = <Button onClick={() => {return createComplect(element, index, props.state)}} number={index} type="button" className={`btn btn-light btns__complect  btn__${index}`}>{element.name} <img src={Ellipse} alt=""></img> </Button>
        
    })
    return (
        buttons
      
    )
}

export default ComplectButtons