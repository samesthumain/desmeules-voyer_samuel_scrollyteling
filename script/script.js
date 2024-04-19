//variables et constantes
const body = document.querySelector("body");

//appel à l'action
gsap.fromTo('.appelScroll', {scaleY: 1}, {scaleY: 3, repeat:-1, yoyo:true, ease:"none", duration:1.3});

gsap.fromTo('.appelPoint', {y: "-200%"}, {y: "200%", repeat:-1, ease:"power1.out", duration:1});

gsap.fromTo('.vaisseau', {x: "0%", y: "200%", scale: 1.5}, {x: "700%", y: "-100%", scale: 0.5, ease:"none", duration:80});

//
window.addEventListener("scroll", () => {
    body.classList.add("is-scrolling");
    clearTimeout(timer);
    setTimeout(function() {
        body.classList.remove("is-scrolling");
      }, 1000);

})
