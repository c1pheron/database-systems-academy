var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Nodirbek Zokirov",
    "clientRole": "E-Commerce Mahsulot Direktori",
    "clientAvatar": "mentor",
    "title": "Uzum Market — Sotuvchi va Mahsulotlar Katalogi",
    "titleEn": "Uzum Market — Seller & Product Catalog",
    "story": "Uzum Market marketplace platformasida har bir rasmiy do'kon sotuvchisi (Seller) ko'plab mahsulotlarni (Product) sotuvga qo'yadi. Har bir mahsulot esa aniq bitta ro'yxatdan o'tgan sotuvchiga tegishli. Sotuvchida esa kamida bitta yoki undan ko'p tovar bo'lishi shart. Tizimda 'Seller' (sellerId {PK}) va 'Product' (productId {PK}) kuchli entitiylarini shakllantiring va ular o'rtasidagi munosabatni o'rnating.",
    "storyEn": "On the Uzum Market marketplace platform, each registered seller (Seller) offers multiple products (Product) for sale. Each product belongs to exactly one registered seller. A seller must maintain at least one or more listed items in their inventory. Model 'Seller' (sellerId {PK}) and 'Product' (productId {PK}) as strong entities with a binary relationship.",
    "instruction": "'Seller' va 'Product' entitiylarini binar aloqa chizig'i bilan bog'lang hamda multiplisitiya chegaralarini aniqlab o'rnating.",
    "instructionEn": "Connect 'Seller' and 'Product' with a binary relationship line, analyzing business requirements to determine and configure the correct multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Seller",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sellerId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "sellerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shopName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Product",
          "isWeak": false,
          "isAssociative": false,
          "pk": "productId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "productId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "title",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Seller",
          "entity2": "Product",
          "fromEntityName": "Seller",
          "toEntityName": "Product",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Seller",
          "pk": "sellerId",
          "isWeak": false
        },
        {
          "name": "Product",
          "pk": "productId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Seller",
          "entity2": "Product",
          "fromEntityName": "Seller",
          "toEntityName": "Product",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Узум Маркет — Продавец и каталог продукции",
    "storyRu": "На торговой платформе Uzum Market каждый зарегистрированный продавец (Продавец) предлагает на продажу несколько продуктов (Продукт). Каждый товар принадлежит ровно одному зарегистрированному продавцу. Продавец должен иметь в своем инвентаре хотя бы один или несколько перечисленных товаров. Смоделируйте «Продавец» (sellerId {PK}) и «Продукт» (productId {PK}) как сильные сущности с бинарными отношениями.",
    "instructionRu": "Соедините «Продавец» и «Продукт» с помощью двоичной линии связи, анализируя бизнес-требования для определения и настройки правильных ограничений множественности.",
    "clientRoleRu": "Директор по продуктам электронной коммерции"
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Aziz Qodirov",
    "clientRole": "Fintech Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "Payme To'lov Tizimi — Foydalanuvchi va Bank Kartalari",
    "titleEn": "Payme Payment System — User & Linked Bank Cards",
    "story": "Payme to'lov ilovasida har bir ro'yxatdan o'tgan foydalanuvchi (User) o'z hisobiga bir nechta Humo yoki Uzcard bank kartalarini (BankCard) ulashi mumkin. Yangi ro'yxatdan o'tgan mijozda hali karta bo'lmasligi mumkin. Har bir ulangan bank kartasi esa aniq bitta egaga tegishli. 'User' (userId {PK}) va 'BankCard' (cardId {PK}) entitiylarini o'zaro bog'lang.",
    "storyEn": "In the Payme fintech payment application, each registered user (User) can link several Humo or Uzcard bank cards (BankCard) to their wallet. A newly registered user may not have added any card yet. Each linked card belongs to exactly one user. Model 'User' (userId {PK}) and 'BankCard' (cardId {PK}) entities.",
    "instruction": "'User' va 'BankCard' entitiylarini bog'lang hamda multiplisitiya chegaralarini tahlil qilib o'rnating.",
    "instructionEn": "Connect 'User' and 'BankCard', analyzing business requirements to determine and configure the correct multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "isWeak": false,
          "isAssociative": false,
          "pk": "userId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "userId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BankCard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cardId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "cardId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "panMasked",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "expiryDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "User",
          "entity2": "BankCard",
          "fromEntityName": "User",
          "toEntityName": "BankCard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "User",
          "pk": "userId",
          "isWeak": false
        },
        {
          "name": "BankCard",
          "pk": "cardId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "User",
          "entity2": "BankCard",
          "fromEntityName": "User",
          "toEntityName": "BankCard",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Платежная система Payme — Пользовательские и привязанные банковские карты",
    "storyRu": "В финтех-платежном приложении Payme каждый зарегистрированный пользователь (Пользователь) может привязать к своему кошельку несколько банковских карт Humo или Uzcard (BankCard). Недавно зарегистрированный пользователь, возможно, еще не добавил ни одной карты. Каждая привязанная карта принадлежит ровно одному пользователю. Моделируйте объекты «Пользователь» (userId {PK}) и «BankCard» (cardId {PK}).",
    "instructionRu": "Соедините «Пользователя» и «Банковскую карту», ​​анализируя бизнес-требования, чтобы определить и настроить правильные ограничения множественности.",
    "clientRoleRu": "Финтех-системный архитектор"
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dilshod Alimov",
    "clientRole": "Chakana Savdo Operatsion Rahbari",
    "clientAvatar": "mentor",
    "title": "Korzinka Savdo Tarmog'i — Filial va Kassirlar Shtati",
    "titleEn": "Korzinka Supermarket Chain — Branch & Cashier Staff",
    "story": "Korzinka supermarketlar tarmog'ida har bir filialda (Branch) smenada xizmat ko'rsatuvchi bir nechta kassirlar (Cashier) shtati faoliyat yuritadi. Har bir kassir esa rasmiy mehnat shartnomasiga binoan faqat bitta doimiy filialga biriktirilgan. 'Branch' (branchId {PK}) va 'Cashier' (cashierId {PK}) o'rtasidagi munosabatni loyihalashtiring.",
    "storyEn": "In the Korzinka retail chain, each supermarket branch (Branch) employs multiple cashiers (Cashier) per work shift. In accordance with employment contracts, each cashier is assigned to exactly one permanent store branch. Model the relationship between 'Branch' (branchId {PK}) and 'Cashier' (cashierId {PK}).",
    "instruction": "'Branch' va 'Cashier' o'rtasida aloqa chizing hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'Branch' and 'Cashier', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "branchId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Cashier",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cashierId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "cashierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shiftCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Branch",
          "entity2": "Cashier",
          "fromEntityName": "Branch",
          "toEntityName": "Cashier",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "branchId",
          "isWeak": false
        },
        {
          "name": "Cashier",
          "pk": "cashierId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Branch",
          "entity2": "Cashier",
          "fromEntityName": "Branch",
          "toEntityName": "Cashier",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Сеть супермаркетов «Корзинка» — сотрудники филиала и кассы",
    "storyRu": "В торговой сети «Корзинка» в каждом филиале супермаркета (Филиал) в смену работает несколько кассиров (Кассир). В соответствии с трудовыми договорами каждый кассир закрепляется ровно за одним постоянным филиалом магазина. Смоделируйте связь между «Филиалом» (branchId {PK}) и «Кассиром» (cashierId {PK}).",
    "instructionRu": "Соедините «Филиал» и «Кассир», анализируя ограничения домена, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Chakana Savdo Operatsion Rahbari"
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Rustam Saidov",
    "clientRole": "Taksopark Dispecheri",
    "clientAvatar": "mentor",
    "title": "Yandex Go Taksoparki — Haydovchi va Xizmat Avtomobili (1:1)",
    "titleEn": "Yandex Go Taxi Fleet — Driver & Assigned Vehicle (1:1)",
    "story": "Yandex Go Comfort+ tarifida har bir litsenziyali haydovchiga (Driver) uning smenasi uchun aniq bitta tekshirilgan xizmat avtomobili (Vehicle) biriktiriladi. Har bir avtomobil ham ayni paytda faqat 1 ta mas'ul haydovchi ixtiyorida bo'ladi. 'Driver' (driverId {PK}) va 'Vehicle' (vinCode {PK}) entitiylarini aloqa bilan bog'lang.",
    "storyEn": "Under the Yandex Go Comfort+ service tier, each licensed driver (Driver) is assigned exactly one inspected service car (Vehicle) for their duty shift. Each car is operated by only one driver at a time. Connect 'Driver' (driverId {PK}) and 'Vehicle' (vinCode {PK}) with a binary relationship.",
    "instruction": "'Driver' va 'Vehicle' entitiylarini bog'lang hamda multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'Driver' and 'Vehicle' with a binary relationship, analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Driver",
          "isWeak": false,
          "isAssociative": false,
          "pk": "driverId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "driverId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Vehicle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vinCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "plateNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Driver",
          "entity2": "Vehicle",
          "fromEntityName": "Driver",
          "toEntityName": "Vehicle",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Driver",
          "pk": "driverId",
          "isWeak": false
        },
        {
          "name": "Vehicle",
          "pk": "vinCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "Vehicle",
          "fromEntityName": "Driver",
          "toEntityName": "Vehicle",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Таксопарк Яндекс Go — Водитель и закрепленный за ним автомобиль (1:1)",
    "storyRu": "В рамках уровня обслуживания Яндекс Go Комфорт+ каждому лицензированному водителю (Водителю) закрепляется ровно один проверенный служебный автомобиль (ТС) на свою дежурную смену. Каждым автомобилем одновременно управляет только один водитель. Соедините «Водитель» (driverId {PK}) и «Транспортное средство» (vinCode {PK}) с помощью двоичной связи.",
    "instructionRu": "Соедините «Водитель» и «Транспортное средство» двоичными отношениями, анализируя ограничения предметной области, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Диспетчер таксопарка"
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dr. Alisher Vohidov",
    "clientRole": "Akademik Ishlar Bo'yicha Dekan",
    "clientAvatar": "mentor",
    "title": "WIUT Universiteti — Fakultet va Akademik Kafedralar",
    "titleEn": "WIUT University — Faculty & Academic Departments",
    "story": "Toshkent IT Universiteti da har bir fakultet (Faculty) o'z tarkibida kamida bitta yoki bir nechta ixtisoslashgan kafedralarni (Department) birlashtiradi. Har bir kafedra esa faqat bitta fakultet tasarrufiga kiradi. 'Faculty' (facultyCode {PK}) va 'Department' (deptId {PK}) entitiylarini bog'lang.",
    "storyEn": "At Toshkent IT Universiteti, each academic faculty (Faculty) encompasses one or more specialized teaching departments (Department). Each department belongs to exactly one faculty. Connect 'Faculty' (facultyCode {PK}) and 'Department' (deptId {PK}).",
    "instruction": "'Faculty' va 'Department' entitiylarini bog'lang hamda multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Faculty' and 'Department', analyzing business requirements to determine and configure the correct multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "isWeak": false,
          "isAssociative": false,
          "pk": "facultyCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "facultyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deanEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Department",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "deptId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "officeRoom",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Faculty",
          "entity2": "Department",
          "fromEntityName": "Faculty",
          "toEntityName": "Department",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "facultyCode",
          "isWeak": false
        },
        {
          "name": "Department",
          "pk": "deptId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Faculty",
          "entity2": "Department",
          "fromEntityName": "Faculty",
          "toEntityName": "Department",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Университет МВУТ — факультеты и академические подразделения",
    "storyRu": "В Ташкентском ИТ-университете каждый академический факультет (факультет) включает в себя одну или несколько специализированных учебных кафедр (кафедры). Каждая кафедра принадлежит ровно одному факультету. Подключите «Факультет» (facultyCode {PK}) и «Отдел» (deptId {PK}).",
    "instructionRu": "Соедините «Факультет» и «Отдел», анализируя бизнес-требования, чтобы определить и настроить правильные ограничения множественности.",
    "clientRoleRu": "декан по академическим вопросам"
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dr. Sevara Ismoilova",
    "clientRole": "Klinika Bosh Vrachi",
    "clientAvatar": "mentor",
    "title": "Medion Tibbiyot Markazi — Bo'lim va Bosh Shifokor (1:1)",
    "titleEn": "Medion Medical Center — Department & Head Doctor (1:1)",
    "story": "Ko'p tarmoqli Medion klinikasida har bir tibbiy bo'limni (HospitalDept) boshqarish uchun aniq 1 ta bo'lim bosh shifokori (HeadDoctor) tayinlangan. Bosh shifokor ham o'z lavozimida faqat bitta bo'lim boshqaruviga javobgar. 'HospitalDept' (deptCode {PK}) va 'HeadDoctor' (doctorId {PK}) o'rtasida aloqa o'rnating.",
    "storyEn": "In a multi-specialty clinic, each clinical department (HospitalDept) is directed by exactly one appointed head doctor (HeadDoctor). The head doctor is in charge of only one department at a time. Establish a relationship between 'HospitalDept' (deptCode {PK}) and 'HeadDoctor' (doctorId {PK}).",
    "instruction": "'HospitalDept' va 'HeadDoctor' entitiylarini binar aloqa bilan bog'lang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'HospitalDept' and 'HeadDoctor' with a binary relationship. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorLevel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HeadDoctor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "doctorId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "HospitalDept",
          "entity2": "HeadDoctor",
          "fromEntityName": "HospitalDept",
          "toEntityName": "HeadDoctor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "pk": "deptCode",
          "isWeak": false
        },
        {
          "name": "HeadDoctor",
          "pk": "doctorId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalDept",
          "entity2": "HeadDoctor",
          "fromEntityName": "HospitalDept",
          "toEntityName": "HeadDoctor",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Медицинский центр Медион — отделение и главный врач (1:1)",
    "storyRu": "В многопрофильной клинике каждое клиническое отделение (HospitalDept) возглавляет ровно один назначенный главный врач (HeadDoctor). Главный врач одновременно возглавляет только одно отделение. Установите связь между «HospitalDept» (deptCode {PK}) и «HeadDoctor» (doctorId {PK}).",
    "instructionRu": "Соедините «HospitalDept» и «HeadDoctor» бинарными отношениями. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Главный врач клиники"
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Uzbekistan Airways — Aviakompaniya va Samolyotlar Floti",
    "titleEn": "Uzbekistan Airways — Carrier Airline & Aircraft Fleet",
    "story": "Milliy aviakompaniya (Airline) tasarrufida xalqaro va mahalliy reyslarni amalga oshiruvchi o'nlab yo'lovchi samolyotlari (Aircraft) mavjud. Har bir havo kemasi esa xalqaro reestrga ko'ra qat'iy bitta tashuvchi aviakompaniyaga tegishli. 'Airline' (iataCode {PK}) va 'Aircraft' (tailNo {PK}) entitiylarini binar aloqa bilan ulang.",
    "storyEn": "The national carrier airline (Airline) operates dozens of passenger airliners (Aircraft) for scheduled flights. Under civil aviation regulations, each aircraft is registered to exactly one operating airline. Model the binary relationship between 'Airline' (iataCode {PK}) and 'Aircraft' (tailNo {PK}).",
    "instruction": "'Airline' va 'Aircraft' ni bog'lang hamda multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Airline' and 'Aircraft', analyzing business requirements to determine and configure the correct multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airline",
          "isWeak": false,
          "isAssociative": false,
          "pk": "iataCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "airlineName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "country",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Aircraft",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tailNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "model",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Airline",
          "entity2": "Aircraft",
          "fromEntityName": "Airline",
          "toEntityName": "Aircraft",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airline",
          "pk": "iataCode",
          "isWeak": false
        },
        {
          "name": "Aircraft",
          "pk": "tailNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Airline",
          "entity2": "Aircraft",
          "fromEntityName": "Airline",
          "toEntityName": "Aircraft",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "«Узбекистон Хаво Йуллари» — Авиакомпания-перевозчик и авиапарк",
    "storyRu": "Национальная авиакомпания-перевозчик (Авиакомпания) эксплуатирует десятки пассажирских авиалайнеров (Самолетов) для регулярных рейсов. Согласно правилам гражданской авиации, каждый самолет зарегистрирован ровно на одну действующую авиакомпанию. Смоделируйте двоичную связь между «Авиакомпанией» (iataCode {PK}) и «Самолетом» (tailNo {PK}).",
    "instructionRu": "Соедините «Авиакомпанию» и «Самолет», анализируя бизнес-требования, чтобы определить и настроить правильные ограничения множественности.",
    "clientRoleRu": "Технический директор Авиапарка"
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Nigora Umarova",
    "clientRole": "Mehmonxona Bosh Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Hyatt Regency — Mehmonxona va Xonalar Fondi",
    "titleEn": "Hyatt Regency — Hotel & Guest Rooms Inventory",
    "story": "Besh yulduzli Hyatt mehmonxonasida (Hotel) mehmonlar istiqomat qilishi uchun yuzlab xonalar (Room) mavjud. Har bir xona esa faqat bitta aniq mehmonxona majmuasiga qarashlidir. 'Hotel' (hotelId {PK}) va 'Room' (roomNo {PK}) entitiylarini bog'lang.",
    "storyEn": "A luxury hotel complex (Hotel) contains hundreds of guest rooms (Room) available for customer lodging. Each room belongs to exactly one physical hotel property. Connect 'Hotel' (hotelId {PK}) and 'Room' (roomNo {PK}).",
    "instruction": "'Hotel' va 'Room' entitiylarini bog'lang hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'Hotel' and 'Room', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hotelId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hotelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "starsRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Room",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nightlyRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Hotel",
          "entity2": "Room",
          "fromEntityName": "Hotel",
          "toEntityName": "Room",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId",
          "isWeak": false
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "Room",
          "fromEntityName": "Hotel",
          "toEntityName": "Room",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Hyatt Regency — перечень отелей и номеров",
    "storyRu": "Роскошный гостиничный комплекс (Отель) содержит сотни номеров (Номер), доступных для проживания клиентов. Каждый номер принадлежит ровно одному физическому объекту отеля. Подключите «Отель» (hotelId {PK}) и «Номер» (roomNo {PK}).",
    "instructionRu": "Соедините «Отель» и «Номер», анализируя ограничения домена, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Генеральный директор отеля"
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Shuhrat Bekmurodov",
    "clientRole": "IT Park Inkubatsiya Rahbari",
    "clientAvatar": "mentor",
    "title": "IT Texnoparki — Startap Inkubator va Mas'ul Menejer (1:1)",
    "titleEn": "IT Technopark — Startup Incubator & Managing Lead (1:1)",
    "story": "IT Park tuzilmasida har bir startap akseleratsiya markaziga (Incubator) operatsion jarayonni yuritish uchun aniq 1 ta mas'ul boshqaruvchi (Manager) biriktirilgan. Har bir menejer ham faqat bitta markaz faoliyatini boshqaradi. 'Incubator' (incId {PK}) va 'Manager' (managerId {PK}) entitiylarini munosabat bilan bog'lang.",
    "storyEn": "Within the IT Park ecosystem, each startup incubation center (Incubator) is assigned exactly one managing director (Manager) for operational oversight. Each manager is responsible for leading only one incubation center. Establish a relationship between 'Incubator' (incId {PK}) and 'Manager' (managerId {PK}).",
    "instruction": "'Incubator' va 'Manager' entitiyalarini binar aloqa bilan ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Incubator' and 'Manager' with a binary relationship. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Incubator",
          "isWeak": false,
          "isAssociative": false,
          "pk": "incId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "incId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "centerTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Manager",
          "isWeak": false,
          "isAssociative": false,
          "pk": "managerId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "managerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "managerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "email",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Incubator",
          "entity2": "Manager",
          "fromEntityName": "Incubator",
          "toEntityName": "Manager",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Incubator",
          "pk": "incId",
          "isWeak": false
        },
        {
          "name": "Manager",
          "pk": "managerId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Incubator",
          "entity2": "Manager",
          "fromEntityName": "Incubator",
          "toEntityName": "Manager",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "ИТ-Технопарк — Инкубатор стартапов и управляющий директор (1:1)",
    "storyRu": "В экосистеме ИТ-парка за каждым инкубационным центром стартапов (Инкубатором) закреплен ровно один управляющий директор (Менеджер) для оперативного контроля. Каждый менеджер отвечает за руководство только одним инкубационным центром. Установите связь между «Инкубатором» (incId {PK}) и «Менеджером» (managerId {PK}).",
    "instructionRu": "Соедините «Инкубатор» и «Менеджер» бинарными отношениями. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель инкубатора ИТ-парка"
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Munira Sobirova",
    "clientRole": "Kutubxona Bosh Bibliografi",
    "clientAvatar": "mentor",
    "title": "Alisher Navoiy Kutubxonasi — Kitob va Muallif",
    "titleEn": "Alisher Navoiy National Library — Book & Author",
    "story": "Davlat kutubxonasi fondida har bir yozuvchi-muallif (Author) qalamiga mansub ko'plab kitoblar (Book) saqlanadi. Ushbu klassik katalog doirasida har bir kitob bitta bosh muallif tomonidan yozilgan deb hisoblanadi. 'Author' (authorId {PK}) va 'Book' (isbn {PK}) entitiylarini bog'lang.",
    "storyEn": "In the state bibliographic repository, each literary author (Author) is credited with writing multiple books (Book). Under this standard catalog scheme, each book is attributed to one primary author. Connect 'Author' (authorId {PK}) and 'Book' (isbn {PK}).",
    "instruction": "'Author' va 'Book' ni bog'lang hamda multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Author' and 'Book', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Author",
          "isWeak": false,
          "isAssociative": false,
          "pk": "authorId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "authorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "authorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "country",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Book",
          "isWeak": false,
          "isAssociative": false,
          "pk": "isbn",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "isbn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "title",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "publishedYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Author",
          "entity2": "Book",
          "fromEntityName": "Author",
          "toEntityName": "Book",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Author",
          "pk": "authorId",
          "isWeak": false
        },
        {
          "name": "Book",
          "pk": "isbn",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Author",
          "entity2": "Book",
          "fromEntityName": "Author",
          "toEntityName": "Book",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Национальная библиотека Алишера Навои — ​​книга и автор",
    "storyRu": "В государственном библиографическом хранилище каждому литератору (Автору) записывается написание нескольких книг (Книга). Согласно этой стандартной схеме каталога каждая книга приписывается одному основному автору. Подключите «Автор» (authorId {PK}) и «Книга» (isbn {PK}).",
    "instructionRu": "Соедините «Автор» и «Книга», анализируя ограничения предметной области, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Общая библиография библиотеки"
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Bobur Mirzayev",
    "clientRole": "Chakana Bank Mahsulotlari Menejeri",
    "clientAvatar": "mentor",
    "title": "Anorbank — Mijoz va Omonat Depoziti (0..*)",
    "titleEn": "Anorbank — Retail Customer & Savings Deposit Account (0..*)",
    "story": "Raqamli bankda ro'yxatdan o'tgan mijoz (Customer) foiz jamg'arish maqsadida bir nechta depozit hisoblarini (DepositAccount) ochishi mumkin. Har bir depozit hisobi esa qat'iy bitta jismoniy shaxs nomiga ochiladi. 'Customer' (cifCode {PK}) va 'DepositAccount' (accountNo {PK}) o'rtasidagi munosabatni o'rnating.",
    "storyEn": "In a digital retail bank, a registered customer (Customer) may open zero or multiple deposit accounts (DepositAccount). Each deposit account is strictly opened under one primary customer. Model the relationship between 'Customer' (cifCode {PK}) and 'DepositAccount' (accountNo {PK}).",
    "instruction": "'Customer' va 'DepositAccount' ni bog'lang hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'Customer' and 'DepositAccount', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cifCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "cifCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "customerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DepositAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accountNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "interestRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "balance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Customer",
          "entity2": "DepositAccount",
          "fromEntityName": "Customer",
          "toEntityName": "DepositAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "cifCode",
          "isWeak": false
        },
        {
          "name": "DepositAccount",
          "pk": "accountNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "DepositAccount",
          "fromEntityName": "Customer",
          "toEntityName": "DepositAccount",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Anorbank — Частный клиент и сберегательный депозитный счет (0..*)",
    "storyRu": "В цифровом розничном банке зарегистрированный клиент (Клиент) может открыть ноль или несколько депозитных счетов (DepositAccount). Каждый депозитный счет открывается строго на одного основного клиента. Смоделируйте отношения между «Клиентом» (cifCode {PK}) и «DepositAccount» (номер счета {PK}).",
    "instructionRu": "Соедините «Клиент» и «Депозитный счет», анализируя ограничения домена, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Менеджер по розничным банковским продуктам"
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Otabek G'aniyev",
    "clientRole": "Toshshahartransxizmat Muhandisi",
    "clientAvatar": "mentor",
    "title": "Toshkent Jamoat Transporti — Marshrut va Shahar Avtobuslari",
    "titleEn": "Tashkent Transit — Bus Route & Assigned City Buses",
    "story": "Poytaxt yo'lovchi transportida har bir belgilangan marshrut (BusRoute) bo'ylab bir nechta shahar avtobuslari (CityBus) harakatlanadi. Har bir avtobus esa navbatchilik rejasiga ko'ra ayni paytda bitta marshrutga biriktirilgan. 'BusRoute' (routeNo {PK}) va 'CityBus' (busId {PK}) entitiylarini bog'lang.",
    "storyEn": "In urban public transit, each designated bus route (BusRoute) is serviced by several scheduled city buses (CityBus). Under daily schedules, each bus is assigned to one specific route. Connect 'BusRoute' (routeNo {PK}) and 'CityBus' (busId {PK}).",
    "instruction": "'BusRoute' va 'CityBus' ni bog'lang hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'BusRoute' and 'CityBus', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusRoute",
          "isWeak": false,
          "isAssociative": false,
          "pk": "routeNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "routeNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startPoint",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "endPoint",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CityBus",
          "isWeak": false,
          "isAssociative": false,
          "pk": "busId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "busId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "plateNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "BusRoute",
          "entity2": "CityBus",
          "fromEntityName": "BusRoute",
          "toEntityName": "CityBus",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BusRoute",
          "pk": "routeNo",
          "isWeak": false
        },
        {
          "name": "CityBus",
          "pk": "busId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BusRoute",
          "entity2": "CityBus",
          "fromEntityName": "BusRoute",
          "toEntityName": "CityBus",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Ташкентский транзит — автобусные маршруты и выделенные городские автобусы",
    "storyRu": "В городском общественном транспорте каждый выделенный автобусный маршрут (BusRoute) обслуживается несколькими регулярными городскими автобусами (CityBus). В соответствии с ежедневными расписаниями каждый автобус закреплен за одним конкретным маршрутом. Подключите BusRoute (routeNo {PK}) и CityBus (busId {PK}).",
    "instructionRu": "Соедините BusRoute и CityBus, анализируя ограничения домена, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Инженер Тошшахартрансхизмат"
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Jamshid Ergashov",
    "clientRole": "Dilerlik Tarmog'i Sotuv Direktori",
    "clientAvatar": "mentor",
    "title": "UzAuto Motors Dileri — Avtosalon va Avtomobillar Zaxirasi",
    "titleEn": "UzAuto Motors Dealership — Showroom & Auto Stock",
    "story": "Rasmiy dilerlik markazida (Dealership) sotuvga chiqarilgan ko'plab yangi avtomobillar (Automobile) mavjud. Har bir avtomobil qaysi dilerlik markazi avtosalonida turgani bilan qat'iy bog'langan. 'Dealership' (dealerCode {PK}) va 'Automobile' (vinNumber {PK}) o'rtasidagi aloqani o'rnating.",
    "storyEn": "An authorized auto dealership (Dealership) holds an on-site inventory of multiple newly manufactured automobiles (Automobile) for sale. Each vehicle is physically located at and tracked by one dealership. Connect 'Dealership' (dealerCode {PK}) and 'Automobile' (vinNumber {PK}).",
    "instruction": "'Dealership' va 'Automobile' ni bog'lang hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'Dealership' and 'Automobile', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Dealership",
          "isWeak": false,
          "isAssociative": false,
          "pk": "dealerCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "dealerCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dealerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Automobile",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vinNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "vinNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "model",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Dealership",
          "entity2": "Automobile",
          "fromEntityName": "Dealership",
          "toEntityName": "Automobile",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Dealership",
          "pk": "dealerCode",
          "isWeak": false
        },
        {
          "name": "Automobile",
          "pk": "vinNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Dealership",
          "entity2": "Automobile",
          "fromEntityName": "Dealership",
          "toEntityName": "Automobile",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Дилерский центр UzAuto Motors — Шоурум и автосклад",
    "storyRu": "Авторизованный автодилер (Дилерский центр) имеет на своем складе несколько новых автомобилей (Автомобиль), выставленных на продажу. Каждое транспортное средство физически находится и отслеживается одним дилерским центром. Подключите «Дилерский центр» (dealerCode {PK}) и «Автомобильный» (vinNumber {PK}).",
    "instructionRu": "Соедините «Дилерский центр» и «Автомобиль», анализируя ограничения домена, чтобы определить правильную кратность min.max. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Директор по продажам дилерской сети"
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Maktab O'quv Bo'limi Mudiri",
    "clientAvatar": "mentor",
    "title": "Maktab Ta'limi — Sinf va Sinf Rahbari (1:1)",
    "titleEn": "Secondary School — Classroom Grade & Homeroom Teacher (1:1)",
    "story": "Umumta'lim maktabida har bir sinfga (SchoolClass, masalan 10-A) o'quvchilar tarbiyasi uchun aniq 1 ta sinf rahbari bo'lgan ustoz (ClassTeacher) biriktiriladi. Har bir o'qituvchi ham faqat bitta sinfga rahbarlik qiladi. 'SchoolClass' (classCode {PK}) va 'ClassTeacher' (teacherId {PK}) entitiylarini aloqa bilan bog'lang.",
    "storyEn": "In school administration, each student classroom group (SchoolClass, e.g. Grade 10-A) is assigned exactly one dedicated homeroom teacher (ClassTeacher). Each teacher serves as homeroom lead for only one class. Connect 'SchoolClass' (classCode {PK}) and 'ClassTeacher' (teacherId {PK}) with a relationship.",
    "instruction": "'SchoolClass' va 'ClassTeacher' o'rtasida binar aloqa chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Connect 'SchoolClass' and 'ClassTeacher' with a binary link. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SchoolClass",
          "isWeak": false,
          "isAssociative": false,
          "pk": "classCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "classCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gradeNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "academicYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ClassTeacher",
          "isWeak": false,
          "isAssociative": false,
          "pk": "teacherId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "teacherId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "teacherName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subject",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "SchoolClass",
          "entity2": "ClassTeacher",
          "fromEntityName": "SchoolClass",
          "toEntityName": "ClassTeacher",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SchoolClass",
          "pk": "classCode",
          "isWeak": false
        },
        {
          "name": "ClassTeacher",
          "pk": "teacherId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "SchoolClass",
          "entity2": "ClassTeacher",
          "fromEntityName": "SchoolClass",
          "toEntityName": "ClassTeacher",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Средняя школа — классный класс и классный руководитель (1:1)",
    "storyRu": "В администрации школы каждой классной группе учащихся (SchoolClass, например, 10-А класс) назначается ровно один классный руководитель (ClassTeacher). Каждый учитель является классным руководителем только одного класса. Соедините «SchoolClass» (classCode {PK}) и «ClassTeacher» (teacherId {PK}) связью.",
    "instructionRu": "Соедините «SchoolClass» и «ClassTeacher» двоичной ссылкой. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель образовательного отдела школы"
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "Farm Ta'minot Logistika Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Farmatsevtika Tarmog'i — Markaziy Ombor va Dorixonalar",
    "titleEn": "Pharma Supply Network — Central Warehouse & Retail Pharmacies",
    "story": "Farmatsevtika tarmog'ida bitta yirik ta'minot ombori (CentralWarehouse) o'z tasarrufidagi ko'plab dorixona filiallarini (PharmacyStore) dori vositalari bilan ta'minlaydi. Har bir dorixona esa dori partiyalarini aniq 1 ta markaziy ombordan qabul qiladi. 'CentralWarehouse' (warehouseCode {PK}) va 'PharmacyStore' (pharmacyId {PK}) o'rtasida aloqa chizing.",
    "storyEn": "In a healthcare supply network, one central logistics warehouse (CentralWarehouse) replenishes inventory for dozens of local retail pharmacies (PharmacyStore). Each pharmacy receives stock from one central depot. Model the relationship between 'CentralWarehouse' (warehouseCode {PK}) and 'PharmacyStore' (pharmacyId {PK}).",
    "instruction": "'CentralWarehouse' va 'PharmacyStore' ni bog'lang hamda talablarga muvofiq multiplisitiya chegaralarini o'rnating.",
    "instructionEn": "Connect 'CentralWarehouse' and 'PharmacyStore', analyzing domain constraints to determine the proper min.max multiplicities. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralWarehouse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "warehouseCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalArea",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PharmacyStore",
          "isWeak": false,
          "isAssociative": false,
          "pk": "pharmacyId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "pharmacyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "CentralWarehouse",
          "entity2": "PharmacyStore",
          "fromEntityName": "CentralWarehouse",
          "toEntityName": "PharmacyStore",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CentralWarehouse",
          "pk": "warehouseCode",
          "isWeak": false
        },
        {
          "name": "PharmacyStore",
          "pk": "pharmacyId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "CentralWarehouse",
          "entity2": "PharmacyStore",
          "fromEntityName": "CentralWarehouse",
          "toEntityName": "PharmacyStore",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Сеть поставок фармацевтической продукции — центральный склад и розничные аптеки",
    "storyRu": "В сети поставок в сфере здравоохранения один центральный логистический склад (CentralWarehouse) пополняет запасы для десятков местных розничных аптек (PharmacyStore). Каждая аптека получает товар с одного центрального склада. Смоделируйте связь между CentralWarehouse (warehouseCode {PK}) и PharmacyStore (pharmacyId {PK}).",
    "instructionRu": "Соедините «CentralWarehouse» и «PharmacyStore», анализируя ограничения домена, чтобы определить правильную минимальную и максимальную кратность. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Начальник отдела логистики сельскохозяйственных поставок"
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Kamron Rustamov",
    "clientRole": "Marketplace Operatsiyalar Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Uzum Market Buyurtmalar Zanjiri (3 ta Entitiy)",
    "titleEn": "Uzum Market Order Pipeline (3 Entities)",
    "story": "Uzum Market platformasida mijoz (Customer) bir nechta buyurtmalar (Order) berishi mumkin. Har bir buyurtma esa aniq bitta to'lov kvitansiyasiga (Payment) ega bo'ladi. 'Customer', 'Order' va 'Payment' entitiylarini zanjirsimon bog'lang: Customer <-> Order va Order <-> Payment.",
    "storyEn": "On the Uzum Market platform, a customer (Customer) can place multiple orders (Order) over time. Each order is settled via exactly one recorded payment transaction (Payment). Connect 'Customer', 'Order', and 'Payment' sequentially: Customer <-> Order and Order <-> Payment.",
    "instruction": "'Customer' -> 'Order' va 'Order' -> 'Payment' aloqalarini chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Draw 'Customer' -> 'Order' and 'Order' -> 'Payment' relationships. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "customerId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "customerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "name",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Order",
          "isWeak": false,
          "isAssociative": false,
          "pk": "orderNo",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "orderDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Payment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "paymentId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "paymentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "payType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "status",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Customer",
          "entity2": "Order",
          "fromEntityName": "Customer",
          "toEntityName": "Order",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Order",
          "entity2": "Payment",
          "fromEntityName": "Order",
          "toEntityName": "Payment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "customerId",
          "isWeak": false
        },
        {
          "name": "Order",
          "pk": "orderNo",
          "isWeak": false
        },
        {
          "name": "Payment",
          "pk": "paymentId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "Order",
          "fromEntityName": "Customer",
          "toEntityName": "Order",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Order",
          "entity2": "Payment",
          "fromEntityName": "Order",
          "toEntityName": "Payment",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Трубопровод заказов на рынке Узум (3 объекта)",
    "storyRu": "На платформе Uzum Market клиент (Клиент) может размещать несколько заказов (Заказ) с течением времени. Каждый заказ обрабатывается ровно одной зарегистрированной платежной транзакцией (Платеж). Соедините «Клиент», «Заказ» и «Оплата» последовательно: Клиент <-> Заказ и Заказ <-> Оплата.",
    "instructionRu": "Нарисуйте связи «Клиент» -> «Заказ» и «Заказ» -> «Оплата». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель отдела рыночных операций"
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Bobur Tursunov",
    "clientRole": "Fintech Platforma Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Click / Payme Tranzaksiyalar Ekotizimi (3 ta Entitiy)",
    "titleEn": "Payme / Click Transactions Ecosystem (3 Entities)",
    "story": "Foydalanuvchi (User) o'z ilovasiga kamida bitta yoki bir nechta bank kartasini (BankCard) ulaydi. Har bir karta orqali esa ko'plab to'lov tranzaksiyalari (Transaction) bajariladi. 'User' -> 'BankCard' va 'BankCard' -> 'Transaction' aloqalarini o'rnating.",
    "storyEn": "A user (User) maintains at least one or several linked bank cards (BankCard) in their wallet. Through each card, multiple digital payment transactions (Transaction) are processed. Connect 'User' -> 'BankCard' and 'BankCard' -> 'Transaction'.",
    "instruction": "'User' ni 'BankCard' ga, 'BankCard' ni 'Transaction' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'User' to 'BankCard', and 'BankCard' to 'Transaction'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "isWeak": false,
          "isAssociative": false,
          "pk": "userId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "userId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "userName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BankCard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cardId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "cardId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "panMasked",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bankName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Transaction",
          "isWeak": false,
          "isAssociative": false,
          "pk": "txId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "txId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "amount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "timestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "User",
          "entity2": "BankCard",
          "fromEntityName": "User",
          "toEntityName": "BankCard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BankCard",
          "entity2": "Transaction",
          "fromEntityName": "BankCard",
          "toEntityName": "Transaction",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "User",
          "pk": "userId",
          "isWeak": false
        },
        {
          "name": "BankCard",
          "pk": "cardId",
          "isWeak": false
        },
        {
          "name": "Transaction",
          "pk": "txId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "User",
          "entity2": "BankCard",
          "fromEntityName": "User",
          "toEntityName": "BankCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BankCard",
          "entity2": "Transaction",
          "fromEntityName": "BankCard",
          "toEntityName": "Transaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Экосистема транзакций Payme/Click (3 объекта)",
    "storyRu": "Пользователь (Пользователь) имеет в своем кошельке как минимум одну или несколько привязанных банковских карт (BankCard). Посредством каждой карты обрабатываются несколько цифровых платежных транзакций (Транзакция). Подключите «Пользователь» -> «Банковская карта» и «Банковская карта» -> «Транзакция».",
    "instructionRu": "Подключите «Пользователь» к «BankCard», а «BankCard» к «Транзакция». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель финтех-платформы"
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Farrux Yusupov",
    "clientRole": "Taksi Agregator Muhandisi",
    "clientAvatar": "mentor",
    "title": "Yandex Go Safarlar Tizimi (3 ta Entitiy — Fan-In Bog'lanish)",
    "titleEn": "Yandex Go Ride Dispatch System (3 Entities — Fan-In)",
    "story": "Yandex Go tizimida markaziy ob'yekt — bu Safar (RideTrip). Yo'lovchi (Passenger) bir nechta safarlar buyurtma qilishi mumkin. Haydovchi (Driver) ham ko'plab safarlarni qabul qiladi. Har bir safarda esa 1 ta yo'lovchi va 1 ta haydovchi qatnashadi. 'Passenger' va 'Driver' entitiyalarining har ikkalasini 'RideTrip' ga ulang.",
    "storyEn": "In ride-hailing operations, the RideTrip entity is the central hub. A passenger (Passenger) requests multiple trips over time. A driver (Driver) accepts and completes many trips. Each trip involves exactly 1 passenger and 1 driver. Connect both 'Passenger' and 'Driver' into 'RideTrip'.",
    "instruction": "'Passenger' -> 'RideTrip' va 'Driver' -> 'RideTrip' aloqalarini chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Draw 'Passenger' -> 'RideTrip' and 'Driver' -> 'RideTrip' relationships. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Passenger",
          "isWeak": false,
          "isAssociative": false,
          "pk": "passengerId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "passengerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Driver",
          "isWeak": false,
          "isAssociative": false,
          "pk": "driverId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "driverId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RideTrip",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tripId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "tripId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fareAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tripDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Passenger",
          "entity2": "RideTrip",
          "fromEntityName": "Passenger",
          "toEntityName": "RideTrip",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Driver",
          "entity2": "RideTrip",
          "fromEntityName": "Driver",
          "toEntityName": "RideTrip",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Passenger",
          "pk": "passengerId",
          "isWeak": false
        },
        {
          "name": "Driver",
          "pk": "driverId",
          "isWeak": false
        },
        {
          "name": "RideTrip",
          "pk": "tripId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Passenger",
          "entity2": "RideTrip",
          "fromEntityName": "Passenger",
          "toEntityName": "RideTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Driver",
          "entity2": "RideTrip",
          "fromEntityName": "Driver",
          "toEntityName": "RideTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Система диспетчеризации Yandex Go Ride (3 объекта — Fan-In)",
    "storyRu": "В операциях по вызову пассажиров объект RideTrip является центральным узлом. Пассажир (Пассажир) запрашивает несколько поездок с течением времени. Водитель (Водитель) принимает и выполняет множество поездок. В каждой поездке участвует ровно 1 пассажир и 1 водитель. Подключите «Пассажир» и «Водитель» к «RideTrip».",
    "instructionRu": "Нарисуйте связи «Пассажир» -> «RideTrip» и «Водитель» -> «RideTrip». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Инженер-агрегатор такси"
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Nargiza Yo'ldosheva",
    "clientRole": "WIUT Akademik Menejeri",
    "clientAvatar": "mentor",
    "title": "WIUT Modul va Baholash Arxitekturasi (3 ta Entitiy)",
    "titleEn": "WIUT Module & Coursework Architecture (3 Entities)",
    "story": "Westminster universitetida har bir kafedra (Department) bir nechta fan-modullarni (Module) o'qitadi. Har bir modulda esa talabalar baholanadigan kamida 1 ta yoki bir nechta Coursework (Coursework, masalan CW1 va CW2) mavjud. 'Department' -> 'Module' -> 'Coursework' ierarxiyasini loyihalashtiring.",
    "storyEn": "At IT Akademiya university, each department (Department) delivers one or more academic modules (Module). Each module requires students to complete one or more coursework assignments (Coursework, e.g. CW1 and CW2). Design the hierarchical chain: 'Department' -> 'Module' -> 'Coursework'.",
    "instruction": "'Department' -> 'Module' va 'Module' -> 'Coursework' zanjirini bog'lang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Department' -> 'Module' and 'Module' -> 'Coursework'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Department",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Module",
          "isWeak": false,
          "isAssociative": false,
          "pk": "moduleCode",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "moduleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "credits",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Coursework",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cwId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "cwId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightPercent",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Department",
          "entity2": "Module",
          "fromEntityName": "Department",
          "toEntityName": "Module",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Module",
          "entity2": "Coursework",
          "fromEntityName": "Module",
          "toEntityName": "Coursework",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "deptCode",
          "isWeak": false
        },
        {
          "name": "Module",
          "pk": "moduleCode",
          "isWeak": false
        },
        {
          "name": "Coursework",
          "pk": "cwId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Department",
          "entity2": "Module",
          "fromEntityName": "Department",
          "toEntityName": "Module",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Module",
          "entity2": "Coursework",
          "fromEntityName": "Module",
          "toEntityName": "Coursework",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Модуль WIUT и архитектура курсовой работы (3 объекта)",
    "storyRu": "В университете «ИТ Академия» каждая кафедра (Кафедра) реализует один или несколько академических модулей (Модуль). Каждый модуль требует от студентов выполнения одного или нескольких курсовых заданий (курсовая работа, например CW1 и CW2). Постройте иерархическую цепочку: «Кафедра» -> «Модуль» -> «Курсовая работа».",
    "instructionRu": "Соедините «Кафедра» -> «Модуль» и «Модуль» -> «Курсовая работа». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Академический менеджер МВУТ"
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Farhod Karimov",
    "clientRole": "HR Bosh Maslahatchisi",
    "clientAvatar": "mentor",
    "title": "Korxona Departamentlari va Boshqaruv Rahbari (3 ta Entitiy)",
    "titleEn": "Enterprise Department & Unit Manager (3 Entities)",
    "story": "Kompaniyada (Company) bir nechta departamentlar (Department) faoliyat yuritadi. Har bir departamentni esa aniq 1 ta tayinlangan boshqaruvchi menejer (Manager) boshqaradi. 'Company' -> 'Department' va 'Department' -> 'Manager' aloqalarini o'rnating.",
    "storyEn": "A corporation (Company) is structured into several operating departments (Department). Each department is overseen by exactly one appointed unit manager (Manager). Establish 'Company' -> 'Department' and 'Department' -> 'Manager'.",
    "instruction": "'Company' ni 'Department' ga, 'Department' ni 'Manager' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Company' to 'Department', and 'Department' to 'Manager'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Company",
          "isWeak": false,
          "isAssociative": false,
          "pk": "companyRegNo",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "companyRegNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Department",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "deptId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Manager",
          "isWeak": false,
          "isAssociative": false,
          "pk": "managerId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "managerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "managerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "email",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Company",
          "entity2": "Department",
          "fromEntityName": "Company",
          "toEntityName": "Department",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Department",
          "entity2": "Manager",
          "fromEntityName": "Department",
          "toEntityName": "Manager",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Company",
          "pk": "companyRegNo",
          "isWeak": false
        },
        {
          "name": "Department",
          "pk": "deptId",
          "isWeak": false
        },
        {
          "name": "Manager",
          "pk": "managerId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Company",
          "entity2": "Department",
          "fromEntityName": "Company",
          "toEntityName": "Department",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Department",
          "entity2": "Manager",
          "fromEntityName": "Department",
          "toEntityName": "Manager",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Руководитель корпоративного отдела и подразделения (3 предприятия)",
    "storyRu": "Корпорация (Компания) состоит из нескольких операционных подразделений (Департамент). Каждый отдел контролируется ровно одним назначенным руководителем подразделения (менеджером). Создайте «Компанию» -> «Отдел» и «Отдел» -> «Менеджер».",
    "instructionRu": "Подключите «Компания» к «Отделу», а «Отдел» к «Менеджеру». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Главный юрисконсульт по кадрам"
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Dr. Nodira Rahimova",
    "clientRole": "Klinika Axborot Tizimi Rahbari",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bemor Qabuli va Tibbiy Karta (3 ta Entitiy)",
    "titleEn": "Hospital Inpatient Admissions & Medical Record (3 Entities)",
    "story": "Har bir bemorga (Patient) shifoxonada 1 ta elektron tibbiy karta (MedicalCard) ochiladi. Shifokor (Doctor) esa bir nechta bemorlarning tibbiy kartalarini nazorat qiladi. 'Patient' -> 'MedicalCard' va 'Doctor' -> 'MedicalCard' aloqalarini chizing.",
    "storyEn": "Each admitted patient (Patient) is issued exactly one official electronic medical record (MedicalCard). An attending doctor (Doctor) oversees multiple patient medical records. Connect 'Patient' -> 'MedicalCard' and 'Doctor' -> 'MedicalCard'.",
    "instruction": "'Patient' ni 'MedicalCard' ga, 'Doctor' ni 'MedicalCard' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Patient' to 'MedicalCard', and 'Doctor' to 'MedicalCard'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "doctorId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Patient",
          "isWeak": false,
          "isAssociative": false,
          "pk": "patientId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dob",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicalCard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cardNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "cardNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "diagnosis",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "openedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Patient",
          "entity2": "MedicalCard",
          "fromEntityName": "Patient",
          "toEntityName": "MedicalCard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Doctor",
          "entity2": "MedicalCard",
          "fromEntityName": "Doctor",
          "toEntityName": "MedicalCard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "doctorId",
          "isWeak": false
        },
        {
          "name": "Patient",
          "pk": "patientId",
          "isWeak": false
        },
        {
          "name": "MedicalCard",
          "pk": "cardNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Patient",
          "entity2": "MedicalCard",
          "fromEntityName": "Patient",
          "toEntityName": "MedicalCard",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Doctor",
          "entity2": "MedicalCard",
          "fromEntityName": "Doctor",
          "toEntityName": "MedicalCard",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Госпитализация и медицинская карта стационарных пациентов (3 субъекта)",
    "storyRu": "Каждому поступившему пациенту (Пациенту) выдается ровно одна официальная электронная медицинская карта (Медицинская карта). Лечащий врач (Доктор) наблюдает за медицинскими картами нескольких пациентов. Подключите «Пациент» -> «Медицинская карта» и «Врач» -> «Медицинская карта».",
    "instructionRu": "Подключите «Пациент» к «MedicalCard», а «Врач» к «MedicalCard». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель информационной системы клиники"
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Akmal Rahmonov",
    "clientRole": "Rent-a-Car Operatsion Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtomobil Ijarasi Tizimi (Rent-a-Car — 3 ta Entitiy)",
    "titleEn": "Car Rental Fleet Operations (Rent-a-Car — 3 Entities)",
    "story": "Avtomobil ijarasi xizmatida har bir filialda (Branch) bir nechta avtomobillar (RentalCar) mavjud. Har bir avtomobil esa bir nechta ijara shartnomalari (RentalContract) bo'yicha mijozlarga beriladi. 'Branch' -> 'RentalCar' va 'RentalCar' -> 'RentalContract' zanjirini bog'lang.",
    "storyEn": "In auto rental operations, each city branch (Branch) manages a fleet of multiple rental cars (RentalCar). Each car may be leased out under several rental contracts (RentalContract) over its lifecycle. Connect 'Branch' -> 'RentalCar' and 'RentalCar' -> 'RentalContract'.",
    "instruction": "'Branch' ni 'RentalCar' ga, 'RentalCar' ni 'RentalContract' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Branch' to 'RentalCar', and 'RentalCar' to 'RentalContract'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "branchId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RentalCar",
          "isWeak": false,
          "isAssociative": false,
          "pk": "carId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "carId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "model",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RentalContract",
          "isWeak": false,
          "isAssociative": false,
          "pk": "contractNo",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalCost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Branch",
          "entity2": "RentalCar",
          "fromEntityName": "Branch",
          "toEntityName": "RentalCar",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "RentalCar",
          "entity2": "RentalContract",
          "fromEntityName": "RentalCar",
          "toEntityName": "RentalContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "branchId",
          "isWeak": false
        },
        {
          "name": "RentalCar",
          "pk": "carId",
          "isWeak": false
        },
        {
          "name": "RentalContract",
          "pk": "contractNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Branch",
          "entity2": "RentalCar",
          "fromEntityName": "Branch",
          "toEntityName": "RentalCar",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "RentalCar",
          "entity2": "RentalContract",
          "fromEntityName": "RentalCar",
          "toEntityName": "RentalContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Операции по прокату автомобилей (Rent-a-Car — 3 предприятия)",
    "storyRu": "В сфере проката автомобилей каждый городской филиал (Филиал) управляет парком из нескольких арендованных автомобилей (RentalCar). Каждый автомобиль может быть сдан в аренду по нескольким договорам аренды (RentalContract) в течение его жизненного цикла. Подключите «Филиал» -> «RentalCar» и «RentalCar» -> «RentalContract».",
    "instructionRu": "Подключите «Branch» к «RentalCar», а «RentalCar» к «RentalContract». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Главный операционный директор компании Rent-a-Car"
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Oydin Mirvaliyeva",
    "clientRole": "Avia Bronlash Markazi Rahbari",
    "clientAvatar": "mentor",
    "title": "Aviabiletlar Bronlash Portali (3 ta Entitiy)",
    "titleEn": "Flight Booking Portal (3 Entities)",
    "story": "Aviatsiya portalida har bir reysga (Flight) ko'plab chipta bronlari (Booking) rasmiylashtiriladi. Yo'lovchi (Passenger) esa kamida bitta yoki bir nechta reysga bron ochadi. Har bir bron 1 ta yo'lovchi va 1 ta reysga tegishli. 'Flight' -> 'Booking' va 'Passenger' -> 'Booking' aloqalarini chizing.",
    "storyEn": "For every scheduled flight (Flight), hundreds of ticket reservations (Booking) are created. A frequent passenger (Passenger) opens one or multiple flight bookings. Each booking references 1 passenger and 1 flight. Connect 'Flight' -> 'Booking' and 'Passenger' -> 'Booking'.",
    "instruction": "'Flight' va 'Passenger' entitiyalarini 'Booking' ga ulang: Flight va Passenger. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect both 'Flight' and 'Passenger' to 'Booking': Flight and Passenger. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "isWeak": false,
          "isAssociative": false,
          "pk": "flightNo",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "origin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destination",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Passenger",
          "isWeak": false,
          "isAssociative": false,
          "pk": "passportNo",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nationality",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Booking",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bookingRef",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pricePaid",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Flight",
          "entity2": "Booking",
          "fromEntityName": "Flight",
          "toEntityName": "Booking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Passenger",
          "entity2": "Booking",
          "fromEntityName": "Passenger",
          "toEntityName": "Booking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Flight",
          "pk": "flightNo",
          "isWeak": false
        },
        {
          "name": "Passenger",
          "pk": "passportNo",
          "isWeak": false
        },
        {
          "name": "Booking",
          "pk": "bookingRef",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Flight",
          "entity2": "Booking",
          "fromEntityName": "Flight",
          "toEntityName": "Booking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Passenger",
          "entity2": "Booking",
          "fromEntityName": "Passenger",
          "toEntityName": "Booking",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Портал бронирования авиабилетов (3 объекта)",
    "storyRu": "На каждый регулярный рейс (Рейс) создаются сотни бронирований билетов (Букинг). Частый пассажир (Пассажир) открывает одно или несколько бронирований авиабилетов. В каждом бронировании указан 1 пассажир и 1 рейс. Подключите «Рейс» -> «Бронирование» и «Пассажир» -> «Бронирование».",
    "instructionRu": "Подключите «Рейс» и «Пассажир» к «Бронированию»: «Рейс» и «Пассажир». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Руководитель Центра бронирования авиакомпаний"
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Jahongir Qosimov",
    "clientRole": "Hotel Front-Office Menejeri",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Rezervatsiyalari (3 ta Entitiy)",
    "titleEn": "Hotel Room Reservations (3 Entities)",
    "story": "Mehmonxonada mehmon (Guest) bir nechta xona rezervatsiyalarini (Reservation) amalga oshirishi mumkin. Har bir xona (Room) esa turli vaqtlarda ko'plab rezervatsiyalarga xizmat ko'rsatadi. 'Guest' -> 'Reservation' va 'Room' -> 'Reservation' aloqalarini o'rnating.",
    "storyEn": "A registered guest (Guest) can make multiple room reservations (Reservation) across various stays. Each guest room (Room) serves numerous bookings throughout the year. Connect 'Guest' -> 'Reservation' and 'Room' -> 'Reservation'.",
    "instruction": "'Guest' ni 'Reservation' ga, 'Room' ni 'Reservation' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Guest' to 'Reservation', and 'Room' to 'Reservation'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Guest",
          "isWeak": false,
          "isAssociative": false,
          "pk": "guestId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "guestId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passport",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Room",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Reservation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "resNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "resNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "checkIn",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "checkOut",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Guest",
          "entity2": "Reservation",
          "fromEntityName": "Guest",
          "toEntityName": "Reservation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Room",
          "entity2": "Reservation",
          "fromEntityName": "Room",
          "toEntityName": "Reservation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Guest",
          "pk": "guestId",
          "isWeak": false
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "isWeak": false
        },
        {
          "name": "Reservation",
          "pk": "resNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Guest",
          "entity2": "Reservation",
          "fromEntityName": "Guest",
          "toEntityName": "Reservation",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Room",
          "entity2": "Reservation",
          "fromEntityName": "Room",
          "toEntityName": "Reservation",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Бронирование номеров в отеле (3 объекта)",
    "storyRu": "Зарегистрированный гость (Гость) может сделать несколько бронирований номеров (Резервирование) в течение разных периодов пребывания. Каждый номер (Номер) обслуживает многочисленные бронирования в течение года. Подключите «Гость» -> «Бронирование» и «Номер» -> «Бронирование».",
    "instructionRu": "Подключите «Гость» к «Бронирование», а «Номер» к «Бронирование». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Менеджер фронт-офиса отеля"
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sardor Olimov",
    "clientRole": "Scrum Master & Texnik Lider",
    "clientAvatar": "mentor",
    "title": "IT Mahsulot Loyihasi — Sprints & Tasks (3 ta Entitiy)",
    "titleEn": "IT Product Project — Sprints & Tasks (3 Entities)",
    "story": "IT dasturiy loyihasida (Project) bir nechta rivojlantirish sprintlari (Sprint) rejalashtiriladi. Har bir sprint tarkibida esa jamoa bajaradigan ko'plab vazifalar (IssueTask) mavjud. 'Project' -> 'Sprint' va 'Sprint' -> 'IssueTask' aloqalarini chizing.",
    "storyEn": "In software engineering, a project (Project) is organized into multiple development cycles (Sprint). Each sprint contains a backlog of work tasks (IssueTask) executed by developers. Connect 'Project' -> 'Sprint' and 'Sprint' -> 'IssueTask'.",
    "instruction": "'Project' ni 'Sprint' ga, 'Sprint' ni 'IssueTask' ga ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Project' to 'Sprint', and 'Sprint' to 'IssueTask'. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Project",
          "isWeak": false,
          "isAssociative": false,
          "pk": "projectKey",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "projectKey",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "projectName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Sprint",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sprintId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "sprintId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sprintGoal",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "endDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IssueTask",
          "isWeak": false,
          "isAssociative": false,
          "pk": "taskId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "taskId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taskTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storyPoints",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Project",
          "entity2": "Sprint",
          "fromEntityName": "Project",
          "toEntityName": "Sprint",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Sprint",
          "entity2": "IssueTask",
          "fromEntityName": "Sprint",
          "toEntityName": "IssueTask",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Project",
          "pk": "projectKey",
          "isWeak": false
        },
        {
          "name": "Sprint",
          "pk": "sprintId",
          "isWeak": false
        },
        {
          "name": "IssueTask",
          "pk": "taskId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Project",
          "entity2": "Sprint",
          "fromEntityName": "Project",
          "toEntityName": "Sprint",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Sprint",
          "entity2": "IssueTask",
          "fromEntityName": "Sprint",
          "toEntityName": "IssueTask",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Проект ИТ-продукта — спринты и задачи (3 объекта)",
    "storyRu": "В разработке программного обеспечения проект (Проект) состоит из нескольких циклов разработки (Спринт). Каждый спринт содержит невыполненные рабочие задачи (IssueTask), выполненные разработчиками. Подключите «Проект» -> «Спринт» и «Спринт» -> «IssueTask».",
    "instructionRu": "Подключите «Проект» к «Спринту», а «Спринт» к «IssueTask». Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Скрам-мастер и технический руководитель"
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Madina Shokirova",
    "clientRole": "Bank Kredit Departamenti Direktori",
    "clientAvatar": "mentor",
    "title": "Bank Kredit Portfeli (4 ta Entitiy!)",
    "titleEn": "Bank Loan Portfolio Management (4 Entities!)",
    "story": "Bank filialida (BankBranch) kredit mutaxassislari (LoanOfficer) ishlaydi. Har bir mutaxassis bir nechta kredit hisoblarini (LoanAccount) nazorat qiladi. Qarz oluvchi mijoz (Borrower) esa kamida bitta kreditga ega bo'ladi. 'BankBranch' -> 'LoanOfficer', 'LoanOfficer' -> 'LoanAccount' va 'Borrower' -> 'LoanAccount' to'rtta entitiyli modelni quring.",
    "storyEn": "At a commercial bank branch (BankBranch), several loan officers (LoanOfficer) evaluate credits. Each loan officer supervises multiple loan accounts (LoanAccount). A corporate or retail borrower (Borrower) holds at least one active loan account. Build the 4-entity model: 'BankBranch' -> 'LoanOfficer', 'LoanOfficer' -> 'LoanAccount', 'Borrower' -> 'LoanAccount'.",
    "instruction": "BankBranch -> LoanOfficer, LoanOfficer -> LoanAccount, Borrower -> LoanAccount aloqalarini chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Connect BankBranch -> LoanOfficer, LoanOfficer -> LoanAccount, Borrower -> LoanAccount. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "branchNo",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LoanOfficer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "officerId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "officerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "officerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LoanAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "loanId",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "loanId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "amount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "interestRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Borrower",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cifCode",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "cifCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "borrowerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "BankBranch",
          "entity2": "LoanOfficer",
          "fromEntityName": "BankBranch",
          "toEntityName": "LoanOfficer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "LoanOfficer",
          "entity2": "LoanAccount",
          "fromEntityName": "LoanOfficer",
          "toEntityName": "LoanAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "Borrower",
          "entity2": "LoanAccount",
          "fromEntityName": "Borrower",
          "toEntityName": "LoanAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "pk": "branchNo",
          "isWeak": false
        },
        {
          "name": "LoanOfficer",
          "pk": "officerId",
          "isWeak": false
        },
        {
          "name": "LoanAccount",
          "pk": "loanId",
          "isWeak": false
        },
        {
          "name": "Borrower",
          "pk": "cifCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BankBranch",
          "entity2": "LoanOfficer",
          "fromEntityName": "BankBranch",
          "toEntityName": "LoanOfficer",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "LoanOfficer",
          "entity2": "LoanAccount",
          "fromEntityName": "LoanOfficer",
          "toEntityName": "LoanAccount",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Borrower",
          "entity2": "LoanAccount",
          "fromEntityName": "Borrower",
          "toEntityName": "LoanAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Управление банковским кредитным портфелем (4 предприятия!)",
    "storyRu": "В филиале коммерческого банка (BankBranch) несколько кредитных специалистов (LoanOfficer) оценивают кредиты. Каждый кредитный специалист контролирует несколько кредитных счетов (LoanAccount). Корпоративный или розничный заемщик (Заемщик) имеет как минимум один активный кредитный счет. Постройте модель из четырех сущностей: «BankBranch» -> «LoanOfficer», «LoanOfficer» -> «LoanAccount», «Заемщик» -> «LoanAccount».",
    "instructionRu": "Подключить Отделение Банка -> Кредитный Офицер, Кредитный Офицер -> Кредитный Счет, Заемщик -> Кредитный Счет. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Директор кредитного департамента банка"
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Zafar Yoqubov",
    "clientRole": "Korzinka ERP Arxitektori",
    "clientAvatar": "mentor",
    "title": "Korzinka Savdo Kvitansiyasi (4 ta Entitiy!)",
    "titleEn": "Supermarket POS Checkout & Receipt (4 Entities!)",
    "story": "Supermarket tarmog'ida do'konda (Store) kassirlar (Cashier) ishlaydi. Kassir xarid cheklari (Receipt) chiqaradi. Xaridor (Customer) chekka ixtiyoriy ravishda bog'lanadi, chunki kartasiz mijozlar ham xarid qilishi mumkin. 'Store' -> 'Cashier', 'Cashier' -> 'Receipt' va 'Customer' -> 'Receipt' aloqalarini yarating.",
    "storyEn": "In retail POS operations, a store (Store) employs cashiers (Cashier) across checkout lanes. A cashier generates numerous receipts (Receipt). A loyalty customer (Customer) is optionally linked to a receipt, as anonymous unregistered purchases are also permitted. Connect Store -> Cashier, Cashier -> Receipt, Customer -> Receipt.",
    "instruction": "Store -> Cashier, Cashier -> Receipt, Customer -> Receipt aloqalarini ulang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect Store -> Cashier, Cashier -> Receipt, Customer -> Receipt. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Store",
          "isWeak": false,
          "isAssociative": false,
          "pk": "storeId",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "storeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Cashier",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cashierId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "cashierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cashierName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Receipt",
          "isWeak": false,
          "isAssociative": false,
          "pk": "receiptNo",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "receiptNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "payDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Customer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "loyaltyId",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "loyaltyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Store",
          "entity2": "Cashier",
          "fromEntityName": "Store",
          "toEntityName": "Cashier",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Cashier",
          "entity2": "Receipt",
          "fromEntityName": "Cashier",
          "toEntityName": "Receipt",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "Customer",
          "entity2": "Receipt",
          "fromEntityName": "Customer",
          "toEntityName": "Receipt",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Store",
          "pk": "storeId",
          "isWeak": false
        },
        {
          "name": "Cashier",
          "pk": "cashierId",
          "isWeak": false
        },
        {
          "name": "Receipt",
          "pk": "receiptNo",
          "isWeak": false
        },
        {
          "name": "Customer",
          "pk": "loyaltyId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Store",
          "entity2": "Cashier",
          "fromEntityName": "Store",
          "toEntityName": "Cashier",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Cashier",
          "entity2": "Receipt",
          "fromEntityName": "Cashier",
          "toEntityName": "Receipt",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Customer",
          "entity2": "Receipt",
          "fromEntityName": "Customer",
          "toEntityName": "Receipt",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Касса и квитанция в супермаркете (4 объекта!)",
    "storyRu": "В розничных POS-терминалах магазин (Store) нанимает кассиров (Cashier) на кассовых линиях. Кассир формирует многочисленные чеки (Квитанция). Клиент лояльности (Клиент) привязывается к чеку опционально, так как разрешены также анонимные незарегистрированные покупки. Подключить Магазин -> Кассир, Кассир -> Квитанция, Покупатель -> Квитанция.",
    "instructionRu": "Подключить Магазин -> Кассир, Кассир -> Квитанция, Покупатель -> Квитанция. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Корзина ERP-архитектор"
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sanjar Karimberdiyev",
    "clientRole": "Rieltorlik Bosh Agentligi",
    "clientAvatar": "mentor",
    "title": "Ko'chmas Mulk Savdosi (3 ta Entitiy — Ixtiyoriy Agent 0..1)",
    "titleEn": "Real Estate Listings (3 Entities — Optional Broker 0..1)",
    "story": "Mulk egasi (Owner) kamida 1 ta ko'chmas mulkka (Property) ega. Mulkni sotish esa ixtiyoriy ravishda 1 ta rieltor agentga (EstateAgent) topshirilishi mumkin. Agent bir nechta ob'yektlarni sotuvga chiqaradi. 'Owner' -> 'Property' va 'EstateAgent' -> 'Property' aloqalarini bog'lang.",
    "storyEn": "A property owner (Owner) owns at least one real estate parcel (Property). Selling a property can optionally be assigned to one licensed estate broker (EstateAgent). An agent manages multiple property listings. Connect Owner -> Property and EstateAgent -> Property.",
    "instruction": "Owner -> Property va EstateAgent -> Property aloqalarini chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Connect Owner -> Property and EstateAgent -> Property. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Owner",
          "isWeak": false,
          "isAssociative": false,
          "pk": "ownerId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "ownerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ownerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "EstateAgent",
          "isWeak": false,
          "isAssociative": false,
          "pk": "agentId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "agentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commission",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Property",
          "isWeak": false,
          "isAssociative": false,
          "pk": "propertyNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "propertyNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Owner",
          "entity2": "Property",
          "fromEntityName": "Owner",
          "toEntityName": "Property",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "EstateAgent",
          "entity2": "Property",
          "fromEntityName": "EstateAgent",
          "toEntityName": "Property",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Owner",
          "pk": "ownerId",
          "isWeak": false
        },
        {
          "name": "EstateAgent",
          "pk": "agentId",
          "isWeak": false
        },
        {
          "name": "Property",
          "pk": "propertyNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Owner",
          "entity2": "Property",
          "fromEntityName": "Owner",
          "toEntityName": "Property",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "EstateAgent",
          "entity2": "Property",
          "fromEntityName": "EstateAgent",
          "toEntityName": "Property",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Объявления о недвижимости (3 предприятия — дополнительный брокер 0..1)",
    "storyRu": "Собственник недвижимости (Владелец) владеет как минимум одним участком недвижимости (Объект недвижимости). При желании продажу недвижимости можно поручить одному лицензированному брокеру по недвижимости (EstateAgent). Агент управляет несколькими списками объектов недвижимости. Подключите владельца -> Недвижимость и EstateAgent -> Недвижимость.",
    "instructionRu": "Подключите владельца -> Недвижимость и EstateAgent -> Недвижимость. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Генеральное Риэлторское Агентство"
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Gavhar Mahmudova",
    "clientRole": "Kutubxona Tizim Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Universitet Kutubxonasi Abonementi (3 ta Entitiy)",
    "titleEn": "University Library Book Loans (3 Entities)",
    "story": "Talaba (Student) kutubxonadan kitob olishi (BookLoan) mumkin. Har bir aniq kitob nusxasi (BookCopy) ham vaqti-vaqti bilan ijaraga beriladi. Har bir ijara kvitansiyasi 1 ta talaba va 1 ta kitob nusxasiga tegishli. 'Student' -> 'BookLoan' va 'BookCopy' -> 'BookLoan' aloqalarini chizing.",
    "storyEn": "A student (Student) may borrow books from the campus library under book loans (BookLoan). Each physical book copy (BookCopy, with unique barcode) is loaned out over time. Each loan record binds 1 student and 1 physical copy. Connect Student -> BookLoan and BookCopy -> BookLoan.",
    "instruction": "Student -> BookLoan va BookCopy -> BookLoan bog'lanishlarini o'rnating. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Connect Student -> BookLoan and BookCopy -> BookLoan. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "isAssociative": false,
          "pk": "studentId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "faculty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookCopy",
          "isWeak": false,
          "isAssociative": false,
          "pk": "barcode",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "barcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "editionYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shelfLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookLoan",
          "isWeak": false,
          "isAssociative": false,
          "pk": "loanId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "loanId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "returnDue",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Student",
          "entity2": "BookLoan",
          "fromEntityName": "Student",
          "toEntityName": "BookLoan",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BookCopy",
          "entity2": "BookLoan",
          "fromEntityName": "BookCopy",
          "toEntityName": "BookLoan",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId",
          "isWeak": false
        },
        {
          "name": "BookCopy",
          "pk": "barcode",
          "isWeak": false
        },
        {
          "name": "BookLoan",
          "pk": "loanId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "BookLoan",
          "fromEntityName": "Student",
          "toEntityName": "BookLoan",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BookCopy",
          "entity2": "BookLoan",
          "fromEntityName": "BookCopy",
          "toEntityName": "BookLoan",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Абонентство книг в университетской библиотеке (3 организации)",
    "storyRu": "Студент (Студент) может брать книги в библиотеке кампуса в рамках книжного кредита (BookLoan). Каждый физический экземпляр книги (BookCopy с уникальным штрих-кодом) выдается в аренду с течением времени. Каждая запись о кредите связана с 1 студентом и 1 физической копией. Подключите Student -> BookLoan и BookCopy -> BookLoan.",
    "instructionRu": "Подключите Student -> BookLoan и BookCopy -> BookLoan. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Администратор библиотечной системы"
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Ulug'bek Nazarov",
    "clientRole": "Xalqaro Logistika Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Logistika va Yetkazib Berish Zanjiri (4 ta Entitiy!)",
    "titleEn": "Freight Logistics & Delivery Network (4 Entities!)",
    "story": "Markaziy logistika omboriga (Warehouse) bir nechta yuk mashinalari (CargoTruck) biriktiriladi. Har bir yuk mashinasiga aniq 1 ta shtatdagi haydovchi (Driver) javobgar. Yuk mashinasi esa bir nechta marshrut reyslarini (DeliveryRoute) bajaradi. 'Warehouse' -> 'CargoTruck', 'CargoTruck' -> 'Driver' va 'CargoTruck' -> 'DeliveryRoute' to'rtta entitiyli tizimni quring.",
    "storyEn": "At a central logistics terminal (Warehouse), a fleet of cargo trucks (CargoTruck) is stationed. Each truck is operated by exactly one assigned professional driver (Driver). Each truck operates multiple scheduled delivery routes (DeliveryRoute). Build the 4-entity freight architecture: Warehouse -> CargoTruck, CargoTruck -> Driver, CargoTruck -> DeliveryRoute.",
    "instruction": "Warehouse -> CargoTruck, CargoTruck -> Driver, CargoTruck -> DeliveryRoute aloqalarini chizing. Entitiylarni o'zaro bog'lang va multiplisitiya chegaralarini belgilang.",
    "instructionEn": "Connect Warehouse -> CargoTruck, CargoTruck -> Driver, CargoTruck -> DeliveryRoute. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "whCode",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "whCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "whName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CargoTruck",
          "isWeak": false,
          "isAssociative": false,
          "pk": "truckId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "truckId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "plateNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Driver",
          "isWeak": false,
          "isAssociative": false,
          "pk": "licenseNo",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "driverName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DeliveryRoute",
          "isWeak": false,
          "isAssociative": false,
          "pk": "routeId",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "routeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "routeDestination",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Warehouse",
          "entity2": "CargoTruck",
          "fromEntityName": "Warehouse",
          "toEntityName": "CargoTruck",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "CargoTruck",
          "entity2": "Driver",
          "fromEntityName": "CargoTruck",
          "toEntityName": "Driver",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CargoTruck",
          "entity2": "DeliveryRoute",
          "fromEntityName": "CargoTruck",
          "toEntityName": "DeliveryRoute",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "pk": "whCode",
          "isWeak": false
        },
        {
          "name": "CargoTruck",
          "pk": "truckId",
          "isWeak": false
        },
        {
          "name": "Driver",
          "pk": "licenseNo",
          "isWeak": false
        },
        {
          "name": "DeliveryRoute",
          "pk": "routeId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Warehouse",
          "entity2": "CargoTruck",
          "fromEntityName": "Warehouse",
          "toEntityName": "CargoTruck",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CargoTruck",
          "entity2": "Driver",
          "fromEntityName": "CargoTruck",
          "toEntityName": "Driver",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CargoTruck",
          "entity2": "DeliveryRoute",
          "fromEntityName": "CargoTruck",
          "toEntityName": "DeliveryRoute",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Грузовая логистика и сеть доставки (4 предприятия!)",
    "storyRu": "На центральном логистическом терминале (Склад) размещен парк грузовых автомобилей (CargoTruck). Каждым грузовиком управляет ровно один назначенный профессиональный водитель (Водитель). Каждый грузовик обслуживает несколько запланированных маршрутов доставки (DeliveryRoute). Создайте грузовую архитектуру из четырех объектов: Склад -> Грузовой автомобиль, Грузовой автомобиль -> Водитель, Грузовой автомобиль -> Маршрут доставки.",
    "instructionRu": "Подключить Склад -> Грузовик, Грузовик -> Водитель, Грузовик -> Маршрут доставки. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Главный инженер международной логистики"
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Mehmonxona va Xonalar (Zaif Entitiy)",
    "titleEn": "Hotel & Guest Rooms (Weak Entity)",
    "story": "'HotelRoom' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Hotel' (hotelId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'roomNo' {PPK} hisoblanadi. 'Hotel' va 'HotelRoom' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'HotelRoom' is a weak entity that cannot exist independently without its parent entity 'Hotel' (hotelId {PK}). Its key is the partial key 'roomNo' {PPK}. Model the identifying relationship between 'Hotel' and 'HotelRoom'.",
    "instruction": "'Hotel' va zaif 'HotelRoom' entitiylarini identifikatsion aloqa bilan bog'lang. 'HotelRoom' entitiyida 'Zaif {W}' rejimini yoqing va 'roomNo' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Hotel' and weak 'HotelRoom' via an identifying relationship. Toggle 'Weak {W}' on 'HotelRoom' and designate 'roomNo' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hotelId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hotelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HotelRoom",
          "isWeak": true,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "roomType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Hotel",
          "entity2": "HotelRoom",
          "fromEntityName": "Hotel",
          "toEntityName": "HotelRoom",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId",
          "isWeak": false
        },
        {
          "name": "HotelRoom",
          "pk": "roomNo",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "HotelRoom",
          "fromEntityName": "Hotel",
          "toEntityName": "HotelRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Отель и номера (слабая организация)",
    "storyRu": "«HotelRoom» — это слабая сущность, которая не может существовать независимо без родительской сущности «Отель» (hotelId {PK}). Его ключом является частичный ключ «roomNo» {PPK}. Смоделируйте идентифицирующие отношения между «Отель» и «Номер в отеле».",
    "instructionRu": "Соедините «Отель» и слабый «Номер в отеле» посредством идентифицирующей связи. Переключите «Weak {W}» в «HotelRoom» и назначьте «roomNo» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Buyurtma va Buyurtma Qatorlari (OrderItem)",
    "titleEn": "Order & Line Items (OrderItem)",
    "story": "'OrderItem' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Order' (orderNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'itemSeq' {PPK} hisoblanadi. 'Order' va 'OrderItem' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'OrderItem' is a weak entity that cannot exist independently without its parent entity 'Order' (orderNo {PK}). Its key is the partial key 'itemSeq' {PPK}. Model the identifying relationship between 'Order' and 'OrderItem'.",
    "instruction": "'Order' va zaif 'OrderItem' entitiylarini identifikatsion aloqa bilan bog'lang. 'OrderItem' entitiyida 'Zaif {W}' rejimini yoqing va 'itemSeq' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Order' and weak 'OrderItem' via an identifying relationship. Toggle 'Weak {W}' on 'OrderItem' and designate 'itemSeq' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Order",
          "isWeak": false,
          "isAssociative": false,
          "pk": "orderNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "orderDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OrderItem",
          "isWeak": true,
          "isAssociative": false,
          "pk": "itemSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "itemSeq",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "qty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Order",
          "entity2": "OrderItem",
          "fromEntityName": "Order",
          "toEntityName": "OrderItem",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Order",
          "pk": "orderNo",
          "isWeak": false
        },
        {
          "name": "OrderItem",
          "pk": "itemSeq",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Order",
          "entity2": "OrderItem",
          "fromEntityName": "Order",
          "toEntityName": "OrderItem",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Заказ и позиции (OrderItem)",
    "storyRu": "«OrderItem» — это слабая сущность, которая не может существовать независимо без родительской сущности «Заказ» (orderNo {PK}). Его ключом является частичный ключ itemSeq {PPK}. Смоделируйте идентифицирующие отношения между Order и OrderItem.",
    "instructionRu": "Соедините «Order» и слабый «OrderItem» посредством идентифицирующей связи. Переключите «Weak {W}» на «OrderItem» и назначьте «itemSeq» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Bino va Qavatlar (Zaif Bog'liqlik)",
    "titleEn": "Building & Floors (Weak Composition)",
    "story": "'Floor' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Building' (buildingCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'floorNo' {PPK} hisoblanadi. 'Building' va 'Floor' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'Floor' is a weak entity that cannot exist independently without its parent entity 'Building' (buildingCode {PK}). Its key is the partial key 'floorNo' {PPK}. Model the identifying relationship between 'Building' and 'Floor'.",
    "instruction": "'Building' va zaif 'Floor' entitiylarini identifikatsion aloqa bilan bog'lang. 'Floor' entitiyida 'Zaif {W}' rejimini yoqing va 'floorNo' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Building' and weak 'Floor' via an identifying relationship. Toggle 'Weak {W}' on 'Floor' and designate 'floorNo' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "isWeak": false,
          "isAssociative": false,
          "pk": "buildingCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "buildingCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Floor",
          "isWeak": true,
          "isAssociative": false,
          "pk": "floorNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "floorNo",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "areaSqM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Building",
          "entity2": "Floor",
          "fromEntityName": "Building",
          "toEntityName": "Floor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Building",
          "pk": "buildingCode",
          "isWeak": false
        },
        {
          "name": "Floor",
          "pk": "floorNo",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Building",
          "entity2": "Floor",
          "fromEntityName": "Building",
          "toEntityName": "Floor",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Здание и полы (слабый состав)",
    "storyRu": "«Этаж» — это слабый объект, который не может существовать независимо без родительского объекта «Здание» (buildingCode {PK}). Его ключом является частичный ключ «floorNo» {PPK}. Смоделируйте идентифицирующие отношения между «Зданием» и «Этажем».",
    "instructionRu": "Соедините «Здание» и слабый «Этаж» посредством идентифицирующей связи. Переключите «Слабый {W}» на «Этаж» и назначьте «Номер этажа» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Xodim va Qaramog'idagilar (Dependent)",
    "titleEn": "Employee & Family Dependents",
    "story": "'Dependent' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Employee' (empId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'depName' {PPK} hisoblanadi. 'Employee' va 'Dependent' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'Dependent' is a weak entity that cannot exist independently without its parent entity 'Employee' (empId {PK}). Its key is the partial key 'depName' {PPK}. Model the identifying relationship between 'Employee' and 'Dependent'.",
    "instruction": "'Employee' va zaif 'Dependent' entitiylarini identifikatsion aloqa bilan bog'lang. 'Dependent' entitiyida 'Zaif {W}' rejimini yoqing va 'depName' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Employee' and weak 'Dependent' via an identifying relationship. Toggle 'Weak {W}' on 'Dependent' and designate 'depName' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "isAssociative": false,
          "pk": "empId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "empId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Dependent",
          "isWeak": true,
          "isAssociative": false,
          "pk": "depName",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "depName",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "relationship",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Employee",
          "entity2": "Dependent",
          "fromEntityName": "Employee",
          "toEntityName": "Dependent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "isWeak": false
        },
        {
          "name": "Dependent",
          "pk": "depName",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Dependent",
          "fromEntityName": "Employee",
          "toEntityName": "Dependent",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Сотрудники и члены их семей",
    "storyRu": "«Зависимый» — это слабая сущность, которая не может существовать независимо без родительской сущности «Сотрудник» (empId {PK}). Его ключом является частичный ключ «depName» {PPK}. Смоделируйте идентифицирующие отношения между «Сотрудником» и «Зависимым».",
    "instructionRu": "Соедините «Сотрудник» и слабый «Зависимый» посредством идентифицирующих отношений. Переключите «Слабый {W}» на «Зависимый» и назначьте «depName» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Bank Hisob va Oylik Ko'chirmalar",
    "titleEn": "Bank Account & Monthly Statements",
    "story": "'AccountStatement' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'BankAccount' (accountNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'statementSeq' {PPK} hisoblanadi. 'BankAccount' va 'AccountStatement' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'AccountStatement' is a weak entity that cannot exist independently without its parent entity 'BankAccount' (accountNo {PK}). Its key is the partial key 'statementSeq' {PPK}. Model the identifying relationship between 'BankAccount' and 'AccountStatement'.",
    "instruction": "'BankAccount' va zaif 'AccountStatement' entitiylarini identifikatsion aloqa bilan bog'lang. 'AccountStatement' entitiyida 'Zaif {W}' rejimini yoqing va 'statementSeq' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'BankAccount' and weak 'AccountStatement' via an identifying relationship. Toggle 'Weak {W}' on 'AccountStatement' and designate 'statementSeq' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accountNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "currency",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AccountStatement",
          "isWeak": true,
          "isAssociative": false,
          "pk": "statementSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "statementSeq",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "statementMonth",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalInflow",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "BankAccount",
          "entity2": "AccountStatement",
          "fromEntityName": "BankAccount",
          "toEntityName": "AccountStatement",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "pk": "accountNo",
          "isWeak": false
        },
        {
          "name": "AccountStatement",
          "pk": "statementSeq",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "BankAccount",
          "entity2": "AccountStatement",
          "fromEntityName": "BankAccount",
          "toEntityName": "AccountStatement",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Банковский счет и ежемесячные отчеты",
    "storyRu": "«AccountStatement» — это слабая сущность, которая не может существовать независимо без родительской сущности «BankAccount» (accountNo {PK}). Его ключом является частичный ключ «statementSeq» {PPK}. Смоделируйте идентифицирующие отношения между BankAccount и AccountStatement.",
    "instructionRu": "Соедините BankAccount и слабый AccountStatement посредством идентифицирующей связи. Переключите «Weak {W}» в «AccountStatement» и назначьте «statementSeq» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Aviaqatnov va Parvoz Bosqichlari (FlightLeg)",
    "titleEn": "Flight & Flight Legs (FlightLeg)",
    "story": "'FlightLeg' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Flight' (flightNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'legNumber' {PPK} hisoblanadi. 'Flight' va 'FlightLeg' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'FlightLeg' is a weak entity that cannot exist independently without its parent entity 'Flight' (flightNo {PK}). Its key is the partial key 'legNumber' {PPK}. Model the identifying relationship between 'Flight' and 'FlightLeg'.",
    "instruction": "'Flight' va zaif 'FlightLeg' entitiylarini identifikatsion aloqa bilan bog'lang. 'FlightLeg' entitiyida 'Zaif {W}' rejimini yoqing va 'legNumber' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Flight' and weak 'FlightLeg' via an identifying relationship. Toggle 'Weak {W}' on 'FlightLeg' and designate 'legNumber' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "isWeak": false,
          "isAssociative": false,
          "pk": "flightNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "airlineCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightLeg",
          "isWeak": true,
          "isAssociative": false,
          "pk": "legNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "legNumber",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "originAir",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destAir",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Flight",
          "entity2": "FlightLeg",
          "fromEntityName": "Flight",
          "toEntityName": "FlightLeg",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Flight",
          "pk": "flightNo",
          "isWeak": false
        },
        {
          "name": "FlightLeg",
          "pk": "legNumber",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Flight",
          "entity2": "FlightLeg",
          "fromEntityName": "Flight",
          "toEntityName": "FlightLeg",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Полетные и полетные ноги (FlightLeg)",
    "storyRu": "«FlightLeg» — это слабая сущность, которая не может существовать независимо без родительской сущности «Flight» (flightNo {PK}). Его ключом является частичный ключ «legNumber» {PPK}. Смоделируйте идентифицирующие отношения между «Flight» и «FlightLeg».",
    "instructionRu": "Соедините «Flight» и слабый «FlightLeg» идентифицирующим отношением. Переключите «Weak {W}» на «FlightLeg» и назначьте «legNumber» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Shifoxona Palatasi va Yotoq O'rinlari",
    "titleEn": "Hospital Ward & Patient Beds",
    "story": "'WardBed' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'HospitalWard' (wardCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'bedNumber' {PPK} hisoblanadi. 'HospitalWard' va 'WardBed' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'WardBed' is a weak entity that cannot exist independently without its parent entity 'HospitalWard' (wardCode {PK}). Its key is the partial key 'bedNumber' {PPK}. Model the identifying relationship between 'HospitalWard' and 'WardBed'.",
    "instruction": "'HospitalWard' va zaif 'WardBed' entitiylarini identifikatsion aloqa bilan bog'lang. 'WardBed' entitiyida 'Zaif {W}' rejimini yoqing va 'bedNumber' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'HospitalWard' and weak 'WardBed' via an identifying relationship. Toggle 'Weak {W}' on 'WardBed' and designate 'bedNumber' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "wardCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "wardCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorLevel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "WardBed",
          "isWeak": true,
          "isAssociative": false,
          "pk": "bedNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "bedNumber",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "isOccupied",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bedType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "HospitalWard",
          "entity2": "WardBed",
          "fromEntityName": "HospitalWard",
          "toEntityName": "WardBed",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "pk": "wardCode",
          "isWeak": false
        },
        {
          "name": "WardBed",
          "pk": "bedNumber",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalWard",
          "entity2": "WardBed",
          "fromEntityName": "HospitalWard",
          "toEntityName": "WardBed",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Больничные палаты и койки для пациентов",
    "storyRu": "«WardBed» — это слабая сущность, которая не может существовать независимо без родительской сущности «HospitalWard» (wardCode {PK}). Его ключом является частичный ключ «bedNumber» {PPK}. Смоделируйте идентифицирующие отношения между «HospitalWard» и «WardBed».",
    "instructionRu": "Соедините «HospitalWard» и слабый «WardBed» посредством идентифицирующей связи. Переключите «Слабый {W}» на «WardBed» и назначьте «bedNumber» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Kitob va Boblar Tuzilmasi (BookChapter)",
    "titleEn": "Book & Chapters Structure (BookChapter)",
    "story": "'BookChapter' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'PublishingBook' (bookIsbn {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'chapterNo' {PPK} hisoblanadi. 'PublishingBook' va 'BookChapter' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'BookChapter' is a weak entity that cannot exist independently without its parent entity 'PublishingBook' (bookIsbn {PK}). Its key is the partial key 'chapterNo' {PPK}. Model the identifying relationship between 'PublishingBook' and 'BookChapter'.",
    "instruction": "'PublishingBook' va zaif 'BookChapter' entitiylarini identifikatsion aloqa bilan bog'lang. 'BookChapter' entitiyida 'Zaif {W}' rejimini yoqing va 'chapterNo' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'PublishingBook' and weak 'BookChapter' via an identifying relationship. Toggle 'Weak {W}' on 'BookChapter' and designate 'chapterNo' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PublishingBook",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bookIsbn",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "bookIsbn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bookTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookChapter",
          "isWeak": true,
          "isAssociative": false,
          "pk": "chapterNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "chapterNo",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "chapterTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pageCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "PublishingBook",
          "entity2": "BookChapter",
          "fromEntityName": "PublishingBook",
          "toEntityName": "BookChapter",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PublishingBook",
          "pk": "bookIsbn",
          "isWeak": false
        },
        {
          "name": "BookChapter",
          "pk": "chapterNo",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "PublishingBook",
          "entity2": "BookChapter",
          "fromEntityName": "PublishingBook",
          "toEntityName": "BookChapter",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Структура книги и глав (BookChapter)",
    "storyRu": "«BookChapter» — слабая сущность, которая не может существовать независимо без родительской сущности «PublishingBook» (bookIsbn {PK}). Его ключом является частичный ключ «номер главы» {PPK}. Смоделируйте идентифицирующие отношения между «PublishingBook» и «BookChapter».",
    "instructionRu": "Соедините «PublishingBook» и слабый «BookChapter» посредством идентифицирующей связи. Переключите «Weak {W}» на «BookChapter» и назначьте «chapterNo» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Konteyner Kemasi va Yuk Bo'limlari",
    "titleEn": "Cargo Ship & Container Slots",
    "story": "'CargoContainer' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'CargoShip' (shipImo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'containerSlot' {PPK} hisoblanadi. 'CargoShip' va 'CargoContainer' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'CargoContainer' is a weak entity that cannot exist independently without its parent entity 'CargoShip' (shipImo {PK}). Its key is the partial key 'containerSlot' {PPK}. Model the identifying relationship between 'CargoShip' and 'CargoContainer'.",
    "instruction": "'CargoShip' va zaif 'CargoContainer' entitiylarini identifikatsion aloqa bilan bog'lang. 'CargoContainer' entitiyida 'Zaif {W}' rejimini yoqing va 'containerSlot' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'CargoShip' and weak 'CargoContainer' via an identifying relationship. Toggle 'Weak {W}' on 'CargoContainer' and designate 'containerSlot' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CargoShip",
          "isWeak": false,
          "isAssociative": false,
          "pk": "shipImo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "shipImo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shipName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CargoContainer",
          "isWeak": true,
          "isAssociative": false,
          "pk": "containerSlot",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "containerSlot",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "cargoType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "CargoShip",
          "entity2": "CargoContainer",
          "fromEntityName": "CargoShip",
          "toEntityName": "CargoContainer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CargoShip",
          "pk": "shipImo",
          "isWeak": false
        },
        {
          "name": "CargoContainer",
          "pk": "containerSlot",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "CargoShip",
          "entity2": "CargoContainer",
          "fromEntityName": "CargoShip",
          "toEntityName": "CargoContainer",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Слоты для грузовых кораблей и контейнеров",
    "storyRu": "«Грузовой контейнер» — это слабая сущность, которая не может существовать независимо без родительской сущности «Грузовое судно» (shipImo {PK}). Его ключом является частичный ключ ContainerSlot {PPK}. Смоделируйте идентифицирующие отношения между «CargoShip» и «CargoContainer».",
    "instructionRu": "Соедините «CargoShip» и слабый «CargoContainer» посредством идентифицирующих отношений. Переключите «Weak {W}» на «CargoContainer» и назначьте «ContainerSlot» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Universitet Fani va Guruh Potoklari",
    "titleEn": "University Course & Class Sections",
    "story": "'CourseSection' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'UniversityCourse' (courseCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sectionCode' {PPK} hisoblanadi. 'UniversityCourse' va 'CourseSection' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'CourseSection' is a weak entity that cannot exist independently without its parent entity 'UniversityCourse' (courseCode {PK}). Its key is the partial key 'sectionCode' {PPK}. Model the identifying relationship between 'UniversityCourse' and 'CourseSection'.",
    "instruction": "'UniversityCourse' va zaif 'CourseSection' entitiylarini identifikatsion aloqa bilan bog'lang. 'CourseSection' entitiyida 'Zaif {W}' rejimini yoqing va 'sectionCode' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'UniversityCourse' and weak 'CourseSection' via an identifying relationship. Toggle 'Weak {W}' on 'CourseSection' and designate 'sectionCode' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courseName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CourseSection",
          "isWeak": true,
          "isAssociative": false,
          "pk": "sectionCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sectionCode",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "semester",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxStudents",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "UniversityCourse",
          "entity2": "CourseSection",
          "fromEntityName": "UniversityCourse",
          "toEntityName": "CourseSection",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UniversityCourse",
          "pk": "courseCode",
          "isWeak": false
        },
        {
          "name": "CourseSection",
          "pk": "sectionCode",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "UniversityCourse",
          "entity2": "CourseSection",
          "fromEntityName": "UniversityCourse",
          "toEntityName": "CourseSection",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Разделы университетских курсов и занятий",
    "storyRu": "«CourseSection» — это слабая сущность, которая не может существовать независимо без родительской сущности «UniversityCourse» (courseCode {PK}). Его ключом является частичный ключ «sectionCode» {PPK}. Смоделируйте идентифицирующие отношения между «UniversityCourse» и «CourseSection».",
    "instructionRu": "Соедините «UniversityCourse» и слабый «CourseSection» посредством идентифицирующей связи. Переключите «Weak {W}» на «CourseSection» и назначьте «sectionCode» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Dori Retsepti va Qabul Qilish Dozalari",
    "titleEn": "Prescription & Dosage Schedule",
    "story": "'DoseSchedule' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Prescription' (rxId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'doseIndex' {PPK} hisoblanadi. 'Prescription' va 'DoseSchedule' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'DoseSchedule' is a weak entity that cannot exist independently without its parent entity 'Prescription' (rxId {PK}). Its key is the partial key 'doseIndex' {PPK}. Model the identifying relationship between 'Prescription' and 'DoseSchedule'.",
    "instruction": "'Prescription' va zaif 'DoseSchedule' entitiylarini identifikatsion aloqa bilan bog'lang. 'DoseSchedule' entitiyida 'Zaif {W}' rejimini yoqing va 'doseIndex' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Prescription' and weak 'DoseSchedule' via an identifying relationship. Toggle 'Weak {W}' on 'DoseSchedule' and designate 'doseIndex' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Prescription",
          "isWeak": false,
          "isAssociative": false,
          "pk": "rxId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "rxId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "prescribedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DoseSchedule",
          "isWeak": true,
          "isAssociative": false,
          "pk": "doseIndex",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "doseIndex",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "timeOfDay",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doseAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Prescription",
          "entity2": "DoseSchedule",
          "fromEntityName": "Prescription",
          "toEntityName": "DoseSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Prescription",
          "pk": "rxId",
          "isWeak": false
        },
        {
          "name": "DoseSchedule",
          "pk": "doseIndex",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Prescription",
          "entity2": "DoseSchedule",
          "fromEntityName": "Prescription",
          "toEntityName": "DoseSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Рецепт и график дозировки",
    "storyRu": "«DoseSchedule» — это слабая сущность, которая не может существовать независимо без родительской сущности «Рецепт» (rxId {PK}). Его ключом является частичный ключ «doseIndex» {PPK}. Смоделируйте идентифицирующие отношения между «Рецептом» и «Расписанием доз».",
    "instructionRu": "Соедините «Рецепт» и слабый «Расписание доз» посредством идентифицирующей связи. Переключите «Слабый {W}» в «DoseSchedule» и назначьте «doseIndex» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Ombor Yo'lagi va Saqlash Yacheykalari",
    "titleEn": "Warehouse Aisle & Storage Bins",
    "story": "'StorageBin' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'WarehouseAisle' (aisleCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'binNumber' {PPK} hisoblanadi. 'WarehouseAisle' va 'StorageBin' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'StorageBin' is a weak entity that cannot exist independently without its parent entity 'WarehouseAisle' (aisleCode {PK}). Its key is the partial key 'binNumber' {PPK}. Model the identifying relationship between 'WarehouseAisle' and 'StorageBin'.",
    "instruction": "'WarehouseAisle' va zaif 'StorageBin' entitiylarini identifikatsion aloqa bilan bog'lang. 'StorageBin' entitiyida 'Zaif {W}' rejimini yoqing va 'binNumber' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'WarehouseAisle' and weak 'StorageBin' via an identifying relationship. Toggle 'Weak {W}' on 'StorageBin' and designate 'binNumber' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "WarehouseAisle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "aisleCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "aisleCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "zoneCategory",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StorageBin",
          "isWeak": true,
          "isAssociative": false,
          "pk": "binNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "binNumber",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "shelfTier",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "WarehouseAisle",
          "entity2": "StorageBin",
          "fromEntityName": "WarehouseAisle",
          "toEntityName": "StorageBin",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "WarehouseAisle",
          "pk": "aisleCode",
          "isWeak": false
        },
        {
          "name": "StorageBin",
          "pk": "binNumber",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "WarehouseAisle",
          "entity2": "StorageBin",
          "fromEntityName": "WarehouseAisle",
          "toEntityName": "StorageBin",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Складские проходы и контейнеры для хранения",
    "storyRu": "«StorageBin» — это слабая сущность, которая не может существовать независимо без родительской сущности «WarehouseAisle» (aisleCode {PK}). Его ключом является частичный ключ «binNumber» {PPK}. Смоделируйте идентифицирующие отношения между «WarehouseAisle» и «StorageBin».",
    "instructionRu": "Соедините «WarehouseAisle» и слабый «StorageBin» посредством идентифицирующей связи. Переключите «Weak {W}» на «StorageBin» и назначьте «binNumber» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Dasturiy Loyiha va Bosqich Marralari",
    "titleEn": "Software Project & Milestone Stages",
    "story": "'ProjectMilestone' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'SoftwareProject' (projectKey {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'milestoneSeq' {PPK} hisoblanadi. 'SoftwareProject' va 'ProjectMilestone' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'ProjectMilestone' is a weak entity that cannot exist independently without its parent entity 'SoftwareProject' (projectKey {PK}). Its key is the partial key 'milestoneSeq' {PPK}. Model the identifying relationship between 'SoftwareProject' and 'ProjectMilestone'.",
    "instruction": "'SoftwareProject' va zaif 'ProjectMilestone' entitiylarini identifikatsion aloqa bilan bog'lang. 'ProjectMilestone' entitiyida 'Zaif {W}' rejimini yoqing va 'milestoneSeq' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'SoftwareProject' and weak 'ProjectMilestone' via an identifying relationship. Toggle 'Weak {W}' on 'ProjectMilestone' and designate 'milestoneSeq' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwareProject",
          "isWeak": false,
          "isAssociative": false,
          "pk": "projectKey",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "projectKey",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "projectName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProjectMilestone",
          "isWeak": true,
          "isAssociative": false,
          "pk": "milestoneSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "milestoneSeq",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "milestoneTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "SoftwareProject",
          "entity2": "ProjectMilestone",
          "fromEntityName": "SoftwareProject",
          "toEntityName": "ProjectMilestone",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoftwareProject",
          "pk": "projectKey",
          "isWeak": false
        },
        {
          "name": "ProjectMilestone",
          "pk": "milestoneSeq",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "SoftwareProject",
          "entity2": "ProjectMilestone",
          "fromEntityName": "SoftwareProject",
          "toEntityName": "ProjectMilestone",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Программный проект и основные этапы",
    "storyRu": "«ProjectMilestone» — это слабая сущность, которая не может существовать независимо без родительской сущности «SoftwareProject» (projectKey {PK}). Его ключом является частичный ключ «milestoneSeq» {PPK}. Смоделируйте идентифицирующие отношения между «SoftwareProject» и «ProjectMilestone».",
    "instructionRu": "Соедините «SoftwareProject» и слабый «ProjectMilestone» посредством идентифицирующей связи. Переключите «Weak {W}» в «ProjectMilestone» и назначьте «milestoneSeq» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Ilmiy Konferensiya va Seksiyalar",
    "titleEn": "Academic Conference & Sessions",
    "story": "'ConferenceSession' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Conference' (confCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sessionNo' {PPK} hisoblanadi. 'Conference' va 'ConferenceSession' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'ConferenceSession' is a weak entity that cannot exist independently without its parent entity 'Conference' (confCode {PK}). Its key is the partial key 'sessionNo' {PPK}. Model the identifying relationship between 'Conference' and 'ConferenceSession'.",
    "instruction": "'Conference' va zaif 'ConferenceSession' entitiylarini identifikatsion aloqa bilan bog'lang. 'ConferenceSession' entitiyida 'Zaif {W}' rejimini yoqing va 'sessionNo' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'Conference' and weak 'ConferenceSession' via an identifying relationship. Toggle 'Weak {W}' on 'ConferenceSession' and designate 'sessionNo' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Conference",
          "isWeak": false,
          "isAssociative": false,
          "pk": "confCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "confCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "confTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ConferenceSession",
          "isWeak": true,
          "isAssociative": false,
          "pk": "sessionNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sessionNo",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "topicName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "Conference",
          "entity2": "ConferenceSession",
          "fromEntityName": "Conference",
          "toEntityName": "ConferenceSession",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Conference",
          "pk": "confCode",
          "isWeak": false
        },
        {
          "name": "ConferenceSession",
          "pk": "sessionNo",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Conference",
          "entity2": "ConferenceSession",
          "fromEntityName": "Conference",
          "toEntityName": "ConferenceSession",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Академическая конференция и сессии",
    "storyRu": "«ConferenceSession» — это слабая сущность, которая не может существовать независимо без родительской сущности «Conference» (confCode {PK}). Его ключом является частичный ключ «sessionNo» {PPK}. Смоделируйте идентифицирующие отношения между «Conference» и «ConferenceSession».",
    "instructionRu": "Соедините «Conference» и слабый «ConferenceSession» посредством идентифицирующей связи. Переключите «Слабый {W}» на «ConferenceSession» и назначьте «sessionNo» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Aloqa Minoralari va Antennalar Sektori",
    "titleEn": "Cell Tower & Antenna Sectors",
    "story": "'AntennaSector' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'CellTower' (towerId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sectorCode' {PPK} hisoblanadi. 'CellTower' va 'AntennaSector' o'rtasida identifikatsion aloqani o'rnating.",
    "storyEn": "'AntennaSector' is a weak entity that cannot exist independently without its parent entity 'CellTower' (towerId {PK}). Its key is the partial key 'sectorCode' {PPK}. Model the identifying relationship between 'CellTower' and 'AntennaSector'.",
    "instruction": "'CellTower' va zaif 'AntennaSector' entitiylarini identifikatsion aloqa bilan bog'lang. 'AntennaSector' entitiyida 'Zaif {W}' rejimini yoqing va 'sectorCode' kalitini {PPK} belgilang. Tegishli multiplisitiya chegaralarini tahlil qiling va o'rnating.",
    "instructionEn": "Connect 'CellTower' and weak 'AntennaSector' via an identifying relationship. Toggle 'Weak {W}' on 'AntennaSector' and designate 'sectorCode' as {PPK}. Determine and configure the correct multiplicity constraints based on the domain rules.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "isWeak": false,
          "isAssociative": false,
          "pk": "towerId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "towerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "locationGps",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AntennaSector",
          "isWeak": true,
          "isAssociative": false,
          "pk": "sectorCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sectorCode",
              "isPK": true,
              "isPPK": true,
              "isFK": false
            },
            {
              "name": "azimuthAngle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "frequencyMhz",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "CellTower",
          "entity2": "AntennaSector",
          "fromEntityName": "CellTower",
          "toEntityName": "AntennaSector",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "pk": "towerId",
          "isWeak": false
        },
        {
          "name": "AntennaSector",
          "pk": "sectorCode",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "CellTower",
          "entity2": "AntennaSector",
          "fromEntityName": "CellTower",
          "toEntityName": "AntennaSector",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": true,
          "isDirect": true
        }
      ]
    },
    "titleRu": "Вышки сотовой связи и сектора антенн",
    "storyRu": "«AntennaSector» — это слабая сущность, которая не может существовать независимо без родительской сущности «CellTower» (towerId {PK}). Его ключом является частичный ключ 'sectorCode' {PPK}. Смоделируйте идентифицирующие отношения между CellTower и AntennaSector.",
    "instructionRu": "Соедините «CellTower» и слабый «AntennaSector» посредством идентифицирующих отношений. Переключите «Weak {W}» на «AntennaSector» и назначьте «sectorCode» как {PPK}. Определите и настройте правильные ограничения множественности на основе правил домена.",
    "clientRoleRu": "Архитектор баз данных"
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Dr. Alisher Qosimov",
    "clientRole": "Medion Bosh Shifokori",
    "clientAvatar": "👨‍⚕️",
    "title": "Medion Klinika — Shifokor va Bemor Qabuli (Appointment)",
    "titleEn": "Medion Clinic — Doctor and Patient Appointment Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Medion xususiy klinikasida bitta shifokor (**Doctor**) kun davomida ko'plab bemorlarni qabul qiladi. Bemor (**Patient**) esa bir necha xil mutaxassis shifokorlar (terapevt, kardiolog, okulist) ko'rigiga yozilishi mumkin (ko'pdan-ko'pga munosabat). Biroq, qabul sanasi (`appDate`), ko'rik to'lovi (`consultationFee`) va qo'yilgan yakuniy tashxis (`diagnosis`) na faqat shifokorga, na faqat bemorga tegishli! Agar bu atributlarni shifokorga qo'shsak, har bir yangi bemor uchun shifokor yozuvi takrorlanadi; agar bemorga qo'shsak, har bir yangi tashrif uchun bemor yozuvi takrorlanadi. Shuning uchun bu ko'pdan-ko'pga aloqa mustaqil **Appointment** assotsiativ entitiysiga ajratiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Doctor` entitiysini yarating: {PK} `doctorId`, `doctorName`, `specialty`. 2. `Patient` entitiysini yarating: {PK} `patientId`, `fullName`, `birthDate`. 3. Markaziy `Appointment` assotsiativ entitiysini yarating: {PK} `appId`, `appDate`, `consultationFee`, `diagnosis`. 4. `Doctor` va `Appointment` o'rtasida aloqa bog'lang: bitta shifokor ko'plab qabullarga ega bo'lishi mumkin (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 5. `Patient` va `Appointment` o'rtasida aloqa bog'lang: bitta bemor ko'plab qabullarga ega bo'lishi mumkin (qat'iy bittalik va ixtiyoriy ko'plik munosabati).",
    "storyEn": "Medion Clinic — Doctor and Patient Appointment Association Class — Conceptual ER business case study.",
    "instruction": "'Doctor', 'Patient' va 'Appointment' entitiylarini chizing. Atributlarni kiriting va ikkita birga-ko'p aloqa orqali assotsiativ bog'lanishni yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "doctorId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Patient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "patientId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Appointment",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "appId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "appId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "appDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "consultationFee",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "diagnosis",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Conducts",
          "entity1": "Doctor",
          "entity2": "Appointment",
          "fromEntityName": "Doctor",
          "toEntityName": "Appointment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Attends",
          "entity1": "Patient",
          "entity2": "Appointment",
          "fromEntityName": "Patient",
          "toEntityName": "Appointment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "doctorId",
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "specialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "Patient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Appointment",
          "pk": "appId",
          "attributes": [
            {
              "name": "appId",
              "isPK": true
            },
            {
              "name": "appDate",
              "isPK": false
            },
            {
              "name": "consultationFee",
              "isPK": false
            },
            {
              "name": "diagnosis",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Appointment",
          "fromEntityName": "Doctor",
          "toEntityName": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Conducts",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "fromEntityName": "Patient",
          "toEntityName": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Attends",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Клиника Медион — Класс Ассоциации записи к врачу и пациенту",
    "storyRu": "Клиника Medion — Класс Ассоциации приема врачей и пациентов — Концептуальный бизнес-кейс отделения неотложной помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный врач Медион"
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Malika Rasulova",
    "clientRole": "WIUT Akademik Registratori",
    "clientAvatar": "👩‍💼",
    "title": "WIUT Universiteti — Talaba va Modul Ro'yxati (Enrollment)",
    "titleEn": "WIUT University — Student Course Enrollment Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Toshkentdagi Xalqaro Vestminster Universitetida talaba (**Student**) har semestrda 4 tagacha fanni (Module) o'qiydi. Har bir modulda (**CourseModule**) esa yuzlab talabalar tahsil oladi. Semestr davomidagi imtihon bahosi (`finalGrade`), semestr kodi (`semester`) va darsga qatnashish foizi (`attendancePct`) aynan talabaning ma'lum bir modulni o'qish jarayoniga tegishlidir. Ushbu mantiq **Enrollment** assotsiativ entitiysi orqali ifodalanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Student` entitiysini yarating: {PK} `studentId`, `studentName`, `cohortGroup`. 2. `CourseModule` entitiysini yarating: {PK} `moduleCode`, `moduleTitle`, `credits`. 3. `Enrollment` assotsiativ entitiysini qo'shing: {PK} `enrollmentId`, `semester`, `finalGrade`, `attendancePct`. 4. Aloqalarni bog'lang: har bir modul va talaba ko'plab ro'yxatdan o'tishlarga (qat'iy bittalik va ixtiyoriy ko'plik munosabati) ega bo'ladi.",
    "storyEn": "WIUT University — Student Course Enrollment Association Class — Conceptual ER business case study.",
    "instruction": "'Student', 'CourseModule' va 'Enrollment' entitiylarini chizib, multiplisitiyalarni to'g'ri tanlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "studentId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cohortGroup",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CourseModule",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "moduleCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "moduleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "credits",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Enrollment",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "enrollmentId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "semester",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "finalGrade",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attendancePct",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "EnrollsIn",
          "entity1": "Student",
          "entity2": "Enrollment",
          "fromEntityName": "Student",
          "toEntityName": "Enrollment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Includes",
          "entity1": "CourseModule",
          "entity2": "Enrollment",
          "fromEntityName": "CourseModule",
          "toEntityName": "Enrollment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "studentName",
              "isPK": false
            },
            {
              "name": "cohortGroup",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourseModule",
          "pk": "moduleCode",
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true
            },
            {
              "name": "moduleTitle",
              "isPK": false
            },
            {
              "name": "credits",
              "isPK": false
            }
          ]
        },
        {
          "name": "Enrollment",
          "pk": "enrollmentId",
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "finalGrade",
              "isPK": false
            },
            {
              "name": "attendancePct",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Enrollment",
          "fromEntityName": "Student",
          "toEntityName": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EnrollsIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CourseModule",
          "entity2": "Enrollment",
          "fromEntityName": "CourseModule",
          "toEntityName": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Includes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Университет WIUT — Класс Ассоциации набора студентов на курсы",
    "storyRu": "Университет WIUT — Класс Ассоциации набора студентов на курсы — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Академический регистратор МВУТ"
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Bobur Mirzayev",
    "clientRole": "EPAM Delivery Manager",
    "clientAvatar": "👨‍💻",
    "title": "EPAM IT Kompaniyasi — Muhandis va Loyiha Taqsiri (ProjectAssignment)",
    "titleEn": "EPAM Systems — Engineer Project Assignment Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Global IT autsorsing kompaniyasida dasturchi (**SoftwareEngineer**) bir vaqtning o'zida ikkita loyihada yarim stavkadan ishlashi mumkin. Loyiha (**ClientProject**) esa o'nlab muhandislardan tashkil topadi. Muhandisning o'sha loyihadagi roli (`roleTitle`), haftalik ajratilgan soatlari (`weeklyHours`) va soatlik hisob tarifi (`billingRate`) loyihaviy biriktirish hisoblanadi. Buni modellashtirish uchun **ProjectAssignment** assotsiativ entitiysi kerak. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `SoftwareEngineer`: {PK} `engineerId`, `fullName`, `techStack`. 2. `ClientProject`: {PK} `projectId`, `projectName`, `budget`. 3. `ProjectAssignment`: {PK} `assignmentId`, `roleTitle`, `weeklyHours`, `billingRate`. 4. Ikkala tomondan `ProjectAssignment` ga birga-ko'p munosabatlarini o'rnating (qat'iy bittalik va ixtiyoriy ko'plik munosabati).",
    "storyEn": "EPAM Systems — Engineer Project Assignment Association Class — Conceptual ER business case study.",
    "instruction": "Dasturchi va loyihani 'ProjectAssignment' orqali bog'lab, atributlar va chegaralarni belgilang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwareEngineer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "engineerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "engineerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "techStack",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ClientProject",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "projectId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "projectId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "projectName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "budget",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "assignmentId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "assignmentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weeklyHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "billingRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Assigned",
          "entity1": "SoftwareEngineer",
          "entity2": "ProjectAssignment",
          "fromEntityName": "SoftwareEngineer",
          "toEntityName": "ProjectAssignment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ComposedOf",
          "entity1": "ClientProject",
          "entity2": "ProjectAssignment",
          "fromEntityName": "ClientProject",
          "toEntityName": "ProjectAssignment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoftwareEngineer",
          "pk": "engineerId",
          "attributes": [
            {
              "name": "engineerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "techStack",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClientProject",
          "pk": "projectId",
          "attributes": [
            {
              "name": "projectId",
              "isPK": true
            },
            {
              "name": "projectName",
              "isPK": false
            },
            {
              "name": "budget",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "pk": "assignmentId",
          "attributes": [
            {
              "name": "assignmentId",
              "isPK": true
            },
            {
              "name": "roleTitle",
              "isPK": false
            },
            {
              "name": "weeklyHours",
              "isPK": false
            },
            {
              "name": "billingRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SoftwareEngineer",
          "entity2": "ProjectAssignment",
          "fromEntityName": "SoftwareEngineer",
          "toEntityName": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Assigned",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ClientProject",
          "entity2": "ProjectAssignment",
          "fromEntityName": "ClientProject",
          "toEntityName": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ComposedOf",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "EPAM Systems — Класс Ассоциации по назначению инженерных проектов",
    "storyRu": "EPAM Systems — Класс Ассоциации по назначению инженерных проектов — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по доставке EPAM"
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Nodir Xoliqov",
    "clientRole": "Uzum Market Logistika Rahbari",
    "clientAvatar": "📦",
    "title": "Uzum Market — Ta'minotchi va Mahsulot Shartnomasi (SupplyContract)",
    "titleEn": "Uzum Market — Supplier Product Contract Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Elektron tijoratda optom ta'minotchi (**WholesaleSupplier**) yuzlab tovarlarni yetkazadi. Muayyan tovar (**WarehouseProduct**) esa turli ta'minotchilardan turli shartlarda xarid qilinishi mumkin. Kelishilgan ulgurji narx (`agreedUnitPrice`), yetkazib berish muddati (`leadTimeDays`) va minimal partiya (`minOrderQty`) shartnomada belgilanadi. Bu ma'lumotlar **SupplyContract** assotsiativ entitiysida saqlanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `WholesaleSupplier`: {PK} `supplierId`, `companyName`, `innTaxNumber`. 2. `WarehouseProduct`: {PK} `skuCode`, `productName`, `category`. 3. `SupplyContract`: {PK} `contractNo`, `agreedUnitPrice`, `leadTimeDays`, `minOrderQty`. 4. Ikkala tomonni `SupplyContract` ga qat'iy bittalik va ixtiyoriy ko'plik munosabati ko'rinishida bog'lang.",
    "storyEn": "Uzum Market — Supplier Product Contract Association Class — Conceptual ER business case study.",
    "instruction": "Ta'minotchi va tovar o'rtasidagi shartnomani assotsiativ entitiy bilan loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "WholesaleSupplier",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "supplierId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "innTaxNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "WarehouseProduct",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "skuCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "category",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupplyContract",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "contractNo",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agreedUnitPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "leadTimeDays",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "minOrderQty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Supplies",
          "entity1": "WholesaleSupplier",
          "entity2": "SupplyContract",
          "fromEntityName": "WholesaleSupplier",
          "toEntityName": "SupplyContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "SuppliedUnder",
          "entity1": "WarehouseProduct",
          "entity2": "SupplyContract",
          "fromEntityName": "WarehouseProduct",
          "toEntityName": "SupplyContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "WholesaleSupplier",
          "pk": "supplierId",
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "innTaxNumber",
              "isPK": false
            }
          ]
        },
        {
          "name": "WarehouseProduct",
          "pk": "skuCode",
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true
            },
            {
              "name": "productName",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplyContract",
          "pk": "contractNo",
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true
            },
            {
              "name": "agreedUnitPrice",
              "isPK": false
            },
            {
              "name": "leadTimeDays",
              "isPK": false
            },
            {
              "name": "minOrderQty",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "WholesaleSupplier",
          "entity2": "SupplyContract",
          "fromEntityName": "WholesaleSupplier",
          "toEntityName": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Supplies",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "WarehouseProduct",
          "entity2": "SupplyContract",
          "fromEntityName": "WarehouseProduct",
          "toEntityName": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SuppliedUnder",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Uzum Market — Класс Ассоциации по контрактам на продукцию с поставщиками",
    "storyRu": "Uzum Market — Класс Ассоциации по контрактам на продукцию с поставщиками — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по логистике Узум Маркет"
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Korzinka Sodiqlik Dasturi Tahlilchisi",
    "clientAvatar": "🛍️",
    "title": "Korzinka Supermarket — Xaridor va Mahsulot Sharhi (ProductReview)",
    "titleEn": "Korzinka Supermarket — Customer Product Review Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Korzinka Plus ilovasida sodiq mijoz (**RetailCustomer**) ko'plab mahsulotlarga ta'rif qoldiradi. Mahsulot (**StoreProduct**) esa turli xaridorlar tomonidan baholanadi. Sharhdagi yulduzcha baho (`starRating`), mijoz fikri matni (`reviewComment`) va qoldirilgan sana (`reviewDate`) aynan shu xaridorning shu mahsulotga bergan bahosidir. Bu munosabat **ProductReview** assotsiativ entitiysi orqali ajratiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `RetailCustomer`: {PK} `customerId`, `phone`, `loyaltyCardNo`. 2. `StoreProduct`: {PK} `barcode`, `productName`, `retailPrice`. 3. `ProductReview`: {PK} `reviewId`, `starRating`, `reviewComment`, `reviewDate`. 4. Multiplisitiyalarni qat'iy bittalik (har bir sharh aniq 1 mijoz va 1 tovar uchun) va ixtiyoriy ko'plik (mijoz/tovarda 0 yoki ko'plab sharhlar) qilib belgilang.",
    "storyEn": "Korzinka Supermarket — Customer Product Review Association Class — Conceptual ER business case study.",
    "instruction": "'RetailCustomer', 'StoreProduct' va 'ProductReview' entitiy modelini hosil qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RetailCustomer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "customerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "customerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "loyaltyCardNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StoreProduct",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "barcode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "barcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "retailPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProductReview",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "reviewId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "reviewId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "starRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "reviewComment",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "reviewDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Writes",
          "entity1": "RetailCustomer",
          "entity2": "ProductReview",
          "fromEntityName": "RetailCustomer",
          "toEntityName": "ProductReview",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "EvaluatedBy",
          "entity1": "StoreProduct",
          "entity2": "ProductReview",
          "fromEntityName": "StoreProduct",
          "toEntityName": "ProductReview",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RetailCustomer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "loyaltyCardNo",
              "isPK": false
            }
          ]
        },
        {
          "name": "StoreProduct",
          "pk": "barcode",
          "attributes": [
            {
              "name": "barcode",
              "isPK": true
            },
            {
              "name": "productName",
              "isPK": false
            },
            {
              "name": "retailPrice",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProductReview",
          "pk": "reviewId",
          "attributes": [
            {
              "name": "reviewId",
              "isPK": true
            },
            {
              "name": "starRating",
              "isPK": false
            },
            {
              "name": "reviewComment",
              "isPK": false
            },
            {
              "name": "reviewDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailCustomer",
          "entity2": "ProductReview",
          "fromEntityName": "RetailCustomer",
          "toEntityName": "ProductReview",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Writes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "StoreProduct",
          "entity2": "ProductReview",
          "fromEntityName": "StoreProduct",
          "toEntityName": "ProductReview",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EvaluatedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Супермаркет «Корзинка» — Класс Ассоциации отзывов покупателей",
    "storyRu": "Супермаркет «Корзинка» — Класс Ассоциации по обзору продуктов для клиентов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Аналитик программы лояльности «Корзинка»"
  }
];
