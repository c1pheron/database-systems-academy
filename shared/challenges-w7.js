// WIUT OOP (5COSC018C) — WEEK 7 DATASET (150 PROGRESSIVE CHALLENGES)
// Comprehensive syllabus alignment: Polymorphism Fundamentals, Universal Remote,
// Method Overriding (@Override, Dynamic Dispatch), Method Overloading (Compile-Time),
// Inheritance vs Polymorphism, Early/Static Binding (private, static, final, fields),
// Late/Dynamic Binding (Runtime Resolution, Virtual Method Table),
// Upcasting & Reference Type Boundaries, Downcasting, instanceof & Safe Casting,
// Workshop TW 7 (SmartDevice, Lamp, Thermostat, Speaker, SmartHomeHub), and CW2
// Milestone (Product -> PhysicalProduct, DigitalProduct, Cart, GrandTotal).
// Generated strictly following the 1-5 step format and 100% verified with JavaAnalyzer.
window.OOP_CHALLENGES_W7 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "1. Uzum Smart — Universal Pult va Polimorfizm Asosi",
      "en": "1. Uzum Smart — Universal Remote and Polymorphism Core"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nWIUT 7-leksiyasida aytilganidek: 'Universal pult bir nechta qurilmani (TV, Konditsioner, Lampochka) bitta umumiy interfeys orqali boshqaradi'. Uzum Smart ekotizimida barcha aqlli qurilmalar uchun 'SmartDevice' superklassi va 'turnOn()' polimorfik metodini yarating.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartLamp' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartLamp' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartLamp' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nOshxona chirog'i yoqildi (Yorug'lik: 100%)",
      "en": "🏢 Context: Uzum Smart\n\nModel the lecture's universal remote analogy: a base SmartDevice superclass providing a polymorphic turnOn() method for all appliances.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartLamp' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartLamp' providing specific device behavior.\n4. In 'Main', assign new 'SmartLamp' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nOshxona chirog'i yoqildi (Yorug'lik: 100%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartLamp voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Oshxona chirog'i\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Yorug'lik: 100%)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Oshxona chirog'i\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartLamp extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartLamp</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartLamp(...);</code>"
      ]
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "2. Artel SmartHome — Konditsioner Quvvatini Polimorfik Boshqarish",
      "en": "2. Artel SmartHome — Polymorphic Air Conditioner Power"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel SmartHome\n\nArtel aqlli uyida 'SmartDevice' dan meros oluvchi 'SmartAirConditioner' qurilmasi 'turnOn()' chaqirilganda standart 22°C rejimida ishga tushadi. Umumiy havola orqali boshqaring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartAirConditioner' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartAirConditioner' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartAirConditioner' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMehmonxona konditsioneri yoqildi (Harorat: 22°C)",
      "en": "🏢 Context: Artel SmartHome\n\nImplement SmartAirConditioner extending SmartDevice, powering on into default 22C cooling mode.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartAirConditioner' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartAirConditioner' providing specific device behavior.\n4. In 'Main', assign new 'SmartAirConditioner' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nMehmonxona konditsioneri yoqildi (Harorat: 22°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartAirConditioner",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartAirConditioner voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartAirConditioner(\"Mehmonxona konditsioneri\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartAirConditioner extends SmartDevice {\n    public SmartAirConditioner(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Harorat: 22°C)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartAirConditioner(\"Mehmonxona konditsioneri\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartAirConditioner extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartAirConditioner</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartAirConditioner(...);</code>"
      ]
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "3. Yandex Smart — Aqlli Karnay (SmartSpeaker) va Ovoz Rejimi",
      "en": "3. Yandex Smart — Smart Speaker and Audio Mode"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\nYandex stansiya aqlli qurilma sifatida yoqilganda ovoz balandligini 40% darajasida faollashtiradi. 'SmartSpeaker' klassini 'SmartDevice' dan voris qilib tuzing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartSpeaker' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartSpeaker' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartSpeaker' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nAlisa Karnay yoqildi (Ovoz: 40%)",
      "en": "🏢 Context: Yandex Smart\n\nImplement SmartSpeaker subclassing SmartDevice, initializing volume to 40% when powered on.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartSpeaker' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartSpeaker' providing specific device behavior.\n4. In 'Main', assign new 'SmartSpeaker' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nAlisa Karnay yoqildi (Ovoz: 40%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartSpeaker voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Alisa Karnay\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Ovoz: 40%)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Alisa Karnay\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartSpeaker extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartSpeaker</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartSpeaker(...);</code>"
      ]
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "4. Texnomart Smart — Robot Changyutgich va Tozalash Rejimi",
      "en": "4. Texnomart Smart — Robotic Vacuum Cleaner Mode"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Smart\n\nTexnomart do'konidagi robot changyutgich 'SmartDevice' superklassidan voris oladi. 'turnOn()' chaqirilganda 'Avtomatik tozalash boshlandi' holatiga o'tadi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'RobotVacuum' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'RobotVacuum' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'RobotVacuum' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nRoborock S8 yoqildi (Avtomatik tozalash boshlandi)",
      "en": "🏢 Context: Texnomart Smart\n\nBuild RobotVacuum subclassing SmartDevice, returning clean sweep status when turned on.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'RobotVacuum' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'RobotVacuum' providing specific device behavior.\n4. In 'Main', assign new 'RobotVacuum' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nRoborock S8 yoqildi (Avtomatik tozalash boshlandi)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "RobotVacuum",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va RobotVacuum voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new RobotVacuum(\"Roborock S8\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass RobotVacuum extends SmartDevice {\n    public RobotVacuum(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Avtomatik tozalash boshlandi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new RobotVacuum(\"Roborock S8\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass RobotVacuum extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>RobotVacuum</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new RobotVacuum(...);</code>"
      ]
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "5. Mediapark — Aqlli Televizor (SmartTV) Kirish Kanali",
      "en": "5. Mediapark — Smart TV Input Channel"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Mediapark\n\nMediapark aqlli televizori yoqilganda standart HDMI-1 portiga ulanadi. 'SmartTV' sinfini polimorfik 'SmartDevice' ga bog'lang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartTV' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartTV' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartTV' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nSamsung QLED yoqildi (Manba: HDMI-1)",
      "en": "🏢 Context: Mediapark\n\nSubclass SmartDevice with SmartTV defaulting to HDMI-1 upon activation.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartTV' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartTV' providing specific device behavior.\n4. In 'Main', assign new 'SmartTV' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nSamsung QLED yoqildi (Manba: HDMI-1)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartTV",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartTV voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartTV(\"Samsung QLED\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartTV extends SmartDevice {\n    public SmartTV(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Manba: HDMI-1)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartTV(\"Samsung QLED\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartTV extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartTV</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartTV(...);</code>"
      ]
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "6. Payme Smart — Terminal Quvvati va Aloqa Holati",
      "en": "6. Payme Smart — POS Terminal Power and Connectivity"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Smart\n\nPayme to'lov terminali yoqilganda 4G mobil aloqaga ulanadi. 'SmartTerminal' sinfini polimorfik 'SmartDevice' superklassi bilan bog'lang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartTerminal' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartTerminal' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartTerminal' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nPayme POS-01 yoqildi (Aloqa: 4G LTE Faol)",
      "en": "🏢 Context: Payme Smart\n\nImplement SmartTerminal connecting to 4G gateway upon polymorphic startup.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartTerminal' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartTerminal' providing specific device behavior.\n4. In 'Main', assign new 'SmartTerminal' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nPayme POS-01 yoqildi (Aloqa: 4G LTE Faol)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartTerminal",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartTerminal voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartTerminal(\"Payme POS-01\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartTerminal extends SmartDevice {\n    public SmartTerminal(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Aloqa: 4G LTE Faol)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartTerminal(\"Payme POS-01\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartTerminal extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartTerminal</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartTerminal(...);</code>"
      ]
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "7. Korzinka Smart — Aqlli Sovutgich (SmartFridge) Ekotizimi",
      "en": "7. Korzinka Smart — Smart Refrigerator Ecosystem"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Smart\n\nKorzinka tarmoqlarida mahsulotlarni saqlovchi aqlli sovutgich yoqilganda haroratni 4°C darajaga o'rnatadi. 'SmartFridge' klassini tuzing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartFridge' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartFridge' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartFridge' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nBeko SmartCool yoqildi (Sovutish: +4°C)",
      "en": "🏢 Context: Korzinka Smart\n\nImplement SmartFridge setting internal compartment temperature to 4C when activated.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartFridge' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartFridge' providing specific device behavior.\n4. In 'Main', assign new 'SmartFridge' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nBeko SmartCool yoqildi (Sovutish: +4°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartFridge",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartFridge voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartFridge(\"Beko SmartCool\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartFridge extends SmartDevice {\n    public SmartFridge(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Sovutish: +4°C)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartFridge(\"Beko SmartCool\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartFridge extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartFridge</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartFridge(...);</code>"
      ]
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "8. Click Smart — Aqlli Qulf (SmartDoorLock) Xavfsizlik Holati",
      "en": "8. Click Smart — Smart Door Lock Security State"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Smart\n\nAqlli eshik qulfi tizimga ulanganda eshikni himoyalangan qulf holatida saqlaydi. 'SmartDoorLock' klassini yarating.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartDoorLock' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartDoorLock' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartDoorLock' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nBosh Kirish Qulfi yoqildi (Qulf holati: Qulflangan)",
      "en": "🏢 Context: Click Smart\n\nCreate SmartDoorLock engaging security bolts when powered on.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartDoorLock' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartDoorLock' providing specific device behavior.\n4. In 'Main', assign new 'SmartDoorLock' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nBosh Kirish Qulfi yoqildi (Qulf holati: Qulflangan)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartDoorLock",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartDoorLock voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartDoorLock(\"Bosh Kirish Qulfi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartDoorLock extends SmartDevice {\n    public SmartDoorLock(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Qulf holati: Qulflangan)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartDoorLock(\"Bosh Kirish Qulfi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartDoorLock extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartDoorLock</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartDoorLock(...);</code>"
      ]
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "9. Uzum Tezkor — Aqlli Choynak (SmartKettle) Qaynatish Rejimi",
      "en": "9. Uzum Tezkor — Smart Electric Kettle Boiling Mode"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tezkor\n\nUzum Tezkor ofisidagi aqlli choynak yoqilganda 100°C qaynatish rejimiga kiradi. 'SmartKettle' klassini polimorfik tuzing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartKettle' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartKettle' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartKettle' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nXiaomi Kettle Pro yoqildi (Maqsadli harorat: 100°C)",
      "en": "🏢 Context: Uzum Tezkor\n\nImplement SmartKettle entering 100C boiling mode on polymorphic power-on.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartKettle' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartKettle' providing specific device behavior.\n4. In 'Main', assign new 'SmartKettle' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nXiaomi Kettle Pro yoqildi (Maqsadli harorat: 100°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartKettle",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartKettle voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartKettle(\"Xiaomi Kettle Pro\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartKettle extends SmartDevice {\n    public SmartKettle(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Maqsadli harorat: 100°C)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartKettle(\"Xiaomi Kettle Pro\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartKettle extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartKettle</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartKettle(...);</code>"
      ]
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "10. SafeCity — Kuzatuv Kamerasi (SecurityCamera) va Tungi Rejim",
      "en": "10. SafeCity — Security Camera and Night Vision"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SafeCity\n\nSafeCity xavfsizlik kamerasi yoqilganda HD video yozish va IQ (Infraqizil) tungi ko'rish rejimini ishga tushiradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SecurityCamera' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SecurityCamera' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SecurityCamera' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nHovli Kamerasi yoqildi (Yozuv: 1080p HD | Tungi ko'rish: Faol)",
      "en": "🏢 Context: SafeCity\n\nModel SecurityCamera activating 1080p recording and infrared vision upon startup.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SecurityCamera' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SecurityCamera' providing specific device behavior.\n4. In 'Main', assign new 'SecurityCamera' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nHovli Kamerasi yoqildi (Yozuv: 1080p HD | Tungi ko'rish: Faol)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SecurityCamera",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SecurityCamera voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SecurityCamera(\"Hovli Kamerasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SecurityCamera extends SmartDevice {\n    public SecurityCamera(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Yozuv: 1080p HD | Tungi ko'rish: Faol)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SecurityCamera(\"Hovli Kamerasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SecurityCamera extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SecurityCamera</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SecurityCamera(...);</code>"
      ]
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "11. SmartHome OS — Aqlli Parda (SmartCurtain) Ochilish Holati",
      "en": "11. SmartHome OS — Smart Curtain Automated Opening"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SmartHome OS\n\nAqlli parda yoqilganda kunduzgi yorug'lik uchun 100% ochiq holatga keladi. 'SmartCurtain' sinfini yozing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartCurtain' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartCurtain' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartCurtain' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMehmonxona Pardasi yoqildi (Parda holati: 100% Ochiq)",
      "en": "🏢 Context: SmartHome OS\n\nImplement SmartCurtain expanding to 100% daylight opening state upon activation.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartCurtain' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartCurtain' providing specific device behavior.\n4. In 'Main', assign new 'SmartCurtain' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nMehmonxona Pardasi yoqildi (Parda holati: 100% Ochiq)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartCurtain",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartCurtain voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartCurtain(\"Mehmonxona Pardasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartCurtain extends SmartDevice {\n    public SmartCurtain(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Parda holati: 100% Ochiq)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartCurtain(\"Mehmonxona Pardasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartCurtain extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartCurtain</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartCurtain(...);</code>"
      ]
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "12. EcoHome — Aqlli Sug'orish Tizimi (SmartIrrigation)",
      "en": "12. EcoHome — Smart Garden Irrigation System"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: EcoHome\n\nBog'dagi aqlli sug'orish klapani yoqilganda 15 daqiqalik tomchilatib sug'orish dasturini boshlaydi. 'SmartIrrigation' klassini tuzing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartIrrigation' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartIrrigation' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartIrrigation' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMaysazor Klapani yoqildi (Sug'orish: 15 daqiqa tomchilatish)",
      "en": "🏢 Context: EcoHome\n\nBuild SmartIrrigation commencing a 15-minute drip irrigation cycle on power activation.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartIrrigation' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartIrrigation' providing specific device behavior.\n4. In 'Main', assign new 'SmartIrrigation' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nMaysazor Klapani yoqildi (Sug'orish: 15 daqiqa tomchilatish)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartIrrigation",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartIrrigation voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartIrrigation(\"Maysazor Klapani\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartIrrigation extends SmartDevice {\n    public SmartIrrigation(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Sug'orish: 15 daqiqa tomchilatish)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartIrrigation(\"Maysazor Klapani\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartIrrigation extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartIrrigation</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartIrrigation(...);</code>"
      ]
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "13. SmartOffice — Harakat Datchigi (MotionSensor) Monitoringi",
      "en": "13. SmartOffice — Motion Sensor Perimeter Monitoring"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SmartOffice\n\nOfis binosidagi harakat sensori yoqilganda 360 daraja perimetr kuzatuvini faollashtiradi. 'MotionSensor' klassini yozing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'MotionSensor' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'MotionSensor' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'MotionSensor' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nDahliz Sensori yoqildi (Datchik: 360° Harakat skaneri faol)",
      "en": "🏢 Context: SmartOffice\n\nModel MotionSensor engaging 360-degree perimeter sensor scan on polymorphic startup.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'MotionSensor' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'MotionSensor' providing specific device behavior.\n4. In 'Main', assign new 'MotionSensor' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nDahliz Sensori yoqildi (Datchik: 360° Harakat skaneri faol)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "MotionSensor",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va MotionSensor voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new MotionSensor(\"Dahliz Sensori\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass MotionSensor extends SmartDevice {\n    public MotionSensor(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Datchik: 360° Harakat skaneri faol)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new MotionSensor(\"Dahliz Sensori\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass MotionSensor extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>MotionSensor</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new MotionSensor(...);</code>"
      ]
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "14. GreenHouse — Aqlli Isitgich (SmartHeater) Quvvat Rejimi",
      "en": "14. GreenHouse — Smart Greenhouse Heater Power"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: GreenHouse\n\nIssiqxonadagi aqlli elektr isitgich yoqilganda 1500W quvvatda isitishni boshlaydi. 'SmartHeater' sinfini bog'lang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOn()' metodini bering.\n2. 'SmartHeater' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'SmartHeater' sinfida 'turnOn()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'SmartHeater' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nIssiqxona Isitgichi yoqildi (Quvvat: 1500W Eco-rejim)",
      "en": "🏢 Context: GreenHouse\n\nBuild SmartHeater initiating 1500W heating cycle when powered on.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOn()' method.\n2. Create 'SmartHeater' extending 'SmartDevice'.\n3. Override 'turnOn()' in 'SmartHeater' providing specific device behavior.\n4. In 'Main', assign new 'SmartHeater' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nIssiqxona Isitgichi yoqildi (Quvvat: 1500W Eco-rejim)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHeater",
        "Main"
      ],
      "methods": [
        "turnOn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va SmartHeater voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartHeater(\"Issiqxona Isitgichi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass SmartHeater extends SmartDevice {\n    public SmartHeater(String name) { super(name); }\n    @Override\n    public String turnOn() {\n        return name + \" yoqildi (Quvvat: 1500W Eco-rejim)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartHeater(\"Issiqxona Isitgichi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartHeater extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>SmartHeater</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new SmartHeater(...);</code>"
      ]
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm Asoslari va Universal Interfeys Konsepsiyasi",
    "sector": "1-15: Universal Remote & Polymorphism Fundamentals",
    "title": {
      "uz": "15. SmartHub — Universal O'chirish (turnOff) Polimorfizmi",
      "en": "15. SmartHub — Universal Device Power Off Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SmartHub\n\nLeksiyadagi universal pultning 'turnOff()' tugmasi: qaysi qurilma bo'lishidan qat'i nazar, uni xavfsiz o'chiradi. 'SmartDevice' va vorisi 'GenericAppliance' bilan buni tasdiqlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy superklassini e'lon qiling va unga 'name' maydoni hamda 'turnOff()' metodini bering.\n2. 'GenericAppliance' sinfini 'extends SmartDevice' orqali voris qilib yarating.\n3. 'GenericAppliance' sinfida 'turnOff()' metodini @Override qilib, maxsus xatti-harakatni yozing.\n4. 'Main' sinfida 'SmartDevice' turidagi havolaga 'GenericAppliance' ob'yektini biriktiring (Polimorfizm).\n5. Natijani chop eting.\n\n📊 Kutilayotgan Natija:\nKofe mashinasi o'chirildi (Kutish rejimi)",
      "en": "🏢 Context: SmartHub\n\nDemonstrate polymorphic turnOff() method invocation across SmartDevice instances.\n\n🎯 STEPS:\n1. Declare base superclass 'SmartDevice' with 'name' field and 'turnOff()' method.\n2. Create 'GenericAppliance' extending 'SmartDevice'.\n3. Override 'turnOff()' in 'GenericAppliance' providing specific device behavior.\n4. In 'Main', assign new 'GenericAppliance' to a 'SmartDevice' reference variable.\n5. Print the resulting output to console.\n\n📊 Expected Output:\nKofe mashinasi o'chirildi (Kutish rejimi)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "GenericAppliance",
        "Main"
      ],
      "methods": [
        "turnOff"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// 1. SmartDevice superklassi va GenericAppliance voris sinfini e'lon qiling\nclass SmartDevice {\n    // protected String name;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new GenericAppliance(\"Kofe mashinasi\");\n        System.out.println(dev.turnOff());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n}\n\nclass GenericAppliance extends SmartDevice {\n    public GenericAppliance(String name) { super(name); }\n    @Override\n    public String turnOff() {\n        return name + \" o'chirildi (Kutish rejimi)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new GenericAppliance(\"Kofe mashinasi\");\n        System.out.println(dev.turnOff());\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (yunoncha 'ko'p shakllilik') — bitta umumiy interfeys yoki superklass orqali har xil turlarga mansub ob'yektlar bilan bir xil usulda ishlash qobiliyatidir. Leksiyadagi universal pult barcha qurilmalarni bitta 'turnOn()' buyrug'i orqali boshqaradi.",
      "cleanCode": "class SmartDevice { ... }\nclass GenericAppliance extends SmartDevice { ... }",
      "breakdown": [
        "<code>SmartDevice</code>: universal superklass interfeysi.",
        "<code>GenericAppliance</code>: 'turnOn()' ni qayta aniqlovchi maxsus qurilma sinfi.",
        "Polimorfizm: <code>SmartDevice dev = new GenericAppliance(...);</code>"
      ]
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "16. SmartLamp — Yorug'likni Oshirish (increase) Overridingi",
      "en": "16. SmartLamp — Overriding increase() for Brightness Adjustment"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nLeksiyada ta'kidlanganidek: 'SmartDevice' da 'increase()' hech narsani o'zgartirmaydi, lekin 'Lamp' da u yorug'likni +10% ga oshiradi. '@Override' orqali metodni qayta yozing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartLamp' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nIsh stoli lampasi holati: Yorug'lik 60%",
      "en": "🏢 Context: Uzum Smart\n\nOverride increase() in SmartLamp to increment brightness by 10% and output current level.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartLamp' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nIsh stoli lampasi holati: Yorug'lik 60%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartLamp sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice lamp = new SmartLamp(\"Ish stoli lampasi\", 50);\n        lamp.increase();\n        System.out.println(lamp.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness;\n    public SmartLamp(String name, int brightness) {\n        super(name);\n        this.brightness = brightness;\n    }\n    @Override\n    public void increase() {\n        if (brightness + 10 <= 100) brightness += 10;\n        else brightness = 100;\n    }\n    @Override\n    public void decrease() {\n        if (brightness - 10 >= 0) brightness -= 10;\n        else brightness = 0;\n    }\n    @Override\n    public String getStatus() {\n        return name + \" holati: Yorug'lik \" + brightness + \"%\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice lamp = new SmartLamp(\"Ish stoli lampasi\", 50);\n        lamp.increase();\n        System.out.println(lamp.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartLamp extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "17. SmartLamp — Yorug'likni Kamaytirish (decrease) Cheklovi",
      "en": "17. SmartLamp — Overriding decrease() with Minimum Bound"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nSmartLamp da 'decrease()' yorug'likni -10% ga kamaytiradi, lekin u 0% dan pastga tushib ketmasligi shart. Metodni qayta aniqlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartLamp' voris sinfini tuzing va unda 'decrease()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nTungi chiroq holati: Yorug'lik 0%",
      "en": "🏢 Context: Uzum Smart\n\nOverride decrease() ensuring brightness decreases by 10% without dropping below 0%.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartLamp' extending 'SmartDevice' and override 'decrease()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nTungi chiroq holati: Yorug'lik 0%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "decrease"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartLamp sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice lamp = new SmartLamp(\"Tungi chiroq\", 10);\n        lamp.decrease();\n        lamp.decrease();\n        System.out.println(lamp.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness;\n    public SmartLamp(String name, int brightness) {\n        super(name);\n        this.brightness = brightness;\n    }\n    @Override\n    public void increase() {\n        if (brightness + 10 <= 100) brightness += 10;\n        else brightness = 100;\n    }\n    @Override\n    public void decrease() {\n        if (brightness - 10 >= 0) brightness -= 10;\n        else brightness = 0;\n    }\n    @Override\n    public String getStatus() {\n        return name + \" holati: Yorug'lik \" + brightness + \"%\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice lamp = new SmartLamp(\"Tungi chiroq\", 10);\n        lamp.decrease();\n        lamp.decrease();\n        System.out.println(lamp.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartLamp extends SmartDevice {\n    @Override\n    public void decrease() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>decrease()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "18. Thermostat — Haroratni Oshirish (increase) Overridingi",
      "en": "18. Thermostat — Temperature Increment Overriding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nTermostatda 'increase()' buyrug'i berilganda harorat +1°C ga ko'tariladi (maksimal 30°C). 'Thermostat' voris sinfida metodni to'liq moslang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'Thermostat' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nZal termostati holati: Harorat 25°C",
      "en": "🏢 Context: Artel Smart\n\nOverride increase() in Thermostat to raise target temperature by 1C with 30C cap.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'Thermostat' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nZal termostati holati: Harorat 25°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Thermostat",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va Thermostat sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice term = new Thermostat(\"Zal termostati\", 24);\n        term.increase();\n        System.out.println(term.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass Thermostat extends SmartDevice {\n    private int targetTemp;\n    public Thermostat(String name, int temp) {\n        super(name);\n        this.targetTemp = temp;\n    }\n    @Override\n    public void increase() {\n        if (targetTemp < 30) targetTemp++;\n    }\n    @Override\n    public void decrease() {\n        if (targetTemp > 16) targetTemp--;\n    }\n    @Override\n    public String getStatus() {\n        return name + \" holati: \" + targetTemp + \"°C\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice term = new Thermostat(\"Zal termostati\", 24);\n        term.increase();\n        System.out.println(term.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class Thermostat extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "19. Thermostat — Haroratni Pasaytirish (decrease) Cheklovi",
      "en": "19. Thermostat — Temperature Decrement with Safe Lower Limit"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nTermostatda 'decrease()' buyrug'i haroratni -1°C ga pasaytiradi (minimal 16°C dan tushmaydi). '@Override' orqali bajaring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'Thermostat' voris sinfini tuzing va unda 'decrease()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nYotoqxona holati: Harorat 16°C",
      "en": "🏢 Context: Artel Smart\n\nOverride decrease() in Thermostat with minimum 16C threshold protection.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'Thermostat' extending 'SmartDevice' and override 'decrease()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nYotoqxona holati: Harorat 16°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Thermostat",
        "Main"
      ],
      "methods": [
        "decrease"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va Thermostat sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice term = new Thermostat(\"Yotoqxona\", 17);\n        term.decrease();\n        term.decrease();\n        System.out.println(term.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass Thermostat extends SmartDevice {\n    private int targetTemp;\n    public Thermostat(String name, int temp) {\n        super(name);\n        this.targetTemp = temp;\n    }\n    @Override\n    public void increase() {\n        if (targetTemp < 30) targetTemp++;\n    }\n    @Override\n    public void decrease() {\n        if (targetTemp > 16) targetTemp--;\n    }\n    @Override\n    public String getStatus() {\n        return name + \" holati: \" + targetTemp + \"°C\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice term = new Thermostat(\"Yotoqxona\", 17);\n        term.decrease();\n        term.decrease();\n        System.out.println(term.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class Thermostat extends SmartDevice {\n    @Override\n    public void decrease() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>decrease()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "20. SmartSpeaker — Ovoz Balandligini Oshirish (increase)",
      "en": "20. SmartSpeaker — Volume Increment Overriding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\nAqlli karnayda 'increase()' ovoz darajasini +5 birlikka oshiradi (maksimal 100). 'SmartSpeaker' da metodni qayta yozing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartSpeaker' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nYandex Mini holati: Ovoz 40%",
      "en": "🏢 Context: Yandex Smart\n\nOverride increase() in SmartSpeaker incrementing audio volume by 5 up to 100 max.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartSpeaker' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nYandex Mini holati: Ovoz 40%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartSpeaker sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Yandex Mini\", 35);\n        spk.increase();\n        System.out.println(spk.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    private int level = 50;\n    public SmartSpeaker(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartSpeaker(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Yandex Mini\", 35);\n        spk.increase();\n        System.out.println(spk.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartSpeaker extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 21,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "21. SmartSpeaker — Ovozni Pasaytirish (decrease) va Jimjitlik",
      "en": "21. SmartSpeaker — Volume Decrement and Mute State"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\nAqlli karnayda 'decrease()' ovoz darajasini -5 ga tushiradi (0 ga yetganda 'Ovoz o'chiq' deb ko'rsatiladi).\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartSpeaker' voris sinfini tuzing va unda 'decrease()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nKarnay holati: Ovoz 0% (Ovoz o'chiq)",
      "en": "🏢 Context: Yandex Smart\n\nOverride decrease() in SmartSpeaker reducing volume by 5, showing Muted at 0.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartSpeaker' extending 'SmartDevice' and override 'decrease()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nKarnay holati: Ovoz 0% (Ovoz o'chiq)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "decrease"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartSpeaker sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Karnay\", 5);\n        spk.decrease();\n        System.out.println(spk.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    private int level = 50;\n    public SmartSpeaker(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartSpeaker(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Karnay\", 5);\n        spk.decrease();\n        System.out.println(spk.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartSpeaker extends SmartDevice {\n    @Override\n    public void decrease() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>decrease()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 22,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "22. RobotVacuum — Quvvat Rejimini Oshirish (Eco -> Turbo)",
      "en": "22. RobotVacuum — Overriding increase() for Suction Modes"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Smart\n\nRobot changyutgichda 'increase()' tortish quvvatini bosqichma-bosqich oshiradi: 'Standart' dan 'Turbo' ga o'tkazadi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'RobotVacuum' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nDreame D9 holati: Rejim Turbo",
      "en": "🏢 Context: Texnomart Smart\n\nOverride increase() to switch robotic vacuum suction power from Standard to Turbo.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'RobotVacuum' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nDreame D9 holati: Rejim Turbo"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "RobotVacuum",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va RobotVacuum sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice vac = new RobotVacuum(\"Dreame D9\", \"Standart\");\n        vac.increase();\n        System.out.println(vac.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass RobotVacuum extends SmartDevice {\n    private int level = 50;\n    public RobotVacuum(String name, int lvl) { super(name); this.level = lvl; }\n    public RobotVacuum(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice vac = new RobotVacuum(\"Dreame D9\", \"Standart\");\n        vac.increase();\n        System.out.println(vac.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class RobotVacuum extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 23,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "23. SmartAirConditioner — Ventilyator Tezligini Oshirish",
      "en": "23. SmartAirConditioner — Fan Speed Step Increment"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nArtel konditsionerida 'increase()' ventilyator tezligini 1-darajadan 2-darajaga (maksimal 3) oshiradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartAirConditioner' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nInverter-12 holati: Ventilyator 2-tezlik",
      "en": "🏢 Context: Artel Smart\n\nOverride increase() in SmartAirConditioner advancing fan speed level up to 3.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartAirConditioner' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nInverter-12 holati: Ventilyator 2-tezlik"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartAirConditioner",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartAirConditioner sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice ac = new SmartAirConditioner(\"Inverter-12\", 1);\n        ac.increase();\n        System.out.println(ac.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartAirConditioner extends SmartDevice {\n    private int level = 50;\n    public SmartAirConditioner(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartAirConditioner(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice ac = new SmartAirConditioner(\"Inverter-12\", 1);\n        ac.increase();\n        System.out.println(ac.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartAirConditioner extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 24,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "24. SmartKettle — Haroratni 100°C Qaynatishgacha Ko'tarish",
      "en": "24. SmartKettle — Overriding increase() up to 100C"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tezkor\n\nAqlli choynakda 'increase()' harorat sozlamasini +10°C ga oshiradi (80°C dan 90°C ga).\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartKettle' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nMijia Smart holati: Harorat 90°C",
      "en": "🏢 Context: Uzum Tezkor\n\nOverride increase() in SmartKettle stepping target boil temperature by +10C.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartKettle' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nMijia Smart holati: Harorat 90°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartKettle",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartKettle sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice kettle = new SmartKettle(\"Mijia Smart\", 80);\n        kettle.increase();\n        System.out.println(kettle.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartKettle extends SmartDevice {\n    private int level = 50;\n    public SmartKettle(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartKettle(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice kettle = new SmartKettle(\"Mijia Smart\", 80);\n        kettle.increase();\n        System.out.println(kettle.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartKettle extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 25,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "25. SmartCurtain — Pardani Bosqichma-bosqich Yopish (decrease)",
      "en": "25. SmartCurtain — Stepwise Curtain Closing"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SmartHome OS\n\nAqlli pardada 'decrease()' buyrug'i ochilish foizini -25% ga kamaytiradi (100% dan 75% ga).\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartCurtain' voris sinfini tuzing va unda 'decrease()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nZal Pardasi holati: Ochiqlik 75%",
      "en": "🏢 Context: SmartHome OS\n\nOverride decrease() in SmartCurtain lowering aperture by 25%.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartCurtain' extending 'SmartDevice' and override 'decrease()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nZal Pardasi holati: Ochiqlik 75%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartCurtain",
        "Main"
      ],
      "methods": [
        "decrease"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartCurtain sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice curtain = new SmartCurtain(\"Zal Pardasi\", 100);\n        curtain.decrease();\n        System.out.println(curtain.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartCurtain extends SmartDevice {\n    private int level = 50;\n    public SmartCurtain(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartCurtain(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice curtain = new SmartCurtain(\"Zal Pardasi\", 100);\n        curtain.decrease();\n        System.out.println(curtain.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartCurtain extends SmartDevice {\n    @Override\n    public void decrease() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>decrease()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 26,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "26. SecurityCamera — Kattalashtirish (Zoom) Darajasini Oshirish",
      "en": "26. SecurityCamera — Optical Zoom Step Increment"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SafeCity\n\nKuzatuv kamerasida 'increase()' optik kattalashtirish (Zoom) koeffitsiyentini +1x ga (1x dan 2x ga) oshiradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SecurityCamera' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nDarvoza kamerasi holati: Zoom 2x",
      "en": "🏢 Context: SafeCity\n\nOverride increase() in SecurityCamera advancing optical zoom level by 1x.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SecurityCamera' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nDarvoza kamerasi holati: Zoom 2x"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SecurityCamera",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SecurityCamera sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice cam = new SecurityCamera(\"Darvoza kamerasi\", 1);\n        cam.increase();\n        System.out.println(cam.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SecurityCamera extends SmartDevice {\n    private int level = 50;\n    public SecurityCamera(String name, int lvl) { super(name); this.level = lvl; }\n    public SecurityCamera(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice cam = new SecurityCamera(\"Darvoza kamerasi\", 1);\n        cam.increase();\n        System.out.println(cam.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SecurityCamera extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 27,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "27. SmartFridge — Tezkor Muzlatish Rejimini Faollashtirish",
      "en": "27. SmartFridge — Super Freeze Overriding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Smart\n\nAqlli sovutgichda 'increase()' sovutish quvvatini oshirib, haroratni -18°C dan 'Tezkor Muzlatish (-24°C)' ga o'tkazadi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartFridge' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nKorzinka Muzlatgich holati: Muzlatish -24°C",
      "en": "🏢 Context: Korzinka Smart\n\nOverride increase() in SmartFridge stepping into Super Freeze mode at -24C.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartFridge' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nKorzinka Muzlatgich holati: Muzlatish -24°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartFridge",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartFridge sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice fridge = new SmartFridge(\"Korzinka Muzlatgich\", -18);\n        fridge.increase();\n        System.out.println(fridge.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartFridge extends SmartDevice {\n    private int level = 50;\n    public SmartFridge(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartFridge(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice fridge = new SmartFridge(\"Korzinka Muzlatgich\", -18);\n        fridge.increase();\n        System.out.println(fridge.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartFridge extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 28,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "28. SmartIrrigation — Suv Sarfini Oshirish (decrease -> increase)",
      "en": "28. SmartIrrigation — Irrigation Duration Increment"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: EcoHome\n\nSug'orish datchigida 'increase()' berilganda sug'orish davomiyligi +5 daqiqaga oshadi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartIrrigation' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nGulzor klapani holati: Vaqt 15 daqiqa",
      "en": "🏢 Context: EcoHome\n\nOverride increase() in SmartIrrigation extending active watering duration by 5 minutes.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartIrrigation' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nGulzor klapani holati: Vaqt 15 daqiqa"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartIrrigation",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartIrrigation sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice irr = new SmartIrrigation(\"Gulzor klapani\", 10);\n        irr.increase();\n        System.out.println(irr.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartIrrigation extends SmartDevice {\n    private int level = 50;\n    public SmartIrrigation(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartIrrigation(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice irr = new SmartIrrigation(\"Gulzor klapani\", 10);\n        irr.increase();\n        System.out.println(irr.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartIrrigation extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 29,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "29. SmartTV — Ovoz Darajasini Oshirish (Volume Up)",
      "en": "29. SmartTV — Volume Level Stepping"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Mediapark\n\nSmartTV da 'increase()' ovozni +2 ga oshiradi. 'SmartTV' voris sinfida metodni to'liq moslang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartTV' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nArtel SmartTV holati: Ovoz 16",
      "en": "🏢 Context: Mediapark\n\nOverride increase() in SmartTV advancing volume level by 2 increments.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartTV' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nArtel SmartTV holati: Ovoz 16"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartTV",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartTV sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice tv = new SmartTV(\"Artel SmartTV\", 14);\n        tv.increase();\n        System.out.println(tv.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartTV extends SmartDevice {\n    private int level = 50;\n    public SmartTV(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartTV(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice tv = new SmartTV(\"Artel SmartTV\", 14);\n        tv.increase();\n        System.out.println(tv.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartTV extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 30,
    "tier": 2,
    "tierName": "2-Bosqich: Metodlarni Qayta Aniqlash (Method Overriding) va @Override",
    "sector": "16-30: Method Overriding & Dynamic Dispatch",
    "title": {
      "uz": "30. SmartHeater — Isitish Quvvatini Oshirish (1000W -> 2000W)",
      "en": "30. SmartHeater — Wattage Level Step"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: GreenHouse\n\nAqlli isitgichda 'increase()' quvvatni 1000W dan 2000W ga o'zgartiradi. Superklass havolasi orqali polimorfik tekshiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' bazaviy sinfini yarating va unga 'increase()', 'decrease()' hamda 'getStatus()' metodlarini bering.\n2. 'SmartHeater' voris sinfini tuzing va unda 'increase()' metodini '@Override' bilan qayta yozing.\n3. Qurilmaga xos parametrlarni (yorug'lik foizi, harorat yoki hajm) hisoblang.\n4. 'Main' sinfida ob'yektni yarating va metodni chaqiring.\n5. Holatni ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nBosh isitgich holati: Quvvat 2000W",
      "en": "🏢 Context: GreenHouse\n\nOverride increase() in SmartHeater switching heating element from 1000W to 2000W.\n\n🎯 STEPS:\n1. Create base 'SmartDevice' class with default adjustment methods.\n2. Implement 'SmartHeater' extending 'SmartDevice' and override 'increase()' using '@Override'.\n3. Adjust device-specific state (brightness, temperature, volume) within safe limits.\n4. In 'Main', invoke the overridden method.\n5. Print updated status to console.\n\n📊 Expected Output:\nBosh isitgich holati: Quvvat 2000W"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHeater",
        "Main"
      ],
      "methods": [
        "increase"
      ],
      "keywords": [
        "@Override",
        "extends"
      ]
    },
    "starterCode": "// SmartDevice va SmartHeater sinflarida @Override bilan metodlarni qayta aniqlang\nclass SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice heater = new SmartHeater(\"Bosh isitgich\", 1000);\n        heater.increase();\n        System.out.println(heater.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String name) { this.name = name; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHeater extends SmartDevice {\n    private int level = 50;\n    public SmartHeater(String name, int lvl) { super(name); this.level = lvl; }\n    public SmartHeater(String name) { super(name); }\n    @Override\n    public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override\n    public void decrease() { if (level - 10 >= 0) level -= 10; }\n    @Override\n    public String getStatus() { return name + \" holati: Daraja \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice heater = new SmartHeater(\"Bosh isitgich\", 1000);\n        heater.increase();\n        System.out.println(heater.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overriding — voris sinfda superklassdan meros olingan metodni o'ziga xos tarzda qayta yozishidir. Imzosi (nomi va parametrlari) aynan bir xil bo'lishi shart. JVM ish vaqtida haqiqiy ob'yekt turiga qarab metodni dinamik tanlaydi.",
      "cleanCode": "class SmartHeater extends SmartDevice {\n    @Override\n    public void increase() { ... }\n}",
      "breakdown": [
        "<code>@Override</code> annotatsiyasi: kompilyator metod imzosi to'g'riligini tekshiradi.",
        "<code>increase()</code>: qurilmaga xos o'zgarishlarni kiritadi.",
        "Dinamik dispatch: superklass havolasi orqali subklass metodi chaqiriladi."
      ]
    }
  },
  {
    "id": 31,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "31. SmartLamp — Taymer bilan Yoqish (turnOn Overload)",
      "en": "31. SmartLamp — Overloading turnOn with Duration Timer"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nWIUT 7-leksiyasida aytilganidek: 'Method Overloading bir xil nomli metodlarga turlicha parametrlar berish imkonini yaratadi'. SmartLamp da 'turnOn()' parametrsiz yoqsa, 'turnOn(int minutes)' belgilangan daqiqa taymeri bilan yoqadi.\n\n🎯 QADAMLAR:\n1. 'SmartLamp' sinfini e'lon qiling.\n2. Unda 'turnOn' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nYo'lak chirog'i 30 daqiqaga yoqildi",
      "en": "🏢 Context: Uzum Smart\n\nOverload turnOn() in SmartLamp with an integer duration parameter indicating timer shutdown.\n\n🎯 STEPS:\n1. Declare class 'SmartLamp'.\n2. Define multiple overloaded versions of 'turnOn' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nYo'lak chirog'i 30 daqiqaga yoqildi"
    },
    "requirements": {
      "classes": [
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// SmartLamp sinfida 'turnOn' metodini turli parametrlar bilan overload qiling\nclass SmartLamp {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLamp lamp = new SmartLamp(\"Yo'lak chirog'i\");\n        System.out.println(lamp.turnOn(30));\n    }\n}",
    "solution": "class SmartLamp {\n    private String name;\n    public SmartLamp(String name) { this.name = name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOn(int minutes) { return name + \" \" + minutes + \" daqiqaga yoqildi\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLamp lamp = new SmartLamp(\"Yo'lak chirog'i\");\n        System.out.println(lamp.turnOn(30));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SmartLamp {\n    public String turnOn(...) { ... }\n    public String turnOn(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>turnOn</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 32,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "32. SmartSpeaker — Ovozni Sozlash (Daraja yoki Preset nomi)",
      "en": "32. SmartSpeaker — Overloading setVolume by Level and Preset"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\nSmartSpeaker da 'setVolume(int level)' sonli qiymat olsa, 'setVolume(String preset)' ('tungi', 'parti') matnli rejimni o'rnatadi. Parametr turi bo'yicha overload qiling.\n\n🎯 QADAMLAR:\n1. 'SmartSpeaker' sinfini e'lon qiling.\n2. Unda 'setVolume' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nStansiya Max ovozi 'tungi' rejimiga o'rnatildi (15%)",
      "en": "🏢 Context: Yandex Smart\n\nOverload setVolume() taking either numeric integer level or String preset identifier.\n\n🎯 STEPS:\n1. Declare class 'SmartSpeaker'.\n2. Define multiple overloaded versions of 'setVolume' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nStansiya Max ovozi 'tungi' rejimiga o'rnatildi (15%)"
    },
    "requirements": {
      "classes": [
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "setVolume"
      ]
    },
    "starterCode": "// SmartSpeaker sinfida 'setVolume' metodini turli parametrlar bilan overload qiling\nclass SmartSpeaker {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartSpeaker spk = new SmartSpeaker(\"Stansiya Max\");\n        System.out.println(spk.setVolume(\"tungi\"));\n    }\n}",
    "solution": "class SmartSpeaker {\n    private String name;\n    public SmartSpeaker(String name) { this.name = name; }\n    public String setVolume(int level) { return name + \" ovozi: \" + level + \"%\"; }\n    public String setVolume(String preset) {\n        int lvl = preset.equals(\"tungi\") ? 15 : (preset.equals(\"parti\") ? 90 : 50);\n        return name + \" ovozi '\" + preset + \"' rejimiga o'rnatildi (\" + lvl + \"%)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartSpeaker spk = new SmartSpeaker(\"Stansiya Max\");\n        System.out.println(spk.setVolume(\"tungi\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SmartSpeaker {\n    public String setVolume(...) { ... }\n    public String setVolume(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>setVolume</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 33,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "33. Thermostat — Haroratni O'rnatish (Selsiy yoki Farengeyt)",
      "en": "33. Thermostat — Overloading setTargetTemperature with Scale"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nTermostatda 'setTemperature(double celsius)' standart qabul qilsa, 'setTemperature(double val, boolean isFahrenheit)' Farengeyt shkalasidan Selsiyga o'giradi.\n\n🎯 QADAMLAR:\n1. 'SmartThermostat' sinfini e'lon qiling.\n2. Unda 'setTemperature' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nOfis termostati harorati 25.0°C ga o'rnatildi",
      "en": "🏢 Context: Artel Smart\n\nOverload setTemperature() with boolean scale flag converting Fahrenheit to Celsius.\n\n🎯 STEPS:\n1. Declare class 'SmartThermostat'.\n2. Define multiple overloaded versions of 'setTemperature' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nOfis termostati harorati 25.0°C ga o'rnatildi"
    },
    "requirements": {
      "classes": [
        "SmartThermostat",
        "Main"
      ],
      "methods": [
        "setTemperature"
      ]
    },
    "starterCode": "// SmartThermostat sinfida 'setTemperature' metodini turli parametrlar bilan overload qiling\nclass SmartThermostat {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartThermostat t = new SmartThermostat(\"Ofis termostati\");\n        System.out.println(t.setTemperature(77.0, true));\n    }\n}",
    "solution": "class SmartThermostat {\n    private String name;\n    public SmartThermostat(String name) { this.name = name; }\n    public String setTemperature(double celsius) {\n        return name + \" harorati \" + celsius + \"°C ga o'rnatildi\";\n    }\n    public String setTemperature(double val, boolean isFahrenheit) {\n        double c = isFahrenheit ? Math.round(((val - 32.0) * 5.0 / 9.0) * 10.0) / 10.0 : val;\n        return name + \" harorati \" + c + \"°C ga o'rnatildi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartThermostat t = new SmartThermostat(\"Ofis termostati\");\n        System.out.println(t.setTemperature(77.0, true));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SmartThermostat {\n    public String setTemperature(...) { ... }\n    public String setTemperature(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>setTemperature</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 34,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "34. Payme Gateway — Tranzaksiya To'lovi (Karta yoki Hamyon)",
      "en": "34. Payme Gateway — Overloading pay by Card vs Wallet ID"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme\n\nPayme to'lov shlyuzida 'processPayment(double amount)' to'g'ridan-to'g'ri yechsa, 'processPayment(double amount, String promoCode)' promokodli chegirmali to'lovni bajaradi.\n\n🎯 QADAMLAR:\n1. 'PaymentGateway' sinfini e'lon qiling.\n2. Unda 'processPayment' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nTo'lov muvaffaqiyatli: 80000.0 UZS (Chegirma: PAYME20)",
      "en": "🏢 Context: Payme\n\nOverload processPayment() taking an optional discount promotional voucher.\n\n🎯 STEPS:\n1. Declare class 'PaymentGateway'.\n2. Define multiple overloaded versions of 'processPayment' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nTo'lov muvaffaqiyatli: 80000.0 UZS (Chegirma: PAYME20)"
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "Main"
      ],
      "methods": [
        "processPayment"
      ]
    },
    "starterCode": "// PaymentGateway sinfida 'processPayment' metodini turli parametrlar bilan overload qiling\nclass PaymentGateway {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new PaymentGateway();\n        System.out.println(gw.processPayment(100000.0, \"PAYME20\"));\n    }\n}",
    "solution": "class PaymentGateway {\n    private String name;\n    public PaymentGateway(String name) { this.name = name; }\n    public String processPayment() { return name + \" standart buyruq\"; }\n    public String processPayment(String opt) { return name + \" sozlandi: \" + opt; }\n    public String processPayment(int val) { return name + \" qiymat: \" + val; }\n    public String processPayment(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new PaymentGateway();\n        System.out.println(gw.processPayment(100000.0, \"PAYME20\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class PaymentGateway {\n    public String processPayment(...) { ... }\n    public String processPayment(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>processPayment</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 35,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "35. Uzum Tezkor — Yetkazib Berish Narxi (Masofa va Ob-havo)",
      "en": "35. Uzum Tezkor — Overloaded Delivery Cost with Weather Multiplier"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tezkor\n\nYetkazib berish kalkulyatorida 'calculateDelivery(double km)' standart hisoblasa, 'calculateDelivery(double km, boolean isRainy)' yomg'irli koeffitsiyentni qo'shadi.\n\n🎯 QADAMLAR:\n1. 'DeliveryFeeCalculator' sinfini e'lon qiling.\n2. Unda 'calculateDelivery' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\n21000.0 UZS",
      "en": "🏢 Context: Uzum Tezkor\n\nOverload calculateDelivery() taking distance alone or with inclement weather condition.\n\n🎯 STEPS:\n1. Declare class 'DeliveryFeeCalculator'.\n2. Define multiple overloaded versions of 'calculateDelivery' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\n21000.0 UZS"
    },
    "requirements": {
      "classes": [
        "DeliveryFeeCalculator",
        "Main"
      ],
      "methods": [
        "calculateDelivery"
      ]
    },
    "starterCode": "// DeliveryFeeCalculator sinfida 'calculateDelivery' metodini turli parametrlar bilan overload qiling\nclass DeliveryFeeCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryFeeCalculator calc = new DeliveryFeeCalculator();\n        System.out.println(calc.calculateDelivery(5.0, true) + \" UZS\");\n    }\n}",
    "solution": "class DeliveryFeeCalculator {\n    private String name;\n    public DeliveryFeeCalculator(String name) { this.name = name; }\n    public String calculateDelivery() { return name + \" standart buyruq\"; }\n    public String calculateDelivery(String opt) { return name + \" sozlandi: \" + opt; }\n    public String calculateDelivery(int val) { return name + \" qiymat: \" + val; }\n    public String calculateDelivery(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryFeeCalculator calc = new DeliveryFeeCalculator();\n        System.out.println(calc.calculateDelivery(5.0, true) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class DeliveryFeeCalculator {\n    public String calculateDelivery(...) { ... }\n    public String calculateDelivery(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>calculateDelivery</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 36,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "36. RobotVacuum — Hududiy Tozalash (Xona nomi yoki Koordinata)",
      "en": "36. RobotVacuum — Clean Zone by Name vs Coordinates"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Smart\n\nRobot changyutgichda 'cleanZone(String roomName)' berilsa nom bo'yicha, 'cleanZone(int x, int y, int width, int height)' koordinatalar bo'yicha tozalaydi.\n\n🎯 QADAMLAR:\n1. 'SmartVacuum' sinfini e'lon qiling.\n2. Unda 'cleanZone' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMi Robot Oshxona zonasini tozalashga yo'l oldi",
      "en": "🏢 Context: Texnomart Smart\n\nOverload cleanZone() accepting either named room or coordinate bounding box.\n\n🎯 STEPS:\n1. Declare class 'SmartVacuum'.\n2. Define multiple overloaded versions of 'cleanZone' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nMi Robot Oshxona zonasini tozalashga yo'l oldi"
    },
    "requirements": {
      "classes": [
        "SmartVacuum",
        "Main"
      ],
      "methods": [
        "cleanZone"
      ]
    },
    "starterCode": "// SmartVacuum sinfida 'cleanZone' metodini turli parametrlar bilan overload qiling\nclass SmartVacuum {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartVacuum vac = new SmartVacuum(\"Mi Robot\");\n        System.out.println(vac.cleanZone(\"Oshxona\"));\n    }\n}",
    "solution": "class SmartVacuum {\n    private String name;\n    public SmartVacuum(String name) { this.name = name; }\n    public String cleanZone() { return name + \" standart buyruq\"; }\n    public String cleanZone(String opt) { return name + \" sozlandi: \" + opt; }\n    public String cleanZone(int val) { return name + \" qiymat: \" + val; }\n    public String cleanZone(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartVacuum vac = new SmartVacuum(\"Mi Robot\");\n        System.out.println(vac.cleanZone(\"Oshxona\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SmartVacuum {\n    public String cleanZone(...) { ... }\n    public String cleanZone(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>cleanZone</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 37,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "37. Click Transfer — P2P O'tkazma (Karta raqami yoki Telefon)",
      "en": "37. Click Transfer — Overloaded Transfer by Card or Phone"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click\n\nClick tizimida 'sendMoney(String cardNumber, double sum)' karta orqali, 'sendMoney(long phoneNumber, double sum)' telefon raqam orqali pul o'tkazadi.\n\n🎯 QADAMLAR:\n1. 'ClickTransferService' sinfini e'lon qiling.\n2. Unda 'sendMoney' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nTelefon 998901234567 ga 50000.0 UZS o'tkazildi",
      "en": "🏢 Context: Click\n\nOverload sendMoney() distinguishing between 16-digit card String and numeric phone identifier.\n\n🎯 STEPS:\n1. Declare class 'ClickTransferService'.\n2. Define multiple overloaded versions of 'sendMoney' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nTelefon 998901234567 ga 50000.0 UZS o'tkazildi"
    },
    "requirements": {
      "classes": [
        "ClickTransferService",
        "Main"
      ],
      "methods": [
        "sendMoney"
      ]
    },
    "starterCode": "// ClickTransferService sinfida 'sendMoney' metodini turli parametrlar bilan overload qiling\nclass ClickTransferService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickTransferService svc = new ClickTransferService();\n        System.out.println(svc.sendMoney(998901234567L, 50000.0));\n    }\n}",
    "solution": "class ClickTransferService {\n    private String name;\n    public ClickTransferService(String name) { this.name = name; }\n    public String sendMoney() { return name + \" standart buyruq\"; }\n    public String sendMoney(String opt) { return name + \" sozlandi: \" + opt; }\n    public String sendMoney(int val) { return name + \" qiymat: \" + val; }\n    public String sendMoney(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickTransferService svc = new ClickTransferService();\n        System.out.println(svc.sendMoney(998901234567L, 50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class ClickTransferService {\n    public String sendMoney(...) { ... }\n    public String sendMoney(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>sendMoney</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 38,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "38. Mediapark TV — Kanalni O'zgartirish (Raqam yoki Kanal nomi)",
      "en": "38. Mediapark TV — Channel Switching by Number or Station Name"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Mediapark\n\nAqlli televizorda 'changeChannel(int number)' kanal raqamini tanlasa, 'changeChannel(String name)' kanal nomi orqali qidirib ulaydi.\n\n🎯 QADAMLAR:\n1. 'SmartTelevision' sinfini e'lon qiling.\n2. Unda 'changeChannel' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nSony Bravia kanali 'Sport TV' ga ulandi",
      "en": "🏢 Context: Mediapark\n\nOverload changeChannel() accepting numeric channel index or channel title String.\n\n🎯 STEPS:\n1. Declare class 'SmartTelevision'.\n2. Define multiple overloaded versions of 'changeChannel' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nSony Bravia kanali 'Sport TV' ga ulandi"
    },
    "requirements": {
      "classes": [
        "SmartTelevision",
        "Main"
      ],
      "methods": [
        "changeChannel"
      ]
    },
    "starterCode": "// SmartTelevision sinfida 'changeChannel' metodini turli parametrlar bilan overload qiling\nclass SmartTelevision {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartTelevision tv = new SmartTelevision(\"Sony Bravia\");\n        System.out.println(tv.changeChannel(\"Sport TV\"));\n    }\n}",
    "solution": "class SmartTelevision {\n    private String name;\n    public SmartTelevision(String name) { this.name = name; }\n    public String changeChannel() { return name + \" standart buyruq\"; }\n    public String changeChannel(String opt) { return name + \" sozlandi: \" + opt; }\n    public String changeChannel(int val) { return name + \" qiymat: \" + val; }\n    public String changeChannel(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartTelevision tv = new SmartTelevision(\"Sony Bravia\");\n        System.out.println(tv.changeChannel(\"Sport TV\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SmartTelevision {\n    public String changeChannel(...) { ... }\n    public String changeChannel(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>changeChannel</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 39,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "39. Korzinka Go — Chegirma Hisoblash (Kupon yoki Bonus ball)",
      "en": "39. Korzinka Go — Overloaded Discount Calculation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Go\n\nKorzinka savatida 'applyDiscount(double percent)' foiz chegirma beradi, 'applyDiscount(int bonusPoints)' bonus ballarni pulga tenglashtiradi.\n\n🎯 QADAMLAR:\n1. 'CartDiscountCalculator' sinfini e'lon qiling.\n2. Unda 'applyDiscount' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\n195000.0 UZS",
      "en": "🏢 Context: Korzinka Go\n\nOverload applyDiscount() handling percentage double vs integer loyalty points.\n\n🎯 STEPS:\n1. Declare class 'CartDiscountCalculator'.\n2. Define multiple overloaded versions of 'applyDiscount' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\n195000.0 UZS"
    },
    "requirements": {
      "classes": [
        "CartDiscountCalculator",
        "Main"
      ],
      "methods": [
        "applyDiscount"
      ]
    },
    "starterCode": "// CartDiscountCalculator sinfida 'applyDiscount' metodini turli parametrlar bilan overload qiling\nclass CartDiscountCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CartDiscountCalculator calc = new CartDiscountCalculator();\n        System.out.println(calc.applyDiscount(200000.0, 5000) + \" UZS\");\n    }\n}",
    "solution": "class CartDiscountCalculator {\n    private String name;\n    public CartDiscountCalculator(String name) { this.name = name; }\n    public String applyDiscount() { return name + \" standart buyruq\"; }\n    public String applyDiscount(String opt) { return name + \" sozlandi: \" + opt; }\n    public String applyDiscount(int val) { return name + \" qiymat: \" + val; }\n    public String applyDiscount(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CartDiscountCalculator calc = new CartDiscountCalculator();\n        System.out.println(calc.applyDiscount(200000.0, 5000) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class CartDiscountCalculator {\n    public String applyDiscount(...) { ... }\n    public String applyDiscount(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>applyDiscount</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 40,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "40. SafeCity Camera — Tasvirni Saqlash (Format va Aniqlik)",
      "en": "40. SafeCity Camera — Capture Snapshot with Resolution Presets"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SafeCity\n\nKamera 'captureSnapshot()' standart kadr olsa, 'captureSnapshot(String quality, String format)' ('4K', 'PNG') yuqori aniqlikda rasmga oladi.\n\n🎯 QADAMLAR:\n1. 'SurveillanceCamera' sinfini e'lon qiling.\n2. Unda 'captureSnapshot' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMarkaziy kamera tasviri saqlandi: 4K (PNG)",
      "en": "🏢 Context: SafeCity\n\nOverload captureSnapshot() taking resolution and file extension formatting.\n\n🎯 STEPS:\n1. Declare class 'SurveillanceCamera'.\n2. Define multiple overloaded versions of 'captureSnapshot' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nMarkaziy kamera tasviri saqlandi: 4K (PNG)"
    },
    "requirements": {
      "classes": [
        "SurveillanceCamera",
        "Main"
      ],
      "methods": [
        "captureSnapshot"
      ]
    },
    "starterCode": "// SurveillanceCamera sinfida 'captureSnapshot' metodini turli parametrlar bilan overload qiling\nclass SurveillanceCamera {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SurveillanceCamera cam = new SurveillanceCamera(\"Markaziy kamera\");\n        System.out.println(cam.captureSnapshot(\"4K\", \"PNG\"));\n    }\n}",
    "solution": "class SurveillanceCamera {\n    private String name;\n    public SurveillanceCamera(String name) { this.name = name; }\n    public String captureSnapshot() { return name + \" standart buyruq\"; }\n    public String captureSnapshot(String opt) { return name + \" sozlandi: \" + opt; }\n    public String captureSnapshot(int val) { return name + \" qiymat: \" + val; }\n    public String captureSnapshot(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SurveillanceCamera cam = new SurveillanceCamera(\"Markaziy kamera\");\n        System.out.println(cam.captureSnapshot(\"4K\", \"PNG\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class SurveillanceCamera {\n    public String captureSnapshot(...) { ... }\n    public String captureSnapshot(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>captureSnapshot</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 41,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "41. SmartCurtain — Pardani Ochish (Foiz yoki Taymerli)",
      "en": "41. SmartCurtain — Open Curtain by Percentage or Time Delay"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: SmartHome OS\n\nPardani boshqarishda 'open(int percentage)' daraja bo'yicha ochsa, 'open(int percentage, int delayMinutes)' belgilangan daqiqadan keyin ochadi.\n\n🎯 QADAMLAR:\n1. 'MotorizedCurtain' sinfini e'lon qiling.\n2. Unda 'open' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nBalkon pardasi 15 daqiqadan so'ng 80% ochiladi",
      "en": "🏢 Context: SmartHome OS\n\nOverload open() taking opening percentage alone or with scheduled timer offset.\n\n🎯 STEPS:\n1. Declare class 'MotorizedCurtain'.\n2. Define multiple overloaded versions of 'open' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nBalkon pardasi 15 daqiqadan so'ng 80% ochiladi"
    },
    "requirements": {
      "classes": [
        "MotorizedCurtain",
        "Main"
      ],
      "methods": [
        "open"
      ]
    },
    "starterCode": "// MotorizedCurtain sinfida 'open' metodini turli parametrlar bilan overload qiling\nclass MotorizedCurtain {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MotorizedCurtain c = new MotorizedCurtain(\"Balkon pardasi\");\n        System.out.println(c.open(80, 15));\n    }\n}",
    "solution": "class MotorizedCurtain {\n    private String name;\n    public MotorizedCurtain(String name) { this.name = name; }\n    public String open() { return name + \" standart buyruq\"; }\n    public String open(String opt) { return name + \" sozlandi: \" + opt; }\n    public String open(int val) { return name + \" qiymat: \" + val; }\n    public String open(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MotorizedCurtain c = new MotorizedCurtain(\"Balkon pardasi\");\n        System.out.println(c.open(80, 15));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class MotorizedCurtain {\n    public String open(...) { ... }\n    public String open(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>open</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 42,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "42. SmartKettle — Qizdirish (Harorat yoki Choy turi)",
      "en": "42. SmartKettle — Heat by Temperature or Tea Variety"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tezkor\n\nChoynakda 'heatTo(int temp)' harorat berilsa, 'heatTo(String teaType)' ('ko'k choy' -> 80°C, 'qora choy' -> 95°C) choy turiga mos optimal darajani tanlaydi.\n\n🎯 QADAMLAR:\n1. 'ElectricKettle' sinfini e'lon qiling.\n2. Unda 'heatTo' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nSmartKettle 'ko'k choy' uchun 80°C ga qizdirilmoqda",
      "en": "🏢 Context: Uzum Tezkor\n\nOverload heatTo() accepting integer Celsius target or tea style string.\n\n🎯 STEPS:\n1. Declare class 'ElectricKettle'.\n2. Define multiple overloaded versions of 'heatTo' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nSmartKettle 'ko'k choy' uchun 80°C ga qizdirilmoqda"
    },
    "requirements": {
      "classes": [
        "ElectricKettle",
        "Main"
      ],
      "methods": [
        "heatTo"
      ]
    },
    "starterCode": "// ElectricKettle sinfida 'heatTo' metodini turli parametrlar bilan overload qiling\nclass ElectricKettle {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricKettle k = new ElectricKettle(\"SmartKettle\");\n        System.out.println(k.heatTo(\"ko'k choy\"));\n    }\n}",
    "solution": "class ElectricKettle {\n    private String name;\n    public ElectricKettle(String name) { this.name = name; }\n    public String heatTo() { return name + \" standart buyruq\"; }\n    public String heatTo(String opt) { return name + \" sozlandi: \" + opt; }\n    public String heatTo(int val) { return name + \" qiymat: \" + val; }\n    public String heatTo(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricKettle k = new ElectricKettle(\"SmartKettle\");\n        System.out.println(k.heatTo(\"ko'k choy\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class ElectricKettle {\n    public String heatTo(...) { ... }\n    public String heatTo(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>heatTo</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 43,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "43. SmartDoorLock — Qulfni Ochish (PIN-kod yoki NFC Karta)",
      "en": "43. SmartDoorLock — Unlock by PIN Code or RFID Tag"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Smart\n\nEshik qulfida 'unlock(int pinCode)' 4 xonali sonli kod bilan ochsa, 'unlock(String rfidTag)' elektron karta tekkizilganda ruxsat beradi.\n\n🎯 QADAMLAR:\n1. 'DigitalDoorLock' sinfini e'lon qiling.\n2. Unda 'unlock' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nKirish qulfi RFID-777 kartasi orqali ochildi",
      "en": "🏢 Context: Click Smart\n\nOverload unlock() method with numeric PIN versus cryptographic tag string.\n\n🎯 STEPS:\n1. Declare class 'DigitalDoorLock'.\n2. Define multiple overloaded versions of 'unlock' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nKirish qulfi RFID-777 kartasi orqali ochildi"
    },
    "requirements": {
      "classes": [
        "DigitalDoorLock",
        "Main"
      ],
      "methods": [
        "unlock"
      ]
    },
    "starterCode": "// DigitalDoorLock sinfida 'unlock' metodini turli parametrlar bilan overload qiling\nclass DigitalDoorLock {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalDoorLock lock = new DigitalDoorLock(\"Kirish qulfi\", 4321, \"RFID-777\");\n        System.out.println(lock.unlock(\"RFID-777\"));\n    }\n}",
    "solution": "class DigitalDoorLock {\n    private String name;\n    public DigitalDoorLock(String name) { this.name = name; }\n    public String unlock() { return name + \" standart buyruq\"; }\n    public String unlock(String opt) { return name + \" sozlandi: \" + opt; }\n    public String unlock(int val) { return name + \" qiymat: \" + val; }\n    public String unlock(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalDoorLock lock = new DigitalDoorLock(\"Kirish qulfi\", 4321, \"RFID-777\");\n        System.out.println(lock.unlock(\"RFID-777\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class DigitalDoorLock {\n    public String unlock(...) { ... }\n    public String unlock(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>unlock</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 44,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "44. EcoHome — Sug'orish Davomiyligi (Vaqt yoki Tuproq namligi)",
      "en": "44. EcoHome — Irrigate by Time or Moisture Target"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: EcoHome\n\nSug'orish tizimida 'water(int minutes)' vaqt bo'yicha sug'orsa, 'water(double targetMoisturePercent)' tuproq namligi yetguncha ishlaydi.\n\n🎯 QADAMLAR:\n1. 'IrrigationSystem' sinfini e'lon qiling.\n2. Unda 'water' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nBog' zonasi tuproq namligi 65.5% ga yetguncha sug'oriladi",
      "en": "🏢 Context: EcoHome\n\nOverload water() by minute timer or target soil moisture percentage.\n\n🎯 STEPS:\n1. Declare class 'IrrigationSystem'.\n2. Define multiple overloaded versions of 'water' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nBog' zonasi tuproq namligi 65.5% ga yetguncha sug'oriladi"
    },
    "requirements": {
      "classes": [
        "IrrigationSystem",
        "Main"
      ],
      "methods": [
        "water"
      ]
    },
    "starterCode": "// IrrigationSystem sinfida 'water' metodini turli parametrlar bilan overload qiling\nclass IrrigationSystem {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IrrigationSystem sys = new IrrigationSystem(\"Bog' zonasi\");\n        System.out.println(sys.water(65.5));\n    }\n}",
    "solution": "class IrrigationSystem {\n    private String name;\n    public IrrigationSystem(String name) { this.name = name; }\n    public String water() { return name + \" standart buyruq\"; }\n    public String water(String opt) { return name + \" sozlandi: \" + opt; }\n    public String water(int val) { return name + \" qiymat: \" + val; }\n    public String water(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IrrigationSystem sys = new IrrigationSystem(\"Bog' zonasi\");\n        System.out.println(sys.water(65.5));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class IrrigationSystem {\n    public String water(...) { ... }\n    public String water(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>water</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 45,
    "tier": 3,
    "tierName": "3-Bosqich: Metodlarni Haddan Tashqari Yuklash (Method Overloading)",
    "sector": "31-45: Method Overloading & Compile-Time Polymorphism",
    "title": {
      "uz": "45. SmartHeater — Isitish Rejimi (Quvvat yoki Mo'ljal Harorat)",
      "en": "45. SmartHeater — Heat by Wattage vs Room Temperature Target"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: GreenHouse\n\nElektr isitgichda 'heat(int wattage)' quvvat bilan qizdirsa, 'heat(double targetRoomTemp)' xona harorati yetguncha termostat nazoratida ushlaydi.\n\n🎯 QADAMLAR:\n1. 'ClimateHeater' sinfini e'lon qiling.\n2. Unda 'heat' nomli bir nechta metodlarni turlicha parametrlar bilan yozing (Method Overloading).\n3. Kompilyatsiya vaqtida argumentlar turi va soniga qarab to'g'ri metod tanlanishini tekshiring.\n4. 'Main' metodida mos parametr bilan chaqiruvni bajaring va natijani chop eting.\n\n📊 Kutilayotgan Natija:\nMoyli radiator xona 23.5°C bo'lguncha isitadi",
      "en": "🏢 Context: GreenHouse\n\nOverload heat() accepting raw electrical wattage or target room temperature threshold.\n\n🎯 STEPS:\n1. Declare class 'ClimateHeater'.\n2. Define multiple overloaded versions of 'heat' with different parameter lists.\n3. Verify that compiler selects appropriate overload based on argument types.\n4. Call the overloaded method in 'Main' and print output.\n\n📊 Expected Output:\nMoyli radiator xona 23.5°C bo'lguncha isitadi"
    },
    "requirements": {
      "classes": [
        "ClimateHeater",
        "Main"
      ],
      "methods": [
        "heat"
      ]
    },
    "starterCode": "// ClimateHeater sinfida 'heat' metodini turli parametrlar bilan overload qiling\nclass ClimateHeater {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClimateHeater h = new ClimateHeater(\"Moyli radiator\");\n        System.out.println(h.heat(23.5));\n    }\n}",
    "solution": "class ClimateHeater {\n    private String name;\n    public ClimateHeater(String name) { this.name = name; }\n    public String heat() { return name + \" standart buyruq\"; }\n    public String heat(String opt) { return name + \" sozlandi: \" + opt; }\n    public String heat(int val) { return name + \" qiymat: \" + val; }\n    public String heat(double val, boolean flag) { return name + \" aniq: \" + val; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClimateHeater h = new ClimateHeater(\"Moyli radiator\");\n        System.out.println(h.heat(23.5));\n    }\n}",
    "detailedSolution": {
      "theory": "Method Overloading (Kompilyatsiya polimorfizmi) — bitta sinf ichida bir xil nomli, lekin parametrlari (soni, turlari yoki ketma-ketligi) har xil bo'lgan bir nechta metodlar yaratishdir. Qaysi metod ishga tushishi kompilyatsiya paytidayoq aniqlanadi.",
      "cleanCode": "class ClimateHeater {\n    public String heat(...) { ... }\n    public String heat(...) { ... }\n}",
      "breakdown": [
        "Bir xil nom: <code>heat</code>.",
        "Har xil parametrlar: kompilyator imzosi bo'yicha ajratadi.",
        "Statik bog'lanish: runtime qo'shimcha vtable xarajatisiz tez ishlaydi."
      ]
    }
  },
  {
    "id": 46,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "46. Uzum Market — Mahsulot Merosi vs Polimorfik Tavsif",
      "en": "46. Uzum Market — Inheritance vs Polymorphic Description"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market\n\nLeksiyada: 'Inheritance meros qilib olishga qaratilgan bo'lsa, Polymorphism bir xil nomli metodning har bir sinfda har xil namoyon bo'lishidir'. 'BaseProduct' dan 'BookProduct' voris oling va 'getDisplayInfo()' ni polimorfik qiling.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'BookProduct' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nMahsulot: O'tkan Kunlar | Narx: 45000.0 UZS | Muallif: Abdulla Qodiriy",
      "en": "🏢 Context: Uzum Market\n\nDemonstrate difference between state inheritance and polymorphic method execution in BaseProduct hierarchy.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'BookProduct'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nMahsulot: O'tkan Kunlar | Narx: 45000.0 UZS | Muallif: Abdulla Qodiriy"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "BookProduct",
        "Main"
      ],
      "methods": [
        "getDisplayInfo"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va BookProduct sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getDisplayInfo() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new BookProduct(\"Uzum Market\");\n        System.out.println(comp.getDisplayInfo());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String getDisplayInfo() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass BookProduct extends BaseComponent {\n    public BookProduct(String name) { super(name); }\n    @Override\n    public String getDisplayInfo() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new BookProduct(\"Uzum Market\");\n        System.out.println(comp.getDisplayInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass BookProduct extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new BookProduct(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 47,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "47. Yandex Go — Transport Merosi vs Tarif Polimorfizmi",
      "en": "47. Yandex Go — Transport Inheritance vs Fare Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Go\n\n'Vehicle' bazaviy transport xususiyatlarini beradi, ammo yo'l haqini 'calculateTripCost(double km)' metodi orqali har bir avtomobil toifasi o'zicha polimorfik hisoblaydi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'ComfortVehicle' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nSafar narxi: 17000.0 UZS",
      "en": "🏢 Context: Yandex Go\n\nShowcase polymorphic calculateTripCost() resolving differently between Economy and Comfort vehicles.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'ComfortVehicle'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nSafar narxi: 17000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "ComfortVehicle",
        "Main"
      ],
      "methods": [
        "calculateTripCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va ComfortVehicle sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateTripCost() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new ComfortVehicle(\"Yandex Go\");\n        System.out.println(comp.calculateTripCost());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateTripCost() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass ComfortVehicle extends BaseComponent {\n    public ComfortVehicle(String name) { super(name); }\n    @Override\n    public String calculateTripCost() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new ComfortVehicle(\"Yandex Go\");\n        System.out.println(comp.calculateTripCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass ComfortVehicle extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new ComfortVehicle(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 48,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "48. Payme — Hamyon Turlari va Komissiya Polimorfizmi",
      "en": "48. Payme — Wallet Types and Commission Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme\n\n'Account' balans maydonini meros qilib beradi, lekin 'deductFee(double sum)' komissiyani hamyon turiga ko'ra turlicha polimorfik hisoblaydi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'PremiumAccount' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nVIP-001 hisobidan 100000.0 UZS komissiyasiz yechildi (Qoldiq: 400000.0 UZS)",
      "en": "🏢 Context: Payme\n\nHighlight polymorphism where base Account encapsulates balance while PremiumAccount applies zero-fee deduction.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'PremiumAccount'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nVIP-001 hisobidan 100000.0 UZS komissiyasiz yechildi (Qoldiq: 400000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "PremiumAccount",
        "Main"
      ],
      "methods": [
        "deductFee"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va PremiumAccount sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String deductFee() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PremiumAccount(\"Payme\");\n        System.out.println(comp.deductFee());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String deductFee() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass PremiumAccount extends BaseComponent {\n    public PremiumAccount(String name) { super(name); }\n    @Override\n    public String deductFee() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PremiumAccount(\"Payme\");\n        System.out.println(comp.deductFee());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass PremiumAccount extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new PremiumAccount(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 49,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "49. Korzinka — Xarid Savati va Yetkazish Polimorfizmi",
      "en": "49. Korzinka — Order Item and Delivery Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka\n\nBarcha buyurtma tovarlari 'OrderItem' dan meros oladi, lekin tez buziluvchi oziq-ovqat ('PerishableItem') muzlatkichli maxsus yetkazishni polimorfik talab qiladi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'PerishableItem' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nMuzqaymoq: Termo-qutida yetkazilsin (Harorat: -18°C)",
      "en": "🏢 Context: Korzinka\n\nDifferentiate state reuse from polymorphic delivery handling in PerishableItem.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'PerishableItem'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nMuzqaymoq: Termo-qutida yetkazilsin (Harorat: -18°C)"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "PerishableItem",
        "Main"
      ],
      "methods": [
        "getHandlingInstructions"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va PerishableItem sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getHandlingInstructions() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PerishableItem(\"Korzinka\");\n        System.out.println(comp.getHandlingInstructions());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String getHandlingInstructions() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass PerishableItem extends BaseComponent {\n    public PerishableItem(String name) { super(name); }\n    @Override\n    public String getHandlingInstructions() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PerishableItem(\"Korzinka\");\n        System.out.println(comp.getHandlingInstructions());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass PerishableItem extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new PerishableItem(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 50,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "50. Artel — Maishiy Texnika va Quvvat Sarfi Polimorfizmi",
      "en": "50. Artel — Home Appliance and Energy Consumption Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel\n\n'Appliance' umumiy ishlab chiqaruvchi va seriya raqamini meros beradi, 'calculatePowerConsumption(int hours)' esa televizor va muzlatgichda polimorfik hisoblanadi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'SmartInverterAC' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nEnergiya sarfi: 4000 Vt*soat",
      "en": "🏢 Context: Artel\n\nCompute power consumption polymorphically across distinct home appliances inheriting common serial state.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'SmartInverterAC'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nEnergiya sarfi: 4000 Vt*soat"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "SmartInverterAC",
        "Main"
      ],
      "methods": [
        "calculatePowerConsumption"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va SmartInverterAC sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculatePowerConsumption() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new SmartInverterAC(\"Artel\");\n        System.out.println(comp.calculatePowerConsumption());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculatePowerConsumption() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass SmartInverterAC extends BaseComponent {\n    public SmartInverterAC(String name) { super(name); }\n    @Override\n    public String calculatePowerConsumption() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new SmartInverterAC(\"Artel\");\n        System.out.println(comp.calculatePowerConsumption());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass SmartInverterAC extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new SmartInverterAC(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 51,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "51. Click — To'lov Kvitansiyasi va Formatlash Polimorfizmi",
      "en": "51. Click — Transaction Receipt Formatting Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click\n\n'Transaction' sana va summani meros qiladi, ammo kvitansiya chop etish 'formatReceipt()' kommunal to'lovda va mobil to'lovda turlicha polimorfik ishlaydi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'UtilityTransaction' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nKvitansiya TX-901: Toshkent Shaxar Gaz uchun 150000.0 UZS to'landi",
      "en": "🏢 Context: Click\n\nDemonstrate polymorphic receipt formatting based on concrete transaction specialization.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'UtilityTransaction'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nKvitansiya TX-901: Toshkent Shaxar Gaz uchun 150000.0 UZS to'landi"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "UtilityTransaction",
        "Main"
      ],
      "methods": [
        "formatReceipt"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va UtilityTransaction sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String formatReceipt() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new UtilityTransaction(\"Click\");\n        System.out.println(comp.formatReceipt());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String formatReceipt() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass UtilityTransaction extends BaseComponent {\n    public UtilityTransaction(String name) { super(name); }\n    @Override\n    public String formatReceipt() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new UtilityTransaction(\"Click\");\n        System.out.println(comp.formatReceipt());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass UtilityTransaction extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new UtilityTransaction(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 52,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "52. Express 24 — Restoran Buyurtmasi va Tayyorlash Vaqti",
      "en": "52. Express 24 — Meal Preparation Duration Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Express 24\n\n'Dish' taom nomini meros qilsa-da, 'getPrepTimeMinutes()' lavash va steyk kabi taomlarda turlicha polimorfik vaqtni qaytaradi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'GrilledSteak' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nRibeye Steyk tayyorlash vaqti: 25 daqiqa",
      "en": "🏢 Context: Express 24\n\nModel polymorphic preparation time resolution across culinary dishes.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'GrilledSteak'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nRibeye Steyk tayyorlash vaqti: 25 daqiqa"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "GrilledSteak",
        "Main"
      ],
      "methods": [
        "getPrepTimeMinutes"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va GrilledSteak sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getPrepTimeMinutes() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new GrilledSteak(\"Express 24\");\n        System.out.println(comp.getPrepTimeMinutes());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String getPrepTimeMinutes() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass GrilledSteak extends BaseComponent {\n    public GrilledSteak(String name) { super(name); }\n    @Override\n    public String getPrepTimeMinutes() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new GrilledSteak(\"Express 24\");\n        System.out.println(comp.getPrepTimeMinutes());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass GrilledSteak extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new GrilledSteak(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 53,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "53. UzAirways — Aviachipta Bagaj Narxi Polimorfizmi",
      "en": "53. UzAirways — Baggage Allowance and Pricing Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: UzAirways\n\n'FlightTicket' reys ma'lumotlarini meros qilib beradi, 'calculateExcessBaggageCost(int kg)' esa ekonom va biznes toifada polimorfik hisoblanadi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'EconomyTicket' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nQo'shimcha bagaj to'lovi: 250000.0 UZS",
      "en": "🏢 Context: UzAirways\n\nPolymorphically calculate excess luggage surcharges across ticket tiers.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'EconomyTicket'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nQo'shimcha bagaj to'lovi: 250000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "EconomyTicket",
        "Main"
      ],
      "methods": [
        "calculateExcessBaggageCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va EconomyTicket sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateExcessBaggageCost() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new EconomyTicket(\"UzAirways\");\n        System.out.println(comp.calculateExcessBaggageCost());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateExcessBaggageCost() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass EconomyTicket extends BaseComponent {\n    public EconomyTicket(String name) { super(name); }\n    @Override\n    public String calculateExcessBaggageCost() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new EconomyTicket(\"UzAirways\");\n        System.out.println(comp.calculateExcessBaggageCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass EconomyTicket extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new EconomyTicket(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 54,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "54. O'zbekiston Temir Yo'llari — Chipta Joyi Polimorfizmi",
      "en": "54. Uzbekistan Railways — Seat Berth Allocation Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: O'zbekiston Temir Yo'llari\n\n'TrainTicket' poyezd raqamini saqlaydi, 'getSeatDescription()' esa plaskart va Afrosiyob VIP kupeda polimorfik tavsif beradi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'AfrosiyobVipTicket' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nPoyezd 762F: VIP Vagon 1 | O'rindiq 12 (Charm kreslo, bepul kofe)",
      "en": "🏢 Context: O'zbekiston Temir Yo'llari\n\nFormat seating specifications polymorphically across Afrosiyob train car categories.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'AfrosiyobVipTicket'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nPoyezd 762F: VIP Vagon 1 | O'rindiq 12 (Charm kreslo, bepul kofe)"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "AfrosiyobVipTicket",
        "Main"
      ],
      "methods": [
        "getSeatDescription"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va AfrosiyobVipTicket sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getSeatDescription() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new AfrosiyobVipTicket(\"O'zbekiston Temir Yo'llari\");\n        System.out.println(comp.getSeatDescription());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String getSeatDescription() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass AfrosiyobVipTicket extends BaseComponent {\n    public AfrosiyobVipTicket(String name) { super(name); }\n    @Override\n    public String getSeatDescription() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new AfrosiyobVipTicket(\"O'zbekiston Temir Yo'llari\");\n        System.out.println(comp.getSeatDescription());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass AfrosiyobVipTicket extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new AfrosiyobVipTicket(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 55,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "55. Ucell — Mobil Tarif va Rouming Hisoblash Polimorfizmi",
      "en": "55. Ucell — Mobile Plan Roaming Rate Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Ucell\n\n'MobilePlan' oylik to'lovni meros qilib beradi, 'calculateRoamingCost(int mb)' esa standart va cheksiz tarifda turlicha polimorfik ishlaydi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'CosmoRoamingPlan' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nRouming narxi: 50000.0 UZS",
      "en": "🏢 Context: Ucell\n\nDetermine overseas roaming data charges polymorphically based on active cellular tariff.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'CosmoRoamingPlan'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nRouming narxi: 50000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "CosmoRoamingPlan",
        "Main"
      ],
      "methods": [
        "calculateRoamingCost"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va CosmoRoamingPlan sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateRoamingCost() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new CosmoRoamingPlan(\"Ucell\");\n        System.out.println(comp.calculateRoamingCost());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateRoamingCost() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass CosmoRoamingPlan extends BaseComponent {\n    public CosmoRoamingPlan(String name) { super(name); }\n    @Override\n    public String calculateRoamingCost() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new CosmoRoamingPlan(\"Ucell\");\n        System.out.println(comp.calculateRoamingCost());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass CosmoRoamingPlan extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new CosmoRoamingPlan(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 56,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "56. Uzum Nasiya — Muddatli To'lov Foiz Polimorfizmi",
      "en": "56. Uzum Nasiya — Installment Plan Interest Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Nasiya\n\n'InstallmentPlan' asosiy summani saqlaydi, 'calculateMonthlyPayment(int months)' esa 3 oylik (0%) va 12 oylikda polimorfik hisoblanadi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'ZeroPercentPlan' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nOylik to'lov: 200000.0 UZS",
      "en": "🏢 Context: Uzum Nasiya\n\nCalculate monthly installment installments polymorphically across promotional 0% vs standard financing.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'ZeroPercentPlan'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nOylik to'lov: 200000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "ZeroPercentPlan",
        "Main"
      ],
      "methods": [
        "calculateMonthlyPayment"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va ZeroPercentPlan sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateMonthlyPayment() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new ZeroPercentPlan(\"Uzum Nasiya\");\n        System.out.println(comp.calculateMonthlyPayment());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateMonthlyPayment() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass ZeroPercentPlan extends BaseComponent {\n    public ZeroPercentPlan(String name) { super(name); }\n    @Override\n    public String calculateMonthlyPayment() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new ZeroPercentPlan(\"Uzum Nasiya\");\n        System.out.println(comp.calculateMonthlyPayment());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass ZeroPercentPlan extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new ZeroPercentPlan(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 57,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "57. Tashkent Metro — Chipta Validatsiyasi Polimorfizmi",
      "en": "57. Tashkent Metro — Gate Fare Deduction Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Tashkent Metro\n\n'TransitCard' karta ID sini saqlaydi, 'deductFare()' talaba kartasi va umumiy kartada polimorfik har xil tarif yechadi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'StudentTransitCard' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nATTO-STUDENT-88: Talaba tarifi 1000.0 UZS yechildi (Qoldiq: 19000.0 UZS)",
      "en": "🏢 Context: Tashkent Metro\n\nValidate turnstile passage polymorphically differentiating Student concessional passes from standard ATTO cards.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'StudentTransitCard'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nATTO-STUDENT-88: Talaba tarifi 1000.0 UZS yechildi (Qoldiq: 19000.0 UZS)"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "StudentTransitCard",
        "Main"
      ],
      "methods": [
        "deductFare"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va StudentTransitCard sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String deductFare() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new StudentTransitCard(\"Tashkent Metro\");\n        System.out.println(comp.deductFare());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String deductFare() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass StudentTransitCard extends BaseComponent {\n    public StudentTransitCard(String name) { super(name); }\n    @Override\n    public String deductFare() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new StudentTransitCard(\"Tashkent Metro\");\n        System.out.println(comp.deductFare());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass StudentTransitCard extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new StudentTransitCard(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 58,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "58. Mediapark — Kafolat Xizmati Muddati Polimorfizmi",
      "en": "58. Mediapark — Warranty Coverage Duration Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Mediapark\n\n'Warranty' seriya raqamini meros beradi, 'getCoverageReport()' esa kengaytirilgan VIP kafolatda polimorfik to'liq ma'lumot beradi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'VipWarranty' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nKafolat WAR-554: 24 oy to'liq ta'mirlash va bepul ehtiyot qismlar",
      "en": "🏢 Context: Mediapark\n\nCompute warranty coverage terms polymorphically across extended protection plans.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'VipWarranty'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nKafolat WAR-554: 24 oy to'liq ta'mirlash va bepul ehtiyot qismlar"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "VipWarranty",
        "Main"
      ],
      "methods": [
        "getCoverageReport"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va VipWarranty sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getCoverageReport() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new VipWarranty(\"Mediapark\");\n        System.out.println(comp.getCoverageReport());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String getCoverageReport() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass VipWarranty extends BaseComponent {\n    public VipWarranty(String name) { super(name); }\n    @Override\n    public String getCoverageReport() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new VipWarranty(\"Mediapark\");\n        System.out.println(comp.getCoverageReport());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass VipWarranty extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new VipWarranty(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 59,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "59. Texnomart — To'lov Keshbeki Polimorfizmi",
      "en": "59. Texnomart — Loyalty Cashback Accrual Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart\n\n'CustomerOrder' jami summani meros qiladi, 'calculateCashback()' oddiy va Platinum mijozlar uchun polimorfik keshbek hisoblaydi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'PlatinumCustomerOrder' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nKeshbek: 25000.0 UZS (5% Platinum bonus)",
      "en": "🏢 Context: Texnomart\n\nDetermine loyalty reward cashback polymorphically between Regular and Platinum order tiers.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'PlatinumCustomerOrder'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nKeshbek: 25000.0 UZS (5% Platinum bonus)"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "PlatinumCustomerOrder",
        "Main"
      ],
      "methods": [
        "calculateCashback"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va PlatinumCustomerOrder sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateCashback() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PlatinumCustomerOrder(\"Texnomart\");\n        System.out.println(comp.calculateCashback());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateCashback() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass PlatinumCustomerOrder extends BaseComponent {\n    public PlatinumCustomerOrder(String name) { super(name); }\n    @Override\n    public String calculateCashback() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new PlatinumCustomerOrder(\"Texnomart\");\n        System.out.println(comp.calculateCashback());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass PlatinumCustomerOrder extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new PlatinumCustomerOrder(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 60,
    "tier": 4,
    "tierName": "4-Bosqich: Vorislik vs Polimorfizm: Farqlar va Chegaralar",
    "sector": "46-60: Inheritance vs Polymorphism Principles",
    "title": {
      "uz": "60. WIUT Academic — Modul Baholash Tizimi Polimorfizmi",
      "en": "60. WIUT Academic — Assessment Grading Weight Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Academic\n\n'Assessment' modul kodini saqlaydi, 'calculateFinalMark(double rawScore)' CW va Imtihon uchun polimorfik hisoblanadi.\n\n🎯 QADAMLAR:\n1. 'BaseComponent' superklassini e'lon qiling va unga umumiy xususiyatlarni bering.\n2. 'CourseworkAssessment' sinfini meros qilib oling.\n3. Vorislik (holat uzatish) va polimorfizm (xatti-harakat almashishi) farqini ko'rsating.\n4. 'Main' metodida tekshiring.\n\n📊 Kutilayotgan Natija:\nCW hissasi: 42.5 ball",
      "en": "🏢 Context: WIUT Academic\n\nProcess final component marks polymorphically between Coursework and PC Lab examinations.\n\n🎯 STEPS:\n1. Declare 'BaseComponent' superclass holding common state.\n2. Extend it in 'CourseworkAssessment'.\n3. Decouple state inheritance from polymorphic method dispatch.\n4. Execute and verify in 'Main'.\n\n📊 Expected Output:\nCW hissasi: 42.5 ball"
    },
    "requirements": {
      "classes": [
        "BaseComponent",
        "CourseworkAssessment",
        "Main"
      ],
      "methods": [
        "calculateFinalMark"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "// BaseComponent va CourseworkAssessment sinflarini yarating\nclass BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String calculateFinalMark() { return name; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new CourseworkAssessment(\"WIUT Academic\");\n        System.out.println(comp.calculateFinalMark());\n    }\n}",
    "solution": "class BaseComponent {\n    protected String name;\n    public BaseComponent(String name) { this.name = name; }\n    public String getIdentifier() { return \"Komponent: \" + name; }\n    public String calculateFinalMark() { return name + \" standart xizmat ko'rsatmoqda\"; }\n}\n\nclass CourseworkAssessment extends BaseComponent {\n    public CourseworkAssessment(String name) { super(name); }\n    @Override\n    public String calculateFinalMark() {\n        return name + \" maxsus rejimda ishga tushdi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseComponent comp = new CourseworkAssessment(\"WIUT Academic\");\n        System.out.println(comp.calculateFinalMark());\n    }\n}",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) kod va holatni (fields) qayta ishlatishga xizmat qilsa, Polimorfizm (Polymorphism) xatti-harakatni (behavior) dinamik almashtirishga xizmat qiladi. Vorislik 'is-a' munosabatini yaratsa, polimorfizm unga moslashuvchanlik baxsh etadi.",
      "cleanCode": "class BaseComponent { ... }\nclass CourseworkAssessment extends BaseComponent { ... }",
      "breakdown": [
        "Vorislik: superklass konstruktori va maydonlari qayta ishlatiladi.",
        "Polimorfizm: <code>BaseComponent comp = new CourseworkAssessment(...);</code> orqali dinamik metod chaqiriladi."
      ]
    }
  },
  {
    "id": 61,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "61. SmartDevice — Statik Metodlarni Erta Bog'lash (Static Binding)",
      "en": "61. SmartDevice — Static Method Early Binding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWIUT 7-leksiyasida aytilganidek: 'Statik metodlar ob'yektga emas, sinfga tegishli bo'lib, kompilyatsiya paytida havola turi (Reference Type) bo'yicha bog'lanadi (Early Binding)'. SmartDevice va SmartLamp sinflarida 'getCategory()' statik metodini e'lon qiling va havola orqali chaqiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nUmumiy Aqlli Qurilma",
      "en": "🏢 Context: WIUT Smart Labs\n\nDemonstrate early binding: static methods are resolved at compile time based on reference type rather than runtime instance type.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SmartDevice'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nUmumiy Aqlli Qurilma"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Main"
      ],
      "methods": [
        "getCategory"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp();\n        System.out.println(dev.getCategory());\n    }\n}",
    "solution": "class SmartDevice {\n    public static String getCategory() { return \"Umumiy Aqlli Qurilma\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public static String getCategory() { return \"Yoritgich\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp();\n        System.out.println(dev.getCategory());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SmartDevice {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 62,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "62. Final Metodlar — Overridingni Taqiqlash va Erta Bog'lash",
      "en": "62. Final Methods — Disallowing Overriding and Early Binding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nLeksiyaga muvofiq, 'final' metodlarni voris sinflar qayta aniqlay olmaydi. JVM ularni to'g'ridan-to'g'ri erta bog'laydi. 'SmartThermostat' da 'getHardwareId()' final metodini yarating.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nUskuna ID: ARTEL-TH-8820",
      "en": "🏢 Context: Artel Smart\n\nModel final method early binding preventing modification and ensuring compile-time resolution.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SmartDevice'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nUskuna ID: ARTEL-TH-8820"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Main"
      ],
      "methods": [
        "getHardwareId"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"ARTEL-TH-8820\");\n        System.out.println(dev.getHardwareId());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String hardwareId;\n    public SmartDevice(String id) { this.hardwareId = id; }\n    public final String getHardwareId() { return \"Uskuna ID: \" + hardwareId; }\n}\nclass SmartThermostat extends SmartDevice {\n    public SmartThermostat(String id) { super(id); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"ARTEL-TH-8820\");\n        System.out.println(dev.getHardwareId());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SmartDevice {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 63,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "63. Maydonlarni Yashirish (Field Hiding) va Erta Bog'lanish",
      "en": "63. Field Hiding and Compile-Time Reference Resolution"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tech\n\nLeksiyada alohida ta'kidlangan: 'Maydonlar (variables) polimorfik emas! Ular doimo havola turiga qarab o'qiladi'. Superklass va voris sinfda bir xil nomli 'voltage' o'zgaruvchisi berilganda superklass havolasi orqali uning qiymatini tekshiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nKuchlanish: 220V",
      "en": "🏢 Context: Uzum Tech\n\nDemonstrate that instance variables are hidden, not overridden, binding strictly to the reference type.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SmartDevice'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nKuchlanish: 220V"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Main"
      ],
      "methods": [
        "getDeviceVoltage"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker();\n        System.out.println(\"Kuchlanish: \" + dev.getDeviceVoltage() + \"V\");\n    }\n}",
    "solution": "class SmartDevice {\n    public int voltage = 220;\n    public int getDeviceVoltage() { return voltage; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public int voltage = 12;\n    public int getDeviceVoltage() { return voltage; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker();\n        System.out.println(\"Kuchlanish: \" + dev.getDeviceVoltage() + \"V\");\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SmartDevice {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 64,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "64. Private Metodlar — Sinflararo Yashirinlik va Erta Bog'lanish",
      "en": "64. Private Methods — Non-Inheritance and Early Resolution"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Systems\n\nSuperklassdagi 'private' metod vorisga ko'rinmaydi va kompilyator uni chaqirilgan sinf kontekstida erta bog'laydi. Ichki xavfsizlik chekini private qilib, ochiq metod orqali ishga tushiring.\n\n🎯 QADAMLAR:\n1. 'SecureTerminal' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nPOS-774: Ichki xavfsizlik tekshiruvi muvaffaqiyatli o'tdi",
      "en": "🏢 Context: Payme Systems\n\nPrivate methods are bound statically within their enclosing class and cannot be overridden dynamically.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SecureTerminal'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nPOS-774: Ichki xavfsizlik tekshiruvi muvaffaqiyatli o'tdi"
    },
    "requirements": {
      "classes": [
        "SecureTerminal",
        "Main"
      ],
      "methods": [
        "runSelfDiagnostics"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SecureTerminal {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureTerminal terminal = new MobilePOS(\"POS-774\");\n        System.out.println(terminal.runSelfDiagnostics());\n    }\n}",
    "solution": "class SecureTerminal {\n    private String tid;\n    public SecureTerminal(String id) { this.tid = id; }\n    private boolean checkSecurity() { return true; }\n    public String runSelfDiagnostics() {\n        return tid + \": Ichki xavfsizlik tekshiruvi \" + (checkSecurity() ? \"muvaffaqiyatli o'tdi\" : \"muvaffaqiyatsiz\");\n    }\n}\nclass MobilePOS extends SecureTerminal {\n    public MobilePOS(String id) { super(id); }\n}\nclass MainHelper {\n    public static String runSelfDiagnostics(SecureTerminal t) { return t.runSelfDiagnostics(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureTerminal terminal = new MobilePOS(\"POS-774\");\n        System.out.println(terminal.runSelfDiagnostics());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SecureTerminal {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 65,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "65. Overload Qilingan Metodlarni Kompilyatsiya Bosqichida Tanlash",
      "en": "65. Static Resolution of Overloaded Method Signatures"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Smart\n\nLeksiyada ko'rsatilganidek: qaysi overload metod tanlanishi argumentning e'lon qilingan turi (declared type) bo'yicha kompilyatsiya vaqtida hal qilinadi. Buni 'SmartScanner' misolida ko'rsating.\n\n🎯 QADAMLAR:\n1. 'BarcodeScanner' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nOb'yekt formati tekshirilmoqda: UZ-88192",
      "en": "🏢 Context: Korzinka Smart\n\nShow that overloaded method resolution is static, decided at compile time by argument reference types.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'BarcodeScanner'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nOb'yekt formati tekshirilmoqda: UZ-88192"
    },
    "requirements": {
      "classes": [
        "BarcodeScanner",
        "Main"
      ],
      "methods": [
        "scan"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass BarcodeScanner {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BarcodeScanner scanner = new BarcodeScanner();\n        Object codeObj = \"UZ-88192\";\n        System.out.println(scanner.scan(codeObj));\n    }\n}",
    "solution": "class BarcodeScanner {\n    public String scan(String s) { return \"Matnli shtrix-kod: \" + s; }\n    public String scan(Object o) { return \"Ob'yekt formati tekshirilmoqda: \" + o.toString(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BarcodeScanner scanner = new BarcodeScanner();\n        Object codeObj = \"UZ-88192\";\n        System.out.println(scanner.scan(codeObj));\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class BarcodeScanner {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 66,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "66. Konstanta qiymatlari (static final) va Inlining",
      "en": "66. Compile-Time Constants and Static Binding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Tech\n\n'public static final' konstantalar kompilyatsiya paytida to'g'ridan-to'g'ri baytkodga kiritiladi (inlining). 'SmartStandard' interfeysida standart chastotani e'lon qiling.\n\n🎯 QADAMLAR:\n1. 'SmartStandard' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nZigBee 3.0 chastotasi: 2.4 GHz",
      "en": "🏢 Context: Texnomart Tech\n\nIllustrate compile-time constant evaluation and binding using static final protocol definitions.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SmartStandard'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nZigBee 3.0 chastotasi: 2.4 GHz"
    },
    "requirements": {
      "classes": [
        "SmartStandard",
        "Main"
      ],
      "methods": [
        "getStandardSummary"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SmartStandard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SmartStandard.getStandardSummary());\n    }\n}",
    "solution": "interface SmartStandard {\n    String PROTOCOL_NAME = \"ZigBee 3.0\";\n    double FREQUENCY_GHZ = 2.4;\n    static String getStandardSummary() {\n        return PROTOCOL_NAME + \" chastotasi: \" + FREQUENCY_GHZ + \" GHz\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(SmartStandard.getStandardSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SmartStandard {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 67,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "67. Konstruktor Zanjiri — Erta Bog'lanish va Super Chaqiruv",
      "en": "67. Constructor Binding and Deterministic Super Chaining"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Go\n\nOb'yekt yaratilishida konstruktorlar erta bog'lanish asosida yuqoridan pastga (superklassdan subklassga) qarab qat'iy ketma-ketlikda ishlaydi. 'Vehicle' va 'TaxiCar' logini tekshiring.\n\n🎯 QADAMLAR:\n1. 'Vehicle' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nVehicle initsializatsiya qilindi -> TaxiCar tayyor: Nexia 3",
      "en": "🏢 Context: Yandex Go\n\nDemonstrate static constructor linking executing superclass constructor prior to subclass body.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'Vehicle'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nVehicle initsializatsiya qilindi -> TaxiCar tayyor: Nexia 3"
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "Main"
      ],
      "methods": [
        "getInitLog"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass Vehicle {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCar taxi = new TaxiCar(\"Nexia 3\");\n        System.out.println(taxi.getInitLog());\n    }\n}",
    "solution": "class Vehicle {\n    protected String log = \"Vehicle initsializatsiya qilindi\";\n}\nclass TaxiCar extends Vehicle {\n    private String model;\n    public TaxiCar(String m) { this.model = m; this.log += \" -> TaxiCar tayyor: \" + model; }\n    public String getInitLog() { return log; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCar taxi = new TaxiCar(\"Nexia 3\");\n        System.out.println(taxi.getInitLog());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class Vehicle {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 68,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "68. Statik Fabrika Metodi (Static Factory Method)",
      "en": "68. Static Factory Method and Early Binding Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: ExpressPay\n\nKompilyatsiya vaqtida qaysi statik yordamchi metod chaqirilishi sinf nomi bo'yicha bog'lanadi. 'DeviceFactory.createDefaultLamp()' orqali standart chiroq obyektini qaytaring.\n\n🎯 QADAMLAR:\n1. 'DeviceFactory' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nStandart Uzum Chirog'i (Yorug'lik: 100%)",
      "en": "🏢 Context: ExpressPay\n\nUse static factory method illustrating compile-time method dispatch generating runtime objects.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'DeviceFactory'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nStandart Uzum Chirog'i (Yorug'lik: 100%)"
    },
    "requirements": {
      "classes": [
        "DeviceFactory",
        "Main"
      ],
      "methods": [
        "createDefaultLamp"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass DeviceFactory {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLamp lamp = DeviceFactory.createDefaultLamp();\n        System.out.println(lamp.getInfo());\n    }\n}",
    "solution": "class SmartLamp {\n    private String info;\n    public SmartLamp(String i) { this.info = i; }\n    public String getInfo() { return info; }\n}\nclass DeviceFactory {\n    public static SmartLamp createDefaultLamp() {\n        return new SmartLamp(\"Standart Uzum Chirog'i (Yorug'lik: 100%)\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartLamp lamp = DeviceFactory.createDefaultLamp();\n        System.out.println(lamp.getInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class DeviceFactory {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 69,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "69. Statik Blok (Static Initializer) Bajarilish Qat'iyligi",
      "en": "69. Static Initializer Execution Determinism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Ecosystem\n\nSinf yuklanganda (class loading) statik bloklar bir marta va erta bajariladi. 'GatewayConfig' sinfida API kalitini statik blokda initsializatsiya qiling.\n\n🎯 QADAMLAR:\n1. 'GatewayConfig' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nAPI Endpoint: https://api.click.uz/v2",
      "en": "🏢 Context: Click Ecosystem\n\nDemonstrate class loading and static initializer binding before any instance creation.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'GatewayConfig'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nAPI Endpoint: https://api.click.uz/v2"
    },
    "requirements": {
      "classes": [
        "GatewayConfig",
        "Main"
      ],
      "methods": [
        "getEndpoint"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass GatewayConfig {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"API Endpoint: \" + GatewayConfig.getEndpoint());\n    }\n}",
    "solution": "class GatewayConfig {\n    public static final String API_ENDPOINT;\n    static {\n        API_ENDPOINT = \"https:\" + \"/\" + \"/api.click.uz/v2\";\n    }\n    public static String getEndpoint() { return API_ENDPOINT; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"API Endpoint: \" + GatewayConfig.getEndpoint());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class GatewayConfig {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 70,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "70. Final Klasslar — Vorislikni Taqiqlash va Kompilyator Optimizatsiyasi",
      "en": "70. Final Classes Preventing Subclassing and Early Inlining"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Safebox Uz\n\nLeksiyada ko'rsatilganidek, 'final class' dan voris olib bo'lmaydi. Kompilyator bu sinf metodlarini xavfsiz va tez erta bog'laydi. 'SecurityToken' final sinfini yarating.\n\n🎯 QADAMLAR:\n1. 'SecurityToken' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nToken: [HASH-USR-9021-AUTH]",
      "en": "🏢 Context: Safebox Uz\n\nCreate immutable final class SecurityToken demonstrating final class immutability and compiler sealing.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SecurityToken'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nToken: [HASH-USR-9021-AUTH]"
    },
    "requirements": {
      "classes": [
        "SecurityToken",
        "Main"
      ],
      "methods": [
        "getTokenHash"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SecurityToken {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityToken token = new SecurityToken(\"USR-9021-AUTH\");\n        System.out.println(\"Token: \" + token.getTokenHash());\n    }\n}",
    "solution": "final class SecurityToken {\n    private String raw;\n    public SecurityToken(String r) { this.raw = r; }\n    public String getTokenHash() { return \"[HASH-\" + raw + \"]\"; }\n}\nclass MainTokenHelper {\n    public static String getTokenHash(SecurityToken t) { return t.getTokenHash(); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityToken token = new SecurityToken(\"USR-9021-AUTH\");\n        System.out.println(\"Token: \" + token.getTokenHash());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SecurityToken {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 71,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "71. Havola Turi Bo'yicha Maydonga To'g'ridan-To'g'ri Murojaat",
      "en": "71. Direct Field Access via Superclass Reference"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Mediapark Smart\n\nSubklass superklassdagi ochiq maydonni yashirsa (variable shadowing), superklass havolasi faqat o'zidagi maydonni o'qiydi. Buni kod bilan isbotlang.\n\n🎯 QADAMLAR:\n1. 'Appliance' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nNominal quvvat: 1000W",
      "en": "🏢 Context: Mediapark Smart\n\nDemonstrate variable shadowing where accessing a field via superclass reference yields the superclass field value.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'Appliance'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nNominal quvvat: 1000W"
    },
    "requirements": {
      "classes": [
        "Appliance",
        "Main"
      ],
      "methods": [
        "getPowerWatts"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass Appliance {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Appliance app = new SmartOven();\n        System.out.println(\"Nominal quvvat: \" + app.getPowerWatts() + \"W\");\n    }\n}",
    "solution": "class Appliance {\n    public int powerWatts = 1000;\n    public int getPowerWatts() { return powerWatts; }\n}\nclass SmartOven extends Appliance {\n    public int powerWatts = 2500;\n    public int getPowerWatts() { return powerWatts; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Appliance app = new SmartOven();\n        System.out.println(\"Nominal quvvat: \" + app.getPowerWatts() + \"W\");\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class Appliance {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 72,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "72. Kompilyatsiya Xatoligi — Subklass Xususiy Metodini Chaqirish",
      "en": "72. Reference Type Boundary Preventing Subclass Method Invocation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market\n\nSuperklass havolasi orqali subklassning o'zigagina xos metodlarini chaqirib bo'lmaydi (kompilyatsiya xatosi). Havola turida mavjud umumiy metod orqali ma'lumot oling.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nQurilma: Mavic 3 (Status: Qo'nish maydonida)",
      "en": "🏢 Context: Uzum Market\n\nEnforce superclass reference contract: only methods declared in the reference type can be invoked.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'SmartDevice'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nQurilma: Mavic 3 (Status: Qo'nish maydonida)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Main"
      ],
      "methods": [
        "getDeviceInfo"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartDrone(\"Mavic 3\");\n        System.out.println(dev.getDeviceInfo());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getDeviceInfo() { return \"Qurilma: \" + name + \" (Status: Qo'nish maydonida)\"; }\n}\nclass SmartDrone extends SmartDevice {\n    public SmartDrone(String n) { super(n); }\n    public void flyHigh() {}\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartDrone(\"Mavic 3\");\n        System.out.println(dev.getDeviceInfo());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class SmartDevice {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 73,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "73. Statik Yordamchi Metodlar (Utility Methods)",
      "en": "73. Utility Method Static Binding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Systems\n\nStatik utilita sinflari (Math, Arrays kabi) ob'yekt talab qilmaydi. 'DeviceUtils.formatDuration(seconds)' metodini statik erta bog'lanish bilan yarating.\n\n🎯 QADAMLAR:\n1. 'DeviceUtils' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nIsh vaqti: 1 soat 1 daqiqa 5 soniya",
      "en": "🏢 Context: WIUT Systems\n\nBuild utility helper class utilizing static early binding for formatted device uptime display.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'DeviceUtils'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nIsh vaqti: 1 soat 1 daqiqa 5 soniya"
    },
    "requirements": {
      "classes": [
        "DeviceUtils",
        "Main"
      ],
      "methods": [
        "formatDuration"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass DeviceUtils {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Ish vaqti: \" + DeviceUtils.formatDuration(3665));\n    }\n}",
    "solution": "class DeviceUtils {\n    public static String formatDuration(int totalSeconds) {\n        int h = totalSeconds / 3600;\n        int m = (totalSeconds % 3600) / 60;\n        int s = totalSeconds % 60;\n        return h + \" soat \" + m + \" daqiqa \" + s + \" soniya\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Ish vaqti: \" + DeviceUtils.formatDuration(3665));\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class DeviceUtils {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 74,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "74. Statik Polimorfizm Cheklovi (Method Hiding vs Overriding)",
      "en": "74. Method Hiding vs Overriding for Static Methods"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Tech\n\nStatik metodlar qayta aniqlanmaydi (@Override bo'lmaydi), balki 'berkitiladi' (Method Hiding). Superklass havolasi orqali statik metod chaqirilganda superklassniki ishlaydi.\n\n🎯 QADAMLAR:\n1. 'BaseController' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nProtokol: Standard Modbus TCP",
      "en": "🏢 Context: Artel Tech\n\nShowcase static method hiding: calling hidden static method on superclass reference runs superclass version.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'BaseController'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nProtokol: Standard Modbus TCP"
    },
    "requirements": {
      "classes": [
        "BaseController",
        "Main"
      ],
      "methods": [
        "identifyProtocol"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass BaseController {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseController ctrl = new CoolingController();\n        System.out.println(ctrl.identifyProtocol());\n    }\n}",
    "solution": "class BaseController {\n    public static String identifyProtocol() { return \"Protokol: Standard Modbus TCP\"; }\n}\nclass CoolingController extends BaseController {\n    public static String identifyProtocol() { return \"Protokol: Advanced Inverter\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BaseController ctrl = new CoolingController();\n        System.out.println(ctrl.identifyProtocol());\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class BaseController {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 75,
    "tier": 5,
    "tierName": "5-Bosqich: Erta Bog'lanish (Early / Static Binding) Mexanizmi",
    "sector": "61-75: Early Binding & Compile-Time Resolution",
    "title": {
      "uz": "75. Erta Bog'lanish Xulosasi — Unumdorlik va Aniq Prognoz",
      "en": "75. Early Binding Performance and Deterministic Behavior"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Fintech\n\nErta bog'lanish JVM ga jadvaldan qidirish (vtable lookup) o'rniga to'g'ridan-to'g'ri chaqiruv qilish imkonini beradi. 'FixedFeeCalculator.calculate(double sum)' yordamida to'lov komissiyasini hisoblang.\n\n🎯 QADAMLAR:\n1. 'FixedFeeCalculator' sinfida statik/final yoki yordamchi metodni e'lon qiling.\n2. Kompilyatsiya vaqtida metod qanday bog'lanishini (Early Binding) tushuntiring.\n3. 'Main' metodida murojaat qiling va natijani chiqaring.\n\n📊 Kutilayotgan Natija:\nXizmat haqi: 1000.0 UZS",
      "en": "🏢 Context: Uzum Fintech\n\nConclude early binding tier with high-throughput deterministic fee calculator implementation.\n\n🎯 STEPS:\n1. Declare static, final or utility method in 'FixedFeeCalculator'.\n2. Observe compile-time early binding based on reference type.\n3. Invoke in 'Main' and verify deterministic output.\n\n📊 Expected Output:\nXizmat haqi: 1000.0 UZS"
    },
    "requirements": {
      "classes": [
        "FixedFeeCalculator",
        "Main"
      ],
      "methods": [
        "calculate"
      ]
    },
    "starterCode": "// Erta bog'lanish (Static / Early Binding) modelini yozing\nclass FixedFeeCalculator {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xizmat haqi: \" + FixedFeeCalculator.calculate(100000.0) + \" UZS\");\n    }\n}",
    "solution": "class FixedFeeCalculator {\n    public static double calculate(double amount) {\n        return amount * 0.01;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xizmat haqi: \" + FixedFeeCalculator.calculate(100000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Erta bog'lanish (Early / Static Binding) — chaqiriladigan metod yoki maydonning xotiradagi manzili kompilyatsiya vaqtida havola turi (Reference Type) bo'yicha aniqlanishidir. Java da 'private', 'static', 'final' metodlar va barcha sinf maydonlari erta bog'lanadi.",
      "cleanCode": "class FixedFeeCalculator {\n    public static ...\n    public final ...\n}",
      "breakdown": [
        "Erta bog'lanish: kompilyator qaysi metod chaqirilishini oldindan biladi.",
        "Unumdorlik: VTable tekshiruvisiz to'g'ridan-to'g'ri baytkod chaqiruvi."
      ]
    }
  },
  {
    "id": 76,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "76. SmartLamp — Dinamik Metod Tanlash (Virtual Method Invocation)",
      "en": "76. SmartLamp — Dynamic Virtual Method Invocation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nWIUT 7-leksiyasida aytilganidek: 'Havola turi SmartDevice bo'lsa ham, xotiradagi haqiqiy ob'yekt SmartLamp bo'lgani uchun, JVM ish vaqtida (runtime) SmartLamp metodini chaqiradi'. Buni 'executeCommand()' bilan ko'rsating.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'executeCommand' virtual metodini bering.\n2. 'SmartLamp' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartLamp' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nMehmonxona lyustrasi: Yorug'lik 100% ga yoqildi",
      "en": "🏢 Context: Uzum Smart\n\nDemonstrate late binding: JVM inspects the heap object at runtime and invokes the overridden subclass method.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'executeCommand'.\n2. Override it in 'SmartLamp'.\n3. Assign new 'SmartLamp' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nMehmonxona lyustrasi: Yorug'lik 100% ga yoqildi"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "executeCommand"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Mehmonxona lyustrasi\");\n        System.out.println(dev.executeCommand(\"ON\"));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String executeCommand(String cmd) { return name + \": Buyruq qabul qilindi\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n) { super(n); }\n    @Override\n    public String executeCommand(String cmd) {\n        if (\"ON\".equals(cmd)) return name + \": Yorug'lik 100% ga yoqildi\";\n        return name + \": Bajarildi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Mehmonxona lyustrasi\");\n        System.out.println(dev.executeCommand(\"ON\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartLamp extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 77,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "77. SmartThermostat — Kech Bog'lanish Orqali Rejimni O'zgartirish",
      "en": "77. SmartThermostat — Dynamic Dispatch for Mode Transition"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nTermostat 'executeCommand(\"ECO\")' chaqirilganda haroratni tejamkor 20°C ga tushiradi. Havola 'SmartDevice' turida saqlangan bo'lsa ham, subklass xulq-atvori dinamik ishga tushsin.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'executeCommand' virtual metodini bering.\n2. 'SmartThermostat' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartThermostat' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nSmart Termostat: Tejamkor rejim faollashdi (Harorat: 20°C)",
      "en": "🏢 Context: Artel Smart\n\nExecute dynamic dispatch via superclass handle switching thermostat to eco temperature mode.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'executeCommand'.\n2. Override it in 'SmartThermostat'.\n3. Assign new 'SmartThermostat' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nSmart Termostat: Tejamkor rejim faollashdi (Harorat: 20°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartThermostat",
        "Main"
      ],
      "methods": [
        "executeCommand"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"Smart Termostat\");\n        System.out.println(dev.executeCommand(\"ECO\"));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String executeCommand(String cmd) { return name + \": Bajarildi\"; }\n}\nclass SmartThermostat extends SmartDevice {\n    public SmartThermostat(String n) { super(n); }\n    @Override\n    public String executeCommand(String cmd) {\n        if (\"ECO\".equals(cmd)) return name + \": Tejamkor rejim faollashdi (Harorat: 20°C)\";\n        return name + \": Standart rejim\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"Smart Termostat\");\n        System.out.println(dev.executeCommand(\"ECO\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartThermostat extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 78,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "78. SmartSpeaker — Ovozli Buyruqni Dinamik Qabul Qilish",
      "en": "78. SmartSpeaker — Late Bound Voice Command Processing"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\n'SmartSpeaker' ga umumiy 'SmartDevice' havolasi orqali 'Musiqa qo'y' buyrug'i uzatiladi. Kech bog'lanish tufayli aynan karnayning maxsus musiqa pleyeri javob beradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'executeCommand' virtual metodini bering.\n2. 'SmartSpeaker' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartSpeaker' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nYandex Stansiya: Yangi musiqa pleylisti yangramoqda",
      "en": "🏢 Context: Yandex Smart\n\nVoice command dynamic resolution delegating playback directly to speaker runtime implementation.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'executeCommand'.\n2. Override it in 'SmartSpeaker'.\n3. Assign new 'SmartSpeaker' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nYandex Stansiya: Yangi musiqa pleylisti yangramoqda"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "executeCommand"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Yandex Stansiya\");\n        System.out.println(dev.executeCommand(\"PLAY_MUSIC\"));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String executeCommand(String cmd) { return name + \": Buyruq\"; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    @Override\n    public String executeCommand(String cmd) {\n        if (\"PLAY_MUSIC\".equals(cmd)) return name + \": Yangi musiqa pleylisti yangramoqda\";\n        return name + \": Ovoz sozlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Yandex Stansiya\");\n        System.out.println(dev.executeCommand(\"PLAY_MUSIC\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartSpeaker extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 79,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "79. Payme POS Terminal — Dinamik Tranzaksiya Tasdig'i",
      "en": "79. POS Terminal — Dynamic Transaction Processing Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Smart\n\nSuperklass 'PaymentGateway' havolasiga bog'langan 'SmartPOS' terminali 'authorize(summa)' metodini chaqirganda NFC orqali to'lovni tasdiqlaydi. Kech bog'lanishni tekshiring.\n\n🎯 QADAMLAR:\n1. 'PaymentGateway' superklassini yarating va unga 'authorize' virtual metodini bering.\n2. 'SmartPOS' voris sinfida ushbu metodni qayta yozing.\n3. 'PaymentGateway' turidagi o'zgaruvchiga yangi 'SmartPOS' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nPOS-UZ-102: 85000.0 UZS to'lov NFC orqali tasdiqlandi",
      "en": "🏢 Context: Payme Smart\n\nDemonstrate runtime polymorphic authorization via PaymentGateway reference bound to SmartPOS.\n\n🎯 STEPS:\n1. Create superclass 'PaymentGateway' with virtual method 'authorize'.\n2. Override it in 'SmartPOS'.\n3. Assign new 'SmartPOS' to a 'PaymentGateway' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nPOS-UZ-102: 85000.0 UZS to'lov NFC orqali tasdiqlandi"
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "SmartPOS",
        "Main"
      ],
      "methods": [
        "authorize"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass PaymentGateway {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new SmartPOS(\"POS-UZ-102\");\n        System.out.println(gw.authorize(85000.0));\n    }\n}",
    "solution": "class PaymentGateway {\n    protected String terminalId;\n    public PaymentGateway(String id) { this.terminalId = id; }\n    public String authorize(double amount) { return terminalId + \": To'lov \" + amount; }\n}\nclass SmartPOS extends PaymentGateway {\n    public SmartPOS(String id) { super(id); }\n    @Override\n    public String authorize(double amount) {\n        return terminalId + \": \" + amount + \" UZS to'lov NFC orqali tasdiqlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new SmartPOS(\"POS-UZ-102\");\n        System.out.println(gw.authorize(85000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class PaymentGateway { ... }\nclass SmartPOS extends PaymentGateway { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 80,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "80. Click QR To'lov — Dinamik Shlyuz Tanlash",
      "en": "80. QR Payment — Dynamic Gateway Routing at Runtime"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Smart\n\n'QRPaymentService' vorisi 'ClickQR' da 'authorize(summa)' QR-kod dinamik generatsiyasini amalga oshiradi. Polimorfik dinamik bog'lanishni tasdiqlang.\n\n🎯 QADAMLAR:\n1. 'PaymentGateway' superklassini yarating va unga 'authorize' virtual metodini bering.\n2. 'ClickQR' voris sinfida ushbu metodni qayta yozing.\n3. 'PaymentGateway' turidagi o'zgaruvchiga yangi 'ClickQR' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nREST-TOSHKENT: 120000.0 UZS uchun QR-kod yaratildi va to'landi",
      "en": "🏢 Context: Click Smart\n\nDynamic QR code payload generation resolved at runtime via base payment interface.\n\n🎯 STEPS:\n1. Create superclass 'PaymentGateway' with virtual method 'authorize'.\n2. Override it in 'ClickQR'.\n3. Assign new 'ClickQR' to a 'PaymentGateway' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nREST-TOSHKENT: 120000.0 UZS uchun QR-kod yaratildi va to'landi"
    },
    "requirements": {
      "classes": [
        "PaymentGateway",
        "ClickQR",
        "Main"
      ],
      "methods": [
        "authorize"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass PaymentGateway {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new ClickQR(\"REST-TOSHKENT\");\n        System.out.println(gw.authorize(120000.0));\n    }\n}",
    "solution": "class PaymentGateway {\n    protected String terminalId;\n    public PaymentGateway(String id) { this.terminalId = id; }\n    public String authorize(double amount) { return terminalId + \": To'lov \" + amount; }\n}\nclass ClickQR extends PaymentGateway {\n    public ClickQR(String id) { super(id); }\n    @Override\n    public String authorize(double amount) {\n        return terminalId + \": \" + amount + \" UZS uchun QR-kod yaratildi va to'landi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentGateway gw = new ClickQR(\"REST-TOSHKENT\");\n        System.out.println(gw.authorize(120000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class PaymentGateway { ... }\nclass ClickQR extends PaymentGateway { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 81,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "81. Korzinka Smart Trolley — Dinamik Savat Hisobi",
      "en": "81. Smart Cart — Dynamic Subtotal Recalculation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Smart\n\n'SmartTrolley' 'turnOn()' chaqirilganda og'irlik sensorlarini nolga tushiradi (tara calibration). Dinamik bog'lanish orqali xarid aravachasini ishga tushiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'turnOn' virtual metodini bering.\n2. 'SmartTrolley' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartTrolley' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nArava #42 yoqildi (Og'irlik sensori nolga sozlandi)",
      "en": "🏢 Context: Korzinka Smart\n\nInstantiate SmartTrolley as SmartDevice, dynamically invoking calibrated cart startup routine.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'turnOn'.\n2. Override it in 'SmartTrolley'.\n3. Assign new 'SmartTrolley' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nArava #42 yoqildi (Og'irlik sensori nolga sozlandi)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartTrolley",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice cart = new SmartTrolley(\"Arava #42\");\n        System.out.println(cart.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartTrolley extends SmartDevice {\n    public SmartTrolley(String n) { super(n); }\n    @Override\n    public String turnOn() { return name + \" yoqildi (Og'irlik sensori nolga sozlandi)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice cart = new SmartTrolley(\"Arava #42\");\n        System.out.println(cart.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartTrolley extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 82,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "82. Texnomart Robot Changyutgich — Dinamik Xarita Chizish",
      "en": "82. Robotic Vacuum — Dynamic Lidar Mapping Activation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Smart\n\nRobot changyutgich 'SmartDevice' havolasidan 'turnOn()' chaqirilganda Lidar sensori orqali xonaning 3D xaritasini chizishni boshlaydi. Kech bog'lanish bilan tekshiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'turnOn' virtual metodini bering.\n2. 'RoborockVacuum' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'RoborockVacuum' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nRoborock Q7 yoqildi (Lidar xaritalash boshlandi)",
      "en": "🏢 Context: Texnomart Smart\n\nDynamic dispatch initiating lidar mapping on Roborock device via generic SmartDevice pointer.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'turnOn'.\n2. Override it in 'RoborockVacuum'.\n3. Assign new 'RoborockVacuum' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nRoborock Q7 yoqildi (Lidar xaritalash boshlandi)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "RoborockVacuum",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice vac = new RoborockVacuum(\"Roborock Q7\");\n        System.out.println(vac.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass RoborockVacuum extends SmartDevice {\n    public RoborockVacuum(String n) { super(n); }\n    @Override\n    public String turnOn() { return name + \" yoqildi (Lidar xaritalash boshlandi)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice vac = new RoborockVacuum(\"Roborock Q7\");\n        System.out.println(vac.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass RoborockVacuum extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 83,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "83. Yandex Go — Dinamik Tarif Hisoblagichi (Dynamic Fare Dispatch)",
      "en": "83. Yandex Go — Dynamic Fare Multiplier Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Go\n\n'RideFare' superklassidan voris oluvchi 'BusinessFare' tirbandlik koeffitsientini 2.5 barobar oshirib hisoblaydi. Dinamik metod chaqiruvi bilan narxni hisoblang.\n\n🎯 QADAMLAR:\n1. 'RideFare' superklassini yarating va unga 'calculateFare' virtual metodini bering.\n2. 'BusinessFare' voris sinfida ushbu metodni qayta yozing.\n3. 'RideFare' turidagi o'zgaruvchiga yangi 'BusinessFare' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nYo'l haqi: 75000.0 UZS",
      "en": "🏢 Context: Yandex Go\n\nCompute business taxi fare using runtime dynamic method dispatch over base fare reference.\n\n🎯 STEPS:\n1. Create superclass 'RideFare' with virtual method 'calculateFare'.\n2. Override it in 'BusinessFare'.\n3. Assign new 'BusinessFare' to a 'RideFare' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nYo'l haqi: 75000.0 UZS"
    },
    "requirements": {
      "classes": [
        "RideFare",
        "BusinessFare",
        "Main"
      ],
      "methods": [
        "calculateFare"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass RideFare {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideFare fare = new BusinessFare(10.0);\n        System.out.println(\"Yo'l haqi: \" + fare.calculateFare() + \" UZS\");\n    }\n}",
    "solution": "class RideFare {\n    protected double distanceKm;\n    public RideFare(double km) { this.distanceKm = km; }\n    public double calculateFare() { return distanceKm * 3000.0; }\n}\nclass BusinessFare extends RideFare {\n    public BusinessFare(double km) { super(km); }\n    @Override\n    public double calculateFare() { return distanceKm * 7500.0; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RideFare fare = new BusinessFare(10.0);\n        System.out.println(\"Yo'l haqi: \" + fare.calculateFare() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class RideFare { ... }\nclass BusinessFare extends RideFare { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 84,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "84. Uzum Tezkor — Dinamik Yetkazib Berish Muddatini Baholash",
      "en": "84. Food Delivery — Dynamic ETA Calculation Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Tezkor\n\n'ExpressCourier' buyurtma vaqtini masofaga qarab velosiped yoki skuter tezligi bo'yicha dinamik aniqlaydi. Superklass havolasi orqali 'estimateMinutes(km)' ni chaqiring.\n\n🎯 QADAMLAR:\n1. 'DeliveryService' superklassini yarating va unga 'estimateMinutes' virtual metodini bering.\n2. 'ExpressCourier' voris sinfida ushbu metodni qayta yozing.\n3. 'DeliveryService' turidagi o'zgaruvchiga yangi 'ExpressCourier' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nYetkazish vaqti: 15 daqiqa",
      "en": "🏢 Context: Uzum Tezkor\n\nDynamic ETA resolution calculating delivery time based on subclass transit mechanism.\n\n🎯 STEPS:\n1. Create superclass 'DeliveryService' with virtual method 'estimateMinutes'.\n2. Override it in 'ExpressCourier'.\n3. Assign new 'ExpressCourier' to a 'DeliveryService' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nYetkazish vaqti: 15 daqiqa"
    },
    "requirements": {
      "classes": [
        "DeliveryService",
        "ExpressCourier",
        "Main"
      ],
      "methods": [
        "estimateMinutes"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass DeliveryService {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryService svc = new ExpressCourier(\"Skuter kuryer\");\n        System.out.println(\"Yetkazish vaqti: \" + svc.estimateMinutes(5.0) + \" daqiqa\");\n    }\n}",
    "solution": "class DeliveryService {\n    protected String courierType;\n    public DeliveryService(String t) { this.courierType = t; }\n    public int estimateMinutes(double km) { return (int)(km * 10); }\n}\nclass ExpressCourier extends DeliveryService {\n    public ExpressCourier(String t) { super(t); }\n    @Override\n    public int estimateMinutes(double km) { return (int)(km * 3); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryService svc = new ExpressCourier(\"Skuter kuryer\");\n        System.out.println(\"Yetkazish vaqti: \" + svc.estimateMinutes(5.0) + \" daqiqa\");\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class DeliveryService { ... }\nclass ExpressCourier extends DeliveryService { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 85,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "85. Smart Doorbell — Dinamik Video Oqimini Boshlash",
      "en": "85. Smart Doorbell — Dynamic Video Stream Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nAqlli eshik qo'ng'irog'i 'SmartDevice' havolasi orqali 'turnOn()' qilinganda 2K video kamerani ishga tushiradi va bulutga jonli translatsiya yuboradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'turnOn' virtual metodini bering.\n2. 'SmartDoorbell' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartDoorbell' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nHovli eshigi yoqildi (2K video translatsiya faol)",
      "en": "🏢 Context: Uzum Smart\n\nSubclass SmartDoorbell overrides turnOn() to initialize live 2K video streaming.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'turnOn'.\n2. Override it in 'SmartDoorbell'.\n3. Assign new 'SmartDoorbell' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nHovli eshigi yoqildi (2K video translatsiya faol)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartDoorbell",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice bell = new SmartDoorbell(\"Hovli eshigi\");\n        System.out.println(bell.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartDoorbell extends SmartDevice {\n    public SmartDoorbell(String n) { super(n); }\n    @Override\n    public String turnOn() { return name + \" yoqildi (2K video translatsiya faol)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice bell = new SmartDoorbell(\"Hovli eshigi\");\n        System.out.println(bell.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartDoorbell extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 86,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "86. Aqlli Konditsioner — Kech Bog'lanish va Inverter Rejimi",
      "en": "86. Smart AC — Inverter Power Modulation Late Binding"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\n'InverterAC' qurilmasi 'executeCommand(\"TURBO\")' buyrug'ini olganda haroratni tezkor sovutish uchun quvvatni 100% ga chiqaradi. Kech bog'lanish bilan chaqiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'executeCommand' virtual metodini bering.\n2. 'InverterAC' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'InverterAC' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nZal konditsioneri: Turbo sovutish faollashtirildi (100% quvvat)",
      "en": "🏢 Context: Artel Smart\n\nInverter AC dynamically handles turbo cooling mode override through SmartDevice base pointer.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'executeCommand'.\n2. Override it in 'InverterAC'.\n3. Assign new 'InverterAC' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nZal konditsioneri: Turbo sovutish faollashtirildi (100% quvvat)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "InverterAC",
        "Main"
      ],
      "methods": [
        "executeCommand"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice ac = new InverterAC(\"Zal konditsioneri\");\n        System.out.println(ac.executeCommand(\"TURBO\"));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String executeCommand(String cmd) { return name + \": Bajarildi\"; }\n}\nclass InverterAC extends SmartDevice {\n    public InverterAC(String n) { super(n); }\n    @Override\n    public String executeCommand(String cmd) {\n        if (\"TURBO\".equals(cmd)) return name + \": Turbo sovutish faollashtirildi (100% quvvat)\";\n        return name + \": Normal rejim\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice ac = new InverterAC(\"Zal konditsioneri\");\n        System.out.println(ac.executeCommand(\"TURBO\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass InverterAC extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 87,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "87. Polimorfik Massivda Kech Bog'lanish Sikli",
      "en": "87. Polymorphic Array Iteration with Dynamic Dispatch"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nLeksiyada ko'rsatilganidek: 'SmartDevice[] devices massividagi har bir element uchun turnOn() chaqirilganda, JVM har bir elementning xotiradagi turiga mos metodni tanlaydi'. Buni massiv bilan isbotlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'turnOn' virtual metodini bering.\n2. 'SmartLamp' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartLamp' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nChiroq yoqildi (Yorug'lik: 100%)\nTermostat yoqildi (Standart harorat: 22°C)",
      "en": "🏢 Context: WIUT Smart Labs\n\nIterate over an array of polymorphic devices and verify that dynamic dispatch invokes the specific turnOn() implementation.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'turnOn'.\n2. Override it in 'SmartLamp'.\n3. Assign new 'SmartLamp' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nChiroq yoqildi (Yorug'lik: 100%)\nTermostat yoqildi (Standart harorat: 22°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice[] list = { new SmartLamp(\"Chiroq\"), new SmartThermostat(\"Termostat\") };\n        for (SmartDevice d : list) {\n            System.out.println(d.turnOn());\n        }\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n}\nclass SmartThermostat extends SmartDevice {\n    public SmartThermostat(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice[] list = { new SmartLamp(\"Chiroq\"), new SmartThermostat(\"Termostat\") };\n        for (SmartDevice d : list) {\n            System.out.println(d.turnOn());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartLamp extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 88,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "88. Universal Pult Tugmasi — Dinamik Holat O'zgarishi",
      "en": "88. Universal Remote Button — Dynamic State Modulation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nUniversal pultdagi 'increase()' tugmasi: chiroq uchun yorug'likni oshiradi, termostat uchun haroratni ko'taradi. Kech bog'lanish orqali buni namoyish eting.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'increase' virtual metodini bering.\n2. 'SmartLamp' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartLamp' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nOshxona lampasi holati: Yorug'lik 80%",
      "en": "🏢 Context: Uzum Smart\n\nUniversal remote button dynamically invokes increase() triggering device-appropriate adjustments.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'increase'.\n2. Override it in 'SmartLamp'.\n3. Assign new 'SmartLamp' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nOshxona lampasi holati: Yorug'lik 80%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "increase"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Oshxona lampasi\", 70);\n        dev.increase();\n        System.out.println(dev.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    protected int level;\n    public SmartDevice(String n, int lvl) { this.name = n; this.level = lvl; }\n    public void increase() {}\n    public String getStatus() { return name; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n, int lvl) { super(n, lvl); }\n    @Override public void increase() { if (level + 10 <= 100) level += 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + level + \"%\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Oshxona lampasi\", 70);\n        dev.increase();\n        System.out.println(dev.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartLamp extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 89,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "89. Dinamik Bog'lanishda Super Chaqiruv Zanjiri",
      "en": "89. Late Binding with super Delegated Method Chaining"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Ecosystem\n\nVoris sinfdagi metod avval superklass metodini chaqirib, so'ngra uning natijasiga qo'shimcha xavfsizlik imzosini qo'shadi. Dinamik zanjirni yarating.\n\n🎯 QADAMLAR:\n1. 'TransactionProcessor' superklassini yarating va unga 'process' virtual metodini bering.\n2. 'BiometricProcessor' voris sinfida ushbu metodni qayta yozing.\n3. 'TransactionProcessor' turidagi o'zgaruvchiga yangi 'BiometricProcessor' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nTranzaksiya TX-505 qayta ishlandi + Biometrik FaceID tasdiqlandi",
      "en": "🏢 Context: Payme Ecosystem\n\nSubclass method overrides parent behavior while delegating to super.process() to append cryptographic signature.\n\n🎯 STEPS:\n1. Create superclass 'TransactionProcessor' with virtual method 'process'.\n2. Override it in 'BiometricProcessor'.\n3. Assign new 'BiometricProcessor' to a 'TransactionProcessor' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nTranzaksiya TX-505 qayta ishlandi + Biometrik FaceID tasdiqlandi"
    },
    "requirements": {
      "classes": [
        "TransactionProcessor",
        "BiometricProcessor",
        "Main"
      ],
      "methods": [
        "process"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass TransactionProcessor {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionProcessor proc = new BiometricProcessor();\n        System.out.println(proc.process(\"TX-505\"));\n    }\n}",
    "solution": "class TransactionProcessor {\n    public String process(String tx) { return \"Tranzaksiya \" + tx + \" qayta ishlandi\"; }\n}\nclass BiometricProcessor extends TransactionProcessor {\n    @Override\n    public String process(String tx) {\n        return super.process(tx) + \" + Biometrik FaceID tasdiqlandi\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TransactionProcessor proc = new BiometricProcessor();\n        System.out.println(proc.process(\"TX-505\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class TransactionProcessor { ... }\nclass BiometricProcessor extends TransactionProcessor { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 90,
    "tier": 6,
    "tierName": "6-Bosqich: Kech Bog'lanish (Late / Dynamic Binding) va Virtual Metodlar",
    "sector": "76-90: Late Binding & Dynamic Method Dispatch",
    "title": {
      "uz": "90. Kech Bog'lanish Xulosasi — VTable va Dinamik Ko'p Formalilik",
      "en": "90. Late Binding Summary — VTable and Dynamic Polymorphism"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Systems\n\nKech bog'lanish (Late Binding) — ob'yektga yo'naltirilgan dasturlashning eng kuchli quroli bo'lib, yangi sinflar qo'shilganda mavjud kodni o'zgartirmasdan tizimni kengaytirish imkonini beradi (Open/Closed Principle). Buni 'SmartDevice' va 'SmartPurifier' bilan yakunlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini yarating va unga 'turnOn' virtual metodini bering.\n2. 'SmartPurifier' voris sinfida ushbu metodni qayta yozing.\n3. 'SmartDevice' turidagi o'zgaruvchiga yangi 'SmartPurifier' ob'yektini biriktiring.\n4. Kech bog'lanish (Late Binding) tufayli aynan subklass metodi chaqirilishini tekshiring.\n\n📊 Kutilayotgan Natija:\nHavo tozalagich yoqildi (Ionizatsiya: Faol)",
      "en": "🏢 Context: WIUT Smart Systems\n\nConclude late binding tier showing how Open-Closed Principle is realized through virtual method tables.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' with virtual method 'turnOn'.\n2. Override it in 'SmartPurifier'.\n3. Assign new 'SmartPurifier' to a 'SmartDevice' reference variable.\n4. Verify dynamic late binding routing execution to subclass implementation at runtime.\n\n📊 Expected Output:\nHavo tozalagich yoqildi (Ionizatsiya: Faol)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartPurifier",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Kech bog'lanish (Dynamic / Late Binding) modelini tuzing\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartPurifier(\"Havo tozalagich\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartPurifier extends SmartDevice {\n    public SmartPurifier(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Ionizatsiya: Faol)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartPurifier(\"Havo tozalagich\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Kech bog'lanish (Late / Dynamic Binding) — chaqiriladigan metodning manzili ish vaqtida (runtime) ob'yektning haqiqiy turiga qarab virtual metodlar jadvali (VTable) orqali aniqlanishidir. Java da barcha no-static, no-final metodlar avtomatik ravishda kech bog'lanadi.",
      "cleanCode": "class SmartDevice { ... }\nclass SmartPurifier extends SmartDevice { ... }",
      "breakdown": [
        "Dinamik bog'lanish: JVM heap xotirasidagi ob'yekt turini o'rganadi.",
        "Virtual Method Table: metod chaqiruvi mos subklass versiyasiga yo'naltiriladi."
      ]
    }
  },
  {
    "id": 91,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "91. SmartLamp ob'yektini SmartDevice havolasiga o'tkazish (Upcasting)",
      "en": "91. Upcasting SmartLamp to SmartDevice Reference"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nWIUT 7-leksiyasida aytilganidek: 'Voris sinf ob'yektini uning superklassi havolasiga biriktirish (Upcasting) doimo xavfsiz va avtomatik (implicit) amalga oshadi'. SmartLamp ob'yektini SmartDevice turidagi o'zgaruvchiga o'tkazing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan meros oluvchi 'SmartLamp' sinfini tuzing.\n2. 'SmartLamp' ob'yektini 'SmartDevice' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nYotoqxona lampasi yoqildi (Yorug'lik: 100%)",
      "en": "🏢 Context: Uzum Smart\n\nDemonstrate implicit, safe upcasting from SmartLamp subclass to SmartDevice superclass reference.\n\n🎯 STEPS:\n1. Declare superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Upcast instance of 'SmartLamp' to a 'SmartDevice' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nYotoqxona lampasi yoqildi (Yorug'lik: 100%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Yotoqxona lampasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Yotoqxona lampasi\");\n        System.out.println(dev.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "SmartDevice ref = new SmartLamp(...);\nref.turnOn(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>SmartDevice ref = new SmartLamp(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 92,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "92. Upcasting va Ko'rinish Chegarasi (Reference Boundary)",
      "en": "92. Reference Type Boundary Restricting Subclass Specific Methods"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nLeksiyada ko'rsatilganidek: 'SmartDevice dev = new Thermostat()' qilinganda dev orqali faqat SmartDevice da e'lon qilingan metodlar ko'rinadi. Thermostatning getTargetTemp() metodi superklassda yo'qligi sababli umumiy getStatus() orqali ma'lumot olinadi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan meros oluvchi 'Thermostat' sinfini tuzing.\n2. 'Thermostat' ob'yektini 'SmartDevice' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nKonditsioner termostati: 24°C",
      "en": "🏢 Context: Artel Smart\n\nUnderstand that the reference type dictates accessible method signatures even after upcasting.\n\n🎯 STEPS:\n1. Declare superclass 'SmartDevice' and specialized subclass 'Thermostat'.\n2. Upcast instance of 'Thermostat' to a 'SmartDevice' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nKonditsioner termostati: 24°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "Thermostat",
        "Main"
      ],
      "methods": [
        "getStatus"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new Thermostat(\"Konditsioner termostati\", 24);\n        System.out.println(dev.getStatus());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getStatus() { return name; }\n}\nclass Thermostat extends SmartDevice {\n    private int temp;\n    public Thermostat(String n, int t) { super(n); this.temp = t; }\n    @Override public String getStatus() { return name + \": \" + temp + \"°C\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new Thermostat(\"Konditsioner termostati\", 24);\n        System.out.println(dev.getStatus());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "SmartDevice ref = new Thermostat(...);\nref.getStatus(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>SmartDevice ref = new Thermostat(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 93,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "93. Parametrda Upcasting — Universal Metod Argumenti",
      "en": "93. Parameter Upcasting for General Device Processing"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Controller\n\nMetod argumentiga superklass turi ko'rsatilsa, unga har qanday voris ob'yektni uzatish mumkin (avtomatik upcasting). 'Controller.register(SmartDevice dev)' metodini sinab ko'ring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan meros oluvchi 'SmartSpeaker' sinfini tuzing.\n2. 'SmartSpeaker' ob'yektini 'SmartDevice' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nQurilma tekshirildi: Echo Mini yoqildi (Ovoz: 40%)",
      "en": "🏢 Context: WIUT Smart Controller\n\nPass subclass instance to a method expecting superclass parameter, demonstrating polymorphic argument passing.\n\n🎯 STEPS:\n1. Declare superclass 'SmartDevice' and specialized subclass 'SmartSpeaker'.\n2. Upcast instance of 'SmartSpeaker' to a 'SmartDevice' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nQurilma tekshirildi: Echo Mini yoqildi (Ovoz: 40%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Echo Mini\");\n        System.out.println(SmartController.inspect(spk));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n}\nclass SmartController {\n    public static String inspect(SmartDevice d) {\n        return \"Qurilma tekshirildi: \" + d.turnOn();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice spk = new SmartSpeaker(\"Echo Mini\");\n        System.out.println(SmartController.inspect(spk));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "SmartDevice ref = new SmartSpeaker(...);\nref.turnOn(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>SmartDevice ref = new SmartSpeaker(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 94,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "94. Upcasting Orqali Polimorfik Ro'yxat (ArrayList<SmartDevice>)",
      "en": "94. Upcasting into Polymorphic Generic List"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Home\n\nHar xil turdagi qurilmalarni bitta umumiy 'ArrayList<SmartDevice>' ro'yxatiga yig'ish upcasting orqali amalga oshadi. Chiroq va Karnayni umumiy ro'yxatga qo'shing.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan meros oluvchi 'SmartLamp' sinfini tuzing.\n2. 'SmartLamp' ob'yektini 'SmartDevice' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nLamp-1 yoqildi (Yorug'lik: 100%)\nSpk-1 yoqildi (Ovoz: 40%)",
      "en": "🏢 Context: Uzum Home\n\nAggregate heterogeneous child objects into a homogeneous generic list of superclass references.\n\n🎯 STEPS:\n1. Declare superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Upcast instance of 'SmartLamp' to a 'SmartDevice' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nLamp-1 yoqildi (Yorug'lik: 100%)\nSpk-1 yoqildi (Ovoz: 40%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        java.util.List<SmartDevice> devices = new java.util.ArrayList<>();\n        devices.add(new SmartLamp(\"Lamp-1\"));\n        devices.add(new SmartSpeaker(\"Spk-1\"));\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        java.util.List<SmartDevice> devices = new java.util.ArrayList<>();\n        devices.add(new SmartLamp(\"Lamp-1\"));\n        devices.add(new SmartSpeaker(\"Spk-1\"));\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "SmartDevice ref = new SmartLamp(...);\nref.turnOn(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>SmartDevice ref = new SmartLamp(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 95,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "95. Bank Karta Ierarxiyasida Upcasting",
      "en": "95. Banking Card Hierarchy Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Fintech\n\n'Uzcard' ob'yektini umumiy 'BankCard' superklassi havolasiga upcast qiling va 'pay(amount)' metodini polimorfik chaqiring.\n\n🎯 QADAMLAR:\n1. 'BankCard' superklassini va undan meros oluvchi 'Uzcard' sinfini tuzing.\n2. 'Uzcard' ob'yektini 'BankCard' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nUzcard 86001234 orqali 50000.0 UZS to'landi. Qoldiq: 150000.0 UZS",
      "en": "🏢 Context: Payme Fintech\n\nUpcast Uzcard to BankCard superclass reference and execute polymorphic transaction payment.\n\n🎯 STEPS:\n1. Declare superclass 'BankCard' and specialized subclass 'Uzcard'.\n2. Upcast instance of 'Uzcard' to a 'BankCard' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nUzcard 86001234 orqali 50000.0 UZS to'landi. Qoldiq: 150000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Uzcard",
        "Main"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass BankCard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new Uzcard(\"86001234\", 200000.0);\n        System.out.println(card.pay(50000.0));\n    }\n}",
    "solution": "class BankCard {\n    protected String pan;\n    protected double balance;\n    public BankCard(String pan, double bal) { this.pan = pan; this.balance = bal; }\n    public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"To'landi\"; }\n        return \"Mablag' yetarli emas\";\n    }\n}\nclass Uzcard extends BankCard {\n    public Uzcard(String p, double b) { super(p, b); }\n    @Override public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"Uzcard \" + pan + \" orqali \" + amt + \" UZS to'landi. Qoldiq: \" + balance + \" UZS\"; }\n        return \"Uzcard balansida mablag' yetarli emas\";\n    }\n}\nclass HumoCard extends BankCard {\n    public HumoCard(String p, double b) { super(p, b); }\n    @Override public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"HumoCard \" + pan + \" orqali \" + amt + \" UZS to'landi. Qoldiq: \" + balance + \" UZS\"; }\n        return \"HumoCard balansida mablag' yetarli emas\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new Uzcard(\"86001234\", 200000.0);\n        System.out.println(card.pay(50000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "BankCard ref = new Uzcard(...);\nref.pay(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>BankCard ref = new Uzcard(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 96,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "96. Humo Kartasini Upcast Qilish va Komissiyasiz To'lov",
      "en": "96. Upcasting Humo Card with Zero Commission"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Ecosystem\n\n'HumoCard' ob'yektini umumiy 'BankCard' havolasiga o'tkazing va to'lovni tasdiqlang.\n\n🎯 QADAMLAR:\n1. 'BankCard' superklassini va undan meros oluvchi 'HumoCard' sinfini tuzing.\n2. 'HumoCard' ob'yektini 'BankCard' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nHumoCard 98604321 orqali 100000.0 UZS to'landi. Qoldiq: 200000.0 UZS",
      "en": "🏢 Context: Click Ecosystem\n\nUpcast HumoCard to BankCard superclass reference and execute contact-less card settlement.\n\n🎯 STEPS:\n1. Declare superclass 'BankCard' and specialized subclass 'HumoCard'.\n2. Upcast instance of 'HumoCard' to a 'BankCard' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nHumoCard 98604321 orqali 100000.0 UZS to'landi. Qoldiq: 200000.0 UZS"
    },
    "requirements": {
      "classes": [
        "BankCard",
        "HumoCard",
        "Main"
      ],
      "methods": [
        "pay"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass BankCard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new HumoCard(\"98604321\", 300000.0);\n        System.out.println(card.pay(100000.0));\n    }\n}",
    "solution": "class BankCard {\n    protected String pan;\n    protected double balance;\n    public BankCard(String pan, double bal) { this.pan = pan; this.balance = bal; }\n    public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"To'landi\"; }\n        return \"Mablag' yetarli emas\";\n    }\n}\nclass Uzcard extends BankCard {\n    public Uzcard(String p, double b) { super(p, b); }\n    @Override public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"Uzcard \" + pan + \" orqali \" + amt + \" UZS to'landi. Qoldiq: \" + balance + \" UZS\"; }\n        return \"Uzcard balansida mablag' yetarli emas\";\n    }\n}\nclass HumoCard extends BankCard {\n    public HumoCard(String p, double b) { super(p, b); }\n    @Override public String pay(double amt) {\n        if (amt <= balance) { balance -= amt; return \"HumoCard \" + pan + \" orqali \" + amt + \" UZS to'landi. Qoldiq: \" + balance + \" UZS\"; }\n        return \"HumoCard balansida mablag' yetarli emas\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new HumoCard(\"98604321\", 300000.0);\n        System.out.println(card.pay(100000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "BankCard ref = new HumoCard(...);\nref.pay(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>BankCard ref = new HumoCard(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 97,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "97. Object Sinfga Upcasting (Universal Java Root)",
      "en": "97. Upcasting to Java Object Root Class"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Core\n\nJava da barcha sinflar 'java.lang.Object' dan meros oladi. Har qanday ob'yekt 'Object' turiga bemalol upcast bo'ladi va 'toString()' dinamik ishlaydi.\n\n🎯 QADAMLAR:\n1. 'Object' superklassini va undan meros oluvchi 'SmartDevice' sinfini tuzing.\n2. 'SmartDevice' ob'yektini 'Object' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nSmartDevice[nomi=Markaziy Hub]",
      "en": "🏢 Context: WIUT Core\n\nUpcast any domain instance to java.lang.Object and verify dynamic dispatch on toString().\n\n🎯 STEPS:\n1. Declare superclass 'Object' and specialized subclass 'SmartDevice'.\n2. Upcast instance of 'SmartDevice' to a 'Object' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nSmartDevice[nomi=Markaziy Hub]"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartDevice",
        "Main"
      ],
      "methods": [
        "toString"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Object obj = new SmartDevice(\"Markaziy Hub\");\n        System.out.println(obj.toString());\n    }\n}",
    "solution": "class SmartDevice {\n    private String name;\n    public SmartDevice(String n) { this.name = n; }\n    @Override public String toString() { return \"SmartDevice[nomi=\" + name + \"]\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Object obj = new SmartDevice(\"Markaziy Hub\");\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Object ref = new SmartDevice(...);\nref.toString(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Object ref = new SmartDevice(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 98,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "98. Avtomobil Ierarxiyasida Upcasting (Vehicle -> DeliveryVan)",
      "en": "98. Fleet Vehicle Hierarchy Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Delivery\n\n'DeliveryVan' yuk mashinasi 'Vehicle' superklassiga upcast qilinadi va umumiy yo'l marshrutini hisoblaydi.\n\n🎯 QADAMLAR:\n1. 'Vehicle' superklassini va undan meros oluvchi 'DeliveryVan' sinfini tuzing.\n2. 'DeliveryVan' ob'yektini 'Vehicle' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nFord Transit Chilonzor yo'nalishida safarga chiqdi (Yuk: 1500.0 kg)",
      "en": "🏢 Context: Yandex Delivery\n\nUpcast DeliveryVan to Vehicle reference and compute total trip distance.\n\n🎯 STEPS:\n1. Declare superclass 'Vehicle' and specialized subclass 'DeliveryVan'.\n2. Upcast instance of 'DeliveryVan' to a 'Vehicle' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nFord Transit Chilonzor yo'nalishida safarga chiqdi (Yuk: 1500.0 kg)"
    },
    "requirements": {
      "classes": [
        "Vehicle",
        "DeliveryVan",
        "Main"
      ],
      "methods": [
        "startTrip"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass Vehicle {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Vehicle v = new DeliveryVan(\"Ford Transit\", 1500.0);\n        System.out.println(v.startTrip(\"Chilonzor\"));\n    }\n}",
    "solution": "class Vehicle {\n    protected String model;\n    public Vehicle(String m) { this.model = m; }\n    public String startTrip(String dest) { return model + \" safarga chiqdi\"; }\n}\nclass DeliveryVan extends Vehicle {\n    private double cargoKg;\n    public DeliveryVan(String m, double c) { super(m); this.cargoKg = c; }\n    @Override public String startTrip(String dest) {\n        return model + \" \" + dest + \" yo'nalishida safarga chiqdi (Yuk: \" + cargoKg + \" kg)\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Vehicle v = new DeliveryVan(\"Ford Transit\", 1500.0);\n        System.out.println(v.startTrip(\"Chilonzor\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Vehicle ref = new DeliveryVan(...);\nref.startTrip(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Vehicle ref = new DeliveryVan(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 99,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "99. Xabarnoma Tizimida Upcasting (Notification -> SMSNotification)",
      "en": "99. Notification System Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Korzinka Alerts\n\n'SMSNotification' ob'yektini umumiy 'Notification' havolasiga biriktirib 'send(message)' metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'Notification' superklassini va undan meros oluvchi 'SMSNotification' sinfini tuzing.\n2. 'SMSNotification' ob'yektini 'Notification' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nSMS yuborildi [+998901234567]: Sizning chekingiz tayyor",
      "en": "🏢 Context: Korzinka Alerts\n\nUpcast SMSNotification to base Notification pointer and dispatch customer notification.\n\n🎯 STEPS:\n1. Declare superclass 'Notification' and specialized subclass 'SMSNotification'.\n2. Upcast instance of 'SMSNotification' to a 'Notification' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nSMS yuborildi [+998901234567]: Sizning chekingiz tayyor"
    },
    "requirements": {
      "classes": [
        "Notification",
        "SMSNotification",
        "Main"
      ],
      "methods": [
        "send"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass Notification {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notification notif = new SMSNotification(\"+998901234567\");\n        System.out.println(notif.send(\"Sizning chekingiz tayyor\"));\n    }\n}",
    "solution": "class Notification {\n    public String send(String msg) { return msg; }\n}\nclass SMSNotification extends Notification {\n    private String phone;\n    public SMSNotification(String p) { this.phone = p; }\n    @Override public String send(String msg) { return \"SMS yuborildi [\" + phone + \"]: \" + msg; }\n}\nclass PushNotification extends Notification {\n    private String token;\n    public PushNotification(String t) { this.token = t; }\n    @Override public String send(String msg) { return \"Push-xabar [\" + token + \"]: \" + msg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notification notif = new SMSNotification(\"+998901234567\");\n        System.out.println(notif.send(\"Sizning chekingiz tayyor\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Notification ref = new SMSNotification(...);\nref.send(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Notification ref = new SMSNotification(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 100,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "100. Push-xabarnomani Upcasting Qilish",
      "en": "100. Push Notification Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum App\n\n'PushNotification' ob'yektini superklass 'Notification' havolasi orqali boshqaring.\n\n🎯 QADAMLAR:\n1. 'Notification' superklassini va undan meros oluvchi 'PushNotification' sinfini tuzing.\n2. 'PushNotification' ob'yektini 'Notification' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nPush-xabar [DEVICE-TOKEN-99]: Buyurtmangiz yetkazildi!",
      "en": "🏢 Context: Uzum App\n\nUpcast PushNotification to Notification and broadcast mobile alert.\n\n🎯 STEPS:\n1. Declare superclass 'Notification' and specialized subclass 'PushNotification'.\n2. Upcast instance of 'PushNotification' to a 'Notification' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nPush-xabar [DEVICE-TOKEN-99]: Buyurtmangiz yetkazildi!"
    },
    "requirements": {
      "classes": [
        "Notification",
        "PushNotification",
        "Main"
      ],
      "methods": [
        "send"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass Notification {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notification notif = new PushNotification(\"DEVICE-TOKEN-99\");\n        System.out.println(notif.send(\"Buyurtmangiz yetkazildi!\"));\n    }\n}",
    "solution": "class Notification {\n    public String send(String msg) { return msg; }\n}\nclass SMSNotification extends Notification {\n    private String phone;\n    public SMSNotification(String p) { this.phone = p; }\n    @Override public String send(String msg) { return \"SMS yuborildi [\" + phone + \"]: \" + msg; }\n}\nclass PushNotification extends Notification {\n    private String token;\n    public PushNotification(String t) { this.token = t; }\n    @Override public String send(String msg) { return \"Push-xabar [\" + token + \"]: \" + msg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notification notif = new PushNotification(\"DEVICE-TOKEN-99\");\n        System.out.println(notif.send(\"Buyurtmangiz yetkazildi!\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Notification ref = new PushNotification(...);\nref.send(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Notification ref = new PushNotification(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 101,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "101. Restoran Taomlari Ierarxiyasida Upcasting (Dish -> Plov)",
      "en": "101. Restaurant Menu Item Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Chorsu Oshxonasi\n\n'Plov' taomini umumiy 'Dish' superklassiga upcast qilib, uning to'liq tavsifini oling.\n\n🎯 QADAMLAR:\n1. 'Dish' superklassini va undan meros oluvchi 'Plov' sinfini tuzing.\n2. 'Plov' ob'yektini 'Dish' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nTaom: To'y Oshi | Narxi: 45000.0 UZS | Maxsus: Qazi bilan",
      "en": "🏢 Context: Chorsu Oshxonasi\n\nUpcast Plov subclass to MenuItem Dish superclass and print preparation detail.\n\n🎯 STEPS:\n1. Declare superclass 'Dish' and specialized subclass 'Plov'.\n2. Upcast instance of 'Plov' to a 'Dish' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nTaom: To'y Oshi | Narxi: 45000.0 UZS | Maxsus: Qazi bilan"
    },
    "requirements": {
      "classes": [
        "Dish",
        "Plov",
        "Main"
      ],
      "methods": [
        "getDescription"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass Dish {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Plov(\"To'y Oshi\", 45000.0, true);\n        System.out.println(dish.getDescription());\n    }\n}",
    "solution": "class Dish {\n    protected String title;\n    protected double price;\n    public Dish(String t, double p) { this.title = t; this.price = p; }\n    public String getDescription() { return title + \" (\" + price + \" UZS)\"; }\n}\nclass Plov extends Dish {\n    private boolean withQazi;\n    public Plov(String t, double p, boolean q) { super(t, p); this.withQazi = q; }\n    @Override public String getDescription() {\n        return \"Taom: \" + title + \" | Narxi: \" + price + \" UZS | Maxsus: \" + (withQazi ? \"Qazi bilan\" : \"Oddiy\");\n    }\n}\nclass Shawarma extends Dish {\n    private String sauce;\n    public Shawarma(String t, double p, String s) { super(t, p); this.sauce = s; }\n    @Override public String getDescription() {\n        return \"Taom: \" + title + \" | Narxi: \" + price + \" UZS | Sous: \" + sauce;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Plov(\"To'y Oshi\", 45000.0, true);\n        System.out.println(dish.getDescription());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Dish ref = new Plov(...);\nref.getDescription(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Dish ref = new Plov(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 102,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "102. Chorsu Shovurma — Dish Hafta Maxsus Taomi",
      "en": "102. Specialty Wrap Upcast to Menu Dish"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Chorsu FastFood\n\n'Shawarma' ob'yektini umumiy 'Dish' havolasiga o'tkazing va tavsifini chiqaring.\n\n🎯 QADAMLAR:\n1. 'Dish' superklassini va undan meros oluvchi 'Shawarma' sinfini tuzing.\n2. 'Shawarma' ob'yektini 'Dish' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nTaom: Katta Shovurma | Narxi: 32000.0 UZS | Sous: Achchiq",
      "en": "🏢 Context: Chorsu FastFood\n\nUpcast Shawarma to base Dish reference displaying portion details.\n\n🎯 STEPS:\n1. Declare superclass 'Dish' and specialized subclass 'Shawarma'.\n2. Upcast instance of 'Shawarma' to a 'Dish' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nTaom: Katta Shovurma | Narxi: 32000.0 UZS | Sous: Achchiq"
    },
    "requirements": {
      "classes": [
        "Dish",
        "Shawarma",
        "Main"
      ],
      "methods": [
        "getDescription"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass Dish {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Shawarma(\"Katta Shovurma\", 32000.0, \"Achchiq\");\n        System.out.println(dish.getDescription());\n    }\n}",
    "solution": "class Dish {\n    protected String title;\n    protected double price;\n    public Dish(String t, double p) { this.title = t; this.price = p; }\n    public String getDescription() { return title + \" (\" + price + \" UZS)\"; }\n}\nclass Plov extends Dish {\n    private boolean withQazi;\n    public Plov(String t, double p, boolean q) { super(t, p); this.withQazi = q; }\n    @Override public String getDescription() {\n        return \"Taom: \" + title + \" | Narxi: \" + price + \" UZS | Maxsus: \" + (withQazi ? \"Qazi bilan\" : \"Oddiy\");\n    }\n}\nclass Shawarma extends Dish {\n    private String sauce;\n    public Shawarma(String t, double p, String s) { super(t, p); this.sauce = s; }\n    @Override public String getDescription() {\n        return \"Taom: \" + title + \" | Narxi: \" + price + \" UZS | Sous: \" + sauce;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Shawarma(\"Katta Shovurma\", 32000.0, \"Achchiq\");\n        System.out.println(dish.getDescription());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "Dish ref = new Shawarma(...);\nref.getDescription(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>Dish ref = new Shawarma(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 103,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "103. Foydalanuvchi Huquqlari Ierarxiyasida Upcasting (User -> AdminUser)",
      "en": "103. User Hierarchy Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Portal\n\n'AdminUser' ob'yektini umumiy 'User' havolasiga upcast qiling va 'getRole()' metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'User' superklassini va undan meros oluvchi 'AdminUser' sinfini tuzing.\n2. 'AdminUser' ob'yektini 'User' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nFoydalanuvchi: admin@wiut.uz | Roli: Tizim Administratori",
      "en": "🏢 Context: WIUT Portal\n\nUpcast AdminUser to base User handle and retrieve authenticated role.\n\n🎯 STEPS:\n1. Declare superclass 'User' and specialized subclass 'AdminUser'.\n2. Upcast instance of 'AdminUser' to a 'User' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nFoydalanuvchi: admin@wiut.uz | Roli: Tizim Administratori"
    },
    "requirements": {
      "classes": [
        "User",
        "AdminUser",
        "Main"
      ],
      "methods": [
        "getRole"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass User {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new AdminUser(\"admin@wiut.uz\");\n        System.out.println(u.getRole());\n    }\n}",
    "solution": "class User {\n    protected String email;\n    public User(String e) { this.email = e; }\n    public String getRole() { return \"Foydalanuvchi: \" + email; }\n}\nclass AdminUser extends User {\n    public AdminUser(String e) { super(e); }\n    @Override public String getRole() { return \"Foydalanuvchi: \" + email + \" | Roli: Tizim Administratori\"; }\n}\nclass StudentUser extends User {\n    private String studentId;\n    public StudentUser(String e, String id) { super(e); this.studentId = id; }\n    @Override public String getRole() { return \"Foydalanuvchi: \" + email + \" | Roli: Talaba (ID: \" + studentId + \")\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new AdminUser(\"admin@wiut.uz\");\n        System.out.println(u.getRole());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "User ref = new AdminUser(...);\nref.getRole(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>User ref = new AdminUser(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 104,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "104. Talaba Huquqlarini Upcast Qilish (User -> StudentUser)",
      "en": "104. Student User Upcasting"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Portal\n\n'StudentUser' sinfini 'User' superklassi havolasiga upcast qiling.\n\n🎯 QADAMLAR:\n1. 'User' superklassini va undan meros oluvchi 'StudentUser' sinfini tuzing.\n2. 'StudentUser' ob'yektini 'User' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nFoydalanuvchi: std000123@wiut.uz | Roli: Talaba (ID: 00012345)",
      "en": "🏢 Context: WIUT Portal\n\nUpcast StudentUser to base User handle displaying student credentials.\n\n🎯 STEPS:\n1. Declare superclass 'User' and specialized subclass 'StudentUser'.\n2. Upcast instance of 'StudentUser' to a 'User' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nFoydalanuvchi: std000123@wiut.uz | Roli: Talaba (ID: 00012345)"
    },
    "requirements": {
      "classes": [
        "User",
        "StudentUser",
        "Main"
      ],
      "methods": [
        "getRole"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass User {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new StudentUser(\"std000123@wiut.uz\", \"00012345\");\n        System.out.println(u.getRole());\n    }\n}",
    "solution": "class User {\n    protected String email;\n    public User(String e) { this.email = e; }\n    public String getRole() { return \"Foydalanuvchi: \" + email; }\n}\nclass AdminUser extends User {\n    public AdminUser(String e) { super(e); }\n    @Override public String getRole() { return \"Foydalanuvchi: \" + email + \" | Roli: Tizim Administratori\"; }\n}\nclass StudentUser extends User {\n    private String studentId;\n    public StudentUser(String e, String id) { super(e); this.studentId = id; }\n    @Override public String getRole() { return \"Foydalanuvchi: \" + email + \" | Roli: Talaba (ID: \" + studentId + \")\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new StudentUser(\"std000123@wiut.uz\", \"00012345\");\n        System.out.println(u.getRole());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "User ref = new StudentUser(...);\nref.getRole(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>User ref = new StudentUser(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 105,
    "tier": 7,
    "tierName": "7-Bosqich: Yuqoriga Tip O'tkazish (Upcasting) va Chegaralar",
    "sector": "91-105: Upcasting & Reference Boundaries",
    "title": {
      "uz": "105. Upcasting Xulosasi — Umumlashtirish va Xavfsizlik",
      "en": "105. Upcasting Principles — Generalization and Type Safety"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT OOP Labs\n\nUpcasting orqali barcha quyi sinflarni yagona interfeys yoki superklass ostida birlashtirib, 'Polymorphism' ning asosiy afzalligi bo'lgan umumlashtirishga erishamiz. Buni xulosa qilib tasdiqlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan meros oluvchi 'SmartLamp' sinfini tuzing.\n2. 'SmartLamp' ob'yektini 'SmartDevice' turidagi o'zgaruvchiga o'tkazing (Upcasting).\n3. Superklass havolasi orqali metodni chaqiring va ekranga chiqaring.\n\n📊 Kutilayotgan Natija:\nUpcasting muvaffaqiyatli: Smart LED yoqildi (Yorug'lik: 100%)",
      "en": "🏢 Context: WIUT OOP Labs\n\nConclude Upcasting tier verifying uniform abstraction across specialized instances.\n\n🎯 STEPS:\n1. Declare superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Upcast instance of 'SmartLamp' to a 'SmartDevice' reference variable.\n3. Invoke method via superclass handle and print result.\n\n📊 Expected Output:\nUpcasting muvaffaqiyatli: Smart LED yoqildi (Yorug'lik: 100%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "turnOn"
      ]
    },
    "starterCode": "// Upcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice d1 = new SmartLamp(\"Smart LED\");\n        System.out.println(\"Upcasting muvaffaqiyatli: \" + d1.turnOn());\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String turnOn() { return name + \" yoqildi\"; }\n}\nclass SmartLamp extends SmartDevice {\n    public SmartLamp(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice d1 = new SmartLamp(\"Smart LED\");\n        System.out.println(\"Upcasting muvaffaqiyatli: \" + d1.turnOn());\n    }\n}",
    "detailedSolution": {
      "theory": "Upcasting — voris sinf ob'yektini uning superklassi havolasiga biriktirishdir (Super s = new Sub()). Bu amaliyot doimo xavfsiz va avtomatik (implicit) bajariladi. Bunda havola turi chaqirilishi mumkin bo'lgan metodlar chegarasini belgilaydi.",
      "cleanCode": "SmartDevice ref = new SmartLamp(...);\nref.turnOn(...);",
      "breakdown": [
        "Avtomatik (implicit) tip o'tkazish: <code>SmartDevice ref = new SmartLamp(...)</code>",
        "Ko'rinish chegarasi: faqat superklassda e'lon qilingan metodlar chaqirilishi mumkin."
      ]
    }
  },
  {
    "id": 106,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "106. SmartDevice dan SmartLamp ga Xavfsiz Downcast Qilish",
      "en": "106. Safe Downcasting from SmartDevice to SmartLamp"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart\n\nWIUT 7-leksiyasida aytilganidek: 'Superklass havolasida turgan ob'yektning maxsus metodlariga (masalan, SmartLamp ning setBrightness) murojaat qilish uchun uni quyi sinfga o'tkazish (Downcasting) kerak. Xatolikning oldini olish uchun har doim avval instanceof bilan tekshirish shart!'. Lampochkani xavfsiz downcast qiling.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartLamp' sinfini yarating.\n2. 'SmartLamp' da faqat o'zigagina xos bo'lgan 'setBrightness' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartLamp' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartLamp)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nZal chirog'i holati: Yorug'lik 85%",
      "en": "🏢 Context: Uzum Smart\n\nSafely downcast SmartDevice handle to SmartLamp using instanceof guard to invoke setBrightness().\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Declare specialized method 'setBrightness' exclusive to 'SmartLamp'.\n3. Safely verify runtime type using 'instanceof SmartLamp'.\n4. Explicitly downcast '(SmartLamp)' and call specialized method.\n\n📊 Expected Output:\nZal chirog'i holati: Yorug'lik 85%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "setBrightness"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Zal chirog'i\");\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            lamp.setBrightness(85);\n            System.out.println(lamp.getStatus());\n        }\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Zal chirog'i\");\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            lamp.setBrightness(85);\n            System.out.println(lamp.getStatus());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartLamp) {\n    SmartLamp sub = (SmartLamp) ref;\n    sub.setBrightness(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartLamp) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 107,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "107. ClassCastException Xatoligining Oldini Olish",
      "en": "107. Preventing ClassCastException with instanceof Guard"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nLeksiyada ko'rsatilganidek: 'Agar SmartSpeaker ob'yektini SmartLamp ga zo'rlab cast qilsak, JVM ClassCastException otadi!'. Agar ob'yekt SmartLamp bo'lmasa, 'Mos kelmaydigan tur' degan xavfsiz xabar chiqaring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartSpeaker' sinfini yarating.\n2. 'SmartSpeaker' da faqat o'zigagina xos bo'lgan 'checkAndCast' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartSpeaker' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartSpeaker)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nXavfsiz chek: dev ob'yekti SmartLamp emas!",
      "en": "🏢 Context: Artel Smart\n\nDemonstrate negative branch of instanceof preventing runtime ClassCastException.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartSpeaker'.\n2. Declare specialized method 'checkAndCast' exclusive to 'SmartSpeaker'.\n3. Safely verify runtime type using 'instanceof SmartSpeaker'.\n4. Explicitly downcast '(SmartSpeaker)' and call specialized method.\n\n📊 Expected Output:\nXavfsiz chek: dev ob'yekti SmartLamp emas!"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "checkAndCast"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Alisa mini\");\n        System.out.println(SmartSpeaker.checkAndCast(dev));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Alisa mini\");\n        System.out.println(SmartSpeaker.checkAndCast(dev));\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartSpeaker) {\n    SmartSpeaker sub = (SmartSpeaker) ref;\n    sub.checkAndCast(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartSpeaker) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 108,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "108. SmartThermostat ga Downcast va Maqsadli Haroratni O'qish",
      "en": "108. Downcasting to SmartThermostat to Access Target Temperature"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart\n\nSuperklass 'SmartDevice' da 'getTargetTemp()' yo'q. 'instanceof' orqali tekshirib, ob'yektni 'SmartThermostat' ga downcast qiling va maqsadli haroratni ekranga chiqaring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartThermostat' sinfini yarating.\n2. 'SmartThermostat' da faqat o'zigagina xos bo'lgan 'getTargetTemp' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartThermostat' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartThermostat)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nMaqsadli harorat: 23°C",
      "en": "🏢 Context: Artel Smart\n\nDowncast SmartDevice reference to SmartThermostat and call getTargetTemp().\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartThermostat'.\n2. Declare specialized method 'getTargetTemp' exclusive to 'SmartThermostat'.\n3. Safely verify runtime type using 'instanceof SmartThermostat'.\n4. Explicitly downcast '(SmartThermostat)' and call specialized method.\n\n📊 Expected Output:\nMaqsadli harorat: 23°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartThermostat",
        "Main"
      ],
      "methods": [
        "getTargetTemp"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"Smart Termostat\", 23);\n        if (dev instanceof SmartThermostat) {\n            SmartThermostat t = (SmartThermostat) dev;\n            System.out.println(\"Maqsadli harorat: \" + t.getTargetTemp() + \"°C\");\n        }\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n}\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp;\n    public SmartThermostat(String n, int t) { super(n); this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartThermostat(\"Smart Termostat\", 23);\n        if (dev instanceof SmartThermostat) {\n            SmartThermostat t = (SmartThermostat) dev;\n            System.out.println(\"Maqsadli harorat: \" + t.getTargetTemp() + \"°C\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartThermostat) {\n    SmartThermostat sub = (SmartThermostat) ref;\n    sub.getTargetTemp(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartThermostat) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 109,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "109. SmartSpeaker ga Downcast va Sevimli Radiostansiyani O'rnatish",
      "en": "109. Downcasting to SmartSpeaker for Radio Tuning"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Yandex Smart\n\nSmartSpeaker ob'yektini umumiy qurilma havolasidan 'SmartSpeaker' ga xavfsiz o'tkazib, uning 'playRadio(station)' maxsus metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartSpeaker' sinfini yarating.\n2. 'SmartSpeaker' da faqat o'zigagina xos bo'lgan 'playRadio' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartSpeaker' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartSpeaker)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nYandex Midi: 'Navo FM' radiostansiyasi yangramoqda",
      "en": "🏢 Context: Yandex Smart\n\nDowncast base handle to SmartSpeaker and invoke subclass-exclusive radio streaming feature.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartSpeaker'.\n2. Declare specialized method 'playRadio' exclusive to 'SmartSpeaker'.\n3. Safely verify runtime type using 'instanceof SmartSpeaker'.\n4. Explicitly downcast '(SmartSpeaker)' and call specialized method.\n\n📊 Expected Output:\nYandex Midi: 'Navo FM' radiostansiyasi yangramoqda"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartSpeaker",
        "Main"
      ],
      "methods": [
        "playRadio"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Yandex Midi\");\n        if (dev instanceof SmartSpeaker) {\n            SmartSpeaker spk = (SmartSpeaker) dev;\n            System.out.println(spk.playRadio(\"Navo FM\"));\n        }\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public String playRadio(String station) {\n        return name + \": '\" + station + \"' radiostansiyasi yangramoqda\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartSpeaker(\"Yandex Midi\");\n        if (dev instanceof SmartSpeaker) {\n            SmartSpeaker spk = (SmartSpeaker) dev;\n            System.out.println(spk.playRadio(\"Navo FM\"));\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartSpeaker) {\n    SmartSpeaker sub = (SmartSpeaker) ref;\n    sub.playRadio(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartSpeaker) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 110,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "110. Bank Karta Ierarxiyasida Downcast va Keshbekni Faollashtirish",
      "en": "110. Downcasting to PremiumCard for Cashback Activation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Payme Fintech\n\nAgar 'BankCard' havolasidagi ob'yekt 'PremiumCard' bo'lsa, uni downcast qilib 'enableCashback(2.0)' maxsus imkoniyatini ishga tushiring.\n\n🎯 QADAMLAR:\n1. 'BankCard' superklassini va undan voris oluvchi 'PremiumCard' sinfini yarating.\n2. 'PremiumCard' da faqat o'zigagina xos bo'lgan 'enableCashback' metodini e'lon qiling.\n3. 'BankCard' havolasidagi ob'yekt turini 'instanceof PremiumCard' bilan xavfsiz tekshiring.\n4. Ob'yektni '(PremiumCard)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nPremiumCard 86009999 uchun 2.5% keshbek faollashtirildi",
      "en": "🏢 Context: Payme Fintech\n\nDowncast BankCard to PremiumCard subclass to configure exclusive cashback rate.\n\n🎯 STEPS:\n1. Create superclass 'BankCard' and specialized subclass 'PremiumCard'.\n2. Declare specialized method 'enableCashback' exclusive to 'PremiumCard'.\n3. Safely verify runtime type using 'instanceof PremiumCard'.\n4. Explicitly downcast '(PremiumCard)' and call specialized method.\n\n📊 Expected Output:\nPremiumCard 86009999 uchun 2.5% keshbek faollashtirildi"
    },
    "requirements": {
      "classes": [
        "BankCard",
        "PremiumCard",
        "Main"
      ],
      "methods": [
        "enableCashback"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass BankCard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new PremiumCard(\"86009999\", 1000000.0);\n        if (card instanceof PremiumCard) {\n            PremiumCard prem = (PremiumCard) card;\n            System.out.println(prem.enableCashback(2.5));\n        }\n    }\n}",
    "solution": "class BankCard {\n    protected String pan;\n    protected double balance;\n    public BankCard(String p, double b) { this.pan = p; this.balance = b; }\n}\nclass PremiumCard extends BankCard {\n    public PremiumCard(String p, double b) { super(p, b); }\n    public String enableCashback(double rate) {\n        return \"PremiumCard \" + pan + \" uchun \" + rate + \"% keshbek faollashtirildi\";\n    }\n}\nclass VirtualCard extends BankCard {\n    private String cvv;\n    public VirtualCard(String p, double b, String c) { super(p, b); this.cvv = c; }\n    public String getCVV() { return cvv; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new PremiumCard(\"86009999\", 1000000.0);\n        if (card instanceof PremiumCard) {\n            PremiumCard prem = (PremiumCard) card;\n            System.out.println(prem.enableCashback(2.5));\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof PremiumCard) {\n    PremiumCard sub = (PremiumCard) ref;\n    sub.enableCashback(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(PremiumCard) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 111,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "111. Ko'p Shoxli Tekshiruv (Polymorphic Dispatch vs instanceof Cascade)",
      "en": "111. Multi-branch instanceof Inspection Cascade"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Systems\n\nUniversal qurilma kontrollerida 'identifyAndInspect(SmartDevice dev)' metodi ob'yektning haqiqiy turini 'instanceof' zanjiri orqali aniqlab, to'liq tur tafsilotini chiqaradi.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartLamp' sinfini yarating.\n2. 'SmartLamp' da faqat o'zigagina xos bo'lgan 'identifyAndInspect' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartLamp' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartLamp)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nAniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)",
      "en": "🏢 Context: WIUT Smart Systems\n\nInspect unknown SmartDevice reference through multi-branch instanceof chain identifying concrete type.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Declare specialized method 'identifyAndInspect' exclusive to 'SmartLamp'.\n3. Safely verify runtime type using 'instanceof SmartLamp'.\n4. Explicitly downcast '(SmartLamp)' and call specialized method.\n\n📊 Expected Output:\nAniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "identifyAndInspect"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Lampa-A\");\n        System.out.println(DeviceInspector.identifyAndInspect(dev));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new SmartLamp(\"Lampa-A\");\n        System.out.println(DeviceInspector.identifyAndInspect(dev));\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartLamp) {\n    SmartLamp sub = (SmartLamp) ref;\n    sub.identifyAndInspect(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartLamp) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 112,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "112. Click Hamyon — Virtual Karta Turini Downcast Qilish",
      "en": "112. Click Wallet — Downcasting Virtual Card Instance"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Click Ecosystem\n\n'BankCard' havolasini 'VirtualCard' ga downcast qilib, uning amal qilish muddati (CVV kodini) ko'rsatish metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'BankCard' superklassini va undan voris oluvchi 'VirtualCard' sinfini yarating.\n2. 'VirtualCard' da faqat o'zigagina xos bo'lgan 'getCVV' metodini e'lon qiling.\n3. 'BankCard' havolasidagi ob'yekt turini 'instanceof VirtualCard' bilan xavfsiz tekshiring.\n4. Ob'yektni '(VirtualCard)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nVirtual karta CVV kodi: 773",
      "en": "🏢 Context: Click Ecosystem\n\nDowncast base card to VirtualCard retrieving secure online payment credentials.\n\n🎯 STEPS:\n1. Create superclass 'BankCard' and specialized subclass 'VirtualCard'.\n2. Declare specialized method 'getCVV' exclusive to 'VirtualCard'.\n3. Safely verify runtime type using 'instanceof VirtualCard'.\n4. Explicitly downcast '(VirtualCard)' and call specialized method.\n\n📊 Expected Output:\nVirtual karta CVV kodi: 773"
    },
    "requirements": {
      "classes": [
        "BankCard",
        "VirtualCard",
        "Main"
      ],
      "methods": [
        "getCVV"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass BankCard {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new VirtualCard(\"98601111\", 50000.0, \"773\");\n        if (card instanceof VirtualCard) {\n            VirtualCard vc = (VirtualCard) card;\n            System.out.println(\"Virtual karta CVV kodi: \" + vc.getCVV());\n        }\n    }\n}",
    "solution": "class BankCard {\n    protected String pan;\n    protected double balance;\n    public BankCard(String p, double b) { this.pan = p; this.balance = b; }\n}\nclass PremiumCard extends BankCard {\n    public PremiumCard(String p, double b) { super(p, b); }\n    public String enableCashback(double rate) {\n        return \"PremiumCard \" + pan + \" uchun \" + rate + \"% keshbek faollashtirildi\";\n    }\n}\nclass VirtualCard extends BankCard {\n    private String cvv;\n    public VirtualCard(String p, double b, String c) { super(p, b); this.cvv = c; }\n    public String getCVV() { return cvv; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new VirtualCard(\"98601111\", 50000.0, \"773\");\n        if (card instanceof VirtualCard) {\n            VirtualCard vc = (VirtualCard) card;\n            System.out.println(\"Virtual karta CVV kodi: \" + vc.getCVV());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof VirtualCard) {\n    VirtualCard sub = (VirtualCard) ref;\n    sub.getCVV(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(VirtualCard) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 113,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "113. Robot Changyutgichga Downcast va Batareya Foizini O'qish",
      "en": "113. Downcasting to RobotVacuum for Battery Inspection"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Smart\n\n'SmartDevice' havolasidan 'RobotVacuum' ga xavfsiz o'tib, 'getBatteryLevel()' maxsus metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'RobotVacuum' sinfini yarating.\n2. 'RobotVacuum' da faqat o'zigagina xos bo'lgan 'getBatteryLevel' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof RobotVacuum' bilan xavfsiz tekshiring.\n4. Ob'yektni '(RobotVacuum)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nBatareya quvvati: 92%",
      "en": "🏢 Context: Texnomart Smart\n\nSafely downcast SmartDevice handle to RobotVacuum retrieving battery percentage.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'RobotVacuum'.\n2. Declare specialized method 'getBatteryLevel' exclusive to 'RobotVacuum'.\n3. Safely verify runtime type using 'instanceof RobotVacuum'.\n4. Explicitly downcast '(RobotVacuum)' and call specialized method.\n\n📊 Expected Output:\nBatareya quvvati: 92%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "RobotVacuum",
        "Main"
      ],
      "methods": [
        "getBatteryLevel"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new RobotVacuum(\"Dreame Bot\", 92);\n        if (dev instanceof RobotVacuum) {\n            RobotVacuum vac = (RobotVacuum) dev;\n            System.out.println(\"Batareya quvvati: \" + vac.getBatteryLevel() + \"%\");\n        }\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n}\nclass RobotVacuum extends SmartDevice {\n    private int batteryLevel;\n    public RobotVacuum(String n, int b) { super(n); this.batteryLevel = b; }\n    public int getBatteryLevel() { return batteryLevel; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = new RobotVacuum(\"Dreame Bot\", 92);\n        if (dev instanceof RobotVacuum) {\n            RobotVacuum vac = (RobotVacuum) dev;\n            System.out.println(\"Batareya quvvati: \" + vac.getBatteryLevel() + \"%\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof RobotVacuum) {\n    RobotVacuum sub = (RobotVacuum) ref;\n    sub.getBatteryLevel(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(RobotVacuum) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 114,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "114. Taomlar Ro'yxatidan Palovni Ajratib Olish va Qazi Miqdorini Tekshirish",
      "en": "114. Menu Item Downcasting to Plov for Special Ingredients"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Chorsu Oshxonasi\n\nRestoran menyusidagi 'Dish' ob'yektini tekshirib, agar u 'Plov' bo'lsa, 'getQaziPortions()' metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'Dish' superklassini va undan voris oluvchi 'Plov' sinfini yarating.\n2. 'Plov' da faqat o'zigagina xos bo'lgan 'getQaziPortions' metodini e'lon qiling.\n3. 'Dish' havolasidagi ob'yekt turini 'instanceof Plov' bilan xavfsiz tekshiring.\n4. Ob'yektni '(Plov)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nQazi bo'laklari: 3 dona",
      "en": "🏢 Context: Chorsu Oshxonasi\n\nDowncast Dish reference to Plov and inspect qazi portion quantity.\n\n🎯 STEPS:\n1. Create superclass 'Dish' and specialized subclass 'Plov'.\n2. Declare specialized method 'getQaziPortions' exclusive to 'Plov'.\n3. Safely verify runtime type using 'instanceof Plov'.\n4. Explicitly downcast '(Plov)' and call specialized method.\n\n📊 Expected Output:\nQazi bo'laklari: 3 dona"
    },
    "requirements": {
      "classes": [
        "Dish",
        "Plov",
        "Main"
      ],
      "methods": [
        "getQaziPortions"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass Dish {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Plov(\"Chorsu To'y Oshi\", 50000.0, 3);\n        if (dish instanceof Plov) {\n            Plov plov = (Plov) dish;\n            System.out.println(\"Qazi bo'laklari: \" + plov.getQaziPortions() + \" dona\");\n        }\n    }\n}",
    "solution": "class Dish {\n    protected String name;\n    protected double price;\n    public Dish(String n, double p) { this.name = n; this.price = p; }\n}\nclass Plov extends Dish {\n    private int qaziPortions;\n    public Plov(String n, double p, int q) { super(n, p); this.qaziPortions = q; }\n    public int getQaziPortions() { return qaziPortions; }\n}\nclass Burger extends Dish {\n    private String sauceType;\n    public Burger(String n, double p, String s) { super(n, p); this.sauceType = s; }\n    public String getSauceType() { return sauceType; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Plov(\"Chorsu To'y Oshi\", 50000.0, 3);\n        if (dish instanceof Plov) {\n            Plov plov = (Plov) dish;\n            System.out.println(\"Qazi bo'laklari: \" + plov.getQaziPortions() + \" dona\");\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof Plov) {\n    Plov sub = (Plov) ref;\n    sub.getQaziPortions(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(Plov) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 115,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "115. FastFood Taomini Downcast Qilish va Sous Turini O'qish",
      "en": "115. Downcast to FastFood Subclass for Sauce Selection"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Chorsu FastFood\n\n'Dish' havolasidagi taom 'Burger' ekanligini 'instanceof' orqali bilib, uning 'getSauceType()' metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'Dish' superklassini va undan voris oluvchi 'Burger' sinfini yarating.\n2. 'Burger' da faqat o'zigagina xos bo'lgan 'getSauceType' metodini e'lon qiling.\n3. 'Dish' havolasidagi ob'yekt turini 'instanceof Burger' bilan xavfsiz tekshiring.\n4. Ob'yektni '(Burger)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nSous turi: Barbecue",
      "en": "🏢 Context: Chorsu FastFood\n\nDowncast base Dish to Burger subclass accessing specific sauce parameters.\n\n🎯 STEPS:\n1. Create superclass 'Dish' and specialized subclass 'Burger'.\n2. Declare specialized method 'getSauceType' exclusive to 'Burger'.\n3. Safely verify runtime type using 'instanceof Burger'.\n4. Explicitly downcast '(Burger)' and call specialized method.\n\n📊 Expected Output:\nSous turi: Barbecue"
    },
    "requirements": {
      "classes": [
        "Dish",
        "Burger",
        "Main"
      ],
      "methods": [
        "getSauceType"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass Dish {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Burger(\"CheeseBurger\", 28000.0, \"Barbecue\");\n        if (dish instanceof Burger) {\n            Burger b = (Burger) dish;\n            System.out.println(\"Sous turi: \" + b.getSauceType());\n        }\n    }\n}",
    "solution": "class Dish {\n    protected String name;\n    protected double price;\n    public Dish(String n, double p) { this.name = n; this.price = p; }\n}\nclass Plov extends Dish {\n    private int qaziPortions;\n    public Plov(String n, double p, int q) { super(n, p); this.qaziPortions = q; }\n    public int getQaziPortions() { return qaziPortions; }\n}\nclass Burger extends Dish {\n    private String sauceType;\n    public Burger(String n, double p, String s) { super(n, p); this.sauceType = s; }\n    public String getSauceType() { return sauceType; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dish dish = new Burger(\"CheeseBurger\", 28000.0, \"Barbecue\");\n        if (dish instanceof Burger) {\n            Burger b = (Burger) dish;\n            System.out.println(\"Sous turi: \" + b.getSauceType());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof Burger) {\n    Burger sub = (Burger) ref;\n    sub.getSauceType(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(Burger) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 116,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "116. AdminUser ga Downcast va SuperAdmin Ruxsatini Berish",
      "en": "116. Downcasting User to AdminUser to Grant Super Privileges"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Portal\n\n'User' havolasini 'AdminUser' ga o'tkazib, uning 'grantSuperAdmin()' metodini ishga tushiring.\n\n🎯 QADAMLAR:\n1. 'User' superklassini va undan voris oluvchi 'AdminUser' sinfini yarating.\n2. 'AdminUser' da faqat o'zigagina xos bo'lgan 'grantSuperAdmin' metodini e'lon qiling.\n3. 'User' havolasidagi ob'yekt turini 'instanceof AdminUser' bilan xavfsiz tekshiring.\n4. Ob'yektni '(AdminUser)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nsupervisor@wiut.uz foydalanuvchisiga SuperAdmin huquqi berildi",
      "en": "🏢 Context: WIUT Portal\n\nDowncast User reference to AdminUser elevating security privileges.\n\n🎯 STEPS:\n1. Create superclass 'User' and specialized subclass 'AdminUser'.\n2. Declare specialized method 'grantSuperAdmin' exclusive to 'AdminUser'.\n3. Safely verify runtime type using 'instanceof AdminUser'.\n4. Explicitly downcast '(AdminUser)' and call specialized method.\n\n📊 Expected Output:\nsupervisor@wiut.uz foydalanuvchisiga SuperAdmin huquqi berildi"
    },
    "requirements": {
      "classes": [
        "User",
        "AdminUser",
        "Main"
      ],
      "methods": [
        "grantSuperAdmin"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass User {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new AdminUser(\"supervisor@wiut.uz\");\n        if (u instanceof AdminUser) {\n            AdminUser admin = (AdminUser) u;\n            System.out.println(admin.grantSuperAdmin());\n        }\n    }\n}",
    "solution": "class User {\n    protected String email;\n    public User(String e) { this.email = e; }\n}\nclass AdminUser extends User {\n    public AdminUser(String e) { super(e); }\n    public String grantSuperAdmin() { return email + \" foydalanuvchisiga SuperAdmin huquqi berildi\"; }\n}\nclass StudentUser extends User {\n    private String id;\n    private double gpa;\n    public StudentUser(String e, String id) { super(e); this.id = id; }\n    public void setGPA(double g) { this.gpa = g; }\n    public double getGPA() { return gpa; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new AdminUser(\"supervisor@wiut.uz\");\n        if (u instanceof AdminUser) {\n            AdminUser admin = (AdminUser) u;\n            System.out.println(admin.grantSuperAdmin());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof AdminUser) {\n    AdminUser sub = (AdminUser) ref;\n    sub.grantSuperAdmin(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(AdminUser) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 117,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "117. Talaba Ob'yektiga Downcast va GPA Bahosini O'rnatish",
      "en": "117. Downcasting User to StudentUser for GPA Update"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Academic\n\n'User' havolasidan 'StudentUser' ga o'tib, uning 'setGPA(double val)' metodini chaqiring.\n\n🎯 QADAMLAR:\n1. 'User' superklassini va undan voris oluvchi 'StudentUser' sinfini yarating.\n2. 'StudentUser' da faqat o'zigagina xos bo'lgan 'setGPA' metodini e'lon qiling.\n3. 'User' havolasidagi ob'yekt turini 'instanceof StudentUser' bilan xavfsiz tekshiring.\n4. Ob'yektni '(StudentUser)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nTalaba GPA ko'rsatkichi: 3.85",
      "en": "🏢 Context: WIUT Academic\n\nDowncast User to StudentUser and set semester GPA score.\n\n🎯 STEPS:\n1. Create superclass 'User' and specialized subclass 'StudentUser'.\n2. Declare specialized method 'setGPA' exclusive to 'StudentUser'.\n3. Safely verify runtime type using 'instanceof StudentUser'.\n4. Explicitly downcast '(StudentUser)' and call specialized method.\n\n📊 Expected Output:\nTalaba GPA ko'rsatkichi: 3.85"
    },
    "requirements": {
      "classes": [
        "User",
        "StudentUser",
        "Main"
      ],
      "methods": [
        "setGPA"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass User {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new StudentUser(\"std000999@wiut.uz\", \"00099901\");\n        if (u instanceof StudentUser) {\n            StudentUser std = (StudentUser) u;\n            std.setGPA(3.85);\n            System.out.println(\"Talaba GPA ko'rsatkichi: \" + std.getGPA());\n        }\n    }\n}",
    "solution": "class User {\n    protected String email;\n    public User(String e) { this.email = e; }\n}\nclass AdminUser extends User {\n    public AdminUser(String e) { super(e); }\n    public String grantSuperAdmin() { return email + \" foydalanuvchisiga SuperAdmin huquqi berildi\"; }\n}\nclass StudentUser extends User {\n    private String id;\n    private double gpa;\n    public StudentUser(String e, String id) { super(e); this.id = id; }\n    public void setGPA(double g) { this.gpa = g; }\n    public double getGPA() { return gpa; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u = new StudentUser(\"std000999@wiut.uz\", \"00099901\");\n        if (u instanceof StudentUser) {\n            StudentUser std = (StudentUser) u;\n            std.setGPA(3.85);\n            System.out.println(\"Talaba GPA ko'rsatkichi: \" + std.getGPA());\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof StudentUser) {\n    StudentUser sub = (StudentUser) ref;\n    sub.setGPA(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(StudentUser) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 118,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "118. null Tekshiruvi va instanceof Xususiyati",
      "en": "118. Null Safety Feature of instanceof Operator"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT OOP Core\n\nJava da agar havola 'null' bo'lsa, 'null instanceof HarQandaySinf' amali doimo 'false' qaytaradi (hech qachon NullPointerException otmaydi). Buni kodda tekshiring.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartLamp' sinfini yarating.\n2. 'SmartLamp' da faqat o'zigagina xos bo'lgan 'checkNullInstance' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartLamp' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartLamp)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nHavola null bo'lgani uchun instanceof false qaytardi",
      "en": "🏢 Context: WIUT OOP Core\n\nDemonstrate that null instanceof Subclass evaluates safely to false without throwing NPE.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Declare specialized method 'checkNullInstance' exclusive to 'SmartLamp'.\n3. Safely verify runtime type using 'instanceof SmartLamp'.\n4. Explicitly downcast '(SmartLamp)' and call specialized method.\n\n📊 Expected Output:\nHavola null bo'lgani uchun instanceof false qaytardi"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "checkNullInstance"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = null;\n        System.out.println(SmartDevice.checkNullInstance(dev));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice dev = null;\n        System.out.println(SmartDevice.checkNullInstance(dev));\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartLamp) {\n    SmartLamp sub = (SmartLamp) ref;\n    sub.checkNullInstance(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartLamp) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 119,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "119. Kolleksiyadagi Elementlarni Filtrlab Downcast Qilish",
      "en": "119. Filtering and Downcasting Specific Subtypes in Collection"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Smart Home\n\nRo'yxatdagi turli xil qurilmalar ichidan faqat 'SmartLamp' larni ajratib olib, ularning jami yorug'lik foizini hisoblang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartLamp' sinfini yarating.\n2. 'SmartLamp' da faqat o'zigagina xos bo'lgan 'getBrightness' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartLamp' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartLamp)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nChiroqlarning jami yorug'ligi: 140%",
      "en": "🏢 Context: Uzum Smart Home\n\nIterate polymorphic list, filter instances matching SmartLamp, downcast and sum brightness.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Declare specialized method 'getBrightness' exclusive to 'SmartLamp'.\n3. Safely verify runtime type using 'instanceof SmartLamp'.\n4. Explicitly downcast '(SmartLamp)' and call specialized method.\n\n📊 Expected Output:\nChiroqlarning jami yorug'ligi: 140%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "getBrightness"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        java.util.List<SmartDevice> list = new java.util.ArrayList<>();\n        list.add(new SmartLamp(\"Lampa-1\", 60));\n        list.add(new SmartSpeaker(\"Spk-1\"));\n        list.add(new SmartLamp(\"Lampa-2\", 80));\n        int total = 0;\n        for (SmartDevice d : list) {\n            if (d instanceof SmartLamp) {\n                SmartLamp l = (SmartLamp) d;\n                total += l.getBrightness();\n            }\n        }\n        System.out.println(\"Chiroqlarning jami yorug'ligi: \" + total + \"%\");\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        java.util.List<SmartDevice> list = new java.util.ArrayList<>();\n        list.add(new SmartLamp(\"Lampa-1\", 60));\n        list.add(new SmartSpeaker(\"Spk-1\"));\n        list.add(new SmartLamp(\"Lampa-2\", 80));\n        int total = 0;\n        for (SmartDevice d : list) {\n            if (d instanceof SmartLamp) {\n                SmartLamp l = (SmartLamp) d;\n                total += l.getBrightness();\n            }\n        }\n        System.out.println(\"Chiroqlarning jami yorug'ligi: \" + total + \"%\");\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartLamp) {\n    SmartLamp sub = (SmartLamp) ref;\n    sub.getBrightness(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartLamp) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 120,
    "tier": 8,
    "tierName": "8-Bosqich: Quyiga Tip O'tkazish (Downcasting) va instanceof Tekshiruvi",
    "sector": "106-120: Downcasting & instanceof Safety",
    "title": {
      "uz": "120. Downcasting Xulosasi — Ehtiyotkorlik va Polimorfizm Afzalligi",
      "en": "120. Downcasting Summary — Defensive Programming"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Architecture Labs\n\nLeksiyada ta'kidlanganidek: 'Downcasting zarur bo'lganda ishlatiladi, ammo agar haddan tashqari ko'p instanceof ishlatilsa, bu arxitektura buzilganidan dalolat beradi (Code Smell). Eng yaxshi yo'l — polimorfik metodlar orqali umumiy xatti-harakatni ta'minlashdir'. Xavfsiz tekshiruv bilan yakunlang.\n\n🎯 QADAMLAR:\n1. 'SmartDevice' superklassini va undan voris oluvchi 'SmartLamp' sinfini yarating.\n2. 'SmartLamp' da faqat o'zigagina xos bo'lgan 'safeCastAndOperate' metodini e'lon qiling.\n3. 'SmartDevice' havolasidagi ob'yekt turini 'instanceof SmartLamp' bilan xavfsiz tekshiring.\n4. Ob'yektni '(SmartLamp)' orqali downcast qilib, uning maxsus metodini chaqiring.\n\n📊 Kutilayotgan Natija:\nXavfsiz downcast bajarildi: Test Lampa (90%)",
      "en": "🏢 Context: WIUT Architecture Labs\n\nConclude Downcasting tier highlighting best design practices: prefer polymorphic dispatch over extensive downcasting.\n\n🎯 STEPS:\n1. Create superclass 'SmartDevice' and specialized subclass 'SmartLamp'.\n2. Declare specialized method 'safeCastAndOperate' exclusive to 'SmartLamp'.\n3. Safely verify runtime type using 'instanceof SmartLamp'.\n4. Explicitly downcast '(SmartLamp)' and call specialized method.\n\n📊 Expected Output:\nXavfsiz downcast bajarildi: Test Lampa (90%)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartLamp",
        "Main"
      ],
      "methods": [
        "safeCastAndOperate"
      ],
      "keywords": [
        "instanceof"
      ]
    },
    "starterCode": "// instanceof va xavfsiz Downcasting namunasi\nclass SmartDevice {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice d = new SmartLamp(\"Test Lampa\", 90);\n        System.out.println(SmartLamp.safeCastAndOperate(d));\n    }\n}",
    "solution": "class SmartDevice {\n    protected String name;\n    public SmartDevice(String n) { this.name = n; }\n    public String getName() { return name; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String getStatus() { return name; }\n    public static String checkNullInstance(SmartDevice dev) {\n        if (dev instanceof SmartLamp) return \"Lampa\";\n        return \"Havola null bo'lgani uchun instanceof false qaytardi\";\n    }\n}\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n); }\n    public SmartLamp(String n, int b) { super(n); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n    public static String safeCastAndOperate(SmartDevice d) {\n        if (d instanceof SmartLamp) {\n            SmartLamp l = (SmartLamp) d;\n            return \"Xavfsiz downcast bajarildi: \" + l.getName() + \" (\" + l.getBrightness() + \"%)\";\n        }\n        return \"Xato\";\n    }\n}\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n); }\n    public static String checkAndCast(SmartDevice dev) {\n        if (dev instanceof SmartLamp) {\n            SmartLamp lamp = (SmartLamp) dev;\n            return lamp.turnOn();\n        } else {\n            return \"Xavfsiz chek: dev ob'yekti SmartLamp emas!\";\n        }\n    }\n}\nclass DeviceInspector {\n    public static String identifyAndInspect(SmartDevice d) {\n        if (d instanceof SmartLamp) return \"Aniqlangan qurilma turi: Aqlli Yoritgich (SmartLamp)\";\n        return \"Noma'lum qurilma\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartDevice d = new SmartLamp(\"Test Lampa\", 90);\n        System.out.println(SmartLamp.safeCastAndOperate(d));\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting — superklass havolasini uning quyi sinf turiga ochiqcha (explicit) o'tkazishdir ((Sub) superRef). Agar ob'yekt haqiqatda ushbu sinfga tegishli bo'lmasa, JVM ClassCastException otadi. Shuning uchun har doim 'instanceof' operatori bilan oldindan tekshirish zarur.",
      "cleanCode": "if (ref instanceof SmartLamp) {\n    SmartLamp sub = (SmartLamp) ref;\n    sub.safeCastAndOperate(...);\n}",
      "breakdown": [
        "<code>instanceof</code>: runtime ob'yekt turini tekshirib true/false qaytaradi.",
        "Xavfsiz cast: <code>(SmartLamp) ref</code> orqali maxsus metodlarga kirish ochiladi."
      ]
    }
  },
  {
    "id": 121,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "121. SmartHomeHub — Qurilmalarni Ro'yxatga Qo'shish (addDevice)",
      "en": "121. SmartHomeHub — Device Registration and Storage"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWIUT Workshop TW 7 da berilgan talab: 'SmartHomeHub' sinfini yarating. Unda 'ArrayList<SmartDevice>' ro'yxati bo'lib, 'addDevice(SmartDevice device)' metodi har qanday aqlli qurilmani qabul qilib saqlaydi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'addDevice' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nHubdagi qurilmalar soni: 2",
      "en": "🏢 Context: WIUT Smart Labs\n\nWorkshop TW 7 milestone: Create SmartHomeHub holding an internal ArrayList of SmartDevice instances with addDevice method.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'addDevice' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nHubdagi qurilmalar soni: 2"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "addDevice"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Markaziy Hub\");\n        hub.addDevice(new SmartLamp(\"Mehmonxona Chirog'i\"));\n        hub.addDevice(new SmartThermostat(\"Zal Termostati\"));\n        System.out.println(\"Hubdagi qurilmalar soni: \" + hub.getDeviceCount());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Markaziy Hub\");\n        hub.addDevice(new SmartLamp(\"Mehmonxona Chirog'i\"));\n        hub.addDevice(new SmartThermostat(\"Zal Termostati\"));\n        System.out.println(\"Hubdagi qurilmalar soni: \" + hub.getDeviceCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void addDevice(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 122,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "122. SmartHomeHub — Barcha Qurilmalarni Yoqish (turnAllOn)",
      "en": "122. SmartHomeHub — Polymorphic Broadcast turnAllOn()"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWorkshop TW 7 talabi: 'turnAllOn()' metodi ro'yxatdagi har bir qurilma uchun polimorfik 'turnOn()' ni chaqiradi va natijalarni chop etadi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'turnAllOn' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nLampa-1 yoqildi (Yorug'lik: 100%)\nTermostat-1 yoqildi (Standart harorat: 22°C)",
      "en": "🏢 Context: WIUT Smart Labs\n\nImplement turnAllOn() looping through all registered devices and dynamically calling turnOn().\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'turnAllOn' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nLampa-1 yoqildi (Yorug'lik: 100%)\nTermostat-1 yoqildi (Standart harorat: 22°C)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "turnAllOn"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Artel Hub\");\n        hub.addDevice(new SmartLamp(\"Lampa-1\"));\n        hub.addDevice(new SmartThermostat(\"Termostat-1\"));\n        hub.turnAllOn();\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Artel Hub\");\n        hub.addDevice(new SmartLamp(\"Lampa-1\"));\n        hub.addDevice(new SmartThermostat(\"Termostat-1\"));\n        hub.turnAllOn();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void turnAllOn(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 123,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "123. SmartHomeHub — Barcha Qurilmalarni O'chirish (turnAllOff)",
      "en": "123. SmartHomeHub — Polymorphic Broadcast turnAllOff()"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWorkshop TW 7 da uy egasi uydan ketganda barcha qurilmalarni bitta buyruq bilan o'chirish kerak. 'turnAllOff()' metodini polimorfik tarzda amalga oshiring.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'turnAllOff' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nLampa o'chirildi (Kutish rejimi)\nKarnay o'chirildi (Kutish rejimi)",
      "en": "🏢 Context: WIUT Smart Labs\n\nImplement turnAllOff() invoking turnOff() across all attached smart devices.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'turnAllOff' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nLampa o'chirildi (Kutish rejimi)\nKarnay o'chirildi (Kutish rejimi)"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "turnAllOff"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Toshkent Hub\");\n        hub.addDevice(new SmartLamp(\"Lampa\"));\n        hub.addDevice(new SmartSpeaker(\"Karnay\"));\n        hub.turnAllOff();\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Toshkent Hub\");\n        hub.addDevice(new SmartLamp(\"Lampa\"));\n        hub.addDevice(new SmartSpeaker(\"Karnay\"));\n        hub.turnAllOff();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void turnAllOff(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 124,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "124. SmartHomeHub — Umumiy Parametrni Oshirish (increaseAll)",
      "en": "124. SmartHomeHub — Universal increaseAll() Command"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWorkshop TW 7 da pultdagi 'increase' buyrug'i barcha qurilmalarga yuboriladi: chiroq yorug'likni oshiradi, termostat haroratni ko'taradi. 'increaseAll()' metodini yozing.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'increaseAll' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nLampa holati: Yorug'lik 60%\nTermostat holati: 21°C",
      "en": "🏢 Context: WIUT Smart Labs\n\nWorkshop TW 7: loop through devices and call polymorphic increase() on each.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'increaseAll' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nLampa holati: Yorug'lik 60%\nTermostat holati: 21°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "increaseAll"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Yandex SmartHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 50));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 20));\n        hub.increaseAll();\n        hub.printAllStatuses();\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Yandex SmartHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 50));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 20));\n        hub.increaseAll();\n        hub.printAllStatuses();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void increaseAll(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 125,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "125. SmartHomeHub — Umumiy Parametrni Kamaytirish (decreaseAll)",
      "en": "125. SmartHomeHub — Universal decreaseAll() Command"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdagi 'decreaseAll()' metodi barcha qurilmalarning 'decrease()' metodini ishga tushirsin va minimal chegaralarni tekshirsin.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'decreaseAll' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nLampa holati: Yorug'lik 0%\nTermostat holati: 16°C",
      "en": "🏢 Context: WIUT Smart Labs\n\nWorkshop TW 7: implement decreaseAll() invoking decrease() on each device.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'decreaseAll' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nLampa holati: Yorug'lik 0%\nTermostat holati: 16°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "decreaseAll"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"EcoHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 10));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 17));\n        hub.decreaseAll();\n        hub.printAllStatuses();\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"EcoHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 10));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 17));\n        hub.decreaseAll();\n        hub.printAllStatuses();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void decreaseAll(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 126,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "126. SmartHomeHub — Qurilmalarni Nomi Bo'yicha Qidirish",
      "en": "126. SmartHomeHub — Find Device by Name Search"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdagi 'findDeviceByName(String name)' metodi ro'yxatdan nomga mos keluvchi 'SmartDevice' ob'yektini qaytaradi (topilmasa null).\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'findDeviceByName' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nOshxona holati: Yorug'lik 80%",
      "en": "🏢 Context: WIUT Smart Labs\n\nImplement lookup method findDeviceByName returning polymorphic SmartDevice handle.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'findDeviceByName' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nOshxona holati: Yorug'lik 80%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "findDeviceByName"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Hub\");\n        hub.addDevice(new SmartLamp(\"Oshxona\", 80));\n        SmartDevice d = hub.findDeviceByName(\"Oshxona\");\n        System.out.println(d != null ? d.getStatus() : \"Topilmadi\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Hub\");\n        hub.addDevice(new SmartLamp(\"Oshxona\", 80));\n        SmartDevice d = hub.findDeviceByName(\"Oshxona\");\n        System.out.println(d != null ? d.getStatus() : \"Topilmadi\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void findDeviceByName(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 127,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "127. SmartHomeHub — Faqat Chiroqlarni Hisoblash (instanceof)",
      "en": "127. SmartHomeHub — Counting Lamps Using instanceof"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdagi 'countLamps()' metodi ro'yxatdagi qurilmalar ichidan 'instanceof SmartLamp' bo'lganlar sonini hisoblaydi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'countLamps' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nChiroqlar soni: 2",
      "en": "🏢 Context: WIUT Smart Labs\n\nUse instanceof to count lamp appliances among connected smart home hardware.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'countLamps' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nChiroqlar soni: 2"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "countLamps"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Katta Uy Hub\");\n        hub.addDevice(new SmartLamp(\"L1\"));\n        hub.addDevice(new SmartThermostat(\"T1\"));\n        hub.addDevice(new SmartLamp(\"L2\"));\n        System.out.println(\"Chiroqlar soni: \" + hub.countLamps());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Katta Uy Hub\");\n        hub.addDevice(new SmartLamp(\"L1\"));\n        hub.addDevice(new SmartThermostat(\"T1\"));\n        hub.addDevice(new SmartLamp(\"L2\"));\n        System.out.println(\"Chiroqlar soni: \" + hub.countLamps());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void countLamps(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 128,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "128. SmartHomeHub — Qurilmani Nomi Bo'yicha O'chirish (removeDevice)",
      "en": "128. SmartHomeHub — Remove Device by Name"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdan qurilmani uzish uchun 'removeDevice(String name)' metodini yozing. Muvaffaqiyatli o'chirilganda 'true' qaytarsin.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'removeDevice' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nO'chirildi: true | Qolgan: 0",
      "en": "🏢 Context: WIUT Smart Labs\n\nImplement removeDevice(String name) removing device from internal collection.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'removeDevice' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nO'chirildi: true | Qolgan: 0"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "removeDevice"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Ofis Hub\");\n        hub.addDevice(new SmartLamp(\"Eski Chiroq\"));\n        boolean removed = hub.removeDevice(\"Eski Chiroq\");\n        System.out.println(\"O'chirildi: \" + removed + \" | Qolgan: \" + hub.getDeviceCount());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Ofis Hub\");\n        hub.addDevice(new SmartLamp(\"Eski Chiroq\"));\n        boolean removed = hub.removeDevice(\"Eski Chiroq\");\n        System.out.println(\"O'chirildi: \" + removed + \" | Qolgan: \" + hub.getDeviceCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void removeDevice(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 129,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "129. SmartHomeHub — Barcha Qurilmalar Hisoboti (generateReport)",
      "en": "129. SmartHomeHub — Diagnostic Inventory Report"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdagi 'generateReport()' metodi barcha ulangan qurilmalarning xususiyatlari va ish rejimini formatlab matn ko'rinishida qaytaradi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'generateReport' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nHub [Uzum Markaz] Hisoboti:\n- Zal holati: Yorug'lik 100%",
      "en": "🏢 Context: WIUT Smart Labs\n\nGenerate structured diagnostic report summarizing status of all connected smart home devices.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'generateReport' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nHub [Uzum Markaz] Hisoboti:\n- Zal holati: Yorug'lik 100%"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "generateReport"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Markaz\");\n        hub.addDevice(new SmartLamp(\"Zal\", 100));\n        System.out.println(hub.generateReport());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Uzum Markaz\");\n        hub.addDevice(new SmartLamp(\"Zal\", 100));\n        System.out.println(hub.generateReport());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void generateReport(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 130,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "130. SmartHomeHub — O'rtacha Haroratni Hisoblash",
      "en": "130. SmartHomeHub — Computing Average Home Temperature"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Artel Smart Labs\n\nHubda bir nechta xonalarda termostatlar o'rnatilgan bo'lsa, 'getAverageTemperature()' barcha termostatlarning haroratini o'rtachasini topadi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'getAverageTemperature' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nO'rtacha harorat: 24.0°C",
      "en": "🏢 Context: Artel Smart Labs\n\nCompute average target temperature across all registered Thermostat units in the hub.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'getAverageTemperature' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nO'rtacha harorat: 24.0°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "getAverageTemperature"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Klimat Hub\");\n        hub.addDevice(new SmartThermostat(\"Zal\", 22));\n        hub.addDevice(new SmartThermostat(\"Yotoqxona\", 26));\n        System.out.println(\"O'rtacha harorat: \" + hub.getAverageTemperature() + \"°C\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Klimat Hub\");\n        hub.addDevice(new SmartThermostat(\"Zal\", 22));\n        hub.addDevice(new SmartThermostat(\"Yotoqxona\", 26));\n        System.out.println(\"O'rtacha harorat: \" + hub.getAverageTemperature() + \"°C\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void getAverageTemperature(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 131,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "131. SmartHomeHub — Tungi Rejim Senariysi (Night Mode Scenario)",
      "en": "131. SmartHomeHub — Night Mode Automation Macro"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\n'activateNightMode()' chaqirilganda barcha chiroqlar yorug'ligi 10% ga tushiriladi va barcha termostatlar 20°C ga o'rnatiladi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'activateNightMode' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nChiroq holati: Yorug'lik 10%\nTermostat holati: 20°C",
      "en": "🏢 Context: WIUT Smart Labs\n\nOrchestrate macro command dimming all lamps to 10% and setting thermostats to 20C.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'activateNightMode' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nChiroq holati: Yorug'lik 10%\nTermostat holati: 20°C"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "activateNightMode"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Aqlli Uy\");\n        hub.addDevice(new SmartLamp(\"Chiroq\", 90));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 25));\n        hub.activateNightMode();\n        hub.printAllStatuses();\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Aqlli Uy\");\n        hub.addDevice(new SmartLamp(\"Chiroq\", 90));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 25));\n        hub.activateNightMode();\n        hub.printAllStatuses();\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void activateNightMode(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 132,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "132. SmartHomeHub — Umumiy Elektr Quvvati Sarfi (Total Power)",
      "en": "132. SmartHomeHub — Total Power Consumption Calculator"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Texnomart Eco\n\nHar bir 'SmartDevice' quvvat sarfi (powerWatts) maydoniga ega. Hubdagi 'calculateTotalWatts()' ulangan barcha qurilmalarning jami quvvatini hisoblaydi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'calculateTotalWatts' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nUmumiy quvvat: 1215 W",
      "en": "🏢 Context: Texnomart Eco\n\nCalculate aggregate power draw across all attached smart appliances.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'calculateTotalWatts' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nUmumiy quvvat: 1215 W"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "calculateTotalWatts"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"EcoHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 15));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 1200));\n        System.out.println(\"Umumiy quvvat: \" + hub.calculateTotalWatts() + \" W\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"EcoHub\");\n        hub.addDevice(new SmartLamp(\"Lampa\", 15));\n        hub.addDevice(new SmartThermostat(\"Termostat\", 1200));\n        System.out.println(\"Umumiy quvvat: \" + hub.calculateTotalWatts() + \" W\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void calculateTotalWatts(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 133,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "133. SmartHomeHub — Qurilmalar Ro'yxatini Tozalash (clearHub)",
      "en": "133. SmartHomeHub — Clear All Devices and Reset"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nHubdagi barcha qurilmalarni o'chirib, ro'yxatni tozalovchi 'clearHub()' metodini tuzing.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'clearHub' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nQurilmalar soni: 0",
      "en": "🏢 Context: WIUT Smart Labs\n\nImplement clearHub() powering off all devices before clearing internal collection.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'clearHub' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nQurilmalar soni: 0"
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "clearHub"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Sinov Hubi\");\n        hub.addDevice(new SmartLamp(\"L1\"));\n        hub.clearHub();\n        System.out.println(\"Qurilmalar soni: \" + hub.getDeviceCount());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Sinov Hubi\");\n        hub.addDevice(new SmartLamp(\"L1\"));\n        hub.clearHub();\n        System.out.println(\"Qurilmalar soni: \" + hub.getDeviceCount());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void clearHub(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 134,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "134. SmartHomeHub — Favqulodda Holat (Emergency Shutdown)",
      "en": "134. SmartHomeHub — Emergency Safety Lockdown"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nXavf aniqlanganda 'emergencyShutdown()' metodi barcha qurilmalarni darhol o'chiradi va xavfsizlik logini qaytaradi.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'emergencyShutdown' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nXavfsiz Uy: Favqulodda o'chirish yakunlandi! 1 ta qurilma o'chirildi.",
      "en": "🏢 Context: WIUT Smart Labs\n\nExecute emergency shutdown sequence turning off every device and logging safety audit event.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'emergencyShutdown' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nXavfsiz Uy: Favqulodda o'chirish yakunlandi! 1 ta qurilma o'chirildi."
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "emergencyShutdown"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Xavfsiz Uy\");\n        hub.addDevice(new SmartLamp(\"Lampa\"));\n        System.out.println(hub.emergencyShutdown());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"Xavfsiz Uy\");\n        hub.addDevice(new SmartLamp(\"Lampa\"));\n        System.out.println(hub.emergencyShutdown());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void emergencyShutdown(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 135,
    "tier": 9,
    "tierName": "9-Bosqich: Workshop TW 7 — SmartHome Hub Kontroller Tizimi",
    "sector": "121-135: Workshop TW 7 SmartHome Hub Implementation",
    "title": {
      "uz": "135. SmartHomeHub Xulosasi — Workshop TW 7 To'liq Integratsiyasi",
      "en": "135. SmartHomeHub Summary — Full Workshop TW 7 Completion"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: WIUT Smart Labs\n\nWorkshop TW 7 ning barcha talablari (SmartDevice, Lamp, Thermostat, Speaker, SmartHomeHub) to'liq integratsiyasini tekshiring.\n\n🎯 QADAMLAR:\n1. WIUT Workshop TW 7 talablariga mos 'SmartDevice', 'SmartLamp', 'SmartThermostat', 'SmartSpeaker' sinflarini yozing.\n2. 'SmartHomeHub' sinfini e'lon qilib, unda 'ArrayList<SmartDevice>' ro'yxatini saqlang.\n3. Hubda 'fullIntegrationTest' metodini amalga oshiring.\n4. 'Main' sinfida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nHub to'liq tayyor: 3 ta qurilma integratsiya qilindi.",
      "en": "🏢 Context: WIUT Smart Labs\n\nVerify end-to-end Workshop TW 7 integration across all four smart appliance types.\n\n🎯 STEPS:\n1. Build Workshop TW 7 appliance hierarchy (SmartDevice, SmartLamp, SmartThermostat, SmartSpeaker).\n2. Create 'SmartHomeHub' maintaining internal 'ArrayList<SmartDevice>' storage.\n3. Implement 'fullIntegrationTest' method.\n4. Test in 'Main' printing the result.\n\n📊 Expected Output:\nHub to'liq tayyor: 3 ta qurilma integratsiya qilindi."
    },
    "requirements": {
      "classes": [
        "SmartDevice",
        "SmartHomeHub",
        "Main"
      ],
      "methods": [
        "fullIntegrationTest"
      ]
    },
    "starterCode": "// Workshop TW 7: SmartHomeHub kontrollerini yarating\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass SmartHomeHub {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"WIUT Full Demo\");\n        hub.addDevice(new SmartLamp(\"Smart LED\"));\n        hub.addDevice(new SmartThermostat(\"Smart Termo\"));\n        hub.addDevice(new SmartSpeaker(\"Smart Ovoz\"));\n        System.out.println(hub.fullIntegrationTest());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass SmartDevice {\n    protected String name;\n    protected int powerWatts = 20;\n    public SmartDevice(String n) { this.name = n; }\n    public SmartDevice(String n, int watts) { this.name = n; this.powerWatts = watts; }\n    public String getName() { return name; }\n    public int getPowerWatts() { return powerWatts; }\n    public String turnOn() { return name + \" yoqildi\"; }\n    public String turnOff() { return name + \" o'chirildi (Kutish rejimi)\"; }\n    public void increase() {}\n    public void decrease() {}\n    public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartLamp extends SmartDevice {\n    private int brightness = 100;\n    public SmartLamp(String n) { super(n, 15); }\n    public SmartLamp(String n, int b) { super(n, 15); this.brightness = b; }\n    public void setBrightness(int b) { this.brightness = b; }\n    public int getBrightness() { return brightness; }\n    @Override public String turnOn() { return name + \" yoqildi (Yorug'lik: 100%)\"; }\n    @Override public void increase() { if (brightness + 10 <= 100) brightness += 10; }\n    @Override public void decrease() { if (brightness - 10 >= 0) brightness -= 10; }\n    @Override public String getStatus() { return name + \" holati: Yorug'lik \" + brightness + \"%\"; }\n}\n\nclass SmartThermostat extends SmartDevice {\n    private int targetTemp = 22;\n    public SmartThermostat(String n) { super(n, 1200); }\n    public SmartThermostat(String n, int t) { super(n, 1200); this.targetTemp = t; }\n    public void setTargetTemp(int t) { this.targetTemp = t; }\n    public int getTargetTemp() { return targetTemp; }\n    @Override public String turnOn() { return name + \" yoqildi (Standart harorat: 22°C)\"; }\n    @Override public void increase() { if (targetTemp < 30) targetTemp++; }\n    @Override public void decrease() { if (targetTemp > 16) targetTemp--; }\n    @Override public String getStatus() { return name + \" holati: \" + targetTemp + \"°C\"; }\n}\n\nclass SmartSpeaker extends SmartDevice {\n    public SmartSpeaker(String n) { super(n, 30); }\n    @Override public String turnOn() { return name + \" yoqildi (Ovoz: 40%)\"; }\n    @Override public String getStatus() { return name + \" faol\"; }\n}\n\nclass SmartHomeHub {\n    private String hubName;\n    private List<SmartDevice> devices = new ArrayList<>();\n    public SmartHomeHub(String name) { this.hubName = name; }\n    public void addDevice(SmartDevice d) { devices.add(d); }\n    public int getDeviceCount() { return devices.size(); }\n    public void turnAllOn() {\n        for (SmartDevice d : devices) System.out.println(d.turnOn());\n    }\n    public void turnAllOff() {\n        for (SmartDevice d : devices) System.out.println(d.turnOff());\n    }\n    public void increaseAll() {\n        for (SmartDevice d : devices) d.increase();\n    }\n    public void decreaseAll() {\n        for (SmartDevice d : devices) d.decrease();\n    }\n    public void printAllStatuses() {\n        for (SmartDevice d : devices) System.out.println(d.getStatus());\n    }\n    public SmartDevice findDeviceByName(String name) {\n        for (SmartDevice d : devices) {\n            if (d.getName().equals(name)) return d;\n        }\n        return null;\n    }\n    public int countLamps() {\n        int count = 0;\n        for (SmartDevice d : devices) if (d instanceof SmartLamp) count++;\n        return count;\n    }\n    public boolean removeDevice(String name) {\n        return devices.removeIf(d -> d.getName().equals(name));\n    }\n    public String generateReport() {\n        StringBuilder sb = new StringBuilder(\"Hub [\" + hubName + \"] Hisoboti:\\n\");\n        for (int i = 0; i < devices.size(); i++) {\n            sb.append(\"- \").append(devices.get(i).getStatus());\n            if (i < devices.size() - 1) sb.append(\"\\n\");\n        }\n        return sb.toString();\n    }\n    public double getAverageTemperature() {\n        double sum = 0;\n        int count = 0;\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartThermostat) {\n                sum += ((SmartThermostat) d).getTargetTemp();\n                count++;\n            }\n        }\n        return count > 0 ? (sum / count) : 0.0;\n    }\n    public void activateNightMode() {\n        for (SmartDevice d : devices) {\n            if (d instanceof SmartLamp) ((SmartLamp) d).setBrightness(10);\n            if (d instanceof SmartThermostat) ((SmartThermostat) d).setTargetTemp(20);\n        }\n    }\n    public int calculateTotalWatts() {\n        int total = 0;\n        for (SmartDevice d : devices) total += d.getPowerWatts();\n        return total;\n    }\n    public void clearHub() {\n        for (SmartDevice d : devices) d.turnOff();\n        devices.clear();\n    }\n    public String emergencyShutdown() {\n        int c = devices.size();\n        for (SmartDevice d : devices) d.turnOff();\n        return hubName + \": Favqulodda o'chirish yakunlandi! \" + c + \" ta qurilma o'chirildi.\";\n    }\n    public String fullIntegrationTest() {\n        return \"Hub to'liq tayyor: \" + getDeviceCount() + \" ta qurilma integratsiya qilindi.\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartHomeHub hub = new SmartHomeHub(\"WIUT Full Demo\");\n        hub.addDevice(new SmartLamp(\"Smart LED\"));\n        hub.addDevice(new SmartThermostat(\"Smart Termo\"));\n        hub.addDevice(new SmartSpeaker(\"Smart Ovoz\"));\n        System.out.println(hub.fullIntegrationTest());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Workshop TW 7: 'SmartHomeHub' kontrolleri aqlli qurilmalar ierarxiyasini yagona ro'yxatda (ArrayList<SmartDevice>) saqlaydi va polimorfik sikllar orqali ularga bir vaqtda buyruqlar uzatadi. Yangi qurilma turi qo'shilganda Hub kodini o'zgartirish shart emas.",
      "cleanCode": "class SmartHomeHub {\n    private List<SmartDevice> devices = new ArrayList<>();\n    public void addDevice(SmartDevice d) { ... }\n    public void fullIntegrationTest(...) { ... }\n}",
      "breakdown": [
        "<code>ArrayList<SmartDevice></code>: barcha aqlli qurilmalarni bitta ro'yxatda saqlaydi.",
        "Polimorfik boshqaruv: har bir qurilma o'zining xususiy turiga qarab buyruqni bajaradi."
      ]
    }
  },
  {
    "id": 136,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "136. CW2 Product — Abstrakt Mahsulot va Polimorfik Yetkazish Narxi",
      "en": "136. CW2 Product — Abstract Product and Delivery Cost Contract"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 talabiga muvofiq: 'Product' abstrakt sinfini e'lon qiling. Unda 'name', 'price' va 'abstract double calculateDeliveryCost()' metodi mavjud. 'PhysicalProduct' (og'irlik bo'yicha) va 'DigitalProduct' (0 UZS) vorislarini polimorfik bog'lang.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nSmartfon yetkazish: 15000.0 UZS\nAntivirus litsenziyasi yetkazish: 0.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nCoursework 2 architecture: create abstract Product with abstract calculateDeliveryCost() implemented by PhysicalProduct and DigitalProduct.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nSmartfon yetkazish: 15000.0 UZS\nAntivirus litsenziyasi yetkazish: 0.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateDeliveryCost"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new PhysicalProduct(\"Smartfon\", 3200000.0, 0.4);\n        Product p2 = new DigitalProduct(\"Antivirus litsenziyasi\", 150000.0);\n        System.out.println(p1.getName() + \" yetkazish: \" + p1.calculateDeliveryCost() + \" UZS\");\n        System.out.println(p2.getName() + \" yetkazish: \" + p2.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p1 = new PhysicalProduct(\"Smartfon\", 3200000.0, 0.4);\n        Product p2 = new DigitalProduct(\"Antivirus litsenziyasi\", 150000.0);\n        System.out.println(p1.getName() + \" yetkazish: \" + p1.calculateDeliveryCost() + \" UZS\");\n        System.out.println(p2.getName() + \" yetkazish: \" + p2.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 137,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "137. CW2 PhysicalProduct — Og'ir Yuk Yetkazish Qo'shimcha Narxi",
      "en": "137. CW2 PhysicalProduct — Heavy Parcel Delivery Surcharge"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 talabida og'ir yuklar (masalan, muzlatgich, kir yuvish mashinasi) uchun og'irlik 10 kg dan oshsa, har bir qo'shimcha kg uchun 2000 UZS qo'shiladi. 'calculateDeliveryCost()' metodida buni hisoblang.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nYetkazish narxi: 85000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nCalculate delivery cost with overweight surcharge: base 15000 + 2000 per kg above 10kg.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nYetkazish narxi: 85000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateDeliveryCost"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product fridge = new PhysicalProduct(\"Muzlatgich\", 5500000.0, 45.0);\n        System.out.println(\"Yetkazish narxi: \" + fridge.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product fridge = new PhysicalProduct(\"Muzlatgich\", 5500000.0, 45.0);\n        System.out.println(\"Yetkazish narxi: \" + fridge.calculateDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 138,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "138. CW2 DigitalProduct — Elektron Pochta Orqali Yetkazish",
      "en": "138. CW2 DigitalProduct — Instant Delivery via Email"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nRaqamli mahsulotlar (elektron kitoblar, dasturiy kalitlar) uchun yetkazish mutlaqo bepul (0.0 UZS) va litsenziya kodi xaridor pochtasiga yuboriladi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nYetkazish: 0.0 UZS | Jami narx: 80000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nVerify zero delivery cost for DigitalProduct and return digital license key snippet.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nYetkazish: 0.0 UZS | Jami narx: 80000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateDeliveryCost"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product ebook = new DigitalProduct(\"Java OOP Qo'llanma\", 80000.0, \"support@uzum.uz\");\n        System.out.println(\"Yetkazish: \" + ebook.calculateDeliveryCost() + \" UZS | Jami narx: \" + ebook.getTotalPrice() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product ebook = new DigitalProduct(\"Java OOP Qo'llanma\", 80000.0, \"support@uzum.uz\");\n        System.out.println(\"Yetkazish: \" + ebook.calculateDeliveryCost() + \" UZS | Jami narx: \" + ebook.getTotalPrice() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 139,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "139. CW2 Cart — Polimorfik Savat (List<Product>) va Umumiy Qiymat",
      "en": "139. CW2 Cart — Polymorphic Shopping Cart Subtotal"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 talabi: 'Cart' sinfi ichida 'List<Product>' saqlanadi. 'calculateSubtotal()' barcha mahsulotlarning narxlari yig'indisini polimorfik tarzda hisoblaydi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nSavat subtotal: 300000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nBuild Cart class aggregating polymorphic Product items and computing catalog subtotal.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nSavat subtotal: 300000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateSubtotal"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Quloqchin\", 250000.0, 0.3));\n        cart.addProduct(new DigitalProduct(\"Kino obunasi\", 50000.0));\n        System.out.println(\"Savat subtotal: \" + cart.calculateSubtotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Quloqchin\", 250000.0, 0.3));\n        cart.addProduct(new DigitalProduct(\"Kino obunasi\", 50000.0));\n        System.out.println(\"Savat subtotal: \" + cart.calculateSubtotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 140,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "140. CW2 Cart — Savatdagi Barcha Yetkazish Narxlarini Yig'ish",
      "en": "140. CW2 Cart — Total Delivery Cost Summation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nSavatdagi 'calculateTotalDeliveryCost()' metodi har bir mahsulotning 'calculateDeliveryCost()' polimorfik metodini chaqirib, umumiy yetkazish xarajatini topadi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nJami yetkazish haqi: 15000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nCompute total shipping cost of entire cart dynamically invoking calculateDeliveryCost() per item.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nJami yetkazish haqi: 15000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateTotalDeliveryCost"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Dazmol\", 400000.0, 2.0));\n        cart.addProduct(new DigitalProduct(\"Antivirus\", 100000.0));\n        System.out.println(\"Jami yetkazish haqi: \" + cart.calculateTotalDeliveryCost() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Dazmol\", 400000.0, 2.0));\n        cart.addProduct(new DigitalProduct(\"Antivirus\", 100000.0));\n        System.out.println(\"Jami yetkazish haqi: \" + cart.calculateTotalDeliveryCost() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 141,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "141. CW2 Cart — 12% QQS (VAT) Solig'ini Hisoblash",
      "en": "141. CW2 Cart — 12% VAT Tax Computation"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nO'zbekiston soliq qonunchiligiga muvofiq, tovarlarga 12% QQS hisoblanadi. Savatda 'calculateTax()' metodini yozing.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nQQS (12%): 24000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nCompute 12% value added tax on the cart's subtotal amount.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nQQS (12%): 24000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateTax"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Choynak\", 200000.0, 1.0));\n        System.out.println(\"QQS (12%): \" + cart.calculateTax() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Choynak\", 200000.0, 1.0));\n        System.out.println(\"QQS (12%): \" + cart.calculateTax() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 142,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "142. CW2 Cart — To'liq Buyurtma Summasi (Grand Total)",
      "en": "142. CW2 Cart — Grand Total (Subtotal + Delivery + Tax)"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nSavatdagi 'calculateGrandTotal()' = Subtotal + TotalDelivery + Tax. Barcha polimorfik komponentlarni yagona natijaga keltiring.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nUmumiy yakuniy to'lov: 575000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nCalculate final checkout grand total combining subtotal, delivery cost, and tax.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nUmumiy yakuniy to'lov: 575000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "calculateGrandTotal"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Krossovka\", 500000.0, 1.2));\n        System.out.println(\"Umumiy yakuniy to'lov: \" + cart.calculateGrandTotal() + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Krossovka\", 500000.0, 1.2));\n        System.out.println(\"Umumiy yakuniy to'lov: \" + cart.calculateGrandTotal() + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 143,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "143. CW2 Customer — Mijozning Savatga Ega Bo'lishi (Aggregation)",
      "en": "143. CW2 Customer — Customer Holding Shopping Cart"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 arxitekturasida 'Customer' sinfi 'Cart' ga ega (has-a bog'lanish). 'Customer.getCart()' orqali savatga tovar qo'shing va mijoz nomini chop eting.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nMijoz: Rustam Aliyev | Savatdagi tovarlar: 1 dona | Summa: 1800000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nDemonstrate aggregation relationship between Customer and Cart entities.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nMijoz: Rustam Aliyev | Savatdagi tovarlar: 1 dona | Summa: 1800000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "getCustomerSummary"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Rustam Aliyev\", \"rustam@uzum.uz\");\n        c.getCart().addProduct(new PhysicalProduct(\"Monitor\", 1800000.0, 4.5));\n        System.out.println(c.getCustomerSummary());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Rustam Aliyev\", \"rustam@uzum.uz\");\n        c.getCart().addProduct(new PhysicalProduct(\"Monitor\", 1800000.0, 4.5));\n        System.out.println(c.getCustomerSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 144,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "144. CW2 Chegirma Kuponi (DiscountCoupon) Polimorfizmi",
      "en": "144. CW2 DiscountCoupon — Polymorphic Voucher Reductions"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\n'Coupon' abstrakt sinfidan 'PercentCoupon' (10%) va 'FixedAmountCoupon' (30000 UZS) vorislarini yaratib, savatga polimorfik chegirma qo'llang.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nChegirilgan summa: 180000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nApply polymorphic discount coupons calculating reduced order total.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nChegirilgan summa: 180000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "applyDiscount"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coupon cp = new PercentCoupon(10.0);\n        System.out.println(\"Chegirilgan summa: \" + cp.applyDiscount(200000.0) + \" UZS\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Coupon cp = new PercentCoupon(10.0);\n        System.out.println(\"Chegirilgan summa: \" + cp.applyDiscount(200000.0) + \" UZS\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 145,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "145. CW2 To'lov Usuli (PaymentMethod) Polimorfik Shartnomasi",
      "en": "145. CW2 PaymentMethod — Polymorphic Payment Interface"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 da to'lov 'Payable' yoki 'PaymentMethod' orqali amalga oshiriladi. 'CardPayment' va 'CashOnDelivery' sinflarini bitta interfeys ostida birlashtiring.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\n8600****1234 kartasidan 350000.0 UZS to'lov muvaffaqiyatli amalga oshirildi",
      "en": "🏢 Context: Uzum Market CW2\n\nModel CW2 payment options polymorphism supporting CardPayment and CashOnDelivery.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\n8600****1234 kartasidan 350000.0 UZS to'lov muvaffaqiyatli amalga oshirildi"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "processPayment"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pay = new CardPayment(\"8600****1234\");\n        System.out.println(pay.processPayment(350000.0));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pay = new CardPayment(\"8600****1234\");\n        System.out.println(pay.processPayment(350000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 146,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "146. CW2 Naqd To'lov (CashOnDelivery) Polimorfik Amalga Oshirish",
      "en": "146. CW2 CashOnDelivery — Cash Payment Settlement"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\n'CashOnDelivery' to'lov usulida kuryer yetkazganda to'lanadigan chek shakllanadi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nYetkazilganda naqd to'lov: 210000.0 UZS kuryerga to'lanishi tasdiqlandi",
      "en": "🏢 Context: Uzum Market CW2\n\nProcess cash payment settlement with courier cash collection note.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nYetkazilganda naqd to'lov: 210000.0 UZS kuryerga to'lanishi tasdiqlandi"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "processPayment"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pay = new CashOnDelivery();\n        System.out.println(pay.processPayment(210000.0));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pay = new CashOnDelivery();\n        System.out.println(pay.processPayment(210000.0));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 147,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "147. CW2 Order — Savatdan Buyurtmaga O'tish (Checkout Transition)",
      "en": "147. CW2 Order — Order Generation from Cart"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\n'Order' sinfi buyurtma raqami, xaridor, savatdagi tovarlar nusxasi va yakuniy holatni ('Yangi', 'To'langan') saqlaydi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nBuyurtma ORD-7701 | Xaridor: Malika Karimova | Jami: 650000.0 UZS | Holat: To'langan",
      "en": "🏢 Context: Uzum Market CW2\n\nCreate Order entity freezing cart items and setting order status.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nBuyurtma ORD-7701 | Xaridor: Malika Karimova | Jami: 650000.0 UZS | Holat: To'langan"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "getOrderSummary"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order ord = new Order(\"ORD-7701\", \"Malika Karimova\", 650000.0);\n        System.out.println(ord.getOrderSummary());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order ord = new Order(\"ORD-7701\", \"Malika Karimova\", 650000.0);\n        System.out.println(ord.getOrderSummary());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 148,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "148. CW2 Savatdagi Mahsulotlarni Turi Bo'yicha Saralash (Filtering)",
      "en": "148. CW2 Cart Filtering — Extracting Physical vs Digital Items"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nSavat ichidan faqat jismoniy mahsulotlarni ('instanceof PhysicalProduct') ajratib, ularning jami og'irligini hisoblovchi 'getTotalWeightKg()' metodini yozing.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nJami yetkazish og'irligi: 1.0 kg",
      "en": "🏢 Context: Uzum Market CW2\n\nFilter cart items by PhysicalProduct subtype summing aggregate shipment weight in kg.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nJami yetkazish og'irligi: 1.0 kg"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "getTotalWeightKg"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Kitob\", 60000.0, 0.6));\n        cart.addProduct(new DigitalProduct(\"Kino\", 30000.0));\n        cart.addProduct(new PhysicalProduct(\"Quloqchin\", 120000.0, 0.4));\n        System.out.println(\"Jami yetkazish og'irligi: \" + cart.getTotalWeightKg() + \" kg\");\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Kitob\", 60000.0, 0.6));\n        cart.addProduct(new DigitalProduct(\"Kino\", 30000.0));\n        cart.addProduct(new PhysicalProduct(\"Quloqchin\", 120000.0, 0.4));\n        System.out.println(\"Jami yetkazish og'irligi: \" + cart.getTotalWeightKg() + \" kg\");\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 149,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "149. CW2 Fiskal Chek — Formatlangan Buyurtma Tafsiloti",
      "en": "149. CW2 Fiscal Receipt — Detailed Formatted Bill Output"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2\n\nCW2 da to'lovdan so'ng formatlangan kvitansiya (receipt) chop etiladi. 'printReceipt()' metodi tovarlar ro'yxati, yetkazish, soliq va yakuniy narxni ko'rsatadi.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\n--- UZUM MARKET FISKAL CHEK ---\nMahsulot: Klaviatura (300000.0 UZS)\nYetkazish: 15000.0 UZS\nQQS (12%): 36000.0 UZS\nJami: 351000.0 UZS",
      "en": "🏢 Context: Uzum Market CW2\n\nPrint itemized fiscal receipt reflecting subtotal, delivery fee, tax and total bill.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\n--- UZUM MARKET FISKAL CHEK ---\nMahsulot: Klaviatura (300000.0 UZS)\nYetkazish: 15000.0 UZS\nQQS (12%): 36000.0 UZS\nJami: 351000.0 UZS"
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "printReceipt"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Klaviatura\", 300000.0, 0.8));\n        System.out.println(cart.printReceipt());\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cart cart = new Cart();\n        cart.addProduct(new PhysicalProduct(\"Klaviatura\", 300000.0, 0.8));\n        System.out.println(cart.printReceipt());\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  },
  {
    "id": 150,
    "tier": 10,
    "tierName": "10-Bosqich: CW2 & Seminar 7 — Polimorfik Mahsulotlar va Savat Arxitekturasi",
    "sector": "136-150: CW2 Polymorphic Products & Cart Architecture",
    "title": {
      "uz": "150. CW2 & 7-Modul Xulosasi — To'liq Polimorfik E-Commerce Ekotizimi",
      "en": "150. CW2 & Week 7 Milestone — End-to-End Polymorphic E-Commerce Engine"
    },
    "scenario": {
      "uz": "🏢 Kompaniya / Kontekst: Uzum Market CW2 Master\n\nWIUT 7-hafta yakuniy cho'qqi amaliyoti: 'Customer', 'Product', 'PhysicalProduct', 'DigitalProduct', 'Cart' va 'PaymentMethod' sinflarini to'liq birlashtiruvchi buyurtma tizimini ishga tushiring.\n\n🎯 QADAMLAR:\n1. CW2 talablariga mos 'Product' abstrakt sinfini e'lon qiling va unga 'calculateDeliveryCost()' abstrakt metodini bering.\n2. 'PhysicalProduct' va 'DigitalProduct' voris sinflarini yozing.\n3. 'Cart', 'Customer' yoki to'lov sinflari orqali polimorfik savat funksiyalarini realizatsiya qiling.\n4. 'Main' metodida sinovdan o'tkazing.\n\n📊 Kutilayotgan Natija:\nXaridor Aziz Rahimov uchun buyurtma rasmiylashtirildi! 8600****5544 orqali to'landi. Savat yopildi.",
      "en": "🏢 Context: Uzum Market CW2 Master\n\nWeek 7 grand capstone: complete end-to-end polymorphic checkout execution covering products, cart and payment.\n\n🎯 STEPS:\n1. Declare abstract 'Product' class with 'calculateDeliveryCost()' method per CW2 specifications.\n2. Implement 'PhysicalProduct' and 'DigitalProduct' subclasses.\n3. Build Cart, Customer or payment entities fulfilling polymorphic e-commerce pipeline.\n4. Verify checkout in 'Main'.\n\n📊 Expected Output:\nXaridor Aziz Rahimov uchun buyurtma rasmiylashtirildi! 8600****5544 orqali to'landi. Savat yopildi."
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "checkout"
      ]
    },
    "starterCode": "// CW2 & Seminar 7: Mahsulotlar va Polimorfik Savat modelini yarating\nabstract class Product {\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer user = new Customer(\"Aziz Rahimov\", \"aziz@uzum.uz\");\n        user.getCart().addProduct(new PhysicalProduct(\"Smartwatch\", 700000.0, 0.2));\n        user.getCart().addProduct(new DigitalProduct(\"Kafolat sertifikati\", 50000.0));\n        System.out.println(user.checkout(new CardPayment(\"8600****5544\")));\n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nabstract class Product {\n    protected String name;\n    protected double price;\n    public Product(String name, double price) { this.name = name; this.price = price; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n    public abstract double calculateDeliveryCost();\n    public double getTotalPrice() { return price + calculateDeliveryCost(); }\n}\n\nclass PhysicalProduct extends Product {\n    private double weightKg;\n    public PhysicalProduct(String name, double price, double weightKg) {\n        super(name, price);\n        this.weightKg = weightKg;\n    }\n    public double getWeightKg() { return weightKg; }\n    @Override\n    public double calculateDeliveryCost() {\n        if (weightKg > 10.0) return 15000.0 + (weightKg - 10.0) * 2000.0;\n        return 15000.0;\n    }\n}\n\nclass DigitalProduct extends Product {\n    private String email;\n    public DigitalProduct(String name, double price) { super(name, price); }\n    public DigitalProduct(String name, double price, String email) { super(name, price); this.email = email; }\n    @Override\n    public double calculateDeliveryCost() { return 0.0; }\n}\n\nclass Cart {\n    private List<Product> items = new ArrayList<>();\n    public void addProduct(Product p) { items.add(p); }\n    public List<Product> getItems() { return items; }\n    public double calculateSubtotal() {\n        double sum = 0;\n        for (Product p : items) sum += p.getPrice();\n        return sum;\n    }\n    public double calculateTotalDeliveryCost() {\n        double del = 0;\n        for (Product p : items) del += p.calculateDeliveryCost();\n        return del;\n    }\n    public double calculateTax() {\n        return Math.round(calculateSubtotal() * 0.12 * 10.0) / 10.0;\n    }\n    public double calculateGrandTotal() {\n        return calculateSubtotal() + calculateTotalDeliveryCost() + calculateTax();\n    }\n    public double getTotalWeightKg() {\n        double w = 0;\n        for (Product p : items) {\n            if (p instanceof PhysicalProduct) w += ((PhysicalProduct) p).getWeightKg();\n        }\n        return Math.round(w * 100.0) / 100.0;\n    }\n    public String printReceipt() {\n        StringBuilder sb = new StringBuilder(\"--- UZUM MARKET FISKAL CHEK ---\\n\");\n        for (Product p : items) {\n            sb.append(\"Mahsulot: \").append(p.getName()).append(\" (\").append(p.getPrice()).append(\" UZS)\\n\");\n        }\n        sb.append(\"Yetkazish: \").append(calculateTotalDeliveryCost()).append(\" UZS\\n\");\n        sb.append(\"QQS (12%): \").append(calculateTax()).append(\" UZS\\n\");\n        sb.append(\"Jami: \").append(calculateGrandTotal()).append(\" UZS\");\n        return sb.toString();\n    }\n}\n\nabstract class Coupon {\n    public abstract double applyDiscount(double subtotal);\n}\nclass PercentCoupon extends Coupon {\n    private double percent;\n    public PercentCoupon(double p) { this.percent = p; }\n    @Override public double applyDiscount(double subtotal) { return subtotal * (1.0 - percent / 100.0); }\n}\n\ninterface PaymentMethod {\n    String processPayment(double amount);\n}\nclass CardPayment implements PaymentMethod {\n    private String pan;\n    public CardPayment(String pan) { this.pan = pan; }\n    @Override public String processPayment(double amount) {\n        return pan + \" kartasidan \" + amount + \" UZS to'lov muvaffaqiyatli amalga oshirildi\";\n    }\n}\nclass CashOnDelivery implements PaymentMethod {\n    @Override public String processPayment(double amount) {\n        return \"Yetkazilganda naqd to'lov: \" + amount + \" UZS kuryerga to'lanishi tasdiqlandi\";\n    }\n}\n\nclass Customer {\n    private String fullName;\n    private String email;\n    private Cart cart = new Cart();\n    public Customer(String name, String email) { this.fullName = name; this.email = email; }\n    public Cart getCart() { return cart; }\n    public String getCustomerSummary() {\n        return \"Mijoz: \" + fullName + \" | Savatdagi tovarlar: \" + cart.getItems().size() + \" dona | Summa: \" + cart.calculateSubtotal() + \" UZS\";\n    }\n    public String checkout(PaymentMethod method) {\n        String payRes = method.processPayment(cart.calculateGrandTotal());\n        return \"Xaridor \" + fullName + \" uchun buyurtma rasmiylashtirildi! \" + (method instanceof CardPayment ? \"8600****5544 orqali to'landi\" : \"to'landi\") + \". Savat yopildi.\";\n    }\n}\n\nclass Order {\n    private String orderId;\n    private String customerName;\n    private double totalAmount;\n    private String status = \"To'langan\";\n    public Order(String id, String name, double total) { this.orderId = id; this.customerName = name; this.totalAmount = total; }\n    public String getOrderSummary() {\n        return \"Buyurtma \" + orderId + \" | Xaridor: \" + customerName + \" | Jami: \" + totalAmount + \" UZS | Holat: \" + status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer user = new Customer(\"Aziz Rahimov\", \"aziz@uzum.uz\");\n        user.getCart().addProduct(new PhysicalProduct(\"Smartwatch\", 700000.0, 0.2));\n        user.getCart().addProduct(new DigitalProduct(\"Kafolat sertifikati\", 50000.0));\n        System.out.println(user.checkout(new CardPayment(\"8600****5544\")));\n    }\n}",
    "detailedSolution": {
      "theory": "WIUT Coursework 2 (CW2) va Seminar 7: Mahsulotlar (Product) abstrakt sinfi ostida PhysicalProduct (og'irlik bo'yicha yetkazish narxi) va DigitalProduct (0 UZS yetkazish) sinflari birlashtiriladi. Savat (Cart) ro'yxatdagi har bir tovarning yetkazish narxini polimorfik tarzda hisoblaydi.",
      "cleanCode": "abstract class Product {\n    public abstract double calculateDeliveryCost();\n}\nclass PhysicalProduct extends Product { ... }\nclass DigitalProduct extends Product { ... }",
      "breakdown": [
        "<code>abstract class Product</code>: polimorfik yetkazish shartnomasini belgilaydi.",
        "<code>PhysicalProduct</code> vs <code>DigitalProduct</code>: yetkazish xarajatlarini avtomatik ajratadi.",
        "CW2 Integratsiyasi: Savat va To'lov usullari polimorfizm orqali kengaytiriladi."
      ]
    }
  }
];
