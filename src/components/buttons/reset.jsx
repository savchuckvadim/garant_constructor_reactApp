import Button from '@material-ui/core/Button';
import DeleteWhite from "./img/DeleteWhite.svg";
import deleteBlack from "./img/delete_black.svg";
import  "./buttons.css";


const TYPE = 'RESET'

const ResetButton = (props) => {
    let reset = () => {
        props.dispatch({
            type: TYPE
        })
    }
    let deleteIcon = DeleteWhite;
    if (!props.state.indexOfTheme) {
        deleteIcon = deleteBlack;
    } else {
        deleteIcon = DeleteWhite;
    }
    
    let resetStyle = {
        
        color: props.state.theme.style[props.state.theme.indexOfTheme].color,
        // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        // minWidth: '322px',
        height: '54px',
        width: '100%',
        border: '2px solid',
        borderColor:  props.state.theme.style[props.state.theme.indexOfTheme].color,

        variant: 'light',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textColor:  props.state.theme.style[props.state.theme.indexOfTheme].color
    }
    return (
        <Button style={resetStyle} onClick={reset} className="btn__reset" type="button" >СБРОСИТЬ <img src={deleteIcon} alt="" /></Button>
    )
}

export default ResetButton