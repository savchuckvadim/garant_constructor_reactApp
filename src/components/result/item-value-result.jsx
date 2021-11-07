


const ItemValueResult = (props) => {
    let result = props.state.result.currentResult
    
    let values = [
        props.inputText,
        result.weight,
        result.od,
        result.ltIncluded,
        props.state.price.currentPrice.value,
        
        result.nameOflt,
        result.weightLt,
        result.priceOfLt,
        result.totalPrice

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