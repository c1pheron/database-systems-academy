window.OOP_CHALLENGES_W2 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "1. Uzum Market — Bitta Xususiy Maydonni Yashirish va getPrice()",
      "en": "1. Uzum Market — Single Private Field Hiding and getPrice()",
      "ru": "1. Uzum Market — Скрытие одного приватного поля и getPrice()"
    },
    "scenario": {
      "uz": "Uzum Market tizimida tovar narxi to'g'ridan-to'g'ri tashqaridan o'zgartirilmasligi kerak. Narxni 'private double price' qilib yashiring va unga faqat 'getPrice()' getteri orqali kirish imkonini bering.",
      "en": "In Uzum Market, product price must never be altered directly. Encapsulate it with 'private double price' and provide read access via 'getPrice()'.",
      "ru": "В системе Uzum Market цена товара не должна меняться напрямую. Скройте её с помощью 'private double price' и предоставьте доступ только через 'getPrice()'."
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private double price;\n\n    public Product(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(45000.0);\n        System.out.println(\"Mahsulot narxi: \" + p.getPrice() + \" UZS\");\n    }\n}",
    "expectedOutput": "Mahsulot narxi: 45000.0 UZS",
    "newKnowledge": {
      "uz": "Maydonlarni 'private' qilib yashirish (Data Hiding), tashqi kodga faqat 'public getPrice()' getteri orqali xavfsiz o'qish huquqini taqdim etish.",
      "en": "Private field encapsulation (Data Hiding), exposing read-only access strictly through 'public getPrice()'.",
      "ru": "Сокрытие полей с модификатором 'private' (Data Hiding), предоставление безопасного доступа на чтение через 'getPrice()'."
    },
    "newKnowledgeTags": [
      "private",
      "getter",
      "data hiding"
    ],
    "methodSpecs": [
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>45000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>45000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>45000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Product",
        "signature": "public Product(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>45000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>45000.0</code>)",
          "ru": "<code>double price</code> (например, <code>45000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.price = price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.price = price;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`p` nomli `Product` ob'yektini yarating va argument sifatida `45000.0` qiymatini bering."
        ],
        "en": [
          "Create a `Product` object named `p` and pass argument(s) `45000.0`."
        ],
        "ru": [
          "Создайте объект `Product` с именем `p` и передайте аргумент(ы) `45000.0`."
        ]
      },
      "expectedOutput": "Mahsulot narxi: 45000.0 UZS"
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "2. Payme — Turli Toifadagi Maydonlar: Matn va Butun Son",
      "en": "2. Payme — Multi-Type Encapsulation: String and Integer",
      "ru": "2. Payme — Инкапсуляция полей разного типа: String и целое число"
    },
    "scenario": {
      "uz": "Payme foydalanuvchisi login ('username') va noto'g'ri urinishlar soni ('attempts') maydonlariga ega. Har ikkala maydonni 'private' qilib yashiring va tegishli getterlar bilan ta'minlang.",
      "en": "A Payme user has a 'username' (String) and 'attempts' (int). Encapsulate both fields as private and provide getters.",
      "ru": "Пользователь Payme имеет логин ('username') и счетчик попыток ('attempts'). Сделайте оба поля private и создайте геттеры."
    },
    "requirements": {
      "classes": [
        "WalletAuth",
        "Main"
      ],
      "privateFields": [
        "username",
        "attempts"
      ],
      "methods": [
        "getUsername",
        "getAttempts"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class WalletAuth {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class WalletAuth {\n    private String username;\n    private int attempts;\n\n    public WalletAuth(String username, int attempts) {\n        this.username = username;\n        this.attempts = attempts;\n    }\n\n    public String getUsername() {\n        return this.username;\n    }\n\n    public int getAttempts() {\n        return this.attempts;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletAuth auth = new WalletAuth(\"rustam_payme\", 3);\n        System.out.println(\"Foydalanuvchi: \" + auth.getUsername() + \" | Urinishlar: \" + auth.getAttempts());\n    }\n}",
    "expectedOutput": "Foydalanuvchi: rustam_payme | Urinishlar: 3",
    "newKnowledge": {
      "uz": "Turli xil toifadagi (String va int) xususiy maydonlarni birgalikda inkapsulyatsiya qilish va har biri uchun alohida getter yozish.",
      "en": "Encapsulating multiple heterogeneous fields (String, int) with distinct accessor methods.",
      "ru": "Инкапсуляция полей разного типа (String, int) с отдельными геттерами для каждого."
    },
    "newKnowledgeTags": [
      "private",
      "multi-type",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getUsername()",
        "signature": "public String getUsername()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String username</code> maydonining qiymatini return qiladi (masalan, <code>\"rustam_payme\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String username</code> (e.g. <code>\"rustam_payme\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String username</code> (например, <code>\"rustam_payme\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>username</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>username</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>username</code> без возможности модификации."
        }
      },
      {
        "name": "getAttempts()",
        "signature": "public int getAttempts()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int attempts</code> maydonining qiymatini return qiladi (masalan, <code>3</code>).",
          "en": "<code>int</code>: returns the value of <code>private int attempts</code> (e.g. <code>3</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int attempts</code> (например, <code>3</code>)."
        },
        "desc": {
          "uz": "Ichki <code>attempts</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>attempts</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>attempts</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "WalletAuth",
        "signature": "public WalletAuth(String username, int attempts)",
        "params": {
          "uz": "<code>String username, int attempts</code> (masalan, <code>\"rustam_payme\", 3</code>)",
          "en": "<code>String username, int attempts</code> (e.g. <code>\"rustam_payme\", 3</code>)",
          "ru": "<code>String username, int attempts</code> (например, <code>\"rustam_payme\", 3</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.username = username;</code> <code>this.attempts = attempts;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.username = username;</code> <code>this.attempts = attempts;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.username = username;</code> <code>this.attempts = attempts;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`auth` nomli `WalletAuth` ob'yektini yarating va argument sifatida `\"rustam_payme\", 3` qiymatini bering."
        ],
        "en": [
          "Create a `WalletAuth` object named `auth` and pass argument(s) `\"rustam_payme\", 3`."
        ],
        "ru": [
          "Создайте объект `WalletAuth` с именем `auth` и передайте аргумент(ы) `\"rustam_payme\", 3`."
        ]
      },
      "expectedOutput": "Foydalanuvchi: rustam_payme | Urinishlar: 3"
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "3. Korzinka — Mantiqiy (boolean) Maydonlar uchun 'is' Prefiksi",
      "en": "3. Korzinka — Boolean Accessor Naming Standard using 'is' Prefix",
      "ru": "3. Korzinka — Стандарт именования булевых аксессоров с префиксом 'is'"
    },
    "scenario": {
      "uz": "Java Beans konvensiyasiga ko'ra boolean maydonlar uchun 'get' o'rniga 'is' prefiksi ishlatiladi. 'inStock' maydoni uchun 'isInStock()' accessorini yarating.",
      "en": "Per JavaBeans conventions, boolean accessors use the 'is' prefix rather than 'get'. Create 'isInStock()' for 'inStock'.",
      "ru": "По конвенции JavaBeans для полей boolean вместо get используется префикс is. Создайте аксессор isInStock() для inStock."
    },
    "requirements": {
      "classes": [
        "InventoryItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "inStock"
      ],
      "methods": [
        "getName",
        "isInStock"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class InventoryItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class InventoryItem {\n    private String name;\n    private boolean inStock;\n\n    public InventoryItem(String name, boolean inStock) {\n        this.name = name;\n        this.inStock = inStock;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public boolean isInStock() {\n        return this.inStock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryItem item = new InventoryItem(\"Sut\", true);\n        System.out.println(\"Tovar mavjudmi: \" + item.isInStock());\n    }\n}",
    "expectedOutput": "Tovar mavjudmi: true",
    "newKnowledge": {
      "uz": "Mantiqiy (boolean) maydonlar uchun 'get' o'rniga 'is' prefiksini qo'llash (JavaBeans spetsifikatsiyasi: isInStock()).",
      "en": "Boolean accessor naming standard using 'is' prefix rather than 'get' (JavaBeans convention: isInStock()).",
      "ru": "Стандарт именования логических геттеров с префиксом 'is' вместо 'get' (стандарт JavaBeans: isInStock())."
    },
    "newKnowledgeTags": [
      "boolean",
      "is-prefix",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi (masalan, <code>\"Sut\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String name</code> (e.g. <code>\"Sut\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code> (например, <code>\"Sut\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "isInStock()",
        "signature": "public boolean isInStock()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean inStock</code> maydonining qiymatini return qiladi (masalan, <code>true</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean inStock</code> (e.g. <code>true</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean inStock</code> (например, <code>true</code>)."
        },
        "desc": {
          "uz": "Ichki <code>inStock</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>inStock</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>inStock</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "InventoryItem",
        "signature": "public InventoryItem(String name, boolean inStock)",
        "params": {
          "uz": "<code>String name, boolean inStock</code> (masalan, <code>\"Sut\", true</code>)",
          "en": "<code>String name, boolean inStock</code> (e.g. <code>\"Sut\", true</code>)",
          "ru": "<code>String name, boolean inStock</code> (например, <code>\"Sut\", true</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> <code>this.inStock = inStock;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code> <code>this.inStock = inStock;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code> <code>this.inStock = inStock;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`item` nomli `InventoryItem` ob'yektini yarating va argument sifatida `\"Sut\", true` qiymatini bering."
        ],
        "en": [
          "Create a `InventoryItem` object named `item` and pass argument(s) `\"Sut\", true`."
        ],
        "ru": [
          "Создайте объект `InventoryItem` с именем `item` и передайте аргумент(ы) `\"Sut\", true`."
        ]
      },
      "expectedOutput": "Tovar mavjudmi: true"
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "4. Yandex Go — Faqat O'qiladigan (Read-Only) Qat'iy Identifikator",
      "en": "4. Yandex Go — Strictly Read-Only Trip Identifier",
      "ru": "4. Yandex Go — Строго доступный только для чтения идентификатор поездки"
    },
    "scenario": {
      "uz": "Yandex Go safarida safar identifikatori ('tripId') yaratilgandan so'ng hech qachon o'zgarmasligi kerak. Uni 'private final String tripId' sifatida saqlang va getTripId() metodini bering.",
      "en": "In Yandex Go, tripId must remain strictly read-only after creation. Store as 'private final String tripId' with getTripId().",
      "ru": "В Yandex Go идентификатор поездки tripId не должен меняться после создания. Сохраните как 'private final String tripId' с getTripId()."
    },
    "requirements": {
      "classes": [
        "Trip",
        "Main"
      ],
      "privateFields": [
        "tripId"
      ],
      "methods": [
        "getTripId"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class Trip {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Trip {\n    private final String tripId;\n\n    public Trip(String tripId) {\n        this.tripId = tripId;\n    }\n\n    public String getTripId() {\n        return this.tripId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Trip trip = new Trip(\"TRIP-99824\");\n        System.out.println(\"Safar ID: \" + trip.getTripId());\n    }\n}",
    "expectedOutput": "Safar ID: TRIP-99824",
    "newKnowledge": {
      "uz": "'final' kalit so'zi, ob'yekt yaratilgandan keyin aslo o'zgarmaydigan qat'iy read-only identifikatorlarni himoyalash.",
      "en": "The 'final' keyword, protecting strictly read-only immutable identifiers from subsequent mutations.",
      "ru": "Ключевое слово 'final', защита неизменяемых идентификаторов, доступных строго только для чтения."
    },
    "newKnowledgeTags": [
      "final",
      "read-only",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getTripId()",
        "signature": "public String getTripId()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String tripId</code> maydonining qiymatini return qiladi (masalan, <code>\"TRIP-99824\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String tripId</code> (e.g. <code>\"TRIP-99824\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String tripId</code> (например, <code>\"TRIP-99824\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>tripId</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>tripId</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>tripId</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Trip",
        "signature": "public Trip(String tripId)",
        "params": {
          "uz": "<code>String tripId</code> (masalan, <code>\"TRIP-99824\"</code>)",
          "en": "<code>String tripId</code> (e.g. <code>\"TRIP-99824\"</code>)",
          "ru": "<code>String tripId</code> (например, <code>\"TRIP-99824\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.tripId = tripId;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.tripId = tripId;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.tripId = tripId;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`trip` nomli `Trip` ob'yektini yarating va argument sifatida `\"TRIP-99824\"` qiymatini bering."
        ],
        "en": [
          "Create a `Trip` object named `trip` and pass argument(s) `\"TRIP-99824\"`."
        ],
        "ru": [
          "Создайте объект `Trip` с именем `trip` и передайте аргумент(ы) `\"TRIP-99824\"`."
        ]
      },
      "expectedOutput": "Safar ID: TRIP-99824"
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "5. Texnomart — Belgili (char) Tovar Sifat Darajasi",
      "en": "5. Texnomart — Primitive char Quality Grade Encapsulation",
      "ru": "5. Texnomart — Инкапсуляция градации качества типа char"
    },
    "scenario": {
      "uz": "Texnomart texnikalarini sifat darajasi ('char grade', masalan 'A', 'B', 'C') bilan belgilaydi. 'private char grade' maydonini konstruktor va getGrade() orqali inkapsulyatsiya qiling.",
      "en": "Texnomart classifies electronics by grade ('A', 'B', 'C'). Encapsulate 'private char grade' with constructor and getGrade().",
      "ru": "Texnomart классифицирует технику категорией качества char grade ('A', 'B'). Инкапсулируйте поле и геттер."
    },
    "requirements": {
      "classes": [
        "TechItem",
        "Main"
      ],
      "privateFields": [
        "grade"
      ],
      "methods": [
        "getGrade"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class TechItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TechItem {\n    private char grade;\n\n    public TechItem(char grade) {\n        this.grade = grade;\n    }\n\n    public char getGrade() {\n        return this.grade;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TechItem item = new TechItem('A');\n        System.out.println(\"Sifat darajasi: \" + item.getGrade());\n    }\n}",
    "expectedOutput": "Sifat darajasi: A",
    "newKnowledge": {
      "uz": "Belgili ('char') primitiv toifani inkapsulyatsiya qilish, tovar sifat toifasini getter orqali xavfsiz o'qish.",
      "en": "Encapsulating primitive 'char' fields and accessing quality grades via getter.",
      "ru": "Инкапсуляция примитивного типа 'char' и безопасный доступ к градации качества через геттер."
    },
    "newKnowledgeTags": [
      "char",
      "primitive",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getGrade()",
        "signature": "public char getGrade()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>char</code>: <code>private char grade</code> maydonining qiymatini return qiladi (masalan, <code>'A'</code>).",
          "en": "<code>char</code>: returns the value of <code>private char grade</code> (e.g. <code>'A'</code>).",
          "ru": "<code>char</code>: возвращает значение поля <code>private char grade</code> (например, <code>'A'</code>)."
        },
        "desc": {
          "uz": "Ichki <code>grade</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>grade</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>grade</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TechItem",
        "signature": "public TechItem(char grade)",
        "params": {
          "uz": "<code>char grade</code> (masalan, <code>'A'</code>)",
          "en": "<code>char grade</code> (e.g. <code>'A'</code>)",
          "ru": "<code>char grade</code> (например, <code>'A'</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.grade = grade;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.grade = grade;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.grade = grade;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`item` nomli `TechItem` ob'yektini yarating va argument sifatida `'A'` qiymatini bering."
        ],
        "en": [
          "Create a `TechItem` object named `item` and pass argument(s) `'A'`."
        ],
        "ru": [
          "Создайте объект `TechItem` с именем `item` и передайте аргумент(ы) `'A'`."
        ]
      },
      "expectedOutput": "Sifat darajasi: A"
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "6. Click — Null Xavfsizligini Ta'minlovchi Xavfsiz Getter",
      "en": "6. Click — Null-Safe String Accessor Guard",
      "ru": "6. Click — Безопасный аксессор с защитой от null"
    },
    "scenario": {
      "uz": "Foydalanuvchi ismi null bo'lib qolgan holatda NullPointerException chiqishining oldini olish uchun, getName() getteri ichida agar name null bo'lsa bo'sh matn \"\" qaytaring.",
      "en": "To prevent NullPointerException, if 'name' is null, the getter 'getName()' must return an empty string \"\".",
      "ru": "Чтобы избежать NullPointerException, если поле name равно null, метод getName() должен возвращать пустую строку \"\"."
    },
    "requirements": {
      "classes": [
        "SafeUser",
        "Main"
      ],
      "privateFields": [
        "name"
      ],
      "methods": [
        "getName"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SafeUser {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SafeUser {\n    private String name;\n\n    public SafeUser(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        if (this.name == null) {\n            return \"\";\n        }\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SafeUser u1 = new SafeUser(null);\n        SafeUser u2 = new SafeUser(\"Jasur\");\n        System.out.println(\"User1: [\" + u1.getName() + \"] | User2: [\" + u2.getName() + \"]\");\n    }\n}",
    "expectedOutput": "User1: [] | User2: [Jasur]",
    "newKnowledge": {
      "uz": "Null-xavfsiz getter: NullPointerException xatosini oldini olish uchun getter ichida null tekshirib bo'sh matn qaytarish.",
      "en": "Null-safe accessor: guarding against NullPointerException by returning empty string when field is null.",
      "ru": "Null-безопасный геттер: предотвращение NullPointerException путем возврата пустой строки при значении null."
    },
    "newKnowledgeTags": [
      "null-safety",
      "getter guard",
      "defensive"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>name</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>name</code> qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>String</code>: returns safe default if <code>name</code> is null, otherwise returns <code>name</code> (e.g. <code>null</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>name</code> null, иначе <code>name</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SafeUser",
        "signature": "public SafeUser(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>null</code>)",
          "en": "<code>String name</code> (e.g. <code>null</code>)",
          "ru": "<code>String name</code> (например, <code>null</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `u1` (null) hamda `u2` (\"Jasur\")."
        ],
        "en": [
          "Create 2 objects: `u1` (null) and `u2` (\"Jasur\")."
        ],
        "ru": [
          "Создайте 2 объекта: `u1` (null) и `u2` (\"Jasur\")."
        ]
      },
      "expectedOutput": "User1: [] | User2: [Jasur]"
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "7. Safia — Dinamik Hisoblanuvchi Mantiqiy Getter (isAdult)",
      "en": "7. Safia — Dynamically Computed Boolean Predicate (isAdult)",
      "ru": "7. Safia — Динамически вычисляемый булев геттер (isAdult)"
    },
    "scenario": {
      "uz": "Xodim voyaga yetganligini ('isAdult()') bilish uchun alohida boolean maydon saqlash shart emas. 'private int age' maydonidan foydalanib, 'isAdult()' metodida 'age >= 18' shartini dinamik hisoblab qaytaring.",
      "en": "Do not store a redundant boolean field. Compute 'isAdult()' dynamically via 'this.age >= 18'.",
      "ru": "Не храните избыточное булево поле. Вычисляйте 'isAdult()' динамически через 'this.age >= 18'."
    },
    "requirements": {
      "classes": [
        "Employee",
        "Main"
      ],
      "privateFields": [
        "age"
      ],
      "methods": [
        "isAdult",
        "getAge"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Employee {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Employee {\n    private int age;\n\n    public Employee(int age) {\n        this.age = age;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public boolean isAdult() {\n        return this.age >= 18;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Employee e1 = new Employee(17);\n        Employee e2 = new Employee(22);\n        System.out.println(\"E1 voyaga yetganmi: \" + e1.isAdult() + \" | E2: \" + e2.isAdult());\n    }\n}",
    "expectedOutput": "E1 voyaga yetganmi: false | E2: true",
    "newKnowledge": {
      "uz": "Dinamik hisoblanuvchi getter (Computed Property): ortiqcha boolean maydon ochmasdan, age >= 18 shartini chaqirilganda hisoblab berish.",
      "en": "Dynamically computed property: evaluating condition (age >= 18) on-the-fly without storing redundant state.",
      "ru": "Динамически вычисляемое свойство (Computed Property): расчет условия age >= 18 на лету без лишних полей."
    },
    "newKnowledgeTags": [
      "computed property",
      "boolean (is)",
      "memory optimization"
    ],
    "methodSpecs": [
      {
        "name": "getAge()",
        "signature": "public int getAge()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int age</code> maydonining qiymatini return qiladi (masalan, <code>17</code>).",
          "en": "<code>int</code>: returns the value of <code>private int age</code> (e.g. <code>17</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int age</code> (например, <code>17</code>)."
        },
        "desc": {
          "uz": "Ichki <code>age</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>age</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>age</code> без возможности модификации."
        }
      },
      {
        "name": "isAdult()",
        "signature": "public boolean isAdult()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.age >= 18</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.age >= 18</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.age >= 18</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.age >= 18</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.age >= 18</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.age >= 18</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Employee",
        "signature": "public Employee(int age)",
        "params": {
          "uz": "<code>int age</code> (masalan, <code>17</code>)",
          "en": "<code>int age</code> (e.g. <code>17</code>)",
          "ru": "<code>int age</code> (например, <code>17</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.age = age;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.age = age;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.age = age;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `e1` (17) hamda `e2` (22)."
        ],
        "en": [
          "Create 2 objects: `e1` (17) and `e2` (22)."
        ],
        "ru": [
          "Создайте 2 объекта: `e1` (17) и `e2` (22)."
        ]
      },
      "expectedOutput": "E1 voyaga yetganmi: false | E2: true"
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "8. Express24 — Ichki Qiymatni Buzmasdan Katta Harflarda Qaytaruvchi Getter",
      "en": "8. Express24 — Non-Mutating Uppercase Transformation Accessor",
      "ru": "8. Express24 — Немутирующий аксессор в верхнем регистре"
    },
    "scenario": {
      "uz": "Kuryer zonasining kodi ('zoneCode') saqlanadi. 'getNormalizedZone()' metodi maydonning o'zini o'zgartirmasdan, uning to'liq katta harfdagi (toUpperCase()) nusxasini qaytarsin.",
      "en": "The courier zoneCode is stored. 'getNormalizedZone()' returns an uppercase copy without altering internal state.",
      "ru": "Зона курьера zoneCode сохраняется. getNormalizedZone() должен возвращать строку в верхнем регистре, не изменяя поле."
    },
    "requirements": {
      "classes": [
        "CourierZone",
        "Main"
      ],
      "privateFields": [
        "zoneCode"
      ],
      "methods": [
        "getNormalizedZone",
        "getZoneCode"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CourierZone {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CourierZone {\n    private String zoneCode;\n\n    public CourierZone(String zoneCode) {\n        this.zoneCode = zoneCode;\n    }\n\n    public String getZoneCode() {\n        return this.zoneCode;\n    }\n\n    public String getNormalizedZone() {\n        return (this.zoneCode != null) ? this.zoneCode.toUpperCase() : \"\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierZone zone = new CourierZone(\"chilonzor-9\");\n        System.out.println(\"Asl: \" + zone.getZoneCode() + \" | Normal: \" + zone.getNormalizedZone());\n    }\n}",
    "expectedOutput": "Asl: chilonzor-9 | Normal: CHILONZOR-9",
    "newKnowledge": {
      "uz": "Maydonning ichki holatini buzmasdan (non-mutating), faqat nusxasini katta harflarda (toUpperCase) qaytaruvchi xavfsiz getter.",
      "en": "Non-mutating accessor: returning transformed uppercase copy without altering internal state.",
      "ru": "Немутирующий геттер: возврат преобразованной копии в верхнем регистре без изменения внутреннего состояния."
    },
    "newKnowledgeTags": [
      "non-mutating",
      "String transform",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getZoneCode()",
        "signature": "public String getZoneCode()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String zoneCode</code> maydonining qiymatini return qiladi (masalan, <code>\"chilonzor-9\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String zoneCode</code> (e.g. <code>\"chilonzor-9\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String zoneCode</code> (например, <code>\"chilonzor-9\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>zoneCode</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>zoneCode</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>zoneCode</code> без возможности модификации."
        }
      },
      {
        "name": "getNormalizedZone()",
        "signature": "public String getNormalizedZone()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>zoneCode</code> maydoni qiymatini <code>toUpperCase()</code> orqali katta harflarda return qiladi (masalan, <code>\"CHILONZOR-9\"</code>).",
          "en": "<code>String</code>: returns <code>zoneCode</code> converted to uppercase via <code>toUpperCase()</code> (e.g. <code>\"CHILONZOR-9\"</code>).",
          "ru": "<code>String</code>: возвращает поле <code>zoneCode</code> в верхнем регистре через <code>toUpperCase()</code> (например, <code>\"CHILONZOR-9\"</code>)."
        },
        "desc": {
          "uz": "<code>zoneCode</code> qiymatini to'liq bosh harflarga aylantirib, formatlangan holda return qiladi.",
          "en": "Converts <code>zoneCode</code> value to uppercase characters and returns it.",
          "ru": "Преобразует значение <code>zoneCode</code> в верхний регистр и возвращает его."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CourierZone",
        "signature": "public CourierZone(String zoneCode)",
        "params": {
          "uz": "<code>String zoneCode</code> (masalan, <code>\"chilonzor-9\"</code>)",
          "en": "<code>String zoneCode</code> (e.g. <code>\"chilonzor-9\"</code>)",
          "ru": "<code>String zoneCode</code> (например, <code>\"chilonzor-9\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.zoneCode = zoneCode;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.zoneCode = zoneCode;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.zoneCode = zoneCode;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`zone` nomli `CourierZone` ob'yektini yarating va argument sifatida `\"chilonzor-9\"` qiymatini bering."
        ],
        "en": [
          "Create a `CourierZone` object named `zone` and pass argument(s) `\"chilonzor-9\"`."
        ],
        "ru": [
          "Создайте объект `CourierZone` с именем `zone` и передайте аргумент(ы) `\"chilonzor-9\"`."
        ]
      },
      "expectedOutput": "Asl: chilonzor-9 | Normal: CHILONZOR-9"
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "9. Milliy Bank — Maxfiy Karta Raqamini Niqoblovchi Getter (Masking)",
      "en": "9. Milliy Bank — Masked Card Number Encapsulated Accessor",
      "ru": "9. Milliy Bank — Маскирующий геттер для номера карты"
    },
    "scenario": {
      "uz": "Bank xavfsizligi qoidalariga ko'ra 16 xonali karta raqami to'liq ko'rsatilmasligi shart. 'getMaskedNumber()' getteri oxirgi 4 ta raqamni qoldirib, qolganlarini yulduzcha qilsin: '**** **** **** ' + oxirgi 4 raqam.",
      "en": "Security policies mandate masking card numbers. 'getMaskedNumber()' exposes only the last 4 digits: '**** **** **** ' + substring.",
      "ru": "Правила безопасности требуют маскировки. getMaskedNumber() должен возвращать '**** **** **** ' + последние 4 цифры."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "privateFields": [
        "cardNumber"
      ],
      "methods": [
        "getMaskedNumber"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class BankCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    private String cardNumber;\n\n    public BankCard(String cardNumber) {\n        this.cardNumber = cardNumber;\n    }\n\n    public String getMaskedNumber() {\n        if (this.cardNumber != null && this.cardNumber.length() == 16) {\n            return \"**** **** **** \" + this.cardNumber.substring(12);\n        }\n        return \"Yaroqsiz karta\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"8600123456789911\");\n        System.out.println(\"Karta: \" + card.getMaskedNumber());\n    }\n}",
    "expectedOutput": "Karta: **** **** **** 9911",
    "newKnowledge": {
      "uz": "Xavfsizlik maqsadida ma'lumotlarni niqoblash (Masking): 16 xonali karta raqamining oxirgi 4 xonasini qoldirib, qolganini yulduzcha qilish.",
      "en": "Data obfuscation/masking: masking sensitive card numbers to show only the last 4 digits.",
      "ru": "Маскирование конфиденциальных данных: сокрытие номера карты с отображением только последних 4 цифр."
    },
    "newKnowledgeTags": [
      "masking",
      "security",
      "substring"
    ],
    "methodSpecs": [
      {
        "name": "getMaskedNumber()",
        "signature": "public String getMaskedNumber()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>cardNumber</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>cardNumber</code> qiymatini return qiladi (masalan, <code>\"8600123456789911\"</code>).",
          "en": "<code>String</code>: returns safe default if <code>cardNumber</code> is null, otherwise returns <code>cardNumber</code> (e.g. <code>\"8600123456789911\"</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>cardNumber</code> null, иначе <code>cardNumber</code> (например, <code>\"8600123456789911\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "BankCard",
        "signature": "public BankCard(String cardNumber)",
        "params": {
          "uz": "<code>String cardNumber</code> (masalan, <code>\"8600123456789911\"</code>)",
          "en": "<code>String cardNumber</code> (e.g. <code>\"8600123456789911\"</code>)",
          "ru": "<code>String cardNumber</code> (например, <code>\"8600123456789911\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.cardNumber = cardNumber;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.cardNumber = cardNumber;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.cardNumber = cardNumber;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`card` nomli `BankCard` ob'yektini yarating va argument sifatida `\"8600123456789911\"` qiymatini bering."
        ],
        "en": [
          "Create a `BankCard` object named `card` and pass argument(s) `\"8600123456789911\"`."
        ],
        "ru": [
          "Создайте объект `BankCard` с именем `card` и передайте аргумент(ы) `\"8600123456789911\"`."
        ]
      },
      "expectedOutput": "Karta: **** **** **** 9911"
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "10. Asaxiy — Kirishlar Sonini Sanovchi Yashirin Audit Hisoblagichi",
      "en": "10. Asaxiy — Access Tracking Internal Counter Accessor",
      "ru": "10. Asaxiy — Скрытый счетчик обращений при чтении поля"
    },
    "scenario": {
      "uz": "API kaliti har safar o'qilganda ichki xususiy 'accessCount' hisoblagichi 1 ga oshiriladi. Tashqi kod 'getApiKey()' ni chaqirganda hisoblagich oshadi, uning qiymatini esa 'getAccessCount()' orqali ko'rish mumkin.",
      "en": "Every time 'getApiKey()' is invoked, an internal private counter 'accessCount' is incremented.",
      "ru": "При каждом вызове getApiKey() внутренний приватный счетчик accessCount увеличивается на 1."
    },
    "requirements": {
      "classes": [
        "ApiKeyManager",
        "Main"
      ],
      "privateFields": [
        "apiKey",
        "accessCount"
      ],
      "methods": [
        "getApiKey",
        "getAccessCount"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ApiKeyManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ApiKeyManager {\n    private String apiKey;\n    private int accessCount;\n\n    public ApiKeyManager(String apiKey) {\n        this.apiKey = apiKey;\n        this.accessCount = 0;\n    }\n\n    public String getApiKey() {\n        this.accessCount++;\n        return this.apiKey;\n    }\n\n    public int getAccessCount() {\n        return this.accessCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ApiKeyManager mgr = new ApiKeyManager(\"SECRET_ASAXIY_99\");\n        mgr.getApiKey();\n        mgr.getApiKey();\n        System.out.println(\"Kalit o'qildi: \" + mgr.getAccessCount() + \" marta\");\n    }\n}",
    "expectedOutput": "Kalit o'qildi: 2 marta",
    "newKnowledge": {
      "uz": "Getter ichida kirishlarni sanovchi yashirin hisoblagich (accessCount++), API kaliti necha marta o'qilganini yashirin kuzatish.",
      "en": "Access-tracking accessor side-effect: incrementing internal access counter upon every read.",
      "ru": "Скрытый счетчик обращений внутри геттера для аудита частоты чтения поля."
    },
    "newKnowledgeTags": [
      "access tracking",
      "side-effect",
      "audit"
    ],
    "methodSpecs": [
      {
        "name": "getApiKey()",
        "signature": "public String getApiKey()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>accessCount</code> hisoblagichini 1 taga oshirib, <code>private apiKey</code> maydonini return qiladi (masalan, <code>\"SECRET_ASAXIY_99\"</code>).",
          "en": "<code>String</code>: increments <code>accessCount</code> counter and returns <code>private apiKey</code> (e.g. <code>\"SECRET_ASAXIY_99\"</code>).",
          "ru": "<code>String</code>: увеличивает счетчик <code>accessCount</code> и возвращает поле <code>apiKey</code> (например, <code>\"SECRET_ASAXIY_99\"</code>)."
        },
        "desc": {
          "uz": "Har murojaatda <code>accessCount</code> maydonini oshirib, <code>apiKey</code> maydonining joriy qiymatini return qiladi.",
          "en": "Increments <code>accessCount</code> count on each call and returns the current <code>apiKey</code> value.",
          "ru": "Инкрементирует <code>accessCount</code> при каждом вызове и возвращает значение <code>apiKey</code>."
        }
      },
      {
        "name": "getAccessCount()",
        "signature": "public int getAccessCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int accessCount</code> maydonining qiymatini return qiladi.",
          "en": "<code>int</code>: returns the value of <code>private int accessCount</code>.",
          "ru": "<code>int</code>: возвращает значение поля <code>private int accessCount</code>."
        },
        "desc": {
          "uz": "Ichki <code>accessCount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>accessCount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>accessCount</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ApiKeyManager",
        "signature": "public ApiKeyManager(String apiKey)",
        "params": {
          "uz": "<code>String apiKey</code> (masalan, <code>\"SECRET_ASAXIY_99\"</code>)",
          "en": "<code>String apiKey</code> (e.g. <code>\"SECRET_ASAXIY_99\"</code>)",
          "ru": "<code>String apiKey</code> (например, <code>\"SECRET_ASAXIY_99\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.apiKey = apiKey;</code> <code>this.accessCount = 0;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.apiKey = apiKey;</code> <code>this.accessCount = 0;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.apiKey = apiKey;</code> <code>this.accessCount = 0;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`mgr` nomli `ApiKeyManager` ob'yektini yarating va argument sifatida `\"SECRET_ASAXIY_99\"` qiymatini bering.",
          "Tegishli `getApiKey()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ApiKeyManager` object named `mgr` and pass argument(s) `\"SECRET_ASAXIY_99\"`.",
          "Invoke `getApiKey()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ApiKeyManager` с именем `mgr` и передайте аргумент(ы) `\"SECRET_ASAXIY_99\"`.",
          "Вызовите метод(ы) `getApiKey()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Kalit o'qildi: 2 marta"
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "11. Dodo Pizza — Dangasa Initsializatsiya (Lazy Initialization) Getteri",
      "en": "11. Dodo Pizza — Lazy Loaded Cached Report Accessor",
      "ru": "11. Dodo Pizza — Ленивая инициализация в геттере"
    },
    "scenario": {
      "uz": "Oshxona hisoboti ('cachedReport') faqat birinchi marta 'getReport()' chaqirilgandagina generatsiya qilinadi (agar null bo'lsa \"Hisobot tayyorlandi\" qilinadi). Bu xotira va hisoblash resurslarini tejaydi.",
      "en": "The report string is lazily generated only on the first call to getReport() if null, optimizing resources.",
      "ru": "Строка отчета генерируется лениво при первом вызове getReport(), если она равна null."
    },
    "requirements": {
      "classes": [
        "KitchenReport",
        "Main"
      ],
      "privateFields": [
        "cachedReport"
      ],
      "methods": [
        "getReport"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class KitchenReport {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class KitchenReport {\n    private String cachedReport;\n\n    public KitchenReport() {\n        this.cachedReport = null;\n    }\n\n    public String getReport() {\n        if (this.cachedReport == null) {\n            this.cachedReport = \"Dodo Hisoboti: 15 ta pitsa\";\n        }\n        return this.cachedReport;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        KitchenReport kr = new KitchenReport();\n        System.out.println(\"1: \" + kr.getReport());\n        System.out.println(\"2: \" + kr.getReport());\n    }\n}",
    "expectedOutput": "1: Dodo Hisoboti: 15 ta pitsa\n2: Dodo Hisoboti: 15 ta pitsa",
    "newKnowledge": {
      "uz": "Dangasa initsializatsiya (Lazy Initialization): resurs talab qiladigan hisobotni faqat getter birinchi marta chaqirilgandagina yaratish.",
      "en": "Lazy initialization: generating expensive cached report solely upon the first invocation of getReport().",
      "ru": "Ленивая инициализация: генерация ресурсоемкого отчета только при первом вызове геттера."
    },
    "newKnowledgeTags": [
      "lazy loading",
      "caching",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getReport()",
        "signature": "public String getReport()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>cachedReport</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>cachedReport</code> qiymatini return qiladi.",
          "en": "<code>String</code>: returns safe default if <code>cachedReport</code> is null, otherwise returns <code>cachedReport</code>.",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>cachedReport</code> null, иначе <code>cachedReport</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "KitchenReport",
        "signature": "public KitchenReport()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "desc": {
          "uz": "Standart parametrsiz konstruktor, barcha xususiy maydonlarni boshlang'ich holatga keltiradi.",
          "en": "Default constructor, initializes private fields to baseline state.",
          "ru": "Конструктор по умолчанию, инициализирует приватные поля."
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`kr` nomli `KitchenReport` ob'yektini yarating."
        ],
        "en": [
          "Create a `KitchenReport` object named `kr`."
        ],
        "ru": [
          "Создайте объект `KitchenReport` с именем `kr`."
        ]
      },
      "expectedOutput": "1: Dodo Hisoboti: 15 ta pitsa\n2: Dodo Hisoboti: 15 ta pitsa"
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "12. Medion — Enum Maydonini Inkapsulyatsiya Qilish va getStatusText()",
      "en": "12. Medion — Encapsulated Enum and getStatusText()",
      "ru": "12. Medion — Инкапсуляция Enum и getStatusText()"
    },
    "scenario": {
      "uz": "Medion tahlil natijasi holati 'enum ResultStatus { PENDING, READY, DELIVERED }' sifatida saqlanadi. 'getStatusText()' getteri enum nomini kichik harflarda (toLowerCase()) qaytarsin.",
      "en": "Lab test status is tracked as an enum. 'getStatusText()' returns the enum name formatted in lower-case.",
      "ru": "Статус анализа хранится в enum. getStatusText() возвращает имя перечисления в нижнем регистре."
    },
    "requirements": {
      "classes": [
        "LabTest",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "methods": [
        "getStatusText"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "enum ResultStatus { PENDING, READY, DELIVERED }\n\nclass LabTest {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "enum ResultStatus { PENDING, READY, DELIVERED }\n\nclass LabTest {\n    private ResultStatus status;\n\n    public LabTest(ResultStatus status) {\n        this.status = status;\n    }\n\n    public String getStatusText() {\n        return (this.status != null) ? this.status.name().toLowerCase() : \"\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabTest test = new LabTest(ResultStatus.READY);\n        System.out.println(\"Holat: \" + test.getStatusText());\n    }\n}",
    "expectedOutput": "Holat: ready",
    "newKnowledge": {
      "uz": "Enum (sanab o'tiluvchi toifa) maydonini inkapsulyatsiya qilish va uning nomini matn ko'rinishida formatlab berish.",
      "en": "Encapsulating Java Enum types and exposing formatted lower-case string representations.",
      "ru": "Инкапсуляция перечисления Enum и форматированный вывод имени в нижнем регистре."
    },
    "newKnowledgeTags": [
      "enum",
      "encapsulation",
      "getter"
    ],
    "methodSpecs": [
      {
        "name": "getStatusText()",
        "signature": "public String getStatusText()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>status</code> maydoni qiymatini <code>toLowerCase()</code> orqali kichik harflarda return qiladi.",
          "en": "<code>String</code>: returns <code>status</code> converted to lowercase via <code>toLowerCase()</code>.",
          "ru": "<code>String</code>: возвращает поле <code>status</code> в нижнем регистре через <code>toLowerCase()</code>."
        },
        "desc": {
          "uz": "<code>status</code> qiymatini to'liq kichik harflarga aylantirib, xavfsiz return qiladi.",
          "en": "Converts <code>status</code> to lowercase characters and returns it safely.",
          "ru": "Преобразует <code>status</code> в нижний регистр и безопасно возвращает."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "LabTest",
        "signature": "public LabTest(ResultStatus status)",
        "params": {
          "uz": "<code>ResultStatus status</code> (masalan, <code>ResultStatus.READY</code>)",
          "en": "<code>ResultStatus status</code> (e.g. <code>ResultStatus.READY</code>)",
          "ru": "<code>ResultStatus status</code> (например, <code>ResultStatus.READY</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.status = status;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.status = status;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.status = status;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`test` nomli `LabTest` ob'yektini yarating va argument sifatida `ResultStatus.READY` qiymatini bering."
        ],
        "en": [
          "Create a `LabTest` object named `test` and pass argument(s) `ResultStatus.READY`."
        ],
        "ru": [
          "Создайте объект `LabTest` с именем `test` и передайте аргумент(ы) `ResultStatus.READY`."
        ]
      },
      "expectedOutput": "Holat: ready"
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "13. Beeline — Bir Nechta Maydonlarni Birlashtiruvchi Formatlangan Getter",
      "en": "13. Beeline — Composite Formatted Summary Accessor",
      "ru": "13. Beeline — Составной форматированный геттер"
    },
    "scenario": {
      "uz": "Mijozning 'firstName' va 'lastName' maydonlari xususiy saqlanadi. 'getFullName()' getteri ularni birlashtirib \"Aliyev, Ali\" ko'rinishida formatlab qaytarsin.",
      "en": "Customer firstName and lastName are private. 'getFullName()' combines them into 'LastName, FirstName' format.",
      "ru": "Поля firstName и lastName приватны. getFullName() объединяет их в формате 'Фамилия, Имя'."
    },
    "requirements": {
      "classes": [
        "Subscriber",
        "Main"
      ],
      "privateFields": [
        "firstName",
        "lastName"
      ],
      "methods": [
        "getFullName"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Subscriber {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Subscriber {\n    private String firstName;\n    private String lastName;\n\n    public Subscriber(String firstName, String lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n\n    public String getFullName() {\n        return this.lastName + \", \" + this.firstName;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Subscriber s = new Subscriber(\"Vali\", \"Karimov\");\n        System.out.println(\"Mijoz: \" + s.getFullName());\n    }\n}",
    "expectedOutput": "Mijoz: Karimov, Vali",
    "newKnowledge": {
      "uz": "Kompozit formatlangan getter: bir nechta xususiy maydonlarni (ism va familiya) birlashtirib yaxlit qator sifatida taqdim etish.",
      "en": "Composite summary accessor: assembling multiple private fields into a single unified formatted string.",
      "ru": "Составной форматированный геттер: объединение нескольких полей в единую строку отчета."
    },
    "newKnowledgeTags": [
      "composite getter",
      "derived property",
      "String format"
    ],
    "methodSpecs": [
      {
        "name": "getFullName()",
        "signature": "public String getFullName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Subscriber",
        "signature": "public Subscriber(String firstName, String lastName)",
        "params": {
          "uz": "<code>String firstName, String lastName</code> (masalan, <code>\"Vali\", \"Karimov\"</code>)",
          "en": "<code>String firstName, String lastName</code> (e.g. <code>\"Vali\", \"Karimov\"</code>)",
          "ru": "<code>String firstName, String lastName</code> (например, <code>\"Vali\", \"Karimov\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`s` nomli `Subscriber` ob'yektini yarating va argument sifatida `\"Vali\", \"Karimov\"` qiymatini bering."
        ],
        "en": [
          "Create a `Subscriber` object named `s` and pass argument(s) `\"Vali\", \"Karimov\"`."
        ],
        "ru": [
          "Создайте объект `Subscriber` с именем `s` и передайте аргумент(ы) `\"Vali\", \"Karimov\"`."
        ]
      },
      "expectedOutput": "Mijoz: Karimov, Vali"
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "14. UzAirways — Sekundlarni 'MM:SS' Ko'rinishida Qaytaruvchi Hisoblanuvchi Getter",
      "en": "14. UzAirways — Formatted 'MM:SS' Time Duration Accessor",
      "ru": "14. UzAirways — Форматированный геттер времени 'ММ:СС'"
    },
    "scenario": {
      "uz": "Parvoz kechikish vaqti xususiy 'totalSeconds' (int) sifatida saqlanadi. 'getFormattedDuration()' metodi uni bo'lish (/) va qoldiq (%) amallari bilan \"MM:SS\" (masalan \"03:45\") ko'rinishida formatlab qaytarsin.",
      "en": "Flight delay seconds are private. 'getFormattedDuration()' converts to 'MM:SS' using division and modulus.",
      "ru": "Задержка рейса хранится в секундах. getFormattedDuration() переводит их в формат 'ММ:СС'."
    },
    "requirements": {
      "classes": [
        "FlightDelay",
        "Main"
      ],
      "privateFields": [
        "totalSeconds"
      ],
      "methods": [
        "getFormattedDuration"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class FlightDelay {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FlightDelay {\n    private int totalSeconds;\n\n    public FlightDelay(int totalSeconds) {\n        this.totalSeconds = totalSeconds;\n    }\n\n    public String getFormattedDuration() {\n        int minutes = this.totalSeconds / 60;\n        int seconds = this.totalSeconds % 60;\n        return String.format(\"%02d:%02d\", minutes, seconds);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightDelay delay = new FlightDelay(225);\n        System.out.println(\"Kechikish: \" + delay.getFormattedDuration());\n    }\n}",
    "expectedOutput": "Kechikish: 03:45",
    "newKnowledge": {
      "uz": "Vaqtni formatlash: soniyalarni bo'lish (/) va qoldiq (%) orqali 'MM:SS' ko'rinishidagi hisoblanuvchi getterga aylantirish.",
      "en": "Time formatting: converting raw seconds into formatted 'MM:SS' string using division and modulo.",
      "ru": "Форматирование времени: преобразование секунд в строку 'ММ:СС' с помощью деления и остатка."
    },
    "newKnowledgeTags": [
      "time format",
      "math modulo",
      "computed getter"
    ],
    "methodSpecs": [
      {
        "name": "getFormattedDuration()",
        "signature": "public String getFormattedDuration()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "FlightDelay",
        "signature": "public FlightDelay(int totalSeconds)",
        "params": {
          "uz": "<code>int totalSeconds</code> (masalan, <code>225</code>)",
          "en": "<code>int totalSeconds</code> (e.g. <code>225</code>)",
          "ru": "<code>int totalSeconds</code> (например, <code>225</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.totalSeconds = totalSeconds;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.totalSeconds = totalSeconds;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.totalSeconds = totalSeconds;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`delay` nomli `FlightDelay` ob'yektini yarating va argument sifatida `225` qiymatini bering."
        ],
        "en": [
          "Create a `FlightDelay` object named `delay` and pass argument(s) `225`."
        ],
        "ru": [
          "Создайте объект `FlightDelay` с именем `delay` и передайте аргумент(ы) `225`."
        ]
      },
      "expectedOutput": "Kechikish: 03:45"
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Inkapsulyatsiya Asoslari va Maydonlarni Yashirish",
    "sector": "1-15: Data Hiding & Accessors",
    "title": {
      "uz": "15. WIUT SRS — Talaba Akademik Profilining To'liq Inkapsulyatsiyasi (Master)",
      "en": "15. WIUT SRS — Full Academic Student Profile Encapsulation (Master)",
      "ru": "15. WIUT SRS — Полная инкапсуляция академического профиля студента (Мастер)"
    },
    "scenario": {
      "uz": "WIUT SRS tizimida talabaning 4 ta xususiy maydoni: 'studentId' (String), 'fullName' (String), 'gpa' (double) va 'active' (boolean) inkapsulyatsiya qilingan. 'getAcademicSummary()' metodi talabaning to'liq profil satrini qaytarsin.",
      "en": "In WIUT SRS, 4 private fields (studentId, fullName, gpa, active) are fully encapsulated. 'getAcademicSummary()' returns the official profile summary.",
      "ru": "В WIUT SRS 4 поля студента полностью инкапсулированы. getAcademicSummary() возвращает сводку профиля."
    },
    "requirements": {
      "classes": [
        "StudentProfile",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "fullName",
        "gpa",
        "active"
      ],
      "methods": [
        "getAcademicSummary"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class StudentProfile {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StudentProfile {\n    private String studentId;\n    private String fullName;\n    private double gpa;\n    private boolean active;\n\n    public StudentProfile(String studentId, String fullName, double gpa, boolean active) {\n        this.studentId = studentId;\n        this.fullName = fullName;\n        this.gpa = gpa;\n        this.active = active;\n    }\n\n    public String getAcademicSummary() {\n        return \"ID: \" + this.studentId + \" | Ism: \" + this.fullName + \" | GPA: \" + this.gpa + \" | Faol: \" + this.active;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentProfile s = new StudentProfile(\"00023271\", \"Ali Valiyev\", 3.85, true);\n        System.out.println(s.getAcademicSummary());\n    }\n}",
    "expectedOutput": "ID: 00023271 | Ism: Ali Valiyev | GPA: 3.85 | Faol: true",
    "newKnowledge": {
      "uz": "Talaba akademik profilining to'liq inkapsulyatsiyasi: 4 xil toifadagi maydonlar va yaxlit hisobot getteri.",
      "en": "Full academic profile encapsulation: orchestrating heterogeneous fields with comprehensive summary accessor.",
      "ru": "Полная инкапсуляция профиля студента: объединение 4 разнотипных полей в сводный геттер."
    },
    "newKnowledgeTags": [
      "master profile",
      "full encapsulation",
      "clean code"
    ],
    "methodSpecs": [
      {
        "name": "getAcademicSummary()",
        "signature": "public String getAcademicSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StudentProfile",
        "signature": "public StudentProfile(String studentId, String fullName, double gpa, boolean active)",
        "params": {
          "uz": "<code>String studentId, String fullName, double gpa, boolean active</code> (masalan, <code>\"00023271\", \"Ali Valiyev\", 3.85, true</code>)",
          "en": "<code>String studentId, String fullName, double gpa, boolean active</code> (e.g. <code>\"00023271\", \"Ali Valiyev\", 3.85, true</code>)",
          "ru": "<code>String studentId, String fullName, double gpa, boolean active</code> (например, <code>\"00023271\", \"Ali Valiyev\", 3.85, true</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.studentId = studentId;</code> <code>this.fullName = fullName;</code> <code>this.gpa = gpa;</code> <code>this.active = active;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.studentId = studentId;</code> <code>this.fullName = fullName;</code> <code>this.gpa = gpa;</code> <code>this.active = active;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.studentId = studentId;</code> <code>this.fullName = fullName;</code> <code>this.gpa = gpa;</code> <code>this.active = active;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`s` nomli `StudentProfile` ob'yektini yarating va argument sifatida `\"00023271\", \"Ali Valiyev\", 3.85, true` qiymatini bering."
        ],
        "en": [
          "Create a `StudentProfile` object named `s` and pass argument(s) `\"00023271\", \"Ali Valiyev\", 3.85, true`."
        ],
        "ru": [
          "Создайте объект `StudentProfile` с именем `s` и передайте аргумент(ы) `\"00023271\", \"Ali Valiyev\", 3.85, true`."
        ]
      },
      "expectedOutput": "ID: 00023271 | Ism: Ali Valiyev | GPA: 3.85 | Faol: true"
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "16. Uzum Market — Parametr Soyalanishi (Shadowing) va 'this.price = price'",
      "en": "16. Uzum Market — Parameter Shadowing Disambiguation with 'this'",
      "ru": "16. Uzum Market — Устранение затенения параметров с помощью 'this'"
    },
    "scenario": {
      "uz": "Setter metodi parametrlari sinf maydoni bilan bir xil nomga ega bo'lganda, 'this' kalit so'zi parametrni emas aynan sinf maydonini belgilash uchun shart. 'setPrice(double price)' setterini yozing.",
      "en": "When a setter parameter has the same name as an instance field, 'this' disambiguates. Implement 'setPrice(double price)'.",
      "ru": "Когда параметр сеттера совпадает по имени с полем класса, 'this' указывает на поле экземпляра."
    },
    "requirements": {
      "classes": [
        "ProductPricing",
        "Main"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ProductPricing {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ProductPricing {\n    private double price;\n\n    public ProductPricing(double price) {\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductPricing pp = new ProductPricing(10000.0);\n        pp.setPrice(18000.0);\n        System.out.println(\"Yangilangan narx: \" + pp.getPrice() + \" UZS\");\n    }\n}",
    "expectedOutput": "Yangilangan narx: 18000.0 UZS",
    "newKnowledge": {
      "uz": "'this' kalit so'zi yordamida parametr soyalanishi (Variable Shadowing) muammosini yechish va maydonga qiymat o'zlashtirish.",
      "en": "Resolving parameter shadowing via the 'this' keyword in mutator methods.",
      "ru": "Устранение затенения переменных с помощью ключевого слова 'this' в сеттерах."
    },
    "newKnowledgeTags": [
      "this",
      "variable shadowing",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>10000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>10000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>10000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      },
      {
        "name": "setPrice()",
        "signature": "public void setPrice(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>18000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>18000.0</code>)",
          "ru": "<code>double price</code> (например, <code>18000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>price</code> qiymatini qabul qilib, <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>price</code> and sets <code>this.price = price;</code>.",
          "ru": "Принимает <code>price</code> и обновляет <code>this.price = price;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ProductPricing",
        "signature": "public ProductPricing(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>10000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>10000.0</code>)",
          "ru": "<code>double price</code> (например, <code>10000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.price = price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.price = price;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`pp` nomli `ProductPricing` ob'yektini yarating va argument sifatida `10000.0` qiymatini bering.",
          "Tegishli `setPrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ProductPricing` object named `pp` and pass argument(s) `10000.0`.",
          "Invoke `setPrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ProductPricing` с именем `pp` и передайте аргумент(ы) `10000.0`.",
          "Вызовите метод(ы) `setPrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yangilangan narx: 18000.0 UZS"
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "17. Payme — Manfiy Narxni Rad Etuvchi Shartli Setter (Guard Clause)",
      "en": "17. Payme — Guarded Setter Rejecting Non-Positive Values",
      "ru": "17. Payme — Сеттер с защитным условием от неположительных значений"
    },
    "scenario": {
      "uz": "WIUT Seminar 2 talabi: Narx aslo manfiy yoki nol bo'lishi mumkin emas. 'setBalance(double amount)' faqat amount > 0 bo'lgandagina o'zgartirsin, aks holda eski balansni saqlab qolsin.",
      "en": "WIUT Seminar 2 requirement: Balance must be positive. 'setBalance(amount)' only mutates if amount > 0.",
      "ru": "Требование семинара: баланс должен быть положительным. setBalance(amount) меняет поле только если amount > 0."
    },
    "requirements": {
      "classes": [
        "PaymeBalance",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "getBalance",
        "setBalance"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PaymeBalance {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymeBalance {\n    private double balance;\n\n    public PaymeBalance(double balance) {\n        this.balance = balance;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n\n    public void setBalance(double amount) {\n        if (amount > 0) {\n            this.balance = amount;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymeBalance pb = new PaymeBalance(50000.0);\n        pb.setBalance(-20000.0);\n        pb.setBalance(75000.0);\n        System.out.println(\"Balans: \" + pb.getBalance() + \" UZS\");\n    }\n}",
    "expectedOutput": "Balans: 75000.0 UZS",
    "newKnowledge": {
      "uz": "Himoyalangan setter (Guard Clause): manfiy yoki nol qiymatlarni rad etish orqali ob'yektning buzilishidan saqlanish.",
      "en": "Guarded mutator: validating positive values and rejecting non-positive changes to protect invariants.",
      "ru": "Сеттер с защитным условием (Guard Clause): отклонение неположительных значений для защиты инварианта."
    },
    "newKnowledgeTags": [
      "guard clause",
      "validation",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getBalance()",
        "signature": "public double getBalance()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double balance</code> maydonining qiymatini return qiladi (masalan, <code>50000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double balance</code> (e.g. <code>50000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double balance</code> (например, <code>50000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>balance</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>balance</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>balance</code> без возможности модификации."
        }
      },
      {
        "name": "setBalance()",
        "signature": "public void setBalance(double amount)",
        "params": {
          "uz": "<code>double amount</code> (masalan, <code>-20000.0</code>)",
          "en": "<code>double amount</code> (e.g. <code>-20000.0</code>)",
          "ru": "<code>double amount</code> (например, <code>-20000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>amount > 0</code> shartiga tekshiradi, agar shart bajarilsa <code>this.balance = amount;</code> qilib yangilaydi.",
          "en": "Checks <code>amount > 0</code> condition, and if valid, updates <code>this.balance = amount;</code>.",
          "ru": "Проверяет условие <code>amount > 0</code>, и если верно, обновляет <code>this.balance = amount;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PaymeBalance",
        "signature": "public PaymeBalance(double balance)",
        "params": {
          "uz": "<code>double balance</code> (masalan, <code>50000.0</code>)",
          "en": "<code>double balance</code> (e.g. <code>50000.0</code>)",
          "ru": "<code>double balance</code> (например, <code>50000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.balance = balance;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.balance = balance;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.balance = balance;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`pb` nomli `PaymeBalance` ob'yektini yarating va argument sifatida `50000.0` qiymatini bering.",
          "Tegishli `setBalance()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PaymeBalance` object named `pb` and pass argument(s) `50000.0`.",
          "Invoke `setBalance()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PaymeBalance` с именем `pb` и передайте аргумент(ы) `50000.0`.",
          "Вызовите метод(ы) `setBalance()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Balans: 75000.0 UZS"
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "18. Korzinka — Chegaralangan Baholash Oralig'i (1 dan 5 gacha)",
      "en": "18. Korzinka — Bounded Rating Interval Setter (1 to 5)",
      "ru": "18. Korzinka — Сеттер рейтинга в диапазоне от 1 до 5"
    },
    "scenario": {
      "uz": "Do'kon xizmati bahosi ('rating') 1 dan 5 gacha oraliqda bo'lishi shart. Agar kiritilgan qiymat 1 dan kichik yoki 5 dan katta bo'lsa, setter o'zgartirishni rad etsin.",
      "en": "Service rating must be within [1, 5]. 'setRating(int rating)' ignores values outside this interval.",
      "ru": "Оценка сервиса должна быть от 1 до 5. setRating(int) игнорирует значения вне диапазона."
    },
    "requirements": {
      "classes": [
        "StoreRating",
        "Main"
      ],
      "privateFields": [
        "rating"
      ],
      "methods": [
        "getRating",
        "setRating"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class StoreRating {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StoreRating {\n    private int rating;\n\n    public StoreRating(int rating) {\n        this.rating = rating;\n    }\n\n    public int getRating() {\n        return this.rating;\n    }\n\n    public void setRating(int rating) {\n        if (rating >= 1 && rating <= 5) {\n            this.rating = rating;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StoreRating sr = new StoreRating(3);\n        sr.setRating(10);\n        sr.setRating(5);\n        System.out.println(\"Reyting: \" + sr.getRating());\n    }\n}",
    "expectedOutput": "Reyting: 5",
    "newKnowledge": {
      "uz": "Chegaralangan oraliq validatsiyasi: reyting qiymati qat'iy [1..5] diapazonida bo'lishini nazorat qiluvchi setter.",
      "en": "Bounded range validation: enforcing numeric values to remain strictly within interval [1..5].",
      "ru": "Проверка диапазона: контроль того, что значение рейтинга находится строго в пределах [1..5]."
    },
    "newKnowledgeTags": [
      "bounded range",
      "interval [1..5]",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getRating()",
        "signature": "public int getRating()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int rating</code> maydonining qiymatini return qiladi (masalan, <code>3</code>).",
          "en": "<code>int</code>: returns the value of <code>private int rating</code> (e.g. <code>3</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int rating</code> (например, <code>3</code>)."
        },
        "desc": {
          "uz": "Ichki <code>rating</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>rating</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>rating</code> без возможности модификации."
        }
      },
      {
        "name": "setRating()",
        "signature": "public void setRating(int rating)",
        "params": {
          "uz": "<code>int rating</code> (masalan, <code>10</code>)",
          "en": "<code>int rating</code> (e.g. <code>10</code>)",
          "ru": "<code>int rating</code> (например, <code>10</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>rating >= 1 && rating <= 5</code> shartiga tekshiradi, agar shart bajarilsa <code>this.rating = rating;</code> qilib yangilaydi.",
          "en": "Checks <code>rating >= 1 && rating <= 5</code> condition, and if valid, updates <code>this.rating = rating;</code>.",
          "ru": "Проверяет условие <code>rating >= 1 && rating <= 5</code>, и если верно, обновляет <code>this.rating = rating;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StoreRating",
        "signature": "public StoreRating(int rating)",
        "params": {
          "uz": "<code>int rating</code> (masalan, <code>3</code>)",
          "en": "<code>int rating</code> (e.g. <code>3</code>)",
          "ru": "<code>int rating</code> (например, <code>3</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.rating = rating;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.rating = rating;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.rating = rating;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`sr` nomli `StoreRating` ob'yektini yarating va argument sifatida `3` qiymatini bering.",
          "Tegishli `setRating()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `StoreRating` object named `sr` and pass argument(s) `3`.",
          "Invoke `setRating()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `StoreRating` с именем `sr` и передайте аргумент(ы) `3`.",
          "Вызовите метод(ы) `setRating()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Reyting: 5"
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "19. Yandex Go — Bo'sh Matn va Nullni Rad Etuvchi Ism Setteri",
      "en": "19. Yandex Go — Non-Empty String and Null Guard Setter",
      "ru": "19. Yandex Go — Сеттер с защитой от null и пустых строк"
    },
    "scenario": {
      "uz": "Haydovchi ismi null bo'lishi yoki probellardan iborat bo'lishi mumkin emas. 'setDriverName(String name)' faqat name != null va name.trim().length() >= 2 bo'lgandagina qiymatni o'zgartirsin.",
      "en": "Driver name cannot be null or empty. Setter requires name != null and trimmed length >= 2.",
      "ru": "Имя водителя не может быть null или пустым. Сеттер требует name != null и trimmed length >= 2."
    },
    "requirements": {
      "classes": [
        "DriverProfile",
        "Main"
      ],
      "privateFields": [
        "driverName"
      ],
      "methods": [
        "getDriverName",
        "setDriverName"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class DriverProfile {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DriverProfile {\n    private String driverName;\n\n    public DriverProfile(String driverName) {\n        this.driverName = driverName;\n    }\n\n    public String getDriverName() {\n        return this.driverName;\n    }\n\n    public void setDriverName(String name) {\n        if (name != null && name.trim().length() >= 2) {\n            this.driverName = name.trim();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriverProfile dp = new DriverProfile(\"Botir\");\n        dp.setDriverName(\"   \");\n        dp.setDriverName(null);\n        dp.setDriverName(\"Sherzod\");\n        System.out.println(\"Haydovchi: \" + dp.getDriverName());\n    }\n}",
    "expectedOutput": "Haydovchi: Sherzod",
    "newKnowledge": {
      "uz": "Matnli setter validatsiyasi: null qiymat va bo'shliqlardan iborat satrlarni rad etish (trim & length >= 2).",
      "en": "String sanitization guard: rejecting null and blank whitespace-only strings.",
      "ru": "Валидация строки: отклонение значений null и строк из одних пробелов."
    },
    "newKnowledgeTags": [
      "string validation",
      "trim",
      "null-guard"
    ],
    "methodSpecs": [
      {
        "name": "getDriverName()",
        "signature": "public String getDriverName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String driverName</code> maydonining qiymatini return qiladi (masalan, <code>\"Botir\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String driverName</code> (e.g. <code>\"Botir\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String driverName</code> (например, <code>\"Botir\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>driverName</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>driverName</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>driverName</code> без возможности модификации."
        }
      },
      {
        "name": "setDriverName()",
        "signature": "public void setDriverName(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"   \"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"   \"</code>)",
          "ru": "<code>String name</code> (например, <code>\"   \"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>driverName</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>driverName</code> qiymatini return qiladi (masalan, <code>\"Botir\"</code>).",
          "en": "<code>void</code>: returns safe default if <code>driverName</code> is null, otherwise returns <code>driverName</code> (e.g. <code>\"Botir\"</code>).",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>driverName</code> null, иначе <code>driverName</code> (например, <code>\"Botir\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "DriverProfile",
        "signature": "public DriverProfile(String driverName)",
        "params": {
          "uz": "<code>String driverName</code> (masalan, <code>\"Botir\"</code>)",
          "en": "<code>String driverName</code> (e.g. <code>\"Botir\"</code>)",
          "ru": "<code>String driverName</code> (например, <code>\"Botir\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.driverName = driverName;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.driverName = driverName;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.driverName = driverName;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`dp` nomli `DriverProfile` ob'yektini yarating va argument sifatida `\"Botir\"` qiymatini bering.",
          "Tegishli `setDriverName()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `DriverProfile` object named `dp` and pass argument(s) `\"Botir\"`.",
          "Invoke `setDriverName()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `DriverProfile` с именем `dp` и передайте аргумент(ы) `\"Botir\"`.",
          "Вызовите метод(ы) `setDriverName()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Haydovchi: Sherzod"
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "20. Click — Ovoz Balandligini Qisuvchi Setter (Value Clamping)",
      "en": "20. Click — Range Clamping Setter Pattern (0 to 100)",
      "ru": "20. Click — Сеттер с ограничением диапазона (Clamping 0..100)"
    },
    "scenario": {
      "uz": "Ilova ovozi ('volume') 0 dan pastga tushib ketmasligi va 100 dan oshib ketmasligi kerak. Agar qiymat 100 dan katta berilsa 100 ga, 0 dan kichik berilsa 0 ga tenglashtirib saqlang (Clamping).",
      "en": "Audio volume must stay between 0 and 100. Clamp input: if > 100 set to 100, if < 0 set to 0.",
      "ru": "Громкость должна оставаться в пределах 0..100. Сеттер выполняет clamping к диапазону [0, 100]."
    },
    "requirements": {
      "classes": [
        "AppAudio",
        "Main"
      ],
      "privateFields": [
        "volume"
      ],
      "methods": [
        "getVolume",
        "setVolume"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class AppAudio {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AppAudio {\n    private int volume;\n\n    public AppAudio(int volume) {\n        this.volume = volume;\n    }\n\n    public int getVolume() {\n        return this.volume;\n    }\n\n    public void setVolume(int v) {\n        if (v > 100) {\n            this.volume = 100;\n        } else if (v < 0) {\n            this.volume = 0;\n        } else {\n            this.volume = v;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AppAudio audio = new AppAudio(50);\n        audio.setVolume(140);\n        System.out.println(\"Yuqori clamp: \" + audio.getVolume());\n        audio.setVolume(-20);\n        System.out.println(\"Quyi clamp: \" + audio.getVolume());\n    }\n}",
    "expectedOutput": "Yuqori clamp: 100\nQuyi clamp: 0",
    "newKnowledge": {
      "uz": "Qiymatni qisish (Value Clamping): kiruvchi sonni ruxsat etilgan [0..100] chegarasiga majburiy moslab saqlash.",
      "en": "Value clamping: forcing input values into bounded range [0..100] without throwing exceptions.",
      "ru": "Ограничение диапазона (Clamping): принудительная подгонка значения к границам [0..100]."
    },
    "newKnowledgeTags": [
      "clamping",
      "boundary limits",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getVolume()",
        "signature": "public int getVolume()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int volume</code> maydonining qiymatini return qiladi (masalan, <code>50</code>).",
          "en": "<code>int</code>: returns the value of <code>private int volume</code> (e.g. <code>50</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int volume</code> (например, <code>50</code>)."
        },
        "desc": {
          "uz": "Ichki <code>volume</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>volume</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>volume</code> без возможности модификации."
        }
      },
      {
        "name": "setVolume()",
        "signature": "public void setVolume(int v)",
        "params": {
          "uz": "<code>int v</code> (masalan, <code>140</code>)",
          "en": "<code>int v</code> (e.g. <code>140</code>)",
          "ru": "<code>int v</code> (например, <code>140</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>v > 100</code> shartiga tekshiradi, agar shart bajarilsa <code>this.volume = 100;</code> qilib yangilaydi.",
          "en": "Checks <code>v > 100</code> condition, and if valid, updates <code>this.volume = 100;</code>.",
          "ru": "Проверяет условие <code>v > 100</code>, и если верно, обновляет <code>this.volume = 100;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "AppAudio",
        "signature": "public AppAudio(int volume)",
        "params": {
          "uz": "<code>int volume</code> (masalan, <code>50</code>)",
          "en": "<code>int volume</code> (e.g. <code>50</code>)",
          "ru": "<code>int volume</code> (например, <code>50</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.volume = volume;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.volume = volume;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.volume = volume;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`audio` nomli `AppAudio` ob'yektini yarating va argument sifatida `50` qiymatini bering.",
          "Tegishli `setVolume()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `AppAudio` object named `audio` and pass argument(s) `50`.",
          "Invoke `setVolume()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `AppAudio` с именем `audio` и передайте аргумент(ы) `50`.",
          "Вызовите метод(ы) `setVolume()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yuqori clamp: 100\nQuyi clamp: 0"
    }
  },
  {
    "id": 21,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "21. Safia — Holatni O'zgartiruvchi Toggle Metodi",
      "en": "21. Safia — Boolean State Toggle Mutator",
      "ru": "21. Safia — Мутатор переключения булева состояния (Toggle)"
    },
    "scenario": {
      "uz": "Xamir qorish mashinasi faol ('active') yoki to'xtatilgan bo'lishi mumkin. 'toggleActive()' metodi 'this.active = !this.active' qilib holatni almashtirsin va yangi holatni boolean sifatida qaytarsin.",
      "en": "A mixer machine is either active or idle. 'toggleActive()' flips the boolean state and returns the new value.",
      "ru": "Метод toggleActive() переключает булево состояние active = !active и возвращает новое значение."
    },
    "requirements": {
      "classes": [
        "MixerMachine",
        "Main"
      ],
      "privateFields": [
        "active"
      ],
      "methods": [
        "toggleActive",
        "isActive"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class MixerMachine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MixerMachine {\n    private boolean active;\n\n    public MixerMachine(boolean active) {\n        this.active = active;\n    }\n\n    public boolean isActive() {\n        return this.active;\n    }\n\n    public boolean toggleActive() {\n        this.active = !this.active;\n        return this.active;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MixerMachine m = new MixerMachine(false);\n        System.out.println(\"Holat 1: \" + m.toggleActive());\n        System.out.println(\"Holat 2: \" + m.toggleActive());\n    }\n}",
    "expectedOutput": "Holat 1: true\nHolat 2: false",
    "newKnowledge": {
      "uz": "Holatni almashtiruvchi mutator (Boolean Toggle): !active orqali mantiqiy maydonni teskarisiga o'girish va yangi holatni qaytarish.",
      "en": "Boolean toggle mutator: inverting state via logical NOT and returning resulting boolean value.",
      "ru": "Мутатор переключения (Toggle): инверсия булева флага и возврат нового состояния."
    },
    "newKnowledgeTags": [
      "toggle",
      "state flip",
      "mutator"
    ],
    "methodSpecs": [
      {
        "name": "isActive()",
        "signature": "public boolean isActive()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean active</code> maydonining qiymatini return qiladi (masalan, <code>false</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean active</code> (e.g. <code>false</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean active</code> (например, <code>false</code>)."
        },
        "desc": {
          "uz": "Ichki <code>active</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>active</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>active</code> без возможности модификации."
        }
      },
      {
        "name": "toggleActive()",
        "signature": "public boolean toggleActive()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "MixerMachine",
        "signature": "public MixerMachine(boolean active)",
        "params": {
          "uz": "<code>boolean active</code> (masalan, <code>false</code>)",
          "en": "<code>boolean active</code> (e.g. <code>false</code>)",
          "ru": "<code>boolean active</code> (например, <code>false</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.active = active;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.active = active;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.active = active;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`m` nomli `MixerMachine` ob'yektini yarating va argument sifatida `false` qiymatini bering."
        ],
        "en": [
          "Create a `MixerMachine` object named `m` and pass argument(s) `false`."
        ],
        "ru": [
          "Создайте объект `MixerMachine` с именем `m` и передайте аргумент(ы) `false`."
        ]
      },
      "expectedOutput": "Holat 1: true\nHolat 2: false"
    }
  },
  {
    "id": 22,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "22. Dodo Pizza — Avvalgi Qiymat Tarixini Saqlovchi Setter",
      "en": "22. Dodo Pizza — Mutator Tracking Previous Historical Value",
      "ru": "22. Dodo Pizza — Сеттер с сохранением предыдущего исторического значения"
    },
    "scenario": {
      "uz": "Oshxona pitsa narxini yangilaganda, audit uchun avvalgi narx ('previousPrice') saqlanib qolishi kerak. 'setPrice(double newPrice)' chaqirilganda, eski narx 'previousPrice' ga ko'chsin.",
      "en": "When updating pizza price, 'previousPrice' must preserve the old value before updating 'currentPrice'.",
      "ru": "При обновлении цены предыдущая цена сохраняется в previousPrice перед перезаписью currentPrice."
    },
    "requirements": {
      "classes": [
        "PizzaPricing",
        "Main"
      ],
      "privateFields": [
        "currentPrice",
        "previousPrice"
      ],
      "methods": [
        "getCurrentPrice",
        "getPreviousPrice",
        "setPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PizzaPricing {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PizzaPricing {\n    private double currentPrice;\n    private double previousPrice;\n\n    public PizzaPricing(double currentPrice) {\n        this.currentPrice = currentPrice;\n        this.previousPrice = currentPrice;\n    }\n\n    public double getCurrentPrice() {\n        return this.currentPrice;\n    }\n\n    public double getPreviousPrice() {\n        return this.previousPrice;\n    }\n\n    public void setPrice(double newPrice) {\n        if (newPrice > 0) {\n            this.previousPrice = this.currentPrice;\n            this.currentPrice = newPrice;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaPricing pp = new PizzaPricing(65000.0);\n        pp.setPrice(72000.0);\n        System.out.println(\"Joriy: \" + pp.getCurrentPrice() + \" | Avvalgi: \" + pp.getPreviousPrice());\n    }\n}",
    "expectedOutput": "Joriy: 72000.0 | Avvalgi: 65000.0",
    "newKnowledge": {
      "uz": "Audit tarixi: qiymat yangilanishidan avval uning eski holatini 'previousPrice' maydonida saqlab qolish.",
      "en": "Historical auditing: preserving preceding value in previousPrice before committing new state.",
      "ru": "История аудита: сохранение старого значения в previousPrice перед обновлением поля."
    },
    "newKnowledgeTags": [
      "audit history",
      "previous value",
      "mutator"
    ],
    "methodSpecs": [
      {
        "name": "getCurrentPrice()",
        "signature": "public double getCurrentPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double currentPrice</code> maydonining qiymatini return qiladi (masalan, <code>65000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double currentPrice</code> (e.g. <code>65000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double currentPrice</code> (например, <code>65000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>currentPrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>currentPrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>currentPrice</code> без возможности модификации."
        }
      },
      {
        "name": "getPreviousPrice()",
        "signature": "public double getPreviousPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double previousPrice</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double previousPrice</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double previousPrice</code>."
        },
        "desc": {
          "uz": "Ichki <code>previousPrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>previousPrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>previousPrice</code> без возможности модификации."
        }
      },
      {
        "name": "setPrice()",
        "signature": "public void setPrice(double newPrice)",
        "params": {
          "uz": "<code>double newPrice</code> (masalan, <code>72000.0</code>)",
          "en": "<code>double newPrice</code> (e.g. <code>72000.0</code>)",
          "ru": "<code>double newPrice</code> (например, <code>72000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>newPrice > 0</code> shartiga tekshiradi, agar shart bajarilsa <code>this.previousPrice = this.currentPrice;</code> qilib yangilaydi.",
          "en": "Checks <code>newPrice > 0</code> condition, and if valid, updates <code>this.previousPrice = this.currentPrice;</code>.",
          "ru": "Проверяет условие <code>newPrice > 0</code>, и если верно, обновляет <code>this.previousPrice = this.currentPrice;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PizzaPricing",
        "signature": "public PizzaPricing(double currentPrice)",
        "params": {
          "uz": "<code>double currentPrice</code> (masalan, <code>65000.0</code>)",
          "en": "<code>double currentPrice</code> (e.g. <code>65000.0</code>)",
          "ru": "<code>double currentPrice</code> (например, <code>65000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.currentPrice = currentPrice;</code> <code>this.previousPrice = currentPrice;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.currentPrice = currentPrice;</code> <code>this.previousPrice = currentPrice;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.currentPrice = currentPrice;</code> <code>this.previousPrice = currentPrice;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`pp` nomli `PizzaPricing` ob'yektini yarating va argument sifatida `65000.0` qiymatini bering.",
          "Tegishli `setPrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PizzaPricing` object named `pp` and pass argument(s) `65000.0`.",
          "Invoke `setPrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PizzaPricing` с именем `pp` и передайте аргумент(ы) `65000.0`.",
          "Вызовите метод(ы) `setPrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Joriy: 72000.0 | Avvalgi: 65000.0"
    }
  },
  {
    "id": 23,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "23. Texnomart — Natijani boolean Qaytaruvchi PIN Setter",
      "en": "23. Texnomart — Boolean-Returning Mutator for PIN Validation",
      "ru": "23. Texnomart — Сеттер PIN-кода, возвращающий boolean результат"
    },
    "scenario": {
      "uz": "Terminal PIN kodi aniq 4 ta raqamdan iborat bo'lishi kerak. 'boolean setPin(String newPin)' agar kod uzunligi 4 bo'lsa va faqat raqamlardan iborat bo'lsa o'rnatib true qaytarsin, aks holda false qaytarsin.",
      "en": "Terminal PIN must be exactly 4 digits. 'boolean setPin(newPin)' returns true on success, false on invalid format.",
      "ru": "Сеттер setPin возвращает true, если PIN состоит ровно из 4 цифр, иначе false."
    },
    "requirements": {
      "classes": [
        "PosTerminal",
        "Main"
      ],
      "privateFields": [
        "pin"
      ],
      "methods": [
        "setPin",
        "getPin"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PosTerminal {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PosTerminal {\n    private String pin;\n\n    public PosTerminal(String pin) {\n        this.pin = pin;\n    }\n\n    public String getPin() {\n        return this.pin;\n    }\n\n    public boolean setPin(String newPin) {\n        if (newPin != null && newPin.matches(\"\\\\d{4}\")) {\n            this.pin = newPin;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PosTerminal term = new PosTerminal(\"1234\");\n        boolean res1 = term.setPin(\"99\");\n        boolean res2 = term.setPin(\"7788\");\n        System.out.println(\"Res1: \" + res1 + \" | Res2: \" + res2 + \" | PIN: \" + term.getPin());\n    }\n}",
    "expectedOutput": "Res1: false | Res2: true | PIN: 7788",
    "newKnowledge": {
      "uz": "Natija qaytaruvchi setter: format to'g'ri bo'lsa (aniq 4 raqam) true, noto'g'ri bo'lsa false qaytaruvchi mutator.",
      "en": "Boolean-returning mutator: returning true on successful validation (4 digits) or false on rejection.",
      "ru": "Сеттер с булевым результатом: возврат true при успешной валидации формата (4 цифры) или false."
    },
    "newKnowledgeTags": [
      "boolean setter",
      "regex",
      "format check"
    ],
    "methodSpecs": [
      {
        "name": "getPin()",
        "signature": "public String getPin()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String pin</code> maydonining qiymatini return qiladi (masalan, <code>\"1234\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String pin</code> (e.g. <code>\"1234\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String pin</code> (например, <code>\"1234\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>pin</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>pin</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>pin</code> без возможности модификации."
        }
      },
      {
        "name": "setPin()",
        "signature": "public boolean setPin(String newPin)",
        "params": {
          "uz": "<code>String newPin</code> (masalan, <code>\"99\"</code>)",
          "en": "<code>String newPin</code> (e.g. <code>\"99\"</code>)",
          "ru": "<code>String newPin</code> (например, <code>\"99\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>pin</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>pin</code> qiymatini return qiladi (masalan, <code>\"1234\"</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>pin</code> is null, otherwise returns <code>pin</code> (e.g. <code>\"1234\"</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>pin</code> null, иначе <code>pin</code> (например, <code>\"1234\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PosTerminal",
        "signature": "public PosTerminal(String pin)",
        "params": {
          "uz": "<code>String pin</code> (masalan, <code>\"1234\"</code>)",
          "en": "<code>String pin</code> (e.g. <code>\"1234\"</code>)",
          "ru": "<code>String pin</code> (например, <code>\"1234\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.pin = pin;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.pin = pin;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.pin = pin;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`term` nomli `PosTerminal` ob'yektini yarating va argument sifatida `\"1234\"` qiymatini bering.",
          "Tegishli `setPin()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PosTerminal` object named `term` and pass argument(s) `\"1234\"`.",
          "Invoke `setPin()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PosTerminal` с именем `term` и передайте аргумент(ы) `\"1234\"`.",
          "Вызовите метод(ы) `setPin()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Res1: false | Res2: true | PIN: 7788"
    }
  },
  {
    "id": 24,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "24. Express24 — Monoton O'suvchi Setter (Faqat O'sishga Ruxsat)",
      "en": "24. Express24 — Monotonically Increasing Odometer Mutator",
      "ru": "24. Express24 — Монотонно возрастающий сеттер (одометр)"
    },
    "scenario": {
      "uz": "Kuryer mototsikli kilometraji ('odometerKm') faqat ko'payishi mumkin, orqaga qaytarib bo'lmaydi. 'updateOdometer(int newKm)' faqat 'newKm > this.odometerKm' bo'lsagina qiymatni qabul qilsin.",
      "en": "Odometer readings can only increase. 'updateOdometer(newKm)' only applies if newKm > this.odometerKm.",
      "ru": "Показания одометра могут только расти. Метод принимает новое значение, только если оно строго больше текущего."
    },
    "requirements": {
      "classes": [
        "Odometer",
        "Main"
      ],
      "privateFields": [
        "odometerKm"
      ],
      "methods": [
        "getOdometerKm",
        "updateOdometer"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Odometer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Odometer {\n    private int odometerKm;\n\n    public Odometer(int odometerKm) {\n        this.odometerKm = odometerKm;\n    }\n\n    public int getOdometerKm() {\n        return this.odometerKm;\n    }\n\n    public void updateOdometer(int newKm) {\n        if (newKm > this.odometerKm) {\n            this.odometerKm = newKm;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Odometer odo = new Odometer(120);\n        odo.updateOdometer(90);\n        odo.updateOdometer(155);\n        System.out.println(\"Kilometraj: \" + odo.getOdometerKm() + \" km\");\n    }\n}",
    "expectedOutput": "Kilometraj: 155 km",
    "newKnowledge": {
      "uz": "Monoton o'suvchi setter (Monotonic Mutator): qiymat faqat kattalashishi mumkin (spidometr), orqaga qaytish taqiqlanadi.",
      "en": "Monotonically increasing mutator: value can only increase, strictly preventing regression.",
      "ru": "Монотонно возрастающий сеттер: значение одометра может только увеличиваться."
    },
    "newKnowledgeTags": [
      "monotonic",
      "strictly increasing",
      "invariant"
    ],
    "methodSpecs": [
      {
        "name": "getOdometerKm()",
        "signature": "public int getOdometerKm()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int odometerKm</code> maydonining qiymatini return qiladi (masalan, <code>120</code>).",
          "en": "<code>int</code>: returns the value of <code>private int odometerKm</code> (e.g. <code>120</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int odometerKm</code> (например, <code>120</code>)."
        },
        "desc": {
          "uz": "Ichki <code>odometerKm</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>odometerKm</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>odometerKm</code> без возможности модификации."
        }
      },
      {
        "name": "updateOdometer()",
        "signature": "public void updateOdometer(int newKm)",
        "params": {
          "uz": "<code>int newKm</code> (masalan, <code>90</code>)",
          "en": "<code>int newKm</code> (e.g. <code>90</code>)",
          "ru": "<code>int newKm</code> (например, <code>90</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>newKm > this.odometerKm</code> shartiga tekshiradi, agar shart bajarilsa <code>this.odometerKm = newKm;</code> qilib yangilaydi.",
          "en": "Checks <code>newKm > this.odometerKm</code> condition, and if valid, updates <code>this.odometerKm = newKm;</code>.",
          "ru": "Проверяет условие <code>newKm > this.odometerKm</code>, и если верно, обновляет <code>this.odometerKm = newKm;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Odometer",
        "signature": "public Odometer(int odometerKm)",
        "params": {
          "uz": "<code>int odometerKm</code> (masalan, <code>120</code>)",
          "en": "<code>int odometerKm</code> (e.g. <code>120</code>)",
          "ru": "<code>int odometerKm</code> (например, <code>120</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.odometerKm = odometerKm;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.odometerKm = odometerKm;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.odometerKm = odometerKm;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`odo` nomli `Odometer` ob'yektini yarating va argument sifatida `120` qiymatini bering.",
          "Tegishli `updateOdometer()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Odometer` object named `odo` and pass argument(s) `120`.",
          "Invoke `updateOdometer()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Odometer` с именем `odo` и передайте аргумент(ы) `120`.",
          "Вызовите метод(ы) `updateOdometer()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Kilometraj: 155 km"
    }
  },
  {
    "id": 25,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "25. Asaxiy — Email Formatini Tekshiruvchi Setter",
      "en": "25. Asaxiy — Email Format Validator Setter",
      "ru": "25. Asaxiy — Сеттер с валидацией формата email"
    },
    "scenario": {
      "uz": "Mijoz pochtasi kamida bitta '@' va '.' belgilariga ega bo'lishi va null bo'lmasligi kerak. Shart bajarilsa saqlang, aks holda o'zgartirmang.",
      "en": "Customer email must not be null and must contain '@' and '.'. Update only on valid input.",
      "ru": "Сеттер проверяет наличие символов '@' и '.' перед обновлением поля email."
    },
    "requirements": {
      "classes": [
        "ClientEmail",
        "Main"
      ],
      "privateFields": [
        "email"
      ],
      "methods": [
        "getEmail",
        "setEmail"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ClientEmail {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ClientEmail {\n    private String email;\n\n    public ClientEmail(String email) {\n        this.email = email;\n    }\n\n    public String getEmail() {\n        return this.email;\n    }\n\n    public void setEmail(String email) {\n        if (email != null && email.contains(\"@\") && email.contains(\".\")) {\n            this.email = email;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientEmail ce = new ClientEmail(\"admin@asaxiy.uz\");\n        ce.setEmail(\"notanemail\");\n        ce.setEmail(\"support@asaxiy.uz\");\n        System.out.println(\"Pochta: \" + ce.getEmail());\n    }\n}",
    "expectedOutput": "Pochta: support@asaxiy.uz",
    "newKnowledge": {
      "uz": "Biznes qoidali setter: email formatida '@' va '.' mavjudligini tekshirib keyin saqlash.",
      "en": "Business format validation: verifying presence of required delimiters ('@' and '.') before assignment.",
      "ru": "Проверка бизнес-формата: проверка наличия символов '@' и '.' перед присваиванием email."
    },
    "newKnowledgeTags": [
      "format validation",
      "contains",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getEmail()",
        "signature": "public String getEmail()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String email</code> maydonining qiymatini return qiladi (masalan, <code>\"admin@asaxiy.uz\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String email</code> (e.g. <code>\"admin@asaxiy.uz\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String email</code> (например, <code>\"admin@asaxiy.uz\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>email</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>email</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>email</code> без возможности модификации."
        }
      },
      {
        "name": "setEmail()",
        "signature": "public void setEmail(String email)",
        "params": {
          "uz": "<code>String email</code> (masalan, <code>\"notanemail\"</code>)",
          "en": "<code>String email</code> (e.g. <code>\"notanemail\"</code>)",
          "ru": "<code>String email</code> (например, <code>\"notanemail\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>email</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>email</code> qiymatini return qiladi (masalan, <code>\"admin@asaxiy.uz\"</code>).",
          "en": "<code>void</code>: returns safe default if <code>email</code> is null, otherwise returns <code>email</code> (e.g. <code>\"admin@asaxiy.uz\"</code>).",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>email</code> null, иначе <code>email</code> (например, <code>\"admin@asaxiy.uz\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ClientEmail",
        "signature": "public ClientEmail(String email)",
        "params": {
          "uz": "<code>String email</code> (masalan, <code>\"admin@asaxiy.uz\"</code>)",
          "en": "<code>String email</code> (e.g. <code>\"admin@asaxiy.uz\"</code>)",
          "ru": "<code>String email</code> (например, <code>\"admin@asaxiy.uz\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.email = email;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.email = email;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.email = email;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`ce` nomli `ClientEmail` ob'yektini yarating va argument sifatida `\"admin@asaxiy.uz\"` qiymatini bering.",
          "Tegishli `setEmail()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ClientEmail` object named `ce` and pass argument(s) `\"admin@asaxiy.uz\"`.",
          "Invoke `setEmail()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ClientEmail` с именем `ce` и передайте аргумент(ы) `\"admin@asaxiy.uz\"`.",
          "Вызовите метод(ы) `setEmail()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Pochta: support@asaxiy.uz"
    }
  },
  {
    "id": 26,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "26. Medion — Bog'liq Maydonlarni Birgalikda Yangilovchi Setter",
      "en": "26. Medion — Co-Dependent Fields Mutator Recalculation",
      "ru": "26. Medion — Сеттер с автоматическим пересчетом зависимых полей"
    },
    "scenario": {
      "uz": "Xizmat narxi ('basePrice') o'zgarganda, unga bog'liq bo'lgan QQS solig'i ('taxAmount = basePrice * 0.12') darhol setter ichida qayta hisoblab yangilansin.",
      "en": "When 'setBasePrice(price)' is invoked, automatically recalculate the dependent field 'taxAmount = basePrice * 0.12'.",
      "ru": "При изменении basePrice сеттер должен немедленно пересчитать зависимое поле taxAmount = basePrice * 0.12."
    },
    "requirements": {
      "classes": [
        "MedicalBill",
        "Main"
      ],
      "privateFields": [
        "basePrice",
        "taxAmount"
      ],
      "methods": [
        "getBasePrice",
        "getTaxAmount",
        "setBasePrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class MedicalBill {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MedicalBill {\n    private double basePrice;\n    private double taxAmount;\n\n    public MedicalBill(double basePrice) {\n        this.basePrice = basePrice;\n        this.taxAmount = basePrice * 0.12;\n    }\n\n    public double getBasePrice() {\n        return this.basePrice;\n    }\n\n    public double getTaxAmount() {\n        return this.taxAmount;\n    }\n\n    public void setBasePrice(double price) {\n        if (price > 0) {\n            this.basePrice = price;\n            this.taxAmount = price * 0.12;\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicalBill bill = new MedicalBill(100000.0);\n        bill.setBasePrice(200000.0);\n        System.out.println(\"Asosiy: \" + bill.getBasePrice() + \" | Soliq: \" + bill.getTaxAmount());\n    }\n}",
    "expectedOutput": "Asosiy: 200000.0 | Soliq: 24000.0",
    "newKnowledge": {
      "uz": "O'zaro bog'liq maydonlar: asosiy narx o'zgarganda unga bog'liq soliq summasini (QQS 12%) setter ichida avtomatik yangilash.",
      "en": "Co-dependent fields synchronization: automatically recalculating tax amount whenever base price mutates.",
      "ru": "Синхронизация зависимых полей: автоматический пересчет суммы налога при изменении базовой цены."
    },
    "newKnowledgeTags": [
      "co-dependent fields",
      "recalculation",
      "setter"
    ],
    "methodSpecs": [
      {
        "name": "getBasePrice()",
        "signature": "public double getBasePrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double basePrice</code> maydonining qiymatini return qiladi (masalan, <code>100000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double basePrice</code> (e.g. <code>100000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double basePrice</code> (например, <code>100000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>basePrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>basePrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>basePrice</code> без возможности модификации."
        }
      },
      {
        "name": "getTaxAmount()",
        "signature": "public double getTaxAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double taxAmount</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double taxAmount</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double taxAmount</code>."
        },
        "desc": {
          "uz": "Ichki <code>taxAmount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>taxAmount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>taxAmount</code> без возможности модификации."
        }
      },
      {
        "name": "setBasePrice()",
        "signature": "public void setBasePrice(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>200000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>200000.0</code>)",
          "ru": "<code>double price</code> (например, <code>200000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>price > 0</code> shartiga tekshiradi, agar shart bajarilsa <code>this.basePrice = price;</code> qilib yangilaydi.",
          "en": "Checks <code>price > 0</code> condition, and if valid, updates <code>this.basePrice = price;</code>.",
          "ru": "Проверяет условие <code>price > 0</code>, и если верно, обновляет <code>this.basePrice = price;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "MedicalBill",
        "signature": "public MedicalBill(double basePrice)",
        "params": {
          "uz": "<code>double basePrice</code> (masalan, <code>100000.0</code>)",
          "en": "<code>double basePrice</code> (e.g. <code>100000.0</code>)",
          "ru": "<code>double basePrice</code> (например, <code>100000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.basePrice = basePrice;</code> <code>this.taxAmount = basePrice * 0.12;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.basePrice = basePrice;</code> <code>this.taxAmount = basePrice * 0.12;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.basePrice = basePrice;</code> <code>this.taxAmount = basePrice * 0.12;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`bill` nomli `MedicalBill` ob'yektini yarating va argument sifatida `100000.0` qiymatini bering.",
          "Tegishli `setBasePrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `MedicalBill` object named `bill` and pass argument(s) `100000.0`.",
          "Invoke `setBasePrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `MedicalBill` с именем `bill` и передайте аргумент(ы) `100000.0`.",
          "Вызовите метод(ы) `setBasePrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Asosiy: 200000.0 | Soliq: 24000.0"
    }
  },
  {
    "id": 27,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "27. Kapitalbank — Narx O'zgarish Chegarasini Nazorat Qiluvchi Setter",
      "en": "27. Kapitalbank — Delta Threshold Rate-Limiting Mutator",
      "ru": "27. Kapitalbank — Сеттер с ограничением процента изменения цены"
    },
    "scenario": {
      "uz": "Bozor xavfsizligi qoidasi: Aksiya narxi bir urinishda avvalgi narxdan ko'pi bilan 20% ga o'zgarishi mumkin. Agar yangi narx 20% dan ko'p sakrasa, setter o'zgarishni rad etsin.",
      "en": "Rate-of-change control: Stock price can fluctuate by at most 20% in a single update. Reject larger deviations.",
      "ru": "Сеттер отклоняет изменение цены, если разница с текущей ценой превышает 20%."
    },
    "requirements": {
      "classes": [
        "StockSecurity",
        "Main"
      ],
      "privateFields": [
        "sharePrice"
      ],
      "methods": [
        "getSharePrice",
        "setSharePrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class StockSecurity {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StockSecurity {\n    private double sharePrice;\n\n    public StockSecurity(double sharePrice) {\n        this.sharePrice = sharePrice;\n    }\n\n    public double getSharePrice() {\n        return this.sharePrice;\n    }\n\n    public void setSharePrice(double newPrice) {\n        if (newPrice > 0) {\n            double delta = Math.abs(newPrice - this.sharePrice);\n            if (delta <= this.sharePrice * 0.20) {\n                this.sharePrice = newPrice;\n            }\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockSecurity stock = new StockSecurity(100.0);\n        stock.setSharePrice(150.0);\n        stock.setSharePrice(115.0);\n        System.out.println(\"Aksiya narxi: \" + stock.getSharePrice());\n    }\n}",
    "expectedOutput": "Aksiya narxi: 115.0",
    "newKnowledge": {
      "uz": "O'zgarish tezligi chegarasi (Delta Rate Limiting): narxning birdaniga 20% dan ko'p sakrashiga yo'l qo'ymaslik.",
      "en": "Rate of change limit: preventing sudden price jumps exceeding 20% of current value.",
      "ru": "Ограничение скачка цен: запрет изменения цены более чем на 20% за одну операцию."
    },
    "newKnowledgeTags": [
      "rate limiting",
      "delta check",
      "percentage threshold"
    ],
    "methodSpecs": [
      {
        "name": "getSharePrice()",
        "signature": "public double getSharePrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double sharePrice</code> maydonining qiymatini return qiladi (masalan, <code>100.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double sharePrice</code> (e.g. <code>100.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double sharePrice</code> (например, <code>100.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>sharePrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>sharePrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>sharePrice</code> без возможности модификации."
        }
      },
      {
        "name": "setSharePrice()",
        "signature": "public void setSharePrice(double newPrice)",
        "params": {
          "uz": "<code>double newPrice</code> (masalan, <code>150.0</code>)",
          "en": "<code>double newPrice</code> (e.g. <code>150.0</code>)",
          "ru": "<code>double newPrice</code> (например, <code>150.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>delta <= this.sharePrice * 0.20</code> shartiga tekshiradi, agar shart bajarilsa <code>this.sharePrice = newPrice;</code> qilib yangilaydi.",
          "en": "Checks <code>delta <= this.sharePrice * 0.20</code> condition, and if valid, updates <code>this.sharePrice = newPrice;</code>.",
          "ru": "Проверяет условие <code>delta <= this.sharePrice * 0.20</code>, и если верно, обновляет <code>this.sharePrice = newPrice;</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StockSecurity",
        "signature": "public StockSecurity(double sharePrice)",
        "params": {
          "uz": "<code>double sharePrice</code> (masalan, <code>100.0</code>)",
          "en": "<code>double sharePrice</code> (e.g. <code>100.0</code>)",
          "ru": "<code>double sharePrice</code> (например, <code>100.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.sharePrice = sharePrice;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.sharePrice = sharePrice;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.sharePrice = sharePrice;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`stock` nomli `StockSecurity` ob'yektini yarating va argument sifatida `100.0` qiymatini bering.",
          "Tegishli `setSharePrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `StockSecurity` object named `stock` and pass argument(s) `100.0`.",
          "Invoke `setSharePrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `StockSecurity` с именем `stock` и передайте аргумент(ы) `100.0`.",
          "Вызовите метод(ы) `setSharePrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Aksiya narxi: 115.0"
    }
  },
  {
    "id": 28,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "28. Beeline — Eski Parol Tekshiruvi Bilan Yangilovchi Xavfsiz Setter",
      "en": "28. Beeline — Two-Factor Old Password Verification Setter",
      "ru": "28. Beeline — Безопасный сеттер с проверкой старого пароля"
    },
    "scenario": {
      "uz": "Parolni o'zgartirish uchun 'changePassword(String oldPass, String newPass)' metodi eski parolni tekshirsin va yangi parol kamida 6 belgidan iborat bo'lsagina yangilasun.",
      "en": "To change password, require the old password match and new password length >= 6. Return boolean success.",
      "ru": "Для смены пароля метод changePassword требует совпадения старого пароля и длину нового >= 6."
    },
    "requirements": {
      "classes": [
        "AccountSecurity",
        "Main"
      ],
      "privateFields": [
        "password"
      ],
      "methods": [
        "changePassword"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class AccountSecurity {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AccountSecurity {\n    private String password;\n\n    public AccountSecurity(String password) {\n        this.password = password;\n    }\n\n    public boolean changePassword(String oldPass, String newPass) {\n        if (this.password != null && this.password.equals(oldPass)) {\n            if (newPass != null && newPass.length() >= 6) {\n                this.password = newPass;\n                return true;\n            }\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AccountSecurity sec = new AccountSecurity(\"oldSecret1\");\n        boolean b1 = sec.changePassword(\"wrong\", \"newSecret2\");\n        boolean b2 = sec.changePassword(\"oldSecret1\", \"newSecret2\");\n        System.out.println(\"Harakat 1: \" + b1 + \" | Harakat 2: \" + b2);\n    }\n}",
    "expectedOutput": "Harakat 1: false | Harakat 2: true",
    "newKnowledge": {
      "uz": "Autentifikatsiyali setter: yangi parolni o'rnatishdan oldin eski parolni to'g'riligini majburiy tekshirish.",
      "en": "Guarded authenticated mutator: requiring current password verification before updating credentials.",
      "ru": "Защищенный сеттер с аутентификацией: проверка старого пароля перед сменой на новый."
    },
    "newKnowledgeTags": [
      "authentication",
      "two-factor",
      "guarded setter"
    ],
    "methodSpecs": [
      {
        "name": "changePassword()",
        "signature": "public boolean changePassword(String oldPass, String newPass)",
        "params": {
          "uz": "<code>String oldPass, String newPass</code> (masalan, <code>\"wrong\", \"newSecret2\"</code>)",
          "en": "<code>String oldPass, String newPass</code> (e.g. <code>\"wrong\", \"newSecret2\"</code>)",
          "ru": "<code>String oldPass, String newPass</code> (например, <code>\"wrong\", \"newSecret2\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>password</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>password</code> qiymatini return qiladi (masalan, <code>\"oldSecret1\"</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>password</code> is null, otherwise returns <code>password</code> (e.g. <code>\"oldSecret1\"</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>password</code> null, иначе <code>password</code> (например, <code>\"oldSecret1\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "AccountSecurity",
        "signature": "public AccountSecurity(String password)",
        "params": {
          "uz": "<code>String password</code> (masalan, <code>\"oldSecret1\"</code>)",
          "en": "<code>String password</code> (e.g. <code>\"oldSecret1\"</code>)",
          "ru": "<code>String password</code> (например, <code>\"oldSecret1\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.password = password;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.password = password;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.password = password;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`sec` nomli `AccountSecurity` ob'yektini yarating va argument sifatida `\"oldSecret1\"` qiymatini bering.",
          "Tegishli `changePassword()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `AccountSecurity` object named `sec` and pass argument(s) `\"oldSecret1\"`.",
          "Invoke `changePassword()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `AccountSecurity` с именем `sec` и передайте аргумент(ы) `\"oldSecret1\"`.",
          "Вызовите метод(ы) `changePassword()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Harakat 1: false | Harakat 2: true"
    }
  },
  {
    "id": 29,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "29. UzAirways — Xato Kiritilganda IllegalArgumentException Otuvchi Setter",
      "en": "29. UzAirways — Setter Throwing Explicit IllegalArgumentException",
      "ru": "29. UzAirways — Сеттер, выбрасывающий явный IllegalArgumentException"
    },
    "scenario": {
      "uz": "Seminar 2 da o'rganilganidek, qiymat noto'g'ri bo'lganda faqat jimgina e'tiborsiz qoldirish emas, balki 'throw new IllegalArgumentException(\"Xabar\")' otish to'g'ri yondashuvdir.",
      "en": "Best practice: throw IllegalArgumentException upon invalid setter argument rather than silent failure.",
      "ru": "Практика: выбрасывать исключение IllegalArgumentException при недопустимом значении параметра."
    },
    "requirements": {
      "classes": [
        "FlightSeat",
        "Main"
      ],
      "privateFields": [
        "seatNumber"
      ],
      "methods": [
        "getSeatNumber",
        "setSeatNumber"
      ],
      "keywords": [
        "throw",
        "IllegalArgumentException",
        "this"
      ]
    },
    "starterCode": "class FlightSeat {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FlightSeat {\n    private int seatNumber;\n\n    public FlightSeat(int seatNumber) {\n        this.seatNumber = seatNumber;\n    }\n\n    public int getSeatNumber() {\n        return this.seatNumber;\n    }\n\n    public void setSeatNumber(int seatNumber) {\n        if (seatNumber <= 0) {\n            throw new IllegalArgumentException(\"Invalid seat\");\n        }\n        this.seatNumber = seatNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightSeat seat = new FlightSeat(12);\n        try {\n            seat.setSeatNumber(-5);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Ushlandi: \" + e.getMessage());\n        }\n        System.out.println(\"O'rindiq: \" + seat.getSeatNumber());\n    }\n}",
    "expectedOutput": "Ushlandi: Invalid seat\nO'rindiq: 12",
    "newKnowledge": {
      "uz": "Qat'iy xatolikda 'throw new IllegalArgumentException()' otish, noto'g'ri parametrlarni so'zsiz to'xtatish.",
      "en": "Explicit exception throwing: throwing IllegalArgumentException on invalid argument rather than silent failure.",
      "ru": "Выброс исключения IllegalArgumentException при недопустимом значении параметра."
    },
    "newKnowledgeTags": [
      "throw",
      "IllegalArgumentException",
      "exception handling"
    ],
    "methodSpecs": [
      {
        "name": "getSeatNumber()",
        "signature": "public int getSeatNumber()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int seatNumber</code> maydonining qiymatini return qiladi (masalan, <code>12</code>).",
          "en": "<code>int</code>: returns the value of <code>private int seatNumber</code> (e.g. <code>12</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int seatNumber</code> (например, <code>12</code>)."
        },
        "desc": {
          "uz": "Ichki <code>seatNumber</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>seatNumber</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>seatNumber</code> без возможности модификации."
        }
      },
      {
        "name": "setSeatNumber()",
        "signature": "public void setSeatNumber(int seatNumber)",
        "params": {
          "uz": "<code>int seatNumber</code> (masalan, <code>-5</code>)",
          "en": "<code>int seatNumber</code> (e.g. <code>-5</code>)",
          "ru": "<code>int seatNumber</code> (например, <code>-5</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "FlightSeat",
        "signature": "public FlightSeat(int seatNumber)",
        "params": {
          "uz": "<code>int seatNumber</code> (masalan, <code>12</code>)",
          "en": "<code>int seatNumber</code> (e.g. <code>12</code>)",
          "ru": "<code>int seatNumber</code> (например, <code>12</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.seatNumber = seatNumber;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.seatNumber = seatNumber;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.seatNumber = seatNumber;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`seat` nomli `FlightSeat` ob'yektini yarating va argument sifatida `12` qiymatini bering.",
          "Tegishli `setSeatNumber()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `FlightSeat` object named `seat` and pass argument(s) `12`.",
          "Invoke `setSeatNumber()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `FlightSeat` с именем `seat` и передайте аргумент(ы) `12`.",
          "Вызовите метод(ы) `setSeatNumber()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Ushlandi: Invalid seat\nO'rindiq: 12"
    }
  },
  {
    "id": 30,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Metodlari, Validatsiya va 'this' Kalit So'zi",
    "sector": "16-30: Mutators & Invariants",
    "title": {
      "uz": "30. WIUT SRS — To'liq Himoyalangan Talaba Bahosi Setteri (Master)",
      "en": "30. WIUT SRS — Fully Guarded Academic Grade Mutator (Master)",
      "ru": "30. WIUT SRS — Полностью защищенный сеттер академической оценки (Мастер)"
    },
    "scenario": {
      "uz": "WIUT modul bahosi ('moduleMark') 0 dan 100 gacha oraliqda bo'lishi shart. 'setModuleMark(double mark)' metodida oraliq tekshiruvi, xatolikda IllegalArgumentException otish va holatni to'liq himoya qilishni yakuniy master darajasida bajaring.",
      "en": "WIUT module grade must be between 0 and 100. Validate bounds, throw IllegalArgumentException on breach, and ensure full encapsulation.",
      "ru": "Оценка модуля WIUT должна быть строго от 0 до 100. Реализуйте проверку с выбросом IllegalArgumentException."
    },
    "requirements": {
      "classes": [
        "ModuleGrade",
        "Main"
      ],
      "privateFields": [
        "moduleMark"
      ],
      "methods": [
        "getModuleMark",
        "setModuleMark"
      ],
      "keywords": [
        "throw",
        "IllegalArgumentException",
        "this"
      ]
    },
    "starterCode": "class ModuleGrade {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ModuleGrade {\n    private double moduleMark;\n\n    public ModuleGrade(double moduleMark) {\n        if (moduleMark < 0.0 || moduleMark > 100.0) {\n            throw new IllegalArgumentException(\"Baho 0 va 100 oralig'ida bo'lishi shart\");\n        }\n        this.moduleMark = moduleMark;\n    }\n\n    public double getModuleMark() {\n        return this.moduleMark;\n    }\n\n    public void setModuleMark(double mark) {\n        if (mark < 0.0 || mark > 100.0) {\n            throw new IllegalArgumentException(\"Baho 0 va 100 oralig'ida bo'lishi shart\");\n        }\n        this.moduleMark = mark;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleGrade mg = new ModuleGrade(78.5);\n        try {\n            mg.setModuleMark(105.0);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Xato: \" + e.getMessage());\n        }\n        mg.setModuleMark(84.0);\n        System.out.println(\"Yakuniy baho: \" + mg.getModuleMark());\n    }\n}",
    "expectedOutput": "Xato: Baho 0 va 100 oralig'ida bo'lishi shart\nYakuniy baho: 84.0",
    "newKnowledge": {
      "uz": "To'liq himoyalangan master setter: baho 0..100 oralig'ida bo'lmasa IllegalArgumentException otish va holatni muhrlash.",
      "en": "Master guarded grade mutator: enforcing range [0..100] with explicit IllegalArgumentException on breach.",
      "ru": "Мастер-сеттер валидации оценки: строгий контроль диапазона [0..100] с выбросом исключения."
    },
    "newKnowledgeTags": [
      "master validation",
      "exception",
      "grade guard [0..100]"
    ],
    "methodSpecs": [
      {
        "name": "getModuleMark()",
        "signature": "public double getModuleMark()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double moduleMark</code> maydonining qiymatini return qiladi (masalan, <code>78.5</code>).",
          "en": "<code>double</code>: returns the value of <code>private double moduleMark</code> (e.g. <code>78.5</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double moduleMark</code> (например, <code>78.5</code>)."
        },
        "desc": {
          "uz": "Ichki <code>moduleMark</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>moduleMark</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>moduleMark</code> без возможности модификации."
        }
      },
      {
        "name": "setModuleMark()",
        "signature": "public void setModuleMark(double mark)",
        "params": {
          "uz": "<code>double mark</code> (masalan, <code>105.0</code>)",
          "en": "<code>double mark</code> (e.g. <code>105.0</code>)",
          "ru": "<code>double mark</code> (например, <code>105.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ModuleGrade",
        "signature": "public ModuleGrade(double moduleMark)",
        "params": {
          "uz": "<code>double moduleMark</code> (masalan, <code>78.5</code>)",
          "en": "<code>double moduleMark</code> (e.g. <code>78.5</code>)",
          "ru": "<code>double moduleMark</code> (например, <code>78.5</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.moduleMark = moduleMark;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.moduleMark = moduleMark;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.moduleMark = moduleMark;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`mg` nomli `ModuleGrade` ob'yektini yarating va argument sifatida `78.5` qiymatini bering.",
          "Tegishli `setModuleMark()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ModuleGrade` object named `mg` and pass argument(s) `78.5`.",
          "Invoke `setModuleMark()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ModuleGrade` с именем `mg` и передайте аргумент(ы) `78.5`.",
          "Вызовите метод(ы) `setModuleMark()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Xato: Baho 0 va 100 oralig'ida bo'lishi shart\nYakuniy baho: 84.0"
    }
  },
  {
    "id": 31,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "31. Uzum Market — Ichki Komissiyani Hisoblovchi private Yordamchi Metod",
      "en": "31. Uzum Market — Private Helper Method for Internal Commission Calculation",
      "ru": "31. Uzum Market — Приватный вспомогательный метод расчета комиссии"
    },
    "scenario": {
      "uz": "Sotuvchiga to'lanadigan sof summani hisoblashda komissiya foizi tashqariga oshkor qilinmaydi. 'private double calculateFee(double amt)' yordamchi metodi orqali sof summa: 'public double calculateNetPayout(double amt)' ichida hisoblansin.",
      "en": "Commission percentage must not leak to external callers. Encapsulate fee logic inside 'private double calculateFee(double amt)' and invoke within 'calculateNetPayout(amt)'.",
      "ru": "Комиссия не должна быть видна извне. Скройте логику в private методе calculateFee(amt) и вызывайте из calculateNetPayout(amt)."
    },
    "requirements": {
      "classes": [
        "SellerPayout",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "calculateNetPayout"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class SellerPayout {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SellerPayout {\n    private double calculateFee(double amt) {\n        return amt * 0.03;\n    }\n\n    public double calculateNetPayout(double amt) {\n        return amt - calculateFee(amt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SellerPayout sp = new SellerPayout();\n        System.out.println(\"Sof to'lov: \" + sp.calculateNetPayout(1000000.0) + \" UZS\");\n    }\n}",
    "expectedOutput": "Sof to'lov: 970000.0 UZS",
    "newKnowledge": {
      "uz": "31-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 31: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 31: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "calculateFee()",
        "signature": "private double calculateFee(double amt)",
        "params": {
          "uz": "<code>double amt</code>",
          "en": "<code>double amt</code>",
          "ru": "<code>double amt</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "calculateNetPayout()",
        "signature": "public double calculateNetPayout(double amt)",
        "params": {
          "uz": "<code>double amt</code>",
          "en": "<code>double amt</code>",
          "ru": "<code>double amt</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`sp` nomli `SellerPayout` ob'yektini yarating."
        ],
        "en": [
          "Create a `SellerPayout` object named `sp`."
        ],
        "ru": [
          "Создайте объект `SellerPayout` с именем `sp`."
        ]
      },
      "expectedOutput": "Sof to'lov: 970000.0 UZS"
    }
  },
  {
    "id": 32,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "32. Payme — Promokodni Tekshiruvchi private Predikat Metod",
      "en": "32. Payme — Private Predicate Validator Helper for Promo Codes",
      "ru": "32. Payme — Приватный предикатный метод валидации промокода"
    },
    "scenario": {
      "uz": "Promokod 'PAYME-' bilan boshlanishi va uzunligi kamida 8 belgi bo'lishi kerak. Bu murakkab mantiqni 'private boolean isValidPromo(String code)' yordamchisiga joylang va public 'applyPromo(String code)' ichida tekshiring.",
      "en": "Promo code validation (starts with 'PAYME-' and length >= 8) must reside in 'private boolean isValidPromo(code)' invoked by 'applyPromo(code)'.",
      "ru": "Логику валидации промокода вынесите в private boolean isValidPromo(code)."
    },
    "requirements": {
      "classes": [
        "PromoManager",
        "Main"
      ],
      "privateFields": [
        "discountApplied"
      ],
      "methods": [
        "applyPromo",
        "isDiscountApplied"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class PromoManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PromoManager {\n    private boolean discountApplied = false;\n\n    private boolean isValidPromo(String code) {\n        return code != null && code.startsWith(\"PAYME-\") && code.length() >= 8;\n    }\n\n    public boolean applyPromo(String code) {\n        if (isValidPromo(code)) {\n            this.discountApplied = true;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean isDiscountApplied() {\n        return this.discountApplied;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PromoManager pm = new PromoManager();\n        boolean r1 = pm.applyPromo(\"TEST1\");\n        boolean r2 = pm.applyPromo(\"PAYME-2026\");\n        System.out.println(\"R1: \" + r1 + \" | R2: \" + r2 + \" | Qo'llandi: \" + pm.isDiscountApplied());\n    }\n}",
    "expectedOutput": "R1: false | R2: true | Qo'llandi: true",
    "newKnowledge": {
      "uz": "32-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 32: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 32: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "isValidPromo()",
        "signature": "private boolean isValidPromo(String code)",
        "params": {
          "uz": "<code>String code</code>",
          "en": "<code>String code</code>",
          "ru": "<code>String code</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>code != null && code.startsWith(\"PAYME-\") && code.length() >= 8</code>."
        }
      },
      {
        "name": "applyPromo()",
        "signature": "public boolean applyPromo(String code)",
        "params": {
          "uz": "<code>String code</code> (masalan, <code>\"TEST1\"</code>)",
          "en": "<code>String code</code> (e.g. <code>\"TEST1\"</code>)",
          "ru": "<code>String code</code> (например, <code>\"TEST1\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isDiscountApplied()",
        "signature": "public boolean isDiscountApplied()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean discountApplied</code> maydonining qiymatini return qiladi (masalan, <code>false</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean discountApplied</code> (e.g. <code>false</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean discountApplied</code> (например, <code>false</code>)."
        },
        "desc": {
          "uz": "Ichki <code>discountApplied</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>discountApplied</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>discountApplied</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`pm` nomli `PromoManager` ob'yektini yarating.",
          "Tegishli `applyPromo()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PromoManager` object named `pm`.",
          "Invoke `applyPromo()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PromoManager` с именем `pm`.",
          "Вызовите метод(ы) `applyPromo()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "R1: false | R2: true | Qo'llandi: true"
    }
  },
  {
    "id": 33,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "33. Korzinka — Ko'p Bosqichli private Pipeline (Decomposition)",
      "en": "33. Korzinka — Multi-Step Private Pipeline Functional Decomposition",
      "ru": "33. Korzinka — Многошаговый приватный конвейер декомпозиции"
    },
    "scenario": {
      "uz": "Kassa jarayoni ('checkout()') uchta private yordamchiga bo'lingan: 'private boolean verifyStock()', 'private void applyLoyaltyDiscount()', va 'private void recordFiscalReceipt()'. Bu Clean Code 'bitta metod faqat bitta ishni qilsin' tamoyilidir.",
      "en": "Checkout is orchestrated via 3 private helpers: verifyStock(), applyLoyaltyDiscount(), recordFiscalReceipt().",
      "ru": "Процесс checkout разделен на 3 приватных метода для соблюдения принципов Clean Code."
    },
    "requirements": {
      "classes": [
        "CheckoutPipeline",
        "Main"
      ],
      "privateFields": [
        "totalAmount"
      ],
      "methods": [
        "processCheckout",
        "getTotalAmount"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class CheckoutPipeline {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CheckoutPipeline {\n    private double totalAmount;\n\n    public CheckoutPipeline(double totalAmount) {\n        this.totalAmount = totalAmount;\n    }\n\n    private boolean verifyStock() {\n        return true;\n    }\n\n    private void applyLoyaltyDiscount() {\n        this.totalAmount = this.totalAmount * 0.95; // 5% chegirma\n    }\n\n    private void recordFiscalReceipt() {\n        // fiskal yozuv\n    }\n\n    public void processCheckout() {\n        if (verifyStock()) {\n            applyLoyaltyDiscount();\n            recordFiscalReceipt();\n        }\n    }\n\n    public double getTotalAmount() {\n        return this.totalAmount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutPipeline cp = new CheckoutPipeline(100000.0);\n        cp.processCheckout();\n        System.out.println(\"Yakuniy kassa summasi: \" + cp.getTotalAmount() + \" UZS\");\n    }\n}",
    "expectedOutput": "Yakuniy kassa summasi: 95000.0 UZS",
    "newKnowledge": {
      "uz": "33-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 33: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 33: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "verifyStock()",
        "signature": "private boolean verifyStock()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean true</code> maydonining qiymatini return qiladi.",
          "en": "<code>boolean</code>: returns the value of <code>private boolean true</code>.",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean true</code>."
        },
        "desc": {
          "uz": "Ichki <code>true</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>true</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>true</code> без возможности модификации."
        }
      },
      {
        "name": "applyLoyaltyDiscount()",
        "signature": "private void applyLoyaltyDiscount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "recordFiscalReceipt()",
        "signature": "private void recordFiscalReceipt()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "processCheckout()",
        "signature": "public void processCheckout()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getTotalAmount()",
        "signature": "public double getTotalAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double totalAmount</code> maydonining qiymatini return qiladi (masalan, <code>100000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double totalAmount</code> (e.g. <code>100000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double totalAmount</code> (например, <code>100000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>totalAmount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>totalAmount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>totalAmount</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CheckoutPipeline",
        "signature": "public CheckoutPipeline(double totalAmount)",
        "params": {
          "uz": "<code>double totalAmount</code> (masalan, <code>100000.0</code>)",
          "en": "<code>double totalAmount</code> (e.g. <code>100000.0</code>)",
          "ru": "<code>double totalAmount</code> (например, <code>100000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.totalAmount = totalAmount;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.totalAmount = totalAmount;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.totalAmount = totalAmount;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`cp` nomli `CheckoutPipeline` ob'yektini yarating va argument sifatida `100000.0` qiymatini bering.",
          "Tegishli `processCheckout()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CheckoutPipeline` object named `cp` and pass argument(s) `100000.0`.",
          "Invoke `processCheckout()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CheckoutPipeline` с именем `cp` и передайте аргумент(ы) `100000.0`.",
          "Вызовите метод(ы) `processCheckout()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yakuniy kassa summasi: 95000.0 UZS"
    }
  },
  {
    "id": 34,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "34. Click — Bosqichli Soliq Shkalasini Hisoblovchi private Yordamchi",
      "en": "34. Click — Tiered Progressive Tax Bracket Private Helper",
      "ru": "34. Click — Приватный метод расчета прогрессивной налоговой шкалы"
    },
    "scenario": {
      "uz": "Daromadga qarab soliq stavkasi turlicha: 5 mln gacha 0%, 5 mln dan 15 mln gacha 12%, 15 mln dan yuqori bo'lsa 20%. Bu hisoblash 'private double computeTaxRate(double income)' ichida bo'lsin.",
      "en": "Tax bracket logic is encapsulated inside 'private double computeTaxRate(double income)' invoked by 'getNetIncome()'.",
      "ru": "Расчет налоговой ставки инкапсулирован внутри private метода computeTaxRate."
    },
    "requirements": {
      "classes": [
        "TaxCalculator",
        "Main"
      ],
      "privateFields": [
        "grossIncome"
      ],
      "methods": [
        "getNetIncome"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class TaxCalculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TaxCalculator {\n    private double grossIncome;\n\n    public TaxCalculator(double grossIncome) {\n        this.grossIncome = grossIncome;\n    }\n\n    private double computeTaxRate(double income) {\n        if (income <= 5000000.0) return 0.0;\n        if (income <= 15000000.0) return 0.12;\n        return 0.20;\n    }\n\n    public double getNetIncome() {\n        double rate = computeTaxRate(this.grossIncome);\n        return this.grossIncome * (1.0 - rate);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxCalculator tc = new TaxCalculator(10000000.0);\n        System.out.println(\"Sof daromad: \" + tc.getNetIncome() + \" UZS\");\n    }\n}",
    "expectedOutput": "Sof daromad: 8800000.0 UZS",
    "newKnowledge": {
      "uz": "34-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 34: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 34: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "computeTaxRate()",
        "signature": "private double computeTaxRate(double income)",
        "params": {
          "uz": "<code>double income</code>",
          "en": "<code>double income</code>",
          "ru": "<code>double income</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getNetIncome()",
        "signature": "public double getNetIncome()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TaxCalculator",
        "signature": "public TaxCalculator(double grossIncome)",
        "params": {
          "uz": "<code>double grossIncome</code> (masalan, <code>10000000.0</code>)",
          "en": "<code>double grossIncome</code> (e.g. <code>10000000.0</code>)",
          "ru": "<code>double grossIncome</code> (например, <code>10000000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.grossIncome = grossIncome;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.grossIncome = grossIncome;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.grossIncome = grossIncome;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tc` nomli `TaxCalculator` ob'yektini yarating va argument sifatida `10000000.0` qiymatini bering."
        ],
        "en": [
          "Create a `TaxCalculator` object named `tc` and pass argument(s) `10000000.0`."
        ],
        "ru": [
          "Создайте объект `TaxCalculator` с именем `tc` и передайте аргумент(ы) `10000000.0`."
        ]
      },
      "expectedOutput": "Sof daromad: 8800000.0 UZS"
    }
  },
  {
    "id": 35,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "35. Safia — Valyuta Ajratkichlarini Formatlovchi private Yordamchi",
      "en": "35. Safia — Private Currency Thousand-Separator Formatter Helper",
      "ru": "35. Safia — Приватный метод форматирования валюты с разделителями"
    },
    "scenario": {
      "uz": "Narxni chiroyli ko'rsatish (masalan 125000 -> \"125 000 UZS\") uchun 'private String formatWithSpaces(long val)' yordamchi metodi yozing va public 'getFormattedPrice()' ichida foydalaning.",
      "en": "Format price with space separators via 'private String formatWithSpaces(long val)' without exposing formatting logic.",
      "ru": "Приватный метод форматирует число с пробелами-разделителями перед выводом через геттер."
    },
    "requirements": {
      "classes": [
        "PastryItem",
        "Main"
      ],
      "privateFields": [
        "priceUzs"
      ],
      "methods": [
        "getFormattedPrice"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class PastryItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PastryItem {\n    private long priceUzs;\n\n    public PastryItem(long priceUzs) {\n        this.priceUzs = priceUzs;\n    }\n\n    private String formatWithSpaces(long val) {\n        return String.format(\"%,d\", val).replace(',', ' ') + \" UZS\";\n    }\n\n    public String getFormattedPrice() {\n        return formatWithSpaces(this.priceUzs);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryItem item = new PastryItem(125000);\n        System.out.println(\"Narx: \" + item.getFormattedPrice());\n    }\n}",
    "expectedOutput": "Narx: 125 000 UZS",
    "newKnowledge": {
      "uz": "35-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 35: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 35: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "formatWithSpaces()",
        "signature": "private String formatWithSpaces(long val)",
        "params": {
          "uz": "<code>long val</code>",
          "en": "<code>long val</code>",
          "ru": "<code>long val</code>"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      },
      {
        "name": "getFormattedPrice()",
        "signature": "public String getFormattedPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PastryItem",
        "signature": "public PastryItem(long priceUzs)",
        "params": {
          "uz": "<code>long priceUzs</code> (masalan, <code>125000</code>)",
          "en": "<code>long priceUzs</code> (e.g. <code>125000</code>)",
          "ru": "<code>long priceUzs</code> (например, <code>125000</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.priceUzs = priceUzs;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.priceUzs = priceUzs;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.priceUzs = priceUzs;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`item` nomli `PastryItem` ob'yektini yarating va argument sifatida `125000` qiymatini bering."
        ],
        "en": [
          "Create a `PastryItem` object named `item` and pass argument(s) `125000`."
        ],
        "ru": [
          "Создайте объект `PastryItem` с именем `item` и передайте аргумент(ы) `125000`."
        ]
      },
      "expectedOutput": "Narx: 125 000 UZS"
    }
  },
  {
    "id": 36,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "36. Texnomart — Matnlarni Tozalovchi (Sanitizer) private Yordamchi",
      "en": "36. Texnomart — Private String Sanitization Pipeline Helper",
      "ru": "36. Texnomart — Приватный метод санитизации и очистки строк"
    },
    "scenario": {
      "uz": "Foydalanuvchi kiritgan mahsulot tavsifi xavfli belgilardan tozalanishi shart. 'private String sanitize(String input)' probellarni qisqartirib, kichik harfga o'tkazadi va public 'setDescription(String desc)' ichida chaqiriladi.",
      "en": "Input string sanitization (trimming and lowercase conversion) is encapsulated in 'private String sanitize(input)'.",
      "ru": "Приватный метод sanitize очищает входные данные перед записью в поле через сеттер."
    },
    "requirements": {
      "classes": [
        "ItemDescription",
        "Main"
      ],
      "privateFields": [
        "description"
      ],
      "methods": [
        "setDescription",
        "getDescription"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class ItemDescription {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ItemDescription {\n    private String description;\n\n    private String sanitize(String input) {\n        if (input == null) return \"\";\n        return input.trim().toLowerCase();\n    }\n\n    public void setDescription(String desc) {\n        this.description = sanitize(desc);\n    }\n\n    public String getDescription() {\n        return this.description;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ItemDescription item = new ItemDescription();\n        item.setDescription(\"  Smartfon SAMSUNG Galaxy S24  \");\n        System.out.println(\"Tozalangan: [\" + item.getDescription() + \"]\");\n    }\n}",
    "expectedOutput": "Tozalangan: [smartfon samsung galaxy s24]",
    "newKnowledge": {
      "uz": "36-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 36: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 36: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "sanitize()",
        "signature": "private String sanitize(String input)",
        "params": {
          "uz": "<code>String input</code>",
          "en": "<code>String input</code>",
          "ru": "<code>String input</code>"
        },
        "returns": {
          "uz": "<code>String</code>: <code>qiymat</code> maydoni qiymatini <code>toLowerCase()</code> orqali kichik harflarda return qiladi.",
          "en": "<code>String</code>: returns <code>qiymat</code> converted to lowercase via <code>toLowerCase()</code>.",
          "ru": "<code>String</code>: возвращает поле <code>qiymat</code> в нижнем регистре через <code>toLowerCase()</code>."
        },
        "desc": {
          "uz": "<code>qiymat</code> qiymatini to'liq kichik harflarga aylantirib, xavfsiz return qiladi.",
          "en": "Converts <code>qiymat</code> to lowercase characters and returns it safely.",
          "ru": "Преобразует <code>qiymat</code> в нижний регистр и безопасно возвращает."
        }
      },
      {
        "name": "setDescription()",
        "signature": "public void setDescription(String desc)",
        "params": {
          "uz": "<code>String desc</code> (masalan, <code>\"  Smartfon SAMSUNG Galaxy S24  \"</code>)",
          "en": "<code>String desc</code> (e.g. <code>\"  Smartfon SAMSUNG Galaxy S24  \"</code>)",
          "ru": "<code>String desc</code> (например, <code>\"  Smartfon SAMSUNG Galaxy S24  \"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getDescription()",
        "signature": "public String getDescription()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String description</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String description</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String description</code>."
        },
        "desc": {
          "uz": "Ichki <code>description</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>description</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>description</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`item` nomli `ItemDescription` ob'yektini yarating.",
          "Tegishli `setDescription()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ItemDescription` object named `item`.",
          "Invoke `setDescription()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ItemDescription` с именем `item`.",
          "Вызовите метод(ы) `setDescription()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Tozalangan: [smartfon samsung galaxy s24]"
    }
  },
  {
    "id": 37,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "37. Dodo Pizza — Takroriy Chegirmani Bloklovchi private Bayroqcha",
      "en": "37. Dodo Pizza — Private Guard Flag Preventing Duplicate Redemptions",
      "ru": "37. Dodo Pizza — Приватный флаг-сторож против повторного применения купона"
    },
    "scenario": {
      "uz": "Chegirma kuponi faqat bir marta ishlatilishi mumkin. 'private boolean isClaimed' maydoni va 'claimDiscount(double percent)' metodi agar oldin ishlatilgan bo'lsa false, bo'lmasa true qaytarib, holatni yangilasun.",
      "en": "Coupon can only be redeemed once. Guarded via 'private boolean isClaimed' inside 'claimDiscount()'.",
      "ru": "Купон применяется только один раз. Приватный флаг isClaimed блокирует повторный вызов."
    },
    "requirements": {
      "classes": [
        "VoucherCoupon",
        "Main"
      ],
      "privateFields": [
        "isClaimed",
        "currentPrice"
      ],
      "methods": [
        "claimDiscount",
        "getCurrentPrice"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class VoucherCoupon {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class VoucherCoupon {\n    private double currentPrice;\n    private boolean isClaimed = false;\n\n    public VoucherCoupon(double currentPrice) {\n        this.currentPrice = currentPrice;\n    }\n\n    public boolean claimDiscount(double percent) {\n        if (!this.isClaimed && percent > 0 && percent < 1.0) {\n            this.currentPrice = this.currentPrice * (1.0 - percent);\n            this.isClaimed = true;\n            return true;\n        }\n        return false;\n    }\n\n    public double getCurrentPrice() {\n        return this.currentPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VoucherCoupon vc = new VoucherCoupon(80000.0);\n        boolean firstTry = vc.claimDiscount(0.10);\n        boolean secondTry = vc.claimDiscount(0.10);\n        System.out.println(\"Birinchi: \" + firstTry + \" | Ikkinchi: \" + secondTry + \" | Narx: \" + vc.getCurrentPrice());\n    }\n}",
    "expectedOutput": "Birinchi: true | Ikkinchi: false | Narx: 72000.0",
    "newKnowledge": {
      "uz": "37-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 37: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 37: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "claimDiscount()",
        "signature": "public boolean claimDiscount(double percent)",
        "params": {
          "uz": "<code>double percent</code> (masalan, <code>0.10</code>)",
          "en": "<code>double percent</code> (e.g. <code>0.10</code>)",
          "ru": "<code>double percent</code> (например, <code>0.10</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getCurrentPrice()",
        "signature": "public double getCurrentPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double currentPrice</code> maydonining qiymatini return qiladi (masalan, <code>80000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double currentPrice</code> (e.g. <code>80000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double currentPrice</code> (например, <code>80000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>currentPrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>currentPrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>currentPrice</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "VoucherCoupon",
        "signature": "public VoucherCoupon(double currentPrice)",
        "params": {
          "uz": "<code>double currentPrice</code> (masalan, <code>80000.0</code>)",
          "en": "<code>double currentPrice</code> (e.g. <code>80000.0</code>)",
          "ru": "<code>double currentPrice</code> (например, <code>80000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.currentPrice = currentPrice;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.currentPrice = currentPrice;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.currentPrice = currentPrice;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`vc` nomli `VoucherCoupon` ob'yektini yarating va argument sifatida `80000.0` qiymatini bering.",
          "Tegishli `claimDiscount()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `VoucherCoupon` object named `vc` and pass argument(s) `80000.0`.",
          "Invoke `claimDiscount()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `VoucherCoupon` с именем `vc` и передайте аргумент(ы) `80000.0`.",
          "Вызовите метод(ы) `claimDiscount()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Birinchi: true | Ikkinchi: false | Narx: 72000.0"
    }
  },
  {
    "id": 38,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "38. Express24 — Amallarni Tarixga Yozuvchi private Audit Metodi",
      "en": "38. Express24 — Private In-Memory Audit Trail Logger Helper",
      "ru": "38. Express24 — Приватный метод логирования действий в историю аудита"
    },
    "scenario": {
      "uz": "Kuryer harakatlari audit tarixiga yoziladi. 'private void appendLog(String action)' yordamchisi har bir operatsiyani 'private String auditLog' ichiga yangi qator bilan qo'shadi.",
      "en": "Internal audit logging is delegated to 'private void appendLog(action)' which records transitions into 'auditLog'.",
      "ru": "Приватный метод appendLog добавляет записи в текстовый лог аудита auditLog."
    },
    "requirements": {
      "classes": [
        "CourierAudit",
        "Main"
      ],
      "privateFields": [
        "auditLog"
      ],
      "methods": [
        "pickupOrder",
        "deliverOrder",
        "getAuditLog"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class CourierAudit {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CourierAudit {\n    private String auditLog = \"\";\n\n    private void appendLog(String action) {\n        this.auditLog += \"[\" + action + \"]; \";\n    }\n\n    public void pickupOrder(String orderId) {\n        appendLog(\"PICKED_UP: \" + orderId);\n    }\n\n    public void deliverOrder(String orderId) {\n        appendLog(\"DELIVERED: \" + orderId);\n    }\n\n    public String getAuditLog() {\n        return this.auditLog.trim();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierAudit ca = new CourierAudit();\n        ca.pickupOrder(\"ORD-101\");\n        ca.deliverOrder(\"ORD-101\");\n        System.out.println(ca.getAuditLog());\n    }\n}",
    "expectedOutput": "[PICKED_UP: ORD-101]; [DELIVERED: ORD-101];",
    "newKnowledge": {
      "uz": "38-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 38: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 38: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "appendLog()",
        "signature": "private void appendLog(String action)",
        "params": {
          "uz": "<code>String action</code>",
          "en": "<code>String action</code>",
          "ru": "<code>String action</code>"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "pickupOrder()",
        "signature": "public void pickupOrder(String orderId)",
        "params": {
          "uz": "<code>String orderId</code> (masalan, <code>\"ORD-101\"</code>)",
          "en": "<code>String orderId</code> (e.g. <code>\"ORD-101\"</code>)",
          "ru": "<code>String orderId</code> (например, <code>\"ORD-101\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "deliverOrder()",
        "signature": "public void deliverOrder(String orderId)",
        "params": {
          "uz": "<code>String orderId</code> (masalan, <code>\"ORD-101\"</code>)",
          "en": "<code>String orderId</code> (e.g. <code>\"ORD-101\"</code>)",
          "ru": "<code>String orderId</code> (например, <code>\"ORD-101\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getAuditLog()",
        "signature": "public String getAuditLog()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ca` nomli `CourierAudit` ob'yektini yarating.",
          "Tegishli `pickupOrder()`, `deliverOrder()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CourierAudit` object named `ca`.",
          "Invoke `pickupOrder()`, `deliverOrder()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CourierAudit` с именем `ca`.",
          "Вызовите метод(ы) `pickupOrder()`, `deliverOrder()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "[PICKED_UP: ORD-101]; [DELIVERED: ORD-101];"
    }
  },
  {
    "id": 39,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "39. Asaxiy — Holat O'tishini Tekshiruvchi private Nazoratchi",
      "en": "39. Asaxiy — Private State Transition Guard Helper",
      "ru": "39. Asaxiy — Приватный метод проверки допустимости перехода состояний"
    },
    "scenario": {
      "uz": "Buyurtma faqat NEW -> PROCESSING -> COMPLETED ketma-ketligida o'tishi mumkin. Boshqa o'tishlarni 'private boolean isAllowedTransition(String from, String to)' yordamchisi orqali rad eting.",
      "en": "Order lifecycle allows strictly NEW -> PROCESSING -> COMPLETED. Enforce via 'private boolean isAllowedTransition()'.",
      "ru": "Жизненный цикл заказа строго регламентирован. Переходы валидируются приватным методом."
    },
    "requirements": {
      "classes": [
        "OrderTracker",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "methods": [
        "transitionTo",
        "getStatus"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class OrderTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderTracker {\n    private String status = \"NEW\";\n\n    private boolean isAllowedTransition(String from, String to) {\n        if (\"NEW\".equals(from) && \"PROCESSING\".equals(to)) return true;\n        if (\"PROCESSING\".equals(from) && \"COMPLETED\".equals(to)) return true;\n        return false;\n    }\n\n    public boolean transitionTo(String nextStatus) {\n        if (isAllowedTransition(this.status, nextStatus)) {\n            this.status = nextStatus;\n            return true;\n        }\n        return false;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderTracker ot = new OrderTracker();\n        boolean b1 = ot.transitionTo(\"COMPLETED\");\n        boolean b2 = ot.transitionTo(\"PROCESSING\");\n        System.out.println(\"B1: \" + b1 + \" | B2: \" + b2 + \" | Holat: \" + ot.getStatus());\n    }\n}",
    "expectedOutput": "B1: false | B2: true | Holat: PROCESSING",
    "newKnowledge": {
      "uz": "39-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 39: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 39: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "isAllowedTransition()",
        "signature": "private boolean isAllowedTransition(String from, String to)",
        "params": {
          "uz": "<code>String from, String to</code>",
          "en": "<code>String from, String to</code>",
          "ru": "<code>String from, String to</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "transitionTo()",
        "signature": "public boolean transitionTo(String nextStatus)",
        "params": {
          "uz": "<code>String nextStatus</code> (masalan, <code>\"COMPLETED\"</code>)",
          "en": "<code>String nextStatus</code> (e.g. <code>\"COMPLETED\"</code>)",
          "ru": "<code>String nextStatus</code> (например, <code>\"COMPLETED\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getStatus()",
        "signature": "public String getStatus()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String status</code> maydonining qiymatini return qiladi (masalan, <code>\"NEW\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String status</code> (e.g. <code>\"NEW\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String status</code> (например, <code>\"NEW\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>status</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>status</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>status</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ot` nomli `OrderTracker` ob'yektini yarating.",
          "Tegishli `transitionTo()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `OrderTracker` object named `ot`.",
          "Invoke `transitionTo()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `OrderTracker` с именем `ot`.",
          "Вызовите метод(ы) `transitionTo()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "B1: false | B2: true | Holat: PROCESSING"
    }
  },
  {
    "id": 40,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "40. Yandex Go — Yetkazish Masofasini Hisoblovchi private Matematik Yordamchi",
      "en": "40. Yandex Go — Private Euclidean Distance Mathematics Helper",
      "ru": "40. Yandex Go — Приватный математический метод расчета расстояния"
    },
    "scenario": {
      "uz": "Ikki nuqta orasidagi masofani hisoblash (Pifagor: sqrt(dx*dx + dy*dy)) tashqi kodga kerak emas. Uni 'private double calcDistance(double x1, double y1, double x2, double y2)' qilib yashiring va safar narxini hisoblashda ishlating.",
      "en": "Coordinate distance calculation logic is encapsulated inside private helper calcDistance, keeping public API clean.",
      "ru": "Расчет расстояния по координатам скрыт в приватном методе calcDistance."
    },
    "requirements": {
      "classes": [
        "DeliveryFare",
        "Main"
      ],
      "privateFields": [
        "baseFare",
        "ratePerKm"
      ],
      "methods": [
        "calculateTripFare"
      ],
      "keywords": [
        "private",
        "Math.sqrt"
      ]
    },
    "starterCode": "class DeliveryFare {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DeliveryFare {\n    private double baseFare;\n    private double ratePerKm;\n\n    public DeliveryFare(double baseFare, double ratePerKm) {\n        this.baseFare = baseFare;\n        this.ratePerKm = ratePerKm;\n    }\n\n    private double calcDistance(double x1, double y1, double x2, double y2) {\n        double dx = x2 - x1;\n        double dy = y2 - y1;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n\n    public double calculateTripFare(double x1, double y1, double x2, double y2) {\n        double distance = calcDistance(x1, y1, x2, y2);\n        return this.baseFare + (distance * this.ratePerKm);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryFare df = new DeliveryFare(5000.0, 2000.0);\n        double fare = df.calculateTripFare(0, 0, 3, 4);\n        System.out.println(\"Safar narxi: \" + fare + \" UZS\");\n    }\n}",
    "expectedOutput": "Safar narxi: 15000.0 UZS",
    "newKnowledge": {
      "uz": "40-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 40: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 40: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "calcDistance()",
        "signature": "private double calcDistance(double x1, double y1, double x2, double y2)",
        "params": {
          "uz": "<code>double x1, double y1, double x2, double y2</code>",
          "en": "<code>double x1, double y1, double x2, double y2</code>",
          "ru": "<code>double x1, double y1, double x2, double y2</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "calculateTripFare()",
        "signature": "public double calculateTripFare(double x1, double y1, double x2, double y2)",
        "params": {
          "uz": "<code>double x1, double y1, double x2, double y2</code> (masalan, <code>0, 0, 3, 4</code>)",
          "en": "<code>double x1, double y1, double x2, double y2</code> (e.g. <code>0, 0, 3, 4</code>)",
          "ru": "<code>double x1, double y1, double x2, double y2</code> (например, <code>0, 0, 3, 4</code>)"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "DeliveryFare",
        "signature": "public DeliveryFare(double baseFare, double ratePerKm)",
        "params": {
          "uz": "<code>double baseFare, double ratePerKm</code> (masalan, <code>5000.0, 2000.0</code>)",
          "en": "<code>double baseFare, double ratePerKm</code> (e.g. <code>5000.0, 2000.0</code>)",
          "ru": "<code>double baseFare, double ratePerKm</code> (например, <code>5000.0, 2000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.baseFare = baseFare;</code> <code>this.ratePerKm = ratePerKm;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.baseFare = baseFare;</code> <code>this.ratePerKm = ratePerKm;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.baseFare = baseFare;</code> <code>this.ratePerKm = ratePerKm;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`df` nomli `DeliveryFare` ob'yektini yarating va argument sifatida `5000.0, 2000.0` qiymatini bering.",
          "Tegishli `calculateTripFare()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `DeliveryFare` object named `df` and pass argument(s) `5000.0, 2000.0`.",
          "Invoke `calculateTripFare()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `DeliveryFare` с именем `df` и передайте аргумент(ы) `5000.0, 2000.0`.",
          "Вызовите метод(ы) `calculateTripFare()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Safar narxi: 15000.0 UZS"
    }
  },
  {
    "id": 41,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "41. Medion — Rekursiv Hisoblashni Inkapsulyatsiya Qiluvchi private Yordamchi",
      "en": "41. Medion — Encapsulated Private Recursive Algorithm Helper",
      "ru": "41. Medion — Приватный рекурсивный вспомогательный метод"
    },
    "scenario": {
      "uz": "Tahlil kombinatsiyalari sonini topishda rekursiv faktorialdan foydalaniladi. Rekursiya tafsilotlarini 'private long factorial(int n)' ichida yashiring, tashqariga esa faqat 'public long getPermutations(int n)' metodini taqdim eting.",
      "en": "Recursive factorial is encapsulated inside private helper, exposing only clean public 'getPermutations(int n)'.",
      "ru": "Рекурсивный факториал скрыт в приватном методе, наружу открыт только метод getPermutations."
    },
    "requirements": {
      "classes": [
        "LabPermutations",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "getPermutations"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class LabPermutations {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class LabPermutations {\n    private long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    public long getPermutations(int n) {\n        if (n < 0) return 0;\n        return factorial(n);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabPermutations lp = new LabPermutations();\n        System.out.println(\"5 ta tahlil ketma-ketligi: \" + lp.getPermutations(5));\n    }\n}",
    "expectedOutput": "5 ta tahlil ketma-ketligi: 120",
    "newKnowledge": {
      "uz": "41-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 41: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 41: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "factorial()",
        "signature": "private long factorial(int n)",
        "params": {
          "uz": "<code>int n</code>",
          "en": "<code>int n</code>",
          "ru": "<code>int n</code>"
        },
        "returns": {
          "uz": "<code>long</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>long</code>: returns computed business result or operation state.",
          "ru": "<code>long</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPermutations()",
        "signature": "public long getPermutations(int n)",
        "params": {
          "uz": "<code>int n</code>",
          "en": "<code>int n</code>",
          "ru": "<code>int n</code>"
        },
        "returns": {
          "uz": "<code>long</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>long</code>: returns computed business result or operation state.",
          "ru": "<code>long</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`lp` nomli `LabPermutations` ob'yektini yarating."
        ],
        "en": [
          "Create a `LabPermutations` object named `lp`."
        ],
        "ru": [
          "Создайте объект `LabPermutations` с именем `lp`."
        ]
      },
      "expectedOutput": "5 ta tahlil ketma-ketligi: 120"
    }
  },
  {
    "id": 42,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "42. Kapitalbank — Maxfiy Tokenni Niqoblovchi private Yordamchi",
      "en": "42. Kapitalbank — Private Sensitive Token Masking Helper",
      "ru": "42. Kapitalbank — Приватный метод маскирования секретного токена"
    },
    "scenario": {
      "uz": "Avtorizatsiya tokenining faqat boshi va oxiri ko'rinadi (masalan \"TK-12345678-UZ\" -> \"TK***UZ\"). Niqoblash mantiqini 'private String maskToken(String t)' yordamchisiga o'tkazing.",
      "en": "Token obfuscation algorithm is isolated within 'private String maskToken(String token)'.",
      "ru": "Логика маскирования токена инкапсулирована в приватный метод maskToken."
    },
    "requirements": {
      "classes": [
        "AuthToken",
        "Main"
      ],
      "privateFields": [
        "rawToken"
      ],
      "methods": [
        "getMaskedToken"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class AuthToken {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AuthToken {\n    private String rawToken;\n\n    public AuthToken(String rawToken) {\n        this.rawToken = rawToken;\n    }\n\n    private String maskToken(String t) {\n        if (t == null || t.length() < 4) return \"****\";\n        return t.substring(0, 2) + \"***\" + t.substring(t.length() - 2);\n    }\n\n    public String getMaskedToken() {\n        return maskToken(this.rawToken);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuthToken tok = new AuthToken(\"TK-12345678-UZ\");\n        System.out.println(\"Xavfsiz token: \" + tok.getMaskedToken());\n    }\n}",
    "expectedOutput": "Xavfsiz token: TK***UZ",
    "newKnowledge": {
      "uz": "42-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 42: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 42: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "maskToken()",
        "signature": "private String maskToken(String t)",
        "params": {
          "uz": "<code>String t</code>",
          "en": "<code>String t</code>",
          "ru": "<code>String t</code>"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>qiymat</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>qiymat</code> qiymatini return qiladi.",
          "en": "<code>String</code>: returns safe default if <code>qiymat</code> is null, otherwise returns <code>qiymat</code>.",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>qiymat</code> null, иначе <code>qiymat</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "getMaskedToken()",
        "signature": "public String getMaskedToken()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "AuthToken",
        "signature": "public AuthToken(String rawToken)",
        "params": {
          "uz": "<code>String rawToken</code> (masalan, <code>\"TK-12345678-UZ\"</code>)",
          "en": "<code>String rawToken</code> (e.g. <code>\"TK-12345678-UZ\"</code>)",
          "ru": "<code>String rawToken</code> (например, <code>\"TK-12345678-UZ\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.rawToken = rawToken;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.rawToken = rawToken;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.rawToken = rawToken;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tok` nomli `AuthToken` ob'yektini yarating va argument sifatida `\"TK-12345678-UZ\"` qiymatini bering."
        ],
        "en": [
          "Create a `AuthToken` object named `tok` and pass argument(s) `\"TK-12345678-UZ\"`."
        ],
        "ru": [
          "Создайте объект `AuthToken` с именем `tok` и передайте аргумент(ы) `\"TK-12345678-UZ\"`."
        ]
      },
      "expectedOutput": "Xavfsiz token: TK***UZ"
    }
  },
  {
    "id": 43,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "43. Beeline — Keshni Bekor Qiluvchi (Invalidation) private Yordamchi",
      "en": "43. Beeline — Private Cache Invalidation State Helper",
      "ru": "43. Beeline — Приватный метод инвалидации кэша"
    },
    "scenario": {
      "uz": "Trafik balansi yangilanganda, unga bog'liq kesh hisoboti eskiradi. Har qanday setter ichidan 'private void invalidateCache()' yordamchisi chaqirilib, kesh 'null' qilib tozalanadi.",
      "en": "When balance mutates, cache becomes stale. Mutators call 'private void invalidateCache()' to reset cached state.",
      "ru": "При изменении баланса сеттер вызывает приватный метод invalidateCache для очистки кэша."
    },
    "requirements": {
      "classes": [
        "TrafficReport",
        "Main"
      ],
      "privateFields": [
        "balanceMb",
        "cachedSummary"
      ],
      "methods": [
        "addTraffic",
        "getSummary"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class TrafficReport {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TrafficReport {\n    private int balanceMb;\n    private String cachedSummary = null;\n\n    public TrafficReport(int balanceMb) {\n        this.balanceMb = balanceMb;\n    }\n\n    private void invalidateCache() {\n        this.cachedSummary = null;\n    }\n\n    public void addTraffic(int mb) {\n        if (mb > 0) {\n            this.balanceMb += mb;\n            invalidateCache();\n        }\n    }\n\n    public String getSummary() {\n        if (this.cachedSummary == null) {\n            this.cachedSummary = \"Mavjud trafik: \" + this.balanceMb + \" MB\";\n        }\n        return this.cachedSummary;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrafficReport tr = new TrafficReport(1000);\n        System.out.println(\"1: \" + tr.getSummary());\n        tr.addTraffic(500);\n        System.out.println(\"2: \" + tr.getSummary());\n    }\n}",
    "expectedOutput": "1: Mavjud trafik: 1000 MB\n2: Mavjud trafik: 1500 MB",
    "newKnowledge": {
      "uz": "43-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 43: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 43: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "invalidateCache()",
        "signature": "private void invalidateCache()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>null</code> qiymatini qabul qilib, <code>this.cachedSummary = null;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>null</code> and sets <code>this.cachedSummary = null;</code>.",
          "ru": "Принимает <code>null</code> и обновляет <code>this.cachedSummary = null;</code>."
        }
      },
      {
        "name": "addTraffic()",
        "signature": "public void addTraffic(int mb)",
        "params": {
          "uz": "<code>int mb</code> (masalan, <code>500</code>)",
          "en": "<code>int mb</code> (e.g. <code>500</code>)",
          "ru": "<code>int mb</code> (например, <code>500</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getSummary()",
        "signature": "public String getSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>balanceMb</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>balanceMb</code> qiymatini return qiladi (masalan, <code>1000</code>).",
          "en": "<code>String</code>: returns safe default if <code>balanceMb</code> is null, otherwise returns <code>balanceMb</code> (e.g. <code>1000</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>balanceMb</code> null, иначе <code>balanceMb</code> (например, <code>1000</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TrafficReport",
        "signature": "public TrafficReport(int balanceMb)",
        "params": {
          "uz": "<code>int balanceMb</code> (masalan, <code>1000</code>)",
          "en": "<code>int balanceMb</code> (e.g. <code>1000</code>)",
          "ru": "<code>int balanceMb</code> (например, <code>1000</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.balanceMb = balanceMb;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.balanceMb = balanceMb;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.balanceMb = balanceMb;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tr` nomli `TrafficReport` ob'yektini yarating va argument sifatida `1000` qiymatini bering.",
          "Tegishli `addTraffic()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TrafficReport` object named `tr` and pass argument(s) `1000`.",
          "Invoke `addTraffic()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TrafficReport` с именем `tr` и передайте аргумент(ы) `1000`.",
          "Вызовите метод(ы) `addTraffic()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "1: Mavjud trafik: 1000 MB\n2: Mavjud trafik: 1500 MB"
    }
  },
  {
    "id": 44,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "44. UzAirways — Karta Checksumini Tekshiruvchi Luhn private Yordamchisi",
      "en": "44. UzAirways — Luhn Checksum Algorithm Private Verification Helper",
      "ru": "44. UzAirways — Приватный метод алгоритма Луна для проверки контрольной суммы"
    },
    "scenario": {
      "uz": "Chipta xaridida to'lov kartasi nazorat summasi tekshiriladi. Raqamlar yig'indisini 10 ga bo'linishini 'private boolean verifyLuhnChecksum(String num)' orqali tekshiring.",
      "en": "Card verification encapsulates Luhn check sum algorithm inside a private helper method.",
      "ru": "Проверка валидности номера карты инкапсулирована в приватный метод проверки контрольной суммы."
    },
    "requirements": {
      "classes": [
        "PaymentValidator",
        "Main"
      ],
      "privateFields": [],
      "methods": [
        "isCardAcceptable"
      ],
      "keywords": [
        "private"
      ]
    },
    "starterCode": "class PaymentValidator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentValidator {\n    private boolean verifyChecksum(String cardNo) {\n        if (cardNo == null || cardNo.length() != 16) return false;\n        int sum = 0;\n        for (int i = 0; i < cardNo.length(); i++) {\n            char c = cardNo.charAt(i);\n            if (!Character.isDigit(c)) return false;\n            sum += (c - '0');\n        }\n        return (sum % 2 == 0); // soddalashtirilgan paritet qoidasi\n    }\n\n    public boolean isCardAcceptable(String cardNo) {\n        return verifyChecksum(cardNo);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentValidator pv = new PaymentValidator();\n        System.out.println(\"Karta 1: \" + pv.isCardAcceptable(\"8600123456789912\"));\n        System.out.println(\"Karta 2: \" + pv.isCardAcceptable(\"bad\"));\n    }\n}",
    "expectedOutput": "Karta 1: true\nKarta 2: false",
    "newKnowledge": {
      "uz": "44-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 44: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 44: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "verifyChecksum()",
        "signature": "private boolean verifyChecksum(String cardNo)",
        "params": {
          "uz": "<code>String cardNo</code>",
          "en": "<code>String cardNo</code>",
          "ru": "<code>String cardNo</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>sum</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>sum</code> qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>sum</code> is null, otherwise returns <code>sum</code> (e.g. <code>0</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>sum</code> null, иначе <code>sum</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "isCardAcceptable()",
        "signature": "public boolean isCardAcceptable(String cardNo)",
        "params": {
          "uz": "<code>String cardNo</code>",
          "en": "<code>String cardNo</code>",
          "ru": "<code>String cardNo</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`pv` nomli `PaymentValidator` ob'yektini yarating."
        ],
        "en": [
          "Create a `PaymentValidator` object named `pv`."
        ],
        "ru": [
          "Создайте объект `PaymentValidator` с именем `pv`."
        ]
      },
      "expectedOutput": "Karta 1: true\nKarta 2: false"
    }
  },
  {
    "id": 45,
    "tier": 3,
    "tierName": "3-Bosqich: Kirish Huquqlari va Xususiy (private) Yordamchi Metodlar",
    "sector": "31-45: Helper Methods & Decomposition",
    "title": {
      "uz": "45. WIUT SRS — To'liq Himoyalangan Moliya Shlyuzi (Master Decomposition)",
      "en": "45. WIUT SRS — Master Fully Encapsulated Payment Gateway Pipeline",
      "ru": "45. WIUT SRS — Мастер-пайплайн финансового шлюза с полной декомпозицией"
    },
    "scenario": {
      "uz": "Kontrakt to'lovi shlyuzi ('payTuition') 4 ta private yordamchi orqali boshqariladi: 'validateStudent', 'checkSufficientFunds', 'applyTuitionDeduction', va 'recordAuditLog'. Barcha ichki qadamlar xususiy himoyalangan.",
      "en": "Master financial pipeline: 'payTuition' orchestrates 4 private helpers ensuring absolute integrity.",
      "ru": "Мастер-пайплайн: метод payTuition управляет 4 приватными методами, обеспечивая полную надежность."
    },
    "requirements": {
      "classes": [
        "TuitionGateway",
        "Main"
      ],
      "privateFields": [
        "studentBalance",
        "tuitionDue"
      ],
      "methods": [
        "payTuition",
        "getTuitionDue"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class TuitionGateway {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TuitionGateway {\n    private double studentBalance;\n    private double tuitionDue;\n\n    public TuitionGateway(double studentBalance, double tuitionDue) {\n        this.studentBalance = studentBalance;\n        this.tuitionDue = tuitionDue;\n    }\n\n    private boolean validateAmount(double amount) {\n        return amount > 0 && amount <= this.tuitionDue;\n    }\n\n    private boolean hasFunds(double amount) {\n        return this.studentBalance >= amount;\n    }\n\n    private void deduct(double amount) {\n        this.studentBalance -= amount;\n        this.tuitionDue -= amount;\n    }\n\n    public boolean payTuition(double amount) {\n        if (validateAmount(amount) && hasFunds(amount)) {\n            deduct(amount);\n            return true;\n        }\n        return false;\n    }\n\n    public double getTuitionDue() {\n        return this.tuitionDue;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TuitionGateway gw = new TuitionGateway(35000000.0, 30000000.0);\n        boolean success = gw.payTuition(30000000.0);\n        System.out.println(\"To'lov muvaffaqiyatlimi: \" + success + \" | Qoldiq qarz: \" + gw.getTuitionDue());\n    }\n}",
    "expectedOutput": "To'lov muvaffaqiyatlimi: true | Qoldiq qarz: 0.0",
    "newKnowledge": {
      "uz": "45-masala: Murakkab mantiqni ochiq qoldirmasdan, maxfiy 'private' yordamchi metodlarga ajratish (Functional Decomposition) va Clean Code qoidalariga rioya qilish.",
      "en": "Challenge 45: Functional decomposition by isolating private helper methods to maintain clean public APIs.",
      "ru": "Задача 45: Функциональная декомпозиция с вынесением логики в приватные вспомогательные методы."
    },
    "newKnowledgeTags": [
      "private method",
      "decomposition",
      "clean code",
      "helper"
    ],
    "methodSpecs": [
      {
        "name": "validateAmount()",
        "signature": "private boolean validateAmount(double amount)",
        "params": {
          "uz": "<code>double amount</code>",
          "en": "<code>double amount</code>",
          "ru": "<code>double amount</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>amount > 0 && amount <= this.tuitionDue</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>amount > 0 && amount <= this.tuitionDue</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>amount > 0 && amount <= this.tuitionDue</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>amount > 0 && amount <= this.tuitionDue</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>amount > 0 && amount <= this.tuitionDue</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>amount > 0 && amount <= this.tuitionDue</code>."
        }
      },
      {
        "name": "hasFunds()",
        "signature": "private boolean hasFunds(double amount)",
        "params": {
          "uz": "<code>double amount</code>",
          "en": "<code>double amount</code>",
          "ru": "<code>double amount</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.studentBalance >= amount</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.studentBalance >= amount</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.studentBalance >= amount</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.studentBalance >= amount</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.studentBalance >= amount</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.studentBalance >= amount</code>."
        }
      },
      {
        "name": "deduct()",
        "signature": "private void deduct(double amount)",
        "params": {
          "uz": "<code>double amount</code>",
          "en": "<code>double amount</code>",
          "ru": "<code>double amount</code>"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "payTuition()",
        "signature": "public boolean payTuition(double amount)",
        "params": {
          "uz": "<code>double amount</code> (masalan, <code>30000000.0</code>)",
          "en": "<code>double amount</code> (e.g. <code>30000000.0</code>)",
          "ru": "<code>double amount</code> (например, <code>30000000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getTuitionDue()",
        "signature": "public double getTuitionDue()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double tuitionDue</code> maydonining qiymatini return qiladi (masalan, <code>30000000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double tuitionDue</code> (e.g. <code>30000000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double tuitionDue</code> (например, <code>30000000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>tuitionDue</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>tuitionDue</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>tuitionDue</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TuitionGateway",
        "signature": "public TuitionGateway(double studentBalance, double tuitionDue)",
        "params": {
          "uz": "<code>double studentBalance, double tuitionDue</code> (masalan, <code>35000000.0, 30000000.0</code>)",
          "en": "<code>double studentBalance, double tuitionDue</code> (e.g. <code>35000000.0, 30000000.0</code>)",
          "ru": "<code>double studentBalance, double tuitionDue</code> (например, <code>35000000.0, 30000000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.studentBalance = studentBalance;</code> <code>this.tuitionDue = tuitionDue;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.studentBalance = studentBalance;</code> <code>this.tuitionDue = tuitionDue;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.studentBalance = studentBalance;</code> <code>this.tuitionDue = tuitionDue;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`gw` nomli `TuitionGateway` ob'yektini yarating va argument sifatida `35000000.0, 30000000.0` qiymatini bering.",
          "Tegishli `payTuition()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TuitionGateway` object named `gw` and pass argument(s) `35000000.0, 30000000.0`.",
          "Invoke `payTuition()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TuitionGateway` с именем `gw` и передайте аргумент(ы) `35000000.0, 30000000.0`.",
          "Вызовите метод(ы) `payTuition()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "To'lov muvaffaqiyatlimi: true | Qoldiq qarz: 0.0"
    }
  },
  {
    "id": 46,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "46. Uzum Market — Standart Konstruktor: Product() va Boshlang'ich Qiymatlar",
      "en": "46. Uzum Market — Explicit Default Constructor with Business Defaults",
      "ru": "46. Uzum Market — Явный конструктор по умолчанию с бизнес-значениями"
    },
    "scenario": {
      "uz": "Agar sinfda parametrli konstruktor yozilsa, Java avtomatik no-arg konstruktorni yo'qotadi. Aniq 'public Product()' konstruktorini yozib, unda name = \"Noma'lum\", price = 1000.0 boshlang'ich qiymatlarini bering.",
      "en": "Define an explicit default no-arg constructor initializing business defaults: name = 'Noma\\'lum', price = 1000.0.",
      "ru": "Определите явный конструктор без аргументов, инициализирующий бизнес-значения по умолчанию."
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product() {\n        this.name = \"Noma'lum\";\n        this.price = 1000.0;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product();\n        System.out.println(\"Tovar: \" + p.getName() + \" | Narx: \" + p.getPrice());\n    }\n}",
    "expectedOutput": "Tovar: Noma'lum | Narx: 1000.0",
    "newKnowledge": {
      "uz": "46-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 46: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 46: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String name</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code>."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double price</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code>."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Product",
        "signature": "public Product()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "desc": {
          "uz": "Standart parametrsiz konstruktor, barcha xususiy maydonlarni boshlang'ich holatga keltiradi.",
          "en": "Default constructor, initializes private fields to baseline state.",
          "ru": "Конструктор по умолчанию, инициализирует приватные поля."
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`p` nomli `Product` ob'yektini yarating."
        ],
        "en": [
          "Create a `Product` object named `p`."
        ],
        "ru": [
          "Создайте объект `Product` с именем `p`."
        ]
      },
      "expectedOutput": "Tovar: Noma'lum | Narx: 1000.0"
    }
  },
  {
    "id": 47,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "47. Payme — Bitta Parametrli Konstruktor: Wallet(String owner)",
      "en": "47. Payme — Single-Parameter Constructor Initializing Balances",
      "ru": "47. Payme — Конструктор с одним параметром и нулевым балансом"
    },
    "scenario": {
      "uz": "Hamyon ochilganda faqat egasining ismi beriladi, balans esa avtomatik ravishda 0.0 qilib sozlanadi. 'public Wallet(String owner)' konstruktorini yozing.",
      "en": "Single parameter constructor initializes owner and sets default balance to 0.0.",
      "ru": "Конструктор принимает владельца и автоматически устанавливает баланс в 0.0."
    },
    "requirements": {
      "classes": [
        "Wallet",
        "Main"
      ],
      "privateFields": [
        "owner",
        "balance"
      ],
      "methods": [
        "getOwner",
        "getBalance"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Wallet {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Wallet {\n    private String owner;\n    private double balance;\n\n    public Wallet(String owner) {\n        this.owner = owner;\n        this.balance = 0.0;\n    }\n\n    public String getOwner() {\n        return this.owner;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet(\"Nodir\");\n        System.out.println(\"Egasi: \" + w.getOwner() + \" | Balans: \" + w.getBalance());\n    }\n}",
    "expectedOutput": "Egasi: Nodir | Balans: 0.0",
    "newKnowledge": {
      "uz": "47-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 47: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 47: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getOwner()",
        "signature": "public String getOwner()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String owner</code> maydonining qiymatini return qiladi (masalan, <code>\"Nodir\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String owner</code> (e.g. <code>\"Nodir\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String owner</code> (например, <code>\"Nodir\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>owner</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>owner</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>owner</code> без возможности модификации."
        }
      },
      {
        "name": "getBalance()",
        "signature": "public double getBalance()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double balance</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double balance</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double balance</code>."
        },
        "desc": {
          "uz": "Ichki <code>balance</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>balance</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>balance</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Wallet",
        "signature": "public Wallet(String owner)",
        "params": {
          "uz": "<code>String owner</code> (masalan, <code>\"Nodir\"</code>)",
          "en": "<code>String owner</code> (e.g. <code>\"Nodir\"</code>)",
          "ru": "<code>String owner</code> (например, <code>\"Nodir\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.owner = owner;</code> <code>this.balance = 0.0;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.owner = owner;</code> <code>this.balance = 0.0;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.owner = owner;</code> <code>this.balance = 0.0;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`w` nomli `Wallet` ob'yektini yarating va argument sifatida `\"Nodir\"` qiymatini bering."
        ],
        "en": [
          "Create a `Wallet` object named `w` and pass argument(s) `\"Nodir\"`."
        ],
        "ru": [
          "Создайте объект `Wallet` с именем `w` и передайте аргумент(ы) `\"Nodir\"`."
        ]
      },
      "expectedOutput": "Egasi: Nodir | Balans: 0.0"
    }
  },
  {
    "id": 48,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "48. Korzinka — Konstruktorlarni Qayta Yuklash (Overloading: no-arg va full-arg)",
      "en": "48. Korzinka — Constructor Overloading: Default and Full Parameter Sets",
      "ru": "48. Korzinka — Перегрузка конструкторов: без аргументов и полный"
    },
    "scenario": {
      "uz": "Bitta sinfda bir nechta konstruktor bo'lishi mumkin. 'SupermarketItem' sinfida ham parametr qabul qilmaydigan 'SupermarketItem()', ham 'SupermarketItem(String name, double price)' konstruktorlarini yarating.",
      "en": "Implement overloaded constructors: both no-arg and 2-arg constructors in SupermarketItem.",
      "ru": "Создайте перегруженные конструкторы: без аргументов и с двумя параметрами."
    },
    "requirements": {
      "classes": [
        "SupermarketItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "getName",
        "getPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SupermarketItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SupermarketItem {\n    private String name;\n    private double price;\n\n    public SupermarketItem() {\n        this.name = \"Standart Mahsulot\";\n        this.price = 1000.0;\n    }\n\n    public SupermarketItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SupermarketItem i1 = new SupermarketItem();\n        SupermarketItem i2 = new SupermarketItem(\"Non\", 4000.0);\n        System.out.println(\"I1: \" + i1.getName() + \" | I2: \" + i2.getName());\n    }\n}",
    "expectedOutput": "I1: Standart Mahsulot | I2: Non",
    "newKnowledge": {
      "uz": "48-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 48: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 48: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String name</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code>."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double price</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code>."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SupermarketItem",
        "signature": "public SupermarketItem()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "desc": {
          "uz": "Standart parametrsiz konstruktor, barcha xususiy maydonlarni boshlang'ich holatga keltiradi.",
          "en": "Default constructor, initializes private fields to baseline state.",
          "ru": "Конструктор по умолчанию, инициализирует приватные поля."
        }
      },
      {
        "name": "SupermarketItem",
        "signature": "public SupermarketItem(String name, double price)",
        "params": {
          "uz": "<code>String name, double price</code> (masalan, <code>\"Non\", 4000.0</code>)",
          "en": "<code>String name, double price</code> (e.g. <code>\"Non\", 4000.0</code>)",
          "ru": "<code>String name, double price</code> (например, <code>\"Non\", 4000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code> <code>this.price = price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code> <code>this.price = price;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `i1` (boshlang'ich) hamda `i2` (\"Non\", 4000.0)."
        ],
        "en": [
          "Create 2 objects: `i1` (default) and `i2` (\"Non\", 4000.0)."
        ],
        "ru": [
          "Создайте 2 объекта: `i1` (по умолчанию) и `i2` (\"Non\", 4000.0)."
        ]
      },
      "expectedOutput": "I1: Standart Mahsulot | I2: Non"
    }
  },
  {
    "id": 49,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "49. Click — Konstruktor Delegatsiyasi: this(...) Orqali Bog'lash",
      "en": "49. Click — Constructor Delegation Chaining using 'this(...)'",
      "ru": "49. Click — Делегирование конструкторов с помощью 'this(...)'"
    },
    "scenario": {
      "uz": "Takroriy kodning oldini olish (DRY) uchun bitta konstruktor ikkinchisini 'this(...)' orqali chaqirishi mumkin. 1 parametrli konstruktor 2 parametrli konstruktorga 'this(serviceName, 0.0)' deb delegatsiya qilsin.",
      "en": "Prevent code duplication by delegating from single-parameter constructor to two-parameter constructor via 'this(name, 0.0)'.",
      "ru": "Конструктор с одним параметром делегирует вызов полному конструктору через this(serviceName, 0.0)."
    },
    "requirements": {
      "classes": [
        "BillService",
        "Main"
      ],
      "privateFields": [
        "serviceName",
        "fee"
      ],
      "methods": [
        "getServiceName",
        "getFee"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class BillService {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BillService {\n    private String serviceName;\n    private double fee;\n\n    public BillService(String serviceName, double fee) {\n        this.serviceName = serviceName;\n        this.fee = fee;\n    }\n\n    public BillService(String serviceName) {\n        this(serviceName, 0.0);\n    }\n\n    public String getServiceName() {\n        return this.serviceName;\n    }\n\n    public double getFee() {\n        return this.fee;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BillService s = new BillService(\"Kommunal\");\n        System.out.println(\"Xizmat: \" + s.getServiceName() + \" | Komissiya: \" + s.getFee());\n    }\n}",
    "expectedOutput": "Xizmat: Kommunal | Komissiya: 0.0",
    "newKnowledge": {
      "uz": "49-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 49: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 49: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getServiceName()",
        "signature": "public String getServiceName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String serviceName</code> maydonining qiymatini return qiladi (masalan, <code>\"Kommunal\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String serviceName</code> (e.g. <code>\"Kommunal\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String serviceName</code> (например, <code>\"Kommunal\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>serviceName</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>serviceName</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>serviceName</code> без возможности модификации."
        }
      },
      {
        "name": "getFee()",
        "signature": "public double getFee()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double fee</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double fee</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double fee</code>."
        },
        "desc": {
          "uz": "Ichki <code>fee</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>fee</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>fee</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "BillService",
        "signature": "public BillService(String serviceName, double fee)",
        "params": {
          "uz": "<code>String serviceName, double fee</code> (masalan, <code>\"Kommunal\"</code>)",
          "en": "<code>String serviceName, double fee</code> (e.g. <code>\"Kommunal\"</code>)",
          "ru": "<code>String serviceName, double fee</code> (например, <code>\"Kommunal\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.serviceName = serviceName;</code> <code>this.fee = fee;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.serviceName = serviceName;</code> <code>this.fee = fee;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.serviceName = serviceName;</code> <code>this.fee = fee;</code>"
        }
      },
      {
        "name": "BillService",
        "signature": "public BillService(String serviceName)",
        "params": {
          "uz": "<code>String serviceName</code> (masalan, <code>\"Kommunal\"</code>)",
          "en": "<code>String serviceName</code> (e.g. <code>\"Kommunal\"</code>)",
          "ru": "<code>String serviceName</code> (например, <code>\"Kommunal\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametrlarni qabul qilib, ob'yekt holatini o'rnatadi.",
          "en": "Accepts parameters and sets up initial object state.",
          "ru": "Принимает параметры и устанавливает состояние объекта."
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`s` nomli `BillService` ob'yektini yarating va argument sifatida `\"Kommunal\"` qiymatini bering."
        ],
        "en": [
          "Create a `BillService` object named `s` and pass argument(s) `\"Kommunal\"`."
        ],
        "ru": [
          "Создайте объект `BillService` с именем `s` и передайте аргумент(ы) `\"Kommunal\"`."
        ]
      },
      "expectedOutput": "Xizmat: Kommunal | Komissiya: 0.0"
    }
  },
  {
    "id": 50,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "50. Yandex Go — 3 Bosqichli Konstruktorlar Zanjiri (3-Level Chaining)",
      "en": "50. Yandex Go — 3-Tier Constructor Telescoping Chain",
      "ru": "50. Yandex Go — 3-уровневая цепочка конструкторов"
    },
    "scenario": {
      "uz": "3 ta konstruktor: no-arg -> 1-arg -> 2-arg zanjiri. No-arg konstruktor 'this(\"Standart\")' ni, u esa 'this(model, 1.0)' ni chaqirsin.",
      "en": "Chain 3 constructors telescopically: no-arg calls 1-arg, which calls 2-arg constructor.",
      "ru": "Реализуйте цепочку из 3 конструкторов: без аргументов вызывает с одним, тот вызывает с двумя."
    },
    "requirements": {
      "classes": [
        "TaxiTier",
        "Main"
      ],
      "privateFields": [
        "model",
        "rateMultiplier"
      ],
      "methods": [
        "getModel",
        "getRateMultiplier"
      ],
      "keywords": [
        "this"
      ]
    },
    "starterCode": "class TaxiTier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TaxiTier {\n    private String model;\n    private double rateMultiplier;\n\n    public TaxiTier() {\n        this(\"Standart\");\n    }\n\n    public TaxiTier(String model) {\n        this(model, 1.0);\n    }\n\n    public TaxiTier(String model, double rateMultiplier) {\n        this.model = model;\n        this.rateMultiplier = rateMultiplier;\n    }\n\n    public String getModel() {\n        return this.model;\n    }\n\n    public double getRateMultiplier() {\n        return this.rateMultiplier;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiTier t = new TaxiTier();\n        System.out.println(\"Model: \" + t.getModel() + \" | Multiplier: \" + t.getRateMultiplier());\n    }\n}",
    "expectedOutput": "Model: Standart | Multiplier: 1.0",
    "newKnowledge": {
      "uz": "50-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 50: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 50: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getModel()",
        "signature": "public String getModel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String model</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String model</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String model</code>."
        },
        "desc": {
          "uz": "Ichki <code>model</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>model</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>model</code> без возможности модификации."
        }
      },
      {
        "name": "getRateMultiplier()",
        "signature": "public double getRateMultiplier()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double rateMultiplier</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double rateMultiplier</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double rateMultiplier</code>."
        },
        "desc": {
          "uz": "Ichki <code>rateMultiplier</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>rateMultiplier</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>rateMultiplier</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TaxiTier",
        "signature": "public TaxiTier()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "desc": {
          "uz": "Standart parametrsiz konstruktor, barcha xususiy maydonlarni boshlang'ich holatga keltiradi.",
          "en": "Default constructor, initializes private fields to baseline state.",
          "ru": "Конструктор по умолчанию, инициализирует приватные поля."
        }
      },
      {
        "name": "TaxiTier",
        "signature": "public TaxiTier(String model)",
        "params": {
          "uz": "<code>String model</code>",
          "en": "<code>String model</code>",
          "ru": "<code>String model</code>"
        },
        "desc": {
          "uz": "Kiruvchi parametrlarni qabul qilib, ob'yekt holatini o'rnatadi.",
          "en": "Accepts parameters and sets up initial object state.",
          "ru": "Принимает параметры и устанавливает состояние объекта."
        }
      },
      {
        "name": "TaxiTier",
        "signature": "public TaxiTier(String model, double rateMultiplier)",
        "params": {
          "uz": "<code>String model, double rateMultiplier</code>",
          "en": "<code>String model, double rateMultiplier</code>",
          "ru": "<code>String model, double rateMultiplier</code>"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.model = model;</code> <code>this.rateMultiplier = rateMultiplier;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.model = model;</code> <code>this.rateMultiplier = rateMultiplier;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.model = model;</code> <code>this.rateMultiplier = rateMultiplier;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`t` nomli `TaxiTier` ob'yektini yarating."
        ],
        "en": [
          "Create a `TaxiTier` object named `t`."
        ],
        "ru": [
          "Создайте объект `TaxiTier` с именем `t`."
        ]
      },
      "expectedOutput": "Model: Standart | Multiplier: 1.0"
    }
  },
  {
    "id": 51,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "51. Safia — Konstruktorda Qiymat Validatsiyasi (Noto'g'ri Ob'yekt Yaratilishidan Himoya)",
      "en": "51. Safia — Constructor Parameter Validation Against Invalid Instantiation",
      "ru": "51. Safia — Валидация параметров в конструкторе для защиты инвариантов"
    },
    "scenario": {
      "uz": "Ob'yekt yaratilayotgandayoq noto'g'ri holatga tushib qolmasligi shart. Agar tort og'irligi ('weightKg <= 0') bo'lsa, konstruktorda IllegalArgumentException oting.",
      "en": "Prevent invalid object instantiation by throwing IllegalArgumentException if weightKg <= 0 in constructor.",
      "ru": "Конструктор защищает инвариант, выбрасывая IllegalArgumentException при weightKg <= 0."
    },
    "requirements": {
      "classes": [
        "CakeOrder",
        "Main"
      ],
      "privateFields": [
        "weightKg"
      ],
      "methods": [
        "getWeightKg"
      ],
      "keywords": [
        "throw",
        "IllegalArgumentException",
        "this"
      ]
    },
    "starterCode": "class CakeOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CakeOrder {\n    private double weightKg;\n\n    public CakeOrder(double weightKg) {\n        if (weightKg <= 0.0) {\n            throw new IllegalArgumentException(\"Vazn musbat bo'lishi shart\");\n        }\n        this.weightKg = weightKg;\n    }\n\n    public double getWeightKg() {\n        return this.weightKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        try {\n            CakeOrder bad = new CakeOrder(-2.5);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Ushlandi: \" + e.getMessage());\n        }\n        CakeOrder good = new CakeOrder(1.8);\n        System.out.println(\"Og'irlik: \" + good.getWeightKg() + \" kg\");\n    }\n}",
    "expectedOutput": "Ushlandi: Vazn musbat bo'lishi shart\nOg'irlik: 1.8 kg",
    "newKnowledge": {
      "uz": "51-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 51: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 51: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getWeightKg()",
        "signature": "public double getWeightKg()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double weightKg</code> maydonining qiymatini return qiladi (masalan, <code>-2.5</code>).",
          "en": "<code>double</code>: returns the value of <code>private double weightKg</code> (e.g. <code>-2.5</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double weightKg</code> (например, <code>-2.5</code>)."
        },
        "desc": {
          "uz": "Ichki <code>weightKg</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>weightKg</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>weightKg</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CakeOrder",
        "signature": "public CakeOrder(double weightKg)",
        "params": {
          "uz": "<code>double weightKg</code> (masalan, <code>-2.5</code>)",
          "en": "<code>double weightKg</code> (e.g. <code>-2.5</code>)",
          "ru": "<code>double weightKg</code> (например, <code>-2.5</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.weightKg = weightKg;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.weightKg = weightKg;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.weightKg = weightKg;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `bad` (-2.5) hamda `good` (1.8)."
        ],
        "en": [
          "Create 2 objects: `bad` (-2.5) and `good` (1.8)."
        ],
        "ru": [
          "Создайте 2 объекта: `bad` (-2.5) и `good` (1.8)."
        ]
      },
      "expectedOutput": "Ushlandi: Vazn musbat bo'lishi shart\nOg'irlik: 1.8 kg"
    }
  },
  {
    "id": 52,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "52. Texnomart — Konstruktorda Himoyaviy Tozalash (Defensive Sanitization)",
      "en": "52. Texnomart — Defensive Argument Sanitization Inside Constructor",
      "ru": "52. Texnomart — Защитная санитизация аргументов в конструкторе"
    },
    "scenario": {
      "uz": "Konstruktorga berilgan 'serialNumber' null bo'lsa uni \"UNASSIGNED\" ga, aks holda probellarini tozalab (trim()) saqlang.",
      "en": "Constructor defensively sanitizes input: converts null to 'UNASSIGNED' and trims whitespace.",
      "ru": "Конструктор защитно обрабатывает null, заменяя на 'UNASSIGNED', и обрезает пробелы."
    },
    "requirements": {
      "classes": [
        "DeviceSerial",
        "Main"
      ],
      "privateFields": [
        "serialNumber"
      ],
      "methods": [
        "getSerialNumber"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class DeviceSerial {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DeviceSerial {\n    private String serialNumber;\n\n    public DeviceSerial(String serialNumber) {\n        if (serialNumber == null || serialNumber.trim().isEmpty()) {\n            this.serialNumber = \"UNASSIGNED\";\n        } else {\n            this.serialNumber = serialNumber.trim();\n        }\n    }\n\n    public String getSerialNumber() {\n        return this.serialNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeviceSerial d1 = new DeviceSerial(null);\n        DeviceSerial d2 = new DeviceSerial(\"  SN-9988-UZ  \");\n        System.out.println(\"D1: \" + d1.getSerialNumber() + \" | D2: \" + d2.getSerialNumber());\n    }\n}",
    "expectedOutput": "D1: UNASSIGNED | D2: SN-9988-UZ",
    "newKnowledge": {
      "uz": "52-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 52: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 52: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getSerialNumber()",
        "signature": "public String getSerialNumber()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String serialNumber</code> maydonining qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>String</code>: returns the value of <code>private String serialNumber</code> (e.g. <code>null</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String serialNumber</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "Ichki <code>serialNumber</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>serialNumber</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>serialNumber</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "DeviceSerial",
        "signature": "public DeviceSerial(String serialNumber)",
        "params": {
          "uz": "<code>String serialNumber</code> (masalan, <code>null</code>)",
          "en": "<code>String serialNumber</code> (e.g. <code>null</code>)",
          "ru": "<code>String serialNumber</code> (например, <code>null</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.serialNumber = = null || serialNumber.trim().isEmpty()) {\n            this.serialNumber = \"UNASSIGNED\";</code> <code>this.serialNumber = serialNumber.trim();</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.serialNumber = = null || serialNumber.trim().isEmpty()) {\n            this.serialNumber = \"UNASSIGNED\";</code> <code>this.serialNumber = serialNumber.trim();</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.serialNumber = = null || serialNumber.trim().isEmpty()) {\n            this.serialNumber = \"UNASSIGNED\";</code> <code>this.serialNumber = serialNumber.trim();</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `d1` (null) hamda `d2` (\"  SN-9988-UZ  \")."
        ],
        "en": [
          "Create 2 objects: `d1` (null) and `d2` (\"  SN-9988-UZ  \")."
        ],
        "ru": [
          "Создайте 2 объекта: `d1` (null) и `d2` (\"  SN-9988-UZ  \")."
        ]
      },
      "expectedOutput": "D1: UNASSIGNED | D2: SN-9988-UZ"
    }
  },
  {
    "id": 53,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "53. Dodo Pizza — Konstruktor Ichidan Setterlarni Chaqirish (DRY Tamoyili)",
      "en": "53. Dodo Pizza — DRY Invariant Validation via Internal Setter Delegation",
      "ru": "53. Dodo Pizza — Вызов сеттеров из конструктора для устранения дублирования"
    },
    "scenario": {
      "uz": "WIUT Seminar 2 eng yaxshi amaliyoti: Validatsiya qoidalarini konstruktor va setterda alohida takrorlamaslik uchun, konstruktor ichidan 'setName(name)' va 'setPrice(price)' setterlarini chaqiring.",
      "en": "WIUT Seminar 2 best practice: prevent duplication by delegating initialization to guarded setters.",
      "ru": "Практика семинара WIUT: делегируйте инициализацию сеттерам, чтобы не дублировать валидацию."
    },
    "requirements": {
      "classes": [
        "PizzaItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price"
      ],
      "methods": [
        "setName",
        "getName",
        "setPrice",
        "getPrice"
      ],
      "keywords": [
        "this",
        "setName",
        "setPrice"
      ]
    },
    "starterCode": "class PizzaItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PizzaItem {\n    private String name;\n    private double price;\n\n    public PizzaItem(String name, double price) {\n        setName(name);\n        setPrice(price);\n    }\n\n    public void setName(String name) {\n        this.name = (name != null) ? name.trim() : \"Noma'lum\";\n    }\n\n    public void setPrice(double price) {\n        this.price = (price > 0) ? price : 10000.0;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaItem p = new PizzaItem(\"Margarita\", 55000.0);\n        System.out.println(\"Pitsa: \" + p.getName() + \" | Narx: \" + p.getPrice());\n    }\n}",
    "expectedOutput": "Pitsa: Margarita | Narx: 55000.0",
    "newKnowledge": {
      "uz": "53-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 53: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 53: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "setName()",
        "signature": "public void setName(String name)",
        "params": {
          "uz": "<code>String name</code>",
          "en": "<code>String name</code>",
          "ru": "<code>String name</code>"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>name</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>name</code> qiymatini return qiladi (masalan, <code>\"Margarita\"</code>).",
          "en": "<code>void</code>: returns safe default if <code>name</code> is null, otherwise returns <code>name</code> (e.g. <code>\"Margarita\"</code>).",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>name</code> null, иначе <code>name</code> (например, <code>\"Margarita\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "setPrice()",
        "signature": "public void setPrice(double price)",
        "params": {
          "uz": "<code>double price</code>",
          "en": "<code>double price</code>",
          "ru": "<code>double price</code>"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi (masalan, <code>\"Margarita\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String name</code> (e.g. <code>\"Margarita\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code> (например, <code>\"Margarita\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>55000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>55000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>55000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PizzaItem",
        "signature": "public PizzaItem(String name, double price)",
        "params": {
          "uz": "<code>String name, double price</code> (masalan, <code>\"Margarita\", 55000.0</code>)",
          "en": "<code>String name, double price</code> (e.g. <code>\"Margarita\", 55000.0</code>)",
          "ru": "<code>String name, double price</code> (например, <code>\"Margarita\", 55000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametrlarni qabul qilib, ob'yekt holatini o'rnatadi.",
          "en": "Accepts parameters and sets up initial object state.",
          "ru": "Принимает параметры и устанавливает состояние объекта."
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`p` nomli `PizzaItem` ob'yektini yarating va argument sifatida `\"Margarita\", 55000.0` qiymatini bering."
        ],
        "en": [
          "Create a `PizzaItem` object named `p` and pass argument(s) `\"Margarita\", 55000.0`."
        ],
        "ru": [
          "Создайте объект `PizzaItem` с именем `p` и передайте аргумент(ы) `\"Margarita\", 55000.0`."
        ]
      },
      "expectedOutput": "Pitsa: Margarita | Narx: 55000.0"
    }
  },
  {
    "id": 54,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "54. Asaxiy — Nusxa Oluvchi Konstruktor (Copy Constructor)",
      "en": "54. Asaxiy — Deep Copy Constructor for Entity Cloning",
      "ru": "54. Asaxiy — Конструктор копирования (Copy Constructor)"
    },
    "scenario": {
      "uz": "Mavjud kitob nusxasidan yangi mustaqil ob'yekt yaratish uchun 'public Book(Book other)' nusxa konstruktorini yozing. Yangi kitob o'zgartirilganda eski kitobga ta'sir qilmasligi kerak.",
      "en": "Implement copy constructor 'Book(Book other)' that creates an independent clone.",
      "ru": "Создайте конструктор копирования Book(Book other), создающий независимый клон."
    },
    "requirements": {
      "classes": [
        "Book",
        "Main"
      ],
      "privateFields": [
        "title",
        "price"
      ],
      "methods": [
        "getTitle",
        "getPrice",
        "setPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Book {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Book {\n    private String title;\n    private double price;\n\n    public Book(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n\n    public Book(Book other) {\n        if (other != null) {\n            this.title = other.title;\n            this.price = other.price;\n        }\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n\n    public String getTitle() {\n        return this.title;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book b1 = new Book(\"O'tkan Kunlar\", 45000.0);\n        Book b2 = new Book(b1);\n        b2.setPrice(50000.0);\n        System.out.println(\"B1 narxi: \" + b1.getPrice() + \" | B2 narxi: \" + b2.getPrice());\n    }\n}",
    "expectedOutput": "B1 narxi: 45000.0 | B2 narxi: 50000.0",
    "newKnowledge": {
      "uz": "54-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 54: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 54: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "setPrice()",
        "signature": "public void setPrice(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>50000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>50000.0</code>)",
          "ru": "<code>double price</code> (например, <code>50000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>price</code> qiymatini qabul qilib, <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>price</code> and sets <code>this.price = price;</code>.",
          "ru": "Принимает <code>price</code> и обновляет <code>this.price = price;</code>."
        }
      },
      {
        "name": "getTitle()",
        "signature": "public String getTitle()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String title</code> maydonining qiymatini return qiladi (masalan, <code>\"O'tkan Kunlar\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String title</code> (e.g. <code>\"O'tkan Kunlar\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String title</code> (например, <code>\"O'tkan Kunlar\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>title</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>title</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>title</code> без возможности модификации."
        }
      },
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>45000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>45000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>45000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Book",
        "signature": "public Book(String title, double price)",
        "params": {
          "uz": "<code>String title, double price</code> (masalan, <code>\"O'tkan Kunlar\", 45000.0</code>)",
          "en": "<code>String title, double price</code> (e.g. <code>\"O'tkan Kunlar\", 45000.0</code>)",
          "ru": "<code>String title, double price</code> (например, <code>\"O'tkan Kunlar\", 45000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.title = title;</code> <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.title = title;</code> <code>this.price = price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.title = title;</code> <code>this.price = price;</code>"
        }
      },
      {
        "name": "Book",
        "signature": "public Book(Book other)",
        "params": {
          "uz": "<code>Book other</code> (masalan, <code>\"O'tkan Kunlar\", 45000.0</code>)",
          "en": "<code>Book other</code> (e.g. <code>\"O'tkan Kunlar\", 45000.0</code>)",
          "ru": "<code>Book other</code> (например, <code>\"O'tkan Kunlar\", 45000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.title = other.title;</code> <code>this.price = other.price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.title = other.title;</code> <code>this.price = other.price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.title = other.title;</code> <code>this.price = other.price;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `b1` (\"O'tkan Kunlar\", 45000.0) hamda `b2` (b1).",
          "Tegishli `setPrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `b1` (\"O'tkan Kunlar\", 45000.0) and `b2` (b1).",
          "Invoke `setPrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `b1` (\"O'tkan Kunlar\", 45000.0) и `b2` (b1).",
          "Вызовите метод(ы) `setPrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "B1 narxi: 45000.0 | B2 narxi: 50000.0"
    }
  },
  {
    "id": 55,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "55. Medion — Avtomatik Inkapsulyatsiya Qilingan Statik ID Generatori",
      "en": "55. Medion — Auto-Incrementing Unique ID Generation in Constructor",
      "ru": "55. Medion — Автоинкремент уникального ID в конструкторе"
    },
    "scenario": {
      "uz": "Har bir yangi bemor ro'yxatga olinganda unga avtomatik takrorlanmas ID berilishi shart. Sinfda 'private static int nextId = 1000' saqlansin va konstruktorda 'this.patientId = nextId++' qilinsin.",
      "en": "Auto-generate sequential IDs via 'private static int nextId = 1000;' and 'this.id = nextId++;'.",
      "ru": "Автоинкремент ID пациента в конструкторе с помощью приватного статического счетчика nextId."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "Main"
      ],
      "privateFields": [
        "patientId",
        "name"
      ],
      "methods": [
        "getPatientId",
        "getName"
      ],
      "keywords": [
        "static",
        "this"
      ]
    },
    "starterCode": "class PatientRecord {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PatientRecord {\n    private static int nextId = 1000;\n    private int patientId;\n    private String name;\n\n    public PatientRecord(String name) {\n        this.patientId = nextId++;\n        this.name = name;\n    }\n\n    public int getPatientId() {\n        return this.patientId;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord p1 = new PatientRecord(\"Anvar\");\n        PatientRecord p2 = new PatientRecord(\"Malika\");\n        System.out.println(\"P1 ID: \" + p1.getPatientId() + \" | P2 ID: \" + p2.getPatientId());\n    }\n}",
    "expectedOutput": "P1 ID: 1000 | P2 ID: 1001",
    "newKnowledge": {
      "uz": "55-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 55: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 55: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getPatientId()",
        "signature": "public int getPatientId()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int patientId</code> maydonining qiymatini return qiladi.",
          "en": "<code>int</code>: returns the value of <code>private int patientId</code>.",
          "ru": "<code>int</code>: возвращает значение поля <code>private int patientId</code>."
        },
        "desc": {
          "uz": "Ichki <code>patientId</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>patientId</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>patientId</code> без возможности модификации."
        }
      },
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi (masalan, <code>\"Anvar\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String name</code> (e.g. <code>\"Anvar\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code> (например, <code>\"Anvar\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PatientRecord",
        "signature": "public PatientRecord(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"Anvar\"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"Anvar\"</code>)",
          "ru": "<code>String name</code> (например, <code>\"Anvar\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.patientId = nextId++;</code> <code>this.name = name;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.patientId = nextId++;</code> <code>this.name = name;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.patientId = nextId++;</code> <code>this.name = name;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `p1` (\"Anvar\") hamda `p2` (\"Malika\")."
        ],
        "en": [
          "Create 2 objects: `p1` (\"Anvar\") and `p2` (\"Malika\")."
        ],
        "ru": [
          "Создайте 2 объекта: `p1` (\"Anvar\") и `p2` (\"Malika\")."
        ]
      },
      "expectedOutput": "P1 ID: 1000 | P2 ID: 1001"
    }
  },
  {
    "id": 56,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "56. Express24 — Matnni Qismlarga Ajratuvchi Konstruktor (Parsing Constructor)",
      "en": "56. Express24 — CSV String Parsing Constructor",
      "ru": "56. Express24 — Конструктор с парсингом строки формата CSV"
    },
    "scenario": {
      "uz": "Kuryerga manzil bitta CSV matnida keladi: \"Toshkent,Chilonzor,12\". 'public CourierLocation(String csv)' konstruktori 'csv.split(\",\")' qilib city, district va building maydonlarini to'ldirsin.",
      "en": "Constructor parses comma-separated string 'city,district,building' into internal state.",
      "ru": "Конструктор разбирает CSV-строку и инициализирует поля города, района и здания."
    },
    "requirements": {
      "classes": [
        "CourierLocation",
        "Main"
      ],
      "privateFields": [
        "city",
        "district",
        "building"
      ],
      "methods": [
        "getCity",
        "getDistrict",
        "getBuilding"
      ],
      "keywords": [
        "split",
        "this"
      ]
    },
    "starterCode": "class CourierLocation {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CourierLocation {\n    private String city;\n    private String district;\n    private String building;\n\n    public CourierLocation(String csv) {\n        if (csv != null) {\n            String[] parts = csv.split(\",\");\n            if (parts.length >= 3) {\n                this.city = parts[0].trim();\n                this.district = parts[1].trim();\n                this.building = parts[2].trim();\n            }\n        }\n    }\n\n    public String getCity() { return this.city; }\n    public String getDistrict() { return this.district; }\n    public String getBuilding() { return this.building; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierLocation loc = new CourierLocation(\"Toshkent,Chilonzor,12\");\n        System.out.println(\"Shahar: \" + loc.getCity() + \" | Tuman: \" + loc.getDistrict() + \" | Bino: \" + loc.getBuilding());\n    }\n}",
    "expectedOutput": "Shahar: Toshkent | Tuman: Chilonzor | Bino: 12",
    "newKnowledge": {
      "uz": "56-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 56: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 56: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getCity()",
        "signature": "public String getCity()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String city</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String city</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String city</code>."
        },
        "desc": {
          "uz": "Ichki <code>city</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>city</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>city</code> без возможности модификации."
        }
      },
      {
        "name": "getDistrict()",
        "signature": "public String getDistrict()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String district</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String district</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String district</code>."
        },
        "desc": {
          "uz": "Ichki <code>district</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>district</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>district</code> без возможности модификации."
        }
      },
      {
        "name": "getBuilding()",
        "signature": "public String getBuilding()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String building</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String building</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String building</code>."
        },
        "desc": {
          "uz": "Ichki <code>building</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>building</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>building</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CourierLocation",
        "signature": "public CourierLocation(String csv)",
        "params": {
          "uz": "<code>String csv</code> (masalan, <code>\"Toshkent,Chilonzor,12\"</code>)",
          "en": "<code>String csv</code> (e.g. <code>\"Toshkent,Chilonzor,12\"</code>)",
          "ru": "<code>String csv</code> (например, <code>\"Toshkent,Chilonzor,12\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.parts = csv.split(\",\");</code> <code>this.city = parts[0].trim();</code> <code>this.district = parts[1].trim();</code> <code>this.building = parts[2].trim();</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.parts = csv.split(\",\");</code> <code>this.city = parts[0].trim();</code> <code>this.district = parts[1].trim();</code> <code>this.building = parts[2].trim();</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.parts = csv.split(\",\");</code> <code>this.city = parts[0].trim();</code> <code>this.district = parts[1].trim();</code> <code>this.building = parts[2].trim();</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`loc` nomli `CourierLocation` ob'yektini yarating va argument sifatida `\"Toshkent,Chilonzor,12\"` qiymatini bering."
        ],
        "en": [
          "Create a `CourierLocation` object named `loc` and pass argument(s) `\"Toshkent,Chilonzor,12\"`."
        ],
        "ru": [
          "Создайте объект `CourierLocation` с именем `loc` и передайте аргумент(ы) `\"Toshkent,Chilonzor,12\"`."
        ]
      },
      "expectedOutput": "Shahar: Toshkent | Tuman: Chilonzor | Bino: 12"
    }
  },
  {
    "id": 57,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "57. Kapitalbank — O'zaro Bog'liq Parametrlarni Konstruktorda Tekshirish",
      "en": "57. Kapitalbank — Inter-Parameter Cross-Validation in Constructor",
      "ru": "57. Kapitalbank — Перекрестная валидация параметров в конструкторе"
    },
    "scenario": {
      "uz": "Kredit shartnomasida 'minAmount' har doim 'maxAmount' dan kichik yoki teng bo'lishi shart. Agar 'minAmount > maxAmount' bo'lsa, konstruktorda IllegalArgumentException oting.",
      "en": "Constructor validates inter-parameter relation: throws IllegalArgumentException if minAmount > maxAmount.",
      "ru": "Конструктор проверяет взаимное соотношение параметров: minAmount <= maxAmount."
    },
    "requirements": {
      "classes": [
        "CreditRange",
        "Main"
      ],
      "privateFields": [
        "minAmount",
        "maxAmount"
      ],
      "methods": [
        "getMinAmount",
        "getMaxAmount"
      ],
      "keywords": [
        "throw",
        "IllegalArgumentException",
        "this"
      ]
    },
    "starterCode": "class CreditRange {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CreditRange {\n    private double minAmount;\n    private double maxAmount;\n\n    public CreditRange(double minAmount, double maxAmount) {\n        if (minAmount > maxAmount) {\n            throw new IllegalArgumentException(\"Min summa Max summadan katta bo'lishi mumkin emas\");\n        }\n        this.minAmount = minAmount;\n        this.maxAmount = maxAmount;\n    }\n\n    public double getMinAmount() { return this.minAmount; }\n    public double getMaxAmount() { return this.maxAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        try {\n            CreditRange bad = new CreditRange(5000000.0, 1000000.0);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Ushlandi: \" + e.getMessage());\n        }\n        CreditRange good = new CreditRange(1000000.0, 10000000.0);\n        System.out.println(\"Min: \" + good.getMinAmount() + \" | Max: \" + good.getMaxAmount());\n    }\n}",
    "expectedOutput": "Ushlandi: Min summa Max summadan katta bo'lishi mumkin emas\nMin: 1000000.0 | Max: 10000000.0",
    "newKnowledge": {
      "uz": "57-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 57: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 57: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getMinAmount()",
        "signature": "public double getMinAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double minAmount</code> maydonining qiymatini return qiladi (masalan, <code>5000000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double minAmount</code> (e.g. <code>5000000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double minAmount</code> (например, <code>5000000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>minAmount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>minAmount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>minAmount</code> без возможности модификации."
        }
      },
      {
        "name": "getMaxAmount()",
        "signature": "public double getMaxAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double maxAmount</code> maydonining qiymatini return qiladi (masalan, <code>1000000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double maxAmount</code> (e.g. <code>1000000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double maxAmount</code> (например, <code>1000000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>maxAmount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>maxAmount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>maxAmount</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CreditRange",
        "signature": "public CreditRange(double minAmount, double maxAmount)",
        "params": {
          "uz": "<code>double minAmount, double maxAmount</code> (masalan, <code>5000000.0, 1000000.0</code>)",
          "en": "<code>double minAmount, double maxAmount</code> (e.g. <code>5000000.0, 1000000.0</code>)",
          "ru": "<code>double minAmount, double maxAmount</code> (например, <code>5000000.0, 1000000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.minAmount = minAmount;</code> <code>this.maxAmount = maxAmount;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.minAmount = minAmount;</code> <code>this.maxAmount = maxAmount;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.minAmount = minAmount;</code> <code>this.maxAmount = maxAmount;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `bad` (5000000.0, 1000000.0) hamda `good` (1000000.0, 10000000.0)."
        ],
        "en": [
          "Create 2 objects: `bad` (5000000.0, 1000000.0) and `good` (1000000.0, 10000000.0)."
        ],
        "ru": [
          "Создайте 2 объекта: `bad` (5000000.0, 1000000.0) и `good` (1000000.0, 10000000.0)."
        ]
      },
      "expectedOutput": "Ushlandi: Min summa Max summadan katta bo'lishi mumkin emas\nMin: 1000000.0 | Max: 10000000.0"
    }
  },
  {
    "id": 58,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "58. Beeline — Konstruktorda Hosilaviy final Maydonni Hisoblab Saqlash",
      "en": "58. Beeline — Precomputing Immutable Derived Fields in Constructor",
      "ru": "58. Beeline — Предвычисление неизменяемых производных полей в конструкторе"
    },
    "scenario": {
      "uz": "Tezkor qidiruv uchun konstruktorga 'firstName' va 'lastName' berilganda, 'private final String searchKey' maydoni konstruktor ichida darhol 'Aliyev_A' ko'rinishida generatsiya qilinadi.",
      "en": "Precompute and seal 'private final String searchKey' inside the constructor for fast lookups.",
      "ru": "Предвычислите и зафиксируйте приватное финальное поле searchKey в конструкторе."
    },
    "requirements": {
      "classes": [
        "SubscriberKey",
        "Main"
      ],
      "privateFields": [
        "firstName",
        "lastName",
        "searchKey"
      ],
      "methods": [
        "getSearchKey"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class SubscriberKey {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SubscriberKey {\n    private final String firstName;\n    private final String lastName;\n    private final String searchKey;\n\n    public SubscriberKey(String firstName, String lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        char initial = (firstName != null && !firstName.isEmpty()) ? firstName.charAt(0) : 'X';\n        this.searchKey = (lastName != null ? lastName : \"\") + \"_\" + initial;\n    }\n\n    public String getSearchKey() {\n        return this.searchKey;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriberKey sub = new SubscriberKey(\"Jasur\", \"Rahmatov\");\n        System.out.println(\"Qidiruv kaliti: \" + sub.getSearchKey());\n    }\n}",
    "expectedOutput": "Qidiruv kaliti: Rahmatov_J",
    "newKnowledge": {
      "uz": "58-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 58: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 58: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getSearchKey()",
        "signature": "public String getSearchKey()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String searchKey</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String searchKey</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String searchKey</code>."
        },
        "desc": {
          "uz": "Ichki <code>searchKey</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>searchKey</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>searchKey</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SubscriberKey",
        "signature": "public SubscriberKey(String firstName, String lastName)",
        "params": {
          "uz": "<code>String firstName, String lastName</code> (masalan, <code>\"Jasur\", \"Rahmatov\"</code>)",
          "en": "<code>String firstName, String lastName</code> (e.g. <code>\"Jasur\", \"Rahmatov\"</code>)",
          "ru": "<code>String firstName, String lastName</code> (например, <code>\"Jasur\", \"Rahmatov\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code> <code>this.initial = (firstName != null && !firstName.isEmpty()) ? firstName.charAt(0) : 'X';</code> <code>this.searchKey = (lastName != null ? lastName : \"\") + \"_\" + initial;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code> <code>this.initial = (firstName != null && !firstName.isEmpty()) ? firstName.charAt(0) : 'X';</code> <code>this.searchKey = (lastName != null ? lastName : \"\") + \"_\" + initial;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.firstName = firstName;</code> <code>this.lastName = lastName;</code> <code>this.initial = (firstName != null && !firstName.isEmpty()) ? firstName.charAt(0) : 'X';</code> <code>this.searchKey = (lastName != null ? lastName : \"\") + \"_\" + initial;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`sub` nomli `SubscriberKey` ob'yektini yarating va argument sifatida `\"Jasur\", \"Rahmatov\"` qiymatini bering."
        ],
        "en": [
          "Create a `SubscriberKey` object named `sub` and pass argument(s) `\"Jasur\", \"Rahmatov\"`."
        ],
        "ru": [
          "Создайте объект `SubscriberKey` с именем `sub` и передайте аргумент(ы) `\"Jasur\", \"Rahmatov\"`."
        ]
      },
      "expectedOutput": "Qidiruv kaliti: Rahmatov_J"
    }
  },
  {
    "id": 59,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "59. UzAirways — Paket Ichidagi (Package-Private) Konstruktor va Factory Metodi",
      "en": "59. UzAirways — Package-Private Constructor with Static Factory Method",
      "ru": "59. UzAirways — Пакетно-приватный конструктор и фабричный метод"
    },
    "scenario": {
      "uz": "Tashqaridan new bilan to'g'ridan-to'g'ri yaratishni cheklab, nazorat ostida yaratish uchun konstruktorni package-private qiling va faqat 'public static FlightPass of(String code)' statik fabrika metodi orqali ob'yekt yarating.",
      "en": "Encapsulate instantiation behind static factory method 'FlightPass.of(code)' with package-private constructor.",
      "ru": "Ограничьте создание экземпляров с помощью статического фабричного метода of(code)."
    },
    "requirements": {
      "classes": [
        "FlightPass",
        "Main"
      ],
      "privateFields": [
        "boardingCode"
      ],
      "methods": [
        "getBoardingCode"
      ],
      "keywords": [
        "static",
        "this"
      ]
    },
    "starterCode": "class FlightPass {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FlightPass {\n    private String boardingCode;\n\n    FlightPass(String boardingCode) {\n        this.boardingCode = boardingCode;\n    }\n\n    public static FlightPass of(String code) {\n        if (code == null || !code.startsWith(\"HY-\")) {\n            throw new IllegalArgumentException(\"Yaroqsiz parvoz kodi\");\n        }\n        return new FlightPass(code);\n    }\n\n    public String getBoardingCode() {\n        return this.boardingCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightPass pass = FlightPass.of(\"HY-051-A\");\n        System.out.println(\"Pasadka kodi: \" + pass.getBoardingCode());\n    }\n}",
    "expectedOutput": "Pasadka kodi: HY-051-A",
    "newKnowledge": {
      "uz": "59-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 59: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 59: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "of()",
        "signature": "public static FlightPass of(String code)",
        "params": {
          "uz": "<code>String code</code> (masalan, <code>\"HY-051-A\"</code>)",
          "en": "<code>String code</code> (e.g. <code>\"HY-051-A\"</code>)",
          "ru": "<code>String code</code> (например, <code>\"HY-051-A\"</code>)"
        },
        "returns": {
          "uz": "<code>FlightPass</code>: agar <code>qiymat</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>qiymat</code> qiymatini return qiladi.",
          "en": "<code>FlightPass</code>: returns safe default if <code>qiymat</code> is null, otherwise returns <code>qiymat</code>.",
          "ru": "<code>FlightPass</code>: возвращает безопасное значение если <code>qiymat</code> null, иначе <code>qiymat</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "getBoardingCode()",
        "signature": "public String getBoardingCode()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String boardingCode</code> maydonining qiymatini return qiladi (masalan, <code>code</code>).",
          "en": "<code>String</code>: returns the value of <code>private String boardingCode</code> (e.g. <code>code</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String boardingCode</code> (например, <code>code</code>)."
        },
        "desc": {
          "uz": "Ichki <code>boardingCode</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>boardingCode</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>boardingCode</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "FlightPass",
        "signature": "public FlightPass(String boardingCode)",
        "params": {
          "uz": "<code>String boardingCode</code> (masalan, <code>code</code>)",
          "en": "<code>String boardingCode</code> (e.g. <code>code</code>)",
          "ru": "<code>String boardingCode</code> (например, <code>code</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.boardingCode = boardingCode;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.boardingCode = boardingCode;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.boardingCode = boardingCode;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`pass` nomli `FlightPass` ob'yektini yarating va argument sifatida `\"HY-051-A\"` qiymatini bering."
        ],
        "en": [
          "Create a `FlightPass` object named `pass` and pass argument(s) `\"HY-051-A\"`."
        ],
        "ru": [
          "Создайте объект `FlightPass` с именем `pass` и передайте аргумент(ы) `\"HY-051-A\"`."
        ]
      },
      "expectedOutput": "Pasadka kodi: HY-051-A"
    }
  },
  {
    "id": 60,
    "tier": 4,
    "tierName": "4-Bosqich: Konstruktorlar Asoslari va Ob'yekt Initsializatsiyasi",
    "sector": "46-60: Constructors & Initialization",
    "title": {
      "uz": "60. WIUT SRS — Talaba Ro'yxatdan O'tkazuvchi To'liq Konstruktor (Master)",
      "en": "60. WIUT SRS — Master Academic Registration Constructor Suite",
      "ru": "60. WIUT SRS — Мастер-конструктор регистрации студента в SRS"
    },
    "scenario": {
      "uz": "WIUT SRS master registratori: Talaba avtomatik '000' + statik seq ID oladi, ismi tekshiriladi, krediti sukut bo'yicha 120 ta qilib belgilanadi va to'liq profil yaratiladi.",
      "en": "Master registration constructor: generates sequential student ID ('000' + seq), validates name, initializes default credits (120).",
      "ru": "Мастер-конструктор регистрации: автоинкремент ID ('000' + seq), проверка имени, 120 кредитов по умолчанию."
    },
    "requirements": {
      "classes": [
        "SRSStudent",
        "Main"
      ],
      "privateFields": [
        "studentId",
        "name",
        "credits"
      ],
      "methods": [
        "getProfile"
      ],
      "keywords": [
        "static",
        "this"
      ]
    },
    "starterCode": "class SRSStudent {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SRSStudent {\n    private static int seq = 23000;\n    private String studentId;\n    private String name;\n    private int credits;\n\n    public SRSStudent(String name) {\n        if (name == null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException(\"Ism bo'sh bo'lishi mumkin emas\");\n        }\n        this.studentId = \"000\" + (++seq);\n        this.name = name.trim();\n        this.credits = 120;\n    }\n\n    public String getProfile() {\n        return \"Talaba: \" + this.name + \" | ID: \" + this.studentId + \" | Kredit: \" + this.credits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SRSStudent s1 = new SRSStudent(\"Aziz\");\n        SRSStudent s2 = new SRSStudent(\"Diyora\");\n        System.out.println(s1.getProfile());\n        System.out.println(s2.getProfile());\n    }\n}",
    "expectedOutput": "Talaba: Aziz | ID: 00023001 | Kredit: 120\nTalaba: Diyora | ID: 00023002 | Kredit: 120",
    "newKnowledge": {
      "uz": "60-masala: Konstruktorlar orqali ob'yektni to'g'ri initsializatsiya qilish, 'this(...)' konstruktorlar zanjiri (Chaining) va xavfsiz boshlang'ich qiymatlar o'rnatish.",
      "en": "Challenge 60: Robust object initialization, constructor overloading, and 'this(...)' delegation chaining.",
      "ru": "Задача 60: Надежная инициализация объектов, перегрузка конструкторов и цепочки 'this(...)'."
    },
    "newKnowledgeTags": [
      "constructor",
      "this(...)",
      "chaining",
      "overloading",
      "initialization"
    ],
    "methodSpecs": [
      {
        "name": "getProfile()",
        "signature": "public String getProfile()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SRSStudent",
        "signature": "public SRSStudent(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"Aziz\"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"Aziz\"</code>)",
          "ru": "<code>String name</code> (например, <code>\"Aziz\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = = null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException(\"Ism bo'sh bo'lishi mumkin emas\");</code> <code>this.studentId = \"000\" + (++seq);</code> <code>this.name = name.trim();</code> <code>this.credits = 120;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = = null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException(\"Ism bo'sh bo'lishi mumkin emas\");</code> <code>this.studentId = \"000\" + (++seq);</code> <code>this.name = name.trim();</code> <code>this.credits = 120;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = = null || name.trim().isEmpty()) {\n            throw new IllegalArgumentException(\"Ism bo'sh bo'lishi mumkin emas\");</code> <code>this.studentId = \"000\" + (++seq);</code> <code>this.name = name.trim();</code> <code>this.credits = 120;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `s1` (\"Aziz\") hamda `s2` (\"Diyora\")."
        ],
        "en": [
          "Create 2 objects: `s1` (\"Aziz\") and `s2` (\"Diyora\")."
        ],
        "ru": [
          "Создайте 2 объекта: `s1` (\"Aziz\") и `s2` (\"Diyora\")."
        ]
      },
      "expectedOutput": "Talaba: Aziz | ID: 00023001 | Kredit: 120\nTalaba: Diyora | ID: 00023002 | Kredit: 120"
    }
  },
  {
    "id": 61,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "61. Uzum Market — Sinf Invarianti Nazorati (Class Invariant Assertion)",
      "en": "61. Uzum Market — Explicit Class Invariant Verification Assertion",
      "ru": "61. Uzum Market — Явная проверка инварианта класса (Class Invariant)"
    },
    "scenario": {
      "uz": "Tovar ombor qoldig'i hech qachon manfiy bo'lishi mumkin emas ('stock >= 0'). Har bir mutator metod chaqirilgandan so'ng 'private boolean checkInvariant()' orqali sinf holati to'g'riligi tekshirilsin.",
      "en": "Inventory stock must never be negative. Verify state at each mutation via private checkInvariant().",
      "ru": "Инвариант: остаток на складе не может быть отрицательным. Проверяйте через checkInvariant()."
    },
    "requirements": {
      "classes": [
        "WarehouseItem",
        "Main"
      ],
      "privateFields": [
        "stock"
      ],
      "methods": [
        "reduceStock",
        "getStock"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class WarehouseItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class WarehouseItem {\n    private int stock;\n\n    public WarehouseItem(int stock) {\n        if (stock < 0) throw new IllegalArgumentException(\"Stock cannot be negative\");\n        this.stock = stock;\n    }\n\n    private boolean checkInvariant() {\n        return this.stock >= 0;\n    }\n\n    public boolean reduceStock(int amount) {\n        if (amount > 0 && (this.stock - amount) >= 0) {\n            this.stock -= amount;\n            assert checkInvariant();\n            return true;\n        }\n        return false;\n    }\n\n    public int getStock() {\n        return this.stock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarehouseItem wi = new WarehouseItem(10);\n        boolean r1 = wi.reduceStock(4);\n        boolean r2 = wi.reduceStock(10);\n        System.out.println(\"R1: \" + r1 + \" | R2: \" + r2 + \" | Qoldiq: \" + wi.getStock());\n    }\n}",
    "expectedOutput": "R1: true | R2: false | Qoldiq: 6",
    "newKnowledge": {
      "uz": "61-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 61: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 61: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "checkInvariant()",
        "signature": "private boolean checkInvariant()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.stock >= 0</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.stock >= 0</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.stock >= 0</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.stock >= 0</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.stock >= 0</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.stock >= 0</code>."
        }
      },
      {
        "name": "reduceStock()",
        "signature": "public boolean reduceStock(int amount)",
        "params": {
          "uz": "<code>int amount</code> (masalan, <code>4</code>)",
          "en": "<code>int amount</code> (e.g. <code>4</code>)",
          "ru": "<code>int amount</code> (например, <code>4</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getStock()",
        "signature": "public int getStock()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int stock</code> maydonining qiymatini return qiladi (masalan, <code>10</code>).",
          "en": "<code>int</code>: returns the value of <code>private int stock</code> (e.g. <code>10</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int stock</code> (например, <code>10</code>)."
        },
        "desc": {
          "uz": "Ichki <code>stock</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>stock</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>stock</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "WarehouseItem",
        "signature": "public WarehouseItem(int stock)",
        "params": {
          "uz": "<code>int stock</code> (masalan, <code>10</code>)",
          "en": "<code>int stock</code> (e.g. <code>10</code>)",
          "ru": "<code>int stock</code> (например, <code>10</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.stock = stock;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.stock = stock;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.stock = stock;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`wi` nomli `WarehouseItem` ob'yektini yarating va argument sifatida `10` qiymatini bering.",
          "Tegishli `reduceStock()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `WarehouseItem` object named `wi` and pass argument(s) `10`.",
          "Invoke `reduceStock()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `WarehouseItem` с именем `wi` и передайте аргумент(ы) `10`.",
          "Вызовите метод(ы) `reduceStock()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "R1: true | R2: false | Qoldiq: 6"
    }
  },
  {
    "id": 62,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "62. Payme — Oraliq Invarianti: minPrice <= price <= maxPrice",
      "en": "62. Payme — Bounded Range Invariant Maintenance",
      "ru": "62. Payme — Поддержание инварианта диапазона: minPrice <= price <= maxPrice"
    },
    "scenario": {
      "uz": "Chegirma narxi hech qachon 'minLimit' dan pastga tushib ketishi yoki 'maxLimit' dan oshib ketishi mumkin emas. Setter ushbu qat'iy invariantni buzuvchi har qanday urinishni rad etadi.",
      "en": "Maintain strict invariant: minLimit <= price <= maxLimit across all modifications.",
      "ru": "Строгий инвариант: цена всегда должна находиться в пределах [minLimit, maxLimit]."
    },
    "requirements": {
      "classes": [
        "PriceBound",
        "Main"
      ],
      "privateFields": [
        "minLimit",
        "maxLimit",
        "currentPrice"
      ],
      "methods": [
        "setPrice",
        "getCurrentPrice"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PriceBound {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PriceBound {\n    private double minLimit;\n    private double maxLimit;\n    private double currentPrice;\n\n    public PriceBound(double minLimit, double maxLimit, double initialPrice) {\n        if (minLimit > maxLimit || initialPrice < minLimit || initialPrice > maxLimit) {\n            throw new IllegalArgumentException(\"Invalid bounds or price\");\n        }\n        this.minLimit = minLimit;\n        this.maxLimit = maxLimit;\n        this.currentPrice = initialPrice;\n    }\n\n    public void setPrice(double p) {\n        if (p >= this.minLimit && p <= this.maxLimit) {\n            this.currentPrice = p;\n        }\n    }\n\n    public double getCurrentPrice() {\n        return this.currentPrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceBound pb = new PriceBound(1000.0, 50000.0, 20000.0);\n        pb.setPrice(500.0);\n        pb.setPrice(35000.0);\n        System.out.println(\"Narx: \" + pb.getCurrentPrice());\n    }\n}",
    "expectedOutput": "Narx: 35000.0",
    "newKnowledge": {
      "uz": "62-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 62: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 62: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "setPrice()",
        "signature": "public void setPrice(double p)",
        "params": {
          "uz": "<code>double p</code> (masalan, <code>500.0</code>)",
          "en": "<code>double p</code> (e.g. <code>500.0</code>)",
          "ru": "<code>double p</code> (например, <code>500.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>p >= this.minLimit && p <= this.maxLimit</code> shartiga tekshiradi, agar shart bajarilsa <code>this.currentPrice = p;</code> qilib yangilaydi.",
          "en": "Checks <code>p >= this.minLimit && p <= this.maxLimit</code> condition, and if valid, updates <code>this.currentPrice = p;</code>.",
          "ru": "Проверяет условие <code>p >= this.minLimit && p <= this.maxLimit</code>, и если верно, обновляет <code>this.currentPrice = p;</code>."
        }
      },
      {
        "name": "getCurrentPrice()",
        "signature": "public double getCurrentPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double currentPrice</code> maydonining qiymatini return qiladi (masalan, <code>20000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double currentPrice</code> (e.g. <code>20000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double currentPrice</code> (например, <code>20000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>currentPrice</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>currentPrice</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>currentPrice</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PriceBound",
        "signature": "public PriceBound(double minLimit, double maxLimit, double initialPrice)",
        "params": {
          "uz": "<code>double minLimit, double maxLimit, double initialPrice</code> (masalan, <code>1000.0, 50000.0, 20000.0</code>)",
          "en": "<code>double minLimit, double maxLimit, double initialPrice</code> (e.g. <code>1000.0, 50000.0, 20000.0</code>)",
          "ru": "<code>double minLimit, double maxLimit, double initialPrice</code> (например, <code>1000.0, 50000.0, 20000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.minLimit = minLimit;</code> <code>this.maxLimit = maxLimit;</code> <code>this.currentPrice = initialPrice;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.minLimit = minLimit;</code> <code>this.maxLimit = maxLimit;</code> <code>this.currentPrice = initialPrice;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.minLimit = minLimit;</code> <code>this.maxLimit = maxLimit;</code> <code>this.currentPrice = initialPrice;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`pb` nomli `PriceBound` ob'yektini yarating va argument sifatida `1000.0, 50000.0, 20000.0` qiymatini bering.",
          "Tegishli `setPrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PriceBound` object named `pb` and pass argument(s) `1000.0, 50000.0, 20000.0`.",
          "Invoke `setPrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PriceBound` с именем `pb` и передайте аргумент(ы) `1000.0, 50000.0, 20000.0`.",
          "Вызовите метод(ы) `setPrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Narx: 35000.0"
    }
  },
  {
    "id": 63,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "63. Korzinka — Byudjet Balansi Invarianti (spent + remaining == total)",
      "en": "63. Korzinka — Budget Balance Conservation Invariant",
      "ru": "63. Korzinka — Инвариант сохранения бюджета: spent + remaining == total"
    },
    "scenario": {
      "uz": "Kompaniya byudjetida 'spent + remaining == total' tengligi doimo saqlanishi kerak. 'spend(amt)' va 'refund(amt)' metodlari har bir harakatda ushbu balansni buzmasdan yangilasun.",
      "en": "Maintain budget conservation invariant: spent + remaining strictly equals totalBudget.",
      "ru": "Инвариант: сумма израсходованных и оставшихся средств всегда равна общему бюджету."
    },
    "requirements": {
      "classes": [
        "BudgetManager",
        "Main"
      ],
      "privateFields": [
        "totalBudget",
        "spent",
        "remaining"
      ],
      "methods": [
        "spend",
        "refund",
        "getSummary"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class BudgetManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BudgetManager {\n    private double totalBudget;\n    private double spent;\n    private double remaining;\n\n    public BudgetManager(double totalBudget) {\n        this.totalBudget = totalBudget;\n        this.spent = 0.0;\n        this.remaining = totalBudget;\n    }\n\n    public boolean spend(double amt) {\n        if (amt > 0 && amt <= this.remaining) {\n            this.spent += amt;\n            this.remaining -= amt;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean refund(double amt) {\n        if (amt > 0 && amt <= this.spent) {\n            this.spent -= amt;\n            this.remaining += amt;\n            return true;\n        }\n        return false;\n    }\n\n    public String getSummary() {\n        return \"Sarflangan: \" + this.spent + \" | Qoldiq: \" + this.remaining;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BudgetManager bm = new BudgetManager(1000000.0);\n        bm.spend(300000.0);\n        bm.refund(50000.0);\n        System.out.println(bm.getSummary());\n    }\n}",
    "expectedOutput": "Sarflangan: 250000.0 | Qoldiq: 750000.0",
    "newKnowledge": {
      "uz": "63-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 63: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 63: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "spend()",
        "signature": "public boolean spend(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>300000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>300000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>300000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "refund()",
        "signature": "public boolean refund(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>50000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>50000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>50000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getSummary()",
        "signature": "public String getSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "BudgetManager",
        "signature": "public BudgetManager(double totalBudget)",
        "params": {
          "uz": "<code>double totalBudget</code> (masalan, <code>1000000.0</code>)",
          "en": "<code>double totalBudget</code> (e.g. <code>1000000.0</code>)",
          "ru": "<code>double totalBudget</code> (например, <code>1000000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.totalBudget = totalBudget;</code> <code>this.spent = 0.0;</code> <code>this.remaining = totalBudget;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.totalBudget = totalBudget;</code> <code>this.spent = 0.0;</code> <code>this.remaining = totalBudget;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.totalBudget = totalBudget;</code> <code>this.spent = 0.0;</code> <code>this.remaining = totalBudget;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`bm` nomli `BudgetManager` ob'yektini yarating va argument sifatida `1000000.0` qiymatini bering.",
          "Tegishli `spend()`, `refund()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `BudgetManager` object named `bm` and pass argument(s) `1000000.0`.",
          "Invoke `spend()`, `refund()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `BudgetManager` с именем `bm` и передайте аргумент(ы) `1000000.0`.",
          "Вызовите метод(ы) `spend()`, `refund()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Sarflangan: 250000.0 | Qoldiq: 750000.0"
    }
  },
  {
    "id": 64,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "64. Click — Termostat Tezlik Invarianti (Maksimal 5 Gradus Sakrash)",
      "en": "64. Click — Thermostat Rate-of-Change Invariant Protection",
      "ru": "64. Click — Инвариант скорости изменения температуры (не более 5 градусов)"
    },
    "scenario": {
      "uz": "Xona termostati harorati bir qadamda 5 gradusdan ortiq o'zgarishi texnik jihatdan taqiqlangan ('Math.abs(newT - currentT) <= 5.0'). Invariant buzilsa yangilash rad etiladi.",
      "en": "Thermostat temperature can change by at most 5.0 degrees in a single step. Guard against sudden jumps.",
      "ru": "Температура может меняться максимум на 5.0 градусов за один шаг."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "Main"
      ],
      "privateFields": [
        "temperature"
      ],
      "methods": [
        "setTemperature",
        "getTemperature"
      ],
      "keywords": [
        "Math.abs",
        "this"
      ]
    },
    "starterCode": "class Thermostat {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Thermostat {\n    private double temperature;\n\n    public Thermostat(double temperature) {\n        this.temperature = temperature;\n    }\n\n    public void setTemperature(double newT) {\n        if (Math.abs(newT - this.temperature) <= 5.0) {\n            this.temperature = newT;\n        }\n    }\n\n    public double getTemperature() {\n        return this.temperature;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat th = new Thermostat(22.0);\n        th.setTemperature(35.0);\n        th.setTemperature(25.0);\n        System.out.println(\"Harorat: \" + th.getTemperature());\n    }\n}",
    "expectedOutput": "Harorat: 25.0",
    "newKnowledge": {
      "uz": "64-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 64: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 64: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "setTemperature()",
        "signature": "public void setTemperature(double newT)",
        "params": {
          "uz": "<code>double newT</code> (masalan, <code>35.0</code>)",
          "en": "<code>double newT</code> (e.g. <code>35.0</code>)",
          "ru": "<code>double newT</code> (например, <code>35.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getTemperature()",
        "signature": "public double getTemperature()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double temperature</code> maydonining qiymatini return qiladi (masalan, <code>22.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double temperature</code> (e.g. <code>22.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double temperature</code> (например, <code>22.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>temperature</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>temperature</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>temperature</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Thermostat",
        "signature": "public Thermostat(double temperature)",
        "params": {
          "uz": "<code>double temperature</code> (masalan, <code>22.0</code>)",
          "en": "<code>double temperature</code> (e.g. <code>22.0</code>)",
          "ru": "<code>double temperature</code> (например, <code>22.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.temperature = temperature;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.temperature = temperature;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.temperature = temperature;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`th` nomli `Thermostat` ob'yektini yarating va argument sifatida `22.0` qiymatini bering.",
          "Tegishli `setTemperature()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Thermostat` object named `th` and pass argument(s) `22.0`.",
          "Invoke `setTemperature()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Thermostat` с именем `th` и передайте аргумент(ы) `22.0`.",
          "Вызовите метод(ы) `setTemperature()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Harorat: 25.0"
    }
  },
  {
    "id": 65,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "65. Yandex Go — Kasr Invarianti (Avtomatik Qisqartiriluvchi Surat va Maxraj)",
      "en": "65. Yandex Go — Irreducible Fraction Invariant via Internal GCD",
      "ru": "65. Yandex Go — Инвариант несократимой дроби через внутренний НОД"
    },
    "scenario": {
      "uz": "Kasr ('Fraction') ob'yekti yaratilganda yoki o'zgartirilganda uning surati va maxraji doimo eng kichik qisqartirilgan shaklda bo'lishi shart (masalan 4/8 -> 1/2). 'private int gcd(int a, int b)' orqali qisqartiring.",
      "en": "Fraction invariant: numerator and denominator must always be stored in lowest terms via private gcd().",
      "ru": "Инвариант: дробь всегда хранится в несократимом виде, делясь на наибольший общий делитель."
    },
    "requirements": {
      "classes": [
        "Fraction",
        "Main"
      ],
      "privateFields": [
        "numerator",
        "denominator"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "private",
        "this"
      ]
    },
    "starterCode": "class Fraction {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Fraction {\n    private int numerator;\n    private int denominator;\n\n    private int gcd(int a, int b) {\n        return (b == 0) ? a : gcd(b, a % b);\n    }\n\n    public Fraction(int numerator, int denominator) {\n        if (denominator == 0) throw new IllegalArgumentException(\"Denominator cannot be 0\");\n        int common = gcd(Math.abs(numerator), Math.abs(denominator));\n        this.numerator = numerator / common;\n        this.denominator = denominator / common;\n    }\n\n    @Override\n    public String toString() {\n        return this.numerator + \"/\" + this.denominator;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Fraction f = new Fraction(4, 8);\n        System.out.println(\"Qisqargan kasr: \" + f);\n    }\n}",
    "expectedOutput": "Qisqargan kasr: 1/2",
    "newKnowledge": {
      "uz": "65-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 65: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 65: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "gcd()",
        "signature": "private int gcd(int a, int b)",
        "params": {
          "uz": "<code>int a, int b</code>",
          "en": "<code>int a, int b</code>",
          "ru": "<code>int a, int b</code>"
        },
        "returns": {
          "uz": "<code>int</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int</code>: returns computed business result or operation state.",
          "ru": "<code>int</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "toString()",
        "signature": "public String toString()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Fraction",
        "signature": "public Fraction(int numerator, int denominator)",
        "params": {
          "uz": "<code>int numerator, int denominator</code> (masalan, <code>4, 8</code>)",
          "en": "<code>int numerator, int denominator</code> (e.g. <code>4, 8</code>)",
          "ru": "<code>int numerator, int denominator</code> (например, <code>4, 8</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.denominator = = 0) throw new IllegalArgumentException(\"Denominator cannot be 0\");</code> <code>this.common = gcd(Math.abs(numerator), Math.abs(denominator));</code> <code>this.numerator = numerator / common;</code> <code>this.denominator = denominator / common;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.denominator = = 0) throw new IllegalArgumentException(\"Denominator cannot be 0\");</code> <code>this.common = gcd(Math.abs(numerator), Math.abs(denominator));</code> <code>this.numerator = numerator / common;</code> <code>this.denominator = denominator / common;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.denominator = = 0) throw new IllegalArgumentException(\"Denominator cannot be 0\");</code> <code>this.common = gcd(Math.abs(numerator), Math.abs(denominator));</code> <code>this.numerator = numerator / common;</code> <code>this.denominator = denominator / common;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`f` nomli `Fraction` ob'yektini yarating va argument sifatida `4, 8` qiymatini bering."
        ],
        "en": [
          "Create a `Fraction` object named `f` and pass argument(s) `4, 8`."
        ],
        "ru": [
          "Создайте объект `Fraction` с именем `f` и передайте аргумент(ы) `4, 8`."
        ]
      },
      "expectedOutput": "Qisqargan kasr: 1/2"
    }
  },
  {
    "id": 66,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "66. Safia — Doiraviy Navbat Invarianti (Circular Buffer Indices)",
      "en": "66. Safia — Circular Queue Capacity Index Invariant",
      "ru": "66. Safia — Инвариант индексов циклического буфера"
    },
    "scenario": {
      "uz": "Doiraviy buferda indekslar hech qachon 'capacity' dan oshib ketmasligi kerak ('index = (index + 1) % capacity'). Har bir element qo'shilganda hajm va indeks nazorat qilinsin.",
      "en": "Circular buffer maintains strict index invariant: index always wrapped via modulo capacity.",
      "ru": "Циклический буфер поддерживает инвариант: индексы всегда нормализуются через остаток от деления."
    },
    "requirements": {
      "classes": [
        "CircularBuffer",
        "Main"
      ],
      "privateFields": [
        "capacity",
        "size",
        "writeIndex"
      ],
      "methods": [
        "add",
        "getSize"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CircularBuffer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CircularBuffer {\n    private int capacity;\n    private int size = 0;\n    private int writeIndex = 0;\n\n    public CircularBuffer(int capacity) {\n        this.capacity = capacity;\n    }\n\n    public boolean add(int val) {\n        if (this.size < this.capacity) {\n            this.writeIndex = (this.writeIndex + 1) % this.capacity;\n            this.size++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getSize() {\n        return this.size;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CircularBuffer cb = new CircularBuffer(3);\n        cb.add(10);\n        cb.add(20);\n        cb.add(30);\n        boolean overflow = cb.add(40);\n        System.out.println(\"Sig'im to'ldimi: \" + !overflow + \" | O'lcham: \" + cb.getSize());\n    }\n}",
    "expectedOutput": "Sig'im to'ldimi: true | O'lcham: 3",
    "newKnowledge": {
      "uz": "66-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 66: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 66: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "add()",
        "signature": "public boolean add(int val)",
        "params": {
          "uz": "<code>int val</code> (masalan, <code>10</code>)",
          "en": "<code>int val</code> (e.g. <code>10</code>)",
          "ru": "<code>int val</code> (например, <code>10</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>size</code> hisoblagichini 1 taga oshirib, <code>private true</code> maydonini return qiladi.",
          "en": "<code>boolean</code>: increments <code>size</code> counter and returns <code>private true</code>.",
          "ru": "<code>boolean</code>: увеличивает счетчик <code>size</code> и возвращает поле <code>true</code>."
        },
        "desc": {
          "uz": "Har murojaatda <code>size</code> maydonini oshirib, <code>true</code> maydonining joriy qiymatini return qiladi.",
          "en": "Increments <code>size</code> count on each call and returns the current <code>true</code> value.",
          "ru": "Инкрементирует <code>size</code> при каждом вызове и возвращает значение <code>true</code>."
        }
      },
      {
        "name": "getSize()",
        "signature": "public int getSize()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int size</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int size</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int size</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>size</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>size</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>size</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CircularBuffer",
        "signature": "public CircularBuffer(int capacity)",
        "params": {
          "uz": "<code>int capacity</code> (masalan, <code>3</code>)",
          "en": "<code>int capacity</code> (e.g. <code>3</code>)",
          "ru": "<code>int capacity</code> (например, <code>3</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.capacity = capacity;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.capacity = capacity;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.capacity = capacity;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`cb` nomli `CircularBuffer` ob'yektini yarating va argument sifatida `3` qiymatini bering.",
          "Tegishli `add()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CircularBuffer` object named `cb` and pass argument(s) `3`.",
          "Invoke `add()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CircularBuffer` с именем `cb` и передайте аргумент(ы) `3`.",
          "Вызовите метод(ы) `add()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Sig'im to'ldimi: true | O'lcham: 3"
    }
  },
  {
    "id": 67,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "67. Texnomart — Kalendar Sanasi Invarianti (Kabisa Yili va Oylar Kunlari)",
      "en": "67. Texnomart — Calendar Date Invariant with Leap Year Verification",
      "ru": "67. Texnomart — Инвариант даты с проверкой високосного года"
    },
    "scenario": {
      "uz": "Sanada oy 1..12, kun esa oyga mos bo'lishi shart (fevral kabisa yilida 29, oddiy yilda 28 kun). Noto'g'ri sanalar (masalan 2026-02-29) uchun IllegalArgumentException otilsin.",
      "en": "Enforce valid calendar dates accounting for leap years and varying month lengths in constructor.",
      "ru": "Инвариант даты проверяет количество дней в месяце и високосный год."
    },
    "requirements": {
      "classes": [
        "CalendarDate",
        "Main"
      ],
      "privateFields": [
        "year",
        "month",
        "day"
      ],
      "methods": [
        "getFormattedDate"
      ],
      "keywords": [
        "throw",
        "IllegalArgumentException",
        "this"
      ]
    },
    "starterCode": "class CalendarDate {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CalendarDate {\n    private int year;\n    private int month;\n    private int day;\n\n    private boolean isLeapYear(int y) {\n        return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);\n    }\n\n    private int daysInMonth(int y, int m) {\n        switch (m) {\n            case 2: return isLeapYear(y) ? 29 : 28;\n            case 4: case 6: case 9: case 11: return 30;\n            default: return 31;\n        }\n    }\n\n    public CalendarDate(int y, int m, int d) {\n        if (m < 1 || m > 12) throw new IllegalArgumentException(\"Noto'g'ri oy\");\n        if (d < 1 || d > daysInMonth(y, m)) throw new IllegalArgumentException(\"Noto'g'ri kun\");\n        this.year = y;\n        this.month = m;\n        this.day = d;\n    }\n\n    public String getFormattedDate() {\n        return String.format(\"%04d-%02d-%02d\", this.year, this.month, this.day);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        try {\n            CalendarDate bad = new CalendarDate(2026, 2, 29);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Xato: \" + e.getMessage());\n        }\n        CalendarDate good = new CalendarDate(2024, 2, 29);\n        System.out.println(\"Sana: \" + good.getFormattedDate());\n    }\n}",
    "expectedOutput": "Xato: Noto'g'ri kun\nSana: 2024-02-29",
    "newKnowledge": {
      "uz": "67-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 67: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 67: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "isLeapYear()",
        "signature": "private boolean isLeapYear(int y)",
        "params": {
          "uz": "<code>int y</code>",
          "en": "<code>int y</code>",
          "ru": "<code>int y</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "daysInMonth()",
        "signature": "private int daysInMonth(int y, int m)",
        "params": {
          "uz": "<code>int y, int m</code>",
          "en": "<code>int y, int m</code>",
          "ru": "<code>int y, int m</code>"
        },
        "returns": {
          "uz": "<code>int</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int</code>: returns computed business result or operation state.",
          "ru": "<code>int</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getFormattedDate()",
        "signature": "public String getFormattedDate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CalendarDate",
        "signature": "public CalendarDate(int y, int m, int d)",
        "params": {
          "uz": "<code>int y, int m, int d</code> (masalan, <code>2026, 2, 29</code>)",
          "en": "<code>int y, int m, int d</code> (e.g. <code>2026, 2, 29</code>)",
          "ru": "<code>int y, int m, int d</code> (например, <code>2026, 2, 29</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.year = y;</code> <code>this.month = m;</code> <code>this.day = d;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.year = y;</code> <code>this.month = m;</code> <code>this.day = d;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.year = y;</code> <code>this.month = m;</code> <code>this.day = d;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `bad` (2026, 2, 29) hamda `good` (2024, 2, 29)."
        ],
        "en": [
          "Create 2 objects: `bad` (2026, 2, 29) and `good` (2024, 2, 29)."
        ],
        "ru": [
          "Создайте 2 объекта: `bad` (2026, 2, 29) и `good` (2024, 2, 29)."
        ]
      },
      "expectedOutput": "Xato: Noto'g'ri kun\nSana: 2024-02-29"
    }
  },
  {
    "id": 68,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "68. Dodo Pizza — Vaqt Oralig'i Invarianti (startTime < endTime)",
      "en": "68. Dodo Pizza — Chronological Time Interval Invariant (start < end)",
      "ru": "68. Dodo Pizza — Временной инвариант: startTime < endTime"
    },
    "scenario": {
      "uz": "Pitsaxona ish vaqtida 'startHour' doimo 'endHour' dan kichik bo'lishi shart. Agar setter 'setShift(start, end)' da start >= end kiritilsa, o'zgarish rad etilsin.",
      "en": "Maintain chronological consistency: startHour must strictly precede endHour.",
      "ru": "Инвариант смены: время начала должно быть строго меньше времени окончания."
    },
    "requirements": {
      "classes": [
        "KitchenShift",
        "Main"
      ],
      "privateFields": [
        "startHour",
        "endHour"
      ],
      "methods": [
        "setShift",
        "getDurationHours"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class KitchenShift {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class KitchenShift {\n    private int startHour;\n    private int endHour;\n\n    public KitchenShift(int startHour, int endHour) {\n        if (startHour >= endHour) throw new IllegalArgumentException(\"Start must precede end\");\n        this.startHour = startHour;\n        this.endHour = endHour;\n    }\n\n    public boolean setShift(int start, int end) {\n        if (start >= 0 && end <= 24 && start < end) {\n            this.startHour = start;\n            this.endHour = end;\n            return true;\n        }\n        return false;\n    }\n\n    public int getDurationHours() {\n        return this.endHour - this.startHour;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        KitchenShift shift = new KitchenShift(9, 18);\n        boolean r1 = shift.setShift(17, 12);\n        boolean r2 = shift.setShift(10, 22);\n        System.out.println(\"R1: \" + r1 + \" | R2: \" + r2 + \" | Davomiylik: \" + shift.getDurationHours() + \" soat\");\n    }\n}",
    "expectedOutput": "R1: false | R2: true | Davomiylik: 12 soat",
    "newKnowledge": {
      "uz": "68-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 68: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 68: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "setShift()",
        "signature": "public boolean setShift(int start, int end)",
        "params": {
          "uz": "<code>int start, int end</code> (masalan, <code>17, 12</code>)",
          "en": "<code>int start, int end</code> (e.g. <code>17, 12</code>)",
          "ru": "<code>int start, int end</code> (например, <code>17, 12</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getDurationHours()",
        "signature": "public int getDurationHours()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int</code>: returns computed business result or operation state.",
          "ru": "<code>int</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "KitchenShift",
        "signature": "public KitchenShift(int startHour, int endHour)",
        "params": {
          "uz": "<code>int startHour, int endHour</code> (masalan, <code>9, 18</code>)",
          "en": "<code>int startHour, int endHour</code> (e.g. <code>9, 18</code>)",
          "ru": "<code>int startHour, int endHour</code> (например, <code>9, 18</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.startHour = startHour;</code> <code>this.endHour = endHour;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.startHour = startHour;</code> <code>this.endHour = endHour;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.startHour = startHour;</code> <code>this.endHour = endHour;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`shift` nomli `KitchenShift` ob'yektini yarating va argument sifatida `9, 18` qiymatini bering.",
          "Tegishli `setShift()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `KitchenShift` object named `shift` and pass argument(s) `9, 18`.",
          "Invoke `setShift()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `KitchenShift` с именем `shift` и передайте аргумент(ы) `9, 18`.",
          "Вызовите метод(ы) `setShift()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "R1: false | R2: true | Davomiylik: 12 soat"
    }
  },
  {
    "id": 69,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "69. Kapitalbank — Ikki Yoqlama Yozuv Buxgalteriya Invarianti (Debit == Credit)",
      "en": "69. Kapitalbank — Double-Entry Bookkeeping Equilibrium Invariant",
      "ru": "69. Kapitalbank — Инвариант двойной бухгалтерской записи: дебет равен кредиту"
    },
    "scenario": {
      "uz": "Bank provodkasida debit va kredit summasi doimo teng bo'lishi shart ('isBalanced()'). Tranzaksiya yakunlanganda 'totalDebit == totalCredit' invariantini tekshiring.",
      "en": "Bookkeeping invariant: totalDebit must equal totalCredit for transaction to be considered balanced.",
      "ru": "Инвариант двойной записи: сумма дебета должна точно равняться сумме кредита."
    },
    "requirements": {
      "classes": [
        "LedgerTransaction",
        "Main"
      ],
      "privateFields": [
        "totalDebit",
        "totalCredit"
      ],
      "methods": [
        "addEntry",
        "isBalanced"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class LedgerTransaction {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class LedgerTransaction {\n    private double totalDebit = 0.0;\n    private double totalCredit = 0.0;\n\n    public void addDebit(double amt) {\n        if (amt > 0) this.totalDebit += amt;\n    }\n\n    public void addCredit(double amt) {\n        if (amt > 0) this.totalCredit += amt;\n    }\n\n    public boolean isBalanced() {\n        return Math.abs(this.totalDebit - this.totalCredit) < 0.001;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LedgerTransaction tx = new LedgerTransaction();\n        tx.addDebit(150000.0);\n        tx.addCredit(150000.0);\n        System.out.println(\"Provodka muvozanatdami: \" + tx.isBalanced());\n    }\n}",
    "expectedOutput": "Provodka muvozanatdami: true",
    "newKnowledge": {
      "uz": "69-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 69: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 69: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "addDebit()",
        "signature": "public void addDebit(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>150000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>150000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>150000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "addCredit()",
        "signature": "public void addCredit(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>150000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>150000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>150000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isBalanced()",
        "signature": "public boolean isBalanced()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`tx` nomli `LedgerTransaction` ob'yektini yarating.",
          "Tegishli `addDebit()`, `addCredit()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `LedgerTransaction` object named `tx`.",
          "Invoke `addDebit()`, `addCredit()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `LedgerTransaction` с именем `tx`.",
          "Вызовите метод(ы) `addDebit()`, `addCredit()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Provodka muvozanatdami: true"
    }
  },
  {
    "id": 70,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "70. Asaxiy — Minimal Qoldiq Reorder Invarianti",
      "en": "70. Asaxiy — Inventory Safety Stock Reorder Threshold Invariant",
      "ru": "70. Asaxiy — Инвариант точки перезаказа складских запасов"
    },
    "scenario": {
      "uz": "Tovar soni 'reorderThreshold' dan pastga tushganda avtomatik 'isReorderNeeded()' true bo'lsin. Ombor qoldig'i esa hech qachon 0 dan pastga tushmasligi kafolatlansin.",
      "en": "When stock drops below safety reorder threshold, isReorderNeeded() triggers true. Stock never drops below zero.",
      "ru": "Когда остаток падает ниже порога безопасности, isReorderNeeded() возвращает true."
    },
    "requirements": {
      "classes": [
        "StockThreshold",
        "Main"
      ],
      "privateFields": [
        "stock",
        "reorderThreshold"
      ],
      "methods": [
        "sell",
        "isReorderNeeded"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class StockThreshold {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StockThreshold {\n    private int stock;\n    private int reorderThreshold;\n\n    public StockThreshold(int stock, int reorderThreshold) {\n        this.stock = stock;\n        this.reorderThreshold = reorderThreshold;\n    }\n\n    public boolean sell(int count) {\n        if (count > 0 && this.stock >= count) {\n            this.stock -= count;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean isReorderNeeded() {\n        return this.stock <= this.reorderThreshold;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockThreshold st = new StockThreshold(10, 3);\n        st.sell(8);\n        System.out.println(\"Qayta buyurtma kerakmi: \" + st.isReorderNeeded());\n    }\n}",
    "expectedOutput": "Qayta buyurtma kerakmi: true",
    "newKnowledge": {
      "uz": "70-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 70: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 70: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "sell()",
        "signature": "public boolean sell(int count)",
        "params": {
          "uz": "<code>int count</code> (masalan, <code>8</code>)",
          "en": "<code>int count</code> (e.g. <code>8</code>)",
          "ru": "<code>int count</code> (например, <code>8</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isReorderNeeded()",
        "signature": "public boolean isReorderNeeded()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.stock <= this.reorderThreshold</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.stock <= this.reorderThreshold</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.stock <= this.reorderThreshold</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.stock <= this.reorderThreshold</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.stock <= this.reorderThreshold</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.stock <= this.reorderThreshold</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StockThreshold",
        "signature": "public StockThreshold(int stock, int reorderThreshold)",
        "params": {
          "uz": "<code>int stock, int reorderThreshold</code> (masalan, <code>10, 3</code>)",
          "en": "<code>int stock, int reorderThreshold</code> (e.g. <code>10, 3</code>)",
          "ru": "<code>int stock, int reorderThreshold</code> (например, <code>10, 3</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.stock = stock;</code> <code>this.reorderThreshold = reorderThreshold;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.stock = stock;</code> <code>this.reorderThreshold = reorderThreshold;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.stock = stock;</code> <code>this.reorderThreshold = reorderThreshold;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`st` nomli `StockThreshold` ob'yektini yarating va argument sifatida `10, 3` qiymatini bering.",
          "Tegishli `sell()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `StockThreshold` object named `st` and pass argument(s) `10, 3`.",
          "Invoke `sell()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `StockThreshold` с именем `st` и передайте аргумент(ы) `10, 3`.",
          "Вызовите метод(ы) `sell()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Qayta buyurtma kerakmi: true"
    }
  },
  {
    "id": 71,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "71. Medion — Parol Murakkabligi Invarianti (Katta harf, Kichik harf, Raqam, Uzunlik)",
      "en": "71. Medion — Multi-Constraint Password Complexity Invariant",
      "ru": "71. Medion — Многокритериальный инвариант сложности пароля"
    },
    "scenario": {
      "uz": "Tibbiy ma'lumotlar xavfsizligi: Parol kamida 8 belgi, 1 ta katta harf, 1 ta kichik harf va 1 ta raqamdan iborat bo'lishi shart. Agar talab bajarilmasa, setter parolni yangilashdan bosh tortsin.",
      "en": "Password must enforce length >= 8, uppercase, lowercase, and digit constraints. Reject invalid passwords.",
      "ru": "Пароль должен удовлетворять 4 критериям: длина >= 8, заглавная, строчная буква и цифра."
    },
    "requirements": {
      "classes": [
        "SecurePassword",
        "Main"
      ],
      "privateFields": [
        "passwordHash"
      ],
      "methods": [
        "setPassword",
        "hasPassword"
      ],
      "keywords": [
        "Character.isUpperCase",
        "Character.isDigit",
        "this"
      ]
    },
    "starterCode": "class SecurePassword {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SecurePassword {\n    private String passwordHash;\n\n    public boolean setPassword(String pass) {\n        if (pass == null || pass.length() < 8) return false;\n        boolean hasUpper = false, hasLower = false, hasDigit = false;\n        for (char c : pass.toCharArray()) {\n            if (Character.isUpperCase(c)) hasUpper = true;\n            else if (Character.isLowerCase(c)) hasLower = true;\n            else if (Character.isDigit(c)) hasDigit = true;\n        }\n        if (hasUpper && hasLower && hasDigit) {\n            this.passwordHash = \"HASH_\" + pass;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean hasPassword() {\n        return this.passwordHash != null;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurePassword sp = new SecurePassword();\n        boolean b1 = sp.setPassword(\"weak\");\n        boolean b2 = sp.setPassword(\"Medion2026\");\n        System.out.println(\"B1: \" + b1 + \" | B2: \" + b2);\n    }\n}",
    "expectedOutput": "B1: false | B2: true",
    "newKnowledge": {
      "uz": "71-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 71: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 71: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "setPassword()",
        "signature": "public boolean setPassword(String pass)",
        "params": {
          "uz": "<code>String pass</code> (masalan, <code>\"weak\"</code>)",
          "en": "<code>String pass</code> (e.g. <code>\"weak\"</code>)",
          "ru": "<code>String pass</code> (например, <code>\"weak\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>passwordHash</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>passwordHash</code> qiymatini return qiladi.",
          "en": "<code>boolean</code>: returns safe default if <code>passwordHash</code> is null, otherwise returns <code>passwordHash</code>.",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>passwordHash</code> null, иначе <code>passwordHash</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "hasPassword()",
        "signature": "public boolean hasPassword()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.passwordHash != null</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.passwordHash != null</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.passwordHash != null</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.passwordHash != null</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.passwordHash != null</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.passwordHash != null</code>."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`sp` nomli `SecurePassword` ob'yektini yarating.",
          "Tegishli `setPassword()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SecurePassword` object named `sp`.",
          "Invoke `setPassword()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SecurePassword` с именем `sp`.",
          "Вызовите метод(ы) `setPassword()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "B1: false | B2: true"
    }
  },
  {
    "id": 72,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "72. Beeline — Spamdan Himoyalovchi So'rovlar Cooldown Invarianti",
      "en": "72. Beeline — Request Throttling Cooldown Invariant Guard",
      "ru": "72. Beeline — Инвариант антиспама с временным интервалом (Cooldown)"
    },
    "scenario": {
      "uz": "SMS kod so'rashlar orasida kamida 2 soniya (2000 ms) o'tgan bo'lishi shart. Agar 'requestSms()' juda tez-tez chaqirilsa, oraliq tekshiruvi sababli rad etilsin.",
      "en": "Rate limiting: consecutive SMS requests must have at least 2000ms delay. Guard against spam.",
      "ru": "Ограничение частоты: между отправками SMS должно пройти не менее 2000 мс."
    },
    "requirements": {
      "classes": [
        "SmsThrottler",
        "Main"
      ],
      "privateFields": [
        "lastRequestTimestamp"
      ],
      "methods": [
        "requestSms"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SmsThrottler {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SmsThrottler {\n    private long lastRequestTimestamp = 0;\n\n    public boolean requestSms(long currentTimestamp) {\n        if (currentTimestamp - this.lastRequestTimestamp >= 2000) {\n            this.lastRequestTimestamp = currentTimestamp;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmsThrottler st = new SmsThrottler();\n        boolean r1 = st.requestSms(1000);\n        boolean r2 = st.requestSms(1500);\n        boolean r3 = st.requestSms(3100);\n        System.out.println(\"R1: \" + r1 + \" | R2: \" + r2 + \" | R3: \" + r3);\n    }\n}",
    "expectedOutput": "R1: true | R2: false | R3: true",
    "newKnowledge": {
      "uz": "72-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 72: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 72: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "requestSms()",
        "signature": "public boolean requestSms(long currentTimestamp)",
        "params": {
          "uz": "<code>long currentTimestamp</code> (masalan, <code>1000</code>)",
          "en": "<code>long currentTimestamp</code> (e.g. <code>1000</code>)",
          "ru": "<code>long currentTimestamp</code> (например, <code>1000</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`st` nomli `SmsThrottler` ob'yektini yarating.",
          "Tegishli `requestSms()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SmsThrottler` object named `st`.",
          "Invoke `requestSms()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SmsThrottler` с именем `st`.",
          "Вызовите метод(ы) `requestSms()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "R1: true | R2: false | R3: true"
    }
  },
  {
    "id": 73,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "73. Express24 — Tomonlar Nisbati Invarianti (Proportional Aspect Ratio)",
      "en": "73. Express24 — Fixed Aspect Ratio Geometric Invariant",
      "ru": "73. Express24 — Инвариант фиксированного соотношения сторон"
    },
    "scenario": {
      "uz": "Restoran menyusi rasmi 16:9 nisbatida bo'lishi shart ('aspectRatio = 16.0 / 9.0'). 'setWidth(w)' chaqirilganda, balandlik ('height') avtomatik tarzda nisbatga mos qilib yangilansin.",
      "en": "Image preserves 16:9 aspect ratio. Setting width automatically recalculates height to maintain ratio.",
      "ru": "Изображение сохраняет пропорцию 16:9. Изменение ширины автоматически пересчитывает высоту."
    },
    "requirements": {
      "classes": [
        "MenuPhoto",
        "Main"
      ],
      "privateFields": [
        "width",
        "height"
      ],
      "methods": [
        "setWidth",
        "getWidth",
        "getHeight"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class MenuPhoto {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MenuPhoto {\n    private double width;\n    private double height;\n    private static final double RATIO = 16.0 / 9.0;\n\n    public MenuPhoto(double width) {\n        setWidth(width);\n    }\n\n    public void setWidth(double w) {\n        if (w > 0) {\n            this.width = w;\n            this.height = Math.round(w / RATIO);\n        }\n    }\n\n    public double getWidth() { return this.width; }\n    public double getHeight() { return this.height; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MenuPhoto photo = new MenuPhoto(1600.0);\n        System.out.println(\"Kenglik: \" + photo.getWidth() + \" | Balandlik: \" + photo.getHeight());\n    }\n}",
    "expectedOutput": "Kenglik: 1600.0 | Balandlik: 900.0",
    "newKnowledge": {
      "uz": "73-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 73: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 73: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "setWidth()",
        "signature": "public void setWidth(double w)",
        "params": {
          "uz": "<code>double w</code>",
          "en": "<code>double w</code>",
          "ru": "<code>double w</code>"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>w > 0</code> shartiga tekshiradi, agar shart bajarilsa <code>this.width = w;</code> qilib yangilaydi.",
          "en": "Checks <code>w > 0</code> condition, and if valid, updates <code>this.width = w;</code>.",
          "ru": "Проверяет условие <code>w > 0</code>, и если верно, обновляет <code>this.width = w;</code>."
        }
      },
      {
        "name": "getWidth()",
        "signature": "public double getWidth()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double width</code> maydonining qiymatini return qiladi (masalan, <code>1600.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double width</code> (e.g. <code>1600.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double width</code> (например, <code>1600.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>width</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>width</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>width</code> без возможности модификации."
        }
      },
      {
        "name": "getHeight()",
        "signature": "public double getHeight()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double height</code> maydonining qiymatini return qiladi.",
          "en": "<code>double</code>: returns the value of <code>private double height</code>.",
          "ru": "<code>double</code>: возвращает значение поля <code>private double height</code>."
        },
        "desc": {
          "uz": "Ichki <code>height</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>height</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>height</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "MenuPhoto",
        "signature": "public MenuPhoto(double width)",
        "params": {
          "uz": "<code>double width</code> (masalan, <code>1600.0</code>)",
          "en": "<code>double width</code> (e.g. <code>1600.0</code>)",
          "ru": "<code>double width</code> (например, <code>1600.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametrlarni qabul qilib, ob'yekt holatini o'rnatadi.",
          "en": "Accepts parameters and sets up initial object state.",
          "ru": "Принимает параметры и устанавливает состояние объекта."
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`photo` nomli `MenuPhoto` ob'yektini yarating va argument sifatida `1600.0` qiymatini bering."
        ],
        "en": [
          "Create a `MenuPhoto` object named `photo` and pass argument(s) `1600.0`."
        ],
        "ru": [
          "Создайте объект `MenuPhoto` с именем `photo` и передайте аргумент(ы) `1600.0`."
        ]
      },
      "expectedOutput": "Kenglik: 1600.0 | Balandlik: 900.0"
    }
  },
  {
    "id": 74,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "74. UzAirways — Sodiqlik Darajasi Invarianti (Ochkoga Qarab Avto-Promoushn)",
      "en": "74. UzAirways — Loyalty Tier State Invariant Auto-Promotion",
      "ru": "74. UzAirways — Инвариант уровня лояльности с автоматическим повышением статуса"
    },
    "scenario": {
      "uz": "Mijoz parvoz ballari ('points') to'planganda, uning status darajasi ('status') avtomatik yangilansin: < 10000 bo'lsa SILVER, >= 10000 bo'lsa GOLD, >= 25000 bo'lsa PLATINUM.",
      "en": "Customer loyalty tier automatically synchronizes whenever points mutate, preventing state desynchronization.",
      "ru": "Уровень лояльности автоматически синхронизируется при начислении баллов."
    },
    "requirements": {
      "classes": [
        "FrequentFlyer",
        "Main"
      ],
      "privateFields": [
        "points",
        "status"
      ],
      "methods": [
        "addMiles",
        "getStatus"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class FrequentFlyer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FrequentFlyer {\n    private int points = 0;\n    private String status = \"SILVER\";\n\n    private void updateStatus() {\n        if (this.points >= 25000) this.status = \"PLATINUM\";\n        else if (this.points >= 10000) this.status = \"GOLD\";\n        else this.status = \"SILVER\";\n    }\n\n    public void addMiles(int miles) {\n        if (miles > 0) {\n            this.points += miles;\n            updateStatus();\n        }\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FrequentFlyer ff = new FrequentFlyer();\n        ff.addMiles(12000);\n        System.out.println(\"12k millar holati: \" + ff.getStatus());\n        ff.addMiles(15000);\n        System.out.println(\"27k millar holati: \" + ff.getStatus());\n    }\n}",
    "expectedOutput": "12k millar holati: GOLD\n27k millar holati: PLATINUM",
    "newKnowledge": {
      "uz": "74-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 74: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 74: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "updateStatus()",
        "signature": "private void updateStatus()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>this.points >= 25000</code> shartiga tekshiradi, agar shart bajarilsa <code>this.status = \"PLATINUM\";</code> qilib yangilaydi.",
          "en": "Checks <code>this.points >= 25000</code> condition, and if valid, updates <code>this.status = \"PLATINUM\";</code>.",
          "ru": "Проверяет условие <code>this.points >= 25000</code>, и если верно, обновляет <code>this.status = \"PLATINUM\";</code>."
        }
      },
      {
        "name": "addMiles()",
        "signature": "public void addMiles(int miles)",
        "params": {
          "uz": "<code>int miles</code> (masalan, <code>12000</code>)",
          "en": "<code>int miles</code> (e.g. <code>12000</code>)",
          "ru": "<code>int miles</code> (например, <code>12000</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getStatus()",
        "signature": "public String getStatus()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String status</code> maydonining qiymatini return qiladi (masalan, <code>\"SILVER\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String status</code> (e.g. <code>\"SILVER\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String status</code> (например, <code>\"SILVER\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>status</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>status</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>status</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ff` nomli `FrequentFlyer` ob'yektini yarating.",
          "Tegishli `addMiles()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `FrequentFlyer` object named `ff`.",
          "Invoke `addMiles()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `FrequentFlyer` с именем `ff`.",
          "Вызовите метод(ы) `addMiles()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "12k millar holati: GOLD\n27k millar holati: PLATINUM"
    }
  },
  {
    "id": 75,
    "tier": 5,
    "tierName": "5-Bosqich: Himoyaviy Dasturlash, Invariantlar va Guard Clauses",
    "sector": "61-75: Invariants & Defensive Programming",
    "title": {
      "uz": "75. WIUT SRS — Talaba Akademik Chegaralari Invarianti (Master Invariant)",
      "en": "75. WIUT SRS — Master Academic Credit and Progression Invariant Guard",
      "ru": "75. WIUT SRS — Мастер-инвариант академических кредитов и перехода на курс"
    },
    "scenario": {
      "uz": "WIUT talabasi har semestrda 60 kreditdan ko'p modul ololmaydi ('maxCredits = 60'). Agar talaba olgan kreditlar 60 dan oshib ketsa, 'registerCredits(c)' operatsiyasi false qaytarib invariantni saqlasin.",
      "en": "Master credit invariant: registered semester credits must never exceed 60. Guard state against breach.",
      "ru": "Мастер-инвариант: количество кредитов за семестр не может превышать 60."
    },
    "requirements": {
      "classes": [
        "SemesterEnrollment",
        "Main"
      ],
      "privateFields": [
        "enrolledCredits"
      ],
      "methods": [
        "enrollModule",
        "getEnrolledCredits"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SemesterEnrollment {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SemesterEnrollment {\n    private int enrolledCredits = 0;\n    private static final int MAX_CREDITS = 60;\n\n    public boolean enrollModule(int credits) {\n        if (credits > 0 && (this.enrolledCredits + credits) <= MAX_CREDITS) {\n            this.enrolledCredits += credits;\n            return true;\n        }\n        return false;\n    }\n\n    public int getEnrolledCredits() {\n        return this.enrolledCredits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SemesterEnrollment se = new SemesterEnrollment();\n        boolean m1 = se.enrollModule(30);\n        boolean m2 = se.enrollModule(30);\n        boolean m3 = se.enrollModule(15);\n        System.out.println(\"M1: \" + m1 + \" | M2: \" + m2 + \" | M3: \" + m3 + \" | Jami: \" + se.getEnrolledCredits());\n    }\n}",
    "expectedOutput": "M1: true | M2: true | M3: false | Jami: 60",
    "newKnowledge": {
      "uz": "75-masala: Sinf invariantlari (Class Invariants) va himoyaviy dasturlash: ob'yekt holati har qanday operatsiyadan keyin ham biznes qoidalariga muvofiq qolishini kafolatlash.",
      "en": "Challenge 75: Class invariant maintenance and defensive programming ensuring consistent state transitions.",
      "ru": "Задача 75: Поддержание инвариантов класса и защитное программирование при любых мутациях."
    },
    "newKnowledgeTags": [
      "class invariant",
      "defensive programming",
      "guard clause",
      "integrity"
    ],
    "methodSpecs": [
      {
        "name": "enrollModule()",
        "signature": "public boolean enrollModule(int credits)",
        "params": {
          "uz": "<code>int credits</code> (masalan, <code>30</code>)",
          "en": "<code>int credits</code> (e.g. <code>30</code>)",
          "ru": "<code>int credits</code> (например, <code>30</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getEnrolledCredits()",
        "signature": "public int getEnrolledCredits()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int enrolledCredits</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int enrolledCredits</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int enrolledCredits</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>enrolledCredits</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>enrolledCredits</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>enrolledCredits</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`se` nomli `SemesterEnrollment` ob'yektini yarating.",
          "Tegishli `enrollModule()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SemesterEnrollment` object named `se`.",
          "Invoke `enrollModule()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SemesterEnrollment` с именем `se`.",
          "Вызовите метод(ы) `enrollModule()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "M1: true | M2: true | M3: false | Jami: 60"
    }
  },
  {
    "id": 76,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "76. Uzum Market — Barcha Maydonlari 'final' Bo'lgan O'zgarmas Tovar Kvitansiyasi",
      "en": "76. Uzum Market — Completely Immutable Fiscal Receipt Record",
      "ru": "76. Uzum Market — Полностью неизменяемый класс фискального чека"
    },
    "scenario": {
      "uz": "O'zgarmas (Immutable) sinf qoidasi: Barcha maydonlar 'private final' bo'ladi, setterlar umuman bo'lmaydi va ob'yekt faqat konstruktor orqali initsializatsiya qilinadi.",
      "en": "Rules of immutability: mark fields private final, provide no setters, initialize solely through constructor.",
      "ru": "Правило неизменяемости: все поля private final, сеттеры отсутствуют, инициализация только в конструкторе."
    },
    "requirements": {
      "classes": [
        "OrderReceipt",
        "Main"
      ],
      "privateFields": [
        "receiptId",
        "totalAmount"
      ],
      "methods": [
        "getReceiptId",
        "getTotalAmount"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class OrderReceipt {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderReceipt {\n    private final String receiptId;\n    private final double totalAmount;\n\n    public OrderReceipt(String receiptId, double totalAmount) {\n        this.receiptId = receiptId;\n        this.totalAmount = totalAmount;\n    }\n\n    public String getReceiptId() {\n        return this.receiptId;\n    }\n\n    public double getTotalAmount() {\n        return this.totalAmount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderReceipt r = new OrderReceipt(\"RCP-1092\", 125000.0);\n        System.out.println(\"Chek: \" + r.getReceiptId() + \" | Summa: \" + r.getTotalAmount());\n    }\n}",
    "expectedOutput": "Chek: RCP-1092 | Summa: 125000.0",
    "newKnowledge": {
      "uz": "76-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 76: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 76: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getReceiptId()",
        "signature": "public String getReceiptId()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String receiptId</code> maydonining qiymatini return qiladi (masalan, <code>\"RCP-1092\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String receiptId</code> (e.g. <code>\"RCP-1092\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String receiptId</code> (например, <code>\"RCP-1092\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>receiptId</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>receiptId</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>receiptId</code> без возможности модификации."
        }
      },
      {
        "name": "getTotalAmount()",
        "signature": "public double getTotalAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double totalAmount</code> maydonining qiymatini return qiladi (masalan, <code>125000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double totalAmount</code> (e.g. <code>125000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double totalAmount</code> (например, <code>125000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>totalAmount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>totalAmount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>totalAmount</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "OrderReceipt",
        "signature": "public OrderReceipt(String receiptId, double totalAmount)",
        "params": {
          "uz": "<code>String receiptId, double totalAmount</code> (masalan, <code>\"RCP-1092\", 125000.0</code>)",
          "en": "<code>String receiptId, double totalAmount</code> (e.g. <code>\"RCP-1092\", 125000.0</code>)",
          "ru": "<code>String receiptId, double totalAmount</code> (например, <code>\"RCP-1092\", 125000.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.receiptId = receiptId;</code> <code>this.totalAmount = totalAmount;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.receiptId = receiptId;</code> <code>this.totalAmount = totalAmount;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.receiptId = receiptId;</code> <code>this.totalAmount = totalAmount;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`r` nomli `OrderReceipt` ob'yektini yarating va argument sifatida `\"RCP-1092\", 125000.0` qiymatini bering."
        ],
        "en": [
          "Create a `OrderReceipt` object named `r` and pass argument(s) `\"RCP-1092\", 125000.0`."
        ],
        "ru": [
          "Создайте объект `OrderReceipt` с именем `r` и передайте аргумент(ы) `\"RCP-1092\", 125000.0`."
        ]
      },
      "expectedOutput": "Chek: RCP-1092 | Summa: 125000.0"
    }
  },
  {
    "id": 77,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "77. Payme — Wither Nusxalash Usuli Bilan O'zgarmas Nuqta (Point2D)",
      "en": "77. Payme — Immutable 2D Coordinate with Wither Pattern",
      "ru": "77. Payme — Неизменяемая точка с паттерном Wither"
    },
    "scenario": {
      "uz": "O'zgarmas ob'yektda holatni o'zgartirish o'rniga yangi ob'yekt qaytaruvchi 'withX(double newX)' metodi yoziladi (Wither Pattern). Asl nuqta o'zgarmasdan qoladi.",
      "en": "In immutable classes, state modification is performed via wither methods returning brand new instances.",
      "ru": "Вместо сеттеров неизменяемые классы используют методы withX, возвращающие новые экземпляры."
    },
    "requirements": {
      "classes": [
        "Point2D",
        "Main"
      ],
      "privateFields": [
        "x",
        "y"
      ],
      "methods": [
        "withX",
        "withY",
        "getX",
        "getY"
      ],
      "keywords": [
        "final",
        "this",
        "new"
      ]
    },
    "starterCode": "class Point2D {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Point2D {\n    private final double x;\n    private final double y;\n\n    public Point2D(double x, double y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    public double getX() { return this.x; }\n    public double getY() { return this.y; }\n\n    public Point2D withX(double newX) {\n        return new Point2D(newX, this.y);\n    }\n\n    public Point2D withY(double newY) {\n        return new Point2D(this.x, newY);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Point2D p1 = new Point2D(10.0, 20.0);\n        Point2D p2 = p1.withX(50.0);\n        System.out.println(\"P1: (\" + p1.getX() + \", \" + p1.getY() + \") | P2: (\" + p2.getX() + \", \" + p2.getY() + \")\");\n    }\n}",
    "expectedOutput": "P1: (10.0, 20.0) | P2: (50.0, 20.0)",
    "newKnowledge": {
      "uz": "77-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 77: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 77: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getX()",
        "signature": "public double getX()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double x</code> maydonining qiymatini return qiladi (masalan, <code>newX</code>).",
          "en": "<code>double</code>: returns the value of <code>private double x</code> (e.g. <code>newX</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double x</code> (например, <code>newX</code>)."
        },
        "desc": {
          "uz": "Ichki <code>x</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>x</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>x</code> без возможности модификации."
        }
      },
      {
        "name": "getY()",
        "signature": "public double getY()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double y</code> maydonining qiymatini return qiladi (masalan, <code>this.y</code>).",
          "en": "<code>double</code>: returns the value of <code>private double y</code> (e.g. <code>this.y</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double y</code> (например, <code>this.y</code>)."
        },
        "desc": {
          "uz": "Ichki <code>y</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>y</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>y</code> без возможности модификации."
        }
      },
      {
        "name": "withX()",
        "signature": "public Point2D withX(double newX)",
        "params": {
          "uz": "<code>double newX</code> (masalan, <code>50.0</code>)",
          "en": "<code>double newX</code> (e.g. <code>50.0</code>)",
          "ru": "<code>double newX</code> (например, <code>50.0</code>)"
        },
        "returns": {
          "uz": "<code>Point2D</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>Point2D</code> ob'yektini return qiladi.",
          "en": "<code>Point2D</code>: returns a new <code>Point2D</code> instance without mutating original object.",
          "ru": "<code>Point2D</code>: возвращает новый экземпляр <code>Point2D</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "withY()",
        "signature": "public Point2D withY(double newY)",
        "params": {
          "uz": "<code>double newY</code>",
          "en": "<code>double newY</code>",
          "ru": "<code>double newY</code>"
        },
        "returns": {
          "uz": "<code>Point2D</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>Point2D</code> ob'yektini return qiladi.",
          "en": "<code>Point2D</code>: returns a new <code>Point2D</code> instance without mutating original object.",
          "ru": "<code>Point2D</code>: возвращает новый экземпляр <code>Point2D</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Point2D",
        "signature": "public Point2D(double x, double y)",
        "params": {
          "uz": "<code>double x, double y</code> (masalan, <code>newX, this.y</code>)",
          "en": "<code>double x, double y</code> (e.g. <code>newX, this.y</code>)",
          "ru": "<code>double x, double y</code> (например, <code>newX, this.y</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.x = x;</code> <code>this.y = y;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.x = x;</code> <code>this.y = y;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.x = x;</code> <code>this.y = y;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`p1` nomli `Point2D` ob'yektini yarating va argument sifatida `10.0, 20.0` qiymatini bering.",
          "Tegishli `withX()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Point2D` object named `p1` and pass argument(s) `10.0, 20.0`.",
          "Invoke `withX()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Point2D` с именем `p1` и передайте аргумент(ы) `10.0, 20.0`.",
          "Вызовите метод(ы) `withX()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "P1: (10.0, 20.0) | P2: (50.0, 20.0)"
    }
  },
  {
    "id": 78,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "78. Click — O'zgarmas Pul (Money Value Object) va add() Metodi",
      "en": "78. Click — Immutable Money Value Object with Safe Addition",
      "ru": "78. Click — Неизменяемый объект значения денег (Money Value Object)"
    },
    "scenario": {
      "uz": "Pul ob'yekti (Money) o'zgarmas bo'lishi shart. 'add(Money other)' metodi valyuta mosligini tekshirib, yangi 'Money(this.amount + other.amount, this.currency)' qaytaradi.",
      "en": "Money value object is strictly immutable. 'add(other)' verifies currency equality and returns a new Money instance.",
      "ru": "Объект Money неизменяем. Метод add проверяет валюту и возвращает новый объект Money."
    },
    "requirements": {
      "classes": [
        "Money",
        "Main"
      ],
      "privateFields": [
        "amount",
        "currency"
      ],
      "methods": [
        "add",
        "getAmount",
        "getCurrency"
      ],
      "keywords": [
        "final",
        "this",
        "new"
      ]
    },
    "starterCode": "class Money {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Money {\n    private final double amount;\n    private final String currency;\n\n    public Money(double amount, String currency) {\n        this.amount = amount;\n        this.currency = (currency != null) ? currency.toUpperCase() : \"UZS\";\n    }\n\n    public double getAmount() { return this.amount; }\n    public String getCurrency() { return this.currency; }\n\n    public Money add(Money other) {\n        if (other == null || !this.currency.equals(other.currency)) {\n            throw new IllegalArgumentException(\"Valyuta mos kelmadi\");\n        }\n        return new Money(this.amount + other.amount, this.currency);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Money m1 = new Money(50000.0, \"UZS\");\n        Money m2 = new Money(30000.0, \"UZS\");\n        Money m3 = m1.add(m2);\n        System.out.println(\"Jami pul: \" + m3.getAmount() + \" \" + m3.getCurrency());\n    }\n}",
    "expectedOutput": "Jami pul: 80000.0 UZS",
    "newKnowledge": {
      "uz": "78-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 78: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 78: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getAmount()",
        "signature": "public double getAmount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double amount</code> maydonining qiymatini return qiladi (masalan, <code>this.amount + other.amount</code>).",
          "en": "<code>double</code>: returns the value of <code>private double amount</code> (e.g. <code>this.amount + other.amount</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double amount</code> (например, <code>this.amount + other.amount</code>)."
        },
        "desc": {
          "uz": "Ichki <code>amount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>amount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>amount</code> без возможности модификации."
        }
      },
      {
        "name": "getCurrency()",
        "signature": "public String getCurrency()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String currency</code> maydonining qiymatini return qiladi (masalan, <code>this.currency</code>).",
          "en": "<code>String</code>: returns the value of <code>private String currency</code> (e.g. <code>this.currency</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String currency</code> (например, <code>this.currency</code>)."
        },
        "desc": {
          "uz": "Ichki <code>currency</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>currency</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>currency</code> без возможности модификации."
        }
      },
      {
        "name": "add()",
        "signature": "public Money add(Money other)",
        "params": {
          "uz": "<code>Money other</code> (masalan, <code>m2</code>)",
          "en": "<code>Money other</code> (e.g. <code>m2</code>)",
          "ru": "<code>Money other</code> (например, <code>m2</code>)"
        },
        "returns": {
          "uz": "<code>Money</code>: agar <code>amount</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>amount</code> qiymatini return qiladi (masalan, <code>this.amount + other.amount</code>).",
          "en": "<code>Money</code>: returns safe default if <code>amount</code> is null, otherwise returns <code>amount</code> (e.g. <code>this.amount + other.amount</code>).",
          "ru": "<code>Money</code>: возвращает безопасное значение если <code>amount</code> null, иначе <code>amount</code> (например, <code>this.amount + other.amount</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Money",
        "signature": "public Money(double amount, String currency)",
        "params": {
          "uz": "<code>double amount, String currency</code> (masalan, <code>this.amount + other.amount, this.currency</code>)",
          "en": "<code>double amount, String currency</code> (e.g. <code>this.amount + other.amount, this.currency</code>)",
          "ru": "<code>double amount, String currency</code> (например, <code>this.amount + other.amount, this.currency</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.amount = amount;</code> <code>this.currency = (currency != null) ? currency.toUpperCase() : \"UZS\";</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.amount = amount;</code> <code>this.currency = (currency != null) ? currency.toUpperCase() : \"UZS\";</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.amount = amount;</code> <code>this.currency = (currency != null) ? currency.toUpperCase() : \"UZS\";</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `m1` (50000.0, \"UZS\") hamda `m2` (30000.0, \"UZS\").",
          "Tegishli `add()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `m1` (50000.0, \"UZS\") and `m2` (30000.0, \"UZS\").",
          "Invoke `add()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `m1` (50000.0, \"UZS\") и `m2` (30000.0, \"UZS\").",
          "Вызовите метод(ы) `add()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Jami pul: 80000.0 UZS"
    }
  },
  {
    "id": 79,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "79. Korzinka — O'zgarmas Kompleks Son (Complex Number Arithmetic)",
      "en": "79. Korzinka — Immutable Complex Number Mathematical Value Object",
      "ru": "79. Korzinka — Неизменяемое комплексное число с операцией сложения"
    },
    "scenario": {
      "uz": "Kompleks son (real + imag*i) matematik ob'yekt sifatida o'zgarmasdir. 'plus(Complex other)' yangi 'new Complex(this.real + other.real, this.imag + other.imag)' qaytarsin.",
      "en": "Immutable Complex number object with real and imaginary parts. 'plus()' produces a new instance.",
      "ru": "Неизменяемое комплексное число: операция сложения возвращает новый экземпляр."
    },
    "requirements": {
      "classes": [
        "Complex",
        "Main"
      ],
      "privateFields": [
        "real",
        "imag"
      ],
      "methods": [
        "plus",
        "toString"
      ],
      "keywords": [
        "final",
        "this",
        "new"
      ]
    },
    "starterCode": "class Complex {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Complex {\n    private final double real;\n    private final double imag;\n\n    public Complex(double real, double imag) {\n        this.real = real;\n        this.imag = imag;\n    }\n\n    public Complex plus(Complex other) {\n        return new Complex(this.real + other.real, this.imag + other.imag);\n    }\n\n    @Override\n    public String toString() {\n        return this.real + \" + \" + this.imag + \"i\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Complex c1 = new Complex(3.0, 2.0);\n        Complex c2 = new Complex(1.0, 7.0);\n        Complex c3 = c1.plus(c2);\n        System.out.println(\"Yig'indi: \" + c3);\n    }\n}",
    "expectedOutput": "Yig'indi: 4.0 + 9.0i",
    "newKnowledge": {
      "uz": "79-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 79: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 79: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "plus()",
        "signature": "public Complex plus(Complex other)",
        "params": {
          "uz": "<code>Complex other</code> (masalan, <code>c2</code>)",
          "en": "<code>Complex other</code> (e.g. <code>c2</code>)",
          "ru": "<code>Complex other</code> (например, <code>c2</code>)"
        },
        "returns": {
          "uz": "<code>Complex</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>Complex</code> ob'yektini return qiladi.",
          "en": "<code>Complex</code>: returns a new <code>Complex</code> instance without mutating original object.",
          "ru": "<code>Complex</code>: возвращает новый экземпляр <code>Complex</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "toString()",
        "signature": "public String toString()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Complex",
        "signature": "public Complex(double real, double imag)",
        "params": {
          "uz": "<code>double real, double imag</code> (masalan, <code>this.real + other.real, this.imag + other.imag</code>)",
          "en": "<code>double real, double imag</code> (e.g. <code>this.real + other.real, this.imag + other.imag</code>)",
          "ru": "<code>double real, double imag</code> (например, <code>this.real + other.real, this.imag + other.imag</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.real = real;</code> <code>this.imag = imag;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.real = real;</code> <code>this.imag = imag;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.real = real;</code> <code>this.imag = imag;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `c1` (3.0, 2.0) hamda `c2` (1.0, 7.0).",
          "Tegishli `plus()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `c1` (3.0, 2.0) and `c2` (1.0, 7.0).",
          "Invoke `plus()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `c1` (3.0, 2.0) и `c2` (1.0, 7.0).",
          "Вызовите метод(ы) `plus()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yig'indi: 4.0 + 9.0i"
    }
  },
  {
    "id": 80,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "80. Yandex Go — O'zgarmas Login O'rami (Immutable Username Wrapper)",
      "en": "80. Yandex Go — Immutable Self-Validating Username Wrapper",
      "ru": "80. Yandex Go — Неизменяемая самовалидирующаяся обертка логина"
    },
    "scenario": {
      "uz": "Primitive Obsession xatosidan qochish uchun String o'rniga alohida o'zgarmas 'Username' klassi ishlatiladi. Konstruktorda probellar tozalab kichik harfga o'tkaziladi va faqat getter orqali o'qiladi.",
      "en": "Avoid primitive obsession by wrapping username inside an immutable self-validating class.",
      "ru": "Избегайте примитивной одержимости: оберните логин в отдельный неизменяемый класс."
    },
    "requirements": {
      "classes": [
        "Username",
        "Main"
      ],
      "privateFields": [
        "value"
      ],
      "methods": [
        "getValue"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class Username {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Username {\n    private final String value;\n\n    public Username(String raw) {\n        if (raw == null || raw.trim().length() < 3) {\n            throw new IllegalArgumentException(\"Yaroqsiz login\");\n        }\n        this.value = raw.trim().toLowerCase();\n    }\n\n    public String getValue() {\n        return this.value;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Username u = new Username(\"  Azizbek_2026  \");\n        System.out.println(\"Login: \" + u.getValue());\n    }\n}",
    "expectedOutput": "Login: azizbek_2026",
    "newKnowledge": {
      "uz": "80-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 80: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 80: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getValue()",
        "signature": "public String getValue()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String value</code> maydonining qiymatini return qiladi (masalan, <code>\"  Azizbek_2026  \"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String value</code> (e.g. <code>\"  Azizbek_2026  \"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String value</code> (например, <code>\"  Azizbek_2026  \"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>value</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>value</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>value</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Username",
        "signature": "public Username(String raw)",
        "params": {
          "uz": "<code>String raw</code> (masalan, <code>\"  Azizbek_2026  \"</code>)",
          "en": "<code>String raw</code> (e.g. <code>\"  Azizbek_2026  \"</code>)",
          "ru": "<code>String raw</code> (например, <code>\"  Azizbek_2026  \"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.raw = = null || raw.trim().length() < 3) {\n            throw new IllegalArgumentException(\"Yaroqsiz login\");</code> <code>this.value = raw.trim().toLowerCase();</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.raw = = null || raw.trim().length() < 3) {\n            throw new IllegalArgumentException(\"Yaroqsiz login\");</code> <code>this.value = raw.trim().toLowerCase();</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.raw = = null || raw.trim().length() < 3) {\n            throw new IllegalArgumentException(\"Yaroqsiz login\");</code> <code>this.value = raw.trim().toLowerCase();</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`u` nomli `Username` ob'yektini yarating va argument sifatida `\"  Azizbek_2026  \"` qiymatini bering."
        ],
        "en": [
          "Create a `Username` object named `u` and pass argument(s) `\"  Azizbek_2026  \"`."
        ],
        "ru": [
          "Создайте объект `Username` с именем `u` и передайте аргумент(ы) `\"  Azizbek_2026  \"`."
        ]
      },
      "expectedOutput": "Login: azizbek_2026"
    }
  },
  {
    "id": 81,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "81. Safia — O'zgarmas RGB Rang (Immutable Color with darken())",
      "en": "81. Safia — Immutable RGB Color with Transformation Wither",
      "ru": "81. Safia — Неизменяемый RGB цвет с методом затемнения darken()"
    },
    "scenario": {
      "uz": "RGB rang o'zgarmasdir: r, g, b (0-255). 'darken(double factor)' metodi (masalan factor=0.5) har bir kanalni ko'paytirib, yangi 'Color' ob'yektini qaytarsin.",
      "en": "RGB Color is immutable. 'darken(factor)' multiplies channels by factor and returns a new Color instance.",
      "ru": "Цвет неизменяем. Метод darken(factor) масштабирует каналы и возвращает новый Color."
    },
    "requirements": {
      "classes": [
        "ColorRGB",
        "Main"
      ],
      "privateFields": [
        "red",
        "green",
        "blue"
      ],
      "methods": [
        "darken",
        "toString"
      ],
      "keywords": [
        "final",
        "this",
        "new"
      ]
    },
    "starterCode": "class ColorRGB {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ColorRGB {\n    private final int red;\n    private final int green;\n    private final int blue;\n\n    public ColorRGB(int red, int green, int blue) {\n        this.red = Math.max(0, Math.min(255, red));\n        this.green = Math.max(0, Math.min(255, green));\n        this.blue = Math.max(0, Math.min(255, blue));\n    }\n\n    public ColorRGB darken(double factor) {\n        return new ColorRGB((int)(this.red * factor), (int)(this.green * factor), (int)(this.blue * factor));\n    }\n\n    @Override\n    public String toString() {\n        return \"rgb(\" + this.red + \",\" + this.green + \",\" + this.blue + \")\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ColorRGB c1 = new ColorRGB(200, 100, 50);\n        ColorRGB c2 = c1.darken(0.5);\n        System.out.println(\"Asl: \" + c1 + \" | To'q: \" + c2);\n    }\n}",
    "expectedOutput": "Asl: rgb(200,100,50) | To'q: rgb(100,50,25)",
    "newKnowledge": {
      "uz": "81-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 81: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 81: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "darken()",
        "signature": "public ColorRGB darken(double factor)",
        "params": {
          "uz": "<code>double factor</code> (masalan, <code>0.5</code>)",
          "en": "<code>double factor</code> (e.g. <code>0.5</code>)",
          "ru": "<code>double factor</code> (например, <code>0.5</code>)"
        },
        "returns": {
          "uz": "<code>ColorRGB</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>ColorRGB</code> ob'yektini return qiladi.",
          "en": "<code>ColorRGB</code>: returns a new <code>ColorRGB</code> instance without mutating original object.",
          "ru": "<code>ColorRGB</code>: возвращает новый экземпляр <code>ColorRGB</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "toString()",
        "signature": "public String toString()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ColorRGB",
        "signature": "public ColorRGB(int red, int green, int blue)",
        "params": {
          "uz": "<code>int red, int green, int blue</code> (masalan, <code>(int</code>)",
          "en": "<code>int red, int green, int blue</code> (e.g. <code>(int</code>)",
          "ru": "<code>int red, int green, int blue</code> (например, <code>(int</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.red = Math.max(0, Math.min(255, red));</code> <code>this.green = Math.max(0, Math.min(255, green));</code> <code>this.blue = Math.max(0, Math.min(255, blue));</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.red = Math.max(0, Math.min(255, red));</code> <code>this.green = Math.max(0, Math.min(255, green));</code> <code>this.blue = Math.max(0, Math.min(255, blue));</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.red = Math.max(0, Math.min(255, red));</code> <code>this.green = Math.max(0, Math.min(255, green));</code> <code>this.blue = Math.max(0, Math.min(255, blue));</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`c1` nomli `ColorRGB` ob'yektini yarating va argument sifatida `200, 100, 50` qiymatini bering.",
          "Tegishli `darken()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ColorRGB` object named `c1` and pass argument(s) `200, 100, 50`.",
          "Invoke `darken()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ColorRGB` с именем `c1` и передайте аргумент(ы) `200, 100, 50`.",
          "Вызовите метод(ы) `darken()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Asl: rgb(200,100,50) | To'q: rgb(100,50,25)"
    }
  },
  {
    "id": 82,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "82. Dodo Pizza — O'zgarmas Vaqt Oralig'i (Immutable TimeInterval & Overlap)",
      "en": "82. Dodo Pizza — Immutable TimeInterval Value Object with Overlap Query",
      "ru": "82. Dodo Pizza — Неизменяемый временной интервал с проверкой пересечения"
    },
    "scenario": {
      "uz": "Yetkazish oynasi ('startMinute' va 'endMinute') o'zgarmasdir. 'boolean overlaps(TimeInterval other)' metodi ikkita oraliq kesishishini sof funksional hisoblab bersin.",
      "en": "Delivery time interval is immutable. 'overlaps(other)' evaluates intersection purely without state changes.",
      "ru": "Интервал времени доставки неизменяем. Метод overlaps проверяет пересечение интервалов."
    },
    "requirements": {
      "classes": [
        "TimeInterval",
        "Main"
      ],
      "privateFields": [
        "startMinute",
        "endMinute"
      ],
      "methods": [
        "overlaps",
        "getStartMinute",
        "getEndMinute"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class TimeInterval {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TimeInterval {\n    private final int startMinute;\n    private final int endMinute;\n\n    public TimeInterval(int startMinute, int endMinute) {\n        if (startMinute >= endMinute) throw new IllegalArgumentException(\"Start must be before end\");\n        this.startMinute = startMinute;\n        this.endMinute = endMinute;\n    }\n\n    public boolean overlaps(TimeInterval other) {\n        if (other == null) return false;\n        return this.startMinute < other.endMinute && this.endMinute > other.startMinute;\n    }\n\n    public int getStartMinute() { return this.startMinute; }\n    public int getEndMinute() { return this.endMinute; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TimeInterval t1 = new TimeInterval(600, 720);\n        TimeInterval t2 = new TimeInterval(690, 800);\n        TimeInterval t3 = new TimeInterval(750, 900);\n        System.out.println(\"T1 va T2: \" + t1.overlaps(t2) + \" | T1 va T3: \" + t1.overlaps(t3));\n    }\n}",
    "expectedOutput": "T1 va T2: true | T1 va T3: false",
    "newKnowledge": {
      "uz": "82-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 82: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 82: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "overlaps()",
        "signature": "public boolean overlaps(TimeInterval other)",
        "params": {
          "uz": "<code>TimeInterval other</code> (masalan, <code>t3</code>)",
          "en": "<code>TimeInterval other</code> (e.g. <code>t3</code>)",
          "ru": "<code>TimeInterval other</code> (например, <code>t3</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>startMinute</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>startMinute</code> qiymatini return qiladi (masalan, <code>600</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>startMinute</code> is null, otherwise returns <code>startMinute</code> (e.g. <code>600</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>startMinute</code> null, иначе <code>startMinute</code> (например, <code>600</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "getStartMinute()",
        "signature": "public int getStartMinute()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int startMinute</code> maydonining qiymatini return qiladi (masalan, <code>600</code>).",
          "en": "<code>int</code>: returns the value of <code>private int startMinute</code> (e.g. <code>600</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int startMinute</code> (например, <code>600</code>)."
        },
        "desc": {
          "uz": "Ichki <code>startMinute</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>startMinute</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>startMinute</code> без возможности модификации."
        }
      },
      {
        "name": "getEndMinute()",
        "signature": "public int getEndMinute()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int endMinute</code> maydonining qiymatini return qiladi (masalan, <code>720</code>).",
          "en": "<code>int</code>: returns the value of <code>private int endMinute</code> (e.g. <code>720</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int endMinute</code> (например, <code>720</code>)."
        },
        "desc": {
          "uz": "Ichki <code>endMinute</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>endMinute</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>endMinute</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TimeInterval",
        "signature": "public TimeInterval(int startMinute, int endMinute)",
        "params": {
          "uz": "<code>int startMinute, int endMinute</code> (masalan, <code>600, 720</code>)",
          "en": "<code>int startMinute, int endMinute</code> (e.g. <code>600, 720</code>)",
          "ru": "<code>int startMinute, int endMinute</code> (например, <code>600, 720</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.startMinute = startMinute;</code> <code>this.endMinute = endMinute;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.startMinute = startMinute;</code> <code>this.endMinute = endMinute;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.startMinute = startMinute;</code> <code>this.endMinute = endMinute;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "3 ta ob'yekt yarating: `t1` (600, 720) hamda `t2` (690, 800) hamda `t3` (750, 900)."
        ],
        "en": [
          "Create 3 objects: `t1` (600, 720) and `t2` (690, 800) and `t3` (750, 900)."
        ],
        "ru": [
          "Создайте 3 объекта: `t1` (600, 720) и `t2` (690, 800) и `t3` (750, 900)."
        ]
      },
      "expectedOutput": "T1 va T2: true | T1 va T3: false"
    }
  },
  {
    "id": 83,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "83. Texnomart — O'zgarmas IP Manzil (IPv4 Value Object)",
      "en": "83. Texnomart — Immutable IPv4 Address Value Object Parser",
      "ru": "83. Texnomart — Неизменяемый объект IPv4-адреса"
    },
    "scenario": {
      "uz": "Server IP manzili '192.168.1.1' qismlari tekshirilib, o'zgarmas 4 ta int oktet (o1, o2, o3, o4) sifatida saqlanadi. 'getOctet(int index)' orqali o'qiladi.",
      "en": "Immutable IPv4 parser stores 4 validated octets [0-255]. Read-only query via getOctet(int idx).",
      "ru": "Неизменяемый парсер IPv4 хранит 4 проверенных октета [0-255]."
    },
    "requirements": {
      "classes": [
        "IpAddress",
        "Main"
      ],
      "privateFields": [
        "o1",
        "o2",
        "o3",
        "o4"
      ],
      "methods": [
        "getOctet",
        "toString"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class IpAddress {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class IpAddress {\n    private final int o1, o2, o3, o4;\n\n    public IpAddress(String ip) {\n        String[] parts = ip.split(\"\\\\.\");\n        if (parts.length != 4) throw new IllegalArgumentException(\"Yaroqsiz IP\");\n        this.o1 = Integer.parseInt(parts[0]);\n        this.o2 = Integer.parseInt(parts[1]);\n        this.o3 = Integer.parseInt(parts[2]);\n        this.o4 = Integer.parseInt(parts[3]);\n    }\n\n    public int getOctet(int index) {\n        switch (index) {\n            case 1: return this.o1;\n            case 2: return this.o2;\n            case 3: return this.o3;\n            case 4: return this.o4;\n            default: throw new IndexOutOfBoundsException();\n        }\n    }\n\n    @Override\n    public String toString() {\n        return o1 + \".\" + o2 + \".\" + o3 + \".\" + o4;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IpAddress ip = new IpAddress(\"192.168.0.1\");\n        System.out.println(\"Oktet 1: \" + ip.getOctet(1) + \" | Oktet 4: \" + ip.getOctet(4));\n    }\n}",
    "expectedOutput": "Oktet 1: 192 | Oktet 4: 1",
    "newKnowledge": {
      "uz": "83-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 83: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 83: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getOctet()",
        "signature": "public int getOctet(int index)",
        "params": {
          "uz": "<code>int index</code> (masalan, <code>4</code>)",
          "en": "<code>int index</code> (e.g. <code>4</code>)",
          "ru": "<code>int index</code> (например, <code>4</code>)"
        },
        "returns": {
          "uz": "<code>int</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int</code>: returns computed business result or operation state.",
          "ru": "<code>int</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "toString()",
        "signature": "public String toString()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "IpAddress",
        "signature": "public IpAddress(String ip)",
        "params": {
          "uz": "<code>String ip</code> (masalan, <code>\"192.168.0.1\"</code>)",
          "en": "<code>String ip</code> (e.g. <code>\"192.168.0.1\"</code>)",
          "ru": "<code>String ip</code> (например, <code>\"192.168.0.1\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.parts = ip.split(\"\\\\.\");</code> <code>this.o1 = Integer.parseInt(parts[0]);</code> <code>this.o2 = Integer.parseInt(parts[1]);</code> <code>this.o3 = Integer.parseInt(parts[2]);</code> <code>this.o4 = Integer.parseInt(parts[3]);</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.parts = ip.split(\"\\\\.\");</code> <code>this.o1 = Integer.parseInt(parts[0]);</code> <code>this.o2 = Integer.parseInt(parts[1]);</code> <code>this.o3 = Integer.parseInt(parts[2]);</code> <code>this.o4 = Integer.parseInt(parts[3]);</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.parts = ip.split(\"\\\\.\");</code> <code>this.o1 = Integer.parseInt(parts[0]);</code> <code>this.o2 = Integer.parseInt(parts[1]);</code> <code>this.o3 = Integer.parseInt(parts[2]);</code> <code>this.o4 = Integer.parseInt(parts[3]);</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`ip` nomli `IpAddress` ob'yektini yarating va argument sifatida `\"192.168.0.1\"` qiymatini bering."
        ],
        "en": [
          "Create a `IpAddress` object named `ip` and pass argument(s) `\"192.168.0.1\"`."
        ],
        "ru": [
          "Создайте объект `IpAddress` с именем `ip` и передайте аргумент(ы) `\"192.168.0.1\"`."
        ]
      },
      "expectedOutput": "Oktet 1: 192 | Oktet 4: 1"
    }
  },
  {
    "id": 84,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "84. Asaxiy — O'zgarmas 3D O'lchamlar (Dimensions3D: scale() va volume())",
      "en": "84. Asaxiy — Immutable 3D Dimensions with Scale Transformation",
      "ru": "84. Asaxiy — Неизменяемые трехмерные габариты с масштабированием"
    },
    "scenario": {
      "uz": "Tovar qutisi o'lchamlari (w, h, d) o'zgarmasdir. 'scale(double factor)' har bir o'lchamni ko'paytirib yangi Dimensions3D qaytaradi, 'volume()' esa hajmini hisoblaydi.",
      "en": "Immutable 3D box dimensions: scale(factor) returns scaled instance; volume() derives width*height*depth.",
      "ru": "Неизменяемые габариты: scale возвращает масштабированный объект, volume считает объем."
    },
    "requirements": {
      "classes": [
        "Dimensions3D",
        "Main"
      ],
      "privateFields": [
        "width",
        "height",
        "depth"
      ],
      "methods": [
        "scale",
        "volume"
      ],
      "keywords": [
        "final",
        "this",
        "new"
      ]
    },
    "starterCode": "class Dimensions3D {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Dimensions3D {\n    private final double width;\n    private final double height;\n    private final double depth;\n\n    public Dimensions3D(double width, double height, double depth) {\n        this.width = width;\n        this.height = height;\n        this.depth = depth;\n    }\n\n    public Dimensions3D scale(double factor) {\n        return new Dimensions3D(this.width * factor, this.height * factor, this.depth * factor);\n    }\n\n    public double volume() {\n        return this.width * this.height * this.depth;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Dimensions3D box1 = new Dimensions3D(10.0, 20.0, 30.0);\n        Dimensions3D box2 = box1.scale(2.0);\n        System.out.println(\"Hajm 1: \" + box1.volume() + \" | Hajm 2: \" + box2.volume());\n    }\n}",
    "expectedOutput": "Hajm 1: 6000.0 | Hajm 2: 48000.0",
    "newKnowledge": {
      "uz": "84-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 84: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 84: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "scale()",
        "signature": "public Dimensions3D scale(double factor)",
        "params": {
          "uz": "<code>double factor</code> (masalan, <code>2.0</code>)",
          "en": "<code>double factor</code> (e.g. <code>2.0</code>)",
          "ru": "<code>double factor</code> (например, <code>2.0</code>)"
        },
        "returns": {
          "uz": "<code>Dimensions3D</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>Dimensions3D</code> ob'yektini return qiladi.",
          "en": "<code>Dimensions3D</code>: returns a new <code>Dimensions3D</code> instance without mutating original object.",
          "ru": "<code>Dimensions3D</code>: возвращает новый экземпляр <code>Dimensions3D</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "volume()",
        "signature": "public double volume()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Dimensions3D",
        "signature": "public Dimensions3D(double width, double height, double depth)",
        "params": {
          "uz": "<code>double width, double height, double depth</code> (masalan, <code>this.width * factor, this.height * factor, this.depth * factor</code>)",
          "en": "<code>double width, double height, double depth</code> (e.g. <code>this.width * factor, this.height * factor, this.depth * factor</code>)",
          "ru": "<code>double width, double height, double depth</code> (например, <code>this.width * factor, this.height * factor, this.depth * factor</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.width = width;</code> <code>this.height = height;</code> <code>this.depth = depth;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.width = width;</code> <code>this.height = height;</code> <code>this.depth = depth;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.width = width;</code> <code>this.height = height;</code> <code>this.depth = depth;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`box1` nomli `Dimensions3D` ob'yektini yarating va argument sifatida `10.0, 20.0, 30.0` qiymatini bering.",
          "Tegishli `scale()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Dimensions3D` object named `box1` and pass argument(s) `10.0, 20.0, 30.0`.",
          "Invoke `scale()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Dimensions3D` с именем `box1` и передайте аргумент(ы) `10.0, 20.0, 30.0`.",
          "Вызовите метод(ы) `scale()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Hajm 1: 6000.0 | Hajm 2: 48000.0"
    }
  },
  {
    "id": 85,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "85. Medion — O'zgarmas Harorat (Kelvin Asosidagi Temperature Value Object)",
      "en": "85. Medion — Immutable Scientific Temperature Value Object",
      "ru": "85. Medion — Неизменяемый объект температуры на основе Кельвина"
    },
    "scenario": {
      "uz": "Ilmiy o'lchovlarda harorat faqat Kelvin shkalasida ('final double kelvin') saqlanadi. 'toCelsius()', 'toFahrenheit()', va 'fromCelsius(c)' fabrika metodi orqali xavfsiz boshqariladi.",
      "en": "Temperature internally stores immutable kelvin value. Safely converts to Celsius and Fahrenheit.",
      "ru": "Температура внутренне хранится в Кельвинах. Предоставляет методы конвертации."
    },
    "requirements": {
      "classes": [
        "Temperature",
        "Main"
      ],
      "privateFields": [
        "kelvin"
      ],
      "methods": [
        "toCelsius",
        "toFahrenheit"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class Temperature {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Temperature {\n    private final double kelvin;\n\n    public Temperature(double kelvin) {\n        if (kelvin < 0.0) throw new IllegalArgumentException(\"Mutlaq noldan past bo'lishi mumkin emas\");\n        this.kelvin = kelvin;\n    }\n\n    public double toCelsius() {\n        return this.kelvin - 273.15;\n    }\n\n    public double toFahrenheit() {\n        return toCelsius() * 9.0 / 5.0 + 32.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Temperature t = new Temperature(300.0);\n        System.out.println(\"Kelvin: 300 -> Selsiy: \" + Math.round(t.toCelsius()) + \" C\");\n    }\n}",
    "expectedOutput": "Kelvin: 300 -> Selsiy: 27 C",
    "newKnowledge": {
      "uz": "85-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 85: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 85: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "toCelsius()",
        "signature": "public double toCelsius()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>this.kelvin - 273.15</code> formulasi bo'yicha Selsiy haroratini return qiladi.",
          "en": "<code>double</code>: returns Celsius temperature calculated as <code>this.kelvin - 273.15</code>.",
          "ru": "<code>double</code>: возвращает температуру в Цельсиях по формуле <code>this.kelvin - 273.15</code>."
        },
        "desc": {
          "uz": "Kelvin haroratini Selsiy shkalasiga o'tkazib return qiladi.",
          "en": "Converts Kelvin temperature to Celsius scale and returns it.",
          "ru": "Конвертирует температуру Кельвина в шкалу Цельсия и возвращает ее."
        }
      },
      {
        "name": "toFahrenheit()",
        "signature": "public double toFahrenheit()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Temperature",
        "signature": "public Temperature(double kelvin)",
        "params": {
          "uz": "<code>double kelvin</code> (masalan, <code>300.0</code>)",
          "en": "<code>double kelvin</code> (e.g. <code>300.0</code>)",
          "ru": "<code>double kelvin</code> (например, <code>300.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.kelvin = kelvin;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.kelvin = kelvin;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.kelvin = kelvin;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`t` nomli `Temperature` ob'yektini yarating va argument sifatida `300.0` qiymatini bering."
        ],
        "en": [
          "Create a `Temperature` object named `t` and pass argument(s) `300.0`."
        ],
        "ru": [
          "Создайте объект `Temperature` с именем `t` и передайте аргумент(ы) `300.0`."
        ]
      },
      "expectedOutput": "Kelvin: 300 -> Selsiy: 27 C"
    }
  },
  {
    "id": 86,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "86. Express24 — O'zgarmas GPS Koordinatasi (GeoPoint Value Object)",
      "en": "86. Express24 — Immutable Geographic Coordinate Value Object",
      "ru": "86. Express24 — Неизменяемые GPS координаты (GeoPoint)"
    },
    "scenario": {
      "uz": "Kuryer joylashuvi ('final double lat, final double lon') o'zgarmasdir. Konstruktorda -90..90 va -180..180 oralig'i tekshiriladi va 'distanceApproxKm(GeoPoint other)' hisoblab beriladi.",
      "en": "Immutable GeoPoint encapsulates lat [-90..90] and lon [-180..180] with read-only distance math.",
      "ru": "Неизменяемая точка GeoPoint с проверкой широты и долготы в конструкторе."
    },
    "requirements": {
      "classes": [
        "GeoPoint",
        "Main"
      ],
      "privateFields": [
        "latitude",
        "longitude"
      ],
      "methods": [
        "getLatitude",
        "getLongitude",
        "distanceApproxKm"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class GeoPoint {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class GeoPoint {\n    private final double latitude;\n    private final double longitude;\n\n    public GeoPoint(double latitude, double longitude) {\n        if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {\n            throw new IllegalArgumentException(\"Yaroqsiz koordinatalar\");\n        }\n        this.latitude = latitude;\n        this.longitude = longitude;\n    }\n\n    public double getLatitude() { return this.latitude; }\n    public double getLongitude() { return this.longitude; }\n\n    public double distanceApproxKm(GeoPoint other) {\n        double dLat = Math.abs(this.latitude - other.latitude) * 111.0;\n        double dLon = Math.abs(this.longitude - other.longitude) * 85.0;\n        return Math.sqrt(dLat * dLat + dLon * dLon);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GeoPoint p1 = new GeoPoint(41.30, 69.25);\n        GeoPoint p2 = new GeoPoint(41.30, 69.30);\n        System.out.println(\"Toshkent markazi: \" + p1.getLatitude() + \", \" + p1.getLongitude());\n    }\n}",
    "expectedOutput": "Toshkent markazi: 41.3, 69.25",
    "newKnowledge": {
      "uz": "86-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 86: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 86: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getLatitude()",
        "signature": "public double getLatitude()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double latitude</code> maydonining qiymatini return qiladi (masalan, <code>41.30</code>).",
          "en": "<code>double</code>: returns the value of <code>private double latitude</code> (e.g. <code>41.30</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double latitude</code> (например, <code>41.30</code>)."
        },
        "desc": {
          "uz": "Ichki <code>latitude</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>latitude</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>latitude</code> без возможности модификации."
        }
      },
      {
        "name": "getLongitude()",
        "signature": "public double getLongitude()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double longitude</code> maydonining qiymatini return qiladi (masalan, <code>69.25</code>).",
          "en": "<code>double</code>: returns the value of <code>private double longitude</code> (e.g. <code>69.25</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double longitude</code> (например, <code>69.25</code>)."
        },
        "desc": {
          "uz": "Ichki <code>longitude</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>longitude</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>longitude</code> без возможности модификации."
        }
      },
      {
        "name": "distanceApproxKm()",
        "signature": "public double distanceApproxKm(GeoPoint other)",
        "params": {
          "uz": "<code>GeoPoint other</code>",
          "en": "<code>GeoPoint other</code>",
          "ru": "<code>GeoPoint other</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "GeoPoint",
        "signature": "public GeoPoint(double latitude, double longitude)",
        "params": {
          "uz": "<code>double latitude, double longitude</code> (masalan, <code>41.30, 69.25</code>)",
          "en": "<code>double latitude, double longitude</code> (e.g. <code>41.30, 69.25</code>)",
          "ru": "<code>double latitude, double longitude</code> (например, <code>41.30, 69.25</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.latitude = latitude;</code> <code>this.longitude = longitude;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.latitude = latitude;</code> <code>this.longitude = longitude;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.latitude = latitude;</code> <code>this.longitude = longitude;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `p1` (41.30, 69.25) hamda `p2` (41.30, 69.30)."
        ],
        "en": [
          "Create 2 objects: `p1` (41.30, 69.25) and `p2` (41.30, 69.30)."
        ],
        "ru": [
          "Создайте 2 объекта: `p1` (41.30, 69.25) и `p2` (41.30, 69.30)."
        ]
      },
      "expectedOutput": "Toshkent markazi: 41.3, 69.25"
    }
  },
  {
    "id": 87,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "87. Beeline — O'zgarmas Foiz (Percentage Value Object: applyTo())",
      "en": "87. Beeline — Immutable Percentage Value Object with Multiplier Logic",
      "ru": "87. Beeline — Неизменяемый объект процента с методом applyTo()"
    },
    "scenario": {
      "uz": "Foiz stavkasi alohida o'zgarmas ob'yekt sifatida saqlanadi (0.0 <= fraction <= 1.0). 'applyTo(double total)' metodi berilgan summadan shu foiz miqdorini hisoblab beradi.",
      "en": "Percentage encapsulates fraction [0.0..1.0] immutably and derives 'applyTo(total)'.",
      "ru": "Неизменяемый процент: хранит дробь от 0.0 до 1.0 и вычисляет долю от суммы."
    },
    "requirements": {
      "classes": [
        "Percentage",
        "Main"
      ],
      "privateFields": [
        "fraction"
      ],
      "methods": [
        "applyTo",
        "getPercentDisplay"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class Percentage {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Percentage {\n    private final double fraction;\n\n    public Percentage(double pct0to100) {\n        if (pct0to100 < 0.0 || pct0to100 > 100.0) throw new IllegalArgumentException(\"Foiz 0..100 bo'lishi shart\");\n        this.fraction = pct0to100 / 100.0;\n    }\n\n    public double applyTo(double total) {\n        return total * this.fraction;\n    }\n\n    public String getPercentDisplay() {\n        return (this.fraction * 100.0) + \"%\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Percentage tax = new Percentage(12.0);\n        System.out.println(\"Displey: \" + tax.getPercentDisplay() + \" | Soliq: \" + tax.applyTo(100000.0) + \" UZS\");\n    }\n}",
    "expectedOutput": "Displey: 12.0% | Soliq: 12000.0 UZS",
    "newKnowledge": {
      "uz": "87-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 87: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 87: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "applyTo()",
        "signature": "public double applyTo(double total)",
        "params": {
          "uz": "<code>double total</code> (masalan, <code>100000.0</code>)",
          "en": "<code>double total</code> (e.g. <code>100000.0</code>)",
          "ru": "<code>double total</code> (например, <code>100000.0</code>)"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPercentDisplay()",
        "signature": "public String getPercentDisplay()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Percentage",
        "signature": "public Percentage(double pct0to100)",
        "params": {
          "uz": "<code>double pct0to100</code> (masalan, <code>12.0</code>)",
          "en": "<code>double pct0to100</code> (e.g. <code>12.0</code>)",
          "ru": "<code>double pct0to100</code> (например, <code>12.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.fraction = pct0to100 / 100.0;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.fraction = pct0to100 / 100.0;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.fraction = pct0to100 / 100.0;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tax` nomli `Percentage` ob'yektini yarating va argument sifatida `12.0` qiymatini bering."
        ],
        "en": [
          "Create a `Percentage` object named `tax` and pass argument(s) `12.0`."
        ],
        "ru": [
          "Создайте объект `Percentage` с именем `tax` и передайте аргумент(ы) `12.0`."
        ]
      },
      "expectedOutput": "Displey: 12.0% | Soliq: 12000.0 UZS"
    }
  },
  {
    "id": 88,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "88. Kapitalbank — O'zgarmas Valyuta Kursi Yozuvi (Immutable ExchangeRate)",
      "en": "88. Kapitalbank — Immutable Foreign Exchange Rate Record",
      "ru": "88. Kapitalbank — Неизменяемая запись курса валют"
    },
    "scenario": {
      "uz": "Audit talabi: O'rnatilgan valyuta kursi aslo o'zgarmaydi. 'ExchangeRate' sinfida 'fromCurrency', 'toCurrency', va 'rate' final maydonlari va 'convert(double amount)' metodi bo'lsin.",
      "en": "Forex rates are immutable once recorded. Implement final fields with read-only convert() logic.",
      "ru": "Курс валют строго неизменяем после фиксации. Метод convert производит конвертацию."
    },
    "requirements": {
      "classes": [
        "ExchangeRate",
        "Main"
      ],
      "privateFields": [
        "fromCurrency",
        "toCurrency",
        "rate"
      ],
      "methods": [
        "convert",
        "getRate"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class ExchangeRate {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ExchangeRate {\n    private final String fromCurrency;\n    private final String toCurrency;\n    private final double rate;\n\n    public ExchangeRate(String fromCurrency, String toCurrency, double rate) {\n        this.fromCurrency = fromCurrency;\n        this.toCurrency = toCurrency;\n        this.rate = rate;\n    }\n\n    public double convert(double amount) {\n        return amount * this.rate;\n    }\n\n    public double getRate() {\n        return this.rate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ExchangeRate usdToUzs = new ExchangeRate(\"USD\", \"UZS\", 12800.0);\n        System.out.println(\"100 USD = \" + usdToUzs.convert(100.0) + \" UZS\");\n    }\n}",
    "expectedOutput": "100 USD = 1280000.0 UZS",
    "newKnowledge": {
      "uz": "88-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 88: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 88: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "convert()",
        "signature": "public double convert(double amount)",
        "params": {
          "uz": "<code>double amount</code>",
          "en": "<code>double amount</code>",
          "ru": "<code>double amount</code>"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getRate()",
        "signature": "public double getRate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double rate</code> maydonining qiymatini return qiladi (masalan, <code>12800.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double rate</code> (e.g. <code>12800.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double rate</code> (например, <code>12800.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>rate</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>rate</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>rate</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ExchangeRate",
        "signature": "public ExchangeRate(String fromCurrency, String toCurrency, double rate)",
        "params": {
          "uz": "<code>String fromCurrency, String toCurrency, double rate</code> (masalan, <code>\"USD\", \"UZS\", 12800.0</code>)",
          "en": "<code>String fromCurrency, String toCurrency, double rate</code> (e.g. <code>\"USD\", \"UZS\", 12800.0</code>)",
          "ru": "<code>String fromCurrency, String toCurrency, double rate</code> (например, <code>\"USD\", \"UZS\", 12800.0</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.fromCurrency = fromCurrency;</code> <code>this.toCurrency = toCurrency;</code> <code>this.rate = rate;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.fromCurrency = fromCurrency;</code> <code>this.toCurrency = toCurrency;</code> <code>this.rate = rate;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.fromCurrency = fromCurrency;</code> <code>this.toCurrency = toCurrency;</code> <code>this.rate = rate;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`usdToUzs` nomli `ExchangeRate` ob'yektini yarating va argument sifatida `\"USD\", \"UZS\", 12800.0` qiymatini bering."
        ],
        "en": [
          "Create a `ExchangeRate` object named `usdToUzs` and pass argument(s) `\"USD\", \"UZS\", 12800.0`."
        ],
        "ru": [
          "Создайте объект `ExchangeRate` с именем `usdToUzs` и передайте аргумент(ы) `\"USD\", \"UZS\", 12800.0`."
        ]
      },
      "expectedOutput": "100 USD = 1280000.0 UZS"
    }
  },
  {
    "id": 89,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "89. UzAirways — O'zgarmas O'rindiq Bron Kvitansiyasi (Immutable SeatReservation)",
      "en": "89. UzAirways — Sealed Flight Seat Reservation Value Object",
      "ru": "89. UzAirways — Неизменяемый объект бронирования места"
    },
    "scenario": {
      "uz": "Samolyot o'rindig'i bron qilingach uning chipta raqami ('ticketNo'), yo'lovchi ('passenger'), va o'rindiq ('seat') qat'iy final bo'lib, xesh kodi avtomatik generatsiya qilinadi.",
      "en": "Seat reservation is permanently sealed upon booking. Fields are final with composite code.",
      "ru": "Бронирование авиабилета строго фиксируется. Поля финализированы, формируется код бронирования."
    },
    "requirements": {
      "classes": [
        "SeatReservation",
        "Main"
      ],
      "privateFields": [
        "ticketNo",
        "passenger",
        "seatCode"
      ],
      "methods": [
        "getSummary"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class SeatReservation {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SeatReservation {\n    private final String ticketNo;\n    private final String passenger;\n    private final String seatCode;\n\n    public SeatReservation(String ticketNo, String passenger, String seatCode) {\n        this.ticketNo = ticketNo;\n        this.passenger = passenger;\n        this.seatCode = seatCode;\n    }\n\n    public String getSummary() {\n        return \"Bilet: \" + this.ticketNo + \" | Yo'lovchi: \" + this.passenger + \" | Joy: \" + this.seatCode;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SeatReservation sr = new SeatReservation(\"HY-9921\", \"Sherzod\", \"12A\");\n        System.out.println(sr.getSummary());\n    }\n}",
    "expectedOutput": "Bilet: HY-9921 | Yo'lovchi: Sherzod | Joy: 12A",
    "newKnowledge": {
      "uz": "89-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 89: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 89: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getSummary()",
        "signature": "public String getSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SeatReservation",
        "signature": "public SeatReservation(String ticketNo, String passenger, String seatCode)",
        "params": {
          "uz": "<code>String ticketNo, String passenger, String seatCode</code> (masalan, <code>\"HY-9921\", \"Sherzod\", \"12A\"</code>)",
          "en": "<code>String ticketNo, String passenger, String seatCode</code> (e.g. <code>\"HY-9921\", \"Sherzod\", \"12A\"</code>)",
          "ru": "<code>String ticketNo, String passenger, String seatCode</code> (например, <code>\"HY-9921\", \"Sherzod\", \"12A\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.ticketNo = ticketNo;</code> <code>this.passenger = passenger;</code> <code>this.seatCode = seatCode;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.ticketNo = ticketNo;</code> <code>this.passenger = passenger;</code> <code>this.seatCode = seatCode;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.ticketNo = ticketNo;</code> <code>this.passenger = passenger;</code> <code>this.seatCode = seatCode;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`sr` nomli `SeatReservation` ob'yektini yarating va argument sifatida `\"HY-9921\", \"Sherzod\", \"12A\"` qiymatini bering."
        ],
        "en": [
          "Create a `SeatReservation` object named `sr` and pass argument(s) `\"HY-9921\", \"Sherzod\", \"12A\"`."
        ],
        "ru": [
          "Создайте объект `SeatReservation` с именем `sr` и передайте аргумент(ы) `\"HY-9921\", \"Sherzod\", \"12A\"`."
        ]
      },
      "expectedOutput": "Bilet: HY-9921 | Yo'lovchi: Sherzod | Joy: 12A"
    }
  },
  {
    "id": 90,
    "tier": 6,
    "tierName": "6-Bosqich: Immutability (O'zgarmas Obyektlar)",
    "sector": "76-90: Immutability & Value Objects",
    "title": {
      "uz": "90. WIUT SRS — To'liq Himoyalangan O'zgarmas Email (Master Value Object)",
      "en": "90. WIUT SRS — Master Immutable Email Value Object Suite",
      "ru": "90. WIUT SRS — Мастер-объект значения неизменяемого Email адреса"
    },
    "scenario": {
      "uz": "WIUT talaba pochtasi ('@wiut.uz') o'zgarmas Value Object: formatni tekshiradi, bo'shliqlarni olib tashlaydi, kichik harfga o'tkazadi, 'getDomain()' va 'getMasked()' funksiyalarini taqdim etadi.",
      "en": "Master immutable EmailAddress: enforces @wiut.uz domain, sanitizes, and provides domain extraction & masking.",
      "ru": "Мастер-объект Email: проверяет домен @wiut.uz, очищает строку, предоставляет маскирование."
    },
    "requirements": {
      "classes": [
        "EmailAddress",
        "Main"
      ],
      "privateFields": [
        "address"
      ],
      "methods": [
        "getAddress",
        "getDomain",
        "getMasked"
      ],
      "keywords": [
        "final",
        "this"
      ]
    },
    "starterCode": "class EmailAddress {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class EmailAddress {\n    private final String address;\n\n    public EmailAddress(String raw) {\n        if (raw == null) throw new IllegalArgumentException(\"Email null bo'lishi mumkin emas\");\n        String clean = raw.trim().toLowerCase();\n        if (!clean.contains(\"@\") || !clean.endsWith(\"@wiut.uz\")) {\n            throw new IllegalArgumentException(\"Faqat WIUT domeni qabul qilinadi\");\n        }\n        this.address = clean;\n    }\n\n    public String getAddress() {\n        return this.address;\n    }\n\n    public String getDomain() {\n        return this.address.substring(this.address.indexOf(\"@\") + 1);\n    }\n\n    public String getMasked() {\n        int atIdx = this.address.indexOf(\"@\");\n        return this.address.substring(0, 2) + \"***@\" + getDomain();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EmailAddress email = new EmailAddress(\"  00023271@wiut.uz  \");\n        System.out.println(\"Email: \" + email.getAddress() + \" | Domen: \" + email.getDomain() + \" | Niqoblangan: \" + email.getMasked());\n    }\n}",
    "expectedOutput": "Email: 00023271@wiut.uz | Domen: wiut.uz | Niqoblangan: 00***@wiut.uz",
    "newKnowledge": {
      "uz": "90-masala: O'zgarmas ob'yektlar (Immutability): barcha maydonlarni 'private final' qilish, settersiz ishlash va holatni o'zgartirish o'rniga yangi nusxa qaytarish (Value Object).",
      "en": "Challenge 90: Immutability and Value Objects: sealing fields with 'private final' and returning new instances upon mutation.",
      "ru": "Задача 90: Неизменяемые объекты (Immutability) и объекты-значения: финализация полей и паттерн Wither."
    },
    "newKnowledgeTags": [
      "immutability",
      "final",
      "value object",
      "wither pattern"
    ],
    "methodSpecs": [
      {
        "name": "getAddress()",
        "signature": "public String getAddress()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String address</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String address</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String address</code>."
        },
        "desc": {
          "uz": "Ichki <code>address</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>address</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>address</code> без возможности модификации."
        }
      },
      {
        "name": "getDomain()",
        "signature": "public String getDomain()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      },
      {
        "name": "getMasked()",
        "signature": "public String getMasked()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "EmailAddress",
        "signature": "public EmailAddress(String raw)",
        "params": {
          "uz": "<code>String raw</code> (masalan, <code>\"  00023271@wiut.uz  \"</code>)",
          "en": "<code>String raw</code> (e.g. <code>\"  00023271@wiut.uz  \"</code>)",
          "ru": "<code>String raw</code> (например, <code>\"  00023271@wiut.uz  \"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.raw = = null) throw new IllegalArgumentException(\"Email null bo'lishi mumkin emas\");</code> <code>this.clean = raw.trim().toLowerCase();</code> <code>this.address = clean;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.raw = = null) throw new IllegalArgumentException(\"Email null bo'lishi mumkin emas\");</code> <code>this.clean = raw.trim().toLowerCase();</code> <code>this.address = clean;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.raw = = null) throw new IllegalArgumentException(\"Email null bo'lishi mumkin emas\");</code> <code>this.clean = raw.trim().toLowerCase();</code> <code>this.address = clean;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`email` nomli `EmailAddress` ob'yektini yarating va argument sifatida `\"  00023271@wiut.uz  \"` qiymatini bering."
        ],
        "en": [
          "Create a `EmailAddress` object named `email` and pass argument(s) `\"  00023271@wiut.uz  \"`."
        ],
        "ru": [
          "Создайте объект `EmailAddress` с именем `email` и передайте аргумент(ы) `\"  00023271@wiut.uz  \"`."
        ]
      },
      "expectedOutput": "Email: 00023271@wiut.uz | Domen: wiut.uz | Niqoblangan: 00***@wiut.uz"
    }
  },
  {
    "id": 91,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "91. Uzum Market — Getterda Massivni Himoyaviy Nusxalash (.clone())",
      "en": "91. Uzum Market — Array Defensive Copying in Getter via .clone()",
      "ru": "91. Uzum Market — Защитное копирование массива в геттере (.clone())"
    },
    "scenario": {
      "uz": "Agar getter ichki massivning asl havolasini (reference) qaytarsa, tashqi kod massiv elementlarini o'zgartirib inkapsulyatsiyani buzishi mumkin. 'getDailySales()' metodida massivning klonini ('this.sales.clone()') qaytaring.",
      "en": "Returning an internal array reference breaks encapsulation. Prevent external modification by returning 'this.sales.clone()'.",
      "ru": "Возврат ссылки на массив нарушает инкапсуляцию. Возвращайте клон массива через this.sales.clone()."
    },
    "requirements": {
      "classes": [
        "SalesTracker",
        "Main"
      ],
      "privateFields": [
        "sales"
      ],
      "methods": [
        "getDailySales"
      ],
      "keywords": [
        "clone",
        "this"
      ]
    },
    "starterCode": "class SalesTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SalesTracker {\n    private int[] sales;\n\n    public SalesTracker(int[] initialSales) {\n        this.sales = initialSales.clone();\n    }\n\n    public int[] getDailySales() {\n        return this.sales.clone();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] original = {100, 200, 300};\n        SalesTracker tracker = new SalesTracker(original);\n        int[] leaked = tracker.getDailySales();\n        leaked[0] = 9999;\n        System.out.println(\"Ichki 0-element: \" + tracker.getDailySales()[0]);\n    }\n}",
    "expectedOutput": "Ichki 0-element: 100",
    "newKnowledge": {
      "uz": "91-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 91: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 91: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getDailySales()",
        "signature": "public int[] getDailySales()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int[]</code>: returns computed business result or operation state.",
          "ru": "<code>int[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SalesTracker",
        "signature": "public SalesTracker(int[] initialSales)",
        "params": {
          "uz": "<code>int[] initialSales</code> (masalan, <code>original</code>)",
          "en": "<code>int[] initialSales</code> (e.g. <code>original</code>)",
          "ru": "<code>int[] initialSales</code> (например, <code>original</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.sales = initialSales.clone();</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.sales = initialSales.clone();</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.sales = initialSales.clone();</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tracker` nomli `SalesTracker` ob'yektini yarating va argument sifatida `original` qiymatini bering.",
          "Tegishli `getDailySales()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SalesTracker` object named `tracker` and pass argument(s) `original`.",
          "Invoke `getDailySales()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SalesTracker` с именем `tracker` и передайте аргумент(ы) `original`.",
          "Вызовите метод(ы) `getDailySales()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Ichki 0-element: 100"
    }
  },
  {
    "id": 92,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "92. Payme — Konstruktorda Massivni Himoyaviy Nusxalash",
      "en": "92. Payme — Constructor Array Defensive Copying Guard",
      "ru": "92. Payme — Защитное копирование массива в конструкторе"
    },
    "scenario": {
      "uz": "Konstruktorga uzatilgan massiv tashqarida o'zgartirilsa, ob'yekt ichidagi ma'lumotlar ham buzilishi mumkin. Konstruktorda kiruvchi massivni darhol 'this.limits = limits.clone()' qilib saqlang.",
      "en": "Defend against caller mutating the array passed into constructor by immediately cloning it.",
      "ru": "Защититесь от изменения переданного массива внешним кодом, клонируя его в конструкторе."
    },
    "requirements": {
      "classes": [
        "TierLimits",
        "Main"
      ],
      "privateFields": [
        "limits"
      ],
      "methods": [
        "getLimitAt"
      ],
      "keywords": [
        "clone",
        "this"
      ]
    },
    "starterCode": "class TierLimits {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TierLimits {\n    private int[] limits;\n\n    public TierLimits(int[] limits) {\n        this.limits = (limits != null) ? limits.clone() : new int[0];\n    }\n\n    public int getLimitAt(int index) {\n        return this.limits[index];\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] raw = {1000, 5000, 10000};\n        TierLimits tl = new TierLimits(raw);\n        raw[1] = 99999;\n        System.out.println(\"Himoyalangan 1-limit: \" + tl.getLimitAt(1));\n    }\n}",
    "expectedOutput": "Himoyalangan 1-limit: 5000",
    "newKnowledge": {
      "uz": "92-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 92: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 92: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getLimitAt()",
        "signature": "public int getLimitAt(int index)",
        "params": {
          "uz": "<code>int index</code>",
          "en": "<code>int index</code>",
          "ru": "<code>int index</code>"
        },
        "returns": {
          "uz": "<code>int</code>: <code>limits</code> massividan <code>index</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>int</code>: returns element at index <code>index</code> from <code>limits</code> (or null if out of bounds).",
          "ru": "<code>int</code>: возвращает элемент по индексу <code>index</code> из <code>limits</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>index</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>index</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>index</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TierLimits",
        "signature": "public TierLimits(int[] limits)",
        "params": {
          "uz": "<code>int[] limits</code> (masalan, <code>raw</code>)",
          "en": "<code>int[] limits</code> (e.g. <code>raw</code>)",
          "ru": "<code>int[] limits</code> (например, <code>raw</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.limits = (limits != null) ? limits.clone() : new int[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.limits = (limits != null) ? limits.clone() : new int[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.limits = (limits != null) ? limits.clone() : new int[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tl` nomli `TierLimits` ob'yektini yarating va argument sifatida `raw` qiymatini bering."
        ],
        "en": [
          "Create a `TierLimits` object named `tl` and pass argument(s) `raw`."
        ],
        "ru": [
          "Создайте объект `TierLimits` с именем `tl` и передайте аргумент(ы) `raw`."
        ]
      },
      "expectedOutput": "Himoyalangan 1-limit: 5000"
    }
  },
  {
    "id": 93,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "93. Korzinka — 2 O'lchamli Matritsani Chuqur Nusxalash (Deep Copy)",
      "en": "93. Korzinka — 2D Matrix Deep Defensive Copying",
      "ru": "93. Korzinka — Глубокое защитное копирование двумерной матрицы"
    },
    "scenario": {
      "uz": "2D massivda '.clone()' faqat 1-darajali massivni nusxalaydi, ichki qatorlar umumiy bo'lib qoladi (Shallow copy). Har bir qatorni alohida 'grid[i].clone()' qilib chuqur nusxalashni (Deep Copy) amalga oshiring.",
      "en": "Shallow clone on 2D arrays leaves inner rows shared. Perform deep copy by cloning each individual row.",
      "ru": "Обычный clone для 2D массива копирует только ссылки на строки. Клонируйте каждую строку индивидуально."
    },
    "requirements": {
      "classes": [
        "StoreGrid",
        "Main"
      ],
      "privateFields": [
        "grid"
      ],
      "methods": [
        "getGridCopy"
      ],
      "keywords": [
        "clone",
        "this"
      ]
    },
    "starterCode": "class StoreGrid {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StoreGrid {\n    private int[][] grid;\n\n    public StoreGrid(int[][] input) {\n        this.grid = new int[input.length][];\n        for (int i = 0; i < input.length; i++) {\n            this.grid[i] = input[i].clone();\n        }\n    }\n\n    public int[][] getGridCopy() {\n        int[][] copy = new int[this.grid.length][];\n        for (int i = 0; i < this.grid.length; i++) {\n            copy[i] = this.grid[i].clone();\n        }\n        return copy;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[][] original = {{1, 2}, {3, 4}};\n        StoreGrid sg = new StoreGrid(original);\n        int[][] copy = sg.getGridCopy();\n        copy[0][0] = 99;\n        System.out.println(\"Asl matritsa [0][0]: \" + sg.getGridCopy()[0][0]);\n    }\n}",
    "expectedOutput": "Asl matritsa [0][0]: 1",
    "newKnowledge": {
      "uz": "93-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 93: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 93: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getGridCopy()",
        "signature": "public int[][] getGridCopy()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int[][]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int[][]</code>: returns computed business result or operation state.",
          "ru": "<code>int[][]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StoreGrid",
        "signature": "public StoreGrid(int[][] input)",
        "params": {
          "uz": "<code>int[][] input</code> (masalan, <code>original</code>)",
          "en": "<code>int[][] input</code> (e.g. <code>original</code>)",
          "ru": "<code>int[][] input</code> (например, <code>original</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.grid = new int[input.length][];</code> <code>this.i = 0;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.grid = new int[input.length][];</code> <code>this.i = 0;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.grid = new int[input.length][];</code> <code>this.i = 0;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [],
        "en": [],
        "ru": []
      },
      "expectedOutput": "Asl matritsa [0][0]: 1"
    }
  },
  {
    "id": 94,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "94. Click — O'zgaruvchan Obyektlarni Himoyaviy Nusxalash (Mutable Date Defensive Copy)",
      "en": "94. Click — Mutable Reference Defensive Copying via Epoch Timestamps",
      "ru": "94. Click — Защитное копирование изменяемых объектов через метку времени"
    },
    "scenario": {
      "uz": "O'zgaruvchan sana ob'yektini tashqariga berish o'rniga, uning xavfsiz 'long epochMilli' vaqtini nusxalab yangi 'new Timestamp(epoch)' tarzida himoyalang.",
      "en": "Defend against mutable timestamp manipulation by wrapping raw epoch milliseconds defensively.",
      "ru": "Защитите изменяемый объект времени, сохраняя примитивный timestamp и возвращая новые объекты."
    },
    "requirements": {
      "classes": [
        "AuditTimestamp",
        "Main"
      ],
      "privateFields": [
        "epochMillis"
      ],
      "methods": [
        "getEpochMillis"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class AuditTimestamp {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AuditTimestamp {\n    private long epochMillis;\n\n    public AuditTimestamp(long epochMillis) {\n        this.epochMillis = epochMillis;\n    }\n\n    public long getEpochMillis() {\n        return this.epochMillis;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditTimestamp at = new AuditTimestamp(1700000000000L);\n        System.out.println(\"Xavfsiz vaqt: \" + at.getEpochMillis());\n    }\n}",
    "expectedOutput": "Xavfsiz vaqt: 1700000000000",
    "newKnowledge": {
      "uz": "94-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 94: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 94: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getEpochMillis()",
        "signature": "public long getEpochMillis()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>long</code>: <code>private long epochMillis</code> maydonining qiymatini return qiladi (masalan, <code>1700000000000L</code>).",
          "en": "<code>long</code>: returns the value of <code>private long epochMillis</code> (e.g. <code>1700000000000L</code>).",
          "ru": "<code>long</code>: возвращает значение поля <code>private long epochMillis</code> (например, <code>1700000000000L</code>)."
        },
        "desc": {
          "uz": "Ichki <code>epochMillis</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>epochMillis</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>epochMillis</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "AuditTimestamp",
        "signature": "public AuditTimestamp(long epochMillis)",
        "params": {
          "uz": "<code>long epochMillis</code> (masalan, <code>1700000000000L</code>)",
          "en": "<code>long epochMillis</code> (e.g. <code>1700000000000L</code>)",
          "ru": "<code>long epochMillis</code> (например, <code>1700000000000L</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.epochMillis = epochMillis;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.epochMillis = epochMillis;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.epochMillis = epochMillis;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`at` nomli `AuditTimestamp` ob'yektini yarating va argument sifatida `1700000000000L` qiymatini bering."
        ],
        "en": [
          "Create a `AuditTimestamp` object named `at` and pass argument(s) `1700000000000L`."
        ],
        "ru": [
          "Создайте объект `AuditTimestamp` с именем `at` и передайте аргумент(ы) `1700000000000L`."
        ]
      },
      "expectedOutput": "Xavfsiz vaqt: 1700000000000"
    }
  },
  {
    "id": 95,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "95. Yandex Go — Massiv O'rniga Element Bo'yicha Kirish (Index Accessor Encapsulation)",
      "en": "95. Yandex Go — Item Index Accessor Pattern Replacing Raw Array Getter",
      "ru": "95. Yandex Go — Доступ по индексу вместо прямого геттера массива"
    },
    "scenario": {
      "uz": "Massivning o'zini butunligicha qaytarish xavfli bo'lgani sababli, getArray() o'rniga 'getStop(int index)' va 'getStopCount()' metodlari taqdim etiladi. Tashqi kod massiv borligini ham sezmaydi.",
      "en": "Never expose the raw array. Provide 'getStop(int idx)' and 'getStopCount()' to hide container structure.",
      "ru": "Никогда не возвращайте массив целиком: предоставьте методы getStop(idx) и getStopCount()."
    },
    "requirements": {
      "classes": [
        "RouteStops",
        "Main"
      ],
      "privateFields": [
        "stops"
      ],
      "methods": [
        "getStop",
        "getStopCount"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class RouteStops {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class RouteStops {\n    private String[] stops;\n\n    public RouteStops(String[] stops) {\n        this.stops = (stops != null) ? stops.clone() : new String[0];\n    }\n\n    public int getStopCount() {\n        return this.stops.length;\n    }\n\n    public String getStop(int index) {\n        if (index >= 0 && index < this.stops.length) {\n            return this.stops[index];\n        }\n        return null;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String[] s = {\"Chilonzor\", \"Paxtakor\", \"Buyuk Ipak Yo'li\"};\n        RouteStops route = new RouteStops(s);\n        System.out.println(\"Bekatlar soni: \" + route.getStopCount() + \" | 2-bekat: \" + route.getStop(1));\n    }\n}",
    "expectedOutput": "Bekatlar soni: 3 | 2-bekat: Paxtakor",
    "newKnowledge": {
      "uz": "95-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 95: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 95: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getStopCount()",
        "signature": "public int getStopCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>stops</code> massividagi jami elementlar sonini return qiladi.",
          "en": "<code>int</code>: returns total count of elements in <code>stops</code> array.",
          "ru": "<code>int</code>: возвращает общее количество элементов в массиве <code>stops</code>."
        },
        "desc": {
          "uz": "<code>stops</code> massivining joriy uzunligini (hajmini) qaytaradi.",
          "en": "Returns current size/length of <code>stops</code> array.",
          "ru": "Возвращает текущую длину массива <code>stops</code>."
        }
      },
      {
        "name": "getStop()",
        "signature": "public String getStop(int index)",
        "params": {
          "uz": "<code>int index</code> (masalan, <code>1</code>)",
          "en": "<code>int index</code> (e.g. <code>1</code>)",
          "ru": "<code>int index</code> (например, <code>1</code>)"
        },
        "returns": {
          "uz": "<code>String</code>: <code>stops</code> massividan <code>index</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>String</code>: returns element at index <code>index</code> from <code>stops</code> (or null if out of bounds).",
          "ru": "<code>String</code>: возвращает элемент по индексу <code>index</code> из <code>stops</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>index</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>index</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>index</code>."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "RouteStops",
        "signature": "public RouteStops(String[] stops)",
        "params": {
          "uz": "<code>String[] stops</code> (masalan, <code>s</code>)",
          "en": "<code>String[] stops</code> (e.g. <code>s</code>)",
          "ru": "<code>String[] stops</code> (например, <code>s</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.stops = (stops != null) ? stops.clone() : new String[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.stops = (stops != null) ? stops.clone() : new String[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.stops = (stops != null) ? stops.clone() : new String[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`route` nomli `RouteStops` ob'yektini yarating va argument sifatida `s` qiymatini bering."
        ],
        "en": [
          "Create a `RouteStops` object named `route` and pass argument(s) `s`."
        ],
        "ru": [
          "Создайте объект `RouteStops` с именем `route` и передайте аргумент(ы) `s`."
        ]
      },
      "expectedOutput": "Bekatlar soni: 3 | 2-bekat: Paxtakor"
    }
  },
  {
    "id": 96,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "96. Safia — Faqat Qo'shiladigan Ichki Massiv (Append-Only Dynamic Resizing)",
      "en": "96. Safia — Append-Only Dynamic Array Auto-Resizing Encapsulation",
      "ru": "96. Safia — Авторасширяемый массив только для добавления (Append-Only)"
    },
    "scenario": {
      "uz": "Pishiriqlar narxi massivi ichkarida avtomatik kengayadi: massiv to'lganda hajmi 2 barobar kattalashtiriladi ('Arrays.copyOf'). Tashqi kod 'addPrice(p)' chaqiradi, massiv esa to'liq inkapsulyatsiyada qoladi.",
      "en": "Encapsulate dynamic resizing array: auto-doubles capacity when full. Expose only addPrice() and getCount().",
      "ru": "Инкапсулируйте динамическое расширение массива: удваивайте размер при заполнении."
    },
    "requirements": {
      "classes": [
        "PriceList",
        "Main"
      ],
      "privateFields": [
        "prices",
        "size"
      ],
      "methods": [
        "addPrice",
        "getSize"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PriceList {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PriceList {\n    private double[] prices = new double[2];\n    private int size = 0;\n\n    public void addPrice(double p) {\n        if (this.size == this.prices.length) {\n            double[] bigger = new double[this.prices.length * 2];\n            System.arraycopy(this.prices, 0, bigger, 0, this.prices.length);\n            this.prices = bigger;\n        }\n        this.prices[this.size++] = p;\n    }\n\n    public int getSize() {\n        return this.size;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceList pl = new PriceList();\n        pl.addPrice(12000.0);\n        pl.addPrice(15000.0);\n        pl.addPrice(18000.0);\n        System.out.println(\"Jami narxlar soni: \" + pl.getSize());\n    }\n}",
    "expectedOutput": "Jami narxlar soni: 3",
    "newKnowledge": {
      "uz": "96-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 96: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 96: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "addPrice()",
        "signature": "public void addPrice(double p)",
        "params": {
          "uz": "<code>double p</code> (masalan, <code>12000.0</code>)",
          "en": "<code>double p</code> (e.g. <code>12000.0</code>)",
          "ru": "<code>double p</code> (например, <code>12000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getSize()",
        "signature": "public int getSize()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int size</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int size</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int size</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>size</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>size</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>size</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`pl` nomli `PriceList` ob'yektini yarating.",
          "Tegishli `addPrice()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PriceList` object named `pl`.",
          "Invoke `addPrice()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PriceList` с именем `pl`.",
          "Вызовите метод(ы) `addPrice()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Jami narxlar soni: 3"
    }
  },
  {
    "id": 97,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "97. Dodo Pizza — Massivning Qirqimini (Slice) Qaytaruvchi Getter",
      "en": "97. Dodo Pizza — Immutable Subarray Slice Accessor (getTopN)",
      "ru": "97. Dodo Pizza — Аксессор среза массива (getTopN)"
    },
    "scenario": {
      "uz": "Eng ko'p sotilgan N ta pitsa sonini olishda 'getTopN(int n)' metodi butun massivni emas, balki aniq n ta elementdan iborat yangi massiv yaratib qaytarsin.",
      "en": "Subarray slice extraction: getTopN(n) allocates and returns an isolated array of top N items.",
      "ru": "Метод getTopN(n) возвращает изолированный новый массив из первых N элементов."
    },
    "requirements": {
      "classes": [
        "PizzaRanking",
        "Main"
      ],
      "privateFields": [
        "orders"
      ],
      "methods": [
        "getTopN"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PizzaRanking {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PizzaRanking {\n    private int[] orders;\n\n    public PizzaRanking(int[] orders) {\n        this.orders = (orders != null) ? orders.clone() : new int[0];\n    }\n\n    public int[] getTopN(int n) {\n        int count = Math.min(n, this.orders.length);\n        int[] slice = new int[count];\n        System.arraycopy(this.orders, 0, slice, 0, count);\n        return slice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] all = {95, 80, 75, 60, 40};\n        PizzaRanking ranking = new PizzaRanking(all);\n        int[] top2 = ranking.getTopN(2);\n        System.out.println(\"Top 2: \" + top2[0] + \", \" + top2[1]);\n    }\n}",
    "expectedOutput": "Top 2: 95, 80",
    "newKnowledge": {
      "uz": "97-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 97: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 97: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getTopN()",
        "signature": "public int[] getTopN(int n)",
        "params": {
          "uz": "<code>int n</code> (masalan, <code>2</code>)",
          "en": "<code>int n</code> (e.g. <code>2</code>)",
          "ru": "<code>int n</code> (например, <code>2</code>)"
        },
        "returns": {
          "uz": "<code>int[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int[]</code>: returns computed business result or operation state.",
          "ru": "<code>int[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "PizzaRanking",
        "signature": "public PizzaRanking(int[] orders)",
        "params": {
          "uz": "<code>int[] orders</code> (masalan, <code>all</code>)",
          "en": "<code>int[] orders</code> (e.g. <code>all</code>)",
          "ru": "<code>int[] orders</code> (например, <code>all</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.orders = (orders != null) ? orders.clone() : new int[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.orders = (orders != null) ? orders.clone() : new int[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.orders = (orders != null) ? orders.clone() : new int[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`ranking` nomli `PizzaRanking` ob'yektini yarating va argument sifatida `all` qiymatini bering.",
          "Tegishli `getTopN()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PizzaRanking` object named `ranking` and pass argument(s) `all`.",
          "Invoke `getTopN()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PizzaRanking` с именем `ranking` и передайте аргумент(ы) `all`.",
          "Вызовите метод(ы) `getTopN()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Top 2: 95, 80"
    }
  },
  {
    "id": 98,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "98. Texnomart — Filtrlovchi Himoyaviy Getter (Filtered Array Projection)",
      "en": "98. Texnomart — Filtered Defensive Array Projection Accessor",
      "ru": "98. Texnomart — Фильтрующий защитный аксессор проекции массива"
    },
    "scenario": {
      "uz": "Faqat belgilangan narxdan qimmat tovarlarni saralab, yangi massiv ko'rinishida beruvchi 'getPremiumPrices(double minPrice)' metodini yozing. Asl massiv daxlsiz qolsin.",
      "en": "Filtered accessor: returns a new array with items meeting predicate price >= minPrice without exposing source.",
      "ru": "Фильтрующий аксессор возвращает новый массив элементов, удовлетворяющих условию >= minPrice."
    },
    "requirements": {
      "classes": [
        "CatalogPrices",
        "Main"
      ],
      "privateFields": [
        "prices"
      ],
      "methods": [
        "getPremiumPrices"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CatalogPrices {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CatalogPrices {\n    private double[] prices;\n\n    public CatalogPrices(double[] prices) {\n        this.prices = (prices != null) ? prices.clone() : new double[0];\n    }\n\n    public double[] getPremiumPrices(double threshold) {\n        int count = 0;\n        for (double p : this.prices) {\n            if (p >= threshold) count++;\n        }\n        double[] res = new double[count];\n        int idx = 0;\n        for (double p : this.prices) {\n            if (p >= threshold) res[idx++] = p;\n        }\n        return res;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        double[] p = {50.0, 150.0, 80.0, 220.0};\n        CatalogPrices cat = new CatalogPrices(p);\n        double[] premium = cat.getPremiumPrices(100.0);\n        System.out.println(\"Premium soni: \" + premium.length + \" | Birinchisi: \" + premium[0]);\n    }\n}",
    "expectedOutput": "Premium soni: 2 | Birinchisi: 150.0",
    "newKnowledge": {
      "uz": "98-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 98: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 98: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getPremiumPrices()",
        "signature": "public double[] getPremiumPrices(double threshold)",
        "params": {
          "uz": "<code>double threshold</code> (masalan, <code>100.0</code>)",
          "en": "<code>double threshold</code> (e.g. <code>100.0</code>)",
          "ru": "<code>double threshold</code> (например, <code>100.0</code>)"
        },
        "returns": {
          "uz": "<code>double[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double[]</code>: returns computed business result or operation state.",
          "ru": "<code>double[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CatalogPrices",
        "signature": "public CatalogPrices(double[] prices)",
        "params": {
          "uz": "<code>double[] prices</code> (masalan, <code>p</code>)",
          "en": "<code>double[] prices</code> (e.g. <code>p</code>)",
          "ru": "<code>double[] prices</code> (например, <code>p</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.prices = (prices != null) ? prices.clone() : new double[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.prices = (prices != null) ? prices.clone() : new double[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.prices = (prices != null) ? prices.clone() : new double[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`cat` nomli `CatalogPrices` ob'yektini yarating va argument sifatida `p` qiymatini bering.",
          "Tegishli `getPremiumPrices()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CatalogPrices` object named `cat` and pass argument(s) `p`.",
          "Invoke `getPremiumPrices()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CatalogPrices` с именем `cat` и передайте аргумент(ы) `p`.",
          "Вызовите метод(ы) `getPremiumPrices()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Premium soni: 2 | Birinchisi: 150.0"
    }
  },
  {
    "id": 99,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "99. Asaxiy — Qismlarni Teskari Tartibda Beruvchi Nusxa (Reversed History)",
      "en": "99. Asaxiy — Reversed Array Projection Copy Accessor",
      "ru": "99. Asaxiy — Реверсивная проекция массива в новом объекте"
    },
    "scenario": {
      "uz": "Foydalanuvchi buyurtmalar tarixini oxirgisidan birinchisiga qarab ko'rishni xohlaydi. 'getReversedHistory()' metodi yangi massiv ochib, elementlarni teskari tartibda joylab qaytarsin.",
      "en": "Provide reversed projection via getReversedHistory() returning newly allocated array in LIFO order.",
      "ru": "Предоставьте реверсивную проекцию getReversedHistory(), возвращающую новый массив в обратном порядке."
    },
    "requirements": {
      "classes": [
        "OrderHistory",
        "Main"
      ],
      "privateFields": [
        "orderIds"
      ],
      "methods": [
        "getReversedHistory"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class OrderHistory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderHistory {\n    private int[] orderIds;\n\n    public OrderHistory(int[] orderIds) {\n        this.orderIds = (orderIds != null) ? orderIds.clone() : new int[0];\n    }\n\n    public int[] getReversedHistory() {\n        int len = this.orderIds.length;\n        int[] reversed = new int[len];\n        for (int i = 0; i < len; i++) {\n            reversed[i] = this.orderIds[len - 1 - i];\n        }\n        return reversed;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] ids = {101, 102, 103};\n        OrderHistory hist = new OrderHistory(ids);\n        int[] rev = hist.getReversedHistory();\n        System.out.println(\"Teskari 1-element: \" + rev[0] + \" | Oxirgi: \" + rev[2]);\n    }\n}",
    "expectedOutput": "Teskari 1-element: 103 | Oxirgi: 101",
    "newKnowledge": {
      "uz": "99-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 99: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 99: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getReversedHistory()",
        "signature": "public int[] getReversedHistory()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int[]</code>: returns computed business result or operation state.",
          "ru": "<code>int[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "OrderHistory",
        "signature": "public OrderHistory(int[] orderIds)",
        "params": {
          "uz": "<code>int[] orderIds</code> (masalan, <code>ids</code>)",
          "en": "<code>int[] orderIds</code> (e.g. <code>ids</code>)",
          "ru": "<code>int[] orderIds</code> (например, <code>ids</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.orderIds = (orderIds != null) ? orderIds.clone() : new int[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.orderIds = (orderIds != null) ? orderIds.clone() : new int[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.orderIds = (orderIds != null) ? orderIds.clone() : new int[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`hist` nomli `OrderHistory` ob'yektini yarating va argument sifatida `ids` qiymatini bering.",
          "Tegishli `getReversedHistory()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `OrderHistory` object named `hist` and pass argument(s) `ids`.",
          "Invoke `getReversedHistory()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `OrderHistory` с именем `hist` и передайте аргумент(ы) `ids`.",
          "Вызовите метод(ы) `getReversedHistory()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Teskari 1-element: 103 | Oxirgi: 101"
    }
  },
  {
    "id": 100,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "100. Medion — Paketli Yangilashda Har Bir Elementni Tekshiruvchi Setter",
      "en": "100. Medion — Defensive Array Batch Mutation with Element-Level Guards",
      "ru": "100. Medion — Защитная пакетная мутация массива с поэлементной валидацией"
    },
    "scenario": {
      "uz": "Tahlil ko'rsatkichlari massivini birdaniga yangilovchi 'updateReadings(double[] newReadings)' setterida massiv avval klonlanadi, keyin har bir element musbatlikka tekshiriladi. Agar bitta element manfiy bo'lsa butun massiv rad etiladi.",
      "en": "Atomic batch array mutation: clones input and validates all elements > 0. Rejects entire array if any element invalid.",
      "ru": "Атомарное пакетное обновление массива: клонирование и проверка каждого элемента на > 0."
    },
    "requirements": {
      "classes": [
        "LabReadings",
        "Main"
      ],
      "privateFields": [
        "readings"
      ],
      "methods": [
        "updateReadings",
        "getReadingCount"
      ],
      "keywords": [
        "clone",
        "this"
      ]
    },
    "starterCode": "class LabReadings {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class LabReadings {\n    private double[] readings = new double[0];\n\n    public boolean updateReadings(double[] input) {\n        if (input == null || input.length == 0) return false;\n        double[] copy = input.clone();\n        for (double val : copy) {\n            if (val <= 0.0) return false;\n        }\n        this.readings = copy;\n        return true;\n    }\n\n    public int getReadingCount() {\n        return this.readings.length;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LabReadings lr = new LabReadings();\n        double[] bad = {12.5, -4.0, 18.0};\n        double[] good = {12.5, 5.0, 18.0};\n        System.out.println(\"Bad: \" + lr.updateReadings(bad) + \" | Good: \" + lr.updateReadings(good));\n    }\n}",
    "expectedOutput": "Bad: false | Good: true",
    "newKnowledge": {
      "uz": "100-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 100: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 100: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "updateReadings()",
        "signature": "public boolean updateReadings(double[] input)",
        "params": {
          "uz": "<code>double[] input</code> (masalan, <code>good</code>)",
          "en": "<code>double[] input</code> (e.g. <code>good</code>)",
          "ru": "<code>double[] input</code> (например, <code>good</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>readings</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>readings</code> qiymatini return qiladi (masalan, <code>new double[0]</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>readings</code> is null, otherwise returns <code>readings</code> (e.g. <code>new double[0]</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>readings</code> null, иначе <code>readings</code> (например, <code>new double[0]</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "getReadingCount()",
        "signature": "public int getReadingCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>readings</code> massividagi jami elementlar sonini return qiladi.",
          "en": "<code>int</code>: returns total count of elements in <code>readings</code> array.",
          "ru": "<code>int</code>: возвращает общее количество элементов в массиве <code>readings</code>."
        },
        "desc": {
          "uz": "<code>readings</code> massivining joriy uzunligini (hajmini) qaytaradi.",
          "en": "Returns current size/length of <code>readings</code> array.",
          "ru": "Возвращает текущую длину массива <code>readings</code>."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`lr` nomli `LabReadings` ob'yektini yarating."
        ],
        "en": [
          "Create a `LabReadings` object named `lr`."
        ],
        "ru": [
          "Создайте объект `LabReadings` с именем `lr`."
        ]
      },
      "expectedOutput": "Bad: false | Good: true"
    }
  },
  {
    "id": 101,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "101. Kapitalbank — Moslashtirilgan Dinamik IntList Klassini Inkapsulyatsiya Qilish",
      "en": "101. Kapitalbank — Encapsulated Custom Dynamic IntList Data Structure",
      "ru": "101. Kapitalbank — Инкапсулированная динамическая структура данных IntList"
    },
    "scenario": {
      "uz": "ArrayList ishlatmasdan sof massiv asosida dinamik ro'yxat yarating: 'add(val)', 'get(idx)', 'size()'. Ichki massiv hajmi va o'sish jarayoni to'liq yashirin bo'lsin.",
      "en": "Implement an encapsulated custom dynamic IntList without Java Collections, managing growth internally.",
      "ru": "Реализуйте полностью инкапсулированный динамический IntList без использования Java Collections."
    },
    "requirements": {
      "classes": [
        "CustomIntList",
        "Main"
      ],
      "privateFields": [
        "data",
        "count"
      ],
      "methods": [
        "add",
        "get",
        "size"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CustomIntList {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CustomIntList {\n    private int[] data = new int[4];\n    private int count = 0;\n\n    public void add(int v) {\n        if (this.count == this.data.length) {\n            int[] bigger = new int[this.data.length * 2];\n            System.arraycopy(this.data, 0, bigger, 0, this.data.length);\n            this.data = bigger;\n        }\n        this.data[this.count++] = v;\n    }\n\n    public int get(int index) {\n        if (index < 0 || index >= this.count) throw new IndexOutOfBoundsException();\n        return this.data[index];\n    }\n\n    public int size() {\n        return this.count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomIntList list = new CustomIntList();\n        list.add(10);\n        list.add(20);\n        list.add(30);\n        System.out.println(\"Hajm: \" + list.size() + \" | Index 1: \" + list.get(1));\n    }\n}",
    "expectedOutput": "Hajm: 3 | Index 1: 20",
    "newKnowledge": {
      "uz": "101-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 101: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 101: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "add()",
        "signature": "public void add(int v)",
        "params": {
          "uz": "<code>int v</code> (masalan, <code>10</code>)",
          "en": "<code>int v</code> (e.g. <code>10</code>)",
          "ru": "<code>int v</code> (например, <code>10</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "get()",
        "signature": "public int get(int index)",
        "params": {
          "uz": "<code>int index</code> (masalan, <code>1</code>)",
          "en": "<code>int index</code> (e.g. <code>1</code>)",
          "ru": "<code>int index</code> (например, <code>1</code>)"
        },
        "returns": {
          "uz": "<code>int</code>: <code>data</code> massividan <code>index</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>int</code>: returns element at index <code>index</code> from <code>data</code> (or null if out of bounds).",
          "ru": "<code>int</code>: возвращает элемент по индексу <code>index</code> из <code>data</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>index</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>index</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>index</code>."
        }
      },
      {
        "name": "size()",
        "signature": "public int size()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int count</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int count</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int count</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>count</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>count</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>count</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`list` nomli `CustomIntList` ob'yektini yarating.",
          "Tegishli `add()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CustomIntList` object named `list`.",
          "Invoke `add()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CustomIntList` с именем `list`.",
          "Вызовите метод(ы) `add()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Hajm: 3 | Index 1: 20"
    }
  },
  {
    "id": 102,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "102. Express24 — Sinxronlashgan Parallel Massivlar Inkapsulyatsiyasi",
      "en": "102. Express24 — Synchronized Parallel Arrays Internal Encapsulation",
      "ru": "102. Express24 — Инкапсуляция синхронизированных параллельных массивов"
    },
    "scenario": {
      "uz": "Kuryerlar ismlari va ularning yetkazish soni ikkita parallel massivda ('names' va 'deliveries') saqlanadi. 'recordDelivery(courierName)' metodi ikkala massivni doimo sinxron tutsin.",
      "en": "Encapsulate two parallel arrays ensuring exact index synchronization without letting caller manipulate arrays.",
      "ru": "Инкапсулируйте два параллельных массива, гарантируя точную синхронизацию индексов."
    },
    "requirements": {
      "classes": [
        "CourierStats",
        "Main"
      ],
      "privateFields": [
        "couriers",
        "counts"
      ],
      "methods": [
        "addCourier",
        "getDeliveries"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CourierStats {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CourierStats {\n    private String[] couriers = new String[10];\n    private int[] counts = new int[10];\n    private int size = 0;\n\n    public void addCourier(String name, int deliveries) {\n        if (this.size < this.couriers.length) {\n            this.couriers[this.size] = name;\n            this.counts[this.size] = deliveries;\n            this.size++;\n        }\n    }\n\n    public int getDeliveries(String name) {\n        for (int i = 0; i < this.size; i++) {\n            if (this.couriers[i].equals(name)) {\n                return this.counts[i];\n            }\n        }\n        return -1;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierStats stats = new CourierStats();\n        stats.addCourier(\"Ali\", 15);\n        stats.addCourier(\"Vali\", 22);\n        System.out.println(\"Ali: \" + stats.getDeliveries(\"Ali\") + \" | Vali: \" + stats.getDeliveries(\"Vali\"));\n    }\n}",
    "expectedOutput": "Ali: 15 | Vali: 22",
    "newKnowledge": {
      "uz": "102-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 102: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 102: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "addCourier()",
        "signature": "public void addCourier(String name, int deliveries)",
        "params": {
          "uz": "<code>String name, int deliveries</code> (masalan, <code>\"Ali\", 15</code>)",
          "en": "<code>String name, int deliveries</code> (e.g. <code>\"Ali\", 15</code>)",
          "ru": "<code>String name, int deliveries</code> (например, <code>\"Ali\", 15</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getDeliveries()",
        "signature": "public int getDeliveries(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"Vali\"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"Vali\"</code>)",
          "ru": "<code>String name</code> (например, <code>\"Vali\"</code>)"
        },
        "returns": {
          "uz": "<code>int</code>: <code>counts</code> massividan <code>i</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>int</code>: returns element at index <code>i</code> from <code>counts</code> (or null if out of bounds).",
          "ru": "<code>int</code>: возвращает элемент по индексу <code>i</code> из <code>counts</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>i</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>i</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>i</code>."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`stats` nomli `CourierStats` ob'yektini yarating.",
          "Tegishli `addCourier()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CourierStats` object named `stats`.",
          "Invoke `addCourier()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CourierStats` с именем `stats`.",
          "Вызовите метод(ы) `addCourier()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Ali: 15 | Vali: 22"
    }
  },
  {
    "id": 103,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "103. Beeline — Massiv Obyektlarining Chuqur Nusxasini Yaratish",
      "en": "103. Beeline — Deep Defensive Copying of Object Reference Arrays",
      "ru": "103. Beeline — Глубокое копирование массива ссылочных объектов"
    },
    "scenario": {
      "uz": "Obyektlar massivini (masalan SimCard[]) klonlaganda, faqat havolalar nusxalanadi. Haqiqiy chuqur nusxalash uchun har bir SimCard ob'yektini alohida 'new SimCard(old.number)' qilib nusxalash shart.",
      "en": "Array of mutable references requires deep cloning: instantiate new object for each element.",
      "ru": "Массив объектов требует глубокого клонирования: создавайте новый экземпляр для каждого элемента."
    },
    "requirements": {
      "classes": [
        "SimCard",
        "SimBatch",
        "Main"
      ],
      "privateFields": [
        "cards"
      ],
      "methods": [
        "getCardsDeepCopy"
      ],
      "keywords": [
        "new",
        "this"
      ]
    },
    "starterCode": "class SimCard {\n    \n}\n\nclass SimBatch {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SimCard {\n    private String number;\n    public SimCard(String n) { this.number = n; }\n    public String getNumber() { return number; }\n    public void setNumber(String n) { this.number = n; }\n}\n\nclass SimBatch {\n    private SimCard[] cards;\n\n    public SimBatch(SimCard[] input) {\n        this.cards = new SimCard[input.length];\n        for (int i = 0; i < input.length; i++) {\n            this.cards[i] = new SimCard(input[i].getNumber());\n        }\n    }\n\n    public SimCard[] getCardsDeepCopy() {\n        SimCard[] copy = new SimCard[this.cards.length];\n        for (int i = 0; i < this.cards.length; i++) {\n            copy[i] = new SimCard(this.cards[i].getNumber());\n        }\n        return copy;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimCard[] raw = { new SimCard(\"99890111\"), new SimCard(\"99890222\") };\n        SimBatch batch = new SimBatch(raw);\n        SimCard[] leak = batch.getCardsDeepCopy();\n        leak[0].setNumber(\"MODIFIED\");\n        System.out.println(\"Asl SIM: \" + batch.getCardsDeepCopy()[0].getNumber());\n    }\n}",
    "expectedOutput": "Asl SIM: 99890111",
    "newKnowledge": {
      "uz": "103-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 103: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 103: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getNumber()",
        "signature": "public String getNumber()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String number</code> maydonining qiymatini return qiladi (masalan, <code>input[i].getNumber(</code>).",
          "en": "<code>String</code>: returns the value of <code>private String number</code> (e.g. <code>input[i].getNumber(</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String number</code> (например, <code>input[i].getNumber(</code>)."
        },
        "desc": {
          "uz": "Ichki <code>number</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>number</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>number</code> без возможности модификации."
        }
      },
      {
        "name": "setNumber()",
        "signature": "public void setNumber(String n)",
        "params": {
          "uz": "<code>String n</code> (masalan, <code>\"MODIFIED\"</code>)",
          "en": "<code>String n</code> (e.g. <code>\"MODIFIED\"</code>)",
          "ru": "<code>String n</code> (например, <code>\"MODIFIED\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>n</code> qiymatini qabul qilib, <code>this.number = n;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>n</code> and sets <code>this.number = n;</code>.",
          "ru": "Принимает <code>n</code> и обновляет <code>this.number = n;</code>."
        }
      },
      {
        "name": "getCardsDeepCopy()",
        "signature": "public SimCard[] getCardsDeepCopy()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>SimCard[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>SimCard[]</code>: returns computed business result or operation state.",
          "ru": "<code>SimCard[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SimCard",
        "signature": "public SimCard(String n)",
        "params": {
          "uz": "<code>String n</code> (masalan, <code>input[i].getNumber(</code>)",
          "en": "<code>String n</code> (e.g. <code>input[i].getNumber(</code>)",
          "ru": "<code>String n</code> (например, <code>input[i].getNumber(</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.number = n;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.number = n;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.number = n;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `batch` (raw).",
          "Tegishli `getCardsDeepCopy()`, `setNumber()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `batch` (raw).",
          "Invoke `getCardsDeepCopy()`, `setNumber()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `batch` (raw).",
          "Вызовите метод(ы) `getCardsDeepCopy()`, `setNumber()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Asl SIM: 99890111"
    }
  },
  {
    "id": 104,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "104. UzAirways — O'chirilganda Xotirani Tozalovchi Xavfsiz Bufer (Zeroization)",
      "en": "104. UzAirways — Secure Memory Zeroization on Buffer Clearance",
      "ru": "104. UzAirways — Защищенное обнуление памяти при очистке буфера"
    },
    "scenario": {
      "uz": "Maxfiy parvoz parollari saqlanuvchi char buferi 'clear()' qilinganda xotirada qolib ketmasligi uchun 'Arrays.fill(buffer, '\\0')' qilib nollashtirilsin (Zeroization).",
      "en": "Security compliance: zeroize sensitive memory buffer on clear() using Arrays.fill(buf, '\\0').",
      "ru": "Безопасность: обнуляйте символьный буфер паролей при вызове clear() с помощью Arrays.fill."
    },
    "requirements": {
      "classes": [
        "SecureCharBuffer",
        "Main"
      ],
      "privateFields": [
        "buffer"
      ],
      "methods": [
        "clear",
        "isCleared"
      ],
      "keywords": [
        "Arrays.fill",
        "this"
      ]
    },
    "starterCode": "class SecureCharBuffer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.Arrays;\n\nclass SecureCharBuffer {\n    private char[] buffer;\n\n    public SecureCharBuffer(char[] pass) {\n        this.buffer = (pass != null) ? pass.clone() : new char[0];\n    }\n\n    public void clear() {\n        if (this.buffer != null) {\n            Arrays.fill(this.buffer, '\\0');\n        }\n    }\n\n    public boolean isCleared() {\n        for (char c : this.buffer) {\n            if (c != '\\0') return false;\n        }\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        char[] pass = {'S', 'E', 'C', 'R', 'E', 'T'};\n        SecureCharBuffer scb = new SecureCharBuffer(pass);\n        scb.clear();\n        System.out.println(\"Xotira tozalandimi: \" + scb.isCleared());\n    }\n}",
    "expectedOutput": "Xotira tozalandimi: true",
    "newKnowledge": {
      "uz": "104-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 104: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 104: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "clear()",
        "signature": "public void clear()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>buffer</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>buffer</code> qiymatini return qiladi.",
          "en": "<code>void</code>: returns safe default if <code>buffer</code> is null, otherwise returns <code>buffer</code>.",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>buffer</code> null, иначе <code>buffer</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "isCleared()",
        "signature": "public boolean isCleared()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SecureCharBuffer",
        "signature": "public SecureCharBuffer(char[] pass)",
        "params": {
          "uz": "<code>char[] pass</code> (masalan, <code>pass</code>)",
          "en": "<code>char[] pass</code> (e.g. <code>pass</code>)",
          "ru": "<code>char[] pass</code> (например, <code>pass</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.buffer = (pass != null) ? pass.clone() : new char[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.buffer = (pass != null) ? pass.clone() : new char[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.buffer = (pass != null) ? pass.clone() : new char[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`scb` nomli `SecureCharBuffer` ob'yektini yarating va argument sifatida `pass` qiymatini bering.",
          "Tegishli `clear()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SecureCharBuffer` object named `scb` and pass argument(s) `pass`.",
          "Invoke `clear()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SecureCharBuffer` с именем `scb` и передайте аргумент(ы) `pass`.",
          "Вызовите метод(ы) `clear()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Xotira tozalandimi: true"
    }
  },
  {
    "id": 105,
    "tier": 7,
    "tierName": "7-Bosqich: Himoyaviy Nusxalash (Defensive Copying)",
    "sector": "91-105: Defensive Copying & Memory Safety",
    "title": {
      "uz": "105. WIUT SRS — Talaba Baholari To'liq Himoyaviy Massiv Suite (Master)",
      "en": "105. WIUT SRS — Master Academic Marks Defensive Copying and Statistics Suite",
      "ru": "105. WIUT SRS — Мастер-комплекс защитного копирования оценок студента"
    },
    "scenario": {
      "uz": "WIUT talaba baholari ('marks: int[]') konstruktorda ham, setterda ham, getterda ham to'liq klonlanadi. Tashqi kod ichki massivni o'zgartira olmaydi, 'calculateAverage()' esa himoyalangan hisoblaydi.",
      "en": "Master defensive array architecture: ctor, mutator, and accessor clone arrays. Computes safe average.",
      "ru": "Мастер-архитектура: клонирование массива в конструкторе, сеттере и геттере с расчетом среднего."
    },
    "requirements": {
      "classes": [
        "StudentMarksRecord",
        "Main"
      ],
      "privateFields": [
        "marks"
      ],
      "methods": [
        "getMarksCopy",
        "calculateAverage"
      ],
      "keywords": [
        "clone",
        "this"
      ]
    },
    "starterCode": "class StudentMarksRecord {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class StudentMarksRecord {\n    private int[] marks;\n\n    public StudentMarksRecord(int[] marks) {\n        this.marks = (marks != null) ? marks.clone() : new int[0];\n    }\n\n    public int[] getMarksCopy() {\n        return this.marks.clone();\n    }\n\n    public double calculateAverage() {\n        if (this.marks.length == 0) return 0.0;\n        int sum = 0;\n        for (int m : this.marks) sum += m;\n        return (double) sum / this.marks.length;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] original = {75, 80, 85};\n        StudentMarksRecord rec = new StudentMarksRecord(original);\n        original[0] = 10;\n        int[] leak = rec.getMarksCopy();\n        leak[1] = 20;\n        System.out.println(\"O'rtacha baho: \" + rec.calculateAverage());\n    }\n}",
    "expectedOutput": "O'rtacha baho: 80.0",
    "newKnowledge": {
      "uz": "105-masala: Himoyaviy nusxalash (Defensive Copying): massivlar va havolali ob'yektlarni '.clone()' qilib, ichki xotirani tashqi manipulyatsiyalardan 100% himoya qilish.",
      "en": "Challenge 105: Defensive copying of arrays and mutable references via .clone() to prevent encapsulation leaks.",
      "ru": "Задача 105: Защитное копирование массивов и ссылочных типов через .clone() для предотвращения утечек."
    },
    "newKnowledgeTags": [
      "defensive copying",
      "clone()",
      "memory safety",
      "arrays"
    ],
    "methodSpecs": [
      {
        "name": "getMarksCopy()",
        "signature": "public int[] getMarksCopy()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int[]</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int[]</code>: returns computed business result or operation state.",
          "ru": "<code>int[]</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "calculateAverage()",
        "signature": "public double calculateAverage()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "StudentMarksRecord",
        "signature": "public StudentMarksRecord(int[] marks)",
        "params": {
          "uz": "<code>int[] marks</code> (masalan, <code>original</code>)",
          "en": "<code>int[] marks</code> (e.g. <code>original</code>)",
          "ru": "<code>int[] marks</code> (например, <code>original</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.marks = (marks != null) ? marks.clone() : new int[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.marks = (marks != null) ? marks.clone() : new int[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.marks = (marks != null) ? marks.clone() : new int[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`rec` nomli `StudentMarksRecord` ob'yektini yarating va argument sifatida `original` qiymatini bering.",
          "Tegishli `getMarksCopy()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `StudentMarksRecord` object named `rec` and pass argument(s) `original`.",
          "Invoke `getMarksCopy()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `StudentMarksRecord` с именем `rec` и передайте аргумент(ы) `original`.",
          "Вызовите метод(ы) `getMarksCopy()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "O'rtacha baho: 80.0"
    }
  },
  {
    "id": 106,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "106. Uzum Market — Binar Holatlar Mashinasi (OFF -> ON Guarded Transition)",
      "en": "106. Uzum Market — Binary Power State Machine with Guarded Transitions",
      "ru": "106. Uzum Market — Бинарный конечный автомат с защищенными переходами"
    },
    "scenario": {
      "uz": "Ombor skaneri ikkita holatga ega: OFF va ON. 'turnOn()' faqat qurilma OFF bo'lganda true qaytarib yoqadi, allaqachon yoniq bo'lsa false qaytaradi. 'turnOff()' ham xuddi shunday himoyalangan.",
      "en": "Binary state machine enforces valid transitions. Cannot turnOn() if already ON.",
      "ru": "Бинарный автомат состояний. Нельзя включить, если уже включено."
    },
    "requirements": {
      "classes": [
        "WarehouseScanner",
        "Main"
      ],
      "privateFields": [
        "isOn"
      ],
      "methods": [
        "turnOn",
        "turnOff",
        "isOn"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class WarehouseScanner {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class WarehouseScanner {\n    private boolean isOn = false;\n\n    public boolean turnOn() {\n        if (!this.isOn) {\n            this.isOn = true;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean turnOff() {\n        if (this.isOn) {\n            this.isOn = false;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean isOn() {\n        return this.isOn;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarehouseScanner ws = new WarehouseScanner();\n        System.out.println(\"1-yoqish: \" + ws.turnOn());\n        System.out.println(\"2-yoqish: \" + ws.turnOn());\n        System.out.println(\"O'chirish: \" + ws.turnOff());\n    }\n}",
    "expectedOutput": "1-yoqish: true\n2-yoqish: false\nO'chirish: true",
    "newKnowledge": {
      "uz": "106-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 106: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 106: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "turnOn()",
        "signature": "public boolean turnOn()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "turnOff()",
        "signature": "public boolean turnOff()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isOn()",
        "signature": "public boolean isOn()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean isOn</code> maydonining qiymatini return qiladi (masalan, <code>false</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean isOn</code> (e.g. <code>false</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean isOn</code> (например, <code>false</code>)."
        },
        "desc": {
          "uz": "Ichki <code>isOn</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>isOn</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>isOn</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ws` nomli `WarehouseScanner` ob'yektini yarating."
        ],
        "en": [
          "Create a `WarehouseScanner` object named `ws`."
        ],
        "ru": [
          "Создайте объект `WarehouseScanner` с именем `ws`."
        ]
      },
      "expectedOutput": "1-yoqish: true\n2-yoqish: false\nO'chirish: true"
    }
  },
  {
    "id": 107,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "107. Payme — 3 Bosqichli Buyurtma Hayot Sikli (CREATED -> PAID -> DELIVERED)",
      "en": "107. Payme — 3-Phase Sequential Order Lifecycle State Machine",
      "ru": "107. Payme — 3-фазный жизненный цикл заказа"
    },
    "scenario": {
      "uz": "Buyurtma faqat CREATED -> PAID -> DELIVERED qat'iy ketma-ketligida siljishi mumkin. To'lov qilinmagan buyurtmani yetkazib berishga urinish ('deliver()') false qaytarsin.",
      "en": "Strict 3-phase state machine: CREATED -> PAID -> DELIVERED. deliver() is illegal from CREATED state.",
      "ru": "Строгий 3-фазный автомат: заказ нельзя доставить, минуя стадию оплаты."
    },
    "requirements": {
      "classes": [
        "OrderLifecycle",
        "Main"
      ],
      "privateFields": [
        "state"
      ],
      "methods": [
        "pay",
        "deliver",
        "getState"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class OrderLifecycle {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderLifecycle {\n    private String state = \"CREATED\";\n\n    public boolean pay() {\n        if (\"CREATED\".equals(this.state)) {\n            this.state = \"PAID\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean deliver() {\n        if (\"PAID\".equals(this.state)) {\n            this.state = \"DELIVERED\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getState() {\n        return this.state;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderLifecycle ord = new OrderLifecycle();\n        boolean d1 = ord.deliver();\n        boolean p1 = ord.pay();\n        boolean d2 = ord.deliver();\n        System.out.println(\"D1: \" + d1 + \" | P1: \" + p1 + \" | D2: \" + d2 + \" | Holat: \" + ord.getState());\n    }\n}",
    "expectedOutput": "D1: false | P1: true | D2: true | Holat: DELIVERED",
    "newKnowledge": {
      "uz": "107-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 107: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 107: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "pay()",
        "signature": "public boolean pay()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "deliver()",
        "signature": "public boolean deliver()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getState()",
        "signature": "public String getState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String state</code> maydonining qiymatini return qiladi (masalan, <code>\"CREATED\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String state</code> (e.g. <code>\"CREATED\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String state</code> (например, <code>\"CREATED\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>state</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>state</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>state</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ord` nomli `OrderLifecycle` ob'yektini yarating.",
          "Tegishli `deliver()`, `pay()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `OrderLifecycle` object named `ord`.",
          "Invoke `deliver()`, `pay()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `OrderLifecycle` с именем `ord`.",
          "Вызовите метод(ы) `deliver()`, `pay()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "D1: false | P1: true | D2: true | Holat: DELIVERED"
    }
  },
  {
    "id": 108,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "108. Korzinka — Bekor Qilish Huquqi Bilan Holatlar Mashinasi (Cancellation Guard)",
      "en": "108. Korzinka — Cancellable State Machine with Terminal Guards",
      "ru": "108. Korzinka — Автомат состояний с терминальной защитой отмены"
    },
    "scenario": {
      "uz": "Buyurtmani 'CANCELLED' qilish faqat CREATED yoki PAID bosqichlarida mumkin. Agar buyurtma allaqachon DELIVERED bo'lgan bo'lsa, uni bekor qilib bo'lmaydi (terminal holat).",
      "en": "Orders can cancel from CREATED or PAID, but DELIVERED is terminal and blocks cancellation.",
      "ru": "Заказ можно отменить только до доставки. После DELIVERED отмена запрещена."
    },
    "requirements": {
      "classes": [
        "CancellableOrder",
        "Main"
      ],
      "privateFields": [
        "status"
      ],
      "methods": [
        "cancel",
        "deliver",
        "getStatus"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CancellableOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CancellableOrder {\n    private String status = \"PAID\";\n\n    public void deliver() {\n        if (\"PAID\".equals(this.status)) {\n            this.status = \"DELIVERED\";\n        }\n    }\n\n    public boolean cancel() {\n        if (\"CREATED\".equals(this.status) || \"PAID\".equals(this.status)) {\n            this.status = \"CANCELLED\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getStatus() {\n        return this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CancellableOrder o1 = new CancellableOrder();\n        System.out.println(\"O1 bekor qilindi: \" + o1.cancel());\n        CancellableOrder o2 = new CancellableOrder();\n        o2.deliver();\n        System.out.println(\"O2 yetkazilgach bekor qilindi: \" + o2.cancel());\n    }\n}",
    "expectedOutput": "O1 bekor qilindi: true\nO2 yetkazilgach bekor qilindi: false",
    "newKnowledge": {
      "uz": "108-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 108: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 108: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "deliver()",
        "signature": "public void deliver()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "cancel()",
        "signature": "public boolean cancel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getStatus()",
        "signature": "public String getStatus()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String status</code> maydonining qiymatini return qiladi (masalan, <code>\"PAID\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String status</code> (e.g. <code>\"PAID\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String status</code> (например, <code>\"PAID\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>status</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>status</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>status</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `o1` (boshlang'ich) hamda `o2` (boshlang'ich).",
          "Tegishli `deliver()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `o1` (default) and `o2` (default).",
          "Invoke `deliver()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `o1` (по умолчанию) и `o2` (по умолчанию).",
          "Вызовите метод(ы) `deliver()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "O1 bekor qilindi: true\nO2 yetkazilgach bekor qilindi: false"
    }
  },
  {
    "id": 109,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "109. Click — Yon Ta'sirga Ega O'tish (Side-Effect Generating Transition)",
      "en": "109. Click — State Transition Generating Cryptographic Tracking Token",
      "ru": "109. Click — Переход состояния с генерацией токена отслеживания"
    },
    "scenario": {
      "uz": "To'lov 'AUTHORIZED' dan 'CAPTURED' ga o'tganda, 'generateFiscalSign()' chaqirilib, o'tish bilan bir vaqtda yangi 'fiscalToken' hosil qilinadi.",
      "en": "Transition to CAPTURED triggers an encapsulated side-effect: generates fiscal token.",
      "ru": "Переход в CAPTURED запускает инкапсулированный сайд-эффект генерации фискального знака."
    },
    "requirements": {
      "classes": [
        "PaymentTransaction",
        "Main"
      ],
      "privateFields": [
        "state",
        "fiscalSign"
      ],
      "methods": [
        "capture",
        "getFiscalSign"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PaymentTransaction {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentTransaction {\n    private String state = \"AUTHORIZED\";\n    private String fiscalSign = null;\n\n    public boolean capture() {\n        if (\"AUTHORIZED\".equals(this.state)) {\n            this.state = \"CAPTURED\";\n            this.fiscalSign = \"FS-9942\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getFiscalSign() {\n        return this.fiscalSign;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTransaction tx = new PaymentTransaction();\n        tx.capture();\n        System.out.println(\"Fiskal belgi: \" + tx.getFiscalSign());\n    }\n}",
    "expectedOutput": "Fiskal belgi: FS-9942",
    "newKnowledge": {
      "uz": "109-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 109: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 109: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "capture()",
        "signature": "public boolean capture()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getFiscalSign()",
        "signature": "public String getFiscalSign()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String fiscalSign</code> maydonining qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>String</code>: returns the value of <code>private String fiscalSign</code> (e.g. <code>null</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String fiscalSign</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "Ichki <code>fiscalSign</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>fiscalSign</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>fiscalSign</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`tx` nomli `PaymentTransaction` ob'yektini yarating.",
          "Tegishli `capture()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PaymentTransaction` object named `tx`.",
          "Invoke `capture()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PaymentTransaction` с именем `tx`.",
          "Вызовите метод(ы) `capture()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Fiskal belgi: FS-9942"
    }
  },
  {
    "id": 110,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "110. Yandex Go — Kuryer Taksi Mashinasi (IDLE -> DISPATCHED -> ON_TRIP -> IDLE)",
      "en": "110. Yandex Go — Cyclic Taxi Dispatch Lifecycle State Machine",
      "ru": "110. Yandex Go — Циклический конечный автомат диспетчеризации такси"
    },
    "scenario": {
      "uz": "Taksi haydovchisi: IDLE -> DISPATCHED (buyurtma berildi) -> ON_TRIP (mijoz mindi) -> IDLE (safar tugadi). Har bir bosqich faqat oldingi holat to'g'ri bo'lgandagina o'tadi.",
      "en": "Cyclic 4-state lifecycle: IDLE -> DISPATCHED -> ON_TRIP -> IDLE with phase guards.",
      "ru": "Циклический автомат: Свободен -> Направлен -> В поездке -> Свободен."
    },
    "requirements": {
      "classes": [
        "TaxiDriverState",
        "Main"
      ],
      "privateFields": [
        "phase"
      ],
      "methods": [
        "dispatch",
        "startTrip",
        "completeTrip",
        "getPhase"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class TaxiDriverState {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TaxiDriverState {\n    private String phase = \"IDLE\";\n\n    public boolean dispatch() {\n        if (\"IDLE\".equals(this.phase)) {\n            this.phase = \"DISPATCHED\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean startTrip() {\n        if (\"DISPATCHED\".equals(this.phase)) {\n            this.phase = \"ON_TRIP\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean completeTrip() {\n        if (\"ON_TRIP\".equals(this.phase)) {\n            this.phase = \"IDLE\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getPhase() {\n        return this.phase;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiDriverState td = new TaxiDriverState();\n        td.dispatch();\n        td.startTrip();\n        td.completeTrip();\n        System.out.println(\"Yakuniy faza: \" + td.getPhase());\n    }\n}",
    "expectedOutput": "Yakuniy faza: IDLE",
    "newKnowledge": {
      "uz": "110-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 110: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 110: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "dispatch()",
        "signature": "public boolean dispatch()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "startTrip()",
        "signature": "public boolean startTrip()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "completeTrip()",
        "signature": "public boolean completeTrip()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPhase()",
        "signature": "public String getPhase()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String phase</code> maydonining qiymatini return qiladi (masalan, <code>\"IDLE\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String phase</code> (e.g. <code>\"IDLE\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String phase</code> (например, <code>\"IDLE\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>phase</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>phase</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>phase</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`td` nomli `TaxiDriverState` ob'yektini yarating.",
          "Tegishli `dispatch()`, `startTrip()`, `completeTrip()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TaxiDriverState` object named `td`.",
          "Invoke `dispatch()`, `startTrip()`, `completeTrip()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TaxiDriverState` с именем `td`.",
          "Вызовите метод(ы) `dispatch()`, `startTrip()`, `completeTrip()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yakuniy faza: IDLE"
    }
  },
  {
    "id": 111,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "111. Safia — Qahva Mashinasi Holati (READY, BREWING, OUT_OF_BEANS)",
      "en": "111. Safia — Coffee Machine Resource-Guarded State Transitions",
      "ru": "111. Safia — Автомат состояний кофемашины с проверкой ресурсов"
    },
    "scenario": {
      "uz": "Qahva mashinasida don miqdori ('beansGrams') saqlanadi. 'brew()' metodi faqat don yetarli bo'lgandagina qahva pishiradi (beans -= 15), aks holda holatni OUT_OF_BEANS ga o'tkazadi.",
      "en": "Resource depletion triggers state change: insufficient coffee beans automatically flips state to OUT_OF_BEANS.",
      "ru": "Нехватка ресурсов переводит автомат в состояние OUT_OF_BEANS."
    },
    "requirements": {
      "classes": [
        "CoffeeMaker",
        "Main"
      ],
      "privateFields": [
        "beansGrams",
        "state"
      ],
      "methods": [
        "brew",
        "getState"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class CoffeeMaker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CoffeeMaker {\n    private int beansGrams;\n    private String state = \"READY\";\n\n    public CoffeeMaker(int beansGrams) {\n        this.beansGrams = beansGrams;\n    }\n\n    public boolean brew() {\n        if (this.beansGrams >= 15) {\n            this.beansGrams -= 15;\n            this.state = \"READY\";\n            return true;\n        } else {\n            this.state = \"OUT_OF_BEANS\";\n            return false;\n        }\n    }\n\n    public String getState() {\n        return this.state;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeMaker cm = new CoffeeMaker(20);\n        cm.brew();\n        cm.brew();\n        System.out.println(\"Holat: \" + cm.getState());\n    }\n}",
    "expectedOutput": "Holat: OUT_OF_BEANS",
    "newKnowledge": {
      "uz": "111-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 111: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 111: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "brew()",
        "signature": "public boolean brew()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getState()",
        "signature": "public String getState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String state</code> maydonining qiymatini return qiladi (masalan, <code>\"READY\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String state</code> (e.g. <code>\"READY\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String state</code> (например, <code>\"READY\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>state</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>state</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>state</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "CoffeeMaker",
        "signature": "public CoffeeMaker(int beansGrams)",
        "params": {
          "uz": "<code>int beansGrams</code> (masalan, <code>20</code>)",
          "en": "<code>int beansGrams</code> (e.g. <code>20</code>)",
          "ru": "<code>int beansGrams</code> (например, <code>20</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.beansGrams = beansGrams;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.beansGrams = beansGrams;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.beansGrams = beansGrams;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`cm` nomli `CoffeeMaker` ob'yektini yarating va argument sifatida `20` qiymatini bering.",
          "Tegishli `brew()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `CoffeeMaker` object named `cm` and pass argument(s) `20`.",
          "Invoke `brew()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `CoffeeMaker` с именем `cm` и передайте аргумент(ы) `20`.",
          "Вызовите метод(ы) `brew()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Holat: OUT_OF_BEANS"
    }
  },
  {
    "id": 112,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "112. Dodo Pizza — Qayta Urinish Limitiga Ega Vazifa Sikli (Retry Circuit Breaker)",
      "en": "112. Dodo Pizza — Task Lifecycle State Machine with Retry Bounds",
      "ru": "112. Dodo Pizza — Жизненный цикл задачи с лимитом повторных попыток"
    },
    "scenario": {
      "uz": "SMS yuborish vazifasi: PENDING -> FAILED bo'lganda agar urinishlar soni ('retryCount < 3') bo'lsa PENDING ga qaytadi, 3 tadan oshganda esa DEAD_LETTER holatiga o'tadi.",
      "en": "Retry state machine: transitions back to PENDING on failure if retries < 3, else drops to DEAD_LETTER.",
      "ru": "При сбое задача возвращается в PENDING, если попыток < 3, иначе переходит в DEAD_LETTER."
    },
    "requirements": {
      "classes": [
        "RetryTask",
        "Main"
      ],
      "privateFields": [
        "state",
        "retryCount"
      ],
      "methods": [
        "fail",
        "getState"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class RetryTask {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class RetryTask {\n    private String state = \"PENDING\";\n    private int retryCount = 0;\n\n    public void fail() {\n        this.retryCount++;\n        if (this.retryCount >= 3) {\n            this.state = \"DEAD_LETTER\";\n        } else {\n            this.state = \"PENDING\";\n        }\n    }\n\n    public String getState() {\n        return this.state;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RetryTask task = new RetryTask();\n        task.fail();\n        task.fail();\n        task.fail();\n        System.out.println(\"Vazifa holati: \" + task.getState());\n    }\n}",
    "expectedOutput": "Vazifa holati: DEAD_LETTER",
    "newKnowledge": {
      "uz": "112-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 112: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 112: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "fail()",
        "signature": "public void fail()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi qiymatni <code>this.retryCount >= 3</code> shartiga tekshiradi, agar shart bajarilsa <code>this.state = \"DEAD_LETTER\";</code> qilib yangilaydi.",
          "en": "Checks <code>this.retryCount >= 3</code> condition, and if valid, updates <code>this.state = \"DEAD_LETTER\";</code>.",
          "ru": "Проверяет условие <code>this.retryCount >= 3</code>, и если верно, обновляет <code>this.state = \"DEAD_LETTER\";</code>."
        }
      },
      {
        "name": "getState()",
        "signature": "public String getState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String state</code> maydonining qiymatini return qiladi (masalan, <code>\"PENDING\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String state</code> (e.g. <code>\"PENDING\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String state</code> (например, <code>\"PENDING\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>state</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>state</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>state</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`task` nomli `RetryTask` ob'yektini yarating.",
          "Tegishli `fail()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `RetryTask` object named `task`.",
          "Invoke `fail()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `RetryTask` с именем `task`.",
          "Вызовите метод(ы) `fail()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Vazifa holati: DEAD_LETTER"
    }
  },
  {
    "id": 113,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "113. Texnomart — Hujjatni Tasdiqlash Workflowsi (DRAFT, REVIEW, APPROVED, REJECTED)",
      "en": "113. Texnomart — Multi-Role Document Approval Workflow State Machine",
      "ru": "113. Texnomart — Воркфлоу согласования документов с фиксацией причины отказа"
    },
    "scenario": {
      "uz": "Shartnoma DRAFT dan faqat submitForReview() bilan REVIEW ga o'tadi. REVIEW da 'reject(reason)' chaqirilsa REJECTED bo'ladi va rad sababi saqlanadi.",
      "en": "Approval workflow requires explicit transition through REVIEW before rejection or approval.",
      "ru": "Воркфлоу требует обязательного этапа REVIEW перед утверждением или отклонением."
    },
    "requirements": {
      "classes": [
        "ContractWorkflow",
        "Main"
      ],
      "privateFields": [
        "status",
        "rejectReason"
      ],
      "methods": [
        "submitForReview",
        "reject",
        "getStatus",
        "getRejectReason"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ContractWorkflow {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ContractWorkflow {\n    private String status = \"DRAFT\";\n    private String rejectReason = null;\n\n    public boolean submitForReview() {\n        if (\"DRAFT\".equals(this.status)) {\n            this.status = \"REVIEW\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean reject(String reason) {\n        if (\"REVIEW\".equals(this.status)) {\n            this.status = \"REJECTED\";\n            this.rejectReason = reason;\n            return true;\n        }\n        return false;\n    }\n\n    public String getStatus() { return this.status; }\n    public String getRejectReason() { return this.rejectReason; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ContractWorkflow cw = new ContractWorkflow();\n        cw.submitForReview();\n        cw.reject(\"Imzo yetishmaydi\");\n        System.out.println(\"Holat: \" + cw.getStatus() + \" | Sabab: \" + cw.getRejectReason());\n    }\n}",
    "expectedOutput": "Holat: REJECTED | Sabab: Imzo yetishmaydi",
    "newKnowledge": {
      "uz": "113-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 113: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 113: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "submitForReview()",
        "signature": "public boolean submitForReview()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "reject()",
        "signature": "public boolean reject(String reason)",
        "params": {
          "uz": "<code>String reason</code> (masalan, <code>\"Imzo yetishmaydi\"</code>)",
          "en": "<code>String reason</code> (e.g. <code>\"Imzo yetishmaydi\"</code>)",
          "ru": "<code>String reason</code> (например, <code>\"Imzo yetishmaydi\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getStatus()",
        "signature": "public String getStatus()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String status</code> maydonining qiymatini return qiladi (masalan, <code>\"DRAFT\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String status</code> (e.g. <code>\"DRAFT\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String status</code> (например, <code>\"DRAFT\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>status</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>status</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>status</code> без возможности модификации."
        }
      },
      {
        "name": "getRejectReason()",
        "signature": "public String getRejectReason()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String rejectReason</code> maydonining qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>String</code>: returns the value of <code>private String rejectReason</code> (e.g. <code>null</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String rejectReason</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "Ichki <code>rejectReason</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>rejectReason</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>rejectReason</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`cw` nomli `ContractWorkflow` ob'yektini yarating.",
          "Tegishli `submitForReview()`, `reject()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ContractWorkflow` object named `cw`.",
          "Invoke `submitForReview()`, `reject()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ContractWorkflow` с именем `cw`.",
          "Вызовите метод(ы) `submitForReview()`, `reject()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Holat: REJECTED | Sabab: Imzo yetishmaydi"
    }
  },
  {
    "id": 114,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "114. Express24 — Audio Pleer Holatlari (STOPPED, PLAYING, PAUSED)",
      "en": "114. Express24 — Media Player State Machine with Position Preservation",
      "ru": "114. Express24 — Автомат состояний аудиоплеера с сохранением позиции"
    },
    "scenario": {
      "uz": "Pleer holatlari: STOPPED holatida 'play()' vaqtni 0 dan boshlaydi. PAUSED holatida 'play()' qilinganda esa to'xtatilgan joyidan davom ettiradi.",
      "en": "Media player resets track position to 0 on play() from STOPPED, but preserves position from PAUSED.",
      "ru": "Плеер сбрасывает позицию в 0 при воспроизведении из STOPPED, но продолжает из PAUSED."
    },
    "requirements": {
      "classes": [
        "AudioTrackPlayer",
        "Main"
      ],
      "privateFields": [
        "state",
        "playbackPosition"
      ],
      "methods": [
        "play",
        "pause",
        "stop",
        "getPosition"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class AudioTrackPlayer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AudioTrackPlayer {\n    private String state = \"STOPPED\";\n    private int playbackPosition = 0;\n\n    public void play() {\n        if (\"STOPPED\".equals(this.state)) {\n            this.playbackPosition = 0;\n            this.state = \"PLAYING\";\n        } else if (\"PAUSED\".equals(this.state)) {\n            this.state = \"PLAYING\";\n        }\n    }\n\n    public void pause() {\n        if (\"PLAYING\".equals(this.state)) {\n            this.state = \"PAUSED\";\n            this.playbackPosition = 45; // simulatsiya\n        }\n    }\n\n    public void stop() {\n        this.state = \"STOPPED\";\n        this.playbackPosition = 0;\n    }\n\n    public int getPosition() {\n        return this.playbackPosition;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackPlayer player = new AudioTrackPlayer();\n        player.play();\n        player.pause();\n        System.out.println(\"Pauzadagi vaqt: \" + player.getPosition());\n    }\n}",
    "expectedOutput": "Pauzadagi vaqt: 45",
    "newKnowledge": {
      "uz": "114-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 114: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 114: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "play()",
        "signature": "public void play()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "pause()",
        "signature": "public void pause()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "stop()",
        "signature": "public void stop()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPosition()",
        "signature": "public int getPosition()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int playbackPosition</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int playbackPosition</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int playbackPosition</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>playbackPosition</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>playbackPosition</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>playbackPosition</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`player` nomli `AudioTrackPlayer` ob'yektini yarating.",
          "Tegishli `play()`, `pause()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `AudioTrackPlayer` object named `player`.",
          "Invoke `play()`, `pause()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `AudioTrackPlayer` с именем `player`.",
          "Вызовите метод(ы) `play()`, `pause()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Pauzadagi vaqt: 45"
    }
  },
  {
    "id": 115,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "115. Kapitalbank — Bank Hisobi Holati (ACTIVE, FROZEN, CLOSED)",
      "en": "115. Kapitalbank — Bank Account Status Lifecycle Enforcement",
      "ru": "115. Kapitalbank — Управление жизненным циклом статуса банковского счета"
    },
    "scenario": {
      "uz": "Hisob holatlari: FROZEN holatida pul yechish (withdraw) taqiqlanadi, lekin pul qo'yish mumkin. CLOSED holatida esa barcha operatsiyalar butunlay to'xtatiladi.",
      "en": "Account states: FROZEN blocks withdrawals but accepts deposits. CLOSED halts all operations permanently.",
      "ru": "FROZEN блокирует снятие, но разрешает пополнение. CLOSED блокирует любые операции."
    },
    "requirements": {
      "classes": [
        "BankAccountState",
        "Main"
      ],
      "privateFields": [
        "balance",
        "status"
      ],
      "methods": [
        "deposit",
        "withdraw",
        "freeze",
        "close"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class BankAccountState {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankAccountState {\n    private double balance = 0.0;\n    private String status = \"ACTIVE\";\n\n    public boolean deposit(double amt) {\n        if (!\"CLOSED\".equals(this.status) && amt > 0) {\n            this.balance += amt;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean withdraw(double amt) {\n        if (\"ACTIVE\".equals(this.status) && amt > 0 && this.balance >= amt) {\n            this.balance -= amt;\n            return true;\n        }\n        return false;\n    }\n\n    public void freeze() {\n        if (\"ACTIVE\".equals(this.status)) this.status = \"FROZEN\";\n    }\n\n    public void close() {\n        this.status = \"CLOSED\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankAccountState acc = new BankAccountState();\n        acc.deposit(100000.0);\n        acc.freeze();\n        boolean w1 = acc.withdraw(20000.0);\n        System.out.println(\"Muzlatilganda yechish: \" + w1);\n    }\n}",
    "expectedOutput": "Muzlatilganda yechish: false",
    "newKnowledge": {
      "uz": "115-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 115: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 115: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "deposit()",
        "signature": "public boolean deposit(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>100000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>100000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>100000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "withdraw()",
        "signature": "public boolean withdraw(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>20000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>20000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>20000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "freeze()",
        "signature": "public void freeze()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "close()",
        "signature": "public void close()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`acc` nomli `BankAccountState` ob'yektini yarating.",
          "Tegishli `deposit()`, `freeze()`, `withdraw()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `BankAccountState` object named `acc`.",
          "Invoke `deposit()`, `freeze()`, `withdraw()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `BankAccountState` с именем `acc`.",
          "Вызовите метод(ы) `deposit()`, `freeze()`, `withdraw()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Muzlatilganda yechish: false"
    }
  },
  {
    "id": 116,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "116. Asaxiy — Svetofor Sikli Nazoratchisi (RED -> GREEN -> YELLOW -> RED)",
      "en": "116. Asaxiy — Circular Traffic Light Controller State Machine",
      "ru": "116. Asaxiy — Циклический контроллер светофора"
    },
    "scenario": {
      "uz": "Avtomatlashtirilgan svetofor ketma-ketligi: RED -> GREEN -> YELLOW -> RED. 'nextPhase()' metodi har safar chaqirilganda doiraviy ravishda keyingi rangga o'tkazsin.",
      "en": "Traffic light cycles sequentially: RED -> GREEN -> YELLOW -> RED on nextPhase().",
      "ru": "Светофор циклически переключает фазы: RED -> GREEN -> YELLOW -> RED."
    },
    "requirements": {
      "classes": [
        "TrafficSignal",
        "Main"
      ],
      "privateFields": [
        "color"
      ],
      "methods": [
        "nextPhase",
        "getColor"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class TrafficSignal {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TrafficSignal {\n    private String color = \"RED\";\n\n    public void nextPhase() {\n        switch (this.color) {\n            case \"RED\": this.color = \"GREEN\"; break;\n            case \"GREEN\": this.color = \"YELLOW\"; break;\n            case \"YELLOW\": this.color = \"RED\"; break;\n        }\n    }\n\n    public String getColor() {\n        return this.color;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrafficSignal ts = new TrafficSignal();\n        ts.nextPhase();\n        ts.nextPhase();\n        System.out.println(\"Svetofor rangi: \" + ts.getColor());\n    }\n}",
    "expectedOutput": "Svetofor rangi: YELLOW",
    "newKnowledge": {
      "uz": "116-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 116: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 116: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "nextPhase()",
        "signature": "public void nextPhase()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getColor()",
        "signature": "public String getColor()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String color</code> maydonining qiymatini return qiladi (masalan, <code>\"RED\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String color</code> (e.g. <code>\"RED\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String color</code> (например, <code>\"RED\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>color</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>color</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>color</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ts` nomli `TrafficSignal` ob'yektini yarating.",
          "Tegishli `nextPhase()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TrafficSignal` object named `ts`.",
          "Invoke `nextPhase()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TrafficSignal` с именем `ts`.",
          "Вызовите метод(ы) `nextPhase()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Svetofor rangi: YELLOW"
    }
  },
  {
    "id": 117,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "117. Medion — Ruxsatlar Ierarxiyasi O'tishi (GUEST -> USER -> ADMIN)",
      "en": "117. Medion — Privilege Escalation Role Hierarchy State Guard",
      "ru": "117. Medion — Иерархия прав доступа с защитой от несанкционированного повышения"
    },
    "scenario": {
      "uz": "Tizimda rollar: GUEST -> USER -> ADMIN. ADMIN rolini olish uchun 'upgradeToAdmin(adminMasterKey)' da maxfiy kalit to'g'ri kiritilishi shart, aks holda rol ko'tarilmaydi.",
      "en": "Guarded role promotion: upgrading to ADMIN strictly requires valid master security key.",
      "ru": "Повышение до ADMIN строго требует указания правильного мастер-ключа."
    },
    "requirements": {
      "classes": [
        "UserRoleManager",
        "Main"
      ],
      "privateFields": [
        "role"
      ],
      "methods": [
        "promoteToUser",
        "upgradeToAdmin",
        "getRole"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UserRoleManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserRoleManager {\n    private String role = \"GUEST\";\n\n    public void promoteToUser() {\n        if (\"GUEST\".equals(this.role)) {\n            this.role = \"USER\";\n        }\n    }\n\n    public boolean upgradeToAdmin(String masterKey) {\n        if (\"USER\".equals(this.role) && \"MEDION_ROOT\".equals(masterKey)) {\n            this.role = \"ADMIN\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getRole() {\n        return this.role;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserRoleManager rm = new UserRoleManager();\n        rm.promoteToUser();\n        boolean ok = rm.upgradeToAdmin(\"MEDION_ROOT\");\n        System.out.println(\"Admin bo'ldimi: \" + ok + \" | Rol: \" + rm.getRole());\n    }\n}",
    "expectedOutput": "Admin bo'ldimi: true | Rol: ADMIN",
    "newKnowledge": {
      "uz": "117-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 117: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 117: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "promoteToUser()",
        "signature": "public void promoteToUser()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "upgradeToAdmin()",
        "signature": "public boolean upgradeToAdmin(String masterKey)",
        "params": {
          "uz": "<code>String masterKey</code> (masalan, <code>\"MEDION_ROOT\"</code>)",
          "en": "<code>String masterKey</code> (e.g. <code>\"MEDION_ROOT\"</code>)",
          "ru": "<code>String masterKey</code> (например, <code>\"MEDION_ROOT\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getRole()",
        "signature": "public String getRole()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String role</code> maydonining qiymatini return qiladi (masalan, <code>\"GUEST\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String role</code> (e.g. <code>\"GUEST\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String role</code> (например, <code>\"GUEST\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>role</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>role</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>role</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`rm` nomli `UserRoleManager` ob'yektini yarating.",
          "Tegishli `promoteToUser()`, `upgradeToAdmin()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `UserRoleManager` object named `rm`.",
          "Invoke `promoteToUser()`, `upgradeToAdmin()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `UserRoleManager` с именем `rm`.",
          "Вызовите метод(ы) `promoteToUser()`, `upgradeToAdmin()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Admin bo'ldimi: true | Rol: ADMIN"
    }
  },
  {
    "id": 118,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "118. Beeline — Obuna Billing Sikli (TRIAL -> ACTIVE -> EXPIRED)",
      "en": "118. Beeline — Recurring Subscription Billing State Machine",
      "ru": "118. Beeline — Автомат состояний биллинга подписки"
    },
    "scenario": {
      "uz": "Obuna boshida 7 kunlik TRIAL bo'ladi. 'activatePaidPlan()' uni ACTIVE qiladi. Agar balans yetmasa yoki 'cancelSubscription()' chaqirilsa holat EXPIRED ga o'tadi.",
      "en": "Subscription lifecycle: starts at TRIAL, activates on payment, expires on cancellation.",
      "ru": "Жизненный цикл подписки: начинается с TRIAL, активируется при оплате, истекает при отмене."
    },
    "requirements": {
      "classes": [
        "SubscriptionBilling",
        "Main"
      ],
      "privateFields": [
        "planState"
      ],
      "methods": [
        "activatePaidPlan",
        "cancelSubscription",
        "getPlanState"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SubscriptionBilling {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SubscriptionBilling {\n    private String planState = \"TRIAL\";\n\n    public boolean activatePaidPlan() {\n        if (\"TRIAL\".equals(this.planState)) {\n            this.planState = \"ACTIVE\";\n            return true;\n        }\n        return false;\n    }\n\n    public void cancelSubscription() {\n        this.planState = \"EXPIRED\";\n    }\n\n    public String getPlanState() {\n        return this.planState;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SubscriptionBilling sub = new SubscriptionBilling();\n        sub.activatePaidPlan();\n        sub.cancelSubscription();\n        System.out.println(\"Yakuniy obuna holati: \" + sub.getPlanState());\n    }\n}",
    "expectedOutput": "Yakuniy obuna holati: EXPIRED",
    "newKnowledge": {
      "uz": "118-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 118: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 118: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "activatePaidPlan()",
        "signature": "public boolean activatePaidPlan()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "cancelSubscription()",
        "signature": "public void cancelSubscription()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPlanState()",
        "signature": "public String getPlanState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String planState</code> maydonining qiymatini return qiladi (masalan, <code>\"TRIAL\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String planState</code> (e.g. <code>\"TRIAL\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String planState</code> (например, <code>\"TRIAL\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>planState</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>planState</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>planState</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`sub` nomli `SubscriptionBilling` ob'yektini yarating.",
          "Tegishli `activatePaidPlan()`, `cancelSubscription()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SubscriptionBilling` object named `sub`.",
          "Invoke `activatePaidPlan()`, `cancelSubscription()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SubscriptionBilling` с именем `sub`.",
          "Вызовите метод(ы) `activatePaidPlan()`, `cancelSubscription()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Yakuniy obuna holati: EXPIRED"
    }
  },
  {
    "id": 119,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "119. UzAirways — Turniket Holatlar Mashinasi (LOCKED -> UNLOCKED)",
      "en": "119. UzAirways — Classic Turnstile Gate State Machine",
      "ru": "119. UzAirways — Классический автомат состояний турникета"
    },
    "scenario": {
      "uz": "Turniket klassik holatlar mashinasi: LOCKED va UNLOCKED. 'scanBoardingPass()' chaqirilganda UNLOCKED bo'ladi. Yo'lovchi o'tgach ('pushGate()') yana LOCKED holatiga qaytib qulflanadi.",
      "en": "Classic turnstile: scanning boarding pass unlocks gate; passenger pushing gate locks it again.",
      "ru": "Классический турникет: сканирование билета открывает замок, проход закрывает его обратно."
    },
    "requirements": {
      "classes": [
        "TurnstileGate",
        "Main"
      ],
      "privateFields": [
        "isLocked"
      ],
      "methods": [
        "scanPass",
        "pushGate",
        "isLocked"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class TurnstileGate {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TurnstileGate {\n    private boolean isLocked = true;\n\n    public void scanPass() {\n        this.isLocked = false;\n    }\n\n    public boolean pushGate() {\n        if (!this.isLocked) {\n            this.isLocked = true;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean isLocked() {\n        return this.isLocked;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TurnstileGate gate = new TurnstileGate();\n        gate.scanPass();\n        System.out.println(\"Skanerdan so'ng qulflanganmi: \" + gate.isLocked());\n        gate.pushGate();\n        System.out.println(\"O'tgandan so'ng qulflanganmi: \" + gate.isLocked());\n    }\n}",
    "expectedOutput": "Skanerdan so'ng qulflanganmi: false\nO'tgandan so'ng qulflanganmi: true",
    "newKnowledge": {
      "uz": "119-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 119: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 119: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "scanPass()",
        "signature": "public void scanPass()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>false</code> qiymatini qabul qilib, <code>this.isLocked = false;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>false</code> and sets <code>this.isLocked = false;</code>.",
          "ru": "Принимает <code>false</code> и обновляет <code>this.isLocked = false;</code>."
        }
      },
      {
        "name": "pushGate()",
        "signature": "public boolean pushGate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isLocked()",
        "signature": "public boolean isLocked()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean isLocked</code> maydonining qiymatini return qiladi (masalan, <code>true</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean isLocked</code> (e.g. <code>true</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean isLocked</code> (например, <code>true</code>)."
        },
        "desc": {
          "uz": "Ichki <code>isLocked</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>isLocked</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>isLocked</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`gate` nomli `TurnstileGate` ob'yektini yarating.",
          "Tegishli `scanPass()`, `pushGate()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TurnstileGate` object named `gate`.",
          "Invoke `scanPass()`, `pushGate()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TurnstileGate` с именем `gate`.",
          "Вызовите метод(ы) `scanPass()`, `pushGate()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Skanerdan so'ng qulflanganmi: false\nO'tgandan so'ng qulflanganmi: true"
    }
  },
  {
    "id": 120,
    "tier": 8,
    "tierName": "8-Bosqich: Biznes Operatsion Metodlari va Holatlar Mashinasi",
    "sector": "106-120: State Machines & Domain Operations",
    "title": {
      "uz": "120. WIUT SRS — Talaba Modul Holatlari Mashinasi (Master State Machine)",
      "en": "120. WIUT SRS — Master Academic Module Enrolment State Machine Suite",
      "ru": "120. WIUT SRS — Мастер-автомат состояний академической регистрации на модуль"
    },
    "scenario": {
      "uz": "WIUT talaba moduli hayot sikli: REGISTERED -> IN_PROGRESS -> PASSED yoki REFERRED. Faqat IN_PROGRESS holatidagi modulga baho qo'yib uni PASSED (baho >= 40) yoki REFERRED (baho < 40) qilish mumkin.",
      "en": "Master module enrolment lifecycle: REGISTERED -> IN_PROGRESS -> PASSED or REFERRED based on final mark >= 40.",
      "ru": "Мастер-автомат: модуль переходит в PASSED (оценка >= 40) или REFERRED (оценка < 40) только из IN_PROGRESS."
    },
    "requirements": {
      "classes": [
        "ModuleEnrolment",
        "Main"
      ],
      "privateFields": [
        "state",
        "finalMark"
      ],
      "methods": [
        "startStudy",
        "gradeModule",
        "getState"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ModuleEnrolment {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ModuleEnrolment {\n    private String state = \"REGISTERED\";\n    private int finalMark = -1;\n\n    public boolean startStudy() {\n        if (\"REGISTERED\".equals(this.state)) {\n            this.state = \"IN_PROGRESS\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean gradeModule(int mark) {\n        if (\"IN_PROGRESS\".equals(this.state) && mark >= 0 && mark <= 100) {\n            this.finalMark = mark;\n            this.state = (mark >= 40) ? \"PASSED\" : \"REFERRED\";\n            return true;\n        }\n        return false;\n    }\n\n    public String getState() {\n        return this.state;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModuleEnrolment mod = new ModuleEnrolment();\n        mod.startStudy();\n        mod.gradeModule(72);\n        System.out.println(\"Modul yakuniy holati: \" + mod.getState());\n    }\n}",
    "expectedOutput": "Modul yakuniy holati: PASSED",
    "newKnowledge": {
      "uz": "120-masala: Chekli holatlar mashinasi (Finite State Machine): domen operatsiyalari orqali ob'yektning ruxsat etilgan bosqichlardan (Lifecycle) tartibli o'tishini boshqarish.",
      "en": "Challenge 120: Finite State Machine lifecycle orchestration: enforcing valid domain state transitions.",
      "ru": "Задача 120: Конечный автомат жизненного цикла: контроль допустимых переходов состояний сущности."
    },
    "newKnowledgeTags": [
      "state machine",
      "lifecycle",
      "transition",
      "domain operations"
    ],
    "methodSpecs": [
      {
        "name": "startStudy()",
        "signature": "public boolean startStudy()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "gradeModule()",
        "signature": "public boolean gradeModule(int mark)",
        "params": {
          "uz": "<code>int mark</code> (masalan, <code>72</code>)",
          "en": "<code>int mark</code> (e.g. <code>72</code>)",
          "ru": "<code>int mark</code> (например, <code>72</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getState()",
        "signature": "public String getState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String state</code> maydonining qiymatini return qiladi (masalan, <code>\"REGISTERED\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String state</code> (e.g. <code>\"REGISTERED\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String state</code> (например, <code>\"REGISTERED\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>state</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>state</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>state</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`mod` nomli `ModuleEnrolment` ob'yektini yarating.",
          "Tegishli `startStudy()`, `gradeModule()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ModuleEnrolment` object named `mod`.",
          "Invoke `startStudy()`, `gradeModule()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ModuleEnrolment` с именем `mod`.",
          "Вызовите метод(ы) `startStudy()`, `gradeModule()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Modul yakuniy holati: PASSED"
    }
  },
  {
    "id": 121,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "121. Uzum Market — Avtomobil va Dvigatel Kompozitsiyasi (Car Has-An Engine)",
      "en": "121. Uzum Market — Basic 1-to-1 Composition and Delegation (Car Has-An Engine)",
      "ru": "121. Uzum Market — Базовая композиция 1-к-1 и делегирование (Car Has-An Engine)"
    },
    "scenario": {
      "uz": "Kompozitsiya ('Has-A'): Mashina ('DeliveryCar') o'z ichida motor ('Engine') ob'yektini saqlaydi. Tashqi kod 'car.start()' ni chaqirganda, mashina ichki motorining 'engine.ignite()' metodiga delegatsiya qiladi.",
      "en": "Composition: DeliveryCar encapsulates an Engine instance. Calling car.start() delegates to engine.ignite().",
      "ru": "Композиция: DeliveryCar содержит объект Engine. Вызов car.start() делегируется в engine.ignite()."
    },
    "requirements": {
      "classes": [
        "Engine",
        "DeliveryCar",
        "Main"
      ],
      "privateFields": [
        "engine"
      ],
      "methods": [
        "startCar"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Engine {\n    \n}\n\nclass DeliveryCar {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Engine {\n    public String ignite() { return \"VROOM\"; }\n}\n\nclass DeliveryCar {\n    private Engine engine;\n\n    public DeliveryCar(Engine engine) {\n        this.engine = engine;\n    }\n\n    public String startCar() {\n        return (this.engine != null) ? this.engine.ignite() : \"NO_ENGINE\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryCar car = new DeliveryCar(new Engine());\n        System.out.println(\"Mashina o't oldi: \" + car.startCar());\n    }\n}",
    "expectedOutput": "Mashina o't oldi: VROOM",
    "newKnowledge": {
      "uz": "121-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 121: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 121: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "ignite()",
        "signature": "public String ignite()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "startCar()",
        "signature": "public String startCar()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>engine</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>engine</code> qiymatini return qiladi (masalan, <code>new Engine(</code>).",
          "en": "<code>String</code>: returns safe default if <code>engine</code> is null, otherwise returns <code>engine</code> (e.g. <code>new Engine(</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>engine</code> null, иначе <code>engine</code> (например, <code>new Engine(</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`car` nomli `DeliveryCar` ob'yektini yarating va argument sifatida `new Engine(` qiymatini bering."
        ],
        "en": [
          "Create a `DeliveryCar` object named `car` and pass argument(s) `new Engine(`."
        ],
        "ru": [
          "Создайте объект `DeliveryCar` с именем `car` и передайте аргумент(ы) `new Engine(`."
        ]
      },
      "expectedOutput": "Mashina o't oldi: VROOM"
    }
  },
  {
    "id": 122,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "122. Payme — Terminal va Protsessor Kompozitsiyasi (Terminal & PaymentProcessor)",
      "en": "122. Payme — Component Delegation with Parameter Passing",
      "ru": "122. Payme — Композиция терминала и процессора с передачей параметров"
    },
    "scenario": {
      "uz": "Terminal ('PosTerminal') o'z ichida 'PaymentProcessor' kompozitsiyasiga ega. 'terminal.charge(amount)' metodi 'processor.processPayment(amount)' ga parametrni uzatib delegatsiya qiladi.",
      "en": "PosTerminal encapsulates PaymentProcessor. terminal.charge(amount) delegates parameter passing to processor.",
      "ru": "Терминал содержит PaymentProcessor. terminal.charge(amount) делегирует вызов процессору с параметром."
    },
    "requirements": {
      "classes": [
        "PaymentProcessor",
        "PosTerminal",
        "Main"
      ],
      "privateFields": [
        "processor"
      ],
      "methods": [
        "charge"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PaymentProcessor {\n    \n}\n\nclass PosTerminal {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentProcessor {\n    public boolean processPayment(double amt) { return amt > 0; }\n}\n\nclass PosTerminal {\n    private PaymentProcessor processor;\n\n    public PosTerminal(PaymentProcessor processor) {\n        this.processor = processor;\n    }\n\n    public boolean charge(double amt) {\n        return (this.processor != null) && this.processor.processPayment(amt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PosTerminal term = new PosTerminal(new PaymentProcessor());\n        System.out.println(\"To'lov: \" + term.charge(50000.0));\n    }\n}",
    "expectedOutput": "To'lov: true",
    "newKnowledge": {
      "uz": "122-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 122: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 122: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "processPayment()",
        "signature": "public boolean processPayment(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>amt</code>)",
          "en": "<code>double amt</code> (e.g. <code>amt</code>)",
          "ru": "<code>double amt</code> (например, <code>amt</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>amt > 0</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>amt > 0</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>amt > 0</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>amt > 0</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>amt > 0</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>amt > 0</code>."
        }
      },
      {
        "name": "charge()",
        "signature": "public boolean charge(double amt)",
        "params": {
          "uz": "<code>double amt</code>",
          "en": "<code>double amt</code>",
          "ru": "<code>double amt</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>processor</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>processor</code> qiymatini return qiladi (masalan, <code>new PaymentProcessor(</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>processor</code> is null, otherwise returns <code>processor</code> (e.g. <code>new PaymentProcessor(</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>processor</code> null, иначе <code>processor</code> (например, <code>new PaymentProcessor(</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`term` nomli `PosTerminal` ob'yektini yarating va argument sifatida `new PaymentProcessor(` qiymatini bering."
        ],
        "en": [
          "Create a `PosTerminal` object named `term` and pass argument(s) `new PaymentProcessor(`."
        ],
        "ru": [
          "Создайте объект `PosTerminal` с именем `term` и передайте аргумент(ы) `new PaymentProcessor(`."
        ]
      },
      "expectedOutput": "To'lov: true"
    }
  },
  {
    "id": 123,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "123. Korzinka — Ichma-ich Inkapsulyatsiya (Customer & MembershipCard)",
      "en": "123. Korzinka — Nested Object Encapsulation and Accessor Delegation",
      "ru": "123. Korzinka — Вложенная инкапсуляция клиента и карты лояльности"
    },
    "scenario": {
      "uz": "Mijoz ('Customer') sodiqlik kartasi ('MembershipCard: cardNumber, points') ob'yektini o'z ichiga oladi. 'customer.getLoyaltyPoints()' metodi ichki kartaning 'card.getPoints()' getteri orqali natijani qaytarsin.",
      "en": "Customer encapsulates MembershipCard. customer.getLoyaltyPoints() delegates to card.getPoints().",
      "ru": "Клиент содержит MembershipCard. customer.getLoyaltyPoints() делегирует вызов карточке."
    },
    "requirements": {
      "classes": [
        "MembershipCard",
        "Customer",
        "Main"
      ],
      "privateFields": [
        "card"
      ],
      "methods": [
        "getLoyaltyPoints"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class MembershipCard {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MembershipCard {\n    private int points;\n\n    public MembershipCard(int points) {\n        this.points = points;\n    }\n\n    public int getPoints() {\n        return this.points;\n    }\n}\n\nclass Customer {\n    private MembershipCard card;\n\n    public Customer(MembershipCard card) {\n        this.card = card;\n    }\n\n    public int getLoyaltyPoints() {\n        return (this.card != null) ? this.card.getPoints() : 0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(new MembershipCard(450));\n        System.out.println(\"Mijoz ballari: \" + c.getLoyaltyPoints());\n    }\n}",
    "expectedOutput": "Mijoz ballari: 450",
    "newKnowledge": {
      "uz": "123-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 123: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 123: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getPoints()",
        "signature": "public int getPoints()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int points</code> maydonining qiymatini return qiladi (masalan, <code>450</code>).",
          "en": "<code>int</code>: returns the value of <code>private int points</code> (e.g. <code>450</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int points</code> (например, <code>450</code>)."
        },
        "desc": {
          "uz": "Ichki <code>points</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>points</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>points</code> без возможности модификации."
        }
      },
      {
        "name": "getLoyaltyPoints()",
        "signature": "public int getLoyaltyPoints()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: agar <code>card</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>card</code> qiymatini return qiladi (masalan, <code>new MembershipCard(450</code>).",
          "en": "<code>int</code>: returns safe default if <code>card</code> is null, otherwise returns <code>card</code> (e.g. <code>new MembershipCard(450</code>).",
          "ru": "<code>int</code>: возвращает безопасное значение если <code>card</code> null, иначе <code>card</code> (например, <code>new MembershipCard(450</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "MembershipCard",
        "signature": "public MembershipCard(int points)",
        "params": {
          "uz": "<code>int points</code> (masalan, <code>450</code>)",
          "en": "<code>int points</code> (e.g. <code>450</code>)",
          "ru": "<code>int points</code> (например, <code>450</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.points = points;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.points = points;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.points = points;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`c` nomli `Customer` ob'yektini yarating va argument sifatida `new MembershipCard(450` qiymatini bering."
        ],
        "en": [
          "Create a `Customer` object named `c` and pass argument(s) `new MembershipCard(450`."
        ],
        "ru": [
          "Создайте объект `Customer` с именем `c` и передайте аргумент(ы) `new MembershipCard(450`."
        ]
      },
      "expectedOutput": "Mijoz ballari: 450"
    }
  },
  {
    "id": 124,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "124. Texnomart — Ko'p Komponentli Kompozitsiya (Phone Has Battery & Screen)",
      "en": "124. Texnomart — Multi-Component Composition with Inter-Component Side-Effects",
      "ru": "124. Texnomart — Многокомпонентная композиция телефона (Батарея и Экран)"
    },
    "scenario": {
      "uz": "Smartfon ('Smartphone') ikkita komponentga ega: 'Battery' (chargePercent) va 'Screen' (brightness). 'phone.turnOnScreen()' chaqirilganda batareya zaryadi 5% ga kamayadi.",
      "en": "Smartphone composes Battery and Screen. Turning on the screen causes Battery to drain 5%.",
      "ru": "Смартфон содержит Батарею и Экран. Включение экрана снижает заряд батареи на 5%."
    },
    "requirements": {
      "classes": [
        "Battery",
        "Screen",
        "Smartphone",
        "Main"
      ],
      "privateFields": [
        "battery",
        "screen"
      ],
      "methods": [
        "turnOnScreen",
        "getBatteryLevel"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Battery {\n    \n}\n\nclass Screen {\n    \n}\n\nclass Smartphone {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Battery {\n    private int level = 100;\n\n    public void drain(int p) {\n        this.level = Math.max(0, this.level - p);\n    }\n\n    public int getLevel() {\n        return this.level;\n    }\n}\n\nclass Screen {\n    public void activate() {}\n}\n\nclass Smartphone {\n    private Battery battery = new Battery();\n    private Screen screen = new Screen();\n\n    public void turnOnScreen() {\n        this.screen.activate();\n        this.battery.drain(5);\n    }\n\n    public int getBatteryLevel() {\n        return this.battery.getLevel();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Smartphone phone = new Smartphone();\n        phone.turnOnScreen();\n        System.out.println(\"Zaryad: \" + phone.getBatteryLevel() + \"%\");\n    }\n}",
    "expectedOutput": "Zaryad: 95%",
    "newKnowledge": {
      "uz": "124-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 124: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 124: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "drain()",
        "signature": "public void drain(int p)",
        "params": {
          "uz": "<code>int p</code> (masalan, <code>5</code>)",
          "en": "<code>int p</code> (e.g. <code>5</code>)",
          "ru": "<code>int p</code> (например, <code>5</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getLevel()",
        "signature": "public int getLevel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int level</code> maydonining qiymatini return qiladi (masalan, <code>100</code>).",
          "en": "<code>int</code>: returns the value of <code>private int level</code> (e.g. <code>100</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int level</code> (например, <code>100</code>)."
        },
        "desc": {
          "uz": "Ichki <code>level</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>level</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>level</code> без возможности модификации."
        }
      },
      {
        "name": "activate()",
        "signature": "public void activate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "turnOnScreen()",
        "signature": "public void turnOnScreen()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getBatteryLevel()",
        "signature": "public int getBatteryLevel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>int</code>: returns computed business result or operation state.",
          "ru": "<code>int</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`phone` nomli `Smartphone` ob'yektini yarating.",
          "Tegishli `turnOnScreen()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Smartphone` object named `phone`.",
          "Invoke `turnOnScreen()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Smartphone` с именем `phone`.",
          "Вызовите метод(ы) `turnOnScreen()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Zaryad: 95%"
    }
  },
  {
    "id": 125,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "125. Click — Null-Xavfsiz Ixtiyoriy Kompozitsiya (Null-Safe Optional Profile)",
      "en": "125. Click — Null-Safe Optional Component Composition",
      "ru": "125. Click — Null-безопасная опциональная композиция профиля"
    },
    "scenario": {
      "uz": "Foydalanuvchi ('User') ixtiyoriy profilga ('UserProfile: displayName') ega bo'lishi mumkin (boshida null). 'getDisplayName()' metodi agar profile null bo'lsa \"Anonim\", aks holda ismni qaytarsin.",
      "en": "User has optional UserProfile component. Guard against null reference by returning 'Anonim' if absent.",
      "ru": "Пользователь содержит опциональный профиль. Если профиль null, возвращается 'Anonim'."
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "User",
        "Main"
      ],
      "privateFields": [
        "profile"
      ],
      "methods": [
        "getDisplayName"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UserProfile {\n    \n}\n\nclass User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserProfile {\n    private String name;\n\n    public UserProfile(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass User {\n    private UserProfile profile;\n\n    public User(UserProfile profile) {\n        this.profile = profile;\n    }\n\n    public String getDisplayName() {\n        return (this.profile != null) ? this.profile.getName() : \"Anonim\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        User u1 = new User(null);\n        User u2 = new User(new UserProfile(\"Rustam\"));\n        System.out.println(\"U1: \" + u1.getDisplayName() + \" | U2: \" + u2.getDisplayName());\n    }\n}",
    "expectedOutput": "U1: Anonim | U2: Rustam",
    "newKnowledge": {
      "uz": "125-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 125: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 125: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi (masalan, <code>\"Rustam\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String name</code> (e.g. <code>\"Rustam\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code> (например, <code>\"Rustam\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "getDisplayName()",
        "signature": "public String getDisplayName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>profile</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>profile</code> qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>String</code>: returns safe default if <code>profile</code> is null, otherwise returns <code>profile</code> (e.g. <code>null</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>profile</code> null, иначе <code>profile</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "UserProfile",
        "signature": "public UserProfile(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"Rustam\"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"Rustam\"</code>)",
          "ru": "<code>String name</code> (например, <code>\"Rustam\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `u1` (null) hamda `u2` (new UserProfile(\"Rustam\")."
        ],
        "en": [
          "Create 2 objects: `u1` (null) and `u2` (new UserProfile(\"Rustam\")."
        ],
        "ru": [
          "Создайте 2 объекта: `u1` (null) и `u2` (new UserProfile(\"Rustam\")."
        ]
      },
      "expectedOutput": "U1: Anonim | U2: Rustam"
    }
  },
  {
    "id": 126,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "126. Yandex Go — Zanjirli Delegatsiya (Chained Component Delegation)",
      "en": "126. Yandex Go — Multi-Level Chained Hierarchical Delegation",
      "ru": "126. Yandex Go — Многоуровневая цепочка делегирования компонентов"
    },
    "scenario": {
      "uz": "Kompaniya ('TaxiCompany') o'z ichida park ('Fleet'), park esa avtomobil ('Car') ob'yektini saqlaydi. Tashqi kod 'company.getActiveCarModel()' deb chaqirganda zanjirli delegatsiya orqali model nomini qaytarsin.",
      "en": "Hierarchical delegation: TaxiCompany -> Fleet -> Car. Expose clean getActiveCarModel() method.",
      "ru": "Иерархическое делегирование: Компания -> Парк -> Автомобиль. Предоставьте чистый фасадный метод."
    },
    "requirements": {
      "classes": [
        "Car",
        "Fleet",
        "TaxiCompany",
        "Main"
      ],
      "privateFields": [
        "fleet"
      ],
      "methods": [
        "getActiveCarModel"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Car {\n    \n}\n\nclass Fleet {\n    \n}\n\nclass TaxiCompany {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Car {\n    public String getModel() { return \"BYD Song Plus\"; }\n}\n\nclass Fleet {\n    private Car car = new Car();\n\n    public Car getCar() {\n        return this.car;\n    }\n}\n\nclass TaxiCompany {\n    private Fleet fleet = new Fleet();\n\n    public String getActiveCarModel() {\n        return (this.fleet != null && this.fleet.getCar() != null) ? this.fleet.getCar().getModel() : \"NONE\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiCompany tc = new TaxiCompany();\n        System.out.println(\"Faol model: \" + tc.getActiveCarModel());\n    }\n}",
    "expectedOutput": "Faol model: BYD Song Plus",
    "newKnowledge": {
      "uz": "126-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 126: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 126: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getModel()",
        "signature": "public String getModel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getCar()",
        "signature": "public Car getCar()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>Car</code>: <code>private Car car</code> maydonining qiymatini return qiladi.",
          "en": "<code>Car</code>: returns the value of <code>private Car car</code>.",
          "ru": "<code>Car</code>: возвращает значение поля <code>private Car car</code>."
        },
        "desc": {
          "uz": "Ichki <code>car</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>car</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>car</code> без возможности модификации."
        }
      },
      {
        "name": "getActiveCarModel()",
        "signature": "public String getActiveCarModel()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>qiymat</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>qiymat</code> qiymatini return qiladi.",
          "en": "<code>String</code>: returns safe default if <code>qiymat</code> is null, otherwise returns <code>qiymat</code>.",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>qiymat</code> null, иначе <code>qiymat</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`tc` nomli `TaxiCompany` ob'yektini yarating."
        ],
        "en": [
          "Create a `TaxiCompany` object named `tc`."
        ],
        "ru": [
          "Создайте объект `TaxiCompany` с именем `tc`."
        ]
      },
      "expectedOutput": "Faol model: BYD Song Plus"
    }
  },
  {
    "id": 127,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "127. Safia — Demeter Qonuniga R纤ya Qilish (Law of Demeter Encapsulation)",
      "en": "127. Safia — Law of Demeter (LoD) Encapsulation Wrapper",
      "ru": "127. Safia — Соблюдение закона Деметры (Law of Demeter)"
    },
    "scenario": {
      "uz": "Demeter qonuni: 'order.getCustomer().getAddress().getCity()' kabi zanjirlar arxitekturani buzadi. Buning o'rniga Order ichida 'order.getDeliveryCity()' metodi yozilib, ichki tafsilotlar yashirilishi shart.",
      "en": "Law of Demeter: replace order.getCustomer().getAddress().getCity() with order.getDeliveryCity().",
      "ru": "Закон Деметры: скройте длинную цепочку вызовов внутри метода order.getDeliveryCity()."
    },
    "requirements": {
      "classes": [
        "Address",
        "Customer",
        "Order",
        "Main"
      ],
      "privateFields": [
        "customer"
      ],
      "methods": [
        "getDeliveryCity"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Address {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Address {\n    public String getCity() { return \"Toshkent\"; }\n}\n\nclass Customer {\n    private Address addr = new Address();\n\n    public Address getAddress() {\n        return this.addr;\n    }\n}\n\nclass Order {\n    private Customer customer = new Customer();\n\n    public String getDeliveryCity() {\n        return (this.customer != null && this.customer.getAddress() != null)\n                ? this.customer.getAddress().getCity()\n                : \"Noma'lum\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order ord = new Order();\n        System.out.println(\"Yetkazish shahri: \" + ord.getDeliveryCity());\n    }\n}",
    "expectedOutput": "Yetkazish shahri: Toshkent",
    "newKnowledge": {
      "uz": "127-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 127: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 127: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getCity()",
        "signature": "public String getCity()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getAddress()",
        "signature": "public Address getAddress()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>Address</code>: <code>private Address addr</code> maydonining qiymatini return qiladi.",
          "en": "<code>Address</code>: returns the value of <code>private Address addr</code>.",
          "ru": "<code>Address</code>: возвращает значение поля <code>private Address addr</code>."
        },
        "desc": {
          "uz": "Ichki <code>addr</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>addr</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>addr</code> без возможности модификации."
        }
      },
      {
        "name": "getDeliveryCity()",
        "signature": "public String getDeliveryCity()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>qiymat</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>qiymat</code> qiymatini return qiladi.",
          "en": "<code>String</code>: returns safe default if <code>qiymat</code> is null, otherwise returns <code>qiymat</code>.",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>qiymat</code> null, иначе <code>qiymat</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ord` nomli `Order` ob'yektini yarating."
        ],
        "en": [
          "Create a `Order` object named `ord`."
        ],
        "ru": [
          "Создайте объект `Order` с именем `ord`."
        ]
      },
      "expectedOutput": "Yetkazish shahri: Toshkent"
    }
  },
  {
    "id": 128,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "128. Dodo Pizza — 1-to-Ko'p Kompozitsiya (Order Has Many OrderItems)",
      "en": "128. Dodo Pizza — 1-to-Many Fixed Array Composition Architecture",
      "ru": "128. Dodo Pizza — Композиция 1-ко-многим: заказ содержит массив позиций"
    },
    "scenario": {
      "uz": "Buyurtma ('PizzaOrder') o'z ichida 10 tagacha 'OrderItem' ob'yektlarini saqlaydi. 'addItem(name, price)' metodi yangi element qo'shadi, 'calculateTotal()' esa barcha tovarlar narxini hisoblab beradi.",
      "en": "1-to-Many composition: PizzaOrder holds array of OrderItem objects. Expose addItem() and calculateTotal().",
      "ru": "Композиция 1-ко-многим: PizzaOrder хранит массив OrderItem, реализует addItem() и calculateTotal()."
    },
    "requirements": {
      "classes": [
        "OrderItem",
        "PizzaOrder",
        "Main"
      ],
      "privateFields": [
        "items",
        "itemCount"
      ],
      "methods": [
        "addItem",
        "calculateTotal"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class OrderItem {\n    \n}\n\nclass PizzaOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderItem {\n    private String name;\n    private double price;\n\n    public OrderItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass PizzaOrder {\n    private OrderItem[] items = new OrderItem[10];\n    private int itemCount = 0;\n\n    public void addItem(String name, double price) {\n        if (this.itemCount < this.items.length) {\n            this.items[this.itemCount++] = new OrderItem(name, price);\n        }\n    }\n\n    public double calculateTotal() {\n        double total = 0.0;\n        for (int i = 0; i < this.itemCount; i++) {\n            total += this.items[i].getPrice();\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder po = new PizzaOrder();\n        po.addItem(\"Pepperoni\", 65000.0);\n        po.addItem(\"Cola 1L\", 15000.0);\n        System.out.println(\"Jami buyurtma: \" + po.calculateTotal() + \" UZS\");\n    }\n}",
    "expectedOutput": "Jami buyurtma: 80000.0 UZS",
    "newKnowledge": {
      "uz": "128-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 128: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 128: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>price</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>price</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>price</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      },
      {
        "name": "addItem()",
        "signature": "public void addItem(String name, double price)",
        "params": {
          "uz": "<code>String name, double price</code> (masalan, <code>\"Pepperoni\", 65000.0</code>)",
          "en": "<code>String name, double price</code> (e.g. <code>\"Pepperoni\", 65000.0</code>)",
          "ru": "<code>String name, double price</code> (например, <code>\"Pepperoni\", 65000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "calculateTotal()",
        "signature": "public double calculateTotal()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "OrderItem",
        "signature": "public OrderItem(String name, double price)",
        "params": {
          "uz": "<code>String name, double price</code> (masalan, <code>name, price</code>)",
          "en": "<code>String name, double price</code> (e.g. <code>name, price</code>)",
          "ru": "<code>String name, double price</code> (например, <code>name, price</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> <code>this.price = price;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code> <code>this.price = price;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code> <code>this.price = price;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`po` nomli `PizzaOrder` ob'yektini yarating.",
          "Tegishli `addItem()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PizzaOrder` object named `po`.",
          "Invoke `addItem()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PizzaOrder` с именем `po`.",
          "Вызовите метод(ы) `addItem()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Jami buyurtma: 80000.0 UZS"
    }
  },
  {
    "id": 129,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "129. Asaxiy — Kompozit Chek Hisobi (Invoice & InvoiceLines with Tax)",
      "en": "129. Asaxiy — Composite Invoice Subtotal and Tax Aggregation",
      "ru": "129. Asaxiy — Композитный расчет чека: промежуточный итог и налог"
    },
    "scenario": {
      "uz": "Hisob-faktura ('Invoice') tovar qatorlarini o'z ichiga oladi. 'getSubtotal()' tovarlar yig'indisini, 'getTax()' 12% soliqni va 'getGrandTotal()' yakuniy summani hisoblab beradi.",
      "en": "Invoice aggregates subtotal, applies 12% tax, and derives grand total purely through component delegation.",
      "ru": "Счет агрегирует подытог, применяет налог 12% и вычисляет общую сумму через делегирование."
    },
    "requirements": {
      "classes": [
        "InvoiceLine",
        "Invoice",
        "Main"
      ],
      "privateFields": [
        "lines"
      ],
      "methods": [
        "addLine",
        "getGrandTotal"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class InvoiceLine {\n    \n}\n\nclass Invoice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class InvoiceLine {\n    private double lineTotal;\n\n    public InvoiceLine(double lineTotal) {\n        this.lineTotal = lineTotal;\n    }\n\n    public double getLineTotal() {\n        return this.lineTotal;\n    }\n}\n\nclass Invoice {\n    private InvoiceLine[] lines = new InvoiceLine[5];\n    private int count = 0;\n\n    public void addLine(double amount) {\n        if (this.count < this.lines.length) {\n            this.lines[this.count++] = new InvoiceLine(amount);\n        }\n    }\n\n    public double getGrandTotal() {\n        double subtotal = 0.0;\n        for (int i = 0; i < this.count; i++) {\n            subtotal += this.lines[i].getLineTotal();\n        }\n        return subtotal * 1.12;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Invoice inv = new Invoice();\n        inv.addLine(100000.0);\n        inv.addLine(50000.0);\n        System.out.println(\"Jami (QQS bilan): \" + inv.getGrandTotal() + \" UZS\");\n    }\n}",
    "expectedOutput": "Jami (QQS bilan): 168000.0 UZS",
    "newKnowledge": {
      "uz": "129-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 129: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 129: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getLineTotal()",
        "signature": "public double getLineTotal()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double lineTotal</code> maydonining qiymatini return qiladi (masalan, <code>amount</code>).",
          "en": "<code>double</code>: returns the value of <code>private double lineTotal</code> (e.g. <code>amount</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double lineTotal</code> (например, <code>amount</code>)."
        },
        "desc": {
          "uz": "Ichki <code>lineTotal</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>lineTotal</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>lineTotal</code> без возможности модификации."
        }
      },
      {
        "name": "addLine()",
        "signature": "public void addLine(double amount)",
        "params": {
          "uz": "<code>double amount</code> (masalan, <code>100000.0</code>)",
          "en": "<code>double amount</code> (e.g. <code>100000.0</code>)",
          "ru": "<code>double amount</code> (например, <code>100000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getGrandTotal()",
        "signature": "public double getGrandTotal()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "InvoiceLine",
        "signature": "public InvoiceLine(double lineTotal)",
        "params": {
          "uz": "<code>double lineTotal</code> (masalan, <code>amount</code>)",
          "en": "<code>double lineTotal</code> (e.g. <code>amount</code>)",
          "ru": "<code>double lineTotal</code> (например, <code>amount</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.lineTotal = lineTotal;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.lineTotal = lineTotal;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.lineTotal = lineTotal;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`inv` nomli `Invoice` ob'yektini yarating.",
          "Tegishli `addLine()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `Invoice` object named `inv`.",
          "Invoke `addLine()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `Invoice` с именем `inv`.",
          "Вызовите метод(ы) `addLine()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Jami (QQS bilan): 168000.0 UZS"
    }
  },
  {
    "id": 130,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "130. Express24 — Ichki Holatni O'zgartiruvchi Delegatsiya (Wallet & Card Debit)",
      "en": "130. Express24 — Mutating Component Delegation with Transaction Logging",
      "ru": "130. Express24 — Делегирование мутации состояния внутреннему компоненту"
    },
    "scenario": {
      "uz": "Hamyon ('DigitalWallet') karta ('BankCard: balance') komponentini o'z ichiga oladi. 'wallet.pay(amt)' chaqirilganda, karta balansidan pul yechiladi ('card.debit(amt)') va hamyon ichki hisoblagichi oshiriladi.",
      "en": "Mutating delegation: DigitalWallet delegates debiting balance to internal BankCard component.",
      "ru": "Кошелек делегирует списание средств внутреннему объекту BankCard и обновляет счетчик."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "DigitalWallet",
        "Main"
      ],
      "privateFields": [
        "card",
        "txCount"
      ],
      "methods": [
        "pay",
        "getTxCount"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class BankCard {\n    \n}\n\nclass DigitalWallet {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    private double balance = 100000.0;\n\n    public boolean debit(double amt) {\n        if (amt > 0 && this.balance >= amt) {\n            this.balance -= amt;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass DigitalWallet {\n    private BankCard card = new BankCard();\n    private int txCount = 0;\n\n    public boolean pay(double amt) {\n        if (this.card.debit(amt)) {\n            this.txCount++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getTxCount() {\n        return this.txCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DigitalWallet wallet = new DigitalWallet();\n        boolean p1 = wallet.pay(30000.0);\n        System.out.println(\"To'landi: \" + p1 + \" | Tranzaksiyalar: \" + wallet.getTxCount());\n    }\n}",
    "expectedOutput": "To'landi: true | Tranzaksiyalar: 1",
    "newKnowledge": {
      "uz": "130-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 130: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 130: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "debit()",
        "signature": "public boolean debit(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>amt</code>)",
          "en": "<code>double amt</code> (e.g. <code>amt</code>)",
          "ru": "<code>double amt</code> (например, <code>amt</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "pay()",
        "signature": "public boolean pay(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>30000.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>30000.0</code>)",
          "ru": "<code>double amt</code> (например, <code>30000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>txCount</code> hisoblagichini 1 taga oshirib, <code>private true</code> maydonini return qiladi.",
          "en": "<code>boolean</code>: increments <code>txCount</code> counter and returns <code>private true</code>.",
          "ru": "<code>boolean</code>: увеличивает счетчик <code>txCount</code> и возвращает поле <code>true</code>."
        },
        "desc": {
          "uz": "Har murojaatda <code>txCount</code> maydonini oshirib, <code>true</code> maydonining joriy qiymatini return qiladi.",
          "en": "Increments <code>txCount</code> count on each call and returns the current <code>true</code> value.",
          "ru": "Инкрементирует <code>txCount</code> при каждом вызове и возвращает значение <code>true</code>."
        }
      },
      {
        "name": "getTxCount()",
        "signature": "public int getTxCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int txCount</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int txCount</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int txCount</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>txCount</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>txCount</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>txCount</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`wallet` nomli `DigitalWallet` ob'yektini yarating.",
          "Tegishli `pay()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `DigitalWallet` object named `wallet`.",
          "Invoke `pay()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `DigitalWallet` с именем `wallet`.",
          "Вызовите метод(ы) `pay()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "To'landi: true | Tranzaksiyalar: 1"
    }
  },
  {
    "id": 131,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "131. Medion — Rekursiv Kompozitsiya (Folder Has Subfolder)",
      "en": "131. Medion — Recursive Self-Referential Object Composition",
      "ru": "131. Medion — Рекурсивная самореферентная композиция каталогов"
    },
    "scenario": {
      "uz": "Katalog ('ArchiveFolder') o'z ichida boshqa 'ArchiveFolder subfolder' ob'yektini saqlashi mumkin (Linked composition). 'getDepth()' metodi rekursiv tarzda papkaning chuqurligini hisoblasin.",
      "en": "Recursive self-referential composition: Folder contains subfolder. getDepth() traverses chain recursively.",
      "ru": "Рекурсивная композиция: папка может содержать подпапку. Метод getDepth() считает глубину."
    },
    "requirements": {
      "classes": [
        "ArchiveFolder",
        "Main"
      ],
      "privateFields": [
        "subFolder"
      ],
      "methods": [
        "getDepth"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class ArchiveFolder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ArchiveFolder {\n    private ArchiveFolder subFolder;\n\n    public ArchiveFolder(ArchiveFolder subFolder) {\n        this.subFolder = subFolder;\n    }\n\n    public int getDepth() {\n        if (this.subFolder == null) return 1;\n        return 1 + this.subFolder.getDepth();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ArchiveFolder inner = new ArchiveFolder(null);\n        ArchiveFolder middle = new ArchiveFolder(inner);\n        ArchiveFolder root = new ArchiveFolder(middle);\n        System.out.println(\"Jild chuqurligi: \" + root.getDepth());\n    }\n}",
    "expectedOutput": "Jild chuqurligi: 3",
    "newKnowledge": {
      "uz": "131-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 131: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 131: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getDepth()",
        "signature": "public int getDepth()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: agar <code>subFolder</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>subFolder</code> qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>int</code>: returns safe default if <code>subFolder</code> is null, otherwise returns <code>subFolder</code> (e.g. <code>null</code>).",
          "ru": "<code>int</code>: возвращает безопасное значение если <code>subFolder</code> null, иначе <code>subFolder</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "ArchiveFolder",
        "signature": "public ArchiveFolder(ArchiveFolder subFolder)",
        "params": {
          "uz": "<code>ArchiveFolder subFolder</code> (masalan, <code>null</code>)",
          "en": "<code>ArchiveFolder subFolder</code> (e.g. <code>null</code>)",
          "ru": "<code>ArchiveFolder subFolder</code> (например, <code>null</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.subFolder = subFolder;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.subFolder = subFolder;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.subFolder = subFolder;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "3 ta ob'yekt yarating: `inner` (null) hamda `middle` (inner) hamda `root` (middle)."
        ],
        "en": [
          "Create 3 objects: `inner` (null) and `middle` (inner) and `root` (middle)."
        ],
        "ru": [
          "Создайте 3 объекта: `inner` (null) и `middle` (inner) и `root` (middle)."
        ]
      },
      "expectedOutput": "Jild chuqurligi: 3"
    }
  },
  {
    "id": 132,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "132. Beeline — Ichki Komponentni Fabrika Usulida Yaratish (Factory Method in Composite)",
      "en": "132. Beeline — Factory Method Construction of Internal Components",
      "ru": "132. Beeline — Фабричное создание внутренних компонентов"
    },
    "scenario": {
      "uz": "Komponentni tashqaridan new qilib berish o'rniga, uning hayotini to'liq o'zi boshqaradi: 'addTariffOption(name, cost)' metodi ichida 'new TariffOption(name, cost)' qilib yaratiladi.",
      "en": "Strict life-cycle coupling: child components are created exclusively through composite factory method.",
      "ru": "Жесткая связь: дочерние объекты создаются исключительно фабричным методом родителя."
    },
    "requirements": {
      "classes": [
        "TariffOption",
        "TariffPlan",
        "Main"
      ],
      "privateFields": [
        "options"
      ],
      "methods": [
        "addOption",
        "getOptionCount"
      ],
      "keywords": [
        "new",
        "this"
      ]
    },
    "starterCode": "class TariffOption {\n    \n}\n\nclass TariffPlan {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TariffOption {\n    private String name;\n    private double cost;\n\n    public TariffOption(String name, double cost) {\n        this.name = name;\n        this.cost = cost;\n    }\n}\n\nclass TariffPlan {\n    private TariffOption[] options = new TariffOption[5];\n    private int count = 0;\n\n    public void addOption(String name, double cost) {\n        if (this.count < this.options.length) {\n            this.options[this.count++] = new TariffOption(name, cost);\n        }\n    }\n\n    public int getOptionCount() {\n        return this.count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TariffPlan tp = new TariffPlan();\n        tp.addOption(\"Cheksiz Telegram\", 10000.0);\n        tp.addOption(\"Tungi Rouming\", 25000.0);\n        System.out.println(\"Opsiyalar soni: \" + tp.getOptionCount());\n    }\n}",
    "expectedOutput": "Opsiyalar soni: 2",
    "newKnowledge": {
      "uz": "132-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 132: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 132: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "addOption()",
        "signature": "public void addOption(String name, double cost)",
        "params": {
          "uz": "<code>String name, double cost</code> (masalan, <code>\"Cheksiz Telegram\", 10000.0</code>)",
          "en": "<code>String name, double cost</code> (e.g. <code>\"Cheksiz Telegram\", 10000.0</code>)",
          "ru": "<code>String name, double cost</code> (например, <code>\"Cheksiz Telegram\", 10000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getOptionCount()",
        "signature": "public int getOptionCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int count</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int count</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int count</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>count</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>count</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>count</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TariffOption",
        "signature": "public TariffOption(String name, double cost)",
        "params": {
          "uz": "<code>String name, double cost</code> (masalan, <code>name, cost</code>)",
          "en": "<code>String name, double cost</code> (e.g. <code>name, cost</code>)",
          "ru": "<code>String name, double cost</code> (например, <code>name, cost</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> <code>this.cost = cost;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code> <code>this.cost = cost;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code> <code>this.cost = cost;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tp` nomli `TariffPlan` ob'yektini yarating.",
          "Tegishli `addOption()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `TariffPlan` object named `tp`.",
          "Invoke `addOption()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `TariffPlan` с именем `tp`.",
          "Вызовите метод(ы) `addOption()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Opsiyalar soni: 2"
    }
  },
  {
    "id": 133,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "133. Kapitalbank — Kaskadli Bekor Qilish (Cascading Lifecycle Termination)",
      "en": "133. Kapitalbank — Cascading Lifecycle State Mutation in Composite",
      "ru": "133. Kapitalbank — Каскадное завершение жизненного цикла компонентов"
    },
    "scenario": {
      "uz": "Mijoz hisobi ('ClientProfile') yopilganda ('closeAccount()'), unga biriktirilgan barcha kartalar ('cards: PlasticCard[]') ham kaskadli ravishda avtomatik 'deactivate()' qilinishi shart.",
      "en": "Cascading lifecycle: closing client profile automatically triggers deactivation across all linked cards.",
      "ru": "Каскадное закрытие: закрытие профиля деактивирует все привязанные карты."
    },
    "requirements": {
      "classes": [
        "PlasticCard",
        "ClientProfile",
        "Main"
      ],
      "privateFields": [
        "cards"
      ],
      "methods": [
        "closeProfile",
        "isAllDeactivated"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class PlasticCard {\n    \n}\n\nclass ClientProfile {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PlasticCard {\n    private boolean active = true;\n\n    public void deactivate() {\n        this.active = false;\n    }\n\n    public boolean isActive() {\n        return this.active;\n    }\n}\n\nclass ClientProfile {\n    private PlasticCard[] cards = { new PlasticCard(), new PlasticCard() };\n\n    public void closeProfile() {\n        for (PlasticCard c : this.cards) {\n            c.deactivate();\n        }\n    }\n\n    public boolean isAllDeactivated() {\n        for (PlasticCard c : this.cards) {\n            if (c.isActive()) return false;\n        }\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClientProfile cp = new ClientProfile();\n        cp.closeProfile();\n        System.out.println(\"Barcha kartalar to'xtatildimi: \" + cp.isAllDeactivated());\n    }\n}",
    "expectedOutput": "Barcha kartalar to'xtatildimi: true",
    "newKnowledge": {
      "uz": "133-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 133: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 133: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "deactivate()",
        "signature": "public void deactivate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>false</code> qiymatini qabul qilib, <code>this.active = false;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>false</code> and sets <code>this.active = false;</code>.",
          "ru": "Принимает <code>false</code> и обновляет <code>this.active = false;</code>."
        }
      },
      {
        "name": "isActive()",
        "signature": "public boolean isActive()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean active</code> maydonining qiymatini return qiladi (masalan, <code>true</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean active</code> (e.g. <code>true</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean active</code> (например, <code>true</code>)."
        },
        "desc": {
          "uz": "Ichki <code>active</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>active</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>active</code> без возможности модификации."
        }
      },
      {
        "name": "closeProfile()",
        "signature": "public void closeProfile()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isAllDeactivated()",
        "signature": "public boolean isAllDeactivated()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`cp` nomli `ClientProfile` ob'yektini yarating.",
          "Tegishli `closeProfile()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `ClientProfile` object named `cp`.",
          "Invoke `closeProfile()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `ClientProfile` с именем `cp`.",
          "Вызовите метод(ы) `closeProfile()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Barcha kartalar to'xtatildimi: true"
    }
  },
  {
    "id": 134,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "134. UzAirways — Parvoz, Marshrut va Ekipaj Kompozitsiyasi (Multi-Entity Composite)",
      "en": "134. UzAirways — Multi-Entity Flight Aggregation Composite",
      "ru": "134. UzAirways — Многосоставная композиция рейса, маршрута и экипажа"
    },
    "scenario": {
      "uz": "Parvoz ('Flight') ikkita alohida kompozitsiyadan iborat: 'Route' (origin, destination) va 'Crew' (pilotCount). 'getFlightSummary()' orqali birgalikda ma'lumot taqdim etilsin.",
      "en": "Flight cleanly aggregates Route and Crew entities, producing unified manifest summary.",
      "ru": "Рейс объединяет маршрут и экипаж, формируя сводный отчет."
    },
    "requirements": {
      "classes": [
        "Route",
        "Crew",
        "Flight",
        "Main"
      ],
      "privateFields": [
        "route",
        "crew"
      ],
      "methods": [
        "getFlightSummary"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Route {\n    \n}\n\nclass Crew {\n    \n}\n\nclass Flight {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Route {\n    public String getPath() { return \"TAS -> DXB\"; }\n}\n\nclass Crew {\n    public int getPilots() { return 2; }\n}\n\nclass Flight {\n    private Route route;\n    private Crew crew;\n\n    public Flight(Route route, Crew crew) {\n        this.route = route;\n        this.crew = crew;\n    }\n\n    public String getFlightSummary() {\n        return \"Marshrut: \" + this.route.getPath() + \" | Uchuvchilar: \" + this.crew.getPilots();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Flight f = new Flight(new Route(), new Crew());\n        System.out.println(f.getFlightSummary());\n    }\n}",
    "expectedOutput": "Marshrut: TAS -> DXB | Uchuvchilar: 2",
    "newKnowledge": {
      "uz": "134-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 134: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 134: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getPath()",
        "signature": "public String getPath()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getPilots()",
        "signature": "public int getPilots()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int 2</code> maydonining qiymatini return qiladi.",
          "en": "<code>int</code>: returns the value of <code>private int 2</code>.",
          "ru": "<code>int</code>: возвращает значение поля <code>private int 2</code>."
        },
        "desc": {
          "uz": "Ichki <code>2</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>2</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>2</code> без возможности модификации."
        }
      },
      {
        "name": "getFlightSummary()",
        "signature": "public String getFlightSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: ob'yekt maydonlari qiymatlarini birlashtirib, formatlangan ma'lumot satrini return qiladi.",
          "en": "<code>String</code>: combines object fields into a structured, formatted summary string.",
          "ru": "<code>String</code>: объединяет значения полей объекта в форматированную строку."
        },
        "desc": {
          "uz": "Ob'yektning barcha zarur xususiyatlarini formatlangan yagona matn ko'rinishida return qiladi.",
          "en": "Formats and returns object properties as a unified text representation.",
          "ru": "Форматирует и возвращает свойства объекта в виде единого текста."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`f` nomli `Flight` ob'yektini yarating va argument sifatida `new Route(` qiymatini bering."
        ],
        "en": [
          "Create a `Flight` object named `f` and pass argument(s) `new Route(`."
        ],
        "ru": [
          "Создайте объект `Flight` с именем `f` и передайте аргумент(ы) `new Route(`."
        ]
      },
      "expectedOutput": "Marshrut: TAS -> DXB | Uchuvchilar: 2"
    }
  },
  {
    "id": 135,
    "tier": 9,
    "tierName": "9-Bosqich: Kompozitsiya (Composition — Has-A Munosabati)",
    "sector": "121-135: Object Composition & Delegation",
    "title": {
      "uz": "135. WIUT SRS — Talaba Akademik Yozuvlari Kompozitsiyasi (Master Composition)",
      "en": "135. WIUT SRS — Master Academic Enrolment & Transcript Composite Suite",
      "ru": "135. WIUT SRS — Мастер-композиция студента и академической ведомости"
    },
    "scenario": {
      "uz": "Talaba ('WIUTStudent') o'z ichida 'Transcript' ob'yektiga ega. 'Transcript' baholarni saqlaydi va GPA hisoblaydi. Talaba GPA ni olish uchun to'g'ridan-to'g'ri 'transcript.getGpa()' ga delegatsiya qiladi.",
      "en": "Master composition: WIUTStudent encapsulates Transcript. GPA query delegates cleanly to internal transcript.",
      "ru": "Мастер-композиция: Студент содержит Транскрипт. Расчет GPA делегируется объекту транскрипта."
    },
    "requirements": {
      "classes": [
        "Transcript",
        "WIUTStudent",
        "Main"
      ],
      "privateFields": [
        "transcript"
      ],
      "methods": [
        "getStudentGpa"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Transcript {\n    \n}\n\nclass WIUTStudent {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Transcript {\n    private double gpa;\n\n    public Transcript(double gpa) {\n        this.gpa = gpa;\n    }\n\n    public double getGpa() {\n        return this.gpa;\n    }\n}\n\nclass WIUTStudent {\n    private String name;\n    private Transcript transcript;\n\n    public WIUTStudent(String name, Transcript transcript) {\n        this.name = name;\n        this.transcript = transcript;\n    }\n\n    public double getStudentGpa() {\n        return (this.transcript != null) ? this.transcript.getGpa() : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WIUTStudent s = new WIUTStudent(\"Zuhra\", new Transcript(3.92));\n        System.out.println(\"Talaba GPA: \" + s.getStudentGpa());\n    }\n}",
    "expectedOutput": "Talaba GPA: 3.92",
    "newKnowledge": {
      "uz": "135-masala: Obyektlar kompozitsiyasi ('Has-A' munosabati): merosxo'rlikdan ko'ra kompozitsiyani afzal ko'rish, metodlar delegatsiyasi va Demeter qonuni (Law of Demeter).",
      "en": "Challenge 135: Object Composition ('Has-A' relationship): delegation over inheritance and adhering to Law of Demeter.",
      "ru": "Задача 135: Композиция объектов (отношение 'Has-A'): делегирование вызовов и закон Деметры."
    },
    "newKnowledgeTags": [
      "composition",
      "Has-A",
      "delegation",
      "Law of Demeter"
    ],
    "methodSpecs": [
      {
        "name": "getGpa()",
        "signature": "public double getGpa()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double gpa</code> maydonining qiymatini return qiladi (masalan, <code>3.92</code>).",
          "en": "<code>double</code>: returns the value of <code>private double gpa</code> (e.g. <code>3.92</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double gpa</code> (например, <code>3.92</code>)."
        },
        "desc": {
          "uz": "Ichki <code>gpa</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>gpa</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>gpa</code> без возможности модификации."
        }
      },
      {
        "name": "getStudentGpa()",
        "signature": "public double getStudentGpa()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: agar <code>transcript</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>transcript</code> qiymatini return qiladi (masalan, <code>new Transcript(3.92</code>).",
          "en": "<code>double</code>: returns safe default if <code>transcript</code> is null, otherwise returns <code>transcript</code> (e.g. <code>new Transcript(3.92</code>).",
          "ru": "<code>double</code>: возвращает безопасное значение если <code>transcript</code> null, иначе <code>transcript</code> (например, <code>new Transcript(3.92</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Transcript",
        "signature": "public Transcript(double gpa)",
        "params": {
          "uz": "<code>double gpa</code> (masalan, <code>3.92</code>)",
          "en": "<code>double gpa</code> (e.g. <code>3.92</code>)",
          "ru": "<code>double gpa</code> (например, <code>3.92</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.gpa = gpa;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.gpa = gpa;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.gpa = gpa;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`s` nomli `WIUTStudent` ob'yektini yarating va argument sifatida `\"Zuhra\", new Transcript(3.92` qiymatini bering."
        ],
        "en": [
          "Create a `WIUTStudent` object named `s` and pass argument(s) `\"Zuhra\", new Transcript(3.92`."
        ],
        "ru": [
          "Создайте объект `WIUTStudent` с именем `s` и передайте аргумент(ы) `\"Zuhra\", new Transcript(3.92`."
        ]
      },
      "expectedOutput": "Talaba GPA: 3.92"
    }
  },
  {
    "id": 136,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "136. Uzum Market — Ma'lumot Oqimi Kursori (Custom Iterator Encapsulation)",
      "en": "136. Uzum Market — Encapsulated Cursor DataStream Iterator Pattern",
      "ru": "136. Uzum Market — Инкапсулированный курсор потока данных (Iterator)"
    },
    "scenario": {
      "uz": "Tashqi kodga massivni oshkor qilmasdan 'hasNext()' va 'next()' orqali ketma-ket o'qish imkonini beruvchi 'DataStream' sinfini yarating. Ichki kursor ko'rsatkichi to'liq xususiy bo'lsin.",
      "en": "Encapsulate array traversal via internal cursor pointer exposing hasNext() and next() without revealing array.",
      "ru": "Инкапсулируйте итерацию по массиву с помощью внутреннего курсора, открывая hasNext() и next()."
    },
    "requirements": {
      "classes": [
        "DataStream",
        "Main"
      ],
      "privateFields": [
        "items",
        "cursor"
      ],
      "methods": [
        "hasNext",
        "next"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class DataStream {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DataStream {\n    private String[] items;\n    private int cursor = 0;\n\n    public DataStream(String[] items) {\n        this.items = (items != null) ? items.clone() : new String[0];\n    }\n\n    public boolean hasNext() {\n        return this.cursor < this.items.length;\n    }\n\n    public String next() {\n        if (!hasNext()) throw new IllegalStateException(\"No more items\");\n        return this.items[this.cursor++];\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        String[] data = {\"Uzum1\", \"Uzum2\"};\n        DataStream ds = new DataStream(data);\n        while (ds.hasNext()) {\n            System.out.println(\"Oqim: \" + ds.next());\n        }\n    }\n}",
    "expectedOutput": "Oqim: Uzum1\nOqim: Uzum2",
    "newKnowledge": {
      "uz": "136-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 136: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 136: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "hasNext()",
        "signature": "public boolean hasNext()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>this.cursor < this.items.length</code> shartini tekshirib, shart bajarilsa <code>true</code>, aks holda <code>false</code> return qiladi.",
          "en": "<code>boolean</code>: evaluates <code>this.cursor < this.items.length</code>, returns <code>true</code> if satisfied, otherwise <code>false</code>.",
          "ru": "<code>boolean</code>: проверяет условие <code>this.cursor < this.items.length</code>, возвращает <code>true</code> при выполнении, иначе <code>false</code>."
        },
        "desc": {
          "uz": "Ichki maydon holati <code>this.cursor < this.items.length</code> qoidasiga mosligini dinamik tekshirib mantiqiy natija beradi.",
          "en": "Dynamically evaluates whether state satisfies <code>this.cursor < this.items.length</code>.",
          "ru": "Динамически проверяет соответствие состояния правилу <code>this.cursor < this.items.length</code>."
        }
      },
      {
        "name": "next()",
        "signature": "public String next()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>String</code>: returns computed business result or operation state.",
          "ru": "<code>String</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "DataStream",
        "signature": "public DataStream(String[] items)",
        "params": {
          "uz": "<code>String[] items</code> (masalan, <code>data</code>)",
          "en": "<code>String[] items</code> (e.g. <code>data</code>)",
          "ru": "<code>String[] items</code> (например, <code>data</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.items = (items != null) ? items.clone() : new String[0];</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.items = (items != null) ? items.clone() : new String[0];</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.items = (items != null) ? items.clone() : new String[0];</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`ds` nomli `DataStream` ob'yektini yarating va argument sifatida `data` qiymatini bering.",
          "Tegishli `hasNext()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `DataStream` object named `ds` and pass argument(s) `data`.",
          "Invoke `hasNext()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `DataStream` с именем `ds` и передайте аргумент(ы) `data`.",
          "Вызовите метод(ы) `hasNext()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Oqim: Uzum1\nOqim: Uzum2"
    }
  },
  {
    "id": 137,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "137. Payme — O'zgarmas Builder Modeli (Immutable User with Builder Pattern)",
      "en": "137. Payme — Immutable Entity Construction via Static Builder Pattern",
      "ru": "137. Payme — Построение неизменяемой сущности через статический Builder"
    },
    "scenario": {
      "uz": "Xususiy konstruktorli 'UserProfile' faqat statik 'Builder' orqali bosqichma-bosqich yig'iladi va '.build()' chaqirilganda o'zgarmas ob'yekt qaytaradi.",
      "en": "Enforce construction via static Builder pattern: private entity constructor and fluent builder setters.",
      "ru": "Закройте конструктор сущности как private. Создание только через статический Builder."
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "Main"
      ],
      "privateFields": [
        "username",
        "email"
      ],
      "methods": [
        "build"
      ],
      "keywords": [
        "static",
        "this"
      ]
    },
    "starterCode": "class UserProfile {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserProfile {\n    private String username;\n    private String email;\n\n    private UserProfile(Builder b) {\n        this.username = b.username;\n        this.email = b.email;\n    }\n\n    public String getUsername() { return this.username; }\n    public String getEmail() { return this.email; }\n\n    public static class Builder {\n        private String username;\n        private String email;\n\n        public Builder setUsername(String u) {\n            this.username = u;\n            return this;\n        }\n\n        public Builder setEmail(String e) {\n            this.email = e;\n            return this;\n        }\n\n        public UserProfile build() {\n            return new UserProfile(this);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile u = new UserProfile.Builder()\n                .setUsername(\"nodir_payme\")\n                .setEmail(\"nodir@payme.uz\")\n                .build();\n        System.out.println(\"Foydalanuvchi: \" + u.getUsername() + \" | \" + u.getEmail());\n    }\n}",
    "expectedOutput": "Foydalanuvchi: nodir_payme | nodir@payme.uz",
    "newKnowledge": {
      "uz": "137-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 137: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 137: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "getUsername()",
        "signature": "public String getUsername()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String username</code> maydonining qiymatini return qiladi (masalan, <code>this</code>).",
          "en": "<code>String</code>: returns the value of <code>private String username</code> (e.g. <code>this</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String username</code> (например, <code>this</code>)."
        },
        "desc": {
          "uz": "Ichki <code>username</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>username</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>username</code> без возможности модификации."
        }
      },
      {
        "name": "getEmail()",
        "signature": "public String getEmail()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String email</code> maydonining qiymatini return qiladi.",
          "en": "<code>String</code>: returns the value of <code>private String email</code>.",
          "ru": "<code>String</code>: возвращает значение поля <code>private String email</code>."
        },
        "desc": {
          "uz": "Ichki <code>email</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>email</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>email</code> без возможности модификации."
        }
      },
      {
        "name": "setUsername()",
        "signature": "public Builder setUsername(String u)",
        "params": {
          "uz": "<code>String u</code> (masalan, <code>\"nodir_payme\"</code>)",
          "en": "<code>String u</code> (e.g. <code>\"nodir_payme\"</code>)",
          "ru": "<code>String u</code> (например, <code>\"nodir_payme\"</code>)"
        },
        "returns": {
          "uz": "<code>Builder</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>Builder</code>: returns computed business result or operation state.",
          "ru": "<code>Builder</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "setEmail()",
        "signature": "public Builder setEmail(String e)",
        "params": {
          "uz": "<code>String e</code> (masalan, <code>\"nodir@payme.uz\"</code>)",
          "en": "<code>String e</code> (e.g. <code>\"nodir@payme.uz\"</code>)",
          "ru": "<code>String e</code> (например, <code>\"nodir@payme.uz\"</code>)"
        },
        "returns": {
          "uz": "<code>Builder</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>Builder</code>: returns computed business result or operation state.",
          "ru": "<code>Builder</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "build()",
        "signature": "public UserProfile build()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>UserProfile</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>UserProfile</code> ob'yektini return qiladi.",
          "en": "<code>UserProfile</code>: returns a new <code>UserProfile</code> instance without mutating original object.",
          "ru": "<code>UserProfile</code>: возвращает новый экземпляр <code>UserProfile</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "setUsername()",
        "signature": "public Builder setUsername(String u)",
        "params": {
          "uz": "<code>String u</code> (masalan, <code>\"nodir_payme\"</code>)",
          "en": "<code>String u</code> (e.g. <code>\"nodir_payme\"</code>)",
          "ru": "<code>String u</code> (например, <code>\"nodir_payme\"</code>)"
        },
        "returns": {
          "uz": "<code>Builder</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>Builder</code>: returns computed business result or operation state.",
          "ru": "<code>Builder</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "setEmail()",
        "signature": "public Builder setEmail(String e)",
        "params": {
          "uz": "<code>String e</code> (masalan, <code>\"nodir@payme.uz\"</code>)",
          "en": "<code>String e</code> (e.g. <code>\"nodir@payme.uz\"</code>)",
          "ru": "<code>String e</code> (например, <code>\"nodir@payme.uz\"</code>)"
        },
        "returns": {
          "uz": "<code>Builder</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>Builder</code>: returns computed business result or operation state.",
          "ru": "<code>Builder</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "build()",
        "signature": "public UserProfile build()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>UserProfile</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>UserProfile</code> ob'yektini return qiladi.",
          "en": "<code>UserProfile</code>: returns a new <code>UserProfile</code> instance without mutating original object.",
          "ru": "<code>UserProfile</code>: возвращает новый экземпляр <code>UserProfile</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "UserProfile",
        "signature": "private UserProfile(Builder b)",
        "params": {
          "uz": "<code>Builder b</code> (masalan, <code>this</code>)",
          "en": "<code>Builder b</code> (e.g. <code>this</code>)",
          "ru": "<code>Builder b</code> (например, <code>this</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.username = b.username;</code> <code>this.email = b.email;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.username = b.username;</code> <code>this.email = b.email;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.username = b.username;</code> <code>this.email = b.email;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "Klassdan yangi ob'yekt yarating.",
          "Tegishli `setUsername()`, `setEmail()`, `build()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Instantiate the class object.",
          "Invoke `setUsername()`, `setEmail()`, `build()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект класса.",
          "Вызовите метод(ы) `setUsername()`, `setEmail()`, `build()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Foydalanuvchi: nodir_payme | nodir@payme.uz"
    }
  },
  {
    "id": 138,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "138. Click — Xotiradagi Ombor (In-Memory Repository with Unique Constraint)",
      "en": "138. Click — Encapsulated In-Memory Repository with Unique ID Constraint",
      "ru": "138. Click — Инкапсулированный репозиторий с проверкой уникальности"
    },
    "scenario": {
      "uz": "Xotiradagi foydalanuvchilar repozitoriysi ('UserRepo') massivni yashiradi. 'save(id, name)' metodi ID takrorlanmasligini (Unique Constraint) tekshiradi, dublikat bo'lsa rad etadi.",
      "en": "Repository pattern: encapsulates array storage and enforces unique ID constraint before persisting.",
      "ru": "Паттерн Репозиторий: инкапсулирует хранилище и проверяет уникальность ID перед сохранением."
    },
    "requirements": {
      "classes": [
        "UserRepo",
        "Main"
      ],
      "privateFields": [
        "ids",
        "names",
        "size"
      ],
      "methods": [
        "save",
        "findById"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UserRepo {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserRepo {\n    private int[] ids = new int[5];\n    private String[] names = new String[5];\n    private int size = 0;\n\n    public boolean save(int id, String name) {\n        for (int i = 0; i < this.size; i++) {\n            if (this.ids[i] == id) return false;\n        }\n        if (this.size < this.ids.length) {\n            this.ids[this.size] = id;\n            this.names[this.size] = name;\n            this.size++;\n            return true;\n        }\n        return false;\n    }\n\n    public String findById(int id) {\n        for (int i = 0; i < this.size; i++) {\n            if (this.ids[i] == id) return this.names[i];\n        }\n        return null;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserRepo repo = new UserRepo();\n        boolean s1 = repo.save(1, \"Ali\");\n        boolean s2 = repo.save(1, \"Takroriy\");\n        System.out.println(\"S1: \" + s1 + \" | S2: \" + s2 + \" | Topildi: \" + repo.findById(1));\n    }\n}",
    "expectedOutput": "S1: true | S2: false | Topildi: Ali",
    "newKnowledge": {
      "uz": "138-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 138: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 138: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "save()",
        "signature": "public boolean save(int id, String name)",
        "params": {
          "uz": "<code>int id, String name</code> (masalan, <code>1, \"Ali\"</code>)",
          "en": "<code>int id, String name</code> (e.g. <code>1, \"Ali\"</code>)",
          "ru": "<code>int id, String name</code> (например, <code>1, \"Ali\"</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>size</code> hisoblagichini 1 taga oshirib, <code>private true</code> maydonini return qiladi.",
          "en": "<code>boolean</code>: increments <code>size</code> counter and returns <code>private true</code>.",
          "ru": "<code>boolean</code>: увеличивает счетчик <code>size</code> и возвращает поле <code>true</code>."
        },
        "desc": {
          "uz": "Har murojaatda <code>size</code> maydonini oshirib, <code>true</code> maydonining joriy qiymatini return qiladi.",
          "en": "Increments <code>size</code> count on each call and returns the current <code>true</code> value.",
          "ru": "Инкрементирует <code>size</code> при каждом вызове и возвращает значение <code>true</code>."
        }
      },
      {
        "name": "findById()",
        "signature": "public String findById(int id)",
        "params": {
          "uz": "<code>int id</code>",
          "en": "<code>int id</code>",
          "ru": "<code>int id</code>"
        },
        "returns": {
          "uz": "<code>String</code>: <code>names</code> massividan <code>i</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>String</code>: returns element at index <code>i</code> from <code>names</code> (or null if out of bounds).",
          "ru": "<code>String</code>: возвращает элемент по индексу <code>i</code> из <code>names</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>i</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>i</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>i</code>."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`repo` nomli `UserRepo` ob'yektini yarating.",
          "Tegishli `save()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `UserRepo` object named `repo`.",
          "Invoke `save()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `UserRepo` с именем `repo`.",
          "Вызовите метод(ы) `save()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "S1: true | S2: false | Topildi: Ali"
    }
  },
  {
    "id": 139,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "139. Korzinka — Token Bucket Tezlik Cheklovchisi (Rate Limiter Encapsulation)",
      "en": "139. Korzinka — Encapsulated Token Bucket Rate Limiter Algorithm",
      "ru": "139. Korzinka — Инкапсулированный алгоритм Token Bucket для ограничения запросов"
    },
    "scenario": {
      "uz": "API so'rovlarini cheklovchi 'TokenBucket' sinfi: 'allowRequest()' har chaqirilganda tokenlarni tekshiradi va kamaytiradi, 'refill(int n)' esa yangi token qo'shadi.",
      "en": "Token Bucket algorithm encapsulation: allowRequest() decrements tokens safely, refill() replenishes capacity.",
      "ru": "Алгоритм Token Bucket: allowRequest() списывает токен, refill() пополняет корзину."
    },
    "requirements": {
      "classes": [
        "TokenBucket",
        "Main"
      ],
      "privateFields": [
        "tokens",
        "maxCapacity"
      ],
      "methods": [
        "allowRequest",
        "refill"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class TokenBucket {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class TokenBucket {\n    private int tokens;\n    private int maxCapacity;\n\n    public TokenBucket(int capacity) {\n        this.maxCapacity = capacity;\n        this.tokens = capacity;\n    }\n\n    public boolean allowRequest() {\n        if (this.tokens > 0) {\n            this.tokens--;\n            return true;\n        }\n        return false;\n    }\n\n    public void refill(int count) {\n        this.tokens = Math.min(this.maxCapacity, this.tokens + count);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TokenBucket tb = new TokenBucket(2);\n        System.out.println(\"So'rov 1: \" + tb.allowRequest());\n        System.out.println(\"So'rov 2: \" + tb.allowRequest());\n        System.out.println(\"So'rov 3: \" + tb.allowRequest());\n    }\n}",
    "expectedOutput": "So'rov 1: true\nSo'rov 2: true\nSo'rov 3: false",
    "newKnowledge": {
      "uz": "139-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 139: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 139: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "allowRequest()",
        "signature": "public boolean allowRequest()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "refill()",
        "signature": "public void refill(int count)",
        "params": {
          "uz": "<code>int count</code>",
          "en": "<code>int count</code>",
          "ru": "<code>int count</code>"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "TokenBucket",
        "signature": "public TokenBucket(int capacity)",
        "params": {
          "uz": "<code>int capacity</code> (masalan, <code>2</code>)",
          "en": "<code>int capacity</code> (e.g. <code>2</code>)",
          "ru": "<code>int capacity</code> (например, <code>2</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.maxCapacity = capacity;</code> <code>this.tokens = capacity;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.maxCapacity = capacity;</code> <code>this.tokens = capacity;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.maxCapacity = capacity;</code> <code>this.tokens = capacity;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`tb` nomli `TokenBucket` ob'yektini yarating va argument sifatida `2` qiymatini bering."
        ],
        "en": [
          "Create a `TokenBucket` object named `tb` and pass argument(s) `2`."
        ],
        "ru": [
          "Создайте объект `TokenBucket` с именем `tb` и передайте аргумент(ы) `2`."
        ]
      },
      "expectedOutput": "So'rov 1: true\nSo'rov 2: true\nSo'rov 3: false"
    }
  },
  {
    "id": 140,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "140. Yandex Go — Keshni Yangilash Mexanizmi (Simple LRU Cache)",
      "en": "140. Yandex Go — Fixed-Capacity LRU Cache Encapsulation",
      "ru": "140. Yandex Go — Инкапсулированный кэш вытеснения LRU"
    },
    "scenario": {
      "uz": "Sig'imi 2 bo'lgan kesh: yangi element qo'shilganda agar joy to'lgan bo'lsa eng eski element chiqarib yuboriladi ('put(k, v)', 'get(k)'). Ichki joylashuv to'liq inkapsulyatsiyada bo'lsin.",
      "en": "Fixed-size LRU eviction cache: puts evict oldest element when full, completely hiding internal storage.",
      "ru": "Кэш с фиксированной емкостью: вытесняет старые элементы при переполнении."
    },
    "requirements": {
      "classes": [
        "SimpleCache",
        "Main"
      ],
      "privateFields": [
        "keys",
        "values"
      ],
      "methods": [
        "put",
        "get"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SimpleCache {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SimpleCache {\n    private String[] keys = new String[2];\n    private String[] values = new String[2];\n    private int count = 0;\n\n    public void put(String k, String v) {\n        if (this.count < 2) {\n            this.keys[this.count] = k;\n            this.values[this.count] = v;\n            this.count++;\n        } else {\n            // eng eskisini suramiz\n            this.keys[0] = this.keys[1];\n            this.values[0] = this.values[1];\n            this.keys[1] = k;\n            this.values[1] = v;\n        }\n    }\n\n    public String get(String k) {\n        for (int i = 0; i < this.count; i++) {\n            if (this.keys[i] != null && this.keys[i].equals(k)) {\n                return this.values[i];\n            }\n        }\n        return null;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SimpleCache sc = new SimpleCache();\n        sc.put(\"A\", \"Toshkent\");\n        sc.put(\"B\", \"Samarqand\");\n        sc.put(\"C\", \"Buxoro\");\n        System.out.println(\"A mavjudmi: \" + (sc.get(\"A\") != null) + \" | C: \" + sc.get(\"C\"));\n    }\n}",
    "expectedOutput": "A mavjudmi: false | C: Buxoro",
    "newKnowledge": {
      "uz": "140-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 140: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 140: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "put()",
        "signature": "public void put(String k, String v)",
        "params": {
          "uz": "<code>String k, String v</code> (masalan, <code>\"A\", \"Toshkent\"</code>)",
          "en": "<code>String k, String v</code> (e.g. <code>\"A\", \"Toshkent\"</code>)",
          "ru": "<code>String k, String v</code> (например, <code>\"A\", \"Toshkent\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "get()",
        "signature": "public String get(String k)",
        "params": {
          "uz": "<code>String k</code> (masalan, <code>\"C\"</code>)",
          "en": "<code>String k</code> (e.g. <code>\"C\"</code>)",
          "ru": "<code>String k</code> (например, <code>\"C\"</code>)"
        },
        "returns": {
          "uz": "<code>String</code>: <code>values</code> massividan <code>i</code>-indeksdagi elementni return qiladi (chegaradan chiqsa null).",
          "en": "<code>String</code>: returns element at index <code>i</code> from <code>values</code> (or null if out of bounds).",
          "ru": "<code>String</code>: возвращает элемент по индексу <code>i</code> из <code>values</code> (или null при выходе за границы)."
        },
        "desc": {
          "uz": "<code>i</code> indeksi bo'yicha massiv elementini xavfsiz o'qib beradi.",
          "en": "Safely retrieves array element at <code>i</code> index.",
          "ru": "Безопасно возвращает элемент массива по индексу <code>i</code>."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`sc` nomli `SimpleCache` ob'yektini yarating.",
          "Tegishli `put()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `SimpleCache` object named `sc`.",
          "Invoke `put()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `SimpleCache` с именем `sc`.",
          "Вызовите метод(ы) `put()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "A mavjudmi: false | C: Buxoro"
    }
  },
  {
    "id": 141,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "141. Safia — Memento Modeli (Holatni Xotiraga Olish va Tiklash)",
      "en": "141. Safia — Memento Pattern State Snapshot Encapsulation",
      "ru": "141. Safia — Паттерн Memento: сохранение и восстановление снимка состояния"
    },
    "scenario": {
      "uz": "Retsept holatini vaqtincha saqlash: 'saveSnapshot()' xususiy maydonli 'RecipeMemento' qaytaradi. Keyinchalik 'restore(memento)' chaqirilsa asl holat qayta tiklanadi.",
      "en": "Memento pattern: snapshot internal state into opaque Memento and restore later without exposing internals.",
      "ru": "Паттерн Memento: сохраняйте снимок состояния в объект Memento и восстанавливайте его."
    },
    "requirements": {
      "classes": [
        "RecipeMemento",
        "PastryRecipe",
        "Main"
      ],
      "privateFields": [
        "sugarGrams"
      ],
      "methods": [
        "saveSnapshot",
        "restore"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class RecipeMemento {\n    \n}\n\nclass PastryRecipe {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class RecipeMemento {\n    private int state;\n\n    public RecipeMemento(int state) {\n        this.state = state;\n    }\n\n    public int getState() {\n        return this.state;\n    }\n}\n\nclass PastryRecipe {\n    private int sugarGrams;\n\n    public void setSugar(int s) {\n        this.sugarGrams = s;\n    }\n\n    public int getSugar() {\n        return this.sugarGrams;\n    }\n\n    public RecipeMemento saveSnapshot() {\n        return new RecipeMemento(this.sugarGrams);\n    }\n\n    public void restore(RecipeMemento m) {\n        if (m != null) {\n            this.sugarGrams = m.getState();\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PastryRecipe r = new PastryRecipe();\n        r.setSugar(100);\n        RecipeMemento snapshot = r.saveSnapshot();\n        r.setSugar(250);\n        r.restore(snapshot);\n        System.out.println(\"Tikланган shakar miqdori: \" + r.getSugar() + \"g\");\n    }\n}",
    "expectedOutput": "Tikланган shakar miqdori: 100g",
    "newKnowledge": {
      "uz": "141-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 141: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 141: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "getState()",
        "signature": "public int getState()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int state</code> maydonining qiymatini return qiladi (masalan, <code>this.sugarGrams</code>).",
          "en": "<code>int</code>: returns the value of <code>private int state</code> (e.g. <code>this.sugarGrams</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int state</code> (например, <code>this.sugarGrams</code>)."
        },
        "desc": {
          "uz": "Ichki <code>state</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>state</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>state</code> без возможности модификации."
        }
      },
      {
        "name": "setSugar()",
        "signature": "public void setSugar(int s)",
        "params": {
          "uz": "<code>int s</code> (masalan, <code>100</code>)",
          "en": "<code>int s</code> (e.g. <code>100</code>)",
          "ru": "<code>int s</code> (например, <code>100</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: qiymat qaytarmaydi",
          "en": "<code>void</code>: returns nothing",
          "ru": "<code>void</code>: ничего не возвращает"
        },
        "desc": {
          "uz": "Kiruvchi <code>s</code> qiymatini qabul qilib, <code>this.sugarGrams = s;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts <code>s</code> and sets <code>this.sugarGrams = s;</code>.",
          "ru": "Принимает <code>s</code> и обновляет <code>this.sugarGrams = s;</code>."
        }
      },
      {
        "name": "getSugar()",
        "signature": "public int getSugar()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int sugarGrams</code> maydonining qiymatini return qiladi.",
          "en": "<code>int</code>: returns the value of <code>private int sugarGrams</code>.",
          "ru": "<code>int</code>: возвращает значение поля <code>private int sugarGrams</code>."
        },
        "desc": {
          "uz": "Ichki <code>sugarGrams</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>sugarGrams</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>sugarGrams</code> без возможности модификации."
        }
      },
      {
        "name": "saveSnapshot()",
        "signature": "public RecipeMemento saveSnapshot()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>RecipeMemento</code>: joriy ob'yektni o'zgartirmasdan, yangilangan parametr bilan yangi <code>RecipeMemento</code> ob'yektini return qiladi.",
          "en": "<code>RecipeMemento</code>: returns a new <code>RecipeMemento</code> instance without mutating original object.",
          "ru": "<code>RecipeMemento</code>: возвращает новый экземпляр <code>RecipeMemento</code> не изменяя исходный объект."
        },
        "desc": {
          "uz": "Immutability (o'zgarmaslik) qoidasi bo'yicha yangi nusxa yaratib return qiladi.",
          "en": "Creates and returns a new copy following immutability principles.",
          "ru": "Создает и возвращает новую копию согласно принципу неизменяемости."
        }
      },
      {
        "name": "restore()",
        "signature": "public void restore(RecipeMemento m)",
        "params": {
          "uz": "<code>RecipeMemento m</code> (masalan, <code>snapshot</code>)",
          "en": "<code>RecipeMemento m</code> (e.g. <code>snapshot</code>)",
          "ru": "<code>RecipeMemento m</code> (например, <code>snapshot</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>sugarGrams</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>sugarGrams</code> qiymatini return qiladi.",
          "en": "<code>void</code>: returns safe default if <code>sugarGrams</code> is null, otherwise returns <code>sugarGrams</code>.",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>sugarGrams</code> null, иначе <code>sugarGrams</code>."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "RecipeMemento",
        "signature": "public RecipeMemento(int state)",
        "params": {
          "uz": "<code>int state</code> (masalan, <code>this.sugarGrams</code>)",
          "en": "<code>int state</code> (e.g. <code>this.sugarGrams</code>)",
          "ru": "<code>int state</code> (например, <code>this.sugarGrams</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.state = state;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.state = state;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.state = state;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`r` nomli `PastryRecipe` ob'yektini yarating.",
          "Tegishli `setSugar()`, `saveSnapshot()`, `restore()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `PastryRecipe` object named `r`.",
          "Invoke `setSugar()`, `saveSnapshot()`, `restore()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `PastryRecipe` с именем `r`.",
          "Вызовите метод(ы) `setSugar()`, `saveSnapshot()`, `restore()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Tikланган shakar miqdori: 100g"
    }
  },
  {
    "id": 142,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "142. Dodo Pizza — Atomar Tranzaksiya Rollback Inkapsulyatsiyasi",
      "en": "142. Dodo Pizza — Atomic Transaction with Encapsulated Rollback Logic",
      "ru": "142. Dodo Pizza — Атомарная транзакция с инкапсулированным откатом (Rollback)"
    },
    "scenario": {
      "uz": "Atomar operatsiya: Buyurtmada pul yechiladi va tovar ombordan olinadi. Agar omborda tovar yetishmasa, pul avtomatik orqaga qaytariladi (Rollback) va operatsiya false beradi.",
      "en": "Atomic transaction: if stock deduction fails, balance debit is rolled back automatically.",
      "ru": "Атомарность: при сбое списания со склада списанные деньги автоматически возвращаются клиенту."
    },
    "requirements": {
      "classes": [
        "AtomicCheckout",
        "Main"
      ],
      "privateFields": [
        "balance",
        "stock"
      ],
      "methods": [
        "executeOrder",
        "getBalance"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class AtomicCheckout {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class AtomicCheckout {\n    private double balance = 100000.0;\n    private int stock = 0;\n\n    public boolean executeOrder(double price) {\n        if (this.balance < price) return false;\n        this.balance -= price; // 1-qadam\n        if (this.stock <= 0) {\n            this.balance += price; // ROLLBACK\n            return false;\n        }\n        this.stock--;\n        return true;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AtomicCheckout ac = new AtomicCheckout();\n        boolean res = ac.executeOrder(50000.0);\n        System.out.println(\"Natija: \" + res + \" | Balans o'zgarmadimi: \" + (ac.getBalance() == 100000.0));\n    }\n}",
    "expectedOutput": "Natija: false | Balans o'zgarmadimi: true",
    "newKnowledge": {
      "uz": "142-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 142: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 142: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "executeOrder()",
        "signature": "public boolean executeOrder(double price)",
        "params": {
          "uz": "<code>double price</code> (masalan, <code>50000.0</code>)",
          "en": "<code>double price</code> (e.g. <code>50000.0</code>)",
          "ru": "<code>double price</code> (например, <code>50000.0</code>)"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getBalance()",
        "signature": "public double getBalance()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double balance</code> maydonining qiymatini return qiladi (masalan, <code>100000.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double balance</code> (e.g. <code>100000.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double balance</code> (например, <code>100000.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>balance</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>balance</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>balance</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`ac` nomli `AtomicCheckout` ob'yektini yarating.",
          "Tegishli `executeOrder()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `AtomicCheckout` object named `ac`.",
          "Invoke `executeOrder()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `AtomicCheckout` с именем `ac`.",
          "Вызовите метод(ы) `executeOrder()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Natija: false | Balans o'zgarmadimi: true"
    }
  },
  {
    "id": 143,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "143. Texnomart — Buyruqlar Tarixi va Bekor Qilish (Undo Stack Encapsulation)",
      "en": "143. Texnomart — Encapsulated Command History Undo/Redo Engine",
      "ru": "143. Texnomart — Инкапсулированный движок истории команд и отмены (Undo)"
    },
    "scenario": {
      "uz": "Kalkulyator amallarini bekor qilish (Undo): 'add(n)' amali qiymatni qo'shadi va tarix stekiga yozadi. 'undo()' chaqirilganda oxirgi qo'shilgan son ayirilib, asl qiymat qaytariladi.",
      "en": "Command stack encapsulation: add() updates sum and pushes to history; undo() reverts last command.",
      "ru": "Инкапсулированная история команд: undo() отменяет последнее действие, извлекая значение из стека."
    },
    "requirements": {
      "classes": [
        "UndoCalculator",
        "Main"
      ],
      "privateFields": [
        "value",
        "history",
        "top"
      ],
      "methods": [
        "add",
        "undo",
        "getValue"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UndoCalculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UndoCalculator {\n    private int value = 0;\n    private int[] history = new int[10];\n    private int top = 0;\n\n    public void add(int n) {\n        this.value += n;\n        if (this.top < this.history.length) {\n            this.history[this.top++] = n;\n        }\n    }\n\n    public void undo() {\n        if (this.top > 0) {\n            int last = this.history[--this.top];\n            this.value -= last;\n        }\n    }\n\n    public int getValue() {\n        return this.value;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UndoCalculator calc = new UndoCalculator();\n        calc.add(50);\n        calc.add(30);\n        calc.undo();\n        System.out.println(\"Undo-dan keyin: \" + calc.getValue());\n    }\n}",
    "expectedOutput": "Undo-dan keyin: 50",
    "newKnowledge": {
      "uz": "143-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 143: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 143: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "add()",
        "signature": "public void add(int n)",
        "params": {
          "uz": "<code>int n</code> (masalan, <code>50</code>)",
          "en": "<code>int n</code> (e.g. <code>50</code>)",
          "ru": "<code>int n</code> (например, <code>50</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "undo()",
        "signature": "public void undo()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getValue()",
        "signature": "public int getValue()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int value</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int value</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int value</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>value</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>value</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>value</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`calc` nomli `UndoCalculator` ob'yektini yarating.",
          "Tegishli `add()`, `undo()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `UndoCalculator` object named `calc`.",
          "Invoke `add()`, `undo()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `UndoCalculator` с именем `calc`.",
          "Вызовите метод(ы) `add()`, `undo()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Undo-dan keyin: 50"
    }
  },
  {
    "id": 144,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "144. Express24 — Hodisalar Eshituvchisi Modeli (Observer Pattern Encapsulation)",
      "en": "144. Express24 — Encapsulated Event Dispatcher and Observer Pattern",
      "ru": "144. Express24 — Инкапсулированный диспетчер событий (Observer Pattern)"
    },
    "scenario": {
      "uz": "Buyurtma holati o'zgarganda xabardor qiluvchi 'OrderDispatcher': 'notifyObservers(event)' orqali barcha ro'yxatdan o'tgan eshituvchilarga xavfsiz bildirishnoma yuboradi.",
      "en": "Encapsulate Observer pattern: dispatch events to registered listeners through protected notification loop.",
      "ru": "Инкапсулируйте паттерн Наблюдатель: безопасная рассылка событий зарегистрированным слушателям."
    },
    "requirements": {
      "classes": [
        "OrderListener",
        "OrderDispatcher",
        "Main"
      ],
      "privateFields": [
        "listeners"
      ],
      "methods": [
        "addListener",
        "dispatchOrder"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "interface OrderListener {\n    void onOrder(String status);\n}\n\nclass OrderDispatcher {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface OrderListener {\n    void onOrder(String status);\n}\n\nclass OrderDispatcher {\n    private OrderListener[] listeners = new OrderListener[5];\n    private int count = 0;\n\n    public void addListener(OrderListener l) {\n        if (l != null && this.count < this.listeners.length) {\n            this.listeners[this.count++] = l;\n        }\n    }\n\n    public void dispatchOrder(String status) {\n        for (int i = 0; i < this.count; i++) {\n            this.listeners[i].onOrder(status);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderDispatcher d = new OrderDispatcher();\n        d.addListener(st -> System.out.println(\"Eshitildi: \" + st));\n        d.dispatchOrder(\"READY_FOR_DELIVERY\");\n    }\n}",
    "expectedOutput": "Eshitildi: READY_FOR_DELIVERY",
    "newKnowledge": {
      "uz": "144-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 144: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 144: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "addListener()",
        "signature": "public void addListener(OrderListener l)",
        "params": {
          "uz": "<code>OrderListener l</code> (masalan, <code>st -> System.out.println(\"Eshitildi: \" + st</code>)",
          "en": "<code>OrderListener l</code> (e.g. <code>st -> System.out.println(\"Eshitildi: \" + st</code>)",
          "ru": "<code>OrderListener l</code> (например, <code>st -> System.out.println(\"Eshitildi: \" + st</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>listeners</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>listeners</code> qiymatini return qiladi (masalan, <code>new OrderListener[5]</code>).",
          "en": "<code>void</code>: returns safe default if <code>listeners</code> is null, otherwise returns <code>listeners</code> (e.g. <code>new OrderListener[5]</code>).",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>listeners</code> null, иначе <code>listeners</code> (например, <code>new OrderListener[5]</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "dispatchOrder()",
        "signature": "public void dispatchOrder(String status)",
        "params": {
          "uz": "<code>String status</code> (masalan, <code>\"READY_FOR_DELIVERY\"</code>)",
          "en": "<code>String status</code> (e.g. <code>\"READY_FOR_DELIVERY\"</code>)",
          "ru": "<code>String status</code> (например, <code>\"READY_FOR_DELIVERY\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`d` nomli `OrderDispatcher` ob'yektini yarating.",
          "Tegishli `addListener()`, `dispatchOrder()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `OrderDispatcher` object named `d`.",
          "Invoke `addListener()`, `dispatchOrder()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `OrderDispatcher` с именем `d`.",
          "Вызовите метод(ы) `addListener()`, `dispatchOrder()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Eshitildi: READY_FOR_DELIVERY"
    }
  },
  {
    "id": 145,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "145. Asaxiy — Tuzlangan Xeshni Tekshiruvchi Xavfsiz Shifr (Salted Hash Verifier)",
      "en": "145. Asaxiy — Encapsulated Salted Hash Password Verifier",
      "ru": "145. Asaxiy — Инкапсулированный верификатор хэша с солью"
    },
    "scenario": {
      "uz": "Xavfsizlik talabi: Tuz ('salt') va xesh tashqariga hech qachon oshkor qilinmaydi. Faqat 'verifyPassword(input)' metodi kiritilgan parolni tuzlab tekshirib, boolean natija qaytaradi.",
      "en": "Never leak cryptographic salt or hash. Expose strictly verifyPassword(plainInput) returning boolean.",
      "ru": "Никогда не раскрывайте соль и хэш. Предоставьте только метод verifyPassword(input)."
    },
    "requirements": {
      "classes": [
        "SaltedVerifier",
        "Main"
      ],
      "privateFields": [
        "salt",
        "storedHash"
      ],
      "methods": [
        "verifyPassword"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class SaltedVerifier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SaltedVerifier {\n    private String salt = \"XYZ99\";\n    private String storedHash;\n\n    public SaltedVerifier(String rawPassword) {\n        this.storedHash = this.salt + \"_\" + rawPassword;\n    }\n\n    public boolean verifyPassword(String input) {\n        if (input == null) return false;\n        String computed = this.salt + \"_\" + input;\n        return this.storedHash.equals(computed);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SaltedVerifier sv = new SaltedVerifier(\"mySecret\");\n        System.out.println(\"Mos keldimi 1: \" + sv.verifyPassword(\"wrong\"));\n        System.out.println(\"Mos keldimi 2: \" + sv.verifyPassword(\"mySecret\"));\n    }\n}",
    "expectedOutput": "Mos keldimi 1: false\nMos keldimi 2: true",
    "newKnowledge": {
      "uz": "145-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 145: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 145: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "verifyPassword()",
        "signature": "public boolean verifyPassword(String input)",
        "params": {
          "uz": "<code>String input</code>",
          "en": "<code>String input</code>",
          "ru": "<code>String input</code>"
        },
        "returns": {
          "uz": "<code>boolean</code>: agar <code>salt</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>salt</code> qiymatini return qiladi (masalan, <code>\"XYZ99\"</code>).",
          "en": "<code>boolean</code>: returns safe default if <code>salt</code> is null, otherwise returns <code>salt</code> (e.g. <code>\"XYZ99\"</code>).",
          "ru": "<code>boolean</code>: возвращает безопасное значение если <code>salt</code> null, иначе <code>salt</code> (например, <code>\"XYZ99\"</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "SaltedVerifier",
        "signature": "public SaltedVerifier(String rawPassword)",
        "params": {
          "uz": "<code>String rawPassword</code> (masalan, <code>\"mySecret\"</code>)",
          "en": "<code>String rawPassword</code> (e.g. <code>\"mySecret\"</code>)",
          "ru": "<code>String rawPassword</code> (например, <code>\"mySecret\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.storedHash = this.salt + \"_\" + rawPassword;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.storedHash = this.salt + \"_\" + rawPassword;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.storedHash = this.salt + \"_\" + rawPassword;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "`sv` nomli `SaltedVerifier` ob'yektini yarating va argument sifatida `\"mySecret\"` qiymatini bering."
        ],
        "en": [
          "Create a `SaltedVerifier` object named `sv` and pass argument(s) `\"mySecret\"`."
        ],
        "ru": [
          "Создайте объект `SaltedVerifier` с именем `sv` и передайте аргумент(ы) `\"mySecret\"`."
        ]
      },
      "expectedOutput": "Mos keldimi 1: false\nMos keldimi 2: true"
    }
  },
  {
    "id": 146,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "146. Kapitalbank — Tranzaksiya Konteksti (Unit of Work Pattern)",
      "en": "146. Kapitalbank — Encapsulated Unit of Work Transaction Context",
      "ru": "146. Kapitalbank — Инкапсулированный контекст транзакции Unit of Work"
    },
    "scenario": {
      "uz": "Unit of Work: Bir nechta operatsiyalar ('stage()') navbatga qo'yiladi. 'commit()' chaqirilganda barchasi birdaniga tasdiqlanadi, 'rollback()' chaqirilganda esa barchasi bekor qilinadi.",
      "en": "Unit of Work maintains pending operations. commit() applies all staged changes, rollback() discards.",
      "ru": "Паттерн Unit of Work: ставит операции в очередь. commit() применяет все, rollback() очищает."
    },
    "requirements": {
      "classes": [
        "UnitOfWork",
        "Main"
      ],
      "privateFields": [
        "stagedTotal",
        "isCommitted"
      ],
      "methods": [
        "stageAmount",
        "commit",
        "getCommittedTotal"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UnitOfWork {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UnitOfWork {\n    private double stagedTotal = 0.0;\n    private double committedTotal = 0.0;\n\n    public void stageAmount(double amt) {\n        if (amt > 0) this.stagedTotal += amt;\n    }\n\n    public void commit() {\n        this.committedTotal += this.stagedTotal;\n        this.stagedTotal = 0.0;\n    }\n\n    public double getCommittedTotal() {\n        return this.committedTotal;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UnitOfWork uow = new UnitOfWork();\n        uow.stageAmount(100.0);\n        uow.stageAmount(200.0);\n        uow.commit();\n        System.out.println(\"Tasdiqlangan summa: \" + uow.getCommittedTotal());\n    }\n}",
    "expectedOutput": "Tasdiqlangan summa: 300.0",
    "newKnowledge": {
      "uz": "146-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 146: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 146: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "stageAmount()",
        "signature": "public void stageAmount(double amt)",
        "params": {
          "uz": "<code>double amt</code> (masalan, <code>100.0</code>)",
          "en": "<code>double amt</code> (e.g. <code>100.0</code>)",
          "ru": "<code>double amt</code> (например, <code>100.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "commit()",
        "signature": "public void commit()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getCommittedTotal()",
        "signature": "public double getCommittedTotal()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double committedTotal</code> maydonining qiymatini return qiladi (masalan, <code>0.0</code>).",
          "en": "<code>double</code>: returns the value of <code>private double committedTotal</code> (e.g. <code>0.0</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double committedTotal</code> (например, <code>0.0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>committedTotal</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>committedTotal</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>committedTotal</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`uow` nomli `UnitOfWork` ob'yektini yarating.",
          "Tegishli `stageAmount()`, `commit()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `UnitOfWork` object named `uow`.",
          "Invoke `stageAmount()`, `commit()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `UnitOfWork` с именем `uow`.",
          "Вызовите метод(ы) `stageAmount()`, `commit()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Tasdiqlangan summa: 300.0"
    }
  },
  {
    "id": 147,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "147. Medion — Qoidalar Siyosati Inkapsulyatsiyasi (Policy/Specification Pattern)",
      "en": "147. Medion — Encapsulated Discount Policy Specification Pattern",
      "ru": "147. Medion — Инкапсулированная политика скидок (Policy Pattern)"
    },
    "scenario": {
      "uz": "Chegirma siyosati alohida sinfda inkapsulyatsiya qilinadi ('DiscountPolicy'). 'Billing' sinfi narxni hisoblashda ushbu siyosatga tayanadi va chegirma foizini qo'llaydi.",
      "en": "Specification / Policy pattern: encapsulate business rules in DiscountPolicy and delegate evaluation.",
      "ru": "Паттерн Policy: бизнес-правила инкапсулированы в DiscountPolicy, Billing делегирует расчет."
    },
    "requirements": {
      "classes": [
        "DiscountPolicy",
        "BillingService",
        "Main"
      ],
      "privateFields": [
        "policy"
      ],
      "methods": [
        "calculateFinal"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class DiscountPolicy {\n    \n}\n\nclass BillingService {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DiscountPolicy {\n    public double getDiscountRate(int visitCount) {\n        return (visitCount >= 5) ? 0.20 : 0.0;\n    }\n}\n\nclass BillingService {\n    private DiscountPolicy policy;\n\n    public BillingService(DiscountPolicy policy) {\n        this.policy = policy;\n    }\n\n    public double calculateFinal(double base, int visits) {\n        double rate = (this.policy != null) ? this.policy.getDiscountRate(visits) : 0.0;\n        return base * (1.0 - rate);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BillingService bs = new BillingService(new DiscountPolicy());\n        System.out.println(\"Chegirmali to'lov: \" + bs.calculateFinal(100000.0, 6) + \" UZS\");\n    }\n}",
    "expectedOutput": "Chegirmali to'lov: 80000.0 UZS",
    "newKnowledge": {
      "uz": "147-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 147: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 147: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "getDiscountRate()",
        "signature": "public double getDiscountRate(int visitCount)",
        "params": {
          "uz": "<code>int visitCount</code> (masalan, <code>visits</code>)",
          "en": "<code>int visitCount</code> (e.g. <code>visits</code>)",
          "ru": "<code>int visitCount</code> (например, <code>visits</code>)"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "calculateFinal()",
        "signature": "public double calculateFinal(double base, int visits)",
        "params": {
          "uz": "<code>double base, int visits</code>",
          "en": "<code>double base, int visits</code>",
          "ru": "<code>double base, int visits</code>"
        },
        "returns": {
          "uz": "<code>double</code>: agar <code>policy</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>policy</code> qiymatini return qiladi (masalan, <code>new DiscountPolicy(</code>).",
          "en": "<code>double</code>: returns safe default if <code>policy</code> is null, otherwise returns <code>policy</code> (e.g. <code>new DiscountPolicy(</code>).",
          "ru": "<code>double</code>: возвращает безопасное значение если <code>policy</code> null, иначе <code>policy</code> (например, <code>new DiscountPolicy(</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`bs` nomli `BillingService` ob'yektini yarating va argument sifatida `new DiscountPolicy(` qiymatini bering."
        ],
        "en": [
          "Create a `BillingService` object named `bs` and pass argument(s) `new DiscountPolicy(`."
        ],
        "ru": [
          "Создайте объект `BillingService` с именем `bs` и передайте аргумент(ы) `new DiscountPolicy(`."
        ]
      },
      "expectedOutput": "Chegirmali to'lov: 80000.0 UZS"
    }
  },
  {
    "id": 148,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "148. Beeline — Ichki Qatorli Sessiya Boshqaruvi (Session Manager with Expiration)",
      "en": "148. Beeline — Encapsulated Stateful Session Manager with Auto-Expiry",
      "ru": "148. Beeline — Управление сессиями с автоматическим истечением срока"
    },
    "scenario": {
      "uz": "Foydalanuvchi sessiyasi: 'login()' yangi sessiya ochadi. Agar sessiya davomiyligi 15 daqiqadan oshsa ('isExpired()'), avtomatik ravishda 'logout()' qilinadi va sessiya yopiladi.",
      "en": "Session lifecycle encapsulation: manages creation, activity tracking, and expiration guards.",
      "ru": "Инкапсуляция сессий: автоматическая проверка истечения срока действия сессии."
    },
    "requirements": {
      "classes": [
        "UserSession",
        "Main"
      ],
      "privateFields": [
        "token",
        "active"
      ],
      "methods": [
        "startSession",
        "invalidate",
        "isValid"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class UserSession {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserSession {\n    private String token = null;\n    private boolean active = false;\n\n    public void startSession(String t) {\n        this.token = t;\n        this.active = (t != null);\n    }\n\n    public void invalidate() {\n        this.token = null;\n        this.active = false;\n    }\n\n    public boolean isValid() {\n        return this.active;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserSession s = new UserSession();\n        s.startSession(\"SESS-991\");\n        System.out.println(\"Faolmi: \" + s.isValid());\n        s.invalidate();\n        System.out.println(\"Yopilgach faolmi: \" + s.isValid());\n    }\n}",
    "expectedOutput": "Faolmi: true\nYopilgach faolmi: false",
    "newKnowledge": {
      "uz": "148-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 148: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 148: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "startSession()",
        "signature": "public void startSession(String t)",
        "params": {
          "uz": "<code>String t</code> (masalan, <code>\"SESS-991\"</code>)",
          "en": "<code>String t</code> (e.g. <code>\"SESS-991\"</code>)",
          "ru": "<code>String t</code> (например, <code>\"SESS-991\"</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: agar <code>token</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>token</code> qiymatini return qiladi (masalan, <code>null</code>).",
          "en": "<code>void</code>: returns safe default if <code>token</code> is null, otherwise returns <code>token</code> (e.g. <code>null</code>).",
          "ru": "<code>void</code>: возвращает безопасное значение если <code>token</code> null, иначе <code>token</code> (например, <code>null</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      },
      {
        "name": "invalidate()",
        "signature": "public void invalidate()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "isValid()",
        "signature": "public boolean isValid()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>private boolean active</code> maydonining qiymatini return qiladi (masalan, <code>false</code>).",
          "en": "<code>boolean</code>: returns the value of <code>private boolean active</code> (e.g. <code>false</code>).",
          "ru": "<code>boolean</code>: возвращает значение поля <code>private boolean active</code> (например, <code>false</code>)."
        },
        "desc": {
          "uz": "Ichki <code>active</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>active</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>active</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`s` nomli `UserSession` ob'yektini yarating.",
          "Tegishli `startSession()`, `invalidate()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `UserSession` object named `s`.",
          "Invoke `startSession()`, `invalidate()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `UserSession` с именем `s`.",
          "Вызовите метод(ы) `startSession()`, `invalidate()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Faolmi: true\nYopilgach faolmi: false"
    }
  },
  {
    "id": 149,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "149. UzAirways — Toza Arxitektura Domen Mohiyati (Clean Architecture Domain Entity)",
      "en": "149. UzAirways — Clean Architecture Fully Encapsulated Flight Manifest Entity",
      "ru": "149. UzAirways — Полностью инкапсулированная доменная сущность Clean Architecture"
    },
    "scenario": {
      "uz": "Toza arxitektura qoidasi: 'FlightManifest' barcha invariantlar (o'rinlar soni <= 180), biznes operatsiyalari ('bookSeat(passenger)'), audit tarixi va holatlar mashinasini yagona toza klassda birlashtiradi.",
      "en": "Clean Architecture entity: unifies invariant enforcement, domain mutators, and audit trail in single class.",
      "ru": "Сущность Clean Architecture: объединяет инварианты, бизнес-операции и аудит в одном классе."
    },
    "requirements": {
      "classes": [
        "FlightManifest",
        "Main"
      ],
      "privateFields": [
        "bookedSeats",
        "capacity"
      ],
      "methods": [
        "bookSeat",
        "getPassengerCount"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class FlightManifest {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class FlightManifest {\n    private int capacity = 180;\n    private int bookedSeats = 0;\n\n    public boolean bookSeat() {\n        if (this.bookedSeats < this.capacity) {\n            this.bookedSeats++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getPassengerCount() {\n        return this.bookedSeats;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifest fm = new FlightManifest();\n        fm.bookSeat();\n        fm.bookSeat();\n        System.out.println(\"Band o'rinlar: \" + fm.getPassengerCount());\n    }\n}",
    "expectedOutput": "Band o'rinlar: 2",
    "newKnowledge": {
      "uz": "149-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 149: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 149: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "bookSeat()",
        "signature": "public boolean bookSeat()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: <code>bookedSeats</code> hisoblagichini 1 taga oshirib, <code>private true</code> maydonini return qiladi.",
          "en": "<code>boolean</code>: increments <code>bookedSeats</code> counter and returns <code>private true</code>.",
          "ru": "<code>boolean</code>: увеличивает счетчик <code>bookedSeats</code> и возвращает поле <code>true</code>."
        },
        "desc": {
          "uz": "Har murojaatda <code>bookedSeats</code> maydonini oshirib, <code>true</code> maydonining joriy qiymatini return qiladi.",
          "en": "Increments <code>bookedSeats</code> count on each call and returns the current <code>true</code> value.",
          "ru": "Инкрементирует <code>bookedSeats</code> при каждом вызове и возвращает значение <code>true</code>."
        }
      },
      {
        "name": "getPassengerCount()",
        "signature": "public int getPassengerCount()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>int</code>: <code>private int bookedSeats</code> maydonining qiymatini return qiladi (masalan, <code>0</code>).",
          "en": "<code>int</code>: returns the value of <code>private int bookedSeats</code> (e.g. <code>0</code>).",
          "ru": "<code>int</code>: возвращает значение поля <code>private int bookedSeats</code> (например, <code>0</code>)."
        },
        "desc": {
          "uz": "Ichki <code>bookedSeats</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>bookedSeats</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>bookedSeats</code> без возможности модификации."
        }
      }
    ],
    "constructorSpecs": [],
    "mainTask": {
      "steps": {
        "uz": [
          "`fm` nomli `FlightManifest` ob'yektini yarating.",
          "Tegishli `bookSeat()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create a `FlightManifest` object named `fm`.",
          "Invoke `bookSeat()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте объект `FlightManifest` с именем `fm`.",
          "Вызовите метод(ы) `bookSeat()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Band o'rinlar: 2"
    }
  },
  {
    "id": 150,
    "tier": 10,
    "tierName": "10-Bosqich: Korxona Darajasidagi Inkapsulyatsiya va CW2 Arxitekturasi",
    "sector": "136-150: Enterprise Patterns & CW2 Capstone",
    "title": {
      "uz": "150. WIUT SRS — CW2 Console Order Application Master Arxitekturasi (Grand Capstone)",
      "en": "150. WIUT SRS — WIUT CW2 Console Order System Core Architecture (Grand Capstone)",
      "ru": "150. WIUT SRS — Мастер-архитектура курсовой работы WIUT CW2 (Grand Capstone)"
    },
    "scenario": {
      "uz": "Week 2 ning oliy cho'qqisi: WIUT CW2 Konsol Buyurtma Tizimi (Order System). 'Order' sinfi 'Customer' va tovarlar ro'yxatini ('OrderItem[]') o'z ichiga oladi, holatlar mashinasi (CREATED -> CONFIRMED -> DELIVERED) bilan boshqariladi, 12% soliqni hisoblaydi va Demeter qonuniga to'liq rioya qiladi.",
      "en": "Grand Finale 150: The complete core domain architecture for WIUT CW2 Console Order Application.",
      "ru": "Гранд-финал 150: Полная доменная архитектура для курсовой работы WIUT CW2 Console Order Application."
    },
    "requirements": {
      "classes": [
        "Customer",
        "OrderItem",
        "Order",
        "Main"
      ],
      "privateFields": [
        "customer",
        "items",
        "state"
      ],
      "methods": [
        "addItem",
        "confirm",
        "deliver",
        "getGrandTotal",
        "getOrderSummary"
      ],
      "keywords": [
        "this",
        "private"
      ]
    },
    "starterCode": "class Customer {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n\n    public Customer(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass OrderItem {\n    private String title;\n    private double price;\n\n    public OrderItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Order {\n    private Customer customer;\n    private OrderItem[] items = new OrderItem[10];\n    private int itemCount = 0;\n    private String state = \"CREATED\";\n\n    public Order(Customer customer) {\n        this.customer = customer;\n    }\n\n    public void addItem(String title, double price) {\n        if (\"CREATED\".equals(this.state) && this.itemCount < this.items.length) {\n            this.items[this.itemCount++] = new OrderItem(title, price);\n        }\n    }\n\n    public boolean confirm() {\n        if (\"CREATED\".equals(this.state) && this.itemCount > 0) {\n            this.state = \"CONFIRMED\";\n            return true;\n        }\n        return false;\n    }\n\n    public boolean deliver() {\n        if (\"CONFIRMED\".equals(this.state)) {\n            this.state = \"DELIVERED\";\n            return true;\n        }\n        return false;\n    }\n\n    public double getGrandTotal() {\n        double subtotal = 0.0;\n        for (int i = 0; i < this.itemCount; i++) {\n            subtotal += this.items[i].getPrice();\n        }\n        return subtotal * 1.12; // 12% QQS\n    }\n\n    public String getOrderSummary() {\n        String client = (this.customer != null) ? this.customer.getName() : \"Anonim\";\n        return \"Mijoz: \" + client + \" | Holat: \" + this.state + \" | Jami: \" + Math.round(getGrandTotal()) + \" UZS\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Ali Valiyev\");\n        Order order = new Order(c);\n        order.addItem(\"Java OOP Darsligi\", 120000.0);\n        order.addItem(\"WIUT Bloknot\", 30000.0);\n        order.confirm();\n        order.deliver();\n        System.out.println(order.getOrderSummary());\n    }\n}",
    "expectedOutput": "Mijoz: Ali Valiyev | Holat: DELIVERED | Jami: 168000 UZS",
    "newKnowledge": {
      "uz": "150-masala: Korxona darajasidagi dizayn modellari (Builder, Memento, Unit of Work, Policy) va WIUT CW2 Console Order Application master arxitekturasi.",
      "en": "Challenge 150: Enterprise design patterns (Builder, Memento, Unit of Work, Policy) and WIUT CW2 domain architecture.",
      "ru": "Задача 150: Корпоративные паттерны проектирования и мастер-архитектура курсовой работы WIUT CW2."
    },
    "newKnowledgeTags": [
      "enterprise pattern",
      "CW2 capstone",
      "clean architecture",
      "domain model"
    ],
    "methodSpecs": [
      {
        "name": "getName()",
        "signature": "public String getName()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: <code>private String name</code> maydonining qiymatini return qiladi (masalan, <code>\"Ali Valiyev\"</code>).",
          "en": "<code>String</code>: returns the value of <code>private String name</code> (e.g. <code>\"Ali Valiyev\"</code>).",
          "ru": "<code>String</code>: возвращает значение поля <code>private String name</code> (например, <code>\"Ali Valiyev\"</code>)."
        },
        "desc": {
          "uz": "Ichki <code>name</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>name</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>name</code> без возможности модификации."
        }
      },
      {
        "name": "getPrice()",
        "signature": "public double getPrice()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: <code>private double price</code> maydonining qiymatini return qiladi (masalan, <code>price</code>).",
          "en": "<code>double</code>: returns the value of <code>private double price</code> (e.g. <code>price</code>).",
          "ru": "<code>double</code>: возвращает значение поля <code>private double price</code> (например, <code>price</code>)."
        },
        "desc": {
          "uz": "Ichki <code>price</code> maydonidagi xususiy ma'lumotni tashqariga xavfsiz return qiladi.",
          "en": "Safely exposes the private <code>price</code> field value without allowing mutation.",
          "ru": "Безопасно возвращает значение приватного поля <code>price</code> без возможности модификации."
        }
      },
      {
        "name": "addItem()",
        "signature": "public void addItem(String title, double price)",
        "params": {
          "uz": "<code>String title, double price</code> (masalan, <code>\"Java OOP Darsligi\", 120000.0</code>)",
          "en": "<code>String title, double price</code> (e.g. <code>\"Java OOP Darsligi\", 120000.0</code>)",
          "ru": "<code>String title, double price</code> (например, <code>\"Java OOP Darsligi\", 120000.0</code>)"
        },
        "returns": {
          "uz": "<code>void</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>void</code>: returns computed business result or operation state.",
          "ru": "<code>void</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "confirm()",
        "signature": "public boolean confirm()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "deliver()",
        "signature": "public boolean deliver()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>boolean</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>boolean</code>: returns computed business result or operation state.",
          "ru": "<code>boolean</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getGrandTotal()",
        "signature": "public double getGrandTotal()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>double</code>: hisoblangan biznes natijasini yoki operatsiya holatini return qiladi.",
          "en": "<code>double</code>: returns computed business result or operation state.",
          "ru": "<code>double</code>: возвращает вычисленный бизнес-результат или статус операции."
        },
        "desc": {
          "uz": "Qabul qilingan parametrlarni qayta ishlab, belgilangan algoritm bo'yicha natijani return qiladi.",
          "en": "Processes parameters and returns the computed result according to algorithm.",
          "ru": "Обрабатывает параметры и возвращает вычисленный результат согласно алгоритму."
        }
      },
      {
        "name": "getOrderSummary()",
        "signature": "public String getOrderSummary()",
        "params": {
          "uz": "Parametr qabul qilmaydi",
          "en": "No parameters",
          "ru": "Без параметров"
        },
        "returns": {
          "uz": "<code>String</code>: agar <code>customer</code> null bo'lsa xavfsiz qiymat (\"\" yoki default), aks holda <code>customer</code> qiymatini return qiladi (masalan, <code>c</code>).",
          "en": "<code>String</code>: returns safe default if <code>customer</code> is null, otherwise returns <code>customer</code> (e.g. <code>c</code>).",
          "ru": "<code>String</code>: возвращает безопасное значение если <code>customer</code> null, иначе <code>customer</code> (например, <code>c</code>)."
        },
        "desc": {
          "uz": "NullPointerException xatosini oldini oluvchi xavfsiz getter, null qiymatni tekshirib qaytaradi.",
          "en": "Null-safe getter preventing NullPointerException by guarding against null.",
          "ru": "Null-safe геттер, предотвращающий NullPointerException проверкой на null."
        }
      }
    ],
    "constructorSpecs": [
      {
        "name": "Customer",
        "signature": "public Customer(String name)",
        "params": {
          "uz": "<code>String name</code> (masalan, <code>\"Ali Valiyev\"</code>)",
          "en": "<code>String name</code> (e.g. <code>\"Ali Valiyev\"</code>)",
          "ru": "<code>String name</code> (например, <code>\"Ali Valiyev\"</code>)"
        },
        "desc": {
          "uz": "Kiruvchi parametr(lar)ni qabul qilib, <code>this.name = name;</code> maydoniga o'zlashtiradi.",
          "en": "Accepts input parameter(s) and initializes: <code>this.name = name;</code>",
          "ru": "Принимает входные параметры и инициализирует: <code>this.name = name;</code>"
        }
      }
    ],
    "mainTask": {
      "steps": {
        "uz": [
          "2 ta ob'yekt yarating: `c` (\"Ali Valiyev\") hamda `order` (c).",
          "Tegishli `addItem()`, `confirm()`, `deliver()` metodlarini chaqirib, qiymatlarni o'zgartiring yoki amallarni bajaring."
        ],
        "en": [
          "Create 2 objects: `c` (\"Ali Valiyev\") and `order` (c).",
          "Invoke `addItem()`, `confirm()`, `deliver()` method(s) to update values or perform operations."
        ],
        "ru": [
          "Создайте 2 объекта: `c` (\"Ali Valiyev\") и `order` (c).",
          "Вызовите метод(ы) `addItem()`, `confirm()`, `deliver()` для изменения значений или выполнения операций."
        ]
      },
      "expectedOutput": "Mijoz: Ali Valiyev | Holat: DELIVERED | Jami: 168000 UZS"
    }
  }
];
