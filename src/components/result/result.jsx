
import { Button, Tooltip } from "@material-ui/core"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import InputText from "../main/textInput"
import style from "./result.module.css"
import styleOffer from "./resultOffer.module.css"

const TYPE = 'RESULT'
const Result = (props) => {

    if (props.state.currentComplect) {

        let result = props.dispatch({
            type: TYPE
        })

        let toolTipText = 'Legal Tech'

        let styleResult = props.state.currentComplect ? result.styleResult : null

        let name = result.name
        let weight = result.weight
        let od = result.od
        let price = result.price

        let ltIncluded = result.ltIncluded
        let lt = result.weightLt
        // let nameOfltIncluded = ''

        let nameOflt = result.nameOflt
        let priceOfLt = result.priceOfLt

        let totalPrice = result.totalPrice;

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
        return (
            <div id="" className={style.result__container}>
                <div className={style.information}>
                    <p id="complect__name" className={style.text}><span>Комплект</span><span className={style.spanResult}>
                        <InputText
                            state={props.state}
                            dispatch={props.dispatch}
                            type="nameOfComplect"
                            autofocus={props.state.currentStatusInputComplectName}
                            value={props.state.currentComplect.name}
                            placeholder='Гарант'
                            width={width}
                            typeOfAction="INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT"

                        />

                    </span></p>

                    <p id="blocksWeight" className={style.text}><span>Вес</span><span className={style.spanResult}>{weight}</span></p>
                    <p id="pod" className={style.text}>Количество доступов<span className={style.spanResult}>{od}</span></p>



                    <p id="complect__lt" className={style.text}>{`Legal Tech в комплекте `}<span className={style.spanResult}>{ltIncluded}</span> </p>
                    <Tooltip title={toolTipText}>
                        <p id="complect__lt" style={styleLt} className={style.textLt}><span className={style.spanResult}>{`Legal Tech `}</span><span className={style.spanResult}>{nameOflt}</span></p>

                    </Tooltip>
                    <p id="complect__lt" style={styleLt} className={style.textLt}><span className={style.spanResult}>{`Вес LT`}</span><span className={style.spanResult}>{lt}</span></p>




                    <p id="complect__price" className={style.text}>Стоимость <span className={style.spanResult}>{` ${price} р`} </span></p>


                    <p id="complect__lt" style={styleLt} className={style.textLt}><span className={style.spanResult}>{`Стоимость LT`}</span><span className={style.spanResult}>{priceOfLt}</span></p>



                    <p id="complect__price" style={styleLt} className={style.text}>Общая Стоимость  <span className={style.spanResult}>{` ${totalPrice} р`} </span></p>
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