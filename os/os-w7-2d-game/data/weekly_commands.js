/**
 * WIUT OS WEEK 7 — WEEKLY COMMANDS ENCYCLOPEDIA
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.WEEKLY_COMMANDS_W7 = root.WEEKLY_COMMANDS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    { cmd: "stat", desc: "Fayl inodelari, huquqlari va kirish vaqtlarini to'liq ko'rsatish" },
    { cmd: "ls -i", desc: "Fayllarni ularning Inode raqami bilan birga ro'yxatlash" },
    { cmd: "df -i", desc: "Fayl tizimidagi Inodelar zaxirasini va bandligini ko'rsatish" },
    { cmd: "ln", desc: "Qattiq havola (Hard link) yaratish" },
    { cmd: "ln -s", desc: "Simvolik / yumshoq havola (Soft/Symbolic link) yaratish" },
    { cmd: "docker compose up -d", desc: "Docker Compose servislarini orqa fonda ishga tushirish" },
    { cmd: "docker compose ps", desc: "Barcha faol Compose konteynerlari holatini ko'rish" },
    { cmd: "docker compose down", desc: "Compose servislarini to'xtatish va tarmoqni tozalash" },
    { cmd: "docker network ls", desc: "Mavjud Docker tarmoqlari ro'yxatini chiqarish" },
    { cmd: "docker volume ls", desc: "Yaratilgan doimiy hajmlar (volumes) ro'yxatini ko'rish" }
  ];
});
