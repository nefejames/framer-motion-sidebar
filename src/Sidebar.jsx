import React from "react";
import { SidebarBox, LinksBox, LinkItem } from "./Styles";

const sidebarVariants = {
  sidebarOpen: {
    width: "200px",
    transition: {
      when: "beforeChildren",
    },
  },

  sidebarClosed: {
    width: "",
  },
};

const LinkBoxVariants = {
  sidebarOpen: {
    x: 30,
    opacity: 1,
  },
  sidebarClosed: {
    x: -100,
    opacity: 0,
  },
};

const Sidebar = ({ open }) => {
  return (
    <SidebarBox
      variants={sidebarVariants}
      animate={open ? "sidebarOpen" : "sidebarClosed"}
    >
      <LinksBox variants={LinkBoxVariants}>
        <LinkItem>Home</LinkItem>
        <LinkItem>About</LinkItem>
        <LinkItem>Gallery</LinkItem>
        <LinkItem>Services</LinkItem>
      </LinksBox>
    </SidebarBox>
  );
};

export default Sidebar;
