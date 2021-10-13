import style from "./infoblocks.module.css"

import { React } from 'react'
import { renderInputFromData } from "../../utils/utils";


const TYPE = 'ER';


const Er = (props) => {
    
    props.dispatch({
        type: TYPE
    })

    let itemsPakets = []
    let itemsER = []

    renderInputFromData(props.state.encyclopedias[0], itemsPakets, props)
    renderInputFromData(props.state.encyclopedias[1], itemsER, props)

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
