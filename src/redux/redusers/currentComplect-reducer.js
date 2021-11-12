
const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT = 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'
const RESET = 'RESET'


let initialState = null

export const createComplectActionCreator = (obj, index, ods, currentOd) => {
  
    
    return {
        type: CREATE_COMPLECT,
        obj: obj,
        index: index,
        currentComplect : obj,
        ods: ods,
        currentOd: currentOd
      
    }
}

const changeCurrentInfoblocks = (state, action) => { //меняет текущее наполнение в currentComplect
    
    if (state) {
        if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {

            if (action.checked) {

                state.currentFilling.forEach((elem, idx) => {

                    if (elem === action.value) {

                        state.currentFilling.splice(idx, 1)
                    }
                })
            } else {
                state.currentFilling.push(action.value)
            }
        }

    }

    return state

}

const createComplect = (state, action) => {

    if (action.obj) {
        localStorage.removeItem('currentPrice')
        state = action.obj

        let complect = {
            'name': state.name,
            'number': state.number,
            'weight': state.weight,
            // 'defaultFilling': state.currentComplect.defaultFilling,
            'currentFilling': state.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
            'fillingInfoblocksIndexes': state.fillingInfoblocksIndexes,
            'fillingPaketsERIndexes': state.fillingPaketsERIndexes,
            'fillingEncyclopediasIndexes': state.fillingEncyclopediasIndexes,
            'fillingLTIndexes': state.fillingLTIndexes,
            'fillingPaketLT': state.fillingPaketLT,
            'currentStatusInputComplectName': false

        }
        state = complect

        // addToStorage(complect, 'currentComplect')
    }

    return state
}

const changeCurrentEr = (state, action) => { //меняет currentComplect


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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            // 
            // state.encyclopedias[1].value[index].checked = true;


            if (!filling.includes(index)) filling.push(index)
        }
    }

    if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {
        changeErInState(state, action.checked, action.index, state.fillingEncyclopediasIndexes)

    }

    return state
}
const changeCurrentPketsEr = (state, action) => { //меняет currentComplect

    const changePaketsInState = (state, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            state.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
        } else {
            state.fillingPaketsERIndexes = [index]
        }

        // changePaketsErFromCurrent(state);
    }

        if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {

            if (state.name !== 'Офис') {

                changePaketsInState(state, action.checked, action.index) // изменяет индекс входящих в комплект пакетов

            } else {

                window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
                if (action.checked === true) {
                    if (action.index === 0) {
                        state.fillingPaketsERIndexes = [1, 2]
                    } else if (action.index === 1) {
                        state.fillingPaketsERIndexes = [0, 2]
                    } else if (action.index === 2) {
                        state.fillingPaketsERIndexes = [0, 1]
                    }

                } else { //checked == false
                    if (action.index === 0) {
                        state.fillingPaketsERIndexes = [0, 2]
                    } else if (action.index === 1) {
                        state.fillingPaketsERIndexes = [0, 1]
                    } else if (action.index === 2) {
                        state.fillingPaketsERIndexes = [1, 2]
                    }
                }
                // changePaketsErFromCurrent (state);

                //
            }
        }

   


    return state
}
const changeLt = (state, action) => {
    const currentWeightOfIncludedLT = (state) => {
        let currentWeight = 0


        // state.legalTech.value.forEach((elem, idx) => { //считаем текущий вес всех LT - если меньше пяти засовываем в инклудед, если 5 и больше - засовываем в дополнительный LT
        //     state.currentComplect.fillingLTIndexes.forEach((el) => {

        //         if (idx === el) {
        //             if (elem.checked === true) {
        //                 currentWeight += elem.weight
        //             }
        //         }
        //     })


        // })

        currentWeight = state.fillingLTIndexes.length

        return currentWeight
    }

    if (state) {
        if (state.name === 'Офис') {
            // let currentWeight
            let currentWeightOfIncluded
            if (state.fillingLTIndexes.includes(action.index) === false) { //если сервис НЕ входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {


                    // state.legalTech.value[action.index].checked = true // в state в дате отмечает check

                    // currentWeight = currentWeightOfLT(state) // считает вес всех check
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)
                    currentWeightOfIncluded >= 5 ? state.fillingPaketLT.push(action.index) : state.fillingLTIndexes.push(action.index) //если 5 и более пушит в доп LT если нет, то в included


                } else {

                    //действия по отключению LT не входящих в included  - 
                    // state.legalTech.value[action.index].checked = false

                    state.fillingPaketLT.forEach((elem, idx) => {

                        if (elem === action.index) {
                            state.fillingPaketLT.splice(idx, 1)
                        }


                    })
                }
            } else { //если сервис входит в инклудед - по умолчанию в комплект
                if (action.checked === false) {

                } else {
                    // state.legalTech.value[action.index].checked = false
                    state.fillingLTIndexes.forEach((elem, idx) => {
                        if (elem === action.index) {
                            state.fillingLTIndexes.splice(idx, 1)
                        }

                    })
                    currentWeightOfIncluded = currentWeightOfIncludedLT(state)

                    if (currentWeightOfIncluded < 5) { //если included <5 а в доп сервисах что-то есть - переносим из доп в инклудед
                        if (state.fillingPaketLT.length > 0) {
                            state.fillingLTIndexes.push(state.fillingPaketLT[state.fillingPaketLT.length - 1]) //пушим в инклудед последний индекс из доп
                            state.fillingPaketLT.splice(state.fillingPaketLT.length - 1, 1) //и вырезаем его из доп
                        } else {
                            window.alert(`В комплекте Гарант-Офис должно быть минимум 5 сервисов Legal Tech, сейчас их ${currentWeightOfIncluded} в комплекте`)

                        }
                    }
                }
            }

        } else {

            if (state.fillingLTIndexes.includes(action.index) === false) {
                if (action.checked === false) {
                    state.fillingPaketLT.push(action.index)
                } else {

                    state.fillingPaketLT.forEach((elem, idx) => {
                        if (elem === action.index) {
                            state.fillingPaketLT.splice(idx, 1)
                        }
                    })
                }
            }
        }
    }


    // save()
    return state


}
const changeNameOfComplect = (state = initialState, action) => {
 
    if(action.type === 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'){
        state.name = action.value
          state.fillingLTIndexes = []
          state.width = action.width
          state.currentStatusInputComplectName = action.status

    }
    
    return state
}

const reset = (state) => { 
    state = null
    return state
}

export const currentComplect = (state = initialState, action) => {
    
 if (action.type === CHANGE_CURRENT_INFOBLOCKS) {

        return changeCurrentInfoblocks(state, action)

    } else if (action.type === CREATE_COMPLECT) {
        return createComplect(state, action)
    } else if (action.type === CHANGE_CURRENT_ER) {
        return changeCurrentEr(state, action)
    } else if (action.type === CHANGE_CURRENT_PAKETS_ER) {
        return changeCurrentPketsEr(state, action)
    } else if (action.type === CHANGE_CURRENT_LT) {
        return changeLt(state, action)
    } else if (action.type === INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT) {
        return changeNameOfComplect(state, action)
    }else if (action.type === RESET) {
        return reset(state)
    } else {
        return state
    }


}