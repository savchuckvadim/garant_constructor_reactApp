import style from "./main.module.css"
import AllInfoblocks from "../infoblocks/allInfoblocks"
import Complect from "../complect/complect"
import ResultContainer from "../result/resultContainer"





const Main = (props) => {
    
   let state = props.store.getState()

    const result = () => {
        if(state.currentComplect){
            return (
                <div style={styleResult} className={style.result__container}>
                    <ResultContainer store={props.store} state={state} dispatch={props.dispatch} />
                </div>
            )
        }
    }

    let stMain = {
        // backgroundColor: props.style.background,
        // transitionProperty: props.style.transitionProperty,
        // transitionDuration: props.style.transitionDuration,
        // transitionDelay: props.style.transitionDelay,
        // color: props.style.color,
      

    }
    let styleResult = {
        // backgroundColor: props.style.background,
        color: props.style.color
    }

    return (
        <div style={stMain}>

            <div className={style.main}>

                <div className={style.form__complect}>

                    <Complect store={props.store} dispatch={props.dispatch} />

                </div>

                <div className={style.infoblocks}>
                    <AllInfoblocks store={props.store}  state={state} dispatch={props.store.dispatch} />

                </div>

                {/* <div style={styleResult} className={style.result__container}>
                    <Result state={props.state} dispatch={props.dispatch} />
                </div> */}

                {result()}

            </div>

        </div>
    )
}

export default Main