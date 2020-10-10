import {Injectable} from '@angular/core';
import {Products} from "./products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {
  }

  products: Products[] = [
    {
      category: 'Чайники',
      url: '../assets/images/ch-blue.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03WHEU',
      price: 515,
      description: {
        color: 'голубой',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-green.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03WHEW',
      price: 515,
      description: {
        color: 'пастельный зеленый',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-pink.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03WHEQ',
      price: 515,
      description: {
        color: 'розовый',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-ecru.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03PKEU',
      price: 451,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-white.jpg',
      name: 'Чайник Smeg электрический',
      article: 'KLF03SSEU',
      price: 607,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 1.7,
        size: '246/223/170',
        rotate: 360,
        power: 2.2,
        light: true,
        additionally: 'Автоматическое выключение при снятии с базы. Отделение для шнура в базе. Съемный моющийся фильтр. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-black.jpg',
      name: 'Чайник Smeg с регулятором температуры',
      article: 'KLF04BLEU',
      price: 607,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Температурный дисплей. Съемный фильтр накипи. Мягко открывающаяся крышка. Безопасное автовыключение. Встроенный провод. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Чайники',
      url: '../assets/images/ch-red.jpg',
      name: 'Чайник Smeg с регулятором температуры',
      article: 'KLF04BLEE',
      price: 607,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 1.7,
        size: '248',
        rotate: 360,
        power: 2.4,
        light: true,
        additionally: 'Температурный дисплей. Съемный фильтр накипи. Мягко открывающаяся крышка. Безопасное автовыключение. Встроенный провод. Нескользящие ножки. Блокировка крышки. Блокировка включения без воды.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-black.jpg',
      name: 'Тостер Smeg',
      article: 'TSF01BLEU',
      price: 515,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 2,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-ecru.jpg',
      name: 'Тостер Smeg',
      article: 'TSF01BLEQ',
      price: 515,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 2,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-blue.jpg',
      name: 'Тостер Smeg',
      article: 'TSF01BLEW',
      price: 515,
      description: {
        color: 'голубой',
        body: 'сталь',
        volume: 2,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-white.jpg',
      name: 'Тостер Smeg',
      article: 'TSF01SSEU',
      price: 607,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 2,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Автоматическая центровка ломтиков. Держатель для сэндвичей. Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-many.jpg',
      name: 'Тостер Smeg',
      article: 'TSF01UJEU',
      price: 637,
      description: {
        color: 'разноцветный',
        body: 'сталь',
        volume: 2,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Решетка для подогрева булочек. Автоматическая центровка ломтиков. Держатель для сэндвичей. Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Тостеры',
      url: '../assets/images/t-red.jpg',
      name: 'Тостер Smeg',
      article: 'TSF03RJEU',
      price: 640,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 4,
        levels: 6,
        size: '198/310/195',
        power: 0.95,
        light: true,
        additionally: 'Автоматическое поднятие ломтиков. Решетка для подогрева булочек. Автоматическая центровка ломтиков. Держатель для сэндвичей. Подогрев, размораживание, багель, отмена действия, съемный поддон из нержавеющей стали для сбора крошек.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-black.jpg',
      name: 'Блендер Smeg',
      article: 'BLF01BLEU',
      price: 732,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '397/165/178',
        power: 0.8,
        light: true,
        additionally: 'Импульсный режим, измельчение льда, приготовление пюре. Защитное отключение при снятии кувшина блендера. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-white.jpg',
      name: 'Блендер Smeg',
      article: 'BLF01BLEQ',
      price: 732,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '397/165/178',
        power: 0.8,
        light: true,
        additionally: 'Импульсный режим, измельчение льда, приготовление пюре. Защитное отключение при снятии кувшина блендера. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-blue.jpg',
      name: 'Блендер Smeg',
      article: 'BLF01BLEW',
      price: 732,
      description: {
        color: 'голубой',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '397/165/178',
        power: 0.8,
        light: true,
        additionally: 'Импульсный режим, измельчение льда, приготовление пюре. Защитное отключение при снятии кувшина блендера. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-pink.jpg',
      name: 'Блендер Smeg',
      article: 'BLF01BLEE',
      price: 732,
      description: {
        color: 'розовый',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '397/165/178',
        power: 0.8,
        light: true,
        additionally: 'Импульсный режим, измельчение льда, приготовление пюре. Защитное отключение при снятии кувшина блендера. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-green.jpg',
      name: 'Блендер Smeg',
      article: 'HBF01BLEU',
      price: 732,
      description: {
        color: 'пастельный зеленый',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '397/165/178',
        power: 0.8,
        light: true,
        additionally: 'Система измельчения Flowblend. Функция турбо. Закручивание электрического кабеля. Крепление для аксессуаров. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-ecru.jpg',
      name: 'Погружной блендер Smeg',
      article: 'HBF01BLEQ',
      price: 353,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '65/65/41',
        power: 0.7,
        light: true,
        additionally: 'Система измельчения Flowblend. Функция турбо. Закручивание электрического кабеля. Крепление для аксессуаров. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-red.jpg',
      name: 'Погружной блендер Smeg',
      article: 'HBF01BLEE',
      price: 353,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '65/65/41',
        power: 0.7,
        light: true,
        additionally: 'Система измельчения Flowblend. Функция турбо. Закручивание электрического кабеля. Крепление для аксессуаров. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-blue-p.jpg',
      name: 'Погружной блендер Smeg',
      article: 'HBF01BLEO',
      price: 353,
      description: {
        color: 'голубой',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '65/65/41',
        power: 0.7,
        light: true,
        additionally: 'Система измельчения Flowblend. Функция турбо. Закручивание электрического кабеля. Крепление для аксессуаров. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Блендеры',
      url: '../assets/images/b-black-p.jpg',
      name: 'Погружной блендер Smeg',
      article: 'HBF01BLEP',
      price: 353,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 1.7,
        speed: 4,
        size: '65/65/41',
        power: 0.7,
        light: true,
        additionally: 'Система измельчения Flowblend. Функция турбо. Закручивание электрического кабеля. Крепление для аксессуаров. Нескользящие ножки.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-black.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLEU',
      price: 1113,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-ecru.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLEQ',
      price: 1113,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-blue.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLEW',
      price: 1113,
      description: {
        color: 'голубой',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-green.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLER',
      price: 1113,
      description: {
        color: 'пастельный зеленый',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-red.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLET',
      price: 1113,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-white.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLEU',
      price: 1113,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Кофемашины',
      url: '../assets/images/c-pink.jpg',
      name: 'Кофемашина-эспрессо Smeg',
      article: 'ECF01BLEO',
      price: 1113,
      description: {
        color: 'розовый',
        body: 'сталь',
        volume: 1,
        filters: 3,
        size: '303/330/149',
        power: 1.35,
        light: true,
        additionally: 'Держатель фильтра, рамка и поддон для чашек. Капучинатор. Система нагрева Thermoblock. Система защиты против капель. Удобная панель управления. Лоток для чашки для латте макиато. Сетчатый фильтр. Встроенный шнур. Функция подачи пара. Программа очистки от накипи.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Посудомоечные машины',
      url: '../assets/images/p-black.jpg',
      name: 'Встраиваемая посудомоечная машина Smeg',
      article: 'ST2FABCR',
      price: 4176,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 13,
        temperature: '38, 45, 50, 65, 70',
        size: '60',
        power: 1.8,
        light: true,
        additionally: 'Закрытая панель управления. 5 стандартных программ: замачивание, стекло, Auto, Super, ECO. 4 программы QuickTime: 27 мин., ECO, Super, ежедневная. Программирование отсрочки включения. Индикация отсутствия соли и ополаскивателя. Опция EnerSave. Электронная регулировка смягчения воды. Конденсационная сушка. Система мойки Planetarium. Третий верхний разбрызгиватель.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Посудомоечные машины',
      url: '../assets/images/p-white.jpg',
      name: 'Встраиваемая посудомоечная машина Smeg',
      article: 'ST2FABCQ',
      price: 4176,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 13,
        temperature: '38, 45, 50, 65, 70',
        size: '60',
        power: 1.8,
        light: true,
        additionally: 'Закрытая панель управления. 5 стандартных программ: замачивание, стекло, Auto, Super, ECO. 4 программы QuickTime: 27 мин., ECO, Super, ежедневная. Программирование отсрочки включения. Индикация отсутствия соли и ополаскивателя. Опция EnerSave. Электронная регулировка смягчения воды. Конденсационная сушка. Система мойки Planetarium. Третий верхний разбрызгиватель.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-gray.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSV',
      price: 4176,
      description: {
        color: 'серебристый',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-black.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSF',
      price: 4176,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-ecru.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSR',
      price: 4176,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-blue.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSR',
      price: 4176,
      description: {
        color: 'синий',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-white.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSR',
      price: 4176,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-red.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSR',
      price: 4176,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Холодильники',
      url: '../assets/images/r-yellow.jpg',
      name: 'Холодильник Smeg',
      article: 'FAB50LSR',
      price: 4176,
      description: {
        color: 'яркий зеленый',
        body: 'сталь',
        volume: 467,
        size: '1875/804/766',
        power: 197,
        light: true,
        additionally: 'Электронное управление. Поный No-frost. 2 зоны сохранения свежести. Регулируемый термостат. Суперзаморозка. Вентилятор. 3 регулируемые полки из закаленного стекла. 1 фиксированная полка из закаленного стекла. 2 ящика для овощей и фруктов. Зона сохранения свежести. Внутреннее LED освещение.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-black.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLEU',
      price: 1606,
      description: {
        color: 'черный',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-pink.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLEQ',
      price: 1606,
      description: {
        color: 'розовый',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-red.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLEW',
      price: 1606,
      description: {
        color: 'красный',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-blue.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLEE',
      price: 1606,
      description: {
        color: 'голубой',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-ecru.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLET',
      price: 1606,
      description: {
        color: 'ecru',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Миксеры',
      url: '../assets/images/mx-white.jpg',
      name: 'Планетарный миксер Smeg',
      article: 'SMF01BLEI',
      price: 1606,
      description: {
        color: 'белый',
        body: 'алюминий, сталь',
        volume: 4.8,
        size: '378/402/221',
        levels: 10,
        power: 0.8,
        light: true,
        additionally: 'Блокирвка вращения при поднятой смесительной головке. Регулировка скорости вращения. Фронтальный порт для дополнительных насадок. Планетарное действие. Нескользящие ножки. Набор дополнительных аксессуаров.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/s-black.jpg',
      name: 'Соковыжималка шнековая Smeg',
      article: 'SJF01BLEU',
      price: 1860,
      description: {
        color: 'черный',
        body: 'сталь, пластик',
        volume: 2.6,
        size: '269/170/412',
        speed: 43,
        power: 0.15,
        light: true,
        additionally: 'Технология медленного отжима. Чаша для сбора сока TRITAN. Шнек и чаша отжима ULTEM. Вращающаяся щетка. Функция реверс. Набор дополнительных аксессуаров. Прорезиненные ножки. ',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/s-ecru.jpg',
      name: 'Соковыжималка шнековая Smeg',
      article: 'SJF01BLEQ',
      price: 1860,
      description: {
        color: 'ecru',
        body: 'сталь, пластик',
        volume: 2.6,
        size: '269/170/412',
        speed: 43,
        power: 0.15,
        light: true,
        additionally: 'Технология медленного отжима. Чаша для сбора сока TRITAN. Шнек и чаша отжима ULTEM. Вращающаяся щетка. Функция реверс. Набор дополнительных аксессуаров. Прорезиненные ножки. ',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/s-blue.jpg',
      name: 'Соковыжималка шнековая Smeg',
      article: 'SJF01BLEW',
      price: 1860,
      description: {
        color: 'голубой',
        body: 'сталь, пластик',
        volume: 2.6,
        size: '269/170/412',
        speed: 43,
        power: 0.15,
        light: true,
        additionally: 'Технология медленного отжима. Чаша для сбора сока TRITAN. Шнек и чаша отжима ULTEM. Вращающаяся щетка. Функция реверс. Набор дополнительных аксессуаров. Прорезиненные ножки. ',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/s-red.jpg',
      name: 'Соковыжималка шнековая Smeg',
      article: 'SJF01BLER',
      price: 1860,
      description: {
        color: 'красный',
        body: 'сталь, пластик',
        volume: 2.6,
        size: '269/170/412',
        speed: 43,
        power: 0.15,
        light: true,
        additionally: 'Технология медленного отжима. Чаша для сбора сока TRITAN. Шнек и чаша отжима ULTEM. Вращающаяся щетка. Функция реверс. Набор дополнительных аксессуаров. Прорезиненные ножки. ',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/sts-black.jpg',
      name: 'Цитрусовая соковыжималка Smeg',
      article: 'CJF01CREU',
      price: 517,
      description: {
        color: 'черный',
        body: 'сталь, тритан',
        volume: 1.6,
        size: '269/170/412',
        speed: 43,
        power: 0.7,
        light: true,
        additionally: 'Универсальный фильтр из стали. Встроенное отделение для шнура. Система антикапля. Функция автоматического включения и выключения.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/sts-ecru.jpg',
      name: 'Цитрусовая соковыжималка Smeg',
      article: 'CJF01CREQ',
      price: 517,
      description: {
        color: 'ecru',
        body: 'сталь, тритан',
        volume: 1.6,
        size: '269/170/412',
        speed: 43,
        power: 0.7,
        light: true,
        additionally: 'Универсальный фильтр из стали. Встроенное отделение для шнура. Система антикапля. Функция автоматического включения и выключения.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/sts-blue.jpg',
      name: 'Цитрусовая соковыжималка Smeg',
      article: 'CJF01CREW',
      price: 517,
      description: {
        color: 'голубой',
        body: 'сталь, тритан',
        volume: 1.6,
        size: '269/170/412',
        speed: 43,
        power: 0.7,
        light: true,
        additionally: 'Универсальный фильтр из стали. Встроенное отделение для шнура. Система антикапля. Функция автоматического включения и выключения.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/sts-white.jpg',
      name: 'Цитрусовая соковыжималка Smeg',
      article: 'CJF01CREE',
      price: 517,
      description: {
        color: 'белый',
        body: 'сталь, тритан',
        volume: 1.6,
        size: '269/170/412',
        speed: 43,
        power: 0.7,
        light: true,
        additionally: 'Универсальный фильтр из стали. Встроенное отделение для шнура. Система антикапля. Функция автоматического включения и выключения.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Соковыжималки',
      url: '../assets/images/sts-green.jpg',
      name: 'Цитрусовая соковыжималка Smeg',
      article: 'CJF01CREY',
      price: 517,
      description: {
        color: 'пастельный зеленый',
        body: 'сталь, тритан',
        volume: 1.6,
        size: '269/170/412',
        speed: 43,
        power: 0.7,
        light: true,
        additionally: 'Универсальный фильтр из стали. Встроенное отделение для шнура. Система антикапля. Функция автоматического включения и выключения.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Вытяжки',
      url: '../assets/images/v-black.jpg',
      name: 'Вытяжка настенная Smeg',
      article: 'KFAB75BL',
      price: 6597,
      description: {
        color: 'черный',
        body: 'сталь',
        volume: 797,
        size: '750/644/616',
        speed: 3,
        power: 324,
        light: true,
        additionally: 'Интенсивный режим. Жироулавливающие и угольный фильтры. Индикация загрязнения фильтров. Электронное управление. Пульт управления. 2 LED лампы.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Вытяжки',
      url: '../assets/images/v-ecru.jpg',
      name: 'Вытяжка настенная Smeg',
      article: 'KFAB75BQ',
      price: 6597,
      description: {
        color: 'ecru',
        body: 'сталь',
        volume: 797,
        size: '750/644/616',
        speed: 3,
        power: 324,
        light: true,
        additionally: 'Интенсивный режим. Жироулавливающие и угольный фильтры. Индикация загрязнения фильтров. Электронное управление. Пульт управления. 2 LED лампы.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Вытяжки',
      url: '../assets/images/v-white.jpg',
      name: 'Вытяжка настенная Smeg',
      article: 'KFAB75BW',
      price: 6597,
      description: {
        color: 'белый',
        body: 'сталь',
        volume: 797,
        size: '750/644/616',
        speed: 3,
        power: 324,
        light: true,
        additionally: 'Интенсивный режим. Жироулавливающие и угольный фильтры. Индикация загрязнения фильтров. Электронное управление. Пульт управления. 2 LED лампы.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Вытяжки',
      url: '../assets/images/v-red.jpg',
      name: 'Вытяжка настенная Smeg',
      article: 'KFAB75BR',
      price: 6597,
      description: {
        color: 'красный',
        body: 'сталь',
        volume: 797,
        size: '750/644/616',
        speed: 3,
        power: 324,
        light: true,
        additionally: 'Интенсивный режим. Жироулавливающие и угольный фильтры. Индикация загрязнения фильтров. Электронное управление. Пульт управления. 2 LED лампы.',
        producer: 'Italy'
      },
      select: false
    },
    {
      category: 'Вытяжки',
      url: '../assets/images/v-many.jpg',
      name: 'Вытяжка настенная Smeg',
      article: 'KFAB75BLQ',
      price: 8032,
      description: {
        color: 'разноцветный',
        body: 'сталь',
        volume: 797,
        size: '750/644/616',
        speed: 3,
        power: 324,
        light: true,
        additionally: 'Интенсивный режим. Жироулавливающие и угольный фильтры. Индикация загрязнения фильтров. Электронное управление. Пульт управления. 2 LED лампы.',
        producer: 'Italy',
      },
      select: false
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(article) {
    return this.products.filter(product => product.article === article);
  }

  getCategories() {
    const categories = [];
    this.products.forEach((product) => {
      categories.push(product.category)
    });
    return [...new Set(categories)].sort();
  }
}

