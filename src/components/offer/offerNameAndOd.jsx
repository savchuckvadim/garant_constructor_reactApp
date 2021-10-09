import  style  from "./nameAndOd.module.css"



const NameAndOd = (props) => {

    return(
        <div  className={style.wrapper}>
            <h1 className={style.name}>{props.state.currentComplect.name}</h1>
                <p>{props.state.currentComplect.od}</p>
        </div>
    )
}

export default NameAndOd