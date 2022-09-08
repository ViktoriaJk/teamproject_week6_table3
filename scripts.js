/* Logo letters animations' restart */


var asterisk = document.getElementById("star");
var logo = document.querySelectorAll(".letter-1, .letter-2, .letter-3, .letter-4, .letter-5, .letter-6, .letter-7, .letter-8, .letter-9");

asterisk.addEventListener("mouseenter", callAnimation);

var allowed = true;

function callAnimation() {
    if (allowed == true) {
        for (var i = 0; i < logo.length; i++) {
            logo[i].style.animation = "none";
        }

        setTimeout(function () {
            for (var i = 0; i < logo.length; i++) {
                logo[i].style.animation = "";
            }
        }, 50);

        allowed = false;
        setTimeout(function () {
            allowed = true;
        }, 2500);
    }
}



/* Luxy initialization */

luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
});



/* Mouse moving background */

const bg = document.querySelector(".img-div");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / windowWidth / 3;
    const mouseY = e.clientY / windowHeight / 3;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});



/* Audio player button */

var myAudio = document.getElementById("music-button");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}



/* Image randomizer */

var images = [
    "images/theRaelettes_1.jpg",
    "images/theRaelettes_2.jpg",
    "images/theRaelettes_3.jpg",
    "images/theRaelettes_4.jpg",
];
var longitut = images.length;
var num = Math.floor(Math.random() * longitut);
var foto = images[num];
foto = foto.toString();

document.getElementById("img-div").style.backgroundImage = "url('" + foto + "')";
