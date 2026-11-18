/* =====================================================================
   Visit Astana — all site text in English, Russian and Kazakh.
   Loaded before js/script.js, which reads these objects.
   ===================================================================== */

/* Interface strings, looked up by key with t("key") in script.js.
   {name}-style placeholders are filled in at runtime. */
const uiTranslations = {
    en: {
        brandTitle: "Visit Astana",
        brandSub: "Heart of the Great Steppe",
        kzBrandTitle: "Visit Kazakhstan",
        kzBrandSub: "Explore the Great Steppe",
        bgBtn: "Change Background",
        nightMode: "🌙 Night Mode",
        dayMode: "☀️ Day Mode",
        navKzMap: "Kazakhstan Map",
        navHome: "Astana",
        navHistory: "History & Culture",
        navSeasons: "Seasons & Calendar",
        navAttractions: "Attractions",
        navTours: "Tours",
        seasonsBadge: "🗓️ Year-Round Kazakhstan Travel Planner",
        seasonsPageTitle: "Seasons & Calendar",
        seasonsPageDesc: "Discover the best time to visit Kazakhstan across all four seasons.",
        btnExploreCalendar: "Explore Calendar ↓",
        btnFindSeasonHero: "Find My Season",
        seasonsExplorerTitle: "Four Seasons",
        seasonsExplorerSub: "",
        seasonSpringName: "Spring",
        seasonSpringMonths: "March – May",
        seasonSummerName: "Summer",
        seasonSummerMonths: "June – August",
        seasonAutumnName: "Autumn",
        seasonAutumnMonths: "September – November",
        seasonWinterName: "Winter",
        seasonWinterMonths: "December – February",
        seasonBestPlacesLabel: "📍 Best Places",
        seasonHighlightsLabel: "✨ Highlights",
        packingTitle: "🎒 Packing Checklist:",
        calHeading: "12-Month Calendar",
        calSubheading: "",
        btnJumpCurrentMonth: "Current Month",
        calHolidayLabel: "🎉 Key Event",
        btnGoToMonthSeason: "Explore Season ↑",
        btnSaveMonthPlan: "⭐ Bookmark",
        monthSavedToast: "Saved {month} to your plan!",
        wizardBadge: "Trip Compass",
        matcherHeading: "Find Your Best Season",
        matcherSub: "",
        matcherActivityLabel: "1. Experience",
        vibeSpringTitle: "Nauryz & Blooming Steppe",
        vibeSpringSub: "",
        vibeSummerTitle: "Lakes & Summer Nights",
        vibeSummerSub: "",
        vibeAutumnTitle: "Canyons & Golden Foliage",
        vibeAutumnSub: "",
        vibeWinterTitle: "Skiing & Winter Magic",
        vibeWinterSub: "",
        matcherWeatherLabel: "2. Weather",
        optWeatherWarm: "☀️ Warm (+22°…+32°C)",
        optWeatherMild: "🌤️ Mild (+10°…+22°C)",
        optWeatherSnow: "❄️ Snowy (Below 0°C)",
        matcherStyleLabel: "3. Style",
        styleCulture: "🎭 Culture",
        styleNature: "📸 Nature",
        styleAdventure: "🥾 Adventure",
        matcherBestMatchBadge: "✓ Best Match",
        ticketRouteLabel: "🗺️ Suggested Route",
        btnViewSeasonAbove: "Open Season ↑",
        btnInspectMonth: "View Month ↑",
        mJanShort: "JAN", mFebShort: "FEB", mMarShort: "MAR", mAprShort: "APR", mMayShort: "MAY", mJunShort: "JUN",
        mJulShort: "JUL", mAugShort: "AUG", mSepShort: "SEP", mOctShort: "OCT", mNovShort: "NOV", mDecShort: "DEC",
        mJan: "January", mFeb: "February", mMar: "March", mApr: "April", mMay: "May", mJun: "June",
        mJul: "July", mAug: "August", mSep: "September", mOct: "October", mNov: "November", mDec: "December",
        kzHeroBadge: "Travel Guide",
        kzHeroTitle: "Explore Kazakhstan",
        kzHeroDesc: "From the Caspian Sea to the Altai Mountains. Select a region on the map below to start exploring.",
        kzBtnExploreMap: "Explore Map ↓",
        kzBtnJumpAstana: "Visit Astana →",
        kzFeaturedNow: "Available Now",
        kzSpotlightTitle: "Republic of Kazakhstan",
        kzSpotlightDesc: "Select a region on the map below.",
        kzOpenAstanaBtn: "Open Astana Guide →",
        kzMapHeading: "Map of Kazakhstan",
        kzMapInstructions: "Click a region on the map to view details.",
        legendAvailable: "Available (Astana)",
        legendSelected: "Selected",
        legendSoon: "Coming Soon",
        pillAstana: "Astana",
        pillAlmaty: "Almaty & Zhetysu",
        pillTurkistan: "Turkistan & South",
        pillMangystau: "Mangystau & West",
        pillEast: "East & Altai",
        pillCentral: "Central Steppe",
        pillNorth: "North",
        pillKyzylorda: "Aral & Baikonur",
        kzMapCoordLabel: "Republic of Kazakhstan",
        kzMapHoverDefault: "Select a region",
        kzMapTip: "",
        kzQuickJumpAstana: "Go to Astana →",
        factLabelCenter: "Main City",
        factLabelPop: "Population",
        factLabelHighlight: "Highlights",
        factLabelStatus: "Status",
        kzStatsHeading: "Kazakhstan in Numbers",
        kzStat1: "Largest country in the world",
        kzStat2: "Steppe, mountains & lakes",
        kzStat3: "Population",
        kzStat4: "Astana became capital",
        kzRoadmapHeading: "Destinations",
        kzRoadmapSub: "",
        badgeAvailableNow: "Available Now",
        badgeComingSoon: "Coming Soon",
        destAstanaTitle: "Astana & Capital Region",
        destAstanaDesc: "Modern architecture, landmarks, and guided city tours.",
        destAlmatyTitle: "Almaty & Zhetysu",
        destAlmatyDesc: "Tian Shan mountains, Charyn Canyon, and Kolsai Lakes.",
        destTurkistanTitle: "Turkistan & South",
        destTurkistanDesc: "Silk Road mausoleums and ancient oasis cities.",
        btnPreviewOnMap: "Preview on Map ↑",
        statusBadgeLive: "Available Now",
        statusBadgeSoon: "Coming Soon",
        btnExploreAstana: "Explore Astana →",
        btnRegionSoon: "Coming Soon",
        heroTitle: "Welcome to Astana",
        heroDesc: "Astana is a unique blend of futuristic architecture, rich nomadic heritage, and warm steppe hospitality.",
        btnLandmarks: "View Landmarks",
        btnBookTour: "Book a Tour",
        btnSupport: "Contact Support",
        factHeading: "Did You Know? Astana Cultural & Architecture Facts",
        historyTitle: "History & Culture of Kazakhstan",
        historyIntro: "From ancient nomadic civilizations of the Great Steppe and flourishing Silk Road cities to the founding of the Kazakh Khanate and modern independence, explore the shared heritage uniting all of Kazakhstan.",
        histEra1Badge: "1st Millennium BC",
        histEra1Title: "Saka & Scythian Nomads (\"The Golden Man\")",
        histEra1Desc: "Master horsemen and goldsmiths roamed the Eurasian steppe, leaving behind royal burial mounds (kurgans) and the iconic Golden Warrior (Altyn Adam), now a national symbol of Kazakhstan.",
        histEra2Badge: "6th – 15th Century",
        histEra2Title: "The Great Silk Road & Steppe Cities",
        histEra2Desc: "Caravan cities such as Turkistan, Otrar, Taraz, and Saraishyk connected East and West, fostering trade, science, philosophy (Al-Farabi), and architectural masterpieces like the Mausoleum of Khoja Ahmed Yasawi.",
        histEra3Badge: "1465",
        histEra3Title: "Founding of the Kazakh Khanate",
        histEra3Desc: "Kerey Khan and Zhanibek Khan established the Kazakh Khanate, uniting the tribes across the vast territory from the Caspian Sea to the Altai Mountains with a shared language, dombra music, and nomadic code of laws.",
        histEra4Badge: "1991",
        histEra4Title: "Independence of the Republic of Kazakhstan",
        histEra4Desc: "Kazakhstan proclaimed its independence in December 1991, embarking on nation-building, global nuclear non-proliferation leadership, and transferring the national capital from Almaty to Astana in 1997.",
        histEra5Badge: "Today",
        histEra5Title: "Modern Cultural & Innovation Crossroads",
        histEra5Desc: "Today's Kazakhstan preserves its sacred nomadic hospitality, eagle hunting, and UNESCO World Heritage sites while welcoming global travelers to futuristic cities, spaceports, and national parks.",
        attractionsTitle: "Must-See Landmarks in Astana",
        toursTitle: "Available Tour Packages",
        morningGreeting: "☀️ Good Morning from Astana!",
        afternoonGreeting: "🌤️ Good Afternoon! Great time to explore Nurzhol Boulevard.",
        eveningGreeting: "🌙 Good Evening! Enjoy Astana's illuminated skyline.",
        greetCustomPrefix: "Welcome to Astana, ",
        greetGuest: "Welcome to Astana, Honored Guest!",
        timePrefix: "Current Astana Time: ",
        readMoreOpen: "Read More History",
        readMoreClose: "Show Less History",
        dishesLoadedBtn: "All Delicacies Loaded ✓",
        ratedPrefix: "Rated ",
        step1Badge: "Step 1 of 2: Account Details",
        step2Badge: "Step 2 of 2: Tour Selection",
        clearedMsg: "All form fields have been cleared.",
        errName: "Please enter a valid full name (at least 2 letters, no special symbols or numbers).",
        errEmail: "Please enter a valid email address (e.g., name@example.com).",
        errPhone: "Please enter a valid phone number (e.g., +7 701 123 4567, 10–15 digits).",
        errPassSpace: "Password cannot contain spaces.",
        errPassFormat: "Password must be at least 8 characters and include at least one letter and one number.",
        errPassMatch: "Passwords do not match.",
        errMsgShort: "Message must be at least 5 characters long.",
        errLoginFail: "Invalid email or password. Please check your credentials or Sign Up first.",
        navProfile: "Profile",
        profileBadge: "👤 Traveler Portal · LocalStorage Authentication",
        profilePageTitle: "Traveler Account & Personal Profile",
        profilePageDesc: "Sign up or log in to manage your Kazakhstan travel profile, view your saved travel months, and track your booked guided tours.",
        signUpHeading: "Create Traveler Account (Sign Up)",
        badgeNewTraveler: "New Traveler",
        signUpSub: "All fields are validated with JavaScript (name, email format, phone number pattern, and password complexity).",
        labelFullName: "Full Name *",
        labelEmail: "Email Address *",
        labelPhone: "Phone Number *",
        labelFavRegion: "Dream Destination in Kazakhstan *",
        labelPassword: "Password (min 8 chars, letter + number) *",
        labelConfirmPass: "Confirm Password *",
        btnSignUp: "Sign Up & Open Profile →",
        loginHeading: "Log In",
        badgeReturning: "Returning Member",
        loginSub: "Already created an account? Enter your email and password to access your stored profile.",
        labelLoginPass: "Password *",
        btnLogin: "Log In to Profile →",
        authStorageNote: "🔒 Your profile credentials, saved travel months, and tour bookings are stored locally in your browser's localStorage.",
        badgeVerifiedTraveler: "✓ Verified Kazakhstan Traveler",
        btnLogout: "Log Out",
        profileSavedPlansTitle: "Your Saved Kazakhstan Travel Plans",
        profileBookedToursHeading: "🎟️ Booked Guided Tours",
        profileSavedMonthsHeading: "🗓️ Bookmarked Travel Months",
        noBookingsYet: "No guided tours booked yet. Visit the Tours page to reserve a guide!",
        noMonthsYet: "No travel months bookmarked yet. Explore the Seasons & Calendar page!",
        welcomeUserToast: "Welcome, {name}! You are now logged in.",
        loggedOutToast: "You have been logged out.",
        apiBadge: "🌐 Live Public API Integration",
        apiHeading: "Live Kazakhstan Weather & Country Data",
        apiSub: "Real-time weather conditions across Kazakhstan (via Open-Meteo API) and live country facts (via REST Countries API).",
        btnRefreshApi: "↻ Refresh Live Data",
        weatherApiTitle: "🌤️ Live City Weather in Kazakhstan",
        apiLoading: "Fetching live data…",
        apiErrorMsg: "Could not reach live API right now. Showing cached travel data.",
        weatherTempLabel: "Temperature",
        weatherCondLabel: "Condition",
        weatherWindLabel: "Wind Speed",
        weatherUpdatedLabel: "Status",
        countryApiTitle: "🇰🇿 Official Country Facts (REST Countries API)",
        apiOfficialName: "Official Name",
        apiCurrency: "Currency",
        apiLanguages: "Languages",
        apiRegionSub: "Region & Capital",
        bookingConfirmed: "Booking confirmed for {name}! Package: {tour}.",
        inquiryThanks: "Thank you, {name}! Your inquiry was received.",
        tourSummary: "Showing {count} package(s) in \"{category}\" — Average Package Price: {price}",
        cat_all: "All Available Tour Packages",
        cat_city: "City & Architecture Tours",
        cat_night: "Evening Skyline Tours",
        cat_nature: "Nature & Resort Excursions",
        wait: "Please wait…",
        copyBtn: "Copy",
        copiedBtn: "Copied",
        copied: "Copied to clipboard!",
        copyFail: "Could not copy. Please select the text manually.",
        ratedToast: "Thanks! You rated {landmark} {stars}",
        shownCount: "Showing {shown} of {total} landmarks",
        noMatch: "No matches found",
        faqStatus: "Matches: {count} (in {questions} of {total} questions)",
        langLabel: "Language"
    },
    ru: {
        brandTitle: "Посетите Астану",
        brandSub: "Сердце Великой Степи",
        kzBrandTitle: "Посетите Казахстан",
        kzBrandSub: "Исследуйте Великую Степь",
        bgBtn: "Сменить фон",
        nightMode: "🌙 Ночной режим",
        dayMode: "☀️ Дневной режим",
        navKzMap: "Карта Казахстана",
        navHome: "Астана",
        navHistory: "История и Культура",
        navSeasons: "Сезоны и Календарь",
        navAttractions: "Достопримечательности",
        navTours: "Туры",
        seasonsBadge: "🗓️ Круглогодичный планировщик по Казахстану",
        seasonsPageTitle: "Четыре сезона и интерактивный календарь Казахстана",
        seasonsPageDesc: "От цветения тюльпанов в южной степи и бирюзовых горных озер летом до золотых осенних каньонов и снежных вершин — выберите идеальное время для путешествия по Казахстану.",
        btnExploreCalendar: "К интерактивному календарю ↓",
        btnFindSeasonHero: "Подобрать идеальный сезон ✨",
        seasonsExplorerTitle: "Казахстан по временам года",
        seasonsExplorerSub: "Выберите сезон ниже, чтобы узнать температуру, лучшие направления по стране, активности и интерактивный чек-лист вещей:",
        seasonSpringName: "Весна",
        seasonSpringMonths: "Март – Май",
        seasonSummerName: "Лето",
        seasonSummerMonths: "Июнь – Август",
        seasonAutumnName: "Осень",
        seasonAutumnMonths: "Сентябрь – Ноябрь",
        seasonWinterName: "Зима",
        seasonWinterMonths: "Декабрь – Февраль",
        seasonBestPlacesLabel: "📍 Лучшие места для поездки",
        seasonHighlightsLabel: "✨ Главные впечатления сезона",
        packingTitle: "🎒 Интерактивный список вещей (нажмите, чтобы отметить):",
        calHeading: "Интерактивный календарь праздников и погоды на 12 месяцев",
        calSubheading: "Нажмите на любой месяц, чтобы узнать о национальных праздниках, фестивалях, погоде по регионам Казахстана и советах туристам:",
        btnJumpCurrentMonth: "Текущий месяц",
        calHolidayLabel: "🎉 Главные праздники и культурные события",
        btnGoToMonthSeason: "Перейти к сезону этого месяца ↑",
        btnSaveMonthPlan: "⭐ Сохранить",
        monthSavedToast: "Месяц «{month}» сохранен в ваш план поездки по Казахстану!",
        wizardBadge: "🧭 Интерактивный компас путешественника",
        matcherHeading: "Не знаете, когда поехать? Подберите идеальный сезон",
        matcherSub: "Выберите пейзаж мечты, комфортную температуру и стиль отдыха — персональный маршрут по Казахстану обновится справа!",
        matcherActivityLabel: "1. Выберите главное впечатление в Казахстане",
        vibeSpringTitle: "Наурыз и цветущая степь",
        vibeSpringSub: "Дикие тюльпаны, юрты и города Шелкового пути",
        vibeSummerTitle: "Бирюзовые озера и летние бульвары",
        vibeSummerSub: "Кольсай, Бурабай, Каспий и Астана",
        vibeAutumnTitle: "Золотые каньоны и беркутчи",
        vibeAutumnSub: "Чарынский каньон, урожай и золотая осень",
        vibeWinterTitle: "Снежные пики и зимняя сказка",
        vibeWinterSub: "Горные лыжи, катки и крытые оазисы",
        matcherWeatherLabel: "2. Комфортная температура",
        optWeatherWarm: "☀️ Тепло и солнечно (+22°C … +32°C)",
        optWeatherMild: "🌤️ Мягкая и свежая (+10°C … +22°C)",
        optWeatherSnow: "❄️ Морозная и снежная (ниже 0°C)",
        matcherStyleLabel: "3. Ваш стиль путешествия",
        styleCulture: "🎭 Культура, праздники и кухня",
        styleNature: "📸 Природа и фотопейзажи",
        styleAdventure: "🥾 Активный треккинг и спорт",
        matcherBestMatchBadge: "✓ Ваш персональный выбор",
        ticketRouteLabel: "🗺️ Рекомендуемый маршрут для вас",
        btnViewSeasonAbove: "Открыть гид по сезону ↑",
        btnInspectMonth: "Смотреть лучший месяц ↑",
        mJanShort: "ЯНВ", mFebShort: "ФЕВ", mMarShort: "МАР", mAprShort: "АПР", mMayShort: "МАЙ", mJunShort: "ИЮН",
        mJulShort: "ИЮЛ", mAugShort: "АВГ", mSepShort: "СЕН", mOctShort: "ОКТ", mNovShort: "НОЯ", mDecShort: "ДЕК",
        mJan: "Январь", mFeb: "Февраль", mMar: "Март", mApr: "Апрель", mMay: "Май", mJun: "Июнь",
        mJul: "Июль", mAug: "Август", mSep: "Сентябрь", mOct: "Октябрь", mNov: "Ноябрь", mDec: "Декабрь",
        kzHeroBadge: "🌏 Национальный туристический портал · Пошаговый гид",
        kzHeroTitle: "Откройте Казахстан: от Каспийского моря до вершин Алтая",
        kzHeroDesc: "Добро пожаловать в интерактивный путеводитель по Казахстану — девятой по величине стране мира. Нажмите на любой регион на карте ниже, чтобы узнать о его истории и достопримечательностях, и перейдите на страницу региона — начиная с нашей столицы Астаны!",
        kzBtnExploreMap: "К интерактивной карте ↓",
        kzBtnJumpAstana: "Перейти на сайт Астаны →",
        kzFeaturedNow: "★ Великая степь и горы",
        kzSpotlightTitle: "Республика Казахстан",
        kzSpotlightDesc: "Выберите регион на интерактивной карте ниже, чтобы открыть путеводитель.",
        kzOpenAstanaBtn: "Открыть гид по Астане →",
        kzMapHeading: "Интерактивная карта Казахстана",
        kzMapInstructions: "Нажмите на любой регион или город на карте, чтобы увидеть подробную информацию справа. Нажмите на Астану, чтобы перейти к полному путеводителю по столице.",
        legendAvailable: "Доступно сейчас (Астана)",
        legendSelected: "Выбранный регион",
        legendSoon: "Скоро появится",
        pillAstana: "★ Астана и столичный регион (Доступно)",
        pillAlmaty: "Алматы и Жетысу",
        pillTurkistan: "Туркестан и Юг",
        pillMangystau: "Мангистау и Каспий",
        pillEast: "Восточный Казахстан и Алтай",
        pillCentral: "Караганда и Сарыарка",
        pillNorth: "Север и Костанай",
        pillKyzylorda: "Арал и Байконур",
        kzMapCoordLabel: "40°N – 55°N · 46°E – 87°E · Республика Казахстан",
        kzMapHoverDefault: "Выберите область на карте",
        kzMapTip: "💡 Совет: Нажмите на любую область на карте для просмотра деталей, а затем перейдите на страницу города!",
        kzQuickJumpAstana: "Перейти к Астане →",
        factLabelCenter: "Главный город",
        factLabelPop: "Население",
        factLabelHighlight: "Главный символ",
        factLabelStatus: "Статус гида",
        kzStatsHeading: "Казахстан в цифрах",
        kzStat1: "Крупнейшая страна в мире",
        kzStat2: "Бескрайние степи, горы и озера",
        kzStat3: "Жителей встречают гостей",
        kzStat4: "Год переноса столицы в Астану",
        kzRoadmapHeading: "Изучайте регионы шаг за шагом",
        kzRoadmapSub: "Мы постепенно расширяем наш портал на все регионы Казахстана. Начните с полного гида по Астане уже сегодня!",
        badgeAvailableNow: "★ Доступно сейчас",
        badgeComingSoon: "⏳ Скоро",
        destAstanaTitle: "Астана и Акмолинский регион",
        destAstanaDesc: "Полный гид по городу: 14 достопримечательностей Астаны, интерактивная фотогалерея и бронирование туров.",
        destAlmatyTitle: "Алматы и Жетысу",
        destAlmatyDesc: "Снежные пики Тянь-Шаня, курорт Шымбулак, Чарынский каньон и высокогорные озера Кольсай и Каинды.",
        destTurkistanTitle: "Туркестан и Великий Шелковый путь",
        destTurkistanDesc: "Мавзолей Ходжи Ахмеда Ясави (ЮНЕСКО), древний Отрар и колоритные восточные базары.",
        btnPreviewOnMap: "Показать на карте ↑",
        statusBadgeLive: "★ Доступно сейчас · Полный сайт готов",
        statusBadgeSoon: "⏳ Скоро · Пошаговое расширение",
        btnExploreAstana: "Перейти на страницу Астаны →",
        btnRegionSoon: "Страница региона в разработке",
        heroTitle: "Добро пожаловать в Астану",
        heroDesc: "Астана — уникальное сочетание футуристической архитектуры, богатого кочевого наследия и теплого степного гостеприимства.",
        btnLandmarks: "Смотреть локации",
        btnBookTour: "Забронировать тур",
        btnSupport: "Служба поддержки",
        factHeading: "Знаете ли вы? Культурные и архитектурные факты об Астане",
        historyTitle: "История и Культура Казахстана",
        historyIntro: "От древних кочевых цивилизаций Великой Степи и цветущих городов Шелкового пути до образования Казахского ханства и современной независимости — узнайте об общем наследии Казахстана.",
        histEra1Badge: "I тысячелетие до н.э.",
        histEra1Title: "Сакская эпоха («Золотой человек»)",
        histEra1Desc: "Искусные всадники и мастера золотого дела населяли евразийские степи, оставив курганы и знаменитого «Золотого человека» (Алтын Адам) — национальный символ Казахстана.",
        histEra2Badge: "VI – XV века",
        histEra2Title: "Великий Шелковый путь и города степи",
        histEra2Desc: "Караванные города Туркестан, Отрар, Тараз и Сарайшык связывали Восток и Запад, развивая науку, философию (Аль-Фараби) и архитектуру, включая мавзолей Ходжи Ахмеда Ясави.",
        histEra3Badge: "1465 год",
        histEra3Title: "Образование Казахского ханства",
        histEra3Desc: "Ханы Керей и Жанибек основали Казахское ханство, объединив племена от Каспия до Алтая общим языком, искусством кюя на домбре и степным сводом законов.",
        histEra4Badge: "1991 год",
        histEra4Title: "Независимость Республики Казахстан",
        histEra4Desc: "В декабре 1991 года Казахстан провозгласил независимость, став суверенным государством и перенеся столицу из Алматы в Астану в 1997 году.",
        histEra5Badge: "Сегодня",
        histEra5Title: "Современный центр культуры и инноваций",
        histEra5Desc: "Сегодня Казахстан бережно хранит традиции кочевого гостеприимства и объекты ЮНЕСКО, открывая путешественникам современные мегаполисы, космодром и национальные парки.",
        attractionsTitle: "Главные достопримечательности Астаны",
        toursTitle: "Доступные экскурсионные туры",
        morningGreeting: "☀️ Доброе утро из Астаны!",
        afternoonGreeting: "🌤️ Добрый день! Отличное время для прогулки по бульвару Нуржол.",
        eveningGreeting: "🌙 Добрый вечер! Насладитесь вечерней иллюминацией Астаны.",
        greetCustomPrefix: "Добро пожаловать в Астану, ",
        greetGuest: "Добро пожаловать в Астану, уважаемый гость!",
        timePrefix: "Местное время в Астане: ",
        readMoreOpen: "Читать далее историю",
        readMoreClose: "Скрыть подробности",
        dishesLoadedBtn: "Все деликатесы загружены ✓",
        ratedPrefix: "Оценка ",
        step1Badge: "Шаг 1 из 2: Данные аккаунта",
        step2Badge: "Шаг 2 из 2: Выбор тура",
        clearedMsg: "Все поля формы очищены.",
        errName: "Введите корректное имя (минимум 2 буквы, без цифр и спецсимволов).",
        errEmail: "Введите корректный email адрес (например, name@example.com).",
        errPhone: "Введите корректный номер телефона (например, +7 701 123 4567, от 10 до 15 цифр).",
        errPassSpace: "Пароль не должен содержать пробелы.",
        errPassFormat: "Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру.",
        errPassMatch: "Пароли не совпадают.",
        errMsgShort: "Сообщение должно содержать минимум 5 символов.",
        errLoginFail: "Неверный email или пароль. Проверьте данные или зарегистрируйтесь.",
        navProfile: "Профиль",
        profileBadge: "👤 Личный кабинет · Авторизация через LocalStorage",
        profilePageTitle: "Аккаунт путешественника и личный профиль",
        profilePageDesc: "Зарегистрируйтесь или войдите, чтобы управлять профилем, просматривать сохраненные месяцы и забронированные туры.",
        signUpHeading: "Создать аккаунт (Регистрация)",
        badgeNewTraveler: "Новый турист",
        signUpSub: "Все поля проверяются через JavaScript (имя, формат email, шаблон телефона и сложность пароля).",
        labelFullName: "Полное имя *",
        labelEmail: "Email адрес *",
        labelPhone: "Номер телефона *",
        labelFavRegion: "Мечта в Казахстане *",
        labelPassword: "Пароль (мин. 8 символов, буква + цифра) *",
        labelConfirmPass: "Подтвердите пароль *",
        btnSignUp: "Зарегистрироваться и открыть профиль →",
        loginHeading: "Вход в аккаунт",
        badgeReturning: "Уже есть аккаунт",
        loginSub: "Уже регистрировались? Введите email и пароль для входа в ваш профиль.",
        labelLoginPass: "Пароль *",
        btnLogin: "Войти в профиль →",
        authStorageNote: "🔒 Данные профиля, сохраненные месяцы и бронирования туров хранятся локально в localStorage вашего браузера.",
        badgeVerifiedTraveler: "✓ Подтвержденный путешественник",
        btnLogout: "Выйти",
        profileSavedPlansTitle: "Ваши сохраненные планы по Казахстану",
        profileBookedToursHeading: "🎟️ Забронированные экскурсионные туры",
        profileSavedMonthsHeading: "🗓️ Сохраненные месяцы для поездки",
        noBookingsYet: "Пока нет забронированных туров. Перейдите в раздел «Туры»!",
        noMonthsYet: "Пока нет сохраненных месяцев. Изучите страницу «Сезоны и Календарь»!",
        welcomeUserToast: "Добро пожаловать, {name}! Вы вошли в профиль.",
        loggedOutToast: "Вы вышли из аккаунта.",
        apiBadge: "🌐 Интеграция публичных API",
        apiHeading: "Погода в Казахстане и данные о стране (Live API)",
        apiSub: "Погода в реальном времени по городам Казахстана (Open-Meteo API) и официальные данные о стране (REST Countries API).",
        btnRefreshApi: "↻ Обновить данные API",
        weatherApiTitle: "🌤️ Погода в городах Казахстана сейчас",
        apiLoading: "Загрузка данных из API…",
        apiErrorMsg: "Не удалось подключиться к API. Показаны сохраненные данные.",
        weatherTempLabel: "Температура",
        weatherCondLabel: "Погодные условия",
        weatherWindLabel: "Скорость ветра",
        weatherUpdatedLabel: "Статус",
        countryApiTitle: "🇰🇿 Официальные данные (REST Countries API)",
        apiOfficialName: "Официальное название",
        apiCurrency: "Валюта",
        apiLanguages: "Языки",
        apiRegionSub: "Регион и столица",
        bookingConfirmed: "Бронирование подтверждено для {name}! Тур: {tour}.",
        inquiryThanks: "Спасибо, {name}! Ваш запрос успешно получен.",
        tourSummary: "Показано туров: {count} в категории «{category}» — Средняя стоимость: {price}",
        cat_all: "Все доступные туры",
        cat_city: "Город и архитектура",
        cat_night: "Вечерние туры",
        cat_nature: "Природа и курорты",
        wait: "Пожалуйста, подождите…",
        copyBtn: "Копировать",
        copiedBtn: "Готово",
        copied: "Скопировано в буфер обмена!",
        copyFail: "Не удалось скопировать. Выделите текст вручную.",
        ratedToast: "Спасибо! Ваша оценка: {landmark} {stars}",
        shownCount: "Показано {shown} из {total} мест",
        noMatch: "Совпадений нет",
        faqStatus: "Совпадений: {count} (в {questions} из {total} вопросов)",
        langLabel: "Язык"
    },
    kz: {
        brandTitle: "Астанаға саяхат",
        brandSub: "Ұлы Дала жүрегі",
        kzBrandTitle: "Қазақстанға саяхат",
        kzBrandSub: "Ұлы Даланы зерттеңіз",
        bgBtn: "Фонды өзгерту",
        nightMode: "🌙 Түнгі режим",
        dayMode: "☀️ Күндізгі режим",
        navKzMap: "Қазақстан картасы",
        navHome: "Астана",
        navHistory: "Тарих және Мәдениет",
        navSeasons: "Маусымдар мен Күнтізбе",
        navAttractions: "Көрікті жерлер",
        navTours: "Турлар",
        seasonsBadge: "🗓️ Қазақстан бойынша жылдық саяхат жоспарлағыш",
        seasonsPageTitle: "Қазақстанның төрт мезгілі мен интерактивті күнтізбесі",
        seasonsPageDesc: "Көктемгі қызғалдақ алқаптары мен жазғы тау көлдерінен бастап алтын күздегі шатқалдар мен қарлы шыңдарға дейін — Қазақстанға саяхатыңыз үшін ең қолайлы уақытты таңдаңыз.",
        btnExploreCalendar: "Интерактивті күнтізбеге өту ↓",
        btnFindSeasonHero: "Өз маусымымды табу ✨",
        seasonsExplorerTitle: "Қазақстанды жыл мезгілдері бойынша зерттеңіз",
        seasonsExplorerSub: "Ауа райын, Қазақстанның үздік бағыттарын және интерактивті жолдорба тізімін көру үшін мезгілді таңдаңыз:",
        seasonSpringName: "Көктем",
        seasonSpringMonths: "Наурыз – Мамыр",
        seasonSummerName: "Жаз",
        seasonSummerMonths: "Маусым – Тамыз",
        seasonAutumnName: "Күз",
        seasonAutumnMonths: "Қыркүйек – Қараша",
        seasonWinterName: "Қыс",
        seasonWinterMonths: "Желтоқсан – Ақпан",
        seasonBestPlacesLabel: "📍 Баруға ең қолайлы жерлер",
        seasonHighlightsLabel: "✨ Маусымның басты ерекшеліктері",
        packingTitle: "🎒 Интерактивті заттар тізімі (белгілеу үшін басыңыз):",
        calHeading: "12 айлық мерекелер мен ауа райының интерактивті күнтізбесі",
        calSubheading: "Ұлттық мерекелер, фестивальдер және Қазақстан өңірлеріндегі ауа райын көру үшін кез келген айды басыңыз:",
        btnJumpCurrentMonth: "Ағымдағы айға өту",
        calHolidayLabel: "🎉 Негізгі мерекелер мен мәдени іс-шаралар",
        btnGoToMonthSeason: "Осы айдың мезгіліне өту ↑",
        btnSaveMonthPlan: "⭐ Сақтау",
        monthSavedToast: "«{month}» айы Қазақстанға саяхат жоспарыңызға сақталды!",
        wizardBadge: "🧭 Интерактивті саяхат компасы",
        matcherHeading: "Қашан баруды білмейсіз бе? Өзіңізге сай маусымды табыңыз",
        matcherSub: "Армандаған табиғатты, қолайлы температураны және демалыс стилін таңдаңыз — сізге арналған бағыт оң жақта бірден көрінеді!",
        matcherActivityLabel: "1. Қазақстандағы басты әсерді таңдаңыз",
        vibeSpringTitle: "Наурыз және гүлдеген дала",
        vibeSpringSub: "Қызғалдақтар, киіз үйлер мен Жібек жолы",
        vibeSummerTitle: "Көгілдір көлдер мен жазғы серуен",
        vibeSummerSub: "Көлсай, Бурабай, Каспий және Астана",
        vibeAutumnTitle: "Алтын шатқалдар мен бүркітшілер",
        vibeAutumnSub: "Шарын шатқалы, молшылық және алтын күз",
        vibeWinterTitle: "Қарлы шыңдар мен қысқы ертегі",
        vibeWinterSub: "Тау шаңғысы, мұз айдындары мен оазистер",
        matcherWeatherLabel: "2. Қолайлы температура",
        optWeatherWarm: "☀️ Жылы әрі шуақты (+22°C … +32°C)",
        optWeatherMild: "🌤️ Жұмсақ әрі салқын (+10°C … +22°C)",
        optWeatherSnow: "❄️ Аязды әрі қарлы (0°C-тан төмен)",
        matcherStyleLabel: "3. Саяхат стиліңіз",
        styleCulture: "🎭 Мәдениет, мерекелер және асхана",
        styleNature: "📸 Табиғат және фотокөріністер",
        styleAdventure: "🥾 Белсенді треккинг және спорт",
        matcherBestMatchBadge: "✓ Сізге арналған таңдау",
        ticketRouteLabel: "🗺️ Сізге ұсынылатын маршрут",
        btnViewSeasonAbove: "Маусым гидін ашу ↑",
        btnInspectMonth: "Үздік айды көру ↑",
        mJanShort: "ҚАҢ", mFebShort: "АҚП", mMarShort: "НАУ", mAprShort: "СӘУ", mMayShort: "МАМ", mJunShort: "МАУ",
        mJulShort: "ШІЛ", mAugShort: "ТАМ", mSepShort: "ҚЫР", mOctShort: "ҚАЗ", mNovShort: "ҚАР", mDecShort: "ЖЕЛ",
        mJan: "Қаңтар", mFeb: "Ақпан", mMar: "Наурыз", mApr: "Сәуір", mMay: "Мамыр", mJun: "Маусым",
        mJul: "Шілде", mAug: "Тамыз", mSep: "Қыркүйек", mOct: "Қазан", mNov: "Қараша", mDec: "Желтоқсан",
        kzHeroBadge: "🌏 Ұлттық туристік портал · Қадамдық нұсқаулық",
        kzHeroTitle: "Қазақстанды ашыңыз: Каспий теңізінен Алтай шыңдарына дейін",
        kzHeroDesc: "Әлемдегі жер көлемі бойынша тоғызыншы орын алатын Қазақстанның интерактивті саяхат гидіне қош келдіңіз. Төмендегі картадан кез келген өңірді басып, толық ақпарат алыңыз және елордамыз Астанадан бастап арнайы парақшасына өтіңіз!",
        kzBtnExploreMap: "Интерактивті картаны көру ↓",
        kzBtnJumpAstana: "Астана сайтына өту →",
        kzFeaturedNow: "★ Ұлы Дала мен таулар",
        kzSpotlightTitle: "Қазақстан Республикасы",
        kzSpotlightDesc: "Саяхат гидін ашу үшін төмендегі интерактивті картадан аймақты таңдаңыз.",
        kzOpenAstanaBtn: "Астана гидін ашу →",
        kzMapHeading: "Қазақстанның интерактивті картасы",
        kzMapInstructions: "Оң жақта толық ақпаратты көру үшін картадағы кез келген аймақты немесе қаланы басыңыз. Елордамен танысып, толық Астана сайтына өту үшін Астананы таңдаңыз.",
        legendAvailable: "Қазір қолжетімді (Астана)",
        legendSelected: "Таңдалған аймақ",
        legendSoon: "Жақында қосылады",
        pillAstana: "★ Астана және елорда өңірі (Ашық)",
        pillAlmaty: "Алматы және Жетісу",
        pillTurkistan: "Түркістан және Оңтүстік",
        pillMangystau: "Маңғыстау және Каспий",
        pillEast: "Шығыс Қазақстан және Алтай",
        pillCentral: "Қарағанды және Сарыарқа",
        pillNorth: "Солтүстік және Қостанай",
        pillKyzylorda: "Арал және Байқоңыр",
        kzMapCoordLabel: "40°N – 55°N · 46°E – 87°E · Қазақстан Республикасы",
        kzMapHoverDefault: "Картадан аймақты таңдаңыз",
        kzMapTip: "💡 Кеңес: Толық мәлімет алу үшін картадағы кез келген аймақты басып, оң жақтағы батырма арқылы қала парақшасына өтіңіз!",
        kzQuickJumpAstana: "Астанаға өту →",
        factLabelCenter: "Басты қала",
        factLabelPop: "Халқы",
        factLabelHighlight: "Басты нысан",
        factLabelStatus: "Гид мәртебесі",
        kzStatsHeading: "Қазақстан сандармен",
        kzStat1: "Әлемдегі ең ірі мемлекеттердің бірі",
        kzStat2: "Кең дала, таулар мен көлдер",
        kzStat3: "Қонақжай Қазақстан халқы",
        kzStat4: "Астана елорда болған жыл",
        kzRoadmapHeading: "Қазақстан өңірлерін біртіндеп зерттеңіз",
        kzRoadmapSub: "Біз саяхат порталымызды Қазақстанның барлық аймақтарына біртіндеп кеңейтіп жатырмыз. Бүгін толық Астана гидінен бастаңыз!",
        badgeAvailableNow: "★ Қазір қолжетімді",
        badgeComingSoon: "⏳ Жақында",
        destAstanaTitle: "Астана және Ақмола өңірі",
        destAstanaDesc: "Қалалық толық гид: Астананың 14 көрікті жері, интерактивті фотогалерея және турларға тапсырыс беру.",
        destAlmatyTitle: "Алматы және Жетісу",
        destAlmatyDesc: "Тянь-Шань шыңдары, Шымбұлақ курорты, Шарын шатқалы және Көлсай мен Қайыңды көлдері.",
        destTurkistanTitle: "Түркістан және Ұлы Жібек жолы",
        destTurkistanDesc: "Қожа Ахмет Ясауи кесенесі (ЮНЕСКО), ежелгі Отырар қалашығы және шығыс базарлары.",
        btnPreviewOnMap: "Картадан көру ↑",
        statusBadgeLive: "★ Қазір қолжетімді · Толық сайт дайын",
        statusBadgeSoon: "⏳ Жақында · Біртіндеп қосылады",
        btnExploreAstana: "Астана парақшасына өту →",
        btnRegionSoon: "Аймақ парақшасы дайындалуда",
        heroTitle: "Астанаға қош келдіңіз",
        heroDesc: "Астана — футуристік сәулет, бай көшпелі мұра мен қонақжайлылықтың бірегей үйлесімі.",
        btnLandmarks: "Көрікті жерлер",
        btnBookTour: "Турға тапсырыс беру",
        btnSupport: "Қолдау қызметі",
        factHeading: "Білесіз бе? Астананың мәдениеті мен сәулеті туралы деректер",
        historyTitle: "Қазақстанның тарихы мен мәдениеті",
        historyIntro: "Ұлы Даланың ежелгі көшпелі өркениеттері мен Жібек жолы қалаларынан бастап Қазақ хандығының құрылуы мен бүгінгі тәуелсіздікке дейінгі бүкіл Қазақстанды біріктіретін ортақ мұрамен танысыңыз.",
        histEra1Badge: "Б.з.д. I мыңжылдық",
        histEra1Title: "Сақ және скиф дәуірі («Алтын адам»)",
        histEra1Desc: "Еуразия даласын мекендеген сақ жауынгерлері мен зергерлері патша қорғандарын және бүгінде Қазақстанның ұлттық символына айналған әйгілі «Алтын адамды» мұра етіп қалдырды.",
        histEra2Badge: "VI – XV ғасырлар",
        histEra2Title: "Ұлы Жібек жолы және дала қалалары",
        histEra2Desc: "Түркістан, Отырар, Тараз және Сарайшық керуен қалалары Шығыс пен Батысты жалғап, ғылым (Әл-Фараби), сауда және Қожа Ахмет Ясауи кесенесі сияқты сәулет жауһарларын дамытты.",
        histEra3Badge: "1465 жыл",
        histEra3Title: "Қазақ хандығының құрылуы",
        histEra3Desc: "Керей мен Жәнібек хандар Каспийден Алтайға дейінгі ұлан-ғайыр өлкедегі ру-тайпаларды ортақ тіл, домбыра күйі және дала заңдары аясында біріктіріп, Қазақ хандығының негізін қалады.",
        histEra4Badge: "1991 жыл",
        histEra4Title: "Қазақстан Республикасының Тәуелсіздігі",
        histEra4Desc: "1991 жылы желтоқсанда Қазақстан өз тәуелсіздігін жариялап, егеменді мемлекет ретінде дамып, 1997 жылы ел астанасын Алматыдан Астанаға көшірді.",
        histEra5Badge: "Бүгінгі таңда",
        histEra5Title: "Заманауи мәдениет пен инновация ордасы",
        histEra5Desc: "Бүгінгі Қазақстан көшпелі қонақжайлылық дәстүрі мен ЮНЕСКО мұраларын сақтай отырып, саяхатшыларды заманауи қалалармен, ғарыш айлағымен және ұлттық парктермен қарсы алады.",
        attractionsTitle: "Астананың басты көрікті жерлері",
        toursTitle: "Қолжетімді тур пакеттері",
        morningGreeting: "☀️ Астанадан қайырлы таң!",
        afternoonGreeting: "🌤️ Қайырлы күн! Нұржол желекжолымен серуендеуге тамаша уақыт.",
        eveningGreeting: "🌙 Қайырлы кеш! Астананың кешкі шамдарын тамашалаңыз.",
        greetCustomPrefix: "Астанаға қош келдіңіз, ",
        greetGuest: "Астанаға қош келдіңіз, құрметті қонақ!",
        timePrefix: "Астана уақыты: ",
        readMoreOpen: "Тарихты толығырақ оқу",
        readMoreClose: "Қысқарту",
        dishesLoadedBtn: "Барлық тағамдар жүктелді ✓",
        ratedPrefix: "Бағасы ",
        step1Badge: "1-қадам (2-ден): Аккаунт деректері",
        step2Badge: "2-қадам (2-ден): Турды таңдау",
        clearedMsg: "Барлық өрістер тазартылды.",
        errName: "Толық аты-жөніңізді дұрыс енгізіңіз (кемінде 2 әріп, сандар мен белгілерсіз).",
        errEmail: "Дұрыс электрондық поштаны енгізіңіз (мысалы, name@example.com).",
        errPhone: "Дұрыс телефон нөмірін енгізіңіз (мысалы, +7 701 123 4567, 10–15 сан).",
        errPassSpace: "Құпиясөзде бос орын болмауы керек.",
        errPassFormat: "Құпиясөз кемінде 8 таңбадан, кемінде бір әріп пен бір саннан тұруы керек.",
        errPassMatch: "Құпиясөздер сәйкес келмейді.",
        errMsgShort: "Хабарлама кемінде 5 таңбадан тұруы керек.",
        errLoginFail: "Email немесе құпиясөз қате. Деректерді тексеріңіз немесе тіркеліңіз.",
        navProfile: "Профиль",
        profileBadge: "👤 Саяхатшы порталы · LocalStorage авторизациясы",
        profilePageTitle: "Саяхатшы аккаунты және жеке профиль",
        profilePageDesc: "Қазақстан бойынша саяхат профиліңізді басқару, сақталған айлар мен брондалған турларды көру үшін тіркеліңіз немесе кіріңіз.",
        signUpHeading: "Аккаунт ашу (Тіркелу)",
        badgeNewTraveler: "Жаңа саяхатшы",
        signUpSub: "Барлық өрістер JavaScript арқылы тексеріледі (есімі, email форматы, телефон нөмірі және құпиясөз күрделілігі).",
        labelFullName: "Толық аты-жөніңіз *",
        labelEmail: "Электрондық пошта *",
        labelPhone: "Телефон нөмірі *",
        labelFavRegion: "Қазақстандағы арман бағытыңыз *",
        labelPassword: "Құпиясөз (кемінде 8 таңба, әріп + сан) *",
        labelConfirmPass: "Құпиясөзді растаңыз *",
        btnSignUp: "Тіркелу және профильді ашу →",
        loginHeading: "Жүйеге кіру",
        badgeReturning: "Тіркелген қолданушы",
        loginSub: "Аккаунтыңыз бар ма? Профильді ашу үшін email мен құпиясөзді енгізіңіз.",
        labelLoginPass: "Құпиясөз *",
        btnLogin: "Профильге кіру →",
        authStorageNote: "🔒 Профиль деректері, сақталған айлар мен тур тапсырыстары браузердің localStorage жадында сақталады.",
        badgeVerifiedTraveler: "✓ Расталған Қазақстан саяхатшысы",
        btnLogout: "Шығу",
        profileSavedPlansTitle: "Қазақстан бойынша сақталған жоспарларыңыз",
        profileBookedToursHeading: "🎟️ Тапсырыс берілген турлар",
        profileSavedMonthsHeading: "🗓️ Таңдалған саяхат айлары",
        noBookingsYet: "Әзірге брондалған турлар жоқ. «Турлар» бетіне өтіңіз!",
        noMonthsYet: "Әзірге сақталған айлар жоқ. «Маусымдар мен Күнтізбе» бетін көріңіз!",
        welcomeUserToast: "Қош келдіңіз, {name}! Сіз жүйеге кірдіңіз.",
        loggedOutToast: "Сіз аккаунттан шықтыңыз.",
        apiBadge: "🌐 Ашық API интеграциясы",
        apiHeading: "Қазақстанның тікелей ауа райы мен ел деректері (Live API)",
        apiSub: "Қазақстан қалаларындағы нақты уақыттағы ауа райы (Open-Meteo API) және ресми ел деректері (REST Countries API).",
        btnRefreshApi: "↻ API деректерін жаңарту",
        weatherApiTitle: "🌤️ Қазақстан қалаларындағы қазіргі ауа райы",
        apiLoading: "API деректері жүктелуде…",
        apiErrorMsg: "API-ға қосылу мүмкін болмады. Сақталған деректер көрсетілді.",
        weatherTempLabel: "Температура",
        weatherCondLabel: "Ауа райы күйі",
        weatherWindLabel: "Жел жылдамдығы",
        weatherUpdatedLabel: "Мәртебесі",
        countryApiTitle: "🇰🇿 Ресми мемлекеттік деректер (REST Countries API)",
        apiOfficialName: "Ресми атауы",
        apiCurrency: "Валюта",
        apiLanguages: "Тілдер",
        apiRegionSub: "Аймақ және астана",
        bookingConfirmed: "{name} үшін тапсырыс расталды! Тур: {tour}.",
        inquiryThanks: "Рақмет, {name}! Сұранысыңыз қабылданды.",
        tourSummary: "«{category}» санатында {count} тур көрсетілді — Орташа бағасы: {price}",
        cat_all: "Барлық қолжетімді турлар",
        cat_city: "Қала және сәулет турлары",
        cat_night: "Кешкі панорамалық турлар",
        cat_nature: "Табиғат және курорт",
        wait: "Күте тұрыңыз…",
        copyBtn: "Көшіру",
        copiedBtn: "Дайын",
        copied: "Алмасу буферіне көшірілді!",
        copyFail: "Көшіру мүмкін болмады. Мәтінді қолмен белгілеңіз.",
        ratedToast: "Рақмет! Сіздің бағаңыз: {landmark} {stars}",
        shownCount: "{total} орынның {shown} көрсетілді",
        noMatch: "Сәйкестік табылмады",
        faqStatus: "Сәйкестік: {count} ({total} сұрақтың {questions}-інде)",
        langLabel: "Тіл"
    }
};

/* Page text: the English text found in the HTML → its RU / KZ version. */
const fullPageTextMap = {
    // Home Page
    "Greet Me": { ru: "Поприветствовать", kz: "Сәлемдесу" },
    "Check Local Time": { ru: "Узнать время", kz: "Уақытты тексеру" },
    "Discover Random Fact": { ru: "Случайный факт", kz: "Кездейсоқ дерек" },
    "Astana Gallery in 9 Frames": { ru: "Галерея Астаны в 9 кадрах", kz: "Астана галереясы 9 кадрда" },
    "1. Baiterek Tower": { ru: "1. Монумент Байтерек", kz: "1. Бәйтерек монументі" },
    "Symbol of modern Kazakhstan": { ru: "Символ современного Казахстана", kz: "Қазіргі Қазақстанның символы" },
    "2. Khan Shatyr": { ru: "2. Хан Шатыр", kz: "2. Хан Шатыр" },
    "World's largest tensile tent": { ru: "Крупнейший шатер в мире", kz: "Әлемдегі ең үлкен шатыр" },
    "3. Hazret Sultan Mosque": { ru: "3. Мечеть Хазрет Султан", kz: "3. Әзірет Сұлтан мешіті" },
    "Grand oriental marble mosque": { ru: "Величественная белокаменная мечеть", kz: "Ақ мәрмәрдан салынған зәулім мешіт" },
    "4. Nur-Alem": { ru: "4. Сфера Нур-Алем", kz: "4. Нұр-Әлем сферасы" },
    "The iconic EXPO sphere": { ru: "Легендарная сфера ЭКСПО", kz: "ЭКСПО-ның бірегей сферасы" },
    "5. Astana by Night": { ru: "5. Ночная Астана", kz: "5. Түнгі Астана" },
    "Lively illuminated skyline": { ru: "Яркая вечерняя панорама", kz: "Кешкі жарқыраған панорама" },
    "6. Burabay Nature": { ru: "6. Природа Бурабая", kz: "6. Бурабай табиғаты" },
    "Kazakhstan's natural forest resort": { ru: "Природный лесной курорт Казахстана", kz: "Қазақстанның табиғи орманды курорты" },
    "7. City Center": { ru: "7. Центр города", kz: "7. Қала орталығы" },
    "Nurzhol Boulevard and open plazas": { ru: "Бульвар Нуржол и площади", kz: "Нұржол желекжолы мен алаңдар" },
    "8. Observation Sky View": { ru: "8. Панорамный вид", kz: "8. Панорамалық көрініс" },
    "Panoramic city panorama": { ru: "Обзорная панорама столицы", kz: "Елорданың биіктен көрінісі" },
    "9. Indoor Oasis": { ru: "9. Крытый оазис", kz: "9. Жабық оазис" },
    "Year-round tropical gardens": { ru: "Тропические сады круглый год", kz: "Жыл бойы жасыл тропикалық бақ" },
    "Featured Highlights": { ru: "Избранные локации", kz: "Таңдаулы орындар" },
    "Baiterek Tower": { ru: "Монумент Байтерек", kz: "Бәйтерек монументі" },
    "Ascend the iconic golden sphere for a bird's-eye view across the capital's central axis.": {
        ru: "Поднимитесь на золотую сферу, чтобы увидеть панораму центральной оси столицы с высоты птичьего полета.",
        kz: "Елорданың орталық көрінісін биіктен тамашалау үшін алтын шарға көтеріліңіз."
    },
    "Khan Shatyr": { ru: "Хан Шатыр", kz: "Хан Шатыр" },
    "A monumental transparent tent featuring shopping, an indoor tropical beach, and entertainment.": {
        ru: "Монументальный прозрачный шатер с магазинами, крытым тропическим пляжем и развлечениями.",
        kz: "Сауда орталығы, жабық тропикалық жағажайы және ойын-сауық алаңы бар алып мөлдір шатыр."
    },
    "Hazret Sultan": { ru: "Хазрет Султан", kz: "Әзірет Сұлтан" },
    "Marvel at pure white marble domes and traditional Kazakh decorative craftsmanship.": {
        ru: "Полюбуйтесь белоснежными мраморными куполами и традиционным казахским орнаментальным искусством.",
        kz: "Ақ мәрмәр күмбездер мен дәстүрлі қазақ ою-өрнек өнеріне тәнті болыңыз."
    },
    "Learn More": { ru: "Подробнее", kz: "Толығырақ" },
    "Frequently Asked Questions": { ru: "Часто задаваемые вопросы", kz: "Жиі қойылатын сұрақтар" },
    "Click any question to view details:": { ru: "Нажмите на любой вопрос, чтобы увидеть ответ:", kz: "Толық ақпарат алу үшін сұрақты басыңыз:" },
    "What is the best time to visit Astana?": { ru: "Какое лучшее время для посещения Астаны?", kz: "Астанаға барудың ең қолайлы уақыты қайсы?" },
    "May through September provides pleasant warm weather, outdoor cafes, and open city fountains.": {
        ru: "С мая по сентябрь стоит приятная теплая погода, работают летние террасы и городские фонтаны.",
        kz: "Мамыр мен қыркүйек аралығында ауа райы жылы болып, жазғы дәмханалар мен субұрқақтар жұмыс істейді."
    },
    "How do public buses work for tourists?": { ru: "Как работает общественный транспорт для туристов?", kz: "Туристер үшін қоғамдық автобустар қалай жұмыс істейді?" },
    "Buses accept contactless card and QR payments. Bus 10 runs directly from the airport through Baiterek Tower.": {
        ru: "Автобусы принимают бесконтактную оплату картой и QR. Маршрут №10 идет прямо из аэропорта через Байтерек.",
        kz: "Автобустарда банк картасымен және QR арқылы төлеуге болады. №10 автобус әуежайдан Бәйтерекке дейін тікелей барады."
    },
    "Is English spoken at major landmarks?": { ru: "Говорят ли на английском на главных объектах?", kz: "Негізгі нысандарда ағылшын тілінде қызмет көрсетіле ме?" },
    "Yes, major sites like Baiterek, EXPO Nur-Alem, and tourist kiosks offer services in Kazakh, Russian, and English.": {
        ru: "Да, крупные объекты, включая Байтерек и ЭКСПО Нур-Алем, обслуживают гостей на казахском, русском и английском языках.",
        kz: "Иә, Бәйтерек, ЭКСПО Нұр-Әлем сияқты ірі нысандар қазақ, орыс және ағылшын тілдерінде қызмет көрсетеді."
    },
    "Contact Visitor Helpdesk": { ru: "Связаться со службой поддержки", kz: "Туристерді қолдау қызметі" },
    "Your Name": { ru: "Ваше имя", kz: "Аты-жөніңіз" },
    "Your Email": { ru: "Ваш Email", kz: "Электрондық поштаңыз" },
    "Message": { ru: "Сообщение", kz: "Хабарлама" },
    "Send Inquiry": { ru: "Отправить запрос", kz: "Сұранысты жіберу" },

    // History Page
    "From an 1830 steppe outpost to an internationally recognized center of diplomatic dialogue and futuristic architecture, explore how Astana evolved across two centuries.": {
        ru: "От степного укрепления 1830 года до всемирно признанного центра дипломатии и футуристической архитектуры — узнайте, как развивалась Астана.",
        kz: "1830 жылғы дала бекінісінен бастап халықаралық дипломатия мен футуристік сәулет орталығына дейінгі Астананың екі ғасырлық даму тарихымен танысыңыз."
    },
    "Akmola Fortress": { ru: "Крепость Акмола", kz: "Ақмола бекінісі" },
    "Established on the picturesque banks of the Ishim River, growing rapidly into a lively trading crossroads along historic caravan routes.": {
        ru: "Основана на живописном берегу реки Ишим и быстро превратилась в оживленный торговый узел на пересечении караванных путей.",
        kz: "Есіл өзенінің көркем жағасында іргесі қаланып, тарихи керуен жолдарының бойындағы ірі сауда орталығына айналды."
    },
    "Official Capital Relocation": { ru: "Официальный перенос столицы", kz: "Елорданың ресми ауысуы" },
    "The national capital was officially transferred from Almaty to Akmola on December 10, 1997, initiating one of modern history's boldest urban architectural projects.": {
        ru: "10 декабря 1997 года столица была официально перенесена из Алматы в Акмолу, что дало старт масштабному градостроительному проекту.",
        kz: "1997 жылы 10 желтоқсанда ел астанасы Алматыдан Ақмолаға ресми түрде көшіріліп, заманауи тарихтағы ең ірі сәулет жобасы басталды."
    },
    'UNESCO "City of Peace"': { ru: "Премия ЮНЕСКО «Город мира»", kz: "ЮНЕСКО «Бейбітшілік қаласы»" },
    "Awarded this title in recognition of its peaceful inter-ethnic harmony, cultural dialogue, and rapid international diplomatic role.": {
        ru: "Удостоена этого звания за укрепление межэтнического согласия, культурного диалога и дипломатического сотрудничества.",
        kz: "Ұлтаралық татулық, мәдени диалог және халықаралық дипломатиядағы рөлі үшін осы мәртебелі атаққа ие болды."
    },
    'EXPO 2017 "Future Energy"': { ru: "ЭКСПО-2017 «Энергия будущего»", kz: "ЭКСПО-2017 «Болашақ энергиясы»" },
    "Astana welcomed millions of global visitors and over 115 countries, unveiling the landmark Nur-Alem sphere and green technology district.": {
        ru: "Астана приняла миллионы гостей и более 115 стран, открыв знаменитую сферу Нур-Алем и квартал зеленых технологий.",
        kz: "Астана миллиондаған қонақтар мен 115-тен астам елді қарсы алып, әйгілі Нұр-Әлем сферасы мен жасыл технологиялар аумағын ашты."
    },
    "Today": { ru: "Сегодня", kz: "Бүгінгі таңда" },
    "Smart Hub of Central Asia": { ru: "Умный хаб Центральной Азии", kz: "Орталық Азияның смарт-орталығы" },
    "Home to Astana IT University, the Astana International Financial Centre (AIFC), and world-renowned cultural theaters.": {
        ru: "Дом для Astana IT University, Международного финансового центра «Астана» (МФЦА) и театров мирового уровня.",
        kz: "Astana IT University, «Астана» халықаралық қаржы орталығы (АХҚО) және әлемдік деңгейдегі мәдени театрлар орналасқан орда."
    },
    "Read More History": { ru: "Читать далее историю", kz: "Тарихты толығырақ оқу" },
    "Flavors of the Steppe": { ru: "Вкусы Великой Степи", kz: "Ұлы Дала дәмі" },
    "Load Traditional Delicacies": { ru: "Загрузить традиционные блюда", kz: "Дәстүрлі тағамдарды жүктеу" },
    "Hearty, comforting dishes made for family feasts and cold winters:": {
        ru: "Сытные традиционные блюда, созданные для семейных застолий и морозных зим:",
        kz: "Отбасылық дастарқан мен қысқы аязға арналған тойымды ұлттық тағамдар:"
    },
    "Beshbarmak": { ru: "Бешбармак", kz: "Бесбармақ" },
    "Tender cuts served over broad homemade pasta ribbons with rich, savory onion broth.": {
        ru: "Нежное мясо, подаваемое на тонких сочнях домашнего теста с ароматным луковым бульоном.",
        kz: "Дәмді тұздық пен жайма нанның үстіне салынып берілетін асылған ет."
    },
    "Baursaks": { ru: "Баурсаки", kz: "Бауырсақ" },
    "Golden, airy fried dough spheres served steaming hot alongside milk tea.": {
        ru: "Золотистые воздушные кусочки теста, подаваемые горячими к чаю с молоком.",
        kz: "Сүтті шаймен бірге ыстықтай ұсынылатын алтын түстес, жұмсақ пісірілген нан."
    },
    "Qurt & Qymyz": { ru: "Курт и Кумыс", kz: "Құрт пен Қымыз" },
    "Sun-dried tangy cheese curds and nourishing fermented milk drinks of the nomads.": {
        ru: "Высушенный соленый творожный сыр и целебный кисломолочный напиток кочевников.",
        kz: "Күнге кептірілген дәмді құрт пен көшпенділердің шипалы сусыны — сары қымыз."
    },

    // Attractions Page
    "Astana is world-renowned for its visionary skyline and monuments reflecting Kazakh identity, history, and architectural ambition. Click the stars on any landmark to leave your visitor rating!": {
        ru: "Астана славится своим футуристическим обликом и монументами, отражающими казахскую идентичность. Нажмите на звезды, чтобы оценить локацию!",
        kz: "Астана қазақ болмысы мен тарихын бейнелейтін бірегей сәулетімен танымал. Кез келген нысанды бағалау үшін жұлдызшаларды басыңыз!"
    },
    "Historic & Spiritual Icons": { ru: "Исторические и духовные символы", kz: "Тарихи және рухани нысандар" },
    "Top Pick": { ru: "Выбор туристов", kz: "Үздік таңдау" },
    "Architecture": { ru: "Архитектура", kz: "Сәулет" },
    "Heritage": { ru: "Наследие", kz: "Мұра" },
    "The symbol of the capital, representing the mythical Tree of Life where the sacred bird Samruk laid a golden egg.": {
        ru: "Символ столицы, олицетворяющий мифическое Древо Жизни, в кроне которого священная птица Самрук отложила золотое яйцо.",
        kz: "Қасиетті Самұрық құсы алтын жұмыртқа салған аңыздағы Өмір бәйтерегін бейнелейтін елорда символы."
    },
    "Designed by Norman Foster, this is the world's largest tensile structure featuring retail and an indoor tropical beach.": {
        ru: "Спроектированный Норманом Фостером крупнейший в мире шатер с торговыми галереями и крытым тропическим пляжем.",
        kz: "Норман Фостер жобалаған, ішінде сауда орындары мен тропикалық жағажайы бар әлемдегі ең ірі шатыр."
    },
    "Hazret Sultan Mosque": { ru: "Мечеть Хазрет Султан", kz: "Әзірет Сұлтан мешіті" },
    "One of the largest mosques in Central Asia, featuring classic oriental architecture with traditional Kazakh decorative motifs.": {
        ru: "Одна из крупнейших мечетей Центральной Азии, сочетающая классическое восточное зодчество с казахскими узорами.",
        kz: "Классикалық шығыс сәулеті мен дәстүрлі қазақ ою-өрнегі үйлескен Орталық Азиядағы ең ірі мешіттердің бірі."
    },
    "Rate landmark": { ru: "Оцените объект", kz: "Баға беріңіз" },
    "Interactive Landmark Photo Explorer": { ru: "Интерактивная фотогалерея достопримечательностей", kz: "Көрікті жерлердің интерактивті фотогалереясы" },
    "Click any thumbnail below to dynamically update the main display photograph:": {
        ru: "Нажмите на любую миниатюру ниже, чтобы переключить главное фото:",
        kz: "Негізгі фотосуретті ауыстыру үшін төмендегі кез келген суретті басыңыз:"
    },
    "Baiterek Tower — Golden Observation Sphere on Nurzhol Boulevard": {
        ru: "Монумент Байтерек — Золотая обзорная сфера на бульваре Нуржол",
        kz: "Бәйтерек монументі — Нұржол желекжолындағы алтын шар"
    },
    "Modern Marvels & City Panoramas": { ru: "Современные чудеса и панорамы города", kz: "Заманауи ғажайыптар мен қала панорамасы" },
    "Nur-Alem: Museum of Future Energy": { ru: "Нур-Алем: Музей энергии будущего", kz: "Нұр-Әлем: Болашақ энергиясы музейі" },
    "Standing at 100 meters in diameter, Nur-Alem is the world's largest spherical building. Originally the centerpiece of EXPO 2017, its eight immersive floors showcase innovations in space, solar, wind, and kinetic energy.": {
        ru: "Здание высотой 100 метров является крупнейшей сферой в мире. Восемь интерактивных этажей посвящены энергии космоса, солнца, ветра и воды.",
        kz: "Биіктігі 100 метрлік Нұр-Әлем — әлемдегі ең үлкен сфералық ғимарат. Оның сегіз қабаты ғарыш, күн, жел және кинетикалық энергия инновацияларын көрсетеді."
    },
    "EXPO District": { ru: "Район ЭКСПО", kz: "ЭКСПО аумағы" },
    "Interactive Science": { ru: "Интерактивная наука", kz: "Интерактивті ғылым" },
    "Glass Walkway": { ru: "Стеклянный мост", kz: "Шыны көпір" },
    "City Vistas & Sunset Photography": { ru: "Городские виды и закаты", kz: "Қала көріністері мен күн батуы" },
    "Astana's wide boulevards and open steppe horizon produce sunset skies. Experience sweeping vistas from observation decks across the Ishim River, with viewpoints overlooking illuminated bridges at twilight.": {
        ru: "Широкие проспекты Астаны и открытый горизонт дарят невероятные закаты. Насладитесь видом на набережную реки Ишим и подсвеченные мосты.",
        kz: "Астананың кең даңғылдары мен ашық көкжиегінде күннің батуы ерекше көрінеді. Есіл өзенінің жағалауы мен жарқыраған көпірлерді тамашалаңыз."
    },
    "Golden Hour": { ru: "Золотой час", kz: "Алтын сағат" },
    "Ishim Riverfront": { ru: "Набережная Ишима", kz: "Есіл жағалауы" },
    "Night Illumination": { ru: "Ночная подсветка", kz: "Түнгі иллюминация" },
    "Visitor Information & Transport": { ru: "Информация для туристов и транспорт", kz: "Саяхатшыларға ақпарат және көлік" },
    "City Tourism Attraction Pass": { ru: "Туристическая карта City Pass", kz: "City Pass туристік картасы" },
    "Save up to 20% on entrance tickets by securing an official Astana City Pass. Includes fast-track admission to Baiterek, Nur-Alem, and the National Museum.": {
        ru: "Сэкономьте до 20% на билетах с официальной картой Astana City Pass. Включает быстрый проход в Байтерек, Нур-Алем и Национальный музей.",
        kz: "Ресми Astana City Pass картасымен билеттерге 20%-ға дейін үнемдеңіз. Бәйтерек, Нұр-Әлем және Ұлттық музейге кезексіз кіру кіреді."
    },
    "Check Tour Combinations": { ru: "Посмотреть пакеты туров", kz: "Тур пакеттерін көру" },
    "Getting Around": { ru: "Передвижение по городу", kz: "Қала ішінде қатынау" },
    "Buses accept contactless card payments (QR code and debit card).": {
        ru: "В автобусах доступна бесконтактная оплата (QR-код и банковские карты).",
        kz: "Автобустарда контактісіз төлем (QR-код және банк картасы) қабылданады."
    },

    // Tours Page
    "Explore Astana's futuristic skyline, historic avenues, and natural wonders. Filter packages by category or book your guide below.": {
        ru: "Исследуйте футуристические небоскребы, исторические проспекты и природные красоты Астаны. Выберите категорию тура и забронируйте экскурсию ниже.",
        kz: "Астананың футуристік келбетін, тарихи даңғылдары мен табиғат ғажайыптарын зерттеңіз. Санат бойынша сүзгіден өткізіп, гидке тапсырыс беріңіз."
    },
    "Tour Directory & Schedules": { ru: "Каталог и расписание туров", kz: "Турлар каталогы мен кестесі" },
    "All Tours": { ru: "Все туры", kz: "Барлық турлар" },
    "City & Architecture": { ru: "Город и архитектура", kz: "Қала және сәулет" },
    "Evening Skyline": { ru: "Вечерняя панорама", kz: "Кешкі панорама" },
    "Nature & Resort": { ru: "Природа и курорт", kz: "Табиғат және курорт" },
    "Preview": { ru: "Фото", kz: "Фото" },
    "Tour Package": { ru: "Пакет тура", kz: "Тур пакеті" },
    "Duration": { ru: "Длительность", kz: "Ұзақтығы" },
    "Highlights": { ru: "Главные локации", kz: "Негізгі орындар" },
    "Price": { ru: "Цена", kz: "Бағасы" },
    "Book a Tour & Register Account": { ru: "Бронирование тура и регистрация", kz: "Турға тапсырыс беру және тіркелу" },
    "Full Name *": { ru: "Полное имя *", kz: "Толық аты-жөніңіз *" },
    "Email Address *": { ru: "Email адрес *", kz: "Электрондық пошта *" },
    "Create Password (min. 8 characters) *": { ru: "Создайте пароль (мин. 8 символов) *", kz: "Құпиясөз ойлап табыңыз (кемінде 8 таңба) *" },
    "Confirm Password *": { ru: "Подтвердите пароль *", kz: "Құпиясөзді растаңыз *" },
    "Next: Tour Preferences →": { ru: "Далее: Выбор тура →", kz: "Келесі: Турды таңдау →" },
    "Reset All Inputs": { ru: "Очистить все поля", kz: "Барлық өрісті тазарту" },
    "Select Tour": { ru: "Выберите тур", kz: "Турды таңдаңыз" },
    "Preferred Time": { ru: "Предпочтительное время", kz: "Қолайлы уақыт" },
    "Morning (10:00 AM)": { ru: "Утро (10:00)", kz: "Таңертең (10:00)" },
    "Evening (6:00 PM)": { ru: "Вечер (18:00)", kz: "Кеш (18:00)" },
    "← Back": { ru: "← Назад", kz: "← Артқа" },
    "Submit Booking": { ru: "Подтвердить бронь", kz: "Тапсырысты растау" },
    "Booking Notice": { ru: "Уведомление о бронировании", kz: "Брондау туралы ескерту" },
    "Book day tours 24 hours in advance during peak summer seasons to ensure guide availability.": {
        ru: "Бронируйте дневные туры за 24 часа в летний сезон, чтобы гарантировать наличие гида.",
        kz: "Жазғы маусымда гидтің бос болуын қамтамасыз ету үшін күндізгі турларға 24 сағат бұрын тапсырыс беріңіз."
    },
    "Languages Available": { ru: "Доступные языки", kz: "Қолжетімді тілдер" },
    "Guided excursions can be conducted in Kazakh, Russian, and English upon request.": {
        ru: "Экскурсии с гидом проводятся на казахском, русском и английском языках по запросу.",
        kz: "Гидпен экскурсиялар сұраныс бойынша қазақ, орыс және ағылшын тілдерінде жүргізіледі."
    },
    "Included Amenities": { ru: "Что включено в тур", kz: "Турға не кіреді" },
    "Bottled mineral water": { ru: "Бутилированная вода", kz: "Бөтелкедегі ауыз су" },
    "Museum admission tickets": { ru: "Входные билеты в музеи", kz: "Музей билеттері" },
    "Certified local guide": { ru: "Сертифицированный местный гид", kz: "Сертификатталған жергілікті гид" },

    // Assignment 6 additions
    "Astana in Numbers": { ru: "Астана в цифрах", kz: "Астана сандармен" },
    "Year Akmola fortress was founded": { ru: "Год основания крепости Акмола", kz: "Ақмола бекінісі құрылған жыл" },
    "Residents call Astana home": { ru: "Жителей называют Астану домом", kz: "Тұрғын Астананы үйім дейді" },
    "Height of Baiterek's observation deck": { ru: "Высота смотровой площадки Байтерека", kz: "Бәйтерек көру алаңының биіктігі" },
    "Worshippers fit in Hazret Sultan": { ru: "Верующих вмещает Хазрет Султан", kz: "Әзірет Сұлтан сыйдыратын адам саны" },
    "How cold does Astana get in winter?": { ru: "Насколько холодно в Астане зимой?", kz: "Астанада қыста қаншалықты суық болады?" },
    "Winter temperatures often drop below -25°C with strong steppe winds. Pack a warm coat, hat, and gloves, and plan indoor stops like Khan Shatyr.": {
        ru: "Зимой температура часто опускается ниже -25°C, дуют сильные степные ветры. Возьмите теплую куртку, шапку и перчатки и планируйте остановки в помещениях, например в Хан Шатыре.",
        kz: "Қыста температура жиі -25°C-тан төмен түсіп, қатты дала желі соғады. Жылы күрте, бас киім мен қолғап алып, Хан Шатыр сияқты жабық орындарға аялдауды жоспарлаңыз."
    },
    "Which currency should I use in Astana?": { ru: "Какой валютой пользоваться в Астане?", kz: "Астанада қандай валюта қолданылады?" },
    "The local currency is the Kazakhstani tenge (KZT). Bank cards and QR payments work almost everywhere, including taxis and buses.": {
        ru: "Местная валюта — казахстанский тенге (KZT). Банковские карты и QR-оплата работают почти везде, включая такси и автобусы.",
        kz: "Жергілікті валюта — қазақстандық теңге (KZT). Банк карталары мен QR төлемі барлық жерде, соның ішінде такси мен автобустарда қабылданады."
    },
    "How do I get from the airport to the city center?": { ru: "Как добраться из аэропорта в центр города?", kz: "Әуежайдан қала орталығына қалай жетуге болады?" },
    "Take bus 10 or 12, or order a taxi through an app. The ride to Baiterek Tower takes about 25 minutes.": {
        ru: "Сядьте на автобус №10 или №12 либо закажите такси через приложение. Дорога до Байтерека занимает около 25 минут.",
        kz: "№10 немесе №12 автобусқа отырыңыз не қосымша арқылы такси шақырыңыз. Бәйтерекке дейін шамамен 25 минут жүресіз."
    },
    "Find a Landmark": { ru: "Найти достопримечательность", kz: "Көрікті жерді табу" },
    "Speak Like a Local": { ru: "Говорите как местный", kz: "Жергілікті тұрғындай сөйлеңіз" },
    "Emergency & Useful Numbers": { ru: "Экстренные и полезные номера", kz: "Шұғыл және пайдалы нөмірлер" }
};

/* Input placeholders: English → RU / KZ. */
const placeholderMap = {
    "Enter your name for a custom greeting": { ru: "Введите ваше имя для приветствия", kz: "Сәлемдесу үшін есіміңізді енгізіңіз" },
    "Enter name": { ru: "Введите имя", kz: "Есіміңізді енгізіңіз" },
    "Enter email": { ru: "Введите email", kz: "Email енгізіңіз" },
    "Ask a question...": { ru: "Задайте вопрос...", kz: "Сұрағыңызды жазыңыз..." },
    "Name": { ru: "Имя", kz: "Аты-жөніңіз" },
    "Enter password": { ru: "Введите пароль", kz: "Құпиясөзді енгізіңіз" },
    "Re-enter password": { ru: "Повторите пароль", kz: "Құпиясөзді қайталаңыз" },
    "Search the FAQ (e.g. bus, weather, English)": { ru: "Поиск по вопросам (например: автобус, погода)", kz: "Сұрақтардан іздеу (мысалы: автобус, ауа райы)" },
    "Search landmarks, e.g. Baiterek, museum, park": { ru: "Поиск: Байтерек, музей, парк...", kz: "Іздеу: Бәйтерек, мұражай, саябақ..." }
};

/* "Did you know?" facts on the Home page. */
const astanaFacts = {
    en: [
        "Baiterek Tower stands at 97 meters to the observation deck, symbolizing 1997—the year Astana became the capital of Kazakhstan.",
        "Khan Shatyr is listed in the Guinness World Records as the tallest tensile structure in the world at 150 meters.",
        "Nur-Alem is a complete sphere with a diameter of 80 meters and height of 100 meters, powered by solar and wind energy.",
        "Astana's master plan was designed by renowned Japanese metabolism architect Kisho Kurokawa.",
        "The Ishim River divides the city into the historic Right Bank and the futuristic administrative Left Bank."
    ],
    ru: [
        "Высота смотровой площадки Байтерека составляет 97 метров, что символизирует 1997 год — год переноса столицы в Астану.",
        "Хан Шатыр занесен в Книгу рекордов Гиннесса как самое высокое шатровое сооружение в мире (150 метров).",
        "Сфера Нур-Алем диаметром 80 метров и высотой 100 метров использует солнечные и ветровые генераторы энергии.",
        "Генеральный план застройки Астаны был разработан знаменитым японским архитектором Кисе Курокавой.",
        "Река Ишим делит столицу на исторический Правый берег и современный административный Левый берег."
    ],
    kz: [
        "Бәйтерек мұнарасының бақылау алаңына дейінгі биіктігі 97 метр, бұл 1997 жылы Астананың елорда болған жылын білдіреді.",
        "Хан Шатыр 150 метр биіктігімен әлемдегі ең биік шатырлы құрылыс ретінде Гиннестің рекордтар кітабына енген.",
        "Диаметрі 80 метр, биіктігі 100 метр болатын Нұр-Әлем сферасы күн мен жел энергиясын пайдаланады.",
        "Астананың бас жоспарын әйгілі жапон сәулетшісі Кисе Курокава жобалаған.",
        "Есіл өзені қаланы тарихи Оң жағалау мен заманауи әкімшілік Сол жағалауға бөледі."
    ]
};

/* Extra dishes added by "Load Traditional Delicacies" on the History page. */
const extraDishes = [
    {
        image: "images/kazy_shuzhuk.jpg",
        alt: "kazy_shuzhuk",
        name: { en: "Kazy & Shuzhuk", ru: "Казы и Шужук", kz: "Қазы мен Шұжық" },
        description: {
            en: "Traditional seasoned horsemeat sausages prized as a centerpiece on festive dastarkhan tables.",
            ru: "Традиционные деликатесы из конины, которые являются главным украшением праздничного дастархана.",
            kz: "Мерекелік дастарқанның басты сәні саналатын дәстүрлі жылқы етінен жасалған қазы мен шұжық."
        }
    },
    {
        image: "images/zhent_talkan.jpg",
        alt: "zhent_talkan",
        name: { en: "Zhent & Talkan", ru: "Жент и Талкан", kz: "Жент пен Талқан" },
        description: {
            en: "Rich nomadic dessert crafted from toasted millet, honey, butter, and crushed raisins.",
            ru: "Сытный кочевой десерт из обжаренного проса, меда, топленого масла и изюма.",
            kz: "Қуырылған тары, бал, сары май және мейізден дайындалған құнарлы ұлттық тәтті тағам."
        }
    },
    {
        image: "images/shubat.jpg",
        alt: "shubat",
        name: { en: "Shubat", ru: "Шубат", kz: "Шұбат" },
        description: {
            en: "Refreshing fermented camel milk packed with vitamins and traditional steppe heritage.",
            ru: "Освежающее ферментированное верблюжье молоко, богатое витаминами и полезными свойствами.",
            kz: "Дәрумендерге бай, шипалы әрі сергітетін дәстүрлі түйе сүті — шұбат."
        }
    }
];

/* Tour packages shown in the table on the Tours page. */
const astanaTours = [
    {
        id: "arch",
        category: "city",
        priceKzt: 12000,
        image: "images/astana-architecture.jpg",
        title: { en: "Astana Architecture", ru: "Архитектура Астаны", kz: "Астана сәулеті" },
        duration: { en: "4 Hours", ru: "4 часа", kz: "4 сағат" },
        highlights: {
            en: "Baiterek Tower, Khan Shatyr, Palace of Peace",
            ru: "Байтерек, Хан Шатыр, Дворец мира и согласия",
            kz: "Бәйтерек, Хан Шатыр, Бейбітшілік және келісім сарайы"
        }
    },
    {
        id: "night",
        category: "night",
        priceKzt: 8000,
        image: "images/tour-night.jpg",
        title: { en: "Astana by Night", ru: "Вечерняя Астана", kz: "Түнгі Астана" },
        duration: { en: "2.5 Hours", ru: "2.5 часа", kz: "2.5 сағат" },
        highlights: {
            en: "Illuminated bridges, Ishim riverfront, EXPO sphere",
            ru: "Подсвеченные мосты, набережная Ишима, сфера ЭКСПО",
            kz: "Жарқыраған көпірлер, Есіл жағалауы, ЭКСПО сферасы"
        }
    },
    {
        id: "burabay",
        category: "nature",
        priceKzt: 28000,
        image: "images/tour-burabay.jpg",
        title: { en: "Burabay Day Trip", ru: "Тур в Бурабай на день", kz: "Бурабайға күндізгі тур" },
        duration: { en: "9 Hours", ru: "9 часов", kz: "9 сағат" },
        highlights: {
            en: "Lake Burabay, Okzhetpes Rock, pine hiking trails",
            ru: "Озеро Бурабай, скала Окжетпес, сосновые тропы",
            kz: "Бурабай көлі, Оқжетпес жартасы, қарағайлы орман"
        }
    },
    {
        id: "expo",
        category: "city",
        priceKzt: 10000,
        image: "images/nuralem.jpg",
        title: { en: "EXPO & Smart City Innovation", ru: "ЭКСПО и Умный город", kz: "ЭКСПО және Ақылды қала" },
        duration: { en: "3 Hours", ru: "3 часа", kz: "3 сағат" },
        highlights: {
            en: "Nur-Alem Sphere, AIFC FinTech Hub, Congress Center",
            ru: "Сфера Нур-Алем, технопарк МФЦА, Конгресс-центр",
            kz: "Нұр-Әлем сферасы, АХҚО хабы, Конгресс-орталық"
        }
    }
];

/* Regions shown on the Interactive Map of Kazakhstan (index.html).
   Note: Only Astana uses the existing Astana images. All other regions use
   placeholder image paths where src="images/<alt>.jpg" and alt="<alt>", so
   photos can be added later with the exact same name as alt. */
const kazakhstanRegions = {
    astana: {
        available: true,
        url: "astana.html",
        coords: "51.16° N, 71.43° E",
        images: [
            { src: "images/welcome_to_Astana.jpg", alt: "welcome_to_Astana" },
            { src: "images/baiterek.jpg", alt: "baiterek" },
            { src: "images/khan-shatyr.jpg", alt: "khan-shatyr" },
            { src: "images/hazret-sultan.jpg", alt: "hazret-sultan" },
            { src: "images/nuralem.jpg", alt: "nuralem" }
        ],
        title: {
            en: "Astana (Capital Region)",
            ru: "Астана (Столичный регион)",
            kz: "Астана (Елорда өңірі)"
        },
        tagline: {
            en: "Futuristic Capital & Heart of the Great Steppe",
            ru: "Футуристическая столица и сердце Великой Степи",
            kz: "Футуристік елорда және Ұлы Дала жүрегі"
        },
        description: {
            en: "Modern capital known for its futuristic architecture, cultural centers, and steppe hospitality.",
            ru: "Современная столица с футуристической архитектурой и культурными центрами.",
            kz: "Футуристік сәулетімен және мәдени орталықтарымен танымал заманауи астана."
        },
        city: { en: "Astana", ru: "Астана", kz: "Астана" },
        population: { en: "1,300,000+", ru: "1 300 000+", kz: "1 300 000+" },
        icon: { en: "Baiterek & Khan Shatyr", ru: "Байтерек и Хан Шатыр", kz: "Бәйтерек пен Хан Шатыр" },
        statusText: { en: "3 City Pages Ready ✓", ru: "3 страницы готовы ✓", kz: "3 бет дайын ✓" },
        tags: {
            en: ["Baiterek Tower", "Khan Shatyr", "Hazret Sultan", "Nur-Alem Sphere", "Burabay Resort"],
            ru: ["Байтерек", "Хан Шатыр", "Хазрет Султан", "Сфера Нур-Алем", "Курорт Бурабай"],
            kz: ["Бәйтерек", "Хан Шатыр", "Әзірет Сұлтан", "Нұр-Әлем сферасы", "Бурабай курорты"]
        }
    },
    almaty: {
        available: false,
        url: null,
        coords: "43.24° N, 76.89° E",
        images: [
            { src: "images/almaty_mountains.jpg", alt: "almaty_mountains" },
            { src: "images/charyn_canyon.jpg", alt: "charyn_canyon" },
            { src: "images/kolsai_lakes.jpg", alt: "kolsai_lakes" }
        ],
        title: {
            en: "Almaty & Zhetysu Region",
            ru: "Алматы и область Жетысу",
            kz: "Алматы және Жетісу өңірі"
        },
        tagline: {
            en: "Cultural Metropolis & Land of Seven Rivers",
            ru: "Культурная столица и край Семиречья",
            kz: "Мәдени орда және Жетісу өлкесі"
        },
        description: {
            en: "Home to the Tian Shan mountains, Charyn Canyon, Kolsai Lakes, and Shymbulak ski resort.",
            ru: "Горы Тянь-Шаня, Чарынский каньон, озера Кольсай и курорт Шымбулак.",
            kz: "Тянь-Шань таулары, Шарын шатқалы, Көлсай көлдері мен Шымбұлақ курорты."
        },
        city: { en: "Almaty & Taldykorgan", ru: "Алматы и Талдыкорган", kz: "Алматы мен Талдықорған" },
        population: { en: "3,600,000+", ru: "3 600 000+", kz: "3 600 000+" },
        icon: { en: "Charyn Canyon & Shymbulak", ru: "Чарын и Шымбулак", kz: "Шарын мен Шымбұлақ" },
        statusText: { en: "Coming Soon (Step 2)", ru: "Скоро (Шаг 2)", kz: "Жақында (2-қадам)" },
        tags: {
            en: ["Charyn Canyon", "Kolsai Lakes", "Medeu & Shymbulak", "Altyn-Emel"],
            ru: ["Чарынский каньон", "Озера Кольсай", "Медеу и Шымбулак", "Алтын-Эмель"],
            kz: ["Шарын шатқалы", "Көлсай көлдері", "Медеу мен Шымбұлақ", "Алтын-Емел"]
        }
    },
    turkistan: {
        available: false,
        url: null,
        coords: "43.30° N, 68.25° E",
        images: [
            { src: "images/turkistan_mausoleum.jpg", alt: "turkistan_mausoleum" },
            { src: "images/otrar_ruins.jpg", alt: "otrar_ruins" },
            { src: "images/shymkent_city.jpg", alt: "shymkent_city" }
        ],
        title: {
            en: "Turkistan, Shymkent & Zhambyl",
            ru: "Туркестан, Шымкент и Жамбыл",
            kz: "Түркістан, Шымкент және Жамбыл"
        },
        tagline: {
            en: "Spiritual Capital & Ancient Silk Road Heartland",
            ru: "Духовная столица и сердце Шелкового пути",
            kz: "Түркі әлемінің рухани астанасы мен Ұлы Жібек жолы"
        },
        description: {
            en: "Ancient Silk Road heartland featuring the UNESCO Mausoleum of Khoja Ahmed Yasawi and Otrar ruins.",
            ru: "Сердце Шелкового пути, мавзолей Ходжи Ахмеда Ясави (ЮНЕСКО) и древний Отрар.",
            kz: "Ұлы Жібек жолының орталығы, Қожа Ахмет Ясауи кесенесі мен ежелгі Отырар."
        },
        city: { en: "Turkistan, Shymkent, Taraz", ru: "Туркестан, Шымкент, Тараз", kz: "Түркістан, Шымкент, Тараз" },
        population: { en: "4,500,000+", ru: "4 500 000+", kz: "4 500 000+" },
        icon: { en: "Yasawi Mausoleum", ru: "Мавзолей Ясави", kz: "Ясауи кесенесі" },
        statusText: { en: "Coming Soon (Step 3)", ru: "Скоро (Шаг 3)", kz: "Жақында (3-қадам)" },
        tags: {
            en: ["Khoja Ahmed Yasawi", "Ancient Otrar", "Aksu-Zhabagly", "Silk Road Bazaars"],
            ru: ["Мавзолей Ясави", "Древний Отрар", "Аксу-Жабаглы", "Восточные базары"],
            kz: ["Ясауи кесенесі", "Ежелгі Отырар", "Ақсу-Жабағылы", "Жібек жолы"]
        }
    },
    mangystau: {
        available: false,
        url: null,
        coords: "43.65° N, 51.16° E",
        images: [
            { src: "images/mangystau_bozzhyra.jpg", alt: "mangystau_bozzhyra" },
            { src: "images/aktau_caspian.jpg", alt: "aktau_caspian" },
            { src: "images/torysh_balls.jpg", alt: "torysh_balls" }
        ],
        title: {
            en: "Mangystau & Caspian West",
            ru: "Мангистау и Прикаспийский Запад",
            kz: "Маңғыстау және Каспий маңы Батысы"
        },
        tagline: {
            en: "Caspian Sea Coast & Otherworldly Chalk Canyons",
            ru: "Побережье Каспия и каньоны Устюрта",
            kz: "Каспий теңізі жағалауы мен Бозжыра шатқалы"
        },
        description: {
            en: "Caspian Sea coastline, white chalk cliffs of Bozzhyra, and underground mosques.",
            ru: "Побережье Каспийского моря, меловые скалы Бозжыра и подземные мечети.",
            kz: "Каспий теңізі жағалауы, Бозжыра бор жартастары мен жерасты мешіттері."
        },
        city: { en: "Aktau, Atyrau, Uralsk", ru: "Актау, Атырау, Уральск", kz: "Ақтау, Атырау, Орал" },
        population: { en: "2,200,000+", ru: "2 200 000+", kz: "2 200 000+" },
        icon: { en: "Bozzhyra & Caspian Sea", ru: "Бозжыра и Каспий", kz: "Бозжыра мен Каспий" },
        statusText: { en: "Coming Soon", ru: "Скоро", kz: "Жақында" },
        tags: {
            en: ["Bozzhyra Tract", "Caspian Coast", "Beket-Ata Mosque", "Valley of Balls"],
            ru: ["Урочище Бозжыра", "Берег Каспия", "Мечеть Бекет-Ата", "Долина шаров"],
            kz: ["Бозжыра шатқалы", "Каспий жағалауы", "Бекет-Ата мешіті", "Торыш алқабы"]
        }
    },
    east: {
        available: false,
        url: null,
        coords: "49.95° N, 82.61° E",
        images: [
            { src: "images/altai_belukha.jpg", alt: "altai_belukha" },
            { src: "images/katon_karagay.jpg", alt: "katon_karagay" },
            { src: "images/markakol_lake.jpg", alt: "markakol_lake" }
        ],
        title: {
            en: "East Kazakhstan & Altai",
            ru: "Восточный Казахстан и Алтай",
            kz: "Шығыс Қазақстан және Алтай"
        },
        tagline: {
            en: "Golden Altai Mountains, Taiga Forests & Abai Heritage",
            ru: "Золотой Алтай, тайга и родина Абая",
            kz: "Алтын Алтай таулары мен Абай елі"
        },
        description: {
            en: "Mount Belukha, emerald taiga forests of Katon-Karagay, and the literary homeland of Abai.",
            ru: "Гора Белуха, заповедная тайга Катон-Карагая и родина Абая.",
            kz: "Мұзтау шыңы, Катонқарағай табиғаты және ұлы Абай елі."
        },
        city: { en: "Oskemen & Semey", ru: "Усть-Каменогорск и Семей", kz: "Өскемен мен Семей" },
        population: { en: "1,350,000+", ru: "1 350 000+", kz: "1 350 000+" },
        icon: { en: "Belukha Peak & Katon-Karagay", ru: "Гора Белуха и Катон-Карагай", kz: "Мұзтау мен Катонқарағай" },
        statusText: { en: "Coming Soon", ru: "Скоро", kz: "Жақында" },
        tags: {
            en: ["Mount Belukha", "Katon-Karagay", "Lake Markakol", "Abai Museum Semey"],
            ru: ["Гора Белуха", "Катон-Карагай", "Озеро Маркаколь", "Музей Абая"],
            kz: ["Мұзтау шыңы", "Катонқарағай", "Марқакөл", "Абай музейі"]
        }
    },
    central: {
        available: false,
        url: null,
        coords: "49.80° N, 73.10° E",
        images: [
            { src: "images/ulytau_steppe.jpg", alt: "ulytau_steppe" },
            { src: "images/karkaraly_oasis.jpg", alt: "karkaraly_oasis" },
            { src: "images/balkhash_lake.jpg", alt: "balkhash_lake" }
        ],
        title: {
            en: "Karaganda & Ulytau (Central Steppe)",
            ru: "Караганда и Улытау (Сарыарка)",
            kz: "Қарағанды және Ұлытау (Сарыарқа)"
        },
        tagline: {
            en: "Golden Steppe of Saryarka & Cradle of the Nation",
            ru: "Золотая степь Сарыарки и колыбель нации",
            kz: "Сарыарқаның алтын даласы мен ұлт ұясы — Ұлытау"
        },
        description: {
            en: "Sacred Ulytau hills, Karkaraly pine oasis, and the northern shores of Lake Balkhash.",
            ru: "Священный Улытау, сосновый оазис Каркаралинска и озеро Балхаш.",
            kz: "Қасиетті Ұлытау, Қарқаралы оазисі және Балқаш көлі."
        },
        city: { en: "Karaganda & Zhezkazgan", ru: "Караганда и Жезказган", kz: "Қарағанды мен Жезқазған" },
        population: { en: "1,350,000+", ru: "1 350 000+", kz: "1 350 000+" },
        icon: { en: "Ulytau & Karkaraly", ru: "Улытау и Каркаралинск", kz: "Ұлытау мен Қарқаралы" },
        statusText: { en: "Coming Soon", ru: "Скоро", kz: "Жақында" },
        tags: {
            en: ["Sacred Ulytau", "Karkaraly National Park", "Bektau-Ata", "Lake Balkhash"],
            ru: ["Священный Улытау", "Каркаралинский парк", "Бектау-Ата", "Озеро Балхаш"],
            kz: ["Қасиетті Ұлытау", "Қарқаралы паркі", "Бектау-Ата", "Балқаш көлі"]
        }
    },
    north: {
        available: false,
        url: null,
        coords: "53.20° N, 69.40° E",
        images: [
            { src: "images/bayanaul_park.jpg", alt: "bayanaul_park" },
            { src: "images/botai_settlement.jpg", alt: "botai_settlement" },
            { src: "images/irtysh_river.jpg", alt: "irtysh_river" }
        ],
        title: {
            en: "North Kazakhstan, Kostanay & Pavlodar",
            ru: "Северный Казахстан, Костанай и Павлодар",
            kz: "Солтүстік Қазақстан, Қостанай және Павлодар"
        },
        tagline: {
            en: "Birch Groves, Irtysh River & Bayanaul Granite Peaks",
            ru: "Березовые рощи, Иртыш и гранитные скалы Баянаула",
            kz: "Ақ қайыңды ормандар, Ертіс өзені мен Баянауыл"
        },
        description: {
            en: "Bayanaul National Park, Naurzum nature reserve, and the Irtysh River.",
            ru: "Национальный парк Баянаул, Наурзумский заповедник и река Иртыш.",
            kz: "Баянауыл ұлттық паркі, Науырзым қорығы және Ертіс өзені."
        },
        city: { en: "Pavlodar, Kostanay, Petropavlovsk", ru: "Павлодар, Костанай, Петропавловск", kz: "Павлодар, Қостанай, Петропавл" },
        population: { en: "2,100,000+", ru: "2 100 000+", kz: "2 100 000+" },
        icon: { en: "Bayanaul & Botai", ru: "Баянаул и Ботай", kz: "Баянауыл мен Ботай" },
        statusText: { en: "Coming Soon", ru: "Скоро", kz: "Жақында" },
        tags: {
            en: ["Bayanaul National Park", "Botai Culture", "Naurzum Reserve", "Irtysh River"],
            ru: ["Нацпарк Баянаул", "Ботайская культура", "Наурзумский заповедник", "Река Иртыш"],
            kz: ["Баянауыл паркі", "Ботай мәдениеті", "Науырзым қорығы", "Ертіс өзені"]
        }
    },
    kyzylorda: {
        available: false,
        url: null,
        coords: "45.60° N, 63.30° E",
        images: [
            { src: "images/baikonur_cosmodrome.jpg", alt: "baikonur_cosmodrome" },
            { src: "images/aral_sea.jpg", alt: "aral_sea" },
            { src: "images/aktolagay_hills.jpg", alt: "aktolagay_hills" }
        ],
        title: {
            en: "Aral, Kyzylorda & Aktobe",
            ru: "Арал, Кызылорда и Актобе",
            kz: "Арал, Қызылорда және Ақтөбе"
        },
        tagline: {
            en: "Gateway to Space at Baikonur & Syr Darya Heritage",
            ru: "Космическая гавань Байконур и наследие Сырдарьи",
            kz: "Байқоңыр ғарыш айлағы және Сыр бойы мұрасы"
        },
        description: {
            en: "Home to the Baikonur Cosmodrome, Korkyt Ata Memorial, and the North Aral Sea.",
            ru: "Космодром Байконур, мемориал Коркыт-Ата и Малое Аральское море.",
            kz: "Байқоңыр ғарыш айлағы, Қорқыт Ата кешені және Кіші Арал теңізі."
        },
        city: { en: "Aktobe, Kyzylorda, Baikonur", ru: "Актобе, Кызылорда, Байконур", kz: "Ақтөбе, Қызылорда, Байқоңыр" },
        population: { en: "1,750,000+", ru: "1 750 000+", kz: "1 750 000+" },
        icon: { en: "Baikonur Cosmodrome", ru: "Космодром Байконур", kz: "Байқоңыр ғарыш айлағы" },
        statusText: { en: "Coming Soon", ru: "Скоро", kz: "Жақында" },
        tags: {
            en: ["Baikonur Cosmodrome", "Korkyt Ata Complex", "North Aral Sea", "Aktolagay Plateau"],
            ru: ["Космодром Байконур", "Комплекс Коркыт-Ата", "Малый Арал", "Плато Актолагай"],
            kz: ["Байқоңыр ғарыш айлағы", "Қорқыт Ата кешені", "Кіші Арал теңізі", "Ақтолағай үстірті"]
        }
    }
};

/* =====================================================================
   Seasons & 12-Month Calendar Data (seasons.html)
   Note: Uses placeholder image names matching alt (season_spring, season_summer,
   season_autumn, season_winter) so photos can be added easily later.
   ===================================================================== */
const kazakhstanSeasons = {
    spring: {
        img: "images/season_spring.jpg",
        alt: "season_spring",
        badge: { en: "🌸 Spring · March – May", ru: "🌸 Весна · Март – Май", kz: "🌸 Көктем · Наурыз – Мамыр" },
        temp: { en: "🌡️ +8°C to +22°C", ru: "🌡️ +8°C … +22°C", kz: "🌡️ +8°C … +22°C" },
        title: {
            en: "Blooming Steppe & Nauryz Renewal",
            ru: "Цветущая степь и праздник Наурыз",
            kz: "Гүлдеген дала және әз-Наурыз мерекесі"
        },
        desc: {
            en: "Wild tulips bloom across the steppe as Kazakhstan celebrates Nauryz Meiramy (March 21–23) with yurts, music, and traditional feasts.",
            ru: "Степь покрывается дикими тюльпанами, а по всей стране празднуют Наурыз мейрамы (21–23 марта) с юртами и угощениями.",
            kz: "Дала қызғалдаққа толып, ел бойынша 21–23 наурызда Наурыз мейрамы тойланады."
        },
        places: {
            en: "Turkistan, Shymkent, Mangystau Canyons, Charyn Canyon & Astana Plazas",
            ru: "Туркестан, Шымкент, каньоны Мангистау, Чарынский каньон и площади Астаны",
            kz: "Түркістан, Шымкент, Маңғыстау шатқалдары, Шарын шатқалы және Астана алаңдары"
        },
        highlights: {
            en: "Nauryz Meiramy festivities, wild steppe tulip fields, mild desert & canyon treks",
            ru: "Гуляния на Наурыз, поля диких тюльпанов, треккинг по каньонам без летнего зноя",
            kz: "Наурыз мерекесі, жабайы қызғалдақ алқаптары, шатқалдарға саяхат"
        },
        packing: {
            en: ["Light windproof jacket", "Comfortable walking shoes", "Sunglasses & sunscreen", "Camera for Nauryz & tulips"],
            ru: ["Легкая ветровка", "Удобная обувь для прогулок", "Солнцезащитные очки", "Камера для Наурыза и тюльпанов"],
            kz: ["Жеңіл желбегей күрте", "Ыңғайлы аяқ киім", "Күннен қорғайтын көзілдірік", "Фотоаппарат"]
        }
    },
    summer: {
        img: "images/season_summer.jpg",
        alt: "season_summer",
        badge: { en: "☀️ Summer · June – August", ru: "☀️ Лето · Июнь – Август", kz: "☀️ Жаз · Маусым – Тамыз" },
        temp: { en: "🌡️ +22°C to +32°C", ru: "🌡️ +22°C … +32°C", kz: "🌡️ +22°C … +32°C" },
        title: {
            en: "Vibrant Astana Nights, Alpine Lakes & Pine Resorts",
            ru: "Яркое лето в Астане, горные озера и сосновые курорты",
            kz: "Жазғы Астана кештері, тау көлдері мен Бурабай курорты"
        },
        desc: {
            en: "Peak season for Astana's evening boulevards, boat cruises on the Ishim River, and hiking in Burabay and Kolsai Lakes.",
            ru: "Лучший сезон для вечерних прогулок по Астане, круизов по Ишиму и отдыха в Бурабае и на Кольсайских озерах.",
            kz: "Астананың кешкі желекжолдарымен серуендеп, Бурабай мен Көлсай көлдеріне саяхаттауға ең қолайлы маусым."
        },
        places: {
            en: "Astana, Burabay Resort, Kolsai & Kaindy Lakes, Altai & Caspian Coast",
            ru: "Астана, курорт Бурабай, озера Кольсай и Каинды, Алтай и побережье Каспия",
            kz: "Астана, Бурабай курорты, Көлсай мен Қайыңды көлдері, Алтай және Каспий жағалауы"
        },
        highlights: {
            en: "Capital City Day (July 6), Ishim River cruises, pine forest hikes & beach resorts",
            ru: "День столицы в Астане (6 июля), прогулки по Ишиму, походы в горы и пляжный отдых",
            kz: "Астана күні (6 шілде), Есілдегі серуен, тау жорықтары мен жағажай демалысы"
        },
        packing: {
            en: ["Breathable summer clothes", "Sun hat & UV protection", "Light evening cardigan", "Reusable water bottle"],
            ru: ["Легкая летняя одежда", "Головной убор от солнца", "Легкая кофта на вечер", "Бутылка для воды"],
            kz: ["Жеңіл жазғы киім", "Күннен қорғайтын бас киім", "Кешкі жеңіл жемпір", "Су бөтелкесі"]
        }
    },
    autumn: {
        img: "images/season_autumn.jpg",
        alt: "season_autumn",
        badge: { en: "🍂 Autumn · September – November", ru: "🍂 Осень · Сентябрь – Ноябрь", kz: "🍂 Күз · Қыркүйек – Қараша" },
        temp: { en: "🌡️ +4°C to +20°C", ru: "🌡️ +4°C … +20°C", kz: "🌡️ +4°C … +20°C" },
        title: {
            en: "Golden Steppe Harvest, Canyons & Eagle Hunting",
            ru: "Золотая осень, каньоны и турниры беркутчи",
            kz: "Алтын күз, шатқалдар мен саятшылық маусымы"
        },
        desc: {
            en: "Golden birch forests, harvest bazaars, and crisp canyon weather make September and October ideal for sightseeing and photography.",
            ru: "Золотые березовые рощи, осенние базары и мягкая погода для поездок по каньонам и городам.",
            kz: "Алтын қайыңды ормандар, күзгі жәрмеңкелер мен шатқалдарға саяхаттауға таптырмас мезгіл."
        },
        places: {
            en: "Almaty & Charyn Canyon, Astana Museums, Bayanaul & Ulytau",
            ru: "Алматы и Чарынский каньон, музеи Астаны, Баянаул и Улытау",
            kz: "Алматы мен Шарын шатқалы, Астана музейлері, Баянауыл және Ұлытау"
        },
        highlights: {
            en: "Republic Day (Oct 25), golden foliage photography, Berkutchi eagle hunting shows",
            ru: "День Республики (25 октября), золотая листва в горах, шоу охоты с беркутами",
            kz: "Республика күні (25 қазан), алтын күз табиғаты, саятшылар мен бүркітшілер сайысы"
        },
        packing: {
            en: ["Warm layered sweater", "Windproof trench or coat", "Hiking boots for canyons", "Portable power bank"],
            ru: ["Теплый свитер", "Непродуваемая куртка", "Треккинговая обувь", "Внешний аккумулятор (Powerbank)"],
            kz: ["Жылы жемпір", "Жел өткізбейтін күрте", "Тауға арналған аяқ киім", "Қуаттағыш (Powerbank)"]
        }
    },
    winter: {
        img: "images/season_winter.jpg",
        alt: "season_winter",
        badge: { en: "❄️ Winter · December – February", ru: "❄️ Зима · Декабрь – Февраль", kz: "❄️ Қыс · Желтоқсан – Ақпан" },
        temp: { en: "🌡️ -20°C to -2°C", ru: "🌡️ -20°C … -2°C", kz: "🌡️ -20°C … -2°C" },
        title: {
            en: "Snowy Steppe Magic, Alpine Skiing & Indoor Tropical Oases",
            ru: "Снежная сказка, горные лыжи и крытые оазисы",
            kz: "Қысқы ертегі, тау шаңғысы және жабық тропикалық бақтар"
        },
        desc: {
            en: "Experience snowy ice towns and indoor tropical beaches in Astana alongside world-class alpine skiing at Shymbulak and Altai.",
            ru: "Снежные городки и крытый пляж Хан Шатыра в Астане, а также горнолыжные трассы Шымбулака и Алтая.",
            kz: "Астананың мұз қалашықтары мен Хан Шатыр жағажайы, сондай-ақ Шымбұлақ пен Алтайдағы тау шаңғысы."
        },
        places: {
            en: "Astana Indoor Wonders (Khan Shatyr, Nur-Alem), Shymbulak & Medeu, Burabay Winter Forest",
            ru: "Крытые чудеса Астаны (Хан Шатыр, Нур-Алем), Шымбулак и Медеу, зимний Бурабай",
            kz: "Астананың жабық кешендері (Хан Шатыр, Нұр-Әлем), Шымбұлақ пен Медеу, қысқы Бурабай"
        },
        highlights: {
            en: "Independence Day (Dec 16), New Year ice towns, skiing & steaming Beshbarmak feasts",
            ru: "День Независимости (16 декабря), ледовые городки, горные лыжи и горячий бешбармак",
            kz: "Тәуелсіздік күні (16 желтоқсан), мұз қалашықтары, шаңғы тебу және ыстық бесбармақ"
        },
        packing: {
            en: ["Down winter parka", "Thermal base layers", "Warm hat, scarf & insulated gloves", "Lip balm & moisturizer"],
            ru: ["Теплый зимний пуховик", "Термобелье", "Шапка, шарф и утепленные перчатки", "Бальзам для губ"],
            kz: ["Қалың қысқы күрте", "Жылы іш киім (термокиім)", "Жылы бас киім, мойынорағыш пен қолғап", "Ерінге арналған бальзам"]
        }
    }
};

const kazakhstanMonths = [
    {
        season: "winter",
        seasonTag: { en: "❄️ Winter Wonderland", ru: "❄️ Зимняя сказка", kz: "❄️ Қысқы маусым" },
        crowd: { en: " snowy & peaceful", ru: "Снежно и спокойно", kz: "Қарлы әрі тыныш" },
        title: { en: "January in Kazakhstan", ru: "Январь в Казахстане", kz: "Қазақстандағы Қаңтар" },
        tempLine: { en: "Astana & North: -14°C · South & Almaty: -2°C", ru: "Астана и Север: -14°C · Юг и Алматы: -2°C", kz: "Астана мен Солтүстік: -14°C · Оңтүстік пен Алматы: -2°C" },
        festivalTitle: { en: "Jan 1–2: New Year Celebrations & Winter Ice Towns", ru: "1–2 января: Новый год и ледовые городки", kz: "1–2 қаңтар: Жаңа жыл және мұз қалашықтары" },
        festivalDesc: {
            en: "Cities glow with festive lights, giant ice slides, and skating rinks along the Ishim River and at Medeu high-mountain rink.",
            ru: "Города сияют новогодней иллюминацией, работают ледовые горки и катки на реке Ишим и высокогорном Медеу.",
            kz: "Қалалар мерекелік шамдармен жарқырап, Есіл өзені мен биік таудағы Медеуде мұз айдындары жұмыс істейді."
        },
        advice: {
            en: "Ideal for combining Astana's futuristic indoor attractions (Nur-Alem, Khan Shatyr Sky Beach, National Museum) with alpine skiing.",
            ru: "Отличное время для посещения крытых комплексов Астаны (Нур-Алем, пляж Хан Шатыра, Национальный музей) и горнолыжных курортов.",
            kz: "Астананың жабық кешендерін (Нұр-Әлем, Хан Шатыр жағажайы, Ұлттық музей) және тау шаңғысын тамашалауға қолайлы уақыт."
        },
        tags: {
            en: ["Ice Skating", "Khan Shatyr Beach", "Ski Resorts"],
            ru: ["Ледовые катки", "Пляж Хан Шатыр", "Горные лыжи"],
            kz: ["Мұз айдыны", "Хан Шатыр", "Тау шаңғысы"]
        }
    },
    {
        season: "winter",
        seasonTag: { en: "❄️ Late Winter", ru: "❄️ Конец зимы", kz: "❄️ Қыс соңы" },
        crowd: { en: "Low crowds · Great value", ru: "Мало туристов · Выгодно", kz: "Туристер аз · Тиімді" },
        title: { en: "February in Kazakhstan", ru: "Февраль в Казахстане", kz: "Қазақстандағы Ақпан" },
        tempLine: { en: "Astana & North: -12°C · South & Almaty: 0°C", ru: "Астана и Север: -12°C · Юг и Алматы: 0°C", kz: "Астана мен Солтүстік: -12°C · Оңтүстік пен Алматы: 0°C" },
        festivalTitle: { en: "Winter Eagle Hunting & Opera Season", ru: "Зимние турниры беркутчи и театральный сезон", kz: "Қысқы бүркітшілер сайысы және театр маусымы" },
        festivalDesc: {
            en: "Traditional winter eagle hunting competitions (Sonar) take place against snowy steppe backdrops, alongside gala performances at Astana Opera.",
            ru: "На заснеженных просторах проходят традиционные состязания охотников с ловчими птицами («Сонар») и премьеры в театре «Астана Опера».",
            kz: "Қарлы далада дәстүрлі «Сонар» саятшылық сайыстары және «Астана Опера» театрында гала-концерттер өтеді."
        },
        advice: {
            en: "Sunny, crisp days in late February offer clear views from Baiterek Tower and quiet trails through Burabay's snow-covered pine woods.",
            ru: "Солнечные морозные дни конца февраля дарят отличную видимость со сферы Байтерек и красивые виды зимнего Бурабая.",
            kz: "Ақпанның ашық күндері Бәйтерек мұнарасынан қаланы тамашалауға және қысқы Бурабай орманында серуендеуге тамаша мүмкіндік береді."
        },
        tags: {
            en: ["Astana Opera", "Snowy Burabay", "Eagle Hunting"],
            ru: ["Астана Опера", "Зимний Бурабай", "Охота с беркутом"],
            kz: ["Астана Опера", "Қысқы Бурабай", "Саятшылық"]
        }
    },
    {
        season: "spring",
        seasonTag: { en: "🌸 Spring Highlight", ru: "🌸 Главный праздник весны", kz: "🌸 Көктемнің басты мерекесі" },
        crowd: { en: "Festive Season", ru: "Праздничный сезон", kz: "Мерекелік маусым" },
        title: { en: "March in Kazakhstan", ru: "Март в Казахстане", kz: "Қазақстандағы Наурыз айы" },
        tempLine: { en: "Astana & North: -4°C · South & Almaty: +10°C", ru: "Астана и Север: -4°C · Юг и Алматы: +10°C", kz: "Астана мен Солтүстік: -4°C · Оңтүстік пен Алматы: +10°C" },
        festivalTitle: { en: "March 21–23: Nauryz Meiramy (Nomadic New Year)", ru: "21–23 марта: Наурыз мейрамы (Кочевой Новый год)", kz: "21–23 наурыз: Ұлыстың ұлы күні — Наурыз мейрамы" },
        festivalDesc: {
            en: "The biggest cultural celebration of the year! Public squares fill with decorated yurts, cauldron-cooked Nauryz Kozhe, dombra competitions (aitys), and traditional swings (altybakan).",
            ru: "Главный культурный праздник года! Площади украшают юртами, гостей угощают наурыз-коже и баурсаками, проходят айтысы и игры на алтыбакане.",
            kz: "Жылдың ең ұлық мерекесі! Алаңдарда киіз үйлер тігіліп, наурыз көже мен бауырсақ ұсынылады, айтыс пен алтыбақан ойындары өтеді."
        },
        advice: {
            en: "March marks the spring equinox. While northern steppes still have crisp mornings, southern cities like Turkistan and Shymkent burst into warm spring blossoms.",
            ru: "Март — время весеннего равноденствия. На севере еще свежо, а в Туркестане и Шымкенте уже цветут весенние сады.",
            kz: "Наурыз — күн мен түннің теңелетін шағы. Түркістан мен Шымкентте бақтар гүлдеп, бүкіл елде думанды мереке өтеді."
        },
        tags: {
            en: ["Nauryz Meiramy", "Yurt Villages", "Traditional Cuisine"],
            ru: ["Наурыз мейрамы", "Этноаулы и юрты", "Национальная кухня"],
            kz: ["Наурыз мейрамы", "Киіз үйлер", "Ұлттық тағамдар"]
        }
    },
    {
        season: "spring",
        seasonTag: { en: "🌸 Wild Tulip Season", ru: "🌸 Цветение степи", kz: "🌸 Қызғалдақ маусымы" },
        crowd: { en: "Mild & Scenic", ru: "Мягкая погода", kz: "Жайлы ауа райы" },
        title: { en: "April in Kazakhstan", ru: "Апрель в Казахстане", kz: "Қазақстандағы Сәуір" },
        tempLine: { en: "Astana & North: +9°C · South & West: +18°C", ru: "Астана и Север: +9°C · Юг и Запад: +18°C", kz: "Астана мен Солтүстік: +9°C · Оңтүстік пен Батыс: +18°C" },
        festivalTitle: { en: "April 12: Cosmonautics Day & Wild Tulip Bloom", ru: "12 апреля: День космонавтики и цветение тюльпанов", kz: "12 сәуір: Ғарышкерлер күні және қызғалдақ гүлдеуі" },
        festivalDesc: {
            en: "Kazakhstan celebrates its space heritage at Baikonur and Astana's Space Museum, while wild tulips carpet the southern steppes and foothills.",
            ru: "Казахстан отмечает космическое наследие Байконура, а предгорья и южные степи покрываются коврами диких тюльпанов Грейга и Кауфмана.",
            kz: "Байқоңыр мен Астанада ғарыш мерекесі аталып өтіп, оңтүстік дала мен тау бөктері қызыл қызғалдақтарға толады."
        },
        advice: {
            en: "April is the #1 month for exploring Mangystau's chalk canyons (Bozzhyra) and Silk Road ruins before summer heat arrives.",
            ru: "Апрель — идеальный месяц для экспедиций по каньонам Мангистау (Бозжыра) и городам Шелкового пути без летней жары.",
            kz: "Сәуір — жазғы ыстық басталмай тұрып Маңғыстау шатқалдары (Бозжыра) мен Жібек жолы қалаларын аралауға ең қолайлы ай."
        },
        tags: {
            en: ["Wild Tulips", "Mangystau Canyons", "Space Heritage"],
            ru: ["Дикие тюльпаны", "Каньоны Мангистау", "Космос и Байконур"],
            kz: ["Дала қызғалдағы", "Маңғыстау", "Ғарыш мұрасы"]
        }
    },
    {
        season: "spring",
        seasonTag: { en: "🌸 Green Steppe", ru: "🌸 Изумрудная весна", kz: "🌸 Жасыл маусым" },
        crowd: { en: "Best Shoulder Month", ru: "Один из лучших месяцев", kz: "Саяхатқа ең жайлы ай" },
        title: { en: "May in Kazakhstan", ru: "Май в Казахстане", kz: "Қазақстандағы Мамыр" },
        tempLine: { en: "Astana & North: +18°C · South & Almaty: +24°C", ru: "Астана и Север: +18°C · Юг и Алматы: +24°C", kz: "Астана мен Солтүстік: +18°C · Оңтүстік пен Алматы: +24°C" },
        festivalTitle: { en: "May 1: People's Unity Day & Museum Night", ru: "1 мая: День единства народа Казахстана и Ночь музеев", kz: "1 мамыр: Қазақстан халқының бірлігі күні" },
        festivalDesc: {
            en: "Outdoor festivals celebrate Kazakhstan's 130+ ethnic groups with music and food fairs, while Astana's city fountains and riverfront cafes open for the season.",
            ru: "Фестивали дружбы народов, ярмарки кухни и музыки под открытым небом, запуск городских фонтанов и открытие летних террас в Астане.",
            kz: "Ашық аспан астындағы этномәдени фестивальдер өтіп, Астанадағы субұрқақтар мен жазғы дәмханалар маусымы ашылады."
        },
        advice: {
            en: "Warm days and blooming lilac parks make May one of the very best months to visit Astana and hike Charyn Canyon.",
            ru: "Теплые дни и цветущие парки делают май одним из лучших месяцев для поездки в Астану и похода в Чарынский каньон.",
            kz: "Жылы күндер мен гүлдеген саябақтар мамыр айын Астанаға және Шарын шатқалына саяхаттау үшін ең тамаша уақыт етеді."
        },
        tags: {
            en: ["Unity Day", "Astana Fountains", "Poppy Fields"],
            ru: ["День единства", "Фонтаны Астаны", "Маковые поля"],
            kz: ["Бірлік күні", "Астана субұрқақтары", "Көктемгі табиғат"]
        }
    },
    {
        season: "summer",
        seasonTag: { en: "☀️ Early Summer", ru: "☀️ Начало лета", kz: "☀️ Жаз басы" },
        crowd: { en: "Long Sunny Days", ru: "Белые вечера и солнце", kz: "Ұзақ шуақты күндер" },
        title: { en: "June in Kazakhstan", ru: "Июнь в Казахстане", kz: "Қазақстандағы Маусым" },
        tempLine: { en: "Astana & North: +24°C · South & Caspian: +29°C", ru: "Астана и Север: +24°C · Юг и Каспий: +29°C", kz: "Астана мен Солтүстік: +24°C · Оңтүстік пен Каспий: +29°C" },
        festivalTitle: { en: "Summer Solstice & Open-Air Music Festivals", ru: "Летние фестивали под открытым небом и сезон круизов", kz: "Ашық аспан астындағы жазғы фестивальдер" },
        festivalDesc: {
            en: "With up to 17 hours of daylight in Astana, evenings along the Ishim River and Nurzhol Boulevard stay lively past 10 PM with street musicians and light shows.",
            ru: "Световой день в Астане длится почти 17 часов: набережная Ишима и бульвар Нуржол наполнены музыкой, прогулочными теплоходами и вечерними огнями.",
            kz: "Астанада күндізгі уақыт 17 сағатқа дейін созылып, Есіл жағалауы мен Нұржол желекжолында кешкі серуендер қызады."
        },
        advice: {
            en: "Perfect weather for day trips from Astana to Burabay National Park and high-altitude treks in the Tian Shan and Altai mountains.",
            ru: "Идеальная погода для экскурсии из Астаны в Бурабай и горных походов на Тянь-Шане и Алтае.",
            kz: "Астанадан Бурабайға күндізгі турмен баруға және Тянь-Шань мен Алтай тауларына шығуға мінсіз ауа райы."
        },
        tags: {
            en: ["Ishim River Cruise", "Burabay Lakes", "17h Daylight"],
            ru: ["Круиз по Ишиму", "Озера Бурабая", "Длинные вечера"],
            kz: ["Есілдегі круиз", "Бурабай көлдері", "Ақ түндер"]
        }
    },
    {
        season: "summer",
        seasonTag: { en: "☀️ Peak Summer", ru: "☀️ Разгар лета", kz: "☀️ Жаз ортасы" },
        crowd: { en: "Peak Festival Month", ru: "Пик сезона в Астане", kz: "Елордадағы мереке айы" },
        title: { en: "July in Kazakhstan", ru: "Июль в Казахстане", kz: "Қазақстандағы Шілде" },
        tempLine: { en: "Astana & North: +26°C · South & Caspian: +33°C", ru: "Астана и Север: +26°C · Юг и Каспий: +33°C", kz: "Астана мен Солтүстік: +26°C · Оңтүстік пен Каспий: +33°C" },
        festivalTitle: { en: "July 6: Capital City Day (Astana Day) & National Dombra Day", ru: "6 июля: День столицы (День Астаны) и День домбры", kz: "6 шілде: Астана күні және Ұлттық домбыра күні" },
        festivalDesc: {
            en: "Astana's biggest summer celebration! Expect open-air concerts, drone and fireworks shows over the Ishim River, mass dombra ensembles (First Sunday of July), and nomadic sports.",
            ru: "Главный летний праздник Астаны! Концерты под открытым небом, шоу дронов и фейерверки над Ишимом, а в первое воскресенье июля — Национальный день домбры.",
            kz: "Астананың ең үлкен жазғы мерекесі! Ашық аспан астындағы концерттер, Есіл үстіндегі отшашулар және шілденің бірінші жексенбісінде Ұлттық домбыра күні өтеді."
        },
        advice: {
            en: "Book Astana hotels and guided tours early for July 6 weekend! Also the best month for swimming in the Caspian Sea at Aktau or Lake Alakol.",
            ru: "Бронируйте туры в Астану заранее на праздничные выходные 6 июля! Также это лучший месяц для купания на Каспии и озере Алаколь.",
            kz: "6 шілде мерекесіне орай Астана турларына алдын ала тапсырыс беріңіз! Сондай-ақ Каспий мен Алакөлде шомылуға ең қолайлы ай."
        },
        tags: {
            en: ["Astana Day (July 6)", "National Dombra Day", "Lakes & Beaches"],
            ru: ["День Астаны (6 июля)", "День домбры", "Пляжи и озера"],
            kz: ["Астана күні (6 шілде)", "Домбыра күні", "Көлдер мен жағажай"]
        }
    },
    {
        season: "summer",
        seasonTag: { en: "☀️ Late Summer", ru: "☀️ Августовское солнце", kz: "☀️ Тамыз шуағы" },
        crowd: { en: "Warm & Lively", ru: "Тепло и солнечно", kz: "Жылы әрі әсем" },
        title: { en: "August in Kazakhstan", ru: "Август в Казахстане", kz: "Қазақстандағы Тамыз" },
        tempLine: { en: "Astana & North: +24°C · South & Almaty: +30°C", ru: "Астана и Север: +24°C · Юг и Алматы: +30°C", kz: "Астана мен Солтүстік: +24°C · Оңтүстік пен Алматы: +30°C" },
        festivalTitle: { en: "August 30: Constitution Day & Steppe Horse Games", ru: "30 августа: День Конституции и конноспортивные фестивали", kz: "30 тамыз: Конституция күні және ұлттық ат спорты" },
        festivalDesc: {
            en: "Nationwide concerts, parades, and traditional equestrian tournaments (Kokpar, Audaryspak, and Baige horse races) celebrate Constitution Day.",
            ru: "Праздничные концерты по всей стране, этнофестивали и зрелищные конные турниры (кокпар, аударыспак и байге) в честь Дня Конституции.",
            kz: "Конституция күніне орай бүкіл елде мерекелік концерттер мен ұлттық ат спорты ойындары (көкпар, аударыспақ, бәйге) өткізіледі."
        },
        advice: {
            en: "August is the warmest month for high-mountain camping at Kolsai Lakes, Katon-Karagay in Altai, and Bayanaul.",
            ru: "Август — лучший месяц для высокогорных маршрутов на Кольсайских озерах, в Катон-Карагае и Баянауле.",
            kz: "Тамыз — Көлсай көлдері, Катонқарағай мен Баянауыл тауларына саяхаттауға ең қолайлы ай."
        },
        tags: {
            en: ["Constitution Day", "Kokpar & Baige", "Mountain Lakes"],
            ru: ["День Конституции", "Кокпар и байге", "Горные озера"],
            kz: ["Конституция күні", "Көкпар мен бәйге", "Тау көлдері"]
        }
    },
    {
        season: "autumn",
        seasonTag: { en: "🍂 Golden Velvet Season", ru: "🍂 Бархатный сезон", kz: "🍂 Алтын күз басы" },
        crowd: { en: "Ideal Temperatures", ru: "Комфортная погода", kz: "Ең жайлы температура" },
        title: { en: "September in Kazakhstan", ru: "Сентябрь в Казахстане", kz: "Қазақстандағы Қыркүйек" },
        tempLine: { en: "Astana & North: +17°C · South & Almaty: +24°C", ru: "Астана и Север: +17°C · Юг и Алматы: +24°C", kz: "Астана мен Солтүстік: +17°C · Оңтүстік пен Алматы: +24°C" },
        festivalTitle: { en: "Apple Harvest Feasts & Golden Steppe", ru: "Фестивали урожая яблок и золотая степь", kz: "Алма фестивалі және алтын дала" },
        festivalDesc: {
            en: "Orchards celebrate the famous Aport apple harvest, bazaars overflow with melons and dried fruits, and birch forests around Astana and Burabay turn bright gold.",
            ru: "Праздники урожая знаменитых яблок сорта Апорт, изобилие дынь и сухофруктов на базарах и золотые березовые рощи вокруг Астаны и Бурабая.",
            kz: "Әйгілі Апорт алмасының мерекесі, базарлардағы қауын-қарбыз молшылығы және Астана мен Бурабай маңындағы алтын қайыңды ормандар."
        },
        advice: {
            en: "September offers mild, sunny days across every single region of Kazakhstan—making it the best all-around month for a multi-region trip.",
            ru: "В сентябре комфортная солнечная погода стоит во всех регионах страны — идеальное время для большого путешествия по Казахстану.",
            kz: "Қыркүйекте Қазақстанның барлық өңірінде жылы әрі ашық ауа райы сақталады — елді аралауға таптырмас ай."
        },
        tags: {
            en: ["Golden Birch Woods", "Harvest Bazaars", "Canyon Hikes"],
            ru: ["Золотая осень", "Восточные базары", "Походы в каньоны"],
            kz: ["Алтын күз", "Молшылық базары", "Шатқалдар"]
        }
    },
    {
        season: "autumn",
        seasonTag: { en: "🍂 Autumn Heritage", ru: "🍂 Золотая осень", kz: "🍂 Мерекелі күз" },
        crowd: { en: "Crisp & Cultural", ru: "Культурный сезон", kz: "Мәдени маусым" },
        title: { en: "October in Kazakhstan", ru: "Октябрь в Казахстане", kz: "Қазақстандағы Қазан" },
        tempLine: { en: "Astana & North: +8°C · South & Turkistan: +17°C", ru: "Астана и Север: +8°C · Юг и Туркестан: +17°C", kz: "Астана мен Солтүстік: +8°C · Оңтүстік пен Түркістан: +17°C" },
        festivalTitle: { en: "October 25: Republic Day of Kazakhstan", ru: "25 октября: День Республики Казахстан", kz: "25 қазан: Қазақстан Республикасы күні" },
        festivalDesc: {
            en: "National holiday commemorating the 1990 Declaration of State Sovereignty, celebrated with illuminated monuments in Astana, symphony concerts, and cultural exhibitions.",
            ru: "Национальный праздник в честь Декларации о государственном суверенитете: праздничная подсветка монументов Астаны, концерты и выставки.",
            kz: "Мемлекеттік егемендік туралы декларация қабылданған ұлттық мереке: Астана монументтерінің мерекелік иллюминациясы, концерттер мен көрмелер."
        },
        advice: {
            en: "Great month for Silk Road architecture in Turkistan, desert canyons in Mangystau, and Astana's world-class museums and theaters.",
            ru: "Отличный месяц для поездки в Туркестан, каньоны Мангистау и посещения музеев и театров Астаны.",
            kz: "Түркістан кесенелеріне, Маңғыстау шатқалдарына және Астананың музейлері мен театрларына баруға қолайлы ай."
        },
        tags: {
            en: ["Republic Day (Oct 25)", "Silk Road Cities", "Museum Tours"],
            ru: ["День Республики (25 окт)", "Шелковый путь", "Музеи и театры"],
            kz: ["Республика күні (25 қазан)", "Жібек жолы", "Музейлер"]
        }
    },
    {
        season: "autumn",
        seasonTag: { en: "🍂 Late Autumn", ru: "🍂 Преддверие зимы", kz: "🍂 Қараша салқыны" },
        crowd: { en: "Cozy Indoor Season", ru: "Уютный сезон", kz: "Жайлы мәдени маусым" },
        title: { en: "November in Kazakhstan", ru: "Ноябрь в Казахстане", kz: "Қазақстандағы Қараша" },
        tempLine: { en: "Astana & North: -4°C · South & Almaty: +7°C", ru: "Астана и Север: -4°C · Юг и Алматы: +7°C", kz: "Астана мен Солтүстік: -4°C · Оңтүстік пен Алматы: +7°C" },
        festivalTitle: { en: "First Snow & Traditional Horsebreeders' Feasts", ru: "Первый снег, открытие горнолыжного сезона и согым", kz: "Алғашқы қар және қысқы маусымның ашылуы" },
        festivalDesc: {
            en: "Ski resorts in the mountains open their first slopes in mid-November, while families gather for traditional winter hospitality feasts featuring steaming Beshbarmak.",
            ru: "В середине ноября открываются горнолыжные трассы, а в городах начинается сезон традиционных зимних застолий с горячим бешбармаком.",
            kz: "Қарашаның ортасында тау шаңғысы маусымы ашылып, қонақжай дастарқандарда ыстық бесбармақ пен қымыз ұсынылады."
        },
        advice: {
            en: "Enjoy quiet, queue-free visits to Astana's Baiterek Tower, Hazret Sultan Mosque, and the 8-floor Nur-Alem Future Energy sphere.",
            ru: "Насладитесь спокойным посещением Байтерека, мечети Хазрет Султан и 8 этажей музея энергии будущего Нур-Алем без очередей.",
            kz: "Бәйтерек мұнарасын, Әзірет Сұлтан мешітін және 8 қабатты Нұр-Әлем сферасын кезексіз, асықпай тамашалаңыз."
        },
        tags: {
            en: ["Nur-Alem EXPO", "Early Skiing", "Warm Dastarkhan"],
            ru: ["Сфера Нур-Алем", "Начало лыжного сезона", "Традиционный дастархан"],
            kz: ["Нұр-Әлем ЭКСПО", "Шаңғы маусымы", "Қонақжай дастарқан"]
        }
    },
    {
        season: "winter",
        seasonTag: { en: "❄️ Festive Winter", ru: "❄️ Праздничный декабрь", kz: "❄️ Мерекелі Желтоқсан" },
        crowd: { en: "Holiday Lights & Snow", ru: "Праздничные огни", kz: "Мерекелік шамдар" },
        title: { en: "December in Kazakhstan", ru: "Декабрь в Казахстане", kz: "Қазақстандағы Желтоқсан" },
        tempLine: { en: "Astana & North: -11°C · South & Almaty: +1°C", ru: "Астана и Север: -11°C · Юг и Алматы: +1°C", kz: "Астана мен Солтүстік: -11°C · Оңтүстік пен Алматы: +1°C" },
        festivalTitle: { en: "December 16: Independence Day & Winter Wonderland", ru: "16 декабря: День Независимости и зимние ярмарки", kz: "16 желтоқсан: Тәуелсіздік күні және қысқы жәрмеңкелер" },
        festivalDesc: {
            en: "Kazakhstan celebrates Independence Day on December 16 with grand concerts and illuminated avenues, followed by New Year tree lightings at EXPO and Khan Shatyr.",
            ru: "16 декабря страна отмечает День Независимости, а площади у ЭКСПО и Хан Шатыра превращаются в зимнюю сказку с новогодними елками и катками.",
            kz: "16 желтоқсанда ел Тәуелсіздік күнін атап өтеді, ал ЭКСПО мен Хан Шатыр алаңдарында мерекелік шыршалар жағылып, мұз айдындары ашылады."
        },
        advice: {
            en: "Bundle up for Astana's sparkling winter skyline, then warm up with hot milk tea, baursaks, and indoor tropical gardens.",
            ru: "Одевайтесь теплее для прогулок по сияющей зимней Астане и согревайтесь горячим чаем с баурсаками и в крытых тропических садах.",
            kz: "Қысқы Астананың жарқыраған кештерін тамашалап, ыстық бауырсақ пен сүтті шайдан дәм татыңыз."
        },
        tags: {
            en: ["Independence Day (Dec 16)", "EXPO Ice Rink", "Winter Illumination"],
            ru: ["День Независимости (16 дек)", "Каток ЭКСПО", "Зимняя иллюминация"],
            kz: ["Тәуелсіздік күні (16 жел)", "ЭКСПО мұз айдыны", "Қысқы иллюминация"]
        }
    }
];
