/* ================= PAGE LOADER ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* ================= NAVBAR SCROLL EFFECT ================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================= ACTIVE NAV LINK ================= */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* ================= JOIN EVENT ALERT ================= */
const joinBtn = document.getElementById("joinBtn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    alert("Redirecting to Events Page 🚀");
  });
}

/* ================= SCROLL TO TOP ================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ================= DARK MODE WITH LOCAL STORAGE ================= */
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeBtn.textContent = "☀️";
}

// Toggle theme
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  }
});

/* ================= FADE-IN ON SCROLL ================= */
const fadeElements = document.querySelectorAll(".fade-in-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach(el => observer.observe(el));

/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    if (count < target) {
      count++;
      counter.textContent = count;
      setTimeout(update, 30);
    }
  };
  update();
});
