import './theme.css'
import '../../../App.css'
import React from 'react'



const Theme = (props) => {
    let themeRef = React.createRef()
    let element = themeRef.current



    return (
        <div className='container__darktheme'>
            <button ref={themeRef} onClick={() => {props.changeTheme(element)}} id="round" className={props.classOfTheme} ></button>

        </div>
    )

}


export default Theme