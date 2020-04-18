window.addEventListener("load", sliderForPictures);
var slider = document.getElementById("slider-img");

var images = ["img/slider/alliance horse.jpg",
    "img/slider/alysrazor.png",
    "img/slider/ashes of alar.jpg",
    "img/slider/astral cloud serpent.jpg",
    "img/slider/blue proto drake.jpg",
    "img/slider/drake of the north wind.jpg",
    "img/slider/expansions.jpg",
    "img/slider/frost flying carpet.jpg",
    "img/slider/heavenly golden cloud serpent.jpg",
    "img/slider/orc on wolf.jpg",
    "img/slider/raven lord.jpg",
    "img/slider/save big.jpg",
    "img/slider/time lost proto drake.jpg"];
var index = 0;
var btnRight = document.getElementById("btnRight").addEventListener("click", changePicture);
var btnLeft = document.getElementById("btnLeft").addEventListener("click", previousPicture);

function sliderForPictures() {
    setInterval(changePicture, 4000);
}

function changePicture(status) {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slider.src = images[index];
}

function previousPicture() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    slider.src = images[index];
}