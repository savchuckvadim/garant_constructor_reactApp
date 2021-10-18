import { addToStorage, getFromStorage } from "../../utils/utils"


const PHONE = 'PHONE';

export const phoneActionCreator = (act, value) => {
    return {
        type: PHONE,
        act: act,
        value: value
    }
}

export const changeDataPhone = (action, state) => { //обновляет данные в  local Storage из стэйт перезапускает приложение
    state.value = action.value
    addToStorage (state, 'phone')
    return state
 }

export const changePhoneFromLocal = (state) => {
    
    const storageData = getFromStorage('phone');
    if (storageData && !Array.isArray(storageData)) {
        state = storageData
    }
    
    return state
  } 


//   export const phoneNumber = (action, state) => {
//     if (action.act === 'FROM_LOCAL') {
//         // changePhoneFromLocal(state)
//       } else if (action.act === 'CHANGE_PHONE') {
//         changeDataPhone(action, state)   
//       }
     
//       return state
//   }
