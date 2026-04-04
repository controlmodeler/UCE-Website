// ─── UCE Landing · scripts.js ───────────────────

const THEME_KEY = 'uce-theme';
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);

  if (!themeToggle) return;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  const label = themeToggle.querySelector('.theme-toggle-label');
  if (label) label.textContent = nextTheme === 'light' ? 'Light mode' : 'Dark mode';
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  });
}

// Scroll-triggered reveals
const revealEls = document.querySelectorAll(
  '.problem-card, .pipeline-step, .output-card, .audience-card, .provenance-strip, .position-desc, .audience-desc, .beta-title, .beta-desc, .beta-form, .quad-wrap'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp .55s ease forwards';
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(14px)';
      // trigger reflow then animate
      void entry.target.offsetHeight;
      entry.target.style.opacity = '';
      entry.target.style.transform = '';
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = `opacity .55s ease ${i * 0.04}s, transform .55s ease ${i * 0.04}s`;
  observer.observe(el);
});

// Stagger children in grids
document.querySelectorAll('.problem-grid, .output-grid, .audience-grid').forEach(grid => {
  const children = grid.querySelectorAll(':scope > *');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.06}s`;
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

// Beta form
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('betaForm');
  const confirm = document.getElementById('betaConfirm');
  form.style.display = 'none';
  confirm.style.display = 'block';
  confirm.style.animation = 'fadeUp .4s ease forwards';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Terminal typing effect
const termLines = document.querySelectorAll('.term-line');
termLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transition = `opacity .15s ease`;
  setTimeout(() => {
    line.style.opacity = '1';
  }, 800 + i * 90);
});
