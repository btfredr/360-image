/*
const imageArray = [
    `./images/chair/1.jpg`,
    `./images/chair/2.jpg`,
    `./images/chair/3.jpg`,
    `./images/chair/4.jpg`,
    `./images/chair/5.jpg`,
    `./images/chair/6.jpg`
];
*/

const imageArray = new Array();

imageArray[0] = new Image();
imageArray[0].src = './images/chair/1.jpg';

imageArray[1] = new Image();
imageArray[1].src = './images/chair/2.jpg';

imageArray[2] = new Image();
imageArray[2].src = './images/chair/3.jpg';

imageArray[3] = new Image();
imageArray[3].src = './images/chair/4.jpg';

imageArray[4] = new Image();
imageArray[4].src = './images/chair/5.jpg';

imageArray[5] = new Image();
imageArray[5].src = './images/chair/6.jpg';




// selecting the slider
let slider = document.getElementById("slider");
let images = document.querySelector(".images")


// adding event listener
slider.addEventListener("input", sliderChange);

function sliderChange() {
    for (var i = 0; i < imageArray.length; i++) {
        if (imageArray[i].src == img.src) {
            images.innerHTML = 
        }
    }
};

