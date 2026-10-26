// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 SPECIFIC COMMANDS REPOSITORY
// Modul: 5-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "free",
    "name": "Operativ Xotira (RAM) & Swap Balansi",
    "category": "Xotira Boshqaruvi",
    "syntax": "free -h",
    "desc": "Jami operativ xotira, dasturlar band qilgan qismi, kesh (buffers/cache) va almashtirish xotirasi (Swap) hajmini chiqaradi.",
    "dictSearch": "free"
  },
  {
    "cmd": "pmap",
    "name": "Jarayon Xotira Xaritasi (Memory Map)",
    "category": "Xotira Boshqaruvi",
    "syntax": "pmap -x [PID]",
    "desc": "Joriy jarayonning virtual xotira manzillari (Stack, Heap, yuklangan kutubxonalar) qanday taqsimlanganini ko'rsatadi.",
    "dictSearch": "pmap"
  },
  {
    "cmd": "swapon",
    "name": "Swap Xotirasini Faollashtirish",
    "category": "Xotira Boshqaruvi",
    "syntax": "sudo swapon /swapfile",
    "desc": "Diskdagi virtual xotira fayli yoki bo'limini operativ xotiraga yordamchi zaxira sifatida ishga tushiradi.",
    "dictSearch": "swapon"
  },
  {
    "cmd": "swapoff",
    "name": "Swap Xotirani To'xtatish",
    "category": "Xotira Boshqaruvi",
    "syntax": "sudo swapoff -a",
    "desc": "Barcha diskdagi swap almashinuvlarini to'xtatib, ma'lumotlarni jismoniy RAMga qaytaradi.",
    "dictSearch": "swapoff"
  },
  {
    "cmd": "chrt",
    "name": "Real-Time Rejalashtiruvchi Boshqaruvi",
    "category": "CPU Scheduling",
    "syntax": "chrt -f -p 50 [PID]",
    "desc": "Jarayonni Linuxning Real-Vaqt siyosatlari (SCHED_FIFO, SCHED_RR) bo'yicha yuqori ustuvorlik bilan boshqaradi.",
    "dictSearch": "chrt"
  },
  {
    "cmd": "taskset",
    "name": "Protsessor Yadrosiga Bog'lash (CPU Affinity)",
    "category": "CPU Scheduling",
    "syntax": "taskset -c 0,1 [BUYRUQ]",
    "desc": "Jarayon qaysi protsessor yadrolarida (CPU 0, CPU 1...) ishlashi mumkinligini qat'iy cheklaydi.",
    "dictSearch": "taskset"
  },
  {
    "cmd": "sysctl",
    "name": "Yadro Parametrlari (vm.swappiness)",
    "category": "Yadro Sozlamalari",
    "syntax": "sudo sysctl vm.swappiness=10",
    "desc": "Linux yadrosi parametrlarini sozlaydi. 'vm.swappiness' qiymati tizimning RAMdan diskka sahifalarni qanchalik tez surishini belgilaydi.",
    "dictSearch": "sysctl"
  },
  {
    "cmd": "systemd-analyze",
    "name": "Yuklanish Vaqti Tahlili",
    "category": "Systemd",
    "syntax": "systemd-analyze blame",
    "desc": "Server yoqilganda qaysi xizmat qancha soniya vaqt olganini aniqlab, optimallashtirish imkonini beradi.",
    "dictSearch": "systemd-analyze"
  },
  {
    "cmd": "FCFS Rejalashtirish",
    "name": "First-Come First-Served Algoritmi",
    "category": "Nazariya & Algoritm",
    "syntax": "Non-preemptive navbat",
    "desc": "Birinchi kelgan jarayonga birinchi xizmat ko'rsatiladi. Katta jarayon orqasida kichiklar uzoq kutib qolishi (Convoy Effect) mumkin.",
    "dictSearch": "fcfs"
  },
  {
    "cmd": "SJF / SRTF",
    "name": "Shortest Job First / Preemptive",
    "category": "Nazariya & Algoritm",
    "syntax": "Burst Time ga asoslangan optimal navbat",
    "desc": "Eng kam vaqt talab qiladigan jarayonlarni oldinga o'tkazadi. O'rtacha kutish vaqtini (Waiting Time) minimallashtiradi.",
    "dictSearch": "sjf"
  },
  {
    "cmd": "Round Robin (RR)",
    "name": "Vaqt Bo'laklari Bo'yicha Navbat",
    "category": "Nazariya & Algoritm",
    "syntax": "Time Quantum (q = 10ms-100ms)",
    "desc": "Har bir jarayonga teng vaqt kvanti ajratiladi. Vaqt tugagach jarayon navbat oxiriga o'tkaziladi (Preemptive adolatli rejim).",
    "dictSearch": "round robin"
  },
  {
    "cmd": "Priority Scheduling",
    "name": "Ustuvorlik Bo'yicha Rejalashtirish",
    "category": "Nazariya & Algoritm",
    "syntax": "Priority darajasi va Aging",
    "desc": "Yuqori muhimlikka ega jarayonlar birinchi bajariladi. Past ustuvorlikdagilar och qolmasligi (Starvation) uchun ularning yoshi oshirib boriladi (Aging).",
    "dictSearch": "priority scheduling"
  },
  {
    "cmd": "MMU",
    "name": "Memory Management Unit (Apparat)",
    "category": "Virtual Xotira",
    "syntax": "Mantiqiy Manzil -> Jismoniy Manzil",
    "desc": "Dastur ko'radigan virtual xotira manzilini protsessor apparati darajasida tezkor ravishda haqiqiy jismoniy RAM manziliga tarjima qiladi.",
    "dictSearch": "mmu"
  },
  {
    "cmd": "Paging & Frames",
    "name": "Sahifalar va Freymlar Xaritalash",
    "category": "Virtual Xotira",
    "syntax": "Page Number (p) + Offset (d)",
    "desc": "Virtual xotira teng o'lchamli sahifalarga (odatda 4KB), jismoniy xotira esa teng freymlarga bo'linib, sahifalar jadvali (Page Table) orqali boshqariladi.",
    "dictSearch": "paging"
  },
  {
    "cmd": "TLB",
    "name": "Translation Lookaside Buffer (Kesh)",
    "category": "Virtual Xotira",
    "syntax": "TLB Hit / TLB Miss",
    "desc": "Eng ko'p ishlatilayotgan sahifalar tarjimasini o'zida saqlovchi o'ta tezkor apparat keshi (EAT - Effective Access Time ni keskin kamaytiradi).",
    "dictSearch": "tlb"
  }
];
