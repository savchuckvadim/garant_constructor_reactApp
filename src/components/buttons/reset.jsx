import Button from '@material-ui/core/Button';
import DeleteWhite from "./img/DeleteWhite.svg"
import deleteBlack from "./img/delete_black.svg"

import Ellipse from "./img/Ellipse.svg"


const ResetButton = (props) => {
    let deleteIcon = DeleteWhite;
    if(!props.state.indexOfTheme){
        deleteIcon  = deleteBlack;
    }else{
        deleteIcon = DeleteWhite;
    }
console.log(props.state)
    let resetStyle = {
        color: props.state.theme[props.state.indexOfTheme].color,
        backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        minWidth: '322px',
        height: '54px',
        width: '100%',
        border: '2px solid',
        borderColor: 'rgba(151, 103, 200, 1)',
    
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
<Button style={resetStyle} onClick={() => { return props.state.reset() }}  type="button" >RESET <img src={deleteIcon} alt="" /></Button>
    )
}

export default ResetButton