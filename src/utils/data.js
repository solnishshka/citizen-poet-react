import house from "../images/house.png";
import yard from "../images/yard.png";
import road from "../images/road.png";
import park from "../images/park.png";

const config = [
  {
    id: "1",
    name: "house",
    title: "Дом",
    description:
      ["Управление, уборка, ремонт, электричество, тепло- и водоснабжение"],
    image: house,
    subcategories: [
      {
        name: "electro",
        id: "11",
        title: "Электричество",
        query: "свет",
        description: [
          "Повреждение электропроводки",
          "Некачественное содержание лифта",
          "Неисправность элементов освещения",
          "Нарушение пожаробесопасности",
        ],
      },
      {
        name: "repair",
        id: "12",
        title: "Ремонт",
        query: "сломан",
        description: [
          "Некачественный текущий ремонт",
          "Неудовлетворяющее выполнение работ по капитальному ремонту",
        ],
      },
      {
        name: "water",
        id: "13",
        title: "Тепло- и водоснабжение",
        query: "вода",
        description: ["Холодно в подъезде", "Нарушение пожаробесопасности"],
      },
      {
        name: "control",
        id: "14",
        title: "Управление домом",
        query: "помещик",
        description: [
          "Нарушение при выборе управляющей организации",
          "Нарушение при создании ТСЖ",
        ],
      },
      {
        name: "tech",
        id: "15",
        title: "Техническое содержание",
        query: "трухлявый",
        description: [
          "Повреждение крыши, лестниц, окон, козырьков подьезда",
          "Протечка в подъезде",
          "Сломанные почтовые ящики",
          "Повреждение указателей с наименованием улицы и номером дома",
        ],
      },
      {
        name: "clean",
        id: "16",
        title: "Уборка",
        query: "мусор",
        description: [
          "Некачественное содержание мусоропровода",
          "Несанкционнированые объявления",
          "Неубранный подъезд, карниз над подъездом, неубранные сосульки",
          "Складирование реагентов в общих помещениях",
        ],
      },
    ],
  },
  {
    name: "yard",
    id: "2",
    title: "Двор",
    image: yard,
    description:
      ["Благоустройство, зеленые насаждения, проезды, тротуары, парковка, уборка"],
    subcategories: [
      {
        name: "good",
        id: "21",
        title: "Благоустройство",
        query: "развал",
        description: [
          "Невосстановление почвы после разрытий",
          "Несоблюденние сроков работ",
          "Несоответсвущее выполнение работ",
          "Не выполненные или частично выполненные работы",
        ],
      },
      {
        name: "infra",
        id: "22",
        title: "Инфраструктура",
        query: "сломан",
        description: [
          "Опасно выступающие элементы",
          "Отсутствие песка в песочнице",
          "Проблемы с элементами освещения",
          "Повреждение лестниц и ограждения",
          "Некачественное содержание объектов двора",
        ],
      },
      {
        name: "green",
        id: "23",
        title: "Зеленые насаджения",
        query: "дерево",
        description: [
          "Проблемы в уходе за растениями",
          "Несоответсвие количества зеленых насаждений заявленному",
          "Кража деревьев и кустарников",
        ],
      },
      {
        name: "parking",
        id: "24",
        title: "Проезды, тротуары, парковки",
        query: "повозка",
        description: [
          "Повреждение бордюров и дорожного покрытия",
          "Подтопление территории",
          "Брошенный автомобиль",
          "Люки",
        ],
      },
      {
        name: "clean",
        id: "25",
        title: "Уборка",
        query: "мусор",
        description: [
          "Неубранная и захламленная территория",
          "Неустраиваемое применение реагентов",
          "Урны и мусорные контейнеры",
          "Складирование грязного снега на газонах",
          "Снег и гололед во дворе",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "road",
    title: "Дорога",
    image: road,
    description: ["Инфраструктура, дорожное покрытие, пешеходные переходы"],
    subcategories: [
      {
        id: "31",
        name: "coverage",
        title: "Дорожное покрытие",
        query: "дорога",
        description: [
          "Некачественное содержание и повреждения покрытия",
          "Повреждение борюров на проезжей части",
          "Реклама на дорожном покрытии",
          "Подтопление проезжей части",
        ],
      },
      {
        id: "32",
        name: "infra",
        title: "Инфраструктура",
        query: "ломать",
        description: [
          "Опасно выступающие элементы",
          "Неисправный светофор, дорожные знаки",
          "Проблемы с элементами освещения",
          "Повреждения ограждений",
        ],
      },
      {
        id: "33",
        name: "green",
        title: "Зеленые насаждения",
        query: "куст",
        description: [
          "Проблемы в уходе за растениями",
          "Насаждения создают помехи",
        ],
      },
      {
        id: "34",
        name: "crossing",
        title: "Пешеходные переходы",
        query: "путник",
        description: [
          "Проблемы с элементами освещения",
          "Недоступность для маломобильных граждан",
          "Снег и гололед в пешеходных переходах",
          "Проблемы содержния надземных и подземных переходов",
        ],
      },
      {
        id: "35",
        name: "clean",
        title: "Уборка",
        query: "снег",
        description: [
          "Неубранная и захламленная территория",
          "Неравноперное применение реагентов",
          "Складирование грязного снега на газонах",
          "Снег и гололед на проезжей части и тротуаре",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "park",
    title: "Парк",
    image: park,
    description: ["Досуг, освещение, торговля и реклама, уборка, инфраструктура"],
    subcategories: [
      {
        id: "41",
        name: "hobby",
        title: "Досуг",
        query: "устал",
        description: [
          "Некачетсвенное содержание площадок",
          "Некачественное содержание велодорожек",
          "Отсутвие песка в песочнице",
        ],
      },
      {
        id: "42",
        name: "infra",
        title: "Инфраструктура",
        query: "парк",
        description: [
          "Опасно выступающие элементы",
          "Проблемы в уходе за растениями",
          "Проблемы с плиткой",
          "Самовольная установка объектов",
        ],
      },
      {
        id: "43",
        name: "light",
        title: "Освещение",
        query: "свет",
        description: ["Проблемы с элементами освещения"],
      },
      {
        id: "44",
        name: "adv",
        title: "Торговля и реклама",
        query: "купец",
        description: [
          "Незаконное размещение объектов",
          "Незавершенный демонтаж торговых объектов",
          "Несоблюдение требований к размещению вывесок",
          "Несвоевременное восстановление после демонтажа нестационарных объектов",
        ],
      },
      {
        id: "45",
        name: "clean",
        title: "Уборка",
        query: "грязный",
        description: [
          "Неубранная и захламленная территория",
          "Применение солей для противогололедного эеффекта",
          "Снег и гололед",
        ],
      },
    ],
  },
];

export default config;
