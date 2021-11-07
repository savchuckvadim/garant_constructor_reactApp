


const ItemValueResult = (props) => {
    let result = props.state.result.currentResult
    debugger
    let values = [
        props.values.inputText,
        props.values.weight,
        props.values.od,
        props.values.ltIncluded,
        props.values.price,
        
        props.values.nameOflt,
        props.values.weightLt,
        props.values.priceOfLt,
        props.values.totalPrice

    ]
   
    let items = () => {
        let itemsArr = values.map((element) => {

            return <span className={props.styleSpanResult}>{element}</span>
        })
        return itemsArr
    }
  
    return (
        // <p id={props.id} className={props.styleText}><span>{props.title}</span><span className={props.styleSpanResult}>{props.value}</span></p>
        items()
    )
}

export default ItemValueResult