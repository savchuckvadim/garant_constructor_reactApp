
import { Button} from "@material-ui/core"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import InputText from "../main/textInput"
import ItemResult from "./items-result"

import style from "./result.module.css"

const Result = (props) => {

    let result = props.state.result.currentResult
    let containerStyle = {
       
        borderColor: 'rgb(160, 179, 179)',
        border: result.border,
        
    }
    if (props.state.currentComplect) {


        let toolTipText = 'Legal Tech'

        let styleResult = props.state.currentComplect ? result.styleResult : null

        let lt = result.weightLt
    

        let styleLt = {
            display: props.state.legalTech.display
        }


        toolTipText = <div className={style.information}>
            <pre>Малый пакет Legal Tech   - 2 сервиса </pre>
            <pre>Средний пакет Legal Tech - 5 сервисов </pre>
            <pre>Большой пакет Legal Tech - 11 сервиса </pre>
            <p> Сейчас набрано - <span className={style.spanResult}>{lt}</span> </p>

        </div>

        let width = props.state.currentComplect.name.length * 8.5
        let inputText = <InputText
            state={props.state}
            dispatch={props.dispatch}
            type="nameOfComplect"
            autofocus={props.state.currentComplect.currentStatusInputComplectName}
            value={props.state.currentComplect.name}
            placeholder='Гарант'
            width={width}
            typeOfAction="INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT"

        />

        return (
            <div id="" style={containerStyle} className={style.result__container}>
                <div className={style.information}>
                    <ItemResult toolTipText={toolTipText} state={props.state} inputText={inputText} id={props.state.result} textLt={style.textLt} styleLt={styleLt} styleText={style.text} styleSpanResult={style.spanResult} />
      
                    <p className={style.text}> <NavLink className={style.text} as={Link} to="/description"> Описание комплекта </NavLink></p>
                </div>
                <NavLink className="result__text btn btn-primary result__btn" style={styleResult} as={Button} to="/offer">Выбрать комплект</NavLink>

            </div>
        )
    } else {
        return (
            <div id="" className={style.result__container}></div>
        )
    }
}

export default Result