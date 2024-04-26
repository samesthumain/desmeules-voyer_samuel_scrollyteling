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

/*gsap.to('#chapitre1', {
    //opacity: '0%',
    //duration: 2,
    scrollTrigger: {
        scrub: true,
        pin:true,
        markers:true,
        start: 'top',
        end:'+=3000',
        trigger:'#chapitre1',
    }
});*/


/*gsap.timeline()
    .to('#chapitre1', {
    opacity: 1,
    //duration: 2,
    scrollTrigger: {
    pin:true,
    scrub:true,
    markers:true,
    start: 'top top',
    end:'bottom bottom',
    trigger:'#chapitre1',
    }
});*/


//chapitre 1
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=30000',
    trigger:'#chapitre1',
}})
    //intro
    .to(".num-chap-1", { duration: 1, text: 'Chapitre 1:', ease: "none", delay: 0.1 })
    .to(".nom-chap-1", { duration: 1, text: "Intrusion", ease: "none", delay: 0.1 })
    .to(".num-chap-1", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-1", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc1", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    //action
    //sprite cours
    .from(".ss-j-ch1", { x: "800%", ease: "power1.out", })

    //paroles
    .to(".ch1-line1", { text: "Ici Jeremiah,", ease: "none", delay: 0.1 })
    .to(".ch1-line2", { text: "23ieme escouade de reconnaissance", ease: "none" })

    .to(".ch1-line1", { duration: 0, text: "", ease: "none", delay: 0.1 })
    .to(".ch1-line2", { duration: 0, text: "", ease: "none" })

    .to(".ch1-line1", { duration: 1, text: "je suis le seul survivant", ease: "none" })
    .to(".ch1-line2", { duration: 1, text: " et je suis en danger", ease: "none" })

    .to(".ch1-line1", { duration: 0, text: "", ease: "none", delay: 0.1 })
    .to(".ch1-line2", { duration: 0, text: "", ease: "none" })

    .to(".ch1-line1", { duration: 1, text: "Ouvrez la porte", ease: "none" })
    .to(".ch1-line3", { duration: 0, opacity: 1, ease: "none" })
    .to(".ch1-line3", { duration: 0.01, scale: 1.2, ease: "none" })
    .to(".ch1-line3", { duration: 0.01, scale: 1, ease: "none" })
    .to(".ch1-line3", { duration: 0.01, scale: 1.2, ease: "none" })

    .to(".ch1-line1", { duration: 0, text: "", ease: "none", delay: 0.1 })
    .to(".ch1-line3", { duration: 0, text: "", ease: "none" })

    //robots
    .from(".ss-robot-1", { x: "800%", ease: "power1.out", })
    .from(".ss-robot-2", { x: "800%", ease: "power1.out", delay: -0.49 })
    .from(".ss-robot-3", { x: "800%", ease: "power1.out", delay: -0.48 })

    //entre en scene marco
    .from(".ss-m-ch1", { x: "-800%", ease: "none", })

    .to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-pre-saut", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { x: "500%", ease: "none", delay: 0.2 })
    .from(".marco-pre-saut", { duration: 0, opacity: 0, ease: "none", delay: -0.5 })
    .from(".marco-saut", { duration: 0, opacity: 1, ease: "none", })
    



//chapitre 2
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=3000',
    trigger:'#chapitre2',
}})
    .to(".ch2-img1", { duration: 0, opacity: 1, ease: "none"})
    .to(".num-chap-2", { duration: 1, text: 'Chapitre 2:', ease: "none", delay: 0.1 })
    .to(".nom-chap-2", { duration: 1, text: "Monika", ease: "none", delay: 0.1 })
    .to(".num-chap-2", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })


    .to(".ans-19", { duration: 1, text: "19 ans plus tôt", ease: "none" })



    //switch d'image
    .to(".ch2-img2", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img1", { duration: 1, opacity: 0, ease: "none"})
    
    .to(".ch2-img3", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img2", { duration: 1, opacity: 0, ease: "none"})
    
    .to(".ch2-img4", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img3", { duration: 1, opacity: 0, ease: "none"})
    
    .to(".ch2-img5", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img4", { duration: 1, opacity: 0, ease: "none"})

//chapitre 3
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=30000',
    trigger:'#chapitre3',
}})
    .to(".num-chap-3", { duration: 1, text: 'Chapitre 3:', ease: "none", delay: 0.1 })
    .to(".nom-chap-3", { duration: 1, text: "Emprisonnés", ease: "none", delay: 0.1 })
    .to(".num-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

//chapitre 4
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=30000',
    trigger:'#chapitre4',
}})
    .to(".num-chap-4", { duration: 1, text: 'Chapitre 4:', ease: "none", delay: 0.1 })
    .to(".nom-chap-4", { duration: 1, text: "", ease: "none", delay: 0.1 })
    .to(".num-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

//chapitre 5
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=30000',
    trigger:'#chapitre5',
}})
    .to(".num-chap-5", { duration: 1, text: 'Chapitre 5:', ease: "none", delay: 0.1 })
    .to(".nom-chap-5", { duration: 1, text: "Avant le combat", ease: "none", delay: 0.1 })
    .to(".num-chap-5", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-5", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc5", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

//chapitre 6
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=30000',
    trigger:'#chapitre6',
}})
    .to(".num-chap-6", { duration: 1, text: 'Chapitre 6:', ease: "none", delay: 0.1 })
    .to(".nom-chap-6", { duration: 1, text: "Relius", ease: "none", delay: 0.1 })
    .to(".num-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })