
const CHANGE_LT_FROM_CURRENT = 'CHANGE_LT_FROM_CURRENT';
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CREATE_COMPLECT = 'CREATE_COMPLECT'

export const changeLtFromCurrentActionCreator = () => {

    return {
        type: CHANGE_LT_FROM_CURRENT
    }
}

export const changeltData = (state) => {
    
    if (state.currentComplect) {
        state.legalTech.value.forEach((elem, index) => {
            
            if (state.currentComplect.fillingLTIndexes.includes(index) || state.currentComplect.fillingPaketLT.includes(index)) {
                elem.checked = true
            } else elem.checked = false
        })

    } else {
        state.legalTech.value.forEach((elem) => {
            elem.checked = false
        })
    }
    return state.legalTech
}

export const weightLtForResult = (state) => {

    if (state.currentComplect) {
        state.legalTech.ltIncluded = 0
        state.legalTech.weightLt = 0
        state.legalTech.value.forEach((element, index) => { //перебираем все LT
            if (state.currentComplect.fillingPaketLT.includes(index)) { //если индекс перебираемого LT содержится в списке индексов входящих в комплект по умолчанию
                if (element.checked) {

                    state.legalTech.weightLt = state.legalTech.weightLt + element.weight
                }

            } else if (state.currentComplect.fillingLTIndexes.includes(index)) {
                element.checked ? state.legalTech.ltIncluded++ : state.legalTech.ltIncluded = state.legalTech.ltIncluded - 0

            }
            state.legalTech.weightLt > 0 ? state.legalTech.display = 'flex' : state.legalTech.display = 'none'
            if (state.legalTech.weightLt === 0) {
                state.legalTech.nameOflt = ``
                state.legalTech.priceOfLt = ''
            }
            if (state.legalTech.weightLt === 2) {
                state.legalTech.nameOflt = `Малый Пакет`
                state.legalTech.priceOfLt = state.pricesOfLt[0]
            } else if (state.legalTech.weightLt === 5) {
                state.legalTech.nameOflt = `Средний Пакет `
                state.legalTech.priceOfLt = state.pricesOfLt[1]
            } else if (state.legalTech.weightLt === 10) {
                state.legalTech.nameOflt = `Большой Пакет `
                state.legalTech.priceOfLt = state.pricesOfLt[2]
            }
            if ((state.legalTech.weightLt === 1 || state.legalTech.weightLt > 2) && (state.legalTech.weightLt < 5 || state.legalTech.weightLt > 5) && (state.legalTech.weightLt < 11)) {
                state.legalTech.nameOflt = `LT собран неверно`
            }
        })

    }
    return state.legalTech
}

export const changeLTFromCurrent = (action, state) => {
    
    if (action.type === CHANGE_LT_FROM_CURRENT || action.type === CHANGE_CURRENT_LT || action.type === CREATE_COMPLECT || action.type === 'RESET'){
        changeltData(state)
        weightLtForResult(state)
    }
    return state.legalTech
}