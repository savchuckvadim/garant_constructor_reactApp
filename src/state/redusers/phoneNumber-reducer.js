
const CHANGE_PHONE = 'CHANGE_PHONE'
const PHONE = 'PHONE'


export const phoneActionCreator = (act, value) => {
    return {
        type: PHONE,
        act: act,
        value: value
    }
}


export const changeDataPhone = (action, state) => { //обновляет данные в  local Storage из стэйт перезапускает приложение
  
    if (action.type === PHONE) {
        if (action.act === CHANGE_PHONE) {
            state.value = action.value
           
        }
    }

    return state
}