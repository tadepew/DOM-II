// Your code goes here

//event one
const bus = document.querySelector(".intro img")

bus.addEventListener("mouseenter", () => {
    gsap.to(bus, {
        duration: 2.5,
        ease: "bounce.out",
        x: "40%"
    });
})

bus.addEventListener("mouseleave", () => {
    gsap.to(bus, {
        duration: 2.5,
        ease: "bounce.out",
        x: "0%"
    });
})

//event two
const h2 = document.querySelector(".h2p")

h2.addEventListener("mouseenter", () => {
    gsap.to(h2, {
        duration: 2.5,
        ease: "bounce.out",
        x: "-40%"
    });
})

h2.addEventListener("mouseleave", () => {
    gsap.to(h2, {
        duration: 2.5,
        ease: "bounce.out",
        x: "0%"
    });
})

//event three
const header = document.querySelector(".nav-container")

window.addEventListener("load", () => {
    gsap.to(header, {
        duration: 2.8,
        ease: "power4.out",
        y: "800%"
    })
})

//event 4
const line = document.querySelector(".main-navigation")

line.addEventListener("mouseenter", () => {
    line.style.borderBottom = "2px dashed #FFBB4E"
})

line.addEventListener("mouseleave", () => {
    line.style.borderBottom = "2px dashed #C0C0C0"
})

//event 5
const leftBox = document.querySelector(".content-section .text-content")
const rightBox = document.querySelector(".content-section .img-content")
const topSection = document.querySelector(".content-section")

topSection.addEventListener("mouseenter", () => {
    gsap.to(leftBox, {
        duration: 2.5,
        ease: "bounce.out",
        x: "-40%"
    });
    gsap.to(rightBox, {
        duration: 2.5,
        ease: "bounce.out",
        x: "40%"
    });
})

topSection.addEventListener("mouseleave", () => {
    gsap.to(leftBox, {
        duration: 2.5,
        ease: "bounce.out",
        x: "0%"
    });
    gsap.to(rightBox, {
        duration: 2.5,
        ease: "bounce.out",
        x: "0%"
    });
})

//event 6
const line2 = document.querySelector(".intro")

line2.addEventListener("mouseenter", () => {
    line2.style.borderBottom = "2px dashed #FFBB4E"
})

line2.addEventListener("mouseleave", () => {
    line2.style.borderBottom = "2px dashed #C0C0C0"
})