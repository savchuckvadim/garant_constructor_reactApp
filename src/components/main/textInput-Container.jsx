import { connect } from "react-redux"
import InputText from "./textInput"



let mapStateToProps = (state, ownProps) => {

    let getNameOfproduct = () => {
        if (ownProps.type) {
            return ownProps.type
        } else {
            return null
        }
    }
    let nameOfproduct = getNameOfproduct()
    let value = state.currentComplect.name
    let color = state.theme.style[state.theme.indexOfTheme]
    let status = state.currentComplect.currentStatusInputComplectName
    let style = {

        borderStyle: 'none',
        textColor: color,
        color: color,
        // width: width(),
        fontSize: 'small'


    }
    if (ownProps.type === 'prepaid') {
        style.fontSize = 'medium'
    } else if (ownProps.type === 'price') {
        style.fontSize = 'large'
    } else if (ownProps.type === 'nameOfComplect') {
        style.fontSize = 'small'
    }

    
    debugger
    return {
        nameOfproduct,
        value,
        style,
        autofocus: status
    }
}
let mapDispatchToProps = (dispatch, ownProps) => {
    let getNameOfproduct = () => {
        if (ownProps.type) {
            return ownProps.type
        } else {
            return null
        }
    }
    let nameOfproduct = getNameOfproduct()
    return {
        change: (ref) => {
            
            let actionName = {
                type: ownProps.typeOfAction,
                act: ownProps.type,
                value: ref,
                status: true,
                typeOfProduct: nameOfproduct,
                width: ref * 8.4

            }

            dispatch(actionName)

        },
        blur: (ref) => {
            let actionBlur = {
                type: ownProps.typeOfAction,
                act: ownProps.type,
                value: ref,
                status: false,
                typeOfProduct: nameOfproduct,
                width: ref * 8.4
            }
            dispatch(actionBlur)
        }
    }
}
const InputTextContainer = connect(mapStateToProps, mapDispatchToProps)(InputText)
export default InputTextContainer