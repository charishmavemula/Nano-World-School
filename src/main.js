// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menu Overlay Toggle
const menuBtn = document.getElementById('menuBtn');
const hamburger = document.getElementById('hamburger');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent scrolling
}

function closeMenu() {
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // allow scrolling
}

if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (hamburger) hamburger.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

// Make closeMenu available globally for inline onclick in HTML
window.closeMenu = closeMenu;

// Intersection Observer for Scroll Animations
const observeElements = document.querySelectorAll('.fade-up');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observeElements.forEach(el => {
  observer.observe(el);
});

// Active Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') && link.getAttribute('href').includes(current) && current !== '') {
      link.classList.add('active');
    }
  });
});
