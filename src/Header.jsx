import React from "react";
import { HeaderBar, ToggleButton } from "./Styles";

const Header = ({ handleClick }) => {
  return (
    <HeaderBar>
      <ToggleButton onClick={handleClick}>Toggle Sidebar</ToggleButton>
    </HeaderBar>
  );
};

export default Header;
