import style from "./infoblocks.module.css"

import { React } from 'react'
import { renderInputFromData } from "../../utils/utils";

class ErAndPaket {
    constructor(state) {
        // this.name = name;
        this.itemsPakets = []
        this.itemsER = []
        this.state = state
    }

    updateData() {
        if (this.state.currentComplect) {

        }
    }
    render() {

        renderInputFromData(this.state.encyclopedias[0], this.itemsPakets, this.state)
        renderInputFromData(this.state.encyclopedias[1], this.itemsER, this.state)

        return (
            <div className={style.items}>
                <h2>{this.state.encyclopedias[0].nameOfType}</h2>
                {this.itemsPakets}
                <h2>{this.state.encyclopedias[1].nameOfType}</h2>
                {this.itemsER}
            </div>
        )
    }
}
// export const changeErData = (state) => {
//     state.encyclopedias[1].value.forEach((element, index) => {

//         // if(state.currentComplect.fillingER.includes(element.name)){
//         //     element.checked = true
//         //     element.weight = 0.5

//         // }
//         if (state.currentComplect.fillingEncyclopediasIndexes.includes(index)) {
//             element.checked = true
//             element.weight = 0.5
//         }

//         // element.checked = false;
//         // element.weight = 0.5   
//     })


// }

// export const changePaketsErData = (state) => {
//     if (state.currentComplect) {
//         if (state.currentComplect.fillingPaketsERIndexes.length < 1) {
//             state.encyclopedias[0].value[0].checked = false;
//             state.encyclopedias[0].value[1].checked = false;
//             state.encyclopedias[0].value[2].checked = false;
//             changerErDependPaket('noPaket', state)
//         } else if (state.currentComplect.fillingPaketsERIndexes.length === 1) {
//             if (state.currentComplect.fillingPaketsERIndexes.includes(0)) {
//                 state.encyclopedias[0].value[1].checked = false;
//                 state.encyclopedias[0].value[2].checked = false;
//                 changerErDependPaket(0, state)

//             } else if (state.currentComplect.fillingPaketsERIndexes.includes(1)) {
//                 state.encyclopedias[0].value[0].checked = false;
//                 state.encyclopedias[0].value[2].checked = false;
//                 changerErDependPaket(1, state)
//             } else if (state.currentComplect.fillingPaketsERIndexes.includes(2)) {
//                 state.encyclopedias[0].value[0].checked = false;
//                 state.encyclopedias[0].value[1].checked = false;
//                 changerErDependPaket(2, state)
//             }
//         } else if (state.currentComplect.fillingPaketsERIndexes.length === 2) {                //офис
            
//             if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(1)) {

//                 state.encyclopedias[0].value[2].checked = false; // пакет который не входит в дате отключаем
//                 state.encyclopedias[0].value[0].checked = true;
//                 state.encyclopedias[0].value[1].checked = true;
//                 //склеить массивы входящих в пакеты эр
//                 let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[1].including);
//                 state.encyclopedias[1].value.forEach(element => {
//                     element.checked = false;
//                     element.weight = 0.5
//                 })
//                 concatIncludesER.forEach(el => {
//                     state.encyclopedias[1].value[el].checked = true
//                     state.encyclopedias[1].value[el].weight = 0
//                 })




//                 console.log('Пакет Энциклопедий решений для бухгалтера и Пакет Энциклопедий решений для бухгалтера госсектора')

//             } else if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
//                 state.encyclopedias[0].value[1].checked = false;
//                 state.encyclopedias[0].value[0].checked = true;
//                 state.encyclopedias[0].value[2].checked = true;
                
//                 let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[2].including);
//                 console.log('concatIncludesER')
//                 console.log(concatIncludesER)

//                 state.encyclopedias[1].value.forEach(element => {
//                     element.checked = false;
//                     element.weight = 0.5
//                 })
//                 concatIncludesER.forEach(el => {
//                     console.log(el)
//                     state.encyclopedias[1].value[el].checked = true
//                     state.encyclopedias[1].value[el].weight = 0
//                 })


//             } else if (state.currentComplect.fillingPaketsERIndexes.includes(1) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
//                 state.encyclopedias[0].value[0].checked = false;
//                 state.encyclopedias[0].value[1].checked = true;
//                 state.encyclopedias[0].value[2].checked = true;


//                 console.log('Пакет Энциклопедий решений для бухгалтера  и Пакет Энциклопедий решений для Юриста')


//                 let concatIncludesER = state.encyclopedias[0].value[1].including.concat(state.encyclopedias[0].value[2].including);
//                 console.log('concatIncludesER')
//                 console.log(concatIncludesER)

//                 state.encyclopedias[1].value.forEach(element => {
//                     element.checked = false;
//                     element.weight = 0.5
//                 })
//                 concatIncludesER.forEach(el => {
//                     console.log(el)
//                     state.encyclopedias[1].value[el].checked = true
//                     state.encyclopedias[1].value[el].weight = 0
//                 })
//             }

//         }

//         // saveERandPaketsERinCurrentComplect(state);


//     }
// }



// const changerErDependPaket = (indexOfPaket, state) => {
//     console.log(state)
//     if (indexOfPaket !== 'noPaket') {
//         state.encyclopedias[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked

//         state.encyclopedias[1].value.forEach(element => {
//             element.checked = false;
//             element.weight = 0.5
//         })

//         state.encyclopedias[0].value[indexOfPaket].including.forEach(el => {
//             state.encyclopedias[1].value[el].checked = true
//             state.encyclopedias[1].value[el].weight = 0
//         })
//     } else {
//         state.encyclopedias[0].value.forEach(element => {
//             element.checked = false;
//         })
//         state.encyclopedias[1].value.forEach(element => {
//             element.checked = false;
//             element.weight = 0.5
//         })
//     }


// }

// const saveERandPaketsERinCurrentComplect = (state) => {
//     state.currentComplect.fillingPaketsER = []
//     // state.currentComplect.fillingER = []
//     state.encyclopedias[0].value.forEach(element => {

//         if (element.checked === true) {
//             state.currentComplect.fillingPaketsER.push(element)
//         }
//     })
//     state.encyclopedias[1].value.forEach(element => {
//         if (element.checked === true) {
//             // state.currentComplect.fillingER.push(element)
//         }
//     })

// }
const Er = (state) => {
    let er = new ErAndPaket(state);
    return er.render()
}
export default Er
// класс ЭР управляет весом все ЭР с пакетами или без - неважно
// отрисовывает и отмечает чекед если нужно все ЭР Чекбоксы
// Создается при первом отривовывании мэйна
// В классе сть функции для слушателей чекбоксов
// Вес всех энциклопедий - в зависимости от :
// - текущего комплекта
//  - текущего пакета ЭР