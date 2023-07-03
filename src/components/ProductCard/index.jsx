import React from "react";
import "./styles/style.css";

export default function ProductCard() {
  return (
    <div className="productCard__container text-center cursor-pointer">
      <i className="ri-heart-line"></i>
      <img
        className="w-60 rounded-lg"
        src="https://images.unsplash.com/photo-1565311456123-0c9ace220ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        alt=""
      />
      <div className="productName font-medium mt-3 text-base">Steam Mo:Mo</div>
      <div className="productCategory font-light text-sm">Himalayan Mo:Mo</div>

      <div className="price font-medium text-base">$ 9.99</div>
    </div>
  );
}
