const overlayTitle = document.querySelector(".tp");
const authorTitle = document.querySelector(".ig");
const preloader = document.querySelector(".preloader");
const button = document.querySelector("button");

let tl = gsap.timeline({paused: true});
tl 
    .to(overlayTitle,{
        y: "100%", 
        ease: "power3.Inout",
        duration: 1,
    })
    .to(authorTitle, {
        opacity: 0,
        ease: "power3.Inout",
    })
    .to(button, {
        opacity: 0,
        ease: "power3.Inout",
    },"-=.5")
    .to(preloader, {
        y: "-100%",
        ease: "power3.Inout",
        duration: 1,
    })

button.addEventListener("click", () => {
    tl.play();
})