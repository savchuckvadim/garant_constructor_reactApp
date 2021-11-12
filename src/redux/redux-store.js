import { combineReducers, createStore } from 'redux';
import { currentComplect } from './redusers/currentComplect-reducer';
import { changeErAndPaketsErFromCurrent } from './redusers/enciclopedias-reducer';
import { infoblocks } from './redusers/infoblocks-reducer';
import { changeColorOfButton } from './redusers/allComplects-reducer';
import { changeLTFromCurrent  } from './redusers/legalTech-reducer';
// import { changeNameOfComplect } from './redusers/nameOfComplect-reducer';
import { oD } from './redusers/od-reducer';
import { changeDataPhone } from './redusers/phoneNumber-reducer';
// import { changePrepaid } from './redusers/prepaid-reducer';
import { priceReducer } from './redusers/price-reducer';
// import { reset } from './redusers/reset-reducer';
import { theme } from './redusers/theme-reducer';
import { result } from './redusers/result-reducer';
// import weightReducer from './redusers/weight-reduser';



// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'counter/decremented':
//         return { value: state.value - 1 }
//       default:
//         return state
//     }
//   };
  

let reducers = combineReducers({
    allComplects: changeColorOfButton,
    currentComplect: currentComplect,
    infoblocks,
    encyclopedias: changeErAndPaketsErFromCurrent,
    legalTech : changeLTFromCurrent,
    // changeNameOfComplect, 
    od : oD,
    phoneNumber: changeDataPhone,
    // changePrepaid,
    price: priceReducer,
    // weight: weightReducer,
    // reset,
    theme: theme,
    result: result

});
let store = createStore(reducers)


 export default store