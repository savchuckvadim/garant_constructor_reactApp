
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CREATE_COMPLECT = 'CREATE_COMPLECT'



let initialState = {

        'pricesOfLt': [960, 2200, 3300],
        'nameOfType': 'Legal Tech',
        'display': 'none',
        'status': false,
        'weightLt': 0,
        'ltIncluded': 0,
        'nameOflt': '',
        'priceOfLt': '',
        'value': [{
                'name': 'Аналитическая система "Сутяжник" ',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Конструктор правовых документов',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Экспресс проверка контрагентов',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Экспресс Согласование',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Экспресс тендер',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Гарант Диск',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Гарант Коннект',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Гарант Патент',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Интернет-Семианры',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'ЭТАЛОННЫЙ КЛАССИФИКАТОР',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Бизнес на контроле',
                'checked': false,
                'weight': 1,
                'description': ''
            },

        ]
    

    

}





export const changeltData = (state, currentComplect) => {
    
    if (currentComplect) {
        state.value.forEach((elem, index) => {
            
            if (currentComplect.fillingLTIndexes.includes(index) || currentComplect.fillingPaketLT.includes(index)) {
                elem.checked = true
            } else elem.checked = false
        })

    } else {
        state.value.forEach((elem) => {
            elem.checked = false
        })
    }
    return state
}

export const weightLtForResult = (state, currentComplect) => {

    if (currentComplect) {
        state.ltIncluded = 0
        state.weightLt = 0
        state.value.forEach((element, index) => { //перебираем все LT
            if (currentComplect.fillingPaketLT.includes(index)) { //если индекс перебираемого LT содержится в списке индексов входящих в комплект по умолчанию
                if (element.checked) {

                    state.weightLt = state.weightLt + element.weight
                }

            } else if (currentComplect.fillingLTIndexes.includes(index)) {
                element.checked ? state.ltIncluded++ : state.ltIncluded = state.ltIncluded - 0

            }
            state.weightLt > 0 ? state.display = 'flex' : state.display = 'none'
            if (state.weightLt === 0) {
                state.nameOflt = ``
                state.priceOfLt = ''
            }
            if (state.weightLt === 2) {
                state.nameOflt = `Малый Пакет`
                state.priceOfLt = state.pricesOfLt[0]
            } else if (state.weightLt === 5) {
                state.nameOflt = `Средний Пакет `
                state.priceOfLt = state.pricesOfLt[1]
            } else if (state.weightLt === 10) {
                state.nameOflt = `Большой Пакет `
                state.priceOfLt = state.pricesOfLt[2]
            }
            if ((state.weightLt === 1 || state.weightLt > 2) && (state.weightLt < 5 || state.weightLt > 5) && (state.weightLt < 11)) {
                state.nameOflt = `LT собран неверно`
            }
        })

    }
    return state
}

export const changeLTFromCurrent = (state = initialState, action) => {
    
    if (action.type === CHANGE_CURRENT_LT || action.type === CREATE_COMPLECT || action.type === 'RESET'){
        changeltData(state, action.currentComplect)
        weightLtForResult(state, action.currentComplect)
    }
    return state
}