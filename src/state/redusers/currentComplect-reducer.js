
import { changeNameOfComplect } from "./nameOfComplect-reducer"


const GET_CURRENT_COMPLECT = 'GET_CURRENT_COMPLECT'
const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'
const CHANGE_INFOBLOCKS_FROM_CURRENT = 'CHANGE_INFOBLOCKS_FROM_CURRENT'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT = 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'


export const createComplectActionCreator = (obj, index) => {
 
  return {
    type: CREATE_COMPLECT,
    obj: obj,
    index: index,
    // od: od
    
  }
}

const changeCurrentInfoblocks = (action, state) => { //меняет текущее наполнение в currentComplect

    if (state.currentComplect) {
        if (state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора') {

            if (action.checked) {
                
                state.currentComplect.currentFilling.forEach((elem, idx) => {
                    
                    if (elem === action.value) {

                        state.currentComplect.currentFilling.splice(idx, 1)
                    }
                })
            } else {
                state.currentComplect.currentFilling.push(action.value)
            }
        }

    }



// addToStorage(state.currentComplect, 'currentComplect')
    return state.currentComplect

}

const createComplect = (action, state) => {


    if (action.obj) {
        localStorage.removeItem('currentPrice')

        state.currentComplect = action.obj

        let complect = {
            'name': state.currentComplect.name,
            'number': state.currentComplect.number,
            'weight': state.currentComplect.weight,
            // 'defaultFilling': state.currentComplect.defaultFilling,
            'currentFilling': state.currentComplect.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
            'fillingInfoblocksIndexes': state.currentComplect.fillingInfoblocksIndexes,
            'fillingPaketsERIndexes': state.currentComplect.fillingPaketsERIndexes,
            'fillingEncyclopediasIndexes': state.currentComplect.fillingEncyclopediasIndexes,
            'fillingLTIndexes': state.currentComplect.fillingLTIndexes,
            'fillingPaketLT': state.currentComplect.fillingPaketLT,

        }
        state.currentComplect = complect
        
        // addToStorage(complect, 'currentComplect')
    }


    // save()
    return state.currentComplect
}

const changeCurrentEr = (action, state) => { //меняет currentComplect
    

    const changeErInState = (state, checked, index, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            if (filling.length > 0) {
                filling.forEach((elem, idx) => {
                    if (elem === index) {
                        filling.splice(idx, 1)
                    }
                })
            }
        } else {
            state.encyclopedias[1].value[index].checked = true;


            if (!filling.includes(index)) filling.push(index)
        }
    }

    if (state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора') {
        changeErInState(state, action.checked, action.index, state.currentComplect.fillingEncyclopediasIndexes)

    }

    return state.currentComplect
}
const changeCurrentPketsEr = (action, state) => {   //меняет currentComplect
    // const changePaketsErFromCurrent = (state) => {      //меняет _state

    //     const changerErDependPaket = (indexOfPaket) => {
      
    //       if (indexOfPaket !== 'noPaket') {
    //         state.encyclopedias[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked
      
    //         state.encyclopedias[1].value.forEach(element => {
    //           element.checked = false;
    //           element.weight = 0.5
    //         })
      
    //         state.encyclopedias[0].value[indexOfPaket].including.forEach(el => {
    //           state.encyclopedias[1].value[el].checked = true
    //           state.encyclopedias[1].value[el].weight = 0
    //         })
    //       } else {
    //         state.encyclopedias[0].value.forEach(element => {
    //           element.checked = false;
    //         })
    //         state.encyclopedias[1].value.forEach(element => {
    //           element.checked = false;
    //           element.weight = 0.5
    //         })
    //       }
      
      
    //     }
    //     //////////TODO условие переделать на currentComplect - если undefined
      
    //     if (state.currentComplect) {
      
      
    //       if (state.currentComplect.fillingPaketsERIndexes.length < 1) {
    //         state.encyclopedias[0].value[0].checked = false;
    //         state.encyclopedias[0].value[1].checked = false;
    //         state.encyclopedias[0].value[2].checked = false;
    //         changerErDependPaket('noPaket')
    //       } else if (state.currentComplect.fillingPaketsERIndexes.length === 1) {
    //         if (state.currentComplect.fillingPaketsERIndexes.includes(0)) {
    //           state.encyclopedias[0].value[1].checked = false;
    //           state.encyclopedias[0].value[2].checked = false;
    //           changerErDependPaket(0)
      
    //         } else if (state.currentComplect.fillingPaketsERIndexes.includes(1)) {
    //           state.encyclopedias[0].value[0].checked = false;
    //           state.encyclopedias[0].value[2].checked = false;
    //           changerErDependPaket(1)
    //         } else if (state.currentComplect.fillingPaketsERIndexes.includes(2)) {
    //           state.encyclopedias[0].value[0].checked = false;
    //           state.encyclopedias[0].value[1].checked = false;
    //           changerErDependPaket(2)
    //         }
    //       } else if (state.currentComplect.fillingPaketsERIndexes.length === 2) { //офис
      
    //         if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(1)) {
      
    //           state.encyclopedias[0].value[2].checked = false; // пакет который не входит в дате отключаем
    //           state.encyclopedias[0].value[0].checked = true;
    //           state.encyclopedias[0].value[1].checked = true;
    //           //склеить массивы входящих в пакеты эр
    //           let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[1].including);
    //           state.encyclopedias[1].value.forEach(element => {
    //             element.checked = false;
    //             element.weight = 0.5
    //           })
    //           concatIncludesER.forEach(el => {
    //             state.encyclopedias[1].value[el].checked = true
    //             state.encyclopedias[1].value[el].weight = 0
    //           })
      
      
    //         } else if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
    //           state.encyclopedias[0].value[1].checked = false;
    //           state.encyclopedias[0].value[0].checked = true;
    //           state.encyclopedias[0].value[2].checked = true;
      
    //           let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[2].including);
      
    //           state.encyclopedias[1].value.forEach(element => {
    //             element.checked = false;
    //             element.weight = 0.5
    //           })
    //           concatIncludesER.forEach(el => {
      
    //             state.encyclopedias[1].value[el].checked = true
    //             state.encyclopedias[1].value[el].weight = 0
    //           })
      
      
    //         } else if (state.currentComplect.fillingPaketsERIndexes.includes(1) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
    //           state.encyclopedias[0].value[0].checked = false;
    //           state.encyclopedias[0].value[1].checked = true;
    //           state.encyclopedias[0].value[2].checked = true;
      
    //           let concatIncludesER = state.encyclopedias[0].value[1].including.concat(state.encyclopedias[0].value[2].including);
      
    //           state.encyclopedias[1].value.forEach(element => {
    //             element.checked = false;
    //             element.weight = 0.5
    //           })
    //           concatIncludesER.forEach(el => {
    //             state.encyclopedias[1].value[el].checked = true
    //             state.encyclopedias[1].value[el].weight = 0
    //           })
    //         }
      
    //       }
      
      
    //       // saveERandPaketsERinCurrentComplect(state);
      
      
    //     } else {
    //       state.encyclopedias[0].value.forEach((element) => {
    //         element.checked = false
    //         element.weight = 0.5
    //       })
    //     }
    //   }
    const changePaketsInState = (state, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            state.currentComplect.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
        } else {
            state.currentComplect.fillingPaketsERIndexes = [index]
        }

        // changePaketsErFromCurrent(state);
    }


    if(action.type === CHANGE_CURRENT_PAKETS_ER){
        if(state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора'){

            if (state.currentComplect.name !== 'Офис') {

                changePaketsInState(state, action.checked, action.index) // изменяет индекс входящих в комплект пакетов
    
            } else  {
    
                window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
                if (action.checked === true) {
                    if (action.index === 0) {
                        state.currentComplect.fillingPaketsERIndexes = [1, 2]
                    } else if (action.index === 1) {
                        state.currentComplect.fillingPaketsERIndexes = [0, 2]
                    } else if (action.index === 2) {
                        state.currentComplect.fillingPaketsERIndexes = [0, 1]
                    }
    
                } else { //checked == false
                    if (action.index === 0) {
                        state.currentComplect.fillingPaketsERIndexes = [0, 2]
                    } else if (action.index === 1) {
                        state.currentComplect.fillingPaketsERIndexes = [0, 1]
                    } else if (action.index === 2) {
                        state.currentComplect.fillingPaketsERIndexes = [1, 2]
                    }
                }
                // changePaketsErFromCurrent (state);
    
                //
            }
        }
        
    } 


return state.currentComplect
}
const changeLt = (action, state) => {
    const currentWeightOfIncludedLT = (state) => {
        let currentWeight = 0
        state.legalTech.value.forEach((elem, idx) => { //считаем текущий вес всех LT - если меньше пяти засовываем в инклудед, если 5 и больше - засовываем в дополнительный LT
            state.currentComplect.fillingLTIndexes.forEach((el) => {
                
                if (idx === el) {
                    if (elem.checked === true) {
                        currentWeight += elem.weight
                    }
                }
            })


        })
        console.log(`вес included ${currentWeight}`)
        return currentWeight
    }


    if (state.currentComplect) {
        if (state.currentComplect.name === 'Офис') {
            // let currentWeight
            let currentWeightOfIncluded
            if (state.currentComplect.fillingLTIndexes.includes(action.index) === false) { //если сервис НЕ входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {
                    state.legalTech.value[action.index].checked = true // в state в дате отмечает check
                    // currentWeight = currentWeightOfLT(state) // считает вес всех check
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)
                    currentWeightOfIncluded >= 5 ? state.currentComplect.fillingPaketLT.push(action.index) : state.currentComplect.fillingLTIndexes.push(action.index) //если 5 и более пушит в доп LT если нет, то в included


                } else {
                    //действия по отключению LT не входящих в included  - 
                    state.legalTech.value[action.index].checked = false

                    state.currentComplect.fillingPaketLT.forEach((elem, idx) => {
                        elem === action.index ? state.currentComplect.fillingPaketLT.splice(idx, 1) : state.currentComplect.fillingPaketLT = state.currentComplect.fillingPaketLT
                    })
                }
            } else { //если сервис входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {

                } else {
                    state.legalTech.value[action.index].checked = false
                    state.currentComplect.fillingLTIndexes.forEach((elem, idx) => {
                        
                        elem === action.index ? state.currentComplect.fillingLTIndexes.splice(idx, 1) : state.currentComplect.fillingLTIndexes = state.currentComplect.fillingLTIndexes
                    })
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)

                    if (currentWeightOfIncluded < 5) { //если included <5 а в доп сервисах что-то есть - переносим из доп в инклудед
                        if (state.currentComplect.fillingPaketLT.length > 0) {
                            state.currentComplect.fillingLTIndexes.push(state.currentComplect.fillingPaketLT[state.currentComplect.fillingPaketLT.length - 1]) //пушим в инклудед последний индекс из доп
                            state.currentComplect.fillingPaketLT.splice(state.currentComplect.fillingPaketLT.length - 1, 1) //и вырезаем его из доп
                        } else {
                            window.alert(`В комплекте Гарант-Офис должно быть минимум 5 сервисов Legal Tech, сейчас их ${currentWeightOfIncluded} в комплекте`)

                        }
                    }
                }
            }

        } else {
            
            if (state.currentComplect.fillingLTIndexes.includes(action.index) === false) {
                if (action.checked === false) {
                    state.currentComplect.fillingPaketLT.push(action.index)
                } else {
                    state.currentComplect.fillingPaketLT.forEach((elem, idx) => {
                        if (elem === action.index) {
                            state.currentComplect.fillingPaketLT.splice(idx, 1)
                        }
                    })
                }
            }
        }
    }


    // save()
    return state.currentComplect


}

export const currentComplect = (action, state) => {
    
    if (action.type === GET_CURRENT_COMPLECT) {
        return state.currentComplect

    } else if (action.type === CHANGE_CURRENT_INFOBLOCKS) {
        return changeCurrentInfoblocks(action, state)
    } else if (action.type === CREATE_COMPLECT) {

        return createComplect(action, state)

        // infoblocks(action, state).currentComplect

    } else if (action.type === CHANGE_CURRENT_ER) {
        return changeCurrentEr(action, state)
    } else if (action.type === CHANGE_CURRENT_PAKETS_ER){
        return changeCurrentPketsEr(action, state)
    }else if (action.type === CHANGE_CURRENT_LT) {
        return changeLt(action, state)
    }else if(action.type === INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT){
       return changeNameOfComplect(action, state).currentComplect
    }else {
        return state.currentComplect
    }
    
    
}