






export const changeTheme = (action, state) => {
    if (action.type === 'THEME') {
        if (state === 0) {

            action.element.classList.remove(action.style1)
            action.element.classList.add(action.style2)
            state = 1

        } else {

            action.element.classList.remove(action.style2)
            action.element.classList.add(action.style1)
            state = 0

        }
        return state
    }
}

