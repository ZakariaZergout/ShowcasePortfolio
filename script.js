
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
        x: 0, // Ensure the text appears without horizontal movement
        duration: 1,
        scrollTrigger: {
            trigger: "#section1",
            start: () => `top+=${index * 200} center`, // Delay the start position
            end: () => `top+=${(index + 1) * 200} center`,
            scrub: true,
        }
    });
});

// Animate text in other sections
const sections = document.querySelectorAll(".scroll-section:not(#section1)");

sections.forEach((section, index) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onEnter: () => {
                gsap.to(section.querySelector(".about-text"), { opacity: 1, y: 0, duration: 1 });
            },
            onLeaveBack: () => {
                gsap.to(section.querySelector(".about-text"), { opacity: 0, y: 50, duration: 1 });
            }
        }
    });

    tl.fromTo(
        section.querySelector(".animated-text"),
        { xPercent: -100 },
        { xPercent: 0, duration: 1 }
    );
});
