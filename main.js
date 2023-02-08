const menuVetor = document.querySelector(".menu")
const divsNav = document.querySelectorAll(".menu-nav div")
const aside = document.querySelector("aside")
const logoVet = document.querySelector(".logo-vet")
const spansSidebar = document.querySelectorAll(".menu-nav div span")

const informationUser = document.querySelector(".information-user");

let isSidebarOpen = false;
menuVetor.addEventListener("click", openSidebar)

function openSidebar() {
    aside.style.width = aside.style.width === "250px" ? "78px" : "250px"
    isSidebarOpen = !isSidebarOpen
        
    logoVet.classList.toggle("invisible")
    spansSidebar.forEach(span => {
        span.classList.toggle("invisible")
    })
    
    informationUser.classList.toggle("invisible")
    if (!informationUser.className.includes("invisible")) {
        informationUser.style.display = "flex"
    } else {
        informationUser.style.display = "none"
    }
}