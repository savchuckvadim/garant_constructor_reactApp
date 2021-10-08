// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import darkTheme from './theme/theme'
import headerStyle from './header.module.css'
import PhoneNumber from '../offer/phoneNumber'

const Header = (props) => {
  console.log(props.state)
  let stHeader = {
    backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,

    backgroundPosition: `center`,
    transitionProperty: `background-image, background-color, text-color, color, transform`,
    transitionDuration: `0.3s`,
    transitionDelay: ` 0.0s`,
    transform: `rotateZ(720deg)`
  }
  return (
    <header style={stHeader} id="header">
      <div className={headerStyle.header__container}>
        <img className={headerStyle.header__logo} src={logo} alt="logo"></img>
        <div className={headerStyle.leftBlock}>
        <PhoneNumber state={props.state} />
        {darkTheme(props)}
        </div>
       
        
      </div>

    </header>
  );
}

export default Header;