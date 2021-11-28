


const ItemValueResult = (props) => {
    let items
    let values = [
        props.values.inputText,
        props.values.weight,
        props.values.od.substr(0,2),
        props.values.ltIncluded,
        props.values.price,
        props.values.nameOflt,
        props.values.weightLt,
        props.values.priceOfLt,
        props.values.totalPrice

    ]


    items = values.map(element => {

        return <span key={element} className={props.styleSpanResult}>{element}</span>

    })
  
 return items
  

}

export default ItemValueResult