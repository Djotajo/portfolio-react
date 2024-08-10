import { useState } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Content />
      <Footer />
    </>
  );
}

export default App;
