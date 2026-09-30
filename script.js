document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(
  ".favorite-card, .track, .uni, .social-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 550, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealItems.forEach((item) => observer.observe(item));
