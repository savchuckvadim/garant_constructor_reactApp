import themeStyle from './theme.module.css'
import '../../../App.css'
import { state } from '../../../state/state'
import { startApp } from '../../..'
import infostyle from '../../main/main.module.css'

// import sun from './img/broSunMoon/sun.svg'
// import moon from './img/broSunMoon/moon.svg'
// import header from '../header';
// import '../../../App.css'


function darkTheme(props){
    
    let div =   <div className={themeStyle.container__darktheme}>
                 <CreateRound  state={props.state}/>  
                </div>

    return (
      div
    )
    
}


// const color = document.getElementById('color');
// const growing = document.getElementById('growing');


// const header = document.querySelector('#header')
// const html = document.getElementsByTagName('html')[0]
// let body = document.getElementsByTagName('body')[0];
// const btn = document.querySelectorAll('.btns__complect')
// const exampleModal = document.querySelector('#modal-dialog')
// const result = document.querySelector('#result')
// const reset = document.querySelector('.btn__reset')


var styleOfRound = {
    backgroundColor : 'pink',
    // backgroundImage : sun,
    margin:` 0 auto`,
    padding: `0 auto`,
    borderWidth: `0.2px`,
   borderColor: `black`,
   width: `2rem`,
   height: `2rem`,
   borderRadius: `50%`,
   
   backgroundRepeat: `no-repeat`,
   backgroundPosition: `center`,
   transitionProperty: `background-image, background-color, text-color, color, transform`,
   transitionDuration: `5.5s`,
   transitionDelay:` 0.1s`,
    transform: `rotateZ(720deg)`
   
}
// var styleOfRound2 = {
//     backgroundColor : 'pink',
//     // backgroundImage : sun,
//     margin:` 0 auto`,
//     padding: `0 auto`,
//     borderWidth: `0.2px`,
//    borderColor: `black`,
//    width: `2rem`,
//    height: `2rem`,
//    borderRadius: `50%`,
   
//    backgroundRepeat: `no-repeat`,
//    backgroundPosition: `center`,
//    transitionProperty: `background-image, background-color, text-color, color, transform`,
//    transitionDuration: `5.5s`,
//    transitionDelay:` 0.1s`,
//     transform: `rotateZ(720deg)`
   
// }
let CreateRound = (state) => {   
 
    return(
        <button onClick={() => {changeTheme()}} id="round" className={`${themeStyle.round} ${themeStyle.round__img}`} ></button>
    )
    
}

var flag = false;
function changeTheme(){
  
    let element = document.getElementById('round')
    let infoblocks = document.getElementById('info')

    if (state.indexOfTheme === 0) {
        
        // round.className = themeStyle.round2 
        // element.classList.toggle(themeStyle.round__img, themeStyle.round__img2)
        // theme.backgroundColor = 'green'
      
        element.classList.remove(themeStyle.round__img)

        element.classList.add(themeStyle.round__img2)
       
   
        // element.setAttribute('style', 'styleOfRound2')
        
        // round.style = styleBackground;
        // body.style.color = "black";
        // exampleModal.style.color = "black";
        // result.style.color = "black";
        // changeColorOfClass(btn, 'black')
        // changeColorOfClass(reset, 'black')
        // styleOfRound.backgroundColor = 'yellow';
        // styleOfRound.backgroundImage = sun
        // themeStyle.round.transform = "rotateZ(3600deg)";

        // html.style.setProperty("--background", 'white')
        // html.style.setProperty("--textColorGreyP", "rgba(69, 74, 84, 1)")
        // html.style.setProperty("--textColorGreyH2", "rgba(37, 40, 45, 1)")
        // html.style.setProperty("--textColor", "black")


        state.indexOfTheme = 1
    // return(
    //     <button onClick={changeTheme} id="round" style={styleOfRound} className={themeStyle.round2} ></button>
    // )

    } else {
       
        // theme = {
        //     backgroundColor : 'orange'
        // }
        // theme.backgroundColor = 'orange'
        element.classList.remove(themeStyle.round__img2)

        element.classList.add(themeStyle.round__img)
        
        // element.classList.toggle(themeStyle.round__img, themeStyle.round__img2)
        // console.log( styleOfRound.backgroundColor )
        // element.style=styleOfRound
        // element.className = themeStyle.round
        // element.setAttribute('style', 'styleOfRound')
        // themeStyle.round.backgroundColor = "black";
        // styleOfRound.backgroundImage = moon;
        // styleOfRound.backgroundColor = 'orange';
        // themeStyle.round.transform = "rotateZ(-3600deg)";
        // themeStyle.round.borderColor = 'red'
        // body.style.color = "white";
        // changeColorOfClass(btn, 'white')
        // changeColorOfClass(reset, 'white')
        // exampleModal.style.color = "white";

        // result.style.color = "white";
        // result.style.borderStyle = 'doted'
       

        // html.style.setProperty("--background", 'rgba(37, 40, 45, 1)')
        // html.style.setProperty("--textColorGreyP", "white")
        // html.style.setProperty("--textColorGreyH2", "white")
        // html.style.setProperty("--textColor", "white")

        state.indexOfTheme = 0
        // return(
        //     <button onClick={changeTheme} id="round" style={styleOfRound} className={themeStyle.round} ></button>
        // )
    }
    startApp()
}

// function changeColorOfClass(html, color) {
//     if (html.length > 0) {
//         html.forEach((element) => {
//             element.style.color = color;
//         })
//     }
// }
// console.log('js dark theme');


export default darkTheme