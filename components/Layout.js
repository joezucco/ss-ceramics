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
    <div class='flex flex-col min-h-screen'>
      <Navbar toggle={toggle} />
      <div>
        <Drop isOpen={isOpen} toggle={toggle} />
        {children}
      </div>
      <Footer />
    </div>
  );
}
