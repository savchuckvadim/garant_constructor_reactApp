


const ItemValueResult = (props) => {
    
    let valuesBase = [
        props.values.inputText,
        props.values.weight,
        props.values.od,
        props.values.ltIncluded,
        props.values.price,

    ]
    let valuesWidthLt = [
        props.values.nameOflt,
        props.values.weightLt,
        props.values.priceOfLt,
        props.values.totalPrice

    ]
   
    let itemsBase = () => {
        let resultArr = valuesBase.map((element) => {

            return <span key={element} className={props.styleSpanResult}>{element}</span>
        })
        return resultArr
    }

    let itemsWidthLt = () => {
        let resultArr = valuesWidthLt.map((element) => {

            return <span key={element} className={props.styleSpanResult}>{element}</span>
        })
        return resultArr
    }
    
  let allItems = []
  allItems.push(itemsBase())
  allItems.push(itemsWidthLt())
  

    return (
        // <p id={props.id} className={props.styleText}><span>{props.title}</span><span className={props.styleSpanResult}>{props.value}</span></p>
       { allItems}
    )
}

export default ItemValueResult