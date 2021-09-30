import style from "./infoblocks.module.css"
import allLegalTech from '../../data/dataLegelTech'
import { renderInputFromData } from "../../utils/utils"

function createLegalblocks(state) {

    let items = []
    
    renderInputFromData(state.legalTech, items, state);

    return (
        <div className={style.items}>
            <h2>{allLegalTech.nameOfType}</h2>
            {items}
        </div>

    )
}



export const legalblocks = (state) => {
  
    let legaltechs = createLegalblocks(state);

    return (
        // <div id="menu" className={style.wrapper}>
            legaltechs

        // </div>
    )
}

export default legalblocks