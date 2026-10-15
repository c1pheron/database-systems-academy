var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Fuqaro Aviatsiyasi",
    "clientName": "Temur Karimov",
    "clientRole": "Aviatsiya Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya Aviatsiya Parki",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Fuqaro Aviatsiyasi sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Aircraft** ro'yxatga olinadi. Har bir **Aircraft** o'zining takrorlanmas kodi `tailNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `model`, `manufacturer`, `capacity`. Ushbu atributlarning barchasi bevosita **Aircraft** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Aircraft' kuchli entitiysini yarating, uning 'tailNo' birlamchi kalitini {PK} belgilang va 'model', 'manufacturer', 'capacity' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Tibbiyot & Sog'liqni Saqlash",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Markaziy Shifoxona Bemorlar Reyestri",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Tibbiyot & Sog'liqni Saqlash sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Patient** ro'yxatga olinadi. Har bir **Patient** o'zining takrorlanmas kodi `patientId` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `fullName`, `dob`, `bloodType`, `phone`. Ushbu atributlarning barchasi bevosita **Patient** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Patient' kuchli entitiysini yarating, uning 'patientId' birlamchi kalitini {PK} belgilang va 'fullName', 'dob', 'bloodType', 'phone' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Oliy Ta'lim",
    "clientName": "Bobur Mansurov",
    "clientRole": "Akademik Registrator",
    "clientAvatar": "mentor",
    "title": "Universitet Talabalar Akademik Reyestri",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Oliy Ta'lim sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Student** ro'yxatga olinadi. Har bir **Student** o'zining takrorlanmas kodi `studentId` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `firstName`, `lastName`, `email`, `gpa`. Ushbu atributlarning barchasi bevosita **Student** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Student' kuchli entitiysini yarating, uning 'studentId' birlamchi kalitini {PK} belgilang va 'firstName', 'lastName', 'email', 'gpa' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Kutubxona & Fond",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Davlat Ilmiy Kutubxonasi Kitob Fondi",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Kutubxona & Fond sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Book** ro'yxatga olinadi. Har bir **Book** o'zining takrorlanmas kodi `isbn` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `title`, `author`, `publishYear`, `genre`. Ushbu atributlarning barchasi bevosita **Book** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Book' kuchli entitiysini yarating, uning 'isbn' birlamchi kalitini {PK} belgilang va 'title', 'author', 'publishYear', 'genre' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Avtomobilsozlik & Dilerlik",
    "clientName": "Rustam Aliyev",
    "clientRole": "Avtosalon Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Avtosalon Transport Vositalari Reyestri",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Avtomobilsozlik & Dilerlik sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Vehicle** ro'yxatga olinadi. Har bir **Vehicle** o'zining takrorlanmas kodi `vin` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `make`, `model`, `prodYear`, `price`. Ushbu atributlarning barchasi bevosita **Vehicle** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Vehicle' kuchli entitiysini yarating, uning 'vin' birlamchi kalitini {PK} belgilang va 'make', 'model', 'prodYear', 'price' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Bank & Moliya",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "Tijorat Banki Depozit va Hisoblar Tizimi",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Bank & Moliya sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **BankAccount** ro'yxatga olinadi. Har bir **BankAccount** o'zining takrorlanmas kodi `accountNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `balance`, `currency`, `openDate`, `branchCode`. Ushbu atributlarning barchasi bevosita **BankAccount** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'BankAccount' kuchli entitiysini yarating, uning 'accountNo' birlamchi kalitini {PK} belgilang va 'balance', 'currency', 'openDate', 'branchCode' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Mehmonxona & Turizm",
    "clientName": "Malika Yusupova",
    "clientRole": "Mehmonxona Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Besh Yulduzli Mehmonxona Xonalar Fondi",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Mehmonxona & Turizm sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **HotelRoom** ro'yxatga olinadi. Har bir **HotelRoom** o'zining takrorlanmas kodi `roomNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `roomType`, `pricePerNight`, `floorNo`, `capacity`. Ushbu atributlarning barchasi bevosita **HotelRoom** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'HotelRoom' kuchli entitiysini yarating, uning 'roomNo' birlamchi kalitini {PK} belgilang va 'roomType', 'pricePerNight', 'floorNo', 'capacity' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Restoran & Katering",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "Premium Restoran Taomnomasi",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Restoran & Katering sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **MenuItem** ro'yxatga olinadi. Har bir **MenuItem** o'zining takrorlanmas kodi `itemId` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `name`, `category`, `price`, `calories`. Ushbu atributlarning barchasi bevosita **MenuItem** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'MenuItem' kuchli entitiysini yarating, uning 'itemId' birlamchi kalitini {PK} belgilang va 'name', 'category', 'price', 'calories' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • IT & Dasturiy Ta'minot",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "IT Kompaniyasi Muhandislik Shtati",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. IT & Dasturiy Ta'minot sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Developer** ro'yxatga olinadi. Har bir **Developer** o'zining takrorlanmas kodi `devId` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `fullName`, `role`, `techStack`, `salary`. Ushbu atributlarning barchasi bevosita **Developer** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Developer' kuchli entitiysini yarating, uning 'devId' birlamchi kalitini {PK} belgilang va 'fullName', 'role', 'techStack', 'salary' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • E-Commerce & Savdo",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Mahsulot Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Gipermarket Tovar Katalogi",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. E-Commerce & Savdo sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Product** ro'yxatga olinadi. Har bir **Product** o'zining takrorlanmas kodi `sku` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `title`, `price`, `stockQty`, `weightKg`. Ushbu atributlarning barchasi bevosita **Product** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Product' kuchli entitiysini yarating, uning 'sku' birlamchi kalitini {PK} belgilang va 'title', 'price', 'stockQty', 'weightKg' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Kino & Ko'ngilochar",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kinoteatrlar Tarmog'i Filmlar Jadvali",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Kino & Ko'ngilochar sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Movie** ro'yxatga olinadi. Har bir **Movie** o'zining takrorlanmas kodi `movieId` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `title`, `director`, `durationMin`, `ageRating`. Ushbu atributlarning barchasi bevosita **Movie** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Movie' kuchli entitiysini yarating, uning 'movieId' birlamchi kalitini {PK} belgilang va 'title', 'director', 'durationMin', 'ageRating' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Farmatsevtika & Dorixona",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Markaziy Dorixona Dori Vositalari Inventari",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Farmatsevtika & Dorixona sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **Medicine** ro'yxatga olinadi. Har bir **Medicine** o'zining takrorlanmas kodi `barcode` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `name`, `dosageMg`, `manufacturer`, `expDate`. Ushbu atributlarning barchasi bevosita **Medicine** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'Medicine' kuchli entitiysini yarating, uning 'barcode' birlamchi kalitini {PK} belgilang va 'name', 'dosageMg', 'manufacturer', 'expDate' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Logistika & Yuk Tashish",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Rahbari",
    "clientAvatar": "mentor",
    "title": "Trans-Kontinental Yuk Tashish Avtoparki",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Logistika & Yuk Tashish sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **CargoTruck** ro'yxatga olinadi. Har bir **CargoTruck** o'zining takrorlanmas kodi `plateNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `capacityTons`, `fuelType`, `mileageKm`, `status`. Ushbu atributlarning barchasi bevosita **CargoTruck** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'CargoTruck' kuchli entitiysini yarating, uning 'plateNo' birlamchi kalitini {PK} belgilang va 'capacityTons', 'fuelType', 'mileageKm', 'status' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Sport & Fitnes",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Rahbari",
    "clientAvatar": "mentor",
    "title": "Premium Fitnes Klub A'zolari Reyestri",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Sport & Fitnes sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **ClubMember** ro'yxatga olinadi. Har bir **ClubMember** o'zining takrorlanmas kodi `memberCardNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `fullName`, `membershipType`, `expiryDate`, `phone`. Ushbu atributlarning barchasi bevosita **ClubMember** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'ClubMember' kuchli entitiysini yarating, uning 'memberCardNo' birlamchi kalitini {PK} belgilang va 'fullName', 'membershipType', 'expiryDate', 'phone' atributlarini qo'shing.",
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
    "difficulty": "1-Qavat • Yashil Energetika",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik Muhandis",
    "clientAvatar": "mentor",
    "title": "Quyosh Fotoelektr Stansiyasi Invertorlari",
    "story": "Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. Yashil Energetika sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **SolarInverter** ro'yxatga olinadi. Har bir **SolarInverter** o'zining takrorlanmas kodi `serialNo` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: `peakPowerKw`, `voltageInput`, `installDate`, `efficiency`. Ushbu atributlarning barchasi bevosita **SolarInverter** ga tegishli bo'lib, uning holatini tavsiflaydi.",
    "instruction": "Polotnoda 'SolarInverter' kuchli entitiysini yarating, uning 'serialNo' birlamchi kalitini {PK} belgilang va 'peakPowerKw', 'voltageInput', 'installDate', 'efficiency' atributlarini qo'shing.",
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
    "difficulty": "2-Qavat • Yo'l Harakati Xavfsizligi",
    "clientName": "Polkovnik Botir Rahmonov",
    "clientRole": "DYXX Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Yo'l Harakati Xavfsizligi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Driver** (driverId {PK}, `fullName`, `phone`, `bloodGroup`) qayd etiladi. Ikkinchi entitiy esa rasmiy **DriverLicense** (licenseNo {PK}, `categories`, `issueDate`, `expiryDate`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Driver** aynan bitta **DriverLicense** bilan bog'lanishi mumkin va har bir **DriverLicense** qat'iy ravishda bitta **Driver** ga tegishli bo'ladi. Munosabat turi: **Holds**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Driver' va 'DriverLicense' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'Holds' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • Migratsiya & Fuqarolik",
    "clientName": "Mayor Sherzod Aliyev",
    "clientRole": "Pasport Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Biometrik Identifikatsiya Pasporti",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Migratsiya & Fuqarolik tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Citizen** (pinfl {PK}, `fullName`, `birthDate`, `nationality`) qayd etiladi. Ikkinchi entitiy esa rasmiy **Passport** (passportNo {PK}, `expiryDate`, `issuedBy`, `chipVersion`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Citizen** aynan bitta **Passport** bilan bog'lanishi mumkin va har bir **Passport** qat'iy ravishda bitta **Citizen** ga tegishli bo'ladi. Munosabat turi: **IssuedTo**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Citizen' va 'Passport' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'IssuedTo' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • Soliq Boshqaruvi",
    "clientName": "Nodir Hakimov",
    "clientRole": "Soliq Inspeksiyasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Kompaniya va Soliq Ro'yxatdan O'tish Guvohnomasi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Soliq Boshqaruvi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Company** (tin {PK}, `companyName`, `legalAddress`, `industryType`) qayd etiladi. Ikkinchi entitiy esa rasmiy **TaxCertificate** (certId {PK}, `taxRegime`, `effectiveDate`, `regNumber`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Company** aynan bitta **TaxCertificate** bilan bog'lanishi mumkin va har bir **TaxCertificate** qat'iy ravishda bitta **Company** ga tegishli bo'ladi. Munosabat turi: **CertifiedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Company' va 'TaxCertificate' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'CertifiedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • Klinika Boshqaruvi",
    "clientName": "Prof. Hasan Umarov",
    "clientRole": "Bosh Shifokor",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Bo'lim Bosh Shifokori",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Klinika Boshqaruvi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **HospitalDept** (deptCode {PK}, `deptName`, `floorNo`, `bedQuota`) qayd etiladi. Ikkinchi entitiy esa rasmiy **HeadDoctor** (licenseId {PK}, `doctorName`, `specialtyField`, `phone`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **HospitalDept** aynan bitta **HeadDoctor** bilan bog'lanishi mumkin va har bir **HeadDoctor** qat'iy ravishda bitta **HospitalDept** ga tegishli bo'ladi. Munosabat turi: **HeadedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'HospitalDept' va 'HeadDoctor' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'HeadedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • Korporativ IT Texnika",
    "clientName": "Javohir Qosimov",
    "clientRole": "IT Aktivlar Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Xizmat Noutbuki",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Korporativ IT Texnika tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **StaffMember** (staffId {PK}, `staffName`, `jobTitle`, `workEmail`) qayd etiladi. Ikkinchi entitiy esa rasmiy **AssignedLaptop** (assetTag {PK}, `serialNo`, `modelName`, `ramGb`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **StaffMember** aynan bitta **AssignedLaptop** bilan bog'lanishi mumkin va har bir **AssignedLaptop** qat'iy ravishda bitta **StaffMember** ga tegishli bo'ladi. Munosabat turi: **AssignedTo**, kardinallik chegaralari: **1..1** va **0..1**.",
    "instruction": "'StaffMember' va 'AssignedLaptop' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'AssignedTo' aloqasini (1..1 : 0..1) bilan to'g'ri ulang.",
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
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • Davlat Boshqaruvi",
    "clientName": "Shavkat Toirov",
    "clientRole": "Devonxona Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Vazirlik Boshqarmasi va Soha Vaziri",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Davlat Boshqaruvi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Ministry** (ministryId {PK}, `officialTitle`, `budgetBillion`, `location`) qayd etiladi. Ikkinchi entitiy esa rasmiy **Minister** (ministerId {PK}, `fullName`, `appointedDate`, `decreeNo`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Ministry** aynan bitta **Minister** bilan bog'lanishi mumkin va har bir **Minister** qat'iy ravishda bitta **Ministry** ga tegishli bo'ladi. Munosabat turi: **LedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Ministry' va 'Minister' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'LedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • Harbiy Dengiz Floti",
    "clientName": "Kapitan Anvar Salimov",
    "clientRole": "Flot Admiral Shtabi",
    "clientAvatar": "mentor",
    "title": "Dengiz Harbiylashgan Kemasi va Kema Kapitani",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Harbiy Dengiz Floti tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Warship** (hullNo {PK}, `shipName`, `displacementTons`, `commissionYear`) qayd etiladi. Ikkinchi entitiy esa rasmiy **Captain** (officerId {PK}, `officerName`, `rankGrade`, `serviceYears`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Warship** aynan bitta **Captain** bilan bog'lanishi mumkin va har bir **Captain** qat'iy ravishda bitta **Warship** ga tegishli bo'ladi. Munosabat turi: **CommandedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Warship' va 'Captain' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'CommandedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • Ko'chmas Mulk & Kadastr",
    "clientName": "Muzaffar Jo'rayev",
    "clientRole": "Kadastr Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mulkdor va Ko'chmas Mulk Kadastr Pasporti",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Ko'chmas Mulk & Kadastr tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **PropertyOwner** (ownerId {PK}, `ownerName`, `phone`, `taxPayerCode`) qayd etiladi. Ikkinchi entitiy esa rasmiy **CadastreDeed** (deedNo {PK}, `cadastralZone`, `landAreaSqm`, `registeredDate`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **PropertyOwner** aynan bitta **CadastreDeed** bilan bog'lanishi mumkin va har bir **CadastreDeed** qat'iy ravishda bitta **PropertyOwner** ga tegishli bo'ladi. Munosabat turi: **DeededWith**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'PropertyOwner' va 'CadastreDeed' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'DeededWith' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Savdo & To'lov Tizimi",
    "clientName": "Sardor Saidov",
    "clientRole": "Kassa Texnik Mutaxassisi",
    "clientAvatar": "mentor",
    "title": "Kassa Shoxobchasi va Bank POS Terminali",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Savdo & To'lov Tizimi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **CheckoutLane** (laneNo {PK}, `deskCode`, `supervisorName`, `status`) qayd etiladi. Ikkinchi entitiy esa rasmiy **PosTerminal** (terminalId {PK}, `ipAddress`, `merchantCode`, `serialNumber`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **CheckoutLane** aynan bitta **PosTerminal** bilan bog'lanishi mumkin va har bir **PosTerminal** qat'iy ravishda bitta **CheckoutLane** ga tegishli bo'ladi. Munosabat turi: **EquippedWith**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'CheckoutLane' va 'PosTerminal' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'EquippedWith' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Maktab Ta'limi",
    "clientName": "Munira Fayzullayeva",
    "clientRole": "Maktab Mudiri",
    "clientAvatar": "mentor",
    "title": "Maktab O'quvchisi va Shaxsiy Saqlash Shkafchasi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Maktab Ta'limi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Pupil** (pupilId {PK}, `fullName`, `gradeLevel`, `classRoom`) qayd etiladi. Ikkinchi entitiy esa rasmiy **SchoolLocker** (lockerNo {PK}, `hallwayWing`, `combinationCode`, `shelfCount`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Pupil** aynan bitta **SchoolLocker** bilan bog'lanishi mumkin va har bir **SchoolLocker** qat'iy ravishda bitta **Pupil** ga tegishli bo'ladi. Munosabat turi: **Allocated**, kardinallik chegaralari: **1..1** va **0..1**.",
    "instruction": "'Pupil' va 'SchoolLocker' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'Allocated' aloqasini (1..1 : 0..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Aviatsiya Xavfsizligi",
    "clientName": "Oleg Smirnov",
    "clientRole": "Avia Nazorat Inspeksiyasi",
    "clientAvatar": "mentor",
    "title": "Yo'lovchi Samolyoti va Qora Quti Yozuv Uskunasi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Aviatsiya Xavfsizligi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Airplane** (airframeNo {PK}, `tailNumber`, `modelCode`, `serviceHours`) qayd etiladi. Ikkinchi entitiy esa rasmiy **FlightRecorder** (recorderId {PK}, `beaconFrequency`, `memoryCapacityGb`, `batteryExpiry`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Airplane** aynan bitta **FlightRecorder** bilan bog'lanishi mumkin va har bir **FlightRecorder** qat'iy ravishda bitta **Airplane** ga tegishli bo'ladi. Munosabat turi: **MonitoredBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Airplane' va 'FlightRecorder' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'MonitoredBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Qishloq Xo'jaligi",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Yer Resurslari Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fermer Xo'jaligi va Yer Ijara Shartnomasi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Qishloq Xo'jaligi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Farm** (farmRegNo {PK}, `farmName`, `province`, `cropType`) qayd etiladi. Ikkinchi entitiy esa rasmiy **LandLeaseContract** (contractId {PK}, `hectares`, `leaseEndDate`, `regDate`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Farm** aynan bitta **LandLeaseContract** bilan bog'lanishi mumkin va har bir **LandLeaseContract** qat'iy ravishda bitta **Farm** ga tegishli bo'ladi. Munosabat turi: **ContractedUnder**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Farm' va 'LandLeaseContract' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'ContractedUnder' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Diplomatiya & Tashqi Ishlar",
    "clientName": "Kamol Boboyev",
    "clientRole": "Protokol Xizmati Rahbari",
    "clientAvatar": "mentor",
    "title": "Diplomatik Elchixona va Favqulodda Muxtor Elchi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Diplomatiya & Tashqi Ishlar tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Embassy** (embassyId {PK}, `hostCountry`, `cityLocation`, `establishedYear`) qayd etiladi. Ikkinchi entitiy esa rasmiy **Ambassador** (diplomatId {PK}, `fullName`, `credentialDate`, `diplomaticRank`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Embassy** aynan bitta **Ambassador** bilan bog'lanishi mumkin va har bir **Ambassador** qat'iy ravishda bitta **Embassy** ga tegishli bo'ladi. Munosabat turi: **RepresentedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Embassy' va 'Ambassador' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'RepresentedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Bank Xavfsizligi",
    "clientName": "Akmal Fayziyev",
    "clientRole": "Bank Inkassatsiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Filiali va Asosiy Naqd Pul Seyfi",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Bank Xavfsizligi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **BankBranch** (branchNo {PK}, `street`, `city`, `phone`) qayd etiladi. Ikkinchi entitiy esa rasmiy **MainVault** (vaultId {PK}, `securityGrade`, `capacityKg`, `alarmCode`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **BankBranch** aynan bitta **MainVault** bilan bog'lanishi mumkin va har bir **MainVault** qat'iy ravishda bitta **BankBranch** ga tegishli bo'ladi. Munosabat turi: **SecuredWith**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'BankBranch' va 'MainVault' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'SecuredWith' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "2-Qavat • Olimpiya Qo'mitasi",
    "clientName": "Dilorom Ismoilova",
    "clientRole": "Antidoping Komissari",
    "clientAvatar": "mentor",
    "title": "Professional Atlet va Biologik Doping Pasporti",
    "story": "Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon Olimpiya Qo'mitasi tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **Athlete** (licenseId {PK}, `athleteName`, `sportDiscipline`, `countryCode`) qayd etiladi. Ikkinchi entitiy esa rasmiy **DopingPassport** (passportCode {PK}, `biologicalProfile`, `lastTestDate`, `labCode`) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **Athlete** aynan bitta **DopingPassport** bilan bog'lanishi mumkin va har bir **DopingPassport** qat'iy ravishda bitta **Athlete** ga tegishli bo'ladi. Munosabat turi: **TrackedBy**, kardinallik chegaralari: **1..1** va **1..1**.",
    "instruction": "'Athlete' va 'DopingPassport' entitiylarini yarating, ularning {PK} kalitlarini belgilang va 'TrackedBy' aloqasini (1..1 : 1..1) bilan to'g'ri ulang.",
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
    "difficulty": "3-Qavat • Akademik Kadrlar",
    "clientName": "Prof. Dilshod Karimov",
    "clientRole": "Fakultet Dekani",
    "clientAvatar": "mentor",
    "title": "Universitet Kafedrasi va Professor-O'qituvchilar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Akademik Kadrlar tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Department** (deptCode {PK}, `deptName`, `officeRoom`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **Lecturer** (lecturerId {PK}, `fullName`, `academicRank`, `salary`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Department** tarkibida kamida bitta yoki undan ko'p (1..*) **Lecturer** bo'lishi mumkin. Har bir **Lecturer** esa qat'iy ravishda faqat bitta (1..1) **Department** ga mansub bo'ladi. Munosabat: **Employs**.",
    "instruction": "'Department' va 'Lecturer' entitiylarini polotnoga qo'ying, 'Employs' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Matbaa & Nashriyot",
    "clientName": "Feruza Mahmudova",
    "clientRole": "Bosh Muharrir",
    "clientAvatar": "mentor",
    "title": "Nashriyot Uyi va Chop Etilgan Kitob Nashrlari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Matbaa & Nashriyot tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Publisher** (publisherId {PK}, `companyName`, `address`, `phone`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **BookEdition** (editionIsbn {PK}, `title`, `printRun`, `price`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Publisher** tarkibida kamida bitta yoki undan ko'p (1..*) **BookEdition** bo'lishi mumkin. Har bir **BookEdition** esa qat'iy ravishda faqat bitta (1..1) **Publisher** ga mansub bo'ladi. Munosabat: **Publishes**.",
    "instruction": "'Publisher' va 'BookEdition' entitiylarini polotnoga qo'ying, 'Publishes' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Fintech & Plastik Kartalar",
    "clientName": "Ulug'bek Sobirov",
    "clientRole": "Karta Boshqarmasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Bank Mijozi va Unga Biriktirilgan Plastik Kartalar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Fintech & Plastik Kartalar tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Customer** (customerId {PK}, `fullName`, `phone`, `email`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **PaymentCard** (cardNumber {PK}, `cardType`, `expiryDate`, `cvvHash`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Customer** tarkibida kamida bitta yoki undan ko'p (1..*) **PaymentCard** bo'lishi mumkin. Har bir **PaymentCard** esa qat'iy ravishda faqat bitta (1..1) **Customer** ga mansub bo'ladi. Munosabat: **Owns**.",
    "instruction": "'Customer' va 'PaymentCard' entitiylarini polotnoga qo'ying, 'Owns' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Shahar Yo'lovchi Transporti",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "Transport Garaji Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtobus Saroyi va Shahar Avtobuslari Floti",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Shahar Yo'lovchi Transporti tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **BusDepot** (depotId {PK}, `depotName`, `garageCapacity`, `cityZone`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **CityBus** (busRegNo {PK}, `model`, `seatCapacity`, `routeNo`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **BusDepot** tarkibida kamida bitta yoki undan ko'p (1..*) **CityBus** bo'lishi mumkin. Har bir **CityBus** esa qat'iy ravishda faqat bitta (1..1) **BusDepot** ga mansub bo'ladi. Munosabat: **Houses**.",
    "instruction": "'BusDepot' va 'CityBus' entitiylarini polotnoga qo'ying, 'Houses' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Korporativ Boshqaruv",
    "clientName": "Nargiza Odilova",
    "clientRole": "HR Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Filiali va Unda Ishlovchi Xodimlar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Korporativ Boshqaruv tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Branch** (branchNo {PK}, `city`, `street`, `phone`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **Staff** (staffNo {PK}, `fName`, `lName`, `position`, `salary`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Branch** tarkibida kamida bitta yoki undan ko'p (1..*) **Staff** bo'lishi mumkin. Har bir **Staff** esa qat'iy ravishda faqat bitta (1..1) **Branch** ga mansub bo'ladi. Munosabat: **Operates**.",
    "instruction": "'Branch' va 'Staff' entitiylarini polotnoga qo'ying, 'Operates' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Klinika Bo'limlari",
    "clientName": "Shohida Olimova",
    "clientRole": "Bosh Hamshira",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Unga Qarashli Palatalar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Klinika Bo'limlari tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **HospitalWard** (wardId {PK}, `wardName`, `floorLevel`, `nurseStation`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **PatientRoom** (roomNumber {PK}, `bedCount`, `isOxygenEquipped`, `dailyRate`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **HospitalWard** tarkibida kamida bitta yoki undan ko'p (1..*) **PatientRoom** bo'lishi mumkin. Har bir **PatientRoom** esa qat'iy ravishda faqat bitta (1..1) **HospitalWard** ga mansub bo'ladi. Munosabat: **Contains**.",
    "instruction": "'HospitalWard' va 'PatientRoom' entitiylarini polotnoga qo'ying, 'Contains' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Aeronavigatsiya",
    "clientName": "Ravshan Yusupov",
    "clientRole": "Parvozlar Bosh Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya va Xalqaro Parvoz Reyslari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Aeronavigatsiya tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Airline** (airlineCode {PK}, `airlineName`, `countryOrigin`, `alliance`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **FlightSchedule** (flightNo {PK}, `originIata`, `destIata`, `departureTime`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Airline** tarkibida kamida bitta yoki undan ko'p (1..*) **FlightSchedule** bo'lishi mumkin. Har bir **FlightSchedule** esa qat'iy ravishda faqat bitta (1..1) **Airline** ga mansub bo'ladi. Munosabat: **Operates**.",
    "instruction": "'Airline' va 'FlightSchedule' entitiylarini polotnoga qo'ying, 'Operates' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Restoran Xizmati",
    "clientName": "Zilola Ergasheva",
    "clientRole": "Restoran Administratori",
    "clientAvatar": "mentor",
    "title": "Restoran Stoli va Buyurtma Cheklari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Restoran Xizmati tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **DiningTable** (tableNo {PK}, `seatingCapacity`, `zoneArea`, `isReserved`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **OrderTicket** (orderId {PK}, `orderTime`, `totalSum`, `paymentStatus`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **DiningTable** tarkibida kamida bitta yoki undan ko'p (0..*) **OrderTicket** bo'lishi mumkin. Har bir **OrderTicket** esa qat'iy ravishda faqat bitta (1..1) **DiningTable** ga mansub bo'ladi. Munosabat: **Places**.",
    "instruction": "'DiningTable' va 'OrderTicket' entitiylarini polotnoga qo'ying, 'Places' aloqasini o'rnatib, multiplisitiyani 1..1 va 0..* qilib belgilang.",
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
          "mult2": "0..*",
          "name": "Places"
        }
      ]
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • Xalqaro Mehmonxona",
    "clientName": "Sevara Shokirova",
    "clientRole": "Mehmonxona Qabul Rahbari",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Majmuasi va Xonalar Boshqaruvi",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Xalqaro Mehmonxona tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Hotel** (hotelId {PK}, `hotelName`, `starRating`, `cityAddress`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **Room** (roomNo {PK}, `type`, `price`, `isCleaned`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Hotel** tarkibida kamida bitta yoki undan ko'p (1..*) **Room** bo'lishi mumkin. Har bir **Room** esa qat'iy ravishda faqat bitta (1..1) **Hotel** ga mansub bo'ladi. Munosabat: **Has**.",
    "instruction": "'Hotel' va 'Room' entitiylarini polotnoga qo'ying, 'Has' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Madaniyat & Teatr",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Sahna Rejissyori",
    "clientAvatar": "mentor",
    "title": "Teatr Spektakli va Badiiy Rollar Fonotekasi",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Madaniyat & Teatr tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **TheatrePlay** (playCode {PK}, `title`, `authorPlaywright`, `genre`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **CharacterRole** (roleId {PK}, `characterName`, `importanceTier`, `actCount`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **TheatrePlay** tarkibida kamida bitta yoki undan ko'p (1..*) **CharacterRole** bo'lishi mumkin. Har bir **CharacterRole** esa qat'iy ravishda faqat bitta (1..1) **TheatrePlay** ga mansub bo'ladi. Munosabat: **Features**.",
    "instruction": "'TheatrePlay' va 'CharacterRole' entitiylarini polotnoga qo'ying, 'Features' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Media & Kontent",
    "clientName": "Madina Alimova",
    "clientRole": "Bosh Muharrir SMM",
    "clientAvatar": "mentor",
    "title": "Telegram Blog Kanali va Nashr Qilingan Postlar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Media & Kontent tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Channel** (channelHandle {PK}, `channelTitle`, `subscribersCount`, `createdDate`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **ChannelPost** (postId {PK}, `publishedAt`, `viewCount`, `postText`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Channel** tarkibida kamida bitta yoki undan ko'p (0..*) **ChannelPost** bo'lishi mumkin. Har bir **ChannelPost** esa qat'iy ravishda faqat bitta (1..1) **Channel** ga mansub bo'ladi. Munosabat: **Publishes**.",
    "instruction": "'Channel' va 'ChannelPost' entitiylarini polotnoga qo'ying, 'Publishes' aloqasini o'rnatib, multiplisitiyani 1..1 va 0..* qilib belgilang.",
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
          "mult2": "0..*",
          "name": "Publishes"
        }
      ]
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • Omborxona Xo'jaligi",
    "clientName": "Oybek Mahmudov",
    "clientRole": "Ombor Mudiri",
    "clientAvatar": "mentor",
    "title": "Logistika Omborxonasi va Saqlash Bo'lmalari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Omborxona Xo'jaligi tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **Warehouse** (warehouseCode {PK}, `facilityName`, `totalVolumeM3`, `address`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **StorageBay** (bayBarcode {PK}, `aisleNo`, `maxWeightKg`, `temperatureZone`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **Warehouse** tarkibida kamida bitta yoki undan ko'p (1..*) **StorageBay** bo'lishi mumkin. Har bir **StorageBay** esa qat'iy ravishda faqat bitta (1..1) **Warehouse** ga mansub bo'ladi. Munosabat: **ConsistsOf**.",
    "instruction": "'Warehouse' va 'StorageBay' entitiylarini polotnoga qo'ying, 'ConsistsOf' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Hududiy Boshqaruv",
    "clientName": "Botir Tursunov",
    "clientRole": "Shahar Hokimiyati",
    "clientAvatar": "mentor",
    "title": "Viloyat Shahri va Unga Tegishli Tumanlar",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Hududiy Boshqaruv tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **City** (cityId {PK}, `cityName`, `regionName`, `population`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **District** (districtId {PK}, `districtName`, `postalIndex`, `areaSqKm`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **City** tarkibida kamida bitta yoki undan ko'p (1..*) **District** bo'lishi mumkin. Har bir **District** esa qat'iy ravishda faqat bitta (1..1) **City** ga mansub bo'ladi. Munosabat: **DividedInto**.",
    "instruction": "'City' va 'District' entitiylarini polotnoga qo'ying, 'DividedInto' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "3-Qavat • Sug'urta Bozori",
    "clientName": "Gulzoda Salimova",
    "clientRole": "Sug'urta Kompaniyasi Menejeri",
    "clientAvatar": "mentor",
    "title": "Sug'urta Agenti va Rasmiylashtirilgan Sug'urta Polislari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Sug'urta Bozori tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **InsuranceBroker** (brokerId {PK}, `brokerName`, `licenseNo`, `commissionRate`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **Policy** (policyNo {PK}, `startDate`, `endDate`, `premiumAmount`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **InsuranceBroker** tarkibida kamida bitta yoki undan ko'p (0..*) **Policy** bo'lishi mumkin. Har bir **Policy** esa qat'iy ravishda faqat bitta (1..1) **InsuranceBroker** ga mansub bo'ladi. Munosabat: **Underwrites**.",
    "instruction": "'InsuranceBroker' va 'Policy' entitiylarini polotnoga qo'ying, 'Underwrites' aloqasini o'rnatib, multiplisitiyani 1..1 va 0..* qilib belgilang.",
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
          "mult2": "0..*",
          "name": "Underwrites"
        }
      ]
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • Telekom & Radioaloqa",
    "clientName": "Eldor Vohidov",
    "clientRole": "Radio Tarmoq Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mobil Aloqa Minorasi va Antenna Sektorlari",
    "story": "Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. Telekom & Radioaloqa tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **CellTower** (towerId {PK}, `towerName`, `latitude`, `longitude`, `heightMeters`) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **AntennaSector** (sectorId {PK}, `azimuthDegree`, `frequencyBandMhz`, `powerWatt`) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **CellTower** tarkibida kamida bitta yoki undan ko'p (1..*) **AntennaSector** bo'lishi mumkin. Har bir **AntennaSector** esa qat'iy ravishda faqat bitta (1..1) **CellTower** ga mansub bo'ladi. Munosabat: **Radiates**.",
    "instruction": "'CellTower' va 'AntennaSector' entitiylarini polotnoga qo'ying, 'Radiates' aloqasini o'rnatib, multiplisitiyani 1..1 va 1..* qilib belgilang.",
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
    "difficulty": "4-Qavat • Tibbiyot Xizmati",
    "clientName": "Dr. Lola Sharipova",
    "clientRole": "Klinika Koordinatori",
    "clientAvatar": "mentor",
    "title": "Shifokor va Bemor Qabuli (Appointment)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Tibbiyot Xizmati amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Doctor** (doctorId {PK}) va **Patient** (patientId {PK}) qatnashadi. Bir Doctor bir nechta Patient bilan, va aksincha, bir Patient bir nechta Doctor bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **Appointment** (appointId {PK}, `appointTime`, `diagnosisNotes`, `cost`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Doctor' va 'Patient' o'rtasida assotsiativ 'Appointment' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
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
    "difficulty": "4-Qavat • Universitet Dekanati",
    "clientName": "Jasur Qobilov",
    "clientRole": "Akademik Bo'lim Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Talaba va Fanlarga Ro'yxatdan O'tish (Enrollment)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Universitet Dekanati amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Student** (studentId {PK}) va **Course** (courseCode {PK}) qatnashadi. Bir Student bir nechta Course bilan, va aksincha, bir Course bir nechta Student bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **Enrollment** (enrollmentId {PK}, `semester`, `gradeLetter`, `attendanceScore`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Student' va 'Course' o'rtasida assotsiativ 'Enrollment' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
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
    "difficulty": "4-Qavat • Nashriyot & Mualliflik Huquqi",
    "clientName": "Gulbahor Karimova",
    "clientRole": "Adabiy Agent",
    "clientAvatar": "mentor",
    "title": "Muallif va Kitob Hammuallifligi (Authorship)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Nashriyot & Mualliflik Huquqi amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Author** (authorId {PK}) va **Book** (isbn {PK}) qatnashadi. Bir Author bir nechta Book bilan, va aksincha, bir Book bir nechta Author bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **Authorship** (authorshipId {PK}, `royaltySharePercent`, `contributionChapter`, `contractSignDate`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Author' va 'Book' o'rtasida assotsiativ 'Authorship' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
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
    "difficulty": "4-Qavat • Elektron Tijorat",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Savdo Tahlilchisi",
    "clientAvatar": "mentor",
    "title": "Xarid Buyurtmasi va Tovar Tarkibi (OrderItem)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Elektron Tijorat amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Order** (orderId {PK}) va **Product** (sku {PK}) qatnashadi. Bir Order bir nechta Product bilan, va aksincha, bir Product bir nechta Order bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **OrderItem** (itemId {PK}, `quantity`, `appliedDiscount`, `lineTotal`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Order' va 'Product' o'rtasida assotsiativ 'OrderItem' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
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
    "difficulty": "4-Qavat • Scrum & IT Boshqaruv",
    "clientName": "Behzod Rahimov",
    "clientRole": "Scrum Master",
    "clientAvatar": "mentor",
    "title": "Dasturchi va Dasturiy Loyihalar (ProjectAssignment)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Scrum & IT Boshqaruv amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Developer** (devId {PK}) va **Project** (projectCode {PK}) qatnashadi. Bir Developer bir nechta Project bilan, va aksincha, bir Project bir nechta Developer bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **ProjectAssignment** (assignId {PK}, `assignedRole`, `hoursPerWeek`, `startDate`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Developer' va 'Project' o'rtasida assotsiativ 'ProjectAssignment' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
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
