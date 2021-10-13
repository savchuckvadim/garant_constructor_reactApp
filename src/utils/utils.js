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









const TYPE = 'CHECKBOX'
  export function renderInputFromData (array, resultArray, props){
    
const actionCreator = (value, checked, typeOfBlock, index) => {
   return {
    type : TYPE,
    value : value,
    checked : checked,
    typeOfBlock : typeOfBlock,
    index : index
   }
}

// let color = state.theme[state.indexOfTheme].backgroundColor
    let styleCheckbox = {
      color : props.state.theme[props.state.indexOfTheme].color
    }
    array.value.forEach((element, index) => {
      
      let action = actionCreator(element.name, element.checked, array.nameOfType, index)

      const changeCheckbox = () => {props.dispatch(action)}

      resultArray[index] = <p className="infoblock__p"><Checkbox style={styleCheckbox} id={index} onChange={changeCheckbox}  type="checkbox" className={`infochecks info__${array.nameOfType}`} checked={element.checked} disabled={false} value={element.name} />   {`  ${element.name}`} </p>;
  })
  }


  export function clickOnInput(){

  }