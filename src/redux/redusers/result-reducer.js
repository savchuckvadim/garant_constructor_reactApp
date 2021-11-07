const RESULT = 'RESULT';
const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS';
const CREATE_COMPLECT = 'CREATE_COMPLECT';
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER';
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER';
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT';
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
const INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT = 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'

//state.currentOd
//state.legalTech.display
//state.currentComplect
//state.allComplects[state.currentComplect.number].color,
//state.infoblocks
//state.currentPrice
// state.encyclopedias
let initialState = {

    currentResult: {
        styleResult: {
            backgroundColor: 'grey',
            color: 'white',
            textDecoration: 'none'
        },
        name: 'название комплекта',
        od: '',
        weight: '',
        price: '',

        styleLt: {
            display: 'none'
        },
        ltIncluded: 0,
        weightLt: 0,
        nameOflt: 'Legal Tech',
        priceOfLt: `0. 00 p`,
        totalPrice: `0. 00 p`,

    },

    'status': '',
    'resultItems': [{
            title: 'Комплект',
            id: 'complect__name',
        },
        {
            title: 'Вес',
            id: 'blocksWeight',
        },
        {
            title: 'Количество доступов',
            id: 'pod',
        },
        {
            title: 'Legal Tech в комплекте',
            id: 'complect__name',
        },
        {
            title: 'Стоимость',
            id: 'complect__price',
        },
        {
            title: 'Legal Tech',
            id: 'complect__lt',
        },
        {
            title: 'Вес LT',
            id: 'complect__lt',
        },

        {
            title: 'Стоимость LT',
            id: 'complect__lt',
        },
        {
            title: 'Общая Стоимость',
            id: 'complect__lt',
        }


    ]

}



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





export const result = (state = initialState, action) => {

    if (action.type === RESULT 
        || action.type === CHANGE_CURRENT_INFOBLOCKS 
        // || action.type === CREATE_COMPLECT 
        || action.type === CHANGE_CURRENT_ER 
        || action.type === CHANGE_CURRENT_PAKETS_ER 
        || action.type === CHANGE_CURRENT_LT 
        || action.type === CHANGE_CURRENT_OD 
        || action.type === INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT) {

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

            currentPrice = state.price.currentPrice.value


            ltIncluded = state.legalTech.ltIncluded
            weightLt = state.legalTech.weightLt
            nameOflt = state.legalTech.nameOflt
            priceOfLt = state.legalTech.priceOfLt
            totalPrice = currentPrice + priceOfLt

            state.currentResult = {
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
    return state

}