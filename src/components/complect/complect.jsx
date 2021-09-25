import style from "./complect.module.css"
import ComplectButtons from "../buttons/buttons"
import { addToStorage } from "../../utils/utils"
import changeState from "../../state/state"

import { changeInfoblocksData } from "../infoblocks/infoblocks"
import { changePaketsErData } from "../infoblocks/er"
import ODButtons from "../buttons/od.jsx"
{/* todo cюда передать массив созданных инфоблоко - можно несколько массивов разбитых по типам 
    чтобы метод класса комплект мог брать и отмечать в них чеки в соответствии с индексами своего наполнения по умолчанию  */}


export class ComplectClass {
    constructor(obj, index, state) {
        this.name = obj.name;
        this.number = index;

        this.defaultWight = obj.weight;
        this.defaultFilling = obj.filling;


        this.currentFilling = this.defaultFilling;

        // this.fillingPaketsER = obj.fillingPaketsER 
        // this.fillingER = obj.fillingER
        // this.fillingPaketLT = obj.fillingPaketLT
        // this.fillingLTblocks = obj.fillingLTblocks

        this.flagCheckedComplect = false;
        this.state = state;
        this.fillingInfoblocksIndexes = obj.fillingInfoblocksIndexes;
        this.fillingPaketsERIndexes = obj.fillingPaketsERIndexes;
        this.fillingEncyclopediasIndexes = obj.fillingEncyclopediasIndexes;
        this.fillingLTIndexes = obj.fillingLTIndexes;


    }
    renderComplectsInfoblocks() {

        changeInfoblocksData(this.state)
        changePaketsErData(this.state)


    }

    returnName() {
        addToStorage(this, 'currentComplect')
        changeState(this.state)

    }
}


const Complect = (props) => {
    // console.log(props)
    return (

        <form id="" className={`form`}>
            <p id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={style.container}>

                < ComplectButtons state={props.state} />
                < ODButtons state={props.state} />
            </div>
        </form>
    )
}

export default Complect