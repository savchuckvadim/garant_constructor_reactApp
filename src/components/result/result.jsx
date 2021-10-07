
import { Button, Tooltip } from "@material-ui/core"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import style from "./result.module.css"



const Result = (props) => {
    let toolTipText = 'Legal Tech'

    let styleResult
    let styleBack
    let name
    let weight
    let od = props.state.currentOd
    let price = ' 0. 00'
 
    let ltIncluded = props.state.legalTech.ltIncluded
    let lt = props.state.legalTech.weightLt
    // let nameOfltIncluded = ''

    let nameOflt = props.state.legalTech.nameOflt
    let priceOfLt = props.state.legalTech.priceOfLt

    let totalPrice = 0;

    let styleLt = {
        display: props.state.legalTech.display
    }
    // const ltWeight = () => {
       
    //     props.state.legalTech.value.forEach((element, index) => {
    //         if (props.state.currentComplect.fillingPaketLT.includes(index)) {
    //             if (element.checked) { lt = lt + element.weight }

    //         } else if (props.state.currentComplect.fillingLTIndexes.includes(index)) {
    //             element.checked ? ltIncluded++ : ltIncluded = ltIncluded - 0

    //         }

    //         lt > 0 ? props.state.legalTech.display = 'flex' : props.state.legalTech.display = 'none'

    //         if (lt === 2) {
    //             nameOflt = `Малый Пакет`
    //             priceOfLt = props.state.pricesOfLt[0]
    //         } else if (lt === 5) {
    //             nameOflt = `Средний Пакет `
    //             priceOfLt = props.state.pricesOfLt[1]
    //         } else if (lt === 10) {
    //             nameOflt = `Большой Пакет `
    //             priceOfLt = props.state.pricesOfLt[2]
    //         }
    //         if (lt === 1 || lt > 2 && lt < 5 || lt > 5 && lt < 11) {
    //             nameOflt = `LT собран неверно`
    //         }


    //     })

    // }
    if (props.state.currentComplect) {


        styleResult = {
            backgroundColor: props.state.allComplects[props.state.currentComplect.number].color,
            color : 'white',
            textDecoration: 'none'
        }
        styleBack = {
            backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,

        }

        weight = props.state.weightForResult();
        if (props.state.currentComplect) {
            name = props.state.currentComplect.name
        }
        od = props.state.currentComplect.od.substr(0, 2)
        price = props.state.price()


        // ltWeight()
        totalPrice = price + priceOfLt

        toolTipText = <div className={style.information}>
            <pre>Малый пакет Legal Tech   - 2 сервиса </pre>
            <pre>Средний пакет Legal Tech - 5 сервисов </pre>
            <pre>Большой пакет Legal Tech - 11 сервиса </pre>
            <p> Сейчас набрано - <span className={style.spanResult}>{lt}</span> </p>

        </div>


    }

    return (
        <div id="result" className={style.result__container}>
            <div className={style.information}>
                <p id="complect__name" className={style.text}><span>Комплект</span><span className={style.spanResult}>{name}</span></p>
                <p id="blocksWeight" className={style.text}><span>Вес</span><span className={style.spanResult}>{weight}</span></p>
                <p id="pod" className={style.text}>Количество доступов<span className={style.spanResult}>{od}</span></p>



                <p id="complect__lt" className={style.text}>{`Legal Tech в комплекте `}<span className={style.spanResult}>{ltIncluded}</span> </p>
                <Tooltip title={toolTipText}>
                    <p id="complect__lt" style={styleLt} className={style.text}><span className={style.spanResult}>{`Legal Tech `}</span><span className={style.spanResult}>{nameOflt}</span></p>

                </Tooltip>
                <p id="complect__lt" style={styleLt} className={style.text}><span className={style.spanResult}>{`Вес LT`}</span><span className={style.spanResult}>{lt}</span></p>




                <p id="complect__price" className={style.text}>Стоимость <span className={style.spanResult}>{` ${price} р`} </span></p>


                <p id="complect__lt" style={styleLt} className={style.text}><span className={style.spanResult}>{`Стоимость LT`}</span><span className={style.spanResult}>{priceOfLt}</span></p>
                
                
                
                <p id="complect__price" style={styleLt} className={style.text}>Общая Стоимость  <span className={style.spanResult}>{` ${totalPrice} р`} </span></p>
                <p className={style.text}> <NavLink className={style.text} as={Link} to="/description"> Описание комплекта </NavLink></p>
            </div>
            <NavLink className="result__text btn btn-primary result__btn" style={styleResult} as={Button} to="/offer">Выбрать комплект</NavLink>

        </div>
    )
}

export default Result