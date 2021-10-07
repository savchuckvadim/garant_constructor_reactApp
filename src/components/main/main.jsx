import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/infoblocks"
import Result from "../result/result"
import Complect from "../complect/complect"
import { width } from "@material-ui/system"

// import { state } from "../../App"


const Main = (props) => {
  
    // console.log(props.state)
    let stMain = {
        transitionProperty: `background-image, background-color, text-color, color, transform`,
        transitionDuration: `3.5s`,
        transitionDelay: ` 0.5s`,
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        color: props.state.theme[props.state.indexOfTheme].color

    }
    let styleResult = {
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        color: props.state.theme[props.state.indexOfTheme].color,
        // width: '100%'
    }

    return (
        <div style={stMain}>

            <div className={style.main}>

                <div className={style.form__complect}>

                    <Complect state={props.state} />

                </div>

                <div className={style.infoblocks}>
                    <AllInfoblocks state={props.state} />

                </div>

                <div style={styleResult} className={style.result__container}>
                    <Result state={props.state} />
                </div>

            </div>
           
        </div>
    )
}

export default Main