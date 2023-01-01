// SECTION main Navigation pannel //

const burger = document.querySelector('nav button');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
    gsap.to(".menu_links", { x: "100%" });
    gsap.set("body", {overflow: "auto"});
    gsap.set("body", {overflow: "hidden"});
    } else {
    gsap.to(".menu_links", { x: "0%" });
    gsap.fromTo(
    ".menu_links a ", 
    { opacity: 0, y: 0 }, 
    { opacity: 1, y: 20, delay: 0.25, stagger: 0.25}
    );
    gsap.set("body", {overflow: "hidden"});
    }
    burger.classList.toggle("active");
});

// SECTION CLASSES VIDEOS //

// const videos = gsap.utils.toArray(".videos");
// gsap.set(videos, {opacity: 0 });

// videos.forEach((video) => {
//     ScrollTrigger.create({
//         // trigger: video,
//         // start: "top center",
//         // end: "bottom center",
//         // markers: true,
//         onEnter: () => {
//             gsap.to(video, {opacity:1});
//             video.play();
//         },
//         onEnterBack: () => video.play(),
//         onLeave: () => video.pause(),
//         onLeaveBack: () => video.pause(),
//     });
// });

// COOKIES //
// cookies banner out of window
const buttonCookie = document.querySelector('.cookie-button');

buttonCookie.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity:0, y:100, duration: 0.75, ease: "power1.out"})
});
