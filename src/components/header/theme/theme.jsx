import './theme.css'
import '../../../App.css'
import React from 'react'



const DarkTheme = (props) => {
let themeRef = React.createRef()
const THEME = 'THEME'
    const CreateRound = () => {   
        return(
            <button ref={themeRef} onClick={changeTheme} id="round" className="round round__img" ></button>
        )   
    }

    const changeTheme = (e) => {

        let element = themeRef.current
        // props.dispatch({
        //     type: THEME,
        //     element: element,
        //     style1: 'round__img',
        //     style2: 'round__img2'

        // })
    
        if (props.state.indexOfTheme === 0) {
    
            element.classList.remove('round__img')
            element.classList.add('round__img2')
            props.state.indexOfTheme = 1
           
        } else {
           
            element.classList.remove('round__img2')
            element.classList.add('round__img1')
            props.state.indexOfTheme = 0
          
        }
       
        props.dispatch({
            type: 'START_APP'
        })
    }

    let div =   <div  className='container__darktheme'>
                 <CreateRound  state={props.state}/>  
                </div>

    return (
      div
    )
    
}


export default DarkTheme