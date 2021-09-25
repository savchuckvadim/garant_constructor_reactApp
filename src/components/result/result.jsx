
import { NavLink } from "react-router-dom"
import style from "./result.module.css"
import allInfoblocksData from "../../data/dataInfoblocks"
import allEnciclopedis from "../../data/dataER"


const weightForResult = () => {
    let info = 0;
    let er = 0;
    let totalweight = 0;

    allInfoblocksData.forEach(element => {
        element.value.forEach(elem => {
            if (elem.checked === true) {
                info += elem.weight
            }
        })
    })

    allEnciclopedis.forEach(element => {
        element.value.forEach(elem => {

            if (elem.checked === true) {
                er += elem.weight
            }
        })
    })
    console.log(`вес инфоблоков ${info}`)
    console.log(`вес er ${er}`)
    totalweight = info + er
    return totalweight
}

const Result = (props) => {
    let name
    let weight = weightForResult();
    if (props.state.currentComplect) {
        name = props.state.currentComplect.name
       
    }

    
    return (
        <div id="result" className={style.result__container}>
            <div className={style.information}>
                <p id="complect__name" className={style.text}><span>Комплект</span><span className={style.spanResult}>{name}</span></p>
                <p id="blocksWeight" className={style.text}><span>Вес</span><span className={style.spanResult}>{weight}</span></p>
                <p id="pod" className={style.text}>количество одновременных доступов 10 </p>
                <p id="complect__lt" className={style.text}>Legal Tech малый пакет </p>
                <p id="complect__price" className={style.text}>Стоимость 6 780 р </p>
                <p className={style.text}> <NavLink className={style.text} to="/description"> Описание комплекта </NavLink></p>
            </div>
            <button type="button" className="result__text btn btn-primary result__btn">Выбрать комплект</button>
        </div>
    )
}

export default Result