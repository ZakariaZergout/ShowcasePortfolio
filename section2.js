gsap.registerPlugin(ScrollTrigger);

// Animate the content in the second section
const section2 = document.querySelector("#section2");

gsap.timeline({
    scrollTrigger: {
        trigger: section2,
        start: "top 80%", // Adjusted start position
        end: "bottom center",
        scrub: true,
        onEnter: () => {
            gsap.to(section2.querySelector(".about-text"), { opacity: 1, y: 0, duration: 1 });
        },
        onLeaveBack: () => {
            gsap.to(section2.querySelector(".about-text"), { opacity: 0, y: 50, duration: 1 });
        }
    }
}).fromTo(
    section2.querySelector(".animated-text"),
    { xPercent: -100 },
    { xPercent: 0, duration: 1 }
);
