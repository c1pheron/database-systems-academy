var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya Havo Kemalarini Hisobga Olish",
    "story": "Milliy aviakompaniya o'zining yo'lovchi va yuk tashuvchi samolyotlari parkini yagona raqamli reyestrda qayd etishni boshlamoqda. Texnik xizmat ko'rsatish va reyslarni rejalashtirish bo'limlari har bir samolyotning aniq texnik parametrlarini bilishi shart.\n\nTizimda asosiy mustaqil entitiy sifatida samolyotlar (**Aircraft**) ro'yxatga olinadi. Har bir samolyot xalqaro fuqaro aviatsiyasi qoidalariga muvofiq quyruq raqami (`tailNo`) orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nShuningdek, havo kemasining modeli (`model`), ishlab chiqaruvchi zavodi (`manufacturer`) hamda yo'lovchi o'rindiqlari sig'imi (`capacity`) atributlari saqlanadi.",
    "instruction": "'Aircraft' kuchli entitiysini yarating, uning 'tailNo' birlamchi kalitini {PK} belgilang va qolgan atributlarini to'g'ri joylashtiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "pk": "tailNo",
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "manufacturer",
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
    }
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Kardiologiya Markazi Bemorlar Elektron Kartasi",
    "story": "Respublika kardiologiya markazida shoshilinch va rejali davolanuvchi bemorlarning elektron tibbiy kartasini yuritish joriy etilmoqda. Shifokorlar har bir bemorning shaxsiy ma'lumotlari va qon guruhini tezkorlik bilan aniqlashlari zarur.\n\nAxborot tizimining markaziy ob'yekti — Bemor (**Patient**) entitiysidir. Har bir murojaat qilgan fuqaroga shifoxona qabulxonasida noyob raqamli karta kodi (`patientId`) biriktiriladi va bu maydon Birlamchi Kalit {PK} vazifasini o'taydi.\n\nBemor to'g'risida uning to'liq ismi-sharifi (`fullName`), tug'ilgan sanasi (`dob`), tibbiy muolajalar uchun qon guruhi (`bloodType`) hamda shaxsiy telefoni (`phone`) kiritiladi.",
    "instruction": "'Patient' entitiysini polotnoda yarating, 'patientId' maydonini {PK} qilib belgilang va bemor atributlarini to'ldiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
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
              "name": "dob",
              "isPK": false
            },
            {
              "name": "bloodType",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Bobur Mansurov",
    "clientRole": "Bosh Registrator",
    "clientAvatar": "mentor",
    "title": "Xalqaro Universitet Talabalar Akademik Reyestri",
    "story": "Universitetda talabalarning o'quv natijalari, GPA ko'rsatkichlari va stipendiya hisob-kitoblarini avtomatlashtirish rejalashtirilgan. Dekanat barcha qabul qilingan talabalar haqida to'liq hisobotga ega bo'lishi lozim.\n\nTizimda Talaba (**Student**) mustaqil kuchli entitiy hisoblanadi. Har bir talabaga rasmiy talabalik ID raqami (`studentId`) taqdim etiladi va bu Birlamchi Kalit {PK} bo'ladi.\n\nTalabaning shaxsiy ma'lumotlari sifatida uning ismi (`firstName`), familiyasi (`lastName`), korporativ elektron pochtasi (`email`) va umumiy o'rtacha o'zlashtirish bali (`gpa`) qayd etiladi.",
    "instruction": "'Student' entitiysini hosil qiling, 'studentId' ni {PK} deb belgilang va talabaning shaxsiy atributlarini qo'shing.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
              "name": "firstName",
              "isPK": false
            },
            {
              "name": "lastName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "gpa",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Davlat Ilmiy Kutubxonasi Kitoblar Fondi",
    "story": "Ilmiy axborot kutubxona markazida kitoblar fondini elektron kataloglashtirish ishlari olib borilmoqda. Kitobxonlar nashrlarni tez va aniq topishlari uchun yagona inventarizatsiya talab etiladi.\n\nKatalogda har bir nashr Kitob (**Book**) entitiysi orqali ifodalanadi. Nashriyot xalqaro standartiga ko'ra kitoblarga noyob 13 xonali ISBN raqami (`isbn`) beriladi va bu Birlamchi Kalit {PK} bo'lib xizmat qiladi.\n\nShuningdek, asarning nomi (`title`), asosiy muallifi (`author`), bosilgan yili (`publishYear`) va adabiy yo'nalishi (`genre`) saqlanadi.",
    "instruction": "'Book' entitiysini yarating, 'isbn' ga {PK} maqomini bering va uning bibliografik atributlarini kiriting.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Book",
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "author",
              "isPK": false
            },
            {
              "name": "publishYear",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Rustam Aliyev",
    "clientRole": "Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Avtosalon Transport Vositalari Katalogi",
    "story": "Rasmiy avtomobil dileri sotuvga keltirilgan yangi transport vositalarini hisobga oluvchi yagona dilerlik bazasini shakllantirmoqda. Har bir avtomobilning ishlab chiqarilgan yili va narxi shaffof bo'lishi kerak.\n\nTizimda avtomobillar **Vehicle** entitiysi hisoblanadi. Zavod tomonidan kuzovga urilgan 17 belgili noyob VIN-kod (`vin`) Birlamchi Kalit {PK} vazifasini o'taydi.\n\nAvtomobilning brend markasi (`make`), modeli (`model`), konveyerdan chiqqan yili (`prodYear`) hamda sotuv narxi (`price`) saqlanadi.",
    "instruction": "'Vehicle' entitiysini tuzing, 'vin' ni {PK} deb belgilang va avtomobil texnik parametrlarini joylashtiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "make",
              "isPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "prodYear",
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
    }
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "Tijorat Banki Mijozlar Hisob Raqamlari",
    "story": "Tijorat banki depozit mablag'larini xavfsiz saqlash va tranzaksiyalarni boshqarish maqsadida hisob raqamlar modulini modernizatsiya qilmoqda.\n\nTizimning asosiy moliyaviy birligi — Bank hisob raqami (**BankAccount**) entitiysidir. Har bir hisob 20 xonali xalqaro formatdagi noyob raqam (`accountNo`) bilan ochiladi va bu Birlamchi Kalit {PK} bo'ladi.\n\nHisobning joriy qoldig'i (`balance`), valyuta turi (`currency`), hisob ochilgan sana (`openDate`) hamda xizmat ko'rsatuvchi filial kodi (`branchCode`) qayd etiladi.",
    "instruction": "'BankAccount' entitiysini yarating, 'accountNo' ni {PK} qilib, moliyaviy atributlarni kiriting.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "pk": "accountNo",
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true
            },
            {
              "name": "balance",
              "isPK": false
            },
            {
              "name": "currency",
              "isPK": false
            },
            {
              "name": "openDate",
              "isPK": false
            },
            {
              "name": "branchCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Malika Yusupova",
    "clientRole": "Boshqaruvchi",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Xonalar Fondi Reyestri",
    "story": "Besh yulduzli mehmonxona majmuasi xonalarni onlayn bron qilish va mehmonlarni joylashtirishni to'liq avtomatlashtirmoqda.\n\nBino ichidagi har bir turar joy **HotelRoom** entitiysi hisoblanadi. Mehmonxona eshigidagi unikal xona raqami (`roomNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nXonaning toifasi (`roomType`), kunlik ijara narxi (`pricePerNight`), nechanchi qavatda joylashgani (`floorNo`) hamda sig'imi (`capacity`) kiritiladi.",
    "instruction": "'HotelRoom' entitiysini chizing, 'roomNo' ga {PK} maqomini bering va narx hamda sig'im xususiyatlarini qo'shing.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "pricePerNight",
              "isPK": false
            },
            {
              "name": "floorNo",
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
    }
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "Premium Restoran Mualliflik Taomnomasi",
    "story": "Zamonaviy restoran mijozlar uchun elektron planshet menyu va oshxona texnologik xaritalarini joriy qilmoqda. Har bir taomning narxi va kaloriyasi aniq bo'lishi zarur.\n\nMenyudagi har bir porsiya **MenuItem** entitiysi sifatida saqlanadi. Oshxona texnologik kartasidagi noyob taom kodi (`itemId`) Birlamchi Kalit {PK} bo'ladi.\n\nTaomning nomi (`name`), menyu bo'limi (`category`), sotuv bahosi (`price`) hamda parhez kaloriyasi (`calories`) qayd etiladi.",
    "instruction": "'MenuItem' entitiysini tuzing, 'itemId' maydonini {PK} qiling va taom parametrlarini to'ldiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MenuItem",
          "pk": "itemId",
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "calories",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "IT Kompaniyasi Muhandislik Shtati",
    "story": "Dasturiy ta'minot ishlab chiquvchi IT kompaniyasi dasturchilar va muhandislarning loyihalarga taqsimlanishini yagona reyestrda saqlamoqda.\n\nTizimda Dasturchi (**Developer**) mustaqil kuchli entitiy hisoblanadi. Kadrlar bo'limi tomonidan berilgan ichki xodim kodi (`devId`) Birlamchi Kalit {PK} hisoblanadi.\n\nXodimning to'liq ismi (`fullName`), egallab turgan lavozimi (`role`), asosiy dasturlash texnologiyalari (`techStack`) va maoshi (`salary`) saqlanadi.",
    "instruction": "'Developer' entitiysini yarating, 'devId' ga {PK} belgisini qo'ying va uning professional ma'lumotlarini to'ldiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "role",
              "isPK": false
            },
            {
              "name": "techStack",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Gipermarket Tovar Artikullari",
    "story": "Yirik onlayn marketpleys ombordagi barcha tovarlarni hisobga olish va kuryerlik yetkazib berish tizimi bilan bog'lash uchun katalog bazasini qurmoqda.\n\nKatalogdagi mahsulot **Product** entitiysi orqali ifodalanadi. Xalqaro logistika qoidasiga ko'ra har bir tovar turiga berilgan SKU artikul kodi (`sku`) Birlamchi Kalit {PK} bo'ladi.\n\nMahsulotning nomi (`title`), chakana narxi (`price`), ombordagi mavjud soni (`stockQty`) va yuk og'irligi (`weightKg`) yoziladi.",
    "instruction": "'Product' entitiysini chizing, 'sku' ga {PK} maqomini bering va uning ombor atributlarini kiriting.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Product",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "stockQty",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kinoteatrlar Tarmog'i Filmlar Jadvali",
    "story": "Raqamli kinoteatrlar tarmog'i zallarda namoyish qilinayotgan filmlarni seanslarga taqsimlash uchun yagona kino asarlari bazasini shakllantirmoqda.\n\nTizimda film **Movie** entitiysi hisoblanadi. Filmning davlat prokat guvohnomasi raqami (`movieId`) Birlamchi Kalit {PK} sifatida qabul qilingan.\n\nFilmning rasmiy nomi (`title`), bosh rejissori (`director`), davomiyligi daqiqalarda (`durationMin`) hamda tomoshabinlar yosh chegarasi (`ageRating`) saqlanadi.",
    "instruction": "'Movie' entitiysini polotnoga qo'shing, 'movieId' maydonini {PK} qiling va film xususiyatlarini to'ldiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Movie",
          "pk": "movieId",
          "attributes": [
            {
              "name": "movieId",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "director",
              "isPK": false
            },
            {
              "name": "durationMin",
              "isPK": false
            },
            {
              "name": "ageRating",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Markaziy Dorixona Dori Vositalari Inventari",
    "story": "Yirik dorixonalar tarmog'ida dori vositalarining saqlash muddati va qonuniy sertifikatlarini qat'iy nazorat qilish tizimi ishlab chiqilmoqda.\n\nTizimning asosiy ob'yekti — Dori vositasi (**Medicine**) entitiysidir. Dori qutisiga bosilgan xalqaro shtrix-kod raqami (`barcode`) Birlamchi Kalit {PK} hisoblanadi.\n\nDori vositasining savdo nomi (`name`), faol modda dozasi milligrammda (`dosageMg`), ishlab chiqaruvchi farmatsevtika zavodi (`manufacturer`) va yaroqlilik muddati (`expDate`) saqlanadi.",
    "instruction": "'Medicine' entitiysini tuzing, 'barcode' ni {PK} deb belgilang va dori parametrlarini kiriting.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Medicine",
          "pk": "barcode",
          "attributes": [
            {
              "name": "barcode",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "expDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Trans-Kontinental Yuk Mashinalari Avtoparki",
    "story": "Xalqaro tranzit yo'laklarida yuk tashiydigan korxona o'zining og'ir yuk tyagachlarini dispetcherlik nazoratiga olmoqda.\n\nTizimda har bir yuk mashinasi **CargoTruck** entitiysi orqali aks ettiriladi. Davlat avtomobil inspeksiyasi tomonidan berilgan davlat raqam belgisi (`plateNo`) Birlamchi Kalit {PK} bo'ladi.\n\nMashinaning ruxsat etilgan to'liq yuk ko'tarish quvvati (`capacityTons`), yoqilg'i turi (`fuelType`), bosib o'tgan masofasi (`mileageKm`) va texnik holati (`status`) saqlanadi.",
    "instruction": "'CargoTruck' entitiysini polotnoda yarating, 'plateNo' ga {PK} bering va uning yuk ko'rsatkichlarini kiriting.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CargoTruck",
          "pk": "plateNo",
          "attributes": [
            {
              "name": "plateNo",
              "isPK": true
            },
            {
              "name": "capacityTons",
              "isPK": false
            },
            {
              "name": "fuelType",
              "isPK": false
            },
            {
              "name": "mileageKm",
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
    }
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Premium Fitnes Klub A'zolari Reyestri",
    "story": "Zamonaviy sog'lomlashtirish va fitnes klubi a'zolik kartalari hisobini yuritish hamda turniketlardan o'tishni boshqarish uchun a'zolar bazasini yaratmoqda.\n\nTizimning markaziy entitiysi — Klub a'zosi (**ClubMember**) hisoblanadi. Mijozga klubga a'zo bo'lganda topshiriladigan RFID plastik karta raqami (`memberCardNo`) Birlamchi Kalit {PK} hisoblanadi.\n\nA'zoning to'liq ismi (`fullName`), a'zolik tarifi (`membershipType`), shartnoma tugash sanasi (`expiryDate`) hamda telefoni (`phone`) kiritiladi.",
    "instruction": "'ClubMember' entitiysini yarating, 'memberCardNo' ni {PK} qiling va a'zolik atributlarini to'ldiring.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ClubMember",
          "pk": "memberCardNo",
          "attributes": [
            {
              "name": "memberCardNo",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "membershipType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik",
    "clientAvatar": "mentor",
    "title": "Quyosh Fotoelektr Stansiyasi Invertorlari",
    "story": "Yirik quyosh fotoelektr stansiyasida quyosh panellaridan olinayotgan o'zgarmas tokni tarmoq tokiga aylantiruvchi invertorlar nazorati amalga oshiriladi.\n\nStansiyaning asosiy texnik birligi — Quyosh invertori (**SolarInverter**) entitiysidir. Zavod tomonidan korpusga o'yib yozilgan noyob seriya raqami (`serialNo`) Birlamchi Kalit {PK} bo'ladi.\n\nInvertorning maksimal quvvati (`peakPowerKw`), kirish kuchlanishi (`voltageInput`), o'rnatilgan sana (`installDate`) hamda samaradorlik koeffitsiyenti (`efficiency`) kiritiladi.",
    "instruction": "'SolarInverter' entitiysini yarating, 'serialNo' maydonini {PK} qiling va texnik parametrlarini saqlang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SolarInverter",
          "pk": "serialNo",
          "attributes": [
            {
              "name": "serialNo",
              "isPK": true
            },
            {
              "name": "peakPowerKw",
              "isPK": false
            },
            {
              "name": "voltageInput",
              "isPK": false
            },
            {
              "name": "installDate",
              "isPK": false
            },
            {
              "name": "efficiency",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    }
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Kapitan Anvar Salimov",
    "clientRole": "Flot Admiral Shtabi",
    "clientAvatar": "mentor",
    "title": "Harbiy Kema va Kema Komandiri",
    "story": "Harbiy dengiz floti nizomiga ko'ra, har bir jangovar kema faqat bitta tayinlangan kema komandiri (kapitan) tomonidan boshqariladi. O'z navbatida, har bir kapitan bir vaqtning o'zida faqat bitta kemaga qo'mondonlik qilishi mumkin va boshqa kemaga rahbarlik qilish huquqiga ega emas.\n\nTizimda jangovar kema **Warship** (korpus kodi `hullNo` {PK}, kema nomi `shipName`, suv sig'imi `displacementTons`, safga kirgan yili `commissionYear`) entitiysi orqali ifodalanadi.\n\nKema komandiri esa **Captain** (ofitser guvohnomasi `officerId` {PK}, to'liq ismi `officerName`, harbiy unvoni `rankGrade`, xizmat yillari `serviceYears`) entitiysi sifatida saqlanadi. Ular o'rtasida **CommandedBy** munosabati o'rnatiladi.",
    "instruction": "'Warship' va 'Captain' entitiylarini yarating, birlamchi kalitlarni belgilang va flot nizomiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warship",
          "pk": "hullNo",
          "attributes": [
            {
              "name": "hullNo",
              "isPK": true
            },
            {
              "name": "shipName",
              "isPK": false
            },
            {
              "name": "displacementTons",
              "isPK": false
            },
            {
              "name": "commissionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Captain",
          "pk": "officerId",
          "attributes": [
            {
              "name": "officerId",
              "isPK": true
            },
            {
              "name": "officerName",
              "isPK": false
            },
            {
              "name": "rankGrade",
              "isPK": false
            },
            {
              "name": "serviceYears",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warship",
          "entity2": "Captain",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CommandedBy"
        }
      ]
    }
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Polkovnik Botir Rahmonov",
    "clientRole": "DYXX Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi",
    "story": "Yo'l harakati xavfsizligi elektron ma'lumotlar bazasida har bir haydovchi o'ziga biriktirilgan rasmiy haydovchilik guvohnomasiga ega bo'ladi. Qonun bo'yicha har bir haydovchiga faqat bitta guvohnoma beriladi va har bir guvohnoma qat'iy ravishda bitta shaxsga tegishli bo'ladi.\n\nHaydovchi **Driver** entitiysi (`driverId` {PK}, ismi `fullName`, telefoni `phone`, qon guruhi `bloodGroup`) orqali aks ettiriladi.\n\nGuvohnoma esa **DriverLicense** entitiysi (`licenseNo` {PK}, toifalari `categories`, berilgan sana `issueDate`, amal qilish muddati `expiryDate`) sifatida qayd etiladi. Ular o'rtasida **Holds** aloqasi mavjud.",
    "instruction": "'Driver' va 'DriverLicense' entitiylarini shakllantiring, {PK} kalitlarini belgilang va ular o'rtasidagi to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Driver",
          "pk": "driverId",
          "attributes": [
            {
              "name": "driverId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            }
          ]
        },
        {
          "name": "DriverLicense",
          "pk": "licenseNo",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "categories",
              "isPK": false
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "DriverLicense",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "Holds"
        }
      ]
    }
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Mayor Sherzod Aliyev",
    "clientRole": "Pasport Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Biometrik ID Pasport",
    "story": "Davlat shaxsni tasdiqlovchi hujjatlar reyestrida har bir fuqaro yagona biometrik pasportga ega bo'lishi reglament bilan belgilangan. Bir fuqaro bir vaqtning o'zida ikkinchi faol pasportga ega bo'la olmaydi va pasport faqat bitta shaxs nomiga rasmiylashtiriladi.\n\nFuqaro **Citizen** entitiysi (shaxsiy identifikatsiya kodi `pinfl` {PK}, to'liq ismi `fullName`, tug'ilgan sanasi `birthDate`, fuqaroligi `nationality`) sifatida kiritiladi.\n\nPasport esa **Passport** entitiysi (pasport seriya raqami `passportNo` {PK}, amal qilish muddati `expiryDate`, bergan organ `issuedBy`, chip standarti `chipVersion`) sifatida saqlanadi. Aloqa: **IssuedTo**.",
    "instruction": "'Citizen' va 'Passport' entitiylarini tuzing, {PK} birlamchi kalitlarini belgilang va munosabat multiplisitiyasini to'g'ri qo'ying.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "pk": "pinfl",
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            },
            {
              "name": "nationality",
              "isPK": false
            }
          ]
        },
        {
          "name": "Passport",
          "pk": "passportNo",
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "issuedBy",
              "isPK": false
            },
            {
              "name": "chipVersion",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Passport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "IssuedTo"
        }
      ]
    }
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Nodir Hakimov",
    "clientRole": "Soliq Inspeksiyasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Kompaniya va Davlat Soliq Ro'yxat Guvohnomasi",
    "story": "Davlat soliq qo'mitasi reyestrida har bir yuridik korxona davlat ro'yxatidan o'tganligi haqida bitta rasmiy soliq guvohnomasiga ega bo'ladi. Har bir sertifikat qat'iy ravishda faqat bitta korxonaga tegishlidir.\n\nKompaniya **Company** entitiysi (soliq to'lovchining identifikatsiya raqami `tin` {PK}, firma nomi `companyName`, yuridik manzili `legalAddress`, faoliyat sohasi `industryType`) orqali belgilanadi.\n\nSoliq guvohnomasi **TaxCertificate** entitiysi (`certId` {PK}, soliqqa tortish rejimi `taxRegime`, kuchga kirgan sana `effectiveDate`, davlat reyestr raqami `regNumber`) sifatida saqlanadi. Munosabat: **CertifiedBy**.",
    "instruction": "'Company' va 'TaxCertificate' entitiylarini yarating, ularning {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Company",
          "pk": "tin",
          "attributes": [
            {
              "name": "tin",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "legalAddress",
              "isPK": false
            },
            {
              "name": "industryType",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxCertificate",
          "pk": "certId",
          "attributes": [
            {
              "name": "certId",
              "isPK": true
            },
            {
              "name": "taxRegime",
              "isPK": false
            },
            {
              "name": "effectiveDate",
              "isPK": false
            },
            {
              "name": "regNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Company",
          "entity2": "TaxCertificate",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CertifiedBy"
        }
      ]
    }
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Prof. Hasan Umarov",
    "clientRole": "Bosh Shifokor",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Bo'lim Bosh Vrachi",
    "story": "Ko'p tarmoqli klinika ichki nizomiga binoan, har bir davolash bo'limiga faqat bitta tajribali bosh vrach rahbarlik qiladi. Bosh vrach bir vaqtning o'zida ikkita bo'lim mudiri bo'lishi taqiqlanadi.\n\nTizimda bo'lim **HospitalDept** entitiysi (`deptCode` {PK}, bo'lim nomi `deptName`, qavati `floorNo`, o'rinlar soni `bedQuota`) orqali belgilanadi.\n\nBosh vrach esa **HeadDoctor** entitiysi (litsenziya kodi `licenseId` {PK}, shifokor ismi `doctorName`, mutaxassisligi `specialtyField`, telefoni `phone`) sifatida saqlanadi. Munosabat: **HeadedBy**.",
    "instruction": "'HospitalDept' va 'HeadDoctor' entitiylarini polotnoda yarating, birlamchi kalitlarni bering va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "bedQuota",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeadDoctor",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "specialtyField",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalDept",
          "entity2": "HeadDoctor",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "HeadedBy"
        }
      ]
    }
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Javohir Qosimov",
    "clientRole": "IT Aktivlar Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Xizmat Noutbuki",
    "story": "Korporativ IT xavfsizlik siyosatiga ko'ra, har bir xizmat noutbuki faqat bitta xodimga biriktiriladi. Ayrim yangi xodimlarga esa hali noutbuk ajratilmagan bo'lishi mumkin, lekin bitta noutbuk hech qachon ikki kishiga berilmaydi.\n\nXodim **StaffMember** entitiysi (`staffId` {PK}, xodim ismi `staffName`, lavozimi `jobTitle`, pochtasi `workEmail`) sifatida yuritiladi.\n\nNoutbuk esa **AssignedLaptop** entitiysi (aktiv kodi `assetTag` {PK}, seriya raqami `serialNo`, modeli `modelName`, operativ xotirasi `ramGb`) sifatida saqlanadi. Aloqa: **AssignedTo**.",
    "instruction": "'StaffMember' va 'AssignedLaptop' entitiylarini yarating, ixtiyoriylik qoidasini inobatga olgan holda multiplisitiyani belgilang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "StaffMember",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "jobTitle",
              "isPK": false
            },
            {
              "name": "workEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssignedLaptop",
          "pk": "assetTag",
          "attributes": [
            {
              "name": "assetTag",
              "isPK": true
            },
            {
              "name": "serialNo",
              "isPK": false
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "ramGb",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "StaffMember",
          "entity2": "AssignedLaptop",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "AssignedTo"
        }
      ]
    }
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Shavkat Toirov",
    "clientRole": "Devonxona Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Vazirlik va Soha Vaziri",
    "story": "Hukumat apparati ma'lumotlar bazasida har bir davlat vazirligi bitta tayinlangan soha vaziri tomonidan boshqariladi va har bir vazir faqat bitta vazirlikka rahbarlik qiladi.\n\nVazirlik **Ministry** entitiysi (`ministryId` {PK}, rasmiy nomi `officialTitle`, yillik byudjeti `budgetBillion`, binosi `location`) orqali ifodalanadi.\n\nVazir esa **Minister** entitiysi (`ministerId` {PK}, to'liq ismi `fullName`, tayinlangan sanasi `appointedDate`, prezident farmoni raqami `decreeNo`) sifatida saqlanadi. Aloqa: **LedBy**.",
    "instruction": "'Ministry' va 'Minister' entitiylarini polotnoda yarating, {PK} maydonlarini belgilang va to'g'ri multiplisitiyani qo'ying.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Ministry",
          "pk": "ministryId",
          "attributes": [
            {
              "name": "ministryId",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "budgetBillion",
              "isPK": false
            },
            {
              "name": "location",
              "isPK": false
            }
          ]
        },
        {
          "name": "Minister",
          "pk": "ministerId",
          "attributes": [
            {
              "name": "ministerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "appointedDate",
              "isPK": false
            },
            {
              "name": "decreeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Ministry",
          "entity2": "Minister",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "LedBy"
        }
      ]
    }
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Muzaffar Jo'rayev",
    "clientRole": "Bosh Kadastr Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mulkdor va Kadastr Pasporti",
    "story": "Ko'chmas mulk davlat kadastri idorasida xususiy yer uchastkasi yoki bino kadastr hujjati aynan bitta rasmiy mulkdor nomiga ro'yxatga olinadi va har bir mulkdor ushbu yer maydoni uchun bitta kadastr guvohnomasiga ega bo'ladi.\n\nMulkdor **PropertyOwner** entitiysi (`ownerId` {PK}, ismi `ownerName`, telefoni `phone`, soliq to'lovchi kodi `taxPayerCode`) orqali kiritiladi.\n\nKadastr pasporti esa **CadastreDeed** entitiysi (`deedNo` {PK}, kadastr zonasi `cadastralZone`, maydoni `landAreaSqm`, ro'yxatga olingan sana `registeredDate`) sifatida saqlanadi. Aloqa: **DeededWith**.",
    "instruction": "'PropertyOwner' va 'CadastreDeed' entitiylarini yarating, ularning {PK} kalitlarini belgilang va munosabat multiplisitiyasini o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PropertyOwner",
          "pk": "ownerId",
          "attributes": [
            {
              "name": "ownerId",
              "isPK": true
            },
            {
              "name": "ownerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "taxPayerCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "CadastreDeed",
          "pk": "deedNo",
          "attributes": [
            {
              "name": "deedNo",
              "isPK": true
            },
            {
              "name": "cadastralZone",
              "isPK": false
            },
            {
              "name": "landAreaSqm",
              "isPK": false
            },
            {
              "name": "registeredDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PropertyOwner",
          "entity2": "CadastreDeed",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "DeededWith"
        }
      ]
    }
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Sardor Saidov",
    "clientRole": "Kassa Texnik Muhandisi",
    "clientAvatar": "mentor",
    "title": "Kassa Yo'lagi va Bank POS Terminali",
    "story": "Yirik supermarketda har bir kassa stoli xavfsizlik qoidasiga muvofiq faqat bitta statsionar bank to'lov terminali bilan jihozlanadi va har bir terminal faqat bitta kassa stoliga qat'iy biriktiriladi.\n\nKassa stoli **CheckoutLane** entitiysi (`laneNo` {PK}, stol kodi `deskCode`, nazoratchi `supervisorName`, holati `status`) orqali belgilanadi.\n\nBank terminali esa **PosTerminal** entitiysi (`terminalId` {PK}, tarmoq manzili `ipAddress`, savdogar kodi `merchantCode`, seriya raqami `serialNumber`) sifatida saqlanadi. Aloqa: **EquippedWith**.",
    "instruction": "'CheckoutLane' va 'PosTerminal' entitiylarini yarating, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CheckoutLane",
          "pk": "laneNo",
          "attributes": [
            {
              "name": "laneNo",
              "isPK": true
            },
            {
              "name": "deskCode",
              "isPK": false
            },
            {
              "name": "supervisorName",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "PosTerminal",
          "pk": "terminalId",
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true
            },
            {
              "name": "ipAddress",
              "isPK": false
            },
            {
              "name": "merchantCode",
              "isPK": false
            },
            {
              "name": "serialNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CheckoutLane",
          "entity2": "PosTerminal",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "EquippedWith"
        }
      ]
    }
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Munira Fayzullayeva",
    "clientRole": "Maktab Mudiri",
    "clientAvatar": "mentor",
    "title": "O'quvchi va Shaxsiy Saqlash Shkafchasi",
    "story": "Zamonaviy maktabda har bir shaxsiy metall shkafcha faqat bitta o'quvchiga foydalanish uchun beriladi. Yangi kelgan ayrim o'quvchilarga hali shkafcha taqsimlanmagan bo'lishi mumkin, ammo bitta shkafchadan ikki o'quvchi foydalana olmaydi.\n\nO'quvchi **Pupil** entitiysi (`pupilId` {PK}, to'liq ismi `fullName`, sinfi `gradeLevel`, xonasi `classRoom`) orqali ifodalanadi.\n\nShkafcha esa **SchoolLocker** entitiysi (`lockerNo` {PK}, qaysi yo'lakda joylashgani `hallwayWing`, qulf kodi `combinationCode`, tokchalar soni `shelfCount`) sifatida saqlanadi. Aloqa: **Allocated**.",
    "instruction": "'Pupil' va 'SchoolLocker' entitiylarini chizing, biznes talabini o'rganib to'g'ri multiplisitiyani polotnoda belgilang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Pupil",
          "pk": "pupilId",
          "attributes": [
            {
              "name": "pupilId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "gradeLevel",
              "isPK": false
            },
            {
              "name": "classRoom",
              "isPK": false
            }
          ]
        },
        {
          "name": "SchoolLocker",
          "pk": "lockerNo",
          "attributes": [
            {
              "name": "lockerNo",
              "isPK": true
            },
            {
              "name": "hallwayWing",
              "isPK": false
            },
            {
              "name": "combinationCode",
              "isPK": false
            },
            {
              "name": "shelfCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Pupil",
          "entity2": "SchoolLocker",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "Allocated"
        }
      ]
    }
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Oleg Smirnov",
    "clientRole": "Avia Inspektor",
    "clientAvatar": "mentor",
    "title": "Samolyot va Bort Qora Qutisi",
    "story": "Parvozlar xavfsizligi xalqaro konventsiyasiga muvofiq, har bir yo'lovchi samolyotiga aynan bitta asosiy qora quti (avariya bort yozuvchisi) o'rnatiladi va har bir yozuv moslamasi bitta samolyot fyuzelyajiga muhrlanadi.\n\nSamolyot **Airplane** entitiysi (planyor raqami `airframeNo` {PK}, bort raqami `tailNumber`, model kodi `modelCode`, parvoz soati `serviceHours`) orqali ifodalanadi.\n\nQora quti esa **FlightRecorder** entitiysi (`recorderId` {PK}, mayoq chastotasi `beaconFrequency`, xotira hajmi `memoryCapacityGb`, batareya muddati `batteryExpiry`) sifatida saqlanadi. Aloqa: **MonitoredBy**.",
    "instruction": "'Airplane' va 'FlightRecorder' entitiylarini yarating, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airplane",
          "pk": "airframeNo",
          "attributes": [
            {
              "name": "airframeNo",
              "isPK": true
            },
            {
              "name": "tailNumber",
              "isPK": false
            },
            {
              "name": "modelCode",
              "isPK": false
            },
            {
              "name": "serviceHours",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightRecorder",
          "pk": "recorderId",
          "attributes": [
            {
              "name": "recorderId",
              "isPK": true
            },
            {
              "name": "beaconFrequency",
              "isPK": false
            },
            {
              "name": "memoryCapacityGb",
              "isPK": false
            },
            {
              "name": "batteryExpiry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airplane",
          "entity2": "FlightRecorder",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "MonitoredBy"
        }
      ]
    }
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Yer Resurslari Mudiri",
    "clientAvatar": "mentor",
    "title": "Fermer Xo'jaligi va Yer Ijara Shartnomasi",
    "story": "Qishloq xo'jaligi yer fondi reyestrida har bir ro'yxatga olingan fermer xo'jaligi ajratilgan yer maydoni uchun bitta asosiy davlat yer ijara shartnomasiga ega bo'ladi. Har bir shartnoma faqat bitta fermer xo'jaligiga tegishlidir.\n\nFermer xo'jaligi **Farm** entitiysi (`farmRegNo` {PK}, fermer nomi `farmName`, viloyati `province`, asosiy ekini `cropType`) orqali belgilanadi.\n\nIjara shartnomasi esa **LandLeaseContract** entitiysi (`contractId` {PK}, gektar maydoni `hectares`, ijara tugash sanasi `leaseEndDate`, ro'yxat sanasi `regDate`) sifatida saqlanadi. Aloqa: **ContractedUnder**.",
    "instruction": "'Farm' va 'LandLeaseContract' entitiylarini shakllantiring, birlamchi kalitlarni belgilang va munosabat multiplisitiyasini o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Farm",
          "pk": "farmRegNo",
          "attributes": [
            {
              "name": "farmRegNo",
              "isPK": true
            },
            {
              "name": "farmName",
              "isPK": false
            },
            {
              "name": "province",
              "isPK": false
            },
            {
              "name": "cropType",
              "isPK": false
            }
          ]
        },
        {
          "name": "LandLeaseContract",
          "pk": "contractId",
          "attributes": [
            {
              "name": "contractId",
              "isPK": true
            },
            {
              "name": "hectares",
              "isPK": false
            },
            {
              "name": "leaseEndDate",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Farm",
          "entity2": "LandLeaseContract",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "ContractedUnder"
        }
      ]
    }
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Kamol Boboyev",
    "clientRole": "Protokol Rahbari",
    "clientAvatar": "mentor",
    "title": "Diplomatik Elchixona va Favqulodda Elchi",
    "story": "Tashqi ishlar vazirligi protokol qoidalariga binoan, xorijdagi har bir elchixonaga faqat bitta favqulodda va muxtor elchi rahbarlik qiladi va har bir elchi faqat bitta davlatdagi elchixonaga akkreditatsiya qilinadi.\n\nElchixona **Embassy** entitiysi (`embassyId` {PK}, joylashgan davlati `hostCountry`, shahri `cityLocation`, ochilgan yili `establishedYear`) orqali ifodalanadi.\n\nElchi esa **Ambassador** entitiysi (`diplomatId` {PK}, to'liq ismi `fullName`, ishonch yorlig'i topshirilgan sana `credentialDate`, diplomatik darajasi `diplomaticRank`) sifatida saqlanadi. Aloqa: **RepresentedBy**.",
    "instruction": "'Embassy' va 'Ambassador' entitiylarini tuzing, ularning {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Embassy",
          "pk": "embassyId",
          "attributes": [
            {
              "name": "embassyId",
              "isPK": true
            },
            {
              "name": "hostCountry",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            },
            {
              "name": "establishedYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Ambassador",
          "pk": "diplomatId",
          "attributes": [
            {
              "name": "diplomatId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "credentialDate",
              "isPK": false
            },
            {
              "name": "diplomaticRank",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Embassy",
          "entity2": "Ambassador",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "RepresentedBy"
        }
      ]
    }
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Akmal Fayziyev",
    "clientRole": "Inkassatsiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Filiali va Markaziy Pul Seyfi",
    "story": "Bank xavfsizlik reglamentiga ko'ra, har bir bank binosida naqd pullar va qimmatbaho metallarni saqlash uchun faqat bitta asosiy zirhli yerosti seyfi (Vault) quriladi va har bir seyf faqat bitta filial binosiga tegishli bo'ladi.\n\nBank filiali **BankBranch** entitiysi (`branchNo` {PK}, ko'chasi `street`, shahri `city`, telefoni `phone`) orqali ifodalanadi.\n\nSeyf esa **MainVault** entitiysi (`vaultId` {PK}, xavfsizlik sinfi `securityGrade`, maksimal sig'imi kilogrammda `capacityKg`, signalizatsiya kodi `alarmCode`) sifatida saqlanadi. Aloqa: **SecuredWith**.",
    "instruction": "'BankBranch' va 'MainVault' entitiylarini shakllantiring, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "MainVault",
          "pk": "vaultId",
          "attributes": [
            {
              "name": "vaultId",
              "isPK": true
            },
            {
              "name": "securityGrade",
              "isPK": false
            },
            {
              "name": "capacityKg",
              "isPK": false
            },
            {
              "name": "alarmCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankBranch",
          "entity2": "MainVault",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "SecuredWith"
        }
      ]
    }
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta (1..1)",
    "clientName": "Dilorom Ismoilova",
    "clientRole": "Antidoping Komissari",
    "clientAvatar": "mentor",
    "title": "Professional Atlet va Biologik Doping Pasporti",
    "story": "Xalqaro antidoping agentligi qoidalariga muvofiq, har bir professional sportchi o'zining doimiy biologik ko'rsatkichlarini kuzatuvchi bitta doping pasportiga ega bo'ladi va ushbu pasport faqat bitta sportchining biologik profilini ifodalaydi.\n\nSportchi **Athlete** entitiysi (`licenseId` {PK}, ismi `athleteName`, sport turi `sportDiscipline`, mamlakat kodi `countryCode`) orqali belgilanadi.\n\nDoping pasporti esa **DopingPassport** entitiysi (`passportCode` {PK}, qon profili `biologicalProfile`, oxirgi test sanasi `lastTestDate`, laboratoriya kodi `labCode`) sifatida saqlanadi. Aloqa: **TrackedBy**.",
    "instruction": "'Athlete' va 'DopingPassport' entitiylarini polotnoga qo'ying, {PK} kalitlarini belgilang va to'g'ri multiplisitiyani o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Athlete",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "sportDiscipline",
              "isPK": false
            },
            {
              "name": "countryCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "DopingPassport",
          "pk": "passportCode",
          "attributes": [
            {
              "name": "passportCode",
              "isPK": true
            },
            {
              "name": "biologicalProfile",
              "isPK": false
            },
            {
              "name": "lastTestDate",
              "isPK": false
            },
            {
              "name": "labCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Athlete",
          "entity2": "DopingPassport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "TrackedBy"
        }
      ]
    }
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Department va Lecturer Ierarxiyasi",
    "story": "Universitet Kadrlar sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Har bir kafedrada bir nechta o'qituvchi ishlaydi, biroq har bir o'qituvchi faqat bitta kafedra shtatiga biriktiriladi.\n\nTizimda ota entitiy sifatida **Department** (deptCode {PK}, `deptName`, `officeRoom`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **Lecturer** (lecturerId {PK}, `fullName`, `academicRank`, `salary`) entitiysi hisoblanadi. Ular o'rtasida **Employs** munosabati o'rnatiladi.",
    "instruction": "'Department' va 'Lecturer' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "officeRoom",
              "isPK": false
            }
          ]
        },
        {
          "name": "Lecturer",
          "pk": "lecturerId",
          "attributes": [
            {
              "name": "lecturerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "academicRank",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Department",
          "entity2": "Lecturer",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Employs"
        }
      ]
    }
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Publisher va BookEdition Ierarxiyasi",
    "story": "Matbaa Nashriyoti sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Nashriyot ko'plab kitob nashrlarini chop etadi, har bir kitob nashri esa aynan bitta nashriyot tomonidan chiqariladi.\n\nTizimda ota entitiy sifatida **Publisher** (publisherId {PK}, `companyName`, `address`, `phone`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **BookEdition** (editionIsbn {PK}, `title`, `printRun`, `price`) entitiysi hisoblanadi. Ular o'rtasida **Publishes** munosabati o'rnatiladi.",
    "instruction": "'Publisher' va 'BookEdition' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Publisher",
          "pk": "publisherId",
          "attributes": [
            {
              "name": "publisherId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookEdition",
          "pk": "editionIsbn",
          "attributes": [
            {
              "name": "editionIsbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "printRun",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Publisher",
          "entity2": "BookEdition",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Publishes"
        }
      ]
    }
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Customer va PaymentCard Ierarxiyasi",
    "story": "Fintech & Plastik Kartalar sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Bank mijozi o'z nomiga bir nechta plastik karta ochtirishi mumkin, ammo har bir karta faqat bitta mijozga tegishli bo'ladi.\n\nTizimda ota entitiy sifatida **Customer** (customerId {PK}, `fullName`, `phone`, `email`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **PaymentCard** (cardNumber {PK}, `cardType`, `expiryDate`, `cvvHash`) entitiysi hisoblanadi. Ular o'rtasida **Owns** munosabati o'rnatiladi.",
    "instruction": "'Customer' va 'PaymentCard' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        },
        {
          "name": "PaymentCard",
          "pk": "cardNumber",
          "attributes": [
            {
              "name": "cardNumber",
              "isPK": true
            },
            {
              "name": "cardType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "cvvHash",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "PaymentCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Owns"
        }
      ]
    }
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "BusDepot va CityBus Ierarxiyasi",
    "story": "Shahar Avtobus Parki sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Avtobus saroyida o'nlab shahar avtobuslari saqlanadi, har bir avtobus esa qat'iy ravishda bitta saroy balansiga olingan.\n\nTizimda ota entitiy sifatida **BusDepot** (depotId {PK}, `depotName`, `garageCapacity`, `cityZone`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **CityBus** (busRegNo {PK}, `model`, `seatCapacity`, `routeNo`) entitiysi hisoblanadi. Ular o'rtasida **Houses** munosabati o'rnatiladi.",
    "instruction": "'BusDepot' va 'CityBus' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BusDepot",
          "pk": "depotId",
          "attributes": [
            {
              "name": "depotId",
              "isPK": true
            },
            {
              "name": "depotName",
              "isPK": false
            },
            {
              "name": "garageCapacity",
              "isPK": false
            },
            {
              "name": "cityZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "CityBus",
          "pk": "busRegNo",
          "attributes": [
            {
              "name": "busRegNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false
            },
            {
              "name": "routeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BusDepot",
          "entity2": "CityBus",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Houses"
        }
      ]
    }
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Branch va Staff Ierarxiyasi",
    "story": "Korporativ Filiallar sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Kompaniya filialida bir guruh xodimlar mehnat qiladi, har bir xodim esa bitta filial shtatida faoliyat yuritadi.\n\nTizimda ota entitiy sifatida **Branch** (branchNo {PK}, `city`, `street`, `phone`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **Staff** (staffNo {PK}, `fName`, `lName`, `position`, `salary`) entitiysi hisoblanadi. Ular o'rtasida **Operates** munosabati o'rnatiladi.",
    "instruction": "'Branch' va 'Staff' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "Staff",
          "pk": "staffNo",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "fName",
              "isPK": false
            },
            {
              "name": "lName",
              "isPK": false
            },
            {
              "name": "position",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ]
    }
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "HospitalWard va PatientRoom Ierarxiyasi",
    "story": "Klinika Palatalari sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Shifoxona bo'limida bir nechta bemorlar xonasi joylashgan, har bir xona esa bitta bo'lim tarkibiga kiradi.\n\nTizimda ota entitiy sifatida **HospitalWard** (wardId {PK}, `wardName`, `floorLevel`, `nurseStation`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **PatientRoom** (roomNumber {PK}, `bedCount`, `isOxygenEquipped`, `dailyRate`) entitiysi hisoblanadi. Ular o'rtasida **Contains** munosabati o'rnatiladi.",
    "instruction": "'HospitalWard' va 'PatientRoom' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "pk": "wardId",
          "attributes": [
            {
              "name": "wardId",
              "isPK": true
            },
            {
              "name": "wardName",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            },
            {
              "name": "nurseStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "PatientRoom",
          "pk": "roomNumber",
          "attributes": [
            {
              "name": "roomNumber",
              "isPK": true
            },
            {
              "name": "bedCount",
              "isPK": false
            },
            {
              "name": "isOxygenEquipped",
              "isPK": false
            },
            {
              "name": "dailyRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalWard",
          "entity2": "PatientRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Contains"
        }
      ]
    }
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Airline va FlightSchedule Ierarxiyasi",
    "story": "Aeronavigatsiya Jadvali sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Aviakompaniya o'nlab muntazam parvoz reyslarini bajaradi, har bir reys esa bitta aviatashuvchi tasarrufiga tegishli.\n\nTizimda ota entitiy sifatida **Airline** (airlineCode {PK}, `airlineName`, `countryOrigin`, `alliance`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **FlightSchedule** (flightNo {PK}, `originIata`, `destIata`, `departureTime`) entitiysi hisoblanadi. Ular o'rtasida **Operates** munosabati o'rnatiladi.",
    "instruction": "'Airline' va 'FlightSchedule' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airline",
          "pk": "airlineCode",
          "attributes": [
            {
              "name": "airlineCode",
              "isPK": true
            },
            {
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            },
            {
              "name": "alliance",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSchedule",
          "pk": "flightNo",
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true
            },
            {
              "name": "originIata",
              "isPK": false
            },
            {
              "name": "destIata",
              "isPK": false
            },
            {
              "name": "departureTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airline",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ]
    }
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "DiningTable va OrderTicket Ierarxiyasi",
    "story": "Restoran Buyurtmalari sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Restoran stoliga kun davomida bir nechta buyurtma cheklari ochilishi mumkin, ammo har bir chek faqat bitta stolga biriktiriladi.\n\nTizimda ota entitiy sifatida **DiningTable** (tableNo {PK}, `seatingCapacity`, `zoneArea`, `isReserved`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **OrderTicket** (orderId {PK}, `orderTime`, `totalSum`, `paymentStatus`) entitiysi hisoblanadi. Ular o'rtasida **Places** munosabati o'rnatiladi.",
    "instruction": "'DiningTable' va 'OrderTicket' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DiningTable",
          "pk": "tableNo",
          "attributes": [
            {
              "name": "tableNo",
              "isPK": true
            },
            {
              "name": "seatingCapacity",
              "isPK": false
            },
            {
              "name": "zoneArea",
              "isPK": false
            },
            {
              "name": "isReserved",
              "isPK": false
            }
          ]
        },
        {
          "name": "OrderTicket",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            },
            {
              "name": "orderTime",
              "isPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            },
            {
              "name": "paymentStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DiningTable",
          "entity2": "OrderTicket",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Places"
        }
      ]
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Hotel va Room Ierarxiyasi",
    "story": "Mehmonxona Binosi sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Mehmonxona majmuasida yuzlab xonalar mavjud, har bir xona esa bitta muayyan mehmonxona korpusiga tegishlidir.\n\nTizimda ota entitiy sifatida **Hotel** (hotelId {PK}, `hotelName`, `starRating`, `cityAddress`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **Room** (roomNo {PK}, `type`, `price`, `isCleaned`) entitiysi hisoblanadi. Ular o'rtasida **Has** munosabati o'rnatiladi.",
    "instruction": "'Hotel' va 'Room' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId",
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true
            },
            {
              "name": "hotelName",
              "isPK": false
            },
            {
              "name": "starRating",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "type",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "isCleaned",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "Room",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Has"
        }
      ]
    }
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "TheatrePlay va CharacterRole Ierarxiyasi",
    "story": "Teatr Repertuari sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Teatr spektaklida bir nechta qahramon rollari mavjud, har bir rol esa bitta spektakl ssenariysiga tegishli.\n\nTizimda ota entitiy sifatida **TheatrePlay** (playCode {PK}, `title`, `authorPlaywright`, `genre`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **CharacterRole** (roleId {PK}, `characterName`, `importanceTier`, `actCount`) entitiysi hisoblanadi. Ular o'rtasida **Features** munosabati o'rnatiladi.",
    "instruction": "'TheatrePlay' va 'CharacterRole' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TheatrePlay",
          "pk": "playCode",
          "attributes": [
            {
              "name": "playCode",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "authorPlaywright",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharacterRole",
          "pk": "roleId",
          "attributes": [
            {
              "name": "roleId",
              "isPK": true
            },
            {
              "name": "characterName",
              "isPK": false
            },
            {
              "name": "importanceTier",
              "isPK": false
            },
            {
              "name": "actCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TheatrePlay",
          "entity2": "CharacterRole",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Features"
        }
      ]
    }
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Channel va ChannelPost Ierarxiyasi",
    "story": "Telegram Media sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Blog kanali o'z sahifasida ko'plab postlar chiqaradi, har bir post esa aynan bitta kanal muallifiga tegishli.\n\nTizimda ota entitiy sifatida **Channel** (channelHandle {PK}, `channelTitle`, `subscribersCount`, `createdDate`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **ChannelPost** (postId {PK}, `publishedAt`, `viewCount`, `postText`) entitiysi hisoblanadi. Ular o'rtasida **Publishes** munosabati o'rnatiladi.",
    "instruction": "'Channel' va 'ChannelPost' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Channel",
          "pk": "channelHandle",
          "attributes": [
            {
              "name": "channelHandle",
              "isPK": true
            },
            {
              "name": "channelTitle",
              "isPK": false
            },
            {
              "name": "subscribersCount",
              "isPK": false
            },
            {
              "name": "createdDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChannelPost",
          "pk": "postId",
          "attributes": [
            {
              "name": "postId",
              "isPK": true
            },
            {
              "name": "publishedAt",
              "isPK": false
            },
            {
              "name": "viewCount",
              "isPK": false
            },
            {
              "name": "postText",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Channel",
          "entity2": "ChannelPost",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Publishes"
        }
      ]
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Warehouse va StorageBay Ierarxiyasi",
    "story": "Omborxona Xo'jaligi sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Katta logistika omborida ko'plab saqlash bo'lmalari bor, har bir bo'lma esa bitta ombor binosida joylashgan.\n\nTizimda ota entitiy sifatida **Warehouse** (warehouseCode {PK}, `facilityName`, `totalVolumeM3`, `address`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **StorageBay** (bayBarcode {PK}, `aisleNo`, `maxWeightKg`, `temperatureZone`) entitiysi hisoblanadi. Ular o'rtasida **ConsistsOf** munosabati o'rnatiladi.",
    "instruction": "'Warehouse' va 'StorageBay' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "pk": "warehouseCode",
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true
            },
            {
              "name": "facilityName",
              "isPK": false
            },
            {
              "name": "totalVolumeM3",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageBay",
          "pk": "bayBarcode",
          "attributes": [
            {
              "name": "bayBarcode",
              "isPK": true
            },
            {
              "name": "aisleNo",
              "isPK": false
            },
            {
              "name": "maxWeightKg",
              "isPK": false
            },
            {
              "name": "temperatureZone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warehouse",
          "entity2": "StorageBay",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ConsistsOf"
        }
      ]
    }
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "City va District Ierarxiyasi",
    "story": "Davlat Ma'muriy Tizimi sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Viloyat markazi bo'lgan shahar bir necha tumanlarga bo'linadi, har bir tuman esa faqat bitta shahar ma'muriyatiga qaraydi.\n\nTizimda ota entitiy sifatida **City** (cityId {PK}, `cityName`, `regionName`, `population`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **District** (districtId {PK}, `districtName`, `postalIndex`, `areaSqKm`) entitiysi hisoblanadi. Ular o'rtasida **DividedInto** munosabati o'rnatiladi.",
    "instruction": "'City' va 'District' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "City",
          "pk": "cityId",
          "attributes": [
            {
              "name": "cityId",
              "isPK": true
            },
            {
              "name": "cityName",
              "isPK": false
            },
            {
              "name": "regionName",
              "isPK": false
            },
            {
              "name": "population",
              "isPK": false
            }
          ]
        },
        {
          "name": "District",
          "pk": "districtId",
          "attributes": [
            {
              "name": "districtId",
              "isPK": true
            },
            {
              "name": "districtName",
              "isPK": false
            },
            {
              "name": "postalIndex",
              "isPK": false
            },
            {
              "name": "areaSqKm",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "City",
          "entity2": "District",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "DividedInto"
        }
      ]
    }
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "InsuranceBroker va Policy Ierarxiyasi",
    "story": "Sug'urta Agentligi sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Sug'urta agenti mijozlarga ko'plab sug'urta polislarini rasmiylashtiradi, har bir polis esa bitta mas'ul agent tomonidan imzolanadi.\n\nTizimda ota entitiy sifatida **InsuranceBroker** (brokerId {PK}, `brokerName`, `licenseNo`, `commissionRate`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **Policy** (policyNo {PK}, `startDate`, `endDate`, `premiumAmount`) entitiysi hisoblanadi. Ular o'rtasida **Underwrites** munosabati o'rnatiladi.",
    "instruction": "'InsuranceBroker' va 'Policy' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsuranceBroker",
          "pk": "brokerId",
          "attributes": [
            {
              "name": "brokerId",
              "isPK": true
            },
            {
              "name": "brokerName",
              "isPK": false
            },
            {
              "name": "licenseNo",
              "isPK": false
            },
            {
              "name": "commissionRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Policy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "startDate",
              "isPK": false
            },
            {
              "name": "endDate",
              "isPK": false
            },
            {
              "name": "premiumAmount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceBroker",
          "entity2": "Policy",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Underwrites"
        }
      ]
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta (1..*)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "CellTower va AntennaSector Ierarxiyasi",
    "story": "Mobil Aloqa Minorasi sohasida tabiiy boshqaruv ierarxiyasini ta'minlovchi axborot tizimi ishlab chiqilmoqda. Biznes qoidalariga ko'ra: Uyali aloqa minorasiga turli burchakka qaratilgan bir nechta sektor antennalari o'rnatiladi, har bir antenna bitta minoraga mahkamlangan.\n\nTizimda ota entitiy sifatida **CellTower** (towerId {PK}, `towerName`, `latitude`, `longitude`, `heightMeters`) ro'yxatga olinadi.\n\nUnga bo'ysunuvchi birlik esa **AntennaSector** (sectorId {PK}, `azimuthDegree`, `frequencyBandMhz`, `powerWatt`) entitiysi hisoblanadi. Ular o'rtasida **Radiates** munosabati o'rnatiladi.",
    "instruction": "'CellTower' va 'AntennaSector' entitiylarini yarating, ularning {PK} kalitlarini belgilang va bayon etilgan biznes qoidasiga mos munosabat hamda multiplisitiyani polotnoda o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "pk": "towerId",
          "attributes": [
            {
              "name": "towerId",
              "isPK": true
            },
            {
              "name": "towerName",
              "isPK": false
            },
            {
              "name": "latitude",
              "isPK": false
            },
            {
              "name": "longitude",
              "isPK": false
            },
            {
              "name": "heightMeters",
              "isPK": false
            }
          ]
        },
        {
          "name": "AntennaSector",
          "pk": "sectorId",
          "attributes": [
            {
              "name": "sectorId",
              "isPK": true
            },
            {
              "name": "azimuthDegree",
              "isPK": false
            },
            {
              "name": "frequencyBandMhz",
              "isPK": false
            },
            {
              "name": "powerWatt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CellTower",
          "entity2": "AntennaSector",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Radiates"
        }
      ]
    }
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Doctor va Patient Hamkorligi",
    "story": "Klinika Qabuli jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Bir shifokor ko'plab bemorlarni qabul qiladi, bemor ham bir nechta ixtisoslashgan shifokorlar ko'rigida bo'lishi mumkin. Qabul jarayoni oraliq Appointment orqali rasmiylashtiriladi.\n\nTizimda asosiy ishtirokchilar sifatida **Doctor** (doctorId {PK}) va **Patient** (patientId {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **Appointment** (appointId {PK}, `appointTime`, `diagnosisNotes`, `cost`) polotnoda aks ettiriladi.",
    "instruction": "'Doctor' va 'Patient' o'rtasida assotsiativ 'Appointment' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
              "name": "docName",
              "isPK": false
            },
            {
              "name": "specialization",
              "isPK": false
            },
            {
              "name": "roomNumber",
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
              "name": "patientName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "dob",
              "isPK": false
            }
          ]
        },
        {
          "name": "Appointment",
          "pk": "appointId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "appointId",
              "isPK": true
            },
            {
              "name": "appointTime",
              "isPK": false
            },
            {
              "name": "diagnosisNotes",
              "isPK": false
            },
            {
              "name": "cost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    }
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Student va Course Hamkorligi",
    "story": "Universitet Darslari jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Bir talaba bir nechta o'quv fanlariga yoziladi, bir fanda esa yuzlab talabalar tahsil oladi. Ro'yxatdan o'tish Enrollment hujjati orqali yuritiladi.\n\nTizimda asosiy ishtirokchilar sifatida **Student** (studentId {PK}) va **Course** (courseCode {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **Enrollment** (enrollmentId {PK}, `semester`, `gradeLetter`, `attendanceScore`) polotnoda aks ettiriladi.",
    "instruction": "'Student' va 'Course' o'rtasida assotsiativ 'Enrollment' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "entryYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Course",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "credits",
              "isPK": false
            },
            {
              "name": "syllabusVersion",
              "isPK": false
            }
          ]
        },
        {
          "name": "Enrollment",
          "pk": "enrollmentId",
          "isAssociative": true,
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
              "name": "gradeLetter",
              "isPK": false
            },
            {
              "name": "attendanceScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Course",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    }
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Author va Book Hamkorligi",
    "story": "Adabiyot & Mualliflik jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Bir muallif bir nechta kitob yozishi mumkin, bir kitob esa bir nechta hammualliflar tomonidan yaratilishi mumkin.\n\nTizimda asosiy ishtirokchilar sifatida **Author** (authorId {PK}) va **Book** (isbn {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **Authorship** (authorshipId {PK}, `royaltySharePercent`, `contributionChapter`, `contractSignDate`) polotnoda aks ettiriladi.",
    "instruction": "'Author' va 'Book' o'rtasida assotsiativ 'Authorship' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Author",
          "pk": "authorId",
          "attributes": [
            {
              "name": "authorId",
              "isPK": true
            },
            {
              "name": "penName",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            },
            {
              "name": "birthYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Book",
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            },
            {
              "name": "bookTitle",
              "isPK": false
            },
            {
              "name": "pageCount",
              "isPK": false
            },
            {
              "name": "firstEditionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Authorship",
          "pk": "authorshipId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "authorshipId",
              "isPK": true
            },
            {
              "name": "royaltySharePercent",
              "isPK": false
            },
            {
              "name": "contributionChapter",
              "isPK": false
            },
            {
              "name": "contractSignDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Author",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Book",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    }
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Order va Product Hamkorligi",
    "story": "E-Commerce Savdo jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Bitta xarid buyurtmasida turli tovarlar bo'lishi mumkin, ayni bitta tovar esa ko'plab mijozlar buyurtmasida qatnashadi.\n\nTizimda asosiy ishtirokchilar sifatida **Order** (orderId {PK}) va **Product** (sku {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **OrderItem** (itemId {PK}, `quantity`, `appliedDiscount`, `lineTotal`) polotnoda aks ettiriladi.",
    "instruction": "'Order' va 'Product' o'rtasida assotsiativ 'OrderItem' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Order",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            },
            {
              "name": "orderDate",
              "isPK": false
            },
            {
              "name": "shippingAddress",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "Product",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            },
            {
              "name": "productName",
              "isPK": false
            },
            {
              "name": "unitPrice",
              "isPK": false
            },
            {
              "name": "stockQty",
              "isPK": false
            }
          ]
        },
        {
          "name": "OrderItem",
          "pk": "itemId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "quantity",
              "isPK": false
            },
            {
              "name": "appliedDiscount",
              "isPK": false
            },
            {
              "name": "lineTotal",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Order",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Product",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    }
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Developer va Project Hamkorligi",
    "story": "Scrum IT Loyihalar jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Dasturchi bir nechta loyihada ishlashi mumkin, har bir dasturiy loyihada esa jamoaviy dasturchilar birikmasi mehnat qiladi.\n\nTizimda asosiy ishtirokchilar sifatida **Developer** (devId {PK}) va **Project** (projectCode {PK}) qatnashadi.\n\nIkki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **ProjectAssignment** (assignId {PK}, `assignedRole`, `hoursPerWeek`, `startDate`) polotnoda aks ettiriladi.",
    "instruction": "'Developer' va 'Project' o'rtasida assotsiativ 'ProjectAssignment' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "seniority",
              "isPK": false
            },
            {
              "name": "hourlyRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Project",
          "pk": "projectCode",
          "attributes": [
            {
              "name": "projectCode",
              "isPK": true
            },
            {
              "name": "projectName",
              "isPK": false
            },
            {
              "name": "deadline",
              "isPK": false
            },
            {
              "name": "budgetUsd",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "pk": "assignId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "assignId",
              "isPK": true
            },
            {
              "name": "assignedRole",
              "isPK": false
            },
            {
              "name": "hoursPerWeek",
              "isPK": false
            },
            {
              "name": "startDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Developer",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Project",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    }
  }
];
