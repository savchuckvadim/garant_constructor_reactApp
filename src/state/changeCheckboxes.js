import { startApp } from ".."

export const changeInfoblocks = (value, checked, type, state) => {
    console.log(type)
    let arrayOfcurrentComplectForChange = []
    arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
    if (checked) {
        arrayOfcurrentComplectForChange.forEach((elem, idx) => {
          if (elem === value) {
            arrayOfcurrentComplectForChange.splice(idx, 1)
          }
        })
      } else {
        arrayOfcurrentComplectForChange.push(value)

      }

  }

  export const changeER = (value, checked, type, state) => {
    console.log(type)
    let arrayOfcurrentComplectForChange = []
          arrayOfcurrentComplectForChange = state.currentComplect.currentER;
       
        
      
 
  }

  export const changeLt = (value, checked, type, state) => {
    let arrayOfcurrentComplectForChange = []
    arrayOfcurrentComplectForChange = state.currentComplect.currentER;
 
 
  }