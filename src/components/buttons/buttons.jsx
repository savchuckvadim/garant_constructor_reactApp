
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseBlack from "./img/uncheckedBlack.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import EllipseCheckBlack from "./img/checkedBlack.svg"
import styleBtn from "./button.module.css"
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import React from 'react';
import { ComplectClass } from "../complect/complect";

import { startApp } from "../../index";




const dinamicStyleForButtons = (borderColor, textColor, complectColor) => {
    // state.allComplects.map((element) => {
    //     element.backgroundColor = theme.backgroundColor
    // })
    let styleOfButtons = {
        color: textColor,
        backgroundColor: complectColor,
        height: '54px',
        // display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        transitionProperty: 'background-color, transform, color',
        transitionDuration: '5.5s',
        transitionDelay: '0.0s',
        border: '2px solid',
        borderColor: borderColor,
        // display: 'none'
        '@media(max-width: 950px)': {
            display: 'none'
        },

        // display: 'none'


    }

    return styleOfButtons
}
// const activeStyle = {
//     display: 'none'
// }
const createActiveStyle = (props, element) => {
    if (props.state.currentComplect) {

        if (element.name === props.state.currentComplect.name) {
            return (
                {
                    display: 'inline-block'
                }
            )
        } else {
            return (
                {
                    display: 'none'
                }
            )
        }

    }
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
        let borderColor = element.color
        let textColor = theme.color
        if (props.state.currentComplect) {
            if (element.name === props.state.currentComplect.name) {
                complectColor = element.color
                borderColor = props.state.theme[props.state.indexOfTheme].color
                textColor = props.state.theme[props.state.indexOfTheme].textColor
            } else {
                complectColor = theme.backgroundColor
            }
        } else {
            complectColor = theme.backgroundColor
        }
        let ellipse = (state, element) => {
            if (state.currentComplect) {
                if (element.name === state.currentComplect.name) {    
                        return EllipseCheck
                } else {  
                        return Ellipse
                }
            } else {
                    return Ellipse
            }
        }
        let activeStyle
        let style = dinamicStyleForButtons(borderColor, textColor, complectColor);
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btns__complect} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        if (element.tag === 'accountant') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__accountant} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element) } alt=""></img></div> </Button>

        } else if (element.tag === 'budget') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__budget} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'bigAccountant') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__bigAccountant} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element) } alt=""></img></div></Button>
        } else if (element.tag === 'bigBudget') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__bigBudget} number={index} type="button" >{element.name}<div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div></Button>
        } else if (element.tag === 'lawyer') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__lawyer} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'office') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__office} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'company') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__company} number={index} type="button" >{element.name}<div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div></Button>
        } else if (element.tag === 'companyPro') {
            activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btn__companyPro} number={index} type="button" >{element.name} <div className={styleBtn.ellipseWrapper}><img className={styleBtn.ellipse} src={ellipse(props.state, element)} alt=""></img></div> </Button>
        }
    })




    return (
        buttons
    )
}

export default ComplectButtons