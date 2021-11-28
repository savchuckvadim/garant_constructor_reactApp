import style from "./infoblocks.module.css"
import React from "react";
import CheckBoxContainer from "./checkbox-Container";

const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'

function BlocksOfInfoblocks(props) {

    let blocksOfInfoblocks =
        props.allBlocksFromState.map(block => {
            let items = []

            const checkBoxesCreator = (arr, typeOfAction) => {
                let items = []
                arr.value.forEach((element, index) => {
                    items.push(
                        <CheckBoxContainer key={`${arr.nameOfType}-${index}`} type={typeOfAction} name={element.name} index={index} nameOfType={arr.nameOfType} checked={element.checked} currentTheme={props.currentTheme} />
                    )

                })
                return items

            }
            const infoblocksCreator = (number) => {

                return (
                    <div key={`blocks-${block.arrayForRender[number].nameOfType}-${number}`} className={style.items}>
                        <h2 key={`block-h2-${number}`} className={style.title}>{block.arrayForRender[number].nameOfType}</h2>
                        {checkBoxesCreator(block.arrayForRender[number], block.typeOfAction)}
                    </div>
                )
                // }

            }


            if (block.typeOfAction === CHANGE_CURRENT_INFOBLOCKS) {
                for (let i = 0; i < block.arrayForRender.length; i++) {

                    items[i] = infoblocksCreator(i)
                }

            } else {

                items =
                    <div key={`blocks-${block.arrayForRender.nameOfType}`} className={style.items}>
                        <h2 key={`block-h2-${block.arrayForRender.nameOfType}`} className={style.title}>{block.arrayForRender.nameOfType}</h2>
                        {checkBoxesCreator(block.arrayForRender, block.typeOfAction)}
                    </div>

            }
            return items

        })
    return (
        <div id="menu" className={style.wrapper}>
            {blocksOfInfoblocks}
        </div>
    )
}



export default BlocksOfInfoblocks
