export const animateMenuIcon = (
  menuTl,
  topMenuIcon,
  middleMenuIcon,
  bottomMenuIcon
) => {
  menuTl.timeScale(2);
  menuTl
    .to(topMenuIcon.current, 0.3, {
      y: 11,
      yoyo: true,
      ease: "power1.easeInOut"
    })
    .to(
      bottomMenuIcon.current,
      0.3,
      { y: -11, yoyo: true, ease: "power1.easeInOut" },
      "-=0.3"
    )
    .to(topMenuIcon.current, 0.6, { rotation: -585 })
    .to(middleMenuIcon.current, 0.6, { rotation: -585 }, "-=0.6")
    .to(bottomMenuIcon.current, 0.6, { rotation: -675 }, "-=0.6")
    .reverse();
};
