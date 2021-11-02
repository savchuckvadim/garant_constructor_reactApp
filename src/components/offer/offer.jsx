import { getThemeProps } from "@material-ui/system"
import { Link, NavLink } from "react-router-dom"
import style from "./offer.module.css"
import Included from "./offerIncluded"
import OfferLinkBack from "./offerLinkBack"
import NameAndOd from "./offerNameAndOd"
import TableOffer from "./offerPrice"
import PhoneNumber from "./offerPhoneNumber"
import DescriptionOfGarant from "./offerDescriptionOfGarant"
import InputText from "../main/textInput"

const TYPE = 'OFFER'
const Offer = (props) => {
    
    let styleFromState = {
        // backgroundColor: props.style.background,
        transitionProperty: props.style.transitionProperty,
        transitionDuration: props.style.transitionDuration,
        transitionDelay: props.style.transitionDelay,
        color: props.style.color,
      

    }
    // state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    // state.changePaketsErData()
    // state.changeErData()
    // state.changeltData()
    // state.weightLtForResult()
    // let result =
    //  props.dispatch({type: TYPE })
    if (props.state.currentComplect) {

       

        return (
            <div className={style.wrapper} style={styleFromState} >
                
               <NameAndOd state={props.state} dispatch={props.dispatch}  />
            
                <Included state={props.state} dispatch={props.dispatch}  />
                
                {/* <DescriptionOfGarant/> */}
                {/* <InputText state={props.state} dispatch={props.dispatch} type=""/> */}
                <InputText 
                    state={props.state} 
                    dispatch={props.dispatch} 
                    type="prepaid"
                    autofocus={props.state.currentPrepaid.status}
                    value = {props.state.currentPrepaid.value}
                    placeholder={props.state.currentPrepaid.value}
                    width={"100%"}
                    typeOfAction="INPUT_CHANGE_PREPAID"
                    />
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