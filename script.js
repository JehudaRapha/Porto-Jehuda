/* =============================================================
   JEHUDA RAPHA PORTFOLIO — script.js  (Complete v3)
   Features:
     - EN / ID i18n (translations full)
     - Theme toggle (dark / light) + localStorage
     - Typing animation (typewriter effect)
     - Navbar: scroll-glass, active-link, hamburger mobile
     - Scroll progress bar
     - Scroll reveal (fade-in) — IntersectionObserver fallback
     - Certificate modal (click card → open modal)
     - Project lightbox (click image → fullscreen gallery)
     - Button ripple effect
     - Hero card staggered entrance
     - Keyboard accessibility (Escape, ArrowLeft, ArrowRight)
     - Touch swipe on lightbox
     - Smooth scroll (native + fallback)
     - Footer links smooth scroll
     - Reduced motion respect
     - Cursor dot/ring: DISABLED (standard browser cursor)
   ============================================================= */

'use strict';

/* ─────────────────────────────────────────────
   1. TRANSLATIONS — EN / ID
───────────────────────────────────────────── */
const translations = {
  en: {
    /* NAV */
    'nav.home':           'Home',
    'nav.about':          'About',
    'nav.projects':       'Projects',
    'nav.certifications': 'Certifications',
    'nav.contact':        'Contact',

    /* UI CONTROLS */
    'ui.light':       'Light',
    'ui.dark':        'Dark',
    'ui.active':      'Active',
    'ui.scroll':      'Scroll',
    'ui.viewCert':    'View Certificate',
    'ui.clickEnlarge':'Click to enlarge',
    'ui.myRole':      'My Role',

    /* HERO */
    'hero.badge':        'Open for Collaboration',
    'hero.greeting':     "Hi there, I'm",
    'hero.rolePrefix':   'A\u00a0',
    'hero.desc':         'Building real-world digital solutions through <mark class="highlight-web">Web Development</mark> and <mark class="highlight-iot">Internet of Things</mark> \u2014 from responsive interfaces to smart sensor systems.',
    'hero.btnProjects':  'View Projects',
    'hero.btnContact':   'Contact Me',
    'hero.statsProjects':'Projects',
    'hero.statsDomains': 'Domains',
    'hero.statsCerts':   'Certifications',

    /* ABOUT */
    'about.tag':         'About Me',
    'about.headingPre':  'Who is ',
    'about.major':       'Informatics Engineering',
    'about.orgTitle':    'Chairman of HIMATIKA',
    'about.orgSub':      'Informatics Engineering Student Association',
    'about.intro':       'I am <strong>Jehuda Rapha Putra Hermantan</strong>, a 19-year-old Informatics Engineering student at <strong>Satu University</strong>, focusing on building solutions in <strong>Web Development</strong> and <strong>Internet of Things (IoT)</strong>.',
    'about.p1':          'I build <strong>interactive &amp; responsive websites</strong> with modern UI/UX, and develop <strong>IoT systems</strong> for real-time monitoring and remote control via cloud platforms like Blynk and MQTT dashboards.',
    'about.p2':          'As <strong>Chairman of the Informatics Engineering Student Association</strong>, I am accustomed to leading teams, managing end-to-end projects, and ensuring every solution not only runs well but also delivers real impact.',
    'about.skillWeb':    'Web Development',
    'about.skillIoT':    'IoT Engineering',
    'about.skillLead':   'Team Leadership',
    'about.skillProblem':'Problem Solving',
    'about.btnCerts':    'View Certifications',
    'about.btnCollab':   'Collaborate',

    /* PROJECTS */
    'projects.tag':            'My Works',
    'projects.headingPre':     'Featured ',
    'projects.headingAccent':  'Projects',
    'projects.desc':           'Real-world projects spanning Web Development and Internet of Things \u2014 built and deployed with real impact.',
    'projects.labelCompleted': 'Completed Projects',
    'projects.labelOngoing':   'In Progress',

    'proj.sg.title': 'Smart Garden Monitoring &amp; Control System',
    'proj.sg.desc':  'An IoT-based smart garden monitoring and control system enabling <strong>real-time</strong> environmental monitoring via the <strong>Blynk</strong> app. Measures <strong>temperature</strong>, <strong>soil moisture</strong>, and <strong>air humidity</strong> with remote actuator control.',
    'proj.sg.role':  'Full developer \u2014 hardware schematic design, microcontroller firmware development, multi-sensor integration, and Blynk dashboard configuration.',

    'proj.wq.title': 'IoT Water Quality Monitoring System',
    'proj.wq.desc':  'An IoT-based water quality monitoring system measuring three critical parameters in real-time: <strong>pH</strong> (acidity), <strong>TDS</strong> (total dissolved solids), and <strong>Turbidity</strong> (cloudiness). Data is sent to a cloud dashboard for accurate remote monitoring.',
    'proj.wq.role':  'IoT Engineer \u2014 sensor-to-ESP32 wiring and real-time data transmission to the cloud via MQTT protocol.',

    'proj.dd.title': 'Diabetes Early Detection System',
    'proj.dd.desc':  'An early diabetes risk detection system combining <strong>Machine Learning</strong> and <strong>IoT</strong> to analyze biometric parameters non-invasively. The ML model processes IoT sensor data to predict diabetes risk and deliver real-time health recommendations.',
    'proj.dd.role':  'IoT Engineer \u2014 hardware design (schematic &amp; PCB), biometric sensor measurement logic, and IoT data integration into the Machine Learning pipeline.',

    'proj.sr.title':     'IoT-Based Smart Room Monitoring System',
    'proj.sr.desc':      'Smart room monitoring system with IoT and vision sensor to detect and count <strong>room occupancy in real-time</strong>. Data is visualized on a centralized monitoring dashboard for space utilization efficiency.',
    'proj.sr.roleTitle': 'My Role \u2014 IoT Engineer',
    'proj.sr.role':      'Responsible for the entire <strong>IoT</strong> layer: sensor hardware design and assembly, ESP32 firmware programming, and real-time data transmission from IoT devices to the dashboard system via MQTT/HTTP protocol.',

    /* CERTIFICATIONS */
    'certs.tag':          'Credentials',
    'certs.headingPre':   'Certifications &amp; ',
    'certs.headingAccent':'Achievements',
    'certs.desc':         'Certificates and awards I have earned as proof of real competence. Click any card to view the full certificate.',

    'cert.ai.title':      'Fundamentals of Artificial Intelligence',
    'cert.ai.desc':       'A comprehensive study of core AI concepts: machine learning, deep learning, neural networks, and real-world implementation in data-driven projects.',
    'cert.article.title': 'Scientific Article Writing',
    'cert.article.desc':  'Training in systematic and structured academic writing aligned with the standards of reputable international journals.',
    'cert.fiksi.title':   '3rd Place \u2014 FIKSI 2023',
    'cert.fiksi.desc':    'Achieved 3rd place in the FIKSI 2023 regional digital technology competition with an innovative project in information technology.',
    'cert.prompt.title':  'Prompt Engineering for Developers',
    'cert.prompt.desc':   'Mastering prompt engineering techniques to build effective and accurate AI applications using Large Language Models (LLMs).',
    'cert.python.title':  'Python Programming Basics',
    'cert.python.desc':   'Mastering Python fundamentals as the primary foundation for AI development, data science, and IoT system automation.',

    /* CONTACT */
    'contact.tag':           'Contact',
    'contact.headingPre':    "Let's ",
    'contact.headingAccent': 'Collaborate',
    'contact.desc':          "Open for project discussions, research collaborations, and career opportunities in Web and IoT. Don't hesitate to reach out!",

    /* FOOTER */
    'footer.tagline': 'Engineer of ideas \u2014 turning concepts into real-world solutions.',
    'footer.copy':    '\u00a9 2026 Jehuda Rapha Putra Hermantan. All rights reserved.',
  },

  id: {
    /* NAV */
    'nav.home':           'Beranda',
    'nav.about':          'Tentang',
    'nav.projects':       'Proyek',
    'nav.certifications': 'Sertifikasi',
    'nav.contact':        'Kontak',

    /* UI CONTROLS */
    'ui.light':       'Terang',
    'ui.dark':        'Gelap',
    'ui.active':      'Aktif',
    'ui.scroll':      'Gulir',
    'ui.viewCert':    'Lihat Sertifikat',
    'ui.clickEnlarge':'Klik untuk perbesar',
    'ui.myRole':      'Peran Saya',

    /* HERO */
    'hero.badge':        'Terbuka untuk Kolaborasi',
    'hero.greeting':     'Halo, saya',
    'hero.rolePrefix':   'Seorang\u00a0',
    'hero.desc':         'Membangun solusi digital nyata melalui <mark class="highlight-web">Pengembangan Web</mark> dan <mark class="highlight-iot">Internet of Things</mark> \u2014 dari antarmuka responsif hingga sistem sensor cerdas.',
    'hero.btnProjects':  'Lihat Proyek',
    'hero.btnContact':   'Hubungi Saya',
    'hero.statsProjects':'Proyek',
    'hero.statsDomains': 'Domain',
    'hero.statsCerts':   'Sertifikasi',

    /* ABOUT */
    'about.tag':         'Tentang Saya',
    'about.headingPre':  'Siapa ',
    'about.major':       'Teknik Informatika',
    'about.orgTitle':    'Ketua HIMATIKA',
    'about.orgSub':      'Himpunan Mahasiswa Teknik Informatika',
    'about.intro':       'Saya <strong>Jehuda Rapha Putra Hermantan</strong>, mahasiswa Teknik Informatika berusia 19 tahun di <strong>Universitas Satu</strong>, berfokus pada pembangunan solusi di bidang <strong>Web Development</strong> dan <strong>Internet of Things (IoT)</strong>.',
    'about.p1':          'Saya membangun <strong>website interaktif &amp; responsif</strong> dengan UI/UX modern, serta mengembangkan <strong>sistem IoT</strong> untuk monitoring dan kontrol real-time via platform cloud seperti Blynk dan dashboard MQTT.',
    'about.p2':          'Sebagai <strong>Ketua Himpunan Mahasiswa Teknik Informatika</strong>, saya terbiasa memimpin tim, mengelola proyek end-to-end, dan memastikan setiap solusi tidak hanya berjalan dengan baik tetapi juga memberikan dampak nyata.',
    'about.skillWeb':    'Pengembangan Web',
    'about.skillIoT':    'Rekayasa IoT',
    'about.skillLead':   'Kepemimpinan Tim',
    'about.skillProblem':'Pemecahan Masalah',
    'about.btnCerts':    'Lihat Sertifikasi',
    'about.btnCollab':   'Kolaborasi',

    /* PROJECTS */
    'projects.tag':            'Karya Saya',
    'projects.headingPre':     'Proyek ',
    'projects.headingAccent':  'Unggulan',
    'projects.desc':           'Proyek nyata yang mencakup Pengembangan Web dan Internet of Things \u2014 dibangun dan diimplementasikan dengan dampak nyata.',
    'projects.labelCompleted': 'Proyek Selesai',
    'projects.labelOngoing':   'Sedang Berjalan',

    'proj.sg.title': 'Sistem Monitoring &amp; Kontrol Smart Garden',
    'proj.sg.desc':  'Sistem monitoring dan kontrol kebun cerdas berbasis IoT yang memungkinkan pemantauan lingkungan <strong>real-time</strong> melalui aplikasi <strong>Blynk</strong>. Mengukur <strong>suhu</strong>, <strong>kelembaban tanah</strong>, dan <strong>kelembaban udara</strong> dengan kontrol aktuator jarak jauh.',
    'proj.sg.role':  'Full developer \u2014 desain skema hardware, pengembangan firmware mikrokontroler, integrasi multi-sensor, dan konfigurasi dashboard Blynk.',

    'proj.wq.title': 'Sistem Monitoring Kualitas Air IoT',
    'proj.wq.desc':  'Sistem monitoring kualitas air berbasis IoT yang mengukur tiga parameter kritis secara real-time: <strong>pH</strong> (keasaman), <strong>TDS</strong> (total padatan terlarut), dan <strong>Turbiditas</strong> (kekeruhan). Data dikirim ke dashboard cloud untuk pemantauan jarak jauh yang akurat.',
    'proj.wq.role':  'IoT Engineer \u2014 pemasangan sensor ke ESP32 dan transmisi data real-time ke cloud via protokol MQTT.',

    'proj.dd.title': 'Sistem Deteksi Dini Diabetes',
    'proj.dd.desc':  'Sistem deteksi risiko diabetes dini yang menggabungkan <strong>Machine Learning</strong> dan <strong>IoT</strong> untuk menganalisis parameter biometrik secara non-invasif. Model ML memproses data sensor IoT untuk memprediksi risiko diabetes dan memberikan rekomendasi kesehatan real-time.',
    'proj.dd.role':  'IoT Engineer \u2014 desain hardware (skematik &amp; PCB), logika pengukuran sensor biometrik, dan integrasi data IoT ke pipeline Machine Learning.',

    'proj.sr.title':     'Sistem Monitoring Smart Room Berbasis IoT',
    'proj.sr.desc':      'Sistem monitoring ruangan cerdas yang menggabungkan <strong>IoT</strong> dan <strong>AI Face Recognition</strong> untuk mendeteksi dan menghitung <strong>penghuni ruangan secara real-time</strong>. Data divisualisasikan di dashboard monitoring terpusat untuk meningkatkan efisiensi pemanfaatan ruang.',
    'proj.sr.roleTitle': 'Peran Saya \u2014 IoT Engineer',
    'proj.sr.role':      'Bertanggung jawab atas seluruh lapisan <strong>IoT</strong>: desain dan perakitan hardware sensor, pemrograman firmware ESP32, dan transmisi data real-time dari perangkat IoT ke sistem dashboard via protokol MQTT/HTTP.',

    /* CERTIFICATIONS */
    'certs.tag':          'Kredensial',
    'certs.headingPre':   'Sertifikasi &amp; ',
    'certs.headingAccent':'Pencapaian',
    'certs.desc':         'Sertifikat dan penghargaan yang telah saya raih sebagai bukti kompetensi nyata. Klik kartu manapun untuk melihat sertifikat lengkap.',

    'cert.ai.title':      'Dasar-Dasar Kecerdasan Buatan',
    'cert.ai.desc':       'Studi komprehensif tentang konsep inti AI: machine learning, deep learning, neural network, dan implementasi nyata dalam proyek berbasis data.',
    'cert.article.title': 'Penulisan Artikel Ilmiah',
    'cert.article.desc':  'Pelatihan penulisan akademik yang sistematis dan terstruktur sesuai standar jurnal internasional terkemuka.',
    'cert.fiksi.title':   'Juara 3 \u2014 FIKSI 2023',
    'cert.fiksi.desc':    'Meraih juara 3 dalam kompetisi teknologi digital regional FIKSI 2023 dengan proyek inovatif di bidang teknologi informasi.',
    'cert.prompt.title':  'Prompt Engineering untuk Developer',
    'cert.prompt.desc':   'Menguasai teknik prompt engineering untuk membangun aplikasi AI yang efektif dan akurat menggunakan Large Language Models (LLMs).',
    'cert.python.title':  'Dasar-Dasar Pemrograman Python',
    'cert.python.desc':   'Menguasai fundamental Python sebagai fondasi utama untuk pengembangan AI, data science, dan otomasi sistem IoT.',

    /* CONTACT */
    'contact.tag':           'Kontak',
    'contact.headingPre':    'Mari ',
    'contact.headingAccent': 'Berkolaborasi',
    'contact.desc':          'Terbuka untuk diskusi proyek, kolaborasi riset, dan peluang karir di bidang Web dan IoT. Jangan ragu untuk menghubungi!',

    /* FOOTER */
    'footer.tagline': 'Insinyur ide \u2014 mengubah konsep menjadi solusi nyata.',
    'footer.copy':    '\u00a9 2026 Jehuda Rapha Putra Hermantan. Semua hak dilindungi.',
  },
};

/* ─────────────────────────────────────────────
   2. TYPING ANIMATION WORDS PER LANGUAGE
───────────────────────────────────────────── */
const typingWords = {
  en: ['Web Developer', 'IoT Engineer', 'Tech Creator'],
  id: ['Web Developer', 'IoT Engineer', 'Kreator Teknologi'],
};

/* ─────────────────────────────────────────────
   3. STATE (localStorage-persisted)
───────────────────────────────────────────── */
let currentLang  = localStorage.getItem('lang')  || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

/* Respect system preference on first visit (no saved theme) */
if (!localStorage.getItem('theme')) {
  currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/* ─────────────────────────────────────────────
   4. REDUCED MOTION CHECK
───────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────
   5. HIDE CUSTOM CURSOR ELEMENTS (use standard cursor)
   The HTML has #cursorDot and #cursorRing — we hide them
   completely so the browser default cursor is used.
───────────────────────────────────────────── */
(function hideCursorElements() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (dot)  { dot.style.display  = 'none'; }
  if (ring) { ring.style.display = 'none'; }
})();

/* ─────────────────────────────────────────────
   6. THEME — APPLY & TOGGLE
───────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  if (icon) {
    icon.className = (theme === 'dark')
      ? 'fa-solid fa-moon'
      : 'fa-solid fa-sun';
  }

  if (label) {
    /* Label shows what clicking will switch TO */
    const nextKey = (theme === 'dark') ? 'ui.light' : 'ui.dark';
    label.setAttribute('data-i18n', nextKey);
    label.textContent = translations[currentLang][nextKey]
      || (theme === 'dark' ? 'Light' : 'Dark');
  }

  /* Update <html> CSS variable overrides via data-theme attribute.
     The CSS already handles [data-theme="light"] via body:has checks.
     We additionally add/remove a class for extra specificity fallback. */
  document.body.classList.toggle('theme-light', theme === 'light');
  document.body.classList.toggle('theme-dark',  theme === 'dark');
}

const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
}

/* ─────────────────────────────────────────────
   7. LANGUAGE — APPLY & TOGGLE
───────────────────────────────────────────── */
function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('lang', lang);
  currentLang = lang;

  const t = translations[lang] || translations.en;

  /* Plain-text elements */
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* HTML-rich elements */
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Language toggle UI */
  const langActive = document.getElementById('langActive');
  const langOther  = document.getElementById('langOther');
  if (langActive) langActive.textContent = lang.toUpperCase();
  if (langOther)  langOther.textContent  = (lang === 'en') ? 'ID' : 'EN';

  /* Re-sync theme label text after language switch */
  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    const nextKey = (currentTheme === 'dark') ? 'ui.light' : 'ui.dark';
    themeLabel.textContent = t[nextKey] || themeLabel.textContent;
  }

  /* Restart typing with words in new language */
  restartTyping(lang);
}

const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = (currentLang === 'en') ? 'id' : 'en';
    applyLang(nextLang);
  });
}

/* ─────────────────────────────────────────────
   8. SCROLL PROGRESS BAR
   Falls back to JS-driven width when CSS scroll-driven
   animation is not supported.
───────────────────────────────────────────── */
const scrollProgressBar = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!scrollProgressBar) return;
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  scrollProgressBar.style.width = `${Math.min(scrolled * 100, 100)}%`;
}

/* Only attach JS scroll handler when CSS scroll-driven not available */
if (!CSS.supports('animation-timeline', 'scroll()')) {
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
}

/* ─────────────────────────────────────────────
   9. NAVBAR — SCROLL-GLASS + ACTIVE LINK
───────────────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onNavScroll() {
  /* Glass blur effect */
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);

  /* Active link highlight based on scroll position */
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', onNavScroll, { passive: true });
/* Run once on load to set initial state */
onNavScroll();

/* ─────────────────────────────────────────────
   10. SMOOTH SCROLL (anchor links)
───────────────────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Expose globally for onclick="scrollToSection(...)" in HTML */
window.scrollToSection = scrollToSection;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  });
});

/* ─────────────────────────────────────────────
   11. MOBILE HAMBURGER MENU
───────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navMenu    = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function openMobileMenu() {
  if (!hamburger || !navMenu) return;
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('open');
  if (navOverlay) {
    navOverlay.classList.add('active');
    navOverlay.removeAttribute('aria-hidden');
  }
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!hamburger || !navMenu) return;
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
  if (navOverlay) {
    navOverlay.classList.remove('active');
    navOverlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeMobileMenu);
}

/* Close menu on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

/* ─────────────────────────────────────────────
   12. SCROLL REVEAL — FADE-IN (IntersectionObserver fallback)
   CSS view-timeline handles modern browsers.
   JS IntersectionObserver handles older browsers.
───────────────────────────────────────────── */
if (!CSS.supports('animation-timeline', 'view()')) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    if (!prefersReducedMotion) {
      el.style.transitionDelay = `${i * 0.06}s`;
    }
    revealObserver.observe(el);
  });

  /* Cert cards separate reveal (staggered) */
  const certRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          certRevealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.cert-card').forEach((card, i) => {
    if (!prefersReducedMotion) {
      const delay = `${i * 0.09}s`;
      card.style.transition = `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}, box-shadow 0.35s ease, border-color 0.35s ease`;
    }
    certRevealObserver.observe(card);
  });
}

/* ─────────────────────────────────────────────
   13. TYPING ANIMATION (typewriter effect)
───────────────────────────────────────────── */
let typingEl       = document.querySelector('.typing');
let typingTimer    = null;
let typingWordIdx  = 0;
let typingCharIdx  = 0;
let typingDeleting = false;
let typingPaused   = false;

const TYPING_SPEED   = 75;   /* ms per char while typing */
const DELETING_SPEED = 40;   /* ms per char while deleting */
const PAUSE_AFTER    = 1500; /* ms pause at full word */
const PAUSE_BEFORE   = 300;  /* ms pause at empty before next word */

function typeEffect(words) {
  if (!typingEl || typingPaused) return;

  const current = words[typingWordIdx % words.length];

  if (!typingDeleting) {
    typingCharIdx++;
    typingEl.textContent = current.substring(0, typingCharIdx);

    if (typingCharIdx === current.length) {
      /* Finished typing — pause, then start deleting */
      typingDeleting = true;
      typingPaused   = true;
      typingTimer = setTimeout(() => {
        typingPaused = false;
        typingTimer  = setTimeout(() => typeEffect(words), DELETING_SPEED);
      }, PAUSE_AFTER);
      return;
    }
  } else {
    typingCharIdx--;
    typingEl.textContent = current.substring(0, typingCharIdx);

    if (typingCharIdx === 0) {
      /* Finished deleting — move to next word */
      typingDeleting = false;
      typingWordIdx  = (typingWordIdx + 1) % words.length;
      typingTimer    = setTimeout(() => typeEffect(words), PAUSE_BEFORE);
      return;
    }
  }

  typingTimer = setTimeout(
    () => typeEffect(words),
    typingDeleting ? DELETING_SPEED : TYPING_SPEED
  );
}

function restartTyping(lang) {
  if (!typingEl) return;
  clearTimeout(typingTimer);
  typingPaused   = false;
  typingDeleting = false;
  typingCharIdx  = 0;
  typingWordIdx  = 0;
  typingEl.textContent = '';
  if (!prefersReducedMotion) {
    typeEffect(typingWords[lang] || typingWords.en);
  } else {
    /* For reduced motion — just show the first word statically */
    typingEl.textContent = (typingWords[lang] || typingWords.en)[0];
  }
}

/* ─────────────────────────────────────────────
   14. HERO VISUAL CARDS — STAGGERED ENTRANCE
───────────────────────────────────────────── */
(function heroCardEntrance() {
  if (prefersReducedMotion) return;

  const cards = document.querySelectorAll('.hv-card');
  cards.forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateX(30px)';
    card.style.transition = `opacity 0.6s ease ${0.3 + i * 0.15}s, transform 0.6s ease ${0.3 + i * 0.15}s`;

    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateX(0)';
      }, 200 + i * 150);
    });
  });
})();

/* ─────────────────────────────────────────────
   15. BUTTON RIPPLE EFFECT
───────────────────────────────────────────── */
(function initButtonRipple() {
  /* Inject ripple CSS once */
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      .btn { position: relative; overflow: hidden; }
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.25);
        transform: scale(0);
        animation: ripple-anim 0.65s linear;
        pointer-events: none;
      }
      @keyframes ripple-anim {
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      /* Remove any lingering ripple */
      btn.querySelectorAll('.ripple').forEach((r) => r.remove());

      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const rect     = btn.getBoundingClientRect();

      const ripple = document.createElement('span');
      ripple.className    = 'ripple';
      ripple.style.width  = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left   = `${e.clientX - rect.left  - diameter / 2}px`;
      ripple.style.top    = `${e.clientY - rect.top   - diameter / 2}px`;

      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
  });
})();

/* ─────────────────────────────────────────────
   16. CTRL BUTTON RIPPLE (langToggle, themeToggle)
───────────────────────────────────────────── */
(function initCtrlRipple() {
  document.querySelectorAll('.ctrl-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      btn.querySelectorAll('.ripple').forEach((r) => r.remove());

      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const rect     = btn.getBoundingClientRect();

      const ripple = document.createElement('span');
      ripple.className    = 'ripple';
      ripple.style.width  = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left   = `${e.clientX - rect.left  - diameter / 2}px`;
      ripple.style.top    = `${e.clientY - rect.top   - diameter / 2}px`;

      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
  });
})();

/* ─────────────────────────────────────────────
   17. CERTIFICATE MODAL
   Triggers: click on .cert-card  →  open modal
   Closes:   ×  |  backdrop  |  Escape
   Keyboard: cert-card has role="button" + tabindex="0"
───────────────────────────────────────────── */
(function initCertModal() {
  const modal      = document.getElementById('certModal');
  const modalImg   = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const closeBtn   = document.getElementById('certModalClose');
  const backdrop   = document.getElementById('certModalBackdrop');

  if (!modal) return;

  /* Inject CSS for modal animation (if not already in style.css) */
  if (!document.getElementById('cert-modal-style')) {
    const style = document.createElement('style');
    style.id = 'cert-modal-style';
    style.textContent = `
      .cert-modal {
        position: fixed; inset: 0;
        z-index: 2000;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding-top: 8vh;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .cert-modal.active {
        pointer-events: all;
        opacity: 1;
      }
      .cert-modal-backdrop {
        position: fixed; inset: 0;
        background: rgba(2, 8, 23, 0.92);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        z-index: 0;
      }
      .cert-modal-box {
        position: relative; z-index: 1;
        background: var(--bg-card, #0d1a2e);
        border: 1px solid var(--border-strong, rgba(34,211,238,.25));
        border-radius: var(--r-lg, 24px);
        max-width: 860px; width: 90%;
        box-shadow: var(--shadow-deep, 0 24px 64px rgba(0,0,0,.75));
        max-height: 88vh;
        overflow: hidden;
        display: flex; flex-direction: column;
        transform: translateY(-24px) scale(0.97);
        transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
      }
      .cert-modal.active .cert-modal-box {
        transform: translateY(0) scale(1);
      }
      .cert-modal-header {
        display: flex;
        align-items: center; justify-content: space-between;
        padding: 16px 24px;
        border-bottom: 1px solid var(--border, rgba(34,211,238,.1));
        flex-shrink: 0;
      }
      .cert-modal-title {
        font-family: var(--font-display, 'Plus Jakarta Sans', sans-serif);
        font-size: 0.95rem; font-weight: 600;
        color: var(--text-bright, #fff);
        letter-spacing: -0.02em;
      }
      .cert-modal-close {
        width: 36px; height: 36px;
        border-radius: var(--r-sm, 10px);
        background: var(--bg-glass, rgba(13,26,46,.75));
        border: 1px solid var(--border, rgba(34,211,238,.1));
        display: flex; align-items: center; justify-content: center;
        color: var(--text-secondary, #94a3b8);
        cursor: pointer;
        font-size: 16px;
        transition: all 0.15s ease;
      }
      .cert-modal-close:hover {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.4);
        color: #ef4444;
      }
      .cert-modal-img-wrap {
        overflow-y: auto; padding: 24px; flex: 1;
      }
      .cert-modal-img {
        max-width: 100%;
        border-radius: var(--r-sm, 10px);
        margin: auto; display: block;
        box-shadow: 0 8px 32px rgba(0,0,0,.4);
      }
    `;
    document.head.appendChild(style);
  }

  function openCertModal(imgSrc, title) {
    if (!imgSrc) return;
    modalImg.src             = imgSrc;
    modalImg.alt             = title || 'Certificate';
    modalTitle.textContent   = title || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    /* Focus close button for keyboard users */
    setTimeout(() => closeBtn && closeBtn.focus(), 100);
  }

  function closeCertModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    /* Clear src after animation completes */
    setTimeout(() => {
      if (modalImg) modalImg.src = '';
    }, 400);
  }

  /* Click / keyboard on cert cards */
  document.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
      openCertModal(card.dataset.img, card.dataset.title);
    });
    /* Enter / Space for keyboard */
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCertModal(card.dataset.img, card.dataset.title);
      }
    });
  });

  /* Close triggers */
  if (closeBtn)  closeBtn.addEventListener('click', closeCertModal);
  if (backdrop)  backdrop.addEventListener('click', closeCertModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCertModal();
    }
  });
})();

/* ─────────────────────────────────────────────
   18. PROJECT IMAGE LIGHTBOX
   Triggers: click on .proj-img.clickable-img
   Groups:   images in same [data-group] container
   Controls: close (×), prev/next arrows, backdrop, Escape, arrow keys, swipe
───────────────────────────────────────────── */
(function initLightbox() {
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightboxImg');
  const lbClose    = document.getElementById('lightboxClose');
  const lbPrev     = document.getElementById('lightboxPrev');
  const lbNext     = document.getElementById('lightboxNext');
  const lbCounter  = document.getElementById('lightboxCounter');
  const lbBackdrop = document.getElementById('lightboxBackdrop');

  if (!lightbox) return;

  /* Inject CSS for lightbox (fallback if CSS file doesn't define .show) */
  if (!document.getElementById('lightbox-style')) {
    const style = document.createElement('style');
    style.id = 'lightbox-style';
    style.textContent = `
      .lightbox {
        position: fixed; inset: 0;
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .lightbox.show {
        pointer-events: all;
        opacity: 1;
      }
      .lightbox-backdrop {
        position: fixed; inset: 0;
        background: rgba(2, 8, 23, 0.96);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 0;
      }
      .lightbox-img-wrap {
        position: relative; z-index: 1;
        display: flex; align-items: center; justify-content: center;
        max-width: 90vw; max-height: 85vh;
      }
      .lightbox-img {
        max-width: 90vw; max-height: 85vh;
        object-fit: contain;
        border-radius: var(--r-md, 16px);
        box-shadow: 0 32px 80px rgba(0,0,0,.8);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
      .lightbox-close {
        position: fixed; top: 20px; right: 24px;
        z-index: 10;
        width: 44px; height: 44px;
        border-radius: var(--r-sm, 10px);
        background: rgba(13, 26, 46, 0.9);
        border: 1px solid rgba(34, 211, 238, 0.2);
        color: #94a3b8;
        font-size: 18px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
        transition: all 0.15s ease;
        backdrop-filter: blur(8px);
      }
      .lightbox-close:hover {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.4);
        color: #ef4444;
      }
      .lightbox-nav {
        position: fixed; top: 50%; z-index: 10;
        transform: translateY(-50%);
        width: 48px; height: 48px;
        border-radius: var(--r-sm, 10px);
        background: rgba(13, 26, 46, 0.9);
        border: 1px solid rgba(34, 211, 238, 0.2);
        color: #94a3b8;
        font-size: 18px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
      }
      .lightbox-nav:hover { border-color: var(--accent, #22d3ee); color: var(--accent, #22d3ee); }
      .lightbox-prev { left: 20px; }
      .lightbox-next { right: 20px; }
      .lightbox-counter {
        position: fixed; bottom: 24px; left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        font-family: var(--font-mono, 'Fira Code', monospace);
        font-size: 0.8rem;
        color: rgba(148, 163, 184, 0.8);
        background: rgba(13, 26, 46, 0.8);
        border: 1px solid rgba(34, 211, 238, 0.1);
        padding: 6px 16px;
        border-radius: var(--r-pill, 9999px);
        backdrop-filter: blur(8px);
      }
    `;
    document.head.appendChild(style);
  }

  let currentGroup = [];
  let currentIndex = 0;
  let touchStartX  = 0;

  function showImage() {
    if (!lbImg || !currentGroup.length) return;

    lbImg.style.opacity   = '0';
    lbImg.style.transform = 'scale(0.92)';

    setTimeout(() => {
      const imgEl = currentGroup[currentIndex];
      lbImg.src   = imgEl.src;
      lbImg.alt   = imgEl.alt || 'Project image';

      lbImg.style.opacity   = '1';
      lbImg.style.transform = 'scale(1)';

      if (lbCounter) {
        lbCounter.textContent = `${currentIndex + 1} / ${currentGroup.length}`;
      }

      const showNav = currentGroup.length > 1;
      if (lbPrev) lbPrev.style.display = showNav ? 'flex' : 'none';
      if (lbNext) lbNext.style.display = showNav ? 'flex' : 'none';
    }, 160);
  }

  function openLightbox(images, startIndex) {
    currentGroup = images;
    currentIndex = Math.max(0, Math.min(startIndex, images.length - 1));
    showImage();
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
    /* Focus close button */
    setTimeout(() => lbClose && lbClose.focus(), 100);
  }

  function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => { if (lbImg) lbImg.src = ''; }, 350);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
    showImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentGroup.length;
    showImage();
  }

  /* Click on project images */
  document.querySelectorAll('.proj-img.clickable-img').forEach((img) => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();

      const groupEl  = img.closest('.project-imgs');
      const groupKey = groupEl ? groupEl.dataset.group : null;

      let groupImgs;
      if (groupKey) {
        groupImgs = Array.from(
          document.querySelectorAll(`.project-imgs[data-group="${groupKey}"] .proj-img.clickable-img`)
        );
      } else {
        groupImgs = [img];
      }

      const idx = groupImgs.indexOf(img);
      openLightbox(groupImgs, idx >= 0 ? idx : 0);
    });
  });

  /* Controls */
  if (lbClose)    lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev)     lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  if (lbNext)     lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

  /* Keyboard navigation */
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    switch (e.key) {
      case 'Escape':     closeLightbox(); break;
      case 'ArrowLeft':  prevImage();     break;
      case 'ArrowRight': nextImage();     break;
    }
  });

  /* Touch swipe */
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  }, { passive: true });
})();

/* ─────────────────────────────────────────────
   19. PROJECT CARD HOVER LIFT
   CSS already handles :hover transform, but this adds
   a subtle JS tilt effect on mousemove for modern feel.
───────────────────────────────────────────── */
(function initProjectCardTilt() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const tiltX  = dy * -4;   /* max 4deg */
      const tiltY  = dx *  4;

      card.style.transform = `translateY(-8px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
    });
  });
})();

/* ─────────────────────────────────────────────
   20. HERO VISUAL CARD TILT (mouse parallax)
───────────────────────────────────────────── */
(function initHeroCardParallax() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.hv-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -5;
      const tiltY = dx *  5;

      card.style.transition = 'transform 0.08s ease';
      card.style.transform  = `translateY(-6px) scale(1.01) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
      card.style.transform  = '';
    });
  });
})();

/* ─────────────────────────────────────────────
   21. FOOTER LINKS — SMOOTH SCROLL
───────────────────────────────────────────── */
document.querySelectorAll('.footer-links a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─────────────────────────────────────────────
   22. SECTION TAG GLITCH EFFECT
   Adds subtle flicker to .section-tag on scroll into view
───────────────────────────────────────────── */
(function initSectionTagGlitch() {
  if (prefersReducedMotion) return;

  const glitchObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.animation = 'none';
          /* Force reflow */
          void el.offsetWidth;
          el.style.animation = '';
          glitchObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.8 }
  );

  document.querySelectorAll('.section-tag').forEach((tag) => {
    glitchObserver.observe(tag);
  });
})();

/* ─────────────────────────────────────────────
   23. STAT NUMBER COUNT-UP ANIMATION
   Triggers when hero stats row enters viewport
───────────────────────────────────────────── */
(function initCountUp() {
  if (prefersReducedMotion) return;

  const statsRow = document.querySelector('.hero-stats-row');
  if (!statsRow) return;

  const statEls = statsRow.querySelectorAll('.hs-num');
  const targets = Array.from(statEls).map((el) => {
    const raw = el.textContent.replace(/\D/g, '');
    return { el, end: parseInt(raw, 10) || 0, suffix: el.textContent.replace(/\d/g, '') };
  });

  let animated = false;

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          targets.forEach(({ el, end, suffix }) => {
            let start     = 0;
            const dur     = 1200;
            const step    = 16;
            const steps   = Math.ceil(dur / step);
            const inc     = end / steps;
            let current   = 0;

            const timer = setInterval(() => {
              current += inc;
              if (current >= end) {
                current = end;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, step);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statsObserver.observe(statsRow);
})();

/* ─────────────────────────────────────────────
   24. SKILL CHIP HOVER SOUND (visual pulse only)
   Adds a pulse ring animation on chip hover
───────────────────────────────────────────── */
(function initSkillChipPulse() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.skill-chip').forEach((chip) => {
    chip.addEventListener('mouseenter', () => {
      chip.style.boxShadow = chip.classList.contains('web')
        ? '0 8px 24px var(--web-glow)'
        : chip.classList.contains('iot')
          ? '0 8px 24px var(--iot-glow)'
          : '0 8px 24px rgba(34,211,238,.15)';
    });
    chip.addEventListener('mouseleave', () => {
      chip.style.boxShadow = '';
    });
  });
})();

/* ─────────────────────────────────────────────
   25. CONTACT CARD ENTRANCE
   Staggered slide-in when contact section enters viewport
───────────────────────────────────────────── */
(function initContactReveal() {
  if (CSS.supports('animation-timeline', 'view()')) return; /* CSS handles it */

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-contact');
          contactObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  /* Inject show-contact CSS */
  if (!document.getElementById('contact-reveal-style')) {
    const style = document.createElement('style');
    style.id = 'contact-reveal-style';
    style.textContent = `
      .contact-card { opacity: 0; transform: translateX(-24px); transition: opacity 0.6s ease, transform 0.6s ease; }
      .contact-card.show-contact { opacity: 1; transform: translateX(0); }
    `;
    document.head.appendChild(style);
  }

  document.querySelectorAll('.contact-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
    contactObserver.observe(card);
  });
})();

/* ─────────────────────────────────────────────
   26. PROGRESS BAR ANIMATION (hero cards)
   Triggers the hv-progress-fill animation when cards
   scroll into view (for browsers without view-timeline)
───────────────────────────────────────────── */
(function initProgressBars() {
  if (CSS.supports('animation-timeline', 'view()')) return;

  const fills = document.querySelectorAll('.hv-progress-fill');
  if (!fills.length) return;

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          progressObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach((fill) => {
    fill.style.animationPlayState = 'paused';
    progressObserver.observe(fill);
  });
})();

/* ─────────────────────────────────────────────
   27. FLOATING BADGE PARALLAX (about section)
   Subtle vertical shift on scroll for depth effect
───────────────────────────────────────────── */
(function initBadgeParallax() {
  if (prefersReducedMotion) return;

  const badges = document.querySelectorAll('.photo-float-badge');
  if (!badges.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      badges.forEach((badge, i) => {
        const dir    = i % 2 === 0 ? 1 : -1;
        const offset = (scrollY * 0.03 * dir).toFixed(2);
        badge.style.transform = `translateY(${offset}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
})();

/* ─────────────────────────────────────────────
   28. KEYBOARD FOCUS TRAP — Modals
   Prevent Tab from leaving modal when open
───────────────────────────────────────────── */
(function initFocusTrap() {
  const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function trapFocus(container, e) {
    const focusable = Array.from(container.querySelectorAll(FOCUSABLE));
    if (!focusable.length) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  const certModal = document.getElementById('certModal');
  const lightbox  = document.getElementById('lightbox');

  document.addEventListener('keydown', (e) => {
    if (certModal && certModal.classList.contains('active')) {
      trapFocus(certModal, e);
    }
    if (lightbox && lightbox.classList.contains('show')) {
      trapFocus(lightbox, e);
    }
  });
})();

/* ─────────────────────────────────────────────
   29. ACTIVE NAV LINK INDICATOR STYLE
   Injects CSS for .nav-link.active state
───────────────────────────────────────────── */
(function injectActiveNavStyle() {
  if (document.getElementById('active-nav-style')) return;
  const style = document.createElement('style');
  style.id = 'active-nav-style';
  style.textContent = `
    .nav-link.active {
      color: var(--accent, #22d3ee) !important;
    }
    .nav-link.active::after {
      left: 16px !important;
      right: 16px !important;
    }
    .nav-link.active::before {
      transform: scaleX(1) !important;
    }
  `;
  document.head.appendChild(style);
})();

/* ─────────────────────────────────────────────
   30. PAGE LOAD ENTRANCE ANIMATION
   Animates hero text children on first load
───────────────────────────────────────────── */
(function initPageEntrance() {
  if (prefersReducedMotion) return;

  const heroText = document.querySelector('.hero-text');
  if (!heroText) return;

  const children = Array.from(heroText.children);
  children.forEach((child, i) => {
    child.style.opacity   = '0';
    child.style.transform = 'translateY(24px)';
    child.style.transition = `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s`;
  });

  requestAnimationFrame(() => {
    setTimeout(() => {
      children.forEach((child) => {
        child.style.opacity   = '1';
        child.style.transform = 'translateY(0)';
      });
    }, 80);
  });
})();

/* ─────────────────────────────────────────────
   31. THEME CSS VARIABLE BRIDGE
   When data-theme="light" is set on <html>,
   replicate the light-mode CSS variables for browsers
   that don't support :has() (e.g. older Firefox).
───────────────────────────────────────────── */
(function initThemeBridge() {
  function syncThemeVars(theme) {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--bg-void',       '#f0f4f8');
      root.style.setProperty('--bg-deep',       '#e8edf5');
      root.style.setProperty('--bg-dark',       '#dce4ef');
      root.style.setProperty('--bg-card',       '#ffffff');
      root.style.setProperty('--bg-glass',      'rgba(255,255,255,.85)');
      root.style.setProperty('--accent',        '#0891b2');
      root.style.setProperty('--accent-2',      '#0e7490');
      root.style.setProperty('--accent-3',      '#06b6d4');
      root.style.setProperty('--accent-glow',   'rgba(8,145,178,.2)');
      root.style.setProperty('--web-color',     '#16a34a');
      root.style.setProperty('--web-bg',        'rgba(22,163,74,.08)');
      root.style.setProperty('--web-border',    'rgba(22,163,74,.25)');
      root.style.setProperty('--iot-color',     '#ea580c');
      root.style.setProperty('--iot-bg',        'rgba(234,88,12,.08)');
      root.style.setProperty('--iot-border',    'rgba(234,88,12,.25)');
      root.style.setProperty('--text-primary',  '#0f172a');
      root.style.setProperty('--text-secondary','#475569');
      root.style.setProperty('--text-dim',      '#94a3b8');
      root.style.setProperty('--text-bright',   '#020617');
      root.style.setProperty('--border',        'rgba(8,145,178,.12)');
      root.style.setProperty('--border-strong', 'rgba(8,145,178,.28)');
      root.style.setProperty('--border-hover',  'rgba(8,145,178,.55)');
      root.style.setProperty('--shadow-card',   '0 4px 24px rgba(15,23,42,.1)');
      root.style.setProperty('--shadow-glow',   '0 0 30px rgba(8,145,178,.15)');
      root.style.setProperty('--shadow-deep',   '0 20px 60px rgba(15,23,42,.15)');
    } else {
      /* Reset to dark mode defaults (CSS variables reset) */
      const vars = [
        '--bg-void','--bg-deep','--bg-dark','--bg-card','--bg-glass',
        '--accent','--accent-2','--accent-3','--accent-glow',
        '--web-color','--web-bg','--web-border',
        '--iot-color','--iot-bg','--iot-border',
        '--text-primary','--text-secondary','--text-dim','--text-bright',
        '--border','--border-strong','--border-hover',
        '--shadow-card','--shadow-glow','--shadow-deep',
      ];
      vars.forEach((v) => root.style.removeProperty(v));
    }
  }

  /* Apply on theme changes */
  const origApplyTheme = applyTheme;
  window.__syncThemeVars = syncThemeVars;
  syncThemeVars(currentTheme);
})();

/* Patch applyTheme to also sync CSS vars */
const _applyThemeOrig = applyTheme;
function applyTheme(theme) {
  _applyThemeOrig(theme);
  if (window.__syncThemeVars) window.__syncThemeVars(theme);
}

/* Re-bind event with updated function */
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    /* Already handled above, but sync vars too */
    if (window.__syncThemeVars) window.__syncThemeVars(currentTheme);
  });
}

/* ─────────────────────────────────────────────
   32. INIT — Run everything on DOMContentLoaded
───────────────────────────────────────────── */
(function init() {
  /* Apply saved/detected theme & language */
  applyTheme(currentTheme);
  applyLang(currentLang);

  /* Start typing animation */
  if (typingEl && !prefersReducedMotion) {
    /* Short delay so page entrance animation plays first */
    setTimeout(() => {
      const words = typingWords[currentLang] || typingWords.en;
      typeEffect(words);
    }, 800);
  } else if (typingEl && prefersReducedMotion) {
    typingEl.textContent = (typingWords[currentLang] || typingWords.en)[0];
  }

  /* Set aria-expanded on hamburger */
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
})();