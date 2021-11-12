import { changeCheckBoxActionCreator } from "../../redux/redusers/checkBoxes-action"
import CheckBox from "./checkbox"
const CheckBoxContainer = (props) => {
  
  let items = []

  // let color = state.theme[state.indexOfTheme].backgroundColor
  let styleCheckbox = {
    color: props.currentTheme.color

  }
  props.array.value.forEach((element, index) => {
    let region = () => {
      if (element.name === 'Региональное законодательство') {
        window.alert('Ставропольский Край?')
      }
    }

    const changeCheckbox = () => {

      let state = props.store.getState()
      let currentComplect = state.currentComplect
      let action = changeCheckBoxActionCreator(props.type, element.name, element.checked, index, currentComplect, state)

      props.store.dispatch(action)
    }

    items[index] = 
    <CheckBox 
    key={`checkbox-${props.array.nameOfType}-${index}`}
    name={element.name} 
    nameOfType={props.array.nameOfType}
    checked={element.checked} 
    index={index} 
    styleCheckbox={styleCheckbox} 
    region={region} 
    changeCheckbox={changeCheckbox}/>
  })
  return items
}

export default CheckBoxContainer