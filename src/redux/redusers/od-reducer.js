const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD';




let initialState = {

    currentOd: '1 Одновременный Доступ',
    names: [
        '1 Одновременный доступ',
        '2 Одновременных доступа',
        '3 Одновременных доступа',
        '5 Одновременных доступов',
        '10 Одновременных доступов',
        '20 Одновременных доступов',
        '30 Одновременных доступов',
        '50 Одновременных доступов',
    ],
   

}




export const odChangeActionCreator = (state, name, currentComplect) => {

    return {
        type: CHANGE_CURRENT_OD,
        name: name,
        currentComplect: currentComplect,
        ods: state
    }
}
export const oD = (state = initialState, action) => {

    if (action.type === 'CHANGE_CURRENT_OD') {
        if (!action.currentComplect) {
            window.alert('сначала выберите комплект')
        } else {
            state.currentOd = action.name;
            // state.currentComplect.od = state.currentOd;

        }
    }

    // save()
    return state


}