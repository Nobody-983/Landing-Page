const navbar = document.getElementById("navbar");

const navLinks = {
  home: homes,
  about: abouts,
  project: projects,
  contact: contacts,
};

const sections = document.querySelectorAll("header, section");

function updateNavbar(sectionId) {
  // Reset link colors
  Object.values(navLinks).forEach(link => {
    link.style.color = "black";
  });

  // Highlight active link
  if (navLinks[sectionId]) {
    navLinks[sectionId].style.color = "#94a3b8";
  }

  // Change navbar background
  navbar.classList.remove(
    "bg-slate-600",
    "bg-white",
    "bg-black",
    "bg-slate-800"
  );

  switch (sectionId) {
    case "home":
      navbar.classList.add("bg-slate-600");
      break;

    case "about":
      navbar.classList.add("bg-white");
      break;

    case "projects":
      navbar.classList.add("bg-black");
      break;

    case "contacts":
      navbar.classList.add("bg-slate-800");
      break;
  }
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateNavbar(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-40% 0px -40% 0px"
  }
);

sections.forEach(section => {
  if (navLinks[section.id]) {
    observer.observe(section);
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

