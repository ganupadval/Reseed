import React from "react";
import Sellnow from "../components/Sellnow";
import Selection from "../components/Selection";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header class="item header margin-top-0">
        <div class="wrapper">
          <NavBar />
          <Header2 />
        </div>
      </header>

      <Selection />
      <Sellnow />
      <Footer />
    </>
  );
}
