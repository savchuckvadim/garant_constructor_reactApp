

export const reset = (state) => {
    localStorage.removeItem('currentComplect')
    state.currentPrice.width = 0
}