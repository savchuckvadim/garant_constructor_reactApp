import style from "./complect.module.css"
import ComplectButtons from "../buttons/buttons"
import ODButtons from "../buttons/od.jsx"
import ResetButton from "../buttons/reset";







const Complect = (props) => {
    let styleComplect = {

    }
    return (

        <form style={styleComplect} id="" className={style.form}>
            <p className={style.complect__title} id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={style.container}>

                <ComplectButtons state={props.state} dispatch={props.dispatch} />
                <ODButtons state={props.state}  dispatch={props.dispatch} />
                <ResetButton state={props.state} dispatch={props.dispatch} /> 
                 {/* <ModalButton state={props.state} dispatch={props.dispatch} /> */}
            </div>
        </form>
    )
}

export default Complect