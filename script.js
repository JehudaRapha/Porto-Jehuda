// =============================================
// SCROLL PROGRESS BAR
// =============================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  scrollProgress.style.width = `${Math.min(scrolled * 100, 100)}%`;
});

// =============================================
// NAVBAR — SCROLL BEHAVIOR
// =============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// =============================================
// NAVBAR — ACTIVE LINK ON SCROLL
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const updateActiveLink = () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
};

window.addEventListener('scroll', updateActiveLink, { passive: true });

// =============================================
// SMOOTH SCROLL
// =============================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      closeMobileMenu();
    }
  });
});

// =============================================
// HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function openMobileMenu() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('open');
  navOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
  navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

navOverlay.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

// =============================================
// SCROLL REVEAL (FADE-IN)
// =============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
  revealObserver.observe(el);
});

// =============================================
// CERT CARD REVEAL (separate observer for stagger)
// =============================================
const certObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        certObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
);

document.querySelectorAll('.cert-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.09}s`;
  card.style.transition = `opacity 0.6s ease ${i * 0.09}s, transform 0.6s ease ${i * 0.09}s, box-shadow 0.35s ease, border-color 0.35s ease`;
  certObserver.observe(card);
});

// =============================================
// TYPING ANIMATION
// =============================================
const typingEl = document.querySelector('.typing');
if (typingEl) {
  const words = ['Web Developer', 'IoT Engineer', 'AI Enthusiast', 'Tech Creator'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingPaused = false;

  function typeEffect() {
    if (typingPaused) return;

    const current = words[wordIndex];

    if (!isDeleting) {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        typingPaused = true;
        setTimeout(() => {
          typingPaused = false;
          setTimeout(typeEffect, 50);
        }, 1400);
        return;
      }
    } else {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 75);
  }

  typeEffect();
}

// =============================================
// BUTTON RIPPLE EFFECT
// =============================================
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const existing = btn.querySelector('.ripple');
    if (existing) existing.remove();

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();

    const circle = document.createElement('span');
    circle.className = 'ripple';
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  });
});

// =============================================
// CONTACT CARD REVEAL
// =============================================
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-contact');
        contactObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll('.contact-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.12}s`;
  contactObserver.observe(card);
});

// =============================================
// CERTIFICATE MODAL
// =============================================
(function () {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const closeBtn = document.getElementById('certModalClose');
  const backdrop = modal ? modal.querySelector('.cert-modal-backdrop') : null;

  if (!modal) return;

  function openCertModal(imgSrc, title) {
    modalImg.src = imgSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (modalImg) modalImg.src = '';
    }, 400);
  }

  document.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
      const imgSrc = card.dataset.img;
      const title = card.dataset.title || '';
      if (imgSrc) openCertModal(imgSrc, title);
    });
  });

  closeBtn.addEventListener('click', closeCertModal);
  if (backdrop) backdrop.addEventListener('click', closeCertModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCertModal();
    }
  });
})();

// =============================================
// PROJECT IMAGE LIGHTBOX (with gallery per group)
// =============================================
(function () {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbBackdrop = document.getElementById('lightboxBackdrop');

  if (!lightbox) return;

  let currentGroup = [];
  let currentIndex = 0;

  function openLightbox(images, startIndex) {
    currentGroup = images;
    currentIndex = startIndex;
    showImage();
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (lbImg) lbImg.src = '';
    }, 400);
  }

  function showImage() {
    lbImg.style.opacity = '0';
    lbImg.style.transform = 'scale(0.9)';

    setTimeout(() => {
      lbImg.src = currentGroup[currentIndex].src;
      lbImg.alt = currentGroup[currentIndex].alt;

      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';

      if (lbCounter) {
        lbCounter.textContent = `${currentIndex + 1} / ${currentGroup.length}`;
      }

      // Hide prev/next if single image
      if (lbPrev) lbPrev.style.display = currentGroup.length < 2 ? 'none' : 'flex';
      if (lbNext) lbNext.style.display = currentGroup.length < 2 ? 'none' : 'flex';
    }, 150);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
    showImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentGroup.length;
    showImage();
  }

  // Gather all clickable project images by their data-group
  document.querySelectorAll('.proj-img.clickable-img').forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const groupEl = img.closest('.project-imgs');
      const groupKey = groupEl ? groupEl.dataset.group : null;
      let groupImgs;

      if (groupKey) {
        groupImgs = Array.from(document.querySelectorAll(`.project-imgs[data-group="${groupKey}"] .proj-img.clickable-img`));
      } else {
        groupImgs = [img];
      }

      const idx = groupImgs.indexOf(img);
      openLightbox(groupImgs, idx >= 0 ? idx : 0);
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', prevImage);
  if (lbNext) lbNext.addEventListener('click', nextImage);

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );
  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  });
})();

// =============================================
// HV CARD STAGGERED ENTRANCE
// =============================================
(function () {
  const cards = document.querySelectorAll('.hv-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(30px)';
    card.style.transition = `opacity 0.6s ease ${0.3 + i * 0.12}s, transform 0.6s ease ${0.3 + i * 0.12}s`;

    // Trigger on page load (hero is always visible)
    requestAnimationFrame(() => {
      setTimeout(
        () => {
          card.style.opacity = '1';
          card.style.transform = 'translateX(0)';
        },
        200 + i * 120,
      );
    });
  });
})();

// =============================================
// PROJECT CARD HOVER (extra polish)
// =============================================
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
