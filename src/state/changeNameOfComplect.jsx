

export const changeNameOfComplect = (action, state) => {
    if(action.type === 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'){
        this._state.currentComplect.name = action.value
          this._state.currentComplect.fillingLTIndexes = []
          this._state.fillingPaketLT = []
          this._state.fillingPaketsERIndexes = []
          this._state.fillingEncyclopediasIndexes = []
          this._state.currentComplect.width = action.width
          changeLTFromCurrent (this._state)
          changePaketsErFromCurrent(this._state)
          changeErFromCurrent(this._state)
          this._state.currentStatusInputComplectName = action.status
          addToStorage(this._state.currentComplect, 'currentComplect')
    }
    return state
}