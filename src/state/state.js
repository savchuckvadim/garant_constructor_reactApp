import {
  color
} from "@material-ui/system";
import {
  ComplectClass
} from "../components/complect/complect";
import {
  addToStorage,
  getFromStorage,

} from "../utils/utils";

import {
  offerLoader
} from "./redusers/offer";

import {
  changeCurrentCheckbox
} from "./redusers/checkBoxes-reduser";
import {
  changeColorOfButton
} from "./redusers/colorOfButton-reducer";
import {
  createComplect
} from "./redusers/createComplect-reducer.jsx";

import {

  changeErAndPaketsErFromCurrent,
  changeErFromCurrent,
  changePaketsErFromCurrent
} from "./redusers/er";
import {

  changeInfoblocksFromCurrent
} from "./redusers/infoblocks";
import {
  changeLTFromCurrent,
  weightLtForResult
} from "./redusers/legalTech";
import {
  oD
} from "./redusers/od-reducer";
import {
  changeDataPhone,
  changePhoneFromLocal,
  phoneNumber
} from "./redusers/phoneNumber-reducer";
import {
  price
} from "./redusers/price";
import {
  reset
} from "./redusers/reset";
import {
  result
} from "./redusers/result";
import {
  getStyle
} from "./redusers/style";
import {
  changeTheme
} from "./theme-reducer";

import { changeCurrentEr } from "./redusers/changeCurrentEr-reducer";
import { changeCurrentInfoblocks } from "./redusers/changeCurrentInfoblock-reducer";
import { changeCurrentPketsEr } from "./redusers/changeCurrentPaketsEr-reducer";
import {changeLt} from "./redusers/changeCurrentLt-reducer"

// export let state = new State();
export let store = {
  _state: {
    currentComplect: null,
    currentOd: '1 Одновременный Доступ',
    currentPrice: {
      value: 0,
      status: false,
      width: 0

    },
    currentStatusInputComplectName: false,
    currentPrepaid: {
      value: 'Минимальный аванс 1 месяц',
      placeholder: 'Минимальный аванс 1 месяц',
      status: false,
      width: 0
    },
    allComplects: [{
        'name': 'Бухгалтер',
        'tag': 'accountant',
        'color': 'rgba(14, 201, 111, 1)',

        'number': 0,
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
        'currentFilling': '',
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
        'number': 1,
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
        'currentFilling': '',
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
        'number': 2,
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
        'currentFilling': '',
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
        'number': 3,
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
        'currentFilling': '',
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
        'number': 4,
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
        'currentFilling': '',
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
        'number': 5,
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
        'currentFilling': '',
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
        'number': 6,
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
        'currentFilling': '',
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
        'number': 7,
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
        'currentFilling': '',
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
      'status': false,
      'weightLt': 0,
      'ltIncluded': 0,
      'nameOflt': '',
      'priceOfLt': '',


      'value': [{
          'name': 'Аналитическая система "Сутяжник\"',
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
      'status': false,
      'value': '+79620027991'
    },
    offer: {
      'active': 'true',
      'prepaid': '0',
      discount: 0,
      discountAutoFocus: false,

    },

  },
  dispatch(action) {
    if (action.type === 'GET_STYLE') {
      return getStyle(this._state.theme, this._state.indexOfTheme, action);
    } else if (action.type === 'CHANGE_COLOR_OF_BUTTON') {


      changeColorOfButton(action, this._state);
      changeInfoblocksFromCurrent(this._state);
      changePaketsErFromCurrent(this._state);
      this.startApp()
      // ...............................................................................................
    }
    if (action.type === 'CREATE_COMPLECT') {


      this._state.currentComplect = createComplect(action, this._state.currentComplect);
      this.startApp()
      // ...............................................................................................
    } else if (action.type === 'GET_CURRENT_COMPLECT') {
      return this.currentComplect
    } 
    // else if (action.type === 'CHANGE_CHECKBOX') {
    //   changeCurrentCheckbox(action, this._state)
    //   this.save();
    //   this.startApp();

    // } 
    else if (action.type === 'CHANGE_INFOBLOCKS_FROM_CURRENT') {
      changeInfoblocksFromCurrent(this._state);

    } else if (action.type === 'CHANGE_CURRENT_INFOBLOCKS') {
      this._state.currentComplect.currentFilling = changeCurrentInfoblocks(action, this._state.currentComplect)
      this.save();
      this.startApp();

    } else if (action.type === 'CHANGE_ER_FROM_CURRENT') {
      // changePaketsErData(this._state);
      // changeErData(this._state)
      changeErAndPaketsErFromCurrent(this._state)
    }else if (action.type === 'CHANGE_CURRENT_ER') {
     

      this._state.currentComplect = changeCurrentEr(action, this._state)
      this.save();
      this.startApp();

    }else if (action.type === 'CHANGE_CURRENT_PAKETS_ER') {
      
    
      this._state.currentComplect = changeCurrentPketsEr(action, this._state)
      this.save();
      this.startApp();

    } else if (action.type === 'CHANGE_LT_FROM_CURRENT') {

      changeLTFromCurrent(this._state)
    }else if (action.type === 'CHANGE_CURRENT_LT') {

      this._state.currentComplect = changeLt(action, this._state)
      this.save();
      this.startApp();
    } else if (action.type === 'CHANGE_CURRENT_OD') {
      oD(action, this._state)
      this.save()
      this.startApp()

    } else if (action.type === 'RESET') {
      reset(this._state)
      this.startApp()
    } else if (action.type === 'GET_PRICE') {
      return price(this._state)
    } else if (action.type === 'RESULT') {

      // weightLtForResult()
      // let weight = weightLtForResult()
      return result(this._state)

    } else if (action.type === 'PAGE') {



    } else if (action.type === 'PHONE') {

      if (action.act === 'FROM_LOCAL') {

        this._state.phoneNumber =  changePhoneFromLocal(this._state.phoneNumber )
        

      } else if (action.act === 'CHANGE_PHONE') {

        this._state.phoneNumber = changeDataPhone(action, this._state.phoneNumber )
        this.startApp()

      }
      

    } else if (action.type === 'OFFER') {
      offerLoader(this._state, action)



      // return this.result()
    } else if (action.type === 'DISCOUNT') {
      if (action.act === 'GET') {

        return this._state.offer.discount

      } else if (action.act === 'SET') {
        this._state.offer.discount = action.value
        this._state.offer.autoFocus = action.autoFocus

        this.save()
        this.startApp()
      }

    } else if (action.type === 'THEME') {
      this.state.indexOfTheme = changeTheme(action, this._state.indexOfTheme)
      this.startApp()
    } else if (action.type === 'CHANGE_STATE') {

      this.changeState()
    } else if (action.type === 'START_APP') {
      this.startApp()
    }

     else if (action.type === 'TEXT_INPUT') {

      if (action.act === 'nameOfComplect') {


        this._state.currentComplect.name = action.value
        this._state.currentComplect.fillingLTIndexes = []
        this._state.fillingPaketLT = []
        this._state.fillingPaketsERIndexes = []
        this._state.fillingEncyclopediasIndexes = []
        this._state.currentComplect.width = action.width
        changeLTFromCurrent(this._state)
        changePaketsErFromCurrent(this._state)
        changeErFromCurrent(this._state)
        this._state.currentStatusInputComplectName = action.status
        addToStorage(this._state.currentComplect, 'currentComplect')
        this.startApp()

      } else if (action.act === 'prepaid') {

        this._state.currentPrepaid.width = action.width
        this._state.currentPrepaid.value = action.value
        this._state.currentPrepaid.status = action.status

        addToStorage(this._state.currentPrepaid, 'prepaid')
        this.startApp()


      } else if (action.act === 'price') {
        if (action.typeOfProduct === 'Гарант') {
          this._state.currentPrice.width = action.width
          this._state.currentPrice.value = action.value
          this._state.currentPrice.status = action.status
          addToStorage(this._state.currentPrice, 'currentPrice')

        }
      } else if (action.typeOfProduct === 'Legal Tech') {
        return this._state.legalTech.priceOfLt

      }
      // this.startApp()
    }

    
    else if(action.type === 'INPUT_CHANGE_NAME_OF_CURRENT_COMPLECT'){
      this._state.currentComplect.name = action.value
        this._state.currentComplect.fillingLTIndexes = []
        this._state.fillingPaketLT = []
        this._state.fillingPaketsERIndexes = []
        this._state.fillingEncyclopediasIndexes = []
        this._state.currentComplect.width = action.width
        changeLTFromCurrent(this._state)
        changePaketsErFromCurrent(this._state)
        changeErFromCurrent(this._state)
        this._state.currentStatusInputComplectName = action.status
        addToStorage(this._state.currentComplect, 'currentComplect')
        this.startApp()
    }
    else if(action.type === 'INPUT_CHANGE_PRICE'){
      
      if (action.typeOfProduct === 'Гарант') {
        this._state.currentPrice.width = action.width
        this._state.currentPrice.value = action.value
        this._state.currentPrice.status = action.status
        addToStorage(this._state.currentPrice, 'currentPrice')
        this.startApp()
        // debugger
      }
    } else if (action.typeOfProduct === 'Legal Tech') {
      return this._state.legalTech.priceOfLt

    }
    
   
    else if(action.type === 'INPUT_CHANGE_PREPAID'){
      this._state.currentPrepaid.width = action.width
        this._state.currentPrepaid.value = action.value
        this._state.currentPrepaid.status = action.status

        addToStorage(this._state.currentPrepaid, 'prepaid')
        this.startApp()
    }
  },




  save() {
    addToStorage(this._state.currentComplect, 'currentComplect')
    addToStorage(this._state.offer, 'offer')
    addToStorage(this._state.currentPrepaid, 'prepaid')

    addToStorage(this._state.currentOd, 'od')

    // addToStorage(this._state, 'state')

  },

  changeState() {

    const storageData = getFromStorage('currentComplect');

    if (storageData && !Array.isArray(storageData)) {
      this._state.currentComplect = storageData;
    } else {
      this._state.currentComplect = null
    }

    const storageDataOd = getFromStorage('od');

    if (storageDataOd && !Array.isArray(storageDataOd)) {
      this._state.currentOd = storageDataOd;
    }

    const storageDataOffer = getFromStorage('offer');
    if (storageDataOffer && !Array.isArray(storageDataOffer)) {
      this._state.offer = storageDataOffer
    }

    const currentPrepaid = getFromStorage('prepaid')
    if (currentPrepaid && !Array.isArray(currentPrepaid)) {

      this._state.currentPrepaid = currentPrepaid
    }
   
    
 




  },



  startApp() {
    console.log('state was changed !')
  },





  subscribe(observer) {
    this.startApp = observer;
  },

  // getStyle() {

  //   return {
  //     background: this._state.theme[this._state.indexOfTheme].backgroundColor,
  //     color: this._state.theme[this._state.indexOfTheme].color,
  //     text: this._state.theme[this._state.indexOfTheme].textColor,
  //     transitionProperty: `background-image, background-color, text-color, color, transform`,
  //     transitionDuration: `0.5s`,
  //     transitionDelay: ` 0.1s`,
  //   }
  // },

  get currentComplect() {
    if (this._state.currentComplect) {
      return this._state.currentComplect
    } else {
      return this._state.allComplects[0]
    }
  },

  get state() {
    return this._state
  }
}