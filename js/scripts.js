// ─── UCE Landing · scripts.js ───────────────────

const THEME_KEY = 'uce-theme';

function getSavedTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Ignore storage failures and still allow in-session toggling.
  }
}

function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function applyTheme(theme, rootEl, toggleEl) {
  rootEl.setAttribute('data-theme', theme);

  if (!toggleEl) return;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  toggleEl.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  toggleEl.setAttribute('aria-pressed', String(theme === 'light'));
}

function initializeThemeToggle() {
  const rootEl = document.documentElement;
  const toggleEl = document.getElementById('themeToggle');
  const initialTheme = getSavedTheme() || getSystemTheme();

  applyTheme(initialTheme, rootEl, toggleEl);

  if (!toggleEl) return;
  toggleEl.addEventListener('click', () => {
    const currentTheme = rootEl.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, rootEl, toggleEl);
    saveTheme(nextTheme);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThemeToggle);
} else {
  initializeThemeToggle();
}

const htmlEl = document.documentElement;

function getSavedTheme() {
  const savedTheme = window.localStorage.getItem(THEME_KEY);
  return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : null;
}

function applyTheme(theme, rootEl = htmlEl, toggleEl = document.getElementById('themeToggle')) {
  rootEl.setAttribute('data-theme', theme);

  if (!toggleEl) return;
  toggleEl.setAttribute('title', 'Click to toggle theme. Double-click or long-press for Auto mode.');
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  toggleEl.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  toggleEl.setAttribute('aria-pressed', String(theme === 'light'));
  const label = toggleEl.querySelector('.theme-toggle-label');
  if (label) label.textContent = nextTheme === 'light' ? 'Light mode' : 'Dark mode';
}

function initializeThemeToggle() {
  const rootEl = document.documentElement;
  const toggleEl = document.getElementById('themeToggle');
  const mq = window.matchMedia('(prefers-color-scheme: light)');
  const getSystemTheme = () => (mq.matches ? 'light' : 'dark');

  const savedTheme = getSavedTheme();
  applyTheme(savedTheme || getSystemTheme(), rootEl, toggleEl);

  const handleSystemThemeChange = () => {
    if (!getSavedTheme()) applyTheme(getSystemTheme(), rootEl, toggleEl);
  };

  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', handleSystemThemeChange);
  else if (typeof mq.addListener === 'function') mq.addListener(handleSystemThemeChange);

  if (!toggleEl) return;

  const clearOverride = () => {
    window.localStorage.removeItem(THEME_KEY);
    applyTheme(getSystemTheme(), rootEl, toggleEl);
  };

  let longPressTimer = null;
  let skipNextClick = false;
  const LONG_PRESS_MS = 700;

  const cancelLongPress = () => {
    if (!longPressTimer) return;
    window.clearTimeout(longPressTimer);
    longPressTimer = null;
  };

  toggleEl.addEventListener('pointerdown', () => {
    cancelLongPress();
    longPressTimer = window.setTimeout(() => {
      skipNextClick = true;
      clearOverride();
    }, LONG_PRESS_MS);
  });

  toggleEl.addEventListener('pointerup', cancelLongPress);
  toggleEl.addEventListener('pointerleave', cancelLongPress);
  toggleEl.addEventListener('pointercancel', cancelLongPress);
  toggleEl.addEventListener('dblclick', (e) => {
    e.preventDefault();
    clearOverride();
  });

  toggleEl.addEventListener('click', () => {
    if (skipNextClick) {
      skipNextClick = false;
      return;
    }
    const currentTheme = rootEl.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, rootEl, toggleEl);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  });
}

initializeThemeToggle();

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
