import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: absolute;
  top: 17px;
  right: 17px;
  height: 50px;
  width: 50px;
  color: white;
  text-transform: uppercase;
  z-index: 50;
`;

export const StyledClickRegion = styled.div`
  left: 100px;
  width: 40px;
  height: 30px;
  cursor: pointer;
`;

export const StyledBurgerMenuPiece = styled.div`
  display: block;
  width: 35px;
  border-top: 4px solid white;
  transform-origin: 50% 50%;
  margin-top: 7px;
`;
