import { NavLink } from 'react-router-dom'
import style from './description.module.css'

const DescriptionPage = () => {
    return(
        <div className={style.descriptionPage}>
            <h1><NavLink to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>
           
        </div>
    )
}

export default DescriptionPage