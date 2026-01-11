/* ================= PAGE LOADED ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ================= THEME TOGGLE ================= */

  const themeBtn = document.getElementById("themeToggleBtn");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (themeBtn) themeBtn.textContent = "☀️";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      body.classList.toggle("dark-theme");

      const isDark = body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  /* ================= FILTER BUTTONS ================= */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Active button UI
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
          item.classList.remove("fade-out");
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  /* ================= LIGHTBOX MODAL ================= */

  const openButtons = document.querySelectorAll(".gallery-open-btn");

  // Create modal dynamically
  const modal = document.createElement("div");
  modal.className = "gallery-lightbox";
  modal.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close image">✕</button>
      <img class="lightbox-img" src="" alt="">
      <div class="lightbox-caption">
        <h4></h4>
        <p></p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector(".lightbox-img");
  const modalTitle = modal.querySelector(".lightbox-caption h4");
  const modalDesc = modal.querySelector(".lightbox-caption p");
  const closeBtn = modal.querySelector(".lightbox-close");
  const backdrop = modal.querySelector(".lightbox-backdrop");

  function openLightbox(btn) {
    modalImg.src = btn.dataset.img;
    modalTitle.textContent = btn.dataset.title || "";
    modalDesc.textContent = btn.dataset.desc || "";
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("show");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => openLightbox(btn));
  });

  closeBtn.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeLightbox();
    }
  });

});
