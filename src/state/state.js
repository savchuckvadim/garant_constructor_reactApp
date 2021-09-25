// let state = {
//     currentComplect : null,
//     currentLegalPaket : null,
//     currentUser : null,
//     currentTheme :' light'

import {
  startApp
} from "..";
import {
  ComplectClass
} from "../components/complect/complect";
import {
  addToStorage,
  getFromStorage
} from "../utils/utils";
import {
  changeER,
  changeInfoblocks,
  changeLt
} from "./changeCheckboxes";

// }

class State {
  constructor() {
    this.currentComplect = null;
  }
  save() {
    addToStorage(this.currentComplect, 'currentComplect')
  }
  set currentComplect(complect) {
    this._currentComplect = complect;

  }
  get currentComplect() {
    return this._currentComplect;
  }
}


export let state = new State();

function changeState() {
  // console.log('changeState')
  const storageData = getFromStorage('currentComplect');

  // console.log(storageData)

  if (storageData.name) {
    let obj = new ComplectClass(storageData.name, storageData.number, state);
    obj.currentFilling = storageData.currentFilling;
    obj.flagCheckedComplect = true;
    state.currentComplect = storageData;
  } else {
    state.currentComplect = null
  }

}

export const changeCheckbox = (value, checked, type, state, index) => { //имя элемента < Сhecked < тип прав инф < state)

  // let arrayOfcurrentComplectForChange = []
  if (state.currentComplect) {
    if (state.currentComplect.name !== 'Бухгалтер' && state.currentComplect.name !== 'Бухгалтер госсектора') {


      if (type === 'Пакет Энциклопедий решений' || type === 'Энциклопедии решений') {
        // arrayOfcurrentComplectForChange = state.currentComplect.currentER;
        changeER(value, checked, type, state, index)

      } else if (type === 'Legal Tech') {
        // arrayOfcurrentComplectForChange = state.currentComplect.currentLT;
        changeLt(value, checked, type, state)
      } else {
        // arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
        changeInfoblocks(value, checked, type, state)
      }


      // if (checked) {
      //   arrayOfcurrentComplectForChange.forEach((elem, idx) => {
      //     if (elem === value) {
      //       arrayOfcurrentComplectForChange.splice(idx, 1)
      //     }
      //   })
      // } else {
      //   arrayOfcurrentComplectForChange.push(value)

      // }
      state.save();
      startApp();
    }
  } else {
    window.alert('сначала выберите комплект!')
  }
}

export default changeState