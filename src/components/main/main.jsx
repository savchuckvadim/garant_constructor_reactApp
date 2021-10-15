import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/infoblocks"
import Result from "../result/result"
import Complect from "../complect/complect"
import { width } from "@material-ui/system"

// import { state } from "../../App"


const Main = (props) => {
    
   
    // console.log(props.state)
    let stMain = {
        backgroundColor: props.style.background,
        transitionProperty: props.style.transitionProperty,
        transitionDuration: props.style.transitionDuration,
        transitionDelay: props.style.transitionDelay,
        color: props.style.color,
      

    }
    let styleResult = {
        backgroundColor: props.style.background,
        color: props.style.color
    }

    return (
        <div style={stMain}>

            <div className={style.main}>

                <div className={style.form__complect}>

                    <Complect state={props.state} dispatch={props.dispatch} />

                </div>

                <div className={style.infoblocks}>
                    <AllInfoblocks state={props.state} dispatch={props.dispatch} />

                </div>

                <div style={styleResult} className={style.result__container}>
                    <Result state={props.state} dispatch={props.dispatch} />
                </div>

            </div>

        </div>
    )
}

export default Main