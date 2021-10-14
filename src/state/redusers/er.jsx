const CHANGE_ER = 'CHANGE_ER'
const changeErActionCreator = {
  type: CHANGE_ER
}

////////////////////////////////
export const changePaketsErData = (state) => {      //меняет _state

  const changerErDependPaket = (indexOfPaket) => {

    if (indexOfPaket !== 'noPaket') {
      state.encyclopedias[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked

      state.encyclopedias[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })

      state.encyclopedias[0].value[indexOfPaket].including.forEach(el => {
        state.encyclopedias[1].value[el].checked = true
        state.encyclopedias[1].value[el].weight = 0
      })
    } else {
      state.encyclopedias[0].value.forEach(element => {
        element.checked = false;
      })
      state.encyclopedias[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })
    }


  }
  //////////TODO условие переделать на currentComplect - если undefined

  if (state.currentComplect) {


    if (state.currentComplect.fillingPaketsERIndexes.length < 1) {
      state.encyclopedias[0].value[0].checked = false;
      state.encyclopedias[0].value[1].checked = false;
      state.encyclopedias[0].value[2].checked = false;
      changerErDependPaket('noPaket')
    } else if (state.currentComplect.fillingPaketsERIndexes.length === 1) {
      if (state.currentComplect.fillingPaketsERIndexes.includes(0)) {
        state.encyclopedias[0].value[1].checked = false;
        state.encyclopedias[0].value[2].checked = false;
        changerErDependPaket(0)

      } else if (state.currentComplect.fillingPaketsERIndexes.includes(1)) {
        state.encyclopedias[0].value[0].checked = false;
        state.encyclopedias[0].value[2].checked = false;
        changerErDependPaket(1)
      } else if (state.currentComplect.fillingPaketsERIndexes.includes(2)) {
        state.encyclopedias[0].value[0].checked = false;
        state.encyclopedias[0].value[1].checked = false;
        changerErDependPaket(2)
      }
    } else if (state.currentComplect.fillingPaketsERIndexes.length === 2) { //офис

      if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(1)) {

        state.encyclopedias[0].value[2].checked = false; // пакет который не входит в дате отключаем
        state.encyclopedias[0].value[0].checked = true;
        state.encyclopedias[0].value[1].checked = true;
        //склеить массивы входящих в пакеты эр
        let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[1].including);
        state.encyclopedias[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state.encyclopedias[1].value[el].checked = true
          state.encyclopedias[1].value[el].weight = 0
        })


      } else if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
        state.encyclopedias[0].value[1].checked = false;
        state.encyclopedias[0].value[0].checked = true;
        state.encyclopedias[0].value[2].checked = true;

        let concatIncludesER = state.encyclopedias[0].value[0].including.concat(state.encyclopedias[0].value[2].including);

        state.encyclopedias[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {

          state.encyclopedias[1].value[el].checked = true
          state.encyclopedias[1].value[el].weight = 0
        })


      } else if (state.currentComplect.fillingPaketsERIndexes.includes(1) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
        state.encyclopedias[0].value[0].checked = false;
        state.encyclopedias[0].value[1].checked = true;
        state.encyclopedias[0].value[2].checked = true;

        let concatIncludesER = state.encyclopedias[0].value[1].including.concat(state.encyclopedias[0].value[2].including);

        state.encyclopedias[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
        concatIncludesER.forEach(el => {
          state.encyclopedias[1].value[el].checked = true
          state.encyclopedias[1].value[el].weight = 0
        })
      }

    }


    // saveERandPaketsERinCurrentComplect(state);


  } else {
    state.encyclopedias[0].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }
}
/////////////////////////////////
export const changeER = (value, checked, type, state, dispatch, index) => {   //меняет currentComplect
  const action = changeErActionCreator;
  const changePaketsInState = (state, dispatch, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

    if (checked === true) {
      state.currentComplect.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
    } else {
      state.currentComplect.fillingPaketsERIndexes = [index]
    }

    changePaketsErData(state);
  }

  const changeErInState = (state, checked, index, indexOfEncyclopedias, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

    if (checked === true) {
      if (filling.length > 0) {
        filling.forEach((elem, idx) => {
          if (elem === index) {
            filling.splice(idx, 1)
          }
        })
      }
    } else {

      state.encyclopedias[indexOfEncyclopedias].value[index].checked = true;



      if (!filling.includes(index)) filling.push(index)
    }
  }





  if (type === 'Пакет Энциклопедий решений') {
    if (state.currentComplect.name !== 'Офис') {

      changePaketsInState(state, dispatch, checked, index) // изменяет индекс входящих в комплект пакетов

    } else {

      window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
      if (checked == true) {
        if (index === 0) {
          state.currentComplect.fillingPaketsERIndexes = [1, 2]
        } else if (index === 1) {
          state.currentComplect.fillingPaketsERIndexes = [0, 2]
        } else if (index === 2) {
          state.currentComplect.fillingPaketsERIndexes = [0, 1]
        }

      } else { //checked == false
        if (index === 0) {
          state.currentComplect.fillingPaketsERIndexes = [0, 2]
        } else if (index === 1) {
          state.currentComplect.fillingPaketsERIndexes = [0, 1]
        } else if (index === 2) {
          state.currentComplect.fillingPaketsERIndexes = [1, 2]
        }
      }
      changePaketsErData(state);

      //
    }
  } else { //IF

    changeErInState(state, checked, index, 1, state.currentComplect.fillingEncyclopediasIndexes)

  }



}

///////////////////////////
export const changeErData = (state) => {

  if (state.currentComplect) {
    state.encyclopedias[1].value.forEach((element, index) => {
      if (state.currentComplect.fillingEncyclopediasIndexes.includes(index)) {
        element.checked = true
        element.weight = 0.5
      }
    })
  } else {
 
    state.encyclopedias[1].value.forEach((element) => {
      element.checked = false
      element.weight = 0.5
    })
  }

  return state

}