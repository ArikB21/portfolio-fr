const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

let links = document.querySelectorAll(".nav-menu a");
let bodyId = document.querySelector("body").id;

for(let link of links) {
    if(link.dataset.active == bodyId) {
        link.classList.add("active");
    }
}