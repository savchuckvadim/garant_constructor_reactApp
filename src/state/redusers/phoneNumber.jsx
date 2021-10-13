import { addToStorage, getFromStorage } from "../../utils/utils"


export const changeDataPhone = (value, state) => { //обновляет данные в  local Storage из стэйт перезапускает приложение
   
    state.phoneNumber.value = value
    addToStorage (state.phoneNumber, 'phone')
    
    
    return state.phoneNumber
 }

 

 export const changePhoneFromLocal = (state) => {
    
    const storageData = getFromStorage('phone');
    
    if (storageData) {
     
        state.phoneNumber = storageData

    }
    state.phoneNumber = storageData
  } 