import style from "./complect.module.css"
import ComplectButtons from "../buttons/buttons"

import { addToStorage } from "../../utils/utils"


import ODButtons from "../buttons/od.jsx"
import ResetButton from "../buttons/reset";
import ModalButton from "../buttons/modal/modal";
import { padding } from "@material-ui/system";
{/* todo cюда передать массив созданных инфоблоко - можно несколько массивов разбитых по типам 
    чтобы метод класса комплект мог брать и отмечать в них чеки в соответствии с индексами своего наполнения по умолчанию  */}

const TYPE = 'COMPLECT'

// export class ComplectClass {
//     constructor(obj, index, state, dispatch) {
      
//         this.name = obj.name;
//         this.number = index;

//         this.defaultWight = obj.weight;
//         this.defaultFilling = obj.filling;
//         this.currentFilling = this.defaultFilling;
//         this.fillingPaketLT = obj.fillingPaketLT

//         this.flagCheckedComplect = false;
//         this.state = state;
//         this.dispatch = dispatch
//         this.fillingInfoblocksIndexes = obj.fillingInfoblocksIndexes;
//         this.fillingPaketsERIndexes = obj.fillingPaketsERIndexes;
//         this.fillingEncyclopediasIndexes = obj.fillingEncyclopediasIndexes;
//         this.fillingLTIndexes = obj.fillingLTIndexes;

//         this.od = "1 Одновременный доступ"


//     }
//     odSaver() {
//         if (this.state.currentComplect) {
//             this.od = this.state.currentComplect.od;
//         }
//         return this.od
//     }
//     // renderComplectsInfoblocks() {
//     //     this.dispatch({
//     //         type: TYPE,
//     //         act: 'render'

//     //     })
//         // this.state.changeInfoblocksData()
//         // this.state.changePaketsErData()


//     // }

//     returnName() {
//         this.odSaver()
//         let obj = {
//             'name': this.name,
//             'number': this.number,
//             'defaultWight': this.defaultWight,
//             'defaultFilling': this.defaultFilling,
//             'currentFilling': this.currentFilling,
//             'fillingInfoblocksIndexes': this.fillingInfoblocksIndexes,
//             'fillingPaketsERIndexes': this.fillingPaketsERIndexes,
//             'fillingEncyclopediasIndexes': this.fillingEncyclopediasIndexes,
//             'fillingLTIndexes': this.fillingLTIndexes,
//             'fillingPaketLT': this.fillingPaketLT,
//             'od': this.od
//         }
//         addToStorage(obj, 'currentComplect')
        
        
//     }

// }


const Complect = (props) => {
    // console.log(props)
    let styleComplect = {
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,

    }
    return (

        <form style={styleComplect} id="" className={style.form}>
            <p className={style.complect__title} id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={style.container}>

                < ComplectButtons state={props.state} dispatch={props.dispatch} />
                < ODButtons state={props.state}  dispatch={props.dispatch} />
                <ResetButton state={props.state} dispatch={props.dispatch} />
                <ModalButton state={props.state} dispatch={props.dispatch} />
            </div>
        </form>
    )
}

export default Complect