import style from "./complect.module.css"
import ComplectButtonsContainer from "../buttons/buttons-Container";
import ODButtonsContainer from "../buttons/od-Container";
import ResetButtonContainer from "../buttons/reset-Container";







const Complect = (props) => {
    let styleComplect = {

    }
    return (

        <form style={styleComplect} id="" className={style.form}>
            <p className={style.complect__title} id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={style.container}>

                <ComplectButtonsContainer />
                <ODButtonsContainer store={props.store} dispatch={props.dispatch} />
                <ResetButtonContainer store={props.store}  dispatch={props.dispatch} /> 
                 {/* <ModalButton state={props.state} dispatch={props.dispatch} /> */}
            </div>
        </form>
    )
}

export default Complect