import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import Product from "../product/Product";

const Dashboard = ({products, loading, handelSortWithPrice}) => {


  return (
    <div className="dashboard__container">
      <div>
        <select onChange={e=>handelSortWithPrice(e.target.value)}>
          <option value="">Sort with price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* If data is still loading, display a loading message */}
      {loading ? (
        <h2 style={{ textAlign: "center" }}>Loading....</h2>
      ) : (
        // Otherwise, display the list of products in the products container.
        <div className="products__container">
          {/* Loop through the "products" array and render the "Product" component for each product */}
          {products &&
            products.map((product) => <Product key={product.id} {...product} />)
          }
        </div>
      )}
    </div>
  );
};

export default Dashboard;
