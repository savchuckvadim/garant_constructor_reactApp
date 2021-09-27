
import Ellipse from "./img/Ellipse.svg"
// import style from "./button.css"
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import React from 'react';
import { ComplectClass } from "../complect/complect";
import "./button.css"
import { startApp } from "../../index";



const dinamicStyleForButtons = (borderColor, theme, complectColor) => {
    // state.allComplects.map((element) => {
    //     element.backgroundColor = theme.backgroundColor
    // })
    let styleOfButtons = {
        color: theme.color,
        backgroundColor: complectColor,
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

function createComplect(obj, index, state) {



    state.allComplects.forEach(element => {
        element.backgroundColor = state.theme[state.indexOfTheme].backgroundColor
    })
    // let style = dinamicStyleForButtons(state.allComplects[index].color, state.allComplects[index] );
    state.allComplects[index].backgroundColor = state.allComplects[index]
    // state.allComplects[index].color = state.theme[state.indexOfTheme].color
    let complect = new ComplectClass(obj, index, state);
    complect.odSaver()

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
        let theme = props.state.theme[props.state.indexOfTheme]

        let complectColor

       if(props.state.currentComplect){
        if (element.name === props.state.currentComplect.name) {
            complectColor = element.color
        } else {
            complectColor = theme.backgroundColor
        }
       }else{
        complectColor = theme.backgroundColor
       }


        let style = dinamicStyleForButtons(element.color, theme, complectColor);
        buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>

    })



    return (
        buttons

    )
}

export default ComplectButtons