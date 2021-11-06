
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import style from "../button.module.css"
import styleModal from "./modal.module.css"
import headerStyle from "../../header/header.module.css"
import logo from '../../header/img/logo-icon-solid-horizontal.svg'
import ResetButton from '../reset'
import ComplectModalButtons from './modal.buttons'
import ODModalButtons from './modal.od'








const ModalButton = (props) => {
  
  const styleFromState = props.state.currentStyle
  //  props.dispatch(actionStyle)
  const currentComplect = props.state.currentComplect 
  // props.dispatch(actionCurrent)


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const styleTheme = {
    backgroundColor: styleFromState.backgroundColor,
    color: styleFromState.color,
    transitionProperty: styleFromState.transitionProperty,
    transitionDuration: styleFromState.transitionDuration,
    transitionDelay: styleFromState.transitionDelay,
    backgroundPosition: `center`,

    transform: `rotateZ(720deg)`
  }
  const currentColor = () => {
    let color = props.state.theme.style[props.state.theme.indexOfTheme].backgroundColor
    if (currentComplect) {
      props.state.allComplects.forEach(element => {
        if (element.name === currentComplect.name) {
          color = element.color
        }
      })
    }
    return color
  }
  const styleBtnModal = {
    backgroundColor: currentColor(),
    color: props.state.theme.style[props.state.theme.indexOfTheme].color,
    border: '1px solid',
    borderColor:props.state.theme.style[props.state.theme.indexOfTheme].color,

  }
  return (
    <>
      <Button style={styleBtnModal} variant="otline" onClick={handleShow} className={style.btn__modal}>
        {currentComplect ? currentComplect.name : 'Выберите комплект'}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"


      >
        <Modal.Header closeButton style={styleTheme}>
          <div className={headerStyle.header__container}>
            <img className={headerStyle.header__logo} src={logo} alt="logo"></img>

          </div>
        </Modal.Header>
        <Modal.Body className={styleModal.body} style={styleTheme}>

          < ComplectModalButtons state={props.state} dispatch={props.dispatch}/>

          < ODModalButtons state={props.state} dispatch={props.dispatch}/>

          <ResetButton state={props.state} dispatch={props.dispatch} />

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

