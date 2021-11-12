import DeleteWhite from "./img/DeleteWhite.svg";
import deleteBlack from "./img/delete_black.svg";
import  "./buttons.css";
import ResetButton from './reset';


const TYPE = 'RESET'

const ResetButtonContainer = (props) => {
    let state = props.store.getState()
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
   
    let reset = () => {
        props.dispatch({
            type: TYPE
        })
    }
    let deleteIcon = DeleteWhite;
    if (!state.theme.indexOfTheme) {
        deleteIcon = deleteBlack;
    } else {
        deleteIcon = DeleteWhite;
    }
    
    let resetStyle = {
        
        color: currentTheme.color,
        // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        // minWidth: '322px',
        height: '54px',
        width: '100%',
        border: '2px solid',
        borderColor:  currentTheme.color,

        variant: 'light',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textColor:  currentTheme.color
    }
    return (
        <ResetButton style={resetStyle} onClick={reset} deleteIcon={deleteIcon} />
    )
}

export default ResetButtonContainer