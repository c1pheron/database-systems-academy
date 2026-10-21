/**
 * ============================================================================
 * SEVENTYONE+ ACADEMY — TRILINGUAL I18N SYSTEM (UZ / RU / EN)
 * Seamlessly manages Uzbek, Russian & English translations across the entire application.
 * Author: 00023271 • Level 5 • WIUT • 00023271@wiut.uz
 * ============================================================================
 */

(function () {
  'use strict';

  var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

  const STORAGE_KEY = 'DS_ACADEMY_LANG';

  const TRANSLATIONS = {
    uz: {
      // Header / HUD
      brand_title_w1: "Database Systems • 1-Modul",
      brand_badge_w1: "EER Modellashtirish",
      brand_sub_w1: "Konseptual ERD, Multiplicity (0..1, 1..*, M:N), Zaif Entitiylar va Tuzoqlar",
      brand_title_w2: "Database Systems • 2-Modul",
      brand_badge_w2: "Relyatsion Sxema",
      brand_sub_w2: "Relyatsion Sxema, Tashqi Kalitlar {FK}, Normalizatsiya (1NF-BCNF)",
      
      stat_rank: "Lavozim:",
      stat_salary: "Reyting Bali:",
      stat_capital: "Jami Ball:",
      stat_solved: "Bajarildi:",
      salary_suffix: " Ball",

      rank_1: "Kichik Ma'lumotlar Me'mori",
      rank_2: "Kichik Muhandis-Modeler",
      rank_3: "O'rta Darajali Modeler",
      rank_4: "Yetakchi Mantiqiy Modeler",
      rank_5: "Katta EER Tizim Muhandisi",
      rank_6: "Bosh Arxitektor & Hamkor (Penthouse)",

      btn_back: "← Orqaga",
      btn_main_hub: "← Asosiy Xab",
      btn_dictionary: "Lug'at",
      btn_incident: "⚡ Insident",
      btn_map: "🗺️ Xarita",
      tooltip_reset: "Natijalarni qayta o'rnatish",
      tooltip_sound: "Ovozni yoqish / o'chirish",
      tooltip_dict: "Barcha komandalar lug'ati (Ctrl+K)",
      tooltip_event: "Korporativ kutilmagan vaziyat",
      tooltip_map: "150 ta savollar xaritasi",

      // 2D Atelier Banner
      atelier_title_w1: "🎨 Bosh Me'mor Atlas Konsultatsiya Zali",
      atelier_title_w2: "🎨 Relyatsion Me'mor Ada Konsultatsiya Zali",
      speaker_atlas: "BOSH ME'MOR ATLAS",
      speaker_ada: "RELYATSION ME'MOR ADA",
      ticker_default_w1: "Assalomu alaykum! Biznes talablarini tahlil qiling va konseptual diagrammani chizing.",
      ticker_default_w2: "Xush kelibsiz! EER modelni relieshon jadvallarga xaritalang va kalitlarni belgilang.",

      // Studio Toolbar
      studio_title_w1: "📐 Vizual EER Diagramma Atelesi (draw.io Uslubida)",
      studio_title_w2: "📐 Relyatsion Sxema Atelesi (draw.io Uslubida)",
      tool_shapes: "📐 Shakllar",
      tool_add_entity: "➕ Entitiy",
      tool_add_diamond: "🔷 Romb",
      tool_toggle_weak: "📦 Zaif Entitiy",
      tool_template: "📋 Shablon",
      tool_default_w2: "⏮ Default (W1)",
      tool_clear: "🧹 Tozalash",
      tool_export_drawio: "💾 .drawio XML",

      // Sidebar
      sidebar_title: "📐 Ob'yektlar & Shakllar",
      search_shapes_ph: "Shakllarni qidirish...",
      cat_er_relations: "Entitiy Aloqalari (ER & Relyatsion Sxema)",
      btn_more_shapes: "+ Ko'proq shakllar",

      // Shape Labels
      shape_table: "Jadval",
      shape_table_2col: "2-Ustun",
      shape_table_rounded: "Yumaloq Jadval",
      shape_item_box: "Element",
      shape_entity: "Entitiy",
      shape_entity_rounded: "Yumaloq Ent.",
      shape_weak_entity: "Zaif Entitiy",
      shape_assoc_entity: "Assotsiativ",
      shape_attr_plain: "Atribut",
      shape_attr_pk: "PK Kalit",
      shape_attr_multi: "Ko'p Qiymat",
      shape_attr_derived: "Hosilaviy",
      shape_attr_partial: "Qisman (PPK)",
      shape_attr_composite: "Kompozit",
      shape_rel_diamond: "Aloqa Romb",
      shape_rel_identifying: "Aniqlash",
      shape_domain_cloud: "Bulut (Cloud)",
      shape_partition_box: "Bo'lim",
      shape_isa_circle: "Meros (ISA)",
      shape_note_box: "Eslatma",
      shape_conn_plain: "To'g'ri Chiziq",
      shape_conn_dashed: "Uzuk Chiziq",
      shape_conn_11: "1..1 (||)",
      shape_conn_01: "0..1 (O|)",
      shape_conn_1n: "1..* (|<)",
      shape_conn_0n: "0..* (O<)",
      shape_conn_many: "*..* (Crow)",

      // Canvas Interaction Hints
      canvas_hint_connect: "Bog'lash: Entitiydan ushlab boshqasiga torting",
      canvas_hint_mult: "Multiplicity: Chiziq ustiga bosing",
      canvas_hint_delete: "O'chirish: Tanlang va Delete bosing",
      canvas_status_draft: "Sxema qoralamasi",
      canvas_status_validating: "Tekshirilmoqda...",
      canvas_status_passed: "Qabul qilindi!",
      canvas_status_failed: "Xatolik aniqlandi",

      // Workspace Control Panel
      tab_brief: "📋 Texnik Vazifa",
      tab_solution: "💡 Yechim & Shpargalka",
      tab_drawio: "💾 draw.io Eksport",
      btn_verify_schema: "Sxemani Tekshirish",
      btn_next_challenge: "Keyingi Topshiriqqa O'tish ▶",
      btn_default_w1: "Default (1-Hafta)",
      tool_reset_er: "📋 Boshlang'ich ER",
      source_default_template: "📋 Standart shablon faol",
      source_w1_active: "🏛️ 1-Hafta modeli yuklandi",
      source_w2_custom: "💾 O'zingiz kiritgan o'zgarishlar",
      canvas_tip_w2: "💡 <em>Maslahat:</em> 1-hafta modeli asosida EER subklasslar va munosabatlarni kengaytiring.",

      // Modals
      map_modal_title: "🗺️ 150 ta Amaliy EER Topshiriqlar Xaritasi (10 Qavat)",
      map_modal_title_w2: "🗺️ 150 ta Relyatsion Sxema Topshiriqlar Xaritasi (10 Qavat)",
      event_modal_title: "⚡ Korporativ Arxitektura Insidenti & Voqea",
      btn_understand: "Tushundim, bartaraf etishga kirishaman",

      // Multiplicity Modal
      mult_modal_title: "Multiplicity (Kardinalik) Tanlang",
      mult_exact_one: "1..1 — Aniq bitta (Majburiy)",
      mult_zero_one: "0..1 — Nol yoki bitta (Ixtiyoriy)",
      mult_one_many: "1..* — Bitta yoki ko'p (Majburiy)",
      mult_zero_many: "0..* — Nol yoki ko'p (Ixtiyoriy)",
      mult_many_many: "*..* — Ko'pdan-ko'pga (M:N)",

      // Dialogs & Prompts
      prompt_entity_name: "Entitiy nomini kiriting:",
      prompt_rename_entity: "Entitiy nomini o'zgartiring:",
      prompt_attr_name: "Yangi atribut nomini kiriting:",
      prompt_rename_attr: "Atribut nomini o'zgartiring:",
      prompt_rename_rel: "Aloqa nomini o'zgartiring:",
      confirm_clear_canvas: "Haqiqatan ham polotnodagi chizmani tozalab tashlamoqchimisiz?",
      confirm_reset_template: "Boshlang'ich shablon holatiga qaytarmoqchimisiz?",
      confirm_reset_w1: "1-hafta (W1) diagrammangizni qayta yuklamoqchimisiz? Hozirgi o'zgarishlar W1 modelingiz bilan almashtiriladi.",
      confirm_delete_rel: "Ushbu aloqa chizig'ini o'chirmoqchimisiz?",
      confirm_reset_all: "Barcha natijalaringizni nollab, akademiyani boshidan boshlamoqchimisiz?",

      // Toasts
      toast_conn_self: "Entitiyni o'ziga bog'lab bo'lmaydi.",
      toast_already_connected: "allaqachon bog'langan!",
      toast_connected_success: "muvaffaqiyatli bog'landi!",
      toast_line_deleted: "aloqa chizig'i o'chirildi!",
      toast_mult_set: "Multiplicity belgilandi:",
      toast_all_shapes_loaded: "Barcha rasmiy Draw.io relyatsion va EER shakllari yuklandi!",
      toast_w1_loaded: "1-hafta (W1) diagrammasi yuklandi va relieshon sxemaga moslashtirildi!",
      toast_w1_empty: "1-haftada ushbu topshiriq uchun hali diagramma saqlanmagan.",

      // Sectors
      sec_1_name: "1-Qavat: Binar Aloqalar va Birlamchi Kalitlar",
      sec_1_badge: "1F • Binar ER",
      sec_2_name: "2-Qavat: Multiplicity Cheklovlari (0..1, 1..1, 0..*, 1..*)",
      sec_2_badge: "2F • Multiplicity",
      sec_3_name: "3-Qavat: Zaif Entitiylar (Weak Entities)",
      sec_3_badge: "3F • Zaif Entitiy",
      sec_4_name: "4-Qavat: Ko'pdan-ko'pga Aloqalar va Assotsiativ Klasslar",
      sec_4_badge: "4F • Assotsiatsiya",
      sec_5_name: "5-Qavat: Rekursiv (Unary) Aloqalar",
      sec_5_badge: "5F • Rekursiv ER",
      sec_6_name: "6-Qavat: Disjoint Vorislik (d) & Mutlaq Ajralish",
      sec_6_badge: "6F • Disjoint ISA",
      sec_7_name: "7-Qavat: Overlapping Vorislik (o) & Birgalikda Mavjudlik",
      sec_7_badge: "7F • Overlapping",
      sec_8_name: "8-Qavat: Kategoriya / Ittifoq Turlari (Category / Union ∪)",
      sec_8_badge: "8F • Kategoriya ∪",
      sec_9_name: "9-Qavat: Bog'lanish Tuzoqlari (Fan & Chasm Traps)",
      sec_9_badge: "9F • Tuzoqlar",
      sec_10_name: "10-Qavat: Korporativ Tizim Arxitekturasi (Penthouse)",
      sec_10_badge: "10F • Korporativ",

      // Portal (index.html)
      portal_brand_sub: "Computer Science 70+ Ekotizimi • 3 Modul • 2,700 ta Amaliy Keys",
      portal_user_name: "CS Muhandisi",
      portal_user_rank: "⭐ Cyber Intern",
      portal_stat_solved: "Jami Bajarildi:",
      portal_stat_capital: "Jami Ball:",
      portal_hero_title: "Computer Science Interaktiv IT Modullar Simulyatori",
      portal_hero_desc: "Xush kelibsiz! Ushbu platforma quruq nazariyadan xoli, 100% amaliy va Sokratik pedagogikaga asoslangan. Quyidagi 3 ta asosiy akademik yo'nalishdan birini tanlang va 1-haftadan 6-haftagacha bo'lgan chuqurlashtirilgan amaliy simulyatorlarga sho'ng'ing:",
      portal_progress_label: "Platformaning Umumiy O'zlashtirilishi",
      portal_progress_completed: "Bajarildi",
      portal_sec_title: "Akademik Modullar (3 ta Yo'nalish)",
      portal_ds_cw: "CW1 (70%) • Majburiy VIVA Imtihoni",
      portal_ds_desc: "Konseptual EER modellashtirish, relyatsion xaritalash, normalizatsiya (1NF-BCNF), kengaytirilgan SQL so'rovlar, ACID tranzaksiyalar va NoSQL (MongoDB, Redis) klasterlari.",
      portal_mastery: "O'zlashtirish:",
      portal_ds_btn: "🏛️ Database Systems Moduliga Kirish →",
      portal_os_cw: "CW1 (40%) • Individual Case Study & Bash",
      portal_os_desc: "Linux Debian 12 arxitekturasi, Inodelar va fayl tizimi, professional Bash avtomatlashtirish, jarayonlar hayotiy sikli (Signals), Python fork(), CPU Scheduling, virtual xotira va Docker.",
      portal_os_btn: "🐧 Operating Systems Moduliga Kirish →",
      portal_oop_cw: "CW2 (50%) • Guruh Ishi (Console Order App)",
      portal_oop_desc: "Java Core, Clean Code, SOLID tamoyillari, GoF Dizayn Patternlari (Factory, Builder, Singleton, Decorator, Strategy, Observer), UML klass diagrammalari va korporativ arxitektura.",
      portal_oop_btn: "☕ OOP Moduliga Kirish →",

      // Portal Author Footer
      portal_footer_author_id: "Muallif: 00023271",
      portal_footer_desc: "Level 5 talabasi (BSc Computer Science) • Toshkent xalqaro Westminster universiteti (WIUT)",
      portal_footer_badge: "🎯 70%+ First Class Honours Platformasi",
      portal_footer_contact: "Murojaat uchun:",
      portal_footer_email: "00023271@wiut.uz",

      // DS Hub (ds-hub.html)
      hub_back_portal: "← SeventyOne+ Portali",
      hub_brand_sub: "Konseptual EER, Relatsion Sxema, Normalizatsiya, SQL & NoSQL",
      hub_user_name: "Ma'lumotlar Me'mori",
      hub_user_rank: "Kichik Modeler",
      hub_stat_solved: "Bajarildi:",
      hub_stat_capital: "Umumiy Ball:",
      hub_hero_title: "Zamonaviy Ma'lumotlar Bazasi Arxitekturasini Egallang",
      hub_hero_desc: "Xush kelibsiz! Konseptual EER modellashtirish va normalizatsiyadan tortib, korporativ SQL so'rovlar muhandisligi, tranzaksiyalar (ACID) va NoSQL klasterlarigacha bo'lgan 6 ta professional modul va 900 ta amaliy topshiriqni o'z ichiga olgan 2D interaktiv simulyator.",
      hub_progress_label: "O'quv Dasturining Umumiy O'zlashtirilishi",
      hub_headline: "🗺️ O'quv Yo'nalishi & 6 ta Korporativ Modul",
      hub_subheadline: "6 Modul • 900 ta Amaliy Keys",
      hub_w1_title: "Konseptual EER Modellashtirish",
      hub_w1_desc: "draw.io uslubidagi vizual polotnoda entitiylar, UML multiplisitiyalari (0..1, 1..*, M:N), zaif entitiylar, romb aloqalar va bog'lanish tuzoqlarini (Fan & Chasm) tahlil qilish.",
      hub_w1_btn: "1-Modulga Kirish →",
      hub_w2_title: "Relatsion Sxemaga O'tkazish",
      hub_w2_desc: "EER modelni relyatsion jadvallar ko'rinishiga o'tkazish (Step 1–8), Birlamchi Kalitlar (PK), Tashqi Kalitlar (FK), Crow's Foot notatsiyasi va Vorislik ({Mandatory, Or}).",
      hub_w2_btn: "2-Modulga Kirish →",
      hub_w3_title: "Relyatsion Algebra & Normalizatsiya",
      hub_w3_desc: "Relyatsion algebra amallari (σ, π, ⨝, ⟕), funksional bog'liqliklar (FD), anomaliyalarni yo'qotish va 1NF, 2NF, 3NF hamda BCNF normal formalariga bosqichma-bosqich yoyish.",
      hub_w3_btn: "3-Modulga Kirish →",
      hub_w4_title: "Kengaytirilgan SQL & Query Engineering",
      hub_w4_desc: "Haqiqiy SQLite bazasida murakkab DDL, DML, ko'p jadvalli JOINlar, Subquerylar (korrelyatsiyalangan), GROUP BY, HAVING agregatsiyasi va indekslar orqali so'rovlarni tezlashtirish.",
      hub_w4_btn: "4-Modulga Kirish →",
      hub_w5_title: "ACID Tranzaksiyalar & Xavfsizlik",
      hub_w5_desc: "Tizim qulashlaridan himoya, Concurrency nazorati, Locklar (Shared, Exclusive), Deadlocklarni oldini olish va ACID qoidalarini amalda tekshirish.",
      hub_w5_btn: "5-Modulga Kirish →",
      hub_w6_title: "NoSQL Klasterlar & Big Data",
      hub_w6_desc: "Hujjatli (MongoDB), Kalit-Qiymat (Redis) va Keng Ustunli (Cassandra) arxitekturalar, CAP teoremasi va yuqori yuklamali tizimlar muhandisligi.",
      hub_w6_btn: "6-Modulga Kirish →"
    },

    ru: {
      // Header / HUD
      brand_title_w1: "Database Systems • Модуль 1",
      brand_badge_w1: "EER Моделирование",
      brand_sub_w1: "Концептуальные ERD, Мультипликативность (0..1, 1..*, M:N), Слабые Сущности и Ловушки",
      brand_title_w2: "Database Systems • Модуль 2",
      brand_badge_w2: "Реляционная Схема",
      brand_sub_w2: "Реляционная Схема, Внешние Ключи {FK}, Нормализация (1NF-BCNF)",
      
      stat_rank: "Звание:",
      stat_salary: "Рейтинг:",
      stat_capital: "Всего Баллов:",
      stat_solved: "Решено:",
      salary_suffix: " Баллов",

      rank_1: "Младший Архитектор Данных",
      rank_2: "Младший Инженер-Моделер",
      rank_3: "Инженер Данных (Middle)",
      rank_4: "Ведущий Логический Моделер",
      rank_5: "Старший Системный Архитектор EER",
      rank_6: "Главный Архитектор & Партнер",

      btn_back: "← Назад",
      btn_main_hub: "← Главный Хаб",
      btn_dictionary: "Словарь",
      btn_incident: "⚡ Инцидент",
      btn_map: "🗺️ Карта",
      tooltip_reset: "Сброс прогресса",
      tooltip_sound: "Вкл/Выкл звук",
      tooltip_dict: "Словарь терминов и команд (Ctrl+K)",
      tooltip_event: "Корпоративное архитектурное событие",
      tooltip_map: "Карта 150 заданий",

      // 2D Atelier Banner
      atelier_title_w1: "🎨 Консультационный Зал Главного Архитектора Atlas",
      atelier_title_w2: "🎨 Консультационный Зал Реляционного Архитектора Ada",
      speaker_atlas: "ГЛАВНЫЙ АРХИТЕКТОР ATLAS",
      speaker_ada: "РЕЛЯЦИОННЫЙ АРХИТЕКТОР ADA",
      ticker_default_w1: "Здравствуйте! Проанализируйте бизнес-требования и постройте концептуальную диаграмму.",
      ticker_default_w2: "Добро пожаловать! Отобразите EER-модель в реляционные таблицы и определите первичные/внешние ключи.",

      // Studio Toolbar
      studio_title_w1: "📐 Визуальное Ателье EER Диаграмм (в стиле draw.io)",
      studio_title_w2: "📐 Ателье Реляционных Схем (в стиле draw.io)",
      tool_shapes: "📐 Фигуры",
      tool_add_entity: "➕ Сущность",
      tool_add_diamond: "🔷 Связь-Ромб",
      tool_toggle_weak: "📦 Слабая Сущность",
      tool_template: "📋 Шаблон",
      tool_default_w2: "⏮ По умолчанию (W1)",
      tool_clear: "🧹 Очистить",
      tool_export_drawio: "💾 .drawio XML",

      // Sidebar
      sidebar_title: "📐 Объекты и Фигуры",
      search_shapes_ph: "Поиск фигур...",
      cat_er_relations: "Связи сущностей (ER и Реляционные схемы)",
      btn_more_shapes: "+ Больше фигур",

      // Shape Labels
      shape_table: "Таблица",
      shape_table_2col: "2-Колонки",
      shape_table_rounded: "Закругленная",
      shape_item_box: "Элемент",
      shape_entity: "Сущность",
      shape_entity_rounded: "Закругл. Сущ.",
      shape_weak_entity: "Слабая Сущность",
      shape_assoc_entity: "Ассоциативная",
      shape_attr_plain: "Атрибут",
      shape_attr_pk: "Первичный Ключ (PK)",
      shape_attr_multi: "Многозначный",
      shape_attr_derived: "Производный",
      shape_attr_partial: "Частичный (PPK)",
      shape_attr_composite: "Составной",
      shape_rel_diamond: "Связь Ромб",
      shape_rel_identifying: "Идентифицирующая",
      shape_domain_cloud: "Облако (Cloud)",
      shape_partition_box: "Раздел",
      shape_isa_circle: "Наследование (ISA)",
      shape_note_box: "Заметка",
      shape_conn_plain: "Прямая Линия",
      shape_conn_dashed: "Пунктирная",
      shape_conn_11: "1..1 (||)",
      shape_conn_01: "0..1 (O|)",
      shape_conn_1n: "1..* (|<)",
      shape_conn_0n: "0..* (O<)",
      shape_conn_many: "*..* (Crow)",

      // Canvas Interaction Hints
      canvas_hint_connect: "Соединение: Перетащите от одной сущности к другой",
      canvas_hint_mult: "Мультипликативность: Нажмите на линию",
      canvas_hint_delete: "Удаление: Выберите элемент и нажмите Delete",
      canvas_status_draft: "Черновик схемы",
      canvas_status_validating: "Проверка...",
      canvas_status_passed: "Принято верно!",
      canvas_status_failed: "Найдена ошибка",

      // Workspace Control Panel
      tab_brief: "📋 Техническое Задание",
      tab_solution: "💡 Решение и Разбор",
      tab_drawio: "💾 Экспорт draw.io",
      btn_verify_schema: "Проверить Схему",
      btn_next_challenge: "Следующее Задание ▶",
      btn_default_w1: "По умолчанию (Неделя 1)",
      tool_reset_er: "📋 Исходный ER",
      source_default_template: "📋 Активен начальный шаблон",
      source_w1_active: "🏛️ Загружена модель 1-й недели",
      source_w2_custom: "💾 Ваши пользовательские изменения",
      canvas_tip_w2: "💡 <em>Совет:</em> Расширьте подклассы EER и связи на основе вашей модели 1-й недели.",

      // Modals
      map_modal_title: "🗺️ Карта 150 Заданий EER (10 Уровней)",
      map_modal_title_w2: "🗺️ Карта 150 Заданий Реляционных Схем (10 Уровней)",
      event_modal_title: "⚡ Инцидент Корпоративной Архитектуры",
      btn_understand: "Понятно, приступаю к решению",

      // Multiplicity Modal
      mult_modal_title: "Выберите Кардинальность (Multiplicity)",
      mult_exact_one: "1..1 — Ровно один (Обязательно)",
      mult_zero_one: "0..1 — Ноль или один (Опционально)",
      mult_one_many: "1..* — Один или много (Обязательно)",
      mult_zero_many: "0..* — Ноль или много (Опционально)",
      mult_many_many: "*..* — Многие ко многим (M:N)",

      // Dialogs & Prompts
      prompt_entity_name: "Введите имя сущности:",
      prompt_rename_entity: "Переименовать сущность:",
      prompt_attr_name: "Введите имя нового атрибута:",
      prompt_rename_attr: "Переименовать атрибут:",
      prompt_rename_rel: "Переименовать связь:",
      confirm_clear_canvas: "Вы действительно хотите очистить всё полотно?",
      confirm_reset_template: "Сбросить к исходному шаблону?",
      confirm_reset_w1: "Перезагрузить диаграмму 1-й недели (W1)? Текущие правки будут заменены вашей моделью W1.",
      confirm_delete_rel: "Удалить эту линию связи?",
      confirm_reset_all: "Вы уверены, что хотите сбросить весь прогресс и начать заново?",

      // Toasts
      toast_conn_self: "Нельзя соединить сущность с самой собой.",
      toast_already_connected: "уже соединены!",
      toast_connected_success: "успешно соединено!",
      toast_line_deleted: "линия связи удалена!",
      toast_mult_set: "Кардинальность установлена:",
      toast_all_shapes_loaded: "Все фигуры Draw.io загружены!",
      toast_w1_loaded: "Диаграмма 1-й недели загружена и адаптирована!",
      toast_w1_empty: "Для этого задания еще нет сохраненной диаграммы 1-й недели.",

      // Sectors
      sec_1_name: "1-й Этаж: Бинарные Связи и Первичные Ключи",
      sec_1_badge: "1F • Бинарные ER",
      sec_2_name: "2-й Этаж: Ограничения Кардинальности (0..1, 1..1, 0..*, 1..*)",
      sec_2_badge: "2F • Мультипликативность",
      sec_3_name: "3-й Этаж: Слабые Сущности (Weak Entities)",
      sec_3_badge: "3F • Слабая Сущность",
      sec_4_name: "4-й Этаж: Связи Многие-ко-Многим и Ассоциативные Классы",
      sec_4_badge: "4F • Ассоциация",
      sec_5_name: "5-й Этаж: Рекурсивные (Унарные) Связи",
      sec_5_badge: "5F • Рекурсивный ER",
      sec_6_name: "6-й Этаж: Непересекающееся Наследование (d)",
      sec_6_badge: "6F • Disjoint ISA",
      sec_7_name: "7-й Этаж: Пересекающееся Наследование (o)",
      sec_7_badge: "7F • Overlapping",
      sec_8_name: "8-й Этаж: Категории и Объединения (Category / Union ∪)",
      sec_8_badge: "8F • Категория ∪",
      sec_9_name: "9-й Этаж: Архитектурные Ловушки (Fan & Chasm Traps)",
      sec_9_badge: "9F • Ловушки",
      sec_10_name: "10-й Этаж: Корпоративная Архитектура Систем (Penthouse)",
      sec_10_badge: "10F • Корпоратив",

      // Portal (index.html)
      portal_brand_sub: "Экосистема Computer Science 70+ • 3 Модуля • 2,700 Практических Кейсов",
      portal_user_name: "CS Инженер",
      portal_user_rank: "⭐ Cyber Intern",
      portal_stat_solved: "Всего Решено:",
      portal_stat_capital: "Всего Баллов:",
      portal_hero_title: "Интерактивный IT-Симулятор Модулей Computer Science",
      portal_hero_desc: "Добро пожаловать! Платформа построена на 100% практической и сократовской методике без сухой теории. Выберите один из 3 академических треков ниже и погрузитесь в симуляторы с 1 по 6 недели:",
      portal_progress_label: "Общий Прогресс Платформы",
      portal_progress_completed: "Завершено",
      portal_sec_title: "Академические Модули (3 Трека)",
      portal_ds_cw: "CW1 (70%) • Обязательный VIVA Экзамен",
      portal_ds_desc: "Концептуальное EER моделирование, реляционное сопоставление, нормализация (1NF-BCNF), продвинутый SQL, транзакции ACID и кластеры NoSQL (MongoDB, Redis).",
      portal_mastery: "Освоение:",
      portal_ds_btn: "🏛️ Войти в Database Systems →",
      portal_os_cw: "CW1 (40%) • Индивидуальный Case Study & Bash",
      portal_os_desc: "Архитектура Linux Debian 12, Inodes и файловые системы, автоматизация на Bash, жизненный цикл процессов (Signals), fork(), CPU Scheduling, виртуальная память и Docker.",
      portal_os_btn: "🐧 Войти в Operating Systems →",
      portal_oop_cw: "CW2 (50%) • Групповой Coursework (Console Order App)",
      portal_oop_desc: "Java Core, Clean Code, принципы SOLID, паттерны проектирования GoF (Factory, Builder, Singleton, Decorator, Strategy, Observer), UML диаграммы классов и корпоративная архитектура.",
      portal_oop_btn: "☕ Войти в Модуль OOP →",

      // Portal Author Footer
      portal_footer_author_id: "Автор: 00023271",
      portal_footer_desc: "Студент Level 5 (BSc Computer Science) • Международный Вестминстерский университет в Ташкенте (WIUT)",
      portal_footer_badge: "🎯 Платформа для 70%+ First Class Honours",
      portal_footer_contact: "Контакты:",
      portal_footer_email: "00023271@wiut.uz",

      // DS Hub (ds-hub.html)
      hub_back_portal: "← Портал SeventyOne+",
      hub_brand_sub: "Концептуальный EER, Реляционные Схемы, Нормализация, SQL и NoSQL",
      hub_user_name: "Архитектор Данных",
      hub_user_rank: "Младший Моделер",
      hub_stat_solved: "Решено:",
      hub_stat_capital: "Всего Баллов:",
      hub_hero_title: "Освойте Современную Архитектуру Баз Данных",
      hub_hero_desc: "Добро пожаловать! Интерактивный 2D-симулятор, охватывающий 6 профессиональных модулей и 900 практических заданий: от концептуального EER-моделирования и нормализации до корпоративного SQL, транзакций ACID и кластеров NoSQL.",
      hub_progress_label: "Общий Прогресс Учебного Плана",
      hub_headline: "🗺️ Учебный Трек и 6 Корпоративных Модулей",
      hub_subheadline: "6 Модулей • 900 Практических Кейсов",
      hub_w1_title: "Концептуальное EER Моделирование",
      hub_w1_desc: "Анализируйте сущности, кардинальность UML (0..1, 1..*, M:N), слабые сущности, связи-ромбы и архитектурные ловушки (Fan & Chasm) на визуальном полотне.",
      hub_w1_btn: "Войти в Модуль 1 →",
      hub_w2_title: "Отображение в Реляционные Схемы",
      hub_w2_desc: "Преобразование моделей EER в реляционные таблицы (Шаги 1–8), первичные (PK) и внешние (FK) ключи, нотация Crow's Foot и сопоставление подклассов.",
      hub_w2_btn: "Войти в Модуль 2 →",
      hub_w3_title: "Реляционная Алгебра и Нормализация",
      hub_w3_desc: "Операции реляционной алгебры (σ, π, ⨝, ⟕), функциональные зависимости (FD), устранение аномалий и нормализация до 1NF, 2NF, 3NF и BCNF.",
      hub_w3_btn: "Войти в Модуль 3 →",
      hub_w4_title: "Продвинутый SQL & Query Engineering",
      hub_w4_desc: "Сложные запросы DDL, DML, многотабличные JOIN, коррелированные подзапросы, GROUP BY, HAVING и оптимизация планов запросов в SQLite.",
      hub_w4_btn: "Войти в Модуль 4 →",
      hub_w5_title: "Транзакции ACID и Параллелизм",
      hub_w5_desc: "Устойчивость к сбоям, управление параллелизмом, блокировки (Shared, Exclusive), предотвращение взаимоблокировок и эмпирическая проверка свойств ACID.",
      hub_w5_btn: "Войти в Модуль 5 →",
      hub_w6_title: "Кластеры NoSQL и Big Data",
      hub_w6_desc: "Документные (MongoDB), Ключ-Значение (Redis) и Колоночные (Cassandra) архитектуры, теорема CAP и высокопроизводительные распределенные системы.",
      hub_w6_btn: "Войти в Модуль 6 →"
    },

    en: {
      // Header / HUD
      brand_title_w1: "Database Systems • Module 1",
      brand_badge_w1: "EER Modeling",
      brand_sub_w1: "Conceptual ERD, Multiplicity (0..1, 1..*, M:N), Weak Entities & Traps",
      brand_title_w2: "Database Systems • Module 2",
      brand_badge_w2: "Relational Schema",
      brand_sub_w2: "Relational Schema, Foreign Keys {FK}, Normalization (1NF-BCNF)",

      stat_rank: "Rank:",
      stat_salary: "Rank Score:",
      stat_capital: "Total Score:",
      stat_solved: "Solved:",
      salary_suffix: " Pts",

      rank_1: "Junior Data Architect",
      rank_2: "Junior Modeling Engineer",
      rank_3: "Mid-Level Modeling Engineer",
      rank_4: "Lead Logical Modeler",
      rank_5: "Senior EER Systems Engineer",
      rank_6: "Chief Architect & Partner",

      btn_back: "← Back",
      btn_main_hub: "← Main Hub",
      btn_dictionary: "Dictionary",
      btn_incident: "⚡ Incident",
      btn_map: "🗺️ Map",
      tooltip_reset: "Reset progress",
      tooltip_sound: "Toggle sound effects",
      tooltip_dict: "Glossary & commands (Ctrl+K)",
      tooltip_event: "Corporate architecture challenge",
      tooltip_map: "150 Challenges map",

      // 2D Atelier Banner
      atelier_title_w1: "🎨 Chief Architect Atlas Consultation Suite",
      atelier_title_w2: "🎨 Relational Architect Ada Consultation Suite",
      speaker_atlas: "CHIEF ARCHITECT ATLAS",
      speaker_ada: "RELATIONAL ARCHITECT ADA",
      ticker_default_w1: "Welcome! Analyze business specifications and model the conceptual diagram accurately.",
      ticker_default_w2: "Welcome! Map the EER model into relational tables and define primary/foreign keys.",

      // Studio Toolbar
      studio_title_w1: "📐 Visual EER Diagram Studio (draw.io Architecture)",
      studio_title_w2: "📐 Relational Schema Studio (draw.io Architecture)",
      tool_shapes: "📐 Shapes",
      tool_add_entity: "➕ Entity",
      tool_add_diamond: "🔷 Diamond",
      tool_toggle_weak: "📦 Weak Entity",
      tool_template: "📋 Template",
      tool_default_w2: "⏮ Default (W1)",
      tool_clear: "🧹 Clear",
      tool_export_drawio: "💾 .drawio XML",

      // Sidebar
      sidebar_title: "📐 Objects & Shapes",
      search_shapes_ph: "Search shapes...",
      cat_er_relations: "Entity Relationships (ER & Relational)",
      btn_more_shapes: "+ More shapes",

      // Shape Labels
      shape_table: "Table",
      shape_table_2col: "2-Column",
      shape_table_rounded: "Rounded Table",
      shape_item_box: "Item Box",
      shape_entity: "Entity",
      shape_entity_rounded: "Rounded Ent.",
      shape_weak_entity: "Weak Entity",
      shape_assoc_entity: "Associative",
      shape_attr_plain: "Attribute",
      shape_attr_pk: "Primary Key (PK)",
      shape_attr_multi: "Multi-valued",
      shape_attr_derived: "Derived",
      shape_attr_partial: "Partial (PPK)",
      shape_attr_composite: "Composite",
      shape_rel_diamond: "Rel. Diamond",
      shape_rel_identifying: "Identifying",
      shape_domain_cloud: "Cloud",
      shape_partition_box: "Partition",
      shape_isa_circle: "Inheritance (ISA)",
      shape_note_box: "Sticky Note",
      shape_conn_plain: "Solid Line",
      shape_conn_dashed: "Dashed Line",
      shape_conn_11: "1..1 (||)",
      shape_conn_01: "0..1 (O|)",
      shape_conn_1n: "1..* (|<)",
      shape_conn_0n: "0..* (O<)",
      shape_conn_many: "*..* (Crow)",

      // Canvas Interaction Hints
      canvas_hint_connect: "Connect: Drag line from one entity to another",
      canvas_hint_mult: "Multiplicity: Click on the relationship line",
      canvas_hint_delete: "Delete: Select object and press Delete",
      canvas_status_draft: "Schema draft",
      canvas_status_validating: "Validating...",
      canvas_status_passed: "Validation Passed!",
      canvas_status_failed: "Architecture Issue Detected",

      // Workspace Control Panel
      tab_brief: "📋 Specification",
      tab_solution: "💡 Solution & Hints",
      tab_drawio: "💾 draw.io Export",
      btn_verify_schema: "Verify Schema",
      btn_next_challenge: "Proceed to Next Challenge ▶",
      btn_default_w1: "Default (Week 1)",
      tool_reset_er: "📋 Initial ER",
      source_default_template: "📋 Starter template active",
      source_w1_active: "🏛️ Week 1 model loaded",
      source_w2_custom: "💾 Your custom edits",
      canvas_tip_w2: "💡 <em>Tip:</em> Expand EER subclasses and relationships based on your Week 1 model.",

      // Modals
      map_modal_title: "🗺️ 150 Practical EER Challenges Map (10 Floors)",
      map_modal_title_w2: "🗺️ 150 Relational Schema Challenges Map (10 Floors)",
      event_modal_title: "⚡ Corporate Architecture Incident & Event",
      btn_understand: "Understood, proceeding to resolve",

      // Multiplicity Modal
      mult_modal_title: "Select Multiplicity",
      mult_exact_one: "1..1 — Exactly one (Mandatory)",
      mult_zero_one: "0..1 — Zero or one (Optional)",
      mult_one_many: "1..* — One or more (Mandatory)",
      mult_zero_many: "0..* — Zero or more (Optional)",
      mult_many_many: "*..* — Many-to-Many (M:N)",

      // Dialogs & Prompts
      prompt_entity_name: "Enter entity name:",
      prompt_rename_entity: "Rename entity:",
      prompt_attr_name: "Enter new attribute name:",
      prompt_rename_attr: "Enter attribute name:",
      prompt_rename_rel: "Rename relationship:",
      confirm_clear_canvas: "Do you want to clear the canvas diagram?",
      confirm_reset_template: "Do you want to reset to the starter template?",
      confirm_reset_w1: "Do you want to reload your Week 1 (W1) diagram? Current changes will be replaced by your W1 model.",
      confirm_delete_rel: "Do you want to delete this relationship line?",
      confirm_reset_all: "Are you sure you want to reset all progress and restart the academy from scratch?",

      // Toasts
      toast_conn_self: "Cannot connect an entity to itself.",
      toast_already_connected: "already connected!",
      toast_connected_success: "successfully connected!",
      toast_line_deleted: "relationship line removed!",
      toast_mult_set: "Multiplicity set:",
      toast_all_shapes_loaded: "All official Draw.io relational and EER shapes loaded!",
      toast_w1_loaded: "Week 1 (W1) diagram loaded and adapted to relational schema!",
      toast_w1_empty: "No diagram found in Week 1 for this challenge yet.",

      // Sectors
      sec_1_name: "Floor 1: Binary Relationships & Primary Keys",
      sec_1_badge: "1F • Binary ER",
      sec_2_name: "Floor 2: Multiplicity Constraints (0..1, 1..1, 0..*, 1..*)",
      sec_2_badge: "2F • Multiplicity",
      sec_3_name: "Floor 3: Weak Entities",
      sec_3_badge: "3F • Weak Entity",
      sec_4_name: "Floor 4: Many-to-Many & Association Classes",
      sec_4_badge: "4F • Association",
      sec_5_name: "Floor 5: Recursive (Unary) Relationships",
      sec_5_badge: "5F • Recursive ER",
      sec_6_name: "Floor 6: Disjoint Specialization (d)",
      sec_6_badge: "6F • Disjoint ISA",
      sec_7_name: "Floor 7: Overlapping Specialization (o)",
      sec_7_badge: "7F • Overlapping",
      sec_8_name: "Floor 8: Category / Union Types (∪)",
      sec_8_badge: "8F • Category ∪",
      sec_9_name: "Floor 9: Connection Traps (Fan & Chasm)",
      sec_9_badge: "9F • Traps",
      sec_10_name: "Floor 10: Enterprise Architecture System",
      sec_10_badge: "10F • Enterprise",

      // Portal (index.html)
      portal_brand_sub: "Computer Science 70+ Ecosystem • 3 Modules • 2,700 Practical Cases",
      portal_user_name: "CS Engineer",
      portal_user_rank: "⭐ Cyber Intern",
      portal_stat_solved: "Total Solved:",
      portal_stat_capital: "Total Score:",
      portal_hero_title: "Computer Science Interactive IT Modules Simulator",
      portal_hero_desc: "Welcome! This platform is designed based on a 100% hands-on and Socratic pedagogy free from dry theory. Select one of the 3 core academic tracks below and dive into in-depth practical simulators spanning Weeks 1 through 6:",
      portal_progress_label: "Overall Platform Mastery",
      portal_progress_completed: "Completed",
      portal_sec_title: "Academic Modules (3 Tracks)",
      portal_ds_cw: "CW1 (70%) • Mandatory VIVA Exam",
      portal_ds_desc: "Conceptual EER modeling, relational mapping, normalization (1NF-BCNF), advanced SQL queries, ACID transactions, and NoSQL (MongoDB, Redis) clusters.",
      portal_mastery: "Mastery:",
      portal_ds_btn: "🏛️ Enter Database Systems →",
      portal_os_cw: "CW1 (40%) • Individual Case Study & Bash",
      portal_os_desc: "Linux Debian 12 architecture, Inodes & file systems, professional Bash automation, process lifecycle (Signals), Python fork(), CPU Scheduling, virtual memory, and Docker.",
      portal_os_btn: "🐧 Enter Operating Systems →",
      portal_oop_cw: "CW2 (50%) • Group Coursework (Console Order App)",
      portal_oop_desc: "Java Core, Clean Code, SOLID principles, GoF Design Patterns (Factory, Builder, Singleton, Decorator, Strategy, Observer), UML class diagrams, and corporate architecture.",
      portal_oop_btn: "☕ Enter OOP Module →",

      // Portal Author Footer
      portal_footer_author_id: "Author: 00023271",
      portal_footer_desc: "Level 5 Student (BSc Computer Science) • Westminster International University in Tashkent (WIUT)",
      portal_footer_badge: "🎯 70%+ First Class Honours Platform",
      portal_footer_contact: "Contact:",
      portal_footer_email: "00023271@wiut.uz",

      // DS Hub (ds-hub.html)
      hub_back_portal: "← SeventyOne+ Portal",
      hub_brand_sub: "Conceptual EER, Relational Schema, Normalization, SQL & NoSQL",
      hub_user_name: "Database Architect",
      hub_user_rank: "Junior Modeler",
      hub_stat_solved: "Solved:",
      hub_stat_capital: "Total Score:",
      hub_hero_title: "Master Modern Database Architecture",
      hub_hero_desc: "Welcome! An interactive 2D simulator covering 6 professional modules and 900 practical tasks, spanning conceptual EER modeling and normalization to enterprise SQL query engineering, ACID transactions, and NoSQL clusters.",
      hub_progress_label: "Curriculum Overall Mastery",
      hub_headline: "🗺️ Learning Track & 6 Corporate Modules",
      hub_subheadline: "6 Modules • 900 Practical Cases",
      hub_w1_title: "Conceptual EER Modeling",
      hub_w1_desc: "Analyze entities, UML multiplicities (0..1, 1..*, M:N), weak entities, relationship diamonds, and connection traps (Fan & Chasm) on a draw.io style visual canvas.",
      hub_w1_btn: "Enter Module 1 →",
      hub_w2_title: "Relational Schema Mapping",
      hub_w2_desc: "Transform EER models into relational schemas (Steps 1–8), Primary Keys (PK), Foreign Keys (FK), Crow's Foot notation, and Subclass inheritance mapping.",
      hub_w2_btn: "Enter Module 2 →",
      hub_w3_title: "Relational Algebra & Normalization",
      hub_w3_desc: "Relational algebra operations (σ, π, ⨝, ⟕), functional dependencies (FD), anomaly elimination, and progressive normalization to 1NF, 2NF, 3NF, and BCNF.",
      hub_w3_btn: "Enter Module 3 →",
      hub_w4_title: "Advanced SQL & Query Engineering",
      hub_w4_desc: "Execute complex DDL, DML, multi-table JOINs, correlated subqueries, GROUP BY, HAVING aggregations, and optimize query plans using EXPLAIN on SQLite.",
      hub_w4_btn: "Enter Module 4 →",
      hub_w5_title: "ACID Transactions & Concurrency",
      hub_w5_desc: "Crash recovery, concurrency control, shared & exclusive locks, deadlock prevention, and empirical verification of ACID properties in production scenarios.",
      hub_w5_btn: "Enter Module 5 →",
      hub_w6_title: "NoSQL Clusters & Big Data",
      hub_w6_desc: "Document (MongoDB), Key-Value (Redis), and Wide-Column (Cassandra) architectures, CAP theorem trade-offs, and high-throughput distributed systems engineering.",
      hub_w6_btn: "Enter Module 6 →"
    }
  };

  const I18N = {
    currentLang: 'uz',

    init: function () {
      let saved = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('OOP_LANG');
      } catch (e) {}

      if (saved === 'en' || saved === 'uz' || saved === 'ru') {
        this.currentLang = saved;
      } else {
        this.currentLang = 'uz';
      }

      this.updateSwitcherUI();
      this.applyDOM();
    },

    getLang: function () {
      return this.currentLang;
    },

    setLang: function (lang) {
      if (lang !== 'uz' && lang !== 'ru' && lang !== 'en') return;
      this.currentLang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
        localStorage.setItem('OOP_LANG', lang);
      } catch (e) {}

      this.updateSwitcherUI();
      this.applyDOM();

      // Trigger app re-renders
      if (typeof window !== 'undefined') {
        if (typeof window.onLanguageChange === 'function') {
          window.onLanguageChange(lang);
        }
        if (typeof window.onOopLanguageChange === 'function') {
          window.onOopLanguageChange(lang);
        }
      }
    },

    t: function (key, fallback) {
      const langMap = TRANSLATIONS[this.currentLang] || TRANSLATIONS.uz;
      if (langMap && langMap[key] !== undefined) return langMap[key];
      const uzMap = TRANSLATIONS.uz;
      if (uzMap && uzMap[key] !== undefined) return uzMap[key];
      return fallback !== undefined ? fallback : key;
    },

    updateSwitcherUI: function () {
      if (typeof document === 'undefined') return;
      const btnUz = document.getElementById('btnLangUz');
      const btnRu = document.getElementById('btnLangRu');
      const btnEn = document.getElementById('btnLangEn');

      const buttons = [
        { el: btnUz, lang: 'uz' },
        { el: btnRu, lang: 'ru' },
        { el: btnEn, lang: 'en' }
      ];

      buttons.forEach(b => {
        if (b.el) {
          if (this.currentLang === b.lang) {
            b.el.classList.add('active');
            b.el.style.background = 'linear-gradient(135deg, #0284c7, #7c3aed)';
            b.el.style.color = '#fff';
            b.el.style.boxShadow = '0 0 10px rgba(124, 58, 237, 0.5)';
          } else {
            b.el.classList.remove('active');
            b.el.style.background = 'transparent';
            b.el.style.color = '#94a3b8';
            b.el.style.boxShadow = 'none';
          }
        }
      });

      if (document.documentElement) {
        document.documentElement.lang = this.currentLang;
      }
    },

    applyDOM: function () {
      if (typeof document === 'undefined') return;

      // 1. data-i18n text content
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = this.t(key);
        if (translated) {
          el.textContent = translated;
        }
      });

      // 2. data-i18n-html
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const translated = this.t(key);
        if (translated) {
          el.innerHTML = translated;
        }
      });

      // 3. data-i18n-title
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const translated = this.t(key);
        if (translated) {
          el.setAttribute('title', translated);
        }
      });

      // 4. data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = this.t(key);
        if (translated) {
          el.setAttribute('placeholder', translated);
        }
      });
    }
  };

  _scope.I18N = I18N;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18N;
  }
})();
