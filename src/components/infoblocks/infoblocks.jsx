import style from "./infoblocks.module.css"

import legalblocks from "./legalTech";
import Er  from "./er";
import React from "react";


import { renderInputFromData } from "../../utils/utils";
let allInfoblocksArray = [];

function Infoblocks(number, state) {
    let styleWrapper = {
        width : '100vh'
    }
    let items = []
    if (state.currentComplect) {
        renderInputFromData(state.infoblocks[number], items, state)
    } else {
        renderInputFromData(state.infoblocks[number], items, state)
    }

    return (
        <div  className={style.items}>
            <h2>{state.infoblocks[number].nameOfType}</h2>
            {items}
        </div>

    )
}

function createInfoblocks(state) {
    let items = []
    for (let i = 0; i < state.infoblocks.length; i++) {
        console.log(state)
        items[i] = Infoblocks(i, state)
    }
    return (items)
}

// export const changeInfoblocksData = (state) => {

//     if (state.currentComplect) {
//         state.infoblocks.forEach((element) => {
//             element.value.forEach((elem) => {
//                 if (state.currentComplect.currentFilling.includes(elem.name)) { elem.checked = true }
//                 else elem.checked = false
//             })
//         })
//     }
// }



const AllInfoblocks = (props) => {
    props.state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    props.state.changePaketsErData()
    props.state.changeErData()
    return (
        <div id="menu" className={style.wrapper}>
            {createInfoblocks(props.state)}
            {Er(props.state)}
            {legalblocks(props.state)}

        </div>
    )
}

export default AllInfoblocks