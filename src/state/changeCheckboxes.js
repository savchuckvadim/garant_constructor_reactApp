import {
  startApp
} from ".."
import { changePaketsErData } from "../components/infoblocks/er";


export const changeInfoblocks = (value, checked, type, state) => {
  console.log(type)
  let arrayOfcurrentComplectForChange = []
  arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
  if (checked) {
    arrayOfcurrentComplectForChange.forEach((elem, idx) => {
      if (elem === value) {
        arrayOfcurrentComplectForChange.splice(idx, 1)
      }
    })
  } else {
    arrayOfcurrentComplectForChange.push(value)

  }

}

export const changeER = (value, checked, type, state, index) => {
  // console.log(type)
  // let arrayOfcurrentComplectForChange = []
  // arrayOfcurrentComplectForChange = state.currentComplect.currentER;
  //TODO исключить или включить в state и в data
  // если не исправить в дэйт-Комплект - то при перерендеринге комплект опять загрузится из комплекта со старыми данными
  if (type === 'Пакет Энциклопедий решений') {
    if(state.currentComplect.name !== 'Офис' ){

      changePaketsInState(state, checked, index) // изменяет индекс входящих в комплект пакетов

    }else{
      ////////////////////////////////////////////////////////////////////////////////////////////////////////office - надо доработать ограничение на два пакета в файле er.jsx
      // changePaketsInStateOffice(state, checked, index, 0, state.currentComplect.fillingPaketsERIndexes)
      window.alert('в комплекте Гфрфнт-Офис должны содержаться два любых Пакета ЭР')
      if(checked == true) {
        if(index === 0){
          state.currentComplect.fillingPaketsERIndexes = [1,2]
        }else if(index === 1){
          state.currentComplect.fillingPaketsERIndexes = [0,2]
        }else if(index === 2){
          state.currentComplect.fillingPaketsERIndexes = [0,1]
        }
        
      }else{ //checked == false
        if(index === 0){
          state.currentComplect.fillingPaketsERIndexes = [0,2]
        }else if(index === 1){
          state.currentComplect.fillingPaketsERIndexes = [0,1]
        }else if(index === 2){
          state.currentComplect.fillingPaketsERIndexes = [1,2]
        }
      }
      changePaketsErData(state);
    }
  } else { //IF
    
    changeErInState(state, checked, index, 1, state.currentComplect.fillingEncyclopediasIndexes)

  }




}
const changePaketsInState = (state, checked, index) => { // если текущий комплект не офис для Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов

  if (checked === true) {
    state.currentComplect.fillingPaketsERIndexes = []                         // - очищает информацию о входящих в комплект пакетах в state.currentComplect
  } else {
   state.currentComplect.fillingPaketsERIndexes = [index]
  }
  changePaketsErData(state);
}

// const changePaketsInStateOffice = (state, checked, index, filling) => { //Пакетов OFFICE в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов
//   if (checked === true) {
//     state.currentComplect.fillingPaketsERIndexes.forEach((elem, idx) => {
//       if (elem === index) {
//         state.currentComplect.fillingPaketsERIndexes.splice(idx, 1)
//       }
//     })
//   } else {
  
//     if(!filling.includes(index)) filling.push(index)
//   }
//   changePaketsErData(state);
// }


const changeErInState = (state, checked, index, indexOfEncyclopedias, filling) => { //для ЭР и Пакетов в зависимости от параметров если checked делает uncheck в дате allEnciclopedis - заходит в state и убирает из filling индексов
  if (checked === true) {
    filling.forEach((elem, idx) => {
      if (elem === index) {
        filling.splice(idx, 1)
      }
    })
  } else {
  
    state.encyclopedias[indexOfEncyclopedias].value[index].checked = true;
  
    
    
    if(!filling.includes(index)) filling.push(index)
  }
}



export const changeLt = (value, checked, type, state) => {
  let arrayOfcurrentComplectForChange = []
  arrayOfcurrentComplectForChange = state.currentComplect.currentER;


}