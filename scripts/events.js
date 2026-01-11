// ===============================
// EVENTS PAGE SCRIPT (FINAL)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // NAVBAR SCROLL SHADOW
  // -------------------------------
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

  // -------------------------------
  // DARK MODE TOGGLE + MEMORY (BUTTON)
  // -------------------------------
  const themeBtn = document.getElementById("themeBtn");

  // load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    if (themeBtn) themeBtn.textContent = "☀️";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      const isDark = document.body.classList.contains("dark-theme");

      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // -------------------------------
  // SEARCH FILTER
  // -------------------------------
  const searchInput = document.getElementById("searchInput");
  const eventItems = document.querySelectorAll(".event-item");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();

      eventItems.forEach((item) => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
      });
    });
  }

  // -------------------------------
  // CATEGORY FILTER BUTTONS
  // -------------------------------
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      eventItems.forEach((item) => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // -------------------------------
  // SHOW / HIDE PAST EVENTS (DEMO)
  // -------------------------------
  const togglePast = document.getElementById("togglePast");

  if (togglePast) {
    togglePast.addEventListener("change", () => {
      alert(
        togglePast.checked
          ? "Showing past events (demo only)"
          : "Hiding past events"
      );
    });
  }

  // -------------------------------
  // SAVE EVENT (LOCAL STORAGE)
  // -------------------------------
  const saveCheckboxes = document.querySelectorAll(".save-event");
  let savedEvents = JSON.parse(localStorage.getItem("savedEvents")) || [];

  saveCheckboxes.forEach((cb, index) => {
    if (savedEvents.includes(index)) cb.checked = true;

    cb.addEventListener("change", () => {
      if (cb.checked) {
        if (!savedEvents.includes(index)) savedEvents.push(index);
      } else {
        savedEvents = savedEvents.filter((i) => i !== index);
      }
      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    });
  });

  // -------------------------------
  // LOAD MORE (DEMO)
  // -------------------------------
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      alert("More events will be loaded here (demo feature).");
    });
  }

  // -------------------------------
  // MODAL FORM SUBMIT
  // -------------------------------
  const modalBtn = document.querySelector("#registerModal .btn-gradient");

  if (modalBtn) {
    modalBtn.addEventListener("click", () => {
      alert("Registration successful (demo).");
    });
  }
});
