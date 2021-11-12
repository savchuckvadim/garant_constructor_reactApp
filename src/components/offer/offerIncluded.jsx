import "./offerIncluded.css"



const Included = (props) => {
    // props.state.changeInfoblocksData()  //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
    // props.state.changePaketsErData()
    // props.state.changeErData()
    // props.state.changeltData()
    let defineClassName = () => {
        if (props.state.currentComplect.name === 'Предприятие' || props.state.currentComplect.name === 'Предприятие PRO') {
            return 'texSmall';

        } else if (props.state.currentComplect.name === 'Бухгалтер' || props.state.currentComplect.name === 'Бухгалтер госсектора') {
            return 'textXl'
        } else {
            return 'texLarge';
        }
    }

    const Сonsalting = () => {
        if (props.state.currentComplect.name === 'Главный Бухгалтер' || props.state.currentComplect.name === 'Главный Бухгалтер госсектора' || props.state.currentComplect.name === 'Предприятие' || props.state.currentComplect.name === 'Предприятие PRO') {
            return (
                <>
                    <p className={className}> Правовой Консалтинг. Премиум</p>
                    <p className={className}> 2 Экспертных заключения в месяц</p>
                </>
            )
        } else {
            return null
        }
    }

    const className = defineClassName()
    const FreeBlocks = () => {


        return (
            <div className="infoTypeWrapper">
                <h5 className="titleOfBlocks">Дополнительная поддержка</h5>
                <p className={className}> Услуги горячей линии </p>
                <p className={className}> ПРАЙМ </p>
                <p className={className}> Большая Домашняя правовая библиотека </p>

                <p className={className}> Судебная практика: приложение к консультационным блокам</p>
                <p className={className}> База знаний службы Правового консалтинга</p>
                {/* <p className={className}> Гарант Консалтинг: нормативные акты и судебная практика</p> */}
                <Сonsalting />
            </div>
        )
    }

    if (props.state.currentComplect) {

        let infoblocks = (array) => {
            let result = []



            array.forEach((elem, idx) => {
                let resultArray = []
                let type = <h4 className="titleOfBlocks">{array[idx].nameOfType}</h4>
                elem.value.forEach((element) => {

                    if (element.checked) {
                        resultArray.push(<p className={className}> {element.name} </p>)
                    }
                })
                if (resultArray.length > 0) {
                    result.push(type)
                    result.push(resultArray)
                }


            })
            return (
                <div className="info">

                    {result}
                </div>
            )
        }

        let legalTech = (array) => {
            let resultArray = []
            array.value.forEach((elem) => {
                if (elem.checked === true) {
                    resultArray.push(<p className={className}>{elem.name}</p>)
                }
            })
            let title
            if (resultArray.length > 0) {
                title = <h3 className="titleOfBlocks">{array.nameOfType}</h3>
            }
            return (
                <div className="infoTypeWrapper">
                    {title}
                    {resultArray}
                </div>

            )
        }
        if(props.state.currentComplect.number < 7){
            return (
                <div className="wrapper">
                    <div>
                        {infoblocks(props.state.infoblocks)}
                        <FreeBlocks />
                    </div>
    
                    <div>
                        {infoblocks(props.state.encyclopedias)}
    
    
                        {legalTech(props.state.legalTech)}
                       
                    </div>
    
                </div>
            )
        }else{
            return (
                <div className="wrapper">
                    <div>
                        {infoblocks(props.state.infoblocks)}
                        {legalTech(props.state.legalTech)}
                        
                    </div>
    
                    <div>
                        {infoblocks(props.state.encyclopedias)}
    
    
                        
                        <FreeBlocks />
                    </div>
    
                </div>
            )
        }
        
    }
}

export default Included