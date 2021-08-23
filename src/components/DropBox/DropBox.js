import React, { useRef, useImperativeHandle } from "react";
import useItemDrop from "../../utils/dnd-hooks/useItemDrop";
import Sidebar from "../Sidebar";
import { dndItemTypes } from "../../utils/dndItemTypes";
import { StyledBoard } from "./DropBox.style";

function DropBox({ openSidebar, sidebar, classname }) {
  const [board, drop] = useItemDrop(dndItemTypes.MAIN_ITEM);
  const ref = useRef();

  useImperativeHandle(drop, () => ref.current);
  return (
    <>
      <StyledBoard
        className={`board ${classname ? classname : "main"}`}
        ref={ref}
      >
        {board.map((item, index) => {
          return <React.Fragment key={index}>{item.element()}</React.Fragment>;
        })}
      </StyledBoard>

      {openSidebar && <Sidebar sidebar={sidebar} ref={ref} />}
    </>
  );
}

export default DropBox;
