let side = document.getElementById("side")
let content = document.getElementById("content")

side.addEventListener("click", () => {
    content.classList.toggle("hidden")
})
// Add 'opacity-0 translate-y-10' to your HTML elements via Tailwind
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));