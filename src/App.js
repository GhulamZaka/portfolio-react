import React, { useState } from "react";

import "./App.css";

import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [activePage, active] = useState("About");
  function display() {
    switch (activePage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  }

  return (
    <div className="App">
      <Header setPage={active} />
      <main>{display()}</main>
      <Footer />
    </div>
  );
}

export default App;
