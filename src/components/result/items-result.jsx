import { Tooltip } from "@material-ui/core";
import ItemTitleResult from "./item-title-result"
import ItemValueResult from "./item-value-result";



const ItemResult = (props) => {
    const titles = ItemTitleResult(props.state.result.resultItems);
    const values = ItemValueResult(props)
    let itemsArr = []

    let items = () => {
        props.state.result.resultItems.forEach((element, index) => {
            if (element.type === 'base') {
                itemsArr.push(<p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>)
            } else if (element.type === 'widthLt') {
                if (element.title === 'Legal Tech') {
                    itemsArr.push(
                        <>
                        <Tooltip title={props.toolTipText}>
                            <p id={element.id} style={props.styleLt} className={props.textLt} >{titles[index]}{values[index]}</p>)
                        </Tooltip>
                        </>
                    )
                }else{
                    itemsArr.push(<p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>)

                }
            }
        })
        
        // props.state.result.resultItems.forEach((element, index) => {
        //     if (element.title === 'Комплект') {
        //         itemsArr.push(<p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>)
        //     } else if (element.title === 'Вес') {
        //         itemsArr.push(<p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Количество доступов') {
        //         itemsArr.push(<p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Legal Tech в комплекте') {
        //         itemsArr.push(<p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Стоимость') {
        //         itemsArr.push(<p id={element.id} className={props.styleText}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Legal Tech') {
        //         itemsArr.push(
        //             <Tooltip title={props.toolTipText}>
        //                 <p id={element.id} style={props.styleLt} className={props.textLt} >{titles[index]}{values[index]}</p>)
        //             </Tooltip>
        //         )

        //     } else if (element.title === 'Вес LT') {

        //         itemsArr.push(<p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Стоимость LT') {
        //         itemsArr.push(<p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>)

        //     } else if (element.title === 'Общая Стоимость') {
        //         itemsArr.push(<p id={element.id} style={props.styleLt} className={props.textLt}>{titles[index]}{values[index]}</p>)

        //     } else {
        //         itemsArr.push(null)
        //     }


        // })
        return itemsArr
    }

    return (
        items()
    )
}

export default ItemResult