import './theme.css'
import '../../../App.css'
import React from 'react'
import { themeActionCreator } from '../../../redux/redusers/theme-reducer'



const DarkTheme = (props) => {
let themeRef = React.createRef()


    const CreateRound = () => {   
        return(
            <button ref={themeRef} onClick={changeTheme} id="round" className={props.state.classOfTheme} ></button>
        )   
    }

    const changeTheme = (e) => {

        let element = themeRef.current
        let mainClass = props.mainClass.current
        let actionChangeTheme = themeActionCreator(element, mainClass)
        props.dispatch(actionChangeTheme)
    
        // if (props.state.indexOfTheme === 0) {
    
        //     element.classList.remove('round__img')
        //     element.classList.add('round__img2')
        //     props.state.indexOfTheme = 1
           
        // } else {
           
        //     element.classList.remove('round__img2')
        //     element.classList.add('round__img1')
        //     props.state.indexOfTheme = 0
          
        // }
       
        // props.dispatch({
        //     type: 'START_APP'
        // })
    }

    let div =   <div  className='container__darktheme'>
                 <CreateRound  state={props.state}/>  
                </div>

    return (
      div
    )
    
}


export default DarkTheme