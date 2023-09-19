"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from "@nextui-org/react";

const Navigation = () => {
  const toggleDarkmode = () => {
    document.getElementById("app")?.classList.toggle("dark");
  };

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">Portfolio</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            CV
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Switch onClick={toggleDarkmode} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
