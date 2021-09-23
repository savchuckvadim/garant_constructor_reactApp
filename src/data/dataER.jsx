const encyclopedias = [{
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



const packets = [{
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



export const allEnciclopedis = [
    
    {
        'nameOfType': 'Пакет Энциклопедий решений',
        'value': packets
    },
    {
        'nameOfType': 'Энциклопедии решений',
        'value': encyclopedias
    }
]

export default allEnciclopedis