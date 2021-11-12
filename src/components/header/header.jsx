// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'

import headerStyle from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import PhoneNumberContainer from './phoneNumber-Container';
import ThemeContainer from './theme/theme-Container';



const Header = (props) => {
 
 
  
  return (
    <header id="header">
      <div className={headerStyle.header__container}>
      <NavLink as={Link} to='/main' > <img className={headerStyle.header__logo} src={logo} alt="logo"></img></NavLink>
      
        <div className={headerStyle.leftBlock}>
          <PhoneNumberContainer store={props.store} state={props.state} dispatch={props.dispatch} style={props.style} />
          <ThemeContainer state={props.state} dispatch={props.dispatch} mainClass={props.mainClass}/>
        </div>


      </div>

    </header>
  );
}

export default Header;