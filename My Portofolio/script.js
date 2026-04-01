// =============================================
// SMOOTH SCROLL
// =============================================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// =============================================
// SCROLL REVEAL (FADE-IN + CARD)
// =============================================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-in, .card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});

// =============================================
// NAVBAR — ACTIVE LINK ON SCROLL
// =============================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// =============================================
// NAVBAR — BLUR INTENSITY ON SCROLL
// =============================================
const navbar = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    navbar.style.backdropFilter = 'blur(18px)';
  } else {
    navbar.style.background = 'rgba(15, 23, 42, 0.5)';
    navbar.style.backdropFilter = 'blur(12px)';
  }
});

// =============================================
// TYPING ANIMATION
// =============================================
const typingTarget = document.querySelector('.typing');
const words = ['Web Developer', 'IoT Enthusiast', 'Tech Creator'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];

  if (!isDeleting) {
    typingTarget.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingTarget.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 45 : 80);
}

typeEffect();

// =============================================
// SCROLL PROGRESS BAR
// =============================================
const progressBar = document.createElement('div');
Object.assign(progressBar.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '2px',
  background: '#38bdf8',
  zIndex: '2000',
  width: '0%',
  opacity: '0.7',
});
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progressBar.style.width = scrolled * 100 + '%';
});

// =============================================
// BUTTON RIPPLE EFFECT
// =============================================
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const existing = btn.querySelector('.ripple');
    if (existing) existing.remove();

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - diameter / 2}px`;
    circle.style.top  = `${e.clientY - btn.offsetTop  - diameter / 2}px`;
    btn.appendChild(circle);
  });
});

// =============================================
// CARD HOVER (SMOOTH PREMIUM)
// =============================================
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// =============================================
// CONTACT CARDS — FADE-IN + HOVER
// =============================================
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show-contact');
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.contact-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
  contactObserver.observe(card);

  card.addEventListener('mousedown',  () => { card.style.transform = 'scale(0.97) translateY(-3px)'; });
  card.addEventListener('mouseup',    () => { card.style.transform = 'scale(1) translateY(0)'; });
  card.addEventListener('mouseleave', () => { card.style.transform = 'scale(1) translateY(0)'; });
});

// =============================================
// LIGHTBOX
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.querySelector('.close-btn');

  document.querySelectorAll('.image-container img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
});