import React, { useState, useEffect } from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";

const Home = () => {
  // State variables to store products, loading state, and sort order.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc")

  // Function to filter products based on text input.
  const filteringProduct = (text) => {
    if (text === "") {
      handelAPI()
    } else {
      const filterProduct = products.filter((products) =>
        products.title.toLowerCase().includes(text.toLowerCase())
      );
      setProducts(filterProduct);
    }
  };

  // Function to handle sorting products based on price
  const handelSortWithPrice = (order) =>{
    const sorted = [...products].sort((a,b)=>{
      if(order==="asc"){
        return a.price - b.price;
      }else if(order === "desc"){
        return b.price - a.price;
      }else{
        handelAPI()
      }
    })
    setProducts(sorted)
  }

  // Function to fetch products from the API and update the "products" state.
  const handelAPI = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error fetching data:", err);
      });
  };

  // useEffect hook to fetch products from the API when the component mounts.
  useEffect(() => {
    handelAPI();
  }, []);


  return (
    <div>
      {/* Render the Navbar component and pass the "filteringProduct" function as a prop. */}
      <Navbar filteringProduct={filteringProduct} />
      {/* Render the Dashboard component and pass "products", "loading", and "handelSortWithPrice" as props. */}
      <Dashboard products={products} loading={loading} handelSortWithPrice = {handelSortWithPrice}/>
    </div>
  );
};

export default Home;
