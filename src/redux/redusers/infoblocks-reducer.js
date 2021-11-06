let initialState = [{
        'nameOfType': 'Нормативно-правовые акты',
        'value': [{

                'name': 'Законодательство России',
                'checked': true,
                'weight': 0.5,
                'description': 'Информационный банк содержит документы федерального уровня регулирования по основным отраслям права: гражданские отношения, налогообложение, бухучет, предпринимательство, собственность, валютное регулирование, трудовые отношения, социальная защита и другие. Включает все кодексы и федеральные законы. Кроме нормативных документов, в блок включены судебная и арбитражная практика, формы правовых документов, производственный календарь и другие бизнес-справки. В блок включены обновляемые интерактивные путеводители по общему плану счетов, кадровому делу и охране труда.'

            },
            {
                'name': 'Региональное законодательство',
                'checked': true,
                'weight': 0.5,
                'description': 'Основные правовые акты Ставропольского края - необходимая информация для каждого специалиста, работающего с правовой информацией. Кодексы, законы, указы, постановления, приказы, разъяснительные письма и другие документы именно вашего региона.'
            },
            {
                'name': 'Отраслевое законодательство',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Проекты законов',
                'checked': false,
                'weight': 0.5,
                'description': 'Наполнение информационного блока: проекты федеральных законов, которые готовятся к рассмотрению Государственной Думой РФ; акты, связанные с принятием законопроекта; постановления Государственной Думы и Совета Федерации о принятии Федеральных законов; письма о заключениях на проекты Федеральных законов; документы основных эмитентов о внесении законопроектов и поручения об их разработке.'
            },
            {
                'name': 'Международное право',
                'checked': false,
                'weight': 0.5,
                'description': 'Документы, регулирующие деятельность участников внешнеэкономической деятельности по различным направлениям - экономическому, налоговому, таможенному, уголовному и другим. Международные договоры, конвенции, соглашения, а также законы об их ратификации, документы Таможенного союза, СНГ, решения ЕСПЧ и другие. Информация о государствах-участниках и статусе конкретных документов.'
            },
            {
                'name': 'ГОСТы России',
                'checked': false,
                'weight': 1,
                'description': 'ГОСТы России - новый информационный блок в системе ГАРАНТ. Наполнение блока включает в себя ГОСТы из других информационных блоков: "Справочник нормативно-технической документации", "Законодательство России", "Отраслевое законодательство". ГОСТы полностью интегрированы в информационный банк, это означает, что при работе с документом можно проследить его юридические связи с другими актами, в несколько кликов построить список судебных решений, относящихся к различным вопросам практического применения ГОСТа, обратиться к консультационным материалам по теме. Все это позволяет организовать работу с текстами ГОСТов максимально эффективно и своевременно отслеживать изменения в правилах стандартизации продукции.'
            },
            {
                'name': 'Решения Федеральной антимонопольной службы',
                'checked': false,
                'weight': 1,
                'description': 'Продуктовая линейка системы ГАРАНТ пополнилась новым блоком "Решения Федеральной антимонопольной службы и территориальных органов". Новый блок включает в себя как документы антимонопольной службы, которые уже были представлены в системе, так и абсолютно новые материалы, ранее не входившие в состав информационного банка.'
            },
        ]
    },
    {
        'nameOfType': 'Судебная практика',
        'value': [{
                'name': 'Практика высших судебных органов',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Практика арбитражных судов округов',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Практика арбитражных апелляционных судов округов',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Практика судов общей юрисдикции',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Энциклопедия судебной практики. Правовые позиции судов',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
        ]
    },
    {
        'nameOfType': 'Консультационные материалы',
        'value': [{
                'name': 'Большая библиотека юриста',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Большая библиотека бухгалтера и кадрового работника',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Библиотека консультаций. Бухгалтерия предприятия',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Библиотека консультаций. Бюджетные организации',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Библиотека консультаций. Кадры',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
        ]
    },
    {
        'nameOfType': 'Специализированные блоки',
        'value': [{
                'name': 'Толковый словарь «Бизнес и право»',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия. Законодательство в схемах',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'Энциклопедия. Формы правовых документов',
                'checked': false,
                'weight': 0.5,
                'description': ''
            },
            {
                'name': 'ГАРАНТ-Инфарм',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Справочник нормативно-технической документации по строительству',
                'checked': false,
                'weight': 1,
                'description': ''
            },
        ]

    },
    {
        'nameOfType': 'Новые блоки',
        'value': [{
                'name': 'Справочник промышленника',
                'checked': false,
                'weight': 3,
                'description': ''
            },
            {
                'name': 'Справочник по охране труда',
                'checked': false,
                'weight': 1,
                'description': ''
            },
            {
                'name': 'Справочник по техническому регулированию и стандартизации',
                'checked': false,
                'weight': 1,
                'description': ''
            },


        ]
    }
]



export const changeInfoblocksFromCurrent = (state, currentComplect) => { //меняет стэйт в соответствии с currentComplect


    if (currentComplect) {

        state.forEach((element) => {
            element.value.forEach((elem) => {
                if (currentComplect.currentFilling.includes(elem.name)) {
                    elem.checked = true
                } else elem.checked = false

                if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
                    elem.checked = true
                }
            })
        })

    } else {

        state.forEach((element) => {
            element.value.forEach((elem) => {

                elem.checked = false

            })
        })
    }


    return state
}
const changeInfolocksFromNewComplect = (state, currentComplect) => {
    if (currentComplect) {

        state.forEach((element) => {
            element.value.forEach((elem) => {
                if (currentComplect.filling.includes(elem.name)) {
                    elem.checked = true
                } else elem.checked = false

                if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
                    elem.checked = true
                }
            })
        })

    } else {

        state.forEach((element) => {
            element.value.forEach((elem) => {

                elem.checked = false

            })
        })
    }
    return state
}

export const infoblocks = (state = initialState, action) => {

    if (action.type === 'CHANGE_CURRENT_INFOBLOCKS' || action.type === 'RESET') {
        return changeInfoblocksFromCurrent(state, action.currentComplect)
    } else if (action.type === 'CHANGE_BLOCKS_FROM_NEW_COMPLECT') {
        return changeInfolocksFromNewComplect(state, action.currentComplect)
    } else
        return state
}