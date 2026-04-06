const homes = document.getElementById("homes")
const abouts = document.getElementById("abouts")
const projects = document.getElementById("projects")
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