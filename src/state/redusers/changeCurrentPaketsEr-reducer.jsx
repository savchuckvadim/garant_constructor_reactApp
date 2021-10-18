import { changePaketsErFromCurrent } from "./er"

const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'



export const changeCurrentPketsEr = (action, state) => {   //меняет currentComplect

    const changePaketsInState = (state, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

        if (checked === true) {
            state.currentComplect.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
        } else {
            state.currentComplect.fillingPaketsERIndexes = [index]
        }

        changePaketsErFromCurrent(state);
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
                changePaketsErFromCurrent (state);
    
                //
            }
        }
        
    } 


return state.currentComplect
}