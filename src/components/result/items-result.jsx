import { Tooltip } from "@material-ui/core";
import ItemTitleResult from "./item-title-result"
import ItemValueResult from "./item-value-result";



const ItemResult = (props) => {
  
    const titles = ItemTitleResult(props.state.result.resultItems);
    const values = ItemValueResult (props)
    let items = () => {
        let itemsArr = props.state.result.resultItems.map((element, index) => {
            if (element.title === 'Комплект') {
                return <p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>
            } else if (element.title === 'Вес') {
                return <p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>

            } else if (element.title === 'Количество доступов') {
                return <p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>

            } else if (element.title === 'Legal Tech в комплекте') {
                return <p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>

            }else if (element.title === 'Стоимость') {
                return <p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>

            } else if (element.title === 'Legal Tech') {
                return (
                    <Tooltip title={props.toolTipText}>
                        <p id={element.id}  style={props.styleLt} className={props.textLt} >{titles[index]}{values[index]}</p>
                    </Tooltip>
                )

            } else if (element.title === 'Вес LT') {
                
                return <p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>

            }  else if (element.title === 'Стоимость LT') {
                return <p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>

            } else if (element.title === 'Общая Стоимость') {
                return <p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>

            }


        })
        return itemsArr
    }

    return (
        // <p id={props.id} className={props.styleText}><span>{props.title}</span><span className={props.styleSpanResult}>{props.value}</span></p>
        items()
    )
}

export default ItemResult