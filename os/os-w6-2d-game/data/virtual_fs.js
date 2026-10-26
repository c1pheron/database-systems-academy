/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 VIRTUAL SYSTEM & SHELL EMULATOR
 * Architecture: Virtual Memory, Demand Paging, Dockerfile, Volumes & Docker Compose.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VIRTUAL_LINUX_W6 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // 10 Progressive DevOps & Virtualization Architect Ranks
  const CAREER_RANKS = [
    { threshold: 0,   title: "Junior Container Trainee",            salary: "$2,400/oy", color: "cyan" },
    { threshold: 15,  title: "Paging Address Analyst",              salary: "$3,000/oy", color: "cyan" },
    { threshold: 30,  title: "Virtual Memory Specialist",           salary: "$3,800/oy", color: "emerald" },
    { threshold: 45,  title: "Page Replacement Engineer",           salary: "$4,800/oy", color: "emerald" },
    { threshold: 60,  title: "Thrashing & Locality Architect",      salary: "$6,000/oy", color: "emerald" },
    { threshold: 75,  title: "Dockerfile Packaging Specialist",     salary: "$7,500/oy", color: "amber" },
    { threshold: 90,  title: "Microservice Container Lead",         salary: "$9,500/oy", color: "amber" },
    { threshold: 105, title: "Database Volume Persistence Engineer", salary: "$12,000/oy", color: "violet" },
    { threshold: 120, title: "Multi-Stage & Compose Orchestrator",  salary: "$15,500/oy", color: "violet" },
    { threshold: 135, title: "Principal Cloud & Kernel Architect",  salary: "$20,000/oy", color: "gold" }
  ];

  // 10 Pedagogical Sectors
  const SECTORS = [
    { id: 1,  range: "1–15",    name: "CPU Scheduling & Fragmentatsiya Reviziyasi", icon: "⏱️" },
    { id: 2,  range: "16–30",   name: "Paging Adreslar Matematikasi & Inverted Tables", icon: "📐" },
    { id: 3,  range: "31–45",   name: "Demand Paging & EAT Formula Hisobi", icon: "⚡" },
    { id: 4,  range: "46–60",   name: "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)", icon: "🔄" },
    { id: 5,  range: "61–75",   name: "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing", icon: "🧠" },
    { id: 6,  range: "76–90",   name: "Docker Konsepsiyasi & O'rnatish Tekshiruvi", icon: "🐳" },
    { id: 7,  range: "91–105",  name: "Dockerfile Muhandisligi & Obraz Yaratish", icon: "📦" },
    { id: 8,  range: "106–120", name: "Python Flask Konteyneri & Portlar (app1, app2)", icon: "🌐" },
    { id: 9,  range: "121–135", name: "Konteyner Boshqaruvi, Inspect & Loglar", icon: "🔍" },
    { id: 10, range: "136–150", name: "PostgreSQL Volume Persistensiya, Multi-Stage & Compose", icon: "💾" }
  ];

  // 5 Real-world Cloud & Kernel Incidents
  const EMERGENCY_EVENTS = [
    {
      id: "event_thrashing_storm",
      title: "🚨 Tizim Thrashing Holatiga Tushdi (CPU 99% I/O Wait)!",
      speaker: "PROFESSOR TURING",
      desc: "Jarayonlarning jami Working-Set talabi (D) mavjud jismoniy freymlardan (m) oshib ketdi! CPU foydali ish bajarish o'rniga faqat sahifalarni swap qilish bilan band.",
      solution: "Working-Set Model yoki Page-Fault Frequency (PFF) nazorati orqali ayrim jarayonlar to'xtatilib, qolganlariga yetarli freymlar ajratilishi shart."
    },
    {
      id: "event_belady_anomaly",
      title: "⚠️ Belady Anomaliyasi Aniqlangan (Frames: 3 -> 4, Faults oshdi)!",
      speaker: "MEMORY CONTROLLER",
      desc: "Junior admin FIFO algoritmi ishlayotgan tizimga freym qo'shganda, sahifa xatoliklari (page faults) kamayish o'rniga 9 tadan 10 taga ko'payib ketdi!",
      solution: "FIFO o'rniga Stack xususiyatiga (Stack Property) ega bo'lgan LRU yoki Optimal (OPT) almashtirish algoritmidan foydalanish lozim."
    },
    {
      id: "event_container_port_leak",
      title: "🔥 Konteyner Porti Barcha Interfeysga Ochiq Qoldi (0.0.0.0:5000)!",
      speaker: "SECURITY AUDITOR",
      desc: "Veb-serverni ishga tushirishda '-p 127.0.0.1:5000:5000' o'rniga adashib '-p 5000:5000' berildi. Ichki ishlab chiqish serveri butun internetga ochiq!",
      solution: "Konteyner to'xtatilib, faqat loopback manziliga bog'langan holda '-p 127.0.0.1:5000:5000' bilan qayta ko'tariladi."
    },
    {
      id: "event_data_wipe_no_volume",
      title: "🚨 PostgreSQL Konteyneri O'chirildi, Baza Yo'qoldi!",
      speaker: "DEVOPS LEAD",
      desc: "Baza konteyneri nomli volume (-v pgdata:...) siz ishga tushirilgan edi. 'docker rm' buyrug'idan so'ng talabalar jadvali (students) butunlay o'chib ketdi!",
      solution: "Doimo 'docker volume create pgdata' qilib, ma'lumotlar papkasini '-v pgdata:/var/lib/postgresql/data' orqali doimiy hajmga ulash shart."
    },
    {
      id: "event_heavy_image_bloat",
      title: "🐳 Java Obrazi Hajmi 850 MB ga Yetib Ketdi!",
      speaker: "INFRASTRUCTURE MONITOR",
      desc: "Maven kompilyatori va manba kodlari bitta qatlamga yig'ilganligi sababli dastur hajmi gigabaytga yaqinlashdi.",
      solution: "Multi-stage build (FROM maven AS builder -> COPY --from=builder ... app.jar -> FROM eclipse-temurin:jre) orqali obraz hajmi 150 MB ga tushiriladi."
    }
  ];

  // Virtual State Data for Week 6
  const INITIAL_VIRTUAL_STATE = {
    currentUser: "student",
    currentHost: "kali",
    currentDir: "/home/student/week6-docker",
    dockerInstalled: true,
    dockerImages: [
      { repository: "sample-app", tag: "1.0", id: "a4f891b2c3d4", size: "168MB", created: "20 minutes ago" },
      { repository: "python", tag: "3.12-slim", id: "7c2e109d45ef", size: "128MB", created: "2 weeks ago" },
      { repository: "postgres", tag: "15", id: "5e98b04a1122", size: "379MB", created: "3 weeks ago" },
      { repository: "postgres", tag: "16", id: "88ab43cd7711", size: "392MB", created: "1 week ago" },
      { repository: "java-multistage", tag: "1.0", id: "33df671a8899", size: "220MB", created: "10 minutes ago" },
      { repository: "hello-world", tag: "latest", id: "d2c94e258dcb", size: "13.3kB", created: "4 months ago" }
    ],
    dockerContainers: [
      { id: "e1f2a3b4c5d6", name: "app1", image: "sample-app:1.0", status: "Up 25 minutes", ports: "127.0.0.1:5000->5000/tcp", env: "APP_ENV=dev", arg: "Alex" },
      { id: "f2a3b4c5d6e7", name: "app2", image: "sample-app:1.0", status: "Up 12 minutes", ports: "127.0.0.1:5001->5000/tcp", env: "APP_ENV=testing", arg: "Zahid" },
      { id: "c5d6e7f8a9b0", name: "mypg", image: "postgres:15", status: "Up 18 minutes", ports: "5432/tcp", volume: "pgdata:/var/lib/postgresql/data" }
    ],
    dockerVolumes: [
      { name: "pgdata", driver: "local", mountpoint: "/var/lib/docker/volumes/pgdata/_data", size: "48MB" },
      { name: "compose-db-data", driver: "local", mountpoint: "/var/lib/docker/volumes/compose-db-data/_data", size: "36MB" }
    ],
    composeServices: [
      { service: "web", container: "python-app-web-1", status: "Up 5 minutes", ports: "127.0.0.1:5002->5000/tcp" },
      { service: "db", container: "python-app-db-1", status: "Up 5 minutes (healthy)", ports: "5432/tcp" }
    ],
    postgresDb: {
      students: [
        { id: 1, name: "Zahid" }
      ]
    },
    virtualMemoryMetrics: {
      referenceString: "7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1",
      frameCount: 3,
      fifoFaults: 15,
      optFaults: 9,
      lruFaults: 12,
      eatFormula: "EAT = (1 - p)*200ns + p*8,000,000ns",
      eatResultP001: "8,200 ns (8.2 μs)"
    }
  };

  /**
   * Virtual Linux & Docker Shell Engine for Week 6
   */
  class VirtualLinuxShell {
    constructor() {
      this.state = JSON.parse(JSON.stringify(INITIAL_VIRTUAL_STATE));
      this.history = [];
      this.cwd = "/home/student";
      this.isRoot = false;
      this.user = "student";
      this.root = { name: "/", type: "dir", inode: 1, permissions: "drwxr-xr-x", links: 2, owner: "root", group: "root", children: {} };
    }

    
    getNode(absPath) {
      const p = String(absPath || "/home/student");
      const name = p === "/" ? "/" : (p.split("/").filter(Boolean).pop() || "student");
      return {
        name: name,
        type: "dir",
        inode: 1001,
        permissions: "drwxr-xr-x",
        links: 2,
        owner: "student",
        group: "student",
        children: {
          "readme.txt": { name: "readme.txt", type: "file", inode: 1002, permissions: "-rw-r--r--", links: 1, owner: "student", group: "student", content: "WIUT OS Lab Module " + 6 }
        }
      };
    }

    resolvePath(p) {
      if (!p || p === ".") return this.cwd || "/home/student";
      if (p.startsWith("/")) return p;
      return (this.cwd || "/home/student").replace(/\/+$/, "") + "/" + p;
    }

    execute(cmdString) {
      const raw = String(cmdString !== undefined && cmdString !== null ? cmdString : "").trim();
      if (!raw) return { stdout: "", stderr: "", code: 0 };

      this.history.push(raw);

      // 1. Docker Build commands
      if (raw.startsWith("docker build") || raw.startsWith("sudo docker build")) {
        const isJava = raw.includes("java-multistage");
        const tagName = isJava ? "java-multistage:1.0" : "sample-app:1.0";
        return {
          stdout: `[+] Building 1.8s (11/11) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 312B\n => [internal] load .dockerignore\n => [1/4] FROM python:3.12-slim\n => [2/4] WORKDIR /app\n => [3/4] COPY requirements.txt .\n => [4/4] RUN pip install --no-cache-dir -r requirements.txt\n => exporting to image\n => => exporting layers\n => => naming to docker.io/library/${tagName}\nSuccessfully tagged ${tagName}`,
          stderr: "",
          code: 0
        };
      }

      // 2. Docker Run commands
      if (raw.startsWith("docker run") || raw.startsWith("sudo docker run")) {
        if (raw.includes("hello-world")) {
          return {
            stdout: "Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from Docker Hub.\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.",
            stderr: "",
            code: 0
          };
        }

        if (raw.includes("app1")) {
          return { stdout: "e1f2a3b4c5d67890abcdef1234567890abcdef1234567890abcdef1234567890", stderr: "", code: 0 };
        }
        if (raw.includes("app2")) {
          return { stdout: "f2a3b4c5d6e78901abcdef1234567890abcdef1234567890abcdef1234567890", stderr: "", code: 0 };
        }
        if (raw.includes("mypg")) {
          return { stdout: "c5d6e7f8a9b01234abcdef1234567890abcdef1234567890abcdef1234567890", stderr: "", code: 0 };
        }
        if (raw.includes("japp") || raw.includes("java-multistage")) {
          return { stdout: "Hello from multi-stage Java Docker! Cmd arg: Dev Environment: training", stderr: "", code: 0 };
        }

        const randomId = "8a" + Math.floor(100000 + Math.random() * 900000);
        return { stdout: randomId, stderr: "", code: 0 };
      }

      // 3. Docker Container PS / LS
      if (raw === "docker ps" || raw === "docker container ls") {
        return {
          stdout: "CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS          PORTS                      NAMES\n" +
                  "e1f2a3b4c5d6   sample-app:1.0   \"python app.py Alex\"     25 minutes ago   Up 25 minutes   127.0.0.1:5000->5000/tcp   app1\n" +
                  "f2a3b4c5d6e7   sample-app:1.0   \"python app.py Zahid\"    12 minutes ago   Up 12 minutes   127.0.0.1:5001->5000/tcp   app2\n" +
                  "c5d6e7f8a9b0   postgres:15      \"docker-entrypoint.s…\"   18 minutes ago   Up 18 minutes   5432/tcp                   mypg",
          stderr: "",
          code: 0
        };
      }

      if (raw === "docker ps -a" || raw === "docker container ls -a") {
        return {
          stdout: "CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS                      PORTS                      NAMES\n" +
                  "e1f2a3b4c5d6   sample-app:1.0   \"python app.py Alex\"     25 minutes ago   Up 25 minutes               127.0.0.1:5000->5000/tcp   app1\n" +
                  "f2a3b4c5d6e7   sample-app:1.0   \"python app.py Zahid\"    12 minutes ago   Up 12 minutes               127.0.0.1:5001->5000/tcp   app2\n" +
                  "c5d6e7f8a9b0   postgres:15      \"docker-entrypoint.s…\"   18 minutes ago   Up 18 minutes               5432/tcp                   mypg\n" +
                  "d2c94e258dcb   hello-world      \"/hello\"                 1 hour ago       Exited (0) 59 minutes ago                              youthful_morse",
          stderr: "",
          code: 0
        };
      }

      if (raw === "docker container ls -as" || raw === "docker ps -as") {
        return {
          stdout: "CONTAINER ID   IMAGE            COMMAND                  STATUS          PORTS                      NAMES    SIZE\n" +
                  "e1f2a3b4c5d6   sample-app:1.0   \"python app.py Alex\"     Up 25 minutes   127.0.0.1:5000->5000/tcp   app1     2.4kB (virtual 168MB)\n" +
                  "f2a3b4c5d6e7   sample-app:1.0   \"python app.py Zahid\"    Up 12 minutes   127.0.0.1:5001->5000/tcp   app2     2.1kB (virtual 168MB)\n" +
                  "c5d6e7f8a9b0   postgres:15      \"docker-entrypoint.s…\"   Up 18 minutes   5432/tcp                   mypg     48B (virtual 379MB)",
          stderr: "",
          code: 0
        };
      }

      // 4. Docker Images
      if (raw === "docker images" || raw === "docker image ls") {
        return {
          stdout: "REPOSITORY        TAG       IMAGE ID       CREATED          SIZE\n" +
                  "sample-app        1.0       a4f891b2c3d4   20 minutes ago   168MB\n" +
                  "java-multistage   1.0       33df671a8899   10 minutes ago   220MB\n" +
                  "postgres          16        88ab43cd7711   1 week ago       392MB\n" +
                  "postgres          15        5e98b04a1122   3 weeks ago      379MB\n" +
                  "python            3.12-slim 7c2e109d45ef   2 weeks ago      128MB\n" +
                  "hello-world       latest    d2c94e258dcb   4 months ago     13.3kB",
          stderr: "",
          code: 0
        };
      }

      // 5. Curl Web Applications
      if (raw.includes("curl http://localhost:5000") || raw.includes("curl 127.0.0.1:5000")) {
        return { stdout: "Hello Alex! Environment: dev\n", stderr: "", code: 0 };
      }
      if (raw.includes("curl http://localhost:5001") || raw.includes("curl 127.0.0.1:5001")) {
        return { stdout: "Hello Zahid! Environment: testing\n", stderr: "", code: 0 };
      }
      if (raw.includes("curl http://localhost:5002") || raw.includes("curl 127.0.0.1:5002")) {
        return { stdout: "Hello Students! Environment: compose\n", stderr: "", code: 0 };
      }

      // 6. Docker Exec / Inspect / Top / Stats / History
      if (raw.includes("docker exec") || raw.includes("docker container exec")) {
        if (raw.includes("SELECT * FROM students")) {
          return {
            stdout: " id | name  \n----+-------\n  1 | Zahid\n(1 row)\n",
            stderr: "",
            code: 0
          };
        }
        if (raw.includes("SELECT current_database()")) {
          return {
            stdout: " current_database \n------------------\n example\n(1 row)\n",
            stderr: "",
            code: 0
          };
        }
        if (raw.includes("echo \"$APP_ENV\"") || raw.includes("echo $APP_ENV")) {
          return { stdout: "dev\n", stderr: "", code: 0 };
        }
        return { stdout: "student@app1:/app# ls\napp.py  requirements.txt\nstudent@app1:/app# exit", stderr: "", code: 0 };
      }

      if (raw.startsWith("docker logs")) {
        if (raw.includes("mypg")) {
          return {
            stdout: "PostgreSQL Database directory appears to contain a database; Skipping initialization\n2026-10-14 02:40:00.000 UTC [1] LOG:  database system is ready to accept connections",
            stderr: "",
            code: 0
          };
        }
        return {
          stdout: " * Serving Flask app 'app'\n * Debug mode: off\nINFO:werkzeug:127.0.0.1 - - [14/Oct/2026 02:45:10] \"GET / HTTP/1.1\" 200 -",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker stats --no-stream")) {
        return {
          stdout: "CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS\n" +
                  "e1f2a3b4c5d6   app1      0.08%     24.2MiB / 3.824GiB    0.62%     1.12kB / 1.05kB   0B / 0B     2",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker top")) {
        return {
          stdout: "UID       PID       PPID      C    STIME    TTY    TIME        CMD\n" +
                  "root      4192      4150      0    02:40    ?      00:00:00    python app.py Alex",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker inspect") || raw.startsWith("docker container inspect")) {
        return {
          stdout: "[\n  {\n    \"Id\": \"e1f2a3b4c5d67890abcdef\",\n    \"Created\": \"2026-10-14T02:40:00.123456789Z\",\n    \"Path\": \"python\",\n    \"Args\": [\"app.py\", \"Alex\"],\n    \"State\": {\"Status\": \"running\", \"Running\": true, \"Pid\": 4192},\n    \"NetworkSettings\": {\"Ports\": {\"5000/tcp\": [{\"HostIp\": \"127.0.0.1\", \"HostPort\": \"5000\"}]}}\n  }\n]",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker image history")) {
        return {
          stdout: "IMAGE          CREATED          CREATED BY                                      SIZE      COMMENT\n" +
                  "a4f891b2c3d4   20 minutes ago   CMD [\"Guest\"]                                   0B        buildkit.dockerfile.v0\n" +
                  "<missing>      20 minutes ago   ENTRYPOINT [\"python\" \"app.py\"]                  0B        buildkit.dockerfile.v0\n" +
                  "<missing>      20 minutes ago   EXPOSE 5000/tcp                                 0B        buildkit.dockerfile.v0\n" +
                  "<missing>      20 minutes ago   ENV APP_ENV=training                            0B        buildkit.dockerfile.v0\n" +
                  "<missing>      20 minutes ago   COPY app.py .                                   312B      buildkit.dockerfile.v0\n" +
                  "<missing>      20 minutes ago   RUN pip install --no-cache-dir -r requirem…     39.8MB    buildkit.dockerfile.v0",
          stderr: "",
          code: 0
        };
      }

      // 7. Volume Management
      if (raw === "docker volume create pgdata") {
        return { stdout: "pgdata", stderr: "", code: 0 };
      }
      if (raw === "docker volume ls") {
        return {
          stdout: "DRIVER    VOLUME NAME\n" +
                  "local     compose-db-data\n" +
                  "local     pgdata",
          stderr: "",
          code: 0
        };
      }
      if (raw.startsWith("docker volume rm")) {
        return { stdout: "pgdata", stderr: "", code: 0 };
      }

      // 8. Docker Compose Commands
      if (raw === "docker compose config") {
        return {
          stdout: "name: python-app\nservices:\n  db:\n    environment:\n      POSTGRES_DB: example\n      POSTGRES_PASSWORD_FILE: /run/secrets/db-password\n      POSTGRES_USER: labuser\n    healthcheck:\n      interval: 5s\n      retries: 10\n      test:\n      - CMD-SHELL\n      - pg_isready -U labuser -d example\n      timeout: 5s\n    image: postgres:16\n    secrets:\n    - source: db-password\n    volumes:\n    - type: volume\n      target: /var/lib/postgresql/data\n      volume: {}\n  web:\n    build:\n      context: /home/student/week6-docker/python-app\n      dockerfile: Dockerfile\n    command:\n    - Students\n    depends_on:\n      db:\n        condition: service_healthy\n        required: true\n    environment:\n      APP_ENV: compose\n    ports:\n    - mode: ingress\n      target: 5000\n      published: \"5002\"\n      protocol: tcp\nsecrets:\n  db-password:\n    name: db-password\n    file: /home/student/week6-docker/python-app/db/password.txt\nvolumes:\n  compose-db-data:\n    name: compose-db-data",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker compose up")) {
        return {
          stdout: "[+] Running 3/3\n ✔ Network python-app_default  Created\n ✔ Container python-app-db-1   Healthy\n ✔ Container python-app-web-1  Started",
          stderr: "",
          code: 0
        };
      }

      if (raw === "docker compose ps") {
        return {
          stdout: "NAME                IMAGE               COMMAND                  SERVICE   CREATED         STATUS                   PORTS\n" +
                  "python-app-db-1     postgres:16         \"docker-entrypoint.s…\"   db        5 minutes ago   Up 5 minutes (healthy)   5432/tcp\n" +
                  "python-app-web-1    python-app-web      \"python app.py Stude…\"   web       5 minutes ago   Up 5 minutes             127.0.0.1:5002->5000/tcp",
          stderr: "",
          code: 0
        };
      }

      if (raw === "docker compose down") {
        return {
          stdout: "[+] Running 3/3\n ✔ Container python-app-web-1  Removed\n ✔ Container python-app-db-1   Removed\n ✔ Network python-app_default  Removed",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker stop")) {
        const parts = raw.split(" ").slice(2).join(" ");
        return { stdout: parts, stderr: "", code: 0 };
      }
      if (raw.startsWith("docker rm")) {
        const parts = raw.split(" ").slice(2).join(" ");
        return { stdout: parts, stderr: "", code: 0 };
      }
      if (raw.startsWith("docker start")) {
        const parts = raw.split(" ").slice(2).join(" ");
        return { stdout: parts, stderr: "", code: 0 };
      }

      // Default command output
      return { stdout: `Executed: ${raw}`, stderr: "", code: 0 };
    }
  }

  /**
   * Bash & Theory Grader Engine for Week 6
   */
  const BASH_GRADER = {
    evaluate(question, userInput, shellResult) {
      if (!question || !userInput) return false;

      const user = String(userInput).trim().toLowerCase();
      const canonical = String(question.canonical || "").trim().toLowerCase();

      // Direct exact match
      if (user === canonical) return true;

      // Accepted array match
      if (Array.isArray(question.accepted)) {
        for (const item of question.accepted) {
          if (user === String(item).trim().toLowerCase()) return true;
        }
      }

      // Normalized whitespace and quotes
      const cleanUser = user.replace(/[\s\t\n]+/g, ' ').replace(/["']/g, '');
      const cleanCanonical = canonical.replace(/[\s\t\n]+/g, ' ').replace(/["']/g, '');
      if (cleanUser === cleanCanonical) return true;

      // Special handling for bash commands with sudo
      if (cleanUser.replace(/^sudo\s+/, '') === cleanCanonical.replace(/^sudo\s+/, '')) {
        return true;
      }

      // Special handling for math answers (e.g. 15, 9, 12, 16, 15, 20, 18, 1048576, 131072, 8.2, 8.2 us)
      const numUser = cleanUser.replace(/[^\d.]/g, '');
      const numCanonical = cleanCanonical.replace(/[^\d.]/g, '');
      if (numUser && numCanonical && numUser === numCanonical) {
        return true;
      }

      // Special regex match if defined
      if (question.verifyRegex) {
        try {
          const reg = new RegExp(question.verifyRegex, 'i');
          if (reg.test(userInput)) return true;
        } catch (e) {}
      }

      return false;
    }
  };

  return {
    CAREER_RANKS,
    careerRanks: CAREER_RANKS,
    SECTORS,
    sectors: SECTORS,
    EMERGENCY_EVENTS,
    officeEvents: EMERGENCY_EVENTS,
    INITIAL_VIRTUAL_STATE,
    VirtualLinuxShell,
    BASH_GRADER
  };
});
