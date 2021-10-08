import { Link, NavLink } from "react-router-dom"
import style from "./link.module.css"


const OfferLinkBack = () => {
    

    return(
        <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>
    )
}

export default OfferLinkBack