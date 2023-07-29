import { Link } from "react-router-dom";
import React from "react";
import "./Product.css";

const Product = ({ id, image, category, title, rating, price }) => {
  return (
    <Link className="single__product" to={`/productdetails/${id}`}>
      <div>
        <img src={image} alt={`${title}_logo`} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Price: ₹{price}</p>
        <p>Rating: {rating.rate}</p>
      </div>
    </Link>
  );
};

export default Product;
