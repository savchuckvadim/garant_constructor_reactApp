import  style  from "./offerNameAndOd.module.css"



const NameAndOd = (props) => {

    return(
        <div  className={style.wrapper}>
            <h1 className={style.name}>{`Гарант ${props.state.currentComplect.name}`}</h1>
                <p className={style.od}>{props.state.currentOd}</p>
        </div>
    )
}

export default NameAndOd