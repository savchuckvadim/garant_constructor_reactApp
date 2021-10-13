import style from "./infoblocks.module.css"
import allLegalTech from '../../data/dataLegelTech'
import { renderInputFromData } from "../../utils/utils"


const TYPE = 'LT';

const action = {type: TYPE}



export const Legalblocks = (props) => {
    props.dispatch(action)
    let items = []
    renderInputFromData(props.state.legalTech, items, props);
    return (
        <div className={style.items}>
            <h2>{props.state.legalTech.nameOfType}</h2>
            {items}
        </div>
    )
}

export default Legalblocks