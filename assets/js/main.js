// === Inisialisasi AOS (Animate On Scroll) ===
AOS.init({
  duration: 1000,
  once: true, // animasi hanya jalan sekali
  easing: 'ease-in-out'
});

// === DARK MODE TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Cek mode tersimpan di localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

// Ganti tema saat tombol ditekan
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// === SCROLL NAVBAR EFFECT (opsional biar elegan) ===
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg', 'bg-dark');
  } else {
    navbar.classList.remove('shadow-lg', 'bg-dark');
  }
});
