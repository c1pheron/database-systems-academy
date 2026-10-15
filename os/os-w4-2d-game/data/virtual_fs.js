// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 VIRTUAL LINUX ENGINE & VFS
// Topics: Process Creation & Lifecycle (fork() in C & Python, fflush, getpid, getppid),
// Bounded Process Multiplication & Fork Bomb Prevention (ulimit -u),
// Advanced Find & File Retention (touch -d, -mmin, -type f, -ls, -delete),
// Resilient URL Downloader (curl -fLsS --max-time 30 -o --, stat -c '%s'),
// Log Archival & Compression (gzip --, find -maxdepth 1 -print0, read -r -d '', < <()),
// Health Monitoring & Alerts (df -P / | awk, tee -a, systemctl is-active --quiet),
// Scheduled Execution with Cron (crontab -e, -l, 5-field syntax) &
// Systemd Timers (user units, OnCalendar, Persistent=true, daemon-reload, list-timers).
// AND Master Flag Anatomy Inspector (Qo'shimchalar & Bayroqlar Tahlili).
// ============================================================================

(function () {
  let nextInode = 40001;

  function createInitialFS() {
    nextInode = 40001;

    const root = {
      name: "",
      type: "dir",
      inode: 2,
      permissions: "drwxr-xr-x",
      owner: "root",
      group: "root",
      links: 18,
      mtime: "2025-02-01 10:00:00",
      children: {}
    };

    function addDir(parent, name, perms = "drwxr-xr-x", owner = "root", group = "root") {
      const d = {
        name,
        type: "dir",
        inode: nextInode++,
        permissions: perms,
        owner,
        group,
        links: 2,
        mtime: "2025-02-01 10:00:00",
        children: {}
      };
      parent.children[name] = d;
      return d;
    }

    function addFile(parent, name, content = "", perms = "-rw-r--r--", owner = "root", group = "root", mtime = "2025-02-01 10:00:00") {
      const f = {
        name,
        type: "file",
        inode: nextInode++,
        permissions: perms,
        owner,
        group,
        links: 1,
        mtime,
        content,
        size: (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(content).length : (content ? content.length : 0))
      };
      parent.children[name] = f;
      return f;
    }

    addDir(root, "bin");
    addDir(root, "boot");
    addDir(root, "dev");
    const etc = addDir(root, "etc");
    const home = addDir(root, "home");
    addDir(root, "lib");
    addDir(root, "proc");
    addDir(root, "tmp", "drwxrwxrwt", "root", "root");
    const varDir = addDir(root, "var");
    addDir(varDir, "log");

    // Student Workspace
    const studentHome = addDir(home, "student", "drwxr-xr-x", "student", "student");
    const labDir = addDir(studentHome, "os_seminar4", "drwxr-xr-x", "student", "student");
    const logsDir = addDir(labDir, "logs", "drwxr-xr-x", "student", "student");
    const backupDir = addDir(labDir, "backup", "drwxr-xr-x", "student", "student");

    // Systemd User Configuration Directory
    const configDir = addDir(studentHome, ".config", "drwxr-xr-x", "student", "student");
    const systemdDir = addDir(configDir, "systemd", "drwxr-xr-x", "student", "student");
    const userSystemdDir = addDir(systemdDir, "user", "drwxr-xr-x", "student", "student");

    // Populate Sample Files from Seminar 4 Manual
    addFile(logsDir, "old.log", "2025-01-20 08:00:00 INFO System started\n", "-rw-r--r--", "student", "student", "2025-01-20 08:00:00");
    addFile(logsDir, "recent.log", "2025-02-01 09:30:00 INFO Recent activity\n", "-rw-r--r--", "student", "student", "2025-02-01 09:30:00");
    addFile(logsDir, "old.txt", "Old diagnostic record from past week\n", "-rw-r--r--", "student", "student", "2025-01-20 08:00:00");
    addFile(logsDir, "four_days.log", "Log four days old\n", "-rw-r--r--", "student", "student", "2025-01-28 10:00:00");
    addFile(logsDir, "eight_days.log", "Log eight days old\n", "-rw-r--r--", "student", "student", "2025-01-24 10:00:00");

    // URL list file for download.sh
    const urlsContent = "https://example.com/\n\nhttps://invalid.example.invalid/file\n";
    addFile(labDir, "urls.txt", urlsContent, "-rw-r--r--", "student", "student");

    // C fork source code
    const forkCContent = `#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>

int main(void) {
    printf("Before fork\\n");
    fflush(stdout);
    pid_t pid = fork();
    if (pid < 0) {
        perror("fork");
        return 1;
    }
    if (pid == 0) {
        printf("Child: PID=%ld Parent PID=%ld\\n",
               (long)getpid(), (long)getppid());
    } else {
        printf("Parent: PID=%ld Child PID=%ld\\n",
               (long)getpid(), (long)pid);
    }
    return 0;
}
`;
    addFile(labDir, "fork.c", forkCContent, "-rw-r--r--", "student", "student");

    // C bounded fork loops code
    const forksCContent = `#include <stdio.h>
#include <unistd.h>

int main(void) {
    for (int i = 0; i < 2; i++) {
        pid_t pid = fork();
        if (pid < 0) { perror("fork"); return 1; }
        printf("step=%d PID=%ld Parent=%ld\\n",
               i, (long)getpid(), (long)getppid());
        fflush(stdout);
    }
    return 0;
}
`;
    addFile(labDir, "forks.c", forksCContent, "-rw-r--r--", "student", "student");

    // Python fork code
    const forkPyContent = `import os
import sys

print(f"Hello world!, process_id(pid) = {os.getpid()}")
try:
    pid = os.fork()
except OSError:
    print("Fork failed")
    sys.exit(1)

if pid == 0:
    print(f"Hello from Child! My PID is {os.getpid()}")
else:
    print(f"Hello from Parent! My PID is {os.getpid()}")
`;
    addFile(labDir, "fork.py", forkPyContent, "-rwxr-xr-x", "student", "student");

    // cleanup.sh
    const cleanupShContent = `#!/usr/bin/env bash
read -r -p "Enter directory path: " dir
if [[ ! -d "$dir" ]]; then
    echo "Directory does not exist."
    exit 1
fi
echo "Matching files older than seven days:"
find "$dir" -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls
read -r -p "Type delete to remove them, or anything else to cancel: " answer
if [[ "$answer" == delete ]]; then
    find "$dir" -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -delete
    echo "Deletion finished."
else
    echo "Nothing was deleted."
fi
`;
    addFile(labDir, "cleanup.sh", cleanupShContent, "-rwxr-xr-x", "student", "student");

    // download.sh
    const downloadShContent = `#!/usr/bin/env bash
if [[ $# -ne 1 ]]; then
    echo "Usage: bash download.sh <URL-file>"
    exit 1
fi
input=$1
if [[ ! -f "$input" || ! -s "$input" ]]; then
    echo "The URL file is missing or empty: $input"
    exit 1
fi
mkdir -p downloads || exit 1
count=0
while IFS= read -r url || [[ -n "$url" ]]; do
    [[ -z "\${url//[[:space:]]/}" ]] && continue
    ((count += 1))
    saved="downloads/file_\${count}"
    echo "Attempt \${count}: \${url}"
    if curl -fLsS --max-time 30 -o "$saved" -- "$url"; then
        bytes=$(stat -c '%s' "$saved")
        echo "SUCCESS: \${saved} (\${bytes} bytes)"
    else
        rm -f -- "$saved"
        echo "FAILED: \${url}"
    fi
done < "$input"
`;
    addFile(labDir, "download.sh", downloadShContent, "-rwxr-xr-x", "student", "student");

    // rotate.sh
    const rotateShContent = `#!/usr/bin/env bash
if [[ $# -ne 2 || ! -d "$1" ]]; then
    echo "Usage: bash rotate.sh <existing-log-dir> <backup-dir>"
    exit 1
fi
log_dir=$1
backup_dir=$2
mkdir -p "$backup_dir" || exit 1
compressed=()
moved=()

while IFS= read -r -d '' file; do
    if gzip -- "$file"; then
        compressed+=("\${file}.gz")
    else
        echo "Compression failed: $file" >&2
    fi
done < <(find "$log_dir" -maxdepth 1 -type f -name '*.log' -mmin +2880 -print0)

while IFS= read -r -d '' file; do
    if mv -- "$file" "$backup_dir/"; then
        moved+=("$(basename "$file")")
    else
        echo "Move failed: $file" >&2
    fi
done < <(find "$log_dir" -maxdepth 1 -type f -name '*.gz' -mmin +7200 -print0)

report="$log_dir/rotation_report.txt"
{
    echo "Log rotation report: $(date)"
    echo "Compressed: \${#compressed[@]}"
    printf '  %s\\n' "\${compressed[@]}"
    echo "Moved to backup: \${#moved[@]}"
    printf '  %s\\n' "\${moved[@]}"
} > "$report"
echo "See report: $report"
`;
    addFile(labDir, "rotate.sh", rotateShContent, "-rwxr-xr-x", "student", "student");

    // disk_check.sh
    const diskCheckShContent = `#!/usr/bin/env bash
threshold=\${1:-85}
if [[ ! "$threshold" =~ ^[0-9]+$ ]] || (( threshold > 100 )); then
    echo "Enter a threshold between 0 and 100."
    exit 1
fi
usage=$(df -P / | awk 'NR==2 {gsub(/%/, ""); print $5}')
if [[ ! "$usage" =~ ^[0-9]+$ ]]; then
    echo "Disk usage could not be read."
    exit 1
fi
if (( usage > threshold )); then
    message="$(date '+%F %T') ALERT host=$(hostname) \${usage}%"
    echo "$message" | tee -a "$HOME/os_seminar4/disk_alert.log"
else
    echo "Disk usage normal (\${usage}%)"
fi
`;
    addFile(labDir, "disk_check.sh", diskCheckShContent, "-rwxr-xr-x", "student", "student");

    // service_check.sh
    const serviceCheckShContent = `#!/usr/bin/env bash
if [[ $# -ne 1 || ! "$1" =~ ^[A-Za-z0-9_.@-]+$ ]]; then
    echo "Usage: bash service_check.sh <service-name>"
    exit 1
fi
service=$1
[[ "$service" == *.service ]] || service="\${service}.service"
log="$HOME/os_seminar4/service_check.log"
load=$(systemctl show "$service" --property=LoadState --value 2>/dev/null)
if [[ "$load" != loaded ]]; then
    echo "ERROR: $service is not installed."
    exit 2
fi
if systemctl is-active --quiet "$service"; then
    echo "OK: $service is active."
else
    message="$(date '+%F %T') ALERT: $service is inactive"
    echo "$message" | tee -a "$log"
    exit 3
fi
`;
    addFile(labDir, "service_check.sh", serviceCheckShContent, "-rwxr-xr-x", "student", "student");

    // tick.sh
    const tickShContent = `#!/usr/bin/env bash
printf '%s seminar tick\\n' "$(date)" >> "$HOME/os_seminar4/ticks.log"
`;
    addFile(labDir, "tick.sh", tickShContent, "-rwxr-xr-x", "student", "student");

    // Systemd units
    const tickServiceContent = `[Unit]
Description=Write a seminar tick

[Service]
Type=oneshot
ExecStart=%h/os_seminar4/tick.sh
`;
    addFile(userSystemdDir, "os-seminar-tick.service", tickServiceContent, "-rw-r--r--", "student", "student");

    const tickTimerContent = `[Unit]
Description=Run seminar tick each minute

[Timer]
OnCalendar=*-*-* *:*:00
Persistent=true

[Install]
WantedBy=timers.target
`;
    addFile(userSystemdDir, "os-seminar-tick.timer", tickTimerContent, "-rw-r--r--", "student", "student");

    return root;
  }

  // ============================================================================
  // MASTER FLAG & OPTION ANATOMY DICTIONARY
  // Detailed explanation of purpose, syntax position, and RISK IF OMITTED
  // ============================================================================

  const LINUX_FLAG_DICTIONARY = [
    // --- USER MANAGEMENT (usermod, useradd) ---
    {
      cmd: "usermod",
      flag: "-L",
      nameUz: "Parolni qulflash (Lock)",
      nameEn: "Lock account password",
      syntax: "usermod -L <username>",
      purposeUz: "/etc/shadow faylidagi parollangan hash boshiga '!' belgisi qo'yib, hisobga kirishni zudlik bilan to'xtatadi.",
      withoutFlagRisk: "⚠️ AGAR -L BO'LMASA: Foydalanuvchi hisobi ochiq qoladi va parolini terib tizimga kirishda davom etaveradi!"
    },
    {
      cmd: "usermod",
      flag: "-U",
      nameUz: "Parol qulfini ochish (Unlock)",
      nameEn: "Unlock account password",
      syntax: "usermod -U <username>",
      purposeUz: "/etc/shadow dagi hash boshidagi '!' belgisini olib tashlab, hisobni qayta faollashtiradi.",
      withoutFlagRisk: "⚠️ AGAR -U BO'LMASA: Foydalanuvchi qulflangan holatda qoladi va paroli to'g'ri bo'lsa ham tizimga kira olmaydi!"
    },
    {
      cmd: "usermod",
      flag: "-s",
      nameUz: "Boshlang'ich shellni o'zgartirish (Shell)",
      nameEn: "Set login shell",
      syntax: "usermod -s /bin/bash <username>",
      purposeUz: "Foydalanuvchi tizimga kirganda ishga tushadigan qobiqni (masalan, /bin/bash yoki /usr/sbin/nologin) belgilaydi.",
      withoutFlagRisk: "⚠️ AGAR -s BO'LMASA: Foydalanuvchining joriy shell dasturi o'zgarishsiz qoladi."
    },
    {
      cmd: "usermod",
      flag: "-c",
      nameUz: "Izoh va to'liq ism (Comment / GECOS)",
      nameEn: "Set comment field",
      syntax: "usermod -c 'Alice Smith' <username>",
      purposeUz: "/etc/passwd faylidagi 5-ustun (GECOS) ma'lumotini o'zgartiradi (xodim ismi, kabinet, telefon).",
      withoutFlagRisk: "⚠️ AGAR -c BO'LMASA: Tizim hisobi egasi kimligi noaniq bo'lib qoladi, audit tekshiruvi qiyinlashadi."
    },
    {
      cmd: "usermod",
      flag: "-m",
      nameUz: "Mavjud papkani yangi manzilga ko'chirish (Move home)",
      nameEn: "Move home directory contents",
      syntax: "usermod -d /new/home -m <username>",
      purposeUz: "Faqat -d bilan birga ishlaydi. Eski uydagi barcha fayllarni yangi /home manziliga jismonan ko'chiradi.",
      withoutFlagRisk: "⚠️ AGAR -m BO'LMASA: /etc/passwd da manzil o'zgaradi, lekin fayllar eski joyda qolib ketadi; foydalanuvchi hamma fayllarini 'yo'qotadi'!"
    },
    {
      cmd: "useradd",
      flag: "-m",
      nameUz: "Uy katalogini yaratish (Make home)",
      nameEn: "Create home directory",
      syntax: "useradd -m <username>",
      purposeUz: "/home/<username> papkasini avtomatik yaratadi va /etc/skel dan .bashrc, .profile fayllarini ko'chirib beradi.",
      withoutFlagRisk: "⚠️ AGAR -m BO'LMASA: Foydalanuvchining uy papkasi yaratilmaydi! Tizimga kirganda 'No directory, logging in with HOME=/' xatosi chiqadi!"
    },
    {
      cmd: "useradd",
      flag: "-G",
      nameUz: "Qo'shimcha guruhlarga biriktirish (Supplementary Groups)",
      nameEn: "List of supplementary groups",
      syntax: "useradd -m -G sudo,docker <username>",
      purposeUz: "Foydalanuvchini asosiy guruhidan tashqari maxsus guruhlarga (sudo, devops) a'zo qiladi.",
      withoutFlagRisk: "⚠️ AGAR -G BO'LMASA: Foydalanuvchi faqat o'z shaxsiy guruhida qoladi, sudo yoki docker kabi imtiyozlarga ega bo'lmaydi."
    },

    // --- FILE PERMISSIONS & STICKY BIT ---
    {
      cmd: "chmod",
      flag: "+t / 1777",
      nameUz: "Yopishqoq bit (Sticky Bit)",
      nameEn: "Sticky bit flag",
      syntax: "chmod +t /srv/project  YOKI  chmod 1777 /tmp",
      purposeUz: "Umumiy papkada har kim fayl yarata oladi, lekin birovning faylini faqat o'sha fayl egasi yoki root o'chira oladi.",
      withoutFlagRisk: "⚠️ AGAR +t BO'LMASA: Har qanday foydalanuvchi boshqa hamkasblarining fayllarini qasddan yoki adashib o'chirib yuborishi mumkin!"
    },
    {
      cmd: "chmod",
      flag: "-R",
      nameUz: "Rekursiv qo'llash (Recursive)",
      nameEn: "Recursive permission change",
      syntax: "chmod -R 755 /var/www",
      purposeUz: "Katalog ichidagi barcha ichki papkalar va fayllarga ruxsatlarni bir vaqtda o'rnatadi.",
      withoutFlagRisk: "⚠️ AGAR -R BO'LMASA: Faqat tashqi katalogning ruxsati o'zgaradi, ichidagi barcha fayllar eski holicha qolib ketadi."
    },

    // --- COMPILATION & FORK (WEEK 4 CORE) ---
    {
      cmd: "gcc",
      flag: "-Wall",
      nameUz: "Barcha ogohlantirishlar (Warnings: All)",
      nameEn: "Enable all compiler warnings",
      syntax: "gcc -Wall fork.c -o fork.out",
      purposeUz: "Kompilyatorga kodda shubhali, ehtimoliy xato yoki xotira oqish holatlarini ogohlantirish sifatida ko'rsatishni buyuradi.",
      withoutFlagRisk: "⚠️ AGAR -Wall BO'LMASA: Kompilyator jiddiy mantig'iy xatolarni sukut saqlab o'tkazib yuboradi va dastur kutilmaganda halokatga uchraydi!"
    },
    {
      cmd: "gcc",
      flag: "-Wextra",
      nameUz: "Qo'shimcha qat'iy ogohlantirishlar (Warnings: Extra)",
      nameEn: "Enable extra compiler warnings",
      syntax: "gcc -Wall -Wextra fork.c -o fork.out",
      purposeUz: "Ishlatilmagan parametrlar, tiplar mos kelmasligi kabi nozik xatolarni ham topadi.",
      withoutFlagRisk: "⚠️ AGAR -Wextra BO'LMASA: Ishlab chiqarish darajasidagi nozik xatoliklar ko'zdan chetda qoladi."
    },
    {
      cmd: "gcc",
      flag: "-o",
      nameUz: "Chiquvchi ijrochi fayl nomi (Output)",
      nameEn: "Output executable filename",
      syntax: "gcc fork.c -o fork.out",
      purposeUz: "Yaratiladigan binar dastur fayliga nom beradi (masalan, fork.out).",
      withoutFlagRisk: "⚠️ AGAR -o BO'LMASA: Gcc faylni sukut bo'yicha 'a.out' nomi bilan saqlaydi! Eski a.out dasturingiz ustiga yozilib yo'qoladi!"
    },
    {
      cmd: "ulimit",
      flag: "-u",
      nameUz: "Maksimal jarayonlar chegarasi (User process limit)",
      nameEn: "Maximum user processes limit",
      syntax: "ulimit -u 50",
      purposeUz: "Bitta foydalanuvchi ochishi mumkin bo'lgan maksimal protsesslar sonini cheklaydi.",
      withoutFlagRisk: "⚠️ AGAR -u BO'LMASA: Fork bomb yuz berganda protsesslar soni cheksiz ko'payib, butun Linux yadrosi (Kernel) qotib qoladi!"
    },

    // --- ADVANCED FIND & CLEANUP ---
    {
      cmd: "find",
      flag: "-type f",
      nameUz: "Oddiy fayllar filtri (File type)",
      nameEn: "Match regular files only",
      syntax: "find /dir -type f -name '*.log'",
      purposeUz: "Qidiruvni faqat oddiy matn/binar fayllar bilan cheklaydi (kataloglar, soketlar va havolalarni chetlab o'tadi).",
      withoutFlagRisk: "⚠️ AGAR -type f BO'LMASA: Kataloglarning o'zi ham qidiruvga tushadi; keyingi -delete buyrug'i butun boshli papkalarni o'chirib yuborishi mumkin!"
    },
    {
      cmd: "find",
      flag: "-mmin +10080",
      nameUz: "O'zgartirilgan vaqt daqiqalarda (Modified minutes)",
      nameEn: "File modification time in minutes",
      syntax: "find /dir -mmin +10080",
      purposeUz: "+ belgisi 10,080 daqiqadan (aniq 7 kundan) ko'proq oldin o'zgartirilgan eski fayllarni bildiradi.",
      withoutFlagRisk: "⚠️ AGAR + ISHORASI BO'LMASA: '+10080' o'rniga '-10080' yozilsa, yangi (oxirgi 7 kundagi) dolzarb loglar tanlanib, xatoga olib keladi!"
    },
    {
      cmd: "find",
      flag: "-ls",
      nameUz: "Batafsil ro'yxat formatida chiqarish (List format)",
      nameEn: "List file details like ls -dils",
      syntax: "find /dir -name '*.log' -ls",
      purposeUz: "Topilgan har bir faylning inode, ruxsatlari, egasi, hajmi va sanasini to'liq ko'rsatadi.",
      withoutFlagRisk: "⚠️ AGAR -ls BO'LMASA: Find faqat fayllarning nomini quruq matn sifatida chiqaradi, ularning hajmi va sanasini ko'rib bo'lmaydi."
    },
    {
      cmd: "find",
      flag: "-delete",
      nameUz: "To'g'ridan-to'g'ri xavfsiz o'chirish (Atomic Delete)",
      nameEn: "Delete matching files directly",
      syntax: "find /dir -type f -name '*.tmp' -delete",
      purposeUz: "Topilgan fayllarni 'rm' chaqirmasdan, yadro darajasida zudlik bilan xavfsiz o'chiradi.",
      withoutFlagRisk: "⚠️ AGAR -delete BO'LMASA: Fayllar faqat ekranga chiqariladi, lekin diskdan o'chirilmaydi (joy bo'shamaydi)."
    },
    {
      cmd: "find",
      flag: "-maxdepth 1",
      nameUz: "Qidiruv chuqurligini cheklash (Max depth)",
      nameEn: "Descend at most 1 directory level",
      syntax: "find /dir -maxdepth 1 -name '*.log'",
      purposeUz: "Qidiruvni faqat ko'rsatilgan joriy papka bilan cheklaydi, ichki papkalar (subdirectories) ichiga kirmaydi.",
      withoutFlagRisk: "⚠️ AGAR -maxdepth 1 BO'LMASA: Barcha ichki arxiv papkalardagi loglar ham rekursiv topilib, siqilib yoki o'chib ketadi!"
    },
    {
      cmd: "find",
      flag: "-print0",
      nameUz: "NUL bayt ajratgich bilan chiqarish (NUL Delimiter)",
      nameEn: "Print full file name followed by null character",
      syntax: "find /dir -name '*.log' -print0",
      purposeUz: "Fayl nomlarini yangi satr (\\n) o'rniga \\0 (NUL bayt) bilan ajratadi. Nomi bo'sh joyli (spaces) fayllarni xavfsiz uzatadi.",
      withoutFlagRisk: "⚠️ AGAR -print0 BO'LMASA: Fayl nomida bo'sh joy bo'lsa (masalan, 'my log.txt'), tsikl uni 'my' va 'log.txt' deb 2 ta xato faylga bo'lib yuboradi!"
    },

    // --- CURL & NETWORK DOWNLOADS ---
    {
      cmd: "curl",
      flag: "-f / --fail",
      nameUz: "Server xatolarida jimgina to'xtash (Fail on HTTP error)",
      nameEn: "Fail silently on HTTP errors (4xx, 5xx)",
      syntax: "curl -f -o file.html https://site.com",
      purposeUz: "HTTP 404 (Not Found) yoki 500 xatolarida chiquvchi faylga xato sahifasini yozmasdan, darhol xato kodi (exit != 0) qaytaradi.",
      withoutFlagRisk: "⚠️ AGAR -f BO'LMASA: Server 404 xato bersa ham, curl o'sha xatolik HTML matnini yuklab olib, dasturingiz uni 'muvaffaqiyatli' deb o'ylaydi!"
    },
    {
      cmd: "curl",
      flag: "-L / --location",
      nameUz: "Qayta yo'naltirishlarga ergashish (Follow Location)",
      nameEn: "Follow HTTP 3xx redirects",
      syntax: "curl -L -o file.tar.gz https://site.com/download",
      purposeUz: "Server 301 yoki 302 qayta yo'naltirish (Redirect) berganda yangi manzilga avtomatik o'tib yuklashni davom ettiradi.",
      withoutFlagRisk: "⚠️ AGAR -L BO'LMASA: Curl faqat '301 Moved Permanently' degan 0 baytli bo'sh javobni saqlaydi, kerakli fayl yuklanmay qoladi!"
    },
    {
      cmd: "curl",
      flag: "-s / --silent",
      nameUz: "Jim rejim (Silent mode)",
      nameEn: "Silent or quiet mode",
      syntax: "curl -s https://site.com",
      purposeUz: "Progress bar va yuklanish foizlarini ekranga chiqarmaydi (avtomatlashtirilgan skriptlar logini toza saqlash uchun).",
      withoutFlagRisk: "⚠️ AGAR -s BO'LMASA: Terminal har soniyada foizlar bilan to'lib, haqiqiy foydali loglar ko'rinmay ketadi."
    },
    {
      cmd: "curl",
      flag: "-S / --show-error",
      nameUz: "Xatolikni baribir ko'rsatish (Show error on failure)",
      nameEn: "Show error message even with -s",
      syntax: "curl -sS https://site.com",
      purposeUz: "-s (jim rejim) bilan birga ishlatilganda, agar yuklash barbod bo'lsa, xatolik sababini ekranga chiqaradi.",
      withoutFlagRisk: "⚠️ AGAR -S BO'LMASA: -s berilganda xato bo'lsa ham terminal hech narsa aytmaydi, nima buzilganini bilib bo'lmaydi!"
    },
    {
      cmd: "curl",
      flag: "--max-time",
      nameUz: "Maksimal kutish vaqti soniyalarda (Timeout)",
      nameEn: "Maximum time allowed for transfer",
      syntax: "curl --max-time 30 https://site.com",
      purposeUz: "Agar server 30 soniyada javob bermasa, ulanishni to'xtatadi.",
      withoutFlagRisk: "⚠️ AGAR --max-time BO'LMASA: Server qotib qolsa, butun avtomatlashtirilgan skriptingiz abadiy kutish rejimida muzlab qoladi!"
    },
    {
      cmd: "curl",
      flag: "--",
      nameUz: "Bayroqlar tugash belgisi (End of options)",
      nameEn: "End of command-line flags",
      syntax: "curl -fLsS -o file -- '$url'",
      purposeUz: "Keyingi keladigan parametr minus (-) belgisi bilan boshlansa ham, uni bayroq emas, URL deb qabul qilishni kafolatlaydi.",
      withoutFlagRisk: "⚠️ AGAR -- BO'LMASA: Agar URL '-bad-url' ko'rinishida bo'lsa, curl uni noto'g'ri bayroq deb hisoblab halokatga uchraydi!"
    },

    // --- READ & SHELL INPUT ---
    {
      cmd: "read",
      flag: "-r",
      nameUz: "Xom qator (Raw input)",
      nameEn: "Do not allow backslashes to escape",
      syntax: "read -r line",
      purposeUz: "Kiritilgan matndagi teskari slesh (\\) belgilarini buzmasdan o'z holicha saqlaydi.",
      withoutFlagRisk: "⚠️ AGAR -r BO'LMASA: 'C:\\Users' yoki '\\n' kabi belgilar yo'qolib yoki buzilib ketadi!"
    },
    {
      cmd: "read",
      flag: "-p",
      nameUz: "Foydalanuvchiga savol matni (Prompt)",
      nameEn: "Output prompt string before reading",
      syntax: "read -r -p 'Ismingiz: ' name",
      purposeUz: "Foydalanuvchidan ma'lumot so'rashdan oldin ekranga taklif matnini chiqaradi.",
      withoutFlagRisk: "⚠️ AGAR -p BO'LMASA: Terminal bo'sh turadi, foydalanuvchi tizim nimani kutayotganini tushunmay qoladi."
    },
    {
      cmd: "read",
      flag: "-d ''",
      nameUz: "Ajratuvchi belgi (Delimiter NUL)",
      nameEn: "Set delimiter to null byte",
      syntax: "read -r -d '' file",
      purposeUz: "Yangi satr o'rniga NUL (\\0) baytini qator oxiri deb hisoblaydi (find -print0 bilan tandemda ishlaydi).",
      withoutFlagRisk: "⚠️ AGAR -d '' BO'LMASA: Fayl nomida yangi qator yoki probel bo'lsa, xato o'qiladi."
    },

    // --- SYSTEM MONITORING & TEE ---
    {
      cmd: "df",
      flag: "-P",
      nameUz: "POSIX formati (Standard POSIX output)",
      nameEn: "Use POSIX standard portable format",
      syntax: "df -P /",
      purposeUz: "Har bir disk bo'limini aniq bitta satrga chiqarishni kafolatlaydi (uzun nomli disklarda satr bo'linib ketmaydi).",
      withoutFlagRisk: "⚠️ AGAR -P BO'LMASA: Uzun nomli fayl tizimlari 2 satrga bo'linadi va 'awk $5' foiz o'rniga bo'sh satr o'qib xatoga uchraydi!"
    },
    {
      cmd: "tee",
      flag: "-a",
      nameUz: "Fayl oxiriga qo'shish (Append)",
      nameEn: "Append to the given files",
      syntax: "echo 'alert' | tee -a alert.log",
      purposeUz: "Chiqarilgan xabarni ham ekranga ko'rsatadi, ham mavjud log faylining oxiriga qo'shib saqlaydi.",
      withoutFlagRisk: "⚠️ AGAR -a BO'LMASA: Tee faylni boshidan tozalab yuboradi (overwrite) va barcha eski tarixiy xabarlar o'chib ketadi!"
    },

    // --- SYSTEMD & CRON ---
    {
      cmd: "systemctl",
      flag: "--user",
      nameUz: "Foydalanuvchi darajasi (User instance)",
      nameEn: "Talk to the service manager of the calling user",
      syntax: "systemctl --user start os-seminar-tick.timer",
      purposeUz: "Xizmatni oddiy foydalanuvchi sessiyasida (root huquqisiz) boshqarishni ta'minlaydi.",
      withoutFlagRisk: "⚠️ AGAR --user BO'LMASA: Tizim root parolini so'raydi yoki 'Permission denied' xatosi bilan to'xtaydi!"
    },
    {
      cmd: "systemctl",
      flag: "daemon-reload",
      nameUz: "Yangi konfiguratsiyalarni qayta yuklash",
      nameEn: "Reload systemd manager configuration",
      syntax: "systemctl --user daemon-reload",
      purposeUz: "Yangi yaratilgan yoki o'zgartirilgan .service va .timer fayllarini systemd xotirasiga qayta yuklaydi.",
      withoutFlagRisk: "⚠️ AGAR daemon-reload BO'LMASA: Systemd fayllardagi yangi o'zgarishlarni ko'rmaydi va eski xatolik bilan ishlayveradi!"
    },
    {
      cmd: "systemctl",
      flag: "is-active --quiet",
      nameUz: "Sokin faollik tekshiruvi (Silent active check)",
      nameEn: "Suppress output, set exit code",
      syntax: "systemctl is-active --quiet cron.service",
      purposeUz: "Ekranga 'active' yoki 'inactive' deb yozmasdan, faqat exit kod orqali (0 = faol, 3 = to'xtagan) javob beradi.",
      withoutFlagRisk: "⚠️ AGAR --quiet BO'LMASA: Terminalda keraksiz 'active' so'zi chiqib, skript loglariga xalaqit beradi."
    },
    {
      cmd: "journalctl",
      flag: "--no-pager",
      nameUz: "Matnni to'liq oqimda chiqarish (No pager)",
      nameEn: "Do not pipe output into a pager",
      syntax: "journalctl --user -u service -n 10 --no-pager",
      purposeUz: "Loglarni 'less' kabi interaktiv ko'rish oynasiga yo'naltirmasdan, to'g'ridan-to'g'ri terminalga to'kadi.",
      withoutFlagRisk: "⚠️ AGAR --no-pager BO'LMASA: Skript 'less' interfeysida qotib qoladi va foydalanuvchi 'q' tugmasini bosmaguncha davom etmaydi!"
    },
    {
      cmd: "crontab",
      flag: "-e",
      nameUz: "Jadvalni tahrirlash (Edit crontab)",
      nameEn: "Edit user's crontab file",
      syntax: "crontab -e",
      purposeUz: "Foydalanuvchining rejalashtirilgan vazifalar jadvalini ochib o'zgartirish imkonini beradi.",
      withoutFlagRisk: "⚠️ AGAR -e BO'LMASA: Quruq 'crontab' buyrug'i terminalda kiritishni kutib to'xtab qoladi."
    },
    {
      cmd: "crontab",
      flag: "-l",
      nameUz: "Jadvalni ko'rish (List crontab)",
      nameEn: "Display user's crontab contents",
      syntax: "crontab -l",
      purposeUz: "Foydalanuvchining joriy faol reja qatorlarini ekranga chiqaradi.",
      withoutFlagRisk: "⚠️ AGAR -l O'RNIGA -r YOZILSA: Barcha vazifalar bir zumda butunlay o'chib ketadi (Remove)!"
    }
  ];

  // ============================================================================
  // VIRTUAL LINUX SHELL CLASS (WEEK 4)
  // ============================================================================

  class VirtualLinuxShell {
    constructor() {
      this.root = createInitialFS();
      this.cwd = "/home/student/os_seminar4";
      this.user = "student";
      this.env = {
        HOME: "/home/student",
        USER: "student",
        SHELL: "/bin/bash",
        EUID: "1000",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        TERM: "xterm-256color"
      };

      // Background jobs & processes
      this.jobs = [];
      this.processes = [
        { pid: 1, ppid: 0, user: "root", cpu: "0.0", mem: "0.2", stat: "Ss", cmd: "/sbin/init splash" },
        { pid: 480, ppid: 1, user: "root", cpu: "0.0", mem: "0.3", stat: "Ss", cmd: "/usr/lib/systemd/systemd-journald" },
        { pid: 612, ppid: 1, user: "root", cpu: "0.0", mem: "0.1", stat: "Ss", cmd: "/usr/sbin/cron -f -P" },
        { pid: 1205, ppid: 1, user: "student", cpu: "0.0", mem: "0.4", stat: "Ss", cmd: "/lib/systemd/systemd --user" },
        { pid: 2100, ppid: 1205, user: "student", cpu: "0.1", mem: "0.5", stat: "Ss", cmd: "bash" }
      ];
      this.nextPid = 2400;

      // Cron table store
      this.cronLines = [];

      // Systemd User Timers & Services
      this.systemdTimers = {
        "os-seminar-tick.timer": { active: false, nextRun: "1min", lastRun: "never" }
      };
      this.systemdServices = {
        "cron.service": { loaded: true, active: true },
        "os-seminar-tick.service": { loaded: true, active: false }
      };
    }

    resolvePath(p) {
      if (!p) return this.cwd;
      let target = p.trim();
      if (target.startsWith("~")) target = this.env.HOME + target.slice(1);
      if (target.startsWith("/")) return this.normalizePath(target);
      return this.normalizePath(this.cwd + "/" + target);
    }

    normalizePath(p) {
      const parts = p.split("/").filter(Boolean);
      const stack = [];
      for (const part of parts) {
        if (part === ".") continue;
        if (part === "..") {
          if (stack.length > 0) stack.pop();
        } else {
          stack.push(part);
        }
      }
      return "/" + stack.join("/");
    }

    getNode(absPath) {
      if (absPath === "/" || absPath === "") return this.root;
      const parts = absPath.split("/").filter(Boolean);
      let cur = this.root;
      for (let i = 0; i < parts.length; i++) {
        if (!cur.children || !cur.children[parts[i]]) return null;
        cur = cur.children[parts[i]];
      }
      return cur;
    }

    execute(cmdLine) {
      if (!cmdLine || !cmdLine.trim()) return { stdout: "", stderr: "", code: 0 };
      const raw = cmdLine.trim();

      const commands = raw.split(/;|&&/).map(s => s.trim()).filter(Boolean);
      let combinedStdout = "";
      let combinedStderr = "";
      let lastCode = 0;

      for (const single of commands) {
        const res = this.executeSingle(single);
        if (res.stdout) combinedStdout += (combinedStdout ? "\n" : "") + res.stdout;
        if (res.stderr) combinedStderr += (combinedStderr ? "\n" : "") + res.stderr;
        lastCode = res.code;
        if (res.code !== 0 && raw.includes("&&")) break;
      }

      return { stdout: combinedStdout, stderr: combinedStderr, code: lastCode };
    }

    executeSingle(cmd) {
      let trimmed = cmd.trim();

      // Output redirection: > or >>
      let redirectAppend = false;
      let redirectTarget = null;

      const appendMatch = trimmed.match(/^([\s\S]+?)\s*>>\s*([^\s]+)$/);
      const writeMatch = trimmed.match(/^([\s\S]+?)\s*>\s*([^\s]+)$/);

      if (appendMatch) {
        trimmed = appendMatch[1].trim();
        redirectTarget = appendMatch[2].trim();
        redirectAppend = true;
      } else if (writeMatch) {
        trimmed = writeMatch[1].trim();
        redirectTarget = writeMatch[2].trim();
        redirectAppend = false;
      }

      // Pipeline handling: cmd1 | cmd2
      if (trimmed.includes("|")) {
        const pipeParts = trimmed.split("|").map(s => s.trim()).filter(Boolean);
        let pipeInput = "";
        let finalRes = { stdout: "", stderr: "", code: 0 };

        for (const p of pipeParts) {
          finalRes = this.runCommandWithInput(p, pipeInput);
          pipeInput = finalRes.stdout;
          if (finalRes.code !== 0) break;
        }

        if (redirectTarget) {
          this.writeRedirectFile(redirectTarget, finalRes.stdout, redirectAppend);
          return { stdout: "", stderr: finalRes.stderr, code: finalRes.code };
        }
        return finalRes;
      }

      const res = this.runCommandWithInput(trimmed, "");

      if (redirectTarget) {
        this.writeRedirectFile(redirectTarget, res.stdout, redirectAppend);
        return { stdout: "", stderr: res.stderr, code: res.code };
      }

      return res;
    }

    writeRedirectFile(relPath, content, isAppend) {
      const absPath = this.resolvePath(relPath);
      const parts = absPath.split("/").filter(Boolean);
      const fileName = parts.pop();
      const parentPath = "/" + parts.join("/");
      const parentNode = this.getNode(parentPath);
      if (!parentNode || parentNode.type !== "dir") return;

      if (!parentNode.children[fileName]) {
        parentNode.children[fileName] = {
          name: fileName,
          type: "file",
          inode: nextInode++,
          permissions: "-rw-r--r--",
          owner: this.user,
          group: this.user,
          links: 1,
          mtime: new Date().toISOString().slice(0, 19).replace("T", " "),
          content: content + "\n",
          size: (content ? content.length + 1 : 0)
        };
      } else {
        const f = parentNode.children[fileName];
        if (isAppend) {
          f.content += (f.content.endsWith("\n") ? "" : "\n") + content + "\n";
        } else {
          f.content = content + "\n";
        }
        f.size = f.content.length;
        f.mtime = new Date().toISOString().slice(0, 19).replace("T", " ");
      }
    }

    runCommandWithInput(cmdStr, stdinText) {
      const tokens = this.tokenize(cmdStr);
      if (tokens.length === 0) return { stdout: "", stderr: "", code: 0 };

      const c = tokens[0];
      const args = tokens.slice(1);

      // Core commands
      if (c === "pwd") return { stdout: this.cwd, stderr: "", code: 0 };
      if (c === "whoami") return { stdout: this.user, stderr: "", code: 0 };
      if (c === "hostname") return { stdout: "kali", stderr: "", code: 0 };
      if (c === "date") return this.cmdDate(args);
      if (c === "echo") return this.cmdEcho(args);
      if (c === "printf") return this.cmdPrintf(args);
      if (c === "cd") return this.cmdCd(args);
      if (c === "ls") return this.cmdLs(args);
      if (c === "mkdir") return this.cmdMkdir(args);
      if (c === "touch") return this.cmdTouch(args);
      if (c === "cat") return this.cmdCat(args, stdinText);
      if (c === "tail") return this.cmdTail(args, stdinText);
      if (c === "head") return this.cmdHead(args, stdinText);
      if (c === "grep") return this.cmdGrep(args, stdinText);
      if (c === "awk") return this.cmdAwk(args, stdinText);
      if (c === "stat") return this.cmdStat(args);
      if (c === "chmod") return this.cmdChmod(args);
      if (c === "mv") return this.cmdMv(args);
      if (c === "rm") return this.cmdRm(args);
      if (c === "gzip") return this.cmdGzip(args);
      if (c === "df") return this.cmdDf(args);
      if (c === "tee") return this.cmdTee(args, stdinText);
      if (c === "find") return this.cmdFind(args);
      if (c === "curl") return this.cmdCurl(args);
      if (c === "gcc") return this.cmdGcc(args);
      if (c === "ulimit") return this.cmdUlimit(args);
      if (c === "crontab") return this.cmdCrontab(args);
      if (c === "systemctl") return this.cmdSystemctl(args);
      if (c === "journalctl") return this.cmdJournalctl(args);
      if (c === "ps") return this.cmdPs(args);
      if (c === "pstree") return this.cmdPstree(args);

      // Script execution
      if (c.startsWith("./") || c.endsWith(".sh") || c.endsWith(".out") || c.endsWith(".py") || c === "bash" || c === "python3") {
        return this.cmdRunScript(c, args);
      }

      return { stdout: "", stderr: `bash: ${c}: command not found`, code: 127 };
    }

    tokenize(str) {
      const tokens = [];
      let cur = "";
      let inSingle = false;
      let inDouble = false;

      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === "'" && !inDouble) {
          inSingle = !inSingle;
        } else if (char === '"' && !inSingle) {
          inDouble = !inDouble;
        } else if (char === " " && !inSingle && !inDouble) {
          if (cur) { tokens.push(cur); cur = ""; }
        } else {
          cur += char;
        }
      }
      if (cur) tokens.push(cur);
      return tokens;
    }

    cmdDate(args) {
      if (args.length > 0 && args[0].startsWith("+")) {
        const fmt = args[0].slice(1);
        if (fmt.includes("%F %T") || fmt.includes("%Y-%m-%d %H:%M:%S")) return { stdout: "2025-02-01 10:30:00", stderr: "", code: 0 };
        if (fmt === "%Y") return { stdout: "2025", stderr: "", code: 0 };
        if (fmt === "%s") return { stdout: "1738405800", stderr: "", code: 0 };
      }
      return { stdout: "Sat Feb  1 10:30:00 UTC 2025", stderr: "", code: 0 };
    }

    cmdEcho(args) {
      return { stdout: args.join(" "), stderr: "", code: 0 };
    }

    cmdPrintf(args) {
      if (args.length === 0) return { stdout: "", stderr: "", code: 0 };
      const fmt = args[0];
      const val = args.slice(1).join(" ");
      let out = fmt.replace(/%s/g, val).replace(/\\n/g, "\n");
      return { stdout: out.trimEnd(), stderr: "", code: 0 };
    }

    cmdCd(args) {
      const target = args[0] || this.env.HOME;
      const abs = this.resolvePath(target);
      const node = this.getNode(abs);
      if (!node || node.type !== "dir") return { stdout: "", stderr: `bash: cd: ${target}: No such file or directory`, code: 1 };
      this.cwd = abs;
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdLs(args) {
      let target = this.cwd;
      let isLong = false;
      for (const a of args) {
        if (a === "-l" || a === "-la") isLong = true;
        else if (!a.startsWith("-")) target = this.resolvePath(a);
      }
      const node = this.getNode(target);
      if (!node) return { stdout: "", stderr: `ls: cannot access '${target}': No such file or directory`, code: 2 };
      if (node.type === "file") {
        return { stdout: isLong ? `${node.permissions} 1 ${node.owner} ${node.group} ${node.size} ${node.mtime} ${node.name}` : node.name, stderr: "", code: 0 };
      }
      const names = Object.keys(node.children).sort();
      if (!isLong) return { stdout: names.join("  "), stderr: "", code: 0 };

      const lines = names.map(n => {
        const item = node.children[n];
        return `${item.permissions} 1 ${item.owner} ${item.group} ${String(item.size).padStart(6)} ${item.mtime} ${n}`;
      });
      return { stdout: `total ${names.length * 4}\n` + lines.join("\n"), stderr: "", code: 0 };
    }

    cmdMkdir(args) {
      for (const a of args) {
        if (a === "-p") continue;
        const abs = this.resolvePath(a);
        const parts = abs.split("/").filter(Boolean);
        let cur = this.root;
        for (const p of parts) {
          if (!cur.children[p]) {
            cur.children[p] = {
              name: p,
              type: "dir",
              inode: nextInode++,
              permissions: "drwxr-xr-x",
              owner: this.user,
              group: this.user,
              links: 2,
              mtime: "2025-02-01 10:00:00",
              children: {}
            };
          }
          cur = cur.children[p];
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdTouch(args) {
      let dIndex = args.indexOf("-d");
      let customDate = "2025-02-01 10:00:00";
      const files = [];

      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-d") {
          const dateStr = args[i + 1] || "";
          i++;
          if (dateStr.includes("10 days ago")) customDate = "2025-01-22 10:00:00";
          else if (dateStr.includes("8 days ago")) customDate = "2025-01-24 10:00:00";
          else if (dateStr.includes("4 days ago")) customDate = "2025-01-28 10:00:00";
        } else if (!args[i].startsWith("-")) {
          files.push(args[i]);
        }
      }

      for (const f of files) {
        const abs = this.resolvePath(f);
        const node = this.getNode(abs);
        if (node) {
          node.mtime = customDate;
        } else {
          this.writeRedirectFile(f, "", false);
          const newNode = this.getNode(abs);
          if (newNode) newNode.mtime = customDate;
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdCat(args, stdinText) {
      if (args.length === 0 && stdinText) return { stdout: stdinText, stderr: "", code: 0 };
      const lines = [];
      for (const a of args) {
        const node = this.getNode(this.resolvePath(a));
        if (!node) return { stdout: "", stderr: `cat: ${a}: No such file or directory`, code: 1 };
        lines.push(node.content || "");
      }
      return { stdout: lines.join("\n").trimEnd(), stderr: "", code: 0 };
    }

    cmdTail(args, stdinText) {
      let n = 10;
      let targetFile = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n") { n = parseInt(args[i + 1], 10) || 10; i++; }
        else if (!args[i].startsWith("-")) targetFile = args[i];
      }
      let content = stdinText;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (!node) return { stdout: "", stderr: `tail: cannot open '${targetFile}': No such file`, code: 1 };
        content = node.content;
      }
      const lines = (content || "").split("\n").filter(Boolean);
      return { stdout: lines.slice(-n).join("\n"), stderr: "", code: 0 };
    }

    cmdHead(args, stdinText) {
      let n = 10;
      let targetFile = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n") { n = parseInt(args[i + 1], 10) || 10; i++; }
        else if (!args[i].startsWith("-")) targetFile = args[i];
      }
      let content = stdinText;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (!node) return { stdout: "", stderr: `head: cannot open '${targetFile}': No such file`, code: 1 };
        content = node.content;
      }
      const lines = (content || "").split("\n").filter(Boolean);
      return { stdout: lines.slice(0, n).join("\n"), stderr: "", code: 0 };
    }

    cmdGrep(args, stdinText) {
      const pattern = args[args.length - 1] || "";
      const lines = (stdinText || "").split("\n");
      const matched = lines.filter(l => l.includes(pattern));
      return { stdout: matched.join("\n"), stderr: "", code: matched.length > 0 ? 0 : 1 };
    }

    cmdAwk(args, stdinText) {
      // Basic support for 'NR==2 {gsub(/%/, ""); print $5}'
      const lines = (stdinText || "").split("\n").filter(Boolean);
      if (lines.length >= 2) {
        const parts = lines[1].trim().split(/\s+/);
        const usePct = parts[4] || "42%";
        return { stdout: usePct.replace("%", ""), stderr: "", code: 0 };
      }
      return { stdout: "42", stderr: "", code: 0 };
    }

    cmdStat(args) {
      // stat -c '%s' file
      const target = args[args.length - 1];
      const node = this.getNode(this.resolvePath(target));
      if (!node) return { stdout: "", stderr: `stat: cannot stat '${target}': No such file`, code: 1 };
      return { stdout: String(node.size), stderr: "", code: 0 };
    }

    cmdChmod(args) {
      const mode = args[0];
      const target = args[1];
      const node = this.getNode(this.resolvePath(target));
      if (!node) return { stdout: "", stderr: `chmod: cannot access '${target}': No such file`, code: 1 };
      if (mode === "+x" || mode === "755") {
        node.permissions = "-rwxr-xr-x";
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdMv(args) {
      const cleanArgs = args.filter(a => a !== "--");
      const src = cleanArgs[0];
      const dest = cleanArgs[1];
      const srcNode = this.getNode(this.resolvePath(src));
      if (!srcNode) return { stdout: "", stderr: `mv: cannot stat '${src}': No such file`, code: 1 };

      const destNode = this.getNode(this.resolvePath(dest));
      if (destNode && destNode.type === "dir") {
        destNode.children[srcNode.name] = srcNode;
        const parent = this.getNode(this.resolvePath(src + "/.."));
        if (parent && parent.children) delete parent.children[srcNode.name];
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdRm(args) {
      const cleanArgs = args.filter(a => !a.startsWith("-"));
      for (const f of cleanArgs) {
        const abs = this.resolvePath(f);
        const parts = abs.split("/").filter(Boolean);
        const name = parts.pop();
        const parent = this.getNode("/" + parts.join("/"));
        if (parent && parent.children) delete parent.children[name];
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdGzip(args) {
      const cleanArgs = args.filter(a => a !== "--" && !a.startsWith("-"));
      for (const a of cleanArgs) {
        const node = this.getNode(this.resolvePath(a));
        if (node && node.type === "file") {
          node.name += ".gz";
          node.content = "[GZIP COMPRESSED ARCHIVE STREAM]";
          node.size = 140;
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdDf(args) {
      // df -P /
      return {
        stdout: "Filesystem     1024-blocks      Used Available Capacity Mounted on\n/dev/sda1         20511312   8456200  10986256      44% /",
        stderr: "",
        code: 0
      };
    }

    cmdTee(args, stdinText) {
      const isAppend = args.includes("-a");
      const fileTarget = args.find(a => !a.startsWith("-"));
      if (fileTarget) {
        this.writeRedirectFile(fileTarget, stdinText, isAppend);
      }
      return { stdout: stdinText, stderr: "", code: 0 };
    }

    cmdFind(args) {
      const targetDir = args[0] || ".";
      const abs = this.resolvePath(targetDir);
      const node = this.getNode(abs);
      if (!node) return { stdout: "", stderr: `find: '${targetDir}': No such file or directory`, code: 1 };

      const hasDelete = args.includes("-delete");
      const hasLs = args.includes("-ls");
      const hasPrint0 = args.includes("-print0");
      const isMminOld = args.some(a => a.startsWith("+") || a.includes("+10080") || a.includes("+2880") || a.includes("+7200"));

      const matched = [];
      const traverse = (curDir, relPrefix) => {
        if (!curDir.children) return;
        for (const name of Object.keys(curDir.children)) {
          const item = curDir.children[name];
          const itemRel = relPrefix ? `${relPrefix}/${name}` : name;
          if (item.type === "file") {
            // Check matching condition
            if (isMminOld) {
              if (name === "old.log" || name === "old.txt" || name === "eight_days.log") {
                matched.push({ name, item, path: `${targetDir}/${itemRel}` });
              }
            } else {
              matched.push({ name, item, path: `${targetDir}/${itemRel}` });
            }
          }
        }
      };

      traverse(node, "");

      if (hasDelete) {
        matched.forEach(m => {
          delete node.children[m.name];
        });
        return { stdout: "", stderr: "", code: 0 };
      }

      if (hasLs) {
        const out = matched.map(m => `  ${m.item.inode}      4 ${m.item.permissions}   1 ${m.item.owner} ${m.item.group}       ${m.item.size} ${m.item.mtime} ${m.path}`);
        return { stdout: out.join("\n"), stderr: "", code: 0 };
      }

      if (hasPrint0) {
        return { stdout: matched.map(m => m.path).join("\0"), stderr: "", code: 0 };
      }

      return { stdout: matched.map(m => m.path).join("\n"), stderr: "", code: 0 };
    }

    cmdCurl(args) {
      let outPath = null;
      let targetUrl = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-o") { outPath = args[i + 1]; i++; }
        else if (args[i].startsWith("http")) targetUrl = args[i];
      }

      if (targetUrl && targetUrl.includes("invalid")) {
        return { stdout: "", stderr: "curl: (6) Could not resolve host: invalid.example.invalid", code: 6 };
      }

      if (outPath) {
        this.writeRedirectFile(outPath, "<!doctype html><html><head><title>Example Domain</title></head><body><h1>Example Domain</h1></body></html>", false);
        return { stdout: "", stderr: "", code: 0 };
      }

      return { stdout: "Example Web Page Content", stderr: "", code: 0 };
    }

    cmdGcc(args) {
      let outBinary = "a.out";
      const oIdx = args.indexOf("-o");
      if (oIdx > -1 && args[oIdx + 1]) outBinary = args[oIdx + 1];

      const cFile = args.find(a => a.endsWith(".c"));
      if (!cFile) return { stdout: "", stderr: "gcc: fatal error: no input files", code: 1 };

      const node = this.getNode(this.resolvePath(cFile));
      if (!node) return { stdout: "", stderr: `gcc: error: ${cFile}: No such file or directory`, code: 1 };

      // Generate binary
      this.writeRedirectFile(outBinary, "[ELF 64-bit LSB executable, x86-64]", false);
      const binNode = this.getNode(this.resolvePath(outBinary));
      if (binNode) binNode.permissions = "-rwxr-xr-x";

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdUlimit(args) {
      if (args.includes("-u")) {
        const limitVal = args[args.indexOf("-u") + 1];
        if (limitVal) return { stdout: "", stderr: "", code: 0 };
        return { stdout: "31240", stderr: "", code: 0 };
      }
      return { stdout: "core file size          (blocks, -c) 0\nmax user processes              (-u) 31240", stderr: "", code: 0 };
    }

    cmdCrontab(args) {
      if (args.includes("-l")) {
        if (this.cronLines.length === 0) return { stdout: "", stderr: "no crontab for student", code: 1 };
        return { stdout: this.cronLines.join("\n"), stderr: "", code: 0 };
      }
      if (args.includes("-e")) {
        this.cronLines = ["* * * * * /home/student/os_seminar4/tick.sh"];
        return { stdout: "crontab: installing new crontab", stderr: "", code: 0 };
      }
      if (args.includes("-r")) {
        this.cronLines = [];
        return { stdout: "", stderr: "", code: 0 };
      }
      return { stdout: "", stderr: "crontab: usage error: file name or -e, -l, -r required", code: 1 };
    }

    cmdSystemctl(args) {
      if (args.includes("daemon-reload")) {
        return { stdout: "", stderr: "", code: 0 };
      }
      if (args.includes("is-active")) {
        const quiet = args.includes("--quiet");
        const srv = args.find(a => a.endsWith(".service") || a === "cron");
        if (srv && (srv.includes("cron") || srv.includes("active"))) {
          return { stdout: quiet ? "" : "active", stderr: "", code: 0 };
        }
        return { stdout: quiet ? "" : "inactive", stderr: "", code: 3 };
      }
      if (args.includes("show")) {
        const srv = args.find(a => a.endsWith(".service"));
        const isLoaded = (srv && !srv.includes("invented"));
        return { stdout: isLoaded ? "loaded" : "not-found", stderr: "", code: 0 };
      }
      if (args.includes("start")) {
        const tm = args.find(a => a.endsWith(".timer"));
        if (tm && this.systemdTimers[tm]) this.systemdTimers[tm].active = true;
        return { stdout: "", stderr: "", code: 0 };
      }
      if (args.includes("stop")) {
        const tm = args.find(a => a.endsWith(".timer"));
        if (tm && this.systemdTimers[tm]) this.systemdTimers[tm].active = false;
        return { stdout: "", stderr: "", code: 0 };
      }
      if (args.includes("list-timers")) {
        return {
          stdout: "NEXT                        LEFT          LAST PASSED UNIT                     ACTIVATES\nSat 2025-02-01 10:31:00 UTC 45s left      n/a  n/a    os-seminar-tick.timer    os-seminar-tick.service\n\n1 timers listed.",
          stderr: "",
          code: 0
        };
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdJournalctl(args) {
      return {
        stdout: "Feb 01 10:30:00 debian-server systemd[1205]: Starting Write a seminar tick...\nFeb 01 10:30:00 debian-server tick.sh[2450]: Sat Feb  1 10:30:00 UTC 2025 seminar tick\nFeb 01 10:30:00 debian-server systemd[1205]: Finished Write a seminar tick.",
        stderr: "",
        code: 0
      };
    }

    cmdPs(args) {
      let lines = ["USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND"];
      this.processes.forEach(p => {
        const u = p.user.padEnd(8, " ");
        const pid = String(p.pid).padStart(5, " ");
        const cpu = String(p.cpu).padStart(4, " ");
        const mem = String(p.mem).padStart(4, " ");
        const stat = p.stat.padEnd(4, " ");
        lines.push(`${u} ${pid} ${cpu} ${mem}  14560  6210 pts/0    ${stat} 09:15   0:00 ${p.cmd}`);
      });
      return { stdout: lines.join("\n"), stderr: "", code: 0 };
    }

    cmdPstree(args) {
      const showPids = args.includes("-p");
      return {
        stdout: showPids
          ? "systemd(1)─┬─systemd-journal(312)\n           ├─systemd-timesyn(402)\n           └─sshd(850)───sshd(1190)───bash(1205)─┬─fork.out(2400)───fork.out(2401)\n                                                 └─pstree(2402)"
          : "systemd─┬─systemd-journal\n        ├─systemd-timesyn\n        └─sshd───sshd───bash─┬─fork.out───fork.out\n                             └─pstree",
        stderr: "",
        code: 0
      };
    }

    cmdRunScript(scriptPath, args) {
      let target = scriptPath;
      if (scriptPath === "python3" || scriptPath === "bash" || scriptPath === "sh") {
        target = args && args[0] ? args[0] : "";
      }
      const cleanPath = target.replace(/^\.\//, "").replace(/^bash\s+/, "");

      if (cleanPath.includes("fork.out")) {
        const p1 = this.nextPid++;
        const p2 = this.nextPid++;
        return {
          stdout: `Before fork\nParent: PID=${p1} Child PID=${p2}\nChild: PID=${p2} Parent PID=${p1}`,
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("forks.out")) {
        return {
          stdout: "step=0 PID=2400 Parent=1205\nstep=0 PID=2401 Parent=2400\nstep=1 PID=2400 Parent=1205\nstep=1 PID=2402 Parent=2400\nstep=1 PID=2401 Parent=2400\nstep=1 PID=2403 Parent=2401",
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("fork.py")) {
        const p = this.nextPid++;
        return {
          stdout: `Hello world!, process_id(pid) = ${p}\nHello from Parent! My PID is ${p}\nHello from Child! My PID is ${p + 1}`,
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("cleanup.sh")) {
        return {
          stdout: "Enter directory path: logs\nMatching files older than seven days:\n  40010   4 -rw-r--r-- 1 student student 256 Jan 20 08:00 logs/old.log\n  40012   4 -rw-r--r-- 1 student student 512 Jan 20 08:00 logs/old.txt\nType delete to remove them, or anything else to cancel: delete\nDeletion finished.",
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("download.sh")) {
        if (args.length === 0 || args[0].includes("missing")) {
          return { stdout: "The URL file is missing or empty: missing.txt", stderr: "", code: 1 };
        }
        return {
          stdout: "Attempt 1: https://example.com/\nSUCCESS: downloads/file_1 (1256 bytes)\nAttempt 2: https://invalid.example.invalid/file\nFAILED: https://invalid.example.invalid/file",
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("rotate.sh")) {
        return {
          stdout: "See report: logs/rotation_report.txt",
          stderr: "",
          code: 0
        };
      }

      if (cleanPath.includes("disk_check.sh")) {
        const thresh = args[0] ? parseInt(args[0], 10) : 85;
        if (thresh === 1) {
          this.writeRedirectFile("disk_alert.log", "2025-02-01 10:30:00 ALERT host=debian-server 44%", true);
          return { stdout: "2025-02-01 10:30:00 ALERT host=debian-server 44%", stderr: "", code: 0 };
        }
        return { stdout: "Disk usage normal (44%)", stderr: "", code: 0 };
      }

      if (cleanPath.includes("service_check.sh")) {
        const srv = args[0] || "";
        if (srv.includes("invented")) {
          return { stdout: "ERROR: invented-service.service is not installed.", stderr: "", code: 2 };
        }
        return { stdout: `OK: ${srv} is active.`, stderr: "", code: 0 };
      }

      if (cleanPath.includes("tick.sh")) {
        this.writeRedirectFile("ticks.log", "Sat Feb  1 10:30:00 UTC 2025 seminar tick", true);
        return { stdout: "", stderr: "", code: 0 };
      }

      return { stdout: "Executed successfully.", stderr: "", code: 0 };
    }
  }

  // ============================================================================
  // SMART BASH GRADER FOR WEEK 4 (150 QUESTIONS)
  // ============================================================================

  const BASH_GRADER = {
    normalize(cmd) {
      if (!cmd) return "";
      return cmd
        .replace(/#.*$/gm, "")
        .trim()
        .replace(/\s+/g, " ");
    },

    evaluate(arg1, arg2, arg3) {
      let question, userCmd, expectedCmd;
      if (arg1 && typeof arg1 === "object" && (arg1.expectedBash || arg1.id)) {
        question = arg1;
        userCmd = arg2;
        expectedCmd = question.expectedBash || (question.solutions && question.solutions[0]) || "";
      } else {
        userCmd = arg1;
        expectedCmd = arg2;
        question = arg3 || {};
      }

      const uClean = this.normalize(userCmd);
      const expClean = this.normalize(expectedCmd);

      if (!uClean) {
        return { match: false, message: "Terminalga buyruq kiritilmadi! Buyruq yozib Enter tugmasini bosing." };
      }

      // 1. Direct exact match
      if (uClean === expClean) {
        return { match: true, message: "A'lo darajada! Buyruq to'liq to'g'ri kiritildi." };
      }

      // 2. Solutions list check
      if (question.solutions && question.solutions.some(s => this.normalize(s) === uClean)) {
        return { match: true, message: "A'lo darajada! Muqobil to'g'ri yechim qabul qilindi." };
      }

      // 3. Sandbox live execution
      const shellExp = new VirtualLinuxShell();
      const expRes = shellExp.execute(expClean);

      const shellUser = new VirtualLinuxShell();
      const userRes = shellUser.execute(uClean);

      if (userRes.code !== 0 && expRes.code === 0) {
        return {
          match: false,
          message: `Buyruq xatolik bilan yakunlandi (Exit code ${userRes.code}): ${userRes.stderr || "Sintaktik xatolik"}`
        };
      }

      if (userRes.stdout.trim() && userRes.stdout.trim() === expRes.stdout.trim()) {
        return { match: true, message: "Barakalla! Buyruq natijasi kutilgan natija bilan 100% mos keldi." };
      }

      const expFsJson = JSON.stringify(shellExp.root);
      const userFsJson = JSON.stringify(shellUser.root);

      if (expFsJson === userFsJson && shellExp.cwd === shellUser.cwd) {
        return { match: true, message: "A'lo! Tizim holati (fayllar va ruxsatlar) kutilganidek o'zgardi." };
      }

      return {
        match: false,
        message: `Kutilgan natija hosil bo'lmadi.\nSizning natijangiz: '${userRes.stdout || userRes.stderr || "bo'sh"}'\nKutilayotgan natija: '${expRes.stdout || "tizim holati o'zgarishi"}'`
      };
    }
  };

  // ============================================================================
  // CAREER RANKS & 10 SECTORS FOR WEEK 4
  // ============================================================================

  const careerRanks = [
    { minSolved: 0,   title: "Junior Process & Cron Technician", salary: "$2,000/oy", badge: "🖥️" },
    { minSolved: 15,  title: "C Fork & Kernel Clone Explorer", salary: "$3,500/oy", badge: "⚡" },
    { minSolved: 30,  title: "Process Tree & Bounded Scaling Analyst", salary: "$5,800/oy", badge: "🌲" },
    { minSolved: 45,  title: "Find Automation & Retention Specialist", salary: "$8,800/oy", badge: "🔍" },
    { minSolved: 60,  title: "Atomic File Operations Officer", salary: "$12,500/oy", badge: "🛡️" },
    { minSolved: 75,  title: "Resilient Network Downloader Engineer", salary: "$17,000/oy", badge: "🌐" },
    { minSolved: 90,  title: "NUL-Delimited Pipeline & Archival Lead", salary: "$22,000/oy", badge: "📦" },
    { minSolved: 105, title: "Health Monitor & Resource Alert Architect", salary: "$28,000/oy", badge: "🚨" },
    { minSolved: 120, title: "Systemd Service & User Unit Master", salary: "$35,000/oy", badge: "⚙️" },
    { minSolved: 140, title: "Linux Automation, Cron & Systemd Timer Chief Architect", salary: "$42,000/oy", badge: "🐧" }
  ];

  const sectors = [
    {
      id: 1,
      sector: 1,
      name: "C Dasturlash: fork() & Protsesslar Hayoti",
      icon: "⚡",
      range: "1 - 15",
      theme: "fork.c, gcc -Wall -Wextra, fflush, getpid, getppid",
      badge: "S04 Part 1 • fork() in C"
    },
    {
      id: 2,
      sector: 2,
      name: "Python fork() & Xotirani Klonlash",
      icon: "🐍",
      range: "16 - 30",
      theme: "fork.py, os.fork(), PID ajratish, buferlash muammolari",
      badge: "S04 Part 1 • fork() in Python"
    },
    {
      id: 3,
      sector: 3,
      name: "Chegaralangan Ko'payish & Fork Bomb Xavfi",
      icon: "💣",
      range: "31 - 45",
      theme: "forks.c, 4 ta protsess, ulimit -u, kernel PID cheklovlari",
      badge: "S04 Part 2 • Fork Bombs & Limits"
    },
    {
      id: 4,
      sector: 4,
      name: "Eskirgan Fayllar Audit & find Filtri",
      icon: "🔍",
      range: "46 - 60",
      theme: "touch -d, find -type f, -mmin +10080, -ls, qavslar \\( \\)",
      badge: "S04 Task 1 • Find Filtering"
    },
    {
      id: 5,
      sector: 5,
      name: "Avtomatlashtirilgan Xavfsiz Tozalash (cleanup.sh)",
      icon: "🧹",
      range: "61 - 75",
      theme: "read -r -p, tasdiq so'rovi, -delete xavfsiz o'chirish",
      badge: "S04 Task 1 • Safe Deletion"
    },
    {
      id: 6,
      sector: 6,
      name: "Bardoshli URL Yuklovchi (download.sh)",
      icon: "🌐",
      range: "76 - 90",
      theme: "curl -fLsS --max-time 30 -o --, stat -c '%s'",
      badge: "S04 Task 2 • Resilient Curl"
    },
    {
      id: 7,
      sector: 7,
      name: "Loglarni Siqish & NUL Bayt Quvuri (rotate.sh)",
      icon: "🗜️",
      range: "91 - 105",
      theme: "gzip --, find -maxdepth 1 -print0, read -r -d ''",
      badge: "S04 Task 3 • NUL Streams & Gzip"
    },
    {
      id: 8,
      sector: 8,
      name: "Arxivlash, Zaxiralash & Hisobot (rotate.sh P2)",
      icon: "📦",
      range: "106 - 120",
      theme: "mv --, < <(...) process substitution, rotation_report.txt",
      badge: "S04 Task 3 • Process Substitution"
    },
    {
      id: 9,
      sector: 9,
      name: "Disk Monitoringi & Xizmatlar Nazorati",
      icon: "🚨",
      range: "121 - 135",
      theme: "df -P / | awk, tee -a, systemctl is-active --quiet, show",
      badge: "S04 Tasks 4 & 5 • Health & Alerts"
    },
    {
      id: 10,
      sector: 10,
      name: "Rejalashtirish: Cron & Systemd Timers (tick.sh)",
      icon: "⏱️",
      range: "136 - 150",
      theme: "crontab -e -l, systemctl --user, OnCalendar, journalctl",
      badge: "S04 Parts 4 & 5 • Cron & Timers"
    }
  ];

  const officeEvents = [
    {
      id: "ev1",
      triggerAfterQuestion: 25,
      speaker: "Professor Turing",
      role: "Kernel & Systems Mentor",
      avatar: "🐧",
      title: "⚡ fflush(stdout) va fork() Nozikligi",
      narrative: "Turing so'radi: 'Nima uchun fork() chaqirishdan oldin fflush(stdout) berilishi shart? Agar berilmasa nima bo'ladi?'",
      choices: [
        {
          text: "Chunki C buferidagi matn tozalansa, ota va bola ikkalasi ham bir xil matnni takroran 2 marta chop etmaydi!",
          correct: true,
          bonus: 1000,
          outcome: "Turing tasdiqladi: 'Aynan! Bufer xotirasi klonlanganda xabarlar ikki marta chiqib ketadi!' +$1000!"
        },
        {
          text: "Terminal ekranini tozalash uchun.",
          correct: false,
          bonus: 0,
          outcome: "Noto'g'ri. fflush terminalni emas, I/O xotira buferini tozalaydi."
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 55,
      speaker: "DevOps Alice",
      role: "Lead Automation Engineer",
      avatar: "👩‍💻",
      title: "🔍 find -type f ning Hayotiy Zarurati",
      narrative: "Alice so'radi: 'find buyrug'ida -type f bayrog'i qo'yilmasa va oxirida -delete berilsa, qanday fojia yuz berishi mumkin?'",
      choices: [
        {
          text: "Agar -type f bo'lmasa, mos kelgan butun boshli papkalar ham o'chib ketadi!",
          correct: true,
          bonus: 1200,
          outcome: "Alice ma'qulladi: 'Besh baho! -type f xavfsizlik qalqonidir!' +$1200!"
        },
        {
          text: "Hech narsa bo'lmaydi, faqat fayllar o'chadi.",
          correct: false,
          bonus: 0,
          outcome: "Xato! Kataloglar ham o'chib ketish xavfi bor."
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 85,
      speaker: "Professor Turing",
      role: "Kernel Mentor",
      avatar: "🐧",
      title: "🌐 curl -f ning 404 Xatolaridagi Vazifasi",
      narrative: "Turing so'radi: 'Nega avtomatlashtirilgan skriptda curl ga -f (--fail) qo'yish shart?'",
      choices: [
        {
          text: "Chunki -f bo'lmasa, server 404/500 xato bersa ham curl o'sha xato HTML sahifasini faylga yozib, skript uni muvaffaqiyat deb o'ylaydi!",
          correct: true,
          bonus: 1500,
          outcome: "Turing qoyil qoldi: 'Ajoyib! -f HTTP xatolarida xato kodi (exit != 0) berishni ta'minlaydi!' +$1500!"
        },
        {
          text: "Faqat tezlikni oshirish uchun.",
          correct: false,
          bonus: 0,
          outcome: "-f tezlikka aloqador emas, u HTTP xatoliklarini tutadi."
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 115,
      speaker: "Bob",
      role: "Log & Archival Specialist",
      avatar: "👨‍💻",
      title: "📦 find -print0 va IFS= read -r -d '' Juftligi",
      narrative: "Bob so'radi: 'Nima uchun fayllarni tsiklda o'qishda oddiy for o'rniga find -print0 va read -d '' ishlatiladi?'",
      choices: [
        {
          text: "Chunki fayl nomida bo'sh joy (space) yoki yangi satr bo'lsa ham NUL (\\0) bayti uni buzmasdan yaxlit uzatadi!",
          correct: true,
          bonus: 1800,
          outcome: "Bob tasdiqladi: 'Linux fayllar xavfsizligining oltin standarti!' +$1800!"
        },
        {
          text: "Chunki bu xotirani tejaydi.",
          correct: false,
          bonus: 0,
          outcome: "Asosiy sabab — maxsus belgili fayl nomlarini xavfsiz uzatish."
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 140,
      speaker: "Professor Turing",
      role: "Kernel Mentor",
      avatar: "🐧",
      title: "⏱️ Cron va Systemd Timer Oralig'idagi Farq",
      narrative: "Turing tabrikladi: 'Siz Linuxda jarayonlar klonlanishi (fork), avtomatlashtirish va rejalashtirishni to'liq o'zlashtirdingiz!'",
      choices: [
        {
          text: "Systemd timer lari OnCalendar, Persistent=true va journalctl loglari bilan cron dan ancha boy va ishonchli!",
          correct: true,
          bonus: 2500,
          outcome: "Universitet binosida olqishlar! Siz Bosh Tizim Muhandisisiz! +$2500!"
        },
        {
          text: "Cron har doim systemd dan yaxshiroq.",
          correct: false,
          bonus: 0,
          outcome: "Zamonaviy Linux tizimlarida systemd timer afzal ko'riladi."
        }
      ]
    }
  ];

  window.VIRTUAL_LINUX_W4 = {
    VirtualLinuxShell,
    BASH_GRADER,
    LINUX_FLAG_DICTIONARY,
    careerRanks,
    sectors,
    officeEvents
  };
})();
