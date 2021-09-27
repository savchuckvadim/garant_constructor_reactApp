
import { NavLink } from "react-router-dom"
import style from "./result.module.css"



const Result = (props) => {
    let styleResult
    let name
    let weight
    let od = props.state.currentOd
    let price = ' 0. 00'
    
   if(props.state.currentComplect){
    styleResult = {
        backgroundColor : props.state.allComplects[props.state.currentComplect.number].color
    }
    
    weight = props.state.weightForResult();
    if (props.state.currentComplect) {
        name = props.state.currentComplect.name

    }
    
    od = props.state.currentComplect.od.substr(0, 2)
    price = props.state.price()
   }

    return (
        <div id="result" className={style.result__container}>
            <div className={style.information}>
                <p id="complect__name" className={style.text}><span>Комплект</span><span className={style.spanResult}>{name}</span></p>
                <p id="blocksWeight" className={style.text}><span>Вес</span><span className={style.spanResult}>{weight}</span></p>
                <p id="pod" className={style.text}>Количество доступов<span className={style.spanResult}>{od}</span></p>
                <p id="complect__lt" className={style.text}>Legal Tech малый пакет </p>
                <p id="complect__price" className={style.text}>Стоимость <span className={style.spanResult}>{` ${price} р`} </span></p>
                <p className={style.text}> <NavLink className={style.text} to="/description"> Описание комплекта </NavLink></p>
            </div>
            <button type="button" style={styleResult} className="result__text btn btn-primary result__btn">Выбрать комплект</button>
        </div>
    )
}

export default Result