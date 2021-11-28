
import React from "react"
import { connect } from "react-redux"
import InputTextContainer from "../main/textInput-Container"
import Result from "./result"
import style from "./result.module.css"

let mapStateToProps = (state) => {
    const getWeight = (state) => {
        let info = 0;
        let er = 0;
        let totalweight = 0;
    
        state.infoblocks.forEach(element => {
            element.value.forEach(elem => {
                if (elem.checked === true) {
                    info += elem.weight
                }
            })
        })
    
        state.encyclopedias.forEach(element => {
            element.value.forEach(elem => {
    
                if (elem.checked === true) {
                    er += elem.weight
                }
            })
        })
    
        totalweight = info + er
        
        return totalweight
    };
    let weight = getWeight(state);
    let weightLt = state.legalTech.weightLt;
    let price = state.price.currentPrice.value;
    let priceOfLt = state.legalTech.priceOfLt;
    let totalPrice = price + priceOfLt;
    let width = state.currentComplect.name.length * 8.4;

    let getToolTipText = () => {

        return (
            <div className={style.information}>
                <pre>Малый пакет Legal Tech   - 2 сервиса </pre>
                <pre>Средний пакет Legal Tech - 5 сервисов </pre>
                <pre>Большой пакет Legal Tech - 11 сервиса </pre>
                <p> Сейчас набрано - <span className={style.spanResult}>{weightLt}</span> </p>
            </div>
        )
    };
    let toolTip = getToolTipText();
    let input = <InputTextContainer
        // state={state}
        // dispatch={props.dispatch}
        
        type="nameOfComplect"
        // autofocus={state.currentComplect.currentStatusInputComplectName}
        value={state.currentComplect.name}
        // placeholder='Гарант'
        width={width}
        typeOfAction="INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT"

    />



    let resultValues = {
        name: state.currentComplect.name,
        od: state.od.currentOd,
        ltIncluded: state.legalTech.ltIncluded,
        nameOflt: state.legalTech.nameOflt,

        styleLt: {
            display: state.legalTech.display
        },
        styleResult: {
            backgroundColor: state.currentComplect.color,
            color: 'white',
            textDecoration: 'none'
        },


        weight: weight,
        weightLt: weightLt,
        price: price,
        priceOfLt: priceOfLt,
        totalPrice: totalPrice,
        width: width,
        toolTipText: toolTip,
        inputText: input
    }
    return {
     values: resultValues,
     state: state,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
       
    }
}
const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result)
export default ResultContainer