import { addToStorage } from "../../utils/utils"
import { changePaketsErData } from "./er"
import { changeInfoblocksData } from "./infoblocks"

export const createComplect = (obj, index, state) => {

    state.allComplects.forEach(element => {
      element.backgroundColor = state.theme[state.indexOfTheme].backgroundColor
    })
    state.allComplects[index].backgroundColor = state.allComplects[index]
    // state.allComplects[index].color = state.theme[state.indexOfTheme].color

    // let complect = new ComplectClass(obj, index, this._state, this.dispatch);
    state.currentComplect = obj
    // this._state.currentComplect.od = this._state.currentOd
    // complect.odSaver()

    // complect.returnName();
    let complect = {
      'name': state.currentComplect.name,
      'number': state.currentComplect.number,
      'defaultWight': state.currentComplect.defaultWight,
      'defaultFilling': state.currentComplect.defaultFilling,
      'currentFilling': state.currentComplect.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
      'fillingInfoblocksIndexes': state.currentComplect.fillingInfoblocksIndexes,
      'fillingPaketsERIndexes': state.currentComplect.fillingPaketsERIndexes,
      'fillingEncyclopediasIndexes': state.currentComplect.fillingEncyclopediasIndexes,
      'fillingLTIndexes': state.currentComplect.fillingLTIndexes,
      'fillingPaketLT': state.currentComplect.fillingPaketLT,
      'od': state.currentOd
    }
    addToStorage(complect, 'currentComplect')

    // this.changeState()
    // complect.renderComplectsInfoblocks()
    changeInfoblocksData(state);
    changePaketsErData(state);

   return state
  }