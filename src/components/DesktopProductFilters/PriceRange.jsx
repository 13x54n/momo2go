import { Button } from "@mui/material";
import React from "react";
import './styles/PriceRange.css'

export default function PriceRange() {
  return (
    <div className="priceRange__Container flex align-center gap-3">
      <Button>$</Button>
      <Button>$$</Button>
      <Button>$$$</Button>
      <Button>$$$$</Button>
    </div>
  );
}
