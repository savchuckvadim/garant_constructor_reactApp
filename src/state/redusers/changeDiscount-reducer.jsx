
const CHANGE_DISCOUNT = 'CHANGE_DISCOUNT'

export const changeDiscountActionCreator = (value, autoFocus) => {

    return {
        type: CHANGE_DISCOUNT,
        value: value,
        autoFocus: autoFocus
    }
}
export const changeDiscount = (action, state) => {
    if (action.type === CHANGE_DISCOUNT) {
        state.discount = action.value
        state.autoFocus = action.autoFocus

    }

    return state
}