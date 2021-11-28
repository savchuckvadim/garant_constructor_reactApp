
const THEME = 'THEME'


let initialState = {

    indexOfTheme: 0,
    
    style: [

        {
            'name': 'light',
            'backgroundColor': 'white',
            'color': 'black',
            'textColor': 'white',
            'classOfTheme': 'round__img',
            'currentMainClass': 'app__wrapperContent',
            'classOfOd': 'od__labelLight'
        },

        {
            'name': 'dark',
            'backgroundColor': 'rgba(07, 10, 45, 1)',
            'color': 'white',
            'textColor': 'white',
            'classOfTheme': 'round__img2',
            'currentMainClass': 'app__wrapperContent_dark',
            'classOfOd': 'od__labelDark'

        },
      

    ],
    
    classOfTheme: 'round round__img',
    currentStyle: {
        background: 'white',
        color: 'black',
        text: 'black',
        transitionProperty: `background-image, background-color, text-color, color, transform`,
        transitionDuration: `0.5s`,
        transitionDelay: ` 0.1s`,
    },
    currentMainClass: 'app__wrapperContent',
}


export const themeActionCreator = () => {
    return {
        type: THEME,
        // element: element,
        // style1: 'round round__img',
        // style2: 'round round__img2',
        // mainClassLight : 'app__wrapperContent',
        // mainClassDark : 'app__wrapperContent_dark',


    }
}



export const theme = (state = initialState, action) => {
   
    if (action.type === THEME) {
        if (state.indexOfTheme === 0) {
            
            state.indexOfTheme = 1

        } else {

            state.indexOfTheme = 0
        }

    }

    return state
}

