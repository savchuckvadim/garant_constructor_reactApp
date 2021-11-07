const GET_PRICE = 'GET_PRICE';
const INPUT_CHANGE_PRICE = 'INPUT_CHANGE_PRICE'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
const RESET = 'RESET'

//TODO передать сюда из result-items-value
//currentComplect
//currentOd
let initialState = {

    currentPrice: {
        value: 0,
        status: false,
        width: 0

    },

    prices: [
        [4740, 4740, 6780, 6780, 5940, 6150, 9510, 12000],
        [5700, 5700, 8160, 8160, 7140, 7380, 11400, 14400],
        [7590, 7590, 10860, 10860, 9510, 9840, 15210, 19200],
        [11400, 11400, 16290, 16290, 14220, 14760, 22800, 28800],
        [15210, 15210, 21720, 21720, 18960, 19680, 30390, 38400],
        [18960, 18960, 27120, 27120, 23760, 24600, 38010, 48000],
        [22740, 22740, 32550, 32550, 28500, 29520, 45630, 57600],
        [26520, 26520, 37980, 37980, 33270, 34440, 53220, 67200]
    ],

}




export const getPriceActionCreator = () => {

    return {
        type: GET_PRICE
    }
}
const changeCurrentPrice = (state, action) => {

    if (action.type === 'INPUT_CHANGE_PRICE') {

        if (action.typeOfProduct === 'Гарант') {
            state.currentPrice.width = action.width
            state.currentPrice.value = action.value
            state.currentPrice.status = action.status

        }
    }

    return state
}
const price = (state, action) => {

    if (action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_OD) {

        // let ind1 =
        //state.currentComplect.number;
        //if CREATE_COMPLECT => action.obj.number
        //if CHANGE_CURRENT_OD => action.currentComplect
        let ind2

        // state.od.forEach((element, index) => {
        //     if (element.name === state.currentOd) {
        //         ind2 = index
        //     }
        // })

        // if (!ind2) {
        //     state.currentPrice.value = state.prices[0][ind1]

        // } else {
        //     state.currentPrice.value = state.prices[ind2][ind1]
        // }

    }


    return state
}
const getPrice = (value, prices, action) => {
    let ind1
    let ind2
    let currentOd
    let ods = action.ods
    if (action.type === CREATE_COMPLECT) {
        ind1 = action.obj.number
    } else if (action.type === CHANGE_CURRENT_OD) {
        ind1 = action.currentComplect
        currentOd = action.name
        
    }

    ods.od.forEach((element, index) => {
        if (element.name === currentOd) {
            ind2 = index
        }
    })

    if (!ind2) {
        value = prices[0][ind1]

    } else {
        value = prices[ind2][ind1]
    }
}
const reset = (state) => {
    state.currentPrice.width = 0
    return state
}

export const priceReducer = (state = initialState, action) => {

    if (action.type === GET_PRICE || action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_OD) {

        return price(state, action)
    } else if (action.type === INPUT_CHANGE_PRICE) {

        return changeCurrentPrice(state, action)

    } else if (action.type === RESET) {

        return reset(state)

    } else {
        return state
    }
}