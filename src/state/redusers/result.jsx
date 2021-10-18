
import { price } from "./price";

const RESULT = 'RESULT';

export const resultActionCreator = () => {

    return {
        type: RESULT
    }
}

const weightForResult = (state) => {
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
}
export const result = (state) => {

    let styleResult = {
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none'
    }
    let name
    let weight
    

    let od = state.currentOd
    let currentPrice = ' 0. 00'


    let styleLt = {
        display: state.legalTech.display
    }
    let ltIncluded
    let weightLt
    let nameOflt
    let priceOfLt
    let totalPrice

    if (state.currentComplect) {


        styleResult = {
            backgroundColor: state.allComplects[state.currentComplect.number].color,
            color: 'white',
            textDecoration: 'none'
        }
        name = state.currentComplect.name
        weight = weightForResult(state);
       
        od = state.currentOd.substr(0, 2)
        currentPrice = price(state)

        ltIncluded = state.legalTech.ltIncluded
        weightLt = state.legalTech.weightLt
        nameOflt = state.legalTech.nameOflt
        priceOfLt = state.legalTech.priceOfLt
        totalPrice = currentPrice + priceOfLt

        return {
            styleResult: styleResult,
            name: name,
            od: od,
            weight: weight,
            price: currentPrice,

            styleLt: styleLt,
            ltIncluded: ltIncluded,
            weightLt: weightLt,
            nameOflt: nameOflt,
            priceOfLt: `${priceOfLt} p`,
            totalPrice: totalPrice,

        }
    }

}