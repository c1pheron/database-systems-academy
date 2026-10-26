// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 SPECIFIC COMMANDS REPOSITORY
// Modul: 6-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Docker, konteynerlar, virtual xotira, sahifalarni almashtirish va Thrashing
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "docker",
    "name": "Docker Containerization Engine (Konteynerlashtirish Boshqaruv Vositasining Asosi)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker [BUYRUQ] [BAYROQLAR]",
    "syntaxRules": "Mijoz-Server (Client-Server / Docker Daemon) arxitekturasida ishlaydi.",
    "desc": "Ilovalarni barcha kutubxonalari, muhiti va konfiguratsiyasi bilan yagona yengil konteynerga o'rab, istalgan Linux serverida bir zumda 100% bir xil ishlashini ta'minlovchi global standart tizim.",
    "flags": [
      {
        "flag": "version",
        "desc": "Docker Client va Server dvigateli versiyasini ko'rish."
      },
      {
        "flag": "info",
        "desc": "Tizimning to'liq holati: konteynerlar, rasmlar, drayverlar va xotira."
      }
    ],
    "combos": [
      {
        "combo": "docker info",
        "title": "Docker tizimi haqida to'liq hisobot olish",
        "desc": "Konteynerlar soni, xotira va drayverlar holatini ko'rsatadi."
      },
      {
        "combo": "docker system prune -af",
        "title": "Barcha ishlatilmayotgan keraksiz rasm va konteynerlarni tozalash",
        "desc": "Diskda o'nlab gigabayt bo'sh joy ochadi!"
      }
    ],
    "underTheHood": "Virtual mashinalardan farqli ravishda alohida operatsion tizim (Guest OS) o'rnatmaydi! U to'g'ridan-to'g'ri xost Linux yadrosining `Namespaces` (izolyatsiya: PID, NET, IPC, MNT) va `cgroups` (resurs cheklovlari: CPU, RAM) texnologiyalaridan foydalanadi.",
    "example": "$ docker --version\nDocker version 24.0.5, build cedb78b",
    "analogy": "Dengiz yuk konteyneri: uning ichida qanday tovar (kod) bo'lishidan qat'i nazar, istalgan yuk kemasida (serverda) bir xil standartda tashiladi va ishlaydi.",
    "pitfalls": "Docker konteyneri virtual mashina (VM) emas. U xost yadrosini (Host Kernel) bo'lishadi, shuning uchun Windows yadroli dasturni to'g'ridan-to'g'ri Linux Docker ichida ishlatib bo'lmaydi."
  },
  {
    "cmd": "docker run",
    "name": "Run a Container (Yangi Konteynerni Yaratish va Ishga Tushirish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker run [BAYROQLAR] RASM [BUYRUQ]",
    "syntaxRules": "Eng muhim 4 ta bayroq: -d (orqa fon), -p (port mapping), --name (nom), -v (volume).",
    "desc": "Docker obrazidan (Image) yangi izolyatsiyalangan konteyner yaratadi va uni ishga tushiradi. Portlarni xostga bog'laydi, muhit o'zgaruvchilarini uzatadi va xotira limitlarini belgilaydi.",
    "flags": [
      {
        "flag": "-d",
        "desc": "Orqa fonda ajratilgan rejimda ishlatish (Detached mode)."
      },
      {
        "flag": "-p [XOST_PORT:KONTEYNER_PORT]",
        "desc": "Tarmoq portini xostga yo'naltirish (masalan -p 8080:80)."
      },
      {
        "flag": "--name [NOM]",
        "desc": "Konteynerga inson tushunadigan chiroyli nom berish."
      },
      {
        "flag": "-v [XOST_PAPKASI:KONTEYNER_PAPKASI]",
        "desc": "Ma'lumotlarni saqlab qolish uchun hajmni (Volume) ulash."
      },
      {
        "flag": "-e [KEY=VAL]",
        "desc": "Muhit o'zgaruvchisini uzatish (Environment variable)."
      },
      {
        "flag": "--rm",
        "desc": "Konteyner to'xtashi bilan uni avtomatik o'chirib tashlash."
      },
      {
        "flag": "-it",
        "desc": "Interaktiv terminal rejimida kirish (Interactive TTY)."
      }
    ],
    "combos": [
      {
        "combo": "docker run -d -p 80:80 --name my_web --restart always nginx",
        "title": "24/7 ishlovchi Nginx veb-serverini ishga tushirish (Oltin formula)",
        "desc": "Server qayta yonsa ham avtomatik qayta tiklanuvchi Nginx konteyneri."
      },
      {
        "combo": "docker run -it --rm ubuntu:22.04 bash",
        "title": "Vaqtinchalik toza Ubuntu sinov maydonini ochish",
        "desc": "Chiqishingiz bilanoq o'zini tozalab tashlovchi sinov muhiti."
      },
      {
        "combo": "docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres",
        "title": "PostgreSQL ma'lumotlar bazasini 5 soniyada yoqish",
        "desc": "Tayyor ishlab turgan baza serverini ishga soladi."
      }
    ],
    "underTheHood": "Docker Daemon yadroda yangi `Network Namespace` va `cgroup` ochadi, `overlay2` fayl tizimida yangi o'qish/yozish (Read/Write) qatlamini yaratadi va `runc` orqali konteyner jarayonini boshlaydi.",
    "example": "$ docker run -d -p 8080:80 --name test_nginx nginx\n2d45a9f54b123...\n$ curl http://localhost:8080\nWelcome to nginx!",
    "analogy": "Kvartirani tayyor mebellari bilan ijaraga olib, kalitni burab darhol yashashni boshlash.",
    "pitfalls": "Agar `-d` bayrog'i unutilsa, konteyner butun terminalingizni egallab oladi va terminalni yopganingizda konteyner ham o'chib qoladi."
  },
  {
    "cmd": "docker ps",
    "name": "List Containers (Ishlab Turgan va To'xtatilgan Konteynerlar Ro'yxati)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker ps [BAYROQLAR]",
    "syntaxRules": "Standart holatda faqat ishlab turganlarni ko'rsatadi. To'xtatilganlarni ko'rish uchun '-a' kerak.",
    "desc": "Barcha konteynerlarning ID si, qaysi rasmdan yaratilgani, portlari, holati (Up / Exited) va nomlarini jadval ko'rinishida chiqaradi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha konteynerlarni, jumladan to'xtagan va xatoga uchraganlarni ham ko'rsatish (All)."
      },
      {
        "flag": "-q",
        "desc": "Faqat konteynerlarning ID raqamlarini chiqarish (Quiet - skriptlar uchun juda qulay)."
      },
      {
        "flag": "-s",
        "desc": "Har bir konteyner diskda qancha joy olayotganini ko'rsatish (Size)."
      }
    ],
    "combos": [
      {
        "combo": "docker ps",
        "title": "Ayni damda ishlab turgan konteynerlarni tekshirish",
        "desc": "Faol xizmatlar holatini ko'zdan kechirish."
      },
      {
        "combo": "docker ps -a",
        "title": "Barcha to'xtagan va o'chgan konteynerlarni fosh qilish",
        "desc": "Nima sababdan to'xtaganini (Exit code) ko'rsatadi."
      },
      {
        "combo": "docker stop $(docker ps -q)",
        "title": "Barcha ishlayotgan konteynerlarni bitta buyruq bilan to'xtatish",
        "desc": "Barcha konteynerlarni bir vaqtda to'xtatuvchi SysAdmin fokus."
      }
    ],
    "underTheHood": "Docker Daemon (`dockerd`) o'zining ichki holatlar bazasini o'qib, JSON/jadval formatida mijozga qaytaradi.",
    "example": "$ docker ps\nCONTAINER ID   IMAGE   COMMAND                  STATUS         PORTS                  NAMES\n8f9a2b1c4d5e   nginx   \"/docker-entrypoint.…\"   Up 2 hours     0.0.0.0:80->80/tcp     web",
    "analogy": "Avtoturargohda qaysi mashinalar dvigateli o't olib turganini va qaysilari o'chirilganini ko'rsatuvchi navbatchi jurnali.",
    "pitfalls": "Konteyner to'satdan yo'qolib qolsa, u o'chib ketmagan bo'lishi mumkin! `docker ps -a` qilsangiz uning `Exited (1)` holatda to'xtab turganini ko'rasiz."
  },
  {
    "cmd": "docker build",
    "name": "Build Image from Dockerfile (Dockerfile Asosida Yangi Obraz Yig'ish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker build [BAYROQLAR] [KATALOG_MANZILI]",
    "syntaxRules": "Oxiridagi nuqta '.' joriy katalogdagi Dockerfile ni bildiradi. Obrazga nom berish uchun '-t' shart.",
    "desc": "Yozilgan `Dockerfile` ko'rsatmalari (FROM, RUN, COPY, CMD) asosida yangi qatlamli (layered) Docker obrazini (Image) yig'adi va kompyuterga saqlaydi.",
    "flags": [
      {
        "flag": "-t [NOM:TEG]",
        "desc": "Obrazga nom va versiya tegi berish (Tag — masalan -t myapp:v1.0)."
      },
      {
        "flag": "-f [FAYL]",
        "desc": "Standart bo'lmagan Dockerfile nomini ko'rsatish."
      },
      {
        "flag": "--no-cache",
        "desc": "Eski keshlarni ishlatmasdan noldan toza yig'ish."
      }
    ],
    "combos": [
      {
        "combo": "docker build -t myapp:latest .",
        "title": "Joriy papkadagi kodni Docker obraziga yig'ish",
        "desc": "Eng standart Docker yig'ish buyrug'i."
      },
      {
        "combo": "docker build --no-cache -t web:v2 .",
        "title": "Keshsiz toza yig'ish",
        "desc": "Barcha paketlarni noldan qayta yuklab yangi obraz yasaydi."
      }
    ],
    "underTheHood": "BuildKit dvigateli har bir ko'rsatmani vaqtinchalik konteynerda bajaradi, uning o'zgarishlarini alohida 'Read-Only Image Layer' qilib muhrlaydi va SHA-256 xeshini hisoblaydi.",
    "example": "$ docker build -t simple-app .\n[+] Building 2.5s (8/8) FINISHED\n => => naming to docker.io/library/simple-app",
    "analogy": "Pazandaning retsept (Dockerfile) asosida to'rt pishirishi: har bir qatlam (biskvit, krem, meva) alohida qo'yilib yakuniy mahsulot hosil qilinadi.",
    "pitfalls": "Oxiridagi nuqtani (`.`) unutib qoldirish eng ko'p uchraydigan xatodir. Nuqta 'qurilish konteksti joriy papka' ekanligini bildiradi."
  },
  {
    "cmd": "docker images",
    "name": "List Docker Images (Yuklangan va Yaratilgan Barcha Obrazlarni Ko'rish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker images [BAYROQLAR]",
    "syntaxRules": "Repository, Tag, Image ID, yaratilgan vaqti va diskdagi hajmini chiqaradi.",
    "desc": "Kompyuter diskida saqlanayotgan barcha tayyor Docker obrazlari (shablonlar) ro'yxatini va ularning qancha joy olayotganini ko'rsatadi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha oraliq qatlamli obrazlarni ham ko'rsatish."
      },
      {
        "flag": "-q",
        "desc": "Faqat Image ID larni chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "docker images",
        "title": "Mavjud barcha obrazlarni ko'rish",
        "desc": "Diskdagi tayyor shablonlar ro'yxati."
      },
      {
        "combo": "docker rmi $(docker images -q -f 'dangling=true')",
        "title": "Keraksiz nomsiz (<none>) eski obrazlarni tozalash",
        "desc": "Yangi yig'ishdan keyin qolib ketgan chiqindi qatlamlarni tozalaydi."
      }
    ],
    "underTheHood": "`/var/lib/docker/image/overlay2/imagedb/` katalogidagi manifestlarni o'qiydi.",
    "example": "$ docker images\nREPOSITORY   TAG       IMAGE ID       CREATED        SIZE\nnginx        latest    a8758716e9aa   2 days ago     187MB\npython       3.11      c5123d45e123   1 week ago     1.01GB",
    "analogy": "Fabrikadagi qoliplar javoni: yangi mahsulot quyish uchun qanday andozalar borligini ko'rish.",
    "pitfalls": "Obrazlar vaqt o'tishi bilan gigabaytlab joyni band qiladi, muntazam tekshirib turish zarur."
  },
  {
    "cmd": "docker stop",
    "name": "Stop Running Containers (Ishlayotgan Konteynerni Xavfsiz To'xtatish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker stop [BAYROQLAR] KONTEYNER...",
    "syntaxRules": "Avval SIGTERM yuboradi; agar 10 soniyada to'xtamasa SIGKILL yuboradi.",
    "desc": "Ishlab turgan konteyner ichidagi dasturlarga muloyim to'xtash signalini yuborib, ularni xavfsiz to'xtatadi.",
    "flags": [
      {
        "flag": "-t [SONIYA]",
        "desc": "Majburiy o'ldirishdan oldin necha soniya kutish (standart 10 soniya)."
      }
    ],
    "combos": [
      {
        "combo": "docker stop my_web",
        "title": "Konteynerni to'xtatish",
        "desc": "my_web konteynerini xavfsiz to'xtatadi."
      },
      {
        "combo": "docker stop $(docker ps -q)",
        "title": "Hamma faol konteynerlarni bir zumda to'xtatish",
        "desc": "Barcha konteynerlarni xavfsiz yopadi."
      }
    ],
    "underTheHood": "Konteynerning 1-jarayoniga (PID 1) `SIGTERM` yuboradi. Agar taymer o'tgach jarayon chiqmasa, yadro `SIGKILL` orqali to'xtatadi.",
    "example": "$ docker stop my_web\nmy_web",
    "analogy": "Dasturni 'Fayl -> Chiqish' tugmasi bilan tartibli yopish.",
    "pitfalls": "`docker kill` bilan adashtirmang; `stop` ma'lumotlarni saqlashga imkon beradi, `kill` esa darhol o'ldiradi."
  },
  {
    "cmd": "docker rm",
    "name": "Remove Containers (To'xtatilgan Konteynerlarni O'chirib Tashlash)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker rm [BAYROQLAR] KONTEYNER...",
    "syntaxRules": "Faqat to'xtagan konteynerlarni o'chiradi. Ishlayotganini o'chirish uchun '-f' kerak.",
    "desc": "To'xtab turgan va endi kerak bo'lmagan konteynerlarni butunlay o'chiradi va uning o'zgaruvchan Read/Write qatlamini diskdan tozalaydi.",
    "flags": [
      {
        "flag": "-f",
        "desc": "Majburiy o'chirish (Force) — ishlab turgan konteynerni ham darhol to'xtatib o'chiradi."
      },
      {
        "flag": "-v",
        "desc": "Konteynerga biriktirilgan nomlanmagan anonim hajmlarni (volumes) ham birga o'chirish."
      }
    ],
    "combos": [
      {
        "combo": "docker rm my_old_container",
        "title": "Konteynerni o'chirish",
        "desc": "Eski konteynerni tozalaydi."
      },
      {
        "combo": "docker rm -f $(docker ps -aq)",
        "title": "Barcha to'xtagan va ishlab turgan konteynerlarni to'liq tozalash",
        "desc": "Barcha konteynerlarni bir harakatda yo'q qiluvchi kuchli qurol."
      }
    ],
    "underTheHood": "Konteynerning cgroup va namespace yozuvlarini tozalaydi, `/var/lib/docker/containers/[ID]` papkasini o'chiradi.",
    "example": "$ docker rm my_web\nmy_web",
    "analogy": "Qurilgan uyni buzib tashlash (chizma qoladi, lekin binoning o'zi ketadi).",
    "pitfalls": "Agar konteyner ichidagi ma'lumotlar 'Volume' ga saqlanmagan bo'lsa, `docker rm` bajarilgach uning ichidagi barcha yangi fayllar abadiy yo'qoladi!"
  },
  {
    "cmd": "docker rmi",
    "name": "Remove Images (Keraksiz Obrazlarni Diskdan O'chirish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker rmi [BAYROQLAR] OBRAZ...",
    "syntaxRules": "Agar bu obrazdan yaratilgan birorta konteyner mavjud bo'lsa, o'chirish rad etiladi.",
    "desc": "Diskda saqlanayotgan Docker obrazlarini (masalan, eski versiyalarni) o'chirib diskda bo'sh joy ochadi.",
    "flags": [
      {
        "flag": "-f",
        "desc": "Majburiy o'chirish (Force)."
      }
    ],
    "combos": [
      {
        "combo": "docker rmi nginx:old",
        "title": "Eski Nginx obrazini o'chirish",
        "desc": "Keraksiz shablonni tozalaydi."
      },
      {
        "combo": "docker image prune -a",
        "title": "Hech qaysi konteyner ishlatmayotgan barcha obrazlarni tozalash",
        "desc": "Diskni gigabaytlab bo'shatadi."
      }
    ],
    "underTheHood": "Obraz qatlamlarini (layer) tekshiradi; agar qatlam boshqa obrazlar tomonidan ishlatilmayotgan bo'lsa disk bloklarini o'chiradi.",
    "example": "$ docker rmi python:3.9\nUntagged: python:3.9\nDeleted: sha256:d1234...",
    "analogy": "Keraksiz me'moriy chizmani arxivdan olib tashlash.",
    "pitfalls": "Oldin shu obrazga tegishli konteynerlarni o'chirish kerak, aks holda `conflict: unable to delete image` xatosi chiqadi."
  },
  {
    "cmd": "docker logs",
    "name": "Fetch Logs of a Container (Konteyner Loglarini Ko'rish va Jonli Kuzatish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker logs [BAYROQLAR] KONTEYNER",
    "syntaxRules": "Konteyner ichidagi dasturning stdout va stderr oqimlarini chiqaradi.",
    "desc": "Konteyner ichidagi dastur nima xatolik berayotganini terminalga chiqarmasdan turib tashqaridan o'qish imkonini beruvchi bosh diagnostika buyrug'i.",
    "flags": [
      {
        "flag": "-f",
        "desc": "Jonli efirda kuzatish (Follow) — xuddi tail -f kabi yangi kelgan loglarni uzatadi."
      },
      {
        "flag": "--tail [SON]",
        "desc": "Faqat eng oxirgi N ta qatorni ko'rsatish (masalan --tail 50)."
      },
      {
        "flag": "-t",
        "desc": "Har bir log yozuvi yoniga aniq vaqt tamg'asini qo'shish (Timestamps)."
      }
    ],
    "combos": [
      {
        "combo": "docker logs -f --tail 100 my_app",
        "title": "Oxirgi 100 ta logni ko'rib jonli kuzatish",
        "desc": "Dasturchilarning eng sevimli buyrug'i."
      },
      {
        "combo": "docker logs -t my_database",
        "title": "Vaqt tamg'alari bilan loglarni ko'rish",
        "desc": "Xatolik qaysi sekundda yuz berganini aniqlaydi."
      }
    ],
    "underTheHood": "Docker Daemon konteyner stdout/stderr oqimlarini `/var/lib/docker/containers/[ID]/[ID]-json.log` fayliga yozib boradi va `docker logs` o'sha faylni o'qiydi.",
    "example": "$ docker logs --tail 2 my_web\n192.168.1.1 - - [26/Oct/2026:20:45:00 +0000] \"GET / HTTP/1.1\" 200 615\n192.168.1.5 - - [26/Oct/2026:20:45:02 +0000] \"GET /api HTTP/1.1\" 404 153",
    "analogy": "Konteyner xonasiga kirmasdan darchadan ichkaridagi diktofon yozuvini tinglash.",
    "pitfalls": "Agar dastur loglarini stdout/stderr ga emas, ichidagi faylga yozayotgan bo'lsa, `docker logs` bo'sh bo'lib qoladi."
  },
  {
    "cmd": "docker exec",
    "name": "Execute Command in Running Container (Ishlab Turgan Konteyner Ichiga Kirish / Buyruq Bajarish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker exec [BAYROQLAR] KONTEYNER BUYRUQ",
    "syntaxRules": "Konteyner ichida interaktiv terminal (Bash/Sh) ochish uchun '-it' bayrog'i berilishi shart.",
    "desc": "Konteynerni to'xtatmasdan turib, uning ichida yangi jarayon ochish yoki uning ichki qobig'iga (Bash) kirib, fayllarni to'g'ridan-to'g'ri ko'zdan kechirish vositasi.",
    "flags": [
      {
        "flag": "-it",
        "desc": "Interaktiv terminal rejimini yoqish (Interactive TTY) — ichkariga kirish uchun majburiy!"
      },
      {
        "flag": "-u [USER]",
        "desc": "Konteyner ichida root yoki boshqa foydalanuvchi nomidan buyruq bajarish."
      }
    ],
    "combos": [
      {
        "combo": "docker exec -it my_container bash",
        "title": "Konteyner ichiga terminal orqali kirish (Klassik)",
        "desc": "Xuddi yangi serverga kirgandek konteyner ichida buyruqlar bajarish imkoniyati."
      },
      {
        "combo": "docker exec -it my_postgres psql -U postgres",
        "title": "Konteynerdagi bazaga to'g'ridan-to'g'ri ulanish",
        "desc": "Baza CLI ga bir zumda kiradi."
      }
    ],
    "underTheHood": "Linux yadrosining `setns()` tizim chaqiruvi orqali yangi jarayonni nishon konteynerning mavjud Namespaces (PID, Mount, Net) lariga qo'shadi.",
    "example": "$ docker exec -it my_web bash\nroot@2d45a9f54b12:/# ls /etc/nginx\nconf.d  fastcgi_params  nginx.conf",
    "analogy": "Ishlab turgan kemaning ichiga lyuk orqali tushib, dvigatelni tekshirib chiqish.",
    "pitfalls": "Kichik Alpine obrazlarida `bash` bo'lmaydi! Agar `bash` xato bersa, `docker exec -it my_container sh` deb yozing."
  },
  {
    "cmd": "docker volume",
    "name": "Manage Docker Volumes (Doimiy Ma'lumotlarni Saqlash Xotirasi)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker volume [BUYRUQ]",
    "syntaxRules": "Eng asosiy buyruqlar: create, ls, inspect, rm, prune.",
    "desc": "Konteyner o'chirib yuborilganda ham ma'lumotlar bazalari (MySQL, PostgreSQL) va yuklangan fayllar diskda xavfsiz saqlanib qolishini ta'minlovchi maxsus doimiy xotira (Persistent Storage) boshqaruvi.",
    "flags": [
      {
        "flag": "create",
        "desc": "Yangi nomlangan hajm (Volume) yaratish."
      },
      {
        "flag": "ls",
        "desc": "Barcha mavjud hajmlar ro'yxatini ko'rish."
      },
      {
        "flag": "inspect",
        "desc": "Hajm xost diskining aynan qaysi papkasida joylashganini ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "docker volume create db_data",
        "title": "Baza uchun doimiy xotira yaratish",
        "desc": "O'chib ketmaydigan maxsus joy ochadi."
      },
      {
        "combo": "docker run -d -v db_data:/var/lib/postgresql/data postgres",
        "title": "Konteynerga doimiy hajmni biriktirish",
        "desc": "Konteyner o'chsa ham ma'lumotlar db_data ichida 100% omon qoladi!"
      }
    ],
    "underTheHood": "Xost kompyuterning `/var/lib/docker/volumes/[NOM]/_data` papkasini konteyner ichidagi ko'rsatilgan papkaga `mount --bind` orqali to'g'ridan-to'g'ri ulaydi.",
    "example": "$ docker volume ls\nDRIVER    VOLUME NAME\nlocal     db_data",
    "analogy": "Tashqi qattiq disk (Fleshka): noutbukni (konteynerni) almashtirsangiz ham barcha fotosuratlaringiz fleshkada xavfsiz saqlanaveradi.",
    "pitfalls": "Anonim volumelar vaqt o'tishi bilan diskni to'ldirib yuborishi mumkin; `docker volume prune` orqali keraksizlarini tozalab turing."
  },
  {
    "cmd": "docker network",
    "name": "Manage Docker Networks (Konteynerlar O'rtasidagi Izolyatsiyalangan Virtual Tarmoqlar)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker network [BUYRUQ]",
    "syntaxRules": "Drayverlar: bridge (standart ichki tarmoq), host (to'g'ridan-to'g'ri xost tarmog'i), none (aloqasiz).",
    "desc": "Konteynerlarning o'zaro bir-biri bilan nomlari orqali (DNS orqali) xavfsiz bog'lanishini ta'minlovchi virtual tarmoqlar menejeri.",
    "flags": [
      {
        "flag": "create",
        "desc": "Yangi foydalanuvchi virtual tarmog'ini yaratish (Custom Bridge)."
      },
      {
        "flag": "ls",
        "desc": "Mavjud barcha tarmoqlarni ko'rish."
      },
      {
        "flag": "connect",
        "desc": "Konteynerni tarmoqqa ulash."
      }
    ],
    "combos": [
      {
        "combo": "docker network create app_net",
        "title": "Konteynerlar uchun yangi ichki tarmoq ochish",
        "desc": "Xavfsiz izolyatsiyalangan virtual tarmoq hosil qiladi."
      },
      {
        "combo": "docker run -d --net app_net --name backend my_api",
        "title": "Konteynerni tarmoqqa ulash",
        "desc": "Endi boshqa konteynerlar unga 'http://backend' deb nomi bilan murojaat qila oladi (IP kerak emas)!"
      }
    ],
    "underTheHood": "Linux yadrosining `bridge` interfeyslari (`br0`, `docker0`) va `veth` (virtual ethernet pairs) juftliklarini yaratadi hamda `iptables` orqali paketlarni yo'naltiradi.",
    "example": "$ docker network ls\nNETWORK ID     NAME      DRIVER    SCOPE\n4d123456789a   bridge    bridge    local\n5e987654321b   app_net   bridge    local",
    "analogy": "Xonadon ichiga Wi-Fi router qo'yish: telefon, noutbuk va televizor simsiz bir-biri bilan gaplashadi, lekin ko'chadagilar ularga kira olmaydi.",
    "pitfalls": "Standart 'bridge' tarmog'ida konteynerlar bir-birini nomi bilan topa olmaydi! Nomi bilan topishi (avtomatik DNS) uchun albatta o'zingiz yangi tarmoq ochishingiz kerak (`docker network create`)."
  },
  {
    "cmd": "docker-compose",
    "name": "Multi-Container Docker Applications (Ko'p Konteynerli Tizimlarni Yagona YAML Bilan Boshqarish)",
    "category": "Docker & Konteynerlar",
    "syntax": "docker-compose [BAYROQLAR] [BUYRUQ]",
    "syntaxRules": "Hamma narsa 'docker-compose.yml' faylida yoziladi. Eng muhim buyruqlar: up, down, ps, logs.",
    "desc": "Frontend, Backend, Redis va PostgreSQL kabi bir nechta o'zaro bog'liq konteynerlarni bitta buyruq (`docker-compose up -d`) bilan to'liq tarmoqlari va xotiralari bilan birgalikda ishga tushirish va boshqarish orkestratori.",
    "flags": [
      {
        "flag": "up -d",
        "desc": "Barcha xizmatlarni orqa fonda yaratib ishga tushirish (Up detached)."
      },
      {
        "flag": "down",
        "desc": "Barcha konteynerlar va ularning virtual tarmoqlarini to'xtatib tozalash."
      },
      {
        "flag": "build",
        "desc": "Dockerfile lardan obrazlarni qayta yig'ish."
      },
      {
        "flag": "logs -f",
        "desc": "Barcha xizmatlar loglarini bir vaqtda rangli ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "docker-compose up -d",
        "title": "Butun loyihani (Veb, Baza, Kesh) 1 soniyada yoqish",
        "desc": "DevOps muhandislarining eng sehrli buyrug'i."
      },
      {
        "combo": "docker-compose down -v",
        "title": "Hamma narsani xotiralari bilan tozalab o'chirish",
        "desc": "Barcha konteynerlar va hajmlarni to'liq tozalaydi."
      },
      {
        "combo": "docker-compose ps",
        "title": "Compose xizmatlari holatini ko'rish",
        "desc": "Qaysi servislar ishlab turganini ko'rsatadi."
      }
    ],
    "underTheHood": "YAML faylni o'qiydi, avtomatik yangi tarmoq barpo etadi, bog'liqliklarni (`depends_on`) hisoblab, Docker Engine API orqali konteynerlarni to'g'ri ketma-ketlikda yaratadi.",
    "example": "$ docker-compose up -d\nCreating network \"my_project_default\" with the default driver\nCreating my_project_db_1   ... done\nCreating my_project_web_1  ... done",
    "analogy": "Orkestr dirijyori: bitta ishora bilan skripka, truba va baraban (Nginx, Node.js, Postgres) bir vaqtda uyg'un kuy chala boshlaydi.",
    "pitfalls": "YAML faylda probellar o'rniga 'Tab' tugmasini bosib qo'yish sintaktik xatoga sabab bo'ladi. YAML da faqat probellar ishlatiladi!"
  },
  {
    "cmd": "Dockerfile Sintaksisi",
    "name": "Dockerfile Directives (Konteyner Obrazini Yig'ish Yo'riqnomasi)",
    "category": "Docker & Konteynerlar",
    "syntax": "FROM, WORKDIR, COPY, RUN, EXPOSE, ENV, CMD",
    "syntaxRules": "Har bir yo'riqnoma alohida Read-Only qatlam (Layer) hosil qiladi.",
    "desc": "Ilovangiz qanday bazaviy operatsion tizimdan boshlanishi, qanday kutubxonalar o'rnatilishi, fayllar qayerga nusxalanishi va qaysi buyruq bilan ishga tushishini qat'iy belgilovchi avtomatlashtirilgan retsept.",
    "flags": [
      {
        "flag": "FROM",
        "desc": "Bazaviy obrazni tanlash (masalan, FROM python:3.11-slim yoki FROM node:18)."
      },
      {
        "flag": "WORKDIR",
        "desc": "Konteyner ichidagi asosiy ishchi katalogni belgilash."
      },
      {
        "flag": "COPY",
        "desc": "Xostdagi kodlarni konteyner ichiga ko'chirish."
      },
      {
        "flag": "RUN",
        "desc": "Obraz yig'ilayotganda paketlarni o'rnatish (masalan, RUN apt update && apt install -y curl)."
      },
      {
        "flag": "EXPOSE",
        "desc": "Konteyner qaysi portdan xizmat ko'rsatishini hujjatlashtirish."
      },
      {
        "flag": "CMD",
        "desc": "Konteyner yoqilganda eng birinchi bajariladigan asosiy buyruq (masalan, CMD [\"python\", \"app.py\"])."
      }
    ],
    "combos": [
      {
        "combo": "FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD [\"python\", \"main.py\"]",
        "title": "Klassik professional Python Dockerfile namunasi",
        "desc": "Keshdan maksimal unumli foydalanuvchi ideal andoza."
      }
    ],
    "underTheHood": "Har bir `RUN`, `COPY`, `ADD` yangi COW (Copy-On-Write) qatlami yaratadi. O'zgarmas qatlamlar keshda saqlanadi, shuning uchun keyingi safar yig'ish bir necha soniyada tugaydi.",
    "example": "FROM alpine:latest\nRUN apk add --no-cache curl\nCMD [\"curl\", \"https://icanhazip.com\"]",
    "analogy": "Mebel yig'ish yo'riqnomasi (IKEA yo'riqnomasi): 1-qadam yog'ochni qo'y, 2-qadam murvatni burab qotir, 3-qadam lak surt.",
    "pitfalls": "`RUN` buyrug'i obraz yig'ilayotganda (build paytida) ishlaydi; `CMD` esa faqat konteyner ishga tushganda (run paytida) bajariladi. Ularni aslo adashtirmang!"
  },
  {
    "cmd": "Demand Paging",
    "name": "Demand Paging (Xotira Sahifalarini Faqat Kerak Bo'lganda Yuklash Tamoyili)",
    "category": "Virtual Xotira Nazariyasi",
    "syntax": "Lazy Loading / On-Demand xotira boshqaruvi",
    "syntaxRules": "Dasturning butun 1 GB kodini RAM ga darhol yuklamaydi, faqat ayni daqiqada bajarilayotgan sahifasinigina yuklaydi.",
    "desc": "Zamonaviy operatsion tizimlarning xotirani tejashdagi eng buyuk kashfiyoti. Dastur ishga tushganda uning 90% kodi xotiraga yuklanmay diskda turaveradi; qachonki protsessor biror yangi funksiyaga murojaat qilsa, o'sha sahifa 'Page Fault' orqali diskdan RAM ga chaqirib olinadi.",
    "flags": [
      {
        "flag": "Page Fault",
        "desc": "So'ralgan sahifa RAM da yo'qligi sababli protsessor tomonidan chaqiriladigan apparat uzilishi."
      },
      {
        "flag": "Pure Demand Paging",
        "desc": "Dastur 0 ta sahifa bilan boshlanadi va har bir qadamda Page Fault yuz beradi."
      }
    ],
    "combos": [
      {
        "combo": "Page Fault Ketma-ketligi: 1) Trap to OS -> 2) Save Context -> 3) Read Disk -> 4) Update Page Table -> 5) Resume",
        "title": "Page Fault ni qayta ishlashning 6 ta bosqichi (Viva savoli)",
        "desc": "Imtihonlarda eng ko'p so'raladigan yadro sikli."
      }
    ],
    "underTheHood": "MMU sahifa jadvalida `Valid/Invalid` bitini tekshiradi. Agar bit 0 bo'lsa, MMU yadroga `#PF` (Page Fault Exception) signalini beradi. Yadro diskdan sahifani bo'sh freymga yuklaydi, bitni 1 qiladi va to'xtagan buyruqni qayta takrorlaydi.",
    "example": "Photoshop dasturi 2 GB, lekin uning faqat ochish tugmasini bosganingizda RAM ga bor-yo'g'i 30 MB kodi yuklanadi, filtrlarni ishlatmaguningizcha filtrlarning kodi diskda qoladi.",
    "analogy": "Katta qalin lug'at kitobini yodlab olmasdan, faqat kerakli so'z chiqqandagina lug'atni ochib o'sha betni o'qish.",
    "pitfalls": "Agar xotirada bo'sh freym qolmagan bo'lsa, yadro Page Replacement (sahifani almashtirish) algoritmini ishga solishga majbur bo'ladi."
  },
  {
    "cmd": "Page Replacement",
    "name": "Page Replacement Algorithms (Sahifalarni Almashtirish: FIFO, LRU, Optimal)",
    "category": "Virtual Xotira Nazariyasi",
    "syntax": "Xotira to'lganda qurbon sahifani (Victim Page) tanlash",
    "syntaxRules": "Agar RAM to'lib qolsa va yangi sahifa kerak bo'lsa, eskisini Swap ga chiqarib tashlash algoritmlari.",
    "desc": "Operativ xotirada (RAM) yangi sahifa uchun bo'sh joy qolmaganda, qaysi eski sahifani qurbon qilib (Victim Page) diskka chiqarishni tanlovchi algoritmlar.",
    "flags": [
      {
        "flag": "FIFO",
        "desc": "First-In, First-Out: eng birinchi kelgan sahifani chiqarib tashlaydi (Belady's Anomaly ga uchraydi)."
      },
      {
        "flag": "LRU (Least Recently Used)",
        "desc": "Eng uzoq vaqt davomida ishlatilmagan sahifani chiqaradi (Amalda eng yaxshi algoritm)."
      },
      {
        "flag": "OPT (Optimal)",
        "desc": "Kelajakda eng uzoq vaqt davomida ishlatilmaydigan sahifani chiqaradi (Nazariy ideal mezon, kelajakni bilish imkonsiz)."
      },
      {
        "flag": "Clock / Second Chance",
        "desc": "LRU ning apparat apparat bitlari (Reference bit) orqali yengil amalga oshirilgan varianti."
      }
    ],
    "combos": [
      {
        "combo": "Belady Anomaliyasi: Freymlar sonini 3 tadan 4 taga oshirganda FIFO da Page Fault lar soni kamayish o'rniga oshib ketishi!",
        "title": "Belady's Anomaly (Klassik imtihon savoli)",
        "desc": "Faqat FIFO algoritmiga xos bo'lgan g'alati kamchilik."
      }
    ],
    "underTheHood": "Yadro sahifalar jadvalidagi `Accessed` va `Dirty` bitlarini kuzatib boradi. Agar qurbon sahifa 'Dirty' (o'zgartirilgan) bo'lsa, u oldin diskka yoziladi; o'zgarmagan bo'lsa shunchaki o'chirib yuboriladi.",
    "example": "Sahifalar oqimi: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3.\nLRU eng uzoq vaqt tilga olinmagan raqamni topib o'rniga yangisini qo'yadi.",
    "analogy": "Kichik muzlatgichga yangi mahsulot sig'may qolsa, qaysi ovqat eng uzoq vaqtdan beri tegilmasdan turgan bo'lsa (LRU), o'shani chiqarib tashlash.",
    "pitfalls": "FIFO oddiy bo'lsa ham amaliyotda tavsiya etilmaydi, chunki u dastur har doim ishlatib turadigan muhim kutubxonani ham birinchi kelgani uchun o'chirib yuborishi mumkin."
  },
  {
    "cmd": "Thrashing",
    "name": "Thrashing (Tizimning Xotira Qulashi va Falaj Holatiga Tushishi)",
    "category": "Virtual Xotira Nazariyasi",
    "syntax": "Xotira inqirozi: CPU Utilization keskin 0-5% ga tushib, Disk I/O 100% ga chiqadi",
    "syntaxRules": "Jarayonlar ish bajarishdan ko'ra ko'proq vaqtini sahifalarni diskdan RAM ga va RAM dan diskka ko'chirishga sarflaydi.",
    "desc": "Operatsion tizim duch kelishi mumkin bo'lgan eng dahshatli xotira inqirozi. Dasturlar so'ragan umumiy xotira hajmi (Working Set) mavjud fizik RAM dan oshib ketganda, yadro uzluksiz sahifa almashtirish bilan band bo'lib qoladi, haqiqiy foydali ish to'xtaydi va butun kompyuter butunlay qotib qoladi.",
    "flags": [
      {
        "flag": "Working Set Model",
        "desc": "Har bir jarayon normal ishlashi uchun zarur bo'lgan minimal sahifalar to'plami."
      },
      {
        "flag": "Page-Fault Frequency",
        "desc": "Page Fault lar chastotasi kritik chegaradan oshib ketishi."
      }
    ],
    "combos": [
      {
        "combo": "Yechim 1: Ayrim jarayonlarni vaqtincha to'xtatish (Suspend/Kill)",
        "title": "Thrashing ni to'xtatish yo'li",
        "desc": "Degree of Multiprogramming ni kamaytirish orqali xotirani bo'shatish."
      },
      {
        "combo": "Yechim 2: Serverga qo'shimcha fizik RAM moduli o'rnatish",
        "title": "Apparat yechimi",
        "desc": "Fizik freymlar sonini yetarli darajaga keltirish."
      }
    ],
    "underTheHood": "Page Fault lar soni haddan tashqari ko'payganda, CPU barcha jarayonlarni disk kutish (I/O wait - D holatiga) holatiga o'tkazadi. CPU bo'shab qolganini ko'rgan yadro yana yangi jarayonlarni boshlaydi, bu esa falokatni yanada chuqurlashtiradi.",
    "example": "Kompyuterda bir vaqtning o'zida 100 ta og'ir brauzer oynasi ochilganda disk chirog'i (HDD LED) tinimsiz qizil yonib, sichqoncha ham qimirlamay qolishi.",
    "analogy": "Talabaning stoli kichkinaligi sababli unga 10 ta kitob sig'maydi: u har 5 soniyada bitta kitobni javonga qo'yib, ikkinchisini oladi; natijada dars o'qish (CPU) nolga tushib, butun vaqti kitob tashishga (I/O) ketadi.",
    "pitfalls": "Thrashing boshlanganda Swap hajmini oshirish yordam bermaydi, aksincha diskka murojaatni yanada ko'paytirib ahvolni og'irlashtiradi. Yagona yechim — og'ir jarayonlarni yopish yoki RAM qo'shish!"
  }
];
