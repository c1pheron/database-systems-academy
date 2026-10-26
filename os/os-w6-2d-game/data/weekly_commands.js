// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 SPECIFIC COMMANDS REPOSITORY
// Modul: 6-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "docker",
    "name": "Docker Konteynerlashtirish Boshqaruvi",
    "category": "DevOps & Docker",
    "syntax": "docker --version",
    "desc": "Ilovalarni barcha qaramliklari (dependencies) bilan birga izolyatsiyalangan engil konteynerlarda yurgazish asosiy buyrug'i.",
    "dictSearch": "docker"
  },
  {
    "cmd": "docker run",
    "name": "Konteyner Yaratish va Ishga Tushirish",
    "category": "DevOps & Docker",
    "syntax": "docker run -d -p 80:80 --name [NOMI] [IMAGE]",
    "desc": "Image asosida yangi konteyner yaratadi, portlarni tashqi dunyoga ochadi ('-p') va uni fonda ('-d') ishga tushiradi.",
    "dictSearch": "docker run"
  },
  {
    "cmd": "docker ps",
    "name": "Faol Konteynerlar Ro'yxati",
    "category": "DevOps & Docker",
    "syntax": "docker ps -a",
    "desc": "Ayni paytda ishlab turgan konteynerlar holatini, portlarini va ID larini ko'rsatadi. '-a' to'xtatilganlarni ham chiqaradi.",
    "dictSearch": "docker ps"
  },
  {
    "cmd": "docker build",
    "name": "Dockerfile dan Image Yaratish",
    "category": "DevOps & Docker",
    "syntax": "docker build -t [IMAGE_NOMI:TEG] .",
    "desc": "Dockerfile ko'rsatmalari asosida qadamma-qadam yangi shaxsiy Docker imidjini (image) kompilyatsiya qilib yig'adi.",
    "dictSearch": "docker build"
  },
  {
    "cmd": "docker images",
    "name": "Mavjud Imidjlar Ro'yxati",
    "category": "DevOps & Docker",
    "syntax": "docker images",
    "desc": "Mahalliy kompyuterda saqlanayotgan barcha Docker imagelari, ularning teglari, ID si va hajmini ko'rsatadi.",
    "dictSearch": "docker images"
  },
  {
    "cmd": "docker stop",
    "name": "Konteynerni Xavfsiz To'xtatish",
    "category": "DevOps & Docker",
    "syntax": "docker stop [KONTEYNER_ID_YOKI_NOM]",
    "desc": "Ishlab turgan konteynerga SIGTERM signali yuborib, uning ma'lumotlarini saqlab, toza to'xtashini ta'minlaydi.",
    "dictSearch": "docker stop"
  },
  {
    "cmd": "docker rm",
    "name": "To'xtatilgan Konteynerni O'chirish",
    "category": "DevOps & Docker",
    "syntax": "docker rm -f [KONTEYNER_ID_YOKI_NOM]",
    "desc": "Keraksiz yoki to'xtatilgan konteynerlarni xotiradan butunlay tozalaydi. '-f' majburiy o'chirish imkonini beradi.",
    "dictSearch": "docker rm"
  },
  {
    "cmd": "docker rmi",
    "name": "Docker Imidjini O'chirish",
    "category": "DevOps & Docker",
    "syntax": "docker rmi [IMAGE_ID]",
    "desc": "Boshqa ishlatilmayotgan Docker imagelarini diskdan o'chirib joy bo'shatadi.",
    "dictSearch": "docker rmi"
  },
  {
    "cmd": "docker logs",
    "name": "Konteyner Chiqish Loglarini Ko'rish",
    "category": "DevOps & Docker",
    "syntax": "docker logs -f [KONTEYNER_NOMI]",
    "desc": "Konteyner ichida ishlayotgan dasturning konsolga chiqarilgan barcha loglari, xatoliklari va so'rovlarini jonli kuzatish vositasi.",
    "dictSearch": "docker logs"
  },
  {
    "cmd": "docker exec",
    "name": "Konteyner Ichida Buyruq Bajarish",
    "category": "DevOps & Docker",
    "syntax": "docker exec -it [KONTEYNER_NOMI] bash",
    "desc": "Ishlayotgan konteyner ichiga interaktiv terminal ochib kiradi va uning ichki fayl tizimida buyruqlar berish imkonini yaratadi.",
    "dictSearch": "docker exec"
  },
  {
    "cmd": "docker volume",
    "name": "Ma'lumotlar Saqlash Hajmi (Persistence)",
    "category": "DevOps & Docker",
    "syntax": "docker volume create [HAJM_NOMI]",
    "desc": "Konteyner o'chirib tashlansa ham undagi ma'lumotlar (masalan Database fayllari) yo'qolib ketmasligi uchun doimiy saqlovchi hajm ochadi.",
    "dictSearch": "docker volume"
  },
  {
    "cmd": "docker network",
    "name": "Konteynerlararo Tarmoq Boshqaruvi",
    "category": "DevOps & Docker",
    "syntax": "docker network create [TARMOQ_NOMI]",
    "desc": "Bir nechta konteynerlar o'rtasida xavfsiz DNS va IP aloqasini o'rnatuvchi virtual izolyatsiyalangan tarmoq.",
    "dictSearch": "docker network"
  },
  {
    "cmd": "docker-compose",
    "name": "Ko'p Konteynerli Klaster Boshqaruvi",
    "category": "DevOps & Docker",
    "syntax": "docker-compose up -d yoki docker-compose down",
    "desc": "Web ilova, ma'lumotlar bazasi va kesh kabi butun bir mikroxizmatlar tizimini yagona 'docker-compose.yml' fayli orqali bitta buyruq bilan ko'taradi.",
    "dictSearch": "docker-compose"
  },
  {
    "cmd": "Dockerfile Sintaksisi",
    "name": "Imidj Ko'rsatmalari (FROM, RUN, CMD)",
    "category": "DevOps & Docker",
    "syntax": "FROM, WORKDIR, COPY, RUN, CMD, EXPOSE",
    "desc": "Docker image yaratish qoidalari: asosiy operatsion tizimni tanlash, kodni nusxalash, o'rnatish va konteyner ishga tushganda bajariladigan buyruqni belgilash.",
    "dictSearch": "dockerfile"
  },
  {
    "cmd": "Demand Paging",
    "name": "Talab Bo'yicha Sahifalash & Page Fault",
    "category": "Virtual Xotira",
    "syntax": "Page Fault -> Diskdan yuklash -> Resume",
    "desc": "Dastur sahifalari operativ xotiraga faqat ular kerak bo'lgandagina (on demand) yuklanadi. Xotirada bo'lmasa Page Fault sodir bo'lib yadro uni diskdan chaqiradi.",
    "dictSearch": "demand paging"
  },
  {
    "cmd": "Page Replacement",
    "name": "Sahifalarni Almashtirish (FIFO, LRU)",
    "category": "Virtual Xotira",
    "syntax": "FIFO, Optimal, LRU (Least Recently Used)",
    "desc": "RAM to'lganda yangi sahifaga joy ochish uchun qaysi eski sahifani qurbon (victim page) qilib diskka surish algoritmlari.",
    "dictSearch": "page replacement"
  },
  {
    "cmd": "Thrashing",
    "name": "Surunkali Xotira Qotishi & Working Set",
    "category": "Virtual Xotira",
    "syntax": "Paging vaqti > Bajarilish vaqti",
    "desc": "Jarayonlarga ajratilgan freymlar yetarli bo'lmaganda tizim doimiy ravishda sahifalarni diskdan olib-solish bilan band bo'lib, butun kompyuter qotib qolishi.",
    "dictSearch": "thrashing"
  }
];
