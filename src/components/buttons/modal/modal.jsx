
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import style from "../button.module.css"
import styleModal from "./modal.module.css"
import headerStyle from "../../header/header.module.css"
import logo from '../../header/img/logo-icon-solid-horizontal.svg'
import ResetButton from '../reset'
import ComplectModalButtons from './modal.buttons'
import Header from '../../header/header'
import ODModalButtons from './modal.od'

const ModalButton = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styleTheme = {
    backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
    color: props.state.theme[props.state.indexOfTheme].color,
    backgroundPosition: `center`,
    transitionProperty: `background-image, background-color, text-color, color, transform`,
    transitionDuration: `0.7s`,
    transitionDelay: ` 0.1s`,
    transform: `rotateZ(720deg)`
  }
const currentColor = () => {
  let color = props.state.theme[props.state.indexOfTheme].backgroundColor
  if(props.state.currentComplect){
    props.state.allComplects.map((element) => {
      if(element.name === props.state.currentComplect.name){
        color = element.color
      }
    })
  }
  return color
}
  const styleBtnModal = {
    backgroundColor: currentColor(),
    color: props.state.theme[props.state.indexOfTheme].color,
    border: '1px solid',
    borderColor: props.state.theme[props.state.indexOfTheme].color,
   
  }
  return (
    <>
      <Button style={styleBtnModal} variant="otline" onClick={handleShow} className={style.btn__modal}>
        {props.state.currentComplect ? props.state.currentComplect.name : 'Выберите комплект'}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        
       
      >
        <Modal.Header  closeButton style={styleTheme}>
          <div className={headerStyle.header__container}>
            <img className={headerStyle.header__logo} src={logo} alt="logo"></img>

          </div>
        </Modal.Header>
        <Modal.Body className={styleModal.body} style={styleTheme}>
          
          < ComplectModalButtons state={props.state} />

          < ODModalButtons state={props.state} />

          <ResetButton state={props.state} />
          
        </Modal.Body>
        <Modal.Footer style={styleTheme}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalButton

