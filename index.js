const intro = document.querySelector(".intro");
const video = intro.querySelector("video");

//END SECTION :

const section = document.querySelector("section");

//SCROLL MAGIC :

const controller = new ScrollMagic.Controller();

// SCENES
const scene = new ScrollMagic.Scene({
  duration: 9500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

// Video Animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000; // divided by 1000 bcoz we want in seconds
  // console.log(e);
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);

  video.currentTime = delay;
}, 41.7);

// opacity reducing of text.

let opace = 150;
let initialOpace = 150;

// document.addEventListener("scroll", (e) => {
//   opace--;
//   document.querySelector(".text").style.opacity = opace / 180;
//   document.querySelector(".text").style.fontSize = `${opace / 2}px`;
// });

var oldScrollY = window.scrollY;
window.onscroll = function (e) {
  if (oldScrollY < window.scrollY) {
    opace > 0 ? opace-- : null;
    document.querySelector(".text").style.opacity = opace / 150;
    document.querySelector(".text").style.fontSize = `${opace / 2}px`;
  } else {
    opace < initialOpace ? opace++ : null;
    document.querySelector(".text").style.opacity = opace / 150;
    document.querySelector(".text").style.fontSize = `${opace / 2}px`;
  }
  oldScrollY = window.scrollY;
};
