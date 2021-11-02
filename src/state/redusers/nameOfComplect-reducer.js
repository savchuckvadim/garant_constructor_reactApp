


export const changeNameOfComplect = (action, state) => {
 
    if(action.type === 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'){
        state.currentComplect.name = action.value
          state.currentComplect.fillingLTIndexes = []
          state.currentComplect.width = action.width
          state.currentStatusInputComplectName = action.status

    }
    
    return state
}