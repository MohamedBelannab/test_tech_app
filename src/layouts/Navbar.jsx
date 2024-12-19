import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router";
import logo from "../../public/logo.png";
import { Login } from "../components/auth/Login";
import { SignUp } from "../components/auth/SignUp";


export function NavbarLayout() {
  const [openNav, setOpenNav] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin((cur) => !cur);
  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => setOpenSignUp((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="md"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Acceuil
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="md"
        color="black"
        className="p-1 font-normal "
      >
        <Link to="/" className="flex items-center">
          À propos
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="md"
        color="black"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Nos produits
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Login open={openLogin} handleOpen={handleOpenLogin} />
      <SignUp open={openSignUp} handleOpen={handleOpenSignUp} />
      <Navbar
        shadow={false}
        className=" max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-3"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium">
            <img src={logo} className="invert max-w-24" alt="" />
          </Link>
          <div className=" flex items-center justify-center hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                onClick={()=>{handleOpenLogin()}}
                className="hidden lg:inline-block"
              >
                <span>Connexion</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                color="green"
                onClick={()=>{handleOpenSignUp()}}
                className="hidden lg:inline-block"
              >
                <span>Inscrivez-vous</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1 mb-9">
            <Button onClick={()=>{handleOpenLogin()}} fullWidth variant="text" size="sm" className="">
              <span>Connexion</span>
            </Button>
            <Button onClick={()=>{handleOpenSignUp()}} fullWidth color="green" variant="gradient" size="sm" className="">
              <span>nscrivez-vous</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
