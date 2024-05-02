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
//window.addEventListener("scroll", function() {
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
    //markers:true,
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

    .to(".jeremiah-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-idle", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

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

    .to(".jeremiah-idle", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-pret", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    //robots
    .from(".ss-robot-1", { x: "800%", ease: "power1.out", })
    .from(".ss-robot-2", { x: "800%", ease: "power1.out", delay: -0.49 })
    .from(".ss-robot-3", { x: "800%", ease: "power1.out", delay: -0.48 })

    .to(".robot-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".robot-idle", { duration: 0, opacity: 1, ease: "none", })

    //entre en scene marco
    .from(".ss-m-ch1", { duration: 0, scaleX: -1, ease: "none", })
    .from(".ss-m-ch1", { x: "-800%", ease: "none", })

    .to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-pre-saut", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { x: "500%", y: "-50%", ease: "none", delay: 0.2 })
    .to(".ss-m-ch1", {duration: 0.2, y: "-20%", ease: "none", delay: -0.2 })
    //.to(".ss-m-ch1", { y: "-10%", ease: "none", delay: 0.1 })
    .to(".marco-pre-saut", { duration: 0, opacity: 0, ease: "none", delay: -0.5 })
    .to(".marco-saut", { duration: 0, opacity: 1, ease: "none", delay: -0.5 })

    .to(".marco-saut", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    .to(".marco-kick", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".robot-idle-2", { duration: 0, opacity: 0, ease: "none" })
    .to(".robot-revole-2", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-robot-2", { x: "800%", ease: "power1.out", })
    .to(".ss-m-ch1", { x: "900%", ease: "power1.out", delay: -0.5 })

    .to(".jeremiah-pret", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-dice", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    .to(".ss-dice-ch1", { x: "-19000%", ease: "none", })

    .to(".robot-idle-1", { duration: 0, opacity: 0, ease: "none", delay: -0.4})
    .to(".robot-revole-1", { duration: 0, opacity: 1, ease: "none", delay: -0.4 })

    .to(".ss-robot-1", { x: "800%", ease: "power1.out", delay: -0.4 })

    .to(".jeremiah-dice", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-course", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    .to(".ss-j-ch1", { duration: 0.2, x: "170%", ease: "none", })

    .to(".jeremiah-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-dice", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-dice-ch1", { x: "0%", ease: "none", })

    .to(".jeremiah-dice", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-pret", { duration: 0, opacity: 1, ease: "none", })

    .to(".robot-idle-3", { duration: 0, opacity: 0, ease: "none", delay: 0.1 })
    .to(".robot-shoot", { duration: 0, opacity: 1, ease: "none", })

    //tire
    .to(".tire-robot", { duration: 0, opacity: 1, ease: "none", })
    .to(".tire-robot", { duration: 0.2, x: "-2400%", y: "-600%", ease: "none", })
    .to(".tire-robot", { duration: 0, opacity: 0, ease: "none", })

    .to(".setting-ch1-debut", { duration: 0, opacity: 0, ease: "none", })
    .to(".setting-ch1-fin", { duration: 0, opacity: 1, ease: "none", })


    .to(".jeremiah-pret", { duration: 0, opacity: 0, ease: "none", delay: -0.1 })
    .to(".jeremiah-course", { duration: 0, scaleX: 1, opacity: 1, ease: "none", delay: -0.1 })

    .to(".ss-j-ch1", { duration: 0.2, x: "100%", y: "50%", ease: "none", delay: -0.1 })

    .to(".jeremiah-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".jeremiah-idle", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    .to(".robot-shoot", { duration: 0, opacity: 0, ease: "none" })
    .to(".robot-idle-3", { duration: 0, opacity: 1, ease: "none" })
    .to(".ss-robot-3", { duration: 0, scaleX: -1, ease: "none", })

    .to(".marco-kick", { duration: 0, opacity: 0, ease: "none", })
    .to(".ss-m-ch1", { duration: 0, scaleX: 1, ease: "none", })
    .to(".marco-course", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { duration: 0, y: "35%", ease: "none", })
    .to(".ss-m-ch1", { x: "600%", ease: "none", })

    .to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-tackle", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { duration: 0.2, x: "550%", ease: "none", })

    .to(".robot-idle-3", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    .to(".robot-revole-3", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ss-robot-3", { x: "-250%", ease: "none", delay: -0.2 })

    .to(".marco-tackle", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    .to(".marco-course", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ss-m-ch1", { x: "450%", ease: "none", delay: -0.2 })

    .to(".ss-robot-3", { rotate: "-80%", y: "30%", ease: "none", delay: -0.8 })

    .to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-idle", { duration: 0, opacity: 1, ease: "none", })

    .to(".robot-revole-3", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    .to(".robot-idle-3", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ch1-line4", { text: "Des intrus ont détruit la porte!", ease: "none", delay: 0.1 })
    .to(".ch1-line5", { text: "Gardes, attrapez-les!", ease: "none" })

    .to(".bg-noir-ch1", { opacity: 1, ease: "none"})

    .to(".ch1-line6", { text: "Jeremiah et son mystérieux sauveur furent capturés par les habitants de Vault Blank", ease: "none", delay: 0.1 })
    //.to(".ch1-line5", { text: "Gardes, attrapez-les!", ease: "none" })


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

    //.to(".ans-19", { duration: 1.5, text: "19 ans plus tôt", ease: "none", delay: -1.5 })

    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })


    .to(".ans-19", { transformOrigin: '50% 50%', duration: 1, text: "19 ans plus tôt", ease: "none" })



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
    end:'+=3000',
    trigger:'#chapitre3',
}})
    .to(".num-chap-3", { duration: 1, text: 'Chapitre 3:', ease: "none", delay: 0.1 })
    .to(".nom-chap-3", { duration: 1, text: "Emprisonnés", ease: "none", delay: 0.1 })
    .to(".num-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".setting-ch3-debut", { duration: 0, opacity: 0, ease: "none", delay: 1 })
    .to(".setting-ch3-fin", { duration: 0, opacity: 1, ease: "none", })

//chapitre 4
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=3000',
    trigger:'#chapitre4',
}})

    .to(".marco-idle", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-course", { duration: 0, opacity: 1, ease: "none", })
    .to(".jeremiah-course", { duration: 0, opacity: 1, ease: "none", })
    .to(".ss-mar-ch4", { x: "-300%", duration: 0, scaleX: -1, ease: "none", })
    .to(".ss-j-ch4", { x: "-300%", duration: 0, scaleX: -1, ease: "none", })

    .to(".num-chap-4", { duration: 1, text: 'Chapitre 4:', ease: "none", delay: 0.1 })
    .to(".nom-chap-4", { duration: 1, text: "L'armurie", ease: "none", delay: 0.1 })
    .to(".num-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".ss-mar-ch4", { x: "900%", ease: "none" })
    //.to(".ss-mon-ch4", { x: "800%", ease: "none", delay: -0.5 })
    .to(".ss-j-ch4", { x: "900%", ease: "none", delay: -0.5 })

    .to(".setting-ch4", { duration: 1.5, opacity: 1, ease: "none" })
    .to(".setting-ch4-glass-debut", { duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })
    
    .to(".parallax-ch4-lvl1", { duration: 1.5, opacity: 0, ease: "none" })
    .to(".parallax-ch4-lvl2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".parallax-ch4-lvl3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".hourglass", { transformOrigin: "50% 50%", duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })
    .to(".gorilla-float", { duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })


    gsap.to('.hourglass', { duration: 1.5, repeat: -1, rotate: 360, ease: "none", scrollTrigger: { markers:true, start: 'center center', end:'center center', trigger:'#chapitre4', } } );
    gsap.to('.gorilla-float', { duration: 1.5, repeat: -1, yoyo: true, y: "5%", ease: "power1.inOut", scrollTrigger: { markers:true, start: 'center center', end:'center center', trigger:'#chapitre4', } } );

//chapitre 5
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    markers:true,
    start: 'center center',
    end:'+=3000',
    trigger:'#chapitre5',
}})
    .to(".marco-idle", { duration: 0, opacity: 1, ease: "none"})
    .to(".jeremiah-assis", { duration: 0, opacity: 1, ease: "none"})
    .to(".gorilla-assis", { duration: 0, opacity: 1, scaleX: -1, ease: "none"})

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
    end:'+=3000',
    trigger:'#chapitre6',
}})
    .to(".ch6-img2", { duration: 0, opacity: 1, ease: "none" })

    .to(".num-chap-6", { duration: 1, text: 'Chapitre 6:', ease: "none", delay: 0.1 })
    .to(".nom-chap-6", { duration: 1, text: "Relius", ease: "none", delay: 0.1 })
    .to(".num-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".ch6-img1", { duration: 1.5, opacity: 0, ease: "none" })
    .to(".nom-chap-6", { duration: 1.5, opacity: 1, ease: "none" })