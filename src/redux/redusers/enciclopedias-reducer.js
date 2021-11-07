const CHANGE_ER_FROM_CURRENT = 'CHANGE_ER_FROM_CURRENT'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'



let initialState = [

    {
        'nameOfType': 'Пакет Энциклопедий решений',
        'value': [{
                'name': 'Пакет Энциклопедий решений для бухгалтера',
                'checked': false,
                'including': [0, 2, 4, 5, 6],
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Пакет Энциклопедий решений для бухгалтера госсектора',
                'checked': false,
                'weight': 1,
                'including': [1, 3, 4, 5, 6],
                'description': ''
            },
            {
                'name': 'Пакет Энциклопедий решений для юриста',
                'checked': false,
                'weight': 1,
                'including': [0, 3, 4, 6, 7],
                'description': ''
            }
        ]
    },
    {
        'nameOfType': 'Энциклопедии решений',

        'value': [{
                'name': 'Энциклопедия решений.Проверки организаций и предпринимателей',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Госсектор: учет, отчетность, финконтроль',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Хозяйственные ситуации',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Госзакупки',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Трудовые отношения, кадры',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },

            {
                'name': 'Энциклопедия решений.Налоги и взносы',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Договоры и иные сделки',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия решений.Корпоративное право',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
        ]
    }

]




////////////////////////////////
export const changePaketsErFromCurrent = (state, currentComplect) => {      //меняет _state

  const changerErDependPaket = (indexOfPaket) => {

    if (indexOfPaket !== 'noPaket') {
      state[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked

      state[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })

      state[0].value[indexOfPaket].including.forEach(el => {
        state[1].value[el].checked = true
        state[1].value[el].weight = 0
      })
    } else {
      state[0].value.forEach(element => {
        element.checked = false;
      })
      state[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })
    }


  }
  //////////TODO условие переделать на currentComplect - если undefined

  if (currentComplect) {


    if (currentComplect.fillingPaketsERIndexes.length < 1) {
      state[0].value[0].checked = false;
      state[0].value[1].checked = false;
      state[0].value[2].checked = false;
      changerErDependPaket('noPaket')
    } else if (currentComplect.fillingPaketsERIndexes.length === 1) {
      if (currentComplect.fillingPaketsERIndexes.includes(0)) {
        state[0].value[1].checked = false;
        state[0].value[2].checked = false;
        changerErDependPaket(0)

      } else if (currentComplect.fillingPaketsERIndexes.includes(1)) {
        state[0].value[0].checked = false;
        state[0].value[2].checked = false;
        changerErDependPaket(1)
      } else if (currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[0].checked = false;
        state[0].value[1].checked = false;
        changerErDependPaket(2)
      }
    } else if (currentComplect.fillingPaketsERIndexes.length === 2) { //офис

      if (currentComplect.fillingPaketsERIndexes.includes(0) && currentComplect.fillingPaketsERIndexes.includes(1)) {

        state[0].value[2].checked = false; // пакет который не входит в дате отключаем
        state[0].value[0].checked = true;
        state[0].value[1].checked = true;
        //склеить массивы входящих в пакеты эр
        let concatIncludesER = state[0].value[0].including.concat(state[0].value[1].including);
        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })


      } else if (currentComplect.fillingPaketsERIndexes.includes(0) && currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[1].checked = false;
        state[0].value[0].checked = true;
        state[0].value[2].checked = true;

        let concatIncludesER = state[0].value[0].including.concat(state[0].value[2].including);

        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {

          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })


      } else if (currentComplect.fillingPaketsERIndexes.includes(1) && currentComplect.fillingPaketsERIndexes.includes(2)) {
        state[0].value[0].checked = false;
        state[0].value[1].checked = true;
        state[0].value[2].checked = true;

        let concatIncludesER = state[0].value[1].including.concat(state[0].value[2].including);

        state[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state[1].value[el].checked = true
          state[1].value[el].weight = 0
        })
      }

    }


    // saveERandPaketsERinCurrentComplect(state);


  } else {
    state[0].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }
}
/////////////////////////////////


///////////////////////////
export const changeErFromCurrent = (state, currentComplect) => {

  if (currentComplect) {
    state[1].value.forEach((element, index) => {
      if (currentComplect.fillingEncyclopediasIndexes.includes(index)) {
        element.checked = true
        element.weight = 0.5
      }
    })
  } else {

    state[1].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }

  return state

}

export const changeErAndPaketsErFromCurrent = (state = initialState, action) => {

  if (action.type === 'CREATE_COMPLECT' || action.type === CHANGE_CURRENT_PAKETS_ER || action.type === CHANGE_CURRENT_ER || action.type === 'RESET'){
    changePaketsErFromCurrent(state, action.currentComplect)
    changeErFromCurrent(state, action.currentComplect)
  }
  return state
}