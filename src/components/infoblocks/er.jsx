import style from "./infoblocks.module.css"
import { allEnciclopedis } from "../../data/dataER.jsx";
import { React } from 'react'
import { renderInputFromData } from "../../utils/utils";

class ErAndPaket {
    constructor(state) {
        // this.name = name;
        this.itemsPakets = []
        this.itemsER = []
        this.state = state
    }

    updateData() {
        if (this.state.currentComplect) {

        }
    }
    render() {

        renderInputFromData(allEnciclopedis[0], this.itemsPakets, this.state)
        renderInputFromData(allEnciclopedis[1], this.itemsER, this.state)

        return (
            <div className={style.items}>
                <h2>{allEnciclopedis[0].nameOfType}</h2>
                {this.itemsPakets}
                <h2>{allEnciclopedis[1].nameOfType}</h2>
                {this.itemsER}
            </div>
        )
    }
}
export const changeErData = (state) => {
    allEnciclopedis[1].value.forEach((element, index) => {

        // if(state.currentComplect.fillingER.includes(element.name)){
        //     element.checked = true
        //     element.weight = 0.5

        // }
        if (state.currentComplect.fillingEncyclopediasIndexes.includes(index)) {
            element.checked = true
            element.weight = 0.5
        }

        // element.checked = false;
        // element.weight = 0.5   
    })


}

export const changePaketsErData = (state) => {
    if (state.currentComplect) {
        if (state.currentComplect.fillingPaketsERIndexes.length < 1) {
            allEnciclopedis[0].value[0].checked = false;
            allEnciclopedis[0].value[1].checked = false;
            allEnciclopedis[0].value[2].checked = false;
            changerErDependPaket('noPaket')
        } else if (state.currentComplect.fillingPaketsERIndexes.length === 1) {
            if (state.currentComplect.fillingPaketsERIndexes.includes(0)) {
                allEnciclopedis[0].value[1].checked = false;
                allEnciclopedis[0].value[2].checked = false;
                changerErDependPaket(0)

            } else if (state.currentComplect.fillingPaketsERIndexes.includes(1)) {
                allEnciclopedis[0].value[0].checked = false;
                allEnciclopedis[0].value[2].checked = false;
                changerErDependPaket(1)
            } else if (state.currentComplect.fillingPaketsERIndexes.includes(2)) {
                allEnciclopedis[0].value[0].checked = false;
                allEnciclopedis[0].value[1].checked = false;
                changerErDependPaket(2)
            }
        } else if (state.currentComplect.fillingPaketsERIndexes.length === 2) {                //офис
            
            if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(1)) {

                allEnciclopedis[0].value[2].checked = false; // пакет который не входит в дате отключаем
                allEnciclopedis[0].value[0].checked = true;
                allEnciclopedis[0].value[1].checked = true;
                //склеить массивы входящих в пакеты эр
                let concatIncludesER = allEnciclopedis[0].value[0].including.concat(allEnciclopedis[0].value[1].including);
                allEnciclopedis[1].value.forEach(element => {
                    element.checked = false;
                    element.weight = 0.5
                })
                concatIncludesER.forEach(el => {
                    allEnciclopedis[1].value[el].checked = true
                    allEnciclopedis[1].value[el].weight = 0
                })




                console.log('Пакет Энциклопедий решений для бухгалтера и Пакет Энциклопедий решений для бухгалтера госсектора')

            } else if (state.currentComplect.fillingPaketsERIndexes.includes(0) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
                allEnciclopedis[0].value[1].checked = false;
                allEnciclopedis[0].value[0].checked = true;
                allEnciclopedis[0].value[2].checked = true;
                
                let concatIncludesER = allEnciclopedis[0].value[0].including.concat(allEnciclopedis[0].value[2].including);
                console.log('concatIncludesER')
                console.log(concatIncludesER)

                allEnciclopedis[1].value.forEach(element => {
                    element.checked = false;
                    element.weight = 0.5
                })
                concatIncludesER.forEach(el => {
                    console.log(el)
                    allEnciclopedis[1].value[el].checked = true
                    allEnciclopedis[1].value[el].weight = 0
                })


            } else if (state.currentComplect.fillingPaketsERIndexes.includes(1) && state.currentComplect.fillingPaketsERIndexes.includes(2)) {
                allEnciclopedis[0].value[0].checked = false;
                allEnciclopedis[0].value[1].checked = true;
                allEnciclopedis[0].value[2].checked = true;


                console.log('Пакет Энциклопедий решений для бухгалтера  и Пакет Энциклопедий решений для Юриста')


                let concatIncludesER = allEnciclopedis[0].value[1].including.concat(allEnciclopedis[0].value[2].including);
                console.log('concatIncludesER')
                console.log(concatIncludesER)

                allEnciclopedis[1].value.forEach(element => {
                    element.checked = false;
                    element.weight = 0.5
                })
                concatIncludesER.forEach(el => {
                    console.log(el)
                    allEnciclopedis[1].value[el].checked = true
                    allEnciclopedis[1].value[el].weight = 0
                })
            }

        }

        // saveERandPaketsERinCurrentComplect(state);


    }
}



const changerErDependPaket = (indexOfPaket) => {
    if (indexOfPaket !== 'noPaket') {
        allEnciclopedis[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked

        allEnciclopedis[1].value.forEach(element => {
            element.checked = false;
            element.weight = 0.5
        })

        allEnciclopedis[0].value[indexOfPaket].including.forEach(el => {
            allEnciclopedis[1].value[el].checked = true
            allEnciclopedis[1].value[el].weight = 0
        })
    } else {
        allEnciclopedis[0].value.forEach(element => {
            element.checked = false;
        })
        allEnciclopedis[1].value.forEach(element => {
            element.checked = false;
            element.weight = 0.5
        })
    }


}

const saveERandPaketsERinCurrentComplect = (state) => {
    state.currentComplect.fillingPaketsER = []
    // state.currentComplect.fillingER = []
    allEnciclopedis[0].value.forEach(element => {

        if (element.checked === true) {
            state.currentComplect.fillingPaketsER.push(element)
        }
    })
    allEnciclopedis[1].value.forEach(element => {
        if (element.checked === true) {
            // state.currentComplect.fillingER.push(element)
        }
    })

}
const Er = (state) => {
    let er = new ErAndPaket(state);
    return er.render()
}
export default Er
// класс ЭР управляет весом все ЭР с пакетами или без - неважно
// отрисовывает и отмечает чекед если нужно все ЭР Чекбоксы
// Создается при первом отривовывании мэйна
// В классе сть функции для слушателей чекбоксов
// Вес всех энциклопедий - в зависимости от :
// - текущего комплекта
//  - текущего пакета ЭР