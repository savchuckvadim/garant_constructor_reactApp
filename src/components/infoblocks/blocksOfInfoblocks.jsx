import style from "./infoblocks.module.css"
import React from "react";
import CheckBoxContainer from "./checkbox-Container";

const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'

function BlocksOfInfoblocks(props) {

    let items = []
    let infoblocks = props.arrayForRender

    let infoblocksCreator = (number) => {

            return (
                <div key={`block-of-infoblocks-${number}`} className={style.items}>
                    <h2 className={style.title}>{infoblocks[number].nameOfType}</h2>
                    <CheckBoxContainer type={props.typeOfAction} array={infoblocks[number]} currentTheme={props.currentTheme} resultArray={items} store={props.store} state={props.state} />
                </div>
            )
        // }

    }


   
    if (props.typeOfAction === CHANGE_CURRENT_INFOBLOCKS) {
        for (let i = 0; i < infoblocks.length; i++) {

            items[i] = infoblocksCreator(i)
        }
        return (items)
    } else {
        return (
            <div className={style.items}>
                <h2 className={style.title}>{infoblocks.nameOfType}</h2>
                <CheckBoxContainer type={props.typeOfAction} array={infoblocks} currentTheme={props.currentTheme} resultArray={items} store={props.store} state={props.state} />
            </div>
        )
    }

}



export default BlocksOfInfoblocks
