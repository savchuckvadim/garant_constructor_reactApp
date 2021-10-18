const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'

// export const changeCurrentInfoblocksActionCreator = (type, value, checked, typeOfBlock, index) => {
//     return {
//         type: type,
//         value: value,
//         checked: checked,
//         // typeOfBlock: typeOfBlock,
//         index: index
//     }
// }
export const changeCurrentInfoblocks = (action, state) => {  //меняет текущее наполнение в currentComplect
    
    if (state.name !== 'Бухгалтер' && state.name !== 'Бухгалтер госсектора') {
        if (action.type === CHANGE_CURRENT_INFOBLOCKS) {
            if (action.checked) {
                state.currentFilling.forEach((elem, idx) => {

                    if (elem === action.value) {
                       
                        state.currentFilling.splice(idx, 1)
                    }
                })
            } else {
                state.push(action.value)

            }
        }
       
    }



    return state.currentFilling
}