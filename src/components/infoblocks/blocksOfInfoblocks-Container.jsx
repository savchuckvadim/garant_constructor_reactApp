import React from "react";
import BlocksOfInfoblocks from "./blocksOfInfoblocks";

 
const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS';
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER';
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER';
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'

function BlocksOfInfoblocksContainer(props) { 
    
  let state = props.store.getState();
  let currentTheme = state.theme.style[state.theme.indexOfTheme]
  let allBlocksFromState = [
      {
          typeOfAction: CHANGE_CURRENT_INFOBLOCKS,
          arrayForRender: state.infoblocks
      },
      {
        typeOfAction: CHANGE_CURRENT_ER,
        arrayForRender: state.encyclopedias[0]
    },
    {
        typeOfAction: CHANGE_CURRENT_PAKETS_ER,
        arrayForRender: state.encyclopedias[1]
    },
    {
        typeOfAction: CHANGE_CURRENT_LT,
        arrayForRender: state.legalTech
    },
  ]
  let items = []

  items = allBlocksFromState.map(block => {
      return <BlocksOfInfoblocks key={block.typeOfAction} typeOfAction={block.typeOfAction} arrayForRender={block.arrayForRender} currentTheme={currentTheme} store={props.store} state={props.state}/>
  })

  
    return (items)
}



export default BlocksOfInfoblocksContainer
