import './theme.css'
import '../../../App.css'
import React from 'react'
import { themeActionCreator } from '../../../redux/redusers/theme-reducer'
import Theme from './theme'



const ThemeContainer = (props) => {

    let classOfTheme = props.state.theme.style[props.state.theme.indexOfTheme].classOfTheme



    const changeTheme = (element) => {

        let mainClass = props.mainClass.current
        let actionChangeTheme = themeActionCreator(element, mainClass)
        props.dispatch(actionChangeTheme)

    }



    return (

        <Theme state={props.state} classOfTheme={classOfTheme} changeTheme={changeTheme} />

    )

}


export default ThemeContainer