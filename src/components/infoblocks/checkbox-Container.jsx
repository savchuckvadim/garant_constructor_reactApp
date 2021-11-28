import { connect } from "react-redux"
import { changeCheckBoxActionCreator } from "../../redux/redusers/checkBoxes-action"
import CheckBox from "./checkbox"

let mapStateToProps = (state, ownProps) => {
  let styleCheckbox = {
    color: ownProps.currentTheme.color

  }
  return {
    key: ownProps.key,
    name: ownProps.name,
    nameOfType: ownProps.nameOfType,
    checked: ownProps.checked,
    index: ownProps.index,
    styleCheckbox: styleCheckbox,
    type: ownProps.type,
    state: state,
    currentComplect: state.currentComplect

  }
}
let mapDispatchToProps = (dispatch, ownProps) => {

  return {
    changeCheckbox: (currentComplect, state) => {

      let action = changeCheckBoxActionCreator(ownProps.type, ownProps.name, ownProps.checked, ownProps.index, currentComplect, state)
      dispatch(action)
    }
  }
}
const CheckBoxContainer = connect(mapStateToProps, mapDispatchToProps)(CheckBox)
export default CheckBoxContainer