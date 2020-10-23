import React from "react";

function NavBar() {
  return (
    <nav>
      <h1 className="navlogo">IIC</h1>
      <a className="navitem" href="#">
        Home
      </a>
      <a className="navitem" href="#">
        About
      </a>
      <a className="navitem" href="#">
        Programmes
      </a>
      <a className="navitem" href="#">
        Partners
      </a>
      <a className="navitem" href="#">
        Portfolio
      </a>
      <a className="navitem" href="#">
        Connect
      </a>
      <a className="navitem" href="#">
        Testimonial
      </a>
    </nav>
  );
}

export default NavBar;