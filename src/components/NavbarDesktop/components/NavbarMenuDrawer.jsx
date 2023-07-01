import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./styles/NavbarMenuDrawer.style.css";

export default function NavbarMenuDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <div className="flex flex-col gap-3 items-start px-8 py-8 navbarDesktopMenuDrawer">
      <img
        src="https://momo2go.com/wp-content/uploads/2020/08/logo-Himalayan-Momo2go-updated.png"
        alt=""
      />
      <div className="divider"></div>
      <Button className="flex items-start flex-row gap-4 signUp">
      <i className="ri-user-4-line"></i> Sign Up
      </Button>
      <Button className="flex items-start flex-row gap-4 signIn">
      <i className="ri-login-circle-line"></i> Login
      </Button>
      <div className="divider"></div>
      <Button className="flex items-start flex-row gap-4">
        <i className="ri-shopping-cart-line"></i> Orders
      </Button>
      <Button className="flex items-start flex-row gap-4">
        <i className="ri-heart-line"></i> Favorites
      </Button>
      <Button className="flex items-start flex-row gap-4">
        <i className="ri-wallet-3-line"></i> Wallet
      </Button>
      <Button className="flex items-start flex-row gap-4">
        <i className="ri-medal-2-line"></i> Promotions
      </Button>
      <Button className="flex items-start flex-row gap-4">
        <i className="ri-user-add-line"></i> Invite Friends
      </Button>
    </div>
  );

  return (
    <div className="navbarMenuDrawer__container">
      <Button onClick={toggleDrawer(true)}>
        <i className="ri-menu-2-line text-xl"></i>
      </Button>
      <Drawer open={state["left"]} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
