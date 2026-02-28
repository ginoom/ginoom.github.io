// ===== 3D Card Tilt Effect =====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const glow = card.querySelector(".glow");

    if (!glow) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midW = rect.width / 2;
      const midH = rect.height / 2;

      const angleY = ((x - midW) / midW) * 12;
      const angleX = -((y - midH) / midH) * 12;

      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(184,196,211,0.6), transparent)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
      glow.style.background = "";
    });
  });

  // ===== Modal Contact =====
  const btnContact = document.getElementById("btn-contact");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

  if (btnContact && modalOverlay) {
    btnContact.addEventListener("click", (e) => {
      e.stopPropagation();
      modalOverlay.classList.add("show");
    });

    modalClose?.addEventListener("click", () => {
      modalOverlay.classList.remove("show");
    });

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("show");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("show")) {
        modalOverlay.classList.remove("show");
      }
    });
  }
});

