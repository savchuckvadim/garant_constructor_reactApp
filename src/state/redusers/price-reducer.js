


const GET_PRICE = 'GET_PRICE';
const INPUT_CHANGE_PRICE = 'INPUT_CHANGE_PRICE'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const RESET = 'RESET'
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
export const getPriceActionCreator = () => {

  return {
    type: GET_PRICE
  }
}
const changeCurrentPrice = (action, state) => {

  if (action.type === 'INPUT_CHANGE_PRICE') {

    if (action.typeOfProduct === 'Гарант') {
      state.currentPrice.width = action.width
      state.currentPrice.value = action.value
      state.currentPrice.status = action.status

    }
  }

  return state.currentPrice
}
const price = (action, state) => {
  if (action.type === GET_PRICE || action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_OD) {
  
    let ind1 = state.currentComplect.number;
    let ind2

    // const currentPrice = getFromStorage('price')
    // if (currentPrice && !Array.isArray(currentPrice)) {
    //   state.currentPrice = currentPrice
    //   // return state.currentPrice.value
    // } else {
      state.od.forEach((element, index) => {
        if (element.name === state.currentOd) {
          ind2 = index
        }
      })

      if (!ind2) {
        state.currentPrice.value = state.prices[0][ind1]

      } else {
        state.currentPrice.value = state.prices[ind2][ind1]
      }


    // }
  }

  
  return state.currentPrice
}

export const priceReducer = (action, state) => {
  
  if (action.type === GET_PRICE || action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_OD) {
    
    return price(action, state)
  } else if (action.type === INPUT_CHANGE_PRICE) {
    
    return changeCurrentPrice(action, state)
    
  }else{
    return state.currentPrice
  }
}