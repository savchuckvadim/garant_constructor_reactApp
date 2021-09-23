import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/infoblocks"
import Result from "../result/result"
import Complect from "../complect/complect"
// import { state } from "../../App"


const Main = (props) => {
    // console.log(props.state)
    return (
        <div>
            <div className={style.main}>

                <div className={style.form__complect}>
                    
                    <Complect state={props.state} />
                </div>

                <div className={style.infoblocks}>
                    <AllInfoblocks state={props.state} />

                </div>
               
                <div className={style.result__container}>
                    <Result state={props.state} />
                </div>

            </div>
        </div>
    )
}

export default Main