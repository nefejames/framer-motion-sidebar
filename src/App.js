import React, { useState } from "react";
import { Container, ContentBox } from "./Styles";
import "./App.css";

import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Header handleClick={handleClick} />
      <ContentBox>
        <Sidebar open={open} />

        <Content />
      </ContentBox>
    </Container>
  );
}

export default App;
