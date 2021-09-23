// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import darkTheme from './theme/theme'
import headerStyle from './header.module.css'

const Header = () => {

    return (
        <header  id="header">
        <div className={headerStyle.header__container}>
        <img className={headerStyle.header__logo} src={logo} alt="logo"></img>
      {darkTheme()}
        </div>

    </header>
    );
  }
  
  export default Header;