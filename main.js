// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
  });
});

// Floating hearts
const heartsEl = document.getElementById('hearts');
const symbols  = ['♥', '♡', '❤', '✨', '💕'];

function spawnHeart() {
  if (!heartsEl) return;
  const el = document.createElement('div');
  el.className = 'heart';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.cssText = [
    `left:${Math.random() * 100}vw`,
    `animation-duration:${7 + Math.random() * 8}s`,
    `animation-delay:${Math.random() * 2}s`,
    `font-size:${0.6 + Math.random() * 0.8}rem`,
    `color:hsl(${340 + Math.random() * 30},68%,${58 + Math.random() * 18}%)`,
  ].join(';');
  heartsEl.appendChild(el);
  setTimeout(() => el.remove(), 16000);
}
setInterval(spawnHeart, 700);

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reasons li').forEach(el => observer.observe(el));

// Stagger card delays
document.querySelectorAll('.grid-3 .card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// Sketch View Toggle
function switchSketchView(view) {
  const svgView = document.getElementById('sketchSvgView');
  const imgView = document.getElementById('sketchImgView');
  const btnSvg  = document.getElementById('btnSvg');
  const btnImg  = document.getElementById('btnImg');
  if (!svgView || !imgView) return;

  if (view === 'svg') {
    svgView.style.display = 'block';
    imgView.style.display = 'none';
    btnSvg?.classList.add('active');
    btnImg?.classList.remove('active');
  } else {
    svgView.style.display = 'none';
    imgView.style.display = 'block';
    btnImg?.classList.add('active');
    btnSvg?.classList.remove('active');
  }
}
