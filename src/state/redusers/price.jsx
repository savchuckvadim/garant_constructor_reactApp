import { getFromStorage } from "../../utils/utils";

const GET_PRICE = 'GET_PRICE';

export const getPriceActionCreator = () => {

  return {
    type: GET_PRICE
  }
}

export const  price = (state) => {
    let ind1 = state.currentComplect.number;
    let ind2
    
    const currentPrice = getFromStorage('currentPrice')
    if (currentPrice && !Array.isArray(currentPrice)) {
      state.currentPrice = currentPrice
      // return state.currentPrice.value
    } else {
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
      
     
    }
    return state.currentPrice.value
  }