import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/infoblocks"
import Result from "../result/result"
import Complect from "../complect/complect"
import { width } from "@material-ui/system"

// import { state } from "../../App"
const STYLE = 'STYLE'

const Main = (props) => {
    
    const actionCreaterGetStyle = () => {
        return {
            type: STYLE
        }
    }
    let action = actionCreaterGetStyle();
    const styleFromState = props.dispatch(action)
    // console.log(props.state)
    let stMain = {
        backgroundColor: styleFromState.backgroundColor,
        color: styleFromState.color,
        transitionProperty: styleFromState.transitionProperty,
        transitionDuration: styleFromState.transitionDuration,
        transitionDelay: styleFromState.transitionDelay,

    }
    let styleResult = {
        backgroundColor: styleFromState.backgroundColor,
        color: styleFromState.color,
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