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
};

// filterObjects("all");

// function filterObjects(c){
//     var x, i;
//     x = document.getElementsByClassName("proj-object");
//     if (c == "all") c="";
//     for (i = 0; i < x.length; i++) {
//         removeClass(x[i], "show");
//         if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//     }
// }

// function addClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// function removeClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i=0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
    
//     element.className = arr1.join(" ");
// }

// var filterButtons = document.getElementById("filter-buttons");
// var btns = filterButtons.getElementsByClassName("filter-btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].ckassName.replace(" active", "");
//         this.className +- " active";
//     });

// }

new TypeIt(".multipleStrings", {
    strings: ["I create UI/UX solutions", "for everyday problems"],
    speed: 50,
    waitUntilVisible: true,
  }).go();