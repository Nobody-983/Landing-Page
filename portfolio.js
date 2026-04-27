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
