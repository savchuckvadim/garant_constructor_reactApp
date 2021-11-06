
const CHANGE_PHONE = 'CHANGE_PHONE'
const PHONE = 'PHONE'


let initialState = {
 
        'status': false,
        'value': ''
   
}



export const phoneActionCreator = (act, value) => {
    return {
        type: PHONE,
        act: act,
        value: value
    }
}


export const changeDataPhone = (state = initialState, action) => { //обновляет данные в  local Storage из стэйт перезапускает приложение
  
    if (action.type === PHONE) {
        if (action.act === CHANGE_PHONE) {
            state.value = action.value
           
        }
    }

    return state
}