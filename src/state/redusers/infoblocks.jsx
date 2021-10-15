export const changeInfoblocks = (value, checked, state) => {  //меняет текущее наполнение в сcurrentComplect

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

export const  changeInfoblocksData = (state) => { //меняет стэйт в соответствии с currentComplect

    if (state.currentComplect) {
    
        state.infoblocks.forEach((element) => {
          element.value.forEach((elem) => {
            if (state.currentComplect.currentFilling.includes(elem.name)) {
              elem.checked = true
            } else elem.checked = false

            if(state.currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника'){
              elem.checked = true
            }
          })
        })
     
    }else{
      state.infoblocks.forEach((element) => {
        element.value.forEach((elem) => {
         
            elem.checked = false
         
        })
      })
    }
  }