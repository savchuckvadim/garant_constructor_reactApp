
import { Button} from "@material-ui/core"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import ItemResult from "./items-result"
import style from "./result.module.css"

const Result = (props) => {

 
    let containerStyle = {
        borderColor: 'rgb(160, 179, 179)',        
    }

        return (
            <div id="" style={containerStyle} className={style.result__container}>
                <div className={style.information}>
                    <ItemResult values={props.values} state={props.state} styleLt={props.values.styleLt} textLt={style.textLt} styleText={style.text} styleSpanResult={style.spanResult} />
      
                    <p className={style.text}> <NavLink className={style.text} as={Link} to="/description"> Описание комплекта </NavLink></p>
                </div>
                <NavLink className="result__text btn btn-primary result__btn" style={props.values.styleResult} as={Button} to="/deal">Выбрать комплект</NavLink>

            </div>
        )
    
}

export default Result