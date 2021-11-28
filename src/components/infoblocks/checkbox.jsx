import { Checkbox } from "@material-ui/core"
import style from "./checkbox.module.css"


const CheckBox = (props) => {
  return (
    <label
      key={`label-checkbox-${props.nameOfType}-${props.index}`}
    >
      <p
        onClick={props.region}
        className={style.infoblock__p}>
        <Checkbox
          key={props.key}
          className={`infochecks info__${props.nameOfType}`}
          style={props.styleCheckbox}
          id={`checkbox-${props.nameOfType}-${props.index}`}
          onChange={() => {props.changeCheckbox(props.currentComplect, props.state)}}
          type="checkbox"
          checked={props.checked}
          disabled={false}
          value={props.name} />
        {props.name}
      </p>
    </label>)
}

export default CheckBox