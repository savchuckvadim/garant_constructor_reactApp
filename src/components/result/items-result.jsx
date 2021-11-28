// import { Tooltip } from "@material-ui/core";
import ItemTitleResult from "./item-title-result"
import ItemValueResult from "./item-value-result";


const ItemResult = (props) => {
    const titles = ItemTitleResult(props.state.result.resultItems);
    const values = ItemValueResult(props)
    let itemsArr = []

    let items = () => {

        props.state.result.resultItems.forEach((element, index) => {
            let className
            let style = {
                display: 'flex'
            }
            if (element.type === 'base') {
                className = props.styleText
            } else if (element.type === 'widthLt') {
                className = props.textLt
                style = props.values.styleLt
            }
            let item = <div style={style} key={`result-item-${element.type}-${index}`} id={element.id} className={className}>{titles[index]}{values[index]}</div>
            itemsArr.push(item)
        })

        return itemsArr
    }

    return (
        items()
    )
}

export default ItemResult