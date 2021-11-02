


const ItemTitleResult = (resultItems) => {

    let items = () => {
      let itemsArr =  resultItems.map((element) => {
          
              return <span>{element.title}</span>
         

        })
        return itemsArr 
    }

    return (
        // <p id={props.id} className={props.styleText}><span>{props.title}</span><span className={props.styleSpanResult}>{props.value}</span></p>
        items()
    )
}

export default ItemTitleResult