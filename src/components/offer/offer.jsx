import { getThemeProps } from "@material-ui/system"
import { Link, NavLink } from "react-router-dom"
import style from "./offer.module.css"
import Included from "./offerIncluded"
import OfferLinkBack from "./offerLinkBack"
import NameAndOd from "./offerNameAndOd"
import TableOffer from "./offerPrice"
import PhoneNumber from "./offerPhoneNumber"
import DescriptionOfGarant from "./offerDescriptionOfGarant"

const TYPE = 'OFFER'
const Offer = (props) => {
    

    // state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    // state.changePaketsErData()
    // state.changeErData()
    // state.changeltData()
    // state.weightLtForResult()
    // let result =
     props.dispatch({type: TYPE })
    if (props.state.currentComplect) {

       
debugger
        return (
            <div className={style.wrapper}>
                
               <NameAndOd state={props.state} dispatch={props.dispatch}  />
            
                <Included state={props.state} dispatch={props.dispatch}  />
                
                <DescriptionOfGarant/>
                <div>Минимальный аванс 1 месяц</div>
                {/* {возможность убирать надпись} */}
                <TableOffer state={props.state} dispatch={props.dispatch} />
                {/* <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1> */}

                <OfferLinkBack />
            </div>
        )
    } else {
        return ( <OfferLinkBack />)
    }
}

export default Offer