// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import DarkTheme from './theme/theme'
import headerStyle from './header.module.css'
import PhoneNumber from '../offer/offerPhoneNumber'
import { Link, NavLink } from 'react-router-dom';



const Header = (props) => {

  let stHeader = {
    backgroundColor: props.style.background,
    transitionProperty: props.style.transitionProperty,
    transitionDuration: props.style.transitionDuration,
    transitionDelay: props.style.transitionDelay,

    backgroundPosition: `center`,
    transform: `rotateZ(720deg)`
  }
  
  return (
    <header style={stHeader} id="header">
      <div className={headerStyle.header__container}>
      <NavLink as={Link} to='/main' > <img className={headerStyle.header__logo} src={logo} alt="logo"></img></NavLink>
       
        <div className={headerStyle.leftBlock}>
          <PhoneNumber state={props.state} dispatch={props.dispatch} />
          <DarkTheme state={props.state} dispatch={props.dispatch} />
        </div>


      </div>

    </header>
  );
}

export default Header;