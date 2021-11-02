
export const changeCheckBoxActionCreator = (type, value, checked, index) => {
    return {
        type: type,
        value: value,
        checked: checked,
        index: index
    }
}

