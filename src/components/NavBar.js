import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key="home" href="#home">home</a>
    <a key="about" href="#about">about</a>
    <a key="projects" href="#projects">projects</a>
  </nav>;
}

export default NavBar;
