
import Ellipse from "./img/Ellipse.svg"

import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';
import React from 'react';

import "./button.css"

let styleOD = {
    color : 'black',
    backgroundColor: 'white',
    minWidth : '322px',
    width : '100%',
    border: '2px solid',
    borderColor : 'rgba(151, 103, 200, 1)',
    
    variant: 'light',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    textColor: 'black'
}
const ODButtons = (props) => {
    let ods = []

    // allComplects.forEach((element, index) => {
    //     buttons[index] = <button type="button" className={`btn btns__complect  btn__${index}`}><label for="complect0"
    //         className="complect__name">{element.name}</label> <img src={Ellipse} alt=""></img> </button>

    // })
    
    props.state.od.forEach((element, index) => {
        
        ods[index] = <Dropdown.Item style={styleOD} as="button" variant='none'  onClick={() => {console.log('this')}} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </Dropdown.Item>
        // <li> <button onChange={console.log('od')} number={index} type="button" className={`btn btn__od btn__${index}`}>{element} <img src={Ellipse} alt=""></img> </button></li>

    })
    return (

        // <ul className="dropdown-menu menu__od btn btn__od" aria-labelledby="dropdownMenu2">
        //     {ods}

        // </ul>
        <DropdownButton style={styleOD} as={ButtonGroup} variant='none'  className=""  id="dropdown-button" title="Количество доступов">
           {ods}
        </DropdownButton>
    )
}

export default ODButtons