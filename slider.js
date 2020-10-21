// selecting HTML elements
const sliderElem = document.getElementById("slider");
const chairElem = document.getElementById("chair");

// putting images into an array
const images = [
    "./images/chair/1.jpg",
    "./images/chair/2.jpg",
    "./images/chair/3.jpg",
    "./images/chair/4.jpg",
    "./images/chair/5.jpg",
    "./images/chair/6.jpg",
];

// adding event listener to slider to change the current image as you move it
sliderElem.addEventListener("input", function (event) {
    // logging the current value of the image
    console.log(event.currentTarget.value);

    // saving current value to a variable
    const index = event.currentTarget.value;

    // logging and saving current index value
    console.log(images[index]);
    const newSrc = images[index];

    // outputting that value inside chair element depending on where the slider is
    chairElem.src = newSrc;


});