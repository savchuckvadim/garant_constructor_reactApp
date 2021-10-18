
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD';

export const odChangeActionCreator = (name) => {
    
    return {
        type: CHANGE_CURRENT_OD,
      
        name: name
    }
}
export const oD = (action, state) => {

    if (!state.currentComplect) {
        window.alert('сначала выберите комплект')
    } else {
        state.currentOd = action.name;
        // state.currentComplect.od = state.currentOd;
        debugger;
    }

    return state


}