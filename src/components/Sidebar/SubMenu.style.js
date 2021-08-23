import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export const StyledSubMenu = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1px;
  visibility: hidden;
`;

export const StyledSubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #c70000;

  &:hover {
    background: #d23232;

    cursor: pointer;
  }
`;
export const DeleteIcon = styled(BsTrash)`
  width: 40px;
  height: 40px;
  color: white;
`;
