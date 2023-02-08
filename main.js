const optionsMenu = document.querySelectorAll(".menu-nav div")
const aside = document.querySelector("aside")
const logoVet = document.querySelector(".logo-vet")
const spansSidebar = document.querySelectorAll(".menu-nav div span")
const imgAvatar = document.querySelector(".logout img")
const informationUser = document.querySelector(".information-user")

logoVet.style.display = "none"
optionsMenu.forEach((option) => {
    option.addEventListener("click", openSidebar)
})

function openSidebar() {
    aside.style.width = aside.style.width === "250px" ? "78px" : "250px"
    
    logoVet.style.display = logoVet.style.display === "none" ? "block" : 'none'
    spansSidebar.forEach(span => {
        span.classList.toggle("invisible")
    })
    imgAvatar.classList.toggle("invisible")
    informationUser.classList.toggle("invisible")
}