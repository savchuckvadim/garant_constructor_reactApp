import { Checkbox } from "@material-ui/core";


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
// console.log(state.theme[state.indexOfTheme])
// let color = state.theme[state.indexOfTheme].backgroundColor
    let styleCheckbox = {
      color : 'black'
    }
    array.value.forEach((element, index) => {
      resultArray[index] = <p className="infoblock__p"><Checkbox style={styleCheckbox} id={index} onChange={() =>{state.changeCheckbox(element.name, element.checked, array.nameOfType, index)}}  type="checkbox" className={`infochecks info__${array.nameOfType}`} checked={element.checked} disabled={false} value={element.name} />   {`  ${element.name}`} </p>;
  })
  }


  export function clickOnInput(){

  }