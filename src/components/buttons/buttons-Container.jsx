
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import "./buttons.css"
import React from 'react';
import { createComplectActionCreator } from "../../redux/redusers/currentComplect-reducer.js"
import { changeColorOfButtonActionCreator } from "../../redux/redusers/allComplects-reducer"
import { changeBlocksFromNewComplectActionCreator } from "../../redux/redusers/checkBoxes-action";
import ComplectButtons from "./buttons";


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
        '@media(maxWidth: 950px)': {
            display: 'none'
        },



    }

    return styleOfButtons
}


const ComplectButtonsContainer = (props) => {

    let state = props.store.getState()
    let currentComplect = state.currentComplect
    let currentOd = state.od.currentOd
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
    let allComplects = state.allComplects

    const createComplect = (obj, index, ods, currentOd) => {

        let actionNewComplect = createComplectActionCreator(obj, index, ods, currentOd)
        let actionColorOfButton = changeColorOfButtonActionCreator(index, state.theme.style[state.theme.indexOfTheme])
        let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
        props.dispatch(actionColorOfButton)
        props.dispatch(actionNewComplect)
        props.dispatch(actionBlocksFromNewComplect)

    }
    const getEllipse = (currentComplect, complect) => {
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                return EllipseCheck
            } else {
                return Ellipse
            }
        } else {
            return Ellipse
        }
    }

    let buttons = []
    allComplects.forEach((complect, index) => {
        
        let ellipse = getEllipse(currentComplect, complect)
        let complectColor
        let borderColor = complect.color
        let textColor = currentTheme.color
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                complectColor = complect.color
                borderColor = currentTheme.color
                textColor = currentTheme.textColor
            } else {
                complectColor = 'none'
            }
        } else {
            complectColor = 'none'
        }
        let style = dinamicStyleForButtons(borderColor, textColor, complectColor);
       let result = {
            key: index,
            obj: complect,
            className: complect.className,
            name: complect.name,
            index: index,
            ods: state.od.names,
            currentOd: currentOd,
            ellipse: ellipse,
            style: style,
            createComplect: createComplect,


        }
        buttons.push(result)
    })





    return (
        <ComplectButtons buttons={buttons} />
    )
}

export default ComplectButtonsContainer