import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { animateMenuIcon } from "../../animation/menu";
import {
  StyledBurgerMenu,
  StyledClickRegion,
  StyledBurgerMenuPiece
} from "./Menu.style";

function Menu({ setSidebar, setOpenSidebar }) {
  const [menuTl] = useState(gsap.timeline({ paused: true }));
  const topMenuIcon = useRef();
  const middleMenuIcon = useRef();
  const bottomMenuIcon = useRef();

  useEffect(() => {
    animateMenuIcon(menuTl, topMenuIcon, middleMenuIcon, bottomMenuIcon);
  }, [menuTl]);

  const toggleMenuTimeline = () => {
    menuTl.reversed(!menuTl.reversed());
  };
  return (
    <StyledBurgerMenu>
      <StyledClickRegion
        onClick={() => {
          setSidebar(sidebar => !sidebar);
          setOpenSidebar(true);
          toggleMenuTimeline();
        }}
      >
        <StyledBurgerMenuPiece ref={topMenuIcon}></StyledBurgerMenuPiece>
        <StyledBurgerMenuPiece ref={middleMenuIcon}></StyledBurgerMenuPiece>
        <StyledBurgerMenuPiece ref={bottomMenuIcon}></StyledBurgerMenuPiece>
      </StyledClickRegion>
    </StyledBurgerMenu>
  );
}

export default Menu;
