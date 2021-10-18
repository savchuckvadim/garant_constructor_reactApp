

// export const changeInfoblocks = (value, checked, state) => {

//   let arrayOfcurrentComplectForChange = []
//   arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
//   if (checked) {
//     arrayOfcurrentComplectForChange.forEach((elem, idx) => {
//       if (elem === value) {
//         arrayOfcurrentComplectForChange.splice(idx, 1)
//       }
//     })
//   } else {
//     arrayOfcurrentComplectForChange.push(value)

//   }

// }
// const CHANGE_ER = 'CHANGE_ER'
// const changeErActionCreator = {
//   type: CHANGE_ER
// }
// export const changeER = (value, checked, type, state, dispatch, index) => {
//   const action = changeErActionCreator;
//   const changePaketsInState = (state, dispatch, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

//     if (checked === true) {
//       state.currentComplect.fillingPaketsERIndexes = [] // - очищает информацию о входящих в комплект пакетах в state.currentComplect
//     } else {
//       state.currentComplect.fillingPaketsERIndexes = [index]
//     }
//     dispatch(action)
//     // this.changePaketsErData();
//   }

//   const changeErInState = (state, checked, index, indexOfEncyclopedias, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

//     if (checked === true) {
//       if (filling.length > 0) {
//         filling.forEach((elem, idx) => {
//           if (elem === index) {
//             filling.splice(idx, 1)
//           }
//         })
//       }
//     } else {
  
//       state.encyclopedias[indexOfEncyclopedias].value[index].checked = true;
  
  
  
//       if (!filling.includes(index)) filling.push(index)
//     }
//   }





//   if (type === 'Пакет Энциклопедий решений') {
//     if (state.currentComplect.name !== 'Офис') {

//       changePaketsInState(state, dispatch, checked, index) // изменяет индекс входящих в комплект пакетов

//     } else {

//       window.alert('в комплекте Гарант-Офис должны содержаться два любых Пакета ЭР')
//       if (checked == true) {
//         if (index === 0) {
//           state.currentComplect.fillingPaketsERIndexes = [1, 2]
//         } else if (index === 1) {
//           state.currentComplect.fillingPaketsERIndexes = [0, 2]
//         } else if (index === 2) {
//           state.currentComplect.fillingPaketsERIndexes = [0, 1]
//         }

//       } else { //checked == false
//         if (index === 0) {
//           state.currentComplect.fillingPaketsERIndexes = [0, 2]
//         } else if (index === 1) {
//           state.currentComplect.fillingPaketsERIndexes = [0, 1]
//         } else if (index === 2) {
//           state.currentComplect.fillingPaketsERIndexes = [1, 2]
//         }
//       }
//       dispatch(action)
//       //
//     }
//   } else { //IF

//     changeErInState(state, checked, index, 1, state.currentComplect.fillingEncyclopediasIndexes)

//   }




// }













