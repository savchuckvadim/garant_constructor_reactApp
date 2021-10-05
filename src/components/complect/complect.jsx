import style from "./complect.module.css"
import ComplectButtons from "../buttons/buttons"

import { addToStorage } from "../../utils/utils"


import ODButtons from "../buttons/od.jsx"
import ResetButton from "../buttons/reset";
import ModalButton from "../buttons/modal/modal";
{/* todo cюда передать массив созданных инфоблоко - можно несколько массивов разбитых по типам 
    чтобы метод класса комплект мог брать и отмечать в них чеки в соответствии с индексами своего наполнения по умолчанию  */}


export class ComplectClass {
    constructor(obj, index, state) {
        // this.obj = obj
        this.name = obj.name;
        this.number = index;

        this.defaultWight = obj.weight;
        this.defaultFilling = obj.filling;


        this.currentFilling = this.defaultFilling;

        // this.fillingPaketsER = obj.fillingPaketsER 
        // this.fillingER = obj.fillingER
        this.fillingPaketLT = obj.fillingPaketLT
        // this.fillingLTblocks = obj.fillingLTblocks

        this.flagCheckedComplect = false;
        this.state = state;
        this.fillingInfoblocksIndexes = obj.fillingInfoblocksIndexes;
        this.fillingPaketsERIndexes = obj.fillingPaketsERIndexes;
        this.fillingEncyclopediasIndexes = obj.fillingEncyclopediasIndexes;
        this.fillingLTIndexes = obj.fillingLTIndexes;

        this.od = "1 Одновременный доступ"


    }
    odSaver() {
        if (this.state.currentComplect) {
            this.od = this.state.currentComplect.od;
        }
        return this.od
    }
    renderComplectsInfoblocks() {

        this.state.changeInfoblocksData()
        this.state.changePaketsErData()


    }

    returnName() {
        this.odSaver()
        let obj = {
            'name': this.name,
            'number': this.number,
            'defaultWight': this.defaultWight,
            'defaultFilling': this.defaultFilling,
            'currentFilling': this.currentFilling,
            'fillingInfoblocksIndexes': this.fillingInfoblocksIndexes,
            'fillingPaketsERIndexes': this.fillingPaketsERIndexes,
            'fillingEncyclopediasIndexes': this.fillingEncyclopediasIndexes,
            'fillingLTIndexes': this.fillingLTIndexes,
            'fillingPaketLT': this.fillingPaketLT,
            'od': this.od
        }
        addToStorage(obj, 'currentComplect')
        this.state.changeState()
    }

}


const Complect = (props) => {
    // console.log(props)
    let styleComplect = {
        backgroundColor: props.state.theme[ props.state.indexOfTheme].backgroundColor
    }
    return (

        <form style={styleComplect} id="" className={`form`}>
            <p className={style.complect__title} id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={style.container}>

                < ComplectButtons state={props.state} />
                < ODButtons state={props.state} />
                <ResetButton state={props.state} />
                <ModalButton state={props.state}/>
            </div>
        </form>
    )
}

export default Complect