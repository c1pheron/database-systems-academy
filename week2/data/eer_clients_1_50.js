var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Nodirbek Zokirov",
    "clientRole": "E-Commerce Mahsulot Direktori",
    "clientAvatar": "mentor",
    "title": "Uzum Market — Sotuvchi va Mahsulotlar Katalogi (Relatsion Sxema)",
    "story": "Uzum Market marketplace platformasida har bir rasmiy do'kon sotuvchisi (Seller) ko'plab mahsulotlarni (Product) sotuvga qo'yadi. Har bir mahsulot esa aniq bitta ro'yxatdan o'tgan sotuvchiga tegishli (1..1). Sotuvchida esa kamida bitta yoki undan ko'p tovar bo'lishi shart (1..*).\n\nTizimda 'Seller' (sellerId {PK}) va 'Product' (productId {PK}) kuchli entitiylarini shakllantiring va ular o'rtasidagi 1:N munosabatni o'rnating.",
    "instruction": "'Seller' va 'Product' entitiylarini binar aloqa chizig'i bilan bog'lang: Seller tomonga '1..1', Product tomonga '1..*' multiplisitiyasini o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Seller",
          "isWeak": false,
          "pk": "sellerId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "sellerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "shopName",
              "isPK": false
            },
            {
              "name": "rating",
              "isPK": false
            }
          ]
        },
        {
          "name": "Product",
          "isWeak": false,
          "pk": "productId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "productId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Aziz Qodirov",
    "clientRole": "Fintech Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "Payme To'lov Tizimi — Foydalanuvchi va Bank Kartalari (Relatsion Sxema)",
    "story": "Payme to'lov ilovasida har bir ro'yxatdan o'tgan foydalanuvchi (User) o'z hisobiga bir nechta Humo yoki Uzcard bank kartalarini (BankCard) ulashi mumkin (0..*). Yangi ro'yxatdan o'tgan mijozda hali karta bo'lmasligi mumkin. Har bir ulangan bank kartasi esa aniq bitta egaga tegishli (1..1).\n\n'User' (userId {PK}) va 'BankCard' (cardId {PK}) entitiylarini o'zaro bog'lang.",
    "instruction": "'User' va 'BankCard' entitiylarini bog'lang: User tomonga '1..1', BankCard tomonga '0..*' multiplisitiyasini qo'ying.",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "isWeak": false,
          "pk": "userId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "userId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "BankCard",
          "isWeak": false,
          "pk": "cardId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "cardId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "panMasked",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dilshod Alimov",
    "clientRole": "Chakana Savdo Operatsion Rahbari",
    "clientAvatar": "mentor",
    "title": "Korzinka Savdo Tarmog'i — Filial va Kassirlar Shtati (Relatsion Sxema)",
    "story": "Korzinka supermarketlar tarmog'ida har bir filialda (Branch) smenada xizmat ko'rsatuvchi bir nechta kassirlar (Cashier) shtati faoliyat yuritadi (1..*). Har bir kassir esa rasmiy mehnat shartnomasiga binoan faqat bitta doimiy filialga biriktirilgan (1..1).\n\n'Branch' (branchId {PK}) va 'Cashier' (cashierId {PK}) o'rtasidagi 1:N aloqani loyihalashtiring.",
    "instruction": "'Branch' va 'Cashier' o'rtasida aloqa chizing: Branch (1..1), Cashier (1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "isWeak": false,
          "pk": "branchId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "branchName",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "Cashier",
          "isWeak": false,
          "pk": "cashierId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "cashierId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "shiftCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Rustam Saidov",
    "clientRole": "Taksopark Dispecheri",
    "clientAvatar": "mentor",
    "title": "Yandex Go Taksoparki — Haydovchi va Xizmat Avtomobili (1:1) (Relatsion Sxema)",
    "story": "Yandex Go Comfort+ tarifida har bir litsenziyali haydovchiga (Driver) uning smenasi uchun aniq bitta tekshirilgan xizmat avtomobili (Vehicle) biriktiriladi (1..1). Har bir avtomobil ham ayni paytda faqat 1 ta mas'ul haydovchi ixtiyorida bo'ladi (1..1).\n\n'Driver' (driverId {PK}) va 'Vehicle' (vinCode {PK}) entitiylarini qat'iy 1:1 aloqa bilan bog'lang.",
    "instruction": "'Driver' va 'Vehicle' entitiylarini 1:1 munosabat bilan bog'lang: Driver (1..1), Vehicle (1..1).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Driver",
          "isWeak": false,
          "pk": "driverId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "driverId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "licenseNo",
              "isPK": false
            },
            {
              "name": "rating",
              "isPK": false
            }
          ]
        },
        {
          "name": "Vehicle",
          "isWeak": false,
          "pk": "vinCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "plateNo",
              "isPK": false
            },
            {
              "name": "carModel",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dr. Alisher Vohidov",
    "clientRole": "Akademik Ishlar Bo'yicha Dekan",
    "clientAvatar": "mentor",
    "title": "WIUT Universiteti — Fakultet va Akademik Kafedralar (Relatsion Sxema)",
    "story": "Westminster International University in Tashkent (WIUT) da har bir fakultet (Faculty) o'z tarkibida kamida bitta yoki bir nechta ixtisoslashgan kafedralarni (Department) birlashtiradi (1..*). Har bir kafedra esa faqat bitta fakultet tasarrufiga kiradi (1..1).\n\n'Faculty' (facultyCode {PK}) va 'Department' (deptId {PK}) entitiylarini bog'lang.",
    "instruction": "'Faculty' va 'Department' entitiylarini bog'lang: Faculty tomonga '1..1', Department tomonga '1..*'.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "isWeak": false,
          "pk": "facultyCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "facultyName",
              "isPK": false
            },
            {
              "name": "deanEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "Department",
          "isWeak": false,
          "pk": "deptId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "deptId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "deptTitle",
              "isPK": false
            },
            {
              "name": "officeRoom",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Dr. Sevara Ismoilova",
    "clientRole": "Klinika Bosh Vrachi",
    "clientAvatar": "mentor",
    "title": "Medion Tibbiyot Markazi — Bo'lim va Bosh Shifokor (1:1) (Relatsion Sxema)",
    "story": "Ko'p tarmoqli Medion klinikasida har bir tibbiy bo'limni (HospitalDept) boshqarish uchun aniq 1 ta bo'lim bosh shifokori (HeadDoctor) tayinlangan (1..1). Bosh shifokor ham o'z lavozimida faqat bitta bo'lim boshqaruviga javobgar (1..1).\n\n'HospitalDept' (deptCode {PK}) va 'HeadDoctor' (doctorId {PK}) o'rtasida 1:1 aloqa o'rnating.",
    "instruction": "'HospitalDept' va 'HeadDoctor' entitiylarini 1:1 aloqa bilan bog'lang (1..1 va 1..1).",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "isWeak": false,
          "pk": "deptCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeadDoctor",
          "isWeak": false,
          "pk": "doctorId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false
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
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Uzbekistan Airways — Aviakompaniya va Samolyotlar Floti (Relatsion Sxema)",
    "story": "Milliy aviakompaniya (Airline) tasarrufida xalqaro va mahalliy reyslarni amalga oshiruvchi o'nlab yo'lovchi samolyotlari (Aircraft) mavjud (1..*). Har bir havo kemasi esa xalqaro reestrga ko'ra qat'iy bitta tashuvchi aviakompaniyaga tegishli (1..1).\n\n'Airline' (iataCode {PK}) va 'Aircraft' (tailNo {PK}) entitiylarini binar aloqa bilan ulang.",
    "instruction": "'Airline' va 'Aircraft' ni bog'lang: Airline tomonga '1..1', Aircraft tomonga '1..*'.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airline",
          "isWeak": false,
          "pk": "iataCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            }
          ]
        },
        {
          "name": "Aircraft",
          "isWeak": false,
          "pk": "tailNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Nigora Umarova",
    "clientRole": "Mehmonxona Bosh Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Hyatt Regency — Mehmonxona va Xonalar Fondi (Relatsion Sxema)",
    "story": "Besh yulduzli Hyatt mehmonxonasida (Hotel) mehmonlar istiqomat qilishi uchun yuzlab xonalar (Room) mavjud (1..*). Har bir xona esa faqat bitta aniq mehmonxona majmuasiga qarashlidir (1..1).\n\n'Hotel' (hotelId {PK}) va 'Room' (roomNo {PK}) entitiylarini bog'lang.",
    "instruction": "'Hotel' va 'Room' entitiylarini bog'lang: Hotel (1..1), Room (1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "isWeak": false,
          "pk": "hotelId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "hotelName",
              "isPK": false
            },
            {
              "name": "starsRating",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "isWeak": false,
          "pk": "roomNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "nightlyRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Shuhrat Bekmurodov",
    "clientRole": "IT Park Inkubatsiya Rahbari",
    "clientAvatar": "mentor",
    "title": "IT Texnoparki — Startap Inkubator va Mas'ul Menejer (1:1) (Relatsion Sxema)",
    "story": "IT Park tuzilmasida har bir startap akseleratsiya markaziga (Incubator) operatsion jarayonni yuritish uchun aniq 1 ta mas'ul boshqaruvchi (Manager) biriktirilgan (1..1). Har bir menejer ham faqat bitta markaz faoliyatini boshqaradi (1..1).\n\n'Incubator' (incId {PK}) va 'Manager' (managerId {PK}) entitiylarini 1:1 munosabat bilan bog'lang.",
    "instruction": "'Incubator' va 'Manager' entitiyalarini 1:1 aloqa bilan ulang (1..1 va 1..1).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Incubator",
          "isWeak": false,
          "pk": "incId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "incId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "centerTitle",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "Manager",
          "isWeak": false,
          "pk": "managerId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "managerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "managerName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Munira Sobirova",
    "clientRole": "Kutubxona Bosh Bibliografi",
    "clientAvatar": "mentor",
    "title": "Alisher Navoiy Kutubxonasi — Kitob va Muallif (Relatsion Sxema)",
    "story": "Davlat kutubxonasi fondida har bir yozuvchi-muallif (Author) qalamiga mansub ko'plab kitoblar (Book) saqlanadi (1..*). Ushbu klassik katalog doirasida har bir kitob bitta bosh muallif tomonidan yozilgan deb hisoblanadi (1..1).\n\n'Author' (authorId {PK}) va 'Book' (isbn {PK}) entitiylarini bog'lang.",
    "instruction": "'Author' va 'Book' ni bog'lang: Author tomonga '1..1', Book tomonga '1..*'.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Author",
          "isWeak": false,
          "pk": "authorId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "authorId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "authorName",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            }
          ]
        },
        {
          "name": "Book",
          "isWeak": false,
          "pk": "isbn",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "isbn",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "publishedYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Bobur Mirzayev",
    "clientRole": "Chakana Bank Mahsulotlari Menejeri",
    "clientAvatar": "mentor",
    "title": "Anorbank — Mijoz va Omonat Depoziti (0..*) (Relatsion Sxema)",
    "story": "Raqamli bankda ro'yxatdan o'tgan mijoz (Customer) foiz jamg'arish maqsadida bir nechta depozit hisoblarini (DepositAccount) ochishi mumkin (0..*). Har bir depozit hisobi esa qat'iy bitta jismoniy shaxs nomiga ochiladi (1..1).\n\n'Customer' (cifCode {PK}) va 'DepositAccount' (accountNo {PK}) o'rtasidagi ixtiyoriy 1:N munosabatni o'rnating.",
    "instruction": "'Customer' va 'DepositAccount' ni bog'lang: Customer (1..1), DepositAccount (0..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "isWeak": false,
          "pk": "cifCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "cifCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "customerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "DepositAccount",
          "isWeak": false,
          "pk": "accountNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "interestRate",
              "isPK": false
            },
            {
              "name": "balance",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Otabek G'aniyev",
    "clientRole": "Toshshahartransxizmat Muhandisi",
    "clientAvatar": "mentor",
    "title": "Toshkent Jamoat Transporti — Marshrut va Shahar Avtobuslari (Relatsion Sxema)",
    "story": "Poytaxt yo'lovchi transportida har bir belgilangan marshrut (BusRoute) bo'ylab bir nechta shahar avtobuslari (CityBus) harakatlanadi (1..*). Har bir avtobus esa navbatchilik rejasiga ko'ra ayni paytda bitta marshrutga biriktirilgan (1..1).\n\n'BusRoute' (routeNo {PK}) va 'CityBus' (busId {PK}) entitiylarini bog'lang.",
    "instruction": "'BusRoute' va 'CityBus' ni bog'lang: BusRoute (1..1), CityBus (1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusRoute",
          "isWeak": false,
          "pk": "routeNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "routeNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "startPoint",
              "isPK": false
            },
            {
              "name": "endPoint",
              "isPK": false
            }
          ]
        },
        {
          "name": "CityBus",
          "isWeak": false,
          "pk": "busId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "busId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "plateNumber",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Jamshid Ergashov",
    "clientRole": "Dilerlik Tarmog'i Sotuv Direktori",
    "clientAvatar": "mentor",
    "title": "UzAuto Motors Dileri — Avtosalon va Avtomobillar Zaxirasi (Relatsion Sxema)",
    "story": "Rasmiy dilerlik markazida (Dealership) sotuvga chiqarilgan ko'plab yangi avtomobillar (Automobile) mavjud (1..*). Har bir avtomobil qaysi dilerlik markazi avtosalonida turgani bilan qat'iy bog'langan (1..1).\n\n'Dealership' (dealerCode {PK}) va 'Automobile' (vinNumber {PK}) o'rtasidagi aloqani o'rnating.",
    "instruction": "'Dealership' va 'Automobile' ni bog'lang: Dealership (1..1), Automobile (1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Dealership",
          "isWeak": false,
          "pk": "dealerCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "dealerCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "dealerName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "Automobile",
          "isWeak": false,
          "pk": "vinNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "vinNumber",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Maktab O'quv Bo'limi Mudiri",
    "clientAvatar": "mentor",
    "title": "Maktab Ta'limi — Sinf va Sinf Rahbari (1:1) (Relatsion Sxema)",
    "story": "Umumta'lim maktabida har bir sinfga (SchoolClass, masalan 10-A) o'quvchilar tarbiyasi uchun aniq 1 ta sinf rahbari bo'lgan ustoz (ClassTeacher) biriktiriladi (1..1). Har bir o'qituvchi ham faqat bitta sinfga rahbarlik qiladi (1..1).\n\n'SchoolClass' (classCode {PK}) va 'ClassTeacher' (teacherId {PK}) entitiylarini 1:1 aloqa bilan bog'lang.",
    "instruction": "'SchoolClass' va 'ClassTeacher' o'rtasida 1:1 aloqa chizing (1..1 va 1..1).",
    "starterDiagram": {
      "entities": [
        {
          "name": "SchoolClass",
          "isWeak": false,
          "pk": "classCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "classCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "gradeNumber",
              "isPK": false
            },
            {
              "name": "academicYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClassTeacher",
          "isWeak": false,
          "pk": "teacherId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "teacherId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "teacherName",
              "isPK": false
            },
            {
              "name": "subject",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Binar ER",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "Farm Ta'minot Logistika Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Farmatsevtika Tarmog'i — Markaziy Ombor va Dorixonalar (Relatsion Sxema)",
    "story": "Farmatsevtika tarmog'ida bitta yirik ta'minot ombori (CentralWarehouse) o'z tasarrufidagi ko'plab dorixona filiallarini (PharmacyStore) dori vositalari bilan ta'minlaydi (1..*). Har bir dorixona esa dori partiyalarini aniq 1 ta markaziy ombordan qabul qiladi (1..1).\n\n'CentralWarehouse' (warehouseCode {PK}) va 'PharmacyStore' (pharmacyId {PK}) o'rtasida 1:N aloqa chizing.",
    "instruction": "'CentralWarehouse' va 'PharmacyStore' ni bog'lang: CentralWarehouse (1..1), PharmacyStore (1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralWarehouse",
          "isWeak": false,
          "pk": "warehouseCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "cityName",
              "isPK": false
            },
            {
              "name": "totalArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "PharmacyStore",
          "isWeak": false,
          "pk": "pharmacyId",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "pharmacyId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "storeTitle",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Kamron Rustamov",
    "clientRole": "Marketplace Operatsiyalar Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Uzum Market Buyurtmalar Zanjiri (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Uzum Market platformasida mijoz (Customer) bir nechta buyurtmalar (Order) berishi mumkin (0..*). Har bir buyurtma esa aniq bitta to'lov kvitansiyasiga (Payment) ega bo'ladi (1..1).\n\n'Customer', 'Order' va 'Payment' entitiylarini zanjirsimon bog'lang: Customer (1..1) <-> (0..*) Order va Order (1..1) <-> (1..1) Payment.",
    "instruction": "'Customer' -> 'Order' (1..1 <-> 0..*) va 'Order' -> 'Payment' (1..1 <-> 1..1) aloqalarini chizing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "isWeak": false,
          "pk": "customerId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "customerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "name",
              "isPK": false
            }
          ]
        },
        {
          "name": "Order",
          "isWeak": false,
          "pk": "orderNo",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "orderDate",
              "isPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            }
          ]
        },
        {
          "name": "Payment",
          "isWeak": false,
          "pk": "paymentId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "paymentId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "payType",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Bobur Tursunov",
    "clientRole": "Fintech Platforma Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Click / Payme Tranzaksiyalar Ekotizimi (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Foydalanuvchi (User) o'z ilovasiga kamida bitta yoki bir nechta bank kartasini (BankCard) ulaydi (1..*). Har bir karta orqali esa ko'plab to'lov tranzaksiyalari (Transaction) bajariladi (0..*).\n\n'User' -> 'BankCard' (1..1 <-> 1..*) va 'BankCard' -> 'Transaction' (1..1 <-> 0..*) aloqalarini o'rnating.",
    "instruction": "'User' ni 'BankCard' ga (1..1 <-> 1..*), 'BankCard' ni 'Transaction' ga (1..1 <-> 0..*) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "isWeak": false,
          "pk": "userId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "userId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "userName",
              "isPK": false
            }
          ]
        },
        {
          "name": "BankCard",
          "isWeak": false,
          "pk": "cardId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "cardId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "panMasked",
              "isPK": false
            },
            {
              "name": "bankName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Transaction",
          "isWeak": false,
          "pk": "txId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "txId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "amount",
              "isPK": false
            },
            {
              "name": "timestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Farrux Yusupov",
    "clientRole": "Taksi Agregator Muhandisi",
    "clientAvatar": "mentor",
    "title": "Yandex Go Safarlar Tizimi (3 ta Entitiy — Fan-In Bog'lanish) (Relatsion Sxema)",
    "story": "Yandex Go tizimida markaziy ob'yekt — bu Safar (RideTrip). Yo'lovchi (Passenger) bir nechta safarlar buyurtma qilishi mumkin (0..*). Haydovchi (Driver) ham ko'plab safarlarni qabul qiladi (0..*). Har bir safarda esa 1 ta yo'lovchi va 1 ta haydovchi qatnashadi (1..1).\n\n'Passenger' va 'Driver' entitiyalarining har ikkalasini 'RideTrip' ga ulang.",
    "instruction": "'Passenger' -> 'RideTrip' (1..1 <-> 0..*) va 'Driver' -> 'RideTrip' (1..1 <-> 0..*) aloqalarini chizing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Passenger",
          "isWeak": false,
          "pk": "passengerId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "passengerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "rating",
              "isPK": false
            }
          ]
        },
        {
          "name": "Driver",
          "isWeak": false,
          "pk": "driverId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "driverId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "licenseNo",
              "isPK": false
            },
            {
              "name": "carModel",
              "isPK": false
            }
          ]
        },
        {
          "name": "RideTrip",
          "isWeak": false,
          "pk": "tripId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "tripId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fareAmount",
              "isPK": false
            },
            {
              "name": "tripDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Nargiza Yo'ldosheva",
    "clientRole": "WIUT Akademik Menejeri",
    "clientAvatar": "mentor",
    "title": "WIUT Modul va Baholash Arxitekturasi (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Westminster universitetida har bir kafedra (Department) bir nechta fan-modullarni (Module) o'qitadi (1..*). Har bir modulda esa talabalar baholanadigan kamida 1 ta yoki bir nechta Coursework (Coursework, masalan CW1 va CW2) mavjud (1..*).\n\n'Department' -> 'Module' -> 'Coursework' ierarxiyasini loyihalashtiring.",
    "instruction": "'Department' -> 'Module' (1..1 <-> 1..*) va 'Module' -> 'Coursework' (1..1 <-> 1..*) zanjirini bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Department",
          "isWeak": false,
          "pk": "deptCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "deptName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Module",
          "isWeak": false,
          "pk": "moduleCode",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true,
              "isPPK": false
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
          "name": "Coursework",
          "isWeak": false,
          "pk": "cwId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "cwId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "weightPercent",
              "isPK": false
            },
            {
              "name": "dueDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Farhod Karimov",
    "clientRole": "HR Bosh Maslahatchisi",
    "clientAvatar": "mentor",
    "title": "Korxona Departamentlari va Boshqaruv Rahbari (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Kompaniyada (Company) bir nechta departamentlar (Department) faoliyat yuritadi (1..*). Har bir departamentni esa aniq 1 ta tayinlangan boshqaruvchi menejer (Manager) boshqaradi (1..1).\n\n'Company' -> 'Department' (1..1 <-> 1..*) va 'Department' -> 'Manager' (1..1 <-> 1..1) aloqalarini o'rnating.",
    "instruction": "'Company' ni 'Department' ga (1..1 <-> 1..*), 'Department' ni 'Manager' ga (1..1 <-> 1..1) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Company",
          "isWeak": false,
          "pk": "companyRegNo",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "companyRegNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "companyName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Department",
          "isWeak": false,
          "pk": "deptId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "deptId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "deptTitle",
              "isPK": false
            },
            {
              "name": "floor",
              "isPK": false
            }
          ]
        },
        {
          "name": "Manager",
          "isWeak": false,
          "pk": "managerId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "managerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "managerName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Dr. Nodira Rahimova",
    "clientRole": "Klinika Axborot Tizimi Rahbari",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bemor Qabuli va Tibbiy Karta (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Har bir bemorga (Patient) shifoxonada 1 ta elektron tibbiy karta (MedicalCard) ochiladi (1..1). Shifokor (Doctor) esa bir nechta bemorlarning tibbiy kartalarini nazorat qiladi (0..*).\n\n'Patient' -> 'MedicalCard' (1..1 <-> 1..1) va 'Doctor' -> 'MedicalCard' (1..1 <-> 0..*) aloqalarini chizing.",
    "instruction": "'Patient' ni 'MedicalCard' ga (1..1 <-> 1..1), 'Doctor' ni 'MedicalCard' ga (1..1 <-> 0..*) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "isWeak": false,
          "pk": "doctorId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false
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
          "isWeak": false,
          "pk": "patientId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "dob",
              "isPK": false
            }
          ]
        },
        {
          "name": "MedicalCard",
          "isWeak": false,
          "pk": "cardNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "cardNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "diagnosis",
              "isPK": false
            },
            {
              "name": "openedDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Akmal Rahmonov",
    "clientRole": "Rent-a-Car Operatsion Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtomobil Ijarasi Tizimi (Rent-a-Car — 3 ta Entitiy) (Relatsion Sxema)",
    "story": "Avtomobil ijarasi xizmatida har bir filialda (Branch) bir nechta avtomobillar (RentalCar) mavjud (1..*). Har bir avtomobil esa bir nechta ijara shartnomalari (RentalContract) bo'yicha mijozlarga beriladi (0..*).\n\n'Branch' -> 'RentalCar' (1..1 <-> 1..*) va 'RentalCar' -> 'RentalContract' (1..1 <-> 0..*) zanjirini bog'lang.",
    "instruction": "'Branch' ni 'RentalCar' ga (1..1 <-> 1..*), 'RentalCar' ni 'RentalContract' ga (1..1 <-> 0..*) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "isWeak": false,
          "pk": "branchId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "RentalCar",
          "isWeak": false,
          "pk": "carId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "carId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "dailyPrice",
              "isPK": false
            }
          ]
        },
        {
          "name": "RentalContract",
          "isWeak": false,
          "pk": "contractNo",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "startDate",
              "isPK": false
            },
            {
              "name": "totalCost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Oydin Mirvaliyeva",
    "clientRole": "Avia Bronlash Markazi Rahbari",
    "clientAvatar": "mentor",
    "title": "Aviabiletlar Bronlash Portali (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Aviatsiya portalida har bir reysga (Flight) ko'plab chipta bronlari (Booking) rasmiylashtiriladi (0..*). Yo'lovchi (Passenger) esa kamida bitta yoki bir nechta reysga bron ochadi (1..*). Har bir bron 1 ta yo'lovchi va 1 ta reysga tegishli (1..1).\n\n'Flight' -> 'Booking' (1..1 <-> 0..*) va 'Passenger' -> 'Booking' (1..1 <-> 1..*) aloqalarini chizing.",
    "instruction": "'Flight' va 'Passenger' entitiyalarini 'Booking' ga ulang: Flight (1..1 <-> 0..*) va Passenger (1..1 <-> 1..*).",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "isWeak": false,
          "pk": "flightNo",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "origin",
              "isPK": false
            },
            {
              "name": "destination",
              "isPK": false
            }
          ]
        },
        {
          "name": "Passenger",
          "isWeak": false,
          "pk": "passportNo",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "nationality",
              "isPK": false
            }
          ]
        },
        {
          "name": "Booking",
          "isWeak": false,
          "pk": "bookingRef",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "seatNo",
              "isPK": false
            },
            {
              "name": "pricePaid",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Jahongir Qosimov",
    "clientRole": "Hotel Front-Office Menejeri",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Rezervatsiyalari (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Mehmonxonada mehmon (Guest) bir nechta xona rezervatsiyalarini (Reservation) amalga oshirishi mumkin (1..*). Har bir xona (Room) esa turli vaqtlarda ko'plab rezervatsiyalarga xizmat ko'rsatadi (0..*).\n\n'Guest' -> 'Reservation' (1..1 <-> 1..*) va 'Room' -> 'Reservation' (1..1 <-> 0..*) aloqalarini o'rnating.",
    "instruction": "'Guest' ni 'Reservation' ga (1..1 <-> 1..*), 'Room' ni 'Reservation' ga (1..1 <-> 0..*) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Guest",
          "isWeak": false,
          "pk": "guestId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "guestId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "passport",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "isWeak": false,
          "pk": "roomNo",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "floor",
              "isPK": false
            }
          ]
        },
        {
          "name": "Reservation",
          "isWeak": false,
          "pk": "resNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "resNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "checkIn",
              "isPK": false
            },
            {
              "name": "checkOut",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sardor Olimov",
    "clientRole": "Scrum Master & Texnik Lider",
    "clientAvatar": "mentor",
    "title": "IT Mahsulot Loyihasi — Sprints & Tasks (3 ta Entitiy) (Relatsion Sxema)",
    "story": "IT dasturiy loyihasida (Project) bir nechta rivojlantirish sprintlari (Sprint) rejalashtiriladi (1..*). Har bir sprint tarkibida esa jamoa bajaradigan ko'plab vazifalar (IssueTask) mavjud (0..*).\n\n'Project' -> 'Sprint' (1..1 <-> 1..*) va 'Sprint' -> 'IssueTask' (1..1 <-> 0..*) aloqalarini chizing.",
    "instruction": "'Project' ni 'Sprint' ga (1..1 <-> 1..*), 'Sprint' ni 'IssueTask' ga (1..1 <-> 0..*) ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Project",
          "isWeak": false,
          "pk": "projectKey",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "projectKey",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "projectName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Sprint",
          "isWeak": false,
          "pk": "sprintId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "sprintId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "sprintGoal",
              "isPK": false
            },
            {
              "name": "endDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "IssueTask",
          "isWeak": false,
          "pk": "taskId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "taskId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "taskTitle",
              "isPK": false
            },
            {
              "name": "storyPoints",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Madina Shokirova",
    "clientRole": "Bank Kredit Departamenti Direktori",
    "clientAvatar": "mentor",
    "title": "Bank Kredit Portfeli (4 ta Entitiy!) (Relatsion Sxema)",
    "story": "Bank filialida (BankBranch) kredit mutaxassislari (LoanOfficer) ishlaydi (1..*). Har bir mutaxassis bir nechta kredit hisoblarini (LoanAccount) nazorat qiladi (0..*). Qarz oluvchi mijoz (Borrower) esa kamida bitta kreditga ega bo'ladi (1..*).\n\n'BankBranch' -> 'LoanOfficer' (1..1 <-> 1..*), 'LoanOfficer' -> 'LoanAccount' (1..1 <-> 0..*) va 'Borrower' -> 'LoanAccount' (1..1 <-> 1..*) to'rtta entitiyli modelni quring.",
    "instruction": "BankBranch -> LoanOfficer (1..1 <-> 1..*), LoanOfficer -> LoanAccount (1..1 <-> 0..*), Borrower -> LoanAccount (1..1 <-> 1..*) aloqalarini chizing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "isWeak": false,
          "pk": "branchNo",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoanOfficer",
          "isWeak": false,
          "pk": "officerId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "officerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "officerName",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoanAccount",
          "isWeak": false,
          "pk": "loanId",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "loanId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "amount",
              "isPK": false
            },
            {
              "name": "interestRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Borrower",
          "isWeak": false,
          "pk": "cifCode",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "cifCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "borrowerName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Zafar Yoqubov",
    "clientRole": "Korzinka ERP Arxitektori",
    "clientAvatar": "mentor",
    "title": "Korzinka Savdo Kvitansiyasi (4 ta Entitiy!) (Relatsion Sxema)",
    "story": "Supermarket tarmog'ida do'konda (Store) kassirlar (Cashier) ishlaydi (1..*). Kassir xarid cheklari (Receipt) chiqaradi (0..*). Xaridor (Customer) chekka ixtiyoriy ravishda bog'lanadi (0..1), chunki kartasiz mijozlar ham xarid qilishi mumkin.\n\n'Store' -> 'Cashier' (1..1 <-> 1..*), 'Cashier' -> 'Receipt' (1..1 <-> 0..*) va 'Customer' -> 'Receipt' (0..1 <-> 0..*) aloqalarini yarating.",
    "instruction": "Store -> Cashier (1..1 <-> 1..*), Cashier -> Receipt (1..1 <-> 0..*), Customer -> Receipt (0..1 <-> 0..*) aloqalarini ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Store",
          "isWeak": false,
          "pk": "storeId",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "storeId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "storeName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Cashier",
          "isWeak": false,
          "pk": "cashierId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "cashierId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "cashierName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Receipt",
          "isWeak": false,
          "pk": "receiptNo",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "receiptNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            },
            {
              "name": "payDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Customer",
          "isWeak": false,
          "pk": "loyaltyId",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "loyaltyId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sanjar Karimberdiyev",
    "clientRole": "Rieltorlik Bosh Agentligi",
    "clientAvatar": "mentor",
    "title": "Ko'chmas Mulk Savdosi (3 ta Entitiy — Ixtiyoriy Agent 0..1) (Relatsion Sxema)",
    "story": "Mulk egasi (Owner) kamida 1 ta ko'chmas mulkka (Property) ega (1..*). Mulkni sotish esa ixtiyoriy ravishda 1 ta rieltor agentga (EstateAgent) topshirilishi mumkin (0..1). Agent bir nechta ob'yektlarni sotuvga chiqaradi (0..*).\n\n'Owner' -> 'Property' (1..1 <-> 1..*) va 'EstateAgent' -> 'Property' (0..1 <-> 0..*) aloqalarini bog'lang.",
    "instruction": "Owner -> Property (1..1 <-> 1..*) va EstateAgent -> Property (0..1 <-> 0..*) aloqalarini chizing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Owner",
          "isWeak": false,
          "pk": "ownerId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "ownerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "ownerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "EstateAgent",
          "isWeak": false,
          "pk": "agentId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "agentId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "agentName",
              "isPK": false
            },
            {
              "name": "commission",
              "isPK": false
            }
          ]
        },
        {
          "name": "Property",
          "isWeak": false,
          "pk": "propertyNo",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "propertyNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "address",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Gavhar Mahmudova",
    "clientRole": "Kutubxona Tizim Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Universitet Kutubxonasi Abonementi (3 ta Entitiy) (Relatsion Sxema)",
    "story": "Talaba (Student) kutubxonadan kitob olishi (BookLoan) mumkin (0..*). Har bir aniq kitob nusxasi (BookCopy) ham vaqti-vaqti bilan ijaraga beriladi (0..*). Har bir ijara kvitansiyasi 1 ta talaba va 1 ta kitob nusxasiga tegishli (1..1).\n\n'Student' -> 'BookLoan' (1..1 <-> 0..*) va 'BookCopy' -> 'BookLoan' (1..1 <-> 0..*) aloqalarini chizing.",
    "instruction": "Student -> BookLoan (1..1 <-> 0..*) va BookCopy -> BookLoan (1..1 <-> 0..*) bog'lanishlarini o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "pk": "studentId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "studentName",
              "isPK": false
            },
            {
              "name": "faculty",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookCopy",
          "isWeak": false,
          "pk": "barcode",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "barcode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "editionYear",
              "isPK": false
            },
            {
              "name": "shelfLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookLoan",
          "isWeak": false,
          "pk": "loanId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "loanId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "returnDue",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Ulug'bek Nazarov",
    "clientRole": "Xalqaro Logistika Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Logistika va Yetkazib Berish Zanjiri (4 ta Entitiy!) (Relatsion Sxema)",
    "story": "Markaziy logistika omboriga (Warehouse) bir nechta yuk mashinalari (CargoTruck) biriktiriladi (1..*). Har bir yuk mashinasiga aniq 1 ta shtatdagi haydovchi (Driver) javobgar (1..1). Yuk mashinasi esa bir nechta marshrut reyslarini (DeliveryRoute) bajaradi (0..*).\n\n'Warehouse' -> 'CargoTruck' (1..1 <-> 1..*), 'CargoTruck' -> 'Driver' (1..1 <-> 1..1) va 'CargoTruck' -> 'DeliveryRoute' (1..1 <-> 0..*) to'rtta entitiyli tizimni quring.",
    "instruction": "Warehouse -> CargoTruck (1..1 <-> 1..*), CargoTruck -> Driver (1..1 <-> 1..1), CargoTruck -> DeliveryRoute (1..1 <-> 0..*) aloqalarini chizing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "isWeak": false,
          "pk": "whCode",
          "x": 120,
          "y": 100,
          "attributes": [
            {
              "name": "whCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "whName",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "CargoTruck",
          "isWeak": false,
          "pk": "truckId",
          "x": 480,
          "y": 100,
          "attributes": [
            {
              "name": "truckId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "plateNumber",
              "isPK": false
            },
            {
              "name": "capacityTons",
              "isPK": false
            }
          ]
        },
        {
          "name": "Driver",
          "isWeak": false,
          "pk": "licenseNo",
          "x": 120,
          "y": 320,
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "driverName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "DeliveryRoute",
          "isWeak": false,
          "pk": "routeId",
          "x": 480,
          "y": 320,
          "attributes": [
            {
              "name": "routeId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "routeDestination",
              "isPK": false
            },
            {
              "name": "departTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Mehmonxona va Xonalar (Zaif Entitiy) (Relatsion Sxema)",
    "story": "'HotelRoom' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Hotel' (hotelId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'roomNo' {PPK} hisoblanadi.\n\n'Hotel' (1..1) va 'HotelRoom' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Hotel' va zaif 'HotelRoom' entitiylarini identifikatsion aloqa bilan bog'lang (Hotel 1..1, HotelRoom 1..*). 'HotelRoom' entitiyida 'Zaif {W}' rejimini yoqing va 'roomNo' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "isWeak": false,
          "pk": "hotelId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "hotelName",
              "isPK": false
            }
          ]
        },
        {
          "name": "HotelRoom",
          "isWeak": true,
          "pk": "roomNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Buyurtma va Buyurtma Qatorlari (OrderItem) (Relatsion Sxema)",
    "story": "'OrderItem' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Order' (orderNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'itemSeq' {PPK} hisoblanadi.\n\n'Order' (1..1) va 'OrderItem' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Order' va zaif 'OrderItem' entitiylarini identifikatsion aloqa bilan bog'lang (Order 1..1, OrderItem 1..*). 'OrderItem' entitiyida 'Zaif {W}' rejimini yoqing va 'itemSeq' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Order",
          "isWeak": false,
          "pk": "orderNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "orderDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "OrderItem",
          "isWeak": true,
          "pk": "itemSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "itemSeq",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "qty",
              "isPK": false
            },
            {
              "name": "unitPrice",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Bino va Qavatlar (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "'Floor' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Building' (buildingCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'floorNo' {PPK} hisoblanadi.\n\n'Building' (1..1) va 'Floor' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Building' va zaif 'Floor' entitiylarini identifikatsion aloqa bilan bog'lang (Building 1..1, Floor 1..*). 'Floor' entitiyida 'Zaif {W}' rejimini yoqing va 'floorNo' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "isWeak": false,
          "pk": "buildingCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "buildingCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "Floor",
          "isWeak": true,
          "pk": "floorNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "floorNo",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "areaSqM",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Xodim va Qaramog'idagilar (Dependent) (Relatsion Sxema)",
    "story": "'Dependent' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Employee' (empId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'depName' {PPK} hisoblanadi.\n\n'Employee' (1..1) va 'Dependent' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Employee' va zaif 'Dependent' entitiylarini identifikatsion aloqa bilan bog'lang (Employee 1..1, Dependent 1..*). 'Dependent' entitiyida 'Zaif {W}' rejimini yoqing va 'depName' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "pk": "empId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "empId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "Dependent",
          "isWeak": true,
          "pk": "depName",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "depName",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "relationship",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Bank Hisob va Oylik Ko'chirmalar (Relatsion Sxema)",
    "story": "'AccountStatement' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'BankAccount' (accountNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'statementSeq' {PPK} hisoblanadi.\n\n'BankAccount' (1..1) va 'AccountStatement' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'BankAccount' va zaif 'AccountStatement' entitiylarini identifikatsion aloqa bilan bog'lang (BankAccount 1..1, AccountStatement 1..*). 'AccountStatement' entitiyida 'Zaif {W}' rejimini yoqing va 'statementSeq' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "isWeak": false,
          "pk": "accountNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "currency",
              "isPK": false
            }
          ]
        },
        {
          "name": "AccountStatement",
          "isWeak": true,
          "pk": "statementSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "statementSeq",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "statementMonth",
              "isPK": false
            },
            {
              "name": "totalInflow",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Aviaqatnov va Parvoz Bosqichlari (FlightLeg) (Relatsion Sxema)",
    "story": "'FlightLeg' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Flight' (flightNo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'legNumber' {PPK} hisoblanadi.\n\n'Flight' (1..1) va 'FlightLeg' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Flight' va zaif 'FlightLeg' entitiylarini identifikatsion aloqa bilan bog'lang (Flight 1..1, FlightLeg 1..*). 'FlightLeg' entitiyida 'Zaif {W}' rejimini yoqing va 'legNumber' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "isWeak": false,
          "pk": "flightNo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "airlineCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightLeg",
          "isWeak": true,
          "pk": "legNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "legNumber",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "originAir",
              "isPK": false
            },
            {
              "name": "destAir",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Shifoxona Palatasi va Yotoq O'rinlari (Relatsion Sxema)",
    "story": "'WardBed' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'HospitalWard' (wardCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'bedNumber' {PPK} hisoblanadi.\n\n'HospitalWard' (1..1) va 'WardBed' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'HospitalWard' va zaif 'WardBed' entitiylarini identifikatsion aloqa bilan bog'lang (HospitalWard 1..1, WardBed 1..*). 'WardBed' entitiyida 'Zaif {W}' rejimini yoqing va 'bedNumber' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "isWeak": false,
          "pk": "wardCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "wardCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            }
          ]
        },
        {
          "name": "WardBed",
          "isWeak": true,
          "pk": "bedNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "bedNumber",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "isOccupied",
              "isPK": false
            },
            {
              "name": "bedType",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Kitob va Boblar Tuzilmasi (BookChapter) (Relatsion Sxema)",
    "story": "'BookChapter' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'PublishingBook' (bookIsbn {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'chapterNo' {PPK} hisoblanadi.\n\n'PublishingBook' (1..1) va 'BookChapter' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'PublishingBook' va zaif 'BookChapter' entitiylarini identifikatsion aloqa bilan bog'lang (PublishingBook 1..1, BookChapter 1..*). 'BookChapter' entitiyida 'Zaif {W}' rejimini yoqing va 'chapterNo' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PublishingBook",
          "isWeak": false,
          "pk": "bookIsbn",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "bookIsbn",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "bookTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookChapter",
          "isWeak": true,
          "pk": "chapterNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "chapterNo",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "chapterTitle",
              "isPK": false
            },
            {
              "name": "pageCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Konteyner Kemasi va Yuk Bo'limlari (Relatsion Sxema)",
    "story": "'CargoContainer' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'CargoShip' (shipImo {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'containerSlot' {PPK} hisoblanadi.\n\n'CargoShip' (1..1) va 'CargoContainer' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'CargoShip' va zaif 'CargoContainer' entitiylarini identifikatsion aloqa bilan bog'lang (CargoShip 1..1, CargoContainer 1..*). 'CargoContainer' entitiyida 'Zaif {W}' rejimini yoqing va 'containerSlot' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CargoShip",
          "isWeak": false,
          "pk": "shipImo",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "shipImo",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "shipName",
              "isPK": false
            }
          ]
        },
        {
          "name": "CargoContainer",
          "isWeak": true,
          "pk": "containerSlot",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "containerSlot",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "cargoType",
              "isPK": false
            },
            {
              "name": "weightTons",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Universitet Fani va Guruh Potoklari (Relatsion Sxema)",
    "story": "'CourseSection' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'UniversityCourse' (courseCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sectionCode' {PPK} hisoblanadi.\n\n'UniversityCourse' (1..1) va 'CourseSection' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'UniversityCourse' va zaif 'CourseSection' entitiylarini identifikatsion aloqa bilan bog'lang (UniversityCourse 1..1, CourseSection 1..*). 'CourseSection' entitiyida 'Zaif {W}' rejimini yoqing va 'sectionCode' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityCourse",
          "isWeak": false,
          "pk": "courseCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "courseName",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourseSection",
          "isWeak": true,
          "pk": "sectionCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sectionCode",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "maxStudents",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Dori Retsepti va Qabul Qilish Dozalari (Relatsion Sxema)",
    "story": "'DoseSchedule' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Prescription' (rxId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'doseIndex' {PPK} hisoblanadi.\n\n'Prescription' (1..1) va 'DoseSchedule' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Prescription' va zaif 'DoseSchedule' entitiylarini identifikatsion aloqa bilan bog'lang (Prescription 1..1, DoseSchedule 1..*). 'DoseSchedule' entitiyida 'Zaif {W}' rejimini yoqing va 'doseIndex' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Prescription",
          "isWeak": false,
          "pk": "rxId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "rxId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "prescribedDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "DoseSchedule",
          "isWeak": true,
          "pk": "doseIndex",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "doseIndex",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "timeOfDay",
              "isPK": false
            },
            {
              "name": "doseAmount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Ombor Yo'lagi va Saqlash Yacheykalari (Relatsion Sxema)",
    "story": "'StorageBin' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'WarehouseAisle' (aisleCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'binNumber' {PPK} hisoblanadi.\n\n'WarehouseAisle' (1..1) va 'StorageBin' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'WarehouseAisle' va zaif 'StorageBin' entitiylarini identifikatsion aloqa bilan bog'lang (WarehouseAisle 1..1, StorageBin 1..*). 'StorageBin' entitiyida 'Zaif {W}' rejimini yoqing va 'binNumber' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "WarehouseAisle",
          "isWeak": false,
          "pk": "aisleCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "aisleCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "zoneCategory",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageBin",
          "isWeak": true,
          "pk": "binNumber",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "binNumber",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "shelfTier",
              "isPK": false
            },
            {
              "name": "capacityKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Dasturiy Loyiha va Bosqich Marralari (Relatsion Sxema)",
    "story": "'ProjectMilestone' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'SoftwareProject' (projectKey {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'milestoneSeq' {PPK} hisoblanadi.\n\n'SoftwareProject' (1..1) va 'ProjectMilestone' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'SoftwareProject' va zaif 'ProjectMilestone' entitiylarini identifikatsion aloqa bilan bog'lang (SoftwareProject 1..1, ProjectMilestone 1..*). 'ProjectMilestone' entitiyida 'Zaif {W}' rejimini yoqing va 'milestoneSeq' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwareProject",
          "isWeak": false,
          "pk": "projectKey",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "projectKey",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "projectName",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProjectMilestone",
          "isWeak": true,
          "pk": "milestoneSeq",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "milestoneSeq",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "milestoneTitle",
              "isPK": false
            },
            {
              "name": "dueDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Ilmiy Konferensiya va Seksiyalar (Relatsion Sxema)",
    "story": "'ConferenceSession' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'Conference' (confCode {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sessionNo' {PPK} hisoblanadi.\n\n'Conference' (1..1) va 'ConferenceSession' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'Conference' va zaif 'ConferenceSession' entitiylarini identifikatsion aloqa bilan bog'lang (Conference 1..1, ConferenceSession 1..*). 'ConferenceSession' entitiyida 'Zaif {W}' rejimini yoqing va 'sessionNo' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Conference",
          "isWeak": false,
          "pk": "confCode",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "confCode",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "confTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "ConferenceSession",
          "isWeak": true,
          "pk": "sessionNo",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sessionNo",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "topicName",
              "isPK": false
            },
            {
              "name": "startTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • Zaif Entitiy",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Aloqa Minoralari va Antennalar Sektori (Relatsion Sxema)",
    "story": "'AntennaSector' mustaqil holda yashay olmaydigan zaif entitiydir (Weak Entity). U o'z ota entitiysi 'CellTower' (towerId {PK}) ga qat'iy bog'langan va uning birlamchi kaliti qisman kalit 'sectorCode' {PPK} hisoblanadi.\n\n'CellTower' (1..1) va 'AntennaSector' (1..*) o'rtasida identifikatsion aloqani o'rnating.",
    "instruction": "'CellTower' va zaif 'AntennaSector' entitiylarini identifikatsion aloqa bilan bog'lang (CellTower 1..1, AntennaSector 1..*). 'AntennaSector' entitiyida 'Zaif {W}' rejimini yoqing va 'sectorCode' kalitini {PPK} belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "isWeak": false,
          "pk": "towerId",
          "x": 140,
          "y": 160,
          "attributes": [
            {
              "name": "towerId",
              "isPK": true,
              "isPPK": false
            },
            {
              "name": "locationGps",
              "isPK": false
            }
          ]
        },
        {
          "name": "AntennaSector",
          "isWeak": true,
          "pk": "sectorCode",
          "x": 520,
          "y": 160,
          "attributes": [
            {
              "name": "sectorCode",
              "isPK": true,
              "isPPK": true
            },
            {
              "name": "azimuthAngle",
              "isPK": false
            },
            {
              "name": "frequencyMhz",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
    }
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • Assotsiativ",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Shifokor va Bemor Qabuli (Appointment Assotsiativ Entitiy) (Relatsion Sxema)",
    "story": "Doctor va Patient o'rtasida ko'pdan-ko'pga (*:*) munosabat mavjud. Ushbu munosabat mustaqil 'Appointment' assotsiativ entitiysi orqali parchalanadi. Doctor (1..1 <-> 0..*) Appointment va Patient (1..1 <-> 0..*) Appointment.",
    "instruction": "'Doctor' ni 'Appointment' ga (1..1 <-> 0..*) va 'Patient' ni 'Appointment' ga (1..1 <-> 0..*) bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "isWeak": false,
          "pk": "doctorId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Patient",
          "isWeak": false,
          "pk": "patientId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Appointment",
          "isWeak": false,
          "pk": "appId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "appId",
              "isPK": true,
              "isPPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "doctorId"
        },
        {
          "name": "Patient",
          "pk": "patientId"
        },
        {
          "name": "Appointment",
          "pk": "appId"
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
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "fromEntityName": "Patient",
          "toEntityName": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • Assotsiativ",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Talaba va Fan Kurslari (Enrollment Assotsiativ Entitiy) (Relatsion Sxema)",
    "story": "Student va Course o'rtasida ko'pdan-ko'pga (*:*) o'qish munosabati mavjud. Bu munosabat 'Enrollment' assotsiativ entitiysi orqali bog'lanadi. Student (1..1 <-> 0..*) Enrollment va Course (1..1 <-> 0..*) Enrollment.",
    "instruction": "'Student' ni 'Enrollment' ga (1..1 <-> 0..*) va 'Course' ni 'Enrollment' ga (1..1 <-> 0..*) bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "pk": "studentId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Course",
          "isWeak": false,
          "pk": "courseCode",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Enrollment",
          "isWeak": false,
          "pk": "enrollmentId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true,
              "isPPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId"
        },
        {
          "name": "Course",
          "pk": "courseCode"
        },
        {
          "name": "Enrollment",
          "pk": "enrollmentId"
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
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Course",
          "entity2": "Enrollment",
          "fromEntityName": "Course",
          "toEntityName": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • Assotsiativ",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Dasturchi va Loyihalar (Assignment Assotsiativ Entitiy) (Relatsion Sxema)",
    "story": "Developer va Project o'rtasidagi *:* munosabat 'ProjectAssignment' entitiysi orqali yechiladi. Developer (1..1 <-> 0..*) ProjectAssignment va Project (1..1 <-> 0..*) ProjectAssignment.",
    "instruction": "'Developer' ni 'ProjectAssignment' ga (1..1 <-> 0..*) va 'Project' ni 'ProjectAssignment' ga (1..1 <-> 0..*) bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Developer",
          "isWeak": false,
          "pk": "devId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "devId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Project",
          "isWeak": false,
          "pk": "projectKey",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "projectKey",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "isWeak": false,
          "pk": "assignmentId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "assignmentId",
              "isPK": true,
              "isPPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId"
        },
        {
          "name": "Project",
          "pk": "projectKey"
        },
        {
          "name": "ProjectAssignment",
          "pk": "assignmentId"
        }
      ],
      "relationships": [
        {
          "entity1": "Developer",
          "entity2": "ProjectAssignment",
          "fromEntityName": "Developer",
          "toEntityName": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Project",
          "entity2": "ProjectAssignment",
          "fromEntityName": "Project",
          "toEntityName": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • Assotsiativ",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Yetkazib Beruvchi va Detallar (SupplyContract Assotsiativ Entitiy) (Relatsion Sxema)",
    "story": "Supplier va Part o'rtasidagi *:* ta'minot munosabati 'SupplyContract' orqali yechiladi. Supplier (1..1 <-> 0..*) SupplyContract va Part (1..1 <-> 0..*) SupplyContract.",
    "instruction": "'Supplier' ni 'SupplyContract' ga (1..1 <-> 0..*) va 'Part' ni 'SupplyContract' ga (1..1 <-> 0..*) bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Supplier",
          "isWeak": false,
          "pk": "supplierId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Part",
          "isWeak": false,
          "pk": "partNumber",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "SupplyContract",
          "isWeak": false,
          "pk": "contractId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "contractId",
              "isPK": true,
              "isPPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Supplier",
          "pk": "supplierId"
        },
        {
          "name": "Part",
          "pk": "partNumber"
        },
        {
          "name": "SupplyContract",
          "pk": "contractId"
        }
      ],
      "relationships": [
        {
          "entity1": "Supplier",
          "entity2": "SupplyContract",
          "fromEntityName": "Supplier",
          "toEntityName": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Part",
          "entity2": "SupplyContract",
          "fromEntityName": "Part",
          "toEntityName": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • Assotsiativ",
    "clientName": "Professor Atlas",
    "clientRole": "Ma'lumotlar Bazasi Me'mori",
    "clientAvatar": "mentor",
    "title": "Xaridor va Mahsulot Sharhlari (ProductReview Assotsiativ Entitiy) (Relatsion Sxema)",
    "story": "Customer va Product o'rtasidagi *:* sharh munosabati 'ProductReview' assotsiativ entitiysi orqali amalga oshiriladi. Customer (1..1 <-> 0..*) ProductReview va Product (1..1 <-> 0..*) ProductReview.",
    "instruction": "'Customer' ni 'ProductReview' ga (1..1 <-> 0..*) va 'Product' ni 'ProductReview' ga (1..1 <-> 0..*) bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "isWeak": false,
          "pk": "customerId",
          "x": 140,
          "y": 100,
          "attributes": [
            {
              "name": "customerId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "Product",
          "isWeak": false,
          "pk": "productId",
          "x": 540,
          "y": 100,
          "attributes": [
            {
              "name": "productId",
              "isPK": true,
              "isPPK": false
            }
          ]
        },
        {
          "name": "ProductReview",
          "isWeak": false,
          "pk": "reviewId",
          "x": 340,
          "y": 320,
          "attributes": [
            {
              "name": "reviewId",
              "isPK": true,
              "isPPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "customerId"
        },
        {
          "name": "Product",
          "pk": "productId"
        },
        {
          "name": "ProductReview",
          "pk": "reviewId"
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "ProductReview",
          "fromEntityName": "Customer",
          "toEntityName": "ProductReview",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Product",
          "entity2": "ProductReview",
          "fromEntityName": "Product",
          "toEntityName": "ProductReview",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.EER_CLIENTS_1_50;
}
