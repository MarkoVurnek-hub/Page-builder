import React, { useRef, useEffect, useState } from "react";
import Items from "./Items";
import DropBox from "../DropBox/DropBox";
import { itemList } from "../../utils/itemTypes";
import Menu from "../Menu";
import { StyledRnd, StyledItems } from "./DragItems.style";

function DragItems() {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const mouseEnter = ref.current.addEventListener("mouseenter", () => {
      setIsDragging(true);
    });
    const mouseLeave = ref.current.addEventListener("mouseleave", () => {
      setIsDragging(false);
    });

    return () => {
      mouseEnter.removeEventListener("mouseenter");
      mouseLeave.removeEventListener("mouseleave");
    };
  }, []);

  return (
    <>
      <StyledRnd
        default={{
          x: 50,
          y: 50
        }}
        disableDragging={isDragging}
      >
        <StyledItems ref={ref}>
          {itemList.map(item => {
            return <Items key={item.id} url={item.url} id={item.id} />;
          })}
        </StyledItems>
      </StyledRnd>
      <DropBox sidebar={sidebar} openSidebar={openSidebar} />
      <Menu setOpenSidebar={setOpenSidebar} setSidebar={setSidebar} />
    </>
  );
}

export default DragItems;
