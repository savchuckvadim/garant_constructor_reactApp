import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/infoblocks"
import Result from "../result/result"
import Complect from "../complect/complect"
import { Fade } from "@material-ui/core"
// import { state } from "../../App"


const Main = (props) => {
    
    // console.log(props.state)
    let stMain = {
        backgroundColor : props.state.theme[props.state.indexOfTheme].backgroundColor,
        color : props.state.theme[props.state.indexOfTheme].color,

        
        transitionProperty: `background-image, background-color, text-color, color, transform`,
        transitionDuration: `3.5s`,
        transitionDelay:` 0.5s`,
        //  transform: `rotateZ(720deg)`,


        //  display: 'grid',
        //  position: 'relative',
        //  margin: 0,
        //  gridTemplateColumns: '3fr 1fr',
        //  gridTemplateRows: '1fr 10fr',
       
        //  gridGap: '24px',
        //  gridAutoRows: 'minmax(12px, auto)',
    }
    return (
        <div className={style.main__wrapper} style={stMain}>
            
            <div  className={style.main}>

                <div className={style.form__complect}>
                    
                    <Complect state={props.state} />
                </div>

                <div  className={style.infoblocks}>
                    <AllInfoblocks state={props.state} />

                </div>
               
                <div  className={style.result__container}>
                    <Result state={props.state} />
                </div>

            </div>
            
        </div>
    )
}

export default Main