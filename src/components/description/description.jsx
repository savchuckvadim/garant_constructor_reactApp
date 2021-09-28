import { NavLink } from 'react-router-dom'
import style from './description.module.css'

const DescriptionPage = () => {
    return (
        <div>
            <div className={style.descriptionPage}>
                <h1><NavLink to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>

            </div>
            <div className={style.description__content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam id nihil laboriosam, porro reprehenderit libero facere quibusdam placeat labore accusantium saepe, itaque alias hic nulla tenetur dolorem fuga quod.

            </div>
        </div>
    )
}

export default DescriptionPage