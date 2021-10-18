import style from "./infoblocks.module.css"
import React from "react";
import { renderInputFromData } from "../../utils/utils";
import { changeInfoblocksFromCurrentFillingActionCreator } from "../../state/redusers/infoblocks";

const changeType = 'CHANGE_CURRENT_INFOBLOCKS';

function CreateInfoblocks(props) {
    let action = changeInfoblocksFromCurrentFillingActionCreator()

    let infoblocksCreator = (number) => {
        if (props.state.infoblocks[number].nameOfType !== 'Новые блоки') {

            let items = []
            if (props.state.currentComplect) {
                renderInputFromData(changeType, props.state.infoblocks[number], items, props)
            } else {
                renderInputFromData(changeType, props.state.infoblocks[number], items, props)
            }

            return (
                <div className={style.items}>
                    <h2 className={style.title}>{props.state.infoblocks[number].nameOfType}</h2>
                    {items}
                </div>
            )
        }

    }


    props.dispatch(action) //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта


    let items = []
    for (let i = 0; i < props.state.infoblocks.length; i++) {

        items[i] = infoblocksCreator(i)
    }
    return (items)
}



export default CreateInfoblocks
