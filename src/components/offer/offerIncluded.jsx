import style from "./included.module.css"


const Included = (props) => {
    props.state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    props.state.changePaketsErData()
    props.state.changeErData()
    props.state.changeltData()

    if (props.state.currentComplect) {

        let infoblocks = (array) => {
            let result = []
            
           
            array.forEach((elem, idx) => {
                let resultArray = []
                let type = <h4 className={style.titleOfBlocks}>{array[idx].nameOfType}</h4>
                elem.value.forEach((element) => {

                    if (element.checked) {
                        console.log(element.name)
                        resultArray.push(<p  className={style.info}> {element.name} </p>)
                    }
                })
                console.log(resultArray)
                if(resultArray.length > 0){
                    result.push(type)
                    result.push(resultArray)
                }
                
              
            })
            return (
                <div className={style.info}>
                   
                    {result}
                </div>
            )
        }

        let legalTech = (array) => {
            let resultArray = []
            array.value.forEach((elem) => {
                if (elem.checked === true) {
                    resultArray.push(<p  className={style.info}>{elem.name}</p>)
                }
            })
            let title
            if (resultArray.length > 0) {
                title = <h3 className={style.titleOfBlocks}>{array.nameOfType}</h3>
            }
            return (
                <div>
                    {title}
                    {resultArray}
                </div>

            )
        }
        return (
            <div className={style.wrapper}>
               
                {infoblocks(props.state.infoblocks)}
                {infoblocks(props.state.encyclopedias)}
                {legalTech(props.state.legalTech)}
            </div>
        )
    }
}

export default Included