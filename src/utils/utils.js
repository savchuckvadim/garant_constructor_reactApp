import { Checkbox } from "@material-ui/core";
import { changeCheckBoxActionCreator } from "../redux/redusers/checkBoxes-action";


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









// const TYPE = 'CHECKBOX'
  export function renderInputFromData (type, array, resultArray, props){



let region = (name) => {
  if(name === 'Региональное законодательство'){
  window.alert('Ставропольский Край?')
}
}

// let color = state.theme[state.indexOfTheme].backgroundColor
    let styleCheckbox = {
      color : props.state.theme.style[props.state.theme.indexOfTheme].color
    }
    array.value.forEach((element, index) => {
     
      

      const changeCheckbox = () => {
        let currentComplect = props.state.currentComplect
        let action = changeCheckBoxActionCreator(type, element.name, element.checked, index, currentComplect, props.state )
        props.dispatch(action)
      }
      
      resultArray[index] =<label> <p onClick={() => {region(element.name)}} className="infoblock__p"><Checkbox className={`infochecks info__${array.nameOfType}`} style={styleCheckbox} id={index} onChange={changeCheckbox}  type="checkbox"  checked={element.checked} disabled={false} value={element.name} />   {`  ${element.name}`} </p></label> ;
  })
  }


  export function clickOnInput(){

  }