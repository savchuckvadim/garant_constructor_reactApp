import { changePaketsErFromCurrent } from "./er"

const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'




export const changeLt = (action, state) => {
 
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
                    // for(let i = 0; i < 5; i++){
                    if (currentWeightOfIncluded < 5) { //если included <5 а в доп сервисах что-то есть - переносим из доп в инклудед
                        if (state.currentComplect.fillingPaketLT.length > 0) {
                            state.currentComplect.fillingLTIndexes.push(state.currentComplect.fillingPaketLT[state.currentComplect.fillingPaketLT.length - 1]) //пушим в инклудед последний индекс из доп
                            state.currentComplect.fillingPaketLT.splice(state.currentComplect.fillingPaketLT.length - 1, 1) //и вырезаем его из доп
                        } else {
                            window.alert(`В комплекте Гарант-Офис должно быть минимум 5 сервисов Legal Tech, сейчас их ${currentWeightOfIncluded} в комплекте`)

                        }
                    }
                    // }

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

    return state.currentComplect


}