const CHANGE_BLOCKS_FROM_NEW_COMPLECT = 'CHANGE_BLOCKS_FROM_NEW_COMPLECT'
export const changeCheckBoxActionCreator = (type, value, checked, index, currentComplect) => {
   
    return {
        type: type,
        value: value,
        checked: checked,
        index: index,
        currentComplect : currentComplect
    }
}

export const changeBlocksFromNewComplectActionCreator = (currentComplect) => {
    debugger
    return {
        type: CHANGE_BLOCKS_FROM_NEW_COMPLECT,
        currentComplect: currentComplect

    }
}

