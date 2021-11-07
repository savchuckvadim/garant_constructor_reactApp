
const WEIGHT = 'WEIGHT';
const initialState = {
    currentWeight: 0
}
export const weightActionCreator = () => {

    return {
        type: WEIGHT
    }
};

const getWeight = (state, action) => {
    let info = 0;
    let er = 0;
    let totalweight = 0;

    action.infoblocks.forEach(element => {
        element.value.forEach(elem => {
            if (elem.checked === true) {
                info += elem.weight
            }
        })
    })

    action.encyclopedias.forEach(element => {
        element.value.forEach(elem => {

            if (elem.checked === true) {
                er += elem.weight
            }
        })
    })

    totalweight = info + er
    state.currentWeight = totalweight
    return state
};


const weightReducer = (state = initialState, action) => {

    if (action.type === WEIGHT) {
        return getWeight(state, action)

    }
    return state
}

export default weightReducer