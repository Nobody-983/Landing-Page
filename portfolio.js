const homes = document.getElementById("homes")
const abouts = document.getElementById("abouts")
const projects = document.getElementById("project")
const contacts = document.getElementById("contacts")
homes.addEventListener("click", () => {
    // ace.style.color("red")
    homes.style.color= "#94a3b8"
    abouts.style.color = "black"
    projects.style.color = "black"
    contacts.style.color = "black"

})
abouts.addEventListener("click", () => {
    // ace.style.color("red")
    abouts.style.color= "#94a3b8"
    homes.style.color = "black"
    projects.style.color = "black"
    contacts.style.color = "black"
})
projects.addEventListener("click", () => {
    projects.style.color= "#94a3b8"
    abouts.style.color = "black"
    homes.style.color = "black"
    contacts.style.color = "black"
})
contacts.addEventListener("click", () => {
    contacts.style.color= "#94a3b8"
    abouts.style.color = "black"
    projects.style.color = "black"
    homes.style.color = "black"
})


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
function api(){
    emailjs.init("");
};

const form = document.getElementById("contact-form");
const submit = document.getElementById("submit")
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const field = document.getElementById("field")
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    return field.textContent = "Input Fields"
  }
  
    try {
      const response = await emailjs.sendForm(
        "service_p4c7sy3",
        "template_t4l7xon",
        this
      );
field.textContent = "Thanks for contacting me"
      console.log("SUCCESS:", response.status, response.text);
      
      form.reset();

    } catch (error) {
      console.log("FAILED:", error);
field.textContent = "Message didnt go through"
      
    }
  });

// Handle All Live Preview Buttons
document.querySelectorAll('.preview-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Target elements *only* inside this specific button
    const btnText = this.querySelector('.preview-text');
    const iconContainer = this.querySelector('.preview-icon-container');
    const targetUrl = this.getAttribute('data-url');
    
    if (this.classList.contains('pointer-events-none')) return;

    // Enter loading state
    this.classList.add('pointer-events-none', 'opacity-80');
    btnText.textContent = 'Launching...';
    
    iconContainer.innerHTML = `
      <svg class="animate-spin h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;

    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');

      // Reset UI state for this button
      this.classList.remove('pointer-events-none', 'opacity-80');
      btnText.textContent = 'Live Preview';
      iconContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400">
          <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      `;
    }, 600); 
  });
});

// Handle All GitHub Repo Buttons
document.querySelectorAll('.github-btn').forEach(button => {
  button.addEventListener('click', function() {
    const targetUrl = this.getAttribute('data-url');
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  });
});