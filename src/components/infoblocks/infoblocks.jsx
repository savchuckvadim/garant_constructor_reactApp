import style from "./infoblocks.module.css"
import allInfoblocksData from '../../data/dataInfoblocks'
import legalblocks from "./legalTech";
import Er, { changeErData, changePaketsErData } from "./er";
import React from "react";


import { renderInputFromData } from "../../utils/utils";
let allInfoblocksArray = [];

function Infoblocks(number, state) {
    console.log(allInfoblocksData)
    let items = []
    if (state.currentComplect) {
        renderInputFromData(allInfoblocksData[number], items, state)
    } else {
        renderInputFromData(allInfoblocksData[number], items, state)
    }

    return (
        <div className={style.items}>
            <h2>{allInfoblocksData[number].nameOfType}</h2>
            {items}
        </div>

    )
}

function createInfoblocks(state) {
    let items = []
    for (let i = 0; i < allInfoblocksData.length; i++) {
        items[i] = Infoblocks(i, state)
    }
    return (items)
}

export const changeInfoblocksData = (state) => {

    if (state.currentComplect) {
        allInfoblocksData.forEach((element) => {
            element.value.forEach((elem) => {
                if (state.currentComplect.currentFilling.includes(elem.name)) { elem.checked = true }
                else elem.checked = false
            })
        })
    }
}



const AllInfoblocks = (props) => {
    changeInfoblocksData(props.state)  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    changePaketsErData(props.state)
    changeErData(props.state)
    return (
        <div id="menu" className={style.wrapper}>
            {createInfoblocks(props.state)}
            {Er(props.state)}
            {legalblocks()}

        </div>
    )
}

export default AllInfoblocks