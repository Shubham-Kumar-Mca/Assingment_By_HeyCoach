import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import axios from "axios";

const productDetails = () => {
  const { id } = useParams();
  // State variables to store the product data and loading state.
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect hook to fetch product details when the "id" changes or component mounts.
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        // If data is still loading, display a loading message.
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          Loading....
        </h2>
      ) : (
        // Otherwise, display the product details and a button to go back to the dashboard.
        <div>
          <div className="product__details__container">
            <div className="product__image">
              <img src={product.image} alt={`${product.title}_image`} />
            </div>
            <div className="product__detail">
              <h2>{product.title}</h2>
              <p style={{ textAlign: "justify" }}>{product.description}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          </div>
          <button className="productdetails_btn" onClick={() => navigate("/")}>
            Go to Dashboard
          </button>
        </div>
      )}
    </>
  );
};

export default productDetails;
