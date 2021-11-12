
import React from "react"
import InputText from "../main/textInput"
import Result from "./result"
import style from "./result.module.css"

const ResultContainer = (props) => {
    

    let state = props.store.getState();
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
    let price = state.price.currentPrice.value;
    let priceOfLt = state.legalTech.priceOfLt;
    let totalPrice = price + priceOfLt;
    let width = props.state.currentComplect.name.length * 8.5;
    let weightLt = state.legalTech.weightLt;
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
    let input = <InputText
        state={state}
        dispatch={props.dispatch}
        type="nameOfComplect"
        autofocus={state.currentComplect.currentStatusInputComplectName}
        value={state.currentComplect.name}
        placeholder='Гарант'
        width={width}
        typeOfAction="INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT"

    />
    
    let resultValues = {
        name: props.state.currentComplect.name,
        weight: weight,
        od: state.od.currentOd,
        price: price,

        ltIncluded: state.legalTech.ltIncluded,
        nameOflt: state.legalTech.nameOflt,
        weightLt: weightLt,
        priceOfLt: priceOfLt,
        styleLt: {
            display: state.legalTech.display
        },

        totalPrice: totalPrice,
        width: width,
        styleResult: {
            backgroundColor: props.state.currentComplect.color,
            color: 'white',
            textDecoration: 'none'
        },
        toolTipText: toolTip,
        inputText: input
    }

    
    return (

        <Result state={props.state} dispatch={props.dispatch} values={resultValues} />

    )

}

export default ResultContainer