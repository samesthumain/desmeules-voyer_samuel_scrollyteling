//importer les plugins
gsap.registerPlugin(ScrollTrigger,TextPlugin,MotionPathPlugin,MorphSVGPlugin,DrawSVGPlugin)

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

    .to(".marco-course", { duration: 0, opacity: 1, ease: "none", })
    .to(".marco-idle", { duration: 0, opacity: 0, ease: "none", })

    //intro
    .to(".num-chap-1", { duration: 1, text: 'Chapitre 1:', ease: "none", delay: 0.1 })
    .to(".nom-chap-1", { duration: 1, text: "Intrusion", ease: "none", delay: 0.1 })
    .to(".num-chap-1", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-1", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc1", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    //action
    //sprite cours
    .from(".ss-j-ch1", { x: "800%", ease: "power1.out", })

    //.to(".ss-j-ch1", { duration: 0, scaleX: -1, animationPlayState: "paused" , backgroundPosition: "-1200% 0%", ease: "none" })
    .to(".ss-j-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-900% 0%", ease: "none" })
    //.to(".ss-j-ch1", { duration: 0, backgroundPosition: "600% 0%" })
    //.to(".jeremiah-idle", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

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


    .to(".ss-j-ch1", { duration: 0, scaleX: -1, backgroundPosition: "-1100% 0%", ease: "none" })
    //.to(".jeremiah-idle", { duration: 0, opacity: 0, ease: "none", })
    .to(".ss-dice-ch1", { duration: 0, opacity: 1, ease: "none", })

    //robots
    .from(".ss-robot-1", { x: "800%", ease: "power1.out", })
    .from(".ss-robot-2", { x: "800%", ease: "power1.out", delay: -0.49 })
    .from(".ss-robot-3", { x: "800%", ease: "power1.out", delay: -0.48 })


    .to(".spritesheet-robot", { duration: 0, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-800% 0%", ease: "none" })
    //.to(".robot-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".robot-idle", { duration: 0, opacity: 1, ease: "none", })

    //entre en scene marco
    .from(".ss-m-ch1", { duration: 0, scaleX: -1, ease: "none", })
    .from(".ss-m-ch1", { x: "-800%", ease: "none", })

    .to(".ss-m-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-1000% 0%", ease: "none" })
    //.to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".marco-pre-saut", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { x: "500%", y: "-50%", ease: "none", delay: 0.2 })
    .to(".ss-m-ch1", {duration: 0.2, y: "-20%", ease: "none", delay: -0.2 })
    //.to(".ss-m-ch1", { y: "-10%", ease: "none", delay: 0.1 })

    .to(".ss-m-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-1100% 0%", ease: "none", delay: -0.5 })
    //.to(".marco-pre-saut", { duration: 0, opacity: 0, ease: "none", delay: -0.5 })
    //.to(".marco-saut", { duration: 0, opacity: 1, ease: "none", delay: -0.5 })

    .to(".ss-m-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-900% 0%", ease: "none", delay: -0.2 })
    //.to(".marco-saut", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    //.to(".marco-kick", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })


    .to(".ss-robot-2", { duration: 0, backgroundPosition: "-900% 0%", ease: "none" })
    //.to(".robot-idle-2", { duration: 0, opacity: 0, ease: "none" })
    //.to(".robot-revole-2", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-robot-2", { x: "800%", ease: "power1.out", })
    .to(".ss-m-ch1", { x: "900%", ease: "power1.out", delay: -0.5 })


    .to(".ss-j-ch1", { duration: 0, scaleX: -1, backgroundPosition: "-800% 0%", ease: "none" })
    //.to(".jeremiah-pret", { duration: 0, opacity: 0, ease: "none", })
    //.to(".jeremiah-dice", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    .to(".ss-dice-ch1", { x: "-19000%", ease: "none", })


    .to(".ss-robot-1", { duration: 0, backgroundPosition: "-900% 0%", ease: "none", delay: -0.4 })
    //.to(".robot-idle-1", { duration: 0, opacity: 0, ease: "none", delay: -0.4})
    //.to(".robot-revole-1", { duration: 0, opacity: 1, ease: "none", delay: -0.4 })

    .to(".ss-robot-1", { x: "800%", ease: "power1.out", delay: -0.4 })


    .to(".ss-j-ch1", { duration: 0, scaleX: -1, animationIterationCount: "infinite", animationDuration: 0.8 , backgroundPosition: "-900% 0%", ease: "none" })
    //.to(".jeremiah-dice", { duration: 0, opacity: 0, ease: "none", })
    //.to(".jeremiah-course", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })

    .to(".ss-j-ch1", { duration: 0.2, x: "170%", ease: "none", })


    .to(".ss-j-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-800% 0%", ease: "none" })
    //.to(".jeremiah-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".jeremiah-dice", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-dice-ch1", { x: "0%", ease: "none", })


    .to(".ss-j-ch1", { duration: 0, scaleX: -1, backgroundPosition: "-1100% 0%", ease: "none" })
    //.to(".jeremiah-dice", { duration: 0, opacity: 0, ease: "none", })
    //.to(".jeremiah-pret", { duration: 0, opacity: 1, ease: "none", })


    .to(".ss-robot-3", { duration: 0, backgroundPosition: "-1000% 0%", ease: "none", delay: 0.1 })
    //.to(".robot-idle-3", { duration: 0, opacity: 0, ease: "none", delay: 0.1 })
    //.to(".robot-shoot", { duration: 0, opacity: 1, ease: "none", })

    //tire
    .to(".tire-robot", { duration: 0, opacity: 1, ease: "none", })
    .to(".tire-robot", { duration: 0.2, x: "-2400%", y: "-600%", ease: "none", })
    .to(".tire-robot", { duration: 0, opacity: 0, ease: "none", })

    .to(".setting-ch1-debut", { duration: 0, opacity: 0, ease: "none", })
    .to(".explosion-ch1", { duration: 0, opacity: 1, ease: "none", })
    .to(".setting-ch1-fin", { duration: 0, opacity: 1, ease: "none", })


    .to(".ss-j-ch1", { duration: 0, scaleX: 1, animationIterationCount: "infinite", animationDuration: 0.8 , backgroundPosition: "-900% 0%", ease: "none", delay: -0.1 })
    .to(".ss-dice-ch1", { duration: 0, opacity: 0, ease: "none", delay: -0.1 })

    .to(".ss-j-ch1", { duration: 0.2, x: "100%", y: "50%", ease: "none", delay: -0.1 })


    .to(".explosion-ch1", { duration: 0.1, scale: 1, ease: "none", delay: -0.1 })
    .to(".explosion-ch1", { duration: 0, opacity: 0, ease: "none", })
    .to(".ss-j-ch1", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0 , backgroundPosition: "-900% 0%", ease: "none" })
    //.to(".jeremiah-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".jeremiah-idle", { duration: 0, scaleX: -1, opacity: 1, ease: "none", })


    .to(".ss-robot-3", { duration: 0, scaleX: -1, backgroundPosition: "-800% 0%", ease: "none", delay: 0.1 })
    //.to(".robot-shoot", { duration: 0, opacity: 0, ease: "none" })
    //.to(".robot-idle-3", { duration: 0, opacity: 1, ease: "none" })
    //.to(".ss-robot-3", { duration: 0, scaleX: -1, ease: "none", })

    .to(".ss-m-ch1", { duration: 0, scaleX: 1, animationIterationCount: "infinite", animationDuration: 0.8 , backgroundPosition: "-900% 0%", ease: "none", delay: -0.2 })
    //.to(".marco-kick", { duration: 0, opacity: 0, ease: "none", })
    .to(".ss-m-ch1", { duration: 0, scaleX: 1, ease: "none", })
    //.to(".marco-course", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { duration: 0, y: "35%", ease: "none", })
    .to(".ss-m-ch1", { x: "600%", ease: "none", })

    .to(".ss-m-ch1", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-1200% 0%", ease: "none" })
    //.to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".marco-tackle", { duration: 0, opacity: 1, ease: "none", })

    .to(".ss-m-ch1", { duration: 0.2, x: "550%", ease: "none", })


    .to(".ss-robot-3", { duration: 0, scaleX: -1, backgroundPosition: "-900% 0%", ease: "none", delay: -0.2 })
    //.to(".robot-idle-3", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    //.to(".robot-revole-3", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ss-robot-3", { x: "-250%", ease: "none", delay: -0.2 })

    .to(".ss-m-ch1", { duration: 0, scaleX: 1, animationIterationCount: "infinite", animationDuration: 0.8 , backgroundPosition: "-1200% 0%", ease: "none" })
    //.to(".marco-tackle", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    //.to(".marco-course", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ss-m-ch1", { x: "450%", ease: "none", delay: -0.2 })

    .to(".ss-robot-3", { rotate: "-80%", y: "30%", ease: "none", delay: -0.8 })

    .to(".ss-m-ch1", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    //.to(".marco-course", { duration: 0, opacity: 0, ease: "none", })
    //.to(".marco-idle", { duration: 0, opacity: 1, ease: "none", })


    .to(".ss-robot-3", { duration: 0, backgroundPosition: "-800% 0%", ease: "none", delay: -0.3 })
    //.to(".robot-revole-3", { duration: 0, opacity: 0, ease: "none", delay: -0.2 })
    //.to(".robot-idle-3", { duration: 0, opacity: 1, ease: "none", delay: -0.2 })

    .to(".ch1-line4", { text: "Des intrus ont détruit la porte!", ease: "none", delay: 0.1 })
    .to(".ch1-line5", { text: "Gardes, attrapez-les!", ease: "none" })

    .to(".bg-noir-ch1", { opacity: 1, ease: "none"})

    .to(".ch1-line6", { text: "Jeremiah et son mystérieux sauveur furent capturés par les habitants de Vault Blank", ease: "none", delay: 0.1 })
    //.to(".ch1-line5", { text: "Gardes, attrapez-les!", ease: "none" })


//chapitre 2
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    //markers:true,
    start: 'center center',
    end:'+=16000',
    trigger:'#chapitre2',
}})
    .to(".ch2-img1", { duration: 0, opacity: 1, ease: "none"})
    .to(".num-chap-2", { duration: 1, text: 'Chapitre 2:', ease: "none", delay: 0.1 })
    .to(".nom-chap-2", { duration: 1, text: "Monika", ease: "none", delay: 0.1 })
    .to(".num-chap-2", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    //.to(".ans-19", { duration: 1.5, text: "19 ans plus tôt", ease: "none", delay: -1.5 })

    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".wrapper-text-ch2", { duration: 0, opacity: 1, ease: "none", delay: -0.5 })

    .to(".ans-19", { duration: 1.5, text: "19 ans plus tôt...", ease: "none" })

    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })


    .to(".ans-19", { duration: 2, text: "Un groupe de réfugiés sont arrivés à Vault blank avec l'espoir d'y trouver un endrois où vivre en sécurité.", ease: "none" })

    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })

    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none" })

    //switch d'image
    .to(".ch2-img2", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img1", { duration: 1, opacity: 0, ease: "none"})

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".ans-19", { duration: 2, text: "Mais ils ne savaient pas que Vault Blank vivait sous un régime autoritaire depuis que leur chef, Relius a pris le contôle.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none" })
    
    .to(".ch2-img3", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img2", { duration: 1, opacity: 0, ease: "none"})

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".ans-19", { duration: 2, text: "Relius a pris avantage des réfugiés, il a tué tous les adultes et volés leurs enfants dans le but de les endoctriner.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none" })
    
    .to(".ch2-img4", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img3", { duration: 1, opacity: 0, ease: "none"})

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".ans-19", { duration: 1.5, text: "19 ans plus tard,", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".ans-19", { duration: 2, text: "La fille du chef du groupe de réfugiés, Monika, est maintenant l'assistante personelle de Relius et est responsable de l'armurie de Vault Blank.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".ans-19", { duration: 2, text: "Elle a appris le sort de son père et a rejoint un groupe révolutionnaire pour la libération de vault blank, utilisant sa position pour les aider.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none" })
    
    .to(".ch2-img5", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img4", { duration: 1, opacity: 0, ease: "none"})

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".ans-19", { duration: 2, text: "Elle a aider à organiser le jour de la révolte, fait exploser la prison de Vault Blank, libérant tous ses prisonniers politiques.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".ans-19", { duration: 2, text: "Tout se passait comme prévu mais, une explosion retentit...", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".bnc2", { duration: 1.5, opacity: 0, ease: "none" })

    .to(".ch2-img6", { duration: 0, opacity: 1, ease: "none"})
    .to(".ch2-img5", { duration: 1, opacity: 0, ease: "none"})

    .to(".bnc2", { duration: 1.5, opacity: 0.5, ease: "none", delay: 0.5 })
    .to(".ans-19", { duration: 2, text: "La porte de Vault blank explose et des débris sont projetés dans l'air, heurtant plusieurs révolutionnaires, dont Monika qui perd un bras dans l'accident.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".ans-19", { duration: 2, text: "La révolte fut complètement repoussée et tous les survivant furent arrêtés.", ease: "none" })
    .to(".ans-19", { duration: 0, text: "", ease: "none", delay: 1 })
    .to(".bnc2", { duration: 1.5, opacity: 1, ease: "none" })

//chapitre 3
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    //markers:true,
    start: 'center center',
    end:'+=3000',
    trigger:'#chapitre3',
}})
    .to(".num-chap-3", { duration: 1, text: 'Chapitre 3:', ease: "none", delay: 0.1 })
    .to(".ss-mar-ch3", { duration: 0, opacity: 1, scaleX: -1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-j-ch3", { duration: 0, opacity: 1, scaleX: -1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-mon-ch3", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-900% 0%", ease: "none" })
    .to(".nom-chap-3", { duration: 1, text: "Emprisonnés", ease: "none", delay: 0.1 })
    .to(".num-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to('.ss-dice-ch3', {
        motionPath: '.motionpath-line',
        duration: 4,
      })

    .to(".setting-ch3-debut", { duration: 0, opacity: 0, ease: "none", delay: -3.5 })
    .to(".setting-ch3-fin", { duration: 0, opacity: 1, ease: "none", delay: -3.5 })

    .to(".bnc3", { duration: 1.5, opacity: 1, ease: "none", delay: 1.5 })

//chapitre 4
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    //markers:true,
    start: 'center center',
    end:'+=5000',
    trigger:'#chapitre4',
}})

    .to(".marco-idle", { duration: 0, opacity: 0, ease: "none", })
    .to(".ss-g-ch4", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-900% 0%", ease: "none" })
    .to(".ss-g-ch4", { duration: 0, opacity: 0, ease: "none", })
    .to(".marco-course", { duration: 0, opacity: 1, ease: "none", })
    .to(".jeremiah-course", { duration: 0, opacity: 1, ease: "none", })
    .to(".ss-mar-ch4", { x: "-300%", duration: 0, scaleX: -1, ease: "none", })
    .to(".ss-mon-ch4", { x: "-300%", duration: 0, scaleX: -1, ease: "none", })
    .to(".ss-j-ch4", { x: "-300%", duration: 0, scaleX: -1, ease: "none", })

    .to(".num-chap-4", { duration: 1, text: 'Chapitre 4:', ease: "none", delay: 0.1 })
    .to(".nom-chap-4", { duration: 1, text: "L'armurie", ease: "none", delay: 0.1 })
    .to(".num-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc4", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".ss-mar-ch4", { duration: 1, x: "900%", ease: "none" })
    //.to(".ss-mon-ch4", { x: "800%", ease: "none", delay: -0.5 })
    .to(".ss-j-ch4", { duration: 1, x: "900%", ease: "none", delay: -1 })
    .to(".ss-mon-ch4", { duration: 1, x: "900%", ease: "none", delay: -1 })

    .to(".setting-ch4", { duration: 1.5, opacity: 1, ease: "none" })
    .to(".setting-ch4-glass-debut", { duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })
    
    .to(".parallax-ch4-lvl1", { duration: 1.5, opacity: 0, ease: "none" })
    .to(".parallax-ch4-lvl2", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".parallax-ch4-lvl3", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".hourglass", { transformOrigin: "50% 50%", duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })
    .to(".gorilla-float", { duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })

    .to(".bnc4", { duration: 1.5, opacity: 1, ease: "none", delay: 1.5 })

// #5 dans les requis minimums
gsap.to('.hourglass', { duration: 1.5, repeat: -1, rotate: 360, ease: "none", scrollTrigger: { /*markers:true,*/ start: 'top top', end:'center center', trigger:'#chapitre4', toggleActions: 'play complete reverse reset' } } );
gsap.to('.gorilla-float', { duration: 2, repeat: -1, yoyo: true, y: "15%", ease: "power1.inOut", scrollTrigger: { /*markers:true,*/ start: 'center center', end:'center center', trigger:'#chapitre4', } } );

//chapitre 5
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    //markers:true,
    start: 'center center',
    end:'+=3000',
    trigger:'#chapitre5',
}})
    .to(".marco-idle", { duration: 0, opacity: 1, ease: "none"})
    .to(".ss-mar-ch5", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-mon-ch5", { duration: 0, scaleX: -1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-900% 0%", ease: "none" })
    .to(".jeremiah-assis", { duration: 0, opacity: 1, ease: "none"})
    .to(".gorilla-assis", { duration: 0, opacity: 1, scaleX: -1, ease: "none"})

    .to(".num-chap-5", { duration: 1, text: 'Chapitre 5:', ease: "none", delay: 0.1 })
    .to(".nom-chap-5", { duration: 1, text: "Avant le combat", ease: "none", delay: 0.1 })
    .to(".num-chap-5", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-5", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc5", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".bnc5", { duration: 1.5, opacity: 1, ease: "none", delay: 3 })

//chapitre 6
gsap.timeline({scrollTrigger: {
    scrub: true,
    pin:true,
    //markers:true,
    start: 'center center',
    end:'+=5000',
    trigger:'#chapitre6',
}})
    .to(".ss-j-ch6", { duration: 0, opacity: 1, ease: "none" })
    .to(".ss-mar-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-mon-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-j-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-1000% 0%", ease: "none" })
    .to(".ss-g-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-1000% 0%", ease: "none" })
    .to(".ss-n-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-200% 0%", ease: "none" })
    .to(".ch6-img2", { duration: 0, opacity: 1, ease: "none" })

    .to(".setting-ch6", { duration: 0, opacity: 0, ease: "none" })

    .to(".num-chap-6", { duration: 1, text: 'Chapitre 6:', ease: "none", delay: 0.1 })
    .to(".nom-chap-6", { duration: 1, text: "Relius", ease: "none", delay: 0.1 })
    .to(".num-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: 1 })
    .to(".nom-chap-6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    .to(".bnc6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })

    .to(".ch6-img1", { duration: 1.5, opacity: 0, ease: "none" })

    .to(".ch6-img2", { duration: 1.5, opacity: 0, ease: "none" })

    .to(".setting-ch6", { duration: 1.5, opacity: 1, ease: "none", delay: -1.5 })
    
    .to(".close-up-power-up", { duration: 1.5, opacity: 1, ease: "none", delay: 1.5 })
    .to(".setting-ch6", { duration: 1.5, opacity: 0, ease: "none", delay: -1.5 })
    

    .to(".dice-haut", { duration: 0.2, scale: 0, ease: "none", delay: 1 })
    
    //code morphing ici
    .to(".penta", { duration: 0.4, morphSVG:{ shape:".star", shapeIndex:8 }/*, delay: -0.4*/ })

    .to(".close-up-power-up", { duration: 1.5, opacity: 0, ease: "none" })

    
    .to(".ch6-background-drawsvg", { duration: 1, opacity: 1, ease: "none" })

    //code drawsvg ici
    .fromTo( ".star-2", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 4, ease: "power1.inOut", delay: 1 })

    .to(".ch6-background-drawsvg-post", { duration: 0, opacity: 1, ease: "none", delay: 0.5})
    .from(".dice-post-morph", { duration: 0.6, x: "-200%", ease: "none" })
    .to(".half-dice-haut", { duration: 1.5, y: "-120%", rotate: 40, ease: "none" })
    .to(".half-dice-bas", { duration: 1.5, y: "120%", rotate: -40, ease: "none", delay:-1.5 })
    .to(".ch6-background-drawsvg-post", { duration: 0, opacity: 0, ease: "none", delay: 1})
    .to(".ch6-background-drawsvg", { duration: 0, opacity: 0, ease: "none" })
    .to(".ss-j-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-800% 0%", ease: "none" })
    .to(".ss-dice-ch6-2", { duration: 0, opacity: 0, ease: "none" })
    .to(".ss-dice-ch6-3", { duration: 0, opacity: 0, ease: "none" })
    .to(".dice-post-morph-2", { duration: 0, opacity: 1, ease: "none" })
    .to(".ss-n-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-300% 0%", ease: "none" })
    .to(".setting-ch6", { duration: 0.5, opacity: 1, ease: "none" })


    .to(".ss-mar-ch6", { duration: 0, scaleX: 1, animationIterationCount: "1", animationDuration: 0, backgroundPosition: "-1100% 0%", ease: "none" })
    .to(".ss-r-ch6", { duration: 0, scaleX: 1, backgroundPosition: "-1100% 0%", ease: "none" })

    .to(".ss-mar-ch6", { duration: 0.5,x:"50%", ease: "none" })
    .to(".ss-r-ch6", { duration: 0.5,x:"-50%", ease: "none", delay:-0.5 })
    
    .to(".bnc6", { duration: 1.5, opacity: 1, ease: "none" })

    .to(".nom-chap-6", { duration: 0, opacity: 1, ease: "none" })
    .to(".nom-chap-6", { duration: 0, text: "", ease: "none" })

    .to(".nom-chap-6", { duration: 1, text: "À suivre", ease: "none", delay: 1 })


gsap.to('.dice-haut', { duration: 0.4, repeat: -1, rotate: 360, ease: "none", scrollTrigger: { /*markers:true,*/ start: 'center center', end:'center center', trigger:'#chapitre6', } } );
gsap.to('.pentasvg', { duration: 0.4, repeat: -1, rotate: 360, ease: "none", scrollTrigger: { /*markers:true,*/ start: 'center center', end:'center center', trigger:'#chapitre6', } } );
gsap.to('.dice-post-morph', { duration: 1, repeat: -1, rotate: 360, ease: "none", scrollTrigger: { /*markers:true,*/ start: 'center center', end:'center center', trigger:'#chapitre6', } } );
gsap.to('.dice-post-morph-2', { duration: 1, repeat: -1, rotate: -360, ease: "none", scrollTrigger: { /*markers:true,*/ start: 'center center', end:'center center', trigger:'#chapitre6', } } );