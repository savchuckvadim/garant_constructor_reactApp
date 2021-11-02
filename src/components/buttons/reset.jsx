import Button from '@material-ui/core/Button';
import DeleteWhite from "./img/DeleteWhite.svg"
import deleteBlack from "./img/delete_black.svg"
import style from "./button.module.css"
import Ellipse from "./img/Ellipse.svg"

const TYPE = 'RESET'

const ResetButton = (props) => {
    let reset = () => {
        props.dispatch({
            type: TYPE
        })
    }
    let deleteIcon = DeleteWhite;
    if(!props.state.indexOfTheme){
        deleteIcon  = deleteBlack;
    }else{
        deleteIcon = DeleteWhite;
    }

    let resetStyle = {
        color: props.state.theme[props.state.indexOfTheme].color,
        // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        // minWidth: '322px',
        height: '54px',
        width: '100%',
        border: '2px solid',
        borderColor:   props.state.theme[props.state.indexOfTheme].color,
    
        variant: 'light',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textColor: props.state.theme[props.state.indexOfTheme].color
    }
    return(
        // <Button style={resetStyle} variant='outlined' color='inherit'>Сбросить</Button>
<Button style={resetStyle} onClick={reset} className={style.btn__reset}  type="button" >СБРОСИТЬ <img src={deleteIcon} alt="" /></Button>
    )
}

export default ResetButton