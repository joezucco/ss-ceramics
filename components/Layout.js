import Navbar from "./Navigation.js";
import Drop from "./Drop.js";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div class='grid grid-cols-1'>
      <Navbar toggle={toggle} />
      <div class='grid grid-cols-1'>
        <Drop isOpen={isOpen} toggle={toggle} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
