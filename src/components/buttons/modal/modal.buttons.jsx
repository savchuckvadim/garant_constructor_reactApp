

import Ellipse from "../img/Ellipse.svg"
import styleBtn from "../button.module.css"
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import React from 'react';
import { createComplectActionCreator } from "../../../state/redusers/currentComplect-reducer.js"


const TYPE = 'COMPLECT'
// const CURRENT_COMPLECT = 'CURRENT_COMPLECT'


// const actionCreaterCurrentComplect = {
//   type: CURRENT_COMPLECT,
// }
// const actionCurrent = actionCreaterCurrentComplect

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
        border: '0px solid',
        borderColor: borderColor,
        // display: 'none'
        '@media(maxWidth: 950px)': {
            display: 'none'
        },
        // display: 'none'


    }

    return styleOfButtons
}

// function createComplect(obj, index, state) {



//     state.allComplects.forEach(element => {
//         element.backgroundColor = state.theme[state.indexOfTheme].backgroundColor
//     })
//     // let style = dinamicStyleForButtons(state.allComplects[index].color, state.allComplects[index] );
//     state.allComplects[index].backgroundColor = state.allComplects[index]
//     // state.allComplects[index].color = state.theme[state.indexOfTheme].color
//     let complect = new ComplectClass(obj, index, state);
//     complect.odSaver()

//     complect.returnName();
//     complect.renderComplectsInfoblocks()

//     startApp(state)
// }


const ComplectModalButtons = (props) => {
    const currentComplect = props.state.currentComplect
    //  props.dispatch(actionCurrent)

    let buttons = []
    function createComplect(obj, index) {
        let action = createComplectActionCreator(obj, index, props.state.od.names, props.state)

        props.dispatch(action)

   
    }
    // allComplects.forEach((element, index) => {
    //     buttons[index] = <button type="button" className={`btn btns__complect  btn__${index}`}><label for="complect0"
    //         className="complect__name">{element.name}</label> <img src={Ellipse} alt=""></img> </button>

    // })

    props.state.allComplects.forEach((element, index) => {
        let theme = props.state.theme.style[props.state.theme.indexOfTheme]

        let complectColor
        let borderColor = element.color
        let textColor = theme.color
        if (currentComplect) {
            if (element.name === currentComplect.name) {
                complectColor = element.color
                borderColor = theme.color
                textColor = theme.textColor
            } else {
                complectColor = theme.backgroundColor
            }
        } else {
            complectColor = theme.backgroundColor
        }


        let style = dinamicStyleForButtons(borderColor, textColor, complectColor);
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        // buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index, props.state) }} className={styleBtn.btns__complect} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        if (element.tag === 'accountant') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__accountantModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
            
        }else  if (element.tag === 'budget') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__budgetModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'bigAccountant') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__bigAccountantModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'bigBudget') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__bigBudgetModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'lawyer') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__lawyerModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'office') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__officeModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'company') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__companyModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }else if (element.tag === 'companyPro') {
            buttons[index] = <Button style={style} onClick={() => { return createComplect(element, index) }} className={styleBtn.btn__companyProModal} number={index} type="button" >{element.name} <img src={Ellipse} alt=""></img> </Button>
        }
    })




    return (
        buttons
    )
}

export default ComplectModalButtons