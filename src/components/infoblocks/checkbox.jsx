import { Checkbox } from "@material-ui/core"
import style from "./checkbox.module.css"
const CheckBox = (props) => {

  //props.region()
  //props.changeCheckBox()
  //props.array.nameOfType
  //props.index
  //props.checked
  //props.name




  return <label
  key={`label-checkbox-${props.nameOfType}-${props.index}`}
    >
    <p
      onClick={props.region}
      className={style.infoblock__p}>
      <Checkbox
      key={`checkbox-${props.nameOfType}-${props.index}`}
        className={`infochecks info__${props.nameOfType}`}
        style={props.styleCheckbox}
        id={`checkbox-${props.nameOfType}-${props.index}`} 
        onChange={props.changeCheckbox}
        type="checkbox"
        checked={props.checked}
        disabled={false}
        value={props.name} />
      {props.name}
    </p></label>;
}

export default CheckBox