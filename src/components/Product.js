import React from "react";
import "./Product.css";

function Product({ title, price, img, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={img} alt="product_image" className="product_image" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
