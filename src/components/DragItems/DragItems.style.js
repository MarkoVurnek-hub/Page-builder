import { Rnd } from "react-rnd";
import styled from "styled-components";

export const StyledRnd = styled(Rnd)`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  border: solid 1.5px #15171c;
  border-radius: 15px;
  background: "white";
`;

export const StyledImg = styled.img`
  filter: invert(100%);
  margin: 5px;
  width: 30px;
  height: 30px;
  z-index: 5;
`;

export const StyledItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #15171c;
  margin: 15px;
  height: 50px;
  width: 300px;
  color: white;
`;
