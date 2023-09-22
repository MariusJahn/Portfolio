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
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const Navigation = () => {
  const toggleDarkmode = () => {
    document.getElementById("app")?.classList.toggle("dark");
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["CV", "Projects", "Hobbys", "Gallery"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="primary" href="/">
            <p className="font-bold text-inherit">Marius Jahn</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
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
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
