let images = ["portfolio-2.jpg", "header.png", "portfolio-3.jpg"];

let slider = document.querySelector("#slider");
let img = slider.querySelector("img");


let i = 0;
window.setInterval(function () {

    img.src = "img/" + images[i];

    if (i == 2) {
        i = 0;
    } else {
        i++;
    }
    
}, 1000);