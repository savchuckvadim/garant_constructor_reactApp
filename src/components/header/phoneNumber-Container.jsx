import { connect } from "react-redux";
import { phoneActionCreator } from "../../redux/redusers/phoneNumber-reducer"
import PhoneNumber from './phoneNumber';


const ACT_CHANGE = 'CHANGE_PHONE'
                        

let mapStateToProps = (state) => {
    return {
        state,
        value: state.phoneNumber.value,
        width: state.phoneNumber.value.length,

        style: {
            color: state.theme.style[state.theme.indexOfTheme].color,
            textColor: state.theme.style[state.theme.indexOfTheme].textColor
        }
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changePhoneNumber: (ref) => {
            let action = phoneActionCreator(ACT_CHANGE, ref)
            dispatch(action)
        },
    }
}
const PhoneNumberContainer = connect(mapStateToProps, mapDispatchToProps)(PhoneNumber)
export default PhoneNumberContainer