import { useDrag } from "react-dnd";

function useItemDrag(id, type) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id: id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }));

  return [drag, isDragging];
}

export default useItemDrag;
