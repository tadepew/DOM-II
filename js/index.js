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

//event 7
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "#17A2B8";
    })
  })

//event 8
const footer = document.querySelector("footer")
const body = document.querySelector("body")

footer.addEventListener("mouseenter", () => {
    footer.style.backgroundColor = "white",
    body.style.backgroundColor = "#FFEBCD"
})

footer.addEventListener("mouseleave", () => {
    footer.style.backgroundColor = "#FFEBCD",
    body.style.backgroundColor = "white"
})

//event 9
const img = document.querySelector(".content-destination img")

img.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.2)";
  img.style.transition = "transform 0.3s"
})
img.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)"
})

//event 10
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseenter", () => {
  el.style.transform = "scale(1.2)";
  el.style.transition = "transform 0.3s"
})
})
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseleave", () => {
  el.style.transform = "scale(1)"
})
})

//nested events
const adventure = document.querySelector(".inverse-content");

adventure.addEventListener('click', () => {
  adventure.style.backgroundColor= "#17A2B8";
})

const adventureImg = document.querySelector('.inverse-content p');

adventureImg.addEventListener('click', (event) => {
  adventureImg.style.backgroundColor="#FFEBCD";
  console.log(event)
  event.stopPropagation();
})

//stop nav
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
})