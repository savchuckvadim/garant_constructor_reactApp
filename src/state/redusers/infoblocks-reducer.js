const CHANGE_INFOBLOCKS_FROM_CURRENT = 'CHANGE_INFOBLOCKS_FROM_CURRENT'


export const changeInfoblocksFromCurrentFillingActionCreator = () => {
  return {
    type: CHANGE_INFOBLOCKS_FROM_CURRENT
  }
}



export const changeInfoblocksFromCurrent = (state) => { //меняет стэйт в соответствии с currentComplect

  
  if (state.currentComplect) {

    state.infoblocks.forEach((element) => {
      element.value.forEach((elem) => {
        if (state.currentComplect.currentFilling.includes(elem.name)) {
          elem.checked = true
        } else elem.checked = false

        if (state.currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
          elem.checked = true
        }
      })
    })

  } else {
   
    state.infoblocks.forEach((element) => {
      element.value.forEach((elem) => {

        elem.checked = false

      })
    })
  }
  
  
  return state
}


export const infoblocks = (action, state) => {
 
  if (action.type === CHANGE_INFOBLOCKS_FROM_CURRENT || action.type === 'CREATE_COMPLECT' || action.type === 'CHANGE_CURRENT_INFOBLOCKS' || action.type === 'RESET') {
    return changeInfoblocksFromCurrent(state)
  }else
  return state
}