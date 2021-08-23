import React, { useEffect, useRef, useState } from "react";
import { StyledSidebar, StyledSidebarWrap } from "./Sidebar.style";
import SidebarLabel from "./SidebarLabel";

import { animateSidebarIn, animateSidebarOut } from "../../animation/sidebar";

const Sidebar = React.forwardRef(({ sidebar }, ref) => {
  const [, setRerender] = useState(false);
  let elements = [];
  const sidebarRef = useRef(null);
  useEffect(() => {
    sidebar === false
      ? animateSidebarIn(sidebarRef.current)
      : animateSidebarOut(sidebarRef.current);
  }, [sidebar]);

  const traverse = node => {
    elements.push(node);

    if (node.children) {
      [...node.children].forEach(child => {
        traverse(child);
      });
    }
  };
  if (ref.current) {
    traverse(ref.current);
  }

  return (
    <StyledSidebar ref={sidebarRef}>
      <StyledSidebarWrap>
        {elements.map((element, index) => {
          return (
            <SidebarLabel
              key={index}
              setRerender={setRerender}
              item={element}
            />
          );
        })}
      </StyledSidebarWrap>
    </StyledSidebar>
  );
});
export default Sidebar;
