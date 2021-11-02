
const THEME = 'THEME'

export const themeActionCreator = (element, mainClass) => {
    return {
        type: THEME,
        element: element,
        mainClass: mainClass,
        style1: 'round round__img',
        style2: 'round round__img2',
        mainClassLight : 'app__wrapperContent',
        mainClassDark : 'app__wrapperContent_dark',


    }
}



export const changeTheme = (action, state) => {
   
    if (action.type === THEME) {
        if (state.indexOfTheme === 0) {
            
            
            // action.element.classList.remove(action.style1)
            // action.element.classList.add(action.style2)
            // action.mainClass.classList.remove(action.mainClassLight)
            // action.mainClass.classList.add(action.mainClassDark)
            // action.mainClass.className = action.mainClassDark
            state.indexOfTheme = 1
            state.classOfTheme = action.style2

            // action.element.className = action.style2
        } else {

            // action.element.classList.remove(action.style2)

            // action.element.classList.add(action.style1)

            // action.mainClass.classList.remove(action.mainClassDark)
            // action.mainClass.classList.add(action.mainClassLight)
            state.classOfTheme = action.style1
            // action.mainClass.className = action.mainClassLight
            state.indexOfTheme = 0
            // action.element.className = action.style1
        }

    }

    return state.indexOfTheme
}

