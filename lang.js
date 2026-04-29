const TRANSLATIONS = {
  ru: {
    // NAV
    'nav.catalog': 'Каталог', 'nav.about': 'О нас', 'nav.contact': 'Связаться',
    // FOOTER
    'footer.nav': 'Навигация', 'footer.contacts': 'Контакты',
    'footer.desc': 'Экспорт премиальных и люксовых автомобилей из Южной Кореи по всему миру.',
    'footer.copy': '© 2025 Likon Auto. Все права защищены.',
    'footer.location': 'Южная Корея',
    // CAR CARD
    'car.request': 'По запросу', 'car.detail': 'Подробнее', 'car.inquire': 'Узнать цену',
    // INDEX HERO
    'index.hero.eyebrow': 'Экспорт из Южной Кореи',
    'index.hero.title': 'Премиальные авто<br>по всему миру',
    'index.hero.sub': 'Подбираем автомобили под заказ, проверяем состояние и полностью сопровождаем сделку — от покупки до доставки.',
    'index.hero.btn1': 'Смотреть каталог →', 'index.hero.btn2': 'Связаться с нами',
    // INDEX CATALOG
    'index.cat.label': 'Наш каталог', 'index.cat.title': 'Все автомобили', 'index.cat.btn': 'Перейти в каталог →',
    'index.nocars.brand': 'Нет автомобилей этой марки', 'index.nocars.sub': 'Свяжитесь с нами — подберём под заказ', 'index.nocars.btn': 'Написать в WhatsApp →',
    // INDEX PROCESS
    'index.process.label': 'Как это работает', 'index.process.title': 'Этапы покупки',
    'step.1.nav': 'Подбор',    'step.1.tag': 'Шаг 01',    'step.1.title': 'Подбор',    'step.1.desc': 'Выберите авто с сайта или отправьте параметры — подберём лучший вариант под бюджет и технические требования.',
    'step.2.nav': 'Проверка',  'step.2.tag': 'Шаг 02',    'step.2.title': 'Проверка',  'step.2.desc': 'Подробные фото, видео и отчёты осмотра для полной прозрачности перед покупкой.',
    'step.3.nav': 'Бронь',     'step.3.tag': 'Шаг 03',    'step.3.title': 'Бронь',     'step.3.desc': 'Фиксируем автомобиль за вами — вносите задаток, и машина снимается с продажи до завершения сделки.',
    'step.4.nav': 'Выкуп',     'step.4.tag': 'Шаг 04',    'step.4.title': 'Выкуп',     'step.4.desc': 'После согласования всех условий выкупаем автомобиль и полностью сопровождаем сделку.',
    'step.5.nav': 'Отправка',  'step.5.tag': 'Шаг 05',    'step.5.title': 'Отправка',  'step.5.desc': 'Организуем экспорт из Кореи в вашу страну, включая все необходимые таможенные процедуры.',
    'step.6.nav': 'Получение', 'step.6.tag': 'Шаг 06',    'step.6.title': 'Получение', 'step.6.desc': 'Получаете автомобиль в порту назначения, готовый к регистрации и эксплуатации.',
    // INDEX GALLERY
    'index.gallery.label': 'Уже у клиентов', 'index.gallery.title': 'Наши клиенты уже получили',
    // INDEX CTA
    'index.cta.label': 'Начать', 'index.cta.title': 'Найдём автомобиль<br>именно для вас',
    'index.cta.sub': 'Оставьте заявку — менеджер свяжется в течение часа и предложит варианты под ваш бюджет.',
    'index.cta.btn1': 'Написать в WhatsApp →', 'index.cta.btn2': 'О нас',
    // ABOUT HERO
    'about.hero.title': 'О нас', 'about.hero.sub': 'Мы экспортируем премиальные и люксовые автомобили из Южной Кореи по всему миру.',
    // ABOUT WHY
    'about.why.label': 'Наши преимущества', 'about.why.title': 'Почему мы?',
    'about.why.1.title': 'Прямой доступ',        'about.why.1.desc': 'Работаем напрямую с официальными дилерами и аукционами Южной Кореи. Без посредников — цена ниже, прозрачность выше.',
    'about.why.2.title': 'Полное сопровождение', 'about.why.2.desc': 'От выбора автомобиля до получения в порту назначения. Берём на себя все этапы: осмотр, выкуп, логистику, документы.',
    'about.why.3.title': 'Проверка состояния',   'about.why.3.desc': 'Детальный отчёт по каждому автомобилю: фото, видео, история обслуживания. Вы видите всё до оплаты.',
    'about.why.4.title': 'Любая страна',          'about.why.4.desc': 'Доставляем в Россию, Казахстан, страны СНГ, Европу, Ближний Восток. Предоставляем полный пакет документов для регистрации и растаможки.',
    'about.why.5.title': 'Прозрачные условия',    'about.why.5.desc': 'Все детали фиксируются письменно: стоимость, сроки, комплектация. Никаких скрытых платежей и сюрпризов.',
    'about.why.6.title': 'Подбор под заказ',      'about.why.6.desc': 'Нет нужного авто в каталоге? Опишите параметры — найдём именно то, что вам нужно.',
    // ABOUT TEAM
    'about.team.label': 'Наши специалисты', 'about.team.title': 'Команда', 'about.team.role': 'Должность',
    'about.team.name1': 'Ли Владислав', 'about.team.name2': 'Ли Ульяна', 'about.team.name3': 'Цой Сергей', 'about.team.name4': 'Ан Герман',
    'about.team.init2': 'ЛУ', 'about.team.init3': 'ЦС',
    // ABOUT ARTICLES
    'about.art1.label': 'Специалисты', 'about.art1.title': 'Наша команда',
    'about.art1.p1': 'Наша команда — это эксперты с многолетним опытом в сфере экспорта автомобилей из Кореи. Мы знаем рынок изнутри: от аукционов до дилерских сетей.',
    'about.art1.p2': 'Каждый менеджер работает со всем спектром автомобилей и рынков — от подбора до доставки. Один контакт, полное сопровождение на всех этапах.',
    'about.art1.p3': 'Мы говорим на русском, корейском и английском — работаем с клиентами из любых стран.',
    'about.art2.label': 'С нами с первого дня', 'about.art2.title': 'Наша история',
    'about.art2.p1': 'Likon Auto начал работу с простой идеи: сделать доступ к корейскому автомобильному рынку простым и прозрачным для клиентов по всему миру.',
    'about.art2.p2': 'За эти годы мы выстроили прямые отношения с дилерами, аукционами и логистическими партнёрами в Корее. Каждая доставка — это отработанный процесс без сюрпризов.',
    'about.art2.p3': 'Сегодня мы продолжаем расти, расширяя географию доставок и ассортимент марок.',
    // ABOUT CTA
    'about.cta.label': 'Начать сотрудничество', 'about.cta.title': 'Готовы найти<br>ваш автомобиль?',
    'about.cta.sub': 'Свяжитесь с нами — расскажите, что ищете, и мы предложим варианты.',
    'about.cta.btn1': 'Написать в WhatsApp →', 'about.cta.btn2': 'Смотреть каталог',
    // CATALOG
    'cat.hero.title': 'Каталог', 'cat.hero.sub': 'Премиальные и люксовые автомобили из Южной Кореи',
    'cat.filter.label': 'Фильтры', 'cat.filter.reset': 'Сбросить всё',
    'cat.filter.brand': 'Бренд / Модель', 'cat.filter.year': 'Год выпуска', 'cat.filter.price': 'Цена ($)',
    'cat.filter.km': 'Пробег (км)', 'cat.filter.color': 'Цвет кузова', 'cat.filter.interior': 'Цвет салона', 'cat.filter.fuel': 'Тип топлива',
    'cat.count': 'авто',
    'cat.nocars.title': 'Ничего не найдено', 'cat.nocars.sub': 'Попробуйте изменить фильтры или свяжитесь с нами', 'cat.nocars.btn': 'Написать в WhatsApp →',
    'cat.sort.default': 'По умолчанию', 'cat.sort.price_asc': 'Цена: сначала дешевле', 'cat.sort.price_desc': 'Цена: сначала дороже',
    'cat.sort.year_desc': 'Год: сначала новее', 'cat.sort.year_asc': 'Год: сначала старше', 'cat.sort.km_asc': 'Пробег: меньше', 'cat.sort.km_desc': 'Пробег: больше',
    'cat.tag.year': 'Год', 'cat.tag.price': 'Цена', 'cat.tag.km': 'Пробег', 'cat.tag.interior': 'Салон',
    // CONTACT
    'contact.hero.title': 'Связаться', 'contact.hero.sub': 'Расскажите, что ищете — мы найдём и доставим.',
    'contact.channels.label': 'Как с нами связаться', 'contact.channels.title': 'Выберите удобный способ',
    'contact.wa.title': 'Написать сейчас', 'contact.wa.desc': 'Напишите нам — ответим на все вопросы и поможем с выбором.',
    'contact.tg.title': 'Написать в Telegram', 'contact.tg.desc': 'Свяжитесь с нами или подпишитесь на канал, чтобы следить за новыми поступлениями.', 'contact.tg.soon': 'Скоро',
    'contact.info.label': 'Информация', 'contact.info.title': 'Где мы находимся',
    'contact.info.loc.label': 'Местоположение', 'contact.info.loc.value': 'Южная Корея', 'contact.info.loc.sub': 'Работаем с клиентами из любых стран. Доставка по всему миру.',
    'contact.info.hours.label': 'Время работы', 'contact.info.hours.value': 'Пн–Вс', 'contact.info.hours.sub': 'Отвечаем с 9:00 до 21:00 по корейскому времени (UTC+9).',
    'contact.info.lang.label': 'Языки', 'contact.info.lang.sub': 'Общаемся на русском, английском и корейском языках.',
    'contact.how.label': 'С чего начать', 'contact.how.title': 'Как сделать заявку',
    'contact.how.1.title': 'Выберите или опишите автомобиль', 'contact.how.1.desc': 'Просмотрите каталог или напишите нам параметры: марка, модель, год, бюджет, цвет. Любые пожелания приветствуются.',
    'contact.how.2.title': 'Получите предложение', 'contact.how.2.desc': 'Мы подберём варианты на корейском рынке с ценами, фото и историей. Обычно это занимает от нескольких часов до суток.',
    'contact.how.3.title': 'Согласуйте и подтвердите', 'contact.how.3.desc': 'После согласования всех условий организуем покупку и доставку. Вы получаете автомобиль в порту назначения.',
  },
  en: {
    // NAV
    'nav.catalog': 'Catalog', 'nav.about': 'About', 'nav.contact': 'Contact',
    // FOOTER
    'footer.nav': 'Navigation', 'footer.contacts': 'Contacts',
    'footer.desc': 'Export of premium and luxury cars from South Korea worldwide.',
    'footer.copy': '© 2025 Likon Auto. All rights reserved.',
    'footer.location': 'South Korea',
    // CAR CARD
    'car.request': 'On request', 'car.detail': 'Details', 'car.inquire': 'Get price',
    // INDEX HERO
    'index.hero.eyebrow': 'Export from South Korea',
    'index.hero.title': 'Premium cars<br>worldwide',
    'index.hero.sub': 'We source vehicles to order, verify condition and fully manage the deal — from purchase to delivery.',
    'index.hero.btn1': 'View catalog →', 'index.hero.btn2': 'Contact us',
    // INDEX CATALOG
    'index.cat.label': 'Our catalog', 'index.cat.title': 'All cars', 'index.cat.btn': 'Go to catalog →',
    'index.nocars.brand': 'No cars of this brand', 'index.nocars.sub': 'Contact us — we\'ll source one for you', 'index.nocars.btn': 'Write on WhatsApp →',
    // INDEX PROCESS
    'index.process.label': 'How it works', 'index.process.title': 'Steps to purchase',
    'step.1.nav': 'Selection',   'step.1.tag': 'Step 01', 'step.1.title': 'Selection',   'step.1.desc': 'Choose a car from the site or send your requirements — we\'ll find the best option for your budget and specifications.',
    'step.2.nav': 'Inspection',  'step.2.tag': 'Step 02', 'step.2.title': 'Inspection',  'step.2.desc': 'Detailed photos, videos and inspection reports for full transparency before purchase.',
    'step.3.nav': 'Reservation', 'step.3.tag': 'Step 03', 'step.3.title': 'Reservation', 'step.3.desc': 'We hold the car for you — pay a deposit and the vehicle is taken off the market until the deal is complete.',
    'step.4.nav': 'Purchase',    'step.4.tag': 'Step 04', 'step.4.title': 'Purchase',    'step.4.desc': 'Once all terms are agreed, we buy the car and fully manage the transaction.',
    'step.5.nav': 'Shipping',    'step.5.tag': 'Step 05', 'step.5.title': 'Shipping',    'step.5.desc': 'We organise export from Korea to your country, including all necessary customs procedures.',
    'step.6.nav': 'Delivery',    'step.6.tag': 'Step 06', 'step.6.title': 'Delivery',    'step.6.desc': 'You receive the car at the destination port, ready for registration and use.',
    // INDEX GALLERY
    'index.gallery.label': 'Already with clients', 'index.gallery.title': 'Our clients have already received',
    // INDEX CTA
    'index.cta.label': 'Get started', 'index.cta.title': 'We\'ll find a car<br>just for you',
    'index.cta.sub': 'Leave a request — a manager will get in touch within an hour and suggest options for your budget.',
    'index.cta.btn1': 'Write on WhatsApp →', 'index.cta.btn2': 'About us',
    // ABOUT HERO
    'about.hero.title': 'About us', 'about.hero.sub': 'We export premium and luxury cars from South Korea worldwide.',
    // ABOUT WHY
    'about.why.label': 'Our advantages', 'about.why.title': 'Why us?',
    'about.why.1.title': 'Direct access',       'about.why.1.desc': 'We work directly with official dealers and auctions in South Korea. No middlemen — lower prices, greater transparency.',
    'about.why.2.title': 'Full support',         'about.why.2.desc': 'From choosing a car to receiving it at the destination port. We handle every stage: inspection, purchase, logistics, paperwork.',
    'about.why.3.title': 'Condition check',      'about.why.3.desc': 'Detailed report on every car: photos, videos, service history. You see everything before paying.',
    'about.why.4.title': 'Any country',          'about.why.4.desc': 'We deliver to Russia, Kazakhstan, CIS, Europe, the Middle East. We provide a full set of documents for registration and customs clearance.',
    'about.why.5.title': 'Transparent terms',    'about.why.5.desc': 'All details are confirmed in writing: price, timeline, specification. No hidden fees or surprises.',
    'about.why.6.title': 'Custom sourcing',      'about.why.6.desc': 'Can\'t find your car in the catalog? Describe what you need — we\'ll find exactly that.',
    // ABOUT TEAM
    'about.team.label': 'Our specialists', 'about.team.title': 'Team', 'about.team.role': 'Position',
    'about.team.name1': 'Vladislav Lee', 'about.team.name2': 'Ulyana Lee', 'about.team.name3': 'Sergey Tsoi', 'about.team.name4': 'German An',
    'about.team.init2': 'UL', 'about.team.init3': 'ST',
    // ABOUT ARTICLES
    'about.art1.label': 'Specialists', 'about.art1.title': 'Our team',
    'about.art1.p1': 'Our team are experts with years of experience in Korean car export. We know the market inside out — from auctions to dealer networks.',
    'about.art1.p2': 'Every manager handles the full range of vehicles and markets — from selection to delivery. One contact, complete support at every stage.',
    'about.art1.p3': 'We speak Russian, Korean and English — we work with clients from any country.',
    'about.art2.label': 'With us from day one', 'about.art2.title': 'Our story',
    'about.art2.p1': 'Likon Auto was founded on a simple idea: make access to the Korean car market easy and transparent for clients worldwide.',
    'about.art2.p2': 'Over the years we have built direct relationships with dealers, auctions and logistics partners in Korea. Every delivery is a streamlined process with no surprises.',
    'about.art2.p3': 'Today we continue to grow, expanding our delivery regions and the range of brands we work with.',
    // ABOUT CTA
    'about.cta.label': 'Ready to start?', 'about.cta.title': 'Ready to find<br>your car?',
    'about.cta.sub': 'Contact us — tell us what you\'re looking for and we\'ll suggest options.',
    'about.cta.btn1': 'Write on WhatsApp →', 'about.cta.btn2': 'View catalog',
    // CATALOG
    'cat.hero.title': 'Catalog', 'cat.hero.sub': 'Premium and luxury cars from South Korea',
    'cat.filter.label': 'Filters', 'cat.filter.reset': 'Reset all',
    'cat.filter.brand': 'Brand / Model', 'cat.filter.year': 'Year', 'cat.filter.price': 'Price ($)',
    'cat.filter.km': 'Mileage (km)', 'cat.filter.color': 'Exterior colour', 'cat.filter.interior': 'Interior colour', 'cat.filter.fuel': 'Fuel type',
    'cat.count': 'cars',
    'cat.nocars.title': 'Nothing found', 'cat.nocars.sub': 'Try changing the filters or contact us', 'cat.nocars.btn': 'Write on WhatsApp →',
    'cat.sort.default': 'Default', 'cat.sort.price_asc': 'Price: low to high', 'cat.sort.price_desc': 'Price: high to low',
    'cat.sort.year_desc': 'Year: newest first', 'cat.sort.year_asc': 'Year: oldest first', 'cat.sort.km_asc': 'Mileage: less', 'cat.sort.km_desc': 'Mileage: more',
    'cat.tag.year': 'Year', 'cat.tag.price': 'Price', 'cat.tag.km': 'Mileage', 'cat.tag.interior': 'Interior',
    // CONTACT
    'contact.hero.title': 'Contact', 'contact.hero.sub': 'Tell us what you\'re looking for — we\'ll find and deliver it.',
    'contact.channels.label': 'How to reach us', 'contact.channels.title': 'Choose a convenient way',
    'contact.wa.title': 'Write now', 'contact.wa.desc': 'Write to us — we will answer all your questions and help with your choice.',
    'contact.tg.title': 'Write on Telegram', 'contact.tg.desc': 'Contact us or subscribe to our channel to stay updated on new arrivals.', 'contact.tg.soon': 'Soon',
    'contact.info.label': 'Information', 'contact.info.title': 'Where we are',
    'contact.info.loc.label': 'Location', 'contact.info.loc.value': 'South Korea', 'contact.info.loc.sub': 'We work with clients from any country. Worldwide delivery.',
    'contact.info.hours.label': 'Working hours', 'contact.info.hours.value': 'Mon–Sun', 'contact.info.hours.sub': 'Available 9:00–21:00 Korean time (UTC+9).',
    'contact.info.lang.label': 'Languages', 'contact.info.lang.sub': 'We communicate in Russian, English and Korean.',
    'contact.how.label': 'Getting started', 'contact.how.title': 'How to place an order',
    'contact.how.1.title': 'Choose or describe a car', 'contact.how.1.desc': 'Browse the catalog or send us your parameters: make, model, year, budget, colour. Any wishes welcome.',
    'contact.how.2.title': 'Receive an offer', 'contact.how.2.desc': 'We will find options on the Korean market with prices, photos and history. This usually takes a few hours to one day.',
    'contact.how.3.title': 'Confirm and proceed', 'contact.how.3.desc': 'Once all terms are agreed, we organise purchase and delivery. You receive the car at the destination port.',
  }
};

function T(key) {
  const lang = localStorage.getItem('likonLang') || 'ru';
  return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.ru[key] ?? key;
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = T(el.dataset.i18n);
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = T(el.dataset.i18nHtml);
    if (val != null) el.innerHTML = val;
  });
  const lang = localStorage.getItem('likonLang') || 'ru';
  document.querySelectorAll('.lang-label').forEach(el => { el.textContent = lang === 'ru' ? 'EN' : 'RU'; });
  document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
}

window.toggleLang = function() {
  const next = (localStorage.getItem('likonLang') || 'ru') === 'ru' ? 'en' : 'ru';
  localStorage.setItem('likonLang', next);
  applyLang();
  if (typeof rebuildSidebar === 'function') rebuildSidebar();
  if (typeof renderCars === 'function') renderCars();
};

applyLang();
