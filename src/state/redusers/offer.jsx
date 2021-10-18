import { changeErAndPaketsErFromCurrent } from "./er";
import { changeInfoblocksFromCurrent } from "./infoblocks";
import { changeLTFromCurrent } from "./legalTech";



const OFFER = 'OFFER';

export const offerActionCreator = () => {

    return {
        type: OFFER
    }
}

export const offerLoader = (state, action) => {
    if (action.type === 'OFFER') {
        changeInfoblocksFromCurrent(state) //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
        changeErAndPaketsErFromCurrent(state)
        changeLTFromCurrent(state)
    }
 

    return state
}