import gsap from "gsap";
export const animateSidebarIn = element => {
  gsap.to(element, {
    duration: 0.5,
    right: "-250px",
    ease: "Power2.easeOut"
  });
};
export const animateSidebarOut = element => {
  gsap.to(element, {
    duration: 0.5,
    right: "0",
    ease: "Power2.easeOut",
    delay: 0.2
  });
};
