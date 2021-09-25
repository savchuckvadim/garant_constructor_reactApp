
import {
  ComplectClass
} from "../components/complect/complect";
import {
  addToStorage,
  getFromStorage
} from "../utils/utils";
import {
  changeER,
  changeInfoblocks,
  changeLt
} from "./changeCheckboxes";


class State {
  constructor() {
    this.currentComplect = null;
    this.allComplects = [{
        'name': 'Бухгалтер',
        'color': 'rgba(14, 201, 111, 1)',
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
        'fillingLTIndexes': [1],

        'fillingPaketsER': '',
        'fillingER': [],
        'fillingPaketLT': '',
        'fillingLTblocks': ''


      },

      {
        'name': 'Бухгалтер госсектора',
        'color': 'rgba(255, 113, 33, 1)',
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
        'fillingLTIndexes': [1],


        'fillingPaketsER': '',
        'fillingER': ['Энциклопедия решений.Проверки организаций и предпринимателей'],
        'fillingPaketLT': '',
        'fillingLTblocks': ''

      },
      {
        'name': 'Главный Бухгалтер',
        'color': 'rgba(14, 201, 111, 1)',
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
        'fillingPaketLT': '',
        'fillingLTblocks': ''

      },

      {
        'name': 'Главный Бухгалтер госсектора',
        'color': 'rgba(255, 113, 33, 1)',
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
        'fillingPaketLT': '',
        'fillingLTblocks': ''


      },

      {
        'name': 'Юрист',
        'color': 'rgba(46, 121, 234, 1)',
        'weight': 9,
        'filling': [
          'Законодательство России',
          'Региональное законодательство',
          'Отраслевое законодательство России',

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
        'fillingLTIndexes': [1, 8],

        'fillingPaketsER': '',
        'fillingER': [],
        'fillingPaketLT': '',
        'fillingLTblocks': ''

      },

      {
        'name': 'Офис',
        'color': 'rgb(23, 80, 165)',
        'weight': 10,
        'filling': [
          'Законодательство России',
          'Региональный блок',
          'Региональное законодательство',

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
        'fillingPaketLT': '',
        'fillingLTblocks': ''
      },

      {
        'name': 'Предприятие',
        'color': 'rgba(151, 103, 200, 1)',
        'weight': 12.5,
        'filling': [
          'Законодательство России',
          'Региональное законодательство',
          'Отраслевое законодательство России',

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
        'fillingPaketLT': '',
        'fillingLTblocks': ''




      },

      {
        'name': 'Предприятие PRO',
        'color': 'rgb(104, 54, 153)',
        'weight': 1,
        'filling': [
          'Законодательство России',
          'Региональное законодательство',
          'Отраслевое законодательство России',
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
        'fillingPaketLT': '',
        'fillingLTblocks': ''
      },

    ]

    this.infoblocks = [{
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
    ]

    this.encyclopedias = [

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
    ]

    this.legalTech = {
      'nameOfType': 'Legal Tech',
      'value': [{
          'name': 'Аналитическая система "Сутяжник',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Конструктор правовых документов',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Экспресс проверка контрагентов',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Экспресс Согласование',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Экспресс тендер',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Гарант Диск',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Гарант Коннект',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Гарант Патент',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Интернет-Семианры',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'ЭТАЛОННЫЙ КЛАССИФИКАТОР',
          'weight': 1,
          'description': ''
        },
        {
          'name': 'Бизнес на контроле',
          'weight': 1,
          'description': ''
        },

      ]
    }

    this.od = [
      '1 Одновременныйдоступ',
      '2 Одновременных доступа',
      '3 Одновременных доступа',
      '5 Одновременных доступа',
      '10 Одновременных доступа',
      '20 Одновременных доступа',
      '30 Одновременных доступа',
      '50 Одновременных доступа',
    ]

    this.prices = [
      [4740, 4740, 5940, 6780, 6780, 9510],
      [5700, 5700, 7140, 8160, 8160, 11400],
      [7590, 7590, 9510, 10860, 10860, 15210],
      [11400, 11400, 14220, 16290, 16290, 22800],
      [15210, 15210, 18960, 21720, 21720, 30390],
      [18960, 18960, 23760, 27120, 27120, 38010],
      [22740, 22740, 28500, 32550, 32550, 45630],
      [26520, 26520, 33270, 37980, 37980, 53220]
    ]

  }


  save() {
    addToStorage(this.currentComplect, 'currentComplect')
  }

  changeState() {
    const storageData = getFromStorage('currentComplect');
    if (storageData.name) {
      let obj = new ComplectClass(storageData.name, storageData.number, this);
      obj.currentFilling = storageData.currentFilling;
      obj.flagCheckedComplect = true;
      this.currentComplect = storageData;
    } else {
      this.currentComplect = null
    }

  }

  startApp = () => {
    console.log('state was changed !')
  }

  changeInfoblocksData = () => {

    if (this.currentComplect) {
      this.infoblocks.forEach((element) => {
        element.value.forEach((elem) => {
          if (this.currentComplect.currentFilling.includes(elem.name)) {
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

        } else if (type === 'Legal Tech') {
          // arrayOfcurrentComplectForChange = state.currentComplect.currentLT;
          changeLt(value, checked, type, this)
        } else {
          // arrayOfcurrentComplectForChange = state.currentComplect.currentFilling;
          changeInfoblocks(value, checked, type, this)
        }


        this.save();
        this.startApp();
      }
    } else {
      window.alert('сначала выберите комплект!')
    }
  }

  changePaketsErData = () => {
    if (this.currentComplect) {
      if (this.currentComplect.fillingPaketsERIndexes.length < 1) {
        this.encyclopedias[0].value[0].checked = false;
        this.encyclopedias[0].value[1].checked = false;
        this.encyclopedias[0].value[2].checked = false;
        this.changerErDependPaket('noPaket')
      } else if (this.currentComplect.fillingPaketsERIndexes.length === 1) {
        if (this.currentComplect.fillingPaketsERIndexes.includes(0)) {
          this.encyclopedias[0].value[1].checked = false;
          this.encyclopedias[0].value[2].checked = false;
          this.changerErDependPaket(0)

        } else if (this.currentComplect.fillingPaketsERIndexes.includes(1)) {
          this.encyclopedias[0].value[0].checked = false;
          this.encyclopedias[0].value[2].checked = false;
          this.changerErDependPaket(1)
        } else if (this.currentComplect.fillingPaketsERIndexes.includes(2)) {
          this.encyclopedias[0].value[0].checked = false;
          this.encyclopedias[0].value[1].checked = false;
          this.changerErDependPaket(2)
        }
      } else if (this.currentComplect.fillingPaketsERIndexes.length === 2) { //офис

        if (this.currentComplect.fillingPaketsERIndexes.includes(0) && this.currentComplect.fillingPaketsERIndexes.includes(1)) {

          this.encyclopedias[0].value[2].checked = false; // пакет который не входит в дате отключаем
          this.encyclopedias[0].value[0].checked = true;
          this.encyclopedias[0].value[1].checked = true;
          //склеить массивы входящих в пакеты эр
          let concatIncludesER = this.encyclopedias[0].value[0].including.concat(this.encyclopedias[0].value[1].including);
          this.encyclopedias[1].value.forEach(element => {
            element.checked = false;
            element.weight = 0.5
          })
          concatIncludesER.forEach(el => {
            this.encyclopedias[1].value[el].checked = true
            this.encyclopedias[1].value[el].weight = 0
          })


        } else if (this.currentComplect.fillingPaketsERIndexes.includes(0) && this.currentComplect.fillingPaketsERIndexes.includes(2)) {
          this.encyclopedias[0].value[1].checked = false;
          this.encyclopedias[0].value[0].checked = true;
          this.encyclopedias[0].value[2].checked = true;

          let concatIncludesER = this.encyclopedias[0].value[0].including.concat(this.encyclopedias[0].value[2].including);

          this.encyclopedias[1].value.forEach(element => {
            element.checked = false;
            element.weight = 0.5
          })
          concatIncludesER.forEach(el => {
            console.log(el)
            this.encyclopedias[1].value[el].checked = true
            this.encyclopedias[1].value[el].weight = 0
          })


        } else if (this.currentComplect.fillingPaketsERIndexes.includes(1) && this.currentComplect.fillingPaketsERIndexes.includes(2)) {
          this.encyclopedias[0].value[0].checked = false;
          this.encyclopedias[0].value[1].checked = true;
          this.encyclopedias[0].value[2].checked = true;

          let concatIncludesER = this.encyclopedias[0].value[1].including.concat(this.encyclopedias[0].value[2].including);

          this.encyclopedias[1].value.forEach(element => {
            element.checked = false;
            element.weight = 0.5
          })
          concatIncludesER.forEach(el => {
            this.encyclopedias[1].value[el].checked = true
            this.encyclopedias[1].value[el].weight = 0
          })
        }

      }

      // saveERandPaketsERinCurrentComplect(state);


    }
  }

  changerErDependPaket = (indexOfPaket) => {

    if (indexOfPaket !== 'noPaket') {
      this.encyclopedias[0].value[indexOfPaket].checked = true; //заходит в дату ЭР первый 0 - в пакеты - второй 0 по индексу includes -находит нужный пакет делает его отмеченным checked

      this.encyclopedias[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })

      this.encyclopedias[0].value[indexOfPaket].including.forEach(el => {
        this.encyclopedias[1].value[el].checked = true
        this.encyclopedias[1].value[el].weight = 0
      })
    } else {
      this.encyclopedias[0].value.forEach(element => {
        element.checked = false;
      })
      this.encyclopedias[1].value.forEach(element => {
        element.checked = false;
        element.weight = 0.5
      })
    }


  }
  changeErData = () => {
    this.encyclopedias[1].value.forEach((element, index) => {

      if (this.currentComplect.fillingEncyclopediasIndexes.includes(index)) {
        element.checked = true
        element.weight = 0.5
      }

    })


  }

  lt = () => {
    console.log('здесь будет метод, работающий с LT')
  }

  oD = () => {
    console.log('здесь будет метод, работающий с OD')
  }

  prices = () => {
    console.log('здесь будет метод, работающий с Ценами')
  }

  weightForResult = () => {
    let info = 0;
    let er = 0;
    let totalweight = 0;

    this.infoblocks.forEach(element => {
        element.value.forEach(elem => {
            if (elem.checked === true) {
                info += elem.weight
            }
        })
    })

    this.encyclopedias.forEach(element => {
        element.value.forEach(elem => {

            if (elem.checked === true) {
                er += elem.weight
            }
        })
    })

    totalweight = info + er
    return totalweight
}

  subscribe = (observer) => {
    this.startApp = observer;
  }


  set currentComplect(complect) {
    this._currentComplect = complect;

  }
  get currentComplect() {
    return this._currentComplect;
  }
}

export let state = new State();

