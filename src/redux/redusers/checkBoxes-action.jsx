const CHANGE_BLOCKS_FROM_NEW_COMPLECT = 'CHANGE_BLOCKS_FROM_NEW_COMPLECT'
export const changeCheckBoxActionCreator = (type, value, checked, index, currentComplect, state) => {
   
    return {
        type: type,
        value: value,
        checked: checked,
        index: index,
        currentComplect : currentComplect,
        state: state
    }
}

export const changeBlocksFromNewComplectActionCreator = (currentComplect) => {
    
    return {
        type: CHANGE_BLOCKS_FROM_NEW_COMPLECT,
        currentComplect: currentComplect

    }
}

