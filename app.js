const nav = document.querySelector(".nav")
const showMenu = document.querySelector(".show-menu")
const closeMenu = document.querySelector(".close-menu")
const sideLinks = document.querySelectorAll(".js-link")
const date = document.querySelector(".date")

showMenu.addEventListener("click", () => {
    nav.classList.add("show-content")
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("show-content")
})

sideLinks.forEach(link => {
    link.addEventListener("click",()  => {
        nav.classList.remove("show-content")
    })
})

let currentYear = new Date().getFullYear()

date.textContent = currentYear