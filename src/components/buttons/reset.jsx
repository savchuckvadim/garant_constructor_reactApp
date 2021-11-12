import Button from '@material-ui/core/Button';
import  "./buttons.css";



const ResetButton = (props) => {
 
   
    

    return (
        <Button style={props.style} onClick={props.reset} className="btn__reset" type="button" >СБРОСИТЬ <img src={props.deleteIcon} alt="" /></Button>
    )
}

export default ResetButton