import style from "./infoblocks.module.css"
import { renderInputFromData } from "../../utils/utils"

const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'





export const Legalblocks = (props) => {
    // props.dispatch(action)
    let items = []
    renderInputFromData(CHANGE_CURRENT_LT, props.state.legalTech, items, props);
    return (
        <div className={style.items}>
            <h2 className={style.title}>{props.state.legalTech.nameOfType}</h2>
            {items}
        </div>
    )
}

export default Legalblocks