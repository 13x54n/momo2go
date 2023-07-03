import { Button } from "@mui/material";
import React from "react";
import "./styles/Dietary.css";

export default function Dietary() {
  return (
    <div className="flex align-center gap-3 flex-wrap dietary__cotnainer">
      <Button>🥬 Vegetarian</Button>
      <Button>🍗 Chicken</Button>
      <Button>🐮 Beef</Button>
    </div>
  );
}
