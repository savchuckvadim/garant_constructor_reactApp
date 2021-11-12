import { addToStorage } from "../utils/utils";

class Store {
    constructor() {
      this.state = {
        currentComplect: null,
        currentOd: '1',
        allComplects: [{
            'name': 'Бухгалтер',
            'tag': 'accountant',
            'color': 'rgba(14, 201, 111, 1)',
  
            'backgroundColor': 'white',
            'weight': 3.5,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Большая библиотека бухгалтера и кадрового работника',
              'Энциклопедия. Формы правовых документов',
  
              'Пакет Энциклопедий решений для бухгалтера',
              'Конструктор Правовых Документов',
              'Судебная практика: приложение к консультационным блокам',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              'Экспресс Проверка 10 (ежемесячно)'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1]
              },
              {
                'court': []
              },
              {
                'libraries': [1]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingPaketsERIndexes': [0],
            'fillingEncyclopediasIndexes': '',
            'fillingLTIndexes': [1, 8],
  
            'fillingPaketsER': '',
            'fillingER': [],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
  
          },
  
          {
            'name': 'Бухгалтер госсектора',
            'tag': 'budget',
            'color': 'rgba(255, 113, 33, 1)',
            'backgroundColor': 'white',
            'weight': 4,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Большая библиотека бухгалтера и кадрового работника',
              'Энциклопедия. Формы правовых документов',
              'Энциклопедия решений.Проверки организаций и предпринимателей',
              'Пакет Энциклопедий решений для бухгалтера госсектора',
              'Конструктор Правовых Документов',
              'Судебная практика: приложение к консультационным блокам',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              'Экспресс Проверка 10 (ежемесячно)'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1]
              },
              {
                'court': []
              },
              {
                'libraries': [1]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [0],
            'fillingPaketsERIndexes': [1],
            'fillingLTIndexes': [1, 8],
  
  
            'fillingPaketsER': '',
            'fillingER': ['Энциклопедия решений.Проверки организаций и предпринимателей'],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
          },
          {
            'name': 'Главный Бухгалтер',
            'tag': 'bigAccountant',
            'color': 'rgba(14, 201, 111, 1)',
            'backgroundColor': 'white',
            'weight': 7,
            'filling': [
  
              'Законодательство России',
              'Региональное законодательство',
  
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
  
              'Большая библиотека бухгалтера и кадрового работника',
  
              'Энциклопедия. Законодательство в схемах',
              'Энциклопедия. Формы правовых документов',
  
              'Энциклопедия решений. Госзакупки',
              'Энциклопедия решений. Корпоративное право',
              'Пакет Энциклопедий решений для бухгалтера',
  
              'Конструктор Правовых Документов',
              'Интернет-Семинары',
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              '2 экспертных заключения в месяц',
              'Неограниченное количество устных консультаций'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1]
              },
              {
                'court': [0, 1]
              },
              {
                'libraries': [1]
              },
              {
                'specials': [1, 2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [3, 7],
            'fillingPaketsERIndexes': [0],
            'fillingLTIndexes': [1, 8],
  
            'fillingPaketsER': '',
            'fillingER': ['Энциклопедия решений. Госзакупки', 'Энциклопедия решений. Корпоративное право'],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
          },
  
          {
            'name': 'Главный Бухгалтер госсектора',
            'tag': 'bigBudget',
            'color': 'rgba(255, 113, 33, 1)',
            'backgroundColor': 'white',
            'weight': 8,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Отраслевое законодательство',
  
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
  
              'Большая библиотека бухгалтера и кадрового работника',
  
              'Энциклопедия. Законодательство в схемах',
              'Энциклопедия. Формы правовых документов',
  
              'Энциклопедия решений. Проверки организаций и предпринимателей',
              'Энциклопедия решений. Корпоративное право',
              'Пакет Энциклопедий решений для бухгалтера госсектора',
  
              'Конструктор Правовых Документов',
              'Интернет-Семинары',
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              '2 экспертных заключения в месяц',
              'Неограниченное количество устных консультаций'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1, 2]
              },
              {
                'court': [0, 1]
              },
              {
                'libraries': [1]
              },
              {
                'specials': [1, 2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [0, 7],
            'fillingPaketsERIndexes': [1],
            'fillingLTIndexes': [1, 8],
  
            'fillingPaketsER': '',
            'fillingER': ['Энциклопедия решений. Проверки организаций и предпринимателей', 'Энциклопедия решений. Корпоративное право'],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
  
          },
  
          {
            'name': 'Юрист',
            'tag': 'lawyer',
            'color': 'rgba(46, 121, 234, 1)',
            'backgroundColor': 'white',
            'weight': 9,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Отраслевое законодательство',
  
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
              'Практика арбитражных апелляционных судов округов',
              'Практика судов общей юрисдикции',
              'Энциклопедия судебной практики. Правовые позиции судов',
  
              'Большая библиотека юриста',
  
              'Энциклопедия. Формы правовых документов',
  
              'Пакет Энциклопедий решений для юриста',
  
              'Конструктор Правовых Документов',
              'Интернет-Семинары',
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1, 2]
              },
              {
                'court': [0, 1, 2, 3, 4]
              },
              {
                'libraries': [0]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [],
            'fillingPaketsERIndexes': [2],
            'fillingLTIndexes': [0, 1],
  
            'fillingPaketsER': '',
            'fillingER': [],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
          },
  
          {
            'name': 'Офис',
            'tag': 'office',
            'color': 'rgb(23, 80, 165)',
            'backgroundColor': 'white',
            'weight': 10,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Отраслевое законодательство',
  
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
              'Практика арбитражных апелляционных судов округов',
              'Практика судов общей юрисдикции',
              'Энциклопедия судебной практики. Правовые позиции судов',
  
              'Большая библиотека юриста',
              'Большая библиотека бухгалтера и кадрового работника',
  
              'Пакет Энциклопедий решений для юриста',
              'Пакет Энциклопедий решений для бухгалтера',
  
              'Энциклопедия. Формы правовых документов',
  
              'Конструктор правовых документов',
              'Интернет-Семианры',
              'Аналитическая система "Сутяжник',
              'Бизнес на контроле',
  
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              'Средний пакет Legal Tech'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1, 2]
              },
              {
                'court': [0, 1, 2, 3, 4]
              },
              {
                'libraries': [0, 1]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [],
            'fillingPaketsERIndexes': [0, 2],
            'fillingLTIndexes': [0, 1, 8, 9, 10],
  
            'fillingPaketsER': '',
            'fillingER': [],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
          },
  
          {
            'name': 'Предприятие',
            'tag': 'company',
            'color': 'rgba(151, 103, 200, 1)',
            'backgroundColor': 'white',
            'weight': 12.5,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Отраслевое законодательство',
  
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
              'Практика арбитражных апелляционных судов округов',
              'Практика судов общей юрисдикции',
              'Энциклопедия судебной практики. Правовые позиции судов',
  
              'Большая библиотека юриста',
              'Большая библиотека бухгалтера и кадрового работника',
  
              'Энциклопедия. Формы правовых документов',
  
  
  
              'Конструктор Правовых Документов',
              'Интернет-Семинары',
  
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              '2 экспертных заключения в месяц',
              'Неограниченное количество устных консультаций'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1, 2]
              },
              {
                'court': [0, 1, 2, 3, 4]
              },
              {
                'libraries': [0, 1]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': []
              },
            ],
            'fillingEncyclopediasIndexes': [0, 2, 3, 4, 5, 6, 7],
            'fillingPaketsERIndexes': [],
            'fillingLTIndexes': [1, 8],
  
            'fillingPaketsER': '',
            'fillingER': [
              'Энциклопедия решений.Проверки организаций и предпринимателей',
              'Энциклопедия решений.Хозяйственные ситуации',
              'Энциклопедия решений.Госзакупки',
              'Энциклопедия решений.Трудовые отношения, кадры',
              'Энциклопедия решений.Договоры и иные сделки',
              'Энциклопедия решений.Корпоративное право',
              'Энциклопедия решений.Налоги и взносы'
            ],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
  
  
  
  
          },
  
          {
            'name': 'Предприятие PRO',
            'tag': 'companyPro',
            'color': 'rgb(104, 54, 153)',
            'backgroundColor': 'white',
            'weight': 15.5,
            'filling': [
              'Законодательство России',
              'Региональное законодательство',
              'Отраслевое законодательство',
              'Справочник промышленника',
              'Практика высших судебных органов',
              'Практика арбитражных судов округов',
              'Практика арбитражных апелляционных судов округов',
              'Практика судов общей юрисдикции',
              'Энциклопедия судебной практики. Правовые позиции судов',
              'Большая библиотека юриста',
              'Большая библиотека бухгалтера и кадрового работника',
              'Энциклопедия. Формы правовых документов',
              'Энциклопедия решений.Проверки организаций и предпринимателей',
              'Энциклопедия решений.Хозяйственные ситуации',
              'Энциклопедия решений.Госзакупки',
              'Энциклопедия решений.Трудовые отношения, кадры',
              'Энциклопедия решений.Договоры и иные сделки',
              'Энциклопедия решений.Корпоративное право',
              'Энциклопедия решений.Налоги и взносы',
              'Конструктор правовых документов',
              'Интернет-Семинары',
              'Судебная практика: приложение к консультационным блокам',
              'Онлайн-архив «Практика арбитражных судов первой инстанции»',
              'Большая домашняя правовая энциклопедия',
              'Архивы ГАРАНТа. Россия',
              'Правовой консалтинг. Премиум: База знаний службы Правового консалтинга',
              'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
              '2 экспертных заключения в месяц',
              'Неограниченное количество устных консультаций'
            ],
            'fillingInfoblocksIndexes': [{
                'regulations': [0, 1, 2]
              },
              {
                'court': [0, 1, 2, 3, 4]
              },
              {
                'libraries': [0, 1]
              },
              {
                'specials': [2]
              },
              {
                'newBlocks': [0]
              },
            ],
            'fillingEncyclopediasIndexes': [0, 2, 3, 4, 5, 6, 7],
            'fillingPaketsERIndexes': [],
            'fillingLTIndexes': [1, 8],
  
            'fillingPaketsER': '',
            'fillingER': [
              'Энциклопедия решений.Проверки организаций и предпринимателей',
              'Энциклопедия решений.Хозяйственные ситуации',
              'Энциклопедия решений.Госзакупки',
              'Энциклопедия решений.Трудовые отношения, кадры',
              'Энциклопедия решений.Договоры и иные сделки',
              'Энциклопедия решений.Корпоративное право',
              'Энциклопедия решений.Налоги и взносы'
            ],
            'fillingPaketLT': [],
            'fillingLTblocks': ''
          },
  
        ],
        infoblocks: [{
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
            'nameOfType': 'NEW Blocks',
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
  
            ]
          }
        ],
        encyclopedias: [
  
          {
            'nameOfType': 'Пакет Энциклопедий решений',
            'value': [{
                'name': 'Пакет Энциклопедий решений для бухгалтера',
                'checked': false,
                'including': [0, 2, 4, 5, 6],
                'weight': 1,
                'description': ''
              },
              {
                'name': 'Пакет Энциклопедий решений для бухгалтера госсектора',
                'checked': false,
                'weight': 1,
                'including': [1, 3, 4, 5, 6],
                'description': ''
              },
              {
                'name': 'Пакет Энциклопедий решений для юриста',
                'checked': false,
                'weight': 1,
                'including': [0, 3, 4, 6, 7],
                'description': ''
              }
            ]
          },
          {
            'nameOfType': 'Энциклопедии решений',
  
            'value': [{
                'name': 'Энциклопедия решений.Проверки организаций и предпринимателей',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Госсектор: учет, отчетность, финконтроль',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Хозяйственные ситуации',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Госзакупки',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Трудовые отношения, кадры',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
  
              {
                'name': 'Энциклопедия решений.Налоги и взносы',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Договоры и иные сделки',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
              {
                'name': 'Энциклопедия решений.Корпоративное право',
                'checked': false,
                'weight': 0.5,
                'description': ''
              },
            ]
          }
        ],
        legalTech: {
          'nameOfType': 'Legal Tech',
          'display': 'none',
  
          'weightLt': 0,
          'ltIncluded': 0,
          'nameOflt': '',
          'priceOfLt': '',
  
  
          'value': [{
              'name': 'Аналитическая система "Сутяжник',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Конструктор правовых документов',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Экспресс проверка контрагентов',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Экспресс Согласование',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Экспресс тендер',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Гарант Диск',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Гарант Коннект',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Гарант Патент',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Интернет-Семианры',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'ЭТАЛОННЫЙ КЛАССИФИКАТОР',
              'checked': false,
              'weight': 1,
              'description': ''
            },
            {
              'name': 'Бизнес на контроле',
              'checked': false,
              'weight': 1,
              'description': ''
            },
  
          ]
        },
        od: [{
            name: '1 Одновременный доступ',
            status: 'uncheck'
          },
          {
            name: '2 Одновременных доступа',
            status: 'uncheck'
          },
          {
            name: '3 Одновременных доступа',
            status: 'uncheck'
          },
          {
            name: '5 Одновременных доступов',
            status: 'uncheck'
          },
          {
            name: '10 Одновременных доступов',
            status: 'uncheck'
          },
          {
            name: '20 Одновременных доступов',
            status: 'uncheck'
          },
          {
            name: '30 Одновременных доступов',
            status: 'uncheck'
          },
          {
            name: '50 Одновременных доступов',
            status: 'uncheck'
          },
  
  
        ],
        prices: [
          [4740, 4740, 6780, 6780, 5940, 6150, 9510, 12000],
          [5700, 5700, 8160, 8160, 7140, 7380, 11400, 14400],
          [7590, 7590, 10860, 10860, 9510, 9840, 15210, 19200],
          [11400, 11400, 16290, 16290, 14220, 14760, 22800, 28800],
          [15210, 15210, 21720, 21720, 18960, 19680, 30390, 38400],
          [18960, 18960, 27120, 27120, 23760, 24600, 38010, 48000],
          [22740, 22740, 32550, 32550, 28500, 29520, 45630, 57600],
          [26520, 26520, 37980, 37980, 33270, 34440, 53220, 67200]
        ],
        pricesOfLt: [960, 2200, 3300],
        theme: [
  
          {
            'name': 'light',
            'backgroundColor': 'white',
            'color': 'black',
            'textColor': 'white'
          },
  
          {
            'name': 'dark',
            'backgroundColor': 'rgba(37, 40, 45, 1)',
            'color': 'white',
            'textColor': 'white'
          }
  
        ],
        indexOfTheme: 0,
        result: {
          'status': ''
        },
        phoneNumber: {
          'status': true,
          'value': '+79620027991'
        },
        offer: {
          'active': 'true',
          'prepaid': '0',
          'discount': '',
  
        },
  
      }
      // this.currentComplect = null;
    
    }
    dispatch(action) {
      if (action.type === 'COMPLECT') {
  
        // if (action.act === 'render') {
        //   this.changeInfoblocksData();
        //   this.changePaketsErData();
        // } else if (action.act === 'create') {
        //   this.createComplect(action.obj, action.index);
  
        // }
  
        this.createComplect(action.obj, action.index);
  
      } else if (action.type === 'CHECKBOX') {
  
      } else if (action.type === 'INFOBLOCKS') {
  
        this.changeInfoblocksData();
  
  
      } else if (action.type === 'ER') {
        this.changePaketsErData();
        this.changeErData()
      } else if (action.type === 'LT') {
        this.weightLtForResult()
      } else if (action.type === 'OD') {
        this.oD(action.name)
  
      } else if (action.type === 'RESET') {
        this.reset()
      } else if (action.type === 'PRICE') {
        return this.price()
      } else if (action.type === 'RESULT') {
        this.weightLtForResult()
        return this.result()
  
      } else if (action.type === 'PAGE') {
  
  
  
      } else if (action.type === 'PHONE') {
        if (action.fun === 'FROM_LOCAL') {
  
          this.changePhoneFromLocal()
        } else if (action.fun === 'CHANGE_DATA') {
          this.changeDataPhone(action.value)
        }
  
  
      } else if (action.type === 'OFFER') {
        this.changeInfoblocksData() //подготавливает data-файлы перед отрисовкой на основе информации из текущего комплекта
        this.changePaketsErData()
        this.changeErData()
        this.changeltData()
        this.weightLtForResult()
      } else if (action.type === 'THEME') {
        this.changeTheme(action.element, action.style1, action.style2)
      } else if (action.type === 'CHANGE_STATE') {
  
        this.changeState()
      } else if (action.type === 'START_APP') {
        this.startApp()
      }
    }
  
  
    createComplect(obj, index) {
      this.state.allComplects.forEach(element => {
        element.backgroundColor = this.state.theme[this.state.indexOfTheme].backgroundColor
      })
      this.state.allComplects[index].backgroundColor = this.state.allComplects[index]
      // state.allComplects[index].color = state.theme[state.indexOfTheme].color
      
      
      
      
      // let complect = new ComplectClass(obj, index, this.state, this.dispatch);
      this.state.currentComplect = obj
      // this.state.currentComplect.od = this.state.currentOd
      // complect.odSaver()
  
      // complect.returnName();
      
      // addToStorage(this.currentComplect, 'currentComplect')
      // this.changeState()
      // complect.renderComplectsInfoblocks()
      this.changeInfoblocksData();
      this.changePaketsErData();
  
      this.startApp()
    }
    changeTheme(element, style1, style2) {
  
      if (this.state.indexOfTheme === 0) {
  
        element.classList.remove(style1)
        element.classList.add(style2)
        this.state.indexOfTheme = 1
  
      } else {
  
        element.classList.remove(style2)
        element.classList.add(style1)
        this.state.indexOfTheme = 0
  
      }
      this.startApp()
    }
    changePhoneFromLocal() {
      const storageData = getFromStorage('phone');
      if (storageData) {
       
        this.phoneNumber = storageData
  
      }
  
    }
  
    changeDataPhone(value) {
      this.state.phoneNumber.value = value
      addToStorage(this.state.phoneNumber, 'phone')
      this.startApp()
    }
  
    changeOffer(type, value) {
      for (let offerProp in this.offer) {
  
        if (offerProp === type) {
  
          this.offer[offerProp] = value
        }
  
      }
  
      this.save()
      this.startApp()
    }
  
    save() {
      addToStorage(this.state.currentComplect, 'currentComplect')
      addToStorage(this.state.offer, 'offer')
  
    }
  
    changeState() {
  
      const storageData = getFromStorage('currentComplect');
  
      if (storageData) {
        // let obj = new ComplectClass(storageData.name, storageData.number, this.state);
        // obj.currentFilling = storageData.currentFilling;
        // obj.flagCheckedComplect = true;
        this.state.currentComplect = storageData;
      } else {
        this.state.currentComplect = null
      }
  
      const storageDataOffer = getFromStorage('offer');
      if (storageDataOffer.length > 0) {
        this.state.offer = storageDataOffer[0]
      }
    }
  
    changeCurrentOffer() {
  
  
    }
  
    startApp = () => {
      console.log('state was changed !')
    }
  
    changeInfoblocksData = () => {
      
      if (this.state.currentComplect.length > 0) {
        this.state.infoblocks.forEach((element) => {
          element.value.forEach((elem) => {
            if (this.state.currentComplect.currentFilling.includes(elem.name)) {
              elem.checked = true
            } else elem.checked = false
          })
        })
      }
    }
  
  
    changeCheckbox = (value, checked, type, index) => { //имя элемента < Сhecked < тип прав инф < state)
  
      // let arrayOfcurrentComplectForChange = []
      if (this.currentComplect) {
        if (this.currentComplect.name !== 'Бухгалтер' && this.currentComplect.name !== 'Бухгалтер госсектора') {
  
  
          if (type === 'Пакет Энциклопедий решений' || type === 'Энциклопедии решений') {
            // arrayOfcurrentComplectForChange = state.currentComplect.currentER;
            changeER(value, checked, type, this, index)
  
  
          } else {
            // arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
            changeInfoblocks(value, checked, type, this)
          }
  
  
  
        }
        if (type === 'Legal Tech') {
          changeLt(value, checked, type, this, index)
        }
        this.save();
        this.startApp();
  
      } else {
        window.alert('сначала выберите комплект!')
      }
    }
  
    changePaketsErData = () => {
      
      if (this.state.currentComplect.length > 0) {
        if (this.state.currentComplect.fillingPaketsERIndexes.length < 1) {
          this.state.encyclopedias[0].value[0].checked = false;
          this.state.encyclopedias[0].value[1].checked = false;
          this.state.encyclopedias[0].value[2].checked = false;
          this.changerErDependPaket('noPaket')
        } else if (this.state.currentComplect.fillingPaketsERIndexes.length === 1) {
          if (this.state.currentComplect.fillingPaketsERIndexes.includes(0)) {
            this.state.encyclopedias[0].value[1].checked = false;
            this.state.encyclopedias[0].value[2].checked = false;
            this.changerErDependPaket(0)
  
          } else if (this.state.currentComplect.fillingPaketsERIndexes.includes(1)) {
            this.state.encyclopedias[0].value[0].checked = false;
            this.state.encyclopedias[0].value[2].checked = false;
            this.changerErDependPaket(1)
          } else if (this.state.currentComplect.fillingPaketsERIndexes.includes(2)) {
            this.state.encyclopedias[0].value[0].checked = false;
            this.state.encyclopedias[0].value[1].checked = false;
            this.changerErDependPaket(2)
          }
        } else if (this.state.currentComplect.fillingPaketsERIndexes.length === 2) { //офис
  
          if (this.state.currentComplect.fillingPaketsERIndexes.includes(0) && this.state.currentComplect.fillingPaketsERIndexes.includes(1)) {
  
            this.state.encyclopedias[0].value[2].checked = false; // пакет который не входит в дате отключаем
            this.state.encyclopedias[0].value[0].checked = true;
            this.state.encyclopedias[0].value[1].checked = true;
            //склеить массивы входящих в пакеты эр
            let concatIncludesER = this.state.encyclopedias[0].value[0].including.concat(this.state.encyclopedias[0].value[1].including);
            this.state.encyclopedias[1].value.forEach(element => {
              element.checked = false;
              element.weight = 0.5
            })
            concatIncludesER.forEach(el => {
              this.state.encyclopedias[1].value[el].checked = true
              this.state.encyclopedias[1].value[el].weight = 0
            })
  
  
          } else if (this.state.currentComplect.fillingPaketsERIndexes.includes(0) && this.state.currentComplect.fillingPaketsERIndexes.includes(2)) {
            this.state.encyclopedias[0].value[1].checked = false;
            this.state.encyclopedias[0].value[0].checked = true;
            this.state.encyclopedias[0].value[2].checked = true;
  
            let concatIncludesER = this.state.encyclopedias[0].value[0].including.concat(this.state.encyclopedias[0].value[2].including);
  
            this.state.encyclopedias[1].value.forEach(element => {
              element.checked = false;
              element.weight = 0.5
            })
            concatIncludesER.forEach(el => {
  
              this.state.encyclopedias[1].value[el].checked = true
              this.state.encyclopedias[1].value[el].weight = 0
            })
  
  
          } else if (this.state.currentComplect.fillingPaketsERIndexes.includes(1) && this.state.currentComplect.fillingPaketsERIndexes.includes(2)) {
            this.state.encyclopedias[0].value[0].checked = false;
            this.state.encyclopedias[0].value[1].checked = true;
            this.state.encyclopedias[0].value[2].checked = true;
  
            let concatIncludesER = this.state.encyclopedias[0].value[1].including.concat(this.state.encyclopedias[0].value[2].including);
  
            this.state.encyclopedias[1].value.forEach(element => {
              element.checked = false;
              element.weight = 0.5
            })
            concatIncludesER.forEach(el => {
              this.state.encyclopedias[1].value[el].checked = true
              this.state.encyclopedias[1].value[el].weight = 0
            })
          }
  
        }
  
        // saveERandPaketsERinCurrentComplect(state);
  
  
      }
    }
  
    changerErDependPaket = (indexOfPaket) => {
  
      if (indexOfPaket !== 'noPaket') {
        this.state.encyclopedias[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked
  
        this.state.encyclopedias[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
  
        this.state.encyclopedias[0].value[indexOfPaket].including.forEach(el => {
          this.state.encyclopedias[1].value[el].checked = true
          this.state.encyclopedias[1].value[el].weight = 0
        })
      } else {
        this.state.encyclopedias[0].value.forEach(element => {
          element.checked = false;
        })
        this.state.encyclopedias[1].value.forEach(element => {
          element.checked = false;
          element.weight = 0.5
        })
      }
  
  
    }
    changeErData = () => {
      if (this.state.currentComplect.length > 0) {
        this.state.encyclopedias[1].value.forEach((element, index) => {
  
          if (this.state.currentComplect.fillingEncyclopediasIndexes.includes(index)) {
            element.checked = true
            element.weight = 0.5
          }
  
        })
      }
  
  
    }
  
    changeltData = () => {
      if (this.currentComplect.length > 0) {
        this.legalTech.value.forEach((elem, index) => {
  
          if (this.currentComplect.fillingLTIndexes.includes(index) || this.currentComplect.fillingPaketLT.includes(index)) {
            elem.checked = true
          } else elem.checked = false
        })
  
      }
    }
  
    oD = (name) => {
  
      if (!this.currentComplect) {
        window.alert('сначала выберите комплект')
      } else {
        this.currentOd = name;
        this.currentComplect.od = this.currentOd;
        this.save()
        this.startApp()
      }
  
  
    }
  
    price = () => {
      let ind1 = this.state.currentComplect.number;
      let ind2
      let result
  
      this.state.od.forEach((element, index) => {
        if (element.name === this.state.currentComplect.od) {
          ind2 = index
        }
      })
  
      if (!ind2) {
        return result = this.state.prices[0][ind1]
  
      } else {
        return result = this.state.prices[ind2][ind1]
      }
  
    }
  
    reset() {
      localStorage.removeItem('currentComplect')
      this.startApp()
    }
  
    result() {
      let styleResult = {
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none'
      }
      let name
      let weight
      let od = this.state.currentOd
      let price = ' 0. 00'
  
  
      let styleLt = {
        display: this.state.legalTech.display
      }
      let ltIncluded
      let weightLt
      let nameOflt
      let priceOfLt
      let totalPrice
      if (this.state.currentComplect.length > 0) {
  
        styleResult = {
          backgroundColor: this.state.allComplects[this.state.currentComplect.number].color,
          color: 'white',
          textDecoration: 'none'
        }
        name = this.state.currentComplect.name
        weight = this.weightForResult();
  
        od = this.state.currentComplect.od.substr(0, 2)
        price = this.price()
  
        ltIncluded = this.state.legalTech.ltIncluded
        weightLt = this.state.legalTech.weightLt
        nameOflt = this.state.legalTech.nameOflt
        priceOfLt = this.state.legalTech.priceOfLt
        totalPrice = price + priceOfLt
      }
      return {
        styleResult: styleResult,
        name: name,
        od: od,
        weight: weight,
        price: price,
  
        styleLt: styleLt,
        ltIncluded: ltIncluded,
        weightLt: weightLt,
        nameOflt: nameOflt,
        totalPrice: totalPrice,
  
      }
    }
  
    weightForResult = () => {
      let info = 0;
      let er = 0;
      let totalweight = 0;
  
      this.state.infoblocks.forEach(element => {
        element.value.forEach(elem => {
          if (elem.checked === true) {
            info += elem.weight
          }
        })
      })
  
      this.state.encyclopedias.forEach(element => {
        element.value.forEach(elem => {
  
          if (elem.checked === true) {
            er += elem.weight
          }
        })
      })
  
      totalweight = info + er
      return totalweight
    }
  
    weightLtForResult = () => {
      if (this.state.currentComplect.length > 0) {
        this.state.legalTech.ltIncluded = 0
        this.state.legalTech.weightLt = 0
        this.state.legalTech.value.forEach((element, index) => { //перебираем все LT
          if (this.state.currentComplect.fillingPaketLT.includes(index)) { //если индекс перебираемого LT содержится в списке индексов входящих в комплект по умолчанию
            if (element.checked) {
  
              this.state.legalTech.weightLt = this.state.legalTech.weightLt + element.weight
            }
  
          } else if (this.state.currentComplect.fillingLTIndexes.includes(index)) {
            element.checked ? this.state.legalTech.ltIncluded++ : this.state.legalTech.ltIncluded = this.state.legalTech.ltIncluded - 0
  
          }
          this.state.legalTech.weightLt > 0 ? this.state.legalTech.display = 'flex' : this.state.legalTech.display = 'none'
  
          if (this.state.legalTech.weightLt === 2) {
            this.state.legalTech.nameOflt = `Малый Пакет`
            this.state.legalTech.priceOfLt = this.state.pricesOfLt[0]
          } else if (this.state.legalTech.weightLt === 5) {
            this.state.legalTech.nameOflt = `Средний Пакет `
            this.state.legalTech.priceOfLt = this.state.pricesOfLt[1]
          } else if (this.state.legalTech.weightLt === 10) {
            this.state.legalTech.nameOflt = `Большой Пакет `
            this.state.legalTech.priceOfLt = this.state.pricesOfLt[2]
          }
          if (this.state.legalTech.weightLt === 1 || this.state.legalTech.weightLt > 2 && this.state.legalTech.weightLt < 5 || this.state.legalTech.weightLt > 5 && this.state.legalTech.weightLt < 11) {
            this.state.legalTech.nameOflt = `LT собран неверно`
          }
        })
  
      }
    }
  
    subscribe = (observer) => {
      this.startApp = observer;
    }
  
  
    set currentComplect(complect) {
      this.state._currentComplect = complect;
      addToStorage(this.currentComplect, 'currentComplect')
      
  
    }
    get currentComplect() {
      return this.state._currentComplect;
    }
  }