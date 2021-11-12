import style from "./infoblocks.module.css"
import React from "react";
import CheckBox from "./checkbox";

//Rename for group of infoBlocks 
//вызывать по перебору массива из родительского контейнера 
//типа [CHANGE_CURRENT_INFOBLOCKS, CHANGE_CURRENT_PAKETS_E и тд]
//остальные подобные компоненты удалить er.jsx legalTech.jsx, newBlocks
//Данная компонента возвращает разметку груупы Инфоблоков 
//и Контейнер компоненты Чекбокс в которой формируется 
//action
// функция Change  
const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS';

function CreateInfoblocks(props) { 
    
  let state = props.store.getState()
  let infoblocks = state.infoblocks
    let infoblocksCreator = (number) => {
        if (infoblocks[number].nameOfType !== 'Новые блоки') {

            let items = []


            return (
                <div className={style.items}>
                    <h2 className={style.title}>{infoblocks[number].nameOfType}</h2>
                    <CheckBox type={CHANGE_CURRENT_INFOBLOCKS} array={infoblocks[number]} resultArray={items} store={props.store} state={props.state}/>
                </div>
            )
        }

    }


    // props.dispatch(action) //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта


    let items = []
    for (let i = 0; i < infoblocks.length; i++) {

        items[i] = infoblocksCreator(i)
    }
    return (items)
}



export default CreateInfoblocks
