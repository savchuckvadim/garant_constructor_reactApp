// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import darkTheme from './theme/theme'
import headerStyle from './header.module.css'

const Header = (props) => {
  console.log(props.state)
let stHeader = {
  backgroundColor : props.state.theme[props.state.indexOfTheme].backgroundColor,

  backgroundPosition: `center`,
   transitionProperty: `background-image, background-color, text-color, color, transform`,
   transitionDuration: `3.5s`,
   transitionDelay:` 0.1s`,
    transform: `rotateZ(720deg)`
}
    return (
        <header style={stHeader}   id="header">
        <div className={headerStyle.header__container}>
        <img className={headerStyle.header__logo} src={logo} alt="logo"></img>
      {darkTheme(props)}
        </div>

    </header>
    );
  }
  
  export default Header;