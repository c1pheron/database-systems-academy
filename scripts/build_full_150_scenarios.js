/**
 * COMPLETE 150 PROGRESSIVE SCENARIOS GENERATOR (WEEK 1 & WEEK 2)
 * WIUT Database Systems (5BUIS009C)
 * 
 * 150 Unique Real-World Scenarios (No Repetition)
 * Strict Easy -> Hard 10 Sectors:
 *   Floor 1 (1–15):    Single Strong Entity & {PK}
 *   Floor 2 (16–30):   1..1 Relationships & Foreign Keys
 *   Floor 3 (31–45):   1..* Cardinality & Hierarchy
 *   Floor 4 (46–60):   *..* Many-to-Many & Associative Entities
 *   Floor 5 (61–75):   Weak Entities & Discriminators (PPK)
 *   Floor 6 (76–90):   Recursive / Unary Relationships & Roles
 *   Floor 7 (91–105):  EER Specialisation Disjoint {Mandatory, Or}
 *   Floor 8 (106–120): EER Specialisation Overlapping {Optional, And}
 *   Floor 9 (121–135): EER Categories / Union Types (∪)
 *   Floor 10 (136–150): Integrated Enterprise Multi-Entity Architectures
 * 
 * Direct Week 1 -> Week 2 Harmony:
 *   Week 1: Create Conceptual ER from scratch
 *   Week 2: Starter diagram = Week 1 diagram; student extends it to EER right on canvas!
 */

const fs = require('fs');
const path = require('path');

// Master 150 Domains Specifications
const DOMAINS_DATA = [
  // =========================================================================
  // SECTOR 1 (1–15): SINGLE STRONG ENTITY & PRIMARY KEY
  // =========================================================================
  {
    id: 1, s: 1, ind: "Fuqaro Aviatsiyasi", role: "Aviatsiya Texnik Direktori", client: "Temur Karimov",
    title: "Aviakompaniya Aviatsiya Parki",
    e1: "Aircraft", pk1: "tailNo", a1: ["model", "manufacturer", "capacity"],
    w2_e1: "PassengerPlane", w2_a1: ["seatCount", "entertainmentSystem"],
    w2_e2: "CargoPlane", w2_a2: ["maxPayloadTons", "cargoDoorType"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 2, s: 1, ind: "Tibbiyot & Sog'liqni Saqlash", role: "Bosh Shifokor Muovini", client: "Dr. Aziza Rahimova",
    title: "Markaziy Shifoxona Bemorlar Reyestri",
    e1: "Patient", pk1: "patientId", a1: ["fullName", "dob", "bloodType", "phone"],
    w2_e1: "InPatient", w2_a1: ["bedNumber", "admissionDate"],
    w2_e2: "OutPatient", w2_a2: ["clinicVisitDate", "doctorNotes"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 3, s: 1, ind: "Oliy Ta'lim", role: "Akademik Registrator", client: "Bobur Mansurov",
    title: "Universitet Talabalar Akademik Reyestri",
    e1: "Student", pk1: "studentId", a1: ["firstName", "lastName", "email", "gpa"],
    w2_e1: "Undergraduate", w2_a1: ["highSchoolDiploma", "creditsCompleted"],
    w2_e2: "Postgraduate", w2_a2: ["bachelorDegreeNo", "thesisTopic"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 4, s: 1, ind: "Kutubxona & Fond", role: "Bosh Bibliograf", client: "Gulnora Karimova",
    title: "Davlat Ilmiy Kutubxonasi Kitob Fondi",
    e1: "Book", pk1: "isbn", a1: ["title", "author", "publishYear", "genre"],
    w2_e1: "EBook", w2_a1: ["fileFormat", "fileSizeBytes"],
    w2_e2: "PrintBook", w2_a2: ["shelfLocation", "coverType"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 5, s: 1, ind: "Avtomobilsozlik & Dilerlik", role: "Avtosalon Savdo Direktori", client: "Rustam Aliyev",
    title: "Avtosalon Transport Vositalari Reyestri",
    e1: "Vehicle", pk1: "vin", a1: ["make", "model", "prodYear", "price"],
    w2_e1: "ElectricVehicle", w2_a1: ["batteryKwh", "chargingTimeHrs"],
    w2_e2: "CombustionCar", w2_a2: ["fuelTankLiters", "emissionClass"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 6, s: 1, ind: "Bank & Moliya", role: "Bosh Buxgalter", client: "Jamshid Qodirov",
    title: "Tijorat Banki Depozit va Hisoblar Tizimi",
    e1: "BankAccount", pk1: "accountNo", a1: ["balance", "currency", "openDate", "branchCode"],
    w2_e1: "SavingsAccount", w2_a1: ["interestRatePercent", "minBalance"],
    w2_e2: "CheckingAccount", w2_a2: ["overdraftLimit", "checkbookNo"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 7, s: 1, ind: "Mehmonxona & Turizm", role: "Mehmonxona Boshqaruvchisi", client: "Malika Yusupova",
    title: "Besh Yulduzli Mehmonxona Xonalar Fondi",
    e1: "HotelRoom", pk1: "roomNo", a1: ["roomType", "pricePerNight", "floorNo", "capacity"],
    w2_e1: "StandardRoom", w2_a1: ["singleBedCount", "hasBalcony"],
    w2_e2: "PresidentialSuite", w2_a2: ["livingRoomCount", "hasJacuzzi"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 8, s: 1, ind: "Restoran & Katering", role: "Bosh Oshpaz", client: "Otabek Sodiqov",
    title: "Premium Restoran Taomnomasi",
    e1: "MenuItem", pk1: "itemId", a1: ["name", "category", "price", "calories"],
    w2_e1: "VegetarianDish", w2_a1: ["organicCertified", "dairyFree"],
    w2_e2: "MeatDish", w2_a2: ["meatType", "cookTimeMin"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 9, s: 1, ind: "IT & Dasturiy Ta'minot", role: "Texnik Direktor (CTO)", client: "Farhod Ergashev",
    title: "IT Kompaniyasi Muhandislik Shtati",
    e1: "Developer", pk1: "devId", a1: ["fullName", "role", "techStack", "salary"],
    w2_e1: "FrontendDev", w2_a1: ["uiFramework", "designSkillLevel"],
    w2_e2: "BackendDev", w2_a2: ["dbEngine", "cloudCertified"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 10, s: 1, ind: "E-Commerce & Savdo", role: "Mahsulot Bosh Menejeri", client: "Shahnoza Karimova",
    title: "Onlayn Gipermarket Tovar Katalogi",
    e1: "Product", pk1: "sku", a1: ["title", "price", "stockQty", "weightKg"],
    w2_e1: "DigitalProduct", w2_a1: ["downloadUrl", "licenseKeyCount"],
    w2_e2: "PhysicalProduct", w2_a2: ["dimensionsCm", "shippingFee"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 11, s: 1, ind: "Kino & Ko'ngilochar", role: "Kinoprokat Boshqaruvchisi", client: "Akmal Shokirov",
    title: "Kinoteatrlar Tarmog'i Filmlar Jadvali",
    e1: "Movie", pk1: "movieId", a1: ["title", "director", "durationMin", "ageRating"],
    w2_e1: "FeatureFilm", w2_a1: ["boxOfficeMillions", "aspectRatio"],
    w2_e2: "DocumentaryFilm", w2_a2: ["historicalTopic", "narratorName"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 12, s: 1, ind: "Farmatsevtika & Dorixona", role: "Bosh Provisor", client: "Umida Zokirova",
    title: "Markaziy Dorixona Dori Vositalari Inventari",
    e1: "Medicine", pk1: "barcode", a1: ["name", "dosageMg", "manufacturer", "expDate"],
    w2_e1: "PrescriptionDrug", w2_a1: ["controlledSchedule", "doctorReq"],
    w2_e2: "OtcDrug", w2_a2: ["flavor", "ageLimitYears"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 13, s: 1, ind: "Logistika & Yuk Tashish", role: "Logistika Floti Rahbari", client: "Sanjar Normatov",
    title: "Trans-Kontinental Yuk Tashish Avtoparki",
    e1: "CargoTruck", pk1: "plateNo", a1: ["capacityTons", "fuelType", "mileageKm", "status"],
    w2_e1: "RefrigeratedTruck", w2_a1: ["minTempCelsius", "compressorPower"],
    w2_e2: "FlatbedTruck", w2_a2: ["bedLengthMeters", "maxAxleWeight"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 14, s: 1, ind: "Sport & Fitnes", role: "Mijozlar Xizmati Rahbari", client: "Nilufar Rahimova",
    title: "Premium Fitnes Klub A'zolari Reyestri",
    e1: "ClubMember", pk1: "memberCardNo", a1: ["fullName", "membershipType", "expiryDate", "phone"],
    w2_e1: "VipMember", w2_a1: ["personalTrainerId", "spaAccessLevel"],
    w2_e2: "RegularMember", w2_a2: ["lockerAssigned", "timeSlot"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 15, s: 1, ind: "Yashil Energetika", role: "Bosh Energetik Muhandis", client: "Davron Karimov",
    title: "Quyosh Fotoelektr Stansiyasi Invertorlari",
    e1: "SolarInverter", pk1: "serialNo", a1: ["peakPowerKw", "voltageInput", "installDate", "efficiency"],
    w2_e1: "CentralInverter", w2_a1: ["transformerRatingKva", "coolingSystem"],
    w2_e2: "MicroInverter", w2_a2: ["mpptChannels", "efficiencyRating"],
    w2_constraint: "{Mandatory, Or}"
  },

  // =========================================================================
  // SECTOR 2 (16–30): 1..1 RELATIONSHIPS & MANDATORY/OPTIONAL PARTICIPATION
  // =========================================================================
  {
    id: 16, s: 2, ind: "Yo'l Harakati Xavfsizligi", role: "DYXX Bosh Inspektor", client: "Polkovnik Botir Rahmonov",
    title: "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi",
    e1: "Driver", pk1: "driverId", a1: ["fullName", "phone", "bloodGroup"],
    e2: "DriverLicense", pk2: "licenseNo", a2: ["categories", "issueDate", "expiryDate"],
    rel: "Holds", m1: "1..1", m2: "1..1"
  },
  {
    id: 17, s: 2, ind: "Migratsiya & Fuqarolik", role: "Pasport Bo'limi Boshlig'i", client: "Mayor Sherzod Aliyev",
    title: "Fuqaro va Biometrik Identifikatsiya Pasporti",
    e1: "Citizen", pk1: "pinfl", a1: ["fullName", "birthDate", "nationality"],
    e2: "Passport", pk2: "passportNo", a2: ["expiryDate", "issuedBy", "chipVersion"],
    rel: "IssuedTo", m1: "1..1", m2: "1..1"
  },
  {
    id: 18, s: 2, ind: "Soliq Boshqaruvi", role: "Soliq Inspeksiyasi Rahbari", client: "Nodir Hakimov",
    title: "Kompaniya va Soliq Ro'yxatdan O'tish Guvohnomasi",
    e1: "Company", pk1: "tin", a1: ["companyName", "legalAddress", "industryType"],
    e2: "TaxCertificate", pk2: "certId", a2: ["taxRegime", "effectiveDate", "regNumber"],
    rel: "CertifiedBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 19, s: 2, ind: "Klinika Boshqaruvi", role: "Bosh Shifokor", client: "Prof. Hasan Umarov",
    title: "Shifoxona Bo'limi va Bo'lim Bosh Shifokori",
    e1: "HospitalDept", pk1: "deptCode", a1: ["deptName", "floorNo", "bedQuota"],
    e2: "HeadDoctor", pk2: "licenseId", a2: ["doctorName", "specialtyField", "phone"],
    rel: "HeadedBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 20, s: 2, ind: "Korporativ IT Texnika", role: "IT Aktivlar Menejeri", client: "Javohir Qosimov",
    title: "Kompaniya Xodimi va Xizmat Noutbuki",
    e1: "StaffMember", pk1: "staffId", a1: ["staffName", "jobTitle", "workEmail"],
    e2: "AssignedLaptop", pk2: "assetTag", a2: ["serialNo", "modelName", "ramGb"],
    rel: "AssignedTo", m1: "1..1", m2: "0..1"
  },
  {
    id: 21, s: 2, ind: "Davlat Boshqaruvi", role: "Devonxona Boshlig'i", client: "Shavkat Toirov",
    title: "Vazirlik Boshqarmasi va Soha Vaziri",
    e1: "Ministry", pk1: "ministryId", a1: ["officialTitle", "budgetBillion", "location"],
    e2: "Minister", pk2: "ministerId", a2: ["fullName", "appointedDate", "decreeNo"],
    rel: "LedBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 22, s: 2, ind: "Harbiy Dengiz Floti", role: "Flot Admiral Shtabi", client: "Kapitan Anvar Salimov",
    title: "Dengiz Harbiylashgan Kemasi va Kema Kapitani",
    e1: "Warship", pk1: "hullNo", a1: ["shipName", "displacementTons", "commissionYear"],
    e2: "Captain", pk2: "officerId", a2: ["officerName", "rankGrade", "serviceYears"],
    rel: "CommandedBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 23, s: 2, ind: "Ko'chmas Mulk & Kadastr", role: "Kadastr Muhandisi", client: "Muzaffar Jo'rayev",
    title: "Mulkdor va Ko'chmas Mulk Kadastr Pasporti",
    e1: "PropertyOwner", pk1: "ownerId", a1: ["ownerName", "phone", "taxPayerCode"],
    e2: "CadastreDeed", pk2: "deedNo", a2: ["cadastralZone", "landAreaSqm", "registeredDate"],
    rel: "DeededWith", m1: "1..1", m2: "1..1"
  },
  {
    id: 24, s: 2, ind: "Savdo & To'lov Tizimi", role: "Kassa Texnik Mutaxassisi", client: "Sardor Saidov",
    title: "Kassa Shoxobchasi va Bank POS Terminali",
    e1: "CheckoutLane", pk1: "laneNo", a1: ["deskCode", "supervisorName", "status"],
    e2: "PosTerminal", pk2: "terminalId", a2: ["ipAddress", "merchantCode", "serialNumber"],
    rel: "EquippedWith", m1: "1..1", m2: "1..1"
  },
  {
    id: 25, s: 2, ind: "Maktab Ta'limi", role: "Maktab Mudiri", client: "Munira Fayzullayeva",
    title: "Maktab O'quvchisi va Shaxsiy Saqlash Shkafchasi",
    e1: "Pupil", pk1: "pupilId", a1: ["fullName", "gradeLevel", "classRoom"],
    e2: "SchoolLocker", pk2: "lockerNo", a2: ["hallwayWing", "combinationCode", "shelfCount"],
    rel: "Allocated", m1: "1..1", m2: "0..1"
  },
  {
    id: 26, s: 2, ind: "Aviatsiya Xavfsizligi", role: "Avia Nazorat Inspeksiyasi", client: "Oleg Smirnov",
    title: "Yo'lovchi Samolyoti va Qora Quti Yozuv Uskunasi",
    e1: "Airplane", pk1: "airframeNo", a1: ["tailNumber", "modelCode", "serviceHours"],
    e2: "FlightRecorder", pk2: "recorderId", a2: ["beaconFrequency", "memoryCapacityGb", "batteryExpiry"],
    rel: "MonitoredBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 27, s: 2, ind: "Qishloq Xo'jaligi", role: "Yer Resurslari Boshlig'i", client: "Ibrohim Rustamov",
    title: "Fermer Xo'jaligi va Yer Ijara Shartnomasi",
    e1: "Farm", pk1: "farmRegNo", a1: ["farmName", "province", "cropType"],
    e2: "LandLeaseContract", pk2: "contractId", a2: ["hectares", "leaseEndDate", "regDate"],
    rel: "ContractedUnder", m1: "1..1", m2: "1..1"
  },
  {
    id: 28, s: 2, ind: "Diplomatiya & Tashqi Ishlar", role: "Protokol Xizmati Rahbari", client: "Kamol Boboyev",
    title: "Diplomatik Elchixona va Favqulodda Muxtor Elchi",
    e1: "Embassy", pk1: "embassyId", a1: ["hostCountry", "cityLocation", "establishedYear"],
    e2: "Ambassador", pk2: "diplomatId", a2: ["fullName", "credentialDate", "diplomaticRank"],
    rel: "RepresentedBy", m1: "1..1", m2: "1..1"
  },
  {
    id: 29, s: 2, ind: "Bank Xavfsizligi", role: "Bank Inkassatsiya Boshlig'i", client: "Akmal Fayziyev",
    title: "Bank Filiali va Asosiy Naqd Pul Seyfi",
    e1: "BankBranch", pk1: "branchNo", a1: ["street", "city", "phone"],
    e2: "MainVault", pk2: "vaultId", a2: ["securityGrade", "capacityKg", "alarmCode"],
    rel: "SecuredWith", m1: "1..1", m2: "1..1"
  },
  {
    id: 30, s: 2, ind: "Olimpiya Qo'mitasi", role: "Antidoping Komissari", client: "Dilorom Ismoilova",
    title: "Professional Atlet va Biologik Doping Pasporti",
    e1: "Athlete", pk1: "licenseId", a1: ["athleteName", "sportDiscipline", "countryCode"],
    e2: "DopingPassport", pk2: "passportCode", a2: ["biologicalProfile", "lastTestDate", "labCode"],
    rel: "TrackedBy", m1: "1..1", m2: "1..1"
  },

  // =========================================================================
  // SECTOR 3 (31–45): 1..* CARDINALITY & NATURAL HIERARCHY
  // =========================================================================
  {
    id: 31, s: 3, ind: "Akademik Kadrlar", role: "Fakultet Dekani", client: "Prof. Dilshod Karimov",
    title: "Universitet Kafedrasi va Professor-O'qituvchilar",
    e1: "Department", pk1: "deptCode", a1: ["deptName", "officeRoom"],
    e2: "Lecturer", pk2: "lecturerId", a2: ["fullName", "academicRank", "salary"],
    rel: "Employs", m1: "1..1", m2: "1..*"
  },
  {
    id: 32, s: 3, ind: "Matbaa & Nashriyot", role: "Bosh Muharrir", client: "Feruza Mahmudova",
    title: "Nashriyot Uyi va Chop Etilgan Kitob Nashrlari",
    e1: "Publisher", pk1: "publisherId", a1: ["companyName", "address", "phone"],
    e2: "BookEdition", pk2: "editionIsbn", a2: ["title", "printRun", "price"],
    rel: "Publishes", m1: "1..1", m2: "1..*"
  },
  {
    id: 33, s: 3, ind: "Fintech & Plastik Kartalar", role: "Karta Boshqarmasi Rahbari", client: "Ulug'bek Sobirov",
    title: "Bank Mijozi va Unga Biriktirilgan Plastik Kartalar",
    e1: "Customer", pk1: "customerId", a1: ["fullName", "phone", "email"],
    e2: "PaymentCard", pk2: "cardNumber", a2: ["cardType", "expiryDate", "cvvHash"],
    rel: "Owns", m1: "1..1", m2: "1..*"
  },
  {
    id: 34, s: 3, ind: "Shahar Yo'lovchi Transporti", role: "Transport Garaji Boshlig'i", client: "Mansur Jo'rayev",
    title: "Avtobus Saroyi va Shahar Avtobuslari Floti",
    e1: "BusDepot", pk1: "depotId", a1: ["depotName", "garageCapacity", "cityZone"],
    e2: "CityBus", pk2: "busRegNo", a2: ["model", "seatCapacity", "routeNo"],
    rel: "Houses", m1: "1..1", m2: "1..*"
  },
  {
    id: 35, s: 3, ind: "Korporativ Boshqaruv", role: "HR Bosh Menejeri", client: "Nargiza Odilova",
    title: "Kompaniya Filiali va Unda Ishlovchi Xodimlar",
    e1: "Branch", pk1: "branchNo", a1: ["city", "street", "phone"],
    e2: "Staff", pk2: "staffNo", a2: ["fName", "lName", "position", "salary"],
    rel: "Operates", m1: "1..1", m2: "1..*"
  },
  {
    id: 36, s: 3, ind: "Klinika Bo'limlari", role: "Bosh Hamshira", client: "Shohida Olimova",
    title: "Shifoxona Bo'limi va Unga Qarashli Palatalar",
    e1: "HospitalWard", pk1: "wardId", a1: ["wardName", "floorLevel", "nurseStation"],
    e2: "PatientRoom", pk2: "roomNumber", a2: ["bedCount", "isOxygenEquipped", "dailyRate"],
    rel: "Contains", m1: "1..1", m2: "1..*"
  },
  {
    id: 37, s: 3, ind: "Aeronavigatsiya", role: "Parvozlar Bosh Dispetcheri", client: "Ravshan Yusupov",
    title: "Aviakompaniya va Xalqaro Parvoz Reyslari",
    e1: "Airline", pk1: "airlineCode", a1: ["airlineName", "countryOrigin", "alliance"],
    e2: "FlightSchedule", pk2: "flightNo", a2: ["originIata", "destIata", "departureTime"],
    rel: "Operates", m1: "1..1", m2: "1..*"
  },
  {
    id: 38, s: 3, ind: "Restoran Xizmati", role: "Restoran Administratori", client: "Zilola Ergasheva",
    title: "Restoran Stoli va Buyurtma Cheklari",
    e1: "DiningTable", pk1: "tableNo", a1: ["seatingCapacity", "zoneArea", "isReserved"],
    e2: "OrderTicket", pk2: "orderId", a2: ["orderTime", "totalSum", "paymentStatus"],
    rel: "Places", m1: "1..1", m2: "0..*"
  },
  {
    id: 39, s: 3, ind: "Xalqaro Mehmonxona", role: "Mehmonxona Qabul Rahbari", client: "Sevara Shokirova",
    title: "Mehmonxona Majmuasi va Xonalar Boshqaruvi",
    e1: "Hotel", pk1: "hotelId", a1: ["hotelName", "starRating", "cityAddress"],
    e2: "Room", pk2: "roomNo", a2: ["type", "price", "isCleaned"],
    rel: "Has", m1: "1..1", m2: "1..*"
  },
  {
    id: 40, s: 3, ind: "Madaniyat & Teatr", role: "Sahna Rejissyori", client: "Rustam Mirzayev",
    title: "Teatr Spektakli va Badiiy Rollar Fonotekasi",
    e1: "TheatrePlay", pk1: "playCode", a1: ["title", "authorPlaywright", "genre"],
    e2: "CharacterRole", pk2: "roleId", a2: ["characterName", "importanceTier", "actCount"],
    rel: "Features", m1: "1..1", m2: "1..*"
  },
  {
    id: 41, s: 3, ind: "Media & Kontent", role: "Bosh Muharrir SMM", client: "Madina Alimova",
    title: "Telegram Blog Kanali va Nashr Qilingan Postlar",
    e1: "Channel", pk1: "channelHandle", a1: ["channelTitle", "subscribersCount", "createdDate"],
    e2: "ChannelPost", pk2: "postId", a2: ["publishedAt", "viewCount", "postText"],
    rel: "Publishes", m1: "1..1", m2: "0..*"
  },
  {
    id: 42, s: 3, ind: "Omborxona Xo'jaligi", role: "Ombor Mudiri", client: "Oybek Mahmudov",
    title: "Logistika Omborxonasi va Saqlash Bo'lmalari",
    e1: "Warehouse", pk1: "warehouseCode", a1: ["facilityName", "totalVolumeM3", "address"],
    e2: "StorageBay", pk2: "bayBarcode", a2: ["aisleNo", "maxWeightKg", "temperatureZone"],
    rel: "ConsistsOf", m1: "1..1", m2: "1..*"
  },
  {
    id: 43, s: 3, ind: "Hududiy Boshqaruv", role: "Shahar Hokimiyati", client: "Botir Tursunov",
    title: "Viloyat Shahri va Unga Tegishli Tumanlar",
    e1: "City", pk1: "cityId", a1: ["cityName", "regionName", "population"],
    e2: "District", pk2: "districtId", a2: ["districtName", "postalIndex", "areaSqKm"],
    rel: "DividedInto", m1: "1..1", m2: "1..*"
  },
  {
    id: 44, s: 3, ind: "Sug'urta Bozori", role: "Sug'urta Kompaniyasi Menejeri", client: "Gulzoda Salimova",
    title: "Sug'urta Agenti va Rasmiylashtirilgan Sug'urta Polislari",
    e1: "InsuranceBroker", pk1: "brokerId", a1: ["brokerName", "licenseNo", "commissionRate"],
    e2: "Policy", pk2: "policyNo", a2: ["startDate", "endDate", "premiumAmount"],
    rel: "Underwrites", m1: "1..1", m2: "0..*"
  },
  {
    id: 45, s: 3, ind: "Telekom & Radioaloqa", role: "Radio Tarmoq Muhandisi", client: "Eldor Vohidov",
    title: "Mobil Aloqa Minorasi va Antenna Sektorlari",
    e1: "CellTower", pk1: "towerId", a1: ["towerName", "latitude", "longitude", "heightMeters"],
    e2: "AntennaSector", pk2: "sectorId", a2: ["azimuthDegree", "frequencyBandMhz", "powerWatt"],
    rel: "Radiates", m1: "1..1", m2: "1..*"
  },

  // =========================================================================
  // SECTOR 4 (46–60): *..* MANY-TO-MANY & ASSOCIATIVE ENTITIES
  // =========================================================================
  {
    id: 46, s: 4, ind: "Tibbiyot Xizmati", role: "Klinika Koordinatori", client: "Dr. Lola Sharipova",
    title: "Shifokor va Bemor Qabuli (Appointment)",
    e1: "Doctor", pk1: "doctorId", a1: ["docName", "specialization", "roomNumber"],
    e2: "Patient", pk2: "patientId", a2: ["patientName", "phone", "dob"],
    assoc: "Appointment", pkAssoc: "appointId", aAssoc: ["appointTime", "diagnosisNotes", "cost"]
  },
  {
    id: 47, s: 4, ind: "Universitet Dekanati", role: "Akademik Bo'lim Boshlig'i", client: "Jasur Qobilov",
    title: "Talaba va Fanlarga Ro'yxatdan O'tish (Enrollment)",
    e1: "Student", pk1: "studentId", a1: ["fullName", "email", "entryYear"],
    e2: "Course", pk2: "courseCode", a2: ["courseTitle", "credits", "syllabusVersion"],
    assoc: "Enrollment", pkAssoc: "enrollmentId", aAssoc: ["semester", "gradeLetter", "attendanceScore"]
  },
  {
    id: 48, s: 4, ind: "Nashriyot & Mualliflik Huquqi", role: "Adabiy Agent", client: "Gulbahor Karimova",
    title: "Muallif va Kitob Hammuallifligi (Authorship)",
    e1: "Author", pk1: "authorId", a1: ["penName", "country", "birthYear"],
    e2: "Book", pk2: "isbn", a2: ["bookTitle", "pageCount", "firstEditionYear"],
    assoc: "Authorship", pkAssoc: "authorshipId", aAssoc: ["royaltySharePercent", "contributionChapter", "contractSignDate"]
  },
  {
    id: 49, s: 4, ind: "Elektron Tijorat", role: "Savdo Tahlilchisi", client: "Sardor Ahmedov",
    title: "Xarid Buyurtmasi va Tovar Tarkibi (OrderItem)",
    e1: "Order", pk1: "orderId", a1: ["orderDate", "shippingAddress", "status"],
    e2: "Product", pk2: "sku", a2: ["productName", "unitPrice", "stockQty"],
    assoc: "OrderItem", pkAssoc: "itemId", aAssoc: ["quantity", "appliedDiscount", "lineTotal"]
  },
  {
    id: 50, s: 4, ind: "Scrum & IT Boshqaruv", role: "Scrum Master", client: "Behzod Rahimov",
    title: "Dasturchi va Dasturiy Loyihalar (ProjectAssignment)",
    e1: "Developer", pk1: "devId", a1: ["fullName", "seniority", "hourlyRate"],
    e2: "Project", pk2: "projectCode", a2: ["projectName", "deadline", "budgetUsd"],
    assoc: "ProjectAssignment", pkAssoc: "assignId", aAssoc: ["assignedRole", "hoursPerWeek", "startDate"]
  },
  {
    id: 51, s: 4, ind: "Xalqaro Turizm", role: "Sayyohlik Agentligi Direktori", client: "Zuhra Alimova",
    title: "Sayyoh va Ekskursiya Paketlari (TourBooking)",
    e1: "Tourist", pk1: "passportNumber", a1: ["touristName", "citizenship", "phone"],
    e2: "TourPackage", pk2: "packageCode", a2: ["destinationCity", "durationDays", "basePrice"],
    assoc: "TourBooking", pkAssoc: "bookingRef", aAssoc: ["travelDate", "adultCount", "specialMealRequest"]
  },
  {
    id: 52, s: 4, ind: "Ovoz Yozish Studiyasi", role: "Musiqa Produseri", client: "Doniyor Karimov",
    title: "Musiqachi va Audio Trek Hamkorligi (TrackContribution)",
    e1: "Musician", pk1: "artistId", a1: ["stageName", "instrument", "genre"],
    e2: "Track", pk2: "isrcCode", a2: ["trackTitle", "durationSeconds", "bpmTempo"],
    assoc: "TrackContribution", pkAssoc: "contribId", aAssoc: ["roleType", "royaltySplitRatio", "recordingStudio"]
  },
  {
    id: 53, s: 4, ind: "Kinematografiya", role: "Kasting Direktori", client: "Nodira Qosimova",
    title: "Aktyor va Film Kasting Shartnomasi (CastingContract)",
    e1: "Actor", pk1: "actorCardId", a1: ["realName", "agentContact", "actingUnionId"],
    e2: "Film", pk2: "filmCode", a2: ["filmTitle", "producerName", "shootingStartYear"],
    assoc: "CastingContract", pkAssoc: "contractNo", aAssoc: ["characterName", "compensationSum", "isLeadRole"]
  },
  {
    id: 54, s: 4, ind: "Magistral Logistika", role: "Logistika Dispetcheri", client: "Ilhom Sobirov",
    title: "Yuk Mashinasi va Tranzit Yo'nalishi (DeliveryTrip)",
    e1: "Truck", pk1: "truckPlate", a1: ["model", "maxPayloadTons", "odometerKm"],
    e2: "Route", pk2: "routeId", a2: ["originHub", "destHub", "distanceKm"],
    assoc: "DeliveryTrip", pkAssoc: "tripTicketNo", aAssoc: ["dispatchTime", "fuelLitersUsed", "driverStaffId"]
  },
  {
    id: 55, s: 4, ind: "Ishlab Chiqarish Zavodi", role: "Bosh Texnolog", client: "G'ayrat Normatov",
    title: "Tayyor Mahsulot va Xomashyo Komponentlari (BillOfMaterial)",
    e1: "Product", pk1: "productNo", a1: ["name", "retailPrice", "manufacturingTimeHours"],
    e2: "RawMaterial", pk2: "materialCode", a2: ["materialName", "unitOfMeasure", "costPerUnit"],
    assoc: "BillOfMaterial", pkAssoc: "bomItemId", aAssoc: ["requiredQuantity", "wastageTolerancePercent", "assemblySequenceNo"]
  },
  {
    id: 56, s: 4, ind: "Xalqaro Sammit", role: "Konferensiya Tashkilotchisi", client: "Saida Mirzayeva",
    title: "Konferensiya Ishtirokchisi va Seminar Sessiyalari (SessionRegistration)",
    e1: "Delegate", pk1: "badgeId", a1: ["delegateName", "organization", "jobPosition"],
    e2: "WorkshopSession", pk2: "sessionCode", a2: ["sessionTopic", "roomHall", "speakerName"],
    assoc: "SessionRegistration", pkAssoc: "regTicketId", aAssoc: ["registeredAt", "attendedAttendance", "feedbackScore"]
  },
  {
    id: 57, s: 4, ind: "Tashqi Iqtisodiy Faoliyat", role: "Bojxona Bosh Nazoratchisi", client: "Farrux Yusupov",
    title: "Eksportchi Korxona va Bojxona Nazorati Posti (CustomsDeclaration)",
    e1: "Exporter", pk1: "exporterInn", a1: ["companyName", "legalAddress", "licenseDate"],
    e2: "CustomsPost", pk2: "postCode", a2: ["postName", "borderRegion", "terminalCapacityTons"],
    assoc: "CustomsDeclaration", pkAssoc: "gtdNumber", aAssoc: ["cargoInvoiceSum", "customsDutyPaid", "clearanceDate"]
  },
  {
    id: 58, s: 4, ind: "Raqamli OAV & Portal", role: "Bosh Redaktor", client: "Nilufar Jo'rayeva",
    title: "Yangilik Maqolasi va Tematik Teglar (ArticleTagMap)",
    e1: "Article", pk1: "articleSlug", a1: ["headline", "authorName", "publishDateTime"],
    e2: "ContentTag", pk2: "tagId", a2: ["tagName", "categoryTheme", "popularityIndex"],
    assoc: "ArticleTagMap", pkAssoc: "mappingId", aAssoc: ["attachedOrder", "autoSuggestedByAi", "relevanceScore"]
  },
  {
    id: 59, s: 4, ind: "O'quv Markazi", role: "O'quv Bo'limi Boshlig'i", client: "Sanjar Fayziyev",
    title: "O'qituvchi va O'quv Xonasi Dars Jadvali (LessonSchedule)",
    e1: "Instructor", pk1: "tutorId", a1: ["tutorName", "subjectExpertise", "contactPhone"],
    e2: "Classroom", pk2: "roomCode", a2: ["buildingWing", "projectorModel", "seatingCap"],
    assoc: "LessonSchedule", pkAssoc: "scheduleEntryId", aAssoc: ["dayOfWeek", "lessonPeriod", "studyGroupId"]
  },
  {
    id: 60, s: 4, ind: "B2B Savdo Tarmog'i", role: "Ta'minot Boshqaruvchisi", client: "Shohruh Vohidov",
    title: "Chakana Savdo Tarmog'i va Dilerlik Shartnomasi (SupplyContract)",
    e1: "Retailer", pk1: "storeChainId", a1: ["chainName", "outletCount", "cityHq"],
    e2: "Supplier", pk2: "supplierInn", a2: ["vendorName", "warehouseLocation", "reliabilityScore"],
    assoc: "SupplyContract", pkAssoc: "contractDocNo", aAssoc: ["monthlyOrderMinimum", "paymentTermDays", "penaltyRatePercent"]
  },

  // =========================================================================
  // SECTOR 5 (61–75): WEAK ENTITIES & DISCRIMINATORS (PPK)
  // =========================================================================
  {
    id: 61, s: 5, ind: "Mehmonxona Xonalari", role: "Xonalar Menejeri", client: "Zulfiya Karimova",
    title: "Mehmonxona va Xonalar (Zaif Entitiy)",
    e1: "Hotel", pk1: "hotelId", a1: ["hotelName", "starRating", "city"],
    e2: "Room", pk2: "roomNo", a2: ["bedCount", "floorNo", "dailyPrice"],
    isWeak: true, rel: "HasRoom", m1: "1..1", m2: "1..*"
  },
  {
    id: 62, s: 5, ind: "Bino Qavatlari", role: "Bino Boshqaruvchisi", client: "Rustam Mahmudov",
    title: "Biznes Markaz Binosi va Qavatlari",
    e1: "Building", pk1: "buildingId", a1: ["buildingName", "streetAddress", "totalFloors"],
    e2: "BuildingFloor", pk2: "floorNo", a2: ["emergencyExitCount", "usableAreaSqm"],
    isWeak: true, rel: "ContainsFloor", m1: "1..1", m2: "1..*"
  },
  {
    id: 63, s: 5, ind: "Korporativ Xodimlar Oila A'zolari", role: "HR Ijtimoiy Himoya Menejeri", client: "Nargiza Sodiqova",
    title: "Kompaniya Xodimi va Qaramog'idagilar (Dependent)",
    e1: "Employee", pk1: "empId", a1: ["empName", "department", "salary"],
    e2: "Dependent", pk2: "depName", a2: ["relationshipType", "birthDate", "gender"],
    isWeak: true, rel: "HasDependent", m1: "1..1", m2: "0..*"
  },
  {
    id: 64, s: 5, ind: "Kutubxona Nusxalari", role: "Fond Boshqaruvchisi", client: "Mansur Aliyev",
    title: "Kitob Asari va Uning Fizik Nusxalari (BookCopy)",
    e1: "BookTitle", pk1: "isbn", a1: ["title", "author", "editionYear"],
    e2: "BookCopy", pk2: "copyNo", a2: ["conditionStatus", "shelfBay", "isAvailable"],
    isWeak: true, rel: "HasCopy", m1: "1..1", m2: "1..*"
  },
  {
    id: 65, s: 5, ind: "Bank Tranzaksiyalari", role: "Audit Boshlig'i", client: "Alisher Toirov",
    title: "Bank Hisobi va Tranzaksiya Yozuvlari",
    e1: "BankAccount", pk1: "accountNo", a1: ["holderName", "currency", "balance"],
    e2: "AccountTransaction", pk2: "txSeqNo", a2: ["txAmount", "txTimestamp", "terminalCode"],
    isWeak: true, rel: "LogsTx", m1: "1..1", m2: "0..*"
  },
  {
    id: 66, s: 5, ind: "Aviaparvoz Chiptalari", role: "Parvoz Boshqaruvchisi", client: "Oleg Petrov",
    title: "Aviaparvoz Reysi va Parvoz Chiptalari",
    e1: "FlightSchedule", pk1: "flightNo", a1: ["originIata", "destIata", "depTime"],
    e2: "BoardingPass", pk2: "seatNo", a2: ["passengerName", "gateNumber", "boardingGroup"],
    isWeak: true, rel: "IssuesPass", m1: "1..1", m2: "1..*"
  },
  {
    id: 67, s: 5, ind: "Turar-Joy Majmuasi", role: "Uy-Joy Boshqarmasi", client: "Sherzod Qodirov",
    title: "Turar-Joy Binosi va Kvartiralar Reyestri",
    e1: "ApartmentComplex", pk1: "complexId", a1: ["complexName", "street", "blockLetter"],
    e2: "FlatUnit", pk2: "flatNo", a2: ["roomsCount", "areaSqm", "floorLevel"],
    isWeak: true, rel: "ComprisesFlat", m1: "1..1", m2: "1..*"
  },
  {
    id: 68, s: 5, ind: "Farmatsevtika Partiyalari", role: "Sifat Nazorati Boshlig'i", client: "Kamola Umarova",
    title: "Dori Formulari va Ishlab Chiqarish Partiyalari (Batch)",
    e1: "DrugFormula", pk1: "formulaCode", a1: ["chemicalName", "patentExpDate", "dosageMg"],
    e2: "BatchLot", pk2: "lotNumber", a2: ["prodDate", "expiryDate", "labTechStaffId"],
    isWeak: true, rel: "ProducedInLot", m1: "1..1", m2: "1..*"
  },
  {
    id: 69, s: 5, ind: "Onlayn Kurs Darslari", role: "Metodist", client: "Jaloliddin Sobirov",
    title: "Onlayn Kurs va Uning Dars Modullari",
    e1: "OnlineCourse", pk1: "courseId", a1: ["courseTitle", "authorName", "priceUsd"],
    e2: "CourseLesson", pk2: "lessonSeqNo", a2: ["videoDurationMin", "lessonTitle", "isFreePreview"],
    isWeak: true, rel: "ContainsLesson", m1: "1..1", m2: "1..*"
  },
  {
    id: 70, s: 5, ind: "Temir Yo'l Vagonlari", role: "Vagon Deposi Boshlig'i", client: "Bahrom Rustamov",
    title: "Poyezd Marshruti va Biriktirilgan Vagonlar",
    e1: "TrainRoute", pk1: "trainNo", a1: ["routeTitle", "departureStation", "arrivalStation"],
    e2: "CarriageUnit", pk2: "coachNumber", a2: ["classType", "berthCapacity", "manufactureYear"],
    isWeak: true, rel: "IncludesCarriage", m1: "1..1", m2: "1..*"
  },
  {
    id: 71, s: 5, ind: "Tibbiy Diagnostika", role: "Laboratoriya Mudiri", client: "Dr. Nodir Fayzullayev",
    title: "Laboratoriya Namunasi va Tahlil Natijalari",
    e1: "LabSample", pk1: "sampleBarcode", a1: ["patientId", "collectionTime", "sampleType"],
    e2: "TestResultItem", pk2: "testMetricCode", a2: ["measuredValue", "normalRange", "unitMeasure"],
    isWeak: true, rel: "YieldsResult", m1: "1..1", m2: "1..*"
  },
  {
    id: 72, s: 5, ind: "Mashinasozlik Korxonasi", role: "Texnik Xizmat Muhandisi", client: "Ixtiyor Hakimov",
    title: "Sanoat Stanogi va Texnik Ehtiyot Qismlari",
    e1: "IndustrialMachine", pk1: "machineId", a1: ["modelName", "installDate", "powerKw"],
    e2: "ComponentSlot", pk2: "slotCode", a2: ["installedPartSerial", "serviceLifeHours", "lastReplaced"],
    isWeak: true, rel: "FittedWith", m1: "1..1", m2: "1..*"
  },
  {
    id: 73, s: 5, ind: "Teatr Zoli", role: "Chiptaxonalar Boshlig'i", client: "Shoira Vohidova",
    title: "Teatr Zoli va Tomoshabin O'rindiqlari",
    e1: "AuditoriumHall", pk1: "hallId", a1: ["hallName", "soundAcousticGrade", "screenType"],
    e2: "HallSeat", pk2: "seatNumber", a2: ["rowLetter", "seatTier", "isVipZone"],
    isWeak: true, rel: "HasSeat", m1: "1..1", m2: "1..*"
  },
  {
    id: 74, s: 5, ind: "Elektronika Zavodi", role: "Mahsulot Arxitektori", client: "Farhod Mirzayev",
    title: "Smartfon Modeli va Qurilma Modifikatsiyalari",
    e1: "SmartphoneModel", pk1: "modelCode", a1: ["marketingName", "releaseYear", "baseSocCpu"],
    e2: "HardwareConfig", pk2: "configCode", a2: ["storageGb", "ramGb", "colorVariant"],
    isWeak: true, rel: "ConfiguredAs", m1: "1..1", m2: "1..*"
  },
  {
    id: 75, s: 5, ind: "Ilmiy Nashrlar", role: "Ilmiy Kotib", client: "Prof. Dilnoza Rahimova",
    title: "Ilmiy Tadqiqot Maqolasi va Ilova Fayllari",
    e1: "ResearchPaper", pk1: "doiCode", a1: ["paperTitle", "primaryAuthor", "submissionDate"],
    e2: "SupplementaryFile", pk2: "fileIndex", a2: ["fileChecksum", "mimeType", "dataSizeBytes"],
    isWeak: true, rel: "AccompaniedBy", m1: "1..1", m2: "0..*"
  },

  // =========================================================================
  // SECTOR 6 (76–90): RECURSIVE / UNARY RELATIONSHIPS & ROLES
  // =========================================================================
  {
    id: 76, s: 6, ind: "Korporativ Boshqaruv", role: "HR Arxitektori", client: "Umar Karimov",
    title: "Kompaniya Xodimlari Boshqaruv Ierarxiyasi",
    e1: "Employee", pk1: "empId", a1: ["fullName", "jobPosition", "salary"],
    rel: "Manages", role1: "supervisor", role2: "supervisee", m1: "0..1", m2: "0..*"
  },
  {
    id: 77, s: 6, ind: "E-Commerce Mahsulotlar Daraxti", role: "Katalog Menejeri", client: "Shirin Aliyeva",
    title: "Onlayn Savdo Mahsulot Kategoriyalari Daraxti",
    e1: "ProductCategory", pk1: "categoryId", a1: ["categoryName", "displayOrder"],
    rel: "ParentCategoryOf", role1: "parentCat", role2: "subCat", m1: "0..1", m2: "0..*"
  },
  {
    id: 78, s: 6, ind: "Mashinasozlik Detallari", role: "Bosh Konstruktor", client: "Temur Salimov",
    title: "Sanoat Detallari va Komponentlar Ierarxiyasi",
    e1: "PartComponent", pk1: "partNumber", a1: ["partName", "unitCost", "weightKg"],
    rel: "AssembledFrom", role1: "parentAssembly", role2: "subComponent", m1: "0..*", m2: "0..*"
  },
  {
    id: 79, s: 6, ind: "Oliy Ta'lim Dasturlari", role: "O'quv-Uslubiy Boshqarma", client: "Dr. Lola Rahimova",
    title: "Universitet Fanlari va Prerekvizit Talablari",
    e1: "AcademicCourse", pk1: "courseCode", a1: ["courseTitle", "creditUnits", "level"],
    rel: "RequiresPrereq", role1: "advancedCourse", role2: "prerequisiteCourse", m1: "0..*", m2: "0..*"
  },
  {
    id: 80, s: 6, ind: "Fuqarolik Holati Dalolatnomalari", role: "FHDYo Mudiri", client: "Zulfiya Olimova",
    title: "Fuqaro va Qonuniy Nikoh Rishtasi",
    e1: "Citizen", pk1: "pinfl", a1: ["fullName", "gender", "birthDate"],
    rel: "MarriedTo", role1: "spouseA", role2: "spouseB", m1: "0..1", m2: "0..1"
  },
  {
    id: 81, s: 6, ind: "Aviakompaniya Reyslari", role: "Tranzit Dispetcheri", client: "Sanjar Vohidov",
    title: "Tranzit Aviaparvoz Qatnovlari Zanjiri",
    e1: "FlightLeg", pk1: "legId", a1: ["routeCode", "depAirport", "arrAirport"],
    rel: "ConnectsTo", role1: "inboundLeg", role2: "outboundConnectingLeg", m1: "0..1", m2: "0..1"
  },
  {
    id: 82, s: 6, ind: "Dasturiy Paketlar Menejeri", role: "DevOps Arxitektori", client: "Akmal Saidov",
    title: "Dasturiy Modullar Bog'liqlik Grafigi",
    e1: "SoftwarePackage", pk1: "packageId", a1: ["packageName", "semanticVersion", "licenseType"],
    rel: "DependsOn", role1: "dependentModule", role2: "requiredDependency", m1: "0..*", m2: "0..*"
  },
  {
    id: 83, s: 6, ind: "Xalqaro Shaxmat Federatsiyasi", role: "Bosh Hakam", client: "Grossmeyster Rustam Qodirov",
    title: "Shaxmat Musobaqasi Ishtirokchilar Juftligi",
    e1: "ChessMaster", pk1: "fideId", a1: ["masterName", "eloRating", "federationCountry"],
    rel: "PlaysMatch", role1: "whitePlayer", role2: "blackPlayer", m1: "0..*", m2: "0..*"
  },
  {
    id: 84, s: 6, ind: "Tarixiy Nasabnoma", role: "Shajarashunos Olim", client: "Bobur Mahmudov",
    title: "Tarixiy Shaxslar Nasl-Nasab Shajarasi",
    e1: "HistoricalFigure", pk1: "personId", a1: ["fullName", "birthCentury", "dynastyTitle"],
    rel: "AncestorOf", role1: "parentAncestor", role2: "childDescendant", m1: "0..*", m2: "0..2"
  },
  {
    id: 85, s: 6, ind: "Oliy Sud Qonunchiligi", role: "Sudya Konsultanti", client: "Dilorom Yusupova",
    title: "Sud Ishlari va Sud Pretsedenti Iqtiboslari",
    e1: "LegalPrecedent", pk1: "caseNo", a1: ["verdictYear", "jurisdictionCourt", "lawArticle"],
    rel: "CitesPrecedent", role1: "currentRulingCase", role2: "citedPrecedentCase", m1: "0..*", m2: "0..*"
  },
  {
    id: 86, s: 6, ind: "Ijtimoiy Tarmoq", role: "Ijtimoiy Graf Muhandisi", client: "Javlon Sharipov",
    title: "Foydalanuvchi va Kuzatuvchilar Tarmog'i",
    e1: "NetworkUser", pk1: "userHandle", a1: ["displayName", "joinDate", "isVerified"],
    rel: "FollowsUser", role1: "followerUser", role2: "followedUser", m1: "0..*", m2: "0..*"
  },
  {
    id: 87, s: 6, ind: "Xalqaro Xoldinglar", role: "Korporativ Huquqshunos", client: "Mansur Toirov",
    title: "Xalqaro Xolding va Sho''ba Korxonalari",
    e1: "CorporateEnterprise", pk1: "holdingId", a1: ["corporateName", "hqCountry", "capitalUsd"],
    rel: "SubsidiaryOf", role1: "parentHolding", role2: "daughterCompany", m1: "0..1", m2: "0..*"
  },
  {
    id: 88, s: 6, ind: "Metropoliten Magistrali", role: "Metro Boshqaruvchisi", client: "Otabek Rustamov",
    title: "Metro Bekatlari Ketma-ketlik Zanjiri",
    e1: "MetroStation", pk1: "stationCode", a1: ["stationName", "lineColor", "zoneNo"],
    rel: "AdjacentTo", role1: "precedingStop", role2: "succeedingStop", m1: "0..1", m2: "0..1"
  },
  {
    id: 89, s: 6, ind: "Virusologiya & Epidemiologiya", role: "Bosh Genetik", client: "Dr. Farrux Fayziyev",
    title: "Virus Shtammlari Mutatsiya Ierarxiyasi",
    e1: "PathogenStrain", pk1: "strainId", a1: ["genomeSeqHash", "isolationDate", "virulenceRate"],
    rel: "MutatedFrom", role1: "ancestralStrain", role2: "mutantLineage", m1: "0..1", m2: "0..*"
  },
  {
    id: 90, s: 6, ind: "Qidiruv Tizimi Web Grafigi", role: "Qidiruv Algoritmlari Arxitektori", client: "Sardor Mirzayev",
    title: "Internet Veb Sahifalari va Giperhavolalar",
    e1: "WebDocument", pk1: "pageUrl", a1: ["pageTitle", "pageRankScore", "lastCrawled"],
    rel: "HyperlinksTo", role1: "referringPage", role2: "targetLinkedPage", m1: "0..*", m2: "0..*"
  },

  // =========================================================================
  // SECTOR 7 (91–105): EER SPECIALISATION DISJOINT {MANDATORY, OR}
  // =========================================================================
  {
    id: 91, s: 7, ind: "Aviatsiya Muhandisligi", role: "Aviapark Boshqaruvchisi", client: "Davron Salimov",
    title: "Havo Kemalarini Disjoint Ixtisoslashtirish",
    e1: "Aircraft", pk1: "tailNo", a1: ["model", "manufacturer", "capacity"],
    w2_e1: "PassengerPlane", w2_a1: ["seatCount", "entertainmentSystem"],
    w2_e2: "CargoPlane", w2_a2: ["maxPayloadTons", "cargoDoorType"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 92, s: 7, ind: "Klinik Gospital", role: "Gospital Bosh Shifokori", client: "Dr. Malika Ahmedova",
    title: "Gospital Bemorlari: InPatient va OutPatient",
    e1: "Patient", pk1: "patientId", a1: ["fullName", "dob", "bloodType"],
    w2_e1: "InPatient", w2_a1: ["bedNumber", "admissionDate"],
    w2_e2: "OutPatient", w2_a2: ["clinicVisitDate", "doctorNotes"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 93, s: 7, ind: "Universitet Talabalari", role: "Registrator Boshlig'i", client: "Jahongir Vohidov",
    title: "Talabalar: Undergraduate va Postgraduate",
    e1: "Student", pk1: "studentId", a1: ["firstName", "lastName", "email"],
    w2_e1: "Undergraduate", w2_a1: ["highSchoolDiploma", "creditsCompleted"],
    w2_e2: "Postgraduate", w2_a2: ["bachelorDegreeNo", "thesisTopic"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 94, s: 7, ind: "Kutubxona Katalogi", role: "Elektron Resurslar Mudiri", client: "Sevara Karimova",
    title: "Kitoblar: EBook va PrintBook Ixtisoslashuvi",
    e1: "Book", pk1: "isbn", a1: ["title", "author", "publishYear"],
    w2_e1: "EBook", w2_a1: ["fileFormat", "fileSizeBytes"],
    w2_e2: "PrintBook", w2_a2: ["shelfLocation", "coverType"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 95, s: 7, ind: "Avtotransport Logistikasi", role: "Avtopark Dispetcheri", client: "Ulug'bek Rustamov",
    title: "Avtomobillar: ElectricVehicle va CombustionCar",
    e1: "Vehicle", pk1: "vin", a1: ["make", "model", "price"],
    w2_e1: "ElectricVehicle", w2_a1: ["batteryKwh", "chargingTimeHrs"],
    w2_e2: "CombustionCar", w2_a2: ["fuelTankLiters", "emissionClass"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 96, s: 7, ind: "Bank Hisoblari", role: "Depozit Bo'limi Boshlig'i", client: "Nodir Salimov",
    title: "Bank Hisoblari: SavingsAccount va CheckingAccount",
    e1: "BankAccount", pk1: "accountNo", a1: ["balance", "currency", "openDate"],
    w2_e1: "SavingsAccount", w2_a1: ["interestRatePercent", "minBalance"],
    w2_e2: "CheckingAccount", w2_a2: ["overdraftLimit", "checkbookNo"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 97, s: 7, ind: "Mehmonxona Joylashtirish", role: "Bron Qilish Menejeri", client: "Munira Yusupova",
    title: "Xonalar: StandardRoom va PresidentialSuite",
    e1: "HotelRoom", pk1: "roomNo", a1: ["roomType", "pricePerNight", "floorNo"],
    w2_e1: "StandardRoom", w2_a1: ["singleBedCount", "hasBalcony"],
    w2_e2: "PresidentialSuite", w2_a2: ["livingRoomCount", "hasJacuzzi"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 98, s: 7, ind: "Restoran Taomnomasi", role: "Restoran Shef Oshpazi", client: "Sanjar Qodirov",
    title: "Taomnoma: VegetarianDish va MeatDish",
    e1: "MenuItem", pk1: "itemId", a1: ["name", "category", "price"],
    w2_e1: "VegetarianDish", w2_a1: ["organicCertified", "dairyFree"],
    w2_e2: "MeatDish", w2_a2: ["meatType", "cookTimeMin"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 99, s: 7, ind: "Dasturchilar Jamoasi", role: "Texnik Lider", client: "Akmal Saidov",
    title: "Muhandislar: FrontendDev va BackendDev",
    e1: "Developer", pk1: "devId", a1: ["fullName", "techStack", "salary"],
    w2_e1: "FrontendDev", w2_a1: ["uiFramework", "designSkillLevel"],
    w2_e2: "BackendDev", w2_a2: ["dbEngine", "cloudCertified"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 100, s: 7, ind: "Marketpleys Tovarlari", role: "Elektron Savdo Menejeri", client: "Shahlo Rahimova",
    title: "Mahsulotlar: DigitalProduct va PhysicalProduct",
    e1: "Product", pk1: "sku", a1: ["title", "price", "stockQty"],
    w2_e1: "DigitalProduct", w2_a1: ["downloadUrl", "licenseKeyCount"],
    w2_e2: "PhysicalProduct", w2_a2: ["dimensionsCm", "shippingFee"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 101, s: 7, ind: "Kino Asarlari", role: "Prokat Boshqaruvchisi", client: "Bobur Alimov",
    title: "Filmlar: FeatureFilm va DocumentaryFilm",
    e1: "Movie", pk1: "movieId", a1: ["title", "director", "durationMin"],
    w2_e1: "FeatureFilm", w2_a1: ["boxOfficeMillions", "aspectRatio"],
    w2_e2: "DocumentaryFilm", w2_a2: ["historicalTopic", "narratorName"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 102, s: 7, ind: "Farmatsevtika Qonunchiligi", role: "Bosh Nazoratchi", client: "Dr. Umida Saidova",
    title: "Dorilar: PrescriptionDrug va OtcDrug",
    e1: "Medicine", pk1: "barcode", a1: ["name", "dosageMg", "expDate"],
    w2_e1: "PrescriptionDrug", w2_a1: ["controlledSchedule", "doctorReq"],
    w2_e2: "OtcDrug", w2_a2: ["flavor", "ageLimitYears"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 103, s: 7, ind: "Magistral Yuk Floti", role: "Avtopark Texnik Rahbari", client: "Rustam Qobilov",
    title: "Furalar: RefrigeratedTruck va FlatbedTruck",
    e1: "CargoTruck", pk1: "plateNo", a1: ["capacityTons", "mileageKm", "fuelType"],
    w2_e1: "RefrigeratedTruck", w2_a1: ["minTempCelsius", "compressorPower"],
    w2_e2: "FlatbedTruck", w2_a2: ["bedLengthMeters", "maxAxleWeight"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 104, s: 7, ind: "Fitnes Klub Ma'muriyati", role: "Klub Boshqaruvchisi", client: "Dilnoza Vohidova",
    title: "Klub A'zolari: VipMember va RegularMember",
    e1: "ClubMember", pk1: "memberCardNo", a1: ["fullName", "membershipType", "phone"],
    w2_e1: "VipMember", w2_a1: ["personalTrainerId", "spaAccessLevel"],
    w2_e2: "RegularMember", w2_a2: ["lockerAssigned", "timeSlot"],
    w2_constraint: "{Mandatory, Or}"
  },
  {
    id: 105, s: 7, ind: "Quyosh Podstansiyasi", role: "Stansiya Boshlig'i", client: "Jamshid Mahmudov",
    title: "Invertorlar: CentralInverter va MicroInverter",
    e1: "SolarInverter", pk1: "serialNo", a1: ["peakPowerKw", "voltageInput", "efficiency"],
    w2_e1: "CentralInverter", w2_a1: ["transformerRatingKva", "coolingSystem"],
    w2_e2: "MicroInverter", w2_a2: ["mpptChannels", "efficiencyRating"],
    w2_constraint: "{Mandatory, Or}"
  },

  // =========================================================================
  // SECTOR 8 (106–120): EER SPECIALISATION OVERLAPPING {OPTIONAL, AND}
  // =========================================================================
  {
    id: 106, s: 8, ind: "Universitet Shtati", role: "Ilmiy Kadrlar Bo'limi", client: "Prof. Anvar Hakimov",
    title: "Akademik Xodimlar: Instructor va Researcher (Overlapping)",
    e1: "UniversityStaff", pk1: "staffId", a1: ["fullName", "email", "salary"],
    w2_e1: "Instructor", w2_a1: ["teachingHoursPerWeek", "evalScore"],
    w2_e2: "Researcher", w2_a2: ["grantFundingUsd", "hIndex"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 107, s: 8, ind: "Tijorat Banki Mijozlari", role: "Chakana Xizmatlar Direktori", client: "Gulnora Sobirova",
    title: "Bank Mijozlari: Depositor va Borrower (Overlapping)",
    e1: "BankClient", pk1: "clientId", a1: ["clientName", "taxCode", "contactPhone"],
    w2_e1: "Depositor", w2_a1: ["depositBalance", "termMonths"],
    w2_e2: "Borrower", w2_a2: ["loanAmount", "creditRating"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 108, s: 8, ind: "Axborot Xavfsizligi", role: "CISO Boshlig'i", client: "Farrux Olimov",
    title: "Tizim Foydalanuvchilari: SecurityAdmin va SystemDev",
    e1: "SystemUser", pk1: "userLogin", a1: ["email", "createdDate", "lastLogin"],
    w2_e1: "SecurityAdmin", w2_a1: ["clearanceLevel", "incidentAlertEmail"],
    w2_e2: "SystemDev", w2_a2: ["gitBranchPermission", "ideEnvConfig"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 109, s: 8, ind: "Xalqaro Ilmiy Sammit", role: "Dastur Qo'mitasi Boshlig'i", client: "Prof. Dilnoza Rahimova",
    title: "Sammit Qatnashchilari: KeynoteSpeaker va Reviewer",
    e1: "ConferenceAttendee", pk1: "attendeeId", a1: ["attendeeName", "institution", "country"],
    w2_e1: "KeynoteSpeaker", w2_a1: ["lectureTopic", "honorariumSum"],
    w2_e2: "CommitteeReviewer", w2_a2: ["paperQuota", "assignedTrack"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 110, s: 8, ind: "Professional Sport Klubi", role: "Sport Direktori", client: "Rustam Mirzayev",
    title: "Sportchilar: LeaguePlayer va TeamCoach",
    e1: "AthleteMember", pk1: "athleteId", a1: ["athleteName", "bloodGroup", "joinYear"],
    w2_e1: "LeaguePlayer", w2_a1: ["jerseyNumber", "matchesPlayed"],
    w2_e2: "TeamCoach", w2_a2: ["coachingBadge", "winLossRatio"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 111, s: 8, ind: "Aviatsiya Ekipaji", role: "Parvozlar Xavfsizligi Boshlig'i", client: "Kapitan Vladimir Kim",
    title: "Parvoz Ekipaji: CommercialPilot va SafetyInspector",
    e1: "CrewMember", pk1: "crewId", a1: ["crewName", "flightHoursTotal", "medicalCertDate"],
    w2_e1: "CommercialPilot", w2_a1: ["typeRatingAircraft", "coPilotLicenseNo"],
    w2_e2: "SafetyInspector", w2_a2: ["safetyAuditCert", "inspectionCount"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 112, s: 8, ind: "Avtodilerlik Klasteri", role: "CRM Bosh Menejeri", client: "Sherzod Aliyev",
    title: "Avtosalon Mijozlari: VehicleBuyer va ServiceClient",
    e1: "DealershipClient", pk1: "clientId", a1: ["fullName", "passportNumber", "contactPhone"],
    w2_e1: "VehicleBuyer", w2_a1: ["purchaseContractNo", "purchasedVin"],
    w2_e2: "ServiceClient", w2_a2: ["serviceHistoryCode", "discountLevelPercent"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 113, s: 8, ind: "Milliy Drama Teatri", role: "Badiiy Rahbar", client: "Mansur Karimov",
    title: "Teatr Ijodkorlari: StageActor va PlayDirector",
    e1: "TheatreArtist", pk1: "artistId", a1: ["stageName", "unionCardNo", "debutYear"],
    w2_e1: "StageActor", w2_a1: ["actingRoleType", "vocalRange"],
    w2_e2: "PlayDirector", w2_a2: ["directingPortfolio", "repertoireCategory"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 114, s: 8, ind: "Akademik Tibbiyot Instituti", role: "Klinik Tadqiqotlar Mudiri", client: "Dr. Lola Sobirova",
    title: "Tibbiyot Xodimlari: Clinician va ClinicalTrialInvestigator",
    e1: "MedicalStaff", pk1: "licenseNo", a1: ["doctorName", "specialtyField", "phone"],
    w2_e1: "Clinician", w2_a1: ["dailyPatientQuota", "wardRoomCode"],
    w2_e2: "ClinicalTrialInvestigator", w2_a2: ["clinicalProtocolCode", "trialGrantNo"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 115, s: 8, ind: "Raqamli Media Xolding", role: "Ijodiy Direktor", client: "Zilola Mahmudova",
    title: "Media Ijodkorlari: VideoPresenter va AudioPodcaster",
    e1: "ContentCreator", pk1: "creatorId", a1: ["channelName", "subscriberTotal", "contractExpiry"],
    w2_e1: "VideoPresenter", w2_a1: ["screenLanguage", "videoStudioCode"],
    w2_e2: "AudioPodcaster", w2_a2: ["podcastFeedRss", "audioEpisodeCount"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 116, s: 8, ind: "Ekspress Kuryerlik", role: "Flot Menejeri", client: "Alisher Yusupov",
    title: "Haydovchilar: ExpressCourier va LongHaulDriver",
    e1: "FleetDriver", pk1: "driverStaffId", a1: ["driverName", "driverLicenseNo", "ratingStars"],
    w2_e1: "ExpressCourier", w2_a1: ["cityZoneCode", "deliveriesPerShift"],
    w2_e2: "LongHaulDriver", w2_a2: ["tirCarnetNo", "heavyVehiclePermitYear"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 117, s: 8, ind: "Restoranlar Zanjiri", role: "HR Menejeri", client: "Shavkat Saidov",
    title: "Restoran Xizmatchilari: ChiefBartender va SommelierExpert",
    e1: "RestaurantStaff", pk1: "staffBadgeId", a1: ["staffName", "foodSafetyCertDate", "wageHourly"],
    w2_e1: "ChiefBartender", w2_a1: ["mixologyCertLevel", "barStationCode"],
    w2_e2: "SommelierExpert", w2_a2: ["sommelierDiplomaNo", "cellarMasterPermit"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 118, s: 8, ind: "Ko'chmas Mulk Birjasi", role: "Rieltorlar Uyushmasi", client: "Kamola Rustamova",
    title: "Mulk Bozorida: PropertyVendor va PropertyAcquirer",
    e1: "RealEstateCustomer", pk1: "customerId", a1: ["fullName", "passportPin", "contactPhone"],
    w2_e1: "PropertyVendor", w2_a1: ["exclusiveListingCode", "saleAskingPrice"],
    w2_e2: "PropertyAcquirer", w2_a2: ["maxInvestmentBudget", "desiredPropertyType"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 119, s: 8, ind: "EdTech Ta'lim Platformasi", role: "Hamjamiyat Menejeri", client: "Jaloliddin Qodirov",
    title: "Platforma Foydalanuvchilari: ActiveLearner va TeachingMentor",
    e1: "PlatformUser", pk1: "userId", a1: ["userFullName", "emailAddress", "regTimestamp"],
    w2_e1: "ActiveLearner", w2_a1: ["enrolledCoursesCount", "courseCertificatesTotal"],
    w2_e2: "TeachingMentor", w2_a2: ["mentorHourlyFee", "menteeSessionCount"],
    w2_constraint: "{Optional, And}"
  },
  {
    id: 120, s: 8, ind: "Ulgurji B2B Savdo", role: "Tijorat Direktori", client: "Bahodir Olimov",
    title: "Savdo Hamkorlari: RawMaterialSupplier va WholesaleDistributor",
    e1: "TradingEnterprise", pk1: "enterpriseInn", a1: ["legalEntityName", "bankBik", "cityHq"],
    w2_e1: "RawMaterialSupplier", w2_a1: ["supplyCatalogRef", "isoQualityCert"],
    w2_e2: "WholesaleDistributor", w2_a2: ["salesTerritoryRegion", "creditLineLimit"],
    w2_constraint: "{Optional, And}"
  },

  // =========================================================================
  // SECTOR 9 (121–135): EER CATEGORIES / UNION TYPES (∪)
  // =========================================================================
  {
    id: 121, s: 9, ind: "Ko'chmas Mulk Reyestri", role: "Davlat Notariusi", client: "Ziyoda Karimova",
    title: "Mulk Egaligi: Owner Kategoriyasi (Person ∪ Bank ∪ Company)",
    e1: "Person", pk1: "pinfl", a1: ["fullName", "phone"],
    e2: "Bank", pk2: "bankCode", a2: ["bankName", "licenseNo"],
    e3: "Company", pk3: "tin", a3: ["companyName", "address"],
    category: "PropertyOwner", isUnion: true
  },
  {
    id: 122, s: 9, ind: "Davlat Avtotransport Nazorati", role: "DYXX Ro'yxatdan O'tkazish Boshlig'i", client: "Mayor Akmal Vohidov",
    title: "Avtotransport Egasi: VehicleOwner Kategoriyasi (Citizen ∪ LeasingFirm ∪ StateAgency)",
    e1: "PrivateCitizen", pk1: "citizenPinfl", a1: ["citizenName", "phone"],
    e2: "LeasingFirm", pk2: "leasingInn", a2: ["firmTitle", "licenseDate"],
    e3: "StateAgency", pk3: "agencyCode", a3: ["agencyTitle", "ministryCode"],
    category: "VehicleOwner", isUnion: true
  },
  {
    id: 123, s: 9, ind: "Davlat To'lovlar Kliringi", role: "G'aznachilik Boshlig'i", client: "Sardor Salimov",
    title: "To'lov Qabul Qiluvchi: PayeeEntity Kategoriyasi",
    e1: "FreelanceContractor", pk1: "freelancerId", a1: ["freelancerName", "serviceCategory"],
    e2: "UtilityProvider", pk2: "utilityInn", a2: ["providerName", "accountIban"],
    e3: "TaxAuthority", pk3: "taxOfficeNo", a3: ["treasuryCode", "regionName"],
    category: "PayeeEntity", isUnion: true
  },
  {
    id: 124, s: 9, ind: "Kredit Byurosi Reyestri", role: "Kredit Xatarlari Boshlig'i", client: "Nodira Qosimova",
    title: "Qarz Oluvchi: LoanBorrower Kategoriyasi",
    e1: "SoleProprietorship", pk1: "spInn", a1: ["ownerFullName", "regDate"],
    e2: "CommercialPartnership", pk2: "partnershipNo", a2: ["firmName", "shareCapital"],
    e3: "CorporationHolding", pk3: "holdingTin", a3: ["corporateName", "stockTicker"],
    category: "LoanBorrower", isUnion: true
  },
  {
    id: 125, s: 9, ind: "Notariat & Xalqaro Shartnomalar", role: "Bosh Notarius", client: "Sherzod Jo'rayev",
    title: "Yuridik Hujjat Imzolovchi: LegalSignatory Kategoriyasi",
    e1: "DomesticCitizen", pk1: "residentPinfl", a1: ["fullName", "registeredAddress"],
    e2: "ForeignDiplomat", pk2: "passportNumber", a2: ["diplomatName", "sendingState"],
    e3: "CorporateAttorney", pk3: "powerOfAttorneyNo", a3: ["lawyerName", "validUntil"],
    category: "LegalSignatory", isUnion: true
  },
  {
    id: 126, s: 9, ind: "Bojxona Tranziti", role: "Bojxona Posti Rahbari", client: "Polkovnik Baxtiyor Alimov",
    title: "Bojxona Yuki Yuboruvchi: CargoConsignor Kategoriyasi",
    e1: "ManufacturingPlant", pk1: "factoryTin", a1: ["plantTitle", "industrialZone"],
    e2: "TradingHouse", pk2: "tradingLicNo", a2: ["firmTitle", "chamberMemberId"],
    e3: "HumanitarianMission", pk3: "missionRegCode", a3: ["unCharityCode", "countryOrigin"],
    category: "CargoConsignor", isUnion: true
  },
  {
    id: 127, s: 9, ind: "Intellektual Mulk Agentligi", role: "Patent Eksperti", client: "Dr. Dilnoza Umarova",
    title: "Patent Huquq Egasi: PatentAssignee Kategoriyasi",
    e1: "ResearchUniversity", pk1: "universityCharterNo", a1: ["universityName", "rectorName"],
    e2: "IndependentInventor", pk2: "inventorPinfl", a2: ["inventorName", "patentCount"],
    e3: "TechCorporation", pk3: "corpTin", a3: ["corpLegalTitle", "rndBudgetUsd"],
    category: "PatentAssignee", isUnion: true
  },
  {
    id: 128, s: 9, ind: "Xalqaro Sug'urta Jamg'armasi", role: "Aktuariy Direktori", client: "Ulug'bek Fayziyev",
    title: "Sug'urta Polisi Benefitsiari: PolicyBeneficiary Kategoriyasi",
    e1: "FamilyKin", pk1: "relativePinfl", a1: ["kinFullName", "kinshipDegree"],
    e2: "MortgageBank", pk2: "bankLicNo", a2: ["bankName", "loanAgreementNo"],
    e3: "CharitableTrust", pk3: "charityRegNo", a3: ["trustTitle", "foundationScope"],
    category: "PolicyBeneficiary", isUnion: true
  },
  {
    id: 129, s: 9, ind: "Savdo Belgilari Palatasi", role: "Brendlar Reyestri Boshlig'i", client: "Gulzoda Karimova",
    title: "Savdo Belgisi Egasi: TrademarkOwner Kategoriyasi",
    e1: "PrivateEnterpriser", pk1: "tinNo", a1: ["brandOwnerName", "taxRegime"],
    e2: "NonProfitOrg", pk2: "npoCertNo", a2: ["orgTitle", "justiceMinistryPermit"],
    e3: "JointStockCompany", pk3: "jscInn", a3: ["jscTitle", "marketCapitalization"],
    category: "TrademarkOwner", isUnion: true
  },
  {
    id: 130, s: 9, ind: "Sog'liqni Saqlash Jamg'armasi", role: "Sug'urta Jamg'armasi Direktori", client: "Dr. Farhod Saidov",
    title: "Tibbiy Sug'urta Kafili: HealthCoverageSponsor Kategoriyasi",
    e1: "EmployerCompany", pk1: "employerTin", a1: ["companyName", "insuredStaffCount"],
    e2: "HealthMinistry", pk2: "ministryCode", a2: ["budgetProgramName", "decreeNumber"],
    e3: "PrivatePhilanthropist", pk3: "donorPinfl", a3: ["donorFullName", "endowmentSum"],
    category: "HealthCoverageSponsor", isUnion: true
  },
  {
    id: 131, s: 9, ind: "Markaziy Qimmatli Qog'ozlar Depozitariysi", role: "Depozitariy Boshqaruvchisi", client: "Mansur Shokirov",
    title: "Aksiya Egasi: ShareholderEntity Kategoriyasi",
    e1: "MutualFund", pk1: "fundRegNo", a1: ["fundName", "netAssetValueUsd"],
    e2: "SovereignWealthFund", pk2: "sovereignCode", a2: ["stateTreasuryTitle", "trusteeCouncil"],
    e3: "RetailInvestor", pk3: "investorPassportNo", a3: ["investorFullName", "brokerageAccNo"],
    category: "ShareholderEntity", isUnion: true
  },
  {
    id: 132, s: 9, ind: "Aeroport Uchish Yo'lagi Nazorati", role: "Aerodrom Texnik Boshlig'i", client: "Polkovnik Ravshan Normatov",
    title: "Uchish Yo'lagi Foydalanuvchisi: RunwayOperator Kategoriyasi",
    e1: "CommercialAirline", pk1: "airlineIata", a1: ["airlineName", "slotPermitNo"],
    e2: "AirForceSquadron", pk2: "militaryUnitCode", a2: ["squadronRank", "defenseZoneId"],
    e3: "PrivateAirCharter", pk3: "charterFlightCert", a3: ["operatorName", "hangarCode"],
    category: "RunwayOperator", isUnion: true
  },
  {
    id: 133, s: 9, ind: "Telekom Abonentlar Reyestri", role: "Billing Arxitektori", client: "Shohruh Mirzayev",
    title: "Aloqa Abanenti: TelecomSubscriber Kategoriyasi",
    e1: "IndividualSubscriber", pk1: "personalId", a1: ["subscriberName", "passportSeries"],
    e2: "CorporateSubscriber", pk2: "companyInn", a2: ["corpClientName", "allocatedSimCount"],
    e3: "IotDeviceGateway", pk3: "macAddressDevice", a3: ["deviceHardwareType", "firmwareVer"],
    category: "TelecomSubscriber", isUnion: true
  },
  {
    id: 134, s: 9, ind: "Innovatsion Rivojlanish Agentligi", role: "Grant Komissiyasi Raisi", client: "Prof. Temur Vohidov",
    title: "Ilmiy Grant Moliyalashtiruvchi: GrantFunder Kategoriyasi",
    e1: "StateScienceAgency", pk1: "govAgencyId", a1: ["budgetSourceTitle", "curatorOfficer"],
    e2: "TechConsortium", pk2: "consortiumInn", a2: ["industrialAllianceTitle", "leadPartner"],
    e3: "GlobalFoundation", pk3: "foundationRegNo", a3: ["foundationTitle", "genevaAccordNo"],
    category: "GrantFunder", isUnion: true
  },
  {
    id: 135, s: 9, ind: "Davlat Xaridlari Portali", role: "Tender Bosh Inspektor", client: "Aziz Sobirov",
    title: "Davlat Tenderi Ishtirokchisi: TenderBidder Kategoriyasi",
    e1: "EngineeringConsortium", pk1: "consortiumCode", a1: ["consortiumTitle", "guaranteeBankInn"],
    e2: "ConstructionCorp", pk2: "builderInn", a2: ["sroLicenseNumber", "machineryAssetCount"],
    e3: "MunicipalUtility", pk3: "utilityBranchNo", a3: ["districtName", "cityHokimiyatDecree"],
    category: "TenderBidder", isUnion: true
  },

  // =========================================================================
  // SECTOR 10 (136–150): INTEGRATED ENTERPRISE MULTI-ENTITY ARCHITECTURES
  // =========================================================================
  {
    id: 136, s: 10, ind: "Xalqaro Aeroport Boshqaruvi", role: "Bosh Aeroport Me'mori", client: "Behzod Vohidov",
    title: "Xalqaro Aeroport Kompleks Axborot Tizimi",
    e1: "Airport", pk1: "iataCode", a1: ["airportName", "cityLocation", "countryCode"],
    e2: "Terminal", pk2: "terminalId", a2: ["gateCount", "passengerCapacityAnnual"],
    e3: "FlightSchedule", pk3: "flightNo", a3: ["departureTime", "aircraftTailNo"],
    e4: "PassengerBooking", pk4: "bookingRef", a4: ["passengerName", "seatNumber", "ticketPrice"]
  },
  {
    id: 137, s: 10, ind: "Markaziy Bank Kliring Markazi", role: "Bosh Bank Arxitektori", client: "Javohir Qodirov",
    title: "Milliy Banklararo Hisob-Kitob va Kliring Arxitekturasi",
    e1: "CentralBank", pk1: "centralBankCode", a1: ["officialTitle", "reserveGoldTons"],
    e2: "CommercialBank", pk2: "bikNumber", a2: ["bankName", "charterCapitalBillion"],
    e3: "SettlementAccount", pk3: "correspondentAccNo", a3: ["currencyCode", "clearedBalance"],
    e4: "ClearingTransaction", pk4: "txRefCode", a4: ["transferSum", "txTimestamp", "swiftMessage"]
  },
  {
    id: 138, s: 10, ind: "Onkologiya Ilmiy-Amaliy Markazi", role: "Klinika Texnik Boshqaruvchisi", client: "Prof. Dilshod Umarov",
    title: "Respublika Onkologiya Markazi Davolash Tizimi",
    e1: "Hospital", pk1: "hospitalId", a1: ["hospitalName", "cityAddress", "bedCapacityTotal"],
    e2: "SpecializedWard", pk2: "wardCode", a2: ["wardName", "radiationShieldingGrade"],
    e3: "SpecializedDoctor", pk3: "licenseId", a3: ["doctorFullName", "oncologyBoardCert"],
    e4: "PatientCourse", pk4: "courseId", a4: ["diagnosisProtocol", "chemoCycleNumber", "startDate"]
  },
  {
    id: 139, s: 10, ind: "Dengiz Konteyner Hubi", role: "Logistika Porti Boshqaruvchisi", client: "Kapitan Anvar Mahmudov",
    title: "Trans-Okean Dengiz Porti va Konteyner Terminali",
    e1: "MegaWarehouse", pk1: "hubCode", a1: ["portName", "dockBerthCount", "customsZoneCode"],
    e2: "ContainerVessel", pk2: "imoNumber", a2: ["vesselName", "teuCapacity", "flagState"],
    e3: "CustomsDeclaration", pk3: "gtdNumber", a3: ["customsDutySum", "inspectionPassed"],
    e4: "FreightForwarder", pk4: "forwarderInn", a4: ["forwarderTitle", "fiataLicenseNo"]
  },
  {
    id: 140, s: 10, ind: "Ko'p Tarmoqli Universitet", role: "IT Prorektor", client: "Prof. Sherzod Salimov",
    title: "Xalqaro Universitet Kampusi Yagona Modeli",
    e1: "UniversityFaculty", pk1: "facultyCode", a1: ["facultyName", "buildingNumber"],
    e2: "AcademicDepartment", pk2: "deptId", a2: ["deptTitle", "researchFocusArea"],
    e3: "StaffMember", pk3: "staffNo", a3: ["staffFullName", "academicRankGrade", "salary"],
    e4: "StudentClass", pk4: "classCode", a4: ["studySemester", "roomHallCode", "maxEnrolled"]
  },
  {
    id: 141, s: 10, ind: "Milliy Elektr Tarmoqlari", role: "Bosh Energetik Dispetcher", client: "Akmal Qosimov",
    title: "Yagona Milliy Energotizim Dispetcherlik Arxitekturasi",
    e1: "PowerPlant", pk1: "plantCode", a1: ["plantName", "fuelType", "installedMegaWatts"],
    e2: "ElectricSubstation", pk2: "substationId", a2: ["substationName", "stepDownVoltageKv"],
    e3: "TransmissionLine", pk3: "lineCode", a3: ["distanceKilometers", "maxAmpereThroughput"],
    e4: "LoadZone", pk4: "zoneId", a4: ["zoneCityRegion", "peakDemandMegaWatts"]
  },
  {
    id: 142, s: 10, ind: "Davlat Temir Yo'llari", role: "Bosh Poezd Dispetcheri", client: "Mansur Aliyev",
    title: "Magistral Temir Yo'l va Ekspress Qatnovlar Tizimi",
    e1: "RailwayNetwork", pk1: "networkId", a1: ["networkName", "trackGaugeMm", "electrifiedPercent"],
    e2: "TrainSchedule", pk2: "scheduleTripNo", a2: ["departureTimestamp", "arrivalTimestamp"],
    e3: "LocomotiveEngine", pk3: "locoSerialNo", a3: ["locomotiveModel", "tractivePowerHp"],
    e4: "PassengerBooking", pk4: "ticketPnr", a4: ["passengerName", "coachCarriageNo", "seatIndex"]
  },
  {
    id: 143, s: 10, ind: "Yagona Davlat Xizmatlari", role: "Raqamli Vazirlik Arxitektori", client: "Sanjar Normatov",
    title: "Elektron Hukumat Davlat Xizmatlari Yagona Portali",
    e1: "GovPortalService", pk1: "serviceCode", a1: ["serviceTitle", "statutoryFeeSum", "processingDays"],
    e2: "CitizenRequest", pk2: "applicationId", a2: ["applicantPinfl", "submittedTimestamp", "status"],
    e3: "MinistryDepartment", pk3: "departmentInn", a3: ["ministryTitle", "competentAuthorityZone"],
    e4: "ProcessingOfficer", pk4: "officerStaffId", a4: ["officerFullName", "digitalSignatureCert"]
  },
  {
    id: 144, s: 10, ind: "Biotexnologiya Farmatsevtika Zavodi", role: "Bosh Texnologik Arxitektor", client: "Dr. Zulfiya Rustamova",
    title: "GMP Standartidagi Biotexnologik Zavod Axborot Klasteri",
    e1: "PharmaFactory", pk1: "facilityId", a1: ["facilityName", "gmpAccreditationNo", "cleanRoomGrade"],
    e2: "ChemicalLab", pk2: "labUnitCode", a2: ["labSpecialization", "hplcInstrumentCount"],
    e3: "DrugBatch", pk3: "batchNumber", a3: ["manufactureDate", "releaseInspectionPassed"],
    e4: "QualityAudit", pk4: "auditProtocolId", a4: ["auditorName", "purityAssayPercent", "auditDate"]
  },
  {
    id: 145, s: 10, ind: "Avtomobilsozlik Sanoat Klasteri", role: "Sanoat Ishlab Chiqarish Direktori", client: "Temur Mahmudov",
    title: "Avtomobil Yig'uv Zavodi va Rasmiy Dilerlik Majmuasi",
    e1: "CarManufacturer", pk1: "oemCode", a1: ["manufacturerName", "hqCountry", "isoQualityCert"],
    e2: "AssemblyLine", pk2: "conveyorId", a2: ["productionLineModel", "unitsPerDayCapacity"],
    e3: "DealershipShowroom", pk3: "dealerChainId", a3: ["showroomCity", "serviceBayQuota"],
    e4: "VehicleOrder", pk4: "contractNumber", a4: ["customerPinfl", "allocatedVin", "paymentStatus"]
  },
  {
    id: 146, s: 10, ind: "Milliy Kiberxavfsizlik Markazi", role: "SOC Bosh Muhandisi", client: "Farhod Karimov",
    title: "Davlat Kiberxavfsizlik Operatsion Markazi (SOC)",
    e1: "SOCNetwork", pk1: "perimeterId", a1: ["networkSegmentName", "firewallApplianceIp"],
    e2: "SecurityThreat", pk2: "cveCode", a2: ["cvssSeverityScore", "threatVectorCategory"],
    e3: "IncidentTicket", pk3: "incidentId", a3: ["detectedTimestamp", "containmentState"],
    e4: "MitigationAction", pk4: "playbookActionId", a4: ["analystBadgeId", "patchAppliedTimestamp"]
  },
  {
    id: 147, s: 10, ind: "Milliy Gipermarketlar Zanjiri", role: "Ta'minot Zanjiri Arxitektori", client: "Nargiza Jo'rayeva",
    title: "Markaziy Savdo Gipermarketlar Tarmog'i va Logistika Hubi",
    e1: "RetailChainStore", pk1: "storeUnitId", a1: ["storeBrandName", "cityAddress", "checkoutCount"],
    e2: "CentralDepot", pk2: "depotBarcode", a2: ["refrigeratedCapacityTons", "palletSlots"],
    e3: "SupplierVendor", pk3: "vendorTin", a3: ["supplierCompanyName", "slaPerformanceIndex"],
    e4: "ProductInventory", pk4: "inventorySku", a4: ["onHandQuantity", "reorderThresholdUnits"]
  },
  {
    id: 148, s: 10, ind: "Neft-Gaz Qayta Ishlash Majmuasi", role: "Bosh Texnologik Dispetcher", client: "G'ayrat Vohidov",
    title: "Neft-Gaz Kimyo Majmuasi va Magistral Quvurlar Tizimi",
    e1: "RefineryPlant", pk1: "refineryCode", a1: ["refineryName", "crudeCapacityBarrelsPerDay"],
    e2: "StorageTanker", pk2: "tankId", a2: ["tankGrossVolumeM3", "storedHydrocarbonGrade"],
    e3: "PipelineSegment", pk3: "pipelineSegmentCode", a3: ["pipelineDiameterMm", "operatingBarPressure"],
    e4: "CrudeOilShipment", pk4: "consignmentBillOfLading", a4: ["batchSpecificGravity", "dispatchTime"]
  },
  {
    id: 149, s: 10, ind: "Global Telekom Operator", role: "Tarmoq Bosh Arxitektori", client: "Jamshid Aliyev",
    title: "5G Telekommunikatsiya Yadro Tarmog'i va Billing Arxitekturasi",
    e1: "TelecomCore", pk1: "coreSwitchId", a1: ["coreRouterModel", "opticalCapacityTbps"],
    e2: "FiveGBaseStation", pk2: "gNodeBId", a2: ["carrierFrequencyGhz", "massiveMimoSectors"],
    e3: "BillingSubscription", pk3: "subscriberMsisdn", a3: ["activeTariffPlan", "dataBalanceGigabytes"],
    e4: "DataTrafficSession", pk4: "sessionCdrId", a4: ["connectionTimestamp", "uplinkMegabytesTransferred"]
  },
  {
    id: 150, s: 10, ind: "Kosmik Tadqiqotlar va Sun'iy Yo'ldoshlar", role: "Kosmik Missiyalar Bosh Arxitektori", client: "Akademik Anvar Qodirov",
    title: "Global Kosmik Parvozlar va Sun'iy Yo'ldosh Boshqaruvi",
    e1: "Spaceport", pk1: "launchComplexId", a1: ["cosmodromeName", "launchPadCount", "geoCoordinates"],
    e2: "SatelliteOrbiter", pk2: "noradCatalogId", a2: ["satelliteName", "orbitAltitudeKm", "payloadSensor"],
    e3: "GroundStation", pk3: "groundStationCode", a3: ["parabolicDishDiameterMeters", "uplinkFrequencyGhz"],
    e4: "MissionTelemetry", pk4: "telemetryFrameId", a4: ["solarPanelVolts", "onboardTempKelvin", "downlinkTime"]
  }
];

// Helper to construct Week 1 Question
function buildW1Question(item) {
  const s = item.s;
  let story = "";
  let instruction = "";
  let expectedDiagram = {};
  let starterDiagram = { entities: [], relationships: [] };

  if (s === 1) {
    // Single Strong Entity
    story = `Tashkilot o'z faoliyatini rivojlantirish va ma'lumotlarni tartibga solish maqsadida yagona markazlashgan axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalashni talab etmoqda. ${item.ind} sohasida faoliyat yurituvchi muassasa uchun tizimning mustahkam poydevori muhim o'rin tutadi.\n\nTizimda asosiy mustaqil kuchli entitiy sifatida **${item.e1}** ro'yxatga olinadi. Har bir **${item.e1}** o'zining takrorlanmas kodi \`${item.pk1}\` orqali bir qiymatli identifikatsiyalanadi va bu uning Birlamchi Kaliti {PK} hisoblanadi.\n\nBundan tashqari, uning quyidagi muhim biznes xususiyatlari to'liq qayd etiladi: ${item.a1.map(a => `\`${a}\``).join(', ')}. Ushbu atributlarning barchasi bevosita **${item.e1}** ga tegishli bo'lib, uning holatini tavsiflaydi.`;
    instruction = `Polotnoda '${item.e1}' kuchli entitiysini yarating, uning '${item.pk1}' birlamchi kalitini {PK} belgilang va ${item.a1.map(a => `'${a}'`).join(', ')} atributlarini qo'shing.`;
    expectedDiagram = {
      entities: [
        {
          name: item.e1,
          pk: item.pk1,
          attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))]
        }
      ],
      relationships: []
    };
  } else if (s === 2) {
    // 1..1 Relationships
    story = `Muassasa ichki reglamentiga ko'ra, boshqaruv va hisob-kitobni avtomatlashtirish uchun ikkita asosiy ob'yekt o'rtasida qat'iy o'zaro bog'liqlik o'rnatilishi shart. Ushbu jarayon ${item.ind} tizimining uzluksiz ishlashini kafolatlaydi.\n\nTizimda birinchi kuchli entitiy sifatida **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) qayd etiladi. Ikkinchi entitiy esa rasmiy **${item.e2}** (${item.pk2} {PK}, ${item.a2.map(a => `\`${a}\``).join(', ')}) hisoblanadi.\n\nOperatsion qoidalarga ko'ra, har bir **${item.e1}** aynan bitta **${item.e2}** bilan bog'lanishi mumkin va har bir **${item.e2}** qat'iy ravishda bitta **${item.e1}** ga tegishli bo'ladi. Munosabat turi: **${item.rel}**, kardinallik chegaralari: **${item.m1}** va **${item.m2}**.`;
    instruction = `'${item.e1}' va '${item.e2}' entitiylarini yarating, ularning {PK} kalitlarini belgilang va '${item.rel}' aloqasini (${item.m1} : ${item.m2}) bilan to'g'ri ulang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
        { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.e2, mult1: item.m1, mult2: item.m2, name: item.rel }
      ]
    };
  } else if (s === 3) {
    // 1..* Cardinality
    story = `Tashkilot o'z faoliyatini kengaytirmoqda va tabiiy boshqaruv ierarxiyasini axborot tizimida to'g'ri aks ettirishni maqsad qilgan. ${item.ind} tarmog'ida resurslar markazlashtirilgan holda taqsimlanadi.\n\nTizimda asosiy ota birlik sifatida **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) ro'yxatga olinadi. Unga bo'ysunuvchi yoki biriktirilgan birlik esa **${item.e2}** (${item.pk2} {PK}, ${item.a2.map(a => `\`${a}\``).join(', ')}) hisoblanadi.\n\nKompaniya reglamentiga muvofiq, har bir **${item.e1}** tarkibida kamida bitta yoki undan ko'p (${item.m2}) **${item.e2}** bo'lishi mumkin. Har bir **${item.e2}** esa qat'iy ravishda faqat bitta (${item.m1}) **${item.e1}** ga mansub bo'ladi. Munosabat: **${item.rel}**.`;
    instruction = `'${item.e1}' va '${item.e2}' entitiylarini polotnoga qo'ying, '${item.rel}' aloqasini o'rnatib, multiplisitiyani ${item.m1} va ${item.m2} qilib belgilang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
        { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.e2, mult1: item.m1, mult2: item.m2, name: item.rel }
      ]
    };
  } else if (s === 4) {
    // *..* Many-to-Many with Associative Entity
    story = `Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. ${item.ind} amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **${item.e1}** (${item.pk1} {PK}) va **${item.e2}** (${item.pk2} {PK}) qatnashadi. Bir ${item.e1} bir nechta ${item.e2} bilan, va aksincha, bir ${item.e2} bir nechta ${item.e1} bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **${item.assoc}** (${item.pkAssoc} {PK}, ${item.aAssoc.map(a => `\`${a}\``).join(', ')}) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.`;
    instruction = `'${item.e1}' va '${item.e2}' o'rtasida assotsiativ '${item.assoc}' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }] },
        { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }] },
        { name: item.assoc, pk: item.pkAssoc, isAssociative: true, attributes: [{ name: item.pkAssoc, isPK: true }, ...item.aAssoc.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.assoc, mult1: "1..1", mult2: "0..*", name: "InvolvedIn" },
        { entity1: item.e2, entity2: item.assoc, mult1: "1..1", mult2: "0..*", name: "SubjectOf" }
      ]
    };
  } else if (s === 5) {
    // Weak Entity
    story = `Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. ${item.ind} sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) qayd etiladi. Uning tarkibida esa zaif entitiy **${item.e2}** hisobga olinadi.\n\nZaif entitiy **${item.e2}** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: \`${item.pk2}\`) va ${item.a2.map(a => `\`${a}\``).join(', ')} atributlariga ega. Ota **${item.e1}** yo'qolsa, uning barcha **${item.e2}** lari ham o'chib ketadi. Bog'lanish: **${item.rel}** (${item.m1} : ${item.m2}).`;
    instruction = `'${item.e1}' kuchli entitiysini va unga bo'ysunuvchi zaif '${item.e2}' entitiysini chizing, '${item.pk2}' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
        { name: item.e2, pk: item.pk2, isWeak: true, attributes: [{ name: item.pk2, isPartialKey: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.e2, mult1: item.m1, mult2: item.m2, name: item.rel, isIdentifying: true }
      ]
    };
  } else if (s === 6) {
    // Recursive / Unary
    story = `Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. ${item.ind} sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **${item.rel}** doirasida bitta **${item.e1}** o'z hamkasbiga nisbatan \`${item.role1}\` rolini, ikkinchisi esa \`${item.role2}\` rolini bajaradi. Multiplisitiya: **${item.m1}** dan **${item.m2}** gacha.`;
    instruction = `'${item.e1}' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv '${item.rel}' aloqasini (${item.role1} / ${item.role2}) rollari bilan bog'lang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.e1, mult1: item.m1, mult2: item.m2, name: item.rel, role1: item.role1, role2: item.role2 }
      ]
    };
  } else if (s === 7) {
    // EER Disjoint {Mandatory, Or}
    story = `Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. ${item.ind} standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **${item.w2_e1}** (${item.w2_a1.map(a => `\`${a}\``).join(', ')}) va **${item.w2_e2}** (${item.w2_a2.map(a => `\`${a}\``).join(', ')}). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **${item.w2_constraint}**.`;
    instruction = `'${item.e1}' superklassidan '${item.w2_e1}' va '${item.w2_e2}' subklasslarini ${item.w2_constraint} cheklovi bilan ISA uchburchagi orqali ulang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] }
      ],
      subclasses: {
        superclass: item.e1,
        subs: [
          { name: item.w2_e1, attributes: item.w2_a1.map(a => ({ name: a, isPK: false })) },
          { name: item.w2_e2, attributes: item.w2_a2.map(a => ({ name: a, isPK: false })) }
        ],
        constraint: item.w2_constraint
      },
      relationships: []
    };
  } else if (s === 8) {
    // EER Overlapping {Optional, And}
    story = `Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. ${item.ind} amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **${item.e1}** (${item.pk1} {PK}, ${item.a1.map(a => `\`${a}\``).join(', ')}) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **${item.w2_e1}** (${item.w2_a1.map(a => `\`${a}\``).join(', ')}) va **${item.w2_e2}** (${item.w2_a2.map(a => `\`${a}\``).join(', ')}). Bitta ${item.e1} bir vaqtning o'zida ham ${item.w2_e1}, ham ${item.w2_e2} bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **${item.w2_constraint}**.`;
    instruction = `'${item.e1}' superklassiga '${item.w2_e1}' va '${item.w2_e2}' subklasslarini ${item.w2_constraint} cheklovi bilan bog'lang.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] }
      ],
      subclasses: {
        superclass: item.e1,
        subs: [
          { name: item.w2_e1, attributes: item.w2_a1.map(a => ({ name: a, isPK: false })) },
          { name: item.w2_e2, attributes: item.w2_a2.map(a => ({ name: a, isPK: false })) }
        ],
        constraint: item.w2_constraint
      },
      relationships: []
    };
  } else if (s === 9) {
    // EER Categories / Union
    story = `Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. ${item.ind} sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **${item.e1}** (${item.pk1} {PK}), **${item.e2}** (${item.pk2} {PK}) va **${item.e3}** (${item.pk3} {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **${item.category}** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.`;
    instruction = `'${item.e1}', '${item.e2}' va '${item.e3}' entitiylarini chizing va ularni '${item.category}' Union Type (∪) kategoriyasiga birlashtiring.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
        { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] },
        { name: item.e3, pk: item.pk3, attributes: [{ name: item.pk3, isPK: true }, ...item.a3.map(a => ({ name: a, isPK: false }))] }
      ],
      categories: [
        { name: item.category, superclasses: [item.e1, item.e2, item.e3], isUnion: true }
      ],
      relationships: []
    };
  } else if (s === 10) {
    // Integrated Enterprise Architecture
    story = `Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. ${item.ind} sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **${item.e1}** (${item.pk1} {PK}), **${item.e2}** (${item.pk2} {PK}), **${item.e3}** (${item.pk3} {PK}) hamda **${item.e4}** (${item.pk4} {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.`;
    instruction = `Korporativ tizimning barcha '${item.e1}', '${item.e2}', '${item.e3}' va '${item.e4}' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.`;
    expectedDiagram = {
      entities: [
        { name: item.e1, pk: item.pk1, attributes: [{ name: item.pk1, isPK: true }, ...item.a1.map(a => ({ name: a, isPK: false }))] },
        { name: item.e2, pk: item.pk2, attributes: [{ name: item.pk2, isPK: true }, ...item.a2.map(a => ({ name: a, isPK: false }))] },
        { name: item.e3, pk: item.pk3, attributes: [{ name: item.pk3, isPK: true }, ...item.a3.map(a => ({ name: a, isPK: false }))] },
        { name: item.e4, pk: item.pk4, attributes: [{ name: item.pk4, isPK: true }, ...item.a4.map(a => ({ name: a, isPK: false }))] }
      ],
      relationships: [
        { entity1: item.e1, entity2: item.e2, mult1: "1..1", mult2: "1..*", name: "Manages" },
        { entity1: item.e2, entity2: item.e3, mult1: "1..1", mult2: "1..*", name: "Operates" },
        { entity1: item.e3, entity2: item.e4, mult1: "1..1", mult2: "0..*", name: "Records" }
      ]
    };
  }

  return {
    id: item.id,
    sector: item.s,
    difficulty: `${item.s}-Qavat • ${item.ind}`,
    clientName: item.client,
    clientRole: item.role,
    clientAvatar: "mentor",
    title: item.title,
    story: story,
    instruction: instruction,
    starterDiagram: starterDiagram,
    expectedDiagram: expectedDiagram
  };
}

// Helper to construct Week 2 Question (Harmonious EER Extension of Week 1)
function buildW2Question(item, w1Q) {
  const s = item.s;
  let story = "";
  let instruction = "";
  let starterDiagram = JSON.parse(JSON.stringify(w1Q.expectedDiagram)); // Exact ER from Week 1!
  let expectedDiagram = JSON.parse(JSON.stringify(w1Q.expectedDiagram));

  if (s === 1 || s === 7) {
    // EER Subclasses {Mandatory, Or}
    story = `1-haftada yaratilgan **${item.e1}** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. ${item.ind} amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **${item.e1}** superklassidan ikkita maxsus subklass ajratiladi: **${item.w2_e1}** (${item.w2_a1.map(a => `\`${a}\``).join(', ')}) va **${item.w2_e2}** (${item.w2_a2.map(a => `\`${a}\``).join(', ')}).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit ${item.pk1} ni meros qilib oladi.`;
    instruction = `Polotnodagi mavjud '${item.e1}' superklassidan ISA uchburchagi orqali '${item.w2_e1}' va '${item.w2_e2}' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.`;
    expectedDiagram.subclasses = {
      superclass: item.e1,
      subs: [
        { name: item.w2_e1, attributes: item.w2_a1.map(a => ({ name: a, isPK: false })) },
        { name: item.w2_e2, attributes: item.w2_a2.map(a => ({ name: a, isPK: false })) }
      ],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 2) {
    // 1..1 Extended with Subclass or Audit Log
    const sub1 = `${item.e1}Premium`;
    const sub2 = `${item.e1}Standard`;
    story = `1-haftada o'rnatilgan **${item.e1}** va **${item.e2}** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **${item.e1}** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **${item.e1}** entitiysi superklassga aylantirilib, undan **${sub1}** va **${sub2}** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud ${item.e1} va ${item.e2} o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.`;
    instruction = `Mavjud '${item.e1}' superklassiga '${sub1}' va '${sub2}' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.`;
    expectedDiagram.subclasses = {
      superclass: item.e1,
      subs: [{ name: sub1, attributes: [] }, { name: sub2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 3) {
    // 1..* Child Specialisation
    const subChild1 = `Senior${item.e2}`;
    const subChild2 = `Junior${item.e2}`;
    story = `1-haftada tuzilgan **${item.e1}** va **${item.e2}** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **${item.e2}** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **${item.e2}** entitiysidan ikkita subklass: **${subChild1}** va **${subChild2}** ajratiladi. Har bir ${item.e2} qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **${item.e1}** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.`;
    instruction = `'${item.e2}' entitiysini superklass qilib, unga '${subChild1}' va '${subChild2}' subklasslarini {Mandatory, Or} cheklovi bilan ulang.`;
    expectedDiagram.subclasses = {
      superclass: item.e2,
      subs: [{ name: subChild1, attributes: [] }, { name: subChild2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 4) {
    // Associative Entity Specialisation
    const subAssoc1 = `Urgent${item.assoc}`;
    const subAssoc2 = `Standard${item.assoc}`;
    story = `1-haftada yaratilgan **${item.e1}** va **${item.e2}** o'rtasidagi assotsiativ **${item.assoc}** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **${item.assoc}** amali yo shoshilinch **${subAssoc1}**, yoki rejali **${subAssoc2}** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.`;
    instruction = `'${item.assoc}' assotsiativ entitiyidan '${subAssoc1}' va '${subAssoc2}' subklasslarini hosil qiling.`;
    expectedDiagram.subclasses = {
      superclass: item.assoc,
      subs: [{ name: subAssoc1, attributes: [] }, { name: subAssoc2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 5) {
    // Weak Entity Deepening
    const subWeak1 = `Primary${item.e2}`;
    const subWeak2 = `Secondary${item.e2}`;
    story = `1-haftada shakllantirilgan **${item.e1}** va uning zaif entitiysi **${item.e2}** modeli kengaytirilmoqda.\n\nZaif entitiy **${item.e2}** ning o'zi ikkita toifaga ajratiladi: **${subWeak1}** va **${subWeak2}** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.`;
    instruction = `Zaif '${item.e2}' entitiysidan '${subWeak1}' va '${subWeak2}' subklasslarini {Mandatory, Or} bilan ajrating.`;
    expectedDiagram.subclasses = {
      superclass: item.e2,
      subs: [{ name: subWeak1, attributes: [] }, { name: subWeak2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 6) {
    // Recursive Hierarchy + Roles Specialisation
    const subRole1 = `Executive${item.e1}`;
    const subRole2 = `Staff${item.e1}`;
    story = `1-haftada yaratilgan rekursiv **${item.e1}** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **${item.e1}** yo rahbar **${subRole1}**, yoki oddiy ijrochi **${subRole2}** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.`;
    instruction = `'${item.e1}' superklassidan '${subRole1}' va '${subRole2}' subklasslarini hosil qiling.`;
    expectedDiagram.subclasses = {
      superclass: item.e1,
      subs: [{ name: subRole1, attributes: [] }, { name: subRole2, attributes: [] }],
      constraint: "{Mandatory, Or}"
    };
  } else if (s === 8) {
    // Overlapping Deepening
    story = `1-haftada yaratilgan **${item.e1}** ning ustma-ust tushuvchi **${item.w2_e1}** va **${item.w2_e2}** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.`;
    instruction = `'${item.e1}' superklassining '${item.w2_e1}' va '${item.w2_e2}' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.`;
  } else if (s === 9) {
    // Union / Category Integration
    story = `1-haftadagi **${item.e1}**, **${item.e2}** va **${item.e3}** entitiylari asosida ularning barchasini birlashtiruvchi **${item.category}** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.`;
    instruction = `'${item.category}' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.`;
  } else if (s === 10) {
    // Enterprise Full Integration
    story = `1-haftada yaratilgan korporativ **${item.e1}**, **${item.e2}**, **${item.e3}** va **${item.e4}** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.`;
    instruction = `Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.`;
  }

  return {
    id: item.id,
    sector: item.s,
    difficulty: `${item.s}-Qavat • EER Kengaytirish`,
    clientName: item.client,
    clientRole: item.role,
    clientAvatar: "mentor",
    title: `${item.title} (EER Bosqichi)`,
    story: story,
    instruction: instruction,
    starterDiagram: starterDiagram, // Direct continuity from Week 1!
    expectedDiagram: expectedDiagram
  };
}

// Generate all 150 pairs
const allW1 = [];
const allW2 = [];

DOMAINS_DATA.forEach(item => {
  const w1Q = buildW1Question(item);
  const w2Q = buildW2Question(item, w1Q);
  allW1.push(w1Q);
  allW2.push(w2Q);
});

console.log(`Generated ${allW1.length} Week 1 cases and ${allW2.length} Week 2 cases.`);

// Write out Week 1 files
const w1_p1 = allW1.slice(0, 50);
const w1_p2 = allW1.slice(50, 100);
const w1_p3 = allW1.slice(100, 150);

const pW1_1 = path.join(__dirname, '../week1/data/eer_clients_1_50.js');
const pW1_2 = path.join(__dirname, '../week1/data/eer_clients_51_100.js');
const pW1_3 = path.join(__dirname, '../week1/data/eer_clients_101_150.js');

fs.writeFileSync(pW1_1, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_1_50 = ${JSON.stringify(w1_p1, null, 2)};\n`, 'utf8');
fs.writeFileSync(pW1_2, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_51_100 = ${JSON.stringify(w1_p2, null, 2)};\n`, 'utf8');
fs.writeFileSync(pW1_3, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.EER_CLIENTS_101_150 = ${JSON.stringify(w1_p3, null, 2)};\n`, 'utf8');

// Write out Week 2 files
const w2_p1 = allW2.slice(0, 50);
const w2_p2 = allW2.slice(50, 100);
const w2_p3 = allW2.slice(100, 150);

const pW2_1 = path.join(__dirname, '../week2/data/questions_1_50.js');
const pW2_2 = path.join(__dirname, '../week2/data/questions_51_100.js');
const pW2_3 = path.join(__dirname, '../week2/data/questions_101_150.js');

fs.writeFileSync(pW2_1, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_1_50 = ${JSON.stringify(w2_p1, null, 2)};\n`, 'utf8');
fs.writeFileSync(pW2_2, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_51_100 = ${JSON.stringify(w2_p2, null, 2)};\n`, 'utf8');
fs.writeFileSync(pW2_3, `var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);\n_scope.QUESTIONS_101_150 = ${JSON.stringify(w2_p3, null, 2)};\n`, 'utf8');

console.log("Successfully wrote all 6 data files for Week 1 and Week 2!");
