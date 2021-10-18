
const CHANGE_INFOBLOCKS_FROM_CURRENT = 'CHANGE_INFOBLOCKS_FROM_CURRENT'


export const changeInfoblocksFromCurrentFillingActionCreator = () => {
  return {
    type : CHANGE_INFOBLOCKS_FROM_CURRENT
  }
}



export const  changeInfoblocksFromCurrent = (state) => { //меняет стэйт в соответствии с currentComplect

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