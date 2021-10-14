import style from "./infoblocks.module.css"

import legalblocks, { Legalblocks } from "./legalTech";
import Er  from "./er";
import React from "react";


import { renderInputFromData } from "../../utils/utils";
import CreateNewBlocks from "./newBlocks";

const TYPE = 'INFOBLOCKS'



function CreateInfoblocks(props) {

    let infoblocks = (number) => {
        if(props.state.infoblocks[number].nameOfType !== 'NEW Blocks'){
            let items = []
            if (props.state.currentComplect) {
                renderInputFromData(props.state.infoblocks[number], items, props)
            } else {
                renderInputFromData(props.state.infoblocks[number], items, props)
            }
        
            return (
                <div  className={style.items}>
                    <h2 className={style.title}>{props.state.infoblocks[number].nameOfType}</h2>
                    {items}
                </div>
            )
        }
        
    }


    props.dispatch({
        type: TYPE
    }) //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
  
  
    let items = []
    for (let i = 0; i < props.state.infoblocks.length; i++) {
        
        items[i] = infoblocks(i)
    }
    return (items)
}




const AllInfoblocks = (props) => {
    
    // props.state.changePaketsErData()
    // props.state.changeErData()
    // props.state.changeltData()
    // props.state.weightLtForResult()
    return (
        <div id="menu" className={style.wrapper}>
            <CreateInfoblocks state={props.state} dispatch={props.dispatch}/>
            <Er state={props.state}  dispatch={props.dispatch}/>
            <Legalblocks state={props.state}  dispatch={props.dispatch} />
            <CreateNewBlocks state={props.state}  dispatch={props.dispatch} />

        </div>
    )
}

export default AllInfoblocks