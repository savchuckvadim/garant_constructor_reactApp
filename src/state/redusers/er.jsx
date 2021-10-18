const CHANGE_ER_FROM_CURRENT = 'CHANGE_ER_FROM_CURRENT'
export const changeErFromCurrentActionCreator = () => {
  return {
    type: CHANGE_ER_FROM_CURRENT
  }
}

////////////////////////////////
export const changePaketsErFromCurrent = (state) => {      //меняет _state

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


///////////////////////////
export const changeErFromCurrent = (state) => {

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

export const changeErAndPaketsErFromCurrent = (state) => {
  changePaketsErFromCurrent(state)
  changeErFromCurrent(state)
}