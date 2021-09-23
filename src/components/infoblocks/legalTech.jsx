import style from "./infoblocks.module.css"
import allLegalTech from '../../data/dataLegelTech'
import { renderInputFromData } from "../../utils/utils"

function createLegalblocks() {

    let items = []
    renderInputFromData(allLegalTech, items);

    return (
        <div className={style.items}>
            <h2>{allLegalTech.nameOfType}</h2>
            {items}
        </div>

    )
}



export const legalblocks = () => {
  
    let legaltechs = createLegalblocks();

    return (
        <div id="menu" className={style.wrapper}>
            {legaltechs}

        </div>
    )
}

export default legalblocks