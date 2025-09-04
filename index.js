

//      interactive hamburger menu

function toggleMenu() {
    const sideBar = document.querySelector(".side-bar-container");
    const active = sideBar.classList.toggle("active");
    sideBar.style.display = active ? "flex" : "none";

}

document.querySelector(".ham-menu-left").addEventListener("click", () => {
    toggleMenu()});