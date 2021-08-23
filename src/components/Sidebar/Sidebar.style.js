import styled from "styled-components";

export const StyledSidebar = styled.div`
  background: #15171c;
  width: 250px;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: -250px;
  z-index: 2;
  border-radius: 5px 0px 0px 5px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledSidebarWrap = styled.div`
  width: 100%;
`;
