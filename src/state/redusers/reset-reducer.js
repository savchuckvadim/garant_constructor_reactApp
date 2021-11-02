

export const reset = (action, state) => {
    if (action.type === 'RESET') {
        localStorage.removeItem('currentComplect')
        state.currentPrice.width = 0
        state.currentComplect = null
       
    }
    return state

    
}