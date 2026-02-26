var tl = gsap.timeline();

tl.from("h2", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5,
});
tl.from("h4", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
});