/* ================= PAGE LOADER ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* ================= ELEMENT REFERENCES ================= */
const navbar = document.querySelector(".navbar");
const topBtn = document.getElementById("topBtn");
const themeBtn = document.getElementById("themeBtn");

/* ================= SCROLL EVENTS ================= */
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  /* NAVBAR SHADOW */
  if (navbar) {
    navbar.classList.toggle("scrolled", y > 10);
  }

  /* BACK TO TOP BUTTON */
  if (topBtn) {
    if (y > 250) {
      topBtn.classList.add("show");   // use CSS animation
    } else {
      topBtn.classList.remove("show");
    }
  }
});

/* ================= SCROLL TO TOP CLICK ================= */
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ================= DARK MODE WITH LOCAL STORAGE ================= */

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  if (themeBtn) themeBtn.textContent = "☀️";
}

// Toggle theme
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
  });
}

/* ================= JOIN EVENT BUTTON ================= */
const joinBtn = document.getElementById("joinBtn");

if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    alert("Redirecting to Events Page 🚀");
    window.location.href = "events.html";
  });
}

/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = parseInt(counter.dataset.target);
  let count = 0;

  const step = Math.max(1, Math.floor(target / 60));

  const update = () => {
    count += step;
    if (count >= target) {
      counter.textContent = target;
    } else {
      counter.textContent = count;
      requestAnimationFrame(update);
    }
  };

  update();
});
