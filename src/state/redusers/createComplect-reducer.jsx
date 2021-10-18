import { addToStorage } from "../../utils/utils"
import { changePaketsErFromCurrent } from "./er"
import { changeInfoblocksFromCurrent } from "./infoblocks"


const CREATE_COMPLECT = 'CREATE_COMPLECT';

export const createComplectActionCreator = (obj, index) => {
  return {
    type: CREATE_COMPLECT,
    obj: obj,
    index: index,
    // od: od
    
  }
}


export const createComplect = (action, state) => {
  localStorage.removeItem('currentPrice')

  state = action.obj

  let complect = {
    'name': state.name,
    'number': state.number,
    'defaultWight': state.defaultWight,
    'defaultFilling': state.defaultFilling,
    'currentFilling': state.filling, //в текущее наполнение вставляет наполнение по-умолчанию из allComplects[idx]
    'fillingInfoblocksIndexes': state.fillingInfoblocksIndexes,
    'fillingPaketsERIndexes': state.fillingPaketsERIndexes,
    'fillingEncyclopediasIndexes': state.fillingEncyclopediasIndexes,
    'fillingLTIndexes': state.fillingLTIndexes,
    'fillingPaketLT': state.fillingPaketLT,
   
  }
  addToStorage(complect, 'currentComplect')


  return state.currentComplect
}