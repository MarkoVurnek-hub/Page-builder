import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { StyledSidebarLabel } from "./SidebarLabel.style";
import * as RiIcons from "react-icons/ri";

function SidebarLabel({ item, setRerender }) {
  const [show, setShow] = useState(false);

  let itemName;

  switch (item.localName) {
    case "div":
      itemName = "Container";
      break;
    case "p":
      itemName = "Paragraph";
      break;
    case "h1":
      itemName = "Heading";
      break;
    case "a":
      itemName = "Link";
      break;
    default:
      itemName = "not found";
      break;
  }

  return (
    <>
      <StyledSidebarLabel
        onClick={() => {
          setShow(!show);
        }}
        onMouseOver={() => {
          item.style.border = "3px dashed #0000FF";
        }}
        onMouseOut={() => {
          item.style.border =
            itemName === "Container" ? "0.5px dashed black" : "";
        }}
      >
        <div>
          <span> {itemName} </span>
        </div>
        {show ? <RiIcons.RiArrowUpSFill /> : <RiIcons.RiArrowDownSFill />}
      </StyledSidebarLabel>

      {show && (
        <SubMenu
          setRerender={setRerender}
          itemName={itemName}
          item={item}
          setShow={setShow}
        />
      )}
    </>
  );
}

export default SidebarLabel;
