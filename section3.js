gsap.registerPlugin(ScrollTrigger);

const section3 = document.querySelector("#section3");

gsap.to(section3.querySelector(".projects-text"), {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: section3,
        start: "top 80%", 
        end: "bottom center",
        scrub: true
    }
});
