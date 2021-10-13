import Button from "@restart/ui/esm/Button";
import { ComplectClass } from "../complect/complect";
import  styleBtn  from "./button.module.css"
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
const OneButton = (props) => {



    function createComplect(obj, index, state) {
        state.allComplects.forEach(element => {
            element.backgroundColor = state.theme[state.indexOfTheme].backgroundColor
        })
        state.allComplects[index].backgroundColor = state.allComplects[index]
        let complect = new ComplectClass(obj, index, state);
        complect.odSaver()
        complect.returnName();
        complect.renderComplectsInfoblocks()
        state.startApp()
    }
    const ellipseWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    let ellipse = (name) => {
        if (props.state.currentComplect) {
            if (name === props.currentComplect.name) {
                return EllipseCheck
            } else {
                return Ellipse
            }
        } else {
            return Ellipse
        }
    }

    return (
        <Button style={props.style} onClick={() => { return createComplect(props.name, props.index, props.state) }} className={styleBtn.btn__accountant} number={props.index} type="button" >{props.name} <div style={ellipseWrapperStyle}><img className={styleBtn.ellipse} src={() => {ellipse(props.name)}} alt=""></img></div> </Button>
    )
}


