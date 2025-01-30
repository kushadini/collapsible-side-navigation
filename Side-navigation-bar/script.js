const sideBar = document.querySelector("#side-bar");
const arrow = document.querySelector("#arrow");
const navTitle = document.querySelectorAll(".nav-title")

arrow.addEventListener('click', ()=>{
    sideBar.classList.toggle("side-bar-close");
    setTimeout(() => {
        navTitle.forEach(title => {
            title.classList.toggle("collapsed-nav-title");
        });
    }, sideBar.classList.contains("side-bar-close") ? 0 : 200);
    arrow.classList.toggle("rotate-arrow")
})