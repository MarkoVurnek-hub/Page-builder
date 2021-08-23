import gsap from "gsap";
export const animatePreloader = (
  refText,
  refTextContainer,
  refMainContainer
) => {
  const tl = gsap.timeline({ delay: 2 });
  tl.to(refText.current, {
    y: "100%",
    stagger: 0.1,
    duration: 1.5,
    ease: "expo.out",
    autoAlpha: 0
  })
    .to(refTextContainer.current, {
      duration: 0.8,
      ease: "expo.out",
      scaleY: 0,
      transformOrigin: "50% 50%"
    })
    .to(refMainContainer.current, {
      duration: 1.8,
      ease: "expo.out",
      scaleY: 0,
      transformOrigin: "0% 0%"
    });
};
