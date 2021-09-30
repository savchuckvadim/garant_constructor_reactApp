import { Link, NavLink } from 'react-router-dom'
import style from './description.module.css'

const DescriptionPage = (props) => {
    let styleDescription = {
        backgroundColor : props.state.theme[props.state.indexOfTheme].backgroundColor,
      
        backgroundPosition: `center`,
         transitionProperty: `background-image, background-color, text-color, color, transform`,
         transitionDuration: `3.5s`,
         transitionDelay:` 0.5s`,
          transform: `rotateZ(720deg)`
      }
    return (
        <div>
            <div style={styleDescription} className={style.descriptionPage}>
                <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>

            </div>
            
        </div>
    )
}

export default DescriptionPage