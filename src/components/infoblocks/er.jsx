import style from "./infoblocks.module.css"

import { React } from 'react'
import { renderInputFromData } from "../../utils/utils";


const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'

const Er = (props) => {
    
    // let action = changeErFromCurrentActionCreator()
    // props.dispatch(action)

    let itemsPakets = []
    let itemsER = []

    renderInputFromData(CHANGE_CURRENT_PAKETS_ER, props.state.encyclopedias[0], itemsPakets, props)
    renderInputFromData(CHANGE_CURRENT_ER, props.state.encyclopedias[1], itemsER, props)

    return (
        <div className={style.items}>
            <h2>{props.state.encyclopedias[0].nameOfType}</h2>
            {itemsPakets}
            <h2>{props.state.encyclopedias[1].nameOfType}</h2>
            {itemsER}
        </div>
    )
}
export default Er
