"use client"
import { useState } from "react";
import { SCartProvider, headerContext } from "../global/Context";
import ShoppingCartModal from "./ShoppingCartModal";
import Navbar from "./Navbar";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <SCartProvider>
      <headerContext.Provider value={{show,setShow}}>
        <Navbar />
        <ShoppingCartModal />
      </headerContext.Provider>
      </SCartProvider>
    </>
  );
};

export default Header;
