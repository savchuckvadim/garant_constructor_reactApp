
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import  "./buttons.css"
import Button from '@material-ui/core/Button';
import React from 'react';
import { createComplectActionCreator } from "../../redux/redusers/currentComplect-reducer.js"
import { changeColorOfButtonActionCreator } from "../../redux/redusers/allComplects-reducer"
import { changeBlocksFromNewComplectActionCreator } from "../../redux/redusers/checkBoxes-action";





const dinamicStyleForButtons = (borderColor, textColor, complectColor) => {

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



    }

    return styleOfButtons
}

// const createActiveStyle = (props, element) => {
//     if (props.state.currentComplect) {

//         if (element.name === props.state.currentComplect.name) {
//             return (
//                 {
//                     display: 'inline-block'
//                 }
//             )
//         } else {
//             return (
//                 {
//                     display: 'none'
//                 }
//             )
//         }

//     }
// }




const ComplectButtons = (props) => {


    const createComplect = (obj, index) => {
        debugger
        let actionNewComplect = createComplectActionCreator(obj, index)
        let actionColorOfButton = changeColorOfButtonActionCreator(index, props.state.theme.style[props.state.theme.indexOfTheme])
        let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
        props.dispatch(actionColorOfButton)
        props.dispatch(actionNewComplect)
        props.dispatch(actionBlocksFromNewComplect)
        debugger
        ////////////////////////TODO добавть еще один экшн тут - change CheckBoxes и передать туда obj вvtcnj сurrentComplect
    }
    const currentComplect = props.state.currentComplect
    let buttons = []


    props.state.allComplects.forEach((element, index) => {
        let theme = props.state.theme.style[props.state.theme.indexOfTheme]

        let complectColor
        let borderColor = element.color
        let textColor = theme.color
        if (currentComplect) {
            if (element.name === currentComplect.name) {
                complectColor = element.color
                borderColor = props.state.theme.style[props.state.theme.indexOfTheme].color
                textColor = props.state.theme.style[props.state.theme.indexOfTheme].textColor
            } else {
                complectColor = 'none'
            }
        } else {
            complectColor = 'none'
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
        // let activeStyle
        let style = dinamicStyleForButtons(borderColor, textColor, complectColor);
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btns__complect} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        if (element.tag === 'accountant') {
            // activeStyle = createActiveStyle(props, element)

            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__accountant" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div> </Button>

        } else if (element.tag === 'budget') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__budget" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'bigAccountant') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__bigAccountant" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div></Button>
        } else if (element.tag === 'bigBudget') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__bigBudget" number={index} type="button" >{element.name}<div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div></Button>
        } else if (element.tag === 'lawyer') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__lawyer" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse"src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'office') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__office" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse"src={ellipse(props.state, element)} alt=""></img></div> </Button>
        } else if (element.tag === 'company') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__company" number={index} type="button" >{element.name}<div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div></Button>
        } else if (element.tag === 'companyPro') {
            // activeStyle = createActiveStyle(props, element)
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className="btn__companyPro" number={index} type="button" >{element.name} <div className="ellipseWrapper"><img className="ellipse" src={ellipse(props.state, element)} alt=""></img></div> </Button>
        }
    })




    return (
        buttons
    )
}

export default ComplectButtons