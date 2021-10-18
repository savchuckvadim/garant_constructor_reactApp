import style from "./infoblocks.module.css"
import allLegalTech from '../../data/dataLegelTech'
import { renderInputFromData } from "../../utils/utils"
import { changeLtFromCurrentActionCreator } from "../../state/redusers/legalTech"

const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'


const action = changeLtFromCurrentActionCreator()



export const Legalblocks = (props) => {
    props.dispatch(action)
    let items = []
    renderInputFromData(CHANGE_CURRENT_LT, props.state.legalTech, items, props);
    return (
        <div className={style.items}>
            <h2>{props.state.legalTech.nameOfType}</h2>
            {items}
        </div>
    )
}

export default Legalblocks