import React from "react";
import { NavbarLayout } from "./Navbar";
import { FooterWithSocialLinks } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden ">
      <NavbarLayout />
      <div className={`w-full`}>{children && children}</div>
      <FooterWithSocialLinks/>
    </div>
  );
};

export default Layout;
