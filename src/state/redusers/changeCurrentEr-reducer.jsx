

const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'


// export const changeCurrentInfoblocksActionCreator = (type, value, checked, typeOfBlock, index) => {
//     return {
//         type: type,
//         value: value,
//         checked: checked,
//         // typeOfBlock: typeOfBlock,
//         index: index
//     }
// }

export const changeCurrentEr = (action, state) => {   //меняет currentComplect



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


    if (action.type === CHANGE_CURRENT_ER) {
        if (state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора') {
            changeErInState(state, action.checked, action.index, state.currentComplect.fillingEncyclopediasIndexes)

        }

    }


    return state.currentComplect
}