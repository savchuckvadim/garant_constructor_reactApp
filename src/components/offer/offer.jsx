import { Link, NavLink } from "react-router-dom"
import style from "./offer.module.css"


const Offer = (state) => {
    if (state.currentComplect) {
        let resultArray = []
        let infoblocks = (array) => {
            array.forEach((elem, idx) => {
                resultArray[idx] = elem.value.map((element) => {

                    if (element.checked) {
                        console.log(element.name)
                        return (<p> {element.name} </p>)

                    }
                })
                console.log(resultArray)
            })

            return resultArray


        }
        return (
            <div className={style.wrapper}>
                <h1>{state.currentComplect.name}</h1>

                {infoblocks(state.infoblocks)}
                {infoblocks(state.encyclopedias)}

                {/* { infoblocks(state.legalTech)} */}

                <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>
            </div>
        )
    } else {
        return (<div>
            <h1><NavLink as={Link} to='/main' className={style.link}>Назад к составлению комплекта </NavLink></h1>
        </div>)
    }
}

export default Offer