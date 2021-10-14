import style from "./infoblocks.module.css"
import { renderInputFromData } from "../../utils/utils";

const TYPE = 'INFOBLOCKS'



function CreateNewBlocks(props) {

    let newblocks = (number) => {
        let items = []
        if (props.state.infoblocks[number].nameOfType === 'NEW Blocks') {
            if (props.state.currentComplect) {
                renderInputFromData(props.state.infoblocks[number], items, props)
            } else {
                renderInputFromData(props.state.infoblocks[number], items, props)
            }

            return (
                <div className={style.items}>
                    <h2>{props.state.infoblocks[number].nameOfType}</h2>
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

        items[i] = newblocks(i)
    }
    return (items)
}


export default CreateNewBlocks