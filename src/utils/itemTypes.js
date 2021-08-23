import React from "react";
import DropBox from "../components/DropBox/DropBox";

export const itemList = [
  {
    id: 1,
    name: "Container",
    url: "./elements/container.png",
    element: () => {
      return <DropBox classname={"sub"} />;
    }
  },
  {
    id: 2,
    name: "Header",
    url: "./elements/header.png",
    element: () => {
      return React.createElement("h1", null, "heading");
    }
  },
  {
    id: 3,
    name: "Paragraph",
    url: "./elements/text.png",
    element: () => {
      return React.createElement("p", null, "paragraph");
    }
  },
  {
    id: 4,
    name: "Link",
    url: "./elements/link.png",
    element: () => {
      return React.createElement("a", null, "link");
    }
  }
];
