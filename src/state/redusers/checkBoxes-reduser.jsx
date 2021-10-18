import { changePaketsErData, changePaketsErFromCurrent } from "./er"



export const changeCheckBoxActionCreator = (type, value, checked, index) => {
    return {
        type: type,
        value: value,
        checked: checked,
        // typeOfBlock: typeOfBlock,
        index: index
    }
}



// const changeCurrentInfoblocks = (value, checked, state) => {  //меняет текущее наполнение в currentComplect

//     let arrayOfcurrentComplectForChange = []
//     arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
//     if (checked) {
//         arrayOfcurrentComplectForChange.forEach((elem, idx) => {
//             if (elem === value) {
//                 arrayOfcurrentComplectForChange.splice(idx, 1)
//             }
//         })
//     } else {
//         arrayOfcurrentComplectForChange.push(value)

//     }
// }
// const changeCurrentEr = (checked, type, state, index) => {   //меняет currentComplect

//     const changePaketsInState = (state, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

//         if (checked === true) {
//             state.currentComplect.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
//         } else {
//             state.currentComplect.fillingPaketsERIndexes = [index]
//         }

//         changePaketsErFromCurrent(state);
//     }

//     const changeErInState = (state, checked, index, indexOfEncyclopedias, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

//         if (checked === true) {
//             if (filling.length > 0) {
//                 filling.forEach((elem, idx) => {
//                     if (elem === index) {
//                         filling.splice(idx, 1)
//                     }
//                 })
//             }
//         } else {

//             state.encyclopedias[indexOfEncyclopedias].value[index].checked = true;



//             if (!filling.includes(index)) filling.push(index)
//         }
//     }





//     if (type === 'Пакет Энциклопедий решений') {
//         if (state.currentComplect.name !== 'Офис') {

//             changePaketsInState(state, checked, index) // изменяет индекс входящих в комплект пакетов

//         } else {

//             window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
//             if (checked == true) {
//                 if (index === 0) {
//                     state.currentComplect.fillingPaketsERIndexes = [1, 2]
//                 } else if (index === 1) {
//                     state.currentComplect.fillingPaketsERIndexes = [0, 2]
//                 } else if (index === 2) {
//                     state.currentComplect.fillingPaketsERIndexes = [0, 1]
//                 }

//             } else { //checked == false
//                 if (index === 0) {
//                     state.currentComplect.fillingPaketsERIndexes = [0, 2]
//                 } else if (index === 1) {
//                     state.currentComplect.fillingPaketsERIndexes = [0, 1]
//                 } else if (index === 2) {
//                     state.currentComplect.fillingPaketsERIndexes = [1, 2]
//                 }
//             }
//             changePaketsErFromCurrent(state);

//             //
//         }
//     } else { //IF

//         changeErInState(state, checked, index, 1, state.currentComplect.fillingEncyclopediasIndexes)

//     }



// }

// const changeLt = (checked, state, index) => {
//     // const currentWeightOfLT = (state) => {
//     //     let currentWeight = 0
//     //     state.legalTech.value.forEach((elem) => { //считаем текущий вес всех LT - если меньше пяти засовываем в инклудед, если 5 и больше - засовываем в дополнительный LT
//     //         if (elem.checked === true) {
//     //             currentWeight += elem.weight
//     //         }
//     //     })
//     //     return currentWeight
//     // }

//     const currentWeightOfIncludedLT = (state) => {
//         let currentWeight = 0
//         state.legalTech.value.forEach((elem, idx) => { //считаем текущий вес всех LT - если меньше пяти засовываем в инклудед, если 5 и больше - засовываем в дополнительный LT
//             state.currentComplect.fillingLTIndexes.forEach((el) => {
//                 if (idx === el) {
//                     if (elem.checked === true) {
//                         currentWeight += elem.weight
//                     }
//                 }
//             })


//         })
//         console.log(`вес included ${currentWeight}`)
//         return currentWeight
//     }
//     if (state.currentComplect) {
//         if (state.currentComplect.name === 'Офис') {
//             // let currentWeight
//             let currentWeightOfIncluded
//             if (state.currentComplect.fillingLTIndexes.includes(index) === false) { //если сервис НЕ входит в инклудед - по умолчанию в комплект
//                 if (checked === false) {
//                     state.legalTech.value[index].checked = true // в state в дате отмечает check
//                     // currentWeight = currentWeightOfLT(state) // считает вес всех check
//                     currentWeightOfIncluded = currentWeightOfIncludedLT(state)
//                     currentWeightOfIncluded >= 5 ? state.currentComplect.fillingPaketLT.push(index) : state.currentComplect.fillingLTIndexes.push(index) //если 5 и более пушит в доп LT если нет, то в included


//                 } else {
//                     //действия по отключению LT не входящих в included  - 
//                     state.legalTech.value[index].checked = false

//                     state.currentComplect.fillingPaketLT.forEach((elem, idx) => {
//                         elem === index ? state.currentComplect.fillingPaketLT.splice(idx, 1) : state.currentComplect.fillingPaketLT = state.currentComplect.fillingPaketLT
//                     })
//                 }
//             } else { //если сервис входит в инклудед - по умолчанию в комплект
//                 if (checked === false) {

//                 } else {
//                     state.legalTech.value[index].checked = false
//                     state.currentComplect.fillingLTIndexes.forEach((elem, idx) => {
//                         elem === index ? state.currentComplect.fillingLTIndexes.splice(idx, 1) : state.currentComplect.fillingLTIndexes = state.currentComplect.fillingLTIndexes
//                     })
//                     currentWeightOfIncluded = currentWeightOfIncludedLT(state)
//                     // for(let i = 0; i < 5; i++){
//                     if (currentWeightOfIncluded < 5) { //если included <5 а в доп сервисах что-то есть - переносим из доп в инклудед
//                         if (state.currentComplect.fillingPaketLT.length > 0) {
//                             state.currentComplect.fillingLTIndexes.push(state.currentComplect.fillingPaketLT[state.currentComplect.fillingPaketLT.length - 1]) //пушим в инклудед последний индекс из доп
//                             state.currentComplect.fillingPaketLT.splice(state.currentComplect.fillingPaketLT.length - 1, 1) //и вырезаем его из доп
//                         } else {
//                             window.alert(`В комплекте Гарант-Офис должно быть минимум 5 сервисов Legal Tech, сейчас их ${currentWeightOfIncluded} в комплекте`)

//                         }
//                     }
//                     // }

//                 }
//             }





//         } else {

//             if (state.currentComplect.fillingLTIndexes.includes(index) === false) {

//                 if (checked === false) {
//                     state.currentComplect.fillingPaketLT.push(index)
//                 } else {
//                     state.currentComplect.fillingPaketLT.forEach((elem, idx) => {
//                         if (elem === index) {
//                             state.currentComplect.fillingPaketLT.splice(idx, 1)
//                         }
//                     })
//                 }
//             }
//         }
//     }


// }
// export const changeCurrentCheckbox = (action, state) => { //имя элемента < Сhecked < тип прав инф < state)
//     if (action.type === 'CHANGE_CHECKBOX') {
//         if (state.currentComplect) {
//             if (state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора') {
    
    
//                 if (action.typeOfBlock === 'Пакет Энциклопедий решений' || action.typeOfBlock === 'Энциклопедии решений') {
//                     // arrayOfcurrentComplectForChange = state.currentComplect.currentER;
//                     changeCurrentEr(action.checked, action.typeOfBlock, state, action.index)
    
    
//                 } else {
//                     // arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
//                     changeCurrentInfoblocks(action.value, action.checked, state)
//                 }
    
    
    
//             }
//             if (action.typeOfBlock === 'Legal Tech') {
//                 changeLt(action.checked, state, action.index)
//             }
            
    
//         } else {
//             window.alert('сначала выберите комплект!')
//         }
//     }
//     // let arrayOfcurrentComplectForChange = []
    

//     return state
// }

