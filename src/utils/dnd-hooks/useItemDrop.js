import { useState } from "react";

import { useDrop } from "react-dnd";
import { itemList as draggableItemList } from "../itemTypes";

function useItemDrop(type) {
  const [board, setBoard] = useState([]);
  const [, setHasDroppedOnChild] = useState(false);
  const [, setHasDropped] = useState(false);
  const [, drop] = useDrop(
    () => ({
      accept: type,
      drop(item, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) {
          return;
        }

        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
        addItemToBoard(item.id);
      },
      collect: monitor => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true })
      })
    }),
    [setHasDropped, setHasDroppedOnChild]
  );

  const addItemToBoard = id => {
    const itemList = draggableItemList.filter(picture => id === picture.id);

    setBoard(board => [...board, itemList[0]]);
  };
  return [board, drop];
}

export default useItemDrop;
