/**
 * ============================================================================
 * DATABASE SYSTEMS ACADEMY — BILINGUAL I18N SYSTEM (UZ / EN)
 * Seamlessly manages Uzbek & English translations across the entire application.
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
      stat_salary: "Maosh:",
      stat_capital: "Kapital:",
      stat_solved: "Bajarildi:",
      salary_suffix: "/oy",

      rank_1: "Kichik Ma'lumotlar Me'mori",
      rank_2: "Kichik Muhandis-Modeler",
      rank_3: "O'rta Darajali Modeler",
      rank_4: "Yetakchi Mantiqiy Modeler",
      rank_5: "Katta EER Tizim Muhandisi",
      rank_6: "Bosh Arxitektor & Hamkor (Penthouse)",

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
      shape_conn_zigzag: "Pog'onali",

      // Canvas footer
      canvas_tip: "💡 Maslahat: Entitiy yoki romblarni sichqoncha / barmog'ingiz bilan surishingiz va chiziqdagi multiplisitiyani bosing!",
      uml_notation_label: "UML min..max Notation (0..1, 1..1, 0..*, 1..*)",

      // Right Column Dossier
      floor_prefix: "Qavat:",
      floor_title_default: "Konseptual EER Modellashtirish",
      btn_prev: "◀ Oldingi",
      btn_next: "Keyingi ▶",
      keys_badge: "Keys #",
      diff_basic: "Boshlang'ich",
      diff_medium: "O'rta",
      diff_hard: "Yuqori",
      diff_expert: "Ekspert",
      diff_pro: "Professional",
      diff_master: "Bosh Me'mor",

      case_question_hdr: "SAVOL:",
      task_hdr: "Topshiriq:",
      btn_detail: "Batafsil",
      btn_detail_sub: "(Nazariya & Misollar)",
      eer_theory_hdr: "EER NAZARIYASI & UML QOIDALARI",
      details_toggle: "Tafsilotlar",
      hint_prefix: "💡 Maslahat:",
      hint_default: "Talablardagi entitiylar va munosabatlarga e'tibor bering.",

      // Evaluation & Controls
      eval_title: "⚙️ Diagramma Tekshiruvi & draw.io Boshqaruvi",
      eval_title_w2: "⚙️ Sxema Tekshiruvi & draw.io Boshqaruvi",
      drawio_guide_title: "🎨 draw.io Boshqaruv Imkoniyatlari",
      guide_point_connect: "Bog'lash: Entitiy yoki romb ustiga boring, paydo bo'lgan port strelkasini (▲ ▶ ▼ ◀) sudrab ikkinchi ob'ektga ulang.",
      guide_point_mult: "Multiplisitiya: Bog'lanish chizig'idagi yorliq ustiga bosib kerakli cheklovni aylantiring.",
      guide_point_zoom: "Masshtab: Sichqoncha g'ildiragini aylantirib yaqinlashtiring / uzoqlashtiring yoki burchakdagi + / - / 1:1 tugmalaridan foydalaning.",
      guide_point_edit: "Tahrirlash: Entitiy boshidagi + (atribut qo'shish), ✎ (nomini o'zgartirish), {W} (zaif entitiy), ✕ (o'chirish). Atribut nomini to'g'ridan-to'g'ri yozib o'zgartirish mumkin.",

      guide_w2_title: "📐 EER Kengaytirish Qo'llanmasi",
      guide_w2_p1: "• <strong>Dastlabki Model:</strong> 1-haftada yaratilgan model polotnoda avtomatik yuklanadi (siz yaratgan diagramma to'g'ridan-to'g'ri davom ettiriladi).",
      guide_w2_p2: "• <strong>Relyatsion Bog'lanish:</strong> Multiplicity o'rniga bolalar jadvaliga Tashqi Kalit <strong>[FK]</strong> ustunini qo'shing yoki oraliq jadval yarating.",
      guide_w2_p3: "• <strong>Kalitlar:</strong> Atribut yonidagi tugmani bosib <strong>[PK]</strong>, <strong>[FK]</strong> yoki <strong>[PK, FK]</strong> holatlarini belgilang.",
      guide_w2_p4: "• <strong>Tekshirish:</strong> Sxema tayyor bo'lgach, <strong>[✅ Sxemani Tekshirish & Tasdiqlash]</strong> tugmasini bosing!",

      btn_verify: "✅ Diagrammani Tekshirish",
      btn_verify_w2: "✅ Sxemani Tekshirish & Tasdiqlash",
      btn_get_hint: "💡 Maslahat Olish",
      btn_next_challenge: "Keyingi Topshiriqqa O'tish ▶",
      btn_default_w1: "Default (1-Hafta)",
      tool_reset_er: "📋 Dastlabki ER",
      source_default_template: "📋 Dastlabki shablon faol",
      source_w1_active: "🏛️ 1-Hafta modeli yuklandi",
      source_w2_custom: "💾 Sizning o'zgarishlaringiz",
      canvas_tip_w2: "💡 <em>Maslahat:</em> 1-hafta modeli asosida EER subklasslar va munosabatlarni kengaytiring.",

      // Modals
      map_modal_title: "🗺️ 150 ta Amaliy EER Topshiriqlari Xaritasi (10 ta Qavat)",
      map_modal_title_w2: "🗺️ 150 ta Relyatsion Sxema Topshiriqlari Xaritasi (10 ta Qavat)",
      event_modal_title: "⚡ Korporativ Arxitektura Insidenti & Voqealik",
      btn_understand: "Tushunarli, tuzatishga kirishaman",

      // Multiplicity Modal
      mult_modal_title: "Multiplicity Tanlang",
      mult_exact_one: "1..1 — Qat'iy bitta (Majburiy)",
      mult_zero_one: "0..1 — Ko'pi bilan bitta (Ixtiyoriy)",
      mult_one_many: "1..* — Kamida bitta yoki ko'p (Majburiy)",
      mult_zero_many: "0..* — Nol yoki undan ko'p (Ixtiyoriy)",
      mult_many_many: "*..* — Ko'pdan-ko'pga (M:N)",

      // Dialogs & Prompts
      prompt_entity_name: "Entitiy nomini kiriting:",
      prompt_rename_entity: "Entitiy nomini o'zgartiring:",
      prompt_attr_name: "Yangi atribut nomini kiriting:",
      prompt_rename_attr: "Atribut nomini kiriting:",
      prompt_rename_rel: "Aloqa nomini o'zgartiring:",
      confirm_clear_canvas: "Chizilgan diagrammani tozalashni xohlaysizmi?",
      confirm_reset_template: "Dastlabki shablonni qayta tiklashni xohlaysizmi?",
      confirm_reset_w1: "1-Haftada (W1) chizgan diagrammangizni qayta yuklashni xohlaysizmi? Joriy o'zgarishlar o'rniga W1 diagrammasi yuklanadi.",
      confirm_delete_rel: "aloqa chizig'ini o'chirishni xohlaysizmi?",
      confirm_reset_all: "Haqiqatan ham barcha yutuqlar va to'plangan ballarni o'chirib, o'yinni boshidan boshlamoqchimisiz?",

      // Toasts
      toast_conn_self: "Entitiyni o'ziga ulash mumkin emas.",
      toast_already_connected: "allaqachon bog'langan!",
      toast_connected_success: "muvaffaqiyatli bog'landi!",
      toast_line_deleted: "aloqa chizig'i o'chirildi!",
      toast_mult_set: "Multiplicity o'rnatildi:",
      toast_all_shapes_loaded: "Barcha rasmiy Draw.io relyatsion va EER shakllari yuklangan!",
      toast_w1_loaded: "1-hafta (W1) diagrammasi yuklandi va relyatsion modelga moslashtirildi!",
      toast_w1_empty: "1-Haftada hali bu topshiriq uchun diagramma chizilmagan.",

      // Sectors
      sec_1_name: "1-Qavat: Binar Aloqalar va Birlamchi Kalitlar",
      sec_1_badge: "1F • Binar ER",
      sec_2_name: "2-Qavat: Multiplicity Chegaralari (0..1, 1..1, 0..*, 1..*)",
      sec_2_badge: "2F • Multiplicity",
      sec_3_name: "3-Qavat: Zaif Entitiylar (Weak Entities)",
      sec_3_badge: "3F • Zaif Entitiy",
      sec_4_name: "4-Qavat: *:* Aloqalar va Aloqa Atributlari",
      sec_4_badge: "4F • Association",
      sec_5_name: "5-Qavat: Rekursiv (Unitar) Aloqalar",
      sec_5_badge: "5F • Rekursiv ER",
      sec_6_name: "6-Qavat: Disjoint Ixtisoslashuv (d)",
      sec_6_badge: "6F • Disjoint ISA",
      sec_7_name: "7-Qavat: Overlapping Ixtisoslashuv (o)",
      sec_7_badge: "7F • Overlapping",
      sec_8_name: "8-Qavat: Kategoriya / Birlashma Turi (∪)",
      sec_8_badge: "8F • Category ∪",
      sec_9_name: "9-Qavat: Tuzoqlar (Fan Trap & Chasm Trap)",
      sec_9_badge: "9F • Tuzoqlar",
      sec_10_name: "10-Qavat: Korporativ Enterprise Tizimi",
      sec_10_badge: "10F • Enterprise",

      // Portal (index.html)
      portal_brand_sub: "Westminster 70+ First Class Ekotizimi • 3 Modul • 2,700 ta Amaliy Keys",
      portal_user_name: "WIUT Talabasi",
      portal_user_rank: "⭐ Cyber Intern",
      portal_stat_solved: "Jami Bajarildi:",
      portal_stat_capital: "Jami Kapital:",
      portal_hero_title: "Westminster Xalqaro Universiteti IT Modullari Simulyatori",
      portal_hero_desc: "Xush kelibsiz! Ushbu platforma WIUT talabalari uchun quruq nazariyadan holi, 100% amaliy va Sokratik ta'lim tizimi asosida ishlab chiqilgan. Quyidagi 3 ta asosiy akademik yo'nalishdan birini tanlang va 1-dan 6-haftagacha bo'lgan chuqur amaliy simulyatorlarga sho'ng'ing:",
      portal_progress_label: "Platformaning Umumiy O'zlashtirilishi",
      portal_progress_completed: "Bajarildi",
      portal_sec_title: "O'quv Modullari (3 ta Yo'nalish)",
      portal_ds_cw: "CW1 (70%) • Majburiy VIVA Imtihoni",
      portal_ds_desc: "Konseptual EER modellashtirish, relyatsion sxemaga o'tkazish, normalizatsiya (1NF-BCNF), ilg'or SQL so'rovlar, ACID tranzaksiyalari hamda NoSQL (MongoDB, Redis) klasterlari.",
      portal_mastery: "O'zlashtirish:",
      portal_ds_btn: "🏛️ Database Systemsga Kirish →",
      portal_os_cw: "CW1 (40%) • Individual Case Study & Bash",
      portal_os_desc: "Linux Debian 12 arxitekturasi, Inodelar va fayl tizimi, professional Bash avtomatlashtirish, jarayonlar hayoti (Signals), Python fork(), CPU Scheduling, virtual xotira va Docker.",
      portal_os_btn: "🐧 Operating Systemsga Kirish →",
      portal_oop_cw: "CW2 (50%) • Guruh Ishi (Console Order App)",
      portal_oop_desc: "Java Core, Clean Code, SOLID tamoyillari, GoF Design Patterns (Factory, Builder, Singleton, Decorator, Strategy, Observer), UML sinflar diagrammasi va korporativ arxitektura.",
      portal_oop_btn: "☕ OOP Moduliga Kirish →",

      // DS Hub (ds-hub.html)
      hub_back_portal: "← SeventyPlus Portali",
      hub_brand_sub: "Konseptual EER, Relyatsion Sxema, Normalizatsiya, SQL & NoSQL",
      hub_user_name: "Ma'lumotlar Me'mori",
      hub_user_rank: "Kichik Modeler",
      hub_stat_solved: "Bajarildi:",
      hub_stat_capital: "Umumiy Kapital:",
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

    en: {
      // Header / HUD
      brand_title_w1: "Database Systems • Module 1",
      brand_badge_w1: "EER Modeling",
      brand_sub_w1: "Conceptual ERD, Multiplicity (0..1, 1..*, M:N), Weak Entities & Traps",
      brand_title_w2: "Database Systems • Module 2",
      brand_badge_w2: "Relational Schema",
      brand_sub_w2: "Relational Schema, Foreign Keys {FK}, Normalization (1NF-BCNF)",

      stat_rank: "Rank:",
      stat_salary: "Salary:",
      stat_capital: "Capital:",
      stat_solved: "Solved:",
      salary_suffix: "/mo",

      rank_1: "Junior Database Architect",
      rank_2: "Junior Engineer-Modeler",
      rank_3: "Intermediate Modeler",
      rank_4: "Lead Logical Modeler",
      rank_5: "Senior EER Systems Engineer",
      rank_6: "Chief Architect & Partner (Penthouse)",

      btn_main_hub: "← Main Hub",
      btn_dictionary: "Dictionary",
      btn_incident: "⚡ Incident",
      btn_map: "🗺️ Map",
      tooltip_reset: "Reset progress",
      tooltip_sound: "Toggle sound on / off",
      tooltip_dict: "Database encyclopedia & command dictionary (Ctrl+K)",
      tooltip_event: "Corporate unexpected incident",
      tooltip_map: "150 challenges map",

      // 2D Atelier Banner
      atelier_title_w1: "🎨 Chief Architect Atlas Consultation Hall",
      atelier_title_w2: "🎨 Relational Architect Ada Consultation Hall",
      speaker_atlas: "CHIEF ARCHITECT ATLAS",
      speaker_ada: "RELATIONAL ARCHITECT ADA",
      ticker_default_w1: "Welcome! Analyze the business requirements and construct the conceptual diagram.",
      ticker_default_w2: "Welcome! Map the EER model into relational tables and designate keys.",

      // Studio Toolbar
      studio_title_w1: "📐 Visual EER Diagram Studio (draw.io Style)",
      studio_title_w2: "📐 Relational Schema Studio (draw.io Style)",
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
      shape_item_box: "Item",
      shape_entity: "Entity",
      shape_entity_rounded: "Rounded Ent.",
      shape_weak_entity: "Weak Entity",
      shape_assoc_entity: "Associative",
      shape_attr_plain: "Attribute",
      shape_attr_pk: "PK Key",
      shape_attr_multi: "Multi-Valued",
      shape_attr_derived: "Derived",
      shape_attr_partial: "Partial (PPK)",
      shape_attr_composite: "Composite",
      shape_rel_diamond: "Relationship",
      shape_rel_identifying: "Identifying",
      shape_domain_cloud: "Cloud Domain",
      shape_partition_box: "Partition",
      shape_isa_circle: "Inheritance (ISA)",
      shape_note_box: "Note",
      shape_conn_plain: "Straight Line",
      shape_conn_dashed: "Dashed Line",
      shape_conn_11: "1..1 (||)",
      shape_conn_01: "0..1 (O|)",
      shape_conn_1n: "1..* (|<)",
      shape_conn_0n: "0..* (O<)",
      shape_conn_zigzag: "Orthogonal",

      // Canvas footer
      canvas_tip: "💡 Tip: Drag entities or diamonds with mouse / finger, and click multiplicities on connector lines to cycle constraints!",
      uml_notation_label: "UML min..max Notation (0..1, 1..1, 0..*, 1..*)",

      // Right Column Dossier
      floor_prefix: "Floor:",
      floor_title_default: "Conceptual EER Modeling",
      btn_prev: "◀ Prev",
      btn_next: "Next ▶",
      keys_badge: "Case #",
      diff_basic: "Beginner",
      diff_medium: "Intermediate",
      diff_hard: "Advanced",
      diff_expert: "Expert",
      diff_pro: "Professional",
      diff_master: "Chief Architect",

      case_question_hdr: "QUESTION:",
      task_hdr: "Task:",
      btn_detail: "Detailed",
      btn_detail_sub: "(Theory & Examples)",
      eer_theory_hdr: "EER THEORY & UML RULES",
      details_toggle: "Details",
      hint_prefix: "💡 Hint:",
      hint_default: "Focus on the required entities and their relationship cardinalities.",

      // Evaluation & Controls
      eval_title: "⚙️ Diagram Verification & draw.io Workbench",
      eval_title_w2: "⚙️ Schema Verification & draw.io Workbench",
      drawio_guide_title: "🎨 draw.io Control Capabilities",
      guide_point_connect: "Connect: Hover over an entity or diamond, drag the port arrow (▲ ▶ ▼ ◀) to connect to another object.",
      guide_point_mult: "Multiplicity: Click on the multiplicity badge on the connector line to select or cycle constraints.",
      guide_point_zoom: "Zoom: Scroll mouse wheel to zoom in/out or use the + / - / 1:1 controls in the corner.",
      guide_point_edit: "Edit: Use entity header controls: + (add attribute), ✎ (rename), {W} (toggle weak), ✕ (delete). Attribute names can also be edited directly.",

      guide_w2_title: "📐 EER Extension Guide",
      guide_w2_p1: "• <strong>Initial Model:</strong> Model from Week 1 is automatically loaded onto the canvas (continue directly from where you modeled).",
      guide_w2_p2: "• <strong>Relational Linking:</strong> Add Foreign Key <strong>[FK]</strong> columns to child tables or create intermediary junction tables.",
      guide_w2_p3: "• <strong>Keys:</strong> Click the key button next to an attribute to toggle <strong>[PK]</strong>, <strong>[FK]</strong>, or <strong>[PK, FK]</strong>.",
      guide_w2_p4: "• <strong>Verification:</strong> Once schema is ready, click <strong>[✅ Verify Schema & Confirm]</strong>!",

      btn_verify: "✅ Verify Diagram",
      btn_verify_w2: "✅ Verify Schema & Confirm",
      btn_get_hint: "💡 Get Hint",
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
      portal_brand_sub: "Westminster 70+ First Class Ecosystem • 3 Modules • 2,700 Practical Cases",
      portal_user_name: "WIUT Student",
      portal_user_rank: "⭐ Cyber Intern",
      portal_stat_solved: "Total Solved:",
      portal_stat_capital: "Total Capital:",
      portal_hero_title: "Westminster International University IT Modules Simulator",
      portal_hero_desc: "Welcome! This platform is designed for WIUT students based on a 100% hands-on and Socratic pedagogy free from dry theory. Select one of the 3 core academic tracks below and dive into in-depth practical simulators spanning Weeks 1 through 6:",
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

      // DS Hub (ds-hub.html)
      hub_back_portal: "← SeventyPlus Portal",
      hub_brand_sub: "Conceptual EER, Relational Schema, Normalization, SQL & NoSQL",
      hub_user_name: "Database Architect",
      hub_user_rank: "Junior Modeler",
      hub_stat_solved: "Solved:",
      hub_stat_capital: "Total Capital:",
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
        saved = localStorage.getItem(STORAGE_KEY);
      } catch (e) {}

      if (saved === 'en' || saved === 'uz') {
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
      if (lang !== 'uz' && lang !== 'en') return;
      this.currentLang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}

      this.updateSwitcherUI();
      this.applyDOM();

      // Trigger app re-renders
      if (typeof window !== 'undefined' && window.onLanguageChange) {
        window.onLanguageChange(lang);
      }
    },

    t: function (key, fallback) {
      const langMap = TRANSLATIONS[this.currentLang] || TRANSLATIONS.uz;
      if (langMap[key] !== undefined) return langMap[key];
      const uzMap = TRANSLATIONS.uz;
      if (uzMap[key] !== undefined) return uzMap[key];
      return fallback !== undefined ? fallback : key;
    },

    updateSwitcherUI: function () {
      if (typeof document === 'undefined') return;
      const btnUz = document.getElementById('btnLangUz');
      const btnEn = document.getElementById('btnLangEn');
      if (btnUz && btnEn) {
        if (this.currentLang === 'uz') {
          btnUz.classList.add('active');
          btnEn.classList.remove('active');
        } else {
          btnEn.classList.add('active');
          btnUz.classList.remove('active');
        }
      }
      if (document.documentElement) {
        document.documentElement.lang = this.currentLang;
      }
    },

    applyDOM: function () {
      if (typeof document === 'undefined') return;
      const isEn = this.currentLang === 'en';

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
