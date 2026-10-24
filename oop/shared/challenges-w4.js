// WIUT OOP (5COSC018C) — WEEK 4 MASTER CURRICULUM (150 PROGRESSIVE CHALLENGES)
// Architectural Progression: 50 Micro-Clusters × 3 Challenges Max (Rule of 3)
// Fully Aligned with WIUT Lecture 4 (Collections & Relationships), Seminar 4 (OrderItem, Order, Multi-Address), Coursework 2 & Viva Exams
// Author: Professor Ada • Senior Java Architect & Examiner

(typeof window !== 'undefined' ? window : global).OOP_CHALLENGES_W4 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "1. Talaba Baholari — int[] Massivida Yig'indi Hisoblash (Lecture 4 Slide 4-5)",
      "en": "1. Student Marks — Summing int[] Array Elements (Slide 4-5)",
      "ru": "1. Оценки студента — Подсчет суммы элементов массива int[]"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT 4-ma'ruzasining 4-5-slaydlari: Massiv ('int[] marks') bir xil turdagi elementlarni o'zgarmas hajmda saqlaydi. Indekslar 0 dan 'marks.length - 1' gacha boradi. Talabaning imtihon ballari massivini e'lon qilib, jami to'plagan balini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'GradeCalculator' sinfini e'lon qiling: 'public int calculateTotal(int[] marks)' metodini yozing.\n2. Metod ichida 'int sum = 0;' ochib, oddiy yoki for-each siklida barcha ballarni jamlang.\n3. 'sum' qiymatini qaytaring.\n4. 'Main' metodida 'int[] scores = {85, 92, 78};' massivini tuzing.\n5. 'GradeCalculator calc = new GradeCalculator();' ochib, konsolga: \"Jami ball: \" + calc.calculateTotal(scores) deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slides 4-5: An array is a fixed-size container of homogeneous elements indexed from 0.\n\n📋 Steps\n1. Create GradeCalculator with calculateTotal(int[] marks) returning the sum.\n2. In Main, instantiate GradeCalculator, declare marks {85, 92, 78}, and compute sum.\n3. Print: \"Jami ball: 255\".",
      "ru": "📖 Контекст\nСлайды 4-5 лекции 4: массив имеет фиксированный размер и хранит элементы одного типа с индексацией от 0.\n\n📋 Шаги\n1. Создайте GradeCalculator с методом calculateTotal(int[] marks).\n2. В main создайте массив {85, 92, 78} и вызовите calculateTotal.\n3. Выведите: \"Jami ball: 255\"."
    },
    "requirements": {
      "classes": [
        "GradeCalculator",
        "Main"
      ],
      "methods": [
        "calculateTotal"
      ],
      "constructors": [
        "GradeCalculator"
      ]
    },
    "starterCode": "class GradeCalculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class GradeCalculator {\n    public int calculateTotal(int[] marks) {\n        int sum = 0;\n        for (int m : marks) {\n            sum += m;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GradeCalculator calc = new GradeCalculator();\n        int[] scores = {85, 92, 78};\n        System.out.println(\"Jami ball: \" + calc.calculateTotal(scores));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Massiv elementlarini for-each siklida (int m : marks) aylanish eng xavfsiz va toza usuldir.",
      "en": "Using an enhanced for loop to iterate over array primitives avoids indexing off-by-one errors.",
      "ru": "Использование цикла for-each для обхода массива предотвращает ошибки выхода за границы индекса."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "2. Ob-havo Markazi — double[] Massivida O'rtacha Haroratni Topish",
      "en": "2. Weather Station — Computing Average from double[] Array",
      "ru": "2. Метеостанция — Расчет средней температуры из массива double[]"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nGidrometeorologiya markazida haftaning har kungi havo haroratlari 'double[] temps' massivida saqlanadi. 7 kunlik o'rtacha haroratni hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WeatherStation' sinfini e'lon qiling: 'public double calculateAverage(double[] temps)' metodini yozing.\n2. Agar massiv bo'sh bo'lsa ('temps.length == 0') 0.0 qaytaring.\n3. Siklda yig'indini hisoblab, 'sum / temps.length' qiymatini qaytaring.\n4. 'Main' metodida 'double[] weekTemps = {20.0, 22.0, 24.0, 18.0, 21.0};' massivini tuzing.\n5. Konsolga: \"O'rtacha harorat: 21.0 C\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMeteorological stations calculate weekly temperature averages across fixed sample arrays.\n\n📋 Steps\n1. Create WeatherStation with calculateAverage(double[] temps).\n2. Compute arithmetic mean: sum / temps.length.\n3. In Main, instantiate WeatherStation with sample temperatures and print: \"O'rtacha harorat: 21.0 C\".",
      "ru": "📖 Контекст\nМетеостанция рассчитывает среднюю температуру за период по массиву double[].\n\n📋 Шаги\n1. Создайте WeatherStation с методом calculateAverage(double[] temps).\n2. Верните среднее арифметическое sum / temps.length.\n3. В main выведите: \"O'rtacha harorat: 21.0 C\"."
    },
    "requirements": {
      "classes": [
        "WeatherStation",
        "Main"
      ],
      "methods": [
        "calculateAverage"
      ],
      "constructors": [
        "WeatherStation"
      ]
    },
    "starterCode": "class WeatherStation {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class WeatherStation {\n    public double calculateAverage(double[] temps) {\n        if (temps.length == 0) return 0.0;\n        double sum = 0.0;\n        for (double t : temps) {\n            sum += t;\n        }\n        return sum / temps.length;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WeatherStation ws = new WeatherStation();\n        double[] weekTemps = {20.0, 22.0, 24.0, 18.0, 21.0};\n        System.out.println(\"O'rtacha harorat: \" + ws.calculateAverage(weekTemps) + \" C\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "double[] massivida bo'linuvchi temps.length ga bo'linganda aniq kasr natija olinadi.",
      "en": "Dividing sum by array length yields precise floating point averages.",
      "ru": "Деление суммы на длину массива дает точный результат с плавающей точкой."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "3. Savdo Kvitansiyasi — double[] Narxlar Massivida Maksimum Qiymatni Topish",
      "en": "3. Retail Register — Finding Maximum Price in double[] Array",
      "ru": "3. Кассовый чек — Поиск максимальной цены в массиве double[]"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSupermarket xarid chekidagi mahsulot narxlari massividan eng qimmat tovar narxini topish talab etiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ReceiptScanner' sinfini e'lon qiling: 'public double findMaxPrice(double[] prices)' metodini yozing.\n2. 'double max = prices[0];' deb olib, siklda har bir narxni tekshirib, eng kattasini aniqlang.\n3. 'Main' metodida 'double[] basket = {15000.0, 45000.0, 12000.0, 98000.0, 32000.0};' massivini tuzing.\n4. 'ReceiptScanner scanner = new ReceiptScanner();' obyektini oching.\n5. Konsolga: \"Eng qimmat tovar narxi: 98000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nRetail checkout analytics scans prices array to determine the most expensive item purchased.\n\n📋 Steps\n1. Create ReceiptScanner with findMaxPrice(double[] prices).\n2. Scan array tracking maximum element.\n3. In Main, instantiate ReceiptScanner and print: \"Eng qimmat tovar narxi: 98000.0 so'm\".",
      "ru": "📖 Контекст\nКассовый сканер находит самую дорогую позицию в чеке.\n\n📋 Шаги\n1. Создайте ReceiptScanner с методом findMaxPrice(double[] prices).\n2. Определите максимальное значение в массиве.\n3. В main выведите: \"Eng qimmat tovar narxi: 98000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "ReceiptScanner",
        "Main"
      ],
      "methods": [
        "findMaxPrice"
      ],
      "constructors": [
        "ReceiptScanner"
      ]
    },
    "starterCode": "class ReceiptScanner {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ReceiptScanner {\n    public double findMaxPrice(double[] prices) {\n        if (prices.length == 0) return 0.0;\n        double max = prices[0];\n        for (double p : prices) {\n            if (p > max) {\n                max = p;\n            }\n        }\n        return max;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ReceiptScanner scanner = new ReceiptScanner();\n        double[] basket = {15000.0, 45000.0, 12000.0, 98000.0, 32000.0};\n        System.out.println(\"Eng qimmat tovar narxi: \" + scanner.findMaxPrice(basket) + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Massiv bo'yicha chiziqli qidiruv (Linear Search) orqali ekstremum qiymatlarni aniqlash massivlar bilan ishlashning poydevoridir.",
      "en": "Linear scanning across arrays is a fundamental algorithmic pattern for locating bounds and extrema.",
      "ru": "Линейный обход массива — базовый алгоритм поиска экстремумов в наборах данных."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "4. Xavfsiz Indeks — ArrayIndexOutOfBoundsException Xatosining Oldini Olish",
      "en": "4. Safe Indexing — Guarding Against ArrayIndexOutOfBoundsException",
      "ru": "4. Безопасный индекс — Предотвращение ArrayIndexOutOfBoundsException"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 5: Massiv chegarasidan tashqaridagi indeksga ('arr[3]' 3 elementli massivda) murojaat qilish 'ArrayIndexOutOfBoundsException' tashlaydi! Xavfsiz metod indeks '0 <= index < arr.length' ekanligini tekshirishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SafeArray' sinfini e'lon qiling: 'public int getElementAt(int[] arr, int index, int fallback)' metodini yozing.\n2. Agar 'index >= 0 && index < arr.length' bo'lsa 'arr[index]' ni, aks holda 'fallback' qiymatini qaytaring.\n3. 'Main' metodida 'int[] data = {10, 20, 30};' massivini tuzing.\n4. 'SafeArray sa = new SafeArray();' ochib, 'sa.getElementAt(data, 5, -1)' va 'sa.getElementAt(data, 1, -1)' natijalarini oling.\n5. Konsolga: \"Mavjud element: 20 | Noto'g'ri indeks: -1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 5: Accessing an index outside valid bounds triggers ArrayIndexOutOfBoundsException.\n\n📋 Steps\n1. Create SafeArray with getElementAt(int[] arr, int index, int fallback).\n2. Validate index 0 <= index < arr.length, returning fallback on illegal bounds.\n3. In Main, test legal and illegal index access and print summary.",
      "ru": "📖 Контекст\nСлайд 5 лекции 4: обращение по некорректному индексу вызывает ArrayIndexOutOfBoundsException.\n\n📋 Шаги\n1. Создайте SafeArray с методом getElementAt(int[] arr, int index, int fallback).\n2. Проверьте допустимость индекса перед обращением.\n3. В main выведите: \"Mavjud element: 20 | Noto'g'ri indeks: -1\"."
    },
    "requirements": {
      "classes": [
        "SafeArray",
        "Main"
      ],
      "methods": [
        "getElementAt"
      ],
      "constructors": [
        "SafeArray"
      ]
    },
    "starterCode": "class SafeArray {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SafeArray {\n    public int getElementAt(int[] arr, int index, int fallback) {\n        if (index >= 0 && index < arr.length) {\n            return arr[index];\n        }\n        return fallback;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SafeArray sa = new SafeArray();\n        int[] data = {10, 20, 30};\n        int val1 = sa.getElementAt(data, 1, -1);\n        int val2 = sa.getElementAt(data, 5, -1);\n        System.out.println(\"Mavjud element: \" + val1 + \" | Noto'g'ri indeks: \" + val2);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Chegarani tekshirish (bounds check) runtime xatoliklarining oldini oladi va tizim barqarorligini ta'minlaydi.",
      "en": "Index boundary validation safeguards critical logic against abrupt runtime exceptions.",
      "ru": "Проверка границ индекса защищает приложение от аварийного завершения в runtime."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "5. Mudofaa Nusxalash — Massivni .clone() Bilan Himoyalash",
      "en": "5. Defensive Cloning — Shielding Internal Arrays with .clone()",
      "ru": "5. Защитное клонирование — Защита внутренних массивов с .clone()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSinf ichidagi massiv maydoni to'g'ridan-to'g'ri tashqariga berilsa, tashqi kod massiv qiymatlarini o'zgartirib yuborishi mumkin. 'clone()' yordamida himoyalangan nusxa qaytaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ScoreTracker' sinfini e'lon qiling: 'private int[] scores;' maydoni.\n2. 'public ScoreTracker(int[] initialScores)' konstruktorida 'this.scores = initialScores.clone();' deb saqlang.\n3. 'public int[] getScores()' metodida 'return scores.clone();' qaytaring.\n4. 'Main' metodida 'int[] myScores = {100, 95}; ScoreTracker st = new ScoreTracker(myScores);' tuzing.\n5. 'int[] ext = st.getScores(); ext[0] = 0;' qiling. 'st.getScores()[0]' hali ham 100 ekanligini konsolga: \"Haqiqiy ball: 100\" deb chop eting.",
      "en": "📖 Real-World Scenario\nProtecting internal state requires defensive copying on both constructor assignment and getter return.\n\n📋 Steps\n1. Create ScoreTracker with private int[] scores, defensively cloned in constructor and getter.\n2. In Main, instantiate ScoreTracker, mutate returned array, and confirm original remains unaltered.\n3. Print: \"Haqiqiy ball: 100\".",
      "ru": "📖 Контекст\nЗащитное клонирование массивов в конструкторе и геттере для соблюдения инкапсуляции.\n\n📋 Шаги\n1. Создайте ScoreTracker с private int[] scores и клонированием через clone().\n2. В main убедитесь, что внешнее изменение не затрагивает внутренний массив.\n3. Выведите: \"Haqiqiy ball: 100\"."
    },
    "requirements": {
      "classes": [
        "ScoreTracker",
        "Main"
      ],
      "fields": [
        {
          "name": "scores",
          "type": "int[]"
        }
      ],
      "privateFields": [
        "scores"
      ],
      "methods": [
        "getScores"
      ],
      "constructors": [
        "ScoreTracker"
      ],
      "keywords": [
        "clone()"
      ]
    },
    "starterCode": "class ScoreTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ScoreTracker {\n    private int[] scores;\n\n    public ScoreTracker(int[] initialScores) {\n        this.scores = initialScores.clone();\n    }\n\n    public int[] getScores() {\n        return scores.clone();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        int[] myScores = {100, 95};\n        ScoreTracker st = new ScoreTracker(myScores);\n        int[] ext = st.getScores();\n        ext[0] = 0;\n        System.out.println(\"Haqiqiy ball: \" + st.getScores()[0]);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Defensive cloning orqali massiv havolasi emas, uning to'liq yangi nusxasi olinadi va inkapsulyatsiya buzilmaydi.",
      "en": "Cloning array instances isolates internal component state from caller mutations.",
      "ru": "Клонирование массива изолирует внутреннее состояние объекта от внешних изменений."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "6. Ombor Qoldig'i — Massivda Chegaralangan Qiymat Yangilash",
      "en": "6. Warehouse Stock — Bounded Array Cell Mutation",
      "ru": "6. Складской учет — Безопасное обновление ячейки массива"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmbor javonidagi 5 ta bo'limdagi tovarlar soni 'int[] stock' massivida saqlanadi. 'updateShelf(int shelfIndex, int quantity)' metodi indeks chegarada bo'lsa qiymatni o'zgartiradi va 'true', aks holda 'false' qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WarehouseShelves' sinfini e'lon qiling: 'private int[] stock;' maydoni va 'WarehouseShelves(int shelfCount)' konstruktori ('this.stock = new int[shelfCount];').\n2. 'public boolean updateShelf(int index, int qty)' metodida indeks tekshirilsin va to'g'ri bo'lsa 'stock[index] = qty; return true;' qilinsin.\n3. 'public int getStock(int index)' metodida 'stock[index]' qaytarilsin.\n4. 'Main' metodida 'WarehouseShelves ws = new WarehouseShelves(3);' yarating.\n5. 'ws.updateShelf(1, 50);' qilib, konsolga: \"1-javon qoldig'i: 50\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWarehouse shelf inventories validate index limits before updating discrete shelf counts.\n\n📋 Steps\n1. Create WarehouseShelves(shelfCount) allocating internal int[] stock.\n2. Implement updateShelf(index, qty) returning true only if index is valid.\n3. In Main, instantiate shelves, update shelf 1 to 50, and print: \"1-javon qoldig'i: 50\".",
      "ru": "📖 Контекст\nУчет остатков на полках склада с проверкой допустимости номера полки.\n\n📋 Шаги\n1. Создайте WarehouseShelves(shelfCount) с массивом stock.\n2. Реализуйте updateShelf(index, qty) с проверкой диапазона.\n3. В main выведите: \"1-javon qoldig'i: 50\"."
    },
    "requirements": {
      "classes": [
        "WarehouseShelves",
        "Main"
      ],
      "fields": [
        {
          "name": "stock",
          "type": "int[]"
        }
      ],
      "privateFields": [
        "stock"
      ],
      "methods": [
        "updateShelf",
        "getStock"
      ],
      "constructors": [
        "WarehouseShelves"
      ]
    },
    "starterCode": "class WarehouseShelves {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class WarehouseShelves {\n    private int[] stock;\n\n    public WarehouseShelves(int shelfCount) {\n        this.stock = new int[shelfCount];\n    }\n\n    public boolean updateShelf(int index, int qty) {\n        if (index >= 0 && index < stock.length) {\n            stock[index] = qty;\n            return true;\n        }\n        return false;\n    }\n\n    public int getStock(int index) {\n        return stock[index];\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarehouseShelves ws = new WarehouseShelves(3);\n        ws.updateShelf(1, 50);\n        System.out.println(\"1-javon qoldig'i: \" + ws.getStock(1));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Chegaralangan mutatsiya orqali massiv kataklaridagi ma'lumotlar xavfsiz boshqariladi.",
      "en": "Safe cell mutation encapsulates internal storage while defending against boundary corruption.",
      "ru": "Безопасное изменение ячеек защищает массив от повреждения некорректными индексами."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "7. Kutubxona — Book[] Obyektlar Massivini Saqlash va Chop Etish",
      "en": "7. Library Registry — Array of Custom Objects (Book[])",
      "ru": "7. Библиотека — Массив пользовательских объектов Book[]"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMassivlar nafaqat oddiy sonlarni, balki 'Book[]' kabi sinf obyektlarini ham saqlay oladi! Har bir katak bitta 'Book' obyektiga havola qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Book' sinfini e'lon qiling: 'private String title;' maydoni, konstruktor va getteri.\n2. 'Library' sinfini e'lon qiling: 'public void printBooks(Book[] books)' metodida har bir kitob nomini konsolga chiqaring.\n3. 'Main' metodida 'Book[] shelf = { new Book(\"Java Asoslari\"), new Book(\"Dizayn Patternlar\") };' massivini tuzing.\n4. 'Library lib = new Library(); lib.printBooks(shelf);' chaqiring.",
      "en": "📖 Real-World Scenario\nLibraries store shelves of distinct Book instances inside object array containers.\n\n📋 Steps\n1. Create Book(title) with getter.\n2. Library with printBooks(Book[] books).\n3. In Main, instantiate an array of two books and invoke printBooks.",
      "ru": "📖 Контекст\nМассив объектов Book[] хранит ссылки на отдельные экземпляры книг.\n\n📋 Шаги\n1. Создайте Book(title) с геттером.\n2. Создайте Library с методом printBooks(Book[] books).\n3. В main создайте массив из двух книг и вызовите метод."
    },
    "requirements": {
      "classes": [
        "Book",
        "Library",
        "Main"
      ],
      "methods": [
        "getTitle",
        "printBooks"
      ],
      "constructors": [
        "Book"
      ]
    },
    "starterCode": "class Book {\n    \n}\n\nclass Library {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Book {\n    private String title;\n\n    public Book(String title) {\n        this.title = title;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n}\n\nclass Library {\n    public void printBooks(Book[] books) {\n        for (Book b : books) {\n            System.out.println(\"Kitob: \" + b.getTitle());\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Book[] shelf = { new Book(\"Java Asoslari\"), new Book(\"Dizayn Patternlar\") };\n        Library lib = new Library();\n        lib.printBooks(shelf);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Obyektlar massivida har bir element null bo'lmasligiga e'tibor berish lozim.",
      "en": "Object arrays store references; each non-null cell can be dereferenced for domain methods.",
      "ru": "Массив объектов хранит ссылки; каждый ненулевой элемент предоставляет доступ к методам."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "8. WIUT Talabalar Ro'yxati — Student[] Massivida Bahosi Bo'yicha Sanash",
      "en": "8. Academic Roster — Counting Students in Student[] Array",
      "ru": "8. Список студентов — Подсчет в массиве Student[] по баллам"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT dekanatida 'Student(name, mark)' obyektlari massivida o'tish balidan (40 dan) yuqori ball to'plagan talabalar soni hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Student' sinfini e'lon qiling: 'private String name;' va 'private int mark;' maydonlari, konstruktor va getterlari.\n2. 'StudentRegister' sinfini e'lon qiling: 'public int countPassed(Student[] students)' metodida 'mark >= 40' bo'lgan talabalarni sanang.\n3. 'Main' metodida 3 ta talabadan iborat 'Student[] list' massivini tuzing (ballari: 75, 35, 80).\n4. Konsolga: \"O'tgan talabalar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAcademic offices iterate student arrays to compute pass rates based on minimum mark thresholds.\n\n📋 Steps\n1. Create Student(name, mark) with getters.\n2. StudentRegister with countPassed(Student[] students) checking mark >= 40.\n3. In Main, instantiate array with marks 75, 35, 80 and print count: \"O'tgan talabalar soni: 2\".",
      "ru": "📖 Контекст\nДеканат подсчитывает количество сдавших студентов в массиве Student[].\n\n📋 Шаги\n1. Создайте Student(name, mark).\n2. StudentRegister с методом countPassed(Student[] students) (mark >= 40).\n3. В main выведите: \"O'tgan talabalar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "Student",
        "StudentRegister",
        "Main"
      ],
      "methods": [
        "getName",
        "getMark",
        "countPassed"
      ],
      "constructors": [
        "Student"
      ]
    },
    "starterCode": "class Student {\n    \n}\n\nclass StudentRegister {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Student {\n    private String name;\n    private int mark;\n\n    public Student(String name, int mark) {\n        this.name = name;\n        this.mark = mark;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getMark() {\n        return mark;\n    }\n}\n\nclass StudentRegister {\n    public int countPassed(Student[] students) {\n        int count = 0;\n        for (Student s : students) {\n            if (s.getMark() >= 40) {\n                count++;\n            }\n        }\n        return count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student[] list = {\n            new Student(\"Jasur\", 75),\n            new Student(\"Malika\", 35),\n            new Student(\"Bobur\", 80)\n        };\n        StudentRegister reg = new StudentRegister();\n        System.out.println(\"O'tgan talabalar soni: \" + reg.countPassed(list));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Obyektlar massivini aylanib, getMark() getteri orqali biznes mantiqni tekshirish modulli tizimlarning asosi hisoblanadi.",
      "en": "Traversing object collections and invoking domain accessors models realistic business reporting.",
      "ru": "Обход массива объектов и обращение к геттерам моделирует реальные бизнес-отчеты."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "9. Avtoturargoh — Car[] Massivida Bo'sh Joylarni (null) Sanash",
      "en": "9. Parking Lot — Counting Null Slots in Car[] Array",
      "ru": "9. Парковка — Подсчет свободных мест (null) в массиве Car[]"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvtoturargohda 'Car[] slots' massivida joy bo'sh bo'lsa 'null' turadi, mashina kelsa obyekt joylashtiriladi. Bo'sh joylar sonini aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Car(String plate)' sinfini e'lon qiling ('getPlate()' getteri bilan).\n2. 'ParkingLot' sinfini e'lon qiling: 'public int countAvailableSlots(Car[] slots)' metodida massivdagi 'null' elementlarni sanang.\n3. 'Main' metodida 'Car[] spaces = { new Car(\"01 A777AA\"), null, new Car(\"01 B888BB\"), null };' massivini oching.\n4. Konsolga: \"Bo'sh avtoturargoh joylari: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nParking sensors register vacant parking spaces as null slots in fixed car slot arrays.\n\n📋 Steps\n1. Create Car(plate).\n2. ParkingLot with countAvailableSlots(Car[] slots) counting null entries.\n3. In Main, instantiate array with 2 cars and 2 null slots, printing available count.",
      "ru": "📖 Контекст\nПарковка моделирует свободные места как элементы со значением null.\n\n📋 Шаги\n1. Создайте Car(plate).\n2. ParkingLot с методом countAvailableSlots(Car[] slots) для подсчета null.\n3. В main выведите: \"Bo'sh avtoturargoh joylari: 2\"."
    },
    "requirements": {
      "classes": [
        "Car",
        "ParkingLot",
        "Main"
      ],
      "methods": [
        "getPlate",
        "countAvailableSlots"
      ],
      "constructors": [
        "Car"
      ]
    },
    "starterCode": "class Car {\n    \n}\n\nclass ParkingLot {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Car {\n    private String plate;\n\n    public Car(String plate) {\n        this.plate = plate;\n    }\n\n    public String getPlate() {\n        return plate;\n    }\n}\n\nclass ParkingLot {\n    public int countAvailableSlots(Car[] slots) {\n        int emptyCount = 0;\n        for (Car c : slots) {\n            if (c == null) {\n                emptyCount++;\n            }\n        }\n        return emptyCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Car[] spaces = { new Car(\"01 A777AA\"), null, new Car(\"01 B888BB\"), null };\n        ParkingLot lot = new ParkingLot();\n        System.out.println(\"Bo'sh avtoturargoh joylari: \" + lot.countAvailableSlots(spaces));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Obyektlar massivida bo'sh joylar null qiymati bilan ifodalanadi, null tekshiruvi NullPointerException xatosidan saqlaydi.",
      "en": "Guards against NullPointerException by validating nullness before invoking methods.",
      "ru": "Проверка на null предотвращает возникновение ошибки NullPointerException."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "10. Savatcha — ArrayList Dinamik Kengayishi (Lecture 4 Slide 10-12)",
      "en": "10. Shopping Cart — Dynamic Expansion with ArrayList (Slide 10-12)",
      "ru": "10. Корзина покупок — Динамический рост с ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 5 va 11: Massiv o'lchami o'zgarmas bo'lgani uchun, onlayn do'konda savatchaga tovarlar cheksiz qo'shilishi uchun 'ArrayList<String>' ishlatiladi! 'add()' chaqirilishi bilan ro'yxat avtomatik kattalashadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DynamicCart' sinfini e'lon qiling: 'private java.util.List<String> items = new java.util.ArrayList<>();' maydoni.\n2. 'public void addItem(String item)' metodida 'items.add(item);' chaqiring.\n3. 'public int getItemCount()' metodida 'items.size()' qaytaring.\n4. 'Main' metodida 'DynamicCart cart = new DynamicCart();' ochib, 3 ta tovar (\"Noutbuk\", \"Sichqoncha\", \"Sumka\") qo'shing.\n5. Konsolga: \"Savatchadagi tovarlar soni: 3\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 10-12: Unlike fixed arrays, ArrayList dynamically resizes whenever add() is called.\n\n📋 Steps\n1. Create DynamicCart with private List<String> items = new ArrayList<>().\n2. Provide addItem(String) and getItemCount().\n3. In Main, add 3 items and print: \"Savatchadagi tovarlar soni: 3\".",
      "ru": "📖 Контекст\nСлайды 10-12 лекции 4: ArrayList автоматически увеличивает размер при вызове add().\n\n📋 Шаги\n1. Создайте DynamicCart с полем List<String> items = new ArrayList<>().\n2. Добавьте методы addItem и getItemCount.\n3. В main добавьте 3 товара и выведите: \"Savatchadagi tovarlar soni: 3\"."
    },
    "requirements": {
      "classes": [
        "DynamicCart",
        "Main"
      ],
      "methods": [
        "addItem",
        "getItemCount"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "add",
        "size"
      ]
    },
    "starterCode": "class DynamicCart {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass DynamicCart {\n    private List<String> items = new ArrayList<>();\n\n    public void addItem(String item) {\n        items.add(item);\n    }\n\n    public int getItemCount() {\n        return items.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DynamicCart cart = new DynamicCart();\n        cart.addItem(\"Noutbuk\");\n        cart.addItem(\"Sichqoncha\");\n        cart.addItem(\"Sumka\");\n        System.out.println(\"Savatchadagi tovarlar soni: \" + cart.getItemCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "List interfeysi orqali e'lon qilib (List<String> items = new ArrayList<>()), kelajakda boshqa List turlariga o'tish osonlashadi.",
      "en": "Declaring using the List interface promotes loose coupling and clean API architecture.",
      "ru": "Объявление через интерфейс List<String> items = new ArrayList<>() обеспечивает гибкость кода."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "11. Parvoz Yo'lovchilari — ArrayList Bilan Dinamik Yo'lovchi Qo'shish",
      "en": "11. Flight Manifest — Dynamic Passenger Roster via ArrayList",
      "ru": "11. Пассажирский манифест — Динамический список пассажиров в ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAviakompaniyada reysga ro'yxatdan o'tayotgan yo'lovchilar soni oldindan noma'lum bo'ladi. 'ArrayList<String>' yordamida yo'lovchilar qo'shiladi va ro'yxat o'lchami ko'riladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightManifest' sinfini e'lon qiling: 'private java.util.List<String> passengers = new java.util.ArrayList<>();'.\n2. 'public void addPassenger(String name)' metodida qo'shing.\n3. 'public int getPassengerCount()' metodida 'passengers.size()' qaytaring.\n4. 'Main' metodida 2 ta yo'lovchini (\"Alisher\", \"Madina\") qo'shing.\n5. Konsolga: \"Ro'yxatdan o'tgan yo'lovchilar: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFlight check-in desks register passengers dynamically into an ArrayList container.\n\n📋 Steps\n1. Create FlightManifest with private List<String> passengers.\n2. Provide addPassenger(name) and getPassengerCount().\n3. In Main, add 2 passengers and print count.",
      "ru": "📖 Контекст\nРегистрация на рейс динамически добавляет пассажиров в ArrayList.\n\n📋 Шаги\n1. Создайте FlightManifest со списком passengers.\n2. Реализуйте addPassenger и getPassengerCount.\n3. В main выведите: \"Ro'yxatdan o'tgan yo'lovchilar: 2\"."
    },
    "requirements": {
      "classes": [
        "FlightManifest",
        "Main"
      ],
      "methods": [
        "addPassenger",
        "getPassengerCount"
      ],
      "keywords": [
        "List",
        "ArrayList"
      ]
    },
    "starterCode": "class FlightManifest {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass FlightManifest {\n    private List<String> passengers = new ArrayList<>();\n\n    public void addPassenger(String name) {\n        passengers.add(name);\n    }\n\n    public int getPassengerCount() {\n        return passengers.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightManifest manifest = new FlightManifest();\n        manifest.addPassenger(\"Alisher\");\n        manifest.addPassenger(\"Madina\");\n        System.out.println(\"Ro'yxatdan o'tgan yo'lovchilar: \" + manifest.getPassengerCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Dinamik ro'yxat yordamida massivdagi kabi ortiqcha xotira ajratish yoki to'lib qolish xavfi bo'lmaydi.",
      "en": "Dynamic array lists avoid memory overallocation while eliminating capacity exhaustion bugs.",
      "ru": "Динамический список устраняет риск переполнения и не требует ручного управления емкостью."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "12. Bildirishnomalar — ArrayList Bilan Xabarlar Tarixi",
      "en": "12. Notification Center — Dynamic Message Inbox via ArrayList",
      "ru": "12. Центр уведомлений — Динамический список сообщений в ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMobil ilovada foydalanuvchiga kelgan barcha yangi xabarlar 'NotificationCenter' ichidagi dinamik ro'yxatda to'planadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'NotificationCenter' sinfini e'lon qiling: 'private java.util.List<String> alerts = new java.util.ArrayList<>();'.\n2. 'public void postAlert(String alert)' va 'public int getTotalAlerts()' metodlarini yozing.\n3. 'Main' metodida markazni ochib, 2 ta bildirishnoma qo'shing.\n4. Konsolga: \"Yangi bildirishnomalar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMobile OS notification trays dynamically append incoming alerts.\n\n📋 Steps\n1. Create NotificationCenter with List<String> alerts.\n2. Add postAlert(alert) and getTotalAlerts().\n3. In Main, post two alerts and print total.",
      "ru": "📖 Контекст\nЦентр уведомлений смартфона динамически накапливает входящие оповещения.\n\n📋 Шаги\n1. Создайте NotificationCenter со списком alerts.\n2. Реализуйте postAlert и getTotalAlerts.\n3. В main выведите: \"Yangi bildirishnomalar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "NotificationCenter",
        "Main"
      ],
      "methods": [
        "postAlert",
        "getTotalAlerts"
      ],
      "keywords": [
        "List",
        "ArrayList"
      ]
    },
    "starterCode": "class NotificationCenter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass NotificationCenter {\n    private List<String> alerts = new ArrayList<>();\n\n    public void postAlert(String alert) {\n        alerts.add(alert);\n    }\n\n    public int getTotalAlerts() {\n        return alerts.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        NotificationCenter nc = new NotificationCenter();\n        nc.postAlert(\"Yangi xat keldi\");\n        nc.postAlert(\"To'lov muvaffaqiyatli o'tdi\");\n        System.out.println(\"Yangi bildirishnomalar soni: \" + nc.getTotalAlerts());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "ArrayList ichki elementlarini saqlash hajmini avtomatik 1.5 baravarga kattalashtirib boradi.",
      "en": "ArrayList automatically increases internal backing array capacity dynamically as needed.",
      "ru": "ArrayList автоматически увеличивает внутренний массив при заполнении."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "13. Musiqa Pleeri — List.get(i) Orqali Qo'shiqni Indeks Bo'yicha Tanlash",
      "en": "13. Music Player — Accessing Tracks via List.get(i)",
      "ru": "13. Музыкальный плеер — Доступ к трекам через List.get(i)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 9: 'List' tartiblangan ketma-ketlik bo'lib, har bir element '0' dan boshlanuvchi indeksga ega. Elementni olish uchun massivdagi kabi 'arr[i]' emas, balki 'list.get(i)' metodi chaqiriladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Playlist' sinfini e'lon qiling: 'private java.util.List<String> songs = new java.util.ArrayList<>();'.\n2. 'public void addSong(String song)' va 'public String getSongAt(int index)' metodlarini yozing ('songs.get(index)').\n3. 'Main' metodida pleylistga \"Yomg'irlar\" va \"O'zbegim\" qo'shiqlarini qo'shing.\n4. 'pl.getSongAt(0)' orqali birinchi qo'shiqni oling.\n5. Konsolga: \"Hozir yangramoqda: Yomg'irlar\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 9: List elements are indexed from 0 and accessed via get(index).\n\n📋 Steps\n1. Create Playlist with private List<String> songs.\n2. Provide addSong(song) and getSongAt(index).\n3. In Main, populate playlist and access track at index 0.\n4. Print: \"Hozir yangramoqda: Yomg'irlar\".",
      "ru": "📖 Контекст\nСлайд 9 лекции 4: элементы List индексируются с 0 и считываются методом get(index).\n\n📋 Шаги\n1. Создайте Playlist с List<String> songs.\n2. Реализуйте addSong и getSongAt(index).\n3. В main выведите песню по индексу 0."
    },
    "requirements": {
      "classes": [
        "Playlist",
        "Main"
      ],
      "methods": [
        "addSong",
        "getSongAt"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "get"
      ]
    },
    "starterCode": "class Playlist {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Playlist {\n    private List<String> songs = new ArrayList<>();\n\n    public void addSong(String song) {\n        songs.add(song);\n    }\n\n    public String getSongAt(int index) {\n        return songs.get(index);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Playlist pl = new Playlist();\n        pl.addSong(\"Yomg'irlar\");\n        pl.addSong(\"O'zbegim\");\n        System.out.println(\"Hozir yangramoqda: \" + pl.getSongAt(0));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "List.get(index) o'zgarmas O(1) vaqt murakkabligida indeksdagi elementni qaytaradi.",
      "en": "ArrayList.get(index) provides constant-time O(1) random access performance.",
      "ru": "ArrayList.get(index) обеспечивает доступ к элементу по индексу за константное время O(1)."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "14. Vazifalar Boshqaruvi — TaskTracker va Oxirgi Vazifani Olish",
      "en": "14. Task Tracker — Accessing Tail Element in List",
      "ru": "14. Менеджер задач — Получение последней задачи из списка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nRo'yxatdagi eng oxirgi elementning indeksi har doim 'list.size() - 1' ga teng bo'ladi. 'getLatestTask()' metodi oxirgi qo'shilgan vazifani qaytarsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TaskTracker' sinfini e'lon qiling: 'private java.util.List<String> tasks = new java.util.ArrayList<>();'.\n2. 'public void addTask(String task)' va 'public String getLatestTask()' metodlarini yozing (agar bo'sh bo'lsa \"Bo'sh\", aks holda 'tasks.get(tasks.size() - 1)').\n3. 'Main' metodida \"Dars tayyorlash\" va \"Imtihonga tayyorgarlik\" vazifalarini qo'shing.\n4. Konsolga: \"So'nggi vazifa: Imtihonga tayyorgarlik\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTask tracking engines retrieve the most recently queued task using tasks.get(tasks.size() - 1).\n\n📋 Steps\n1. Create TaskTracker with addTask(String) and getLatestTask().\n2. In Main, append tasks and retrieve latest.\n3. Print: \"So'nggi vazifa: Imtihonga tayyorgarlik\".",
      "ru": "📖 Контекст\nПолучение последнего добавленного элемента через tasks.get(tasks.size() - 1).\n\n📋 Шаги\n1. Создайте TaskTracker с addTask и getLatestTask.\n2. В main добавьте задачи и запросите последнюю.\n3. Выведите: \"So'nggi vazifa: Imtihonga tayyorgarlik\"."
    },
    "requirements": {
      "classes": [
        "TaskTracker",
        "Main"
      ],
      "methods": [
        "addTask",
        "getLatestTask"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "size()",
        "get"
      ]
    },
    "starterCode": "class TaskTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass TaskTracker {\n    private List<String> tasks = new ArrayList<>();\n\n    public void addTask(String task) {\n        tasks.add(task);\n    }\n\n    public String getLatestTask() {\n        if (tasks.isEmpty()) return \"Bo'sh\";\n        return tasks.get(tasks.size() - 1);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaskTracker tracker = new TaskTracker();\n        tracker.addTask(\"Dars tayyorlash\");\n        tracker.addTask(\"Imtihonga tayyorgarlik\");\n        System.out.println(\"So'nggi vazifa: \" + tracker.getLatestTask());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "size() - 1 orqali dinamik ro'yxatning so'nggi elementiga xavfsiz murojaat qilinadi.",
      "en": "Index calculation tasks.size() - 1 cleanly locates the tail of any non-empty list.",
      "ru": "Выражение tasks.size() - 1 указывает на последний элемент непустого списка."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "15. Shaharlararo Sayohat — CityTour va Birinchi Hamda Oxirgi Manzil",
      "en": "15. Travel Itinerary — First and Last Stop Extraction from List",
      "ru": "15. Маршрут путешествия — Извлечение первой и последней остановки"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSayyohlik marshruti 'List<String>' ro'yxatida shaharlar ketma-ketligini saqlaydi. Sayohat boshlanish ('get(0)') va tugash ('get(size() - 1)') nuqtasini aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CityTour' sinfini e'lon qiling: 'private java.util.List<String> cities = new java.util.ArrayList<>();'.\n2. 'public void addCity(String c)' metodini yozing.\n3. 'public String getRouteSummary()' metodida 'cities.get(0) + \" -> \" + cities.get(cities.size() - 1)' qaytaring.\n4. 'Main' metodida \"Toshkent\", \"Samarqand\", \"Buxoro\", \"Xiva\" shaharlarini qo'shing.\n5. Konsolga: \"Marshrut: Toshkent -> Xiva\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTravel tour engines format itineraries by extracting start and end destinations from the route list.\n\n📋 Steps\n1. Create CityTour with addCity(String) and getRouteSummary().\n2. In Main, add Tashkent, Samarkand, Bukhara, Khiva.\n3. Print: \"Marshrut: Toshkent -> Xiva\".",
      "ru": "📖 Контекст\nМаршрут тура формирует сводку от начальной до конечной точки.\n\n📋 Шаги\n1. Создайте CityTour с addCity и getRouteSummary.\n2. В main добавьте города и вызовите getRouteSummary.\n3. Выведите: \"Marshrut: Toshkent -> Xiva\"."
    },
    "requirements": {
      "classes": [
        "CityTour",
        "Main"
      ],
      "methods": [
        "addCity",
        "getRouteSummary"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "get"
      ]
    },
    "starterCode": "class CityTour {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass CityTour {\n    private List<String> cities = new ArrayList<>();\n\n    public void addCity(String city) {\n        cities.add(city);\n    }\n\n    public String getRouteSummary() {\n        if (cities.isEmpty()) return \"Marshrut yo'q\";\n        return cities.get(0) + \" -> \" + cities.get(cities.size() - 1);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CityTour tour = new CityTour();\n        tour.addCity(\"Toshkent\");\n        tour.addCity(\"Samarqand\");\n        tour.addCity(\"Buxoro\");\n        tour.addCity(\"Xiva\");\n        System.out.println(\"Marshrut: \" + tour.getRouteSummary());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "List elementlarining ketma-ketlik tartibini (insertion order) qat'iy saqlashi marshrutlar tuzish uchun eng mos tanlovdir.",
      "en": "Lists preserve strict insertion ordering, making them ideal for sequences and itineraries.",
      "ru": "List строго сохраняет порядок добавления элементов, что идеально для маршрутов."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "16. Savatcha Dublikatlari — Listda Bir Xil Tovar va remove(item) (Slide 12)",
      "en": "16. Cart Duplicates — Duplicate Items and remove(item) (Slide 12)",
      "ru": "16. Дубликаты в корзине — Повторные товары и метод remove(item)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 12: 'List' da bir xil tovar bir necha marta takrorlanishi mumkin ('duplicates allowed'). 'list.remove(\"Mouse\")' chaqirilganda, u ro'yxatdagi birinchi uchragan nusxasini o'chiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShoppingCart' sinfini e'lon qiling: 'private java.util.List<String> items = new java.util.ArrayList<>();'.\n2. 'addItem(String item)', 'removeItem(String item)' ('items.remove(item)') va 'getItems()' getterini yozing.\n3. 'Main' metodida 'Laptop', 'Mouse', 'Mouse' qo'shing (2 ta sichqoncha).\n4. 'cart.removeItem(\"Mouse\");' chaqirib, bitta sichqonchani o'chiring.\n5. Konsolga ro'yxat o'lchamini: \"Qolgan tovarlar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 12: Lists permit duplicate entries. Calling remove(Object) removes only the first matching instance.\n\n📋 Steps\n1. Create ShoppingCart with List<String> items.\n2. Provide addItem(item), removeItem(item), and getItems().\n3. In Main, add Laptop, Mouse, Mouse, then remove one Mouse.\n4. Print: \"Qolgan tovarlar soni: 2\".",
      "ru": "📖 Контекст\nСлайд 12 лекции 4: List допускает дубликаты. Метод remove(Object) удаляет первое вхождение элемента.\n\n📋 Шаги\n1. Создайте ShoppingCart со списком items.\n2. Реализуйте addItem, removeItem, getItems.\n3. В main добавьте Laptop, Mouse, Mouse, удалите одну Mouse.\n4. Выведите: \"Qolgan tovarlar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "ShoppingCart",
        "Main"
      ],
      "methods": [
        "addItem",
        "removeItem",
        "getItems"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "remove"
      ]
    },
    "starterCode": "class ShoppingCart {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass ShoppingCart {\n    private List<String> items = new ArrayList<>();\n\n    public void addItem(String item) {\n        items.add(item);\n    }\n\n    public void removeItem(String item) {\n        items.remove(item);\n    }\n\n    public List<String> getItems() {\n        return items;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(\"Laptop\");\n        cart.addItem(\"Mouse\");\n        cart.addItem(\"Mouse\");\n        cart.removeItem(\"Mouse\");\n        System.out.println(\"Qolgan tovarlar soni: \" + cart.getItems().size());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "List.remove(Object o) birinchi mos kelgan nusxani o'chiradi, ikkinchi nusxa esa ro'yxatda saqlanib qoladi.",
      "en": "Calling remove(Object) deletes only the first occurrence found; subsequent duplicates remain.",
      "ru": "Метод remove(Object) удаляет только первое совпадение; последующие дубликаты остаются."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "17. Navbatni Boshqarish — Indeks Bo'yicha O'chirish: remove(int index)",
      "en": "17. Order Queue — Removing Element by Index: remove(int index)",
      "ru": "17. Очередь заказов — Удаление элемента по индексу: remove(int index)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nRo'yxatdan elementni aniq o'rni (indeksi) bo'yicha ham o'chirish mumkin: 'list.remove(0)' eng birinchi elementni olib tashlaydi va qolgan barcha elementlarni bir qadam chapga siljitadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OrderQueue' sinfini e'lon qiling: 'private java.util.List<String> orders = new java.util.ArrayList<>();'.\n2. 'addOrder(String id)', 'serveFirstOrder()' ('orders.remove(0)' qaytarsin) metodlarini yozing.\n3. 'Main' metodida \"ORD-101\" va \"ORD-102\" buyurtmalarini qo'shing.\n4. Birinchi buyurtmaga xizmat ko'rsatib ('oq.serveFirstOrder()') natijani oling.\n5. Konsolga: \"Xizmat ko'rsatildi: ORD-101 | Qoldi: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCalling remove(0) removes the head element and shifts all subsequent elements to the left.\n\n📋 Steps\n1. Create OrderQueue with addOrder(id) and serveFirstOrder() returning orders.remove(0).\n2. In Main, add ORD-101 and ORD-102.\n3. Remove first order and print: \"Xizmat ko'rsatildi: ORD-101 | Qoldi: 1\".",
      "ru": "📖 Контекст\nВызов remove(0) удаляет головной элемент и сдвигает остальные элементы влево.\n\n📋 Шаги\n1. Создайте OrderQueue с addOrder и serveFirstOrder (orders.remove(0)).\n2. В main добавьте два заказа, обработайте первый.\n3. Выведите: \"Xizmat ko'rsatildi: ORD-101 | Qoldi: 1\"."
    },
    "requirements": {
      "classes": [
        "OrderQueue",
        "Main"
      ],
      "methods": [
        "addOrder",
        "serveFirstOrder"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "remove(0)"
      ]
    },
    "starterCode": "class OrderQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass OrderQueue {\n    private List<String> orders = new ArrayList<>();\n\n    public void addOrder(String id) {\n        orders.add(id);\n    }\n\n    public String serveFirstOrder() {\n        if (orders.isEmpty()) return null;\n        return orders.remove(0);\n    }\n\n    public int getRemainingCount() {\n        return orders.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderQueue oq = new OrderQueue();\n        oq.addOrder(\"ORD-101\");\n        oq.addOrder(\"ORD-102\");\n        String served = oq.serveFirstOrder();\n        System.out.println(\"Xizmat ko'rsatildi: \" + served + \" | Qoldi: \" + oq.getRemainingCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "remove(int index) o'chirilgan elementning o'zini qaytaradi, bu orqali buyurtmani qayta ishlash osonlashadi.",
      "en": "remove(int index) returns the removed element directly, enabling convenient handoff logic.",
      "ru": "Метод remove(int index) возвращает удаленный элемент, упрощая передачу данных в обработчик."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "18. Davomat Tizimi — Ro'yxatni Tozalash: clear() va isEmpty()",
      "en": "18. Attendance Roster — Resetting Lists via clear() and isEmpty()",
      "ru": "18. Журнал посещаемости — Очистка списка через clear() и isEmpty()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHafta yakunida dars davomat ro'yxati yangi haftaga tozalanishi kerak. 'list.clear()' ro'yxatdagi barcha elementlarni tozalaydi, 'list.isEmpty()' esa uning bo'shligini tekshiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AttendanceList' sinfini e'lon qiling: 'private java.util.List<String> presentStudents = new java.util.ArrayList<>();'.\n2. 'markPresent(String student)', 'resetWeek()' ('presentStudents.clear()') va 'isReset()' ('presentStudents.isEmpty()') metodlarini yozing.\n3. 'Main' metodida 2 ta talabani belgilang, so'ngra 'resetWeek()' chaqiring.\n4. Konsolga: \"Ro'yxat tozalanganmi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nEnd-of-week attendance resets employ clear() and verify status via isEmpty().\n\n📋 Steps\n1. Create AttendanceList with markPresent(student), resetWeek(), and isReset().\n2. In Main, populate list, invoke resetWeek(), and check isReset().\n3. Print: \"Ro'yxat tozalanganmi: true\".",
      "ru": "📖 Контекст\nСброс журнала посещаемости в конце недели с помощью clear() и isEmpty().\n\n📋 Шаги\n1. Создайте AttendanceList с методами markPresent, resetWeek, isReset.\n2. В main добавьте студентов, очистите список и вызовите isReset.\n3. Выведите: \"Ro'yxat tozalanganmi: true\"."
    },
    "requirements": {
      "classes": [
        "AttendanceList",
        "Main"
      ],
      "methods": [
        "markPresent",
        "resetWeek",
        "isReset"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "clear",
        "isEmpty"
      ]
    },
    "starterCode": "class AttendanceList {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass AttendanceList {\n    private List<String> presentStudents = new ArrayList<>();\n\n    public void markPresent(String student) {\n        presentStudents.add(student);\n    }\n\n    public void resetWeek() {\n        presentStudents.clear();\n    }\n\n    public boolean isReset() {\n        return presentStudents.isEmpty();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AttendanceList list = new AttendanceList();\n        list.markPresent(\"Aziz\");\n        list.markPresent(\"Nodira\");\n        list.resetWeek();\n        System.out.println(\"Ro'yxat tozalanganmi: \" + list.isReset());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "clear() ro'yxatni yangidan ochmasdan turib xotiradagi eski elementlarni xavfsiz tozalaydi.",
      "en": "Calling clear() purges elements while preserving the existing container allocation.",
      "ru": "Метод clear() удаляет все элементы, сохраняя существующий экземпляр коллекции."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "19. Favqulodda Buyurtma — add(0, item) Bilan Boshiga Joylashtirish (Slide 12)",
      "en": "19. Urgent Orders — Prepending to List via add(0, item) (Slide 12)",
      "ru": "19. Срочный заказ — Вставка в начало списка через add(0, item)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 12: 'cart.add(1, \"Laptop bag\")' — 'add(index, element)' metodi ko'rsatilgan indeksga elementni kiritadi va mavjud elementlarni o'ngga suradi. 'add(0, item)' orqali eng birinchi qatorga joylashtirish mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'UrgentQueue' sinfini e'lon qiling: 'private java.util.List<String> items = new java.util.ArrayList<>();'.\n2. 'addNormal(String item)' da 'items.add(item);' qiling.\n3. 'addUrgent(String item)' da 'items.add(0, item);' qilib boshiga qo'shing.\n4. 'Main' metodida \"Oddiy xat\" qo'shing, so'ngra 'addUrgent(\"Shoshilinch xat\")' chaqiring.\n5. 'items.get(0)' birinchi elementini olib, konsolga: \"Birinchi navbatdagi xat: Shoshilinch xat\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 12: add(index, element) inserts at a specific position, shifting remaining elements right.\n\n📋 Steps\n1. Create UrgentQueue with addNormal(item) and addUrgent(item) using items.add(0, item).\n2. In Main, add a normal item, then insert an urgent item at index 0.\n3. Print: \"Birinchi navbatdagi xat: Shoshilinch xat\".",
      "ru": "📖 Контекст\nСлайд 12 лекции 4: метод add(index, element) вставляет элемент по указанному индексу со сдвигом вправо.\n\n📋 Шаги\n1. Создайте UrgentQueue с методами addNormal и addUrgent(item) (items.add(0, item)).\n2. В main добавьте обычное письмо, затем срочное на позицию 0.\n3. Выведите: \"Birinchi navbatdagi xat: Shoshilinch xat\"."
    },
    "requirements": {
      "classes": [
        "UrgentQueue",
        "Main"
      ],
      "methods": [
        "addNormal",
        "addUrgent"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "add(0"
      ]
    },
    "starterCode": "class UrgentQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass UrgentQueue {\n    private List<String> items = new ArrayList<>();\n\n    public void addNormal(String item) {\n        items.add(item);\n    }\n\n    public void addUrgent(String item) {\n        items.add(0, item);\n    }\n\n    public String getFirstItem() {\n        return items.get(0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UrgentQueue queue = new UrgentQueue();\n        queue.addNormal(\"Oddiy xat\");\n        queue.addUrgent(\"Shoshilinch xat\");\n        System.out.println(\"Birinchi navbatdagi xat: \" + queue.getFirstItem());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "add(0, element) mavjud elementlarni bitta indeks o'ngga suradi, shuning uchun birinchi o'ringa yangi element tushadi.",
      "en": "add(0, element) shifts existing elements right by one position, placing the new item at index 0.",
      "ru": "Метод add(0, element) сдвигает существующие элементы вправо, помещая новый элемент в начало."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "20. Reyting Jadvali — set(index, element) Bilan Qiymatni Almashtirish",
      "en": "20. Leaderboard — Replacing List Elements via set(index, element)",
      "ru": "20. Таблица лидеров — Замена элемента списка через set(index, element)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'set(index, element)' metodi ro'yxat hajmini o'zgartirmasdan, ko'rsatilgan indeksdagi eski elementni yangisi bilan to'g'ridan-to'g'ri almashtiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Leaderboard' sinfini e'lon qiling: 'private java.util.List<String> players = new java.util.ArrayList<>();'.\n2. 'addPlayer(String name)' va 'updateRank(int rankIndex, String newName)' ('players.set(rankIndex, newName)') metodlarini yozing.\n3. 'Main' metodida \"Ali\", \"Vali\" o'yinchilarini qo'shing.\n4. 'lb.updateRank(1, \"Hasan\");' orqali 1-indeksdagi o'yinchini almashtiring.\n5. Konsolga: \"Yangi 2-o'rin: Hasan\" deb chop eting.",
      "en": "📖 Real-World Scenario\nGaming leaderboards update ranked placements using set(index, newElement) without changing list size.\n\n📋 Steps\n1. Create Leaderboard with addPlayer(name) and updateRank(rankIndex, newName).\n2. In Main, add Ali, Vali, then update index 1 to Hasan via set(1, \"Hasan\").\n3. Print: \"Yangi 2-o'rin: Hasan\".",
      "ru": "📖 Контекст\nТаблица лидеров обновляет игрока на позиции с помощью set(index, newName).\n\n📋 Шаги\n1. Создайте Leaderboard с методами addPlayer и updateRank.\n2. В main замените элемент на индексе 1 вызовом set(1, \"Hasan\").\n3. Выведите: \"Yangi 2-o'rin: Hasan\"."
    },
    "requirements": {
      "classes": [
        "Leaderboard",
        "Main"
      ],
      "methods": [
        "addPlayer",
        "updateRank"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "set"
      ]
    },
    "starterCode": "class Leaderboard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Leaderboard {\n    private List<String> players = new ArrayList<>();\n\n    public void addPlayer(String name) {\n        players.add(name);\n    }\n\n    public void updateRank(int rankIndex, String newName) {\n        players.set(rankIndex, newName);\n    }\n\n    public String getPlayerAt(int rankIndex) {\n        return players.get(rankIndex);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Leaderboard lb = new Leaderboard();\n        lb.addPlayer(\"Ali\");\n        lb.addPlayer(\"Vali\");\n        lb.updateRank(1, \"Hasan\");\n        System.out.println(\"Yangi 2-o'rin: \" + lb.getPlayerAt(1));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "set(index, element) metodi ro'yxat uzunligini o'zgartirmaydi, faqat mavjud katakdagi havolani yangilaydi.",
      "en": "set(index, element) mutates the specified cell in-place without altering list capacity.",
      "ru": "Метод set(index, element) перезаписывает значение в указанной ячейке без изменения размера списка."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "21. Reys Jadvali — Jadvaldagi Reysni Yangilash (set vs add)",
      "en": "21. Flight Schedule — In-place Flight Updating (set vs add)",
      "ru": "21. Расписание рейсов — Обновление рейса на месте (set vs add)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nReys bekor bo'lganda, uni yangi reys raqami bilan almashtirish uchun 'set(index, newFlight)' ishlatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightBoard' sinfini e'lon qiling: 'private java.util.List<String> flights = new java.util.ArrayList<>();'.\n2. 'addFlight(String f)' va 'replaceFlight(int idx, String newFlight)' metodlarini yozing.\n3. 'Main' metodida \"HY-101\", \"HY-202\" reyslarini qo'shing.\n4. 'replaceFlight(0, \"HY-999\")' chaqiring.\n5. Konsolga: \"Yangilangan birinchi reys: HY-999\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAirport display systems replace cancelled flight codes directly using set(index, newFlight).\n\n📋 Steps\n1. Create FlightBoard with addFlight(f) and replaceFlight(idx, newFlight).\n2. In Main, populate flights and replace index 0 with HY-999.\n3. Print: \"Yangilangan birinchi reys: HY-999\".",
      "ru": "📖 Контекст\nТабло аэропорта заменяет отмененный рейс новым с помощью set.\n\n📋 Шаги\n1. Создайте FlightBoard с методами addFlight и replaceFlight.\n2. В main замените рейс на индексе 0 на HY-999.\n3. Выведите: \"Yangilangan birinchi reys: HY-999\"."
    },
    "requirements": {
      "classes": [
        "FlightBoard",
        "Main"
      ],
      "methods": [
        "addFlight",
        "replaceFlight"
      ],
      "keywords": [
        "List",
        "ArrayList",
        "set"
      ]
    },
    "starterCode": "class FlightBoard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass FlightBoard {\n    private List<String> flights = new ArrayList<>();\n\n    public void addFlight(String flight) {\n        flights.add(flight);\n    }\n\n    public void replaceFlight(int index, String newFlight) {\n        flights.set(index, newFlight);\n    }\n\n    public String getFlightAt(int index) {\n        return flights.get(index);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightBoard board = new FlightBoard();\n        board.addFlight(\"HY-101\");\n        board.addFlight(\"HY-202\");\n        board.replaceFlight(0, \"HY-999\");\n        System.out.println(\"Yangilangan birinchi reys: \" + board.getFlightAt(0));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "add(index, elem) ro'yxatni uzaytirsa, set(index, elem) mavjud joydagi elementni almashtiradi.",
      "en": "Distinguishes add(index, elem) which shifts and grows from set(index, elem) which updates in place.",
      "ru": "Различает add(index, elem), увеличивающий список, и set(index, elem), заменяющий элемент на месте."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "22. Chop Etish Xizmati — for-each Siklida Ro'yxatni Aylanish (Seminar 4 Page 9)",
      "en": "22. Print Spooler — for-each Loop Iteration (Seminar 4 Page 9)",
      "ru": "22. Диспетчер печати — Цикл for-each по элементам List"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 4 9-sahifasi: To'plam elementlarini indekslarsiz birma-bir ko'rib chiqish uchun 'for (String doc : docs)' ko'rinishidagi for-each (enhanced for loop) sikli ishlatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PrintSpooler' sinfini e'lon qiling: 'public void printAll(java.util.List<String> docs)' metodi for-each siklida har bir hujjat nomini chop etsin.\n2. 'Main' metodida 'List<String> list = new ArrayList<>();' ochib, \"CW_Report.pdf\" va \"Lab_Notes.docx\" qo'shing.\n3. 'PrintSpooler ps = new PrintSpooler(); ps.printAll(list);' chaqiring.",
      "en": "📖 Real-World Scenario\nSeminar 4 Page 9: Enhanced for-each loops visit collection elements sequentially without requiring manual indexing.\n\n📋 Steps\n1. Create PrintSpooler with printAll(List<String> docs) using for (String doc : docs).\n2. In Main, create and populate document list, then call printAll.",
      "ru": "📖 Контекст\nСтраница 9 семинара 4: цикл for-each обходит элементы коллекции последовательно без индексов.\n\n📋 Шаги\n1. Создайте PrintSpooler с методом printAll(List<String> docs).\n2. В main заполните список документов и вызовите printAll."
    },
    "requirements": {
      "classes": [
        "PrintSpooler",
        "Main"
      ],
      "methods": [
        "printAll"
      ],
      "keywords": [
        "for (String",
        "List"
      ]
    },
    "starterCode": "class PrintSpooler {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass PrintSpooler {\n    public void printAll(List<String> docs) {\n        for (String doc : docs) {\n            System.out.println(\"Chop etilmoqda: \" + doc);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrintSpooler ps = new PrintSpooler();\n        List<String> list = new ArrayList<>();\n        list.add(\"CW_Report.pdf\");\n        list.add(\"Lab_Notes.docx\");\n        ps.printAll(list);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "for-each sikli Iterable interfeysiga asoslangan bo'lib, indeks xatolarini (IndexOutOfBounds) butunlay istisno qiladi.",
      "en": "Enhanced for loop relies on Java's Iterable interface, completely eliminating index bounds mistakes.",
      "ru": "Цикл for-each работает через интерфейс Iterable, исключая ошибки выхода за границы массива."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "23. Xarajatlar Hamyoni — for-each Siklida List<Double> Yig'indisini Topish",
      "en": "23. Expense Wallet — Summing List<Double> with for-each",
      "ru": "23. Кошелек расходов — Подсчет суммы List<Double> через for-each"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHamyondagi barcha to'lovlar 'List<Double>' ro'yxatida saqlanadi. 'for (Double expense : expenses)' sikli orqali jami summani hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Wallet' sinfini e'lon qiling: 'public double calculateTotalExpenses(java.util.List<Double> expenses)' metodida yig'indini qaytaring.\n2. 'Main' metodida ro'yxatga 15000.0, 32000.0, 48000.0 xarajatlarini qo'shing.\n3. 'Wallet w = new Wallet();' orqali jami xarajatni hisoblang.\n4. Konsolga: \"Jami xarajat: 95000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFinance wallets aggregate transaction histories via enhanced for loop traversal over List<Double>.\n\n📋 Steps\n1. Create Wallet with calculateTotalExpenses(List<Double> expenses).\n2. In Main, populate expenses and compute total.\n3. Print: \"Jami xarajat: 95000.0 so'm\".",
      "ru": "📖 Контекст\nУчет расходов суммирует транзакции в List<Double> через for-each.\n\n📋 Шаги\n1. Создайте Wallet с методом calculateTotalExpenses(List<Double> expenses).\n2. В main добавьте расходы и вычислите сумму.\n3. Выведите: \"Jami xarajat: 95000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Wallet",
        "Main"
      ],
      "methods": [
        "calculateTotalExpenses"
      ],
      "keywords": [
        "for (Double",
        "List"
      ]
    },
    "starterCode": "class Wallet {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Wallet {\n    public double calculateTotalExpenses(List<Double> expenses) {\n        double total = 0.0;\n        for (Double e : expenses) {\n            total += e;\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet();\n        List<Double> list = new ArrayList<>();\n        list.add(15000.0);\n        list.add(32000.0);\n        list.add(48000.0);\n        System.out.println(\"Jami xarajat: \" + w.calculateTotalExpenses(list) + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Double o'ram sinfi (wrapper class) avtomatik unboxing bo'lib, oddiy double kabi qo'shiladi.",
      "en": "Double wrapper objects undergo automatic unboxing seamlessly during arithmetic addition.",
      "ru": "Объекты-обертки Double автоматически распаковываются в примитив при арифметическом суммировании."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "24. Matn Tahlili — for-each Siklida So'zlarning O'rtacha Uzunligini Topish",
      "en": "24. Text Analysis — Computing Average Word Length with for-each",
      "ru": "24. Анализ текста — Средняя длина слов через цикл for-each"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMatn muharririda 'List<String>' so'zlar ro'yxatidan har bir so'z uzunligini 'word.length()' for-each siklida jamlab, o'rtacha so'z uzunligini hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TextAnalyzer' sinfini e'lon qiling: 'public double calculateAverageWordLength(java.util.List<String> words)' metodini yozing.\n2. Siklda har bir so'zning uzunligini jamlab, 'totalChars / (double) words.size()' qaytaring.\n3. 'Main' metodida \"Java\", \"OOP\", \"WIUT\" so'zlarini qo'shing (uzunliklari: 4 + 3 + 4 = 11, o'rtacha: 11 / 3 = 3.666...).\n4. Konsolga so'zlarning o'rtacha uzunligini chop eting.",
      "en": "📖 Real-World Scenario\nLinguistic parsers compute average word metrics by accumulating string lengths in an enhanced loop.\n\n📋 Steps\n1. Create TextAnalyzer with calculateAverageWordLength(List<String> words).\n2. In Main, test with words \"Java\", \"OOP\", \"WIUT\" and print the result.",
      "ru": "📖 Контекст\nАнализатор текста вычисляет среднюю длину слова по списку List<String>.\n\n📋 Шаги\n1. Создайте TextAnalyzer с методом calculateAverageWordLength.\n2. В main проверьте работу на словах \"Java\", \"OOP\", \"WIUT\"."
    },
    "requirements": {
      "classes": [
        "TextAnalyzer",
        "Main"
      ],
      "methods": [
        "calculateAverageWordLength"
      ],
      "keywords": [
        "for (String",
        "List"
      ]
    },
    "starterCode": "class TextAnalyzer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass TextAnalyzer {\n    public double calculateAverageWordLength(List<String> words) {\n        if (words.isEmpty()) return 0.0;\n        int totalChars = 0;\n        for (String w : words) {\n            totalChars += w.length();\n        }\n        return (double) totalChars / words.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TextAnalyzer ta = new TextAnalyzer();\n        List<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        list.add(\"OOP\");\n        list.add(\"WIUT\");\n        System.out.println(\"O'rtacha so'z uzunligi: \" + ta.calculateAverageWordLength(list));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "for-each sikli matnlarni tahlil qilishda kodni qisqa va tushunarli qiladi.",
      "en": "Traversing text lists using enhanced loops produces clean, readable parsing logic.",
      "ru": "Цикл for-each делает алгоритмы обработки текстовых списков компактными и понятными."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "25. Brauzer Tarixi — LinkedList Bilan addFirst() Tezkor Qo'shish (Slide 9)",
      "en": "25. Browser History — Fast Prepending with LinkedList.addFirst() (Slide 9)",
      "ru": "25. История браузера — Быстрая вставка в начало с LinkedList.addFirst()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 9: 'ArrayList' indeks bo'yicha tez qidiradi, ammo 'LinkedList' boshiga yoki oxiriga element qo'shishda eng tezkor (O(1)) hisoblanadi. Brauzer tarixi har doim oxirgi kirilgan saytni 'addFirst()' bilan boshiga qo'yadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BrowserHistory' sinfini e'lon qiling: 'private java.util.LinkedList<String> history = new java.util.LinkedList<>();'.\n2. 'public void visitPage(String url)' metodida 'history.addFirst(url);' qiling.\n3. 'public String getMostRecentPage()' metodida 'history.getFirst()' qaytarsin.\n4. 'Main' metodida avval \"google.com\", keyin \"wiut.uz\" saytlarini oching.\n5. Konsolga: \"So'nggi kirilgan sayt: wiut.uz\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 9: LinkedList excels at head and tail insertions without array reallocation overhead.\n\n📋 Steps\n1. Create BrowserHistory with private LinkedList<String> history.\n2. Provide visitPage(url) using addFirst(url) and getMostRecentPage() returning getFirst().\n3. In Main, visit google.com and wiut.uz, then print: \"So'nggi kirilgan sayt: wiut.uz\".",
      "ru": "📖 Контекст\nСлайд 9 лекции 4: LinkedList обеспечивает быструю вставку в начало и конец списка (O(1)).\n\n📋 Шаги\n1. Создайте BrowserHistory с LinkedList<String> history.\n2. Реализуйте visitPage (addFirst) и getMostRecentPage (getFirst).\n3. В main откройте google.com и wiut.uz, затем выведите: \"So'nggi kirilgan sayt: wiut.uz\"."
    },
    "requirements": {
      "classes": [
        "BrowserHistory",
        "Main"
      ],
      "methods": [
        "visitPage",
        "getMostRecentPage"
      ],
      "keywords": [
        "LinkedList",
        "addFirst",
        "getFirst"
      ]
    },
    "starterCode": "class BrowserHistory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedList;\n\nclass BrowserHistory {\n    private LinkedList<String> history = new LinkedList<>();\n\n    public void visitPage(String url) {\n        history.addFirst(url);\n    }\n\n    public String getMostRecentPage() {\n        if (history.isEmpty()) return null;\n        return history.getFirst();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BrowserHistory bh = new BrowserHistory();\n        bh.visitPage(\"google.com\");\n        bh.visitPage(\"wiut.uz\");\n        System.out.println(\"So'nggi kirilgan sayt: \" + bh.getMostRecentPage());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedList bog'langan ro'yxat bo'lgani sababli boshiga element qo'shish O(1) tezlikda bajariladi, elementlarni surish talab etilmaydi.",
      "en": "LinkedList uses pointer links, allowing addFirst() to execute in constant O(1) time without shifting.",
      "ru": "LinkedList работает на указателях, поэтому addFirst() выполняется за O(1) без сдвига элементов."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "26. Bekor Qilish (Undo) — LinkedList Bilan removeFirst() Boshqaruvchi",
      "en": "26. Action Undo Stack — Popping with LinkedList.removeFirst()",
      "ru": "26. Отмена действий (Undo) — Удаление из начала через LinkedList.removeFirst()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nGrafik redaktorda 'Ctrl+Z' (Undo) bosilganda, oxirgi bajarilgan amal ro'yxat boshidan 'removeFirst()' orqali sug'urib olinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ActionHistory' sinfini e'lon qiling: 'private java.util.LinkedList<String> actions = new java.util.LinkedList<>();'.\n2. 'public void doAction(String a)' da 'actions.addFirst(a);'.\n3. 'public String undo()' da 'actions.removeFirst();' qaytarsin.\n4. 'Main' metodida \"Rasm chizish\" va \"Matn yozish\" amallarini bajaring.\n5. 'undo()' chaqirib, konsolga: \"Bekor qilingan amal: Matn yozish\" deb chop eting.",
      "en": "📖 Real-World Scenario\nUndo engines pop the latest user interaction from a linked list using removeFirst().\n\n📋 Steps\n1. Create ActionHistory with LinkedList<String> actions.\n2. Implement doAction(a) using addFirst and undo() using removeFirst.\n3. In Main, perform actions, undo latest, and print: \"Bekor qilingan amal: Matn yozish\".",
      "ru": "📖 Контекст\nМеханизм отмены действий (Undo) извлекает последнее действие через removeFirst().\n\n📋 Шаги\n1. Создайте ActionHistory с LinkedList<String> actions.\n2. Реализуйте doAction (addFirst) и undo (removeFirst).\n3. В main выполните действия, отмените последнее и выведите результат."
    },
    "requirements": {
      "classes": [
        "ActionHistory",
        "Main"
      ],
      "methods": [
        "doAction",
        "undo"
      ],
      "keywords": [
        "LinkedList",
        "addFirst",
        "removeFirst"
      ]
    },
    "starterCode": "class ActionHistory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedList;\n\nclass ActionHistory {\n    private LinkedList<String> actions = new LinkedList<>();\n\n    public void doAction(String action) {\n        actions.addFirst(action);\n    }\n\n    public String undo() {\n        if (actions.isEmpty()) return null;\n        return actions.removeFirst();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ActionHistory ah = new ActionHistory();\n        ah.doAction(\"Rasm chizish\");\n        ah.doAction(\"Matn yozish\");\n        System.out.println(\"Bekor qilingan amal: \" + ah.undo());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedList LIFO (Stack) yoki FIFO (Queue) mexanizmlari uchun juda qulaydir.",
      "en": "LinkedList acts as an efficient double-ended queue, serving both stack and queue patterns.",
      "ru": "LinkedList эффективно реализует как стек (LIFO), так и очередь (FIFO)."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "27. Ikki Tomonlama Navbat — LinkedList.addLast() va getFirst()",
      "en": "27. Double-Ended Queue — Appending Tail with LinkedList.addLast()",
      "ru": "27. Двусторонняя очередь — Добавление в конец с LinkedList.addLast()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nNavbatga yangi mijoz har doim oxiridan qo'shiladi ('addLast()'), xizmat ko'rsatish esa boshidan boshlanadi ('getFirst()').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerLine' sinfini e'lon qiling: 'private java.util.LinkedList<String> line = new java.util.LinkedList<>();'.\n2. 'public void joinQueue(String name)' da 'line.addLast(name);'.\n3. 'public String peekNextCustomer()' da 'line.getFirst();'.\n4. 'Main' metodida \"Nodir\", \"Sardor\" mijozlarini navbatga qo'shing.\n5. Konsolga: \"Navbatdagi mijoz: Nodir\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCustomer queues append arriving clients at the tail via addLast() while inspecting head via getFirst().\n\n📋 Steps\n1. Create CustomerLine with LinkedList<String> line.\n2. Implement joinQueue(name) using addLast and peekNextCustomer() returning getFirst.\n3. In Main, enqueue clients and print: \"Navbatdagi mijoz: Nodir\".",
      "ru": "📖 Контекст\nОчередь клиентов добавляет новых в конец (addLast) и обслуживает с начала (getFirst).\n\n📋 Шаги\n1. Создайте CustomerLine с LinkedList<String> line.\n2. Реализуйте joinQueue (addLast) и peekNextCustomer (getFirst).\n3. В main выведите: \"Navbatdagi mijoz: Nodir\"."
    },
    "requirements": {
      "classes": [
        "CustomerLine",
        "Main"
      ],
      "methods": [
        "joinQueue",
        "peekNextCustomer"
      ],
      "keywords": [
        "LinkedList",
        "addLast",
        "getFirst"
      ]
    },
    "starterCode": "class CustomerLine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedList;\n\nclass CustomerLine {\n    private LinkedList<String> line = new LinkedList<>();\n\n    public void joinQueue(String name) {\n        line.addLast(name);\n    }\n\n    public String peekNextCustomer() {\n        if (line.isEmpty()) return null;\n        return line.getFirst();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerLine queue = new CustomerLine();\n        queue.joinQueue(\"Nodir\");\n        queue.joinQueue(\"Sardor\");\n        System.out.println(\"Navbatdagi mijoz: \" + queue.peekNextCustomer());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedList ikki tomonlama bog'langan ro'yxat (Doubly Linked List) bo'lib, boshi va oxiridan amallarni O(1) vaqtda bajaradi.",
      "en": "As a doubly-linked list, LinkedList provides O(1) performance for both head and tail operations.",
      "ru": "Двусвязный список LinkedList выполняет операции с обоих концов за O(1)."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "28. Mahsulotlar Katalogi — List<Product> Ro'yxatida Jami Narxni Jamlash",
      "en": "28. Product Catalog — Aggregating Totals Over List<Product>",
      "ru": "28. Каталог товаров — Подсчет общей суммы по List<Product>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 ning bosh g'oyasi: Ro'yxatlar o'z ichida boshqa sinf obyektlarini ('List<Product>') saqlaydi! Har bir tovarning 'getPrice()' metodini chaqirib katalogdagi barcha tovarlar narxini jamlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;' va 'private double price;' maydonlari, konstruktor va getterlari.\n2. 'Catalog' sinfini e'lon qiling: 'private java.util.List<Product> products = new java.util.ArrayList<>();'.\n3. 'public void addProduct(Product p)' va 'public double calculateTotalValue()' metodlarini yozing (for-each siklida 'p.getPrice()' jamlansin).\n4. 'Main' metodida katalogga 2 ta tovar (\"Klaviatura\", 250000.0 va \"Sichqoncha\", 150000.0) qo'shing.\n5. Konsolga: \"Katalog jami qiymati: 400000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSeminar 4 core theme: Storing domain entities inside List<Product> and evaluating aggregate metrics.\n\n📋 Steps\n1. Create Product(name, price) with getters.\n2. Catalog holds private List<Product> products with addProduct and calculateTotalValue().\n3. In Main, populate catalog and print: \"Katalog jami qiymati: 400000.0 so'm\".",
      "ru": "📖 Контекст\nКлючевая тема семинара 4: хранение доменных сущностей в List<Product> и подсчет итогов.\n\n📋 Шаги\n1. Создайте Product(name, price) с геттерами.\n2. Создайте Catalog со списком List<Product> products и методом calculateTotalValue.\n3. В main выведите: \"Katalog jami qiymati: 400000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "Catalog",
        "Main"
      ],
      "fields": [
        {
          "name": "name",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        }
      ],
      "privateFields": [
        "name",
        "price",
        "products"
      ],
      "methods": [
        "getName",
        "getPrice",
        "addProduct",
        "calculateTotalValue"
      ],
      "constructors": [
        "Product"
      ]
    },
    "starterCode": "class Product {\n    \n}\n\nclass Catalog {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass Catalog {\n    private List<Product> products = new ArrayList<>();\n\n    public void addProduct(Product p) {\n        products.add(p);\n    }\n\n    public double calculateTotalValue() {\n        double total = 0.0;\n        for (Product p : products) {\n            total += p.getPrice();\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Catalog cat = new Catalog();\n        cat.addProduct(new Product(\"Klaviatura\", 250000.0));\n        cat.addProduct(new Product(\"Sichqoncha\", 150000.0));\n        System.out.println(\"Katalog jami qiymati: \" + cat.calculateTotalValue() + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "List<Product> obyektlar to'plami bilan ishlash Coursework 2 dagi savatcha va buyurtma tizimining eng asosiy qurilish g'ishtidir.",
      "en": "Managing domain entity collections via List<Product> forms the backbone of Coursework 2 ordering engines.",
      "ru": "Управление коллекциями сущностей через List<Product> — основа курсового проекта CW2."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "29. Xodimlar Maoshi — List<Employee> Ro'yxatida Oylik Jamg'armasi",
      "en": "29. Payroll Accounting — Aggregating Salaries Across List<Employee>",
      "ru": "29. Бухгалтерия зарплат — Расчет фонда оплаты по List<Employee>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuxgalteriya tizimida korxonaning barcha xodimlari 'List<Employee>' to'plamida saqlanadi va for-each siklida umumiy oylik maosh fondi hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Employee(String name, double salary)' sinfini e'lon qiling ('getSalary()' getteri bilan).\n2. 'CompanyPayroll' sinfini e'lon qiling: 'private java.util.List<Employee> staff = new java.util.ArrayList<>();'.\n3. 'addEmployee(Employee e)' va 'calculateTotalPayroll()' metodlarini yozing.\n4. 'Main' metodida 2 ta xodimni (5000000.0 va 7000000.0) qo'shing.\n5. Konsolga: \"Jami maosh fondi: 12000000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCorporate payroll engines iterate List<Employee> to calculate monthly staff compensation funds.\n\n📋 Steps\n1. Create Employee(name, salary).\n2. CompanyPayroll with addEmployee and calculateTotalPayroll().\n3. In Main, add 2 employees and print: \"Jami maosh fondi: 12000000.0 so'm\".",
      "ru": "📖 Контекст\nРасчет зарплатного фонда компании по списку List<Employee>.\n\n📋 Шаги\n1. Создайте Employee(name, salary).\n2. Создайте CompanyPayroll со списком staff и методом calculateTotalPayroll.\n3. В main выведите: \"Jami maosh fondi: 12000000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Employee",
        "CompanyPayroll",
        "Main"
      ],
      "methods": [
        "getSalary",
        "addEmployee",
        "calculateTotalPayroll"
      ],
      "constructors": [
        "Employee"
      ]
    },
    "starterCode": "class Employee {\n    \n}\n\nclass CompanyPayroll {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Employee {\n    private String name;\n    private double salary;\n\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n\n    public double getSalary() {\n        return salary;\n    }\n}\n\nclass CompanyPayroll {\n    private List<Employee> staff = new ArrayList<>();\n\n    public void addEmployee(Employee e) {\n        staff.add(e);\n    }\n\n    public double calculateTotalPayroll() {\n        double sum = 0.0;\n        for (Employee e : staff) {\n            sum += e.getSalary();\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CompanyPayroll cp = new CompanyPayroll();\n        cp.addEmployee(new Employee(\"Anvar\", 5000000.0));\n        cp.addEmployee(new Employee(\"Dilnoza\", 7000000.0));\n        System.out.println(\"Jami maosh fondi: \" + cp.calculateTotalPayroll() + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Obyektlar to'plamini aylanib hisoblash korxona biznes qoidalarini aniq ifoda etadi.",
      "en": "Traversing entity lists to aggregate financials models clean enterprise accounting.",
      "ru": "Обход списка сущностей для подсчета финансовых показателей моделирует корпоративный учет."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: Massivlar va List To'plamlari (ArrayList)",
    "sector": "1-30",
    "title": {
      "uz": "30. Kurs Baholari — List<Student> Ro'yxatida Eng Yuqori Ballni Qidirish",
      "en": "30. Academic Dean — Finding Top Performer in List<Student>",
      "ru": "30. Деканат — Поиск студента с высшим баллом в List<Student>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n1-Sektorning yakuniy topshirig'i: 'List<Student>' to'plami bo'ylab for-each siklida yurib, eng yuqori ballga ega iqtidorli talabani aniqlang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Student(String name, int score)' sinfini e'lon qiling ('getName()' va 'getScore()' getterlari bilan).\n2. 'DeanOffice' sinfini e'lon qiling: 'public Student findTopStudent(java.util.List<Student> students)' metodida eng yuqori ballli talabani toping.\n3. 'Main' metodida 'List<Student> group = new ArrayList<>();' ochib, 3 ta talabani qo'shing (ballari: 82, 95, 88).\n4. Eng a'lochi talabani topib, konsolga: \"Eng yuqori ball egasi: Kamola (95 ball)\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSector 1 finale: Searching for the top-ranking Student object across List<Student>.\n\n📋 Steps\n1. Create Student(name, score) with getters.\n2. DeanOffice with findTopStudent(List<Student> students).\n3. In Main, populate students with scores 82, 95, 88 and print top performer.",
      "ru": "📖 Контекст\nФинал Сектора 1: поиск лучшего студента в коллекции List<Student>.\n\n📋 Шаги\n1. Создайте Student(name, score) с геттерами.\n2. Создайте DeanOffice с методом findTopStudent(List<Student> students).\n3. В main выведите: \"Eng yuqori ball egasi: Kamola (95 ball)\"."
    },
    "requirements": {
      "classes": [
        "Student",
        "DeanOffice",
        "Main"
      ],
      "methods": [
        "getName",
        "getScore",
        "findTopStudent"
      ],
      "constructors": [
        "Student"
      ]
    },
    "starterCode": "class Student {\n    \n}\n\nclass DeanOffice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\n\nclass Student {\n    private String name;\n    private int score;\n\n    public Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getScore() {\n        return score;\n    }\n}\n\nclass DeanOffice {\n    public Student findTopStudent(List<Student> students) {\n        if (students.isEmpty()) return null;\n        Student top = students.get(0);\n        for (Student s : students) {\n            if (s.getScore() > top.getScore()) {\n                top = s;\n            }\n        }\n        return top;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        List<Student> group = new ArrayList<>();\n        group.add(new Student(\"Rustam\", 82));\n        group.add(new Student(\"Kamola\", 95));\n        group.add(new Student(\"Siroj\", 88));\n\n        DeanOffice office = new DeanOffice();\n        Student top = office.findTopStudent(group);\n        System.out.println(\"Eng yuqori ball egasi: \" + top.getName() + \" (\" + top.getScore() + \" ball)\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Sektor 1 (1–30) to'liq yakunlandi! Massivlar, chegaralar, List, ArrayList, LinkedList va obyektlar to'plamlari mukammal o'zlashtirildi.",
      "en": "Sector 1 complete! Covers arrays, boundary safety, List, ArrayList, LinkedList, and custom entity collections.",
      "ru": "Сектор 1 завершен! Охватывает массивы, проверки границ, List, ArrayList, LinkedList и коллекции сущностей."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "31. Promo-kodlar — Set<String> da Dublikatni Rad Etish (Lecture 4 Slide 16-18)",
      "en": "31. Promo Codes — Rejecting Duplicates in Set<String> (Slide 16-18)",
      "ru": "31. Промокоды — Отклонение дубликатов в Set<String>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 15-18: 'Set' to'plamida elementlar takrorlanmaydi ('no duplicate elements'). 'set.add(\"SALE10\")' birinchi marta 'true' qaytarsa, xuddi shu kod ikkinchi marta qo'shilganda 'false' qaytaradi! Promo-kod faqat 1 marta ishlatilishi uchun 'Set' eng ideal tanlovdir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PromoManager' sinfini e'lon qiling: 'private java.util.Set<String> usedCodes = new java.util.HashSet<>();'.\n2. 'public boolean applyCode(String code)' metodida 'return usedCodes.add(code);' qiling.\n3. 'public int getUsedCount()' metodida 'usedCodes.size()' qaytaring.\n4. 'Main' metodida 'pm.applyCode(\"SALE10\")' (true), 'pm.applyCode(\"WELCOME\")' (true), va yana 'pm.applyCode(\"SALE10\")' (false) chaqiring.\n5. Konsolga: \"Qo'llangan kodlar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 16-18: Sets reject duplicates, returning false on redundant add() attempts.\n\n📋 Steps\n1. Create PromoManager with private Set<String> usedCodes = new HashSet<>().\n2. Implement applyCode(code) returning usedCodes.add(code).\n3. In Main, apply \"SALE10\", \"WELCOME\", and \"SALE10\" again, then print: \"Qo'llangan kodlar soni: 2\".",
      "ru": "📖 Контекст\nСлайды 16-18 лекции 4: Set не содержит дубликатов, метод add() возвращает false при повторном добавлении.\n\n📋 Шаги\n1. Создайте PromoManager с Set<String> usedCodes = new HashSet<>().\n2. Реализуйте applyCode (return usedCodes.add(code)) и getUsedCount.\n3. В main добавьте SALE10, WELCOME и снова SALE10. Выведите: \"Qo'llangan kodlar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "PromoManager",
        "Main"
      ],
      "methods": [
        "applyCode",
        "getUsedCount"
      ],
      "keywords": [
        "Set",
        "HashSet",
        "add",
        "size"
      ]
    },
    "starterCode": "class PromoManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass PromoManager {\n    private Set<String> usedCodes = new HashSet<>();\n\n    public boolean applyCode(String code) {\n        return usedCodes.add(code);\n    }\n\n    public int getUsedCount() {\n        return usedCodes.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PromoManager pm = new PromoManager();\n        pm.applyCode(\"SALE10\");\n        pm.applyCode(\"WELCOME\");\n        boolean thirdAttempt = pm.applyCode(\"SALE10\");\n        System.out.println(\"Qo'llangan kodlar soni: \" + pm.getUsedCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Set.add() metodi kiritilgan element to'plamda allaqachon mavjud bo'lsa false qaytaradi va uni qayta qo'shmaydi.",
      "en": "Set.add() evaluates whether the item is already present and rejects duplicate insertions cleanly.",
      "ru": "Метод Set.add() проверяет наличие элемента и отклоняет дубликат, возвращая false."
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "32. Foydalanuvchi Ro'yxatdan O'tishi — Set<String> Bilan Email Takrorlanmasligi",
      "en": "32. User Signup — Enforcing Unique Emails via Set<String>",
      "ru": "32. Регистрация — Контроль уникальности Email через Set<String>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTizimda har bir foydalanuvchi elektron pochtasi noyob bo'lishi shart. 'registerEmail(String email)' metodi email oldin ro'yxatdan o'tgan bo'lsa 'false', yangi bo'lsa 'true' qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'UserRegistry' sinfini e'lon qiling: 'private java.util.Set<String> emails = new java.util.HashSet<>();'.\n2. 'public boolean registerEmail(String email)' metodida 'emails.add(email)' natijasini qaytaring.\n3. 'Main' metodida 'reg.registerEmail(\"student@wiut.uz\")' (true) va yana 'reg.registerEmail(\"student@wiut.uz\")' (false) chaqiring.\n4. Konsolga: \"Birinchi urinish: true | Ikkinchi urinish: false\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAccount authentication registries guarantee email uniqueness via Set containers.\n\n📋 Steps\n1. Create UserRegistry with private Set<String> emails.\n2. Provide registerEmail(email) returning emails.add(email).\n3. In Main, test repeated registration and print outcomes.",
      "ru": "📖 Контекст\nСервис регистрации контролирует уникальность email с помощью Set<String>.\n\n📋 Шаги\n1. Создайте UserRegistry с полем Set<String> emails.\n2. Реализуйте registerEmail.\n3. В main выведите: \"Birinchi urinish: true | Ikkinchi urinish: false\"."
    },
    "requirements": {
      "classes": [
        "UserRegistry",
        "Main"
      ],
      "methods": [
        "registerEmail"
      ],
      "keywords": [
        "Set",
        "HashSet"
      ]
    },
    "starterCode": "class UserRegistry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass UserRegistry {\n    private Set<String> emails = new HashSet<>();\n\n    public boolean registerEmail(String email) {\n        return emails.add(email);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserRegistry reg = new UserRegistry();\n        boolean first = reg.registerEmail(\"student@wiut.uz\");\n        boolean second = reg.registerEmail(\"student@wiut.uz\");\n        System.out.println(\"Birinchi urinish: \" + first + \" | Ikkinchi urinish: \" + second);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Set to'plami yordamida if-shartlari va sikllarsiz bir qatorda noyoblikni ta'minlash mumkin.",
      "en": "Set collections eliminate verbose validation loops by enforcing uniqueness intrinsically.",
      "ru": "Коллекция Set обеспечивает уникальность без необходимости писать громоздкие циклы проверки."
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "33. Omadli Lotereya — Set<Integer> Bilan Noyob Omadli Raqamlar",
      "en": "33. Lottery Pool — Unique Lucky Numbers via Set<Integer>",
      "ru": "33. Лотерея — Уникальные счастливые номера в Set<Integer>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLotereya barabanida tortilgan raqamlar takrorlanmasligi kerak. 'LotteryDrum' 5 ta noyob raqamni 'Set<Integer>' to'plamida to'playdi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'LotteryDrum' sinfini e'lon qiling: 'private java.util.Set<Integer> luckyNumbers = new java.util.HashSet<>();'.\n2. 'public void drawNumber(int num)' metodida 'luckyNumbers.add(num);'.\n3. 'public int getCount()' metodida 'luckyNumbers.size()' qaytarsin.\n4. 'Main' metodida 7, 14, 7 (takroriy), 21 raqamlarini torting.\n5. Konsolga: \"Tanlangan noyob raqamlar soni: 3\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLottery machines aggregate distinct selected integer balls inside Set<Integer>.\n\n📋 Steps\n1. Create LotteryDrum with private Set<Integer> luckyNumbers.\n2. Implement drawNumber(num) and getCount().\n3. In Main, draw numbers 7, 14, 7, 21 and print: \"Tanlangan noyob raqamlar soni: 3\".",
      "ru": "📖 Контекст\nЛотерейный барабан сохраняет только уникальные выпавшие номера.\n\n📋 Шаги\n1. Создайте LotteryDrum с Set<Integer> luckyNumbers.\n2. Реализуйте drawNumber и getCount.\n3. В main добавьте 7, 14, 7, 21 и выведите: \"Tanlangan noyob raqamlar soni: 3\"."
    },
    "requirements": {
      "classes": [
        "LotteryDrum",
        "Main"
      ],
      "methods": [
        "drawNumber",
        "getCount"
      ],
      "keywords": [
        "Set",
        "HashSet"
      ]
    },
    "starterCode": "class LotteryDrum {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass LotteryDrum {\n    private Set<Integer> luckyNumbers = new HashSet<>();\n\n    public void drawNumber(int num) {\n        luckyNumbers.add(num);\n    }\n\n    public int getCount() {\n        return luckyNumbers.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LotteryDrum drum = new LotteryDrum();\n        drum.drawNumber(7);\n        drum.drawNumber(14);\n        drum.drawNumber(7);\n        drum.drawNumber(21);\n        System.out.println(\"Tanlangan noyob raqamlar soni: \" + drum.getCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Integer o'ram sinfidagi sonlar avtomatik hashCode() va equals() bo'yicha tenglashtirilib, dublikat saqlanmaydi.",
      "en": "Auto-boxed Integer objects utilize standard equals and hashCode contracts to prevent duplicates.",
      "ru": "Автоупакованные числа Integer используют стандартные equals и hashCode для предотвращения дубликатов."
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "34. Keshbek Vauchari — Set.contains() Bilan Tezkor Tekshirish (Slide 18)",
      "en": "34. Voucher Validator — Fast Lookup with Set.contains() (Slide 18)",
      "ru": "34. Проверка ваучера — Быстрый поиск через Set.contains()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 18: 'set.contains(\"WELCOME\")' — 'Set' to'plamida qidiruv O(1) konstant vaqtda ishlaydi (List dagi O(n) chiziqli qidiruvdan ancha tez). Vaucherni tekshiring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'VoucherValidator' sinfini e'lon qiling: 'private java.util.Set<String> activeVouchers = new java.util.HashSet<>();'.\n2. 'addVoucher(String v)', 'isValidVoucher(String v)' ('activeVouchers.contains(v)') metodlarini yozing.\n3. 'Main' metodida \"UZUM50\", \"CLICK10\" vaucherlarini qo'shing.\n4. 'vv.isValidVoucher(\"UZUM50\")' natijasini tekshiring.\n5. Konsolga: \"Vaucher amal qiladimi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 18: HashSet.contains() provides O(1) constant time lookup performance.\n\n📋 Steps\n1. Create VoucherValidator with Set<String> activeVouchers.\n2. Provide addVoucher and isValidVoucher using activeVouchers.contains(v).\n3. In Main, verify \"UZUM50\" and print: \"Vaucher amal qiladimi: true\".",
      "ru": "📖 Контекст\nСлайд 18 лекции 4: HashSet.contains() выполняет поиск за константное время O(1).\n\n📋 Шаги\n1. Создайте VoucherValidator с Set<String> activeVouchers.\n2. Реализуйте addVoucher и isValidVoucher (contains).\n3. В main проверьте UZUM50 и выведите: \"Vaucher amal qiladimi: true\"."
    },
    "requirements": {
      "classes": [
        "VoucherValidator",
        "Main"
      ],
      "methods": [
        "addVoucher",
        "isValidVoucher"
      ],
      "keywords": [
        "Set",
        "HashSet",
        "contains"
      ]
    },
    "starterCode": "class VoucherValidator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass VoucherValidator {\n    private Set<String> activeVouchers = new HashSet<>();\n\n    public void addVoucher(String v) {\n        activeVouchers.add(v);\n    }\n\n    public boolean isValidVoucher(String v) {\n        return activeVouchers.contains(v);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VoucherValidator vv = new VoucherValidator();\n        vv.addVoucher(\"UZUM50\");\n        vv.addVoucher(\"CLICK10\");\n        System.out.println(\"Vaucher amal qiladimi: \" + vv.isValidVoucher(\"UZUM50\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "HashSet xesh-jadval (Hash Table) asosida ishlagani sababli millionlab elementlar ichidan ham bir lahzada (O(1)) qidiradi.",
      "en": "Hash tables yield immediate O(1) membership resolution even across massive datasets.",
      "ru": "Хеш-таблица обеспечивает мгновенный поиск O(1) даже среди миллионов элементов."
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "35. Xavfsizlik Qora Ro'yxati — Set.contains() Bilan Bloklangan Foydalanuvchi",
      "en": "35. Security Firewall — Blacklist Verification with Set.contains()",
      "ru": "35. Черный список — Проверка блокировки через Set.contains()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKiberxavfsizlik devorida shubhali foydalanuvchilar qora ro'yxati 'Set<String>' da saqlanadi. 'isBlocked(String username)' metodi tekshirsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SecurityFirewall' sinfini e'lon qiling: 'private java.util.Set<String> blacklistedUsers = new java.util.HashSet<>();'.\n2. 'blockUser(String u)' va 'isBlocked(String u)' ('blacklistedUsers.contains(u)') metodlarini yozing.\n3. 'Main' metodida \"spammer99\" ni bloklang.\n4. 'fw.isBlocked(\"spammer99\")' ni tekshiring.\n5. Konsolga: \"Foydalanuvchi bloklangan: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFirewalls inspect incoming client identifiers against a blocked HashSet.\n\n📋 Steps\n1. Create SecurityFirewall with private Set<String> blacklistedUsers.\n2. Implement blockUser and isBlocked.\n3. In Main, block \"spammer99\" and print verification status.",
      "ru": "📖 Контекст\nФайрвол проверяет пользователей по черному списку в Set<String>.\n\n📋 Шаги\n1. Создайте SecurityFirewall с Set<String> blacklistedUsers.\n2. Реализуйте blockUser и isBlocked (contains).\n3. В main заблокируйте spammer99 и выведите: \"Foydalanuvchi bloklangan: true\"."
    },
    "requirements": {
      "classes": [
        "SecurityFirewall",
        "Main"
      ],
      "methods": [
        "blockUser",
        "isBlocked"
      ],
      "keywords": [
        "Set",
        "HashSet",
        "contains"
      ]
    },
    "starterCode": "class SecurityFirewall {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass SecurityFirewall {\n    private Set<String> blacklistedUsers = new HashSet<>();\n\n    public void blockUser(String username) {\n        blacklistedUsers.add(username);\n    }\n\n    public boolean isBlocked(String username) {\n        return blacklistedUsers.contains(username);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecurityFirewall fw = new SecurityFirewall();\n        fw.blockUser(\"spammer99\");\n        System.out.println(\"Foydalanuvchi bloklangan: \" + fw.isBlocked(\"spammer99\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Qora ro'yxat kabi tez-tez tekshiriladigan to'plamlar uchun doimo List o'rniga Set tanlanishi shart.",
      "en": "Security blacklists must use Set rather than List to guarantee constant time lookups under load.",
      "ru": "Черные списки должны строиться на Set для обеспечения постоянного времени отклика O(1)."
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "36. Spam Filtri — Taqiqlangan So'zlarni Set.contains() Bilan Aniqlash",
      "en": "36. Spam Filter — Keyword Detection using Set.contains()",
      "ru": "36. Спам-фильтр — Поиск запрещенных слов через Set.contains()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nEmail tizimi xabardagi kalit so'zni taqiqlangan spam so'zlar to'plamida borligini tekshiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SpamFilter' sinfini e'lon qiling: 'private java.util.Set<String> bannedWords = new java.util.HashSet<>();'.\n2. 'addBannedWord(String w)' va 'isSpamWord(String w)' metodlarini yozing.\n3. 'Main' metodida \"kazino\" va \"yutuq\" so'zlarini qo'shing.\n4. 'filter.isSpamWord(\"kazino\")' ni tekshiring.\n5. Konsolga: \"Spam deb topildi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nContent moderation filters test suspicious tokens against a banned HashSet.\n\n📋 Steps\n1. Create SpamFilter with Set<String> bannedWords.\n2. Provide addBannedWord and isSpamWord.\n3. In Main, test \"kazino\" and print: \"Spam deb topildi: true\".",
      "ru": "📖 Контекст\nФильтр спама сверяет слова с набором запрещенных терминов.\n\n📋 Шаги\n1. Создайте SpamFilter с Set<String> bannedWords.\n2. Реализуйте addBannedWord и isSpamWord.\n3. В main проверьте слово \"kazino\". Выведите: \"Spam deb topildi: true\"."
    },
    "requirements": {
      "classes": [
        "SpamFilter",
        "Main"
      ],
      "methods": [
        "addBannedWord",
        "isSpamWord"
      ],
      "keywords": [
        "Set",
        "HashSet",
        "contains"
      ]
    },
    "starterCode": "class SpamFilter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass SpamFilter {\n    private Set<String> bannedWords = new HashSet<>();\n\n    public void addBannedWord(String word) {\n        bannedWords.add(word);\n    }\n\n    public boolean isSpamWord(String word) {\n        return bannedWords.contains(word);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpamFilter filter = new SpamFilter();\n        filter.addBannedWord(\"kazino\");\n        filter.addBannedWord(\"yutuq\");\n        System.out.println(\"Spam deb topildi: \" + filter.isSpamWord(\"kazino\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "So'zlarni Set yordamida tekshirish katta matnlarni qayta ishlash tezligini yuzlab barobarga oshiradi.",
      "en": "HashSet lookup accelerates text moderation pipelines by orders of magnitude.",
      "ru": "Поиск по HashSet многократно ускоряет обработку текстов по сравнению со списком."
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "37. Qidiruv Tarixi — LinkedHashSet Bilan Tartibli Noyob So'rovlar (Slide 15)",
      "en": "37. Search History — Preserving Insertion Order with LinkedHashSet (Slide 15)",
      "ru": "37. История поиска — Сохранение порядка с LinkedHashSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 15: 'HashSet' elementlar tartibini kafolatlamaydi (tartibsiz). Ammo 'LinkedHashSet' ham noyoblikni saqlaydi, ham kiritilgan tartibni ('keeps insertion order') xotirada tutadi! Qidiruv so'rovlari kiritilgan tartibda dublikatsiz saqlansin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SearchHistory' sinfini e'lon qiling: 'private java.util.Set<String> queries = new java.util.LinkedHashSet<>();'.\n2. 'addQuery(String q)' metodida qo'shing.\n3. 'printHistory()' metodida for-each siklida so'rovlarni birin-ketin ekranga chiqaring.\n4. 'Main' metodida \"Java\", \"Spring\", \"Java\" (takroriy), \"Docker\" so'rovlarini kiriting.\n5. 'sh.printHistory()' chaqiring.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 15: LinkedHashSet retains elements in the exact order they were inserted without duplicates.\n\n📋 Steps\n1. Create SearchHistory with private Set<String> queries = new LinkedHashSet<>().\n2. Provide addQuery(q) and printHistory().\n3. In Main, add Java, Spring, Java, Docker and invoke printHistory().",
      "ru": "📖 Контекст\nСлайд 15 лекции 4: LinkedHashSet сохраняет порядок вставки без дубликатов.\n\n📋 Шаги\n1. Создайте SearchHistory с Set<String> queries = new LinkedHashSet<>().\n2. Реализуйте addQuery и printHistory.\n3. В main добавьте Java, Spring, Java, Docker и вызовите printHistory."
    },
    "requirements": {
      "classes": [
        "SearchHistory",
        "Main"
      ],
      "methods": [
        "addQuery",
        "printHistory"
      ],
      "keywords": [
        "LinkedHashSet",
        "Set"
      ]
    },
    "starterCode": "class SearchHistory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashSet;\nimport java.util.Set;\n\nclass SearchHistory {\n    private Set<String> queries = new LinkedHashSet<>();\n\n    public void addQuery(String q) {\n        queries.add(q);\n    }\n\n    public void printHistory() {\n        for (String q : queries) {\n            System.out.println(\"Qidiruv: \" + q);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SearchHistory sh = new SearchHistory();\n        sh.addQuery(\"Java\");\n        sh.addQuery(\"Spring\");\n        sh.addQuery(\"Java\");\n        sh.addQuery(\"Docker\");\n        sh.printHistory();\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedHashSet ikki tomonlama bog'langan ro'yxat bilan xesh-jadvalni birlashtirib, qo'shilish tartibini to'liq saqlaydi.",
      "en": "LinkedHashSet integrates a doubly-linked bucket chain to maintain deterministic insertion order.",
      "ru": "LinkedHashSet поддерживает детерминированный порядок вставки благодаря связному списку элементов."
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "38. Sayohat Qilingan Shaharlar — LinkedHashSet Bilan Qadamma-qadam Shaharlar",
      "en": "38. City Itinerary — Preserving Traversal Sequence via LinkedHashSet",
      "ru": "38. Маршрут городов — Сохранение последовательности через LinkedHashSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSayyoh tashrif buyurgan shaharlarini kiritilgan tartibida saqlashi, lekin qayta tashrif buyurilgan shaharlar dublikat bo'lmasligi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TravelLog' sinfini e'lon qiling: 'private java.util.Set<String> visited = new java.util.LinkedHashSet<>();'.\n2. 'visitCity(String city)' metodida qo'shing.\n3. 'getVisitedCities()' metodida 'visited' ni qaytaring.\n4. 'Main' metodida \"Toshkent\", \"Buxoro\", \"Toshkent\", \"Samarqand\" shaharlarini qo'shing.\n5. Konsolga ro'yxatni: \"Shaharlar: [Toshkent, Buxoro, Samarqand]\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTravel logs record unique cities visited while preserving the order of arrival.\n\n📋 Steps\n1. Create TravelLog with Set<String> visited = new LinkedHashSet<>().\n2. Provide visitCity and getVisitedCities.\n3. In Main, add Tashkent, Bukhara, Tashkent, Samarkand and print set.",
      "ru": "📖 Контекст\nЖурнал путешествий сохраняет уникальные города в порядке их посещения.\n\n📋 Шаги\n1. Создайте TravelLog с LinkedHashSet.\n2. Реализуйте visitCity и getVisitedCities.\n3. В main выведите: \"Shaharlar: [Toshkent, Buxoro, Samarqand]\"."
    },
    "requirements": {
      "classes": [
        "TravelLog",
        "Main"
      ],
      "methods": [
        "visitCity",
        "getVisitedCities"
      ],
      "keywords": [
        "LinkedHashSet",
        "Set"
      ]
    },
    "starterCode": "class TravelLog {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashSet;\nimport java.util.Set;\n\nclass TravelLog {\n    private Set<String> visited = new LinkedHashSet<>();\n\n    public void visitCity(String city) {\n        visited.add(city);\n    }\n\n    public Set<String> getVisitedCities() {\n        return visited;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TravelLog log = new TravelLog();\n        log.visitCity(\"Toshkent\");\n        log.visitCity(\"Buxoro\");\n        log.visitCity(\"Toshkent\");\n        log.visitCity(\"Samarqand\");\n        System.out.println(\"Shaharlar: \" + log.getVisitedCities());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Toshkent qayta qo'shilganda LinkedHashSet uni rad etadi va boshlang'ich pozitsiyasini o'zgartirmaydi.",
      "en": "LinkedHashSet ignores re-insertions without relocating the original element position.",
      "ru": "Повторное добавление игнорируется, не меняя первоначальную позицию элемента."
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "39. Maqola Teglari — HashSet Bilan Eng Yuqori Tezlikda Teglar Saqlash",
      "en": "39. Article Tags — Maximum Performance Tag Set with HashSet",
      "ru": "39. Теги статей — Максимальная производительность с HashSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar tartib muhim bo'lmasa, eng tezkor va kam xotira sarflaydigan tanlov 'HashSet' hisoblanadi. Maqola teglarini boshqaring.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'TagManager' sinfini e'lon qiling: 'private java.util.Set<String> tags = new java.util.HashSet<>();'.\n2. 'addTag(String t)' va 'getTagCount()' metodlarini yozing.\n3. 'Main' metodida \"java\", \"oop\", \"java\" teglarini qo'shing.\n4. Konsolga: \"Noyob teglar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWhen ordering is irrelevant, standard HashSet provides the fastest execution speed and minimal footprint.\n\n📋 Steps\n1. Create TagManager with Set<String> tags = new HashSet<>().\n2. Provide addTag and getTagCount.\n3. In Main, add \"java\", \"oop\", \"java\" and print: \"Noyob teglar soni: 2\".",
      "ru": "📖 Контекст\nЕсли порядок не важен, обычный HashSet обеспечивает наивысшую скорость работы.\n\n📋 Шаги\n1. Создайте TagManager с HashSet.\n2. Реализуйте addTag и getTagCount.\n3. В main выведите: \"Noyob teglar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "TagManager",
        "Main"
      ],
      "methods": [
        "addTag",
        "getTagCount"
      ],
      "keywords": [
        "HashSet",
        "Set"
      ]
    },
    "starterCode": "class TagManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass TagManager {\n    private Set<String> tags = new HashSet<>();\n\n    public void addTag(String tag) {\n        tags.add(tag);\n    }\n\n    public int getTagCount() {\n        return tags.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TagManager tm = new TagManager();\n        tm.addTag(\"java\");\n        tm.addTag(\"oop\");\n        tm.addTag(\"java\");\n        System.out.println(\"Noyob teglar soni: \" + tm.getTagCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "HashSet xotira sarfi va tezlik bo'yicha eng samarali Set implementatsiyasidir.",
      "en": "HashSet remains the canonical default Set implementation for general purpose high-performance lookups.",
      "ru": "HashSet — стандартная и наиболее производительная реализация Set общего назначения."
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "40. Saralangan Ballar — TreeSet Bilan Avtomatik O'sish Tartibi (Slide 15)",
      "en": "40. Sorted Scoreboard — Automatic Natural Ordering in TreeSet (Slide 15)",
      "ru": "40. Таблица рекордов — Автоматическая сортировка в TreeSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 15: 'TreeSet keeps elements sorted' — 'TreeSet' qizil-qora daraxt (Red-Black Tree) algoritmi asosida ishlaydi va har qanday kiritilgan elementni avtomatik o'sish tartibida saralab boradi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ScoreBoard' sinfini e'lon qiling: 'private java.util.Set<Integer> scores = new java.util.TreeSet<>();'.\n2. 'addScore(int s)' metodida qo'shing.\n3. 'getScores()' metodida 'scores' to'plamini qaytaring.\n4. 'Main' metodida 85, 45, 95, 70 ballarini tartibsiz kiriting.\n5. Konsolga: \"Saralangan ballar: [45, 70, 85, 95]\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 15: TreeSet automatically stores elements in ascending natural sorted order.\n\n📋 Steps\n1. Create ScoreBoard with private Set<Integer> scores = new TreeSet<>().\n2. Provide addScore and getScores.\n3. In Main, add 85, 45, 95, 70 and print sorted output.",
      "ru": "📖 Контекст\nСлайд 15 лекции 4: TreeSet автоматически упорядочивает элементы по возрастанию.\n\n📋 Шаги\n1. Создайте ScoreBoard с Set<Integer> scores = new TreeSet<>().\n2. Реализуйте addScore и getScores.\n3. В main добавьте 85, 45, 95, 70. Выведите: \"Saralangan ballar: [45, 70, 85, 95]\"."
    },
    "requirements": {
      "classes": [
        "ScoreBoard",
        "Main"
      ],
      "methods": [
        "addScore",
        "getScores"
      ],
      "keywords": [
        "TreeSet",
        "Set"
      ]
    },
    "starterCode": "class ScoreBoard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.TreeSet;\n\nclass ScoreBoard {\n    private Set<Integer> scores = new TreeSet<>();\n\n    public void addScore(int s) {\n        scores.add(s);\n    }\n\n    public Set<Integer> getScores() {\n        return scores;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ScoreBoard sb = new ScoreBoard();\n        sb.addScore(85);\n        sb.addScore(45);\n        sb.addScore(95);\n        sb.addScore(70);\n        System.out.println(\"Saralangan ballar: \" + sb.getScores());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "TreeSet kiritilgan qiymatlarni O(log n) vaqtda daraxtga joylashtiradi va doimo saralangan holda ushlab turadi.",
      "en": "TreeSet utilizes balanced binary search trees, ensuring O(log n) insertions and ordered retrieval.",
      "ru": "TreeSet использует сбалансированное бинарное дерево, гарантируя вставку за O(log n) и сортировку."
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "41. Alifbo Lug'ati — TreeSet Bilan So'zlarni Alifbo Bo'yicha Saralash",
      "en": "41. Alphabetical Dictionary — Lexicographical Ordering with TreeSet",
      "ru": "41. Алфавитный словарь — Лексикографическая сортировка в TreeSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSo'zlar lug'atga har xil tartibda kiritilganda, 'TreeSet<String>' ularni avtomatik tarzda alifbo bo'yicha (A dan Z gacha) saralaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Glossary' sinfini e'lon qiling: 'private java.util.Set<String> terms = new java.util.TreeSet<>();'.\n2. 'addTerm(String t)' va 'getTerms()' metodlarini yozing.\n3. 'Main' metodida \"Polymorphism\", \"Abstraction\", \"Encapsulation\" terminlarini qo'shing.\n4. Konsolga: \"Alifbo tartibidagi terminlar: [Abstraction, Encapsulation, Polymorphism]\" deb chop eting.",
      "en": "📖 Real-World Scenario\nGlossary indexes arrange unique keywords alphabetically using TreeSet string comparison.\n\n📋 Steps\n1. Create Glossary with private Set<String> terms = new TreeSet<>().\n2. Provide addTerm and getTerms.\n3. In Main, insert terms and verify alphabetical ordering.",
      "ru": "📖 Контекст\nГлоссарий упорядочивает термины по алфавиту с помощью TreeSet.\n\n📋 Шаги\n1. Создайте Glossary с TreeSet<String>.\n2. Реализуйте addTerm и getTerms.\n3. В main добавьте Polymorphism, Abstraction, Encapsulation и выведите результат."
    },
    "requirements": {
      "classes": [
        "Glossary",
        "Main"
      ],
      "methods": [
        "addTerm",
        "getTerms"
      ],
      "keywords": [
        "TreeSet",
        "Set"
      ]
    },
    "starterCode": "class Glossary {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.Set;\nimport java.util.TreeSet;\n\nclass Glossary {\n    private Set<String> terms = new TreeSet<>();\n\n    public void addTerm(String term) {\n        terms.add(term);\n    }\n\n    public Set<String> getTerms() {\n        return terms;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Glossary g = new Glossary();\n        g.addTerm(\"Polymorphism\");\n        g.addTerm(\"Abstraction\");\n        g.addTerm(\"Encapsulation\");\n        System.out.println(\"Alifbo tartibidagi terminlar: \" + g.getTerms());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "String sinfi Comparable interfeysiga ega bo'lgani sababli TreeSet ularni leksikografik (alifbo) tartibda joylashtiradi.",
      "en": "Strings implement Comparable<String>, enabling TreeSet to sort words lexicographically.",
      "ru": "Класс String реализует Comparable, позволяя TreeSet сортировать слова по алфавиту."
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "42. Parvoz Balandliklari — TreeSet.first() va last() Ekstremumlarini Topish",
      "en": "42. Aviation Altitudes — Boundary Inspection via TreeSet.first() and last()",
      "ru": "42. Высоты полета — Поиск минимума и максимума с TreeSet.first() и last()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'TreeSet' o'ziga xos 'first()' (eng kichik) va 'last()' (eng katta) metodlariga ega bo'lib, eng past va eng yuqori parvoz balandliklarini O(1) da beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'FlightAltitudes' sinfini e'lon qiling: 'private java.util.TreeSet<Integer> altitudes = new java.util.TreeSet<>();'.\n2. 'addAltitude(int a)', 'getLowest()' ('altitudes.first()'), va 'getHighest()' ('altitudes.last()') metodlarini yozing.\n3. 'Main' metodida 10000, 3000, 12000, 8000 metr balandliklarni qo'shing.\n4. Konsolga: \"Eng past: 3000 m | Eng yuqori: 12000 m\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAviation altitude trackers query minimum and maximum corridors using TreeSet first() and last().\n\n📋 Steps\n1. Create FlightAltitudes with private TreeSet<Integer> altitudes.\n2. Implement addAltitude, getLowest() (first()), and getHighest() (last()).\n3. In Main, add altitudes and print boundaries.",
      "ru": "📖 Контекст\nДиспетчер высот определяет минимальный и максимальный эшелон через first() и last().\n\n📋 Шаги\n1. Создайте FlightAltitudes с TreeSet<Integer>.\n2. Реализуйте getLowest (first()) и getHighest (last()).\n3. В main выведите: \"Eng past: 3000 m | Eng yuqori: 12000 m\"."
    },
    "requirements": {
      "classes": [
        "FlightAltitudes",
        "Main"
      ],
      "methods": [
        "addAltitude",
        "getLowest",
        "getHighest"
      ],
      "keywords": [
        "TreeSet",
        "first()",
        "last()"
      ]
    },
    "starterCode": "class FlightAltitudes {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.TreeSet;\n\nclass FlightAltitudes {\n    private TreeSet<Integer> altitudes = new TreeSet<>();\n\n    public void addAltitude(int altitude) {\n        altitudes.add(altitude);\n    }\n\n    public int getLowest() {\n        return altitudes.first();\n    }\n\n    public int getHighest() {\n        return altitudes.last();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightAltitudes fa = new FlightAltitudes();\n        fa.addAltitude(10000);\n        fa.addAltitude(3000);\n        fa.addAltitude(12000);\n        fa.addAltitude(8000);\n        System.out.println(\"Eng past: \" + fa.getLowest() + \" m | Eng yuqori: \" + fa.getHighest() + \" m\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "NavigableSet interfeysi tufayli TreeSet minimal va maksimal elementlarni qo'shimcha saralashsiz darhol taqdim etadi.",
      "en": "TreeSet implements NavigableSet, granting instant retrieval of lowest and highest boundary values.",
      "ru": "TreeSet реализует интерфейс NavigableSet, предоставляя мгновенный доступ к граничным значениям."
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "43. Noyob IP Manzillar — Set Bo'ylab for-each Siklida Aylanish",
      "en": "43. Unique IP Registry — Iterating Set with for-each Loop",
      "ru": "43. Уникальные IP-адреса — Итерация по Set через цикл for-each"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'Set' to'plamida indeks yo'q (ya'ni 'get(i)' metodi mavjud emas!). Shu sababli Set elementlarini faqat for-each sikli ('for (String ip : ipSet)') orqali ko'rib chiqish mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'IpTracker' sinfini e'lon qiling: 'public void printAllIps(java.util.Set<String> ips)' metodi for-each siklida har bir manzilni konsolga chiqarsin.\n2. 'Main' metodida 'Set<String> set = new HashSet<>();' ochib, \"192.168.1.1\", \"10.0.0.1\" manzillarini qo'shing.\n3. 'IpTracker tracker = new IpTracker(); tracker.printAllIps(set);' chaqiring.",
      "en": "📖 Real-World Scenario\nBecause Sets lack indexed get(i) accessors, traversing requires enhanced for-each iteration.\n\n📋 Steps\n1. Create IpTracker with printAllIps(Set<String> ips) using for-each.\n2. In Main, populate HashSet and print each IP address.",
      "ru": "📖 Контекст\nВ коллекциях Set нет индексации get(i), поэтому обход возможен только через цикл for-each.\n\n📋 Шаги\n1. Создайте IpTracker с методом printAllIps(Set<String> ips).\n2. В main заполните HashSet и вызовите метод для вывода адресов."
    },
    "requirements": {
      "classes": [
        "IpTracker",
        "Main"
      ],
      "methods": [
        "printAllIps"
      ],
      "keywords": [
        "for (String",
        "Set"
      ]
    },
    "starterCode": "class IpTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass IpTracker {\n    public void printAllIps(Set<String> ips) {\n        for (String ip : ips) {\n            System.out.println(\"Tashrif buyurgan IP: \" + ip);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        IpTracker tracker = new IpTracker();\n        Set<String> set = new HashSet<>();\n        set.add(\"192.168.1.1\");\n        set.add(\"10.0.0.1\");\n        tracker.printAllIps(set);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Set elementlarini indekslash mumkin emasligi sababli, for-each uning ichki Iterator mexanizmidan foydalanadi.",
      "en": "Sets are unindexed; enhanced loops leverage the underlying Iterator transparently.",
      "ru": "В Set отсутствуют индексы; цикл for-each прозрачно использует встроенный Iterator."
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "44. Toifalar Formatlagichi — Set Elementlarini Birlashtiruvchi Matn Qilish",
      "en": "44. Category Formatter — Joining Set Elements into Delimited String",
      "ru": "44. Форматирование категорий — Объединение элементов Set в строку"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nInternet do'konidagi noyob kategoriyalar to'plamini for-each siklida aylanib, chiroyli ro'yxat matni hosil qiling.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CategoryFormatter' sinfini e'lon qiling: 'public String formatCategories(java.util.Set<String> cats)' metodini yozing.\n2. Har bir kategoriyani \"[Kategoriya]\" ko'rinishida birlashtiring.\n3. 'Main' metodida \"Elektronika\", \"Kiyim\" kategoriyalarini qo'shing.\n4. Formatlangan natijani konsolga chop eting.",
      "en": "📖 Real-World Scenario\nE-commerce category badges are generated by iterating through unique tag sets.\n\n📋 Steps\n1. Create CategoryFormatter with formatCategories(Set<String> cats).\n2. Concatenate tags into a formatted string.\n3. In Main, test with sample categories and print summary.",
      "ru": "📖 Контекст\nФорматирование набора категорий интернет-магазина в строку.\n\n📋 Шаги\n1. Создайте CategoryFormatter с методом formatCategories(Set<String> cats).\n2. Объедините элементы через цикл for-each.\n3. В main выведите отформатированные категории."
    },
    "requirements": {
      "classes": [
        "CategoryFormatter",
        "Main"
      ],
      "methods": [
        "formatCategories"
      ],
      "keywords": [
        "for (String",
        "Set"
      ]
    },
    "starterCode": "class CategoryFormatter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass CategoryFormatter {\n    public String formatCategories(Set<String> cats) {\n        StringBuilder sb = new StringBuilder();\n        for (String c : cats) {\n            sb.append(\"[\").append(c).append(\"] \");\n        }\n        return sb.toString().trim();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CategoryFormatter cf = new CategoryFormatter();\n        Set<String> set = new HashSet<>();\n        set.add(\"Elektronika\");\n        set.add(\"Kiyim\");\n        System.out.println(\"Toifalar: \" + cf.formatCategories(set));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "StringBuilder yordamida to'plam elementlarini samarali matnga yig'ish resurslarni tejaydi.",
      "en": "Pairing StringBuilder with Set iteration achieves high memory efficiency.",
      "ru": "Использование StringBuilder в цикле по Set обеспечивает высокую производительность."
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "45. Inventarizatsiya — Set<String> SKU Kodlari Bo'yicha Qidiruv",
      "en": "45. Stock Inventory — SKU Matching via Set Iteration",
      "ru": "45. Инвентаризация — Поиск префикса артикулов в Set"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmbor tizimida barcha noyob tovar artikullari 'Set<String>' da saqlanadi. Berilgan prefiks bilan boshlanuvchi (masalan \"UZUM-\") tovarlar sonini sanang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InventoryAuditor' sinfini e'lon qiling: 'public int countWithPrefix(java.util.Set<String> skus, String prefix)' metodini yozing.\n2. for-each siklida 'sku.startsWith(prefix)' bo'lganlarni sanang.\n3. 'Main' metodida \"UZUM-01\", \"UZUM-02\", \"OTHER-99\" artikullarini qo'shing.\n4. Konsolga: \"UZUM tovarlari soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWarehouse auditors count matching prefix tags across unique SKU sets.\n\n📋 Steps\n1. Create InventoryAuditor with countWithPrefix(Set<String> skus, String prefix).\n2. In Main, populate set and count items starting with \"UZUM-\".\n3. Print: \"UZUM tovarlari soni: 2\".",
      "ru": "📖 Контекст\nАудит склада подсчитывает количество артикулов с заданным префиксом.\n\n📋 Шаги\n1. Создайте InventoryAuditor с методом countWithPrefix.\n2. В main добавьте UZUM-01, UZUM-02, OTHER-99 и подсчитайте товары с префиксом \"UZUM-\".\n3. Выведите: \"UZUM tovarlari soni: 2\"."
    },
    "requirements": {
      "classes": [
        "InventoryAuditor",
        "Main"
      ],
      "methods": [
        "countWithPrefix"
      ],
      "keywords": [
        "for (String",
        "Set",
        "startsWith"
      ]
    },
    "starterCode": "class InventoryAuditor {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashSet;\nimport java.util.Set;\n\nclass InventoryAuditor {\n    public int countWithPrefix(Set<String> skus, String prefix) {\n        int count = 0;\n        for (String sku : skus) {\n            if (sku.startsWith(prefix)) {\n                count++;\n            }\n        }\n        return count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        InventoryAuditor auditor = new InventoryAuditor();\n        Set<String> skus = new HashSet<>();\n        skus.add(\"UZUM-01\");\n        skus.add(\"UZUM-02\");\n        skus.add(\"OTHER-99\");\n        System.out.println(\"UZUM tovarlari soni: \" + auditor.countWithPrefix(skus, \"UZUM-\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Noyob to'plam bo'ylab shartli filtrlash bajarish biznes hisobotlarini tezkor shakllantiradi.",
      "en": "Conditional scanning across unique item sets drives reliable audit reports.",
      "ru": "Фильтрация по уникальному набору обеспечивает надежное формирование аудиторских отчетов."
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "46. Bank Elektron Navbati — Queue FIFO Tamoyili (Lecture 4 Slide 27-30)",
      "en": "46. Bank Queue — Queue FIFO Principle (Slide 27-30)",
      "ru": "46. Электронная очередь банка — Принцип FIFO в Queue"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 27-30: 'Queue holds elements waiting to be processed, usually in FIFO order: first in, first out'. Bank filialida mijozlar chipta olib navbatga turadi: birinchi kelgan mijoz birinchi bo'lib xizmat oladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BankQueue' sinfini e'lon qiling: 'private java.util.Queue<String> tickets = new java.util.ArrayDeque<>();'.\n2. 'public void takeTicket(String ticket)' da 'tickets.offer(ticket);'.\n3. 'public String serveClient()' da 'tickets.poll();' (birinchi navbatdagi mijozni olib tashlash).\n4. 'Main' metodida \"A001\", \"A002\", \"A003\" chiptalarini navbatga qo'shing.\n5. Birinchi mijozga xizmat ko'rsatib ('bq.serveClient()'), konsolga: \"Xizmat ko'rsatilmoqda: A001\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 27-30: Bank queuing engines implement FIFO via offer() and poll().\n\n📋 Steps\n1. Create BankQueue with private Queue<String> tickets = new ArrayDeque<>().\n2. Provide takeTicket(ticket) using offer and serveClient() using poll().\n3. In Main, enqueue A001, A002, A003, serve the first, and print: \"Xizmat ko'rsatilmoqda: A001\".",
      "ru": "📖 Контекст\nСлайды 27-30 лекции 4: Queue реализует принцип FIFO (первым пришел — первым обслужен).\n\n📋 Шаги\n1. Создайте BankQueue с Queue<String> tickets = new ArrayDeque<>().\n2. Реализуйте takeTicket (offer) и serveClient (poll).\n3. В main добавьте A001, A002, A003, вызовите serveClient.\n4. Выведите: \"Xizmat ko'rsatilmoqda: A001\"."
    },
    "requirements": {
      "classes": [
        "BankQueue",
        "Main"
      ],
      "methods": [
        "takeTicket",
        "serveClient"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque",
        "offer",
        "poll"
      ]
    },
    "starterCode": "class BankQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass BankQueue {\n    private Queue<String> tickets = new ArrayDeque<>();\n\n    public void takeTicket(String ticket) {\n        tickets.offer(ticket);\n    }\n\n    public String serveClient() {\n        return tickets.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankQueue bq = new BankQueue();\n        bq.takeTicket(\"A001\");\n        bq.takeTicket(\"A002\");\n        bq.takeTicket(\"A003\");\n        System.out.println(\"Xizmat ko'rsatilmoqda: \" + bq.serveClient());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "offer() quyruqqa (tail) element qo'shadi, poll() esa boshidagi (head) elementni sug'urib oladi.",
      "en": "offer() appends to the queue tail while poll() extracts from the head, implementing strict FIFO.",
      "ru": "Метод offer() добавляет в хвост очереди, а poll() извлекает из начала по принципу FIFO."
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "47. Qo'ng'iroqlar Markazi — CallCenter Navbatida Birinchi Qo'ng'iroq",
      "en": "47. Call Center — First-In First-Out Call Handling Queue",
      "ru": "47. Колл-центр — Очередь звонков по принципу FIFO"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOperatorga ulangan qo'ng'iroqlar kutish navbatida turadi. Birinchi qo'ng'iroq qilgan mijoz birinchi ulanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CallCenter' sinfini e'lon qiling: 'private java.util.Queue<String> callers = new java.util.ArrayDeque<>();'.\n2. 'public void addCaller(String phone)' da 'callers.offer(phone);'.\n3. 'public String connectNextCaller()' da 'callers.poll();'.\n4. 'Main' metodida \"+99890111\", \"+99890222\" raqamlarini qo'shing.\n5. 'connectNextCaller()' natijasini konsolga: \"Ulangan mijoz: +99890111\" deb chop eting.",
      "en": "📖 Real-World Scenario\nTelephony dispatch systems connect waiting callers in strict FIFO sequence.\n\n📋 Steps\n1. Create CallCenter with private Queue<String> callers.\n2. Implement addCaller (offer) and connectNextCaller (poll).\n3. In Main, enqueue callers and print: \"Ulangan mijoz: +99890111\".",
      "ru": "📖 Контекст\nДиспетчер телефонии соединяет абонентов в строгом порядке поступления вызовов.\n\n📋 Шаги\n1. Создайте CallCenter с Queue<String> callers.\n2. Реализуйте addCaller и connectNextCaller.\n3. В main добавьте вызовы и выведите: \"Ulangan mijoz: +99890111\"."
    },
    "requirements": {
      "classes": [
        "CallCenter",
        "Main"
      ],
      "methods": [
        "addCaller",
        "connectNextCaller"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque"
      ]
    },
    "starterCode": "class CallCenter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass CallCenter {\n    private Queue<String> callers = new ArrayDeque<>();\n\n    public void addCaller(String phone) {\n        callers.offer(phone);\n    }\n\n    public String connectNextCaller() {\n        return callers.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CallCenter cc = new CallCenter();\n        cc.addCaller(\"+99890111\");\n        cc.addCaller(\"+99890222\");\n        System.out.println(\"Ulangan mijoz: \" + cc.connectNextCaller());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Queue interfeysi yordamida navbatda turganlar adolatli va tartibli qayta ishlanadi.",
      "en": "Queues guarantee fair and ordered request processing across asynchronous channels.",
      "ru": "Очереди гарантируют справедливую и последовательную обработку запросов."
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "48. AvtoMoyka — CarWash Navbatida Avtomobillarga Xizmat Ko'rsatish",
      "en": "48. Car Wash Lane — Processing Vehicles via Queue FIFO",
      "ru": "48. Автомойка — Обслуживание автомобилей в порядке FIFO"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvtomoyka liniyasiga kirgan mashinalar navbat bilan yuviladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CarWash' sinfini e'lon qiling: 'private java.util.Queue<String> cars = new java.util.ArrayDeque<>();'.\n2. 'arriveCar(String plate)' da 'cars.offer(plate);'.\n3. 'washNextCar()' da 'cars.poll();'.\n4. 'Main' metodida \"Malibu\", \"Tracker\" avtomobillarini navbatga qo'ying.\n5. Birinchi mashinani yuvib, konsolga: \"Yuvildi: Malibu\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAutomotive service lanes process arriving vehicles in sequential queue order.\n\n📋 Steps\n1. Create CarWash with private Queue<String> cars.\n2. Implement arriveCar (offer) and washNextCar (poll).\n3. In Main, enqueue Malibu and Tracker, wash the first, and print result.",
      "ru": "📖 Контекст\nЛиния автомойки обслуживает автомобили по очереди.\n\n📋 Шаги\n1. Создайте CarWash с Queue<String> cars.\n2. Реализуйте arriveCar и washNextCar.\n3. В main выведите: \"Yuvildi: Malibu\"."
    },
    "requirements": {
      "classes": [
        "CarWash",
        "Main"
      ],
      "methods": [
        "arriveCar",
        "washNextCar"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque"
      ]
    },
    "starterCode": "class CarWash {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass CarWash {\n    private Queue<String> cars = new ArrayDeque<>();\n\n    public void arriveCar(String plate) {\n        cars.offer(plate);\n    }\n\n    public String washNextCar() {\n        return cars.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CarWash cw = new CarWash();\n        cw.arriveCar(\"Malibu\");\n        cw.arriveCar(\"Tracker\");\n        System.out.println(\"Yuvildi: \" + cw.washNextCar());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Queue har qanday xizmat ko'rsatish sohasida ketma-ketlikni avtomatlashtirishning eng qulay vositasidir.",
      "en": "Queues streamline real-world service processing without complex pointer juggling.",
      "ru": "Очереди упрощают автоматизацию процессов обслуживания без ручного управления порядком."
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "49. Printer Navbati — peek() va poll() Farqi (Lecture 4 Slide 30)",
      "en": "49. Print Queue — Discerning peek() vs poll() (Slide 30)",
      "ru": "49. Очередь печати — Различие peek() и poll()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 30: 'Key point: peek() only looks; poll() removes the head'.\n- 'peek()': navbat boshidagi elementni o'chirmasdan ko'rish.\n- 'poll()': navbat boshidagi elementni o'chirib qaytarish.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PrintQueue' sinfini e'lon qiling: 'private java.util.Queue<String> jobs = new java.util.ArrayDeque<>();'.\n2. 'addJob(String doc)' da 'jobs.offer(doc);'.\n3. 'inspectNextJob()' da 'jobs.peek();' (o'chirmaydi).\n4. 'printNextJob()' da 'jobs.poll();' (o'chiradi).\n5. 'Main' metodida \"Hujjat_1\" va \"Hujjat_2\" ni qo'shing. 'peek()' natijasini, so'ng 'poll()' natijasini ko'ring. Konsolga: \"Navbatdagi: Hujjat_1 | Chop etildi: Hujjat_1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 30: peek() inspects the head element without removal; poll() retrieves and removes it.\n\n📋 Steps\n1. Create PrintQueue with private Queue<String> jobs = new ArrayDeque<>().\n2. Implement addJob (offer), inspectNextJob (peek), and printNextJob (poll).\n3. In Main, enqueue jobs, test peek() followed by poll(), and print summary.",
      "ru": "📖 Контекст\nСлайд 30 лекции 4: метод peek() лишь просматривает головной элемент, а poll() удаляет его.\n\n📋 Шаги\n1. Создайте PrintQueue с jobs = new ArrayDeque<>().\n2. Реализуйте addJob (offer), inspectNextJob (peek), printNextJob (poll).\n3. В main выведите: \"Navbatdagi: Hujjat_1 | Chop etildi: Hujjat_1\"."
    },
    "requirements": {
      "classes": [
        "PrintQueue",
        "Main"
      ],
      "methods": [
        "addJob",
        "inspectNextJob",
        "printNextJob"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque",
        "peek",
        "poll"
      ]
    },
    "starterCode": "class PrintQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass PrintQueue {\n    private Queue<String> jobs = new ArrayDeque<>();\n\n    public void addJob(String doc) {\n        jobs.offer(doc);\n    }\n\n    public String inspectNextJob() {\n        return jobs.peek();\n    }\n\n    public String printNextJob() {\n        return jobs.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PrintQueue pq = new PrintQueue();\n        pq.addJob(\"Hujjat_1\");\n        pq.addJob(\"Hujjat_2\");\n        String peeked = pq.inspectNextJob();\n        String polled = pq.printNextJob();\n        System.out.println(\"Navbatdagi: \" + peeked + \" | Chop etildi: \" + polled);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "peek() operatsiyasidan so'ng navbat hajmi o'zgarmaydi, poll() esa o'lchamni 1 taga kamaytiradi.",
      "en": "peek() is non-destructive (queue size unchanged), while poll() mutates by extracting the head.",
      "ru": "peek() не изменяет размер очереди, тогда как poll() уменьшает его на единицу."
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "50. Restoran Buyurtmalari — peek() Bilan Oshpaz Tayyorgarligi",
      "en": "50. Kitchen Display — Inspecting Incoming Dish via peek()",
      "ru": "50. Кухонный монитор — Просмотр следующего блюда через peek()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOshpaz navbatdagi taomni boshlashdan oldin 'peek()' qilib qaysi taom ekanligini ko'radi, tayyor bo'lgach 'poll()' qilib ofitsiantga beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'KitchenQueue' sinfini e'lon qiling: 'private java.util.Queue<String> orders = new java.util.ArrayDeque<>();'.\n2. 'addOrder(String dish)', 'peekNextDish()', 'deliverNextDish()' metodlarini yozing.\n3. 'Main' metodida \"Lag'mon\" va \"Osh\" taomlarini qo'shing.\n4. 'peekNextDish()' qiling.\n5. Konsolga: \"Navbatdagi tayyorlanadigan taom: Lag'mon\" deb chop eting.",
      "en": "📖 Real-World Scenario\nKitchen display monitors inspect pending tickets with peek() before dispatching with poll().\n\n📋 Steps\n1. Create KitchenQueue with addOrder (offer), peekNextDish (peek), deliverNextDish (poll).\n2. In Main, add orders, inspect next dish, and print: \"Navbatdagi tayyorlanadigan taom: Lag'mon\".",
      "ru": "📖 Контекст\nКухонный монитор просматривает следующий заказ без его удаления с помощью peek().\n\n📋 Шаги\n1. Создайте KitchenQueue с ArrayDeque.\n2. Реализуйте addOrder, peekNextDish, deliverNextDish.\n3. В main выведите: \"Navbatdagi tayyorlanadigan taom: Lag'mon\"."
    },
    "requirements": {
      "classes": [
        "KitchenQueue",
        "Main"
      ],
      "methods": [
        "addOrder",
        "peekNextDish",
        "deliverNextDish"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque",
        "peek"
      ]
    },
    "starterCode": "class KitchenQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass KitchenQueue {\n    private Queue<String> orders = new ArrayDeque<>();\n\n    public void addOrder(String dish) {\n        orders.offer(dish);\n    }\n\n    public String peekNextDish() {\n        return orders.peek();\n    }\n\n    public String deliverNextDish() {\n        return orders.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        KitchenQueue kq = new KitchenQueue();\n        kq.addOrder(\"Lag'mon\");\n        kq.addOrder(\"Osh\");\n        System.out.println(\"Navbatdagi tayyorlanadigan taom: \" + kq.peekNextDish());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "peek() metodi navbat bo'sh bo'lganda exception tashlamaydi, shunchaki null qaytaradi.",
      "en": "Calling peek() on an empty queue safely returns null rather than throwing an exception.",
      "ru": "Вызов peek() на пустой очереди безопасно возвращает null без генерации исключения."
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "51. Xabarlar Buferi — Bo'sh Navbatda poll() ning null Qaytarishi",
      "en": "51. Message Buffer — Null-Safe Dequeuing with poll()",
      "ru": "51. Буфер сообщений — Безопасное извлечение null через poll()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXabarlar buferi bo'shab qolganida 'poll()' chaqirilsa, xatolik chiqmasdan 'null' qaytadi. 'getMessageOrNone()' metodi bo'sh bo'lsa \"Xabar yo'q\" qaytarsin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'MessageBuffer' sinfini e'lon qiling: 'private java.util.Queue<String> buffer = new java.util.ArrayDeque<>();'.\n2. 'public String getMessageOrNone()' metodida 'String m = buffer.poll(); return m != null ? m : \"Xabar yo'q\";'.\n3. 'Main' metodida bo'sh buferdan 'getMessageOrNone()' chaqiring.\n4. Konsolga: \"Bufer holati: Xabar yo'q\" deb chop eting.",
      "en": "📖 Real-World Scenario\nNull-safe message pollers safely handle empty queues without crashes.\n\n📋 Steps\n1. Create MessageBuffer with Queue<String> buffer.\n2. Implement getMessageOrNone() returning \"Xabar yo'q\" when buffer.poll() is null.\n3. In Main, test empty buffer and print status.",
      "ru": "📖 Контекст\nБезопасное извлечение из пустой очереди: poll() возвращает null вместо ошибки.\n\n📋 Шаги\n1. Создайте MessageBuffer с ArrayDeque.\n2. Реализуйте getMessageOrNone с проверкой poll() на null.\n3. В main выведите: \"Bufer holati: Xabar yo'q\"."
    },
    "requirements": {
      "classes": [
        "MessageBuffer",
        "Main"
      ],
      "methods": [
        "getMessageOrNone"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque",
        "poll"
      ]
    },
    "starterCode": "class MessageBuffer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass MessageBuffer {\n    private Queue<String> buffer = new ArrayDeque<>();\n\n    public String getMessageOrNone() {\n        String msg = buffer.poll();\n        return msg != null ? msg : \"Xabar yo'q\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MessageBuffer mb = new MessageBuffer();\n        System.out.println(\"Bufer holati: \" + mb.getMessageOrNone());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "poll() va peek() metodlari bo'sh navbatda null qaytarishi bilan remove() va element() metodlaridan (ular exception tashlaydi) ajralib turadi.",
      "en": "poll() and peek() return null on empty queues, whereas remove() and element() throw NoSuchElementException.",
      "ru": "Методы poll() и peek() возвращают null для пустой очереди, а remove() и element() выбрасывают исключение."
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "52. Kuryer Dispetcheri — ArrayDeque Bilan Navbat Hajmini Nazorat Qilish",
      "en": "52. Courier Dispatcher — Managing Queue Capacity via ArrayDeque",
      "ru": "52. Диспетчер курьеров — Контроль размера очереди в ArrayDeque"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Tezkor kuryerlar navbatida har bir topshiriq 'ArrayDeque' ga tushadi va 'size()' orqali qoldiq buyurtmalar soni kuzatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CourierDispatch' sinfini e'lon qiling: 'private java.util.Queue<String> parcels = new java.util.ArrayDeque<>();'.\n2. 'addParcel(String p)', 'dispatchNext()', 'getPendingCount()' metodlarini yozing.\n3. 'Main' metodida 3 ta posilkani qo'shing, 1 tasini yuboring ('dispatchNext()').\n4. Konsolga: \"Qolgan posilkalar soni: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLogistics hubs track pending order queues using ArrayDeque size counters.\n\n📋 Steps\n1. Create CourierDispatch with Queue<String> parcels = new ArrayDeque<>().\n2. Implement addParcel, dispatchNext (poll), and getPendingCount (size).\n3. In Main, enqueue 3 parcels, dispatch 1, and print pending count.",
      "ru": "📖 Контекст\nДиспетчер курьеров отслеживает оставшиеся заказы через size() в ArrayDeque.\n\n📋 Шаги\n1. Создайте CourierDispatch с ArrayDeque.\n2. Реализуйте addParcel, dispatchNext, getPendingCount.\n3. В main добавьте 3 посылки, отправьте 1 и выведите: \"Qolgan posilkalar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "CourierDispatch",
        "Main"
      ],
      "methods": [
        "addParcel",
        "dispatchNext",
        "getPendingCount"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque"
      ]
    },
    "starterCode": "class CourierDispatch {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass CourierDispatch {\n    private Queue<String> parcels = new ArrayDeque<>();\n\n    public void addParcel(String parcel) {\n        parcels.offer(parcel);\n    }\n\n    public String dispatchNext() {\n        return parcels.poll();\n    }\n\n    public int getPendingCount() {\n        return parcels.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CourierDispatch cd = new CourierDispatch();\n        cd.addParcel(\"Posilka_1\");\n        cd.addParcel(\"Posilka_2\");\n        cd.addParcel(\"Posilka_3\");\n        cd.dispatchNext();\n        System.out.println(\"Qolgan posilkalar soni: \" + cd.getPendingCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "ArrayDeque siklik massiv (circular array) asosida ishlaydi va LinkedList dan ham kamroq xotira sarflaydi.",
      "en": "ArrayDeque uses circular arrays, making it faster and more cache-friendly than LinkedList.",
      "ru": "ArrayDeque работает на кольцевом массиве, потребляя меньше памяти, чем LinkedList."
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "53. Yordam Xizmati — SupportDesk Navbatida Tiketlar Oqimi",
      "en": "53. Support Desk — Ticket Throughput Monitoring in ArrayDeque",
      "ru": "53. Служба поддержки — Обработка потока тикетов в ArrayDeque"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozlar qo'llab-quvvatlash xizmati barcha muammolarni navbatda qabul qilib, ketma-ket yopib boradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SupportDesk' sinfini e'lon qiling: 'private java.util.Queue<String> tickets = new java.util.ArrayDeque<>();'.\n2. 'openTicket(String t)' da 'tickets.offer(t);'.\n3. 'closeTicket()' da 'tickets.poll();'.\n4. 'hasPendingTickets()' da '!tickets.isEmpty();'.\n5. 'Main' metodida bitta tiket ochib, uni yoping. 'hasPendingTickets()' natijasini konsolga: \"Navbatda tiket bormi: false\" deb chop eting.",
      "en": "📖 Real-World Scenario\nCustomer support desks process resolution tickets sequentially, checking backlog via isEmpty().\n\n📋 Steps\n1. Create SupportDesk with openTicket, closeTicket, and hasPendingTickets.\n2. In Main, open a ticket, close it, and verify queue is empty.\n3. Print: \"Navbatda tiket bormi: false\".",
      "ru": "📖 Контекст\nСлужба поддержки закрывает тикеты по очереди, проверяя isEmpty().\n\n📋 Шаги\n1. Создайте SupportDesk с openTicket, closeTicket, hasPendingTickets.\n2. В main откройте тикет, закройте его и проверьте остаток.\n3. Выведите: \"Navbatda tiket bormi: false\"."
    },
    "requirements": {
      "classes": [
        "SupportDesk",
        "Main"
      ],
      "methods": [
        "openTicket",
        "closeTicket",
        "hasPendingTickets"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque"
      ]
    },
    "starterCode": "class SupportDesk {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass SupportDesk {\n    private Queue<String> tickets = new ArrayDeque<>();\n\n    public void openTicket(String t) {\n        tickets.offer(t);\n    }\n\n    public String closeTicket() {\n        return tickets.poll();\n    }\n\n    public boolean hasPendingTickets() {\n        return !tickets.isEmpty();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SupportDesk desk = new SupportDesk();\n        desk.openTicket(\"Parolni tiklash\");\n        desk.closeTicket();\n        System.out.println(\"Navbatda tiket bormi: \" + desk.hasPendingTickets());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Navbatning to'liq bo'shatilganini isEmpty() orqali tekshirish xatoliklardan asraydi.",
      "en": "isEmpty() prevents unintended polling on exhausted service queues.",
      "ru": "Проверка isEmpty() защищает от вызовов на пустой очереди."
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "54. Drive-Thru Kafesi — Mashinalar Navbatini Boshqarish",
      "en": "54. Drive-Thru Window — Sequential Customer Order Fulfillment",
      "ru": "54. Автокафе Drive-Thru — Последовательное обслуживание клиентов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAvto-kafe oynasida buyurtma bergan avtomobillar oynaga birma-bir yaqinlashadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'DriveThru' sinfini e'lon qiling: 'private java.util.Queue<String> cars = new java.util.ArrayDeque<>();'.\n2. 'enterDrive(String car)', 'serveCar()' va 'getQueueLength()' metodlarini yozing.\n3. 'Main' metodida 2 ta mashinani kiritib, 1 tasiga xizmat ko'rsating.\n4. Konsolga: \"Navbat uzunligi: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nDrive-thru order windows fulfill customer orders sequentially in an ArrayDeque.\n\n📋 Steps\n1. Create DriveThru with enterDrive, serveCar, and getQueueLength.\n2. In Main, enqueue 2 cars, serve 1, and print remaining queue length: 1.",
      "ru": "📖 Контекст\nОкно выдачи Drive-thru обслуживает автомобили по очереди в ArrayDeque.\n\n📋 Шаги\n1. Создайте DriveThru с enterDrive, serveCar, getQueueLength.\n2. В main добавьте 2 машины, обслужите одну и выведите остаток."
    },
    "requirements": {
      "classes": [
        "DriveThru",
        "Main"
      ],
      "methods": [
        "enterDrive",
        "serveCar",
        "getQueueLength"
      ],
      "keywords": [
        "Queue",
        "ArrayDeque"
      ]
    },
    "starterCode": "class DriveThru {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayDeque;\nimport java.util.Queue;\n\nclass DriveThru {\n    private Queue<String> cars = new ArrayDeque<>();\n\n    public void enterDrive(String car) {\n        cars.offer(car);\n    }\n\n    public String serveCar() {\n        return cars.poll();\n    }\n\n    public int getQueueLength() {\n        return cars.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DriveThru dt = new DriveThru();\n        dt.enterDrive(\"Cobalt\");\n        dt.enterDrive(\"Nexia\");\n        dt.serveCar();\n        System.out.println(\"Navbat uzunligi: \" + dt.getQueueLength());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "ArrayDeque barcha zamonaviy Java ilovalarida FIFO navbatlar uchun tavsiya etiladigan standart sinfdir.",
      "en": "ArrayDeque is the modern standard recommended implementation for Java FIFO queues.",
      "ru": "ArrayDeque — рекомендуемая стандартная реализация очередей FIFO в современном Java."
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "55. Tez Tibbiy Yordam — PriorityQueue Bilan Eng Og'ir Bemorga Xizmat (Slide 27)",
      "en": "55. Triage Emergency — PriorityQueue Severity Scheduling (Slide 27)",
      "ru": "55. Скорая помощь — Обслуживание по приоритету с PriorityQueue"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 27: 'PriorityQueue: served by priority'. Oddiy navbatda kim birinchi kelsa shu xizmat oladi, ammo kasalxonada 1-darajali (o'ta og'ir) bemor 5-darajali (yengil) bemordan kech kelsa ham birinchi navbatda qabul qilinadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'EmergencyRoom' sinfini e'lon qiling: 'private java.util.PriorityQueue<Integer> patientPriorities = new java.util.PriorityQueue<>();'.\n2. 'addPatient(int priorityScore)' da 'patientPriorities.offer(priorityScore);'.\n3. 'treatNextPatient()' da 'patientPriorities.poll();' (eng kichik son, ya'ni 1-darajali oldin chiqadi).\n4. 'Main' metodida 3 (o'rtacha), 1 (og'ir), 2 (muhim) darajalarini kiriting.\n5. 'treatNextPatient()' chaqirib, konsolga: \"Birinchi davolanadigan bemor darajasi: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 27: PriorityQueue serves elements by natural ascending priority rather than arrival time.\n\n📋 Steps\n1. Create EmergencyRoom with private PriorityQueue<Integer> patientPriorities.\n2. Provide addPatient(score) and treatNextPatient() returning poll().\n3. In Main, enqueue scores 3, 1, 2. Retrieve highest priority (lowest integer: 1).\n4. Print: \"Birinchi davolanadigan bemor darajasi: 1\".",
      "ru": "📖 Контекст\nСлайд 27 лекции 4: PriorityQueue обслуживает элементы по приоритету (натуральному порядку).\n\n📋 Шаги\n1. Создайте EmergencyRoom с PriorityQueue<Integer>.\n2. Реализуйте addPatient и treatNextPatient (poll).\n3. В main добавьте приоритеты 3, 1, 2. Выведите: \"Birinchi davolanadigan bemor darajasi: 1\"."
    },
    "requirements": {
      "classes": [
        "EmergencyRoom",
        "Main"
      ],
      "methods": [
        "addPatient",
        "treatNextPatient"
      ],
      "keywords": [
        "PriorityQueue",
        "offer",
        "poll"
      ]
    },
    "starterCode": "class EmergencyRoom {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.PriorityQueue;\n\nclass EmergencyRoom {\n    private PriorityQueue<Integer> patientPriorities = new PriorityQueue<>();\n\n    public void addPatient(int priorityScore) {\n        patientPriorities.offer(priorityScore);\n    }\n\n    public int treatNextPatient() {\n        return patientPriorities.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EmergencyRoom er = new EmergencyRoom();\n        er.addPatient(3);\n        er.addPatient(1);\n        er.addPatient(2);\n        System.out.println(\"Birinchi davolanadigan bemor darajasi: \" + er.treatNextPatient());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "PriorityQueue min-heap algoritmi bo'yicha eng kichik (eng ustuvor) raqamni birinchi o'ringa olib chiqadi.",
      "en": "PriorityQueue is backed by a min-heap, guaranteeing that lowest numerical values poll first.",
      "ru": "PriorityQueue построена на двоичной куче (min-heap), гарантируя выдачу минимального числа первым."
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "56. VIP Bank Xizmati — PriorityQueue Bilan Navbatsiz Xizmat",
      "en": "56. VIP Banking — Priority Client Queueing via PriorityQueue",
      "ru": "56. VIP Банкинг — Приоритетная очередь клиентов в PriorityQueue"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBankda VIP darajadagi mijozlar kichikroq raqamli daraja bilan (1 - Premium, 2 - Gold, 3 - Oddiy) belgilanadi va navbatsiz xizmat oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'VipBankQueue' sinfini e'lon qiling: 'private java.util.PriorityQueue<Integer> queue = new java.util.PriorityQueue<>();'.\n2. 'enqueueClient(int tier)' va 'serveNext()' metodlarini yozing.\n3. 'Main' metodida 3 (Oddiy), 2 (Gold), 1 (Premium) darajalarini qo'shing.\n4. 'serveNext()' natijasini konsolga: \"Xizmat oluvchi darajasi: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nBanks prioritize premium clientele ahead of standard patrons using PriorityQueue.\n\n📋 Steps\n1. Create VipBankQueue with PriorityQueue<Integer>.\n2. Implement enqueueClient and serveNext.\n3. In Main, add tiers 3, 2, 1 and poll highest priority.\n4. Print: \"Xizmat oluvchi darajasi: 1\".",
      "ru": "📖 Контекст\nБанк обслуживает клиентов в соответствии с уровнем лояльности через PriorityQueue.\n\n📋 Шаги\n1. Создайте VipBankQueue с PriorityQueue<Integer>.\n2. Реализуйте enqueueClient и serveNext.\n3. В main добавьте уровни 3, 2, 1 и вызовите serveNext.\n4. Выведите: \"Xizmat oluvchi darajasi: 1\"."
    },
    "requirements": {
      "classes": [
        "VipBankQueue",
        "Main"
      ],
      "methods": [
        "enqueueClient",
        "serveNext"
      ],
      "keywords": [
        "PriorityQueue"
      ]
    },
    "starterCode": "class VipBankQueue {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.PriorityQueue;\n\nclass VipBankQueue {\n    private PriorityQueue<Integer> queue = new PriorityQueue<>();\n\n    public void enqueueClient(int tier) {\n        queue.offer(tier);\n    }\n\n    public int serveNext() {\n        return queue.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VipBankQueue vbq = new VipBankQueue();\n        vbq.enqueueClient(3);\n        vbq.enqueueClient(2);\n        vbq.enqueueClient(1);\n        System.out.println(\"Xizmat oluvchi darajasi: \" + vbq.serveNext());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Kelish tartibidan qat'i nazar, PriorityQueue har doim eng yuqori darajadagi mijozni birinchi o'ringa qo'yadi.",
      "en": "Priority queues decouple service order from arrival sequence according to business priority weights.",
      "ru": "Приоритетные очереди отделяют порядок обслуживания от времени прибытия."
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "57. Samolyotga Chiqish — PriorityQueue Bilan Bortga Chiqish Navbati",
      "en": "57. Airline Boarding — Boarding Zone Prioritization via PriorityQueue",
      "ru": "57. Посадка на рейс — Приоритетная посадка пассажиров в PriorityQueue"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAviatsiyada 1-zona yo'lovchilari birinchi, so'ngra 2-zona va 3-zonalar bortga taklif etiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BoardingGate' sinfini e'lon qiling: 'private java.util.PriorityQueue<Integer> zones = new java.util.PriorityQueue<>();'.\n2. 'addBoardingZone(int z)' va 'callNextZone()' metodlarini yozing.\n3. 'Main' metodida 4, 1, 2 zonalarini qo'shing.\n4. 'callNextZone()' chaqiring.\n5. Konsolga: \"Bortga chaqirilayotgan zona: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAirport boarding gates invite passengers according to boarding zone numbers via PriorityQueue.\n\n📋 Steps\n1. Create BoardingGate with PriorityQueue<Integer> zones.\n2. Implement addBoardingZone and callNextZone.\n3. In Main, enqueue zones 4, 1, 2 and poll first.\n4. Print: \"Bortga chaqirilayotgan zona: 1\".",
      "ru": "📖 Контекст\nВыход на посадку приглашает пассажиров по зонам через PriorityQueue.\n\n📋 Шаги\n1. Создайте BoardingGate с PriorityQueue<Integer>.\n2. Реализуйте addBoardingZone и callNextZone.\n3. В main выведите: \"Bortga chaqirilayotgan zona: 1\"."
    },
    "requirements": {
      "classes": [
        "BoardingGate",
        "Main"
      ],
      "methods": [
        "addBoardingZone",
        "callNextZone"
      ],
      "keywords": [
        "PriorityQueue"
      ]
    },
    "starterCode": "class BoardingGate {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.PriorityQueue;\n\nclass BoardingGate {\n    private PriorityQueue<Integer> zones = new PriorityQueue<>();\n\n    public void addBoardingZone(int zone) {\n        zones.offer(zone);\n    }\n\n    public int callNextZone() {\n        return zones.poll();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BoardingGate gate = new BoardingGate();\n        gate.addBoardingZone(4);\n        gate.addBoardingZone(1);\n        gate.addBoardingZone(2);\n        System.out.println(\"Bortga chaqirilayotgan zona: \" + gate.callNextZone());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Aviakompaniya bortga chiqish oqimini raqamli zonalarga qarab optimallashtiradi.",
      "en": "Boarding gate logic relies on natural zone sorting to prevent airport bottlenecks.",
      "ru": "Логика посадки использует естественную сортировку зон для устранения заторов."
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "58. Dublikatlarni Tozalash — Listdan Set Yasash: new HashSet<>(list)",
      "en": "58. List Deduplication — Converting List to Set via new HashSet<>(list)",
      "ru": "58. Очистка дубликатов — Преобразование List в Set через new HashSet<>(list)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava'dagi eng mashhur va oson usul: Agar 'List<String>' ro'yxatida dublikatlar ko'p bo'lsa, ularni tozalash uchun oddiygina 'new HashSet<>(list)' konstruktoriga uzatiladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Deduplicator' sinfini e'lon qiling: 'public java.util.Set<String> removeDuplicates(java.util.List<String> list)' metodida 'return new java.util.HashSet<>(list);' qiling.\n2. 'Main' metodida 'List<String> raw = new ArrayList<>();' ochib, \"A\", \"B\", \"A\", \"C\", \"B\" elementlarini qo'shing (5 ta element).\n3. 'Deduplicator d = new Deduplicator(); Set<String> clean = d.removeDuplicates(raw);' chaqiring.\n4. Konsolga tozalangan to'plam o'lchamini: \"Noyob elementlar soni: 3\" deb chop eting.",
      "en": "📖 Real-World Scenario\nInstant deduplication idiom: Passing a duplicate-ridden List into new HashSet<>(list) purges all duplicates in one shot.\n\n📋 Steps\n1. Create Deduplicator with removeDuplicates(List<String> list) returning new HashSet<>(list).\n2. In Main, populate list with duplicates: A, B, A, C, B.\n3. Clean via deduplicator and print: \"Noyob elementlar soni: 3\".",
      "ru": "📖 Контекст\nИдиома удаления дубликатов: передача списка в конструктор new HashSet<>(list) мгновенно очищает повторы.\n\n📋 Шаги\n1. Создайте Deduplicator с методом removeDuplicates (new HashSet<>(list)).\n2. В main заполните список с дубликатами и очистите его.\n3. Выведите: \"Noyob elementlar soni: 3\"."
    },
    "requirements": {
      "classes": [
        "Deduplicator",
        "Main"
      ],
      "methods": [
        "removeDuplicates"
      ],
      "keywords": [
        "new HashSet",
        "List",
        "Set"
      ]
    },
    "starterCode": "class Deduplicator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n\nclass Deduplicator {\n    public Set<String> removeDuplicates(List<String> list) {\n        return new HashSet<>(list);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Deduplicator d = new Deduplicator();\n        List<String> raw = new ArrayList<>();\n        raw.add(\"A\");\n        raw.add(\"B\");\n        raw.add(\"A\");\n        raw.add(\"C\");\n        raw.add(\"B\");\n        Set<String> clean = d.removeDuplicates(raw);\n        System.out.println(\"Noyob elementlar soni: \" + clean.size());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "To'plamlarning nusxa konstruktori (copy constructor) bir to'plamdan ikkinchisiga tezkor va toza o'tishni ta'minlaydi.",
      "en": "Collection copy constructors provide idiomatic and high-speed interoperability across collection types.",
      "ru": "Конструктор копирования коллекций обеспечивает быструю конвертацию между типами данных."
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "59. Dublikatsiz Saralash — Listdan TreeSet Yasash: new TreeSet<>(list)",
      "en": "59. Deduplicated Sorting — Converting List to TreeSet via new TreeSet<>(list)",
      "ru": "59. Сортировка без дубликатов — Преобразование List в TreeSet"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar ro'yxatdagi elementlarni ham dublikatlardan tozalash, ham alifbo/raqam bo'yicha saralash kerak bo'lsa, uni 'new TreeSet<>(list)' ga o'tkazish kifoya!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ListSorter' sinfini e'lon qiling: 'public java.util.Set<Integer> sortAndDeduplicate(java.util.List<Integer> list)' metodida 'return new java.util.TreeSet<>(list);' qiling.\n2. 'Main' metodida 5, 2, 8, 2, 5 sonlarini qo'shing.\n3. 'TreeSet' natijasini oling.\n4. Konsolga: \"Saralangan noyob sonlar: [2, 5, 8]\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPassing a List to new TreeSet<>(list) simultaneously purges duplicates and applies natural ascending sort.\n\n📋 Steps\n1. Create ListSorter with sortAndDeduplicate(List<Integer> list) returning new TreeSet<>(list).\n2. In Main, populate list with [5, 2, 8, 2, 5] and convert.\n3. Print: \"Saralangan noyob sonlar: [2, 5, 8]\".",
      "ru": "📖 Контекст\nПередача списка в new TreeSet<>(list) одновременно удаляет дубликаты и сортирует элементы.\n\n📋 Шаги\n1. Создайте ListSorter с методом sortAndDeduplicate (new TreeSet<>(list)).\n2. В main добавьте 5, 2, 8, 2, 5 и отсортируйте.\n3. Выведите: \"Saralangan noyob sonlar: [2, 5, 8]\"."
    },
    "requirements": {
      "classes": [
        "ListSorter",
        "Main"
      ],
      "methods": [
        "sortAndDeduplicate"
      ],
      "keywords": [
        "new TreeSet",
        "List",
        "Set"
      ]
    },
    "starterCode": "class ListSorter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Set;\nimport java.util.TreeSet;\n\nclass ListSorter {\n    public Set<Integer> sortAndDeduplicate(List<Integer> list) {\n        return new TreeSet<>(list);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ListSorter ls = new ListSorter();\n        List<Integer> raw = new ArrayList<>();\n        raw.add(5);\n        raw.add(2);\n        raw.add(8);\n        raw.add(2);\n        raw.add(5);\n        System.out.println(\"Saralangan noyob sonlar: \" + ls.sortAndDeduplicate(raw));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Bitta qatorda ham saralash, ham noyoblikka erishish Java Collections Framework ning eng katta afzalliklaridan biridir.",
      "en": "Combining deduplication and sorting into one constructor call is a signature strength of the Java Collections Framework.",
      "ru": "Объединение удаления дубликатов и сортировки в одном вызове — ключевое преимущество коллекций Java."
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: Set va Queue To'plamlari (Noyoblik va FIFO)",
    "sector": "31-60",
    "title": {
      "uz": "60. Indeksga Qaytish — Setdan ArrayList Yasash: new ArrayList<>(set)",
      "en": "60. Restoring Indexing — Converting Set to ArrayList via new ArrayList<>(set)",
      "ru": "60. Возврат к индексам — Преобразование Set в ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n2-Sektorning yakuniy topshirig'i: 'Set' dan dublikatlar tozalangach, yana indeksli murojaat ('get(0)') imkoniyatiga ega bo'lish uchun to'plam 'new ArrayList<>(set)' orqali yana ro'yxatga aylantiriladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CollectionConverter' sinfini e'lon qiling: 'public java.util.List<String> convertSetToList(java.util.Set<String> set)' metodida 'return new java.util.ArrayList<>(set);' qiling.\n2. 'Main' metodida 'Set<String> set = new LinkedHashSet<>();' ochib, \"Toshkent\", \"Samarqand\" qo'shing.\n3. 'List<String> list = conv.convertSetToList(set);' qilib ro'yxatga o'giring.\n4. Endi 'list.get(0)' orqali birinchi elementni oling.\n5. Konsolga: \"Indeks bo'yicha birinchi: Toshkent\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSector 2 finale: Converting an unindexed Set back into an indexed ArrayList via new ArrayList<>(set).\n\n📋 Steps\n1. Create CollectionConverter with convertSetToList(Set<String> set) returning new ArrayList<>(set).\n2. In Main, populate LinkedHashSet with Tashkent and Samarkand.\n3. Convert to ArrayList, invoke get(0), and print: \"Indeks bo'yicha birinchi: Toshkent\".",
      "ru": "📖 Контекст\nФинал Сектора 2: преобразование Set обратно в индексированный ArrayList.\n\n📋 Шаги\n1. Создайте CollectionConverter с convertSetToList (new ArrayList<>(set)).\n2. В main преобразуйте LinkedHashSet в List.\n3. Вызовите get(0) и выведите: \"Indeks bo'yicha birinchi: Toshkent\"."
    },
    "requirements": {
      "classes": [
        "CollectionConverter",
        "Main"
      ],
      "methods": [
        "convertSetToList"
      ],
      "keywords": [
        "new ArrayList",
        "Set",
        "List",
        "get(0)"
      ]
    },
    "starterCode": "class CollectionConverter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.LinkedHashSet;\nimport java.util.List;\nimport java.util.Set;\n\nclass CollectionConverter {\n    public List<String> convertSetToList(Set<String> set) {\n        return new ArrayList<>(set);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CollectionConverter conv = new CollectionConverter();\n        Set<String> set = new LinkedHashSet<>();\n        set.add(\"Toshkent\");\n        set.add(\"Samarqand\");\n        List<String> list = conv.convertSetToList(set);\n        System.out.println(\"Indeks bo'yicha birinchi: \" + list.get(0));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Sektor 2 (31–60) to'liq yakunlandi! Set, HashSet, LinkedHashSet, TreeSet, Queue, ArrayDeque, PriorityQueue va to'plamlar konvertatsiyasi mukammal o'zlashtirildi.",
      "en": "Sector 2 complete! Mastering Set, HashSet, LinkedHashSet, TreeSet, Queue, ArrayDeque, PriorityQueue, and interoperability.",
      "ru": "Сектор 2 завершен! Освоены Set, HashSet, LinkedHashSet, TreeSet, Queue, ArrayDeque, PriorityQueue и конвертация коллекций."
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "61. Ombor Skladi — Map<String, Integer> Bilan SKU va Qoldiqlar (Lecture 4 Slide 21-24)",
      "en": "61. Warehouse Inventory — Map<String, Integer> for SKU and Stock (Slide 21-24)",
      "ru": "61. Складской учет — Map<String, Integer> для артикула и остатка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 21-24: 'Map stores key -> value pairs. Each key is unique; values may repeat. put() with an existing key overwrites the old value'. Omborda tovar artikuli (SKU) kalit bo'lsa, uning qoldiq soni qiymat hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WarehouseStock' sinfini e'lon qiling: 'private java.util.Map<String, Integer> stock = new java.util.HashMap<>();'.\n2. 'public void updateStock(String sku, int quantity)' metodida 'stock.put(sku, quantity);' qiling.\n3. 'public int getStock(String sku)' metodida 'stock.get(sku);' qaytaring.\n4. 'Main' metodida \"SKU-101\" uchun 25 kiriting, so'ngra yana \"SKU-101\" uchun 30 qilib yangilang (Slide 24).\n5. Konsolga: \"Yangilangan qoldiq: 30\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 21-24: Maps associate unique keys with values. Re-inserting an existing key replaces its previous value.\n\n📋 Steps\n1. Create WarehouseStock with private Map<String, Integer> stock = new HashMap<>().\n2. Implement updateStock(sku, qty) and getStock(sku).\n3. In Main, put SKU-101 with 25, then overwrite with 30.\n4. Print: \"Yangilangan qoldiq: 30\".",
      "ru": "📖 Контекст\nСлайды 21-24 лекции 4: Map связывает уникальный ключ со значением. Повторный put() перезаписывает старое значение.\n\n📋 Шаги\n1. Создайте WarehouseStock с Map<String, Integer> stock = new HashMap<>().\n2. Реализуйте updateStock и getStock.\n3. В main добавьте SKU-101 (25), затем обновите на 30. Выведите: \"Yangilangan qoldiq: 30\"."
    },
    "requirements": {
      "classes": [
        "WarehouseStock",
        "Main"
      ],
      "methods": [
        "updateStock",
        "getStock"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "put",
        "get"
      ]
    },
    "starterCode": "class WarehouseStock {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass WarehouseStock {\n    private Map<String, Integer> stock = new HashMap<>();\n\n    public void updateStock(String sku, int quantity) {\n        stock.put(sku, quantity);\n    }\n\n    public int getStock(String sku) {\n        return stock.get(sku);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WarehouseStock ws = new WarehouseStock();\n        ws.updateStock(\"SKU-101\", 25);\n        ws.updateStock(\"SKU-101\", 30);\n        System.out.println(\"Yangilangan qoldiq: \" + ws.getStock(\"SKU-101\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Map da har bir kalit noyob bo'ladi, agar mavjud kalit bilan put() qilinsa, eski qiymat yangisiga almashtiriladi.",
      "en": "Keys in a Map are strictly unique; calling put() with a known key overwrites the existing value mapping.",
      "ru": "Ключи в Map уникальны; повторный вызов put() с существующим ключом перезаписывает значение."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "62. Narxlar Katalogi — Map<String, Double> Bilan Mahsulot Narxlarini Boshqarish",
      "en": "62. Price Catalog — Managing Product Prices via Map<String, Double>",
      "ru": "62. Каталог цен — Управление ценами товаров через Map<String, Double>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market narxlar katalogida har bir tovar nomi kalit, uning narxi esa qiymat bo'lib saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PriceCatalog' sinfini e'lon qiling: 'private java.util.Map<String, Double> prices = new java.util.HashMap<>();'.\n2. 'setPrice(String product, double price)' da 'prices.put(product, price);'.\n3. 'getPrice(String product)' da 'prices.get(product);' qaytarsin.\n4. 'Main' metodida \"Noutbuk\" uchun 8000000.0, \"Sichqoncha\" uchun 150000.0 narxini qo'ying.\n5. Konsolga: \"Noutbuk narxi: 8000000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nE-commerce retail catalogs store price sheets as item-to-price key-value mappings.\n\n📋 Steps\n1. Create PriceCatalog with Map<String, Double> prices = new HashMap<>().\n2. Implement setPrice and getPrice.\n3. In Main, assign prices and retrieve Laptop price.\n4. Print: \"Noutbuk narxi: 8000000.0 so'm\".",
      "ru": "📖 Контекст\nКаталог цен хранит соответствие названия товара и его стоимости.\n\n📋 Шаги\n1. Создайте PriceCatalog с Map<String, Double>.\n2. Реализуйте setPrice и getPrice.\n3. В main задайте цены и выведите цену ноутбука: \"Noutbuk narxi: 8000000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "PriceCatalog",
        "Main"
      ],
      "methods": [
        "setPrice",
        "getPrice"
      ],
      "keywords": [
        "Map",
        "HashMap"
      ]
    },
    "starterCode": "class PriceCatalog {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass PriceCatalog {\n    private Map<String, Double> prices = new HashMap<>();\n\n    public void setPrice(String product, double price) {\n        prices.put(product, price);\n    }\n\n    public double getPrice(String product) {\n        return prices.get(product);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceCatalog pc = new PriceCatalog();\n        pc.setPrice(\"Noutbuk\", 8000000.0);\n        pc.setPrice(\"Sichqoncha\", 150000.0);\n        System.out.println(\"Noutbuk narxi: \" + pc.getPrice(\"Noutbuk\") + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Tovar nomi orqali narxni darhol topish (O(1)) savdo tizimlarining eng tezkor qismidir.",
      "en": "Key-based lookup enables instant O(1) price resolution at customer checkout.",
      "ru": "Поиск цены по названию за время O(1) ускоряет работу кассового терминала."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "63. O'yinchi Ballari — Map<String, Integer> Bilan Foydalanuvchi Reytingi",
      "en": "63. Gamer Points — Tracking Player Scores in Map<String, Integer>",
      "ru": "63. Очки игроков — Учет баллов в Map<String, Integer>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOnlayn o'yinda har bir o'yinchining nikneymi kalit, uning to'plagan ballari esa qiymat sifatida saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ScoreRegistry' sinfini e'lon qiling: 'private java.util.Map<String, Integer> userScores = new java.util.HashMap<>();'.\n2. 'recordScore(String user, int score)' da 'userScores.put(user, score);'.\n3. 'getUserScore(String user)' da 'userScores.get(user);'.\n4. 'Main' metodida \"ProGamer\" uchun 1500 ball yozing.\n5. Konsolga: \"ProGamer ballari: 1500\" deb chop eting.",
      "en": "📖 Real-World Scenario\nMultiplayer games record user points directly against player nicknames in a HashMap.\n\n📋 Steps\n1. Create ScoreRegistry with Map<String, Integer> userScores.\n2. Implement recordScore and getUserScore.\n3. In Main, record score for \"ProGamer\" and print status.",
      "ru": "📖 Контекст\nИгровой сервер сохраняет никнеймы и набранные баллы в Map<String, Integer>.\n\n📋 Шаги\n1. Создайте ScoreRegistry с Map<String, Integer>.\n2. Реализуйте recordScore и getUserScore.\n3. В main запишите баллы для ProGamer и выведите: \"ProGamer ballari: 1500\"."
    },
    "requirements": {
      "classes": [
        "ScoreRegistry",
        "Main"
      ],
      "methods": [
        "recordScore",
        "getUserScore"
      ],
      "keywords": [
        "Map",
        "HashMap"
      ]
    },
    "starterCode": "class ScoreRegistry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass ScoreRegistry {\n    private Map<String, Integer> userScores = new HashMap<>();\n\n    public void recordScore(String user, int score) {\n        userScores.put(user, score);\n    }\n\n    public int getUserScore(String user) {\n        return userScores.get(user);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ScoreRegistry sr = new ScoreRegistry();\n        sr.recordScore(\"ProGamer\", 1500);\n        System.out.println(\"ProGamer ballari: \" + sr.getUserScore(\"ProGamer\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Map foydalanuvchi ma'lumotlarini tezkor xotirada ushlab turish uchun eng qulay vositadir.",
      "en": "Associative arrays provide straightforward in-memory player state management.",
      "ru": "Ассоциативные массивы упрощают хранение игрового состояния пользователей в памяти."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "64. Xavfsiz Qoldiq — getOrDefault() Bilan NullPointerException dan Saqlanish (Slide 24)",
      "en": "64. Safe Stock Lookup — Null Safety with getOrDefault() (Slide 24)",
      "ru": "64. Безопасный поиск остатка — Защита от null через getOrDefault()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 24: 'int q = stock.getOrDefault(\"SKU-300\", 0);' — Agar so'ralgan kalit xaritada yo'q bo'lsa, oddiy 'get()' 'null' qaytaradi (bu esa unboxing paytida NullPointerException xatosini keltirib chiqaradi). 'getOrDefault()' esa ko'rsatilgan standart qiymatni (masalan 0) xavfsiz qaytaradi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SafeStockFinder' sinfini e'lon qiling: 'private java.util.Map<String, Integer> inventory = new java.util.HashMap<>();'.\n2. 'addStock(String sku, int qty)' metodida 'inventory.put(sku, qty);' qiling.\n3. 'public int findStock(String sku)' metodida 'return inventory.getOrDefault(sku, 0);' qiling.\n4. 'Main' metodida faqat \"SKU-100\" uchun 15 kiriting. So'ngra mavjud bo'lmagan \"SKU-999\" ni qidiring.\n5. Konsolga: \"Mavjud bo'lmagan tovar qoldig'i: 0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 24: getOrDefault() avoids NullPointerException on missing keys by returning a fallback default.\n\n📋 Steps\n1. Create SafeStockFinder with private Map<String, Integer> inventory.\n2. Implement addStock and findStock using inventory.getOrDefault(sku, 0).\n3. In Main, query missing \"SKU-999\" and print: \"Mavjud bo'lmagan tovar qoldig'i: 0\".",
      "ru": "📖 Контекст\nСлайд 24 лекции 4: getOrDefault() возвращает значение по умолчанию при отсутствии ключа, предотвращая NPE.\n\n📋 Шаги\n1. Создайте SafeStockFinder с Map<String, Integer>.\n2. Реализуйте findStock через inventory.getOrDefault(sku, 0).\n3. В main запросите несуществующий SKU-999. Выведите: \"Mavjud bo'lmagan tovar qoldig'i: 0\"."
    },
    "requirements": {
      "classes": [
        "SafeStockFinder",
        "Main"
      ],
      "methods": [
        "addStock",
        "findStock"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class SafeStockFinder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass SafeStockFinder {\n    private Map<String, Integer> inventory = new HashMap<>();\n\n    public void addStock(String sku, int qty) {\n        inventory.put(sku, qty);\n    }\n\n    public int findStock(String sku) {\n        return inventory.getOrDefault(sku, 0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SafeStockFinder finder = new SafeStockFinder();\n        finder.addStock(\"SKU-100\", 15);\n        System.out.println(\"Mavjud bo'lmagan tovar qoldig'i: \" + finder.findStock(\"SKU-999\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "getOrDefault() metodi null tekshiruvlarini qisqartirib, kodni ancha toza va mustahkam qiladi.",
      "en": "getOrDefault() streamlines fallback branching without noisy if-null boilerplate.",
      "ru": "getOrDefault() исключает громоздкие проверки на null, делая код чистым и безопасным."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "65. Valyuta Kursi — getOrDefault() Bilan Standart Kursni Qaytarish",
      "en": "65. Currency Rates — Fallback Conversion via getOrDefault()",
      "ru": "65. Курсы валют — Возврат курса по умолчанию через getOrDefault()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nValyuta konvertorida noma'lum valyuta so'ralsa, tizim to'xtab qolmasdan 1.0 standart koeffitsiyentini qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CurrencyRates' sinfini e'lon qiling: 'private java.util.Map<String, Double> rates = new java.util.HashMap<>();'.\n2. 'setRate(String curr, double rate)' da 'rates.put(curr, rate);'.\n3. 'getRate(String curr)' da 'rates.getOrDefault(curr, 1.0);' qaytarsin.\n4. 'Main' metodida \"USD\" uchun 12800.0 kiriting, so'ngra \"EUR\" (kiritilmagan) kursini oling.\n5. Konsolga: \"Noma'lum valyuta kursi: 1.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFinancial currency converters return baseline multiplier 1.0 on unrecognized currency codes.\n\n📋 Steps\n1. Create CurrencyRates with Map<String, Double> rates.\n2. Implement setRate and getRate using rates.getOrDefault(curr, 1.0).\n3. In Main, query missing \"EUR\" and print: \"Noma'lum valyuta kursi: 1.0\".",
      "ru": "📖 Контекст\nКонвертер валют возвращает базовый коэффициент 1.0 для неизвестных валют.\n\n📋 Шаги\n1. Создайте CurrencyRates с Map<String, Double>.\n2. Реализуйте getRate через rates.getOrDefault(curr, 1.0).\n3. В main запросите неизвестную валюту EUR. Выведите: \"Noma'lum valyuta kursi: 1.0\"."
    },
    "requirements": {
      "classes": [
        "CurrencyRates",
        "Main"
      ],
      "methods": [
        "setRate",
        "getRate"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class CurrencyRates {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass CurrencyRates {\n    private Map<String, Double> rates = new HashMap<>();\n\n    public void setRate(String curr, double rate) {\n        rates.put(curr, rate);\n    }\n\n    public double getRate(String curr) {\n        return rates.getOrDefault(curr, 1.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CurrencyRates cr = new CurrencyRates();\n        cr.setRate(\"USD\", 12800.0);\n        System.out.println(\"Noma'lum valyuta kursi: \" + cr.getRate(\"EUR\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Valyuta amaliyotlarida getOrDefault() orqali sukut bo'yicha qiymat belgilash kutilmagan to'xtashlarning oldini oladi.",
      "en": "Default values guard calculations against undefined rate states.",
      "ru": "Значение по умолчанию защищает финансовые вычисления от сбоев."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "66. Foydalanuvchi Sozlamalari — getOrDefault() Bilan Standart Sozlama",
      "en": "66. App Settings — Fallback User Preferences with getOrDefault()",
      "ru": "66. Настройки приложения — Возврат настроек по умолчанию через getOrDefault()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nIlova sozlamalarida foydalanuvchi o'zgartirmagan parametrlar uchun standart qiymat (\"dark\", \"uz\") qaytariladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AppSettings' sinfini e'lon qiling: 'private java.util.Map<String, String> settings = new java.util.HashMap<>();'.\n2. 'setSetting(String key, String val)' da 'settings.put(key, val);'.\n3. 'getSetting(String key, String defaultVal)' da 'settings.getOrDefault(key, defaultVal);'.\n4. 'Main' metodida 'getSetting(\"theme\", \"dark\")' chaqiring.\n5. Konsolga: \"Tanlangan mavzu: dark\" deb chop eting.",
      "en": "📖 Real-World Scenario\nApplication preference stores fall back to system defaults when configuration keys are absent.\n\n📋 Steps\n1. Create AppSettings with Map<String, String> settings.\n2. Implement setSetting and getSetting(key, defaultVal).\n3. In Main, query absent \"theme\" with default \"dark\".\n4. Print: \"Tanlangan mavzu: dark\".",
      "ru": "📖 Контекст\nНастройки приложения возвращают значение по умолчанию для не заданных параметров.\n\n📋 Шаги\n1. Создайте AppSettings с Map<String, String>.\n2. Реализуйте getSetting(key, defaultVal) через getOrDefault.\n3. В main выведите: \"Tanlangan mavzu: dark\"."
    },
    "requirements": {
      "classes": [
        "AppSettings",
        "Main"
      ],
      "methods": [
        "setSetting",
        "getSetting"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class AppSettings {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass AppSettings {\n    private Map<String, String> settings = new HashMap<>();\n\n    public void setSetting(String key, String val) {\n        settings.put(key, val);\n    }\n\n    public String getSetting(String key, String defaultVal) {\n        return settings.getOrDefault(key, defaultVal);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AppSettings app = new AppSettings();\n        System.out.println(\"Tanlangan mavzu: \" + app.getSetting(\"theme\", \"dark\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Konfiguratsiyalarni boshqarishda getOrDefault() orqali moslashuvchan arxitektura barpo etiladi.",
      "en": "Flexible preference frameworks rely on getOrDefault to establish reliable default states.",
      "ru": "Гибкая система конфигурации использует getOrDefault для обеспечения стабильных значений по умолчанию."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "67. Autentifikatsiya — containsKey() Bilan Foydalanuvchi Mavjudligini Tekshirish",
      "en": "67. Authentication — Inspecting User Existence via containsKey()",
      "ru": "67. Аутентификация — Проверка существования пользователя через containsKey()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLogin tizimida foydalanuvchi kiritgan nikneymning mavjudligini tekshirish uchun 'map.containsKey(username)' ishlatiladi (O(1) tezlikda ishlaydi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AuthManager' sinfini e'lon qiling: 'private java.util.Map<String, String> users = new java.util.HashMap<>();'.\n2. 'addUser(String username, String passHash)' metodida qo'shing.\n3. 'public boolean userExists(String username)' metodida 'return users.containsKey(username);' qiling.\n4. 'Main' metodida \"admin\" foydalanuvchisini qo'shing.\n5. 'auth.userExists(\"admin\")' ni tekshirib, konsolga: \"Foydalanuvchi mavjud: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLogin portals verify account handle registration via constant-time containsKey() checks.\n\n📋 Steps\n1. Create AuthManager with private Map<String, String> users = new HashMap<>().\n2. Provide addUser and userExists returning users.containsKey(username).\n3. In Main, add \"admin\" and print: \"Foydalanuvchi mavjud: true\".",
      "ru": "📖 Контекст\nСервис авторизации проверяет наличие логина в системе через containsKey().\n\n📋 Шаги\n1. Создайте AuthManager с Map<String, String>.\n2. Реализуйте userExists (users.containsKey(username)).\n3. В main добавьте admin и выведите: \"Foydalanuvchi mavjud: true\"."
    },
    "requirements": {
      "classes": [
        "AuthManager",
        "Main"
      ],
      "methods": [
        "addUser",
        "userExists"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "containsKey"
      ]
    },
    "starterCode": "class AuthManager {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass AuthManager {\n    private Map<String, String> users = new HashMap<>();\n\n    public void addUser(String username, String passHash) {\n        users.put(username, passHash);\n    }\n\n    public boolean userExists(String username) {\n        return users.containsKey(username);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuthManager auth = new AuthManager();\n        auth.addUser(\"admin\", \"hash123\");\n        System.out.println(\"Foydalanuvchi mavjud: \" + auth.userExists(\"admin\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "containsKey() metodi kalit xaritada bor yoki yo'qligini O(1) vaqtda tekshiradi.",
      "en": "containsKey() evaluates key presence in immediate O(1) time complexity.",
      "ru": "containsKey() проверяет наличие ключа за константное время O(1)."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "68. Chegirma Kuponlari — containsKey() Bilan Aksiya Kodini Tekshirish",
      "en": "68. Coupon Engine — Verifying Promo Existence via containsKey()",
      "ru": "68. Скидочные купоны — Проверка промокода через containsKey()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum kassa modulida kiritilgan promokod amal qiluvchi aksiyalar xaritasida mavjudmi yoki yo'qligi tekshiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CouponEngine' sinfini e'lon qiling: 'private java.util.Map<String, Double> coupons = new java.util.HashMap<>();'.\n2. 'addCoupon(String code, double discountPct)' va 'hasCoupon(String code)' metodlarini yozing.\n3. 'Main' metodida \"UZUM2026\" uchun 0.10 chegirma qo'shing.\n4. 'hasCoupon(\"UZUM2026\")' natijasini tekshiring.\n5. Konsolga: \"Kupon mavjud: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPromotional voucher engines test voucher eligibility using containsKey().\n\n📋 Steps\n1. Create CouponEngine with Map<String, Double> coupons.\n2. Implement addCoupon and hasCoupon using containsKey.\n3. In Main, verify \"UZUM2026\" and print: \"Kupon mavjud: true\".",
      "ru": "📖 Контекст\nМодуль промокодов проверяет действие купона через containsKey().\n\n📋 Шаги\n1. Создайте CouponEngine с Map<String, Double>.\n2. Реализуйте hasCoupon (coupons.containsKey).\n3. В main выведите: \"Kupon mavjud: true\"."
    },
    "requirements": {
      "classes": [
        "CouponEngine",
        "Main"
      ],
      "methods": [
        "addCoupon",
        "hasCoupon"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "containsKey"
      ]
    },
    "starterCode": "class CouponEngine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass CouponEngine {\n    private Map<String, Double> coupons = new HashMap<>();\n\n    public void addCoupon(String code, double discountPct) {\n        coupons.put(code, discountPct);\n    }\n\n    public boolean hasCoupon(String code) {\n        return coupons.containsKey(code);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CouponEngine engine = new CouponEngine();\n        engine.addCoupon(\"UZUM2026\", 0.10);\n        System.out.println(\"Kupon mavjud: \" + engine.hasCoupon(\"UZUM2026\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "containsKey() tekshiruvi orqali mavjud bo'lmagan kupon uchun chegirma hisoblashning oldi olinadi.",
      "en": "containsKey() guards pricing logic from calculating discounts on invalid vouchers.",
      "ru": "containsKey() предотвращает применение скидок по несуществующим купонам."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "69. Telefon Daftarchasi — containsKey() Bilan Kontaktni Qidirish",
      "en": "69. Contacts Directory — Contact Discovery via containsKey()",
      "ru": "69. Телефонная книга — Поиск контакта через containsKey()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTelefon kitobida ism bo'yicha kontakt bor-yo'qligi tekshiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PhoneBook' sinfini e'lon qiling: 'private java.util.Map<String, String> contacts = new java.util.HashMap<>();'.\n2. 'addContact(String name, String phone)' va 'hasContact(String name)' metodlarini yozing.\n3. 'Main' metodida \"Ali\" kontaktini qo'shing.\n4. 'pb.hasContact(\"Ali\")' ni tekshiring.\n5. Konsolga: \"Kontakt topildimi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nContacts lookup verifies contact registration via containsKey().\n\n📋 Steps\n1. Create PhoneBook with Map<String, String> contacts.\n2. Implement addContact and hasContact.\n3. In Main, add \"Ali\" and print: \"Kontakt topildimi: true\".",
      "ru": "📖 Контекст\nТелефонная книга проверяет наличие контакта через containsKey().\n\n📋 Шаги\n1. Создайте PhoneBook с Map<String, String>.\n2. Реализуйте addContact и hasContact.\n3. В main выведите: \"Kontakt topildimi: true\"."
    },
    "requirements": {
      "classes": [
        "PhoneBook",
        "Main"
      ],
      "methods": [
        "addContact",
        "hasContact"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "containsKey"
      ]
    },
    "starterCode": "class PhoneBook {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass PhoneBook {\n    private Map<String, String> contacts = new HashMap<>();\n\n    public void addContact(String name, String phone) {\n        contacts.put(name, phone);\n    }\n\n    public boolean hasContact(String name) {\n        return contacts.containsKey(name);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PhoneBook pb = new PhoneBook();\n        pb.addContact(\"Ali\", \"+998901234567\");\n        System.out.println(\"Kontakt topildimi: \" + pb.hasContact(\"Ali\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Telefon daftarchasidagi qidiruv nom bo'yicha darhol bajariladi.",
      "en": "Name-based key lookup provides optimal user directory performance.",
      "ru": "Поиск по имени в телефонной книге выполняется мгновенно."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "70. Sessiyalar Menejeri — remove(key) Bilan Foydalanuvchini Tizimdan Chiqarish",
      "en": "70. Session Manager — User Logout Handling via remove(key)",
      "ru": "70. Менеджер сессий — Завершение сессии через remove(key)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nFoydalanuvchi tizimdan chiqqanida (Logout), uning xavfsizlik tokeni sessiyalar xaritasidan 'sessions.remove(token)' orqali o'chiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SessionStore' sinfini e'lon qiling: 'private java.util.Map<String, String> sessions = new java.util.HashMap<>();'.\n2. 'createSession(String token, String username)' metodida qo'shing.\n3. 'terminateSession(String token)' metodida 'sessions.remove(token);' qiling.\n4. 'getActiveCount()' metodida 'sessions.size()' qaytarsin.\n5. 'Main' metodida 2 ta sessiya ochib, 1 tasini bekor qiling. Konsolga: \"Faol sessiyalar soni: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWeb security engines invalidate user authorization tokens via remove(token).\n\n📋 Steps\n1. Create SessionStore with private Map<String, String> sessions = new HashMap<>().\n2. Implement createSession, terminateSession (remove), and getActiveCount (size).\n3. In Main, open 2 sessions, terminate 1, and print active count: 1.",
      "ru": "📖 Контекст\nУдаление токена сессии пользователя при выходе из системы через remove(key).\n\n📋 Шаги\n1. Создайте SessionStore с Map<String, String>.\n2. Реализуйте createSession, terminateSession (remove) и getActiveCount.\n3. В main откройте 2 сессии, закройте 1 и выведите: \"Faol sessiyalar soni: 1\"."
    },
    "requirements": {
      "classes": [
        "SessionStore",
        "Main"
      ],
      "methods": [
        "createSession",
        "terminateSession",
        "getActiveCount"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "remove"
      ]
    },
    "starterCode": "class SessionStore {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass SessionStore {\n    private Map<String, String> sessions = new HashMap<>();\n\n    public void createSession(String token, String username) {\n        sessions.put(token, username);\n    }\n\n    public void terminateSession(String token) {\n        sessions.remove(token);\n    }\n\n    public int getActiveCount() {\n        return sessions.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SessionStore store = new SessionStore();\n        store.createSession(\"tok-1\", \"user1\");\n        store.createSession(\"tok-2\", \"user2\");\n        store.terminateSession(\"tok-1\");\n        System.out.println(\"Faol sessiyalar soni: \" + store.getActiveCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "remove(key) metodi kalit va unga bog'langan qiymatni xaritadan to'liq o'chiradi.",
      "en": "remove(key) purges both the key and associated value entry completely.",
      "ru": "remove(key) полностью удаляет запись ключа и связанного с ним значения."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "71. Savatcha Tovarini O'chirish — Mapdan Tovarni remove(sku) Bilan Chiqarish",
      "en": "71. Cart Item Removal — Purging Item from Map via remove(sku)",
      "ru": "71. Удаление товара из корзины — Очистка через remove(sku)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXaridor savatchasidagi tovardan voz kechsa, 'cart.remove(sku)' orqali tovar savatchadan olib tashlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CartRegistry' sinfini e'lon qiling: 'private java.util.Map<String, Integer> items = new java.util.HashMap<>();'.\n2. 'addItem(String sku, int qty)', 'removeItem(String sku)' ('items.remove(sku)'), 'getItemCount()' ('items.size()') metodlarini yozing.\n3. 'Main' metodida \"SKU-A\" va \"SKU-B\" ni qo'shing.\n4. \"SKU-A\" ni o'chiring.\n5. Konsolga: \"Savatchadagi tovarlar xili: 1\" deb chop eting.",
      "en": "📖 Real-World Scenario\nOnline shopping carts delete cancelled lines via remove(sku).\n\n📋 Steps\n1. Create CartRegistry with Map<String, Integer> items.\n2. Implement addItem, removeItem (remove), and getItemCount (size).\n3. In Main, add two items, remove one, and print: \"Savatchadagi tovarlar xili: 1\".",
      "ru": "📖 Контекст\nКорзина интернет-магазина удаляет отмененную позицию с помощью remove(sku).\n\n📋 Шаги\n1. Создайте CartRegistry с Map<String, Integer>.\n2. Реализуйте addItem, removeItem, getItemCount.\n3. В main добавьте 2 товара, удалите один и выведите остаток."
    },
    "requirements": {
      "classes": [
        "CartRegistry",
        "Main"
      ],
      "methods": [
        "addItem",
        "removeItem",
        "getItemCount"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "remove"
      ]
    },
    "starterCode": "class CartRegistry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass CartRegistry {\n    private Map<String, Integer> items = new HashMap<>();\n\n    public void addItem(String sku, int qty) {\n        items.put(sku, qty);\n    }\n\n    public void removeItem(String sku) {\n        items.remove(sku);\n    }\n\n    public int getItemCount() {\n        return items.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CartRegistry cr = new CartRegistry();\n        cr.addItem(\"SKU-A\", 2);\n        cr.addItem(\"SKU-B\", 1);\n        cr.removeItem(\"SKU-A\");\n        System.out.println(\"Savatchadagi tovarlar xili: \" + cr.getItemCount());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "remove(key) operatsiyasi xarita hajmini (size) bittaga qisqartiradi.",
      "en": "Executing remove(key) decreases map size deterministically by 1.",
      "ru": "Выполнение remove(key) уменьшает размер Map ровно на единицу."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "72. Kesh Xotira — clear() Bilan Xaritadagi Barcha Ma'lumotlarni Tozalash",
      "en": "72. Cache Management — Purging All Entries with clear()",
      "ru": "72. Управление кэшем — Полная очистка Map через clear()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKesh xotirasi to'lib ketganda yoki qayta ishga tushirilganda 'map.clear()' yordamida barcha yozuvlar bir lahzada tozalanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AppCache' sinfini e'lon qiling: 'private java.util.Map<String, String> cache = new java.util.HashMap<>();'.\n2. 'putCache(String k, String v)' da qo'shing.\n3. 'flushCache()' metodida 'cache.clear();' qiling.\n4. 'isEmpty()' metodida 'cache.isEmpty();' qaytarsin.\n5. 'Main' metodida ma'lumot soling, so'ng 'flushCache()' chaqiring. Konsolga: \"Kesh tozalandimi: true\" deb chop eting.",
      "en": "📖 Real-World Scenario\nApplication cache stores purge stale key-value data via clear().\n\n📋 Steps\n1. Create AppCache with Map<String, String> cache.\n2. Implement putCache, flushCache (clear), and isEmpty.\n3. In Main, populate cache, flush, and print: \"Kesh tozalandimi: true\".",
      "ru": "📖 Контекст\nОчистка кэша приложения через метод clear().\n\n📋 Шаги\n1. Создайте AppCache с Map<String, String>.\n2. Реализуйте putCache, flushCache (clear) и isEmpty.\n3. В main добавьте данные, очистите кэш и выведите: \"Kesh tozalandimi: true\"."
    },
    "requirements": {
      "classes": [
        "AppCache",
        "Main"
      ],
      "methods": [
        "putCache",
        "flushCache",
        "isEmpty"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "clear",
        "isEmpty"
      ]
    },
    "starterCode": "class AppCache {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass AppCache {\n    private Map<String, String> cache = new HashMap<>();\n\n    public void putCache(String k, String v) {\n        cache.put(k, v);\n    }\n\n    public void flushCache() {\n        cache.clear();\n    }\n\n    public boolean isEmpty() {\n        return cache.isEmpty();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AppCache ac = new AppCache();\n        ac.putCache(\"key1\", \"val1\");\n        ac.flushCache();\n        System.out.println(\"Kesh tozalandimi: \" + ac.isEmpty());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "clear() xarita ichidagi barcha kalit va qiymatlarni tezkor xotiradan tozalaydi.",
      "en": "clear() purges all internal hash table entries safely in one call.",
      "ru": "clear() очищает все внутренние записи хеш-таблицы за один вызов."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "73. Yetkazish Manzillari — LinkedHashMap Bilan Tartibli Saqlash (Seminar 4 Ex 5)",
      "en": "73. Delivery Addresses — LinkedHashMap Insertion Order (Seminar 4 Ex 5)",
      "ru": "73. Адреса доставки — Сохранение порядка в LinkedHashMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 4 13-sahifasi (Exercise 5): 'private Map<String, String> deliveryAddresses = new LinkedHashMap<>();'.\nMijoz o'zining yetkazish manzillarini (\"home\", \"office\", \"parents\") saqlaganda, LinkedHashMap ularni aynan qo'shilgan tartibida saqlaydi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerAddresses' sinfini e'lon qiling: 'private java.util.Map<String, String> addresses = new java.util.LinkedHashMap<>();'.\n2. 'addAddress(String label, String address)' metodida qo'shing.\n3. 'getAddress(String label)' metodida 'addresses.get(label);' qaytaring.\n4. 'Main' metodida \"home\" (Amir Temur ko'chasi) va \"office\" (Mustaqillik ko'chasi) manzillarini qo'shing.\n5. Konsolga: \"Uy manzili: Amir Temur ko'chasi\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSeminar 4 Exercise 5: Customer multi-address management leverages LinkedHashMap to preserve entry sequence.\n\n📋 Steps\n1. Create CustomerAddresses with private Map<String, String> addresses = new LinkedHashMap<>().\n2. Implement addAddress and getAddress.\n3. In Main, save \"home\" and \"office\" addresses, printing home address.",
      "ru": "📖 Контекст\nУпражнение 5 семинара 4: хранение адресов клиента в LinkedHashMap с сохранением порядка добавления.\n\n📋 Шаги\n1. Создайте CustomerAddresses с LinkedHashMap<String, String>.\n2. Реализуйте addAddress и getAddress.\n3. В main выведите: \"Uy manzili: Amir Temur ko'chasi\"."
    },
    "requirements": {
      "classes": [
        "CustomerAddresses",
        "Main"
      ],
      "methods": [
        "addAddress",
        "getAddress"
      ],
      "keywords": [
        "LinkedHashMap",
        "Map"
      ]
    },
    "starterCode": "class CustomerAddresses {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass CustomerAddresses {\n    private Map<String, String> addresses = new LinkedHashMap<>();\n\n    public void addAddress(String label, String address) {\n        addresses.put(label, address);\n    }\n\n    public String getAddress(String label) {\n        return addresses.get(label);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CustomerAddresses ca = new CustomerAddresses();\n        ca.addAddress(\"home\", \"Amir Temur ko'chasi\");\n        ca.addAddress(\"office\", \"Mustaqillik ko'chasi\");\n        System.out.println(\"Uy manzili: \" + ca.getAddress(\"home\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedHashMap to'plami Seminar 4 da ko'rsatilganidek, mijoz manzillarini ketma-ketlikda saqlashning eng maqbul yo'lidir.",
      "en": "LinkedHashMap cleanly implements the Seminar 4 multi-address architectural requirement.",
      "ru": "LinkedHashMap идеально реализует требование семинара 4 по хранению адресов доставки."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "74. Harakatlar Xronologiyasi — LinkedHashMap Bilan Ketma-ket Qadamlar",
      "en": "74. Audit Timeline — LinkedHashMap Chronological Event Storing",
      "ru": "74. Хронология действий — Сохранение шагов в LinkedHashMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTranzaksiya qadamlari (\"Step1\", \"Step2\") xronologik tartibda bajarilishi uchun LinkedHashMap da saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WorkflowTracker' sinfini e'lon qiling: 'private java.util.Map<String, String> steps = new java.util.LinkedHashMap<>();'.\n2. 'recordStep(String stepKey, String status)' da qo'shing.\n3. 'getStepStatus(String stepKey)' da 'steps.get(stepKey);'.\n4. 'Main' metodida \"Step1\" uchun \"DONE\", \"Step2\" uchun \"PENDING\" yozing.\n5. Konsolga: \"1-qadam holati: DONE\" deb chop eting.",
      "en": "📖 Real-World Scenario\nWorkflow engines track lifecycle states chronologically using LinkedHashMap.\n\n📋 Steps\n1. Create WorkflowTracker with Map<String, String> steps = new LinkedHashMap<>().\n2. Implement recordStep and getStepStatus.\n3. In Main, record steps and print: \"1-qadam holati: DONE\".",
      "ru": "📖 Контекст\nХронология этапов бизнес-процесса сохраняется в LinkedHashMap.\n\n📋 Шаги\n1. Создайте WorkflowTracker с LinkedHashMap.\n2. Реализуйте recordStep и getStepStatus.\n3. В main выведите: \"1-qadam holati: DONE\"."
    },
    "requirements": {
      "classes": [
        "WorkflowTracker",
        "Main"
      ],
      "methods": [
        "recordStep",
        "getStepStatus"
      ],
      "keywords": [
        "LinkedHashMap",
        "Map"
      ]
    },
    "starterCode": "class WorkflowTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass WorkflowTracker {\n    private Map<String, String> steps = new LinkedHashMap<>();\n\n    public void recordStep(String stepKey, String status) {\n        steps.put(stepKey, status);\n    }\n\n    public String getStepStatus(String stepKey) {\n        return steps.get(stepKey);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WorkflowTracker wt = new WorkflowTracker();\n        wt.recordStep(\"Step1\", \"DONE\");\n        wt.recordStep(\"Step2\", \"PENDING\");\n        System.out.println(\"1-qadam holati: \" + wt.getStepStatus(\"Step1\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "LinkedHashMap kiritilgan hodisalar ketma-ketligini aynan saqlash kafolatini beradi.",
      "en": "LinkedHashMap provides predictable chronological iteration matching event insertion order.",
      "ru": "LinkedHashMap обеспечивает предсказуемый хронологический порядок итерации."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "75. Tizim Parametrlari — LinkedHashMap Bilan Tartibli Konfiguratsiya",
      "en": "75. Config Engine — Sequential Parameter Mapping with LinkedHashMap",
      "ru": "75. Конфигурация системы — Последовательные параметры в LinkedHashMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKonfiguratsiya fayli parametrlari o'qilganda, ularning o'rni buzilmasdan LinkedHashMap da saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SystemConfigMap' sinfini e'lon qiling: 'private java.util.Map<String, String> configs = new java.util.LinkedHashMap<>();'.\n2. 'setConfig(String k, String v)' da 'configs.put(k, v);'.\n3. 'getConfig(String k)' da 'configs.get(k);'.\n4. 'Main' metodida \"app.name\", \"app.version\" parametrlarini qo'ying.\n5. Konsolga: \"Ilova versiyasi: 1.0.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nConfiguration loaders preserve property sequence across application startup sequences.\n\n📋 Steps\n1. Create SystemConfigMap with LinkedHashMap<String, String>.\n2. Provide setConfig and getConfig.\n3. In Main, assign properties and print: \"Ilova versiyasi: 1.0.0\".",
      "ru": "📖 Контекст\nЗагрузчик конфигурации сохраняет последовательность параметров приложения.\n\n📋 Шаги\n1. Создайте SystemConfigMap с LinkedHashMap.\n2. Реализуйте setConfig и getConfig.\n3. В main выведите: \"Ilova versiyasi: 1.0.0\"."
    },
    "requirements": {
      "classes": [
        "SystemConfigMap",
        "Main"
      ],
      "methods": [
        "setConfig",
        "getConfig"
      ],
      "keywords": [
        "LinkedHashMap",
        "Map"
      ]
    },
    "starterCode": "class SystemConfigMap {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass SystemConfigMap {\n    private Map<String, String> configs = new LinkedHashMap<>();\n\n    public void setConfig(String k, String v) {\n        configs.put(k, v);\n    }\n\n    public String getConfig(String k) {\n        return configs.get(k);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SystemConfigMap sc = new SystemConfigMap();\n        sc.setConfig(\"app.name\", \"WIUT Portal\");\n        sc.setConfig(\"app.version\", \"1.0.0\");\n        System.out.println(\"Ilova versiyasi: \" + sc.getConfig(\"app.version\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Konfiguratsiyalarni saqlashda LinkedHashMap fayldagi tartibni xotirada aynan tiklaydi.",
      "en": "LinkedHashMap reproduces text configuration file ordering faithfully in memory.",
      "ru": "LinkedHashMap в точности сохраняет порядок параметров из конфигурационного файла."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "76. Alifbo Lug'ati — TreeMap Bilan Kalitlar Bo'yicha Avtomatik Saralash (Slide 21)",
      "en": "76. Sorted Glossary — Key Sorting via TreeMap (Slide 21)",
      "ru": "76. Сортированный глоссарий — Сортировка по ключам в TreeMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 21: 'TreeMap: sorted by key'. Qizil-qora daraxt asosida ishlovchi 'TreeMap' barcha kalitlarni avtomatik tarzda alifbo bo'yicha saralangan holda saqlaydi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SortedDictionary' sinfini e'lon qiling: 'private java.util.Map<String, String> dict = new java.util.TreeMap<>();'.\n2. 'addDefinition(String word, String def)' da 'dict.put(word, def);'.\n3. 'getDefinition(String word)' da 'dict.get(word);'.\n4. 'Main' metodida \"Polymorphism\" va \"Inheritance\" so'zlarini qo'shing.\n5. Konsolga: \"Polymorphism ma'nosi: Ko'p shakllilik\" deb chop eting.",
      "en": "📖 Real-World Scenario\nLecture 4 Slide 21: TreeMap arranges key-value pairs sorted alphabetically by keys.\n\n📋 Steps\n1. Create SortedDictionary with private Map<String, String> dict = new TreeMap<>().\n2. Implement addDefinition and getDefinition.\n3. In Main, populate dictionary and print definition for Polymorphism.",
      "ru": "📖 Контекст\nСлайд 21 лекции 4: TreeMap автоматически сортирует записи по ключам в алфавитном порядке.\n\n📋 Шаги\n1. Создайте SortedDictionary с TreeMap<String, String>.\n2. Реализуйте addDefinition и getDefinition.\n3. В main выведите: \"Polymorphism ma'nosi: Ko'p shakllilik\"."
    },
    "requirements": {
      "classes": [
        "SortedDictionary",
        "Main"
      ],
      "methods": [
        "addDefinition",
        "getDefinition"
      ],
      "keywords": [
        "TreeMap",
        "Map"
      ]
    },
    "starterCode": "class SortedDictionary {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.TreeMap;\n\nclass SortedDictionary {\n    private Map<String, String> dict = new TreeMap<>();\n\n    public void addDefinition(String word, String def) {\n        dict.put(word, def);\n    }\n\n    public String getDefinition(String word) {\n        return dict.get(word);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SortedDictionary sd = new SortedDictionary();\n        sd.addDefinition(\"Polymorphism\", \"Ko'p shakllilik\");\n        sd.addDefinition(\"Inheritance\", \"Merosxo'rlik\");\n        System.out.println(\"Polymorphism ma'nosi: \" + sd.getDefinition(\"Polymorphism\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "TreeMap kalitlarni leksikografik tartibda saralaydi va tartiblangan hisobotlar uchun juda qulaydir.",
      "en": "TreeMap sorts keys lexicographically, enabling sorted dictionary queries naturally.",
      "ru": "TreeMap сортирует ключи по алфавиту, что идеально для словарей и отчетов."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "77. Pochta Indekslari — TreeMap Bilan Indekslar Bo'yicha Saralangan Shaharlar",
      "en": "77. Postal Registry — Numeric Key Ordering via TreeMap",
      "ru": "77. Почтовый реестр — Сортировка по числовым индексам в TreeMap"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPochta xizmatida pochta indekslari raqam bo'lib, 'TreeMap<Integer, String>' orqali avtomatik kichikdan kattaga qarab saralanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PostalRegistry' sinfini e'lon qiling: 'private java.util.Map<Integer, String> postCodes = new java.util.TreeMap<>();'.\n2. 'registerCode(int code, String city)' da 'postCodes.put(code, city);'.\n3. 'getCity(int code)' da 'postCodes.get(code);'.\n4. 'Main' metodida 100000 (Toshkent), 140100 (Samarqand) indekslarini kiriting.\n5. Konsolga: \"100000 indeksi: Toshkent\" deb chop eting.",
      "en": "📖 Real-World Scenario\nPostal dispatch platforms sort delivery zones numerically using integer-keyed TreeMap.\n\n📋 Steps\n1. Create PostalRegistry with Map<Integer, String> postCodes = new TreeMap<>().\n2. Implement registerCode and getCity.\n3. In Main, register codes and print city for 100000: \"100000 indeksi: Toshkent\".",
      "ru": "📖 Контекст\nПочтовая служба сортирует зоны доставки по числовому индексу в TreeMap.\n\n📋 Шаги\n1. Создайте PostalRegistry с TreeMap<Integer, String>.\n2. Реализуйте registerCode и getCity.\n3. В main выведите: \"100000 indeksi: Toshkent\"."
    },
    "requirements": {
      "classes": [
        "PostalRegistry",
        "Main"
      ],
      "methods": [
        "registerCode",
        "getCity"
      ],
      "keywords": [
        "TreeMap",
        "Map"
      ]
    },
    "starterCode": "class PostalRegistry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.Map;\nimport java.util.TreeMap;\n\nclass PostalRegistry {\n    private Map<Integer, String> postCodes = new TreeMap<>();\n\n    public void registerCode(int code, String city) {\n        postCodes.put(code, city);\n    }\n\n    public String getCity(int code) {\n        return postCodes.get(code);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PostalRegistry pr = new PostalRegistry();\n        pr.registerCode(140100, \"Samarqand\");\n        pr.registerCode(100000, \"Toshkent\");\n        System.out.println(\"100000 indeksi: \" + pr.getCity(100000));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Sonli kalitlar bilan ishlaganda TreeMap sonlarning tabiiy o'sish tartibini ta'minlaydi.",
      "en": "Numeric TreeMap keys sort ascending in natural integer order.",
      "ru": "Числовые ключи в TreeMap автоматически сортируются по возрастанию."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "78. Taqvim Rejalari — TreeMap.firstKey() va lastKey() Ekstremumlari",
      "en": "78. Event Calendar — First and Last Timeline Keys via TreeMap",
      "ru": "78. Календарь событий — Первая и последняя даты через firstKey() и lastKey()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n'TreeMap' o'ziga xos 'firstKey()' (eng birinchi kalit) va 'lastKey()' (eng oxirgi kalit) metodlariga ega bo'lib, sana bo'yicha birinchi va oxirgi tadbirni tezkor beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'EventCalendar' sinfini e'lon qiling: 'private java.util.TreeMap<String, String> events = new java.util.TreeMap<>();'.\n2. 'addEvent(String date, String desc)' metodida qo'shing.\n3. 'getEarliestDate()' da 'events.firstKey()' va 'getLatestDate()' da 'events.lastKey()' qaytarsin.\n4. 'Main' metodida \"2026-11-20\" va \"2026-10-01\" sanalarini qo'shing.\n5. Konsolga: \"Birinchi tadbir: 2026-10-01\" deb chop eting.",
      "en": "📖 Real-World Scenario\nScheduling software retrieves timeline bounds using TreeMap firstKey() and lastKey().\n\n📋 Steps\n1. Create EventCalendar with private TreeMap<String, String> events = new TreeMap<>().\n2. Provide addEvent, getEarliestDate (firstKey), and getLatestDate (lastKey).\n3. In Main, add dates and print earliest date.",
      "ru": "📖 Контекст\nКалендарь событий находит первую и последнюю даты через firstKey() и lastKey().\n\n📋 Шаги\n1. Создайте EventCalendar с TreeMap<String, String>.\n2. Реализуйте addEvent, getEarliestDate (firstKey) и getLatestDate (lastKey).\n3. В main выведите: \"Birinchi tadbir: 2026-10-01\"."
    },
    "requirements": {
      "classes": [
        "EventCalendar",
        "Main"
      ],
      "methods": [
        "addEvent",
        "getEarliestDate",
        "getLatestDate"
      ],
      "keywords": [
        "TreeMap",
        "firstKey",
        "lastKey"
      ]
    },
    "starterCode": "class EventCalendar {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.TreeMap;\n\nclass EventCalendar {\n    private TreeMap<String, String> events = new TreeMap<>();\n\n    public void addEvent(String date, String desc) {\n        events.put(date, desc);\n    }\n\n    public String getEarliestDate() {\n        return events.firstKey();\n    }\n\n    public String getLatestDate() {\n        return events.lastKey();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        EventCalendar ec = new EventCalendar();\n        ec.addEvent(\"2026-11-20\", \"Imtihon\");\n        ec.addEvent(\"2026-10-01\", \"Dars boshlanishi\");\n        System.out.println(\"Birinchi tadbir: \" + ec.getEarliestDate());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "NavigableMap usullari (firstKey, lastKey) sana va intervallar bilan ishlashda eng qulay usuldir.",
      "en": "NavigableMap methods firstKey() and lastKey() provide boundary bounds retrieval in O(log n) time.",
      "ru": "Методы firstKey() и lastKey() интерфейса NavigableMap обеспечивают быстрый доступ к границам диапазона."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "79. Manzillar Yorlig'i — map.keySet() Orqali Kalitlar Ro'yxatini Olish (Seminar 4 Ex 5)",
      "en": "79. Address Labels — Extracting Key Set via map.keySet() (Seminar 4 Ex 5)",
      "ru": "79. Метки адресов — Получение ключей через map.keySet()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 4 13-sahifasi (Ex 5): 'Set<String> getAddressLabels() — returns a copy of the keys: new LinkedHashSet<>(deliveryAddresses.keySet());'. 'map.keySet()' xaritadagi barcha kalitlarni 'Set' to'plamida qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AddressBook' sinfini e'lon qiling: 'private java.util.Map<String, String> addresses = new java.util.LinkedHashMap<>();'.\n2. 'addAddress(String label, String addr)' da 'addresses.put(label, addr);'.\n3. 'public java.util.Set<String> getLabels()' metodida 'return addresses.keySet();' qiling.\n4. 'Main' metodida \"home\" va \"office\" manzillarini qo'shing.\n5. Konsolga yorliqlar to'plamini: \"Manzil yorliqlari: [home, office]\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSeminar 4 Exercise 5: Querying all stored address labels uses deliveryAddresses.keySet().\n\n📋 Steps\n1. Create AddressBook with private Map<String, String> addresses = new LinkedHashMap<>().\n2. Implement addAddress and getLabels() returning addresses.keySet().\n3. In Main, add \"home\" and \"office\" and print labels set: \"Manzil yorliqlari: [home, office]\".",
      "ru": "📖 Контекст\nУпражнение 5 семинара 4: метод getLabels() возвращает ключи адресов через addresses.keySet().\n\n📋 Шаги\n1. Создайте AddressBook с LinkedHashMap.\n2. Реализуйте addAddress и getLabels (addresses.keySet()).\n3. В main выведите: \"Manzil yorliqlari: [home, office]\"."
    },
    "requirements": {
      "classes": [
        "AddressBook",
        "Main"
      ],
      "methods": [
        "addAddress",
        "getLabels"
      ],
      "keywords": [
        "keySet",
        "Set",
        "Map"
      ]
    },
    "starterCode": "class AddressBook {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\nimport java.util.Set;\n\nclass AddressBook {\n    private Map<String, String> addresses = new LinkedHashMap<>();\n\n    public void addAddress(String label, String addr) {\n        addresses.put(label, addr);\n    }\n\n    public Set<String> getLabels() {\n        return addresses.keySet();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AddressBook ab = new AddressBook();\n        ab.addAddress(\"home\", \"Toshkent\");\n        ab.addAddress(\"office\", \"WIUT\");\n        System.out.println(\"Manzil yorliqlari: \" + ab.getLabels());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "keySet() metodi xaritaning barcha kalitlarini Set sifatida taqdim etadi, chunki xaritada kalitlar takrorlanmaydi.",
      "en": "keySet() returns a Set view because Map keys are guaranteed unique.",
      "ru": "keySet() возвращает представление в виде Set, так как ключи в Map уникальны."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "80. Ombor SKU Ro'yxati — for-each Siklida map.keySet() Bo'ylab Yurish",
      "en": "80. Inventory Audit — Traversing map.keySet() with for-each",
      "ru": "80. Аудит склада — Обход ключей map.keySet() через for-each"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nOmbor kodi xaritadagi barcha tovar artikullarini 'for (String sku : stock.keySet())' siklida ekranga chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StockAudit' sinfini e'lon qiling: 'public void printAllSkus(java.util.Map<String, Integer> stock)' metodida for-each siklida har bir SKU ni konsolga chiqarsin.\n2. 'Main' metodida xaritaga \"SKU-A\" (10) va \"SKU-B\" (20) qo'shing.\n3. 'StockAudit sa = new StockAudit(); sa.printAllSkus(stock);' chaqiring.",
      "en": "📖 Real-World Scenario\nWarehouse auditors inspect item catalogues by looping through map.keySet().\n\n📋 Steps\n1. Create StockAudit with printAllSkus(Map<String, Integer> stock) using for (String sku : stock.keySet()).\n2. In Main, populate map and invoke printAllSkus.",
      "ru": "📖 Контекст\nАудитор склада выводит все артикулы обходом ключей stock.keySet() в цикле for-each.\n\n📋 Шаги\n1. Создайте StockAudit с методом printAllSkus (обход stock.keySet()).\n2. В main заполните Map и вызовите printAllSkus."
    },
    "requirements": {
      "classes": [
        "StockAudit",
        "Main"
      ],
      "methods": [
        "printAllSkus"
      ],
      "keywords": [
        "keySet",
        "for (String"
      ]
    },
    "starterCode": "class StockAudit {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass StockAudit {\n    public void printAllSkus(Map<String, Integer> stock) {\n        for (String sku : stock.keySet()) {\n            System.out.println(\"Tovar artikuli: \" + sku);\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockAudit sa = new StockAudit();\n        Map<String, Integer> stock = new HashMap<>();\n        stock.add(\"SKU-A\", 10);\n        stock.put(\"SKU-A\", 10);\n        stock.put(\"SKU-B\", 20);\n        sa.printAllSkus(stock);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "keySet() bo'yicha iteratsiya qilish xaritadagi barcha kalitlarni alohida ajratib olish imkonini beradi.",
      "en": "Traversing keySet() allows operations focused exclusively on item identifiers.",
      "ru": "Обход keySet() позволяет обрабатывать только идентификаторы сущностей."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "81. Foydalanuvchilar Katalogi — keySet() Bilan Loginlar Ro'yxatini Shakllantirish",
      "en": "81. User Directory — Building Usernames Roster via keySet()",
      "ru": "81. Каталог пользователей — Формирование списка логинов через keySet()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTizim administratori xaritadagi barcha loginlarni 'keySet()' orqali olib, umumiy sonini ko'radi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'UserDirectory' sinfini e'lon qiling: 'private java.util.Map<String, String> userProfiles = new java.util.HashMap<>();'.\n2. 'addUser(String username, String role)' metodini yozing.\n3. 'public java.util.Set<String> getAllUsernames()' metodida 'userProfiles.keySet()' qaytaring.\n4. 'Main' metodida \"aziz\", \"nodira\" foydalanuvchilarini qo'shing.\n5. Konsolga: \"Jami foydalanuvchilar: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSystem administrators inspect active usernames via userProfiles.keySet().\n\n📋 Steps\n1. Create UserDirectory with private Map<String, String> userProfiles.\n2. Implement addUser and getAllUsernames returning userProfiles.keySet().\n3. In Main, add 2 users and print size: \"Jami foydalanuvchilar: 2\".",
      "ru": "📖 Контекст\nАдминистратор просматривает все логины системы через keySet().\n\n📋 Шаги\n1. Создайте UserDirectory с Map<String, String>.\n2. Реализуйте addUser и getAllUsernames.\n3. В main выведите: \"Jami foydalanuvchilar: 2\"."
    },
    "requirements": {
      "classes": [
        "UserDirectory",
        "Main"
      ],
      "methods": [
        "addUser",
        "getAllUsernames"
      ],
      "keywords": [
        "keySet",
        "Set"
      ]
    },
    "starterCode": "class UserDirectory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.Set;\n\nclass UserDirectory {\n    private Map<String, String> userProfiles = new HashMap<>();\n\n    public void addUser(String username, String role) {\n        userProfiles.put(username, role);\n    }\n\n    public Set<String> getAllUsernames() {\n        return userProfiles.keySet();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserDirectory ud = new UserDirectory();\n        ud.addUser(\"aziz\", \"Student\");\n        ud.addUser(\"nodira\", \"Lecturer\");\n        System.out.println(\"Jami foydalanuvchilar: \" + ud.getAllUsernames().size());\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "userProfiles.keySet().size() xaritadagi kalitlar sonini qaytaradi.",
      "en": "Calling size() on keySet() directly reflects the number of active distinct keys.",
      "ru": "Вызов size() на keySet() возвращает точное число уникальных ключей."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "82. Jami Qoldiq — map.values() Orqali Barcha Qiymatlarni Yig'ish",
      "en": "82. Aggregate Stock — Summing Quantities via map.values()",
      "ru": "82. Общий остаток — Суммирование значений через map.values()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar bizga kalitlar kerak bo'lmay, faqat tovarlar sonining umumiy yig'indisi kerak bo'lsa, 'for (int qty : stock.values())' siklida 'map.values()' kolleksiyasini aylanish eng to'g'ri yo'ldir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StockAggregator' sinfini e'lon qiling: 'public int calculateTotalItems(java.util.Map<String, Integer> stock)' metodini yozing.\n2. 'for (int qty : stock.values())' sikli orqali barcha qoldiqlarni jamlang.\n3. 'Main' metodida \"Noutbuk\" (5 ta), \"Telefon\" (10 ta) tovarlarini xaritaga qo'shing.\n4. Konsolga: \"Jami tovarlar soni: 15 ta\" deb chop eting.",
      "en": "📖 Real-World Scenario\nInventory aggregation engines sum quantities across all stock lines using map.values().\n\n📋 Steps\n1. Create StockAggregator with calculateTotalItems(Map<String, Integer> stock) using for (int qty : stock.values()).\n2. In Main, populate map with quantities 5 and 10.\n3. Print: \"Jami tovarlar soni: 15 ta\".",
      "ru": "📖 Контекст\nПодсчет общего количества единиц товара на складе через map.values().\n\n📋 Шаги\n1. Создайте StockAggregator с методом calculateTotalItems (обход stock.values()).\n2. В main добавьте 5 и 10 товаров, вычислите сумму.\n3. Выведите: \"Jami tovarlar soni: 15 ta\"."
    },
    "requirements": {
      "classes": [
        "StockAggregator",
        "Main"
      ],
      "methods": [
        "calculateTotalItems"
      ],
      "keywords": [
        "values()",
        "for (int"
      ]
    },
    "starterCode": "class StockAggregator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass StockAggregator {\n    public int calculateTotalItems(Map<String, Integer> stock) {\n        int total = 0;\n        for (int qty : stock.values()) {\n            total += qty;\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StockAggregator sa = new StockAggregator();\n        Map<String, Integer> stock = new HashMap<>();\n        stock.put(\"Noutbuk\", 5);\n        stock.put(\"Telefon\", 10);\n        System.out.println(\"Jami tovarlar soni: \" + sa.calculateTotalItems(stock) + \" ta\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "map.values() metodi kalitlarni chetlab o'tib, to'g'ridan-to'g'ri qiymatlar to'plamini beradi va hisoblashni tezlashtiradi.",
      "en": "map.values() bypasses keys entirely, returning a direct Collection<V> view of all values.",
      "ru": "map.values() обходит значения напрямую без лишнего обращения по ключу."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "83. Maosh Jamg'armasi — map.values() Bilan Umumiy Maoshni Jamlash",
      "en": "83. Payroll Aggregate — Totaling Compensation via map.values()",
      "ru": "83. Фонд зарплаты — Подсчет общей суммы через map.values()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuxgalter xodimlarning maosh xaritasidagi ('Map<String, Double> salaries') barcha maoshlarni 'values()' orqali jamlaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PayrollCalculator' sinfini e'lon qiling: 'public double calculateTotalPayroll(java.util.Map<String, Double> salaries)' metodini yozing.\n2. 'for (double s : salaries.values())' orqali jamlang.\n3. 'Main' metodida \"Ali\" (4000000.0) va \"Vali\" (6000000.0) maoshlarini qo'shing.\n4. Konsolga: \"Jami maosh: 10000000.0 so'm\" deb chop eting.",
      "en": "📖 Real-World Scenario\nAccountants tally total company payroll directly over salary map values.\n\n📋 Steps\n1. Create PayrollCalculator with calculateTotalPayroll(Map<String, Double> salaries).\n2. Loop over salaries.values() and sum.\n3. In Main, populate salaries and print: \"Jami maosh: 10000000.0 so'm\".",
      "ru": "📖 Контекст\nБухгалтерия суммирует фонд заработной платы через salaries.values().\n\n📋 Шаги\n1. Создайте PayrollCalculator с методом calculateTotalPayroll.\n2. В main добавьте зарплаты 4000000 и 6000000, вычислите сумму.\n3. Выведите: \"Jami maosh: 10000000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "PayrollCalculator",
        "Main"
      ],
      "methods": [
        "calculateTotalPayroll"
      ],
      "keywords": [
        "values()",
        "for (double"
      ]
    },
    "starterCode": "class PayrollCalculator {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass PayrollCalculator {\n    public double calculateTotalPayroll(Map<String, Double> salaries) {\n        double total = 0.0;\n        for (double s : salaries.values()) {\n            total += s;\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PayrollCalculator pc = new PayrollCalculator();\n        Map<String, Double> salaries = new HashMap<>();\n        salaries.put(\"Ali\", 4000000.0);\n        salaries.put(\"Vali\", 6000000.0);\n        System.out.println(\"Jami maosh: \" + pc.calculateTotalPayroll(salaries) + \" so'm\");\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "values() yordamida qiymatlarni hisoblash keraksiz map.get(k) chaqiruvlaridan xalos etadi.",
      "en": "Traversing values() eliminates redundant map.get(key) hash lookups during summation.",
      "ru": "Обход values() исключает лишние операции поиска map.get(key) при суммировании."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "84. O'rtacha Reyting — map.values() Bilan Baholarning O'rtachasini Topish",
      "en": "84. Rating Average — Evaluating Mean Value Over map.values()",
      "ru": "84. Средний рейтинг — Расчет среднего значения по map.values()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozlar tomonidan qo'yilgan reyting baholari xaritasidan o'rtacha ballni 'map.values()' orqali hisoblang.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'RatingEngine' sinfini e'lon qiling: 'public double calculateAverageRating(java.util.Map<String, Integer> ratings)' metodini yozing.\n2. Agar xarita bo'sh bo'lsa 0.0 qaytaring, aks holda yig'indini 'ratings.size()' ga bo'ling.\n3. 'Main' metodida \"Ali\" (5) va \"Vali\" (3) baholarini kiriting.\n4. Konsolga: \"O'rtacha baho: 4.0\" deb chop eting.",
      "en": "📖 Real-World Scenario\nFeedback analytics compute average review scores across map values.\n\n📋 Steps\n1. Create RatingEngine with calculateAverageRating(Map<String, Integer> ratings).\n2. Sum values and divide by ratings.size().\n3. In Main, test with scores 5 and 3, printing average: 4.0.",
      "ru": "📖 Контекст\nАналитика отзывов рассчитывает средний балл по значениям ratings.values().\n\n📋 Шаги\n1. Создайте RatingEngine с методом calculateAverageRating.\n2. В main добавьте оценки 5 и 3, вычислите среднее: \"O'rtacha baho: 4.0\"."
    },
    "requirements": {
      "classes": [
        "RatingEngine",
        "Main"
      ],
      "methods": [
        "calculateAverageRating"
      ],
      "keywords": [
        "values()",
        "size()"
      ]
    },
    "starterCode": "class RatingEngine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass RatingEngine {\n    public double calculateAverageRating(Map<String, Integer> ratings) {\n        if (ratings.isEmpty()) return 0.0;\n        int sum = 0;\n        for (int r : ratings.values()) {\n            sum += r;\n        }\n        return (double) sum / ratings.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        RatingEngine re = new RatingEngine();\n        Map<String, Integer> ratings = new HashMap<>();\n        ratings.put(\"Ali\", 5);\n        ratings.put(\"Vali\", 3);\n        System.out.println(\"O'rtacha baho: \" + re.calculateAverageRating(ratings));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "values() to'plami orqali o'rtacha qiymatni hisoblash qisqa va qulaydir.",
      "en": "Aggregating over values() computes statistical averages cleanly.",
      "ru": "Обход значений values() обеспечивает чистый расчет статистических показателей."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "85. Manzillarni Chop Etish — Map.Entry<K, V> Bilan entrySet() Sikli (Seminar 4 Ex 5)",
      "en": "85. Address Printing — Map.Entry<K, V> Traversal via entrySet() (Seminar 4 Ex 5)",
      "ru": "85. Печать адресов — Обход Map.Entry<K, V> через entrySet()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nWIUT Seminar 4 14-sahifasi: 'for (Map.Entry<String, ShippingAddress> entry : deliveryAddresses.entrySet())'.\nAgar bir vaqtning o'zida ham kalit ('entry.getKey()'), ham qiymat ('entry.getValue()') kerak bo'lsa, 'entrySet()' sikli eng samarali (O(1)) va professional usuldir!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'AddressPrinter' sinfini e'lon qiling: 'public void printAddresses(java.util.Map<String, String> addrs)' metodini yozing.\n2. 'for (java.util.Map.Entry<String, String> entry : addrs.entrySet())' siklida \"Yorliq: \" + entry.getKey() + \" | Manzil: \" + entry.getValue() deb chop eting.\n3. 'Main' metodida 'home' -> 'Amir Temur', 'office' -> 'WIUT' manzillarini xaritaga qo'shing.\n4. 'AddressPrinter ap = new AddressPrinter(); ap.printAddresses(map);' chaqiring.",
      "en": "📖 Real-World Scenario\nSeminar 4 Page 14: Iterating over map.entrySet() avoids secondary hash lookups by accessing key and value simultaneously.\n\n📋 Steps\n1. Create AddressPrinter with printAddresses(Map<String, String> addrs) using Map.Entry.\n2. In Main, populate map with home and office addresses, then invoke printAddresses.",
      "ru": "📖 Контекст\nСтраница 14 семинара 4: обход map.entrySet() предоставляет одновременный доступ к ключу и значению через Map.Entry.\n\n📋 Шаги\n1. Создайте AddressPrinter с методом printAddresses через цикл for (Map.Entry<String, String> entry : addrs.entrySet()).\n2. В main добавьте адреса home и office и вызовите метод."
    },
    "requirements": {
      "classes": [
        "AddressPrinter",
        "Main"
      ],
      "methods": [
        "printAddresses"
      ],
      "keywords": [
        "entrySet()",
        "Map.Entry",
        "getKey()",
        "getValue()"
      ]
    },
    "starterCode": "class AddressPrinter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass AddressPrinter {\n    public void printAddresses(Map<String, String> addrs) {\n        for (Map.Entry<String, String> entry : addrs.entrySet()) {\n            System.out.println(\"Yorliq: \" + entry.getKey() + \" | Manzil: \" + entry.getValue());\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AddressPrinter ap = new AddressPrinter();\n        Map<String, String> map = new LinkedHashMap<>();\n        map.put(\"home\", \"Amir Temur\");\n        map.put(\"office\", \"WIUT\");\n        ap.printAddresses(map);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "entrySet() orqali aylanish keySet() + map.get(k) juftligiga qaraganda 2 barobar tezroq ishlaydi, chunki qayta xeshlash talab etilmaydi.",
      "en": "entrySet() is twice as fast as keySet() + get(k) because it avoids redundant hash lookups.",
      "ru": "entrySet() работает вдвое быстрее, чем keySet() + get(k), исключая повторный поиск по хешу."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "86. Narxlar Ro'yxati — entrySet() Bilan Tovar va Narxini Formatlab Chop Etish",
      "en": "86. Price Sheet — Formatting Key-Value Entries with entrySet()",
      "ru": "86. Прайс-лист — Форматированный вывод пар ключ-значение через entrySet()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDo'kon kassa apparati tovar nomi va uning narxini 'entrySet()' orqali formatlab chekka chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PriceListPrinter' sinfini e'lon qiling: 'public void printPrices(java.util.Map<String, Double> priceMap)' metodini yozing.\n2. for-each siklida har bir entry uchun \"Mahsulot: \" + entry.getKey() + \" -> \" + entry.getValue() + \" so'm\" deb chop eting.\n3. 'Main' metodida \"Non\" (3000.0) va \"Choy\" (12000.0) narxlarini qo'shing.\n4. 'printPrices' metodini chaqiring.",
      "en": "📖 Real-World Scenario\nCash registers print itemized price sheets looping through Map.Entry pairs.\n\n📋 Steps\n1. Create PriceListPrinter with printPrices(Map<String, Double> priceMap) using entrySet().\n2. In Main, populate price map and call printPrices.",
      "ru": "📖 Контекст\nПечать прайс-листа через цикл по entrySet().\n\n📋 Шаги\n1. Создайте PriceListPrinter с методом printPrices(Map<String, Double> priceMap).\n2. В цикле for-each выведите пары товар -> цена.\n3. В main вызовите метод для проверки."
    },
    "requirements": {
      "classes": [
        "PriceListPrinter",
        "Main"
      ],
      "methods": [
        "printPrices"
      ],
      "keywords": [
        "entrySet()",
        "Map.Entry"
      ]
    },
    "starterCode": "class PriceListPrinter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass PriceListPrinter {\n    public void printPrices(Map<String, Double> priceMap) {\n        for (Map.Entry<String, Double> entry : priceMap.entrySet()) {\n            System.out.println(\"Mahsulot: \" + entry.getKey() + \" -> \" + entry.getValue() + \" so'm\");\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PriceListPrinter printer = new PriceListPrinter();\n        Map<String, Double> map = new LinkedHashMap<>();\n        map.put(\"Non\", 3000.0);\n        map.put(\"Choy\", 12000.0);\n        printer.printPrices(map);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Map.Entry har bir juftlikka bevosita murojaat qilish imkonini beradi.",
      "en": "Map.Entry holds immediate references to both key and value components simultaneously.",
      "ru": "Map.Entry содержит прямые ссылки на ключ и значение одновременно."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "87. Xodimlar Lavozimi — entrySet() Orqali Xodim va Vazifasini Moslash",
      "en": "87. Staff Roles — Associating Roles to Staff via entrySet()",
      "ru": "87. Должности сотрудников — Вывод сотрудников и должностей через entrySet()"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHR bo'limi xodimlarning ismlari va ularning lavozimlarini 'entrySet()' orqali hisobot qilib chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'StaffRoleReporter' sinfini e'lon qiling: 'public void reportRoles(java.util.Map<String, String> staffMap)' metodini yozing.\n2. Har bir entry uchun \"Xodim: \" + entry.getKey() + \" | Lavozimi: \" + entry.getValue() deb chop eting.\n3. 'Main' metodida \"Sardor\" -> \"Manager\", \"Malika\" -> \"Developer\" juftliklarini qo'shing.\n4. 'reportRoles' metodini chaqiring.",
      "en": "📖 Real-World Scenario\nHR staff directories report employee roles traversing Map.Entry pairs.\n\n📋 Steps\n1. Create StaffRoleReporter with reportRoles(Map<String, String> staffMap).\n2. In Main, populate staff map and print report.",
      "ru": "📖 Контекст\nОтдел кадров выводит отчет по должностям сотрудников через entrySet().\n\n📋 Шаги\n1. Создайте StaffRoleReporter с методом reportRoles.\n2. В main заполните Map и вызовите отчет."
    },
    "requirements": {
      "classes": [
        "StaffRoleReporter",
        "Main"
      ],
      "methods": [
        "reportRoles"
      ],
      "keywords": [
        "entrySet()",
        "Map.Entry"
      ]
    },
    "starterCode": "class StaffRoleReporter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.LinkedHashMap;\nimport java.util.Map;\n\nclass StaffRoleReporter {\n    public void reportRoles(Map<String, String> staffMap) {\n        for (Map.Entry<String, String> entry : staffMap.entrySet()) {\n            System.out.println(\"Xodim: \" + entry.getKey() + \" | Lavozimi: \" + entry.getValue());\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StaffRoleReporter reporter = new StaffRoleReporter();\n        Map<String, String> map = new LinkedHashMap<>();\n        map.put(\"Sardor\", \"Manager\");\n        map.put(\"Malika\", \"Developer\");\n        reporter.reportRoles(map);\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Seminar 4 va CW2 da hisobotlarni shakllantirishda entrySet() eng toza arxitekturadir.",
      "en": "Standard benchmark pattern for formatting reports in Coursework 2 and Viva exams.",
      "ru": "Эталонный шаблон форматирования отчетов для курсовой работы CW2 и экзамена Viva."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "88. So'zlar Chastotasi — Map Yordamida Har Bir So'z Sanog'ini Hisoblash",
      "en": "88. Word Frequency — Counting Word Occurrences with Map",
      "ru": "88. Частота слов — Подсчет частоты слов с помощью Map"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDasturlashda eng mashhur Map naqshi: 'Frequency Counter'. Berilgan so'zlar ro'yxatida har bir so'z necha marta takrorlanganini 'map.put(word, map.getOrDefault(word, 0) + 1)' formulasi bilan hisoblang!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'WordCounter' sinfini e'lon qiling: 'public java.util.Map<String, Integer> countFrequencies(java.util.List<String> words)' metodini yozing.\n2. Har bir so'z uchun 'counts.put(w, counts.getOrDefault(w, 0) + 1);' qiling.\n3. Natijaviy xaritani qaytaring.\n4. 'Main' metodida [\"java\", \"oop\", \"java\", \"code\", \"java\"] ro'yxatini uzating (\"java\" 3 marta uchragan).\n5. Konsolga: \"Java so'zi chastotasi: 3\" deb chop eting.",
      "en": "📖 Real-World Scenario\nClassic Frequency Counter pattern: map.put(w, map.getOrDefault(w, 0) + 1) tallies token counts efficiently.\n\n📋 Steps\n1. Create WordCounter with countFrequencies(List<String> words).\n2. Tally occurrences using getOrDefault.\n3. In Main, test on words [\"java\", \"oop\", \"java\", \"code\", \"java\"] and print: \"Java so'zi chastotasi: 3\".",
      "ru": "📖 Контекст\nКлассический паттерн подсчета частот: map.put(w, map.getOrDefault(w, 0) + 1) считает вхождения слов.\n\n📋 Шаги\n1. Создайте WordCounter с методом countFrequencies.\n2. В main проверьте работу на списке и выведите: \"Java so'zi chastotasi: 3\"."
    },
    "requirements": {
      "classes": [
        "WordCounter",
        "Main"
      ],
      "methods": [
        "countFrequencies"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class WordCounter {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nclass WordCounter {\n    public Map<String, Integer> countFrequencies(List<String> words) {\n        Map<String, Integer> counts = new HashMap<>();\n        for (String w : words) {\n            counts.put(w, counts.getOrDefault(w, 0) + 1);\n        }\n        return counts;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WordCounter wc = new WordCounter();\n        List<String> list = new ArrayList<>();\n        list.add(\"java\");\n        list.add(\"oop\");\n        list.add(\"java\");\n        list.add(\"code\");\n        list.add(\"java\");\n        Map<String, Integer> freqs = wc.countFrequencies(list);\n        System.out.println(\"Java so'zi chastotasi: \" + freqs.get(\"java\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "counts.getOrDefault(w, 0) + 1 usuli har bir so'zni bitta qatorda noldan oshirib hisoblashning eng optimal formulasidir.",
      "en": "getOrDefault(key, 0) + 1 is the canonical idiomatic solution for frequency counting in Java.",
      "ru": "getOrDefault(key, 0) + 1 — каноническая идиома подсчета частоты вхождений в Java."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "89. Saylov Natijalari — Nomzodlar Ovozini Map Bilan Sanash",
      "en": "89. Election Poll — Tallying Candidate Ballots with Map",
      "ru": "89. Результаты выборов — Подсчет голосов кандидатов через Map"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSaylovda berilgan byulletenlar ro'yxatidan har bir nomzod to'plagan ovozlar soni Map orqali hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ElectionTally' sinfini e'lon qiling: 'public java.util.Map<String, Integer> tallyVotes(java.util.List<String> ballots)' metodini yozing.\n2. Har bir nomzod uchun ovozlarni jamlang.\n3. 'Main' metodida [\"Aziz\", \"Malika\", \"Aziz\"] ovozlarini yuboring.\n4. Konsolga: \"Aziz to'plagan ovozlar: 2\" deb chop eting.",
      "en": "📖 Real-World Scenario\nVoting tabulation systems tally candidate ballots via map frequency accumulation.\n\n📋 Steps\n1. Create ElectionTally with tallyVotes(List<String> ballots).\n2. Accumulate votes in a Map.\n3. In Main, test with sample ballots and print: \"Aziz to'plagan ovozlar: 2\".",
      "ru": "📖 Контекст\nЭлектронное голосование подсчитывает голоса кандидатов через Map.\n\n📋 Шаги\n1. Создайте ElectionTally с методом tallyVotes.\n2. В main подсчитайте голоса и выведите: \"Aziz to'plagan ovozlar: 2\"."
    },
    "requirements": {
      "classes": [
        "ElectionTally",
        "Main"
      ],
      "methods": [
        "tallyVotes"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class ElectionTally {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\nclass ElectionTally {\n    public Map<String, Integer> tallyVotes(List<String> ballots) {\n        Map<String, Integer> votes = new HashMap<>();\n        for (String candidate : ballots) {\n            votes.put(candidate, votes.getOrDefault(candidate, 0) + 1);\n        }\n        return votes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectionTally tally = new ElectionTally();\n        List<String> votes = new ArrayList<>();\n        votes.add(\"Aziz\");\n        votes.add(\"Malika\");\n        votes.add(\"Aziz\");\n        Map<String, Integer> results = tally.tallyVotes(votes);\n        System.out.println(\"Aziz to'plagan ovozlar: \" + results.get(\"Aziz\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Map yordamida ovozlarni hisoblash yangi nomzodlar paydo bo'lganda ham xatosiz va avtomatik ishlayveradi.",
      "en": "Dynamic ballot accumulation accommodates arbitrary candidate entries dynamically.",
      "ru": "Динамический подсчет бюллетеней автоматически учитывает любых новых кандидатов."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Map va Kalit-Qiymat Juftliklari (HashMap, TreeMap)",
    "sector": "61-90",
    "title": {
      "uz": "90. Tovar Ko'rishlar Sanog'i — Uzum Market Mahsulotlarining Ko'rishlar Sonini Hisoblash",
      "en": "90. Click Analytics — Tracking Product Impressions with Map",
      "ru": "90. Аналитика просмотров — Подсчет кликов по товарам через Map"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\n3-Sektorning yakuniy topshirig'i: Uzum Market ilovasida xaridorlar har bir tovarni ko'rganida (click qilganida), 'ProductViewTracker' tovarning SKU kodi bo'yicha ko'rishlar sonini oshirib boradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ProductViewTracker' sinfini e'lon qiling: 'private java.util.Map<String, Integer> views = new java.util.HashMap<>();'.\n2. 'public void recordView(String sku)' metodida 'views.put(sku, views.getOrDefault(sku, 0) + 1);' qiling.\n3. 'public int getViewCount(String sku)' da 'views.getOrDefault(sku, 0);' qaytarsin.\n4. 'Main' metodida \"SKU-IPHONE\" tovarini 3 marta ko'ring ('recordView()').\n5. Konsolga: \"iPhone ko'rishlar soni: 3\" deb chop eting.",
      "en": "📖 Real-World Scenario\nSector 3 finale: E-commerce analytics tracks product impressions using an in-memory frequency map.\n\n📋 Steps\n1. Create ProductViewTracker with private Map<String, Integer> views.\n2. Implement recordView(sku) using views.put(sku, views.getOrDefault(sku, 0) + 1).\n3. Provide getViewCount(sku).\n4. In Main, record 3 clicks for \"SKU-IPHONE\" and print: \"iPhone ko'rishlar soni: 3\".",
      "ru": "📖 Контекст\nФинал Сектора 3: трекер просмотров товаров интернет-магазина на основе Map.\n\n📋 Шаги\n1. Создайте ProductViewTracker с Map<String, Integer>.\n2. Реализуйте recordView и getViewCount.\n3. В main зафиксируйте 3 просмотра для SKU-IPHONE и выведите: \"iPhone ko'rishlar soni: 3\"."
    },
    "requirements": {
      "classes": [
        "ProductViewTracker",
        "Main"
      ],
      "methods": [
        "recordView",
        "getViewCount"
      ],
      "keywords": [
        "Map",
        "HashMap",
        "getOrDefault"
      ]
    },
    "starterCode": "class ProductViewTracker {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.HashMap;\nimport java.util.Map;\n\nclass ProductViewTracker {\n    private Map<String, Integer> views = new HashMap<>();\n\n    public void recordView(String sku) {\n        views.put(sku, views.getOrDefault(sku, 0) + 1);\n    }\n\n    public int getViewCount(String sku) {\n        return views.getOrDefault(sku, 0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductViewTracker tracker = new ProductViewTracker();\n        tracker.recordView(\"SKU-IPHONE\");\n        tracker.recordView(\"SKU-IPHONE\");\n        tracker.recordView(\"SKU-IPHONE\");\n        System.out.println(\"iPhone ko'rishlar soni: \" + tracker.getViewCount(\"SKU-IPHONE\"));\n    }\n}",
    "expectedOutput": "",
    "detailedSolution": {
      "uz": "Sektor 3 (61–90) to'liq yakunlandi! Map, HashMap, LinkedHashMap, TreeMap, getOrDefault, keySet, values, entrySet va Frequency Counter naqshlari to'liq o'zlashtirildi.",
      "en": "Sector 3 complete! Fully mastering Map, HashMap, LinkedHashMap, TreeMap, getOrDefault, keySet, values, entrySet, and frequency maps.",
      "ru": "Сектор 3 завершен! Полностью освоены Map, HashMap, LinkedHashMap, TreeMap, getOrDefault, keySet, values, entrySet и частотные счетчики."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "91. Mashina va Dvigatel — HAS-A Kompozitsiyasi (Lecture 4 Slide 31-33)",
      "en": "91. Car and Engine — HAS-A Composition (Slide 31-33)",
      "ru": "91. Автомобиль и двигатель — Композиция HAS-A"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 31-33: 'IS-A represents inheritance (Car is a Vehicle), while HAS-A represents association/composition (Car has an Engine). Prefer composition over inheritance for flexible system design'.\nMashina dvigatel hisoblanmaydi (Car is not an Engine), balki mashinaning dvigateli bor (Car has an Engine).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Engine' sinfini yarating: 'private String type;', 'private int horsePower;'. Konstruktori: 'public Engine(String type, int horsePower)'. Metodi: 'public String getDetails()' -> \"V8 (450 HP)\" qaytarsin.\n2. 'Car' sinfini yarating: 'private String model;', 'private Engine engine;'. Konstruktori: 'public Car(String model, Engine engine)'.\n3. 'Car' ichida 'public void start()' metodini yozing: konsolga 'model + \" ishga tushdi: \" + engine.getDetails()' deb chop etsin.\n4. 'Main' metodida 'Engine v8 = new Engine(\"V8\", 450);', 'Car bmw = new Car(\"BMW M5\", v8);' yarating va 'bmw.start();' qiling.\n5. Kutilayotgan natija: \"BMW M5 ishga tushdi: V8 (450 HP)\".",
      "en": "📖 Context\nLecture 4 Slide 31-33: HAS-A indicates that an object contains another object as a field.\nSteps:\n1. Create Engine(String type, int horsePower) with getDetails().\n2. Create Car(String model, Engine engine) with start().\n3. In Main, instantiate Engine and Car, call bmw.start().\nExpected output: \"BMW M5 ishga tushdi: V8 (450 HP)\".",
      "ru": "📖 Контекст\nСлайды 31-33: Отношение HAS-A означает композицию/ассоциацию поля объекта.\nШаги:\n1. Создайте Engine(String type, int horsePower) с getDetails().\n2. Создайте Car(String model, Engine engine) со start().\n3. В Main запустите bmw.start(). Выведите: \"BMW M5 ishga tushdi: V8 (450 HP)\"."
    },
    "requirements": {
      "classes": [
        "Engine",
        "Car",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Engine {\n    \n}\n\nclass Car {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Engine {\n    private String type;\n    private int horsePower;\n\n    public Engine(String type, int horsePower) {\n        this.type = type;\n        this.horsePower = horsePower;\n    }\n\n    public String getDetails() {\n        return type + \" (\" + horsePower + \" HP)\";\n    }\n}\n\nclass Car {\n    private String model;\n    private Engine engine;\n\n    public Car(String model, Engine engine) {\n        this.model = model;\n        this.engine = engine;\n    }\n\n    public void start() {\n        System.out.println(model + \" ishga tushdi: \" + engine.getDetails());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Engine v8 = new Engine(\"V8\", 450);\n        Car bmw = new Car(\"BMW M5\", v8);\n        bmw.start();\n    }\n}",
    "expectedOutput": "BMW M5 ishga tushdi: V8 (450 HP)"
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "92. Shaxs va Pasport — HAS-A Assotsiatsiyasi (Lecture 4 Slide 31-33)",
      "en": "92. Person and Passport — HAS-A Association (Slide 31-33)",
      "ru": "92. Человек и паспорт — Ассоциация HAS-A"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nInson va uning shaxsini tasdiqlovchi pasporti o'rtasidagi munosabat — klassik HAS-A (Shaxs pasportga ega).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Passport' sinfini e'lon qiling: 'private String seriesNumber;', 'private String expiryDate;'. Konstruktori: 'public Passport(String seriesNumber, String expiryDate)'. Getter: 'public String getInfo()' -> 'seriesNumber + \" (amal qilish: \" + expiryDate + \")\"' qaytarsin.\n2. 'Person' sinfini e'lon qiling: 'private String fullName;', 'private Passport passport;'. Konstruktori: 'public Person(String fullName, Passport passport)'.\n3. 'Person' ichida 'public void printIdentity()' metodi konsolga: 'fullName + \" - Pasport: \" + passport.getInfo()' deb chiqarsin.\n4. 'Main' metodida 'Passport pass = new Passport(\"AA1234567\", \"2030-05-15\");' va 'Person p = new Person(\"Ali Valiyev\", pass);' yarating.\n5. 'p.printIdentity();' ni chaqiring. Kutilayotgan natija: \"Ali Valiyev - Pasport: AA1234567 (amal qilish: 2030-05-15)\".",
      "en": "📖 Steps:\n1. Create Passport(String seriesNumber, String expiryDate) with getInfo().\n2. Create Person(String fullName, Passport passport) with printIdentity().\n3. In Main, create Passport and Person, call printIdentity().\nExpected: \"Ali Valiyev - Pasport: AA1234567 (amal qilish: 2030-05-15)\".",
      "ru": "📖 Шаги:\n1. Создайте Passport(seriesNumber, expiryDate) с getInfo().\n2. Создайте Person(fullName, passport) с printIdentity().\n3. В Main вызовите printIdentity(). Вывод: \"Ali Valiyev - Pasport: AA1234567 (amal qilish: 2030-05-15)\"."
    },
    "requirements": {
      "classes": [
        "Passport",
        "Person",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Passport {\n    \n}\n\nclass Person {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Passport {\n    private String seriesNumber;\n    private String expiryDate;\n\n    public Passport(String seriesNumber, String expiryDate) {\n        this.seriesNumber = seriesNumber;\n        this.expiryDate = expiryDate;\n    }\n\n    public String getInfo() {\n        return seriesNumber + \" (amal qilish: \" + expiryDate + \")\";\n    }\n}\n\nclass Person {\n    private String fullName;\n    private Passport passport;\n\n    public Person(String fullName, Passport passport) {\n        this.fullName = fullName;\n        this.passport = passport;\n    }\n\n    public void printIdentity() {\n        System.out.println(fullName + \" - Pasport: \" + passport.getInfo());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Passport pass = new Passport(\"AA1234567\", \"2030-05-15\");\n        Person p = new Person(\"Ali Valiyev\", pass);\n        p.printIdentity();\n    }\n}",
    "expectedOutput": "Ali Valiyev - Pasport: AA1234567 (amal qilish: 2030-05-15)"
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "93. Kompyuter va Protsessor — Delegatsiya Usuli (Lecture 4 Slide 31-33)",
      "en": "93. Computer and Processor — Delegation Pattern (Slide 31-33)",
      "ru": "93. Компьютер и процессор — Паттерн делегирования"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTarkibli munosabatlarda kompyuter o'z hisoblash quvvati haqidagi savolni ichidagi protsessor obyektiga yo'naltiradi (Delegation).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Processor' sinfini e'lon qiling: 'private String model;', 'private double ghz;'. Konstruktor: 'public Processor(String model, double ghz)'. Metodi: 'public String getSpecs()' -> 'model + \" @ \" + ghz + \" GHz\"'.\n2. 'Computer' sinfini yarating: 'private String brand;', 'private Processor processor;'. Konstruktor: 'public Computer(String brand, Processor processor)'.\n3. 'Computer' da 'public String getFullSpecs()' metodida 'brand + \" [CPU: \" + processor.getSpecs() + \"]\"' qaytaring.\n4. 'Main' metodida 'Processor cpu = new Processor(\"Apple M3 Max\", 4.05);' va 'Computer mac = new Computer(\"MacBook Pro\", cpu);' yarating.\n5. Konsolga: 'mac.getFullSpecs()' ni chop eting. Kutilayotgan natija: \"MacBook Pro [CPU: Apple M3 Max @ 4.05 GHz]\".",
      "en": "📖 Steps:\n1. Create Processor(String model, double ghz) with getSpecs().\n2. Create Computer(String brand, Processor processor) with getFullSpecs().\n3. In Main, instantiate Processor and Computer. Print getFullSpecs().\nExpected: \"MacBook Pro [CPU: Apple M3 Max @ 4.05 GHz]\".",
      "ru": "📖 Шаги:\n1. Создайте Processor(model, ghz) с getSpecs().\n2. Создайте Computer(brand, processor) с getFullSpecs().\n3. В Main выведите getFullSpecs(). Вывод: \"MacBook Pro [CPU: Apple M3 Max @ 4.05 GHz]\"."
    },
    "requirements": {
      "classes": [
        "Processor",
        "Computer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Processor {\n    \n}\n\nclass Computer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Processor {\n    private String model;\n    private double ghz;\n\n    public Processor(String model, double ghz) {\n        this.model = model;\n        this.ghz = ghz;\n    }\n\n    public String getSpecs() {\n        return model + \" @ \" + ghz + \" GHz\";\n    }\n}\n\nclass Computer {\n    private String brand;\n    private Processor processor;\n\n    public Computer(String brand, Processor processor) {\n        this.brand = brand;\n        this.processor = processor;\n    }\n\n    public String getFullSpecs() {\n        return brand + \" [CPU: \" + processor.getSpecs() + \"]\";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Processor cpu = new Processor(\"Apple M3 Max\", 4.05);\n        Computer mac = new Computer(\"MacBook Pro\", cpu);\n        System.out.println(mac.getFullSpecs());\n    }\n}",
    "expectedOutput": "MacBook Pro [CPU: Apple M3 Max @ 4.05 GHz]"
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "94. Buyurtma va Mijoz — Aggregation Bog'liqligi (Lecture 4 Slide 34-36, Seminar 4)",
      "en": "94. Order and Customer — Aggregation Association (Slide 34-36, Seminar 4)",
      "ru": "94. Заказ и клиент — Агрегация"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 34: 'Aggregation is a weak HAS-A relationship (represented by an open/hollow diamond in UML). The child object can exist independently of the parent'.\nMijoz ('Customer') buyurtma ('Order') yaratilishidan oldin mavjud bo'ladi. Agar buyurtma bekor qilinsa yoki o'chirilsa, mijoz tizimda o'chmaydi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfini e'lon qiling: 'private String name;'. Konstruktori: 'public Customer(String name)'. Getter: 'public String getName()'.\n2. 'Order' sinfini yarating: 'private int id;', 'private Customer customer;'. Konstruktori: 'public Order(int id, Customer customer)'.\n3. 'Order' da 'public void printOrderInfo()' metodi: konsolga '\"Buyurtma #\" + id + \" - Mijoz: \" + customer.getName()' deb chop etsin.\n4. 'Main' metodida avval 'Customer c = new Customer(\"Sardor\");' yarating, so'ngra 'Order ord = new Order(1001, c);' ga uzating.\n5. 'ord.printOrderInfo();' ni chaqiring. Kutilayotgan natija: \"Buyurtma #1001 - Mijoz: Sardor\".",
      "en": "📖 Steps:\n1. Create Customer(String name) with getName().\n2. Create Order(int id, Customer customer) with printOrderInfo().\n3. In Main, instantiate Customer independently, pass it to Order.\n4. Call printOrderInfo().\nExpected: \"Buyurtma #1001 - Mijoz: Sardor\".",
      "ru": "📖 Шаги:\n1. Создайте Customer(name) с getName().\n2. Создайте Order(id, customer) с printOrderInfo().\n3. В Main создайте Customer и передайте в Order.\n4. Вызовите printOrderInfo(). Вывод: \"Buyurtma #1001 - Mijoz: Sardor\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n\n    public Customer(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Order {\n    private int id;\n    private Customer customer;\n\n    public Order(int id, Customer customer) {\n        this.id = id;\n        this.customer = customer;\n    }\n\n    public void printOrderInfo() {\n        System.out.println(\"Buyurtma #\" + id + \" - Mijoz: \" + customer.getName());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Sardor\");\n        Order ord = new Order(1001, c);\n        ord.printOrderInfo();\n    }\n}",
    "expectedOutput": "Buyurtma #1001 - Mijoz: Sardor"
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "95. Universitet Kafedrasi va Professor — Mustaqil Obyektlar (Lecture 4 Slide 34)",
      "en": "95. University Department and Professor — Independent Lifetimes (Slide 34)",
      "ru": "95. Кафедра и профессор — Независимое существование"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUniversitet kafedrasi yopilsa ham, professor o'z faoliyatini boshqa kafedrada davom ettirishi mumkin. Bu klassik Aggregation munosabatidir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Professor' sinfini e'lon qiling: 'private String name;'. Konstruktori: 'public Professor(String name)'. Getter: 'public String getName()'.\n2. 'Department' sinfini e'lon qiling: 'private String deptName;', 'private Professor headProfessor;'. Konstruktori: 'public Department(String deptName)'.\n3. 'Department' ichida 'public void setHeadProfessor(Professor p)' metodini yozing.\n4. 'Department' ichida 'public String getDetails()' metodi: 'deptName + \" kafedrasi mudiri: \" + headProfessor.getName()' qaytarsin.\n5. 'Main' metodida 'Professor prof = new Professor(\"Dr. Alan Turing\");', 'Department cs = new Department(\"Informatika\"); cs.setHeadProfessor(prof);' qiling va 'cs.getDetails()' ni chop eting. Kutilayotgan natija: \"Informatika kafedrasi mudiri: Dr. Alan Turing\".",
      "en": "📖 Steps:\n1. Create Professor(String name) with getName().\n2. Create Department(String deptName) with setHeadProfessor(Professor p) and getDetails().\n3. In Main, instantiate Professor and Department, set head, and print getDetails().\nExpected: \"Informatika kafedrasi mudiri: Dr. Alan Turing\".",
      "ru": "📖 Шаги:\n1. Создайте Professor(name) с getName().\n2. Создайте Department(deptName) с setHeadProfessor(p) и getDetails().\n3. В Main назначьте заведующего и выведите getDetails(). Вывод: \"Informatika kafedrasi mudiri: Dr. Alan Turing\"."
    },
    "requirements": {
      "classes": [
        "Professor",
        "Department",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Professor {\n    \n}\n\nclass Department {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Professor {\n    private String name;\n\n    public Professor(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Department {\n    private String deptName;\n    private Professor headProfessor;\n\n    public Department(String deptName) {\n        this.deptName = deptName;\n    }\n\n    public void setHeadProfessor(Professor headProfessor) {\n        this.headProfessor = headProfessor;\n    }\n\n    public String getDetails() {\n        return deptName + \" kafedrasi mudiri: \" + headProfessor.getName();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Professor prof = new Professor(\"Dr. Alan Turing\");\n        Department cs = new Department(\"Informatika\");\n        cs.setHeadProfessor(prof);\n        System.out.println(cs.getDetails());\n    }\n}",
    "expectedOutput": "Informatika kafedrasi mudiri: Dr. Alan Turing"
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "96. Kurs va Talaba — Agregatsiya Munosabatida O'quvchini Bog'lash (Slide 35)",
      "en": "96. Course and Student — Aggregation in Enrollment (Slide 35)",
      "ru": "96. Курс и студент — Агрегация при записи"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTalabalar mustaqil shaxs sifatida mavjud. Kurs ochilganda talaba unga yoziladi, lekin kurs tugasa ham talaba o'qishini davom ettiraveradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Student' sinfini yarating: 'private String id;', 'private String name;'. Konstruktori: 'public Student(String id, String name)'. Metodi: 'public String getInfo()' -> 'name + \" (\" + id + \")\"'.\n2. 'Course' sinfini yarating: 'private String code;', 'private Student student;'. Konstruktori: 'public Course(String code)'.\n3. 'Course' da 'public void enroll(Student s)' va 'public void printEnrollment()' metodlarini yozing: 'code + \" kursiga yozildi: \" + student.getInfo()' deb chiqarsin.\n4. 'Main' metodida 'Student st = new Student(\"U221001\", \"Jasur\");' va 'Course c = new Course(\"5BUIS009C\"); c.enroll(st);' qiling.\n5. 'c.printEnrollment();' ni chaqiring. Kutilayotgan natija: \"5BUIS009C kursiga yozildi: Jasur (U221001)\".",
      "en": "📖 Steps:\n1. Create Student(id, name) with getInfo().\n2. Create Course(code) with enroll(Student s) and printEnrollment().\n3. In Main, enroll student and print enrollment.\nExpected: \"5BUIS009C kursiga yozildi: Jasur (U221001)\".",
      "ru": "📖 Шаги:\n1. Создайте Student(id, name) с getInfo().\n2. Создайте Course(code) с enroll(s) и printEnrollment().\n3. В Main вызовите printEnrollment(). Вывод: \"5BUIS009C kursiga yozildi: Jasur (U221001)\"."
    },
    "requirements": {
      "classes": [
        "Student",
        "Course",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Student {\n    \n}\n\nclass Course {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Student {\n    private String id;\n    private String name;\n\n    public Student(String id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n\n    public String getInfo() {\n        return name + \" (\" + id + \")\";\n    }\n}\n\nclass Course {\n    private String code;\n    private Student student;\n\n    public Course(String code) {\n        this.code = code;\n    }\n\n    public void enroll(Student student) {\n        this.student = student;\n    }\n\n    public void printEnrollment() {\n        System.out.println(code + \" kursiga yozildi: \" + student.getInfo());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student st = new Student(\"U221001\", \"Jasur\");\n        Course c = new Course(\"5BUIS009C\");\n        c.enroll(st);\n        c.printEnrollment();\n    }\n}",
    "expectedOutput": "5BUIS009C kursiga yozildi: Jasur (U221001)"
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "97. Uy va Xona — Qat'iy Kompozitsiya (Lecture 4 Slide 36)",
      "en": "97. House and Room — Strict Composition (Slide 36)",
      "ru": "97. Дом и комната — Строгая композиция"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 36: 'Composition is a strong HAS-A relationship (represented by a filled diamond in UML). The child object CANNOT exist independently of the whole'.\nXona ('Room') alohida mavjud bo'la olmaydi — u faqat Uy ('House') ichida yaratiladi va uy buzilsa xona ham yo'qoladi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Room' sinfini e'lon qiling: 'private String name;', 'private double area;'. Konstruktor: 'public Room(String name, double area)'. Metodi: 'public String getInfo()' -> 'name + \" (\" + area + \" kv.m)\"'.\n2. 'House' sinfini e'lon qiling: 'private String address;', 'private java.util.List<Room> rooms = new java.util.ArrayList<>();'. Konstruktori: 'public House(String address)'.\n3. 'House' ichida 'public void addRoom(String name, double area)' metodi bevosita 'rooms.add(new Room(name, area));' qilsin (tashqaridan Room qabul qilmaydi, o'zi yaratadi!).\n4. 'House' ichida 'public void printRooms()' metodi har bir xona ma'lumotini konsolga chiqarsin.\n5. 'Main' metodida 'House h = new House(\"Navoiy ko'chasi 14\"); h.addRoom(\"Mehmonxona\", 28.5);' qiling va 'h.printRooms();' ni chaqiring. Kutilayotgan natija: \"Xona: Mehmonxona (28.5 kv.m)\".",
      "en": "📖 Steps:\n1. Create Room(String name, double area) with getInfo().\n2. Create House(String address) with private List<Room> rooms = new ArrayList<>().\n3. In House, provide addRoom(String name, double area) which creates new Room internally.\n4. Implement printRooms() in House.\nExpected: \"Xona: Mehmonxona (28.5 kv.m)\".",
      "ru": "📖 Шаги:\n1. Создайте Room(name, area) с getInfo().\n2. Создайте House(address) с List<Room> rooms = new ArrayList<>().\n3. В House метод addRoom(name, area) создает Room внутри.\n4. Вызовите h.printRooms(). Вывод: \"Xona: Mehmonxona (28.5 kv.m)\"."
    },
    "requirements": {
      "classes": [
        "Room",
        "House",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Room {\n    \n}\n\nclass House {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Room {\n    private String name;\n    private double area;\n\n    public Room(String name, double area) {\n        this.name = name;\n        this.area = area;\n    }\n\n    public String getInfo() {\n        return name + \" (\" + area + \" kv.m)\";\n    }\n}\n\nclass House {\n    private String address;\n    private java.util.List<Room> rooms = new java.util.ArrayList<>();\n\n    public House(String address) {\n        this.address = address;\n    }\n\n    public void addRoom(String name, double area) {\n        rooms.add(new Room(name, area));\n    }\n\n    public void printRooms() {\n        for (Room r : rooms) {\n            System.out.println(\"Xona: \" + r.getInfo());\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        House h = new House(\"Navoiy ko'chasi 14\");\n        h.addRoom(\"Mehmonxona\", 28.5);\n        h.printRooms();\n    }\n}",
    "expectedOutput": "Xona: Mehmonxona (28.5 kv.m)"
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "98. Hujjat va Sahifa — Hujjat Ichida Sahifani Boshqarish (Lecture 4 Slide 36)",
      "en": "98. Document and Page — Managing Pages Internally (Slide 36)",
      "ru": "98. Документ и страница — Управление страницами"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHujjat sahifalari hujjatsiz mustaqil ma'noga ega emas. Sahifaning hayot sikli butunlay hujjatga bog'langan.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Page' sinfini e'lon qiling: 'private int pageNumber;', 'private String title;'. Konstruktor: 'public Page(int num, String title)'. Metodi: 'public String getSummary()' -> '\"Bet \" + pageNumber + \": \" + title'.\n2. 'Document' sinfini e'lon qiling: 'private String docTitle;', 'private java.util.List<Page> pages = new java.util.ArrayList<>();'.\n3. 'Document' da 'public void addPage(String title)' metodi: yangi bet raqamini 'pages.size() + 1' qilib 'pages.add(new Page(...))' qilsin.\n4. 'Document' da 'public void printPages()' metodi har bir sahifani chop etsin.\n5. 'Main' metodida 'Document doc = new Document(\"Kurs Ishi\"); doc.addPage(\"Kirish\"); doc.addPage(\"EER Modeli\");' qiling va 'doc.printPages();' ni chaqiring. Kutilayotgan natija:\nBet 1: Kirish\nBet 2: EER Modeli",
      "en": "📖 Steps:\n1. Create Page(int num, String title) with getSummary().\n2. Create Document(String title) with List<Page> pages.\n3. In Document, addPage(title) creates Page with pageNumber = pages.size() + 1.\n4. In Main, add 2 pages and print.\nExpected: Bet 1: Kirish \n Bet 2: EER Modeli",
      "ru": "📖 Шаги:\n1. Создайте Page(num, title) с getSummary().\n2. Создайте Document(title) со списком pages.\n3. В Document метод addPage(title) создает страницу.\n4. Выведите страницы."
    },
    "requirements": {
      "classes": [
        "Page",
        "Document",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Page {\n    \n}\n\nclass Document {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Page {\n    private int pageNumber;\n    private String title;\n\n    public Page(int pageNumber, String title) {\n        this.pageNumber = pageNumber;\n        this.title = title;\n    }\n\n    public String getSummary() {\n        return \"Bet \" + pageNumber + \": \" + title;\n    }\n}\n\nclass Document {\n    private String docTitle;\n    private java.util.List<Page> pages = new java.util.ArrayList<>();\n\n    public Document(String docTitle) {\n        this.docTitle = docTitle;\n    }\n\n    public void addPage(String title) {\n        pages.add(new Page(pages.size() + 1, title));\n    }\n\n    public void printPages() {\n        for (Page p : pages) {\n            System.out.println(p.getSummary());\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Document doc = new Document(\"Kurs Ishi\");\n        doc.addPage(\"Kirish\");\n        doc.addPage(\"EER Modeli\");\n        doc.printPages();\n    }\n}",
    "expectedOutput": "Bet 1: Kirish\nBet 2: EER Modeli"
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "99. Faktura va Satr — Invoice va InvoiceLine Kompozitsiyasi (Slide 36)",
      "en": "99. Invoice and InvoiceLine — Invoice Line Composition (Slide 36)",
      "ru": "99. Счет и строка счета — Композиция строки"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHisob-fakturadagi har bir hisob satri (InvoiceLine) faqat o'sha faktura ichida yaratiladi va hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'InvoiceLine' sinfini e'lon qiling: 'private String item;', 'private double amount;'. Konstruktori: 'public InvoiceLine(String item, double amount)'. Getter: 'public double getAmount()', 'public String getItem()'.\n2. 'Invoice' sinfini e'lon qiling: 'private String invoiceNo;', 'private java.util.List<InvoiceLine> lines = new java.util.ArrayList<>();'.\n3. 'Invoice' da 'public void addLine(String item, double amount)' metodida 'lines.add(new InvoiceLine(item, amount));' qiling.\n4. 'Invoice' da 'public double getTotalAmount()' metodi barcha satrlar summasini qaytarsin.\n5. 'Main' metodida 'Invoice inv = new Invoice(\"INV-001\"); inv.addLine(\"Server Hosting\", 120.0); inv.addLine(\"Domen\", 15.0);' qiling va 'System.out.println(\"Faktura jami: \" + inv.getTotalAmount());' deb chiqarsin. Kutilayotgan natija: \"Faktura jami: 135.0\".",
      "en": "📖 Steps:\n1. Create InvoiceLine(String item, double amount).\n2. Create Invoice(String invoiceNo) with addLine(item, amount) and getTotalAmount().\n3. In Main, add 2 lines and print total.\nExpected: \"Faktura jami: 135.0\".",
      "ru": "📖 Шаги:\n1. Создайте InvoiceLine(item, amount).\n2. Создайте Invoice(invoiceNo) с addLine и getTotalAmount().\n3. В Main добавьте 2 строки и выведите сумму. Вывод: \"Faktura jami: 135.0\"."
    },
    "requirements": {
      "classes": [
        "InvoiceLine",
        "Invoice",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class InvoiceLine {\n    \n}\n\nclass Invoice {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class InvoiceLine {\n    private String item;\n    private double amount;\n\n    public InvoiceLine(String item, double amount) {\n        this.item = item;\n        this.amount = amount;\n    }\n\n    public String getItem() {\n        return item;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\nclass Invoice {\n    private String invoiceNo;\n    private java.util.List<InvoiceLine> lines = new java.util.ArrayList<>();\n\n    public Invoice(String invoiceNo) {\n        this.invoiceNo = invoiceNo;\n    }\n\n    public void addLine(String item, double amount) {\n        lines.add(new InvoiceLine(item, amount));\n    }\n\n    public double getTotalAmount() {\n        double total = 0.0;\n        for (InvoiceLine l : lines) {\n            total += l.getAmount();\n        }\n        return total;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Invoice inv = new Invoice(\"INV-001\");\n        inv.addLine(\"Server Hosting\", 120.0);\n        inv.addLine(\"Domen\", 15.0);\n        System.out.println(\"Faktura jami: \" + inv.getTotalAmount());\n    }\n}",
    "expectedOutput": "Faktura jami: 135.0"
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "100. Foydalanuvchi va Profil — Multiplicity 1 Validatsiyasi (Lecture 4 Slide 37)",
      "en": "100. User and Profile — Multiplicity 1 Validation (Slide 37)",
      "ru": "100. Пользователь и профиль — Валидация кратности 1"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 37: 'Multiplicity 1 means exactly one instance is required. If null is passed, the object invariant is violated'.\nHar bir 'User' kamida va ko'pi bilan aniq bitta 'Profile' ga ega bo'lishi shart!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Profile' sinfini e'lon qiling: 'private String bio;'. Konstruktor: 'public Profile(String bio)'. Getter: 'public String getBio()'.\n2. 'User' sinfini e'lon qiling: 'private String username;', 'private Profile profile;'.\n3. 'User' konstruktorida 'if (profile == null) throw new IllegalArgumentException(\"Profil majburiy!\");' deb tekshiring va maydonlarga saqlang.\n4. 'User' ichida 'public void printUser()' metodi: 'username + \" [\" + profile.getBio() + \"]\"' deb chiqarsin.\n5. 'Main' metodida 'Profile p = new Profile(\"Java dasturchi\"); User u = new User(\"ravshan\", p);' yarating va 'u.printUser();' ni chaqiring. Kutilayotgan natija: \"ravshan [Java dasturchi]\".",
      "en": "📖 Steps:\n1. Create Profile(String bio) with getBio().\n2. Create User(String username, Profile profile) requiring profile != null.\n3. Implement printUser().\nExpected: \"ravshan [Java dasturchi]\".",
      "ru": "📖 Шаги:\n1. Создайте Profile(bio).\n2. В конструкторе User(username, profile) проверьте profile != null.\n3. Вызовите u.printUser(). Вывод: \"ravshan [Java dasturchi]\"."
    },
    "requirements": {
      "classes": [
        "Profile",
        "User",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Profile {\n    \n}\n\nclass User {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Profile {\n    private String bio;\n\n    public Profile(String bio) {\n        this.bio = bio;\n    }\n\n    public String getBio() {\n        return bio;\n    }\n}\n\nclass User {\n    private String username;\n    private Profile profile;\n\n    public User(String username, Profile profile) {\n        if (profile == null) {\n            throw new IllegalArgumentException(\"Profil majburiy!\");\n        }\n        this.username = username;\n        this.profile = profile;\n    }\n\n    public void printUser() {\n        System.out.println(username + \" [\" + profile.getBio() + \"]\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Profile p = new Profile(\"Java dasturchi\");\n        User u = new User(\"ravshan\", p);\n        u.printUser();\n    }\n}",
    "expectedOutput": "ravshan [Java dasturchi]"
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "101. Xodim va Shartnoma — Majburiy Shartnoma Bog'lanishi (Slide 37)",
      "en": "101. Employee and Contract — Enforcing Exact 1 Contract (Slide 37)",
      "ru": "101. Сотрудник и контракт — Обязательное наличие контракта"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTashkilotda har bir qonuniy xodimning aynan 1 ta mehnat shartnomasi bo'lishi shart. Konstruktorda shartnomaning mavjudligi ta'minlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Contract' sinfini e'lon qiling: 'private String contractNumber;', 'private double monthlySalary;'. Konstruktor va getterlar yarating.\n2. 'Employee' sinfini e'lon qiling: 'private String name;', 'private Contract contract;'.\n3. 'Employee' konstruktorida null tekshiruvini qo'ying: 'if (contract == null) throw new IllegalArgumentException(\"Shartnoma null bo'lishi mumkin emas!\");'.\n4. 'Employee' da 'public void printDetails()' metodi: 'name + \" oyligi: \" + contract.getMonthlySalary() + \" so'm\"' deb chiqarsin.\n5. 'Main' metodida 'Contract c = new Contract(\"CNT-77\", 12000000.0); Employee e = new Employee(\"Malika\", c);' qiling va 'e.printDetails();' ni chaqiring. Kutilayotgan natija: \"Malika oyligi: 1.2E7 so'm\".",
      "en": "📖 Steps:\n1. Create Contract(contractNumber, monthlySalary).\n2. Create Employee(name, contract) with null check.\n3. Implement printDetails().\nExpected: \"Malika oyligi: 1.2E7 so'm\".",
      "ru": "📖 Шаги:\n1. Создайте Contract(contractNumber, monthlySalary).\n2. Создайте Employee(name, contract) с проверкой на null.\n3. Вызовите printDetails(). Вывод: \"Malika oyligi: 1.2E7 so'm\"."
    },
    "requirements": {
      "classes": [
        "Contract",
        "Employee",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Contract {\n    \n}\n\nclass Employee {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Contract {\n    private String contractNumber;\n    private double monthlySalary;\n\n    public Contract(String contractNumber, double monthlySalary) {\n        this.contractNumber = contractNumber;\n        this.monthlySalary = monthlySalary;\n    }\n\n    public double getMonthlySalary() {\n        return monthlySalary;\n    }\n}\n\nclass Employee {\n    private String name;\n    private Contract contract;\n\n    public Employee(String name, Contract contract) {\n        if (contract == null) {\n            throw new IllegalArgumentException(\"Shartnoma null bo'lishi mumkin emas!\");\n        }\n        this.name = name;\n        this.contract = contract;\n    }\n\n    public void printDetails() {\n        System.out.println(name + \" oyligi: \" + contract.getMonthlySalary() + \" so'm\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Contract c = new Contract(\"CNT-77\", 12000000.0);\n        Employee e = new Employee(\"Malika\", c);\n        e.printDetails();\n    }\n}",
    "expectedOutput": "Malika oyligi: 1.2E7 so'm"
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "102. Mijoz va Yetkazish Manzili — Seminar 4 Ex 1 ShippingAddress Bog'lanishi",
      "en": "102. Customer and ShippingAddress — Seminar 4 Ex 1 Multiplicity 1",
      "ru": "102. Клиент и адрес доставки — Кратность 1 в Семинаре 4"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 1: 'Refactor Customer class to have a ShippingAddress attribute (multiplicity 1). The address cannot be null'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShippingAddress' sinfini e'lon qiling: 'private String street;', 'private String city;'. Konstruktor: 'public ShippingAddress(String street, String city)'. Metodi: 'public String getFullAddress()' -> 'street + \", \" + city'.\n2. 'Customer' sinfini e'lon qiling: 'private String name;', 'private ShippingAddress address;'.\n3. 'Customer' konstruktorida: 'if (address == null) throw new IllegalArgumentException(\"Manzil majburiy!\");' deb yozing.\n4. 'Customer' da 'public void printDeliveryInfo()' metodi: 'name + \" yetkazish manzili: \" + address.getFullAddress()' deb chiqarsin.\n5. 'Main' metodida 'ShippingAddress addr = new ShippingAddress(\"Amir Temur 45\", \"Toshkent\"); Customer cust = new Customer(\"Bobur\", addr);' yarating va 'cust.printDeliveryInfo();' ni chaqiring. Kutilayotgan natija: \"Bobur yetkazish manzili: Amir Temur 45, Toshkent\".",
      "en": "📖 Steps (Seminar 4 Ex 1):\n1. Create ShippingAddress(street, city) with getFullAddress().\n2. Create Customer(name, address) requiring address != null.\n3. Call printDeliveryInfo().\nExpected: \"Bobur yetkazish manzili: Amir Temur 45, Toshkent\".",
      "ru": "📖 Шаги (Семинар 4 Упр 1):\n1. Создайте ShippingAddress(street, city) с getFullAddress().\n2. Создайте Customer(name, address) с проверкой на null.\n3. Вызовите printDeliveryInfo(). Вывод: \"Bobur yetkazish manzili: Amir Temur 45, Toshkent\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Customer {\n    private String name;\n    private ShippingAddress address;\n\n    public Customer(String name, ShippingAddress address) {\n        if (address == null) {\n            throw new IllegalArgumentException(\"Manzil majburiy!\");\n        }\n        this.name = name;\n        this.address = address;\n    }\n\n    public void printDeliveryInfo() {\n        System.out.println(name + \" yetkazish manzili: \" + address.getFullAddress());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ShippingAddress addr = new ShippingAddress(\"Amir Temur 45\", \"Toshkent\");\n        Customer cust = new Customer(\"Bobur\", addr);\n        cust.printDeliveryInfo();\n    }\n}",
    "expectedOutput": "Bobur yetkazish manzili: Amir Temur 45, Toshkent"
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "103. Buyurtma va Promokod — Multiplicity 0..1 (Lecture 4 Slide 38)",
      "en": "103. Order and Coupon — Multiplicity 0..1 (Slide 38)",
      "ru": "103. Заказ и промокод — Кратность 0..1"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 38: 'Multiplicity 0..1 represents an optional relationship. An object field can be null initially, and may or may not be assigned'.\nBuyurtma beruvchi mijozda promokod (Coupon) bo'lishi ham, bo'lmasligi ham mumkin. Boshida u doim null.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Coupon' sinfini yarating: 'private String code;', 'private double discountPercent;'. Konstruktori: 'public Coupon(String code, double discountPercent)'. Getter: 'public double getDiscountPercent()'.\n2. 'Order' sinfini yarating: 'private int id;', 'private Coupon coupon; // 0..1 (default null)'. Konstruktor: 'public Order(int id)'.\n3. 'Order' da 'public void applyCoupon(Coupon c)' metodini va 'public boolean hasCoupon()' metodini yozing ('return coupon != null;').\n4. 'Order' da 'public void printStatus()' metodi: agar promokod bo'lsa 'code + \" chegirmasi bor\"', bo'lmasa \"Promokod qo'llanmagan\" deb chiqarsin.\n5. 'Main' metodida 'Order o = new Order(501); o.printStatus(); o.applyCoupon(new Coupon(\"SUPER20\", 20.0)); o.printStatus();' qiling. Kutilayotgan natija:\nPromokod qo'llanmagan\nSUPER20 chegirmasi bor",
      "en": "📖 Steps:\n1. Create Coupon(code, discountPercent).\n2. Create Order(id) with optional Coupon coupon (default null).\n3. Implement applyCoupon, hasCoupon, printStatus.\n4. In Main test before and after coupon.\nExpected: Promokod qo'llanmagan \n SUPER20 chegirmasi bor",
      "ru": "📖 Шаги:\n1. Создайте Coupon(code, discountPercent).\n2. Создайте Order(id) с опциональным Coupon coupon (0..1).\n3. Проверьте статус до и после применения промокода."
    },
    "requirements": {
      "classes": [
        "Coupon",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Coupon {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Coupon {\n    private String code;\n    private double discountPercent;\n\n    public Coupon(String code, double discountPercent) {\n        this.code = code;\n        this.discountPercent = discountPercent;\n    }\n\n    public String getCode() {\n        return code;\n    }\n\n    public double getDiscountPercent() {\n        return discountPercent;\n    }\n}\n\nclass Order {\n    private int id;\n    private Coupon coupon;\n\n    public Order(int id) {\n        this.id = id;\n        this.coupon = null;\n    }\n\n    public void applyCoupon(Coupon coupon) {\n        this.coupon = coupon;\n    }\n\n    public boolean hasCoupon() {\n        return coupon != null;\n    }\n\n    public void printStatus() {\n        if (coupon != null) {\n            System.out.println(coupon.getCode() + \" chegirmasi bor\");\n        } else {\n            System.out.println(\"Promokod qo'llanmagan\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Order o = new Order(501);\n        o.printStatus();\n        o.applyCoupon(new Coupon(\"SUPER20\", 20.0));\n        o.printStatus();\n    }\n}",
    "expectedOutput": "Promokod qo'llanmagan\nSUPER20 chegirmasi bor"
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "104. Foydalanuvchi va Bank Kartasi — Bog'langan Karta (0..1)",
      "en": "104. User and Linked Card — Optional Card Association (0..1)",
      "ru": "104. Пользователь и банковская карта — Связка 0..1"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nIlovadagi har bir foydalanuvchi kartasiz ro'yxatdan o'tishi mumkin. Keyinroq u kartasini bog'lashi yoki uzib qo'yishi mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Card' sinfini e'lon qiling: 'private String pan;'. Konstruktor: 'public Card(String pan)'. Getter: 'public String getMaskedPan()' -> '\"**** \" + pan.substring(pan.length() - 4)'.\n2. 'UserAccount' sinfini e'lon qiling: 'private String username;', 'private Card linkedCard;'. Konstruktor: 'public UserAccount(String username)'.\n3. 'UserAccount' da 'public void linkCard(Card c)' va 'public void unlinkCard()' metodlarini yozing.\n4. 'public void printCardStatus()' metodi: agar karta bo'lsa 'username + \": \" + linkedCard.getMaskedPan()', bo'lmasa 'username + \": karta yo'q\"' deb chiqarsin.\n5. 'Main' da 'UserAccount u = new UserAccount(\"nodir\"); u.linkCard(new Card(\"8600123456789999\")); u.printCardStatus();' qiling. Kutilayotgan natija: \"nodir: **** 9999\".",
      "en": "📖 Steps:\n1. Create Card(pan) with getMaskedPan().\n2. Create UserAccount(username) with linkCard, unlinkCard, and printCardStatus.\n3. Test in Main.\nExpected: \"nodir: **** 9999\".",
      "ru": "📖 Шаги:\n1. Создайте Card(pan) с getMaskedPan().\n2. Создайте UserAccount(username) с методами linkCard и printCardStatus.\n3. Проверьте в Main. Вывод: \"nodir: **** 9999\"."
    },
    "requirements": {
      "classes": [
        "Card",
        "UserAccount",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Card {\n    \n}\n\nclass UserAccount {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Card {\n    private String pan;\n\n    public Card(String pan) {\n        this.pan = pan;\n    }\n\n    public String getMaskedPan() {\n        return \"**** \" + pan.substring(pan.length() - 4);\n    }\n}\n\nclass UserAccount {\n    private String username;\n    private Card linkedCard;\n\n    public UserAccount(String username) {\n        this.username = username;\n        this.linkedCard = null;\n    }\n\n    public void linkCard(Card card) {\n        this.linkedCard = card;\n    }\n\n    public void unlinkCard() {\n        this.linkedCard = null;\n    }\n\n    public void printCardStatus() {\n        if (linkedCard != null) {\n            System.out.println(username + \": \" + linkedCard.getMaskedPan());\n        } else {\n            System.out.println(username + \": karta yo'q\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        UserAccount u = new UserAccount(\"nodir\");\n        u.linkCard(new Card(\"8600123456789999\"));\n        u.printCardStatus();\n    }\n}",
    "expectedOutput": "nodir: **** 9999"
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "105. Yetkazib Berish va Kuryer — Tayinlanmagan Yetkazma (0..1)",
      "en": "105. Delivery and Courier — Null-Safe Assignment (0..1)",
      "ru": "105. Доставка и курьер — Опциональный курьер (0..1)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma tayyor bo'lgach, tizim kuryerni qidiradi. Kuryer topilguncha buyurtmada kuryer obyekti null bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Courier' sinfini yarating: 'private String name;'. Konstruktori: 'public Courier(String name)'. Getter: 'public String getName()'.\n2. 'Delivery' sinfini e'lon qiling: 'private int orderId;', 'private Courier courier = null;'.\n3. 'Delivery' da 'public void assignCourier(Courier c)' va 'public String getCourierName()' metodlarini yozing (agar courier null bo'lsa \"Kuryer tayinlanmagan\" deb qaytarsin).\n4. 'Main' metodida 'Delivery d = new Delivery(808);' yarating va uning 'getCourierName()' ini chiqaring.\n5. So'ngra 'd.assignCourier(new Courier(\"Farhod\"));' qilib yana 'getCourierName()' ini chiqaring. Kutilayotgan natija:\nKuryer tayinlanmagan\nFarhod",
      "en": "📖 Steps:\n1. Create Courier(name) with getName().\n2. Create Delivery(orderId) with optional Courier.\n3. getCourierName() returns \"Kuryer tayinlanmagan\" if null, else courier name.\n4. Test in Main before and after assign.\nExpected: Kuryer tayinlanmagan \n Farhod",
      "ru": "📖 Шаги:\n1. Создайте Courier(name).\n2. Создайте Delivery(orderId) с опциональным курьером.\n3. Проверьте getCourierName() до и после назначения курьера."
    },
    "requirements": {
      "classes": [
        "Courier",
        "Delivery",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Courier {\n    \n}\n\nclass Delivery {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Courier {\n    private String name;\n\n    public Courier(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Delivery {\n    private int orderId;\n    private Courier courier;\n\n    public Delivery(int orderId) {\n        this.orderId = orderId;\n        this.courier = null;\n    }\n\n    public void assignCourier(Courier courier) {\n        this.courier = courier;\n    }\n\n    public String getCourierName() {\n        if (courier == null) {\n            return \"Kuryer tayinlanmagan\";\n        }\n        return courier.getName();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Delivery d = new Delivery(808);\n        System.out.println(d.getCourierName());\n        d.assignCourier(new Courier(\"Farhod\"));\n        System.out.println(d.getCourierName());\n    }\n}",
    "expectedOutput": "Kuryer tayinlanmagan\nFarhod"
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "106. Mijoz va Buyurtmalar Tarixi — Multiplicity 0..* (Lecture 4 Slide 39)",
      "en": "106. Customer and Orders History — Multiplicity 0..* (Slide 39)",
      "ru": "106. Клиент и история заказов — Кратность 0..*"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 39: 'Multiplicity 0..* (or *) is implemented using a Collection field, most commonly List<E> initialized with new ArrayList<>()'.\nYangi ro'yxatdan o'tgan mijozda 0 ta buyurtma bo'ladi. Xarid qilgani sari buyurtmalar ro'yxatga qo'shilib boraveradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ClientOrder' sinfini yarating: 'private int id;', 'private double amount;'. Konstruktor va getterlar yozing.\n2. 'CustomerHistory' sinfini e'lon qiling: 'private String customerName;', 'private java.util.List<ClientOrder> orders = new java.util.ArrayList<>();'.\n3. 'public void addOrder(ClientOrder o)' metodini va 'public int getOrderCount()' metodini yozing.\n4. 'public double getTotalSpent()' metodida barcha buyurtmalar summasini hisoblab qaytaring.\n5. 'Main' metodida 'CustomerHistory ch = new CustomerHistory(\"Anvar\"); ch.addOrder(new ClientOrder(1, 150.0)); ch.addOrder(new ClientOrder(2, 250.0));' qiling va konsolga: '\"Buyurtmalar soni: \" + ch.getOrderCount() + \", Jami: \" + ch.getTotalSpent()' deb chiqaring. Kutilayotgan natija: \"Buyurtmalar soni: 2, Jami: 400.0\".",
      "en": "📖 Steps:\n1. Create ClientOrder(id, amount).\n2. Create CustomerHistory(customerName) with List<ClientOrder> orders = new ArrayList<>().\n3. Implement addOrder, getOrderCount, and getTotalSpent.\nExpected: \"Buyurtmalar soni: 2, Jami: 400.0\".",
      "ru": "📖 Шаги:\n1. Создайте ClientOrder(id, amount).\n2. Создайте CustomerHistory(customerName) с List<ClientOrder> orders.\n3. Реализуйте addOrder, getOrderCount и getTotalSpent. Вывод: \"Buyurtmalar soni: 2, Jami: 400.0\"."
    },
    "requirements": {
      "classes": [
        "ClientOrder",
        "CustomerHistory",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ClientOrder {\n    \n}\n\nclass CustomerHistory {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ClientOrder {\n    private int id;\n    private double amount;\n\n    public ClientOrder(int id, double amount) {\n        this.id = id;\n        this.amount = amount;\n    }\n\n    public double getAmount() {\n        return amount;\n    }\n}\n\nclass CustomerHistory {\n    private String customerName;\n    private java.util.List<ClientOrder> orders = new java.util.ArrayList<>();\n\n    public CustomerHistory(String customerName) {\n        this.customerName = customerName;\n    }\n\n    public void addOrder(ClientOrder order) {\n        orders.add(order);\n    }\n\n    public int getOrderCount() {\n        return orders.size();\n    }\n\n    public double getTotalSpent() {\n        double total = 0.0;\n        for (ClientOrder o : orders) {\n            total += o.getAmount();\n        }\n        return total;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        CustomerHistory ch = new CustomerHistory(\"Anvar\");\n        ch.addOrder(new ClientOrder(1, 150.0));\n        ch.addOrder(new ClientOrder(2, 250.0));\n        System.out.println(\"Buyurtmalar soni: \" + ch.getOrderCount() + \", Jami: \" + ch.getTotalSpent());\n    }\n}",
    "expectedOutput": "Buyurtmalar soni: 2, Jami: 400.0"
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "107. Musiqa Pleylisti va Qo'shiqlar — Multiplicity 0..*",
      "en": "107. Playlist and Songs — Multiplicity 0..*",
      "ru": "107. Плейлист и песни — Кратность 0..*"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nPleylist ochilganda bo'sh bo'ladi. Foydalanuvchi unga xohlagancha trek qo'shishi mumkin (0 dan n gacha).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Song' sinfini yarating: 'private String title;', 'private int durationSec;'. Konstruktor: 'public Song(String title, int durationSec)'. Getter: 'public int getDurationSec()'.\n2. 'Playlist' sinfini yarating: 'private String name;', 'private java.util.List<Song> songs = new java.util.ArrayList<>();'.\n3. 'Playlist' da 'public void addSong(Song s)' va 'public int getTotalDurationSec()' metodini yozing.\n4. 'Main' metodida 'Playlist pl = new Playlist(\"Drayv\"); pl.addSong(new Song(\"Trek 1\", 180)); pl.addSong(new Song(\"Trek 2\", 210));' qiling.\n5. Konsolga: '\"Pleylist davomiyligi: \" + pl.getTotalDurationSec() + \" soniya\"' deb chiqaring. Kutilayotgan natija: \"Pleylist davomiyligi: 390 soniya\".",
      "en": "📖 Steps:\n1. Create Song(title, durationSec).\n2. Create Playlist(name) with List<Song> songs and addSong, getTotalDurationSec.\n3. Test in Main.\nExpected: \"Pleylist davomiyligi: 390 soniya\".",
      "ru": "📖 Шаги:\n1. Создайте Song(title, durationSec).\n2. Создайте Playlist(name) со списком песен и методом getTotalDurationSec.\n3. Проверьте в Main. Вывод: \"Pleylist davomiyligi: 390 soniya\"."
    },
    "requirements": {
      "classes": [
        "Song",
        "Playlist",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Song {\n    \n}\n\nclass Playlist {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Song {\n    private String title;\n    private int durationSec;\n\n    public Song(String title, int durationSec) {\n        this.title = title;\n        this.durationSec = durationSec;\n    }\n\n    public int getDurationSec() {\n        return durationSec;\n    }\n}\n\nclass Playlist {\n    private String name;\n    private java.util.List<Song> songs = new java.util.ArrayList<>();\n\n    public Playlist(String name) {\n        this.name = name;\n    }\n\n    public void addSong(Song song) {\n        songs.add(song);\n    }\n\n    public int getTotalDurationSec() {\n        int total = 0;\n        for (Song s : songs) {\n            total += s.getDurationSec();\n        }\n        return total;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Playlist pl = new Playlist(\"Drayv\");\n        pl.addSong(new Song(\"Trek 1\", 180));\n        pl.addSong(new Song(\"Trek 2\", 210));\n        System.out.println(\"Pleylist davomiyligi: \" + pl.getTotalDurationSec() + \" soniya\");\n    }\n}",
    "expectedOutput": "Pleylist davomiyligi: 390 soniya"
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "108. Kutubxona Javoni va Kitoblar — Multiplicity 0..*",
      "en": "108. Bookshelf and Books — Multiplicity 0..*",
      "ru": "108. Книжная полка и книги — Кратность 0..*"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nKitob javonida ixtiyoriy miqdorda kitob saqlanishi mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'BookItem' sinfini e'lon qiling: 'private String title;'. Konstruktor: 'public BookItem(String title)'. Getter: 'public String getTitle()'.\n2. 'Bookshelf' sinfini e'lon qiling: 'private String category;', 'private java.util.List<BookItem> books = new java.util.ArrayList<>();'.\n3. 'Bookshelf' da 'public void placeBook(BookItem b)' va 'public void listBooks()' metodini yozing: har bir kitob sarlavhasini konsolga chiqarsin.\n4. 'Main' metodida 'Bookshelf shelf = new Bookshelf(\"Dasturlash\"); shelf.placeBook(new BookItem(\"Clean Code\")); shelf.placeBook(new BookItem(\"Effective Java\"));' qiling.\n5. 'shelf.listBooks();' ni chaqiring. Kutilayotgan natija:\nClean Code\nEffective Java",
      "en": "📖 Steps:\n1. Create BookItem(title).\n2. Create Bookshelf(category) with List<BookItem> and placeBook, listBooks.\n3. Test in Main.\nExpected: Clean Code \n Effective Java",
      "ru": "📖 Шаги:\n1. Создайте BookItem(title).\n2. Создайте Bookshelf(category) со списком книг.\n3. Вызовите shelf.listBooks()."
    },
    "requirements": {
      "classes": [
        "BookItem",
        "Bookshelf",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class BookItem {\n    \n}\n\nclass Bookshelf {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BookItem {\n    private String title;\n\n    public BookItem(String title) {\n        this.title = title;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n}\n\nclass Bookshelf {\n    private String category;\n    private java.util.List<BookItem> books = new java.util.ArrayList<>();\n\n    public Bookshelf(String category) {\n        this.category = category;\n    }\n\n    public void placeBook(BookItem book) {\n        books.add(book);\n    }\n\n    public void listBooks() {\n        for (BookItem b : books) {\n            System.out.println(b.getTitle());\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bookshelf shelf = new Bookshelf(\"Dasturlash\");\n        shelf.placeBook(new BookItem(\"Clean Code\"));\n        shelf.placeBook(new BookItem(\"Effective Java\"));\n        shelf.listBooks();\n    }\n}",
    "expectedOutput": "Clean Code\nEffective Java"
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "109. Jamoa va A'zolar — Multiplicity 1..* Validatsiyasi (Lecture 4 Slide 40)",
      "en": "109. Team and Members — Multiplicity 1..* Validation (Slide 40)",
      "ru": "109. Команда и участники — Валидация кратности 1..*"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 40: 'Multiplicity 1..* requires at least one element in the collection. A team cannot exist without at least a team leader/founding member'.\nBo'sh a'zolar ro'yxati bilan jamoa yaratish biznes-mantiqqa ziddir.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Member' sinfini e'lon qiling: 'private String name;'. Konstruktori: 'public Member(String name)'. Getter: 'public String getName()'.\n2. 'Team' sinfini yarating: 'private String teamName;', 'private java.util.List<Member> members = new java.util.ArrayList<>();'.\n3. 'Team' konstruktorida boshlang'ich yetakchi a'zoni talab qiling: 'public Team(String teamName, Member leader)'. Agar 'leader == null' bo'lsa xato bering, aks holda 'members.add(leader);' qiling!\n4. 'Team' da 'public void addMember(Member m)' va 'public int getMemberCount()' metodini yozing.\n5. 'Main' metodida 'Member lead = new Member(\"Aziz\"); Team t = new Team(\"Alpha\", lead); t.addMember(new Member(\"Bekzod\"));' qiling va 'System.out.println(\"Jamoa a'zolari: \" + t.getMemberCount());' deb chiqaring. Kutilayotgan natija: \"Jamoa a'zolari: 2\".",
      "en": "📖 Steps:\n1. Create Member(name).\n2. Create Team(name, Member leader) requiring leader != null and adding it to members list (enforcing 1..*).\n3. Implement addMember and getMemberCount.\nExpected: \"Jamoa a'zolari: 2\".",
      "ru": "📖 Шаги:\n1. Создайте Member(name).\n2. В Team(name, Member leader) требуйте лидера, чтобы гарантировать 1..*.\n3. Вызовите t.getMemberCount(). Вывод: \"Jamoa a'zolari: 2\"."
    },
    "requirements": {
      "classes": [
        "Member",
        "Team",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Member {\n    \n}\n\nclass Team {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Member {\n    private String name;\n\n    public Member(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Team {\n    private String teamName;\n    private java.util.List<Member> members = new java.util.ArrayList<>();\n\n    public Team(String teamName, Member leader) {\n        if (leader == null) {\n            throw new IllegalArgumentException(\"Jamoada kamida 1 a'zo bo'lishi shart!\");\n        }\n        this.teamName = teamName;\n        this.members.add(leader);\n    }\n\n    public void addMember(Member member) {\n        if (member != null) {\n            members.add(member);\n        }\n    }\n\n    public int getMemberCount() {\n        return members.size();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Member lead = new Member(\"Aziz\");\n        Team t = new Team(\"Alpha\", lead);\n        t.addMember(new Member(\"Bekzod\"));\n        System.out.println(\"Jamoa a'zolari: \" + t.getMemberCount());\n    }\n}",
    "expectedOutput": "Jamoa a'zolari: 2"
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "110. Retsept va Masalliqlar — Kamida 1 Masalliq Talabi (1..*)",
      "en": "110. Recipe and Ingredients — Requiring at least 1 Ingredient (1..*)",
      "ru": "110. Рецепт и ингредиенты — Требование минимум 1 ингредиента"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nHech qanday masalliqsiz taom pishirish mumkin emas. Taomni tayyorlashdan oldin masalliqlar soni tekshiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ingredient' sinfini e'lon qiling: 'private String name;'. Konstruktori: 'public Ingredient(String name)'. Getter: 'public String getName()'.\n2. 'Recipe' sinfini e'lon qiling: 'private String dishName;', 'private java.util.List<Ingredient> ingredients = new java.util.ArrayList<>();'.\n3. 'Recipe' da 'public void add(Ingredient i)' va 'public void cook()' metodini yozing.\n4. 'cook()' metodida: agar 'ingredients.isEmpty()' bo'lsa \"Masalliq yo'q!\", aks holda dishName + \" pishirilmoqda (\" + ingredients.size() + \" ta masalliq)\" deb chiqarsin.\n5. 'Main' metodida 'Recipe r = new Recipe(\"Osh\"); r.add(new Ingredient(\"Guruch\")); r.add(new Ingredient(\"Go'sht\")); r.cook();' qiling. Kutilayotgan natija: \"Osh pishirilmoqda (2 ta masalliq)\".",
      "en": "📖 Steps:\n1. Create Ingredient(name).\n2. Create Recipe(dishName) with ingredients list, add, and cook().\n3. cook() verifies ingredients is not empty.\nExpected: \"Osh pishirilmoqda (2 ta masalliq)\".",
      "ru": "📖 Шаги:\n1. Создайте Ingredient(name).\n2. Создайте Recipe(dishName) с проверкой на наличие ингредиентов в cook().\n3. Проверьте в Main. Вывод: \"Osh pishirilmoqda (2 ta masalliq)\"."
    },
    "requirements": {
      "classes": [
        "Ingredient",
        "Recipe",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Ingredient {\n    \n}\n\nclass Recipe {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ingredient {\n    private String name;\n\n    public Ingredient(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Recipe {\n    private String dishName;\n    private java.util.List<Ingredient> ingredients = new java.util.ArrayList<>();\n\n    public Recipe(String dishName) {\n        this.dishName = dishName;\n    }\n\n    public void add(Ingredient ingredient) {\n        ingredients.add(ingredient);\n    }\n\n    public void cook() {\n        if (ingredients.isEmpty()) {\n            System.out.println(\"Masalliq yo'q!\");\n        } else {\n            System.out.println(dishName + \" pishirilmoqda (\" + ingredients.size() + \" ta masalliq)\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Recipe r = new Recipe(\"Osh\");\n        r.add(new Ingredient(\"Guruch\"));\n        r.add(new Ingredient(\"Go'sht\"));\n        r.cook();\n    }\n}",
    "expectedOutput": "Osh pishirilmoqda (2 ta masalliq)"
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "111. Savatchani Rasmiylashtirish — Kamida 1 Mahsulot Talabi (1..*)",
      "en": "111. Cart Checkout — Requiring at Least 1 Item (1..*)",
      "ru": "111. Оформление корзины — Минимум 1 товар для заказа"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nUzum Market yoki Amazon savatchasida tovar bo'lmasa, 'Buyurtma berish' tugmasi bosilganda rad etiladi (Multiplicity 1..*).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SimpleItem' sinfini e'lon qiling: 'private String name;'. Konstruktori: 'public SimpleItem(String name)'.\n2. 'SimpleCart' sinfini e'lon qiling: 'private java.util.List<SimpleItem> items = new java.util.ArrayList<>();'.\n3. 'SimpleCart' da 'public void addItem(SimpleItem item)' va 'public void checkout()' metodini yozing.\n4. 'checkout()' metodida agar 'items.isEmpty()' bo'lsa \"Xatolik: savatcha bo'sh!\", aks holda \"Buyurtma qabul qilindi: \" + items.size() + \" ta tovar\" deb chiqarsin.\n5. 'Main' metodida 'SimpleCart cart = new SimpleCart(); cart.addItem(new SimpleItem(\"Quloqchin\")); cart.checkout();' qiling. Kutilayotgan natija: \"Buyurtma qabul qilindi: 1 ta tovar\".",
      "en": "📖 Steps:\n1. Create SimpleItem(name).\n2. Create SimpleCart with items list, addItem, and checkout().\n3. checkout() validates items is not empty.\nExpected: \"Buyurtma qabul qilindi: 1 ta tovar\".",
      "ru": "📖 Шаги:\n1. Создайте SimpleItem(name).\n2. Создайте SimpleCart с валидацией непустой корзины в checkout().\n3. Проверьте в Main. Вывод: \"Buyurtma qabul qilindi: 1 ta tovar\"."
    },
    "requirements": {
      "classes": [
        "SimpleItem",
        "SimpleCart",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class SimpleItem {\n    \n}\n\nclass SimpleCart {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SimpleItem {\n    private String name;\n\n    public SimpleItem(String name) {\n        this.name = name;\n    }\n}\n\nclass SimpleCart {\n    private java.util.List<SimpleItem> items = new java.util.ArrayList<>();\n\n    public void addItem(SimpleItem item) {\n        items.add(item);\n    }\n\n    public void checkout() {\n        if (items.isEmpty()) {\n            System.out.println(\"Xatolik: savatcha bo'sh!\");\n        } else {\n            System.out.println(\"Buyurtma qabul qilindi: \" + items.size() + \" ta tovar\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SimpleCart cart = new SimpleCart();\n        cart.addItem(new SimpleItem(\"Quloqchin\"));\n        cart.checkout();\n    }\n}",
    "expectedOutput": "Buyurtma qabul qilindi: 1 ta tovar"
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "112. OrderItem — Product va Narx Delegatsiyasi (Seminar 4 Ex 2)",
      "en": "112. OrderItem — Product and Price Delegation (Seminar 4 Ex 2)",
      "ru": "112. OrderItem — Делегирование цены товару"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 2: 'Create OrderItem class with product and quantity attributes. OrderItem should not store unit price separately; instead, getUnitPrice() asks the associated product for its price (delegation)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;', 'private double price;'. Konstruktor: 'public Product(String name, double price)'. Getterlar: 'public String getName()', 'public double getPrice()'.\n2. 'OrderItem' sinfini e'lon qiling: 'private Product product;', 'private int quantity;'. Konstruktor: 'public OrderItem(Product product, int quantity)'.\n3. 'OrderItem' ichida 'public double getUnitPrice()' metodi to'g'ridan-to'g'ri 'product.getPrice();' ni qaytarsin (Delegatsiya!).\n4. 'OrderItem' ichida 'public int getQuantity()' metodini yozing.\n5. 'Main' metodida 'Product p = new Product(\"Smartfon\", 300.0); OrderItem item = new OrderItem(p, 2);' yarating va konsolga: '\"Dona narxi: \" + item.getUnitPrice()' deb chiqaring. Kutilayotgan natija: \"Dona narxi: 300.0\".",
      "en": "📖 Steps (Seminar 4 Ex 2):\n1. Create Product(name, price) with getters.\n2. Create OrderItem(Product product, int quantity).\n3. getUnitPrice() delegates to product.getPrice().\n4. Test in Main.\nExpected: \"Dona narxi: 300.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 2):\n1. Создайте Product(name, price).\n2. Создайте OrderItem(product, quantity).\n3. getUnitPrice() делегирует product.getPrice().\n4. Проверьте в Main. Вывод: \"Dona narxi: 300.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getUnitPrice() {\n        return product.getPrice();\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Smartfon\", 300.0);\n        OrderItem item = new OrderItem(p, 2);\n        System.out.println(\"Dona narxi: \" + item.getUnitPrice());\n    }\n}",
    "expectedOutput": "Dona narxi: 300.0"
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "113. OrderItem.getLineTotal() — Satr Jami Summasini Hisoblash (Seminar 4 Ex 2)",
      "en": "113. OrderItem.getLineTotal() — Line Total Calculation (Seminar 4 Ex 2)",
      "ru": "113. OrderItem.getLineTotal() — Подсчет суммы строки"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 2: 'Add getLineTotal() method to OrderItem that returns quantity multiplied by getUnitPrice()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;', 'private double price;'. Konstruktor va 'getPrice()' yozing.\n2. 'OrderItem' sinfini e'lon qiling: 'private Product product;', 'private int quantity;'. Konstruktor yozing.\n3. 'OrderItem' da 'public double getUnitPrice()' -> 'product.getPrice()' va 'public double getLineTotal()' -> 'quantity * getUnitPrice()' deb hisoblang.\n4. 'Main' metodida 'Product tv = new Product(\"Smart TV\", 500.0); OrderItem item = new OrderItem(tv, 3);' yarating.\n5. Konsolga: '\"Satr jami: \" + item.getLineTotal()' deb chiqaring. Kutilayotgan natija: \"Satr jami: 1500.0\".",
      "en": "📖 Steps (Seminar 4 Ex 2):\n1. Create Product(name, price).\n2. Create OrderItem(product, quantity).\n3. getLineTotal() returns quantity * getUnitPrice().\n4. Test in Main.\nExpected: \"Satr jami: 1500.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 2):\n1. Создайте Product(name, price).\n2. Создайте OrderItem(product, quantity).\n3. getLineTotal() возвращает quantity * getUnitPrice().\n4. Проверьте в Main. Вывод: \"Satr jami: 1500.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getUnitPrice() {\n        return product.getPrice();\n    }\n\n    public double getLineTotal() {\n        return quantity * getUnitPrice();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product tv = new Product(\"Smart TV\", 500.0);\n        OrderItem item = new OrderItem(tv, 3);\n        System.out.println(\"Satr jami: \" + item.getLineTotal());\n    }\n}",
    "expectedOutput": "Satr jami: 1500.0"
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "114. OrderItem Miqdori Validatsiyasi — Manfiy Miqdorni Qat'iy Rad Etish (Seminar 4 Ex 2)",
      "en": "114. OrderItem Quantity Validation — Rejecting Non-Positive Quantity",
      "ru": "114. Валидация количества OrderItem — Запрет неположительных значений"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 2: 'Quantity must be strictly greater than 0. If non-positive quantity is provided, default it to 1 or throw IllegalArgumentException'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;', 'private double price;'.\n2. 'OrderItem' sinfida: konstruktor 'public OrderItem(Product product, int quantity)'.\n3. Agar 'quantity <= 0' bo'lsa, 'this.quantity = 1;' qilib xavfsiz default qiymat o'rnating, aks holda berilgan qiymatni saqlang.\n4. 'OrderItem' da 'public int getQuantity()' metodini yozing.\n5. 'Main' metodida 'Product p = new Product(\"Klaviatura\", 45.0); OrderItem item = new OrderItem(p, -5);' yarating va 'System.out.println(\"Tuzatilgan miqdor: \" + item.getQuantity());' deb chiqaring. Kutilayotgan natija: \"Tuzatilgan miqdor: 1\".",
      "en": "📖 Steps:\n1. Create Product(name, price).\n2. In OrderItem constructor, if quantity <= 0, set quantity = 1.\n3. Test with negative value in Main.\nExpected: \"Tuzatilgan miqdor: 1\".",
      "ru": "📖 Шаги:\n1. Создайте Product(name, price).\n2. В OrderItem при quantity <= 0 установите quantity = 1.\n3. Проверьте с отрицательным числом. Вывод: \"Tuzatilgan miqdor: 1\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        if (quantity <= 0) {\n            this.quantity = 1;\n        } else {\n            this.quantity = quantity;\n        }\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Klaviatura\", 45.0);\n        OrderItem item = new OrderItem(p, -5);\n        System.out.println(\"Tuzatilgan miqdor: \" + item.getQuantity());\n    }\n}",
    "expectedOutput": "Tuzatilgan miqdor: 1"
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "115. OrderItem.toString() — Formatlangan Chek Qatori (Seminar 4 Ex 2)",
      "en": "115. OrderItem.toString() — Formatted Receipt Line (Seminar 4 Ex 2)",
      "ru": "115. OrderItem.toString() — Форматированная строка чека"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 2: 'Implement toString() method in OrderItem returning formatted string like: 2 x Laptop @ 1000.0 = 2000.0'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling: 'private String name;', 'private double price;'. Getterlar: 'getName()', 'getPrice()'.\n2. 'OrderItem' sinfini e'lon qiling: 'private Product product;', 'private int quantity;'. Metodlar: 'getUnitPrice()', 'getLineTotal()'.\n3. 'OrderItem' ichida '@Override public String toString()' metodini yozing: 'quantity + \" x \" + product.getName() + \" @ \" + getUnitPrice() + \" = \" + getLineTotal()'.\n4. 'Main' metodida 'Product laptop = new Product(\"Laptop\", 1000.0); OrderItem item = new OrderItem(laptop, 2);' yarating.\n5. 'System.out.println(item);' ni chaqiring. Kutilayotgan natija: \"2 x Laptop @ 1000.0 = 2000.0\".",
      "en": "📖 Steps (Seminar 4 Ex 2):\n1. Implement toString() in OrderItem returning: \"<qty> x <name> @ <unitPrice> = <lineTotal>\".\n2. In Main, print OrderItem directly.\nExpected: \"2 x Laptop @ 1000.0 = 2000.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 2):\n1. Реализуйте toString() в OrderItem: \"<qty> x <name> @ <unitPrice> = <lineTotal>\".\n2. Выведите OrderItem в Main. Вывод: \"2 x Laptop @ 1000.0 = 2000.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getUnitPrice() {\n        return product.getPrice();\n    }\n\n    public double getLineTotal() {\n        return quantity * getUnitPrice();\n    }\n\n    @Override\n    public String toString() {\n        return quantity + \" x \" + product.getName() + \" @ \" + getUnitPrice() + \" = \" + getLineTotal();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product laptop = new Product(\"Laptop\", 1000.0);\n        OrderItem item = new OrderItem(laptop, 2);\n        System.out.println(item);\n    }\n}",
    "expectedOutput": "2 x Laptop @ 1000.0 = 2000.0"
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "116. ServiceItem.toString() — Xizmat Ko'rsatish Soatlari Formatlanishi",
      "en": "116. ServiceItem.toString() — Service Hours and Rate Formatting",
      "ru": "116. ServiceItem.toString() — Форматирование почасовой услуги"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nDasturlash yoki konsalting xizmatlarida tovar o'rniga soatbay xizmat satri hisoblanadi: \"3 hrs x Web UI @ 50.0 = 150.0\".\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Service' sinfini e'lon qiling: 'private String serviceName;', 'private double hourlyRate;'. Getterlar yozing.\n2. 'ServiceItem' sinfini e'lon qiling: 'private Service service;', 'private int hours;'.\n3. 'public double getTotal()' -> 'hours * service.getHourlyRate()'.\n4. '@Override public String toString()' -> 'hours + \" hrs x \" + service.getServiceName() + \" @ \" + service.getHourlyRate() + \" = \" + getTotal()'.\n5. 'Main' da 'Service s = new Service(\"Web UI\", 50.0); ServiceItem item = new ServiceItem(s, 3); System.out.println(item);' qiling. Kutilayotgan natija: \"3 hrs x Web UI @ 50.0 = 150.0\".",
      "en": "📖 Steps:\n1. Create Service(serviceName, hourlyRate).\n2. Create ServiceItem(service, hours) with toString() returning \"<hours> hrs x <name> @ <rate> = <total>\".\n3. Print in Main.\nExpected: \"3 hrs x Web UI @ 50.0 = 150.0\".",
      "ru": "📖 Шаги:\n1. Создайте Service(serviceName, hourlyRate).\n2. Создайте ServiceItem(service, hours) с toString().\n3. Выведите в Main. Вывод: \"3 hrs x Web UI @ 50.0 = 150.0\"."
    },
    "requirements": {
      "classes": [
        "Service",
        "ServiceItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Service {\n    \n}\n\nclass ServiceItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Service {\n    private String serviceName;\n    private double hourlyRate;\n\n    public Service(String serviceName, double hourlyRate) {\n        this.serviceName = serviceName;\n        this.hourlyRate = hourlyRate;\n    }\n\n    public String getServiceName() {\n        return serviceName;\n    }\n\n    public double getHourlyRate() {\n        return hourlyRate;\n    }\n}\n\nclass ServiceItem {\n    private Service service;\n    private int hours;\n\n    public ServiceItem(Service service, int hours) {\n        this.service = service;\n        this.hours = hours;\n    }\n\n    public double getTotal() {\n        return hours * service.getHourlyRate();\n    }\n\n    @Override\n    public String toString() {\n        return hours + \" hrs x \" + service.getServiceName() + \" @ \" + service.getHourlyRate() + \" = \" + getTotal();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Service s = new Service(\"Web UI\", 50.0);\n        ServiceItem item = new ServiceItem(s, 3);\n        System.out.println(item);\n    }\n}",
    "expectedOutput": "3 hrs x Web UI @ 50.0 = 150.0"
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "117. TicketItem.toString() — Bilet va Joy Band Qilish Satri",
      "en": "117. TicketItem.toString() — Ticket Reservation Receipt Line",
      "ru": "117. TicketItem.toString() — Форматирование строки билетов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTadbir yoki kinoga chipta xarid qilishda chek qatori chipta toifasi va sonini aniq ko'rsatadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Ticket' sinfini e'lon qiling: 'private String zone;', 'private double price;'. Getterlar yozing.\n2. 'TicketItem' sinfini e'lon qiling: 'private Ticket ticket;', 'private int count;'.\n3. 'public double getSubtotal()' -> 'count * ticket.getPrice()'.\n4. '@Override public String toString()' -> 'count + \" ta x \" + ticket.getZone() + \" @ \" + ticket.getPrice() + \" = \" + getSubtotal()'.\n5. 'Main' da 'Ticket t = new Ticket(\"VIP Sector\", 250.0); TicketItem item = new TicketItem(t, 4); System.out.println(item);' qiling. Kutilayotgan natija: \"4 ta x VIP Sector @ 250.0 = 1000.0\".",
      "en": "📖 Steps:\n1. Create Ticket(zone, price).\n2. Create TicketItem(ticket, count) with toString().\n3. Print in Main.\nExpected: \"4 ta x VIP Sector @ 250.0 = 1000.0\".",
      "ru": "📖 Шаги:\n1. Создайте Ticket(zone, price).\n2. Создайте TicketItem(ticket, count) с toString().\n3. Выведите в Main. Вывод: \"4 ta x VIP Sector @ 250.0 = 1000.0\"."
    },
    "requirements": {
      "classes": [
        "Ticket",
        "TicketItem",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Ticket {\n    \n}\n\nclass TicketItem {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Ticket {\n    private String zone;\n    private double price;\n\n    public Ticket(String zone, double price) {\n        this.zone = zone;\n        this.price = price;\n    }\n\n    public String getZone() {\n        return zone;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass TicketItem {\n    private Ticket ticket;\n    private int count;\n\n    public TicketItem(Ticket ticket, int count) {\n        this.ticket = ticket;\n        this.count = count;\n    }\n\n    public double getSubtotal() {\n        return count * ticket.getPrice();\n    }\n\n    @Override\n    public String toString() {\n        return count + \" ta x \" + ticket.getZone() + \" @ \" + ticket.getPrice() + \" = \" + getSubtotal();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Ticket t = new Ticket(\"VIP Sector\", 250.0);\n        TicketItem item = new TicketItem(t, 4);\n        System.out.println(item);\n    }\n}",
    "expectedOutput": "4 ta x VIP Sector @ 250.0 = 1000.0"
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "118. Iterator.remove() — Tsikl Ichida Xavfsiz O'chirish (Lecture 4 Slide 41-43)",
      "en": "118. Iterator.remove() — Safe Removal During Iteration (Slide 41-43)",
      "ru": "118. Iterator.remove() — Безопасное удаление в цикле"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 41-43: 'Modifying a collection directly while iterating using enhanced for-each throws ConcurrentModificationException! To remove elements safely during iteration, always use Iterator.remove()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Main' metodida 'java.util.List<Integer> scores = new java.util.ArrayList<>();' yarating.\n2. Unga qiymatlarni qo'shing: 45, 80, 30, 95, 55.\n3. 'java.util.Iterator<Integer> it = scores.iterator();' oling.\n4. 'while (it.hasNext())' tsiklida: agar 'it.next() < 60' bo'lsa, 'it.remove();' chaqiring.\n5. Konsolga qolgan ballarni: '\"O'tgan ballar: \" + scores' deb chiqaring. Kutilayotgan natija: \"O'tgan ballar: [80, 95]\".",
      "en": "📖 Steps (Slide 41-43):\n1. In Main create scores List: 45, 80, 30, 95, 55.\n2. Use Iterator<Integer> to safely remove elements < 60.\n3. Print remaining: \"O'tgan ballar: \" + scores.\nExpected: \"O'tgan ballar: [80, 95]\".",
      "ru": "📖 Шаги (Слайды 41-43):\n1. В Main создайте scores: 45, 80, 30, 95, 55.\n2. Используйте Iterator для безопасного удаления баллов < 60.\n3. Выведите: \"O'tgan ballar: [80, 95]\"."
    },
    "requirements": {
      "classes": [
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        java.util.List<Integer> scores = new java.util.ArrayList<>();\n        scores.add(45);\n        scores.add(80);\n        scores.add(30);\n        scores.add(95);\n        scores.add(55);\n\n        java.util.Iterator<Integer> it = scores.iterator();\n        while (it.hasNext()) {\n            if (it.next() < 60) {\n                it.remove();\n            }\n        }\n\n        System.out.println(\"O'tgan ballar: \" + scores);\n    }\n}",
    "expectedOutput": "O'tgan ballar: [80, 95]"
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "119. Collection.removeIf() — Zamonaviy Predikatli Tozalash (Slide 42)",
      "en": "119. Collection.removeIf() — Modern Predicate Filtering (Slide 42)",
      "ru": "119. Collection.removeIf() — Удаление по предикату"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nJava 8 dan boshlab to'plamlarni shart asosida tozalashning eng xavfsiz va ixcham usuli — 'removeIf(predicate)'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Main' metodida 'java.util.List<String> words = new java.util.ArrayList<>();' yarating.\n2. Ro'yxatga \"java\", \"\", \"oop\", \"\", \"collection\" so'zlarini qo'shing.\n3. 'words.removeIf(w -> w.isEmpty());' orqali bo'sh satrlarni tozalang.\n4. Konsolga tozalangan ro'yxatni: '\"Toza ro'yxat: \" + words' deb chiqaring.\n5. Kutilayotgan natija: \"Toza ro'yxat: [java, oop, collection]\".",
      "en": "📖 Steps:\n1. In Main create words List with \"java\", \"\", \"oop\", \"\", \"collection\".\n2. Call words.removeIf(w -> w.isEmpty()).\n3. Print: \"Toza ro'yxat: \" + words.\nExpected: \"Toza ro'yxat: [java, oop, collection]\".",
      "ru": "📖 Шаги:\n1. В Main создайте words со строками \"java\", \"\", \"oop\", \"\", \"collection\".\n2. Удалите пустые строки через words.removeIf(w -> w.isEmpty()).\n3. Выведите: \"Toza ro'yxat: [java, oop, collection]\"."
    },
    "requirements": {
      "classes": [
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        java.util.List<String> words = new java.util.ArrayList<>();\n        words.add(\"java\");\n        words.add(\"\");\n        words.add(\"oop\");\n        words.add(\"\");\n        words.add(\"collection\");\n\n        words.removeIf(w -> w.isEmpty());\n\n        System.out.println(\"Toza ro'yxat: \" + words);\n    }\n}",
    "expectedOutput": "Toza ro'yxat: [java, oop, collection]"
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Sinf Munosabatlari va Multiplicity (Aggregation, Composition, 1..*, Seminar 4)",
    "sector": "91-120",
    "title": {
      "uz": "120. Nusxa Olish Orqali Aylanish — Snapshot Iteration (Slide 43)",
      "en": "120. Snapshot Iteration — Iterating Over a Defensive Copy (Slide 43)",
      "ru": "120. Итерация по снимку — Обход защитной копии"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar tsikl davomida to'plamga yangi element qo'shish yoki uni o'zgartirish kerak bo'lsa, 'new ArrayList<>(original)' nusxasi bo'ylab yurish xatolikdan asraydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Main' metodida 'java.util.List<String> tags = new java.util.ArrayList<>();' yarating: \"tech\", \"web\".\n2. 'for (String tag : new java.util.ArrayList<>(tags))' qilib nusxa bo'yicha yuring.\n3. Har bir element uchun asosiy 'tags' ro'yxatiga 'tag + \"-v2\"' ni qo'shing.\n4. Konsolga: '\"Kengaytirilgan teglar: \" + tags' deb chiqaring.\n5. Kutilayotgan natija: \"Kengaytirilgan teglar: [tech, web, tech-v2, web-v2]\".",
      "en": "📖 Steps:\n1. Create tags with \"tech\", \"web\".\n2. Loop over new ArrayList<>(tags) snapshot.\n3. Inside loop add tag + \"-v2\" to original tags.\n4. Print: \"Kengaytirilgan teglar: \" + tags.\nExpected: \"Kengaytirilgan teglar: [tech, web, tech-v2, web-v2]\".",
      "ru": "📖 Шаги:\n1. Создайте tags с \"tech\", \"web\".\n2. Обойдите снимок new ArrayList<>(tags).\n3. Внутри добавьте tag + \"-v2\" в исходный список.\n4. Выведите: \"Kengaytirilgan teglar: [tech, web, tech-v2, web-v2]\"."
    },
    "requirements": {
      "classes": [
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        java.util.List<String> tags = new java.util.ArrayList<>();\n        tags.add(\"tech\");\n        tags.add(\"web\");\n\n        for (String tag : new java.util.ArrayList<>(tags)) {\n            tags.add(tag + \"-v2\");\n        }\n\n        System.out.println(\"Kengaytirilgan teglar: \" + tags);\n    }\n}",
    "expectedOutput": "Kengaytirilgan teglar: [tech, web, tech-v2, web-v2]"
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "121. Order Sinfini Yaratish — Buyurtmaga Tovarlarni Qo'shish (Seminar 4 Ex 3)",
      "en": "121. Order Class Creation — Adding Items to Order (Seminar 4 Ex 3)",
      "ru": "121. Создание класса Order — Добавление товаров в заказ"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Create Order class with orderId, customer, and a List<OrderItem> items = new ArrayList<>() collection. Implement addItem(OrderItem item) and getItemCount()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' va 'OrderItem' sinflarini yarating.\n2. 'Order' sinfini e'lon qiling: 'private int orderId;', 'private String customerName;', 'private java.util.List<OrderItem> items = new java.util.ArrayList<>();'.\n3. 'Order' da 'public void addItem(OrderItem item)' va 'public int getItemCount()' metodlarini yozing ('return items.size();').\n4. 'Main' metodida 'Product p1 = new Product(\"Kitob\", 50.0); Product p2 = new Product(\"Ruchka\", 5.0);' yarating.\n5. 'Order ord = new Order(201, \"Ali\"); ord.addItem(new OrderItem(p1, 2)); ord.addItem(new OrderItem(p2, 5));' qilib konsolga: '\"Savatdagi qatorlar soni: \" + ord.getItemCount()' deb chiqaring. Kutilayotgan natija: \"Savatdagi qatorlar soni: 2\".",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. Create Product and OrderItem.\n2. Create Order(orderId, customerName) with List<OrderItem> items = new ArrayList<>().\n3. Implement addItem(OrderItem) and getItemCount().\n4. Test in Main.\nExpected: \"Savatdagi qatorlar soni: 2\".",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. Создайте Product и OrderItem.\n2. Создайте Order(orderId, customerName) с List<OrderItem> items.\n3. Реализуйте addItem и getItemCount.\n4. Проверьте в Main. Вывод: \"Savatdagi qatorlar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public Product getProduct() {\n        return product;\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private String customerName;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId, String customerName) {\n        this.orderId = orderId;\n        this.customerName = customerName;\n    }\n\n    public void addItem(OrderItem item) {\n        items.add(item);\n    }\n\n    public int getItemCount() {\n        return items.size();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(\"Kitob\", 50.0);\n        Product p2 = new Product(\"Ruchka\", 5.0);\n        Order ord = new Order(201, \"Ali\");\n        ord.addItem(new OrderItem(p1, 2));\n        ord.addItem(new OrderItem(p2, 5));\n        System.out.println(\"Savatdagi qatorlar soni: \" + ord.getItemCount());\n    }\n}",
    "expectedOutput": "Savatdagi qatorlar soni: 2"
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "122. Order.addItem(product, qty) — Qulay O'rnatilgan Metod (Seminar 4 Ex 3)",
      "en": "122. Order.addItem(product, qty) — Overloaded Convenience Method",
      "ru": "122. Order.addItem(product, qty) — Перегруженный метод добавления"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Provide an overloaded addItem(Product product, int quantity) method that instantiates OrderItem internally and adds it to items'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product', 'OrderItem' sinflarini e'lon qiling.\n2. 'Order' sinfida 'public void addItem(Product product, int quantity)' metodini yozing: 'items.add(new OrderItem(product, quantity));'.\n3. 'Order' da 'public int getItemCount()' metodi ro'yxat uzunligini qaytarsin.\n4. 'Main' metodida 'Product mouse = new Product(\"Sichqoncha\", 25.0);' yarating.\n5. 'Order ord = new Order(301, \"Malika\"); ord.addItem(mouse, 3);' qiling va 'System.out.println(\"Kiritilgan qator: \" + ord.getItemCount());' deb chiqaring. Kutilayotgan natija: \"Kiritilgan qator: 1\".",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. Overload addItem(Product product, int quantity) inside Order to create OrderItem internally.\n2. Test in Main and print getItemCount().\nExpected: \"Kiritilgan qator: 1\".",
      "ru": "📖 Шаги:\n1. Перегрузите метод addItem(Product product, int quantity) в Order.\n2. Проверьте в Main и выведите getItemCount(). Вывод: \"Kiritilgan qator: 1\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public Product getProduct() {\n        return product;\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private String customerName;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId, String customerName) {\n        this.orderId = orderId;\n        this.customerName = customerName;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public int getItemCount() {\n        return items.size();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product mouse = new Product(\"Sichqoncha\", 25.0);\n        Order ord = new Order(301, \"Malika\");\n        ord.addItem(mouse, 3);\n        System.out.println(\"Kiritilgan qator: \" + ord.getItemCount());\n    }\n}",
    "expectedOutput": "Kiritilgan qator: 1"
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "123. Order.getTotalUnits() — Barcha Mahsulot Donalarini Jamlash",
      "en": "123. Order.getTotalUnits() — Summing Total Units Across Items",
      "ru": "123. Order.getTotalUnits() — Подсчет общего количества единиц"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nQatorlar soni (satrlar) bilan buyurtmadagi umumiy tovarlar donasi soni farq qiladi (masalan, 2 ta daftar va 3 ta ruchka jami 5 dona tovar bo'ladi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' va 'OrderItem' sinflarini yarating.\n2. 'Order' sinfida 'public int getTotalUnits()' metodini yozing: 'items' bo'ylab aylanib har bir 'item.getQuantity()' ni qo'shsin.\n3. 'Main' metodida ikkita tovar yarating: Non (4 dona) va Choy (2 dona).\n4. 'Order' ga ikkala tovardan qo'shing.\n5. Konsolga: '\"Jami mahsulotlar donasi: \" + ord.getTotalUnits()' deb chiqaring. Kutilayotgan natija: \"Jami mahsulotlar donasi: 6\".",
      "en": "📖 Steps:\n1. Implement getTotalUnits() in Order which sums getQuantity() of all items.\n2. Test in Main with 4 units of bread and 2 units of tea.\nExpected: \"Jami mahsulotlar donasi: 6\".",
      "ru": "📖 Шаги:\n1. Реализуйте getTotalUnits() в Order, суммирующий getQuantity() всех позиций.\n2. Проверьте в Main. Вывод: \"Jami mahsulotlar donasi: 6\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public int getTotalUnits() {\n        int totalUnits = 0;\n        for (OrderItem item : items) {\n            totalUnits += item.getQuantity();\n        }\n        return totalUnits;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product bread = new Product(\"Non\", 4.0);\n        Product tea = new Product(\"Choy\", 10.0);\n        Order ord = new Order(101);\n        ord.addItem(bread, 4);\n        ord.addItem(tea, 2);\n        System.out.println(\"Jami mahsulotlar donasi: \" + ord.getTotalUnits());\n    }\n}",
    "expectedOutput": "Jami mahsulotlar donasi: 6"
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "124. Order.addItem Miqdor Tekshiruvi — Manfiy Miqdorni Rad Etish (Seminar 4 Ex 3)",
      "en": "124. Order.addItem Quantity Check — Rejecting Zero or Negative (Seminar 4 Ex 3)",
      "ru": "124. Проверка количества в Order.addItem — Отклонение неположительных значений"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'In addItem(product, quantity), ensure quantity > 0. If quantity <= 0, do not add the item and print an error message'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product', 'OrderItem' sinflarini e'lon qiling.\n2. 'Order' sinfida 'public void addItem(Product product, int quantity)' metodida:\n   - 'if (quantity <= 0) { System.out.println(\"Noto'g'ri miqdor: \" + quantity); return; }'\n   - aks holda 'items.add(new OrderItem(product, quantity));' qiling.\n3. 'Main' metodida 'Product water = new Product(\"Suv\", 3.0);' yarating.\n4. 'Order ord = new Order(401); ord.addItem(water, -2);' qilib noto'g'ri qiymat bering.\n5. Kutilayotgan natija: \"Noto'g'ri miqdor: -2\".",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. In addItem(product, quantity), if quantity <= 0 print \"Noto'g'ri miqdor: <qty>\" and return.\n2. Test in Main with quantity -2.\nExpected: \"Noto'g'ri miqdor: -2\".",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. В addItem(product, quantity) при quantity <= 0 выведите \"Noto'g'ri miqdor: <qty>\" и завершите метод.\n2. Проверьте в Main с -2. Вывод: \"Noto'g'ri miqdor: -2\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        if (quantity <= 0) {\n            System.out.println(\"Noto'g'ri miqdor: \" + quantity);\n            return;\n        }\n        items.add(new OrderItem(product, quantity));\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product water = new Product(\"Suv\", 3.0);\n        Order ord = new Order(401);\n        ord.addItem(water, -2);\n    }\n}",
    "expectedOutput": "Noto'g'ri miqdor: -2"
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "125. Bir Xil Mahsulotni Birlashtirish — Mavjud Satr Miqdorini Oshirish",
      "en": "125. Merging Duplicate Products — Increasing Quantity of Existing Line",
      "ru": "125. Объединение одинаковых товаров — Увеличение количества в строке"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar foydalanuvchi bir xil tovardan yana qo'shsa, alohida satr yaratmasdan o'sha tovarning soni oshiriladi (savatchaning aqlli birlashtirish mexanizmi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' sinfini e'lon qiling ('getName()', 'getPrice()').\n2. 'OrderItem' sinfida 'public void addQuantity(int extra)' metodini yozing ('this.quantity += extra;').\n3. 'Order.addItem(Product p, int qty)' metodida: agar tovar ro'yxatda mavjud bo'lsa, uning sonini oshiring va qayting. Mavjud bo'lmasa yangi satr qo'shing.\n4. 'Main' metodida 'Product coffee = new Product(\"Kofe\", 15.0); Order ord = new Order(501); ord.addItem(coffee, 2); ord.addItem(coffee, 3);' qiling.\n5. Konsolga: '\"Savat qatorlari: \" + ord.getItemCount() + \", Dona: \" + ord.getTotalUnits()' deb chiqaring. Kutilayotgan natija: \"Savat qatorlari: 1, Dona: 5\".",
      "en": "📖 Steps:\n1. In OrderItem add addQuantity(int extra).\n2. In Order.addItem(), if product is already in items, call addQuantity. Otherwise add new item.\n3. In Main, add 2 coffee then 3 coffee.\nExpected: \"Savat qatorlari: 1, Dona: 5\".",
      "ru": "📖 Шаги:\n1. В OrderItem добавьте addQuantity(extra).\n2. В Order.addItem(), если товар уже есть, увеличьте его количество. Иначе добавьте новую строку.\n3. Выведите: \"Savat qatorlari: 1, Dona: 5\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public Product getProduct() {\n        return product;\n    }\n\n    public int getQuantity() {\n        return quantity;\n    }\n\n    public void addQuantity(int extra) {\n        this.quantity += extra;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        for (OrderItem item : items) {\n            if (item.getProduct().getName().equals(product.getName())) {\n                item.addQuantity(quantity);\n                return;\n            }\n        }\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public int getItemCount() {\n        return items.size();\n    }\n\n    public int getTotalUnits() {\n        int total = 0;\n        for (OrderItem item : items) {\n            total += item.getQuantity();\n        }\n        return total;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product coffee = new Product(\"Kofe\", 15.0);\n        Order ord = new Order(501);\n        ord.addItem(coffee, 2);\n        ord.addItem(coffee, 3);\n        System.out.println(\"Savat qatorlari: \" + ord.getItemCount() + \", Dona: \" + ord.getTotalUnits());\n    }\n}",
    "expectedOutput": "Savat qatorlari: 1, Dona: 5"
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "126. Savatcha Cheklovi — Maksimal Qatorlar Sonini Nazorat Qilish",
      "en": "126. Cart Constraint — Enforcing Maximum Lines Limit",
      "ru": "126. Ограничение корзины — Лимит количества строк"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAyrim tizimlarda buyurtmada maksimal satrlar chegarasi (masalan, ko'pi bilan 3 ta har xil mahsulot) o'rnatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' va 'OrderItem' sinflarini e'lon qiling.\n2. 'Order' sinfida 'private final int MAX_ITEMS = 2;' e'lon qiling.\n3. 'addItem(Product p, int qty)' metodida: agar 'items.size() >= MAX_ITEMS' bo'lsa, konsolga \"Buyurtma chegarasi to'lgan!\" deb chiqarsin va qo'shmasin.\n4. 'Main' da 3 ta turli tovar qo'shishga urinib ko'ring: Non, Sut, Shakar.\n5. Uchinchi tovar qo'shilayotganda kutilayotgan natija: \"Buyurtma chegarasi to'lgan!\".",
      "en": "📖 Steps:\n1. Set MAX_ITEMS = 2 in Order.\n2. In addItem, if items.size() >= MAX_ITEMS, print \"Buyurtma chegarasi to'lgan!\" and do not add.\n3. Test in Main.\nExpected: \"Buyurtma chegarasi to'lgan!\".",
      "ru": "📖 Шаги:\n1. Задайте MAX_ITEMS = 2 в Order.\n2. При превышении выведите \"Buyurtma chegarasi to'lgan!\".\n3. Проверьте в Main. Вывод: \"Buyurtma chegarasi to'lgan!\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n\n    public Product(String name) {\n        this.name = name;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private final int MAX_ITEMS = 2;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        if (items.size() >= MAX_ITEMS) {\n            System.out.println(\"Buyurtma chegarasi to'lgan!\");\n            return;\n        }\n        items.add(new OrderItem(product, quantity));\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product p1 = new Product(\"Non\");\n        Product p2 = new Product(\"Sut\");\n        Product p3 = new Product(\"Shakar\");\n        Order ord = new Order(601);\n        ord.addItem(p1, 1);\n        ord.addItem(p2, 1);\n        ord.addItem(p3, 1);\n    }\n}",
    "expectedOutput": "Buyurtma chegarasi to'lgan!"
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "127. Order.getItemsTotal() — Savatdagi Barcha Tovarlar Summasi (Seminar 4 Ex 3)",
      "en": "127. Order.getItemsTotal() — Summing Total Cost of Items (Seminar 4 Ex 3)",
      "ru": "127. Order.getItemsTotal() — Общая сумма стоимости товаров"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Implement getItemsTotal() in Order. It loops over items and accumulates item.getLineTotal()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' ('getPrice()') va 'OrderItem' ('getLineTotal()') sinflarini yarating.\n2. 'Order' da 'public double getItemsTotal()' metodini yozing: barcha satrlar summasini to'plab qaytarsin.\n3. 'Main' metodida 'Product kitob = new Product(\"Java Kitob\", 40.0); Product daftar = new Product(\"Daftar\", 10.0);' yarating.\n4. 'Order ord = new Order(701); ord.addItem(kitob, 2); ord.addItem(daftar, 5);' qiling.\n5. Konsolga: '\"Tovarlar summasi: \" + ord.getItemsTotal()' deb chiqaring. Kutilayotgan natija: \"Tovarlar summasi: 130.0\".",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. In Order, implement getItemsTotal() accumulating item.getLineTotal().\n2. In Main, add 2 books (40.0 ea) and 5 notebooks (10.0 ea).\n3. Print getItemsTotal().\nExpected: \"Tovarlar summasi: 130.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. В Order реализуйте getItemsTotal(), суммирующий item.getLineTotal().\n2. Проверьте в Main. Вывод: \"Tovarlar summasi: 130.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getLineTotal() {\n        return quantity * product.getPrice();\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public double getItemsTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getLineTotal();\n        }\n        return sum;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product kitob = new Product(\"Java Kitob\", 40.0);\n        Product daftar = new Product(\"Daftar\", 10.0);\n        Order ord = new Order(701);\n        ord.addItem(kitob, 2);\n        ord.addItem(daftar, 5);\n        System.out.println(\"Tovarlar summasi: \" + ord.getItemsTotal());\n    }\n}",
    "expectedOutput": "Tovarlar summasi: 130.0"
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "128. Order.getDeliveryCost() — Yetkazish Xarajati Sharti (Seminar 4 Ex 3)",
      "en": "128. Order.getDeliveryCost() — Delivery Fee Logic (Seminar 4 Ex 3)",
      "ru": "128. Order.getDeliveryCost() — Расчет стоимости доставки"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Implement getDeliveryCost(): if itemsTotal is >= 500.0, delivery is free (0.0). Otherwise, delivery costs 30.0'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product', 'OrderItem', 'Order' sinflarini e'lon qiling.\n2. 'Order' ichida 'public double getDeliveryCost()' metodini yozing:\n   - 'if (getItemsTotal() >= 500.0) return 0.0; else return 30.0;'\n3. 'Main' metodida 'Product phone = new Product(\"Telefon\", 600.0);' bilan 1-buyurtma yarating (600 >= 500 bo'lgani uchun 0.0).\n4. 'Product caseCover = new Product(\"G'ilof\", 50.0);' bilan 2-buyurtma yarating (50 < 500 bo'lgani uchun 30.0).\n5. Ikkala yetkazish narxini konsolga chiqaring. Kutilayotgan natija:\nYetkazish 1: 0.0\nYetkazish 2: 30.0",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. In Order, getDeliveryCost() returns 0.0 if getItemsTotal() >= 500.0, else 30.0.\n2. Test both conditions in Main.\nExpected: Yetkazish 1: 0.0 \n Yetkazish 2: 30.0",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. В Order реализуйте getDeliveryCost(): 0.0 если сумма >= 500.0, иначе 30.0.\n2. Проверьте оба случая в Main. Вывод: Yetkazish 1: 0.0 \n Yetkazish 2: 30.0"
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getLineTotal() {\n        return quantity * product.getPrice();\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public double getItemsTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getLineTotal();\n        }\n        return sum;\n    }\n\n    public double getDeliveryCost() {\n        if (getItemsTotal() >= 500.0) {\n            return 0.0;\n        } else {\n            return 30.0;\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product phone = new Product(\"Telefon\", 600.0);\n        Order ord1 = new Order(1);\n        ord1.addItem(phone, 1);\n        System.out.println(\"Yetkazish 1: \" + ord1.getDeliveryCost());\n\n        Product caseCover = new Product(\"G'ilof\", 50.0);\n        Order ord2 = new Order(2);\n        ord2.addItem(caseCover, 1);\n        System.out.println(\"Yetkazish 2: \" + ord2.getDeliveryCost());\n    }\n}",
    "expectedOutput": "Yetkazish 1: 0.0\nYetkazish 2: 30.0"
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "129. Order.getTotal() — Yakuniy To'lov Summasi (Seminar 4 Ex 3)",
      "en": "129. Order.getTotal() — Grand Total Payment Calculation (Seminar 4 Ex 3)",
      "ru": "129. Order.getTotal() — Итоговая сумма к оплате"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Implement getTotal(): it returns getItemsTotal() + getDeliveryCost()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Order' sinfida 'public double getTotal()' metodini yozing: 'return getItemsTotal() + getDeliveryCost();'.\n2. 'Main' metodida 'Product monitor = new Product(\"Monitor\", 200.0);' yarating.\n3. 'Order ord = new Order(801); ord.addItem(monitor, 1);' (Items: 200.0, Delivery: 30.0, Total: 230.0).\n4. Konsolga: '\"Yakuniy to'lov: \" + ord.getTotal()' deb chiqaring.\n5. Kutilayotgan natija: \"Yakuniy to'lov: 230.0\".",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. In Order, getTotal() returns getItemsTotal() + getDeliveryCost().\n2. In Main, add 200.0 product. Delivery is 30.0. Total is 230.0.\n3. Print: \"Yakuniy to'lov: 230.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. В Order реализуйте getTotal(), суммирующий товары и доставку.\n2. Проверьте в Main. Вывод: \"Yakuniy to'lov: 230.0\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getLineTotal() {\n        return quantity * product.getPrice();\n    }\n}\n\nclass Order {\n    private int orderId;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public double getItemsTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getLineTotal();\n        }\n        return sum;\n    }\n\n    public double getDeliveryCost() {\n        return getItemsTotal() >= 500.0 ? 0.0 : 30.0;\n    }\n\n    public double getTotal() {\n        return getItemsTotal() + getDeliveryCost();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product monitor = new Product(\"Monitor\", 200.0);\n        Order ord = new Order(801);\n        ord.addItem(monitor, 1);\n        System.out.println(\"Yakuniy to'lov: \" + ord.getTotal());\n    }\n}",
    "expectedOutput": "Yakuniy to'lov: 230.0"
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "130. Order.printSummary() — To'liq Xarid Chekini Chop Etish (Seminar 4 Ex 3)",
      "en": "130. Order.printSummary() — Printing Full Receipt Summary (Seminar 4 Ex 3)",
      "ru": "130. Order.printSummary() — Печать полной сводки заказа"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 3: 'Implement printSummary() in Order. It should print customer name, each order item, delivery cost, and the grand total'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'OrderItem' da 'toString()' metodini: 'quantity + \" x \" + product.getName() + \" = \" + getLineTotal()' qilib yozing.\n2. 'Order' sinfida 'public void printSummary()' metodini yozing:\n   - Konsolga: '\"Mijoz: \" + customerName'\n   - Har bir item uchun: 'System.out.println(item);'\n   - '\"Yetkazish: \" + getDeliveryCost()'\n   - '\"Jami: \" + getTotal()'\n3. 'Main' metodida 'Product keyboard = new Product(\"Klaviatura\", 50.0);' yarating.\n4. 'Order ord = new Order(901, \"Timur\"); ord.addItem(keyboard, 2);' qiling.\n5. 'ord.printSummary();' ni chaqiring. Kutilayotgan natija:\nMijoz: Timur\n2 x Klaviatura = 100.0\nYetkazish: 30.0\nJami: 130.0",
      "en": "📖 Steps (Seminar 4 Ex 3):\n1. In Order, printSummary() prints customer, all items, delivery cost, and total.\n2. Call printSummary() in Main.\nExpected:\nMijoz: Timur\n2 x Klaviatura = 100.0\nYetkazish: 30.0\nJami: 130.0",
      "ru": "📖 Шаги (Семинар 4 Упр 3):\n1. В Order реализуйте printSummary(), выводящий клиента, товары, доставку и итог.\n2. Вызовите printSummary() в Main."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getLineTotal() {\n        return quantity * product.getPrice();\n    }\n\n    @Override\n    public String toString() {\n        return quantity + \" x \" + product.getName() + \" = \" + getLineTotal();\n    }\n}\n\nclass Order {\n    private int orderId;\n    private String customerName;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId, String customerName) {\n        this.orderId = orderId;\n        this.customerName = customerName;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public double getItemsTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getLineTotal();\n        }\n        return sum;\n    }\n\n    public double getDeliveryCost() {\n        return getItemsTotal() >= 500.0 ? 0.0 : 30.0;\n    }\n\n    public double getTotal() {\n        return getItemsTotal() + getDeliveryCost();\n    }\n\n    public void printSummary() {\n        System.out.println(\"Mijoz: \" + customerName);\n        for (OrderItem item : items) {\n            System.out.println(item);\n        }\n        System.out.println(\"Yetkazish: \" + getDeliveryCost());\n        System.out.println(\"Jami: \" + getTotal());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Product keyboard = new Product(\"Klaviatura\", 50.0);\n        Order ord = new Order(901, \"Timur\");\n        ord.addItem(keyboard, 2);\n        ord.printSummary();\n    }\n}",
    "expectedOutput": "Mijoz: Timur\n2 x Klaviatura = 100.0\nYetkazish: 30.0\nJami: 130.0"
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "131. Chekka Yetkazish Manzilini Integratsiya Qilish (Seminar 4 Ex 3 & Ex 1)",
      "en": "131. Integrating Delivery Address into Summary (Seminar 4 Ex 3 & Ex 1)",
      "ru": "131. Интеграция адреса доставки в сводку"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nMijozning manzili to'g'ridan-to'g'ri chekning yuqori qismida ko'rsatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfida 'name' va 'ShippingAddress' maydonlari bo'lsin.\n2. 'Order' sinfi konstruktorida 'Customer' qabul qilsin.\n3. 'Order.printReceiptHeader()' metodi: 'customer.getName() + \" | Manzil: \" + customer.getAddress().getFullAddress()' deb chop etsin.\n4. 'Main' metodida mijoz va manzil yarating (\"Amir Temur 10\", \"Samarqand\").\n5. 'printReceiptHeader()' ni chaqiring. Kutilayotgan natija: \"Aziza | Manzil: Amir Temur 10, Samarqand\".",
      "en": "📖 Steps:\n1. Customer has name and ShippingAddress.\n2. Order receives Customer.\n3. printReceiptHeader() prints customer and full address.\nExpected: \"Aziza | Manzil: Amir Temur 10, Samarqand\".",
      "ru": "📖 Шаги:\n1. Customer содержит name и ShippingAddress.\n2. Order принимает Customer.\n3. Вызовите printReceiptHeader(). Вывод: \"Aziza | Manzil: Amir Temur 10, Samarqand\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Customer {\n    private String name;\n    private ShippingAddress address;\n\n    public Customer(String name, ShippingAddress address) {\n        this.name = name;\n        this.address = address;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public ShippingAddress getAddress() {\n        return address;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private Customer customer;\n\n    public Order(int orderId, Customer customer) {\n        this.orderId = orderId;\n        this.customer = customer;\n    }\n\n    public void printReceiptHeader() {\n        System.out.println(customer.getName() + \" | Manzil: \" + customer.getAddress().getFullAddress());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ShippingAddress addr = new ShippingAddress(\"Amir Temur 10\", \"Samarqand\");\n        Customer c = new Customer(\"Aziza\", addr);\n        Order ord = new Order(902, c);\n        ord.printReceiptHeader();\n    }\n}",
    "expectedOutput": "Aziza | Manzil: Amir Temur 10, Samarqand"
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "132. Buyurtma Holati — Status Enumi Bilan Chekni Yangilash",
      "en": "132. Order Status — Tracking Order Lifecycle with Enum",
      "ru": "132. Статус заказа — Отслеживание жизненного цикла через Enum"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma boshida 'NEW' holatida bo'ladi, to'lov amalga oshirilgach 'CONFIRMED' ga o'zgaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'enum OrderStatus { NEW, CONFIRMED, DELIVERED }' e'lon qiling.\n2. 'Order' sinfida 'private OrderStatus status = OrderStatus.NEW;' saqlang.\n3. 'public void confirm()' metodida 'this.status = OrderStatus.CONFIRMED;' qiling.\n4. 'public OrderStatus getStatus()' getterini yozing.\n5. 'Main' metodida yangi order ochib statusini chiqaring, so'ng 'confirm()' qilib qayta chiqaring. Kutilayotgan natija:\nStatus: NEW\nStatus: CONFIRMED",
      "en": "📖 Steps:\n1. Define enum OrderStatus { NEW, CONFIRMED, DELIVERED }.\n2. In Order, maintain status starting at NEW, with confirm() switching to CONFIRMED.\n3. Test in Main.\nExpected: Status: NEW \n Status: CONFIRMED",
      "ru": "📖 Шаги:\n1. Создайте enum OrderStatus { NEW, CONFIRMED, DELIVERED }.\n2. В Order меняйте статус на CONFIRMED через confirm().\n3. Проверьте в Main. Вывод: Status: NEW \n Status: CONFIRMED"
    },
    "requirements": {
      "classes": [
        "OrderStatus",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "enum OrderStatus {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "enum OrderStatus {\n    NEW, CONFIRMED, DELIVERED\n}\n\nclass Order {\n    private int orderId;\n    private OrderStatus status = OrderStatus.NEW;\n\n    public Order(int orderId) {\n        this.orderId = orderId;\n    }\n\n    public void confirm() {\n        this.status = OrderStatus.CONFIRMED;\n    }\n\n    public OrderStatus getStatus() {\n        return status;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Order ord = new Order(1001);\n        System.out.println(\"Status: \" + ord.getStatus());\n        ord.confirm();\n        System.out.println(\"Status: \" + ord.getStatus());\n    }\n}",
    "expectedOutput": "Status: NEW\nStatus: CONFIRMED"
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "133. Customer.accountBalance va deduct() — Seminar 4 Ex 4 Asoslari",
      "en": "133. Customer.accountBalance and deduct() — Seminar 4 Ex 4 Foundations",
      "ru": "133. Customer.accountBalance и метод deduct() — Семинар 4 Упр 4"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 4: 'Add accountBalance attribute to Customer. Implement deduct(amount) which subtracts the amount if balance is sufficient, or returns false'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfini e'lon qiling: 'private String name;', 'private double accountBalance;'.\n2. Konstruktor: 'public Customer(String name, double initialBalance)'.\n3. 'public boolean deduct(double amount)' metodida: agar 'accountBalance >= amount' bo'lsa, 'accountBalance -= amount; return true;' qilsin, aks holda 'return false;' bo'lsin.\n4. 'Main' metodida 'Customer c = new Customer(\"Diyor\", 100.0);' yarating.\n5. 'c.deduct(40.0);' chaqirib qolgan balansni chiqaring: '\"Qoldiq balans: \" + c.getBalance()'. Kutilayotgan natija: \"Qoldiq balans: 60.0\".",
      "en": "📖 Steps (Seminar 4 Ex 4):\n1. In Customer add accountBalance and deduct(amount).\n2. deduct returns true if sufficient balance, false otherwise.\n3. Test in Main.\nExpected: \"Qoldiq balans: 60.0\".",
      "ru": "📖 Шаги (Семинар 4 Упр 4):\n1. В Customer добавьте accountBalance и deduct(amount).\n2. Проверьте списание в Main. Вывод: \"Qoldiq balans: 60.0\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n    private double accountBalance;\n\n    public Customer(String name, double initialBalance) {\n        this.name = name;\n        this.accountBalance = initialBalance;\n    }\n\n    public boolean deduct(double amount) {\n        if (accountBalance >= amount) {\n            accountBalance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return accountBalance;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Diyor\", 100.0);\n        c.deduct(40.0);\n        System.out.println(\"Qoldiq balans: \" + c.getBalance());\n    }\n}",
    "expectedOutput": "Qoldiq balans: 60.0"
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "134. Order.place() — Buyurtmani Rasmiylashtirish va To'lov (Seminar 4 Ex 4)",
      "en": "134. Order.place() — Order Placement and Payment (Seminar 4 Ex 4)",
      "ru": "134. Order.place() — Размещение заказа и списание средств"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 4: 'Implement place() method in Order. It attempts to deduct getTotal() from customer.accountBalance. If successful, print confirmation; otherwise print insufficient funds'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfini ('deduct(amount)', 'getBalance()') yarating.\n2. 'Order' sinfida 'Customer customer;' maydonini saqlang va 'getTotal()' metodini yozing.\n3. 'public void place()' metodida:\n   - 'if (customer.deduct(getTotal())) { System.out.println(\"Buyurtma muvaffaqiyatli qabul qilindi!\"); }'\n   - 'else { System.out.println(\"Xatolik: hisobda yetarli mablag' yo'q!\"); }'\n4. 'Main' metodida balansi 50.0 bo'lgan mijoz va 30.0 lik buyurtma yarating, 'ord.place();' qiling.\n5. Kutilayotgan natija: \"Buyurtma muvaffaqiyatli qabul qilindi!\".",
      "en": "📖 Steps (Seminar 4 Ex 4):\n1. In Order, place() calls customer.deduct(getTotal()).\n2. Print appropriate success or failure message.\n3. Test in Main.\nExpected: \"Buyurtma muvaffaqiyatli qabul qilindi!\".",
      "ru": "📖 Шаги (Семинар 4 Упр 4):\n1. В Order метод place() вызывает customer.deduct(getTotal()).\n2. Выведите статус успешности.\n3. Проверьте в Main. Вывод: \"Buyurtma muvaffaqiyatli qabul qilindi!\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n    private double accountBalance;\n\n    public Customer(String name, double initialBalance) {\n        this.name = name;\n        this.accountBalance = initialBalance;\n    }\n\n    public boolean deduct(double amount) {\n        if (accountBalance >= amount) {\n            accountBalance -= amount;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Order {\n    private int id;\n    private Customer customer;\n    private double total;\n\n    public Order(int id, Customer customer, double total) {\n        this.id = id;\n        this.customer = customer;\n        this.total = total;\n    }\n\n    public double getTotal() {\n        return total;\n    }\n\n    public void place() {\n        if (customer.deduct(getTotal())) {\n            System.out.println(\"Buyurtma muvaffaqiyatli qabul qilindi!\");\n        } else {\n            System.out.println(\"Xatolik: hisobda yetarli mablag' yo'q!\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Olim\", 50.0);\n        Order ord = new Order(1, c, 30.0);\n        ord.place();\n    }\n}",
    "expectedOutput": "Buyurtma muvaffaqiyatli qabul qilindi!"
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "135. Order.cancel() va Pulni Qaytarish (Refund)",
      "en": "135. Order.cancel() and Balance Refund Logic",
      "ru": "135. Order.cancel() и возврат средств на баланс"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma bekor qilinganda to'langan pul mijozning balansiga qaytarilishi kerak (Refund operatsiyasi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfida 'public void refund(double amount)' metodini yozing ('accountBalance += amount;').\n2. 'Order' sinfida 'public void cancel()' metodida: agar buyurtma to'langan bo'lsa 'customer.refund(total);' qilsin va \"Buyurtma bekor qilindi, mablag' qaytarildi\" deb chiqarsin.\n3. 'Main' metodida boshlang'ich balansi 100.0 bo'lgan mijozdan 40.0 lik buyurtma yeching (qoldiq: 60.0).\n4. So'ngra buyurtmani bekor qiling ('ord.cancel();').\n5. Mijozning yangilangan balansini chiqaring. Kutilayotgan natija:\nBuyurtma bekor qilindi, mablag' qaytarildi\nQaytarilgan balans: 100.0",
      "en": "📖 Steps:\n1. In Customer add refund(amount).\n2. In Order implement cancel() which refunds total to customer.\n3. Test in Main.\nExpected:\nBuyurtma bekor qilindi, mablag' qaytarildi\nQaytarilgan balans: 100.0",
      "ru": "📖 Шаги:\n1. В Customer добавьте refund(amount).\n2. В Order метод cancel() возвращает средства клиенту.\n3. Проверьте в Main."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n    private double accountBalance;\n\n    public Customer(String name, double initialBalance) {\n        this.name = name;\n        this.accountBalance = initialBalance;\n    }\n\n    public void deduct(double amount) {\n        accountBalance -= amount;\n    }\n\n    public void refund(double amount) {\n        accountBalance += amount;\n    }\n\n    public double getBalance() {\n        return accountBalance;\n    }\n}\n\nclass Order {\n    private Customer customer;\n    private double total;\n\n    public Order(Customer customer, double total) {\n        this.customer = customer;\n        this.total = total;\n    }\n\n    public void cancel() {\n        customer.refund(total);\n        System.out.println(\"Buyurtma bekor qilindi, mablag' qaytarildi\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Vali\", 100.0);\n        c.deduct(40.0);\n        Order ord = new Order(c, 40.0);\n        ord.cancel();\n        System.out.println(\"Qaytarilgan balans: \" + c.getBalance());\n    }\n}",
    "expectedOutput": "Buyurtma bekor qilindi, mablag' qaytarildi\nQaytarilgan balans: 100.0"
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "136. Ko'p Manzillarni Saqlash — Map<String, ShippingAddress> (Seminar 4 Ex 5)",
      "en": "136. Multi-Address Management — Map<String, ShippingAddress> (Seminar 4 Ex 5)",
      "ru": "136. Хранение нескольких адресов — Map<String, ShippingAddress>"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 5: 'Support multiple delivery addresses using a Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>(). Implement addDeliveryAddress(String label, ShippingAddress address)'.\nMijoz o'z profilinga bir nechta manzilni (\"Uy\", \"Ofis\", \"Ota-onam\") yorliq (label) bilan saqlashi mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShippingAddress' sinfini e'lon qiling ('street', 'city').\n2. 'Customer' sinfida 'private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();' e'lon qiling.\n3. 'public void addDeliveryAddress(String label, ShippingAddress addr)' metodida xaritaga qo'shing.\n4. 'public int getAddressCount()' metodida 'deliveryAddresses.size()' qaytaring.\n5. 'Main' da \"Uy\" va \"Ofis\" manzillarini qo'shib, umumiy sonini chiqaring. Kutilayotgan natija: \"Saqlangan manzillar soni: 2\".",
      "en": "📖 Steps (Seminar 4 Ex 5):\n1. In Customer declare Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>().\n2. Implement addDeliveryAddress(label, address) and getAddressCount().\n3. Add \"Uy\" and \"Ofis\" in Main.\nExpected: \"Saqlangan manzillar soni: 2\".",
      "ru": "📖 Шаги (Семинар 4 Упр 5):\n1. В Customer объявите Map<String, ShippingAddress> deliveryAddresses = new LinkedHashMap<>().\n2. Реализуйте addDeliveryAddress и getAddressCount.\n3. Проверьте в Main. Вывод: \"Saqlangan manzillar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n}\n\nclass Customer {\n    private String name;\n    private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();\n\n    public Customer(String name) {\n        this.name = name;\n    }\n\n    public void addDeliveryAddress(String label, ShippingAddress address) {\n        deliveryAddresses.put(label, address);\n    }\n\n    public int getAddressCount() {\n        return deliveryAddresses.size();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Kamron\");\n        c.addDeliveryAddress(\"Uy\", new ShippingAddress(\"Bodomzor 12\", \"Toshkent\"));\n        c.addDeliveryAddress(\"Ofis\", new ShippingAddress(\"Mustaqillik 5\", \"Toshkent\"));\n        System.out.println(\"Saqlangan manzillar soni: \" + c.getAddressCount());\n    }\n}",
    "expectedOutput": "Saqlangan manzillar soni: 2"
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "137. Customer.getAddressLabels() — Manzil Yorliqlari To'plami (Seminar 4 Ex 5)",
      "en": "137. Customer.getAddressLabels() — Returning Address Labels Set",
      "ru": "137. Customer.getAddressLabels() — Получение меток адресов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 5: 'Implement getAddressLabels() returning Set<String> of address labels (using keySet())'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfida 'public java.util.Set<String> getAddressLabels()' metodini yozing: 'return deliveryAddresses.keySet();'.\n2. 'Customer' ga 'removeDeliveryAddress(String label)' metodini qo'shing: 'deliveryAddresses.remove(label);'.\n3. 'Main' metodida \"Uy\", \"Ofis\", \"Dacha\" manzillarini qo'shing.\n4. \"Dacha\" manzilini o'chirib tashlang ('removeDeliveryAddress(\"Dacha\");').\n5. Qolgan yorliqlarni chop eting: '\"Yorliqlar: \" + c.getAddressLabels()'. Kutilayotgan natija: \"Yorliqlar: [Uy, Ofis]\".",
      "en": "📖 Steps (Seminar 4 Ex 5):\n1. In Customer, getAddressLabels() returns deliveryAddresses.keySet().\n2. Implement removeDeliveryAddress(label).\n3. Test in Main.\nExpected: \"Yorliqlar: [Uy, Ofis]\".",
      "ru": "📖 Шаги:\n1. В Customer метод getAddressLabels() возвращает keySet().\n2. Реализуйте removeDeliveryAddress(label).\n3. Проверьте в Main. Вывод: \"Yorliqlar: [Uy, Ofis]\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n\n    public ShippingAddress(String street) {\n        this.street = street;\n    }\n}\n\nclass Customer {\n    private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();\n\n    public void addDeliveryAddress(String label, ShippingAddress address) {\n        deliveryAddresses.put(label, address);\n    }\n\n    public void removeDeliveryAddress(String label) {\n        deliveryAddresses.remove(label);\n    }\n\n    public java.util.Set<String> getAddressLabels() {\n        return deliveryAddresses.keySet();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.addDeliveryAddress(\"Uy\", new ShippingAddress(\"Navoiy 1\"));\n        c.addDeliveryAddress(\"Ofis\", new ShippingAddress(\"Amir Temur 2\"));\n        c.addDeliveryAddress(\"Dacha\", new ShippingAddress(\"Bo'stonliq 3\"));\n        c.removeDeliveryAddress(\"Dacha\");\n        System.out.println(\"Yorliqlar: \" + c.getAddressLabels());\n    }\n}",
    "expectedOutput": "Yorliqlar: [Uy, Ofis]"
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "138. Customer.printDeliveryAddresses() — Barcha Manzillar Ro'yxati (Seminar 4 Ex 5)",
      "en": "138. Customer.printDeliveryAddresses() — Printing All Saved Addresses",
      "ru": "138. Customer.printDeliveryAddresses() — Вывод всех сохраненных адресов"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 5: 'Implement printDeliveryAddresses() iterating through entrySet() to print each label and formatted address'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShippingAddress' da 'getFullAddress()' metodi: 'street + \", \" + city' qaytarsin.\n2. 'Customer' sinfida 'public void printDeliveryAddresses()' metodini yozing:\n   - 'for (java.util.Map.Entry<String, ShippingAddress> entry : deliveryAddresses.entrySet())'\n   - 'System.out.println(entry.getKey() + \" -> \" + entry.getValue().getFullAddress());'\n3. 'Main' metodida mijozga \"Uy\" (Yunusobod 4, Toshkent) va \"Ish\" (Oybek 15, Toshkent) qo'shing.\n4. 'c.printDeliveryAddresses();' ni chaqiring. Kutilayotgan natija:\nUy -> Yunusobod 4, Toshkent\nIsh -> Oybek 15, Toshkent",
      "en": "📖 Steps (Seminar 4 Ex 5):\n1. In Customer, iterate over entrySet() to print \"<label> -> <fullAddress>\".\n2. Test in Main with Uy and Ish.\nExpected:\nUy -> Yunusobod 4, Toshkent\nIsh -> Oybek 15, Toshkent",
      "ru": "📖 Шаги (Семинар 4 Упр 5):\n1. В Customer реализуйте printDeliveryAddresses() через entrySet().\n2. Выведите в Main."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Customer {\n    private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();\n\n    public void addDeliveryAddress(String label, ShippingAddress address) {\n        deliveryAddresses.put(label, address);\n    }\n\n    public void printDeliveryAddresses() {\n        for (java.util.Map.Entry<String, ShippingAddress> entry : deliveryAddresses.entrySet()) {\n            System.out.println(entry.getKey() + \" -> \" + entry.getValue().getFullAddress());\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.addDeliveryAddress(\"Uy\", new ShippingAddress(\"Yunusobod 4\", \"Toshkent\"));\n        c.addDeliveryAddress(\"Ish\", new ShippingAddress(\"Oybek 15\", \"Toshkent\"));\n        c.printDeliveryAddresses();\n    }\n}",
    "expectedOutput": "Uy -> Yunusobod 4, Toshkent\nIsh -> Oybek 15, Toshkent"
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "139. Customer.useDeliveryAddress(label) — Faol Manzilni Tanlash (Seminar 4 Ex 5)",
      "en": "139. Customer.useDeliveryAddress(label) — Activating an Address (Seminar 4 Ex 5)",
      "ru": "139. Customer.useDeliveryAddress(label) — Выбор активного адреса"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nSeminar 4 Exercise 5: 'Implement useDeliveryAddress(String label) which looks up the address by label in deliveryAddresses and sets it as the active shipping address'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfida 'private ShippingAddress activeAddress;' maydonini saqlang.\n2. 'public boolean useDeliveryAddress(String label)' metodida:\n   - 'ShippingAddress addr = deliveryAddresses.get(label);'\n   - agar topilsa, 'this.activeAddress = addr; return true;', aks holda 'return false;'.\n3. 'public ShippingAddress getActiveAddress()' getterini yozing.\n4. 'Main' da \"Uy\" va \"Ofis\" manzillarini qo'shing, so'ngra 'c.useDeliveryAddress(\"Ofis\");' qiling.\n5. Konsolga: '\"Faol manzil: \" + c.getActiveAddress().getFullAddress()' deb chiqaring. Kutilayotgan natija: \"Faol manzil: Mirobod 7, Toshkent\".",
      "en": "📖 Steps (Seminar 4 Ex 5):\n1. In Customer, useDeliveryAddress(label) sets activeAddress.\n2. Return true if found, false otherwise.\n3. Test in Main selecting \"Ofis\".\nExpected: \"Faol manzil: Mirobod 7, Toshkent\".",
      "ru": "📖 Шаги (Семинар 4 Упр 5):\n1. В Customer метод useDeliveryAddress(label) устанавливает activeAddress.\n2. Проверьте в Main выбор адреса \"Ofis\". Вывод: \"Faol manzil: Mirobod 7, Toshkent\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Customer {\n    private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();\n    private ShippingAddress activeAddress;\n\n    public void addDeliveryAddress(String label, ShippingAddress address) {\n        deliveryAddresses.put(label, address);\n    }\n\n    public boolean useDeliveryAddress(String label) {\n        ShippingAddress addr = deliveryAddresses.get(label);\n        if (addr != null) {\n            this.activeAddress = addr;\n            return true;\n        }\n        return false;\n    }\n\n    public ShippingAddress getActiveAddress() {\n        return activeAddress;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.addDeliveryAddress(\"Uy\", new ShippingAddress(\"Bodomzor 1\", \"Toshkent\"));\n        c.addDeliveryAddress(\"Ofis\", new ShippingAddress(\"Mirobod 7\", \"Toshkent\"));\n        c.useDeliveryAddress(\"Ofis\");\n        System.out.println(\"Faol manzil: \" + c.getActiveAddress().getFullAddress());\n    }\n}",
    "expectedOutput": "Faol manzil: Mirobod 7, Toshkent"
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "140. Mavjud Bo'lmagan Manzil Yorlig'ini Boshqarish — Xavfsiz Xatolik Qaytarish",
      "en": "140. Handling Missing Address Label — Safe Fallback Handling",
      "ru": "140. Обработка отсутствующей метки адреса — Безопасный откат"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nAgar foydalanuvchi tizimda yo'q manzil yorlig'ini tanlasa, 'NullPointerException' chiqmasligi va foydalanuvchiga tushunarli xabar berilishi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' sinfida 'public void selectAddress(String label)' metodini yozing.\n2. Agar 'deliveryAddresses.containsKey(label)' bo'lmasa, konsolga '\"Xatolik: '\" + label + \"' nomli manzil topilmadi!\"' deb chiqarsin.\n3. Aks holda faol manzilni o'rnatsin.\n4. 'Main' metodida faqat \"Uy\" manzilini kiritib, \"Sportzal\" manzilini tanlashga urining.\n5. Kutilayotgan natija: \"Xatolik: 'Sportzal' nomli manzil topilmadi!\".",
      "en": "📖 Steps:\n1. In selectAddress(label), if label is missing, print \"Xatolik: '<label>' nomli manzil topilmadi!\".\n2. Test in Main with missing key.\nExpected: \"Xatolik: 'Sportzal' nomli manzil topilmadi!\".",
      "ru": "📖 Шаги:\n1. В selectAddress(label) при отсутствии ключа выведите \"Xatolik: '<label>' nomli manzil topilmadi!\".\n2. Проверьте в Main. Вывод: \"Xatolik: 'Sportzal' nomli manzil topilmadi!\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n\n    public ShippingAddress(String street) {\n        this.street = street;\n    }\n}\n\nclass Customer {\n    private java.util.Map<String, ShippingAddress> deliveryAddresses = new java.util.LinkedHashMap<>();\n    private ShippingAddress activeAddress;\n\n    public void addDeliveryAddress(String label, ShippingAddress address) {\n        deliveryAddresses.put(label, address);\n    }\n\n    public void selectAddress(String label) {\n        if (!deliveryAddresses.containsKey(label)) {\n            System.out.println(\"Xatolik: '\" + label + \"' nomli manzil topilmadi!\");\n            return;\n        }\n        activeAddress = deliveryAddresses.get(label);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.addDeliveryAddress(\"Uy\", new ShippingAddress(\"Shota Rustaveli 20\"));\n        c.selectAddress(\"Sportzal\");\n    }\n}",
    "expectedOutput": "Xatolik: 'Sportzal' nomli manzil topilmadi!"
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "141. Tanlangan Faol Manzilni Buyurtmaga Bog'lash",
      "en": "141. Binding Customer's Active Address into Order Dispatch",
      "ru": "141. Привязка активного адреса клиента к отправке заказа"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nBuyurtma kuryerga yuborilayotganda mijozning aynan o'sha vaqtdagi tanlangan faol manzili olinadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Customer' da bir nechta manzil saqlansin va bittasi tanlansin.\n2. 'Order' sinfida 'public void dispatch(Customer c)' metodi konsolga: '\"Buyurtma jo'natildi -> \" + c.getActiveAddress().getFullAddress()' deb chiqarsin.\n3. 'Main' metodida \"Uy\" va \"Ofis\" kiritilsin, \"Ofis\" tanlansin va dispatch chaqirilsin.\n4. Kutilayotgan natija: \"Buyurtma jo'natildi -> Sayilgoh 3, Toshkent\".",
      "en": "📖 Steps:\n1. In Order, dispatch(Customer c) prints: \"Buyurtma jo'natildi -> \" + c.getActiveAddress().getFullAddress().\n2. Test in Main.\nExpected: \"Buyurtma jo'natildi -> Sayilgoh 3, Toshkent\".",
      "ru": "📖 Шаги:\n1. В Order метод dispatch(Customer c) выводит активный адрес доставки.\n2. Проверьте в Main. Вывод: \"Buyurtma jo'natildi -> Sayilgoh 3, Toshkent\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Customer {\n    private java.util.Map<String, ShippingAddress> addresses = new java.util.LinkedHashMap<>();\n    private ShippingAddress activeAddress;\n\n    public void addAddress(String label, ShippingAddress addr) {\n        addresses.put(label, addr);\n    }\n\n    public void chooseAddress(String label) {\n        activeAddress = addresses.get(label);\n    }\n\n    public ShippingAddress getActiveAddress() {\n        return activeAddress;\n    }\n}\n\nclass Order {\n    public void dispatch(Customer c) {\n        System.out.println(\"Buyurtma jo'natildi -> \" + c.getActiveAddress().getFullAddress());\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Customer c = new Customer();\n        c.addAddress(\"Uy\", new ShippingAddress(\"Chilonzor 5\", \"Toshkent\"));\n        c.addAddress(\"Ofis\", new ShippingAddress(\"Sayilgoh 3\", \"Toshkent\"));\n        c.chooseAddress(\"Ofis\");\n\n        Order ord = new Order();\n        ord.dispatch(c);\n    }\n}",
    "expectedOutput": "Buyurtma jo'natildi -> Sayilgoh 3, Toshkent"
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "142. Mudofaa Nusxasi (Defensive Copy) — List Getterini Himoyalash (Lecture 4 Slide 44)",
      "en": "142. Defensive Copying — Protecting List Getter (Lecture 4 Slide 44)",
      "ru": "142. Защитное копирование — Защита геттера списка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 44: 'Never return direct references to mutable collection fields! Always return a defensive copy (new ArrayList<>(items)) to preserve encapsulation'.\nAgar getter to'g'ridan-to'g'ri 'items' ni qaytarsa, tashqaridagi buzg'unchi kod 'getItems().clear()' qilib butun buyurtmani yo'q qilib qo'yishi mumkin!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SafeOrder' sinfini e'lon qiling: 'private java.util.List<String> items = new java.util.ArrayList<>();'.\n2. Konstruktorida ikkita tovar qo'shing: \"Smartfon\", \"Quloqchin\".\n3. 'public java.util.List<String> getItems()' metodida 'return new java.util.ArrayList<>(items);' qilib mudofaa nusxasini qaytaring!\n4. 'Main' metodida 'SafeOrder ord = new SafeOrder(); java.util.List<String> copy = ord.getItems(); copy.clear();' qilib nusxani tozalang.\n5. Konsolga sinfning haqiqiy ro'yxat sonini chiqaring: '\"Haqiqiy tovarlar soni: \" + ord.getItems().size()'. Kutilayotgan natija: \"Haqiqiy tovarlar soni: 2\".",
      "en": "📖 Steps (Slide 44):\n1. In SafeOrder, getItems() returns new ArrayList<>(items) (defensive copy).\n2. In Main, obtain items, call clear() on it.\n3. Verify internal items count is unchanged.\nExpected: \"Haqiqiy tovarlar soni: 2\".",
      "ru": "📖 Шаги (Слайд 44):\n1. В SafeOrder метод getItems() возвращает new ArrayList<>(items).\n2. В Main очистите полученную копию.\n3. Проверьте, что внутренний список не изменился. Вывод: \"Haqiqiy tovarlar soni: 2\"."
    },
    "requirements": {
      "classes": [
        "SafeOrder",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class SafeOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SafeOrder {\n    private java.util.List<String> items = new java.util.ArrayList<>();\n\n    public SafeOrder() {\n        items.add(\"Smartfon\");\n        items.add(\"Quloqchin\");\n    }\n\n    public java.util.List<String> getItems() {\n        return new java.util.ArrayList<>(items);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SafeOrder ord = new SafeOrder();\n        java.util.List<String> copy = ord.getItems();\n        copy.clear();\n        System.out.println(\"Haqiqiy tovarlar soni: \" + ord.getItems().size());\n    }\n}",
    "expectedOutput": "Haqiqiy tovarlar soni: 2"
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "143. Map Himoyasi — Yangi LinkedHashMap Nusxasini Qaytarish",
      "en": "143. Map Defensive Copy — Protecting Map from External Mutations",
      "ru": "143. Защитная копия Map — Защита от внешних изменений"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nXuddi ro'yxat kabi, mijozning saqlangan manzillar xaritasini ham tashqi tajovuzkor o'zgartirishlardan himoya qilish uchun nusxa qaytariladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'SafeCustomer' sinfini e'lon qiling: 'private java.util.Map<String, String> addressMap = new java.util.LinkedHashMap<>();'.\n2. Konstruktorida 'addressMap.put(\"Uy\", \"Toshkent\");' kiriting.\n3. 'public java.util.Map<String, String> getAddresses()' metodida 'return new java.util.LinkedHashMap<>(addressMap);' qaytaring.\n4. 'Main' metodida olingan nusxaga 'copy.put(\"Haker\", \"Kiber\");' qo'shib ko'ring.\n5. Konsolga sinfning haqiqiy manzillar sonini chiqaring: '\"Ichki manzillar: \" + c.getAddresses().size()'. Kutilayotgan natija: \"Ichki manzillar: 1\".",
      "en": "📖 Steps:\n1. In SafeCustomer, getAddresses() returns new LinkedHashMap<>(addressMap).\n2. Attempt to mutate the returned map in Main.\n3. Check internal size.\nExpected: \"Ichki manzillar: 1\".",
      "ru": "📖 Шаги:\n1. В SafeCustomer метод getAddresses() возвращает new LinkedHashMap<>(addressMap).\n2. Попробуйте изменить полученную карту.\n3. Проверьте размер оригинала. Вывод: \"Ichki manzillar: 1\"."
    },
    "requirements": {
      "classes": [
        "SafeCustomer",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class SafeCustomer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SafeCustomer {\n    private java.util.Map<String, String> addressMap = new java.util.LinkedHashMap<>();\n\n    public SafeCustomer() {\n        addressMap.put(\"Uy\", \"Toshkent\");\n    }\n\n    public java.util.Map<String, String> getAddresses() {\n        return new java.util.LinkedHashMap<>(addressMap);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SafeCustomer c = new SafeCustomer();\n        java.util.Map<String, String> copy = c.getAddresses();\n        copy.put(\"Haker\", \"Kiber\");\n        System.out.println(\"Ichki manzillar: \" + c.getAddresses().size());\n    }\n}",
    "expectedOutput": "Ichki manzillar: 1"
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "144. Collections.unmodifiableList() — O'zgarmas To'plam Ko'rinishi (Slide 44)",
      "en": "144. Collections.unmodifiableList() — Read-Only View (Lecture 4 Slide 44)",
      "ru": "144. Collections.unmodifiableList() — Неизменяемое представление списка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nLecture 4 Slide 44: 'Alternatively, use java.util.Collections.unmodifiableList(items) which returns a read-only view that throws UnsupportedOperationException if any modification is attempted'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ReadOnlyRegistry' sinfini e'lon qiling: 'private java.util.List<String> roles = new java.util.ArrayList<>();'.\n2. Konstruktorda \"ADMIN\" va \"USER\" rollarini qo'shing.\n3. 'public java.util.List<String> getRoles()' metodida 'return java.util.Collections.unmodifiableList(roles);' qaytaring.\n4. 'Main' metodida 'ReadOnlyRegistry reg = new ReadOnlyRegistry();' yarating.\n5. 'try-catch' blokida 'reg.getRoles().add(\"HACKER\");' qilib ko'ring. 'UnsupportedOperationException' ushlanganda konsolga: \"O'zgartirish taqiqlangan!\" deb chiqarsin. Kutilayotgan natija: \"O'zgartirish taqiqlangan!\".",
      "en": "📖 Steps (Slide 44):\n1. In ReadOnlyRegistry, getRoles() returns Collections.unmodifiableList(roles).\n2. In Main, wrap add() attempt in try-catch and print \"O'zgartirish taqiqlangan!\" on UnsupportedOperationException.\nExpected: \"O'zgartirish taqiqlangan!\".",
      "ru": "📖 Шаги (Слайд 44):\n1. В ReadOnlyRegistry верните Collections.unmodifiableList(roles).\n2. В Main перехватите UnsupportedOperationException при попытке add(). Вывод: \"O'zgartirish taqiqlangan!\"."
    },
    "requirements": {
      "classes": [
        "ReadOnlyRegistry",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ReadOnlyRegistry {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ReadOnlyRegistry {\n    private java.util.List<String> roles = new java.util.ArrayList<>();\n\n    public ReadOnlyRegistry() {\n        roles.add(\"ADMIN\");\n        roles.add(\"USER\");\n    }\n\n    public java.util.List<String> getRoles() {\n        return java.util.Collections.unmodifiableList(roles);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ReadOnlyRegistry reg = new ReadOnlyRegistry();\n        try {\n            reg.getRoles().add(\"HACKER\");\n        } catch (UnsupportedOperationException e) {\n            System.out.println(\"O'zgartirish taqiqlangan!\");\n        }\n    }\n}",
    "expectedOutput": "O'zgartirish taqiqlangan!"
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "145. CW2 Prototipi: Katalog Map va Savatcha List Integratsiyasi",
      "en": "145. CW2 Prototype: Product Catalog Map and Cart List Integration",
      "ru": "145. Прототип CW2: Каталог товаров Map и корзина List"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nCoursework 2 talabi: Java konsol ilovasida tovarlar katalogi 'Map<String, Product>' ko'rinishida saqlanadi (kod orqali tez topish uchun), xarid savatchasi esa 'List<OrderItem>' bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Product' ('sku', 'name', 'price') va 'OrderItem' ('product', 'qty') sinflarini yarating.\n2. 'Store' sinfida 'private java.util.Map<String, Product> catalog = new java.util.HashMap<>();' va 'private java.util.List<OrderItem> cart = new java.util.ArrayList<>();' saqlang.\n3. 'public void addProduct(Product p)' katalogga 'catalog.put(p.getSku(), p);' qilsin.\n4. 'public void addToCart(String sku, int qty)' metodida: mahsulotni katalogdan qidirsin va topilsa savatchaga qo'shsin.\n5. 'Main' da \"P101\" mahsulotini qo'shib savatchaga soling va konsolga: '\"Savatchada qator: \" + store.getCartSize()' deb chiqaring. Kutilayotgan natija: \"Savatchada qator: 1\".",
      "en": "📖 Steps (CW2 Prototype):\n1. In Store, maintain catalog Map<String, Product> and cart List<OrderItem>.\n2. addToCart(sku, qty) looks up product in catalog and adds to cart.\n3. Test in Main.\nExpected: \"Savatchada qator: 1\".",
      "ru": "📖 Шаги (Прототип CW2):\n1. В Store каталог товаров хранится в Map, а корзина в List.\n2. Метод addToCart(sku, qty) находит товар в каталоге и добавляет в корзину.\n3. Проверьте в Main. Вывод: \"Savatchada qator: 1\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "OrderItem",
        "Store",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Store {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    private String sku;\n    private String name;\n    private double price;\n\n    public Product(String sku, String name, double price) {\n        this.sku = sku;\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getSku() {\n        return sku;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n}\n\nclass Store {\n    private java.util.Map<String, Product> catalog = new java.util.HashMap<>();\n    private java.util.List<OrderItem> cart = new java.util.ArrayList<>();\n\n    public void addProduct(Product p) {\n        catalog.put(p.getSku(), p);\n    }\n\n    public void addToCart(String sku, int qty) {\n        Product p = catalog.get(sku);\n        if (p != null) {\n            cart.add(new OrderItem(p, qty));\n        }\n    }\n\n    public int getCartSize() {\n        return cart.size();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Store store = new Store();\n        store.addProduct(new Product(\"P101\", \"Termos\", 25.0));\n        store.addToCart(\"P101\", 2);\n        System.out.println(\"Savatchada qator: \" + store.getCartSize());\n    }\n}",
    "expectedOutput": "Savatchada qator: 1"
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "146. CW2 Prototipi: Promokodlar Map Bilan Avtomatik Chegirma",
      "en": "146. CW2 Prototype: Promo Code Map and Discount Calculation",
      "ru": "146. Прототип CW2: Промокоды Map и расчет скидки"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nCoursework 2 da buyurtma chekiga chegirma kiritish uchun tizimda promokodlar xaritasi 'Map<String, Double>' mavjud bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CheckoutEngine' sinfida 'private java.util.Map<String, Double> promoCodes = new java.util.HashMap<>();' saqlang.\n2. Konstruktorida 'promoCodes.put(\"WIUT20\", 0.20);' (20% chegirma) va 'promoCodes.put(\"SAVE10\", 0.10);' qo'shing.\n3. 'public double calculateFinal(double subtotal, String code)' metodida:\n   - agar kod mavjud bo'lsa, 'double discount = subtotal * promoCodes.get(code); return subtotal - discount;'\n   - aks holda to'liq 'subtotal' ni qaytarsin.\n4. 'Main' metodida 1000.0 lik xaridga \"WIUT20\" kodini qo'llang.\n5. Konsolga: '\"Chegirmali summa: \" + engine.calculateFinal(1000.0, \"WIUT20\")' deb chiqaring. Kutilayotgan natija: \"Chegirmali summa: 800.0\".",
      "en": "📖 Steps:\n1. In CheckoutEngine maintain promoCodes Map.\n2. calculateFinal(subtotal, code) applies discount if code exists.\n3. Test with 1000.0 and \"WIUT20\" in Main.\nExpected: \"Chegirmali summa: 800.0\".",
      "ru": "📖 Шаги:\n1. В CheckoutEngine храните промокоды в Map<String, Double>.\n2. calculateFinal рассчитывает сумму со скидкой.\n3. Проверьте в Main 1000.0 со скидкой \"WIUT20\". Вывод: \"Chegirmali summa: 800.0\"."
    },
    "requirements": {
      "classes": [
        "CheckoutEngine",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class CheckoutEngine {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CheckoutEngine {\n    private java.util.Map<String, Double> promoCodes = new java.util.HashMap<>();\n\n    public CheckoutEngine() {\n        promoCodes.put(\"WIUT20\", 0.20);\n        promoCodes.put(\"SAVE10\", 0.10);\n    }\n\n    public double calculateFinal(double subtotal, String code) {\n        if (promoCodes.containsKey(code)) {\n            double rate = promoCodes.get(code);\n            return subtotal - (subtotal * rate);\n        }\n        return subtotal;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        CheckoutEngine engine = new CheckoutEngine();\n        System.out.println(\"Chegirmali summa: \" + engine.calculateFinal(1000.0, \"WIUT20\"));\n    }\n}",
    "expectedOutput": "Chegirmali summa: 800.0"
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "147. CW2 Prototipi: Mijoz Buyurtmalar Tarixi va Jami Xarajat Hisoboti",
      "en": "147. CW2 Prototype: Customer Order History and Total Expense Report",
      "ru": "147. Прототип CW2: История заказов клиента и отчет по расходам"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nCoursework 2 talablaridan biri: mijozning profili barcha o'tgan buyurtmalar ro'yxatini ('List<Double>') saqlashi va jami xarajat hisobotini shakllantirishi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'CustomerProfile' sinfini e'lon qiling: 'private String username;', 'private java.util.List<Double> orderTotals = new java.util.ArrayList<>();'.\n2. 'public void logOrder(double total)' metodida summani ro'yxatga qo'shing.\n3. 'public void printReport()' metodida:\n   - buyurtmalar soni: 'orderTotals.size()'\n   - o'rtacha summa (average) va jami summani chiqarsin.\n4. 'Main' metodida 'CustomerProfile cp = new CustomerProfile(\"Sarvar\"); cp.logOrder(150.0); cp.logOrder(250.0);' qiling.\n5. 'cp.printReport();' ni chaqiring. Kutilayotgan natija: \"Sarvar jami xaridi: 400.0 (2 ta buyurtma)\".",
      "en": "📖 Steps:\n1. In CustomerProfile keep orderTotals List<Double>.\n2. logOrder(total) appends to list.\n3. printReport() prints total spent and order count.\nExpected: \"Sarvar jami xaridi: 400.0 (2 ta buyurtma)\".",
      "ru": "📖 Шаги:\n1. В CustomerProfile храните список сумм заказов.\n2. printReport() выводит итог и количество заказов.\n3. Вызовите printReport() в Main. Вывод: \"Sarvar jami xaridi: 400.0 (2 ta buyurtma)\"."
    },
    "requirements": {
      "classes": [
        "CustomerProfile",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class CustomerProfile {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CustomerProfile {\n    private String username;\n    private java.util.List<Double> orderTotals = new java.util.ArrayList<>();\n\n    public CustomerProfile(String username) {\n        this.username = username;\n    }\n\n    public void logOrder(double total) {\n        orderTotals.add(total);\n    }\n\n    public void printReport() {\n        double sum = 0.0;\n        for (double t : orderTotals) {\n            sum += t;\n        }\n        System.out.println(username + \" jami xaridi: \" + sum + \" (\" + orderTotals.size() + \" ta buyurtma)\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        CustomerProfile cp = new CustomerProfile(\"Sarvar\");\n        cp.logOrder(150.0);\n        cp.logOrder(250.0);\n        cp.printReport();\n    }\n}",
    "expectedOutput": "Sarvar jami xaridi: 400.0 (2 ta buyurtma)"
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "148. Viva Savoli 1: Nega IS-A dan Ko'ra HAS-A (Kompozitsiya) Afzal? (Viva Mastery)",
      "en": "148. Viva Question 1: Why Prefer Composition (HAS-A) Over Inheritance (IS-A)?",
      "ru": "148. Вопрос Viva 1: Почему композиция (HAS-A) предпочтительнее наследования (IS-A)?"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nVIVA Imtihonining Oltin Savoli: 'Explain why object-oriented design favours composition over inheritance (HAS-A over IS-A)'.\nJavob: Merosxo'rlik (IS-A) qat'iy bog'lanish (tight coupling) va ota-bola sinflar sinishiga (fragile base class) olib keladi. Kompozitsiya (HAS-A) esa komponentlarni xohlagan payt almashtirishga (loose coupling) va ko'p xususiyatlarni birlashtirishga imkon beradi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'PaymentStrategy' interfeysini e'lon qiling: 'void pay(double amount);'.\n2. Ikkita realizatsiya yarating: 'PaymePayment' (chop etadi: \"Payme orqali to'landi: \" + amount) va 'ClickPayment' (\"Click orqali to'landi: \" + amount).\n3. 'PaymentContext' sinfida: 'private PaymentStrategy strategy;'. 'public void setStrategy(PaymentStrategy s)' va 'public void executePayment(double amount)'.\n4. 'Main' da 'PaymentContext ctx = new PaymentContext();' yarating, 'ctx.setStrategy(new PaymePayment()); ctx.executePayment(50000.0);' qiling.\n5. Kutilayotgan natija: \"Payme orqali to'landi: 50000.0\".",
      "en": "📖 Steps (Viva Question 1):\n1. Define interface PaymentStrategy with void pay(double amount).\n2. Implement PaymePayment printing \"Payme orqali to'landi: <amount>\".\n3. In PaymentContext, hold PaymentStrategy and execute payment dynamically (favoring composition over inheritance).\nExpected: \"Payme orqali to'landi: 50000.0\".",
      "ru": "📖 Шаги (Вопрос Viva 1):\n1. Объявите интерфейс PaymentStrategy с методом pay(amount).\n2. Реализуйте PaymePayment.\n3. В PaymentContext используйте композицию для динамической смены стратегии оплаты. Вывод: \"Payme orqali to'landi: 50000.0\"."
    },
    "requirements": {
      "classes": [
        "PaymentStrategy",
        "PaymePayment",
        "PaymentContext",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "interface PaymentStrategy {\n    \n}\n\nclass PaymePayment implements PaymentStrategy {\n    \n}\n\nclass PaymentContext {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface PaymentStrategy {\n    void pay(double amount);\n}\n\nclass PaymePayment implements PaymentStrategy {\n    public void pay(double amount) {\n        System.out.println(\"Payme orqali to'landi: \" + amount);\n    }\n}\n\nclass PaymentContext {\n    private PaymentStrategy strategy;\n\n    public void setStrategy(PaymentStrategy strategy) {\n        this.strategy = strategy;\n    }\n\n    public void executePayment(double amount) {\n        strategy.pay(amount);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        PaymentContext ctx = new PaymentContext();\n        ctx.setStrategy(new PaymePayment());\n        ctx.executePayment(50000.0);\n    }\n}",
    "expectedOutput": "Payme orqali to'landi: 50000.0"
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "149. Viva Savoli 2: Qachon List, Qachon Set, Qachon Map? (Viva Mastery)",
      "en": "149. Viva Question 2: When to Choose List vs Set vs Map?",
      "ru": "149. Вопрос Viva 2: Когда выбирать List, Set или Map?"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nVIVA Imtihoni Talabi: Talaba 3 ta asosiy to'plam strukturasini aniq farqlay olishi va bitta tizimda to'g'ri ishlata olishi shart:\n- 'List': Tartibli ketma-ketlik va dublikatlar kerak bo'lganda (Savatdagi xaridlar).\n- 'Set': Faqat unikal elementlar kerak bo'lganda (Unikal xaridorlar ID lari).\n- 'Map': Kalit bo'yicha O(1) tezkor qidirish kerak bo'lganda (Mahsulotlar katalogi).\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'Main' metodida 'java.util.Map<String, String> catalog = new java.util.HashMap<>();' yarating (\"P1\", \"Noutbuk\").\n2. 'java.util.Set<String> uniqueCustomers = new java.util.HashSet<>();' yarating, unga \"Ali\", \"Vali\", \"Ali\" qo'shing.\n3. 'java.util.List<String> orderLog = new java.util.ArrayList<>();' yarating, unga \"P1\", \"P1\" qo'shing.\n4. Konsolga quyidagi formatda chiqaring:\n   '\"Katalog: \" + catalog.size() + \", Unikal mijozlar: \" + uniqueCustomers.size() + \", Buyurtmalar: \" + orderLog.size()'\n5. Kutilayotgan natija: \"Katalog: 1, Unikal mijozlar: 2, Buyurtmalar: 2\".",
      "en": "📖 Steps (Viva Question 2):\n1. In Main create catalog Map with 1 item.\n2. Create uniqueCustomers Set with \"Ali\", \"Vali\", \"Ali\" (size 2).\n3. Create orderLog List with 2 items.\n4. Print: \"Katalog: 1, Unikal mijozlar: 2, Buyurtmalar: 2\".",
      "ru": "📖 Шаги (Вопрос Viva 2):\n1. Создайте Map с 1 товаром.\n2. Создайте Set с 3 элементами (2 уникальных).\n3. Создайте List с 2 заказами.\n4. Выведите: \"Katalog: 1, Unikal mijozlar: 2, Buyurtmalar: 2\"."
    },
    "requirements": {
      "classes": [
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        java.util.Map<String, String> catalog = new java.util.HashMap<>();\n        catalog.put(\"P1\", \"Noutbuk\");\n\n        java.util.Set<String> uniqueCustomers = new java.util.HashSet<>();\n        uniqueCustomers.add(\"Ali\");\n        uniqueCustomers.add(\"Vali\");\n        uniqueCustomers.add(\"Ali\");\n\n        java.util.List<String> orderLog = new java.util.ArrayList<>();\n        orderLog.add(\"P1\");\n        orderLog.add(\"P1\");\n\n        System.out.println(\"Katalog: \" + catalog.size() + \", Unikal mijozlar: \" + uniqueCustomers.size() + \", Buyurtmalar: \" + orderLog.size());\n    }\n}",
    "expectedOutput": "Katalog: 1, Unikal mijozlar: 2, Buyurtmalar: 2"
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Mukammal Buyurtma Tizimi (Seminar 4, CW2 & Viva G'alabasi)",
    "sector": "121-150",
    "title": {
      "uz": "150. GRAND CAPSTONE: To'liq Buyurtma, Manzillar va To'lov Ekotizimi (4-Haftalik Yakuni)",
      "en": "150. GRAND CAPSTONE: Complete Order, Multi-Address & Payment Ecosystem",
      "ru": "150. GRAND CAPSTONE: Полная экосистема заказов, адресов и оплаты"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik & Kontekst\nTABRIKLAYMIZ! Bu Week 4 ning Yakuniy 150-Grand Capstone masalasi!\nUshbu vazifada siz Seminar 4 ning barcha mashqlari (ShippingAddress, OrderItem narx delegatsiyasi, Order savatchasi, bepul yetkazish sharti, ko'p manzillar Map va mijoz balansidan to'lov)ni yagona mukammal tizimda mujassam qilasiz!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar (1 dan 5 gacha)\n1. 'ShippingAddress' ('street', 'city', 'getFullAddress()') sinfini e'lon qiling.\n2. 'Product' ('name', 'price') va 'OrderItem' ('product', 'quantity', 'getLineTotal()') sinflarini e'lon qiling.\n3. 'Customer' sinfida:\n   - 'name', 'accountBalance', 'Map<String, ShippingAddress> addresses = new LinkedHashMap<>()', 'activeAddress'.\n   - 'addAddress(label, addr)', 'useAddress(label)', 'deduct(amount)'.\n4. 'Order' sinfida:\n   - 'orderId', 'Customer customer', 'List<OrderItem> items = new ArrayList<>()'.\n   - 'addItem(product, qty)', 'getItemsTotal()', 'getDeliveryCost()' (>=500 bo'lsa 0.0, aks holda 30.0), 'getTotal()'.\n   - 'public void checkout()': agar 'customer.deduct(getTotal())' muvaffaqiyatli bo'lsa, konsolga:\n     '\"Xarid tasdiqlandi: \" + customer.getName() + \" | Manzil: \" + customer.getActiveAddress().getFullAddress() + \" | To'lov: \" + getTotal() + \" so'm\"' deb chiqarsin.\n5. 'Main' metodida:\n   - 'ShippingAddress addr = new ShippingAddress(\"Amir Temur 100\", \"Toshkent\");'\n   - 'Customer cust = new Customer(\"Rustam\", 1000.0); cust.addAddress(\"Uy\", addr); cust.useAddress(\"Uy\");'\n   - 'Product mac = new Product(\"MacBook\", 600.0);'\n   - 'Order order = new Order(150, cust); order.addItem(mac, 1);' (Items: 600.0, Delivery: 0.0, Total: 600.0).\n   - 'order.checkout();' ni chaqiring.\n   Kutilayotgan natija: \"Xarid tasdiqlandi: Rustam | Manzil: Amir Temur 100, Toshkent | To'lov: 600.0 so'm\".",
      "en": "📖 Steps (GRAND CAPSTONE):\n1. Create ShippingAddress, Product, OrderItem, Customer (with multi-address Map and balance), and Order.\n2. Order implements getItemsTotal(), getDeliveryCost() (free if >=500, else 30), and checkout() which deducts total and prints confirmation.\n3. Test in Main.\nExpected: \"Xarid tasdiqlandi: Rustam | Manzil: Amir Temur 100, Toshkent | To'lov: 600.0 so'm\".",
      "ru": "📖 Шаги (GRAND CAPSTONE):\n1. Создайте полную систему: ShippingAddress, Product, OrderItem, Customer и Order.\n2. Реализуйте checkout() со списанием средств и бесплатной доставкой при сумме >= 500.\n3. Проверьте в Main. Вывод: \"Xarid tasdiqlandi: Rustam | Manzil: Amir Temur 100, Toshkent | To'lov: 600.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "ShippingAddress",
        "Product",
        "OrderItem",
        "Customer",
        "Order",
        "Main"
      ],
      "methods": [],
      "constructors": []
    },
    "starterCode": "class ShippingAddress {\n    \n}\n\nclass Product {\n    \n}\n\nclass OrderItem {\n    \n}\n\nclass Customer {\n    \n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ShippingAddress {\n    private String street;\n    private String city;\n\n    public ShippingAddress(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n\n    public String getFullAddress() {\n        return street + \", \" + city;\n    }\n}\n\nclass Product {\n    private String name;\n    private double price;\n\n    public Product(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public double getPrice() {\n        return price;\n    }\n}\n\nclass OrderItem {\n    private Product product;\n    private int quantity;\n\n    public OrderItem(Product product, int quantity) {\n        this.product = product;\n        this.quantity = quantity;\n    }\n\n    public double getLineTotal() {\n        return quantity * product.getPrice();\n    }\n}\n\nclass Customer {\n    private String name;\n    private double accountBalance;\n    private java.util.Map<String, ShippingAddress> addresses = new java.util.LinkedHashMap<>();\n    private ShippingAddress activeAddress;\n\n    public Customer(String name, double accountBalance) {\n        this.name = name;\n        this.accountBalance = accountBalance;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void addAddress(String label, ShippingAddress addr) {\n        addresses.put(label, addr);\n    }\n\n    public void useAddress(String label) {\n        this.activeAddress = addresses.get(label);\n    }\n\n    public ShippingAddress getActiveAddress() {\n        return activeAddress;\n    }\n\n    public boolean deduct(double amount) {\n        if (accountBalance >= amount) {\n            accountBalance -= amount;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Order {\n    private int orderId;\n    private Customer customer;\n    private java.util.List<OrderItem> items = new java.util.ArrayList<>();\n\n    public Order(int orderId, Customer customer) {\n        this.orderId = orderId;\n        this.customer = customer;\n    }\n\n    public void addItem(Product product, int quantity) {\n        items.add(new OrderItem(product, quantity));\n    }\n\n    public double getItemsTotal() {\n        double sum = 0.0;\n        for (OrderItem item : items) {\n            sum += item.getLineTotal();\n        }\n        return sum;\n    }\n\n    public double getDeliveryCost() {\n        return getItemsTotal() >= 500.0 ? 0.0 : 30.0;\n    }\n\n    public double getTotal() {\n        return getItemsTotal() + getDeliveryCost();\n    }\n\n    public void checkout() {\n        double grandTotal = getTotal();\n        if (customer.deduct(grandTotal)) {\n            System.out.println(\"Xarid tasdiqlandi: \" + customer.getName() + \" | Manzil: \" + customer.getActiveAddress().getFullAddress() + \" | To'lov: \" + grandTotal + \" so'm\");\n        } else {\n            System.out.println(\"To'lov muvaffaqiyatsiz!\");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        ShippingAddress addr = new ShippingAddress(\"Amir Temur 100\", \"Toshkent\");\n        Customer cust = new Customer(\"Rustam\", 1000.0);\n        cust.addAddress(\"Uy\", addr);\n        cust.useAddress(\"Uy\");\n\n        Product mac = new Product(\"MacBook\", 600.0);\n        Order order = new Order(150, cust);\n        order.addItem(mac, 1);\n        order.checkout();\n    }\n}",
    "expectedOutput": "Xarid tasdiqlandi: Rustam | Manzil: Amir Temur 100, Toshkent | To'lov: 600.0 so'm"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = (typeof window !== 'undefined' ? window : global).OOP_CHALLENGES_W4;
}
