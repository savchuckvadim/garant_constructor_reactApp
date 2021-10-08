import { getThemeProps } from "@material-ui/system"
import { Link, NavLink } from "react-router-dom"
import style from "./offer.module.css"
import Included from "./offerIncluded"
import OfferLinkBack from "./offerLinkBack"
import TableOffer from "./offerPrice"
import PhoneNumber from "./phoneNumber"


const Offer = (state) => {

    state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    state.changePaketsErData()
    state.changeErData()
    state.changeltData()
    state.weightLtForResult()
    if (state.currentComplect) {

       

        return (
            <div className={style.wrapper}>
               
                <h1>{state.currentComplect.name}</h1>
                <p>{state.currentComplect.od}</p>
                {/* <h3 className={style.titleOfIncluded}> Информационное наполнение Системы Гарант </h3> */}
                <Included state={state} />
                
                <TableOffer state={state} />
                {/* <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1> */}
                <OfferLinkBack />
            </div>
        )
    } else {
        return (<div>
            <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>
        </div>)
    }
}

export default Offer