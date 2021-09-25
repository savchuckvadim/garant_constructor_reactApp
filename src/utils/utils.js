// import { ComplectClass, Complect } from "../components/complect/complect";

import { changeCheckbox } from "../state/state";

// import { infoblockFunction } from "../components/infoblocks/infoblocks";



export const getFromStorage = function (key) {
  
    return JSON.parse(localStorage.getItem(key) || "[]");
  };
  
export const addToStorage = function (obj, key) {
    // const storageData = getFromStorage(key);
    // storageData.push(obj);
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(obj));
  };

export const searchIncludedInfoblocks = (state, name) => {
  if(state.currentComplect){
       return state.currentComplect.currentFilling.includes(name)
  }else return  false
}










  export function renderInputFromData (array, resultArray, state){
    array.value.forEach((element, index) => {
      resultArray[index] = <p className="infoblock__p"><input id={index} onChange={() =>{changeCheckbox(element.name, element.checked, array.nameOfType, state, index)}}  type="checkbox" className={`infochecks info__${array.nameOfType}`} checked={element.checked} disabled={false} value={element.name} />{element.name} </p>;
  })
  }


  export function clickOnInput(){

  }