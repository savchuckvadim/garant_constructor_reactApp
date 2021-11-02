

const CHANGE_COLOR_OF_BUTTON = 'CHANGE_COLOR_OF_BUTTON';

export const changeColorOfButtonActionCreator = (index, currentTheme) => {

    return {
        type: CHANGE_COLOR_OF_BUTTON,
        index: index,
        currentTheme: currentTheme

    }
}
export const changeColorOfButton = (action, state) => {
  
    if (action.type === CHANGE_COLOR_OF_BUTTON) {
        state.allComplects.forEach(element => {
            element.backgroundColor = 'none'
            //  action.currentTheme.backgroundColor
        })
      
        // state.allComplects[action.index].backgroundColor = state.allComplects[action.index]
    }
    
    return state.allComplects

}