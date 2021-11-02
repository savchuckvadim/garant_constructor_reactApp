import style from "./complect.module.css"
import ComplectButtons from "../buttons/buttons"

import { addToStorage } from "../../utils/utils"


import ODButtons from "../buttons/od.jsx"
import ResetButton from "../buttons/reset";
import ModalButton from "../buttons/modal/modal";
import { padding } from "@material-ui/system";
{/* todo cюда передать массив созданных инфоблоко - можно несколько массивов разбитых по типам 
    чтобы метод класса комплект мог брать и отмечать в них чеки в соответствии с индексами своего наполнения по умолчанию  */}





const Complect = (props) => {
    // console.log(props)
    let styleComplect = {
        // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,

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