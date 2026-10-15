var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya Havo Kemalarini Hisobga Olish (Relatsion Sxema)",
    "story": "1-haftada yaratilgan **Aircraft** konseptual modeli endi relyatsion ma'lumotlar bazasiga o'tkazilmoqda. Tizimda samolyotlarning asosiy jadvali SQL relyatsion qoidalariga muvofiq Birlamchi Kalit [PK] ustuni bilan shakllantirilishi lozim.",
    "instruction": "'Aircraft' entitiysini SQL relyatsion jadvaliga aylantiring va 'tailNo' ustuniga Birlamchi Kalit [PK] maqomini bering.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Kardiologiya Markazi Bemorlar Elektron Kartasi (Relatsion Sxema)",
    "story": "Kardiologiya markazining bemorlar reyestri relyatsion modelga o'tkazilmoqda. Bemorlar jadvalini yaratib, har bir bemor yozuvining takrorlanmasligini ta'minlovchi Birlamchi Kalit [PK] ustunini belgilang.",
    "instruction": "'Patient' jadvalini shakllantiring va 'patientId' ustunini Birlamchi Kalit [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Bobur Mansurov",
    "clientRole": "Bosh Registrator",
    "clientAvatar": "mentor",
    "title": "Xalqaro Universitet Talabalar Akademik Reyestri (Relatsion Sxema)",
    "story": "Universitet talabalar ma'lumotlar bazasi relyatsion arxitekturaga tayyorlanmoqda. Talabalar jadvalini yaratib, har bir talaba yozuvini aniqlovchi Birlamchi Kalit [PK] ni belgilang.",
    "instruction": "'Student' jadvalini relyatsion shaklda yarating va 'studentId' ustuniga Birlamchi Kalit [PK] belgisini qo'ying.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Davlat Ilmiy Kutubxonasi Kitoblar Fondi (Relatsion Sxema)",
    "story": "Kutubxona fondini SQL ma'lumotlar bazasiga o'tkazish uchun 'Book' entitiysini Birlamchi Kalit [PK] ustuni bilan relyatsion jadval sifatida aks ettiring.",
    "instruction": "'Book' relyatsion jadvalini yarating va 'isbn' ustunini [PK] sifatida belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Rustam Aliyev",
    "clientRole": "Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Avtosalon Transport Vositalari Katalogi (Relatsion Sxema)",
    "story": "Avtosalon katalogini relieshon jadvallarga aylantiring. 'Vehicle' jadvali o'zining Birlamchi Kaliti [PK] orqali transport vositasini takrorlanmas qiladi.",
    "instruction": "'Vehicle' jadvalini shakllantirib, 'vin' ustuniga Birlamchi Kalit [PK] maqomini bering.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "Tijorat Banki Mijozlar Hisob Raqamlari (Relatsion Sxema)",
    "story": "Bank hisoblari jadvalini relyatsion modelga o'tkazing va 'accountNo' ustuniga Birlamchi Kalit [PK] sifatida belgi qo'ying.",
    "instruction": "'BankAccount' jadvalini yarating va 'accountNo' ustunini [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Malika Yusupova",
    "clientRole": "Boshqaruvchi",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Xonalar Fondi Reyestri (Relatsion Sxema)",
    "story": "Mehmonxona xonalar fondi relyatsion jadval sifatida SQLga tayyorlanmoqda. 'HotelRoom' jadvalida 'roomNo' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    "instruction": "'HotelRoom' relyatsion jadvalini shakllantiring va 'roomNo' ustunini [PK] qiling.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "Premium Restoran Mualliflik Taomnomasi (Relatsion Sxema)",
    "story": "Restoran menyusini relieshon jadval ko'rinishiga o'tkazing. 'itemId' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    "instruction": "'MenuItem' jadvalini yarating va 'itemId' ni [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "IT Kompaniyasi Muhandislik Shtati (Relatsion Sxema)",
    "story": "Dasturchilar reyestrini relyatsion jadval shakliga keltiring. 'devId' ustuniga Birlamchi Kalit [PK] belgisini o'rnating.",
    "instruction": "'Developer' jadvalini shakllantiring va 'devId' ustunini [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Gipermarket Tovar Artikullari (Relatsion Sxema)",
    "story": "Tovarlar katalogini relyatsion ma'lumotlar bazasiga o'tkazing va 'sku' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    "instruction": "'Product' jadvalini relyatsion tarzda yarating va 'sku' ustunini [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kinoteatrlar Tarmog'i Filmlar Jadvali (Relatsion Sxema)",
    "story": "Filmlar katalogini relyatsion jadvalga o'tkazing. 'movieId' ustunini Birlamchi Kalit [PK] sifatida belgilang.",
    "instruction": "'Movie' jadvalini shakllantiring va 'movieId' ustuniga [PK] belgisini bering.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Markaziy Dorixona Dori Vositalari Inventari (Relatsion Sxema)",
    "story": "Dori vositalari inventarini relyatsion jadval shakliga keltiring. 'barcode' ustunini Birlamchi Kalit [PK] sifatida ko'rsating.",
    "instruction": "'Medicine' jadvalini yarating va 'barcode' ustuniga [PK] maqomini bering.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Trans-Kontinental Yuk Mashinalari Avtoparki (Relatsion Sxema)",
    "story": "Yuk mashinalari parkini relyatsion jadval sifatida aks ettiring va 'plateNo' ustuniga Birlamchi Kalit [PK] belgisini qo'ying.",
    "instruction": "'CargoTruck' jadvalini yarating va 'plateNo' ustunini [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Premium Fitnes Klub A'zolari Reyestri (Relatsion Sxema)",
    "story": "Fitnes klub a'zolari bazasini relyatsion jadval ko'rinishida hosil qiling va 'memberCardNo' ustunini Birlamchi Kalit [PK] qilib belgilang.",
    "instruction": "'ClubMember' jadvalini shakllantiring va 'memberCardNo' ustuniga [PK] belgisini bering.",
    "starterDiagram": {
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
    "difficulty": "1-Qavat • Boshlang'ich • Relational Mapping",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik",
    "clientAvatar": "mentor",
    "title": "Quyosh Fotoelektr Stansiyasi Invertorlari (Relatsion Sxema)",
    "story": "Invertorlar texnik bazasini relieshon jadval ko'rinishida shakllantiring va 'serialNo' ustunini Birlamchi Kalit [PK] deb belgilang.",
    "instruction": "'SolarInverter' jadvalini yarating va 'serialNo' ustunini [PK] deb belgilang.",
    "starterDiagram": {
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Kapitan Anvar Salimov",
    "clientRole": "Flot Admiral Shtabi",
    "clientAvatar": "mentor",
    "title": "Harbiy Kema va Kema Komandiri (Relatsion Sxema)",
    "story": "Harbiy kema va kema komandiri o'rtasidagi yagona vakolatli munosabatni relyatsion jadvallarga o'tkazish talab etiladi. Munosabatni ifodalash uchun 'Warship' jadvaliga Tashqi Kalit [FK] sifatida 'captainId' ustunini qo'shing va uni 'Captain' jadvalining Birlamchi Kalitiga bog'lang.",
    "instruction": "'Warship' jadvaliga 'captainId' [FK1] ustunini kiriting va uni 'Captain' jadvalining 'officerId' [PK] ustuniga bog'lang.",
    "starterDiagram": {
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
            },
            {
              "name": "captainId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Polkovnik Botir Rahmonov",
    "clientRole": "DYXX Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi (Relatsion Sxema)",
    "story": "Haydovchi va uning guvohnomasi o'rtasidagi to'g'ridan-to'g'ri bog'lanish relyatsion modelga o'tkazilmoqda. 'DriverLicense' jadvaliga 'driverId' Tashqi Kalitini [FK1] qo'shing va uni 'Driver' jadvaliga ulang.",
    "instruction": "'DriverLicense' jadvalida 'driverId' [FK1] ustunini belgilang va 'Driver' jadvaliga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "driverId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Mayor Sherzod Aliyev",
    "clientRole": "Pasport Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Biometrik ID Pasport (Relatsion Sxema)",
    "story": "Fuqaro va pasport munosabatini relyatsion modelga o'tkazish uchun 'Passport' jadvaliga 'citizenPinfl' Tashqi Kalit [FK1] ustunini qo'shib, uni 'Citizen' jadvalining 'pinfl' kalitiga bog'lang.",
    "instruction": "'Passport' jadvaliga 'citizenPinfl' [FK1] ustunini qo'shing va 'Citizen' jadvaliga havola chizig'ini torting.",
    "starterDiagram": {
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
            },
            {
              "name": "citizenPinfl",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Nodir Hakimov",
    "clientRole": "Soliq Inspeksiyasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Kompaniya va Davlat Soliq Ro'yxat Guvohnomasi (Relatsion Sxema)",
    "story": "Kompaniya va soliq guvohnomasi o'rtasidagi yagona guvohnoma munosabatini ifodalash uchun 'TaxCertificate' jadvaliga 'companyTin' [FK1] ustunini joylashtiring va 'Company' jadvaliga ulang.",
    "instruction": "'TaxCertificate' jadvalida 'companyTin' [FK1] ni belgilang va uni 'Company' ning 'tin' [PK] ustuniga bog'lang.",
    "starterDiagram": {
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
            },
            {
              "name": "companyTin",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Prof. Hasan Umarov",
    "clientRole": "Bosh Shifokor",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Bo'lim Bosh Vrachi (Relatsion Sxema)",
    "story": "Bo'lim va bosh vrach munosabatini relyatsion jadvalga o'tkazish uchun 'HospitalDept' jadvaliga 'headDoctorId' [FK1] ustunini kiriting va 'HeadDoctor' jadvaliga bog'lang.",
    "instruction": "'HospitalDept' jadvaliga 'headDoctorId' [FK1] ustunini qo'shib, 'HeadDoctor' jadvaliga bog'lang.",
    "starterDiagram": {
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
            },
            {
              "name": "headDoctorId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Javohir Qosimov",
    "clientRole": "IT Aktivlar Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Xizmat Noutbuki (Relatsion Sxema)",
    "story": "Xodim va unga biriktirilgan noutbuk munosabatini relyatsion jadvalga o'tkazing: 'AssignedLaptop' jadvaliga 'assignedStaffId' Tashqi Kalitini [FK1] qo'shib, 'StaffMember' jadvaliga ulang.",
    "instruction": "'AssignedLaptop' jadvaliga 'assignedStaffId' [FK1] ustunini qo'shing va 'StaffMember' ga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "assignedStaffId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Shavkat Toirov",
    "clientRole": "Devonxona Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Vazirlik va Soha Vaziri (Relatsion Sxema)",
    "story": "Vazirlik va vazir o'rtasidagi yagona rahbarlik munosabatini relyatsion ko'rinishga keltiring: 'Ministry' jadvaliga 'currentMinisterId' [FK1] ustunini qo'shib, 'Minister' jadvaliga bog'lang.",
    "instruction": "'Ministry' jadvalida 'currentMinisterId' [FK1] ustunini belgilang va 'Minister' ning 'ministerId' [PK] ustuniga ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "currentMinisterId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Muzaffar Jo'rayev",
    "clientRole": "Bosh Kadastr Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mulkdor va Kadastr Pasporti (Relatsion Sxema)",
    "story": "Kadastr pasporti jadvaliga 'ownerId' [FK1] Tashqi Kalit ustunini qo'shib, uni 'PropertyOwner' jadvaliga relyatsion bog'lang.",
    "instruction": "'CadastreDeed' jadvaliga 'ownerId' [FK1] ustunini joylashtiring va 'PropertyOwner' jadvaliga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "ownerId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Sardor Saidov",
    "clientRole": "Kassa Texnik Muhandisi",
    "clientAvatar": "mentor",
    "title": "Kassa Yo'lagi va Bank POS Terminali (Relatsion Sxema)",
    "story": "Kassa yo'lagi va terminal o'rtasidagi bog'lanishni ifodalash uchun 'CheckoutLane' jadvaliga 'posTerminalId' [FK1] ustunini qo'shing va 'PosTerminal' jadvaliga bog'lang.",
    "instruction": "'CheckoutLane' jadvalida 'posTerminalId' [FK1] ustunini belgilang va uni 'PosTerminal' jadvaliga ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "posTerminalId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Munira Fayzullayeva",
    "clientRole": "Maktab Mudiri",
    "clientAvatar": "mentor",
    "title": "O'quvchi va Shaxsiy Saqlash Shkafchasi (Relatsion Sxema)",
    "story": "Shkafchalar jadvaliga 'pupilId' [FK1] ustunini qo'shib, uni 'Pupil' jadvalining Birlamchi Kalitiga relyatsion tarzda bog'lang.",
    "instruction": "'SchoolLocker' jadvalida 'pupilId' [FK1] ustunini oching va 'Pupil' jadvaliga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "pupilId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Oleg Smirnov",
    "clientRole": "Avia Inspektor",
    "clientAvatar": "mentor",
    "title": "Samolyot va Bort Qora Qutisi (Relatsion Sxema)",
    "story": "Bort yozuvchisi jadvaliga 'airframeNo' [FK1] Tashqi Kalitini qo'shib, uni 'Airplane' jadvalining 'airframeNo' [PK] ustuniga bog'lang.",
    "instruction": "'FlightRecorder' jadvalida 'airframeNo' [FK1] ustunini belgilang va 'Airplane' jadvaliga ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "airframeNo",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Yer Resurslari Mudiri",
    "clientAvatar": "mentor",
    "title": "Fermer Xo'jaligi va Yer Ijara Shartnomasi (Relatsion Sxema)",
    "story": "Yer ijara shartnomasi jadvaliga 'farmRegNo' [FK1] ustunini qo'shib, uni 'Farm' jadvaliga relyatsion tarzda bog'lang.",
    "instruction": "'LandLeaseContract' jadvalida 'farmRegNo' [FK1] ustunini oching va 'Farm' jadvaliga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "farmRegNo",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Kamol Boboyev",
    "clientRole": "Protokol Rahbari",
    "clientAvatar": "mentor",
    "title": "Diplomatik Elchixona va Favqulodda Elchi (Relatsion Sxema)",
    "story": "Elchixona jadvaliga 'ambassadorId' [FK1] Tashqi Kalitini qo'shib, uni 'Ambassador' jadvalining 'diplomatId' [PK] ustuniga bog'lang.",
    "instruction": "'Embassy' jadvaliga 'ambassadorId' [FK1] ustunini qo'shing va 'Ambassador' jadvaliga ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "ambassadorId",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Akmal Fayziyev",
    "clientRole": "Inkassatsiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Filiali va Markaziy Pul Seyfi (Relatsion Sxema)",
    "story": "Seyf jadvaliga 'branchNo' [FK1] ustunini qo'shib, uni 'BankBranch' jadvaliga relyatsion tarzda bog'lang.",
    "instruction": "'MainVault' jadvaliga 'branchNo' [FK1] ustunini joylashtiring va 'BankBranch' jadvaliga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "branchNo",
              "isFK": true
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
    "difficulty": "2-Qavat • O'rta (1..1) • Relational Mapping",
    "clientName": "Dilorom Ismoilova",
    "clientRole": "Antidoping Komissari",
    "clientAvatar": "mentor",
    "title": "Professional Atlet va Biologik Doping Pasporti (Relatsion Sxema)",
    "story": "Doping pasporti jadvaliga 'athleteLicenseId' [FK1] ustunini qo'shib, uni 'Athlete' jadvaliga bog'lang.",
    "instruction": "'DopingPassport' jadvalida 'athleteLicenseId' [FK1] ustunini oching va 'Athlete' jadvaliga ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "athleteLicenseId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Department va Lecturer Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Department va Lecturer o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'Lecturer' jadvaliga 'departmentId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'Lecturer' jadvaliga 'departmentId' [FK1] ustunini qo'shing va uni 'Department' ning 'deptCode' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "departmentId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Publisher va BookEdition Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Publisher va BookEdition o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'BookEdition' jadvaliga 'publisherId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'BookEdition' jadvaliga 'publisherId' [FK1] ustunini qo'shing va uni 'Publisher' ning 'publisherId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "publisherId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Customer va PaymentCard Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Customer va PaymentCard o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'PaymentCard' jadvaliga 'customerId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'PaymentCard' jadvaliga 'customerId' [FK1] ustunini qo'shing va uni 'Customer' ning 'customerId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "customerId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "BusDepot va CityBus Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi BusDepot va CityBus o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'CityBus' jadvaliga 'busdepotId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'CityBus' jadvaliga 'busdepotId' [FK1] ustunini qo'shing va uni 'BusDepot' ning 'depotId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "busdepotId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Branch va Staff Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Branch va Staff o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'Staff' jadvaliga 'branchId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'Staff' jadvaliga 'branchId' [FK1] ustunini qo'shing va uni 'Branch' ning 'branchNo' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "branchId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "HospitalWard va PatientRoom Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi HospitalWard va PatientRoom o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'PatientRoom' jadvaliga 'hospitalwardId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'PatientRoom' jadvaliga 'hospitalwardId' [FK1] ustunini qo'shing va uni 'HospitalWard' ning 'wardId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "hospitalwardId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Airline va FlightSchedule Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Airline va FlightSchedule o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'FlightSchedule' jadvaliga 'airlineId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'FlightSchedule' jadvaliga 'airlineId' [FK1] ustunini qo'shing va uni 'Airline' ning 'airlineCode' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "airlineId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "DiningTable va OrderTicket Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi DiningTable va OrderTicket o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'OrderTicket' jadvaliga 'diningtableId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'OrderTicket' jadvaliga 'diningtableId' [FK1] ustunini qo'shing va uni 'DiningTable' ning 'tableNo' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "diningtableId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Hotel va Room Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Hotel va Room o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'Room' jadvaliga 'hotelId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'Room' jadvaliga 'hotelId' [FK1] ustunini qo'shing va uni 'Hotel' ning 'hotelId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "hotelId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "TheatrePlay va CharacterRole Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi TheatrePlay va CharacterRole o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'CharacterRole' jadvaliga 'theatreplayId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'CharacterRole' jadvaliga 'theatreplayId' [FK1] ustunini qo'shing va uni 'TheatrePlay' ning 'playCode' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "theatreplayId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Channel va ChannelPost Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Channel va ChannelPost o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'ChannelPost' jadvaliga 'channelId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'ChannelPost' jadvaliga 'channelId' [FK1] ustunini qo'shing va uni 'Channel' ning 'channelHandle' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "channelId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "Warehouse va StorageBay Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi Warehouse va StorageBay o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'StorageBay' jadvaliga 'warehouseId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'StorageBay' jadvaliga 'warehouseId' [FK1] ustunini qo'shing va uni 'Warehouse' ning 'warehouseCode' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "warehouseId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "City va District Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi City va District o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'District' jadvaliga 'cityId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'District' jadvaliga 'cityId' [FK1] ustunini qo'shing va uni 'City' ning 'cityId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "cityId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "InsuranceBroker va Policy Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi InsuranceBroker va Policy o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'Policy' jadvaliga 'insurancebrokerId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'Policy' jadvaliga 'insurancebrokerId' [FK1] ustunini qo'shing va uni 'InsuranceBroker' ning 'brokerId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "insurancebrokerId",
              "isFK": true
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
    "difficulty": "3-Qavat • O'rta (1..*) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Me'mori",
    "clientAvatar": "mentor",
    "title": "CellTower va AntennaSector Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi CellTower va AntennaSector o'rtasidagi ierarxik modelni relyatsion jadvallarga o'tkazing: bo'ysunuvchi 'AntennaSector' jadvaliga 'celltowerId' Tashqi Kalit [FK1] ustunini qo'shing va ota jadvalga bog'lang.",
    "instruction": "'AntennaSector' jadvaliga 'celltowerId' [FK1] ustunini qo'shing va uni 'CellTower' ning 'towerId' [PK] ustuniga havola qiling.",
    "starterDiagram": {
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
            },
            {
              "name": "celltowerId",
              "isFK": true
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Doctor va Patient Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'Appointment' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'doctorId' [FK1] va 'patientId' [FK2] sifatida kiritiladi.",
    "instruction": "'Appointment' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Doctor' hamda 'Patient' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Student va Course Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'Enrollment' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'studentId' [FK1] va 'courseId' [FK2] sifatida kiritiladi.",
    "instruction": "'Enrollment' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Student' hamda 'Course' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Author va Book Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'Authorship' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'authorId' [FK1] va 'bookId' [FK2] sifatida kiritiladi.",
    "instruction": "'Authorship' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Author' hamda 'Book' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Order va Product Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'OrderItem' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'orderId' [FK1] va 'productId' [FK2] sifatida kiritiladi.",
    "instruction": "'OrderItem' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Order' hamda 'Product' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Developer va Project Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'ProjectAssignment' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'developerId' [FK1] va 'projectId' [FK2] sifatida kiritiladi.",
    "instruction": "'ProjectAssignment' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Developer' hamda 'Project' jadvallariga bog'lang.",
    "starterDiagram": {
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
