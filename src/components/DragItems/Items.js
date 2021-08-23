import React from "react";
import useItemDrag from "../../utils/dnd-hooks/useItemDrag";
import { dndItemTypes } from "../../utils/dndItemTypes";
import { StyledImg } from "./DragItems.style";

function Items({ id, url }) {
  const [drag, isDragging] = useItemDrag(id, dndItemTypes.MAIN_ITEM);

  return (
    <StyledImg
      alt="itemIndicator"
      ref={drag}
      src={url}
      width="150px"
      style={{ border: isDragging ? "3px solid #15171c" : "0px" }}
    />
  );
}

export default Items;
