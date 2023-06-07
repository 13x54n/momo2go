import { Button } from "@mui/material";
import React from "react";
import LocationDialog from "./components/LocationDialog";

export default function NavbarDesktop() {
  return (
    <nav className="navbarDesktop__container flex items-center py-5 px-5">
      <Button className="">
        <i className="ri-menu-2-line text-xl"></i>
      </Button>
      <img
        className="w-36 object-contain"
        src="https://momo2go.com/wp-content/uploads/2020/08/logo-Himalayan-Momo2go-updated.png"
        alt="momo2go logo"
        loading="lazy"
      />
      <LocationDialog/>
      <div></div>
      <div></div>
    </nav>
  );
}
