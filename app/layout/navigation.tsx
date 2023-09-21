"use client";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
  NavbarMenuToggle,
} from "@nextui-org/react";

const Navigation = () => {
  const toggleDarkmode = () => {
    document.getElementById("app")?.classList.toggle("dark");
  };

  return (
    <Navbar shouldHideOnScroll maxWidth="full">
      <NavbarBrand>
        <Link color="primary" href="/">
          <p className="font-bold text-inherit">Marius Jahn</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" color="foreground" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Hobbys
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/gallery">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Switch
            onClick={toggleDarkmode}
            defaultSelected
            color="primary"
            className="text-black"
            size="lg"
            thumbIcon={({ isSelected }) =>
              isSelected ? <BsFillSunFill /> : <BsFillMoonStarsFill />
            }
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
