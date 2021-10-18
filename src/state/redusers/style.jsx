

const GET_STYLE = 'GET_STYLE'
export const getStyleActionCreator = () => {

  return{
    type: GET_STYLE
  }
}
export const   getStyle = (theme, index) => {

    return {
      background: theme[index].backgroundColor,
      color: theme[index].color,
      text: theme[index].textColor,
      transitionProperty: `background-image, background-color, text-color, color, transform`,
      transitionDuration: `0.5s`,
      transitionDelay: ` 0.1s`,
    }

    
  } 