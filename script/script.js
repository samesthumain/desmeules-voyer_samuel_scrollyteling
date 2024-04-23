//importer les plugins
gsap.registerPlugin(ScrollTrigger,TextPlugin)

//variables et constantes
const body = document.querySelector("body");

//appel à l'action
gsap.timeline()
    .to(".appelScroll", { duration: 2, text: "Scrollez vers le bas.", ease: "none", delay: 0.1 })
    .fromTo('.appelScroll', {scaleY: 1}, {scaleY: 3, repeat:-1, yoyo:true, ease:"none", duration:1.3});

gsap.fromTo('.appelPoint', {y: "-200%"}, {y: "200%", repeat:-1, ease:"power1.out", duration:1});

gsap.fromTo('.vaisseau', {x: "0%", y: "200%", scale: 1.5}, {x: "700%", y: "-100%", scale: 0.5, ease:"none", duration:80});

//timer scroll
//window.addEventListener("scroll", () => {
    //body.classList.add("is-scrolling");
        //clearTimeout(timer);
    //let timer = setTimeout(function() {
        //body.classList.remove("is-scrolling");
      //}, 100);

//})

gsap.to('#chapitre1', {
    opacity: '0%',
    duration: 2,
    scrollTrigger: {
    pin:true,
    markers:true,
    start: '50 top',
    end:'bottom bottom',
    trigger:'.background-chapitre-1',
    }
  });

//titres chapitre
gsap.timeline()
    .to(".num-chap-1", { duration: 1, text: 'Chapitre 1:', ease: "none", delay: 0.1 })
    .to(".nom-chap-1", { duration: 1, text: "Intrusion", ease: "none", delay: 0.1 })


gsap.timeline()
    .to(".num-chap-2", { duration: 1, text: 'Chapitre 2:', ease: "none", delay: 0.1 })
    .to(".nom-chap-2", { duration: 1, text: "Monika", ease: "none", delay: 0.1 })