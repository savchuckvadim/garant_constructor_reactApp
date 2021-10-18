
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


const STYLE = 'GET_STYLE'
const CURRENT_COMPLECT = 'CURRENT_COMPLECT'



const actionCreaterGetStyle = () => {
  return {
    type: STYLE
  }
}
let actionStyle = actionCreaterGetStyle();

const actionCreaterCurrentComplect = {
  type: CURRENT_COMPLECT,
}
const actionCurrent = actionCreaterCurrentComplect

const ModalButton = (props) => {
  const styleFromState = props.dispatch(actionStyle)
  const currentComplect = props.dispatch(actionCurrent)


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
    let color = props.state.theme[props.state.indexOfTheme].backgroundColor
    if (currentComplect) {
      props.state.allComplects.map((element) => {
        if (element.name === currentComplect.name) {
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

