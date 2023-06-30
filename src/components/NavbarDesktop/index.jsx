import { Button } from "@mui/material";
import React from "react";
import LocationDialog from "./components/LocationDialog";
import NavbarMenuDrawer from "./components/NavbarMenuDrawer";

export default function NavbarDesktop() {
  return (
    <nav className="navbarDesktop__container flex items-center gap-10 py-5 px-5">
      <NavbarMenuDrawer />
      <img
        className="w-36 object-contain"
        src="https://momo2go.com/wp-content/uploads/2020/08/logo-Himalayan-Momo2go-updated.png"
        alt="momo2go logo"
        loading="lazy"
      />
      <LocationDialog />
      <div className="searchContainer flex items-center flex-1">
        <i className="ri-search-line mr-1.5"></i>
        <input
          className="flex-1"
          type="text"
          placeholder="Search in Momo2Go's, What are you Craving?"
        />
      </div>
      <Button className="cartBtnContainer">
        <i className="ri-shopping-cart-2-line mr-1"></i> <p>0 carts</p>
      </Button>
    </nav>
  );
}
