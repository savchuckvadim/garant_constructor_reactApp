// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import DarkTheme from './theme/theme'
import headerStyle from './header.module.css'
import PhoneNumber from '../offer/offerPhoneNumber'

const STYLE = 'STYLE';

const Header = (props) => {
  const actionCreaterGetStyle = () => {
    return {
      type: STYLE
    }
  }
  let action = actionCreaterGetStyle();
  const styleFromState = props.dispatch(action)
  let stHeader = {
    backgroundColor: styleFromState.backgroundColor,
    
    transitionProperty: styleFromState.transitionProperty,
    transitionDuration: styleFromState.transitionDuration,
    transitionDelay: styleFromState.transitionDelay,

    backgroundPosition: `center`,
    transform: `rotateZ(720deg)`
  }
  return (
    <header style={stHeader} id="header">
      <div className={headerStyle.header__container}>
        <img className={headerStyle.header__logo} src={logo} alt="logo"></img>
        <div className={headerStyle.leftBlock}>
          <PhoneNumber state={props.state} dispatch={props.dispatch} />
          <DarkTheme state={props.state} dispatch={props.dispatch} />
        </div>


      </div>

    </header>
  );
}

export default Header;