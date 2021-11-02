


export const changePrepaid = (action, state) => {
   
    if (action.type === 'INPUT_CHANGE_PREPAID') {
        state.width = action.width
        state.value = action.value
        state.status = action.status
    }

    
    return state

}