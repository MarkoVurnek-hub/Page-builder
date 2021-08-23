import React, { useState, useEffect, useRef } from "react";
import { MaterialPicker } from "react-color";
import {
  StyledSubMenu,
  DeleteIcon,
  DeleteIconWrapper,
  StyledSubMenuWrapper
} from "./SubMenu.style";
import gsap from "gsap";

const SubMenu = ({ item, itemName, setRerender, setShow, show }) => {
  const [color, setColor] = useState(item.style.color);
  const [backgroundColor, setBackgroundColor] = useState(
    item.style.backgroundColor
  );
  const [text, setText] = useState(item.innerText);
  const [height, setHeight] = useState(item.style.height);
  const [width, setWidth] = useState(item.style.width);
  item.style.color = color;
  item.style.backgroundColor = backgroundColor;
  item.style.height = `${height}px`;
  item.style.width = `${width}px`;

  if (itemName !== "Container") item.innerText = text;

  const subMenuRef = useRef();

  const handleDelete = () => {
    gsap.to(subMenuRef.current, {
      x: 250,
      autoAlpha: 0,
      onComplete: () => {
        item.remove();
        setShow(false);
        setRerender(rerender => !rerender);
      }
    });
  };

  useEffect(() => {
    let submenuHeight = subMenuRef.current.clientHeight;
    let submenuTl = gsap.timeline();
    gsap.set(subMenuRef.current, {
      scaleY: 0.85,
      height: 0,

      transformOrigin: "0% 0%"
    });
    submenuTl
      .to(subMenuRef.current, {
        height: submenuHeight
      })
      .to(
        subMenuRef.current,
        {
          scaleY: 1,
          autoAlpha: 1,
          transformOrigin: "0% 0%"
        },
        "-=0.2"
      );
  }, []);

  return (
    <StyledSubMenu ref={subMenuRef}>
      <StyledSubMenuWrapper>
        {itemName !== "Container" && (
          <>
            Text:
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            Color picker:
            <MaterialPicker
              color={color}
              onChange={color => setColor(color.hex)}
            />
          </>
        )}
        Height:
        <input
          type="text"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        Width:
        <input
          type="text"
          value={width}
          onChange={e => setWidth(e.target.value)}
        />
        Backgroun Color picker:
        <MaterialPicker
          color={backgroundColor}
          onChange={color => setBackgroundColor(color.hex)}
        />
      </StyledSubMenuWrapper>
      {!item.className.includes("main") && (
        <DeleteIconWrapper onClick={handleDelete}>
          <DeleteIcon />
        </DeleteIconWrapper>
      )}
    </StyledSubMenu>
  );
};

export default SubMenu;
