
gsap.registerPlugin(ScrollTrigger);

// Animate the falling image
gsap.to("#falling-image", {
    yPercent: 500,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// Animate the scrolling text in the first section
const textItems = document.querySelectorAll("#section1 .text-item");

textItems.forEach((text, index) => {
    gsap.to(text, {
        opacity: 1,
        x: index % 2 === 0 ? "100%" : "-100%",
        duration: 1,
        scrollTrigger: {
            trigger: "#section1",
            start: () => `top+=${index * 200} center`,
            end: () => `top+=${(index + 1) * 200} center`,
            scrub: true,
        }
    });
});
