import style from "./offerDescriptionOfGarant.module.css"
import doneWhite from "./img/icon-done.png"
const DescriptionOfGarant = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleWrapper}>
                <h2>Почему выбирают ГАРАНТ?</h2>
            </div>
            <div className={style.blocksWrapper}>
                <div className={style.itemsWrapperLeft}>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img alt='icon' className={style.icon} src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>	“Гарант” – первая в России компания, осуществляющая комплексную правовую поддержку</p>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img className={style.icon} alt='icon' src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>	Мы предлагаем готовые решения ваших вопросов: тысячи реальных практических ситуаций, индивидуальные письменные заключения экспертов</p>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img className={style.icon} alt='icon' src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>		“Гарант” – победитель многочисленных конкурсов и премий, в том числе Ежегодной национальной премии в области делового имиджа, репутации и доверия “КОМПАНИЯ №1” – 2014</p>
                    </div>


                </div>
                <div className={style.itemsWrapperLeft}>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img className={style.icon} alt='icon' src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>	Безупречный сервис: услуги Горячей линии, персональный менеджер, оперативная техподдержка</p>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img className={style.icon} alt='icon' src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>		Мы обеспечиваем профессиональный рост: образовательные программы с получением сертификатов и Всероссийские спутниковые онлайн-семинары</p>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon} alt="pic">
                            <img className={style.icon} alt='icon' src={doneWhite}></img>
                        </div>
                        <p className={style.itemText}>		У нас представлен широкий спектр электронных услуг: проверка контрагентов, ЭЦП, электронные торги, электронная отчетность, документооборот</p>
                    </div>


                </div>




            </div>
        </div>
    )
}

export default DescriptionOfGarant