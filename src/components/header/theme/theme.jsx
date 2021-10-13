import themeStyle from './theme.module.css'
import '../../../App.css'



const DarkTheme = (props) => {

const THEME = 'THEME'
    const CreateRound = () => {   
        return(
            <button onClick={changeTheme} id="round" className={`${themeStyle.round} ${themeStyle.round__img}`} ></button>
        )   
    }

    const changeTheme = () => {
  
        let element = document.getElementById('round')
        props.dispatch({
            type: THEME,
            element: element,
            style1: themeStyle.round__img,
            style2: themeStyle.round__img2

        })
    
        // if (state.indexOfTheme === 0) {
    
        //     element.classList.remove(themeStyle.round__img)
        //     element.classList.add(themeStyle.round__img2)
        //     state.indexOfTheme = 1
     
        // } else {
           
        //     element.classList.remove(themeStyle.round__img2)
        //     element.classList.add(themeStyle.round__img)
        //     state.indexOfTheme = 0
          
        // }
        // startApp()
    }

    let div =   <div className={themeStyle.container__darktheme}>
                 <CreateRound  state={props.state}/>  
                </div>

    return (
      div
    )
    
}


export default DarkTheme