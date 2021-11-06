
let initialState = {
    currentPrepaid: {
        value: 'Минимальный аванс 1 месяц',
        placeholder: 'Минимальный аванс 1 месяц',
        status: false,
        width: 0
    }
}

export const changePrepaid = (state = initialState, action) => {
   
    if (action.type === 'INPUT_CHANGE_PREPAID') {
        state.width = action.width
        state.value = action.value
        state.status = action.status
    }

    
    return state

}